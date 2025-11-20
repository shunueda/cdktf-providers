// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#annotations K8SCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_scoped_access_deny K8SCluster#cluster_scoped_access_deny}
  */
  readonly clusterScopedAccessDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_scoped_access_permit K8SCluster#cluster_scoped_access_permit}
  */
  readonly clusterScopedAccessPermit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#description K8SCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#disable K8SCluster#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#global_access_enable K8SCluster#global_access_enable}
  */
  readonly globalAccessEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#id K8SCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#labels K8SCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#namespace K8SCluster#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#no_cluster_wide_apps K8SCluster#no_cluster_wide_apps}
  */
  readonly noClusterWideApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#no_global_access K8SCluster#no_global_access}
  */
  readonly noGlobalAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#no_insecure_registries K8SCluster#no_insecure_registries}
  */
  readonly noInsecureRegistries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#no_local_access K8SCluster#no_local_access}
  */
  readonly noLocalAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_default_cluster_role_bindings K8SCluster#use_default_cluster_role_bindings}
  */
  readonly useDefaultClusterRoleBindings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_default_cluster_roles K8SCluster#use_default_cluster_roles}
  */
  readonly useDefaultClusterRoles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_default_pod_security_admission K8SCluster#use_default_pod_security_admission}
  */
  readonly useDefaultPodSecurityAdmission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_default_psp K8SCluster#use_default_psp}
  */
  readonly useDefaultPsp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#vk8s_namespace_access_deny K8SCluster#vk8s_namespace_access_deny}
  */
  readonly vk8SNamespaceAccessDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#vk8s_namespace_access_permit K8SCluster#vk8s_namespace_access_permit}
  */
  readonly vk8SNamespaceAccessPermit?: boolean | cdktf.IResolvable;
  /**
  * cluster_wide_app_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_wide_app_list K8SCluster#cluster_wide_app_list}
  */
  readonly clusterWideAppList?: K8SClusterClusterWideAppListStruct;
  /**
  * insecure_registry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#insecure_registry_list K8SCluster#insecure_registry_list}
  */
  readonly insecureRegistryList?: K8SClusterInsecureRegistryListStruct;
  /**
  * local_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#local_access_config K8SCluster#local_access_config}
  */
  readonly localAccessConfig?: K8SClusterLocalAccessConfig;
  /**
  * use_custom_cluster_role_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_custom_cluster_role_bindings K8SCluster#use_custom_cluster_role_bindings}
  */
  readonly useCustomClusterRoleBindings?: K8SClusterUseCustomClusterRoleBindings;
  /**
  * use_custom_cluster_role_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_custom_cluster_role_list K8SCluster#use_custom_cluster_role_list}
  */
  readonly useCustomClusterRoleList?: K8SClusterUseCustomClusterRoleListStruct;
  /**
  * use_custom_pod_security_admission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_custom_pod_security_admission K8SCluster#use_custom_pod_security_admission}
  */
  readonly useCustomPodSecurityAdmission?: K8SClusterUseCustomPodSecurityAdmission;
  /**
  * use_custom_psp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#use_custom_psp_list K8SCluster#use_custom_psp_list}
  */
  readonly useCustomPspList?: K8SClusterUseCustomPspListStruct;
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#decryption_provider K8SCluster#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#location K8SCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#store_provider K8SCluster#store_provider}
  */
  readonly storeProvider?: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#decryption_provider K8SCluster#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#location K8SCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#store_provider K8SCluster#store_provider}
  */
  readonly storeProvider?: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#provider K8SCluster#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#url K8SCluster#url}
  */
  readonly url: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#key K8SCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#location K8SCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#provider K8SCluster#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#secret_encoding K8SCluster#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#version K8SCluster#version}
  */
  readonly version?: number;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#secret_encoding_type K8SCluster#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#blindfold_secret_info K8SCluster#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#blindfold_secret_info_internal K8SCluster#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#clear_secret_info K8SCluster#clear_secret_info}
  */
  readonly clearSecretInfo?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#vault_secret_info K8SCluster#vault_secret_info}
  */
  readonly vaultSecretInfo?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#wingman_secret_info K8SCluster#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#default_port K8SCluster#default_port}
  */
  readonly defaultPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#local_domain K8SCluster#local_domain}
  */
  readonly localDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#port K8SCluster#port}
  */
  readonly port?: number;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#password K8SCluster#password}
  */
  readonly password: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port: cdktf.booleanToTerraform(struct!.defaultPort),
    local_domain: cdktf.stringToTerraform(struct!.localDomain),
    port: cdktf.numberToTerraform(struct!.port),
    password: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordToTerraform(struct!.password),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_domain: {
      value: cdktf.stringToHclTerraform(struct!.localDomain),
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
    password: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPort = this._defaultPort;
    }
    if (this._localDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDomain = this._localDomain;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPort = undefined;
      this._localDomain = undefined;
      this._port = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPort = value.defaultPort;
      this._localDomain = value.localDomain;
      this._port = value.port;
      this._password.internalValue = value.password;
    }
  }

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: boolean | cdktf.IResolvable; 
  public get defaultPort() {
    return this.getBooleanAttribute('default_port');
  }
  public set defaultPort(value: boolean | cdktf.IResolvable) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort;
  }

  // local_domain - computed: false, optional: false, required: true
  private _localDomain?: string; 
  public get localDomain() {
    return this.getStringAttribute('local_domain');
  }
  public set localDomain(value: string) {
    this._localDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainInput() {
    return this._localDomain;
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

  // password - computed: false, optional: false, required: true
  private _password = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsArgoCd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#generated_yaml K8SCluster#generated_yaml}
  */
  readonly generatedYaml?: string;
  /**
  * local_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#local_domain K8SCluster#local_domain}
  */
  readonly localDomain?: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain;
}

export function k8SClusterClusterWideAppListClusterWideAppsArgoCdToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_yaml: cdktf.stringToTerraform(struct!.generatedYaml),
    local_domain: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainToTerraform(struct!.localDomain),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsArgoCdToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsArgoCdOutputReference | K8SClusterClusterWideAppListClusterWideAppsArgoCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generated_yaml: {
      value: cdktf.stringToHclTerraform(struct!.generatedYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_domain: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainToHclTerraform(struct!.localDomain),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsArgoCdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsArgoCd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedYaml = this._generatedYaml;
    }
    if (this._localDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDomain = this._localDomain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsArgoCd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedYaml = undefined;
      this._localDomain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedYaml = value.generatedYaml;
      this._localDomain.internalValue = value.localDomain;
    }
  }

  // generated_yaml - computed: false, optional: true, required: false
  private _generatedYaml?: string; 
  public get generatedYaml() {
    return this.getStringAttribute('generated_yaml');
  }
  public set generatedYaml(value: string) {
    this._generatedYaml = value;
  }
  public resetGeneratedYaml() {
    this._generatedYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedYamlInput() {
    return this._generatedYaml;
  }

  // local_domain - computed: false, optional: true, required: false
  private _localDomain = new K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomainOutputReference(this, "local_domain");
  public get localDomain() {
    return this._localDomain;
  }
  public putLocalDomain(value: K8SClusterClusterWideAppListClusterWideAppsArgoCdLocalDomain) {
    this._localDomain.internalValue = value;
  }
  public resetLocalDomain() {
    this._localDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainInput() {
    return this._localDomain.internalValue;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#generated_yaml K8SCluster#generated_yaml}
  */
  readonly generatedYaml?: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsDashboardToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsDashboardOutputReference | K8SClusterClusterWideAppListClusterWideAppsDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_yaml: cdktf.stringToTerraform(struct!.generatedYaml),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsDashboardToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsDashboardOutputReference | K8SClusterClusterWideAppListClusterWideAppsDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generated_yaml: {
      value: cdktf.stringToHclTerraform(struct!.generatedYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsDashboardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedYaml = this._generatedYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedYaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedYaml = value.generatedYaml;
    }
  }

  // generated_yaml - computed: false, optional: true, required: false
  private _generatedYaml?: string; 
  public get generatedYaml() {
    return this.getStringAttribute('generated_yaml');
  }
  public set generatedYaml(value: string) {
    this._generatedYaml = value;
  }
  public resetGeneratedYaml() {
    this._generatedYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedYamlInput() {
    return this._generatedYaml;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsMetricsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#generated_yaml K8SCluster#generated_yaml}
  */
  readonly generatedYaml?: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsMetricsServerToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsMetricsServerOutputReference | K8SClusterClusterWideAppListClusterWideAppsMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_yaml: cdktf.stringToTerraform(struct!.generatedYaml),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsMetricsServerToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsMetricsServerOutputReference | K8SClusterClusterWideAppListClusterWideAppsMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generated_yaml: {
      value: cdktf.stringToHclTerraform(struct!.generatedYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsMetricsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedYaml = this._generatedYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsMetricsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedYaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedYaml = value.generatedYaml;
    }
  }

  // generated_yaml - computed: false, optional: true, required: false
  private _generatedYaml?: string; 
  public get generatedYaml() {
    return this.getStringAttribute('generated_yaml');
  }
  public set generatedYaml(value: string) {
    this._generatedYaml = value;
  }
  public resetGeneratedYaml() {
    this._generatedYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedYamlInput() {
    return this._generatedYaml;
  }
}
export interface K8SClusterClusterWideAppListClusterWideAppsPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#generated_yaml K8SCluster#generated_yaml}
  */
  readonly generatedYaml?: string;
}

export function k8SClusterClusterWideAppListClusterWideAppsPrometheusToTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsPrometheusOutputReference | K8SClusterClusterWideAppListClusterWideAppsPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_yaml: cdktf.stringToTerraform(struct!.generatedYaml),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsPrometheusToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideAppsPrometheusOutputReference | K8SClusterClusterWideAppListClusterWideAppsPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generated_yaml: {
      value: cdktf.stringToHclTerraform(struct!.generatedYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListClusterWideAppsPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedYaml = this._generatedYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideAppsPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedYaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedYaml = value.generatedYaml;
    }
  }

  // generated_yaml - computed: false, optional: true, required: false
  private _generatedYaml?: string; 
  public get generatedYaml() {
    return this.getStringAttribute('generated_yaml');
  }
  public set generatedYaml(value: string) {
    this._generatedYaml = value;
  }
  public resetGeneratedYaml() {
    this._generatedYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedYamlInput() {
    return this._generatedYaml;
  }
}
export interface K8SClusterClusterWideAppListClusterWideApps {
  /**
  * argo_cd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#argo_cd K8SCluster#argo_cd}
  */
  readonly argoCd?: K8SClusterClusterWideAppListClusterWideAppsArgoCd;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#dashboard K8SCluster#dashboard}
  */
  readonly dashboard?: K8SClusterClusterWideAppListClusterWideAppsDashboard;
  /**
  * metrics_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#metrics_server K8SCluster#metrics_server}
  */
  readonly metricsServer?: K8SClusterClusterWideAppListClusterWideAppsMetricsServer;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#prometheus K8SCluster#prometheus}
  */
  readonly prometheus?: K8SClusterClusterWideAppListClusterWideAppsPrometheus;
}

export function k8SClusterClusterWideAppListClusterWideAppsToTerraform(struct?: K8SClusterClusterWideAppListClusterWideApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argo_cd: k8SClusterClusterWideAppListClusterWideAppsArgoCdToTerraform(struct!.argoCd),
    dashboard: k8SClusterClusterWideAppListClusterWideAppsDashboardToTerraform(struct!.dashboard),
    metrics_server: k8SClusterClusterWideAppListClusterWideAppsMetricsServerToTerraform(struct!.metricsServer),
    prometheus: k8SClusterClusterWideAppListClusterWideAppsPrometheusToTerraform(struct!.prometheus),
  }
}


export function k8SClusterClusterWideAppListClusterWideAppsToHclTerraform(struct?: K8SClusterClusterWideAppListClusterWideApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argo_cd: {
      value: k8SClusterClusterWideAppListClusterWideAppsArgoCdToHclTerraform(struct!.argoCd),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsArgoCdList",
    },
    dashboard: {
      value: k8SClusterClusterWideAppListClusterWideAppsDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsDashboardList",
    },
    metrics_server: {
      value: k8SClusterClusterWideAppListClusterWideAppsMetricsServerToHclTerraform(struct!.metricsServer),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsMetricsServerList",
    },
    prometheus: {
      value: k8SClusterClusterWideAppListClusterWideAppsPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsPrometheusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListClusterWideAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SClusterClusterWideAppListClusterWideApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argoCd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argoCd = this._argoCd?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._metricsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsServer = this._metricsServer?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListClusterWideApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._metricsServer.internalValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argoCd.internalValue = value.argoCd;
      this._dashboard.internalValue = value.dashboard;
      this._metricsServer.internalValue = value.metricsServer;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // argo_cd - computed: false, optional: true, required: false
  private _argoCd = new K8SClusterClusterWideAppListClusterWideAppsArgoCdOutputReference(this, "argo_cd");
  public get argoCd() {
    return this._argoCd;
  }
  public putArgoCd(value: K8SClusterClusterWideAppListClusterWideAppsArgoCd) {
    this._argoCd.internalValue = value;
  }
  public resetArgoCd() {
    this._argoCd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoCdInput() {
    return this._argoCd.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new K8SClusterClusterWideAppListClusterWideAppsDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: K8SClusterClusterWideAppListClusterWideAppsDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer = new K8SClusterClusterWideAppListClusterWideAppsMetricsServerOutputReference(this, "metrics_server");
  public get metricsServer() {
    return this._metricsServer;
  }
  public putMetricsServer(value: K8SClusterClusterWideAppListClusterWideAppsMetricsServer) {
    this._metricsServer.internalValue = value;
  }
  public resetMetricsServer() {
    this._metricsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new K8SClusterClusterWideAppListClusterWideAppsPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: K8SClusterClusterWideAppListClusterWideAppsPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}

export class K8SClusterClusterWideAppListClusterWideAppsList extends cdktf.ComplexList {
  public internalValue? : K8SClusterClusterWideAppListClusterWideApps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): K8SClusterClusterWideAppListClusterWideAppsOutputReference {
    return new K8SClusterClusterWideAppListClusterWideAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SClusterClusterWideAppListStruct {
  /**
  * cluster_wide_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_wide_apps K8SCluster#cluster_wide_apps}
  */
  readonly clusterWideApps: K8SClusterClusterWideAppListClusterWideApps[] | cdktf.IResolvable;
}

export function k8SClusterClusterWideAppListStructToTerraform(struct?: K8SClusterClusterWideAppListStructOutputReference | K8SClusterClusterWideAppListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_wide_apps: cdktf.listMapper(k8SClusterClusterWideAppListClusterWideAppsToTerraform, true)(struct!.clusterWideApps),
  }
}


export function k8SClusterClusterWideAppListStructToHclTerraform(struct?: K8SClusterClusterWideAppListStructOutputReference | K8SClusterClusterWideAppListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_wide_apps: {
      value: cdktf.listMapperHcl(k8SClusterClusterWideAppListClusterWideAppsToHclTerraform, true)(struct!.clusterWideApps),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterClusterWideAppListClusterWideAppsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterClusterWideAppListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterClusterWideAppListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterWideApps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterWideApps = this._clusterWideApps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterClusterWideAppListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterWideApps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterWideApps.internalValue = value.clusterWideApps;
    }
  }

  // cluster_wide_apps - computed: false, optional: false, required: true
  private _clusterWideApps = new K8SClusterClusterWideAppListClusterWideAppsList(this, "cluster_wide_apps", false);
  public get clusterWideApps() {
    return this._clusterWideApps;
  }
  public putClusterWideApps(value: K8SClusterClusterWideAppListClusterWideApps[] | cdktf.IResolvable) {
    this._clusterWideApps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterWideAppsInput() {
    return this._clusterWideApps.internalValue;
  }
}
export interface K8SClusterInsecureRegistryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#insecure_registries K8SCluster#insecure_registries}
  */
  readonly insecureRegistries: string[];
}

export function k8SClusterInsecureRegistryListStructToTerraform(struct?: K8SClusterInsecureRegistryListStructOutputReference | K8SClusterInsecureRegistryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureRegistries),
  }
}


export function k8SClusterInsecureRegistryListStructToHclTerraform(struct?: K8SClusterInsecureRegistryListStructOutputReference | K8SClusterInsecureRegistryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insecureRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterInsecureRegistryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterInsecureRegistryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureRegistries = this._insecureRegistries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterInsecureRegistryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureRegistries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureRegistries = value.insecureRegistries;
    }
  }

  // insecure_registries - computed: false, optional: false, required: true
  private _insecureRegistries?: string[]; 
  public get insecureRegistries() {
    return this.getListAttribute('insecure_registries');
  }
  public set insecureRegistries(value: string[]) {
    this._insecureRegistries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistriesInput() {
    return this._insecureRegistries;
  }
}
export interface K8SClusterLocalAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#default_port K8SCluster#default_port}
  */
  readonly defaultPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#local_domain K8SCluster#local_domain}
  */
  readonly localDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#port K8SCluster#port}
  */
  readonly port?: number;
}

export function k8SClusterLocalAccessConfigToTerraform(struct?: K8SClusterLocalAccessConfigOutputReference | K8SClusterLocalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port: cdktf.booleanToTerraform(struct!.defaultPort),
    local_domain: cdktf.stringToTerraform(struct!.localDomain),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function k8SClusterLocalAccessConfigToHclTerraform(struct?: K8SClusterLocalAccessConfigOutputReference | K8SClusterLocalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_domain: {
      value: cdktf.stringToHclTerraform(struct!.localDomain),
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

export class K8SClusterLocalAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterLocalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPort = this._defaultPort;
    }
    if (this._localDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDomain = this._localDomain;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterLocalAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPort = undefined;
      this._localDomain = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPort = value.defaultPort;
      this._localDomain = value.localDomain;
      this._port = value.port;
    }
  }

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: boolean | cdktf.IResolvable; 
  public get defaultPort() {
    return this.getBooleanAttribute('default_port');
  }
  public set defaultPort(value: boolean | cdktf.IResolvable) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort;
  }

  // local_domain - computed: false, optional: false, required: true
  private _localDomain?: string; 
  public get localDomain() {
    return this.getStringAttribute('local_domain');
  }
  public set localDomain(value: string) {
    this._localDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainInput() {
    return this._localDomain;
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
export interface K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#namespace K8SCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#tenant K8SCluster#tenant}
  */
  readonly tenant?: string;
}

export function k8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsToTerraform(struct?: K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function k8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsToHclTerraform(struct?: K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsOutputReference {
    return new K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SClusterUseCustomClusterRoleBindings {
  /**
  * cluster_role_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_role_bindings K8SCluster#cluster_role_bindings}
  */
  readonly clusterRoleBindings: K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings[] | cdktf.IResolvable;
}

export function k8SClusterUseCustomClusterRoleBindingsToTerraform(struct?: K8SClusterUseCustomClusterRoleBindingsOutputReference | K8SClusterUseCustomClusterRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_bindings: cdktf.listMapper(k8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsToTerraform, true)(struct!.clusterRoleBindings),
  }
}


export function k8SClusterUseCustomClusterRoleBindingsToHclTerraform(struct?: K8SClusterUseCustomClusterRoleBindingsOutputReference | K8SClusterUseCustomClusterRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role_bindings: {
      value: cdktf.listMapperHcl(k8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsToHclTerraform, true)(struct!.clusterRoleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomClusterRoleBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterUseCustomClusterRoleBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleBindings = this._clusterRoleBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomClusterRoleBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoleBindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoleBindings.internalValue = value.clusterRoleBindings;
    }
  }

  // cluster_role_bindings - computed: false, optional: false, required: true
  private _clusterRoleBindings = new K8SClusterUseCustomClusterRoleBindingsClusterRoleBindingsList(this, "cluster_role_bindings", false);
  public get clusterRoleBindings() {
    return this._clusterRoleBindings;
  }
  public putClusterRoleBindings(value: K8SClusterUseCustomClusterRoleBindingsClusterRoleBindings[] | cdktf.IResolvable) {
    this._clusterRoleBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingsInput() {
    return this._clusterRoleBindings.internalValue;
  }
}
export interface K8SClusterUseCustomClusterRoleListClusterRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#namespace K8SCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#tenant K8SCluster#tenant}
  */
  readonly tenant?: string;
}

export function k8SClusterUseCustomClusterRoleListClusterRolesToTerraform(struct?: K8SClusterUseCustomClusterRoleListClusterRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function k8SClusterUseCustomClusterRoleListClusterRolesToHclTerraform(struct?: K8SClusterUseCustomClusterRoleListClusterRoles | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomClusterRoleListClusterRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SClusterUseCustomClusterRoleListClusterRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomClusterRoleListClusterRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class K8SClusterUseCustomClusterRoleListClusterRolesList extends cdktf.ComplexList {
  public internalValue? : K8SClusterUseCustomClusterRoleListClusterRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): K8SClusterUseCustomClusterRoleListClusterRolesOutputReference {
    return new K8SClusterUseCustomClusterRoleListClusterRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SClusterUseCustomClusterRoleListStruct {
  /**
  * cluster_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#cluster_roles K8SCluster#cluster_roles}
  */
  readonly clusterRoles: K8SClusterUseCustomClusterRoleListClusterRoles[] | cdktf.IResolvable;
}

export function k8SClusterUseCustomClusterRoleListStructToTerraform(struct?: K8SClusterUseCustomClusterRoleListStructOutputReference | K8SClusterUseCustomClusterRoleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(k8SClusterUseCustomClusterRoleListClusterRolesToTerraform, true)(struct!.clusterRoles),
  }
}


export function k8SClusterUseCustomClusterRoleListStructToHclTerraform(struct?: K8SClusterUseCustomClusterRoleListStructOutputReference | K8SClusterUseCustomClusterRoleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(k8SClusterUseCustomClusterRoleListClusterRolesToHclTerraform, true)(struct!.clusterRoles),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterUseCustomClusterRoleListClusterRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomClusterRoleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterUseCustomClusterRoleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomClusterRoleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoles.internalValue = value.clusterRoles;
    }
  }

  // cluster_roles - computed: false, optional: false, required: true
  private _clusterRoles = new K8SClusterUseCustomClusterRoleListClusterRolesList(this, "cluster_roles", false);
  public get clusterRoles() {
    return this._clusterRoles;
  }
  public putClusterRoles(value: K8SClusterUseCustomClusterRoleListClusterRoles[] | cdktf.IResolvable) {
    this._clusterRoles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles.internalValue;
  }
}
export interface K8SClusterUseCustomPodSecurityAdmission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#namespace K8SCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#tenant K8SCluster#tenant}
  */
  readonly tenant?: string;
}

export function k8SClusterUseCustomPodSecurityAdmissionToTerraform(struct?: K8SClusterUseCustomPodSecurityAdmissionOutputReference | K8SClusterUseCustomPodSecurityAdmission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function k8SClusterUseCustomPodSecurityAdmissionToHclTerraform(struct?: K8SClusterUseCustomPodSecurityAdmissionOutputReference | K8SClusterUseCustomPodSecurityAdmission): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomPodSecurityAdmissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterUseCustomPodSecurityAdmission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomPodSecurityAdmission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface K8SClusterUseCustomPspListPodSecurityPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#namespace K8SCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#tenant K8SCluster#tenant}
  */
  readonly tenant?: string;
}

export function k8SClusterUseCustomPspListPodSecurityPoliciesToTerraform(struct?: K8SClusterUseCustomPspListPodSecurityPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function k8SClusterUseCustomPspListPodSecurityPoliciesToHclTerraform(struct?: K8SClusterUseCustomPspListPodSecurityPolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomPspListPodSecurityPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SClusterUseCustomPspListPodSecurityPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomPspListPodSecurityPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class K8SClusterUseCustomPspListPodSecurityPoliciesList extends cdktf.ComplexList {
  public internalValue? : K8SClusterUseCustomPspListPodSecurityPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): K8SClusterUseCustomPspListPodSecurityPoliciesOutputReference {
    return new K8SClusterUseCustomPspListPodSecurityPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SClusterUseCustomPspListStruct {
  /**
  * pod_security_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#pod_security_policies K8SCluster#pod_security_policies}
  */
  readonly podSecurityPolicies: K8SClusterUseCustomPspListPodSecurityPolicies[] | cdktf.IResolvable;
}

export function k8SClusterUseCustomPspListStructToTerraform(struct?: K8SClusterUseCustomPspListStructOutputReference | K8SClusterUseCustomPspListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_security_policies: cdktf.listMapper(k8SClusterUseCustomPspListPodSecurityPoliciesToTerraform, true)(struct!.podSecurityPolicies),
  }
}


export function k8SClusterUseCustomPspListStructToHclTerraform(struct?: K8SClusterUseCustomPspListStructOutputReference | K8SClusterUseCustomPspListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_security_policies: {
      value: cdktf.listMapperHcl(k8SClusterUseCustomPspListPodSecurityPoliciesToHclTerraform, true)(struct!.podSecurityPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterUseCustomPspListPodSecurityPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterUseCustomPspListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterUseCustomPspListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSecurityPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityPolicies = this._podSecurityPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterUseCustomPspListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podSecurityPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podSecurityPolicies.internalValue = value.podSecurityPolicies;
    }
  }

  // pod_security_policies - computed: false, optional: false, required: true
  private _podSecurityPolicies = new K8SClusterUseCustomPspListPodSecurityPoliciesList(this, "pod_security_policies", false);
  public get podSecurityPolicies() {
    return this._podSecurityPolicies;
  }
  public putPodSecurityPolicies(value: K8SClusterUseCustomPspListPodSecurityPolicies[] | cdktf.IResolvable) {
    this._podSecurityPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPoliciesInput() {
    return this._podSecurityPolicies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster volterra_k8s_cluster}
*/
export class K8SCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_k8s_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SCluster to import
  * @param importFromId The id of the existing K8SCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_k8s_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_cluster volterra_k8s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_k8s_cluster',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._clusterScopedAccessDeny = config.clusterScopedAccessDeny;
    this._clusterScopedAccessPermit = config.clusterScopedAccessPermit;
    this._description = config.description;
    this._disable = config.disable;
    this._globalAccessEnable = config.globalAccessEnable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noClusterWideApps = config.noClusterWideApps;
    this._noGlobalAccess = config.noGlobalAccess;
    this._noInsecureRegistries = config.noInsecureRegistries;
    this._noLocalAccess = config.noLocalAccess;
    this._useDefaultClusterRoleBindings = config.useDefaultClusterRoleBindings;
    this._useDefaultClusterRoles = config.useDefaultClusterRoles;
    this._useDefaultPodSecurityAdmission = config.useDefaultPodSecurityAdmission;
    this._useDefaultPsp = config.useDefaultPsp;
    this._vk8SNamespaceAccessDeny = config.vk8SNamespaceAccessDeny;
    this._vk8SNamespaceAccessPermit = config.vk8SNamespaceAccessPermit;
    this._clusterWideAppList.internalValue = config.clusterWideAppList;
    this._insecureRegistryList.internalValue = config.insecureRegistryList;
    this._localAccessConfig.internalValue = config.localAccessConfig;
    this._useCustomClusterRoleBindings.internalValue = config.useCustomClusterRoleBindings;
    this._useCustomClusterRoleList.internalValue = config.useCustomClusterRoleList;
    this._useCustomPodSecurityAdmission.internalValue = config.useCustomPodSecurityAdmission;
    this._useCustomPspList.internalValue = config.useCustomPspList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cluster_scoped_access_deny - computed: false, optional: true, required: false
  private _clusterScopedAccessDeny?: boolean | cdktf.IResolvable; 
  public get clusterScopedAccessDeny() {
    return this.getBooleanAttribute('cluster_scoped_access_deny');
  }
  public set clusterScopedAccessDeny(value: boolean | cdktf.IResolvable) {
    this._clusterScopedAccessDeny = value;
  }
  public resetClusterScopedAccessDeny() {
    this._clusterScopedAccessDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterScopedAccessDenyInput() {
    return this._clusterScopedAccessDeny;
  }

  // cluster_scoped_access_permit - computed: false, optional: true, required: false
  private _clusterScopedAccessPermit?: boolean | cdktf.IResolvable; 
  public get clusterScopedAccessPermit() {
    return this.getBooleanAttribute('cluster_scoped_access_permit');
  }
  public set clusterScopedAccessPermit(value: boolean | cdktf.IResolvable) {
    this._clusterScopedAccessPermit = value;
  }
  public resetClusterScopedAccessPermit() {
    this._clusterScopedAccessPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterScopedAccessPermitInput() {
    return this._clusterScopedAccessPermit;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // global_access_enable - computed: false, optional: true, required: false
  private _globalAccessEnable?: boolean | cdktf.IResolvable; 
  public get globalAccessEnable() {
    return this.getBooleanAttribute('global_access_enable');
  }
  public set globalAccessEnable(value: boolean | cdktf.IResolvable) {
    this._globalAccessEnable = value;
  }
  public resetGlobalAccessEnable() {
    this._globalAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAccessEnableInput() {
    return this._globalAccessEnable;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // no_cluster_wide_apps - computed: false, optional: true, required: false
  private _noClusterWideApps?: boolean | cdktf.IResolvable; 
  public get noClusterWideApps() {
    return this.getBooleanAttribute('no_cluster_wide_apps');
  }
  public set noClusterWideApps(value: boolean | cdktf.IResolvable) {
    this._noClusterWideApps = value;
  }
  public resetNoClusterWideApps() {
    this._noClusterWideApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClusterWideAppsInput() {
    return this._noClusterWideApps;
  }

  // no_global_access - computed: false, optional: true, required: false
  private _noGlobalAccess?: boolean | cdktf.IResolvable; 
  public get noGlobalAccess() {
    return this.getBooleanAttribute('no_global_access');
  }
  public set noGlobalAccess(value: boolean | cdktf.IResolvable) {
    this._noGlobalAccess = value;
  }
  public resetNoGlobalAccess() {
    this._noGlobalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalAccessInput() {
    return this._noGlobalAccess;
  }

  // no_insecure_registries - computed: false, optional: true, required: false
  private _noInsecureRegistries?: boolean | cdktf.IResolvable; 
  public get noInsecureRegistries() {
    return this.getBooleanAttribute('no_insecure_registries');
  }
  public set noInsecureRegistries(value: boolean | cdktf.IResolvable) {
    this._noInsecureRegistries = value;
  }
  public resetNoInsecureRegistries() {
    this._noInsecureRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInsecureRegistriesInput() {
    return this._noInsecureRegistries;
  }

  // no_local_access - computed: false, optional: true, required: false
  private _noLocalAccess?: boolean | cdktf.IResolvable; 
  public get noLocalAccess() {
    return this.getBooleanAttribute('no_local_access');
  }
  public set noLocalAccess(value: boolean | cdktf.IResolvable) {
    this._noLocalAccess = value;
  }
  public resetNoLocalAccess() {
    this._noLocalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalAccessInput() {
    return this._noLocalAccess;
  }

  // use_default_cluster_role_bindings - computed: false, optional: true, required: false
  private _useDefaultClusterRoleBindings?: boolean | cdktf.IResolvable; 
  public get useDefaultClusterRoleBindings() {
    return this.getBooleanAttribute('use_default_cluster_role_bindings');
  }
  public set useDefaultClusterRoleBindings(value: boolean | cdktf.IResolvable) {
    this._useDefaultClusterRoleBindings = value;
  }
  public resetUseDefaultClusterRoleBindings() {
    this._useDefaultClusterRoleBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultClusterRoleBindingsInput() {
    return this._useDefaultClusterRoleBindings;
  }

  // use_default_cluster_roles - computed: false, optional: true, required: false
  private _useDefaultClusterRoles?: boolean | cdktf.IResolvable; 
  public get useDefaultClusterRoles() {
    return this.getBooleanAttribute('use_default_cluster_roles');
  }
  public set useDefaultClusterRoles(value: boolean | cdktf.IResolvable) {
    this._useDefaultClusterRoles = value;
  }
  public resetUseDefaultClusterRoles() {
    this._useDefaultClusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultClusterRolesInput() {
    return this._useDefaultClusterRoles;
  }

  // use_default_pod_security_admission - computed: false, optional: true, required: false
  private _useDefaultPodSecurityAdmission?: boolean | cdktf.IResolvable; 
  public get useDefaultPodSecurityAdmission() {
    return this.getBooleanAttribute('use_default_pod_security_admission');
  }
  public set useDefaultPodSecurityAdmission(value: boolean | cdktf.IResolvable) {
    this._useDefaultPodSecurityAdmission = value;
  }
  public resetUseDefaultPodSecurityAdmission() {
    this._useDefaultPodSecurityAdmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPodSecurityAdmissionInput() {
    return this._useDefaultPodSecurityAdmission;
  }

  // use_default_psp - computed: false, optional: true, required: false
  private _useDefaultPsp?: boolean | cdktf.IResolvable; 
  public get useDefaultPsp() {
    return this.getBooleanAttribute('use_default_psp');
  }
  public set useDefaultPsp(value: boolean | cdktf.IResolvable) {
    this._useDefaultPsp = value;
  }
  public resetUseDefaultPsp() {
    this._useDefaultPsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPspInput() {
    return this._useDefaultPsp;
  }

  // vk8s_namespace_access_deny - computed: false, optional: true, required: false
  private _vk8SNamespaceAccessDeny?: boolean | cdktf.IResolvable; 
  public get vk8SNamespaceAccessDeny() {
    return this.getBooleanAttribute('vk8s_namespace_access_deny');
  }
  public set vk8SNamespaceAccessDeny(value: boolean | cdktf.IResolvable) {
    this._vk8SNamespaceAccessDeny = value;
  }
  public resetVk8SNamespaceAccessDeny() {
    this._vk8SNamespaceAccessDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SNamespaceAccessDenyInput() {
    return this._vk8SNamespaceAccessDeny;
  }

  // vk8s_namespace_access_permit - computed: false, optional: true, required: false
  private _vk8SNamespaceAccessPermit?: boolean | cdktf.IResolvable; 
  public get vk8SNamespaceAccessPermit() {
    return this.getBooleanAttribute('vk8s_namespace_access_permit');
  }
  public set vk8SNamespaceAccessPermit(value: boolean | cdktf.IResolvable) {
    this._vk8SNamespaceAccessPermit = value;
  }
  public resetVk8SNamespaceAccessPermit() {
    this._vk8SNamespaceAccessPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SNamespaceAccessPermitInput() {
    return this._vk8SNamespaceAccessPermit;
  }

  // cluster_wide_app_list - computed: false, optional: true, required: false
  private _clusterWideAppList = new K8SClusterClusterWideAppListStructOutputReference(this, "cluster_wide_app_list");
  public get clusterWideAppList() {
    return this._clusterWideAppList;
  }
  public putClusterWideAppList(value: K8SClusterClusterWideAppListStruct) {
    this._clusterWideAppList.internalValue = value;
  }
  public resetClusterWideAppList() {
    this._clusterWideAppList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterWideAppListInput() {
    return this._clusterWideAppList.internalValue;
  }

  // insecure_registry_list - computed: false, optional: true, required: false
  private _insecureRegistryList = new K8SClusterInsecureRegistryListStructOutputReference(this, "insecure_registry_list");
  public get insecureRegistryList() {
    return this._insecureRegistryList;
  }
  public putInsecureRegistryList(value: K8SClusterInsecureRegistryListStruct) {
    this._insecureRegistryList.internalValue = value;
  }
  public resetInsecureRegistryList() {
    this._insecureRegistryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistryListInput() {
    return this._insecureRegistryList.internalValue;
  }

  // local_access_config - computed: false, optional: true, required: false
  private _localAccessConfig = new K8SClusterLocalAccessConfigOutputReference(this, "local_access_config");
  public get localAccessConfig() {
    return this._localAccessConfig;
  }
  public putLocalAccessConfig(value: K8SClusterLocalAccessConfig) {
    this._localAccessConfig.internalValue = value;
  }
  public resetLocalAccessConfig() {
    this._localAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAccessConfigInput() {
    return this._localAccessConfig.internalValue;
  }

  // use_custom_cluster_role_bindings - computed: false, optional: true, required: false
  private _useCustomClusterRoleBindings = new K8SClusterUseCustomClusterRoleBindingsOutputReference(this, "use_custom_cluster_role_bindings");
  public get useCustomClusterRoleBindings() {
    return this._useCustomClusterRoleBindings;
  }
  public putUseCustomClusterRoleBindings(value: K8SClusterUseCustomClusterRoleBindings) {
    this._useCustomClusterRoleBindings.internalValue = value;
  }
  public resetUseCustomClusterRoleBindings() {
    this._useCustomClusterRoleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomClusterRoleBindingsInput() {
    return this._useCustomClusterRoleBindings.internalValue;
  }

  // use_custom_cluster_role_list - computed: false, optional: true, required: false
  private _useCustomClusterRoleList = new K8SClusterUseCustomClusterRoleListStructOutputReference(this, "use_custom_cluster_role_list");
  public get useCustomClusterRoleList() {
    return this._useCustomClusterRoleList;
  }
  public putUseCustomClusterRoleList(value: K8SClusterUseCustomClusterRoleListStruct) {
    this._useCustomClusterRoleList.internalValue = value;
  }
  public resetUseCustomClusterRoleList() {
    this._useCustomClusterRoleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomClusterRoleListInput() {
    return this._useCustomClusterRoleList.internalValue;
  }

  // use_custom_pod_security_admission - computed: false, optional: true, required: false
  private _useCustomPodSecurityAdmission = new K8SClusterUseCustomPodSecurityAdmissionOutputReference(this, "use_custom_pod_security_admission");
  public get useCustomPodSecurityAdmission() {
    return this._useCustomPodSecurityAdmission;
  }
  public putUseCustomPodSecurityAdmission(value: K8SClusterUseCustomPodSecurityAdmission) {
    this._useCustomPodSecurityAdmission.internalValue = value;
  }
  public resetUseCustomPodSecurityAdmission() {
    this._useCustomPodSecurityAdmission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomPodSecurityAdmissionInput() {
    return this._useCustomPodSecurityAdmission.internalValue;
  }

  // use_custom_psp_list - computed: false, optional: true, required: false
  private _useCustomPspList = new K8SClusterUseCustomPspListStructOutputReference(this, "use_custom_psp_list");
  public get useCustomPspList() {
    return this._useCustomPspList;
  }
  public putUseCustomPspList(value: K8SClusterUseCustomPspListStruct) {
    this._useCustomPspList.internalValue = value;
  }
  public resetUseCustomPspList() {
    this._useCustomPspList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomPspListInput() {
    return this._useCustomPspList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      cluster_scoped_access_deny: cdktf.booleanToTerraform(this._clusterScopedAccessDeny),
      cluster_scoped_access_permit: cdktf.booleanToTerraform(this._clusterScopedAccessPermit),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      global_access_enable: cdktf.booleanToTerraform(this._globalAccessEnable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_cluster_wide_apps: cdktf.booleanToTerraform(this._noClusterWideApps),
      no_global_access: cdktf.booleanToTerraform(this._noGlobalAccess),
      no_insecure_registries: cdktf.booleanToTerraform(this._noInsecureRegistries),
      no_local_access: cdktf.booleanToTerraform(this._noLocalAccess),
      use_default_cluster_role_bindings: cdktf.booleanToTerraform(this._useDefaultClusterRoleBindings),
      use_default_cluster_roles: cdktf.booleanToTerraform(this._useDefaultClusterRoles),
      use_default_pod_security_admission: cdktf.booleanToTerraform(this._useDefaultPodSecurityAdmission),
      use_default_psp: cdktf.booleanToTerraform(this._useDefaultPsp),
      vk8s_namespace_access_deny: cdktf.booleanToTerraform(this._vk8SNamespaceAccessDeny),
      vk8s_namespace_access_permit: cdktf.booleanToTerraform(this._vk8SNamespaceAccessPermit),
      cluster_wide_app_list: k8SClusterClusterWideAppListStructToTerraform(this._clusterWideAppList.internalValue),
      insecure_registry_list: k8SClusterInsecureRegistryListStructToTerraform(this._insecureRegistryList.internalValue),
      local_access_config: k8SClusterLocalAccessConfigToTerraform(this._localAccessConfig.internalValue),
      use_custom_cluster_role_bindings: k8SClusterUseCustomClusterRoleBindingsToTerraform(this._useCustomClusterRoleBindings.internalValue),
      use_custom_cluster_role_list: k8SClusterUseCustomClusterRoleListStructToTerraform(this._useCustomClusterRoleList.internalValue),
      use_custom_pod_security_admission: k8SClusterUseCustomPodSecurityAdmissionToTerraform(this._useCustomPodSecurityAdmission.internalValue),
      use_custom_psp_list: k8SClusterUseCustomPspListStructToTerraform(this._useCustomPspList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_scoped_access_deny: {
        value: cdktf.booleanToHclTerraform(this._clusterScopedAccessDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_scoped_access_permit: {
        value: cdktf.booleanToHclTerraform(this._clusterScopedAccessPermit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_access_enable: {
        value: cdktf.booleanToHclTerraform(this._globalAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_cluster_wide_apps: {
        value: cdktf.booleanToHclTerraform(this._noClusterWideApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_global_access: {
        value: cdktf.booleanToHclTerraform(this._noGlobalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_insecure_registries: {
        value: cdktf.booleanToHclTerraform(this._noInsecureRegistries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_local_access: {
        value: cdktf.booleanToHclTerraform(this._noLocalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_cluster_role_bindings: {
        value: cdktf.booleanToHclTerraform(this._useDefaultClusterRoleBindings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_cluster_roles: {
        value: cdktf.booleanToHclTerraform(this._useDefaultClusterRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_pod_security_admission: {
        value: cdktf.booleanToHclTerraform(this._useDefaultPodSecurityAdmission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_psp: {
        value: cdktf.booleanToHclTerraform(this._useDefaultPsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vk8s_namespace_access_deny: {
        value: cdktf.booleanToHclTerraform(this._vk8SNamespaceAccessDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vk8s_namespace_access_permit: {
        value: cdktf.booleanToHclTerraform(this._vk8SNamespaceAccessPermit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_wide_app_list: {
        value: k8SClusterClusterWideAppListStructToHclTerraform(this._clusterWideAppList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterClusterWideAppListStructList",
      },
      insecure_registry_list: {
        value: k8SClusterInsecureRegistryListStructToHclTerraform(this._insecureRegistryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterInsecureRegistryListStructList",
      },
      local_access_config: {
        value: k8SClusterLocalAccessConfigToHclTerraform(this._localAccessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterLocalAccessConfigList",
      },
      use_custom_cluster_role_bindings: {
        value: k8SClusterUseCustomClusterRoleBindingsToHclTerraform(this._useCustomClusterRoleBindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterUseCustomClusterRoleBindingsList",
      },
      use_custom_cluster_role_list: {
        value: k8SClusterUseCustomClusterRoleListStructToHclTerraform(this._useCustomClusterRoleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterUseCustomClusterRoleListStructList",
      },
      use_custom_pod_security_admission: {
        value: k8SClusterUseCustomPodSecurityAdmissionToHclTerraform(this._useCustomPodSecurityAdmission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterUseCustomPodSecurityAdmissionList",
      },
      use_custom_psp_list: {
        value: k8SClusterUseCustomPspListStructToHclTerraform(this._useCustomPspList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterUseCustomPspListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
