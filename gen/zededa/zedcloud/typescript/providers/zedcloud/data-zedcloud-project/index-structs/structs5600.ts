import * as cdktf from 'cdktf';
import { DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDesc,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImages,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModule,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfaces,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesList,
DataZedcloudProjectNetworkPolicyModulePolicyApps,
dataZedcloudProjectNetworkPolicyModulePolicyAppsToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAppsToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAppsList,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgent,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentToTerraform,
dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentToHclTerraform,
DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentList,
DataZedcloudProjectNetworkPolicyAzurePolicy,
dataZedcloudProjectNetworkPolicyAzurePolicyToTerraform,
dataZedcloudProjectNetworkPolicyAzurePolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyAzurePolicyList,
DataZedcloudProjectNetworkPolicyClusterPolicy,
dataZedcloudProjectNetworkPolicyClusterPolicyToTerraform,
dataZedcloudProjectNetworkPolicyClusterPolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyClusterPolicyList,
DataZedcloudProjectNetworkPolicyConfigurationLockPolicy,
dataZedcloudProjectNetworkPolicyConfigurationLockPolicyToTerraform,
dataZedcloudProjectNetworkPolicyConfigurationLockPolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyConfigurationLockPolicyList,
DataZedcloudProjectNetworkPolicyEdgeviewPolicy,
dataZedcloudProjectNetworkPolicyEdgeviewPolicyToTerraform,
dataZedcloudProjectNetworkPolicyEdgeviewPolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyEdgeviewPolicyList,
DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicy,
dataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyToTerraform,
dataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyList } from './structs5200'
import { DataZedcloudProjectNetworkPolicyRevisionList,
DataZedcloudProjectNetworkPolicyAppPolicy,
dataZedcloudProjectNetworkPolicyAppPolicyToTerraform,
dataZedcloudProjectNetworkPolicyAppPolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyAppPolicyList,
DataZedcloudProjectNetworkPolicyAttestationPolicy,
dataZedcloudProjectNetworkPolicyAttestationPolicyToTerraform,
dataZedcloudProjectNetworkPolicyAttestationPolicyToHclTerraform,
DataZedcloudProjectNetworkPolicyAttestationPolicyList } from './structs4800'
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner {
  /**
  * UI map: AppEditPage:IdentityPane:Category_Field, AppDetailsPage:IdentityPane:Category_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#company DataZedcloudProject#company}
  */
  readonly company?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Email_Field, AppDetailsPage:DeveloperPane:Email_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#email DataZedcloudProject#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#group DataZedcloudProject#group}
  */
  readonly group?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Name_Field, AppDetailsPage:DeveloperPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#user DataZedcloudProject#user}
  */
  readonly user?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Website_Field, AppDetailsPage:DeveloperPane:Website_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#website DataZedcloudProject#website}
  */
  readonly website?: string;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner | cdktf.IResolvable): any {
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


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner | cdktf.IResolvable): any {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner | cdktf.IResolvable | undefined) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions {
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions | cdktf.IResolvable | undefined) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources {
  /**
  * Name of the Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * Value of Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#value DataZedcloudProject#value}
  */
  readonly value?: string;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources | cdktf.IResolvable): any {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources | cdktf.IResolvable | undefined) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson {
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#ac_kind DataZedcloudProject#ac_kind}
  */
  readonly acKind: string;
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#ac_version DataZedcloudProject#ac_version}
  */
  readonly acVersion: string;
  /**
  * App (bundle) type. The correct values are: "APP_TYPE_UNSPECIFIED","APP_TYPE_VM","APP_TYPE_VM_RUNTIME","APP_TYPE_CONTAINER","APP_TYPE_MODULE", "APP_TYPE_DOCKER_COMPOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#app_type DataZedcloudProject#app_type}
  */
  readonly appType?: string;
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#cpu_pinning_enabled DataZedcloudProject#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deployment type for the app. The correct values are: "DEPLOYMENT_TYPE_UNSPECIFIED","DEPLOYMENT_TYPE_STAND_ALONE","DEPLOYMENT_TYPE_AZURE","DEPLOYMENT_TYPE_K3S","DEPLOYMENT_TYPE_AWS","DEPLOYMENT_TYPE_K3S_AZURE","DEPLOYMENT_TYPE_K3S_AWS","DEPLOYMENT_TYPE_VMWARE_VCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#deployment_type DataZedcloudProject#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * UI map: AppDetailsPage:IdentityPane:DescriptionField, AppMarketplacePage:AppCard:DescriptionField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * UI map: AppEditPage:IdentityPane:DISABLEVTPM_Field, AppDetailsPage:IdentityPane:DISABLEVTPM_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#disable_v_t_p_m DataZedcloudProject#disable_v_t_p_m}
  */
  readonly disableVTPM?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Title_Field, AppDetailsPage:IdentityPane:Title_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#display_name DataZedcloudProject#display_name}
  */
  readonly displayName?: string;
  /**
  * Docker compose tar image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#docker_compose_tar_image_name DataZedcloudProject#docker_compose_tar_image_name}
  */
  readonly dockerComposeTarImageName?: string;
  /**
  * Docker compose base64 encoded plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#docker_compose_yaml_text DataZedcloudProject#docker_compose_yaml_text}
  */
  readonly dockerComposeYamlText?: string;
  /**
  * UI map: AppEditPage:IdentityPane:ENABLEVMCONFIG_Field, AppDetailsPage:IdentityPane:ENABLEVMCONFIG_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#enable_oem_win_license_key DataZedcloudProject#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:VNC_Field, AppDetailsPage:IdentityPane:VNC_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#enablevnc DataZedcloudProject#enablevnc}
  */
  readonly enablevnc?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Name_Field, AppDetailsPage:IdentityPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * Size of persistent blank storage for runtime in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#persistent_runtime_size_bytes DataZedcloudProject#persistent_runtime_size_bytes}
  */
  readonly persistentRuntimeSizeBytes?: string;
  /**
  * Indicates the internal communication protocol to pass configuration between Zedcloud and docker-compose runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#runtime_protocol_version DataZedcloudProject#runtime_protocol_version}
  */
  readonly runtimeProtocolVersion?: string;
  /**
  * Indicates the version of container orchestration software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#runtime_version DataZedcloudProject#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * UI map: AppEditPage:IdentityPane:VM_Mode_Field, AppDetailsPage:IdentityPane:VM_Mode_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#vmmode DataZedcloudProject#vmmode}
  */
  readonly vmmode?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#configuration DataZedcloudProject#configuration}
  */
  readonly configuration?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration[] | cdktf.IResolvable;
  /**
  * container_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#container_detail DataZedcloudProject#container_detail}
  */
  readonly containerDetail?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail[] | cdktf.IResolvable;
  /**
  * desc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#desc DataZedcloudProject#desc}
  */
  readonly desc?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDesc[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#images DataZedcloudProject#images}
  */
  readonly images?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImages[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#interfaces DataZedcloudProject#interfaces}
  */
  readonly interfaces?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces[] | cdktf.IResolvable;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#module DataZedcloudProject#module}
  */
  readonly module?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModule[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#owner DataZedcloudProject#owner}
  */
  readonly owner?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#permissions DataZedcloudProject#permissions}
  */
  readonly permissions?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#resources DataZedcloudProject#resources}
  */
  readonly resources?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson | cdktf.IResolvable): any {
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
    disable_v_t_p_m: cdktf.booleanToTerraform(struct!.disableVTPM),
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
    configuration: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToTerraform, true)(struct!.configuration),
    container_detail: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToTerraform, true)(struct!.containerDetail),
    desc: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescToTerraform, true)(struct!.desc),
    images: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesToTerraform, true)(struct!.images),
    interfaces: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToTerraform, true)(struct!.interfaces),
    module: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleToTerraform, true)(struct!.module),
    owner: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToTerraform, true)(struct!.owner),
    permissions: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToTerraform, true)(struct!.permissions),
    resources: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToTerraform, true)(struct!.resources),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson | cdktf.IResolvable): any {
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
    disable_v_t_p_m: {
      value: cdktf.booleanToHclTerraform(struct!.disableVTPM),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList",
    },
    container_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailToHclTerraform, true)(struct!.containerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList",
    },
    desc: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescToHclTerraform, true)(struct!.desc),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescList",
    },
    images: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList",
    },
    module: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleToHclTerraform, true)(struct!.module),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleList",
    },
    owner: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerList",
    },
    permissions: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList",
    },
    resources: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson | cdktf.IResolvable | undefined {
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
    if (this._disableVTPM !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVTPM = this._disableVTPM;
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

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKind = undefined;
      this._acVersion = undefined;
      this._appType = undefined;
      this._cpuPinningEnabled = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._disableVTPM = undefined;
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
      this._disableVTPM = value.disableVTPM;
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

  // disable_v_t_p_m - computed: false, optional: true, required: false
  private _disableVTPM?: boolean | cdktf.IResolvable; 
  public get disableVTPM() {
    return this.getBooleanAttribute('disable_v_t_p_m');
  }
  public set disableVTPM(value: boolean | cdktf.IResolvable) {
    this._disableVTPM = value;
  }
  public resetDisableVTPM() {
    this._disableVTPM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVTPMInput() {
    return this._disableVTPM;
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
  private _configuration = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonConfiguration[] | cdktf.IResolvable) {
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
  private _containerDetail = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }
  public putContainerDetail(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonContainerDetail[] | cdktf.IResolvable) {
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
  private _desc = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }
  public putDesc(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonDesc[] | cdktf.IResolvable) {
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
  private _images = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonImages[] | cdktf.IResolvable) {
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
  private _interfaces = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonInterfaces[] | cdktf.IResolvable) {
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
  private _module = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonModule[] | cdktf.IResolvable) {
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
  private _owner = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOwner[] | cdktf.IResolvable) {
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
  private _permissions = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonPermissions[] | cdktf.IResolvable) {
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
  private _resources = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonResources[] | cdktf.IResolvable) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail {
  /**
  * Relation with child and parent object exists or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#reference_exists DataZedcloudProject#reference_exists}
  */
  readonly referenceExists?: boolean | cdktf.IResolvable;
  /**
  * Update required flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#update_available DataZedcloudProject#update_available}
  */
  readonly updateAvailable?: boolean | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_exists: cdktf.booleanToTerraform(struct!.referenceExists),
    update_available: cdktf.booleanToTerraform(struct!.updateAvailable),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail | cdktf.IResolvable): any {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail | cdktf.IResolvable | undefined) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub {
  /**
  * User defined name of the edge app, unique across the enterprise. Once app name is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#app_id DataZedcloudProject#app_id}
  */
  readonly appId?: string;
  /**
  * Current version of the attached bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#app_version DataZedcloudProject#app_version}
  */
  readonly appVersion?: string;
  /**
  * user defined cpus for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#cpus DataZedcloudProject#cpus}
  */
  readonly cpus: number;
  /**
  * Detailed description of the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * user defined memory for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#memory DataZedcloudProject#memory}
  */
  readonly memory: number;
  /**
  * User defined name of the edge application, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name_app_part DataZedcloudProject#name_app_part}
  */
  readonly nameAppPart?: string;
  /**
  * User provided name part  for the auto deployed app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name_project_part DataZedcloudProject#name_project_part}
  */
  readonly nameProjectPart?: string;
  /**
  * app naming scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#naming_scheme DataZedcloudProject#naming_scheme}
  */
  readonly namingScheme?: string;
  /**
  * user defined network options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#networks DataZedcloudProject#networks}
  */
  readonly networks: number;
  /**
  * origin of object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#origin_type DataZedcloudProject#origin_type}
  */
  readonly originType: string;
  /**
  * start delay is the time in seconds EVE should wait after boot before starting the application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#start_delay_in_seconds DataZedcloudProject#start_delay_in_seconds}
  */
  readonly startDelayInSeconds?: number;
  /**
  * user defined storage for bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#storage DataZedcloudProject#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the edge application. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#title DataZedcloudProject#title}
  */
  readonly title: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#interfaces DataZedcloudProject#interfaces}
  */
  readonly interfaces?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfaces[] | cdktf.IResolvable;
  /**
  * manifest_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#manifest_json DataZedcloudProject#manifest_json}
  */
  readonly manifestJson?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson[] | cdktf.IResolvable;
  /**
  * parent_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#parent_detail DataZedcloudProject#parent_detail}
  */
  readonly parentDetail?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub | cdktf.IResolvable): any {
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
    interfaces: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesToTerraform, true)(struct!.interfaces),
    manifest_json: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonToTerraform, true)(struct!.manifestJson),
    parent_detail: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailToTerraform, true)(struct!.parentDetail),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesList",
    },
    manifest_json: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonToHclTerraform, true)(struct!.manifestJson),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonList",
    },
    parent_detail: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailToHclTerraform, true)(struct!.parentDetail),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub | cdktf.IResolvable | undefined) {
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
  private _interfaces = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubInterfaces[] | cdktf.IResolvable) {
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
  private _manifestJson = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJsonList(this, "manifest_json", false);
  public get manifestJson() {
    return this._manifestJson;
  }
  public putManifestJson(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubManifestJson[] | cdktf.IResolvable) {
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
  private _parentDetail = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }
  public putParentDetail(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubParentDetail[] | cdktf.IResolvable) {
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

export class DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicyMetrics {
  /**
  * Mapping of queries variable keys and value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#queries DataZedcloudProject#queries}
  */
  readonly queries?: { [key: string]: string };
  /**
  * Mapping of results variable keys and value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#results DataZedcloudProject#results}
  */
  readonly results?: { [key: string]: string };
}

export function dataZedcloudProjectNetworkPolicyModulePolicyMetricsToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queries),
    results: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.results),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyMetricsToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicyMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    results: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.results),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyModulePolicyMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicyMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._results !== undefined) {
      hasAnyValues = true;
      internalValueResult.results = this._results;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicyMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queries = undefined;
      this._results = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queries = value.queries;
      this._results = value.results;
    }
  }

  // queries - computed: false, optional: true, required: false
  private _queries?: { [key: string]: string }; 
  public get queries() {
    return this.getStringMapAttribute('queries');
  }
  public set queries(value: { [key: string]: string }) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // results - computed: false, optional: true, required: false
  private _results?: { [key: string]: string }; 
  public get results() {
    return this.getStringMapAttribute('results');
  }
  public set results(value: { [key: string]: string }) {
    this._results = value;
  }
  public resetResults() {
    this._results = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsInput() {
    return this._results;
  }
}

export class DataZedcloudProjectNetworkPolicyModulePolicyMetricsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicyMetrics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyMetricsOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyModulePolicy {
  /**
  * etag for deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#etag DataZedcloudProject#etag}
  */
  readonly etag?: string;
  /**
  * Mapping of label variable keys and value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#labels DataZedcloudProject#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * deployment priority of module manifest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#priority DataZedcloudProject#priority}
  */
  readonly priority: number;
  /**
  * Mapping of routes variable keys and value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#routes DataZedcloudProject#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * target condition for deployment that matches single device or group of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#target_condition DataZedcloudProject#target_condition}
  */
  readonly targetCondition?: string;
  /**
  * target condition for deployment that matches single device or group of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#target_condition_new DataZedcloudProject#target_condition_new}
  */
  readonly targetConditionNew?: { [key: string]: string };
  /**
  * apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#apps DataZedcloudProject#apps}
  */
  readonly apps: DataZedcloudProjectNetworkPolicyModulePolicyApps[] | cdktf.IResolvable;
  /**
  * azure_edge_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#azure_edge_agent DataZedcloudProject#azure_edge_agent}
  */
  readonly azureEdgeAgent?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgent[] | cdktf.IResolvable;
  /**
  * azure_edge_hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#azure_edge_hub DataZedcloudProject#azure_edge_hub}
  */
  readonly azureEdgeHub?: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#metrics DataZedcloudProject#metrics}
  */
  readonly metrics?: DataZedcloudProjectNetworkPolicyModulePolicyMetrics[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyModulePolicyToTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etag: cdktf.stringToTerraform(struct!.etag),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    priority: cdktf.numberToTerraform(struct!.priority),
    routes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routes),
    target_condition: cdktf.stringToTerraform(struct!.targetCondition),
    target_condition_new: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetConditionNew),
    apps: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAppsToTerraform, true)(struct!.apps),
    azure_edge_agent: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentToTerraform, true)(struct!.azureEdgeAgent),
    azure_edge_hub: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubToTerraform, true)(struct!.azureEdgeHub),
    metrics: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyMetricsToTerraform, true)(struct!.metrics),
  }
}


export function dataZedcloudProjectNetworkPolicyModulePolicyToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyModulePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_condition: {
      value: cdktf.stringToHclTerraform(struct!.targetCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_condition_new: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targetConditionNew),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    apps: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAppsToHclTerraform, true)(struct!.apps),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAppsList",
    },
    azure_edge_agent: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentToHclTerraform, true)(struct!.azureEdgeAgent),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentList",
    },
    azure_edge_hub: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubToHclTerraform, true)(struct!.azureEdgeHub),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubList",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyModulePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyModulePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._targetCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCondition = this._targetCondition;
    }
    if (this._targetConditionNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConditionNew = this._targetConditionNew;
    }
    if (this._apps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps?.internalValue;
    }
    if (this._azureEdgeAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEdgeAgent = this._azureEdgeAgent?.internalValue;
    }
    if (this._azureEdgeHub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEdgeHub = this._azureEdgeHub?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyModulePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etag = undefined;
      this._labels = undefined;
      this._priority = undefined;
      this._routes = undefined;
      this._targetCondition = undefined;
      this._targetConditionNew = undefined;
      this._apps.internalValue = undefined;
      this._azureEdgeAgent.internalValue = undefined;
      this._azureEdgeHub.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etag = value.etag;
      this._labels = value.labels;
      this._priority = value.priority;
      this._routes = value.routes;
      this._targetCondition = value.targetCondition;
      this._targetConditionNew = value.targetConditionNew;
      this._apps.internalValue = value.apps;
      this._azureEdgeAgent.internalValue = value.azureEdgeAgent;
      this._azureEdgeHub.internalValue = value.azureEdgeHub;
      this._metrics.internalValue = value.metrics;
    }
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // target_condition - computed: false, optional: true, required: false
  private _targetCondition?: string; 
  public get targetCondition() {
    return this.getStringAttribute('target_condition');
  }
  public set targetCondition(value: string) {
    this._targetCondition = value;
  }
  public resetTargetCondition() {
    this._targetCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConditionInput() {
    return this._targetCondition;
  }

  // target_condition_new - computed: false, optional: true, required: false
  private _targetConditionNew?: { [key: string]: string }; 
  public get targetConditionNew() {
    return this.getStringMapAttribute('target_condition_new');
  }
  public set targetConditionNew(value: { [key: string]: string }) {
    this._targetConditionNew = value;
  }
  public resetTargetConditionNew() {
    this._targetConditionNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConditionNewInput() {
    return this._targetConditionNew;
  }

  // apps - computed: false, optional: false, required: true
  private _apps = new DataZedcloudProjectNetworkPolicyModulePolicyAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }
  public putApps(value: DataZedcloudProjectNetworkPolicyModulePolicyApps[] | cdktf.IResolvable) {
    this._apps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps.internalValue;
  }

  // azure_edge_agent - computed: false, optional: true, required: false
  private _azureEdgeAgent = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgentList(this, "azure_edge_agent", false);
  public get azureEdgeAgent() {
    return this._azureEdgeAgent;
  }
  public putAzureEdgeAgent(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeAgent[] | cdktf.IResolvable) {
    this._azureEdgeAgent.internalValue = value;
  }
  public resetAzureEdgeAgent() {
    this._azureEdgeAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEdgeAgentInput() {
    return this._azureEdgeAgent.internalValue;
  }

  // azure_edge_hub - computed: false, optional: true, required: false
  private _azureEdgeHub = new DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHubList(this, "azure_edge_hub", false);
  public get azureEdgeHub() {
    return this._azureEdgeHub;
  }
  public putAzureEdgeHub(value: DataZedcloudProjectNetworkPolicyModulePolicyAzureEdgeHub[] | cdktf.IResolvable) {
    this._azureEdgeHub.internalValue = value;
  }
  public resetAzureEdgeHub() {
    this._azureEdgeHub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEdgeHubInput() {
    return this._azureEdgeHub.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataZedcloudProjectNetworkPolicyModulePolicyMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataZedcloudProjectNetworkPolicyModulePolicyMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyModulePolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyModulePolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyModulePolicyOutputReference {
    return new DataZedcloudProjectNetworkPolicyModulePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSp {
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSp | undefined) {
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLisp {
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLisp | undefined) {
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
  private _sp = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevision {
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevision | undefined) {
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#addrs DataZedcloudProject#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#hostname DataZedcloudProject#hostname}
  */
  readonly hostname?: string;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster {
  /**
  * Id of the designated Edge Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#designated_node_id DataZedcloudProject#designated_node_id}
  */
  readonly designatedNodeId?: string;
  /**
  * Id of the Edge Node Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#id DataZedcloudProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    designated_node_id: cdktf.stringToTerraform(struct!.designatedNodeId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    designated_node_id: {
      value: cdktf.stringToHclTerraform(struct!.designatedNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._designatedNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.designatedNodeId = this._designatedNodeId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._designatedNodeId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._designatedNodeId = value.designatedNodeId;
      this._id = value.id;
    }
  }

  // designated_node_id - computed: false, optional: true, required: false
  private _designatedNodeId?: string; 
  public get designatedNodeId() {
    return this.getStringAttribute('designated_node_id');
  }
  public set designatedNodeId(value: string) {
    this._designatedNodeId = value;
  }
  public resetDesignatedNodeId() {
    this._designatedNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedNodeIdInput() {
    return this._designatedNodeId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#end DataZedcloudProject#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#start DataZedcloudProject#start}
  */
  readonly start?: string;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp {
  /**
  * IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#dns DataZedcloudProject#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#domain DataZedcloudProject#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#gateway DataZedcloudProject#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#mask DataZedcloudProject#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#ntp DataZedcloudProject#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#subnet DataZedcloudProject#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#dhcp_range DataZedcloudProject#dhcp_range}
  */
  readonly dhcpRange?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp {
  /**
  * Service credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#credential DataZedcloudProject#credential}
  */
  readonly credential?: string;
  /**
  * Service name/ service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name_or_ip DataZedcloudProject#name_or_ip}
  */
  readonly nameOrIp?: string;
  /**
  * Service Point Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | cdktf.IResolvable): any {
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
      this._type = undefined;
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
      this._type = value.type;
    }
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: true, required: false
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  public resetNameOrIp() {
    this._nameOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp {
  /**
  * Allocate flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#allocate DataZedcloudProject#allocate}
  */
  readonly allocate?: boolean | cdktf.IResolvable;
  /**
  * Allocation Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#allocationprefix DataZedcloudProject#allocationprefix}
  */
  readonly allocationprefix?: string;
  /**
  * Allocation Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#allocationprefixlen DataZedcloudProject#allocationprefixlen}
  */
  readonly allocationprefixlen?: number;
  /**
  * Export Private flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#exportprivate DataZedcloudProject#exportprivate}
  */
  readonly exportprivate?: boolean | cdktf.IResolvable;
  /**
  * lisp id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#lispiid DataZedcloudProject#lispiid}
  */
  readonly lispiid?: number;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#sp DataZedcloudProject#sp}
  */
  readonly sp?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate: cdktf.booleanToTerraform(struct!.allocate),
    allocationprefix: cdktf.stringToTerraform(struct!.allocationprefix),
    allocationprefixlen: cdktf.numberToTerraform(struct!.allocationprefixlen),
    exportprivate: cdktf.booleanToTerraform(struct!.exportprivate),
    lispiid: cdktf.numberToTerraform(struct!.lispiid),
    sp: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToTerraform, true)(struct!.sp),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate: {
      value: cdktf.booleanToHclTerraform(struct!.allocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocationprefix: {
      value: cdktf.stringToHclTerraform(struct!.allocationprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocationprefixlen: {
      value: cdktf.numberToHclTerraform(struct!.allocationprefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exportprivate: {
      value: cdktf.booleanToHclTerraform(struct!.exportprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lispiid: {
      value: cdktf.numberToHclTerraform(struct!.lispiid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate;
    }
    if (this._allocationprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefix = this._allocationprefix;
    }
    if (this._allocationprefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefixlen = this._allocationprefixlen;
    }
    if (this._exportprivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportprivate = this._exportprivate;
    }
    if (this._lispiid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispiid = this._lispiid;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocate = undefined;
      this._allocationprefix = undefined;
      this._allocationprefixlen = undefined;
      this._exportprivate = undefined;
      this._lispiid = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocate = value.allocate;
      this._allocationprefix = value.allocationprefix;
      this._allocationprefixlen = value.allocationprefixlen;
      this._exportprivate = value.exportprivate;
      this._lispiid = value.lispiid;
      this._sp.internalValue = value.sp;
    }
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate?: boolean | cdktf.IResolvable; 
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }
  public set allocate(value: boolean | cdktf.IResolvable) {
    this._allocate = value;
  }
  public resetAllocate() {
    this._allocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate;
  }

  // allocationprefix - computed: false, optional: true, required: false
  private _allocationprefix?: string; 
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }
  public set allocationprefix(value: string) {
    this._allocationprefix = value;
  }
  public resetAllocationprefix() {
    this._allocationprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixInput() {
    return this._allocationprefix;
  }

  // allocationprefixlen - computed: false, optional: true, required: false
  private _allocationprefixlen?: number; 
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }
  public set allocationprefixlen(value: number) {
    this._allocationprefixlen = value;
  }
  public resetAllocationprefixlen() {
    this._allocationprefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixlenInput() {
    return this._allocationprefixlen;
  }

  // exportprivate - computed: false, optional: true, required: false
  private _exportprivate?: boolean | cdktf.IResolvable; 
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }
  public set exportprivate(value: boolean | cdktf.IResolvable) {
    this._exportprivate = value;
  }
  public resetExportprivate() {
    this._exportprivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportprivateInput() {
    return this._exportprivate;
  }

  // lispiid - computed: false, optional: true, required: false
  private _lispiid?: number; 
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }
  public set lispiid(value: number) {
    this._lispiid = value;
  }
  public resetLispiid() {
    this._lispiid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispiidInput() {
    return this._lispiid;
  }

  // sp - computed: false, optional: true, required: false
  private _sp = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
  public putSp(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  public resetSp() {
    this._sp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque {
  /**
  * base64 encoded string of opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#oconfig DataZedcloudProject#oconfig}
  */
  readonly oconfig?: string;
  /**
  * type of Opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * lisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#lisp DataZedcloudProject#lisp}
  */
  readonly lisp?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    type: cdktf.stringToTerraform(struct!.type),
    lisp: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispToTerraform, true)(struct!.lisp),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
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
    lisp: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispToHclTerraform, true)(struct!.lisp),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lisp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lisp = this._lisp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oconfig = undefined;
      this._type = undefined;
      this._lisp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oconfig = value.oconfig;
      this._type = value.type;
      this._lisp.internalValue = value.lisp;
    }
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
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

  // lisp - computed: false, optional: true, required: false
  private _lisp = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }
  public putLisp(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueLisp[] | cdktf.IResolvable) {
    this._lisp.internalValue = value;
  }
  public resetLisp() {
    this._lisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInput() {
    return this._lisp.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint {
  /**
  * IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#host DataZedcloudProject#host}
  */
  readonly host?: string;
  /**
  * TCP port required for CONNECTIVITY_PROBE_METHOD_TCP.
  * Leave empty for CONNECTIVITY_PROBE_METHOD_ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#port DataZedcloudProject#port}
  */
  readonly port?: number;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig {
  /**
  * Method to use to determine the connectivity status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#probe_method DataZedcloudProject#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * probe_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#probe_endpoint DataZedcloudProject#probe_endpoint}
  */
  readonly probeEndpoint?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    probe_endpoint: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform, true)(struct!.probeEndpoint),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_method: {
      value: cdktf.stringToHclTerraform(struct!.probeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_endpoint: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform, true)(struct!.probeEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMethod = this._probeMethod;
    }
    if (this._probeEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeEndpoint = this._probeEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeMethod = undefined;
      this._probeEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeMethod = value.probeMethod;
      this._probeEndpoint.internalValue = value.probeEndpoint;
    }
  }

  // probe_method - computed: false, optional: true, required: false
  private _probeMethod?: string; 
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
  public set probeMethod(value: string) {
    this._probeMethod = value;
  }
  public resetProbeMethod() {
    this._probeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeMethodInput() {
    return this._probeMethod;
  }

  // probe_endpoint - computed: false, optional: true, required: false
  private _probeEndpoint = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList(this, "probe_endpoint", false);
  public get probeEndpoint() {
    return this._probeEndpoint;
  }
  public putProbeEndpoint(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable) {
    this._probeEndpoint.internalValue = value;
  }
  public resetProbeEndpoint() {
    this._probeEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeEndpointInput() {
    return this._probeEndpoint.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig {
  /**
  * Enable gateway ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#enable_gateway_ping DataZedcloudProject#enable_gateway_ping}
  */
  readonly enableGatewayPing?: boolean | cdktf.IResolvable;
  /**
  * Ping max cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#ping_max_cost DataZedcloudProject#ping_max_cost}
  */
  readonly pingMaxCost?: number;
  /**
  * Prefer lower cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#prefer_lower_cost DataZedcloudProject#prefer_lower_cost}
  */
  readonly preferLowerCost?: boolean | cdktf.IResolvable;
  /**
  * Prefer stronger WWAN signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#prefer_stronger_wwan_signal DataZedcloudProject#prefer_stronger_wwan_signal}
  */
  readonly preferStrongerWwanSignal?: boolean | cdktf.IResolvable;
  /**
  * custom_probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#custom_probe_config DataZedcloudProject#custom_probe_config}
  */
  readonly customProbeConfig?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_gateway_ping: cdktf.booleanToTerraform(struct!.enableGatewayPing),
    ping_max_cost: cdktf.numberToTerraform(struct!.pingMaxCost),
    prefer_lower_cost: cdktf.booleanToTerraform(struct!.preferLowerCost),
    prefer_stronger_wwan_signal: cdktf.booleanToTerraform(struct!.preferStrongerWwanSignal),
    custom_probe_config: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToTerraform, true)(struct!.customProbeConfig),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_gateway_ping: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_max_cost: {
      value: cdktf.numberToHclTerraform(struct!.pingMaxCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_lower_cost: {
      value: cdktf.booleanToHclTerraform(struct!.preferLowerCost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_stronger_wwan_signal: {
      value: cdktf.booleanToHclTerraform(struct!.preferStrongerWwanSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_probe_config: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigToHclTerraform, true)(struct!.customProbeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGatewayPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayPing = this._enableGatewayPing;
    }
    if (this._pingMaxCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingMaxCost = this._pingMaxCost;
    }
    if (this._preferLowerCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLowerCost = this._preferLowerCost;
    }
    if (this._preferStrongerWwanSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferStrongerWwanSignal = this._preferStrongerWwanSignal;
    }
    if (this._customProbeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbeConfig = this._customProbeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableGatewayPing = undefined;
      this._pingMaxCost = undefined;
      this._preferLowerCost = undefined;
      this._preferStrongerWwanSignal = undefined;
      this._customProbeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableGatewayPing = value.enableGatewayPing;
      this._pingMaxCost = value.pingMaxCost;
      this._preferLowerCost = value.preferLowerCost;
      this._preferStrongerWwanSignal = value.preferStrongerWwanSignal;
      this._customProbeConfig.internalValue = value.customProbeConfig;
    }
  }

  // enable_gateway_ping - computed: false, optional: true, required: false
  private _enableGatewayPing?: boolean | cdktf.IResolvable; 
  public get enableGatewayPing() {
    return this.getBooleanAttribute('enable_gateway_ping');
  }
  public set enableGatewayPing(value: boolean | cdktf.IResolvable) {
    this._enableGatewayPing = value;
  }
  public resetEnableGatewayPing() {
    this._enableGatewayPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayPingInput() {
    return this._enableGatewayPing;
  }

  // ping_max_cost - computed: false, optional: true, required: false
  private _pingMaxCost?: number; 
  public get pingMaxCost() {
    return this.getNumberAttribute('ping_max_cost');
  }
  public set pingMaxCost(value: number) {
    this._pingMaxCost = value;
  }
  public resetPingMaxCost() {
    this._pingMaxCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingMaxCostInput() {
    return this._pingMaxCost;
  }

  // prefer_lower_cost - computed: false, optional: true, required: false
  private _preferLowerCost?: boolean | cdktf.IResolvable; 
  public get preferLowerCost() {
    return this.getBooleanAttribute('prefer_lower_cost');
  }
  public set preferLowerCost(value: boolean | cdktf.IResolvable) {
    this._preferLowerCost = value;
  }
  public resetPreferLowerCost() {
    this._preferLowerCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLowerCostInput() {
    return this._preferLowerCost;
  }

  // prefer_stronger_wwan_signal - computed: false, optional: true, required: false
  private _preferStrongerWwanSignal?: boolean | cdktf.IResolvable; 
  public get preferStrongerWwanSignal() {
    return this.getBooleanAttribute('prefer_stronger_wwan_signal');
  }
  public set preferStrongerWwanSignal(value: boolean | cdktf.IResolvable) {
    this._preferStrongerWwanSignal = value;
  }
  public resetPreferStrongerWwanSignal() {
    this._preferStrongerWwanSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStrongerWwanSignalInput() {
    return this._preferStrongerWwanSignal;
  }

  // custom_probe_config - computed: false, optional: true, required: false
  private _customProbeConfig = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfigList(this, "custom_probe_config", false);
  public get customProbeConfig() {
    return this._customProbeConfig;
  }
  public putCustomProbeConfig(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable) {
    this._customProbeConfig.internalValue = value;
  }
  public resetCustomProbeConfig() {
    this._customProbeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbeConfigInput() {
    return this._customProbeConfig.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#gateway DataZedcloudProject#gateway}
  */
  readonly gateway?: string;
  /**
  * Output Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#output_port DataZedcloudProject#output_port}
  */
  readonly outputPort?: string;
  /**
  * IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#prefix DataZedcloudProject#prefix}
  */
  readonly prefix?: string;
  /**
  * probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#probe_config DataZedcloudProject#probe_config}
  */
  readonly probeConfig?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    output_port: cdktf.stringToTerraform(struct!.outputPort),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    probe_config: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToTerraform, true)(struct!.probeConfig),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port: {
      value: cdktf.stringToHclTerraform(struct!.outputPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_config: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigToHclTerraform, true)(struct!.probeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._outputPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPort = this._outputPort;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._probeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeConfig = this._probeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._outputPort = undefined;
      this._prefix = undefined;
      this._probeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._outputPort = value.outputPort;
      this._prefix = value.prefix;
      this._probeConfig.internalValue = value.probeConfig;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // output_port - computed: false, optional: true, required: false
  private _outputPort?: string; 
  public get outputPort() {
    return this.getStringAttribute('output_port');
  }
  public set outputPort(value: string) {
    this._outputPort = value;
  }
  public resetOutputPort() {
    this._outputPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortInput() {
    return this._outputPort;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // probe_config - computed: false, optional: true, required: false
  private _probeConfig = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfigList(this, "probe_config", false);
  public get probeConfig() {
    return this._probeConfig;
  }
  public putProbeConfig(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesProbeConfig[] | cdktf.IResolvable) {
    this._probeConfig.internalValue = value;
  }
  public resetProbeConfig() {
    this._probeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigInput() {
    return this._probeConfig.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig {
  /**
  * ID of the Cluster in which the network instance is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#cluster_id DataZedcloudProject#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Detailed description of the network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * Flag to indicate if this is the default network instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#device_default DataZedcloudProject#device_default}
  */
  readonly deviceDefault?: boolean | cdktf.IResolvable;
  /**
  * ID of the device on which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#device_id DataZedcloudProject#device_id}
  */
  readonly deviceId?: string;
  /**
  * Deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#dhcp DataZedcloudProject#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Kind of Network Instance:
  * NETWORK_INSTANCE_KIND_UNSPECIFIED
  * NETWORK_INSTANCE_KIND_TRANSPARENT
  * NETWORK_INSTANCE_KIND_SWITCH
  * NETWORK_INSTANCE_KIND_LOCAL
  * NETWORK_INSTANCE_KIND_CLOUD
  * NETWORK_INSTANCE_KIND_MESH
  * NETWORK_INSTANCE_KIND_HONEYPOT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#kind DataZedcloudProject#kind}
  */
  readonly kind: string;
  /**
  * Maximum transmission unit (MTU) to set for the network instance and all application interfaces connected to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#mtu DataZedcloudProject#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network instance, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name: string;
  /**
  * id of the network policy to be attached to this network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#network_policy_id DataZedcloudProject#network_policy_id}
  */
  readonly networkPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#oconfig DataZedcloudProject#oconfig}
  */
  readonly oconfig?: string;
  /**
  * name of port mapping in the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#port DataZedcloudProject#port}
  */
  readonly port?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#port_tags DataZedcloudProject#port_tags}
  */
  readonly portTags?: { [key: string]: string };
  /**
  * id of the project in which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#project_id DataZedcloudProject#project_id}
  */
  readonly projectId?: string;
  /**
  * Automatically propagate connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#propagate_connected_routes DataZedcloudProject#propagate_connected_routes}
  */
  readonly propagateConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#tags DataZedcloudProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the network instance. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#title DataZedcloudProject#title}
  */
  readonly title: string;
  /**
  * Type of DHCP for this Network Instance:
  * NETWORK_INSTANCE_DHCP_TYPE_V4
  * NETWORK_INSTANCE_DHCP_TYPE_V6
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOEID
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV4
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#dns_list DataZedcloudProject#dns_list}
  */
  readonly dnsList?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct[] | cdktf.IResolvable;
  /**
  * edge_node_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#edge_node_cluster DataZedcloudProject#edge_node_cluster}
  */
  readonly edgeNodeCluster?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#ip DataZedcloudProject#ip}
  */
  readonly ip?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#opaque DataZedcloudProject#opaque}
  */
  readonly opaque?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#static_routes DataZedcloudProject#static_routes}
  */
  readonly staticRoutes?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    description: cdktf.stringToTerraform(struct!.description),
    device_default: cdktf.booleanToTerraform(struct!.deviceDefault),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    network_policy_id: cdktf.stringToTerraform(struct!.networkPolicyId),
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    port: cdktf.stringToTerraform(struct!.port),
    port_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portTags),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    propagate_connected_routes: cdktf.booleanToTerraform(struct!.propagateConnectedRoutes),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    dns_list: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructToTerraform, true)(struct!.dnsList),
    edge_node_cluster: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToTerraform, true)(struct!.edgeNodeCluster),
    ip: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpToTerraform, true)(struct!.ip),
    opaque: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueToTerraform, true)(struct!.opaque),
    static_routes: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
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
    device_default: {
      value: cdktf.booleanToHclTerraform(struct!.deviceDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    network_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_connected_routes: {
      value: cdktf.booleanToHclTerraform(struct!.propagateConnectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructList",
    },
    edge_node_cluster: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterToHclTerraform, true)(struct!.edgeNodeCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList",
    },
    ip: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpList",
    },
    opaque: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueToHclTerraform, true)(struct!.opaque),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueList",
    },
    static_routes: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefault = this._deviceDefault;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTags = this._portTags;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propagateConnectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateConnectedRoutes = this._propagateConnectedRoutes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._edgeNodeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeNodeCluster = this._edgeNodeCluster?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._opaque?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaque = this._opaque?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._description = undefined;
      this._deviceDefault = undefined;
      this._deviceId = undefined;
      this._dhcp = undefined;
      this._kind = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._networkPolicyId = undefined;
      this._oconfig = undefined;
      this._port = undefined;
      this._portTags = undefined;
      this._projectId = undefined;
      this._propagateConnectedRoutes = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._type = undefined;
      this._dnsList.internalValue = undefined;
      this._edgeNodeCluster.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._opaque.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._description = value.description;
      this._deviceDefault = value.deviceDefault;
      this._deviceId = value.deviceId;
      this._dhcp = value.dhcp;
      this._kind = value.kind;
      this._mtu = value.mtu;
      this._name = value.name;
      this._networkPolicyId = value.networkPolicyId;
      this._oconfig = value.oconfig;
      this._port = value.port;
      this._portTags = value.portTags;
      this._projectId = value.projectId;
      this._propagateConnectedRoutes = value.propagateConnectedRoutes;
      this._tags = value.tags;
      this._title = value.title;
      this._type = value.type;
      this._dnsList.internalValue = value.dnsList;
      this._edgeNodeCluster.internalValue = value.edgeNodeCluster;
      this._ip.internalValue = value.ip;
      this._opaque.internalValue = value.opaque;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
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

  // device_default - computed: false, optional: true, required: false
  private _deviceDefault?: boolean | cdktf.IResolvable; 
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }
  public set deviceDefault(value: boolean | cdktf.IResolvable) {
    this._deviceDefault = value;
  }
  public resetDeviceDefault() {
    this._deviceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefaultInput() {
    return this._deviceDefault;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_tags - computed: false, optional: true, required: false
  private _portTags?: { [key: string]: string }; 
  public get portTags() {
    return this.getStringMapAttribute('port_tags');
  }
  public set portTags(value: { [key: string]: string }) {
    this._portTags = value;
  }
  public resetPortTags() {
    this._portTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTagsInput() {
    return this._portTags;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // propagate_connected_routes - computed: false, optional: true, required: false
  private _propagateConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }
  public set propagateConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._propagateConnectedRoutes = value;
  }
  public resetPropagateConnectedRoutes() {
    this._propagateConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateConnectedRoutesInput() {
    return this._propagateConnectedRoutes;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
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

  // type - computed: true, optional: true, required: false
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

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // edge_node_cluster - computed: false, optional: true, required: false
  private _edgeNodeCluster = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }
  public putEdgeNodeCluster(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigEdgeNodeCluster[] | cdktf.IResolvable) {
    this._edgeNodeCluster.internalValue = value;
  }
  public resetEdgeNodeCluster() {
    this._edgeNodeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeClusterInput() {
    return this._edgeNodeCluster.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicyNetworkPolicy {
  /**
  * net_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#net_instance_config DataZedcloudProject#net_instance_config}
  */
  readonly netInstanceConfig: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyNetworkPolicyToTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net_instance_config: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigToTerraform, true)(struct!.netInstanceConfig),
  }
}


export function dataZedcloudProjectNetworkPolicyNetworkPolicyToHclTerraform(struct?: DataZedcloudProjectNetworkPolicyNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net_instance_config: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigToHclTerraform, true)(struct!.netInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicyNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netInstanceConfig = this._netInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicyNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._netInstanceConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._netInstanceConfig.internalValue = value.netInstanceConfig;
    }
  }

  // net_instance_config - computed: false, optional: false, required: true
  private _netInstanceConfig = new DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfigList(this, "net_instance_config", false);
  public get netInstanceConfig() {
    return this._netInstanceConfig;
  }
  public putNetInstanceConfig(value: DataZedcloudProjectNetworkPolicyNetworkPolicyNetInstanceConfig[] | cdktf.IResolvable) {
    this._netInstanceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netInstanceConfigInput() {
    return this._netInstanceConfig.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyNetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicyNetworkPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyNetworkPolicyOutputReference {
    return new DataZedcloudProjectNetworkPolicyNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectNetworkPolicy {
  /**
  * Mapping of policy  variable keys and policy variable values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#attr DataZedcloudProject#attr}
  */
  readonly attr?: { [key: string]: string };
  /**
  * Detailed description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#description DataZedcloudProject#description}
  */
  readonly description?: string;
  /**
  * User defined name of the policy request, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#name DataZedcloudProject#name}
  */
  readonly name?: string;
  /**
  * User defined title of the policy. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#title DataZedcloudProject#title}
  */
  readonly title?: string;
  /**
  * type of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#type DataZedcloudProject#type}
  */
  readonly type?: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#app_policy DataZedcloudProject#app_policy}
  */
  readonly appPolicy?: DataZedcloudProjectNetworkPolicyAppPolicy[] | cdktf.IResolvable;
  /**
  * attestation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#attestation_policy DataZedcloudProject#attestation_policy}
  */
  readonly attestationPolicy?: DataZedcloudProjectNetworkPolicyAttestationPolicy[] | cdktf.IResolvable;
  /**
  * azure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#azure_policy DataZedcloudProject#azure_policy}
  */
  readonly azurePolicy?: DataZedcloudProjectNetworkPolicyAzurePolicy[] | cdktf.IResolvable;
  /**
  * cluster_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#cluster_policy DataZedcloudProject#cluster_policy}
  */
  readonly clusterPolicy?: DataZedcloudProjectNetworkPolicyClusterPolicy[] | cdktf.IResolvable;
  /**
  * configuration_lock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#configuration_lock_policy DataZedcloudProject#configuration_lock_policy}
  */
  readonly configurationLockPolicy?: DataZedcloudProjectNetworkPolicyConfigurationLockPolicy[] | cdktf.IResolvable;
  /**
  * edgeview_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#edgeview_policy DataZedcloudProject#edgeview_policy}
  */
  readonly edgeviewPolicy?: DataZedcloudProjectNetworkPolicyEdgeviewPolicy[] | cdktf.IResolvable;
  /**
  * local_operator_console_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#local_operator_console_policy DataZedcloudProject#local_operator_console_policy}
  */
  readonly localOperatorConsolePolicy?: DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicy[] | cdktf.IResolvable;
  /**
  * module_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#module_policy DataZedcloudProject#module_policy}
  */
  readonly modulePolicy?: DataZedcloudProjectNetworkPolicyModulePolicy[] | cdktf.IResolvable;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#network_policy DataZedcloudProject#network_policy}
  */
  readonly networkPolicy?: DataZedcloudProjectNetworkPolicyNetworkPolicy[] | cdktf.IResolvable;
}

export function dataZedcloudProjectNetworkPolicyToTerraform(struct?: DataZedcloudProjectNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attr),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    app_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyAppPolicyToTerraform, true)(struct!.appPolicy),
    attestation_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyAttestationPolicyToTerraform, true)(struct!.attestationPolicy),
    azure_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyAzurePolicyToTerraform, true)(struct!.azurePolicy),
    cluster_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyClusterPolicyToTerraform, true)(struct!.clusterPolicy),
    configuration_lock_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyConfigurationLockPolicyToTerraform, true)(struct!.configurationLockPolicy),
    edgeview_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyEdgeviewPolicyToTerraform, true)(struct!.edgeviewPolicy),
    local_operator_console_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyToTerraform, true)(struct!.localOperatorConsolePolicy),
    module_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyModulePolicyToTerraform, true)(struct!.modulePolicy),
    network_policy: cdktf.listMapper(dataZedcloudProjectNetworkPolicyNetworkPolicyToTerraform, true)(struct!.networkPolicy),
  }
}


export function dataZedcloudProjectNetworkPolicyToHclTerraform(struct?: DataZedcloudProjectNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attr),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    app_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyAppPolicyToHclTerraform, true)(struct!.appPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyAppPolicyList",
    },
    attestation_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyAttestationPolicyToHclTerraform, true)(struct!.attestationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyAttestationPolicyList",
    },
    azure_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyAzurePolicyToHclTerraform, true)(struct!.azurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyAzurePolicyList",
    },
    cluster_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyClusterPolicyToHclTerraform, true)(struct!.clusterPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyClusterPolicyList",
    },
    configuration_lock_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyConfigurationLockPolicyToHclTerraform, true)(struct!.configurationLockPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyConfigurationLockPolicyList",
    },
    edgeview_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyEdgeviewPolicyToHclTerraform, true)(struct!.edgeviewPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyEdgeviewPolicyList",
    },
    local_operator_console_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyToHclTerraform, true)(struct!.localOperatorConsolePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyList",
    },
    module_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyModulePolicyToHclTerraform, true)(struct!.modulePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyModulePolicyList",
    },
    network_policy: {
      value: cdktf.listMapperHcl(dataZedcloudProjectNetworkPolicyNetworkPolicyToHclTerraform, true)(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudProjectNetworkPolicyNetworkPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._appPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPolicy = this._appPolicy?.internalValue;
    }
    if (this._attestationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationPolicy = this._attestationPolicy?.internalValue;
    }
    if (this._azurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePolicy = this._azurePolicy?.internalValue;
    }
    if (this._clusterPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPolicy = this._clusterPolicy?.internalValue;
    }
    if (this._configurationLockPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationLockPolicy = this._configurationLockPolicy?.internalValue;
    }
    if (this._edgeviewPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeviewPolicy = this._edgeviewPolicy?.internalValue;
    }
    if (this._localOperatorConsolePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOperatorConsolePolicy = this._localOperatorConsolePolicy?.internalValue;
    }
    if (this._modulePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulePolicy = this._modulePolicy?.internalValue;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attr = undefined;
      this._description = undefined;
      this._name = undefined;
      this._title = undefined;
      this._type = undefined;
      this._appPolicy.internalValue = undefined;
      this._attestationPolicy.internalValue = undefined;
      this._azurePolicy.internalValue = undefined;
      this._clusterPolicy.internalValue = undefined;
      this._configurationLockPolicy.internalValue = undefined;
      this._edgeviewPolicy.internalValue = undefined;
      this._localOperatorConsolePolicy.internalValue = undefined;
      this._modulePolicy.internalValue = undefined;
      this._networkPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attr = value.attr;
      this._description = value.description;
      this._name = value.name;
      this._title = value.title;
      this._type = value.type;
      this._appPolicy.internalValue = value.appPolicy;
      this._attestationPolicy.internalValue = value.attestationPolicy;
      this._azurePolicy.internalValue = value.azurePolicy;
      this._clusterPolicy.internalValue = value.clusterPolicy;
      this._configurationLockPolicy.internalValue = value.configurationLockPolicy;
      this._edgeviewPolicy.internalValue = value.edgeviewPolicy;
      this._localOperatorConsolePolicy.internalValue = value.localOperatorConsolePolicy;
      this._modulePolicy.internalValue = value.modulePolicy;
      this._networkPolicy.internalValue = value.networkPolicy;
    }
  }

  // attr - computed: false, optional: true, required: false
  private _attr?: { [key: string]: string }; 
  public get attr() {
    return this.getStringMapAttribute('attr');
  }
  public set attr(value: { [key: string]: string }) {
    this._attr = value;
  }
  public resetAttr() {
    this._attr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudProjectNetworkPolicyRevisionList(this, "revision", false);
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new DataZedcloudProjectNetworkPolicyAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: DataZedcloudProjectNetworkPolicyAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // attestation_policy - computed: false, optional: true, required: false
  private _attestationPolicy = new DataZedcloudProjectNetworkPolicyAttestationPolicyList(this, "attestation_policy", false);
  public get attestationPolicy() {
    return this._attestationPolicy;
  }
  public putAttestationPolicy(value: DataZedcloudProjectNetworkPolicyAttestationPolicy[] | cdktf.IResolvable) {
    this._attestationPolicy.internalValue = value;
  }
  public resetAttestationPolicy() {
    this._attestationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationPolicyInput() {
    return this._attestationPolicy.internalValue;
  }

  // azure_policy - computed: false, optional: true, required: false
  private _azurePolicy = new DataZedcloudProjectNetworkPolicyAzurePolicyList(this, "azure_policy", false);
  public get azurePolicy() {
    return this._azurePolicy;
  }
  public putAzurePolicy(value: DataZedcloudProjectNetworkPolicyAzurePolicy[] | cdktf.IResolvable) {
    this._azurePolicy.internalValue = value;
  }
  public resetAzurePolicy() {
    this._azurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePolicyInput() {
    return this._azurePolicy.internalValue;
  }

  // cluster_policy - computed: false, optional: true, required: false
  private _clusterPolicy = new DataZedcloudProjectNetworkPolicyClusterPolicyList(this, "cluster_policy", false);
  public get clusterPolicy() {
    return this._clusterPolicy;
  }
  public putClusterPolicy(value: DataZedcloudProjectNetworkPolicyClusterPolicy[] | cdktf.IResolvable) {
    this._clusterPolicy.internalValue = value;
  }
  public resetClusterPolicy() {
    this._clusterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPolicyInput() {
    return this._clusterPolicy.internalValue;
  }

  // configuration_lock_policy - computed: false, optional: true, required: false
  private _configurationLockPolicy = new DataZedcloudProjectNetworkPolicyConfigurationLockPolicyList(this, "configuration_lock_policy", false);
  public get configurationLockPolicy() {
    return this._configurationLockPolicy;
  }
  public putConfigurationLockPolicy(value: DataZedcloudProjectNetworkPolicyConfigurationLockPolicy[] | cdktf.IResolvable) {
    this._configurationLockPolicy.internalValue = value;
  }
  public resetConfigurationLockPolicy() {
    this._configurationLockPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationLockPolicyInput() {
    return this._configurationLockPolicy.internalValue;
  }

  // edgeview_policy - computed: false, optional: true, required: false
  private _edgeviewPolicy = new DataZedcloudProjectNetworkPolicyEdgeviewPolicyList(this, "edgeview_policy", false);
  public get edgeviewPolicy() {
    return this._edgeviewPolicy;
  }
  public putEdgeviewPolicy(value: DataZedcloudProjectNetworkPolicyEdgeviewPolicy[] | cdktf.IResolvable) {
    this._edgeviewPolicy.internalValue = value;
  }
  public resetEdgeviewPolicy() {
    this._edgeviewPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewPolicyInput() {
    return this._edgeviewPolicy.internalValue;
  }

  // local_operator_console_policy - computed: false, optional: true, required: false
  private _localOperatorConsolePolicy = new DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicyList(this, "local_operator_console_policy", false);
  public get localOperatorConsolePolicy() {
    return this._localOperatorConsolePolicy;
  }
  public putLocalOperatorConsolePolicy(value: DataZedcloudProjectNetworkPolicyLocalOperatorConsolePolicy[] | cdktf.IResolvable) {
    this._localOperatorConsolePolicy.internalValue = value;
  }
  public resetLocalOperatorConsolePolicy() {
    this._localOperatorConsolePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOperatorConsolePolicyInput() {
    return this._localOperatorConsolePolicy.internalValue;
  }

  // module_policy - computed: false, optional: true, required: false
  private _modulePolicy = new DataZedcloudProjectNetworkPolicyModulePolicyList(this, "module_policy", false);
  public get modulePolicy() {
    return this._modulePolicy;
  }
  public putModulePolicy(value: DataZedcloudProjectNetworkPolicyModulePolicy[] | cdktf.IResolvable) {
    this._modulePolicy.internalValue = value;
  }
  public resetModulePolicy() {
    this._modulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePolicyInput() {
    return this._modulePolicy.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new DataZedcloudProjectNetworkPolicyNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DataZedcloudProjectNetworkPolicyNetworkPolicy[] | cdktf.IResolvable) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }
}

export class DataZedcloudProjectNetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectNetworkPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectNetworkPolicyOutputReference {
    return new DataZedcloudProjectNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudProjectTagLevelSettings {
  /**
  * Flow log transmission setting for the network instances, it has two possible values NETWORK_INSTANCE_FLOW_LOG_TRANSMISSION_DISABLED or NETWORK_INSTANCE_FLOW_LOG_TRANSMISSION_ENABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#flow_log_transmission DataZedcloudProject#flow_log_transmission}
  */
  readonly flowLogTransmission?: string;
  /**
  * interface ordering for app instances, it has two possible values INTERFACE_ORDERING_DISABLED or INTERFACE_ORDERING_ENABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/project#interface_ordering DataZedcloudProject#interface_ordering}
  */
  readonly interfaceOrdering?: string;
}

export function dataZedcloudProjectTagLevelSettingsToTerraform(struct?: DataZedcloudProjectTagLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_log_transmission: cdktf.stringToTerraform(struct!.flowLogTransmission),
    interface_ordering: cdktf.stringToTerraform(struct!.interfaceOrdering),
  }
}


export function dataZedcloudProjectTagLevelSettingsToHclTerraform(struct?: DataZedcloudProjectTagLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_log_transmission: {
      value: cdktf.stringToHclTerraform(struct!.flowLogTransmission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ordering: {
      value: cdktf.stringToHclTerraform(struct!.interfaceOrdering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudProjectTagLevelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudProjectTagLevelSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowLogTransmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogTransmission = this._flowLogTransmission;
    }
    if (this._interfaceOrdering !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceOrdering = this._interfaceOrdering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudProjectTagLevelSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowLogTransmission = undefined;
      this._interfaceOrdering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowLogTransmission = value.flowLogTransmission;
      this._interfaceOrdering = value.interfaceOrdering;
    }
  }

  // flow_log_transmission - computed: false, optional: true, required: false
  private _flowLogTransmission?: string; 
  public get flowLogTransmission() {
    return this.getStringAttribute('flow_log_transmission');
  }
  public set flowLogTransmission(value: string) {
    this._flowLogTransmission = value;
  }
  public resetFlowLogTransmission() {
    this._flowLogTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogTransmissionInput() {
    return this._flowLogTransmission;
  }

  // interface_ordering - computed: false, optional: true, required: false
  private _interfaceOrdering?: string; 
  public get interfaceOrdering() {
    return this.getStringAttribute('interface_ordering');
  }
  public set interfaceOrdering(value: string) {
    this._interfaceOrdering = value;
  }
  public resetInterfaceOrdering() {
    this._interfaceOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceOrderingInput() {
    return this._interfaceOrdering;
  }
}

export class DataZedcloudProjectTagLevelSettingsList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudProjectTagLevelSettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZedcloudProjectTagLevelSettingsOutputReference {
    return new DataZedcloudProjectTagLevelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
