// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#automatic_approval_api_token ServiceCredential#automatic_approval_api_token}
  */
  readonly automaticApprovalApiToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#created_at ServiceCredential#created_at}
  */
  readonly createdAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#expiration_days ServiceCredential#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#id ServiceCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#name ServiceCredential#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#service_api_token ServiceCredential#service_api_token}
  */
  readonly serviceApiToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#service_credential_type ServiceCredential#service_credential_type}
  */
  readonly serviceCredentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#user_group_names ServiceCredential#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * namespace_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#namespace_roles ServiceCredential#namespace_roles}
  */
  readonly namespaceRoles?: ServiceCredentialNamespaceRoles[] | cdktf.IResolvable;
  /**
  * service_api_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#service_api_certificate ServiceCredential#service_api_certificate}
  */
  readonly serviceApiCertificate?: ServiceCredentialServiceApiCertificate[] | cdktf.IResolvable;
  /**
  * site_kubeconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#site_kubeconfig ServiceCredential#site_kubeconfig}
  */
  readonly siteKubeconfig?: ServiceCredentialSiteKubeconfig[] | cdktf.IResolvable;
  /**
  * vk8s_kubeconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#vk8s_kubeconfig ServiceCredential#vk8s_kubeconfig}
  */
  readonly vk8SKubeconfig?: ServiceCredentialVk8SKubeconfig[] | cdktf.IResolvable;
}
export interface ServiceCredentialNamespaceRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#namespace ServiceCredential#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#role ServiceCredential#role}
  */
  readonly role: string;
}

export function serviceCredentialNamespaceRolesToTerraform(struct?: ServiceCredentialNamespaceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function serviceCredentialNamespaceRolesToHclTerraform(struct?: ServiceCredentialNamespaceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCredentialNamespaceRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCredentialNamespaceRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCredentialNamespaceRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._role = value.role;
    }
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class ServiceCredentialNamespaceRolesList extends cdktf.ComplexList {
  public internalValue? : ServiceCredentialNamespaceRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCredentialNamespaceRolesOutputReference {
    return new ServiceCredentialNamespaceRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCredentialServiceApiCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#password ServiceCredential#password}
  */
  readonly password: string;
}

export function serviceCredentialServiceApiCertificateToTerraform(struct?: ServiceCredentialServiceApiCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function serviceCredentialServiceApiCertificateToHclTerraform(struct?: ServiceCredentialServiceApiCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCredentialServiceApiCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCredentialServiceApiCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCredentialServiceApiCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class ServiceCredentialServiceApiCertificateList extends cdktf.ComplexList {
  public internalValue? : ServiceCredentialServiceApiCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCredentialServiceApiCertificateOutputReference {
    return new ServiceCredentialServiceApiCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCredentialSiteKubeconfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#site ServiceCredential#site}
  */
  readonly site: string;
}

export function serviceCredentialSiteKubeconfigToTerraform(struct?: ServiceCredentialSiteKubeconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function serviceCredentialSiteKubeconfigToHclTerraform(struct?: ServiceCredentialSiteKubeconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCredentialSiteKubeconfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCredentialSiteKubeconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCredentialSiteKubeconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._site = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._site = value.site;
    }
  }

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }
}

export class ServiceCredentialSiteKubeconfigList extends cdktf.ComplexList {
  public internalValue? : ServiceCredentialSiteKubeconfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCredentialSiteKubeconfigOutputReference {
    return new ServiceCredentialSiteKubeconfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCredentialVk8SKubeconfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#vk8s_cluster_name ServiceCredential#vk8s_cluster_name}
  */
  readonly vk8SClusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#vk8s_namespace ServiceCredential#vk8s_namespace}
  */
  readonly vk8SNamespace?: string;
}

export function serviceCredentialVk8SKubeconfigToTerraform(struct?: ServiceCredentialVk8SKubeconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vk8s_cluster_name: cdktf.stringToTerraform(struct!.vk8SClusterName),
    vk8s_namespace: cdktf.stringToTerraform(struct!.vk8SNamespace),
  }
}


export function serviceCredentialVk8SKubeconfigToHclTerraform(struct?: ServiceCredentialVk8SKubeconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vk8s_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.vk8SClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vk8s_namespace: {
      value: cdktf.stringToHclTerraform(struct!.vk8SNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCredentialVk8SKubeconfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCredentialVk8SKubeconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vk8SClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SClusterName = this._vk8SClusterName;
    }
    if (this._vk8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SNamespace = this._vk8SNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCredentialVk8SKubeconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vk8SClusterName = undefined;
      this._vk8SNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vk8SClusterName = value.vk8SClusterName;
      this._vk8SNamespace = value.vk8SNamespace;
    }
  }

  // vk8s_cluster_name - computed: false, optional: true, required: false
  private _vk8SClusterName?: string; 
  public get vk8SClusterName() {
    return this.getStringAttribute('vk8s_cluster_name');
  }
  public set vk8SClusterName(value: string) {
    this._vk8SClusterName = value;
  }
  public resetVk8SClusterName() {
    this._vk8SClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SClusterNameInput() {
    return this._vk8SClusterName;
  }

  // vk8s_namespace - computed: false, optional: true, required: false
  private _vk8SNamespace?: string; 
  public get vk8SNamespace() {
    return this.getStringAttribute('vk8s_namespace');
  }
  public set vk8SNamespace(value: string) {
    this._vk8SNamespace = value;
  }
  public resetVk8SNamespace() {
    this._vk8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SNamespaceInput() {
    return this._vk8SNamespace;
  }
}

export class ServiceCredentialVk8SKubeconfigList extends cdktf.ComplexList {
  public internalValue? : ServiceCredentialVk8SKubeconfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCredentialVk8SKubeconfigOutputReference {
    return new ServiceCredentialVk8SKubeconfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential volterra_service_credential}
*/
export class ServiceCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_service_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCredential to import
  * @param importFromId The id of the existing ServiceCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_service_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_credential volterra_service_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_service_credential',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticApprovalApiToken = config.automaticApprovalApiToken;
    this._createdAt = config.createdAt;
    this._expirationDays = config.expirationDays;
    this._id = config.id;
    this._name = config.name;
    this._serviceApiToken = config.serviceApiToken;
    this._serviceCredentialType = config.serviceCredentialType;
    this._userGroupNames = config.userGroupNames;
    this._namespaceRoles.internalValue = config.namespaceRoles;
    this._serviceApiCertificate.internalValue = config.serviceApiCertificate;
    this._siteKubeconfig.internalValue = config.siteKubeconfig;
    this._vk8SKubeconfig.internalValue = config.vk8SKubeconfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_approval_api_token - computed: false, optional: true, required: false
  private _automaticApprovalApiToken?: boolean | cdktf.IResolvable; 
  public get automaticApprovalApiToken() {
    return this.getBooleanAttribute('automatic_approval_api_token');
  }
  public set automaticApprovalApiToken(value: boolean | cdktf.IResolvable) {
    this._automaticApprovalApiToken = value;
  }
  public resetAutomaticApprovalApiToken() {
    this._automaticApprovalApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticApprovalApiTokenInput() {
    return this._automaticApprovalApiToken;
  }

  // created_at - computed: false, optional: false, required: true
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // expiration_days - computed: false, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // expiration_timestamp - computed: true, optional: false, required: false
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
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

  // service_api_token - computed: false, optional: true, required: false
  private _serviceApiToken?: boolean | cdktf.IResolvable; 
  public get serviceApiToken() {
    return this.getBooleanAttribute('service_api_token');
  }
  public set serviceApiToken(value: boolean | cdktf.IResolvable) {
    this._serviceApiToken = value;
  }
  public resetServiceApiToken() {
    this._serviceApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceApiTokenInput() {
    return this._serviceApiToken;
  }

  // service_credential_type - computed: false, optional: true, required: false
  private _serviceCredentialType?: string; 
  public get serviceCredentialType() {
    return this.getStringAttribute('service_credential_type');
  }
  public set serviceCredentialType(value: string) {
    this._serviceCredentialType = value;
  }
  public resetServiceCredentialType() {
    this._serviceCredentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCredentialTypeInput() {
    return this._serviceCredentialType;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // namespace_roles - computed: false, optional: true, required: false
  private _namespaceRoles = new ServiceCredentialNamespaceRolesList(this, "namespace_roles", false);
  public get namespaceRoles() {
    return this._namespaceRoles;
  }
  public putNamespaceRoles(value: ServiceCredentialNamespaceRoles[] | cdktf.IResolvable) {
    this._namespaceRoles.internalValue = value;
  }
  public resetNamespaceRoles() {
    this._namespaceRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceRolesInput() {
    return this._namespaceRoles.internalValue;
  }

  // service_api_certificate - computed: false, optional: true, required: false
  private _serviceApiCertificate = new ServiceCredentialServiceApiCertificateList(this, "service_api_certificate", false);
  public get serviceApiCertificate() {
    return this._serviceApiCertificate;
  }
  public putServiceApiCertificate(value: ServiceCredentialServiceApiCertificate[] | cdktf.IResolvable) {
    this._serviceApiCertificate.internalValue = value;
  }
  public resetServiceApiCertificate() {
    this._serviceApiCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceApiCertificateInput() {
    return this._serviceApiCertificate.internalValue;
  }

  // site_kubeconfig - computed: false, optional: true, required: false
  private _siteKubeconfig = new ServiceCredentialSiteKubeconfigList(this, "site_kubeconfig", false);
  public get siteKubeconfig() {
    return this._siteKubeconfig;
  }
  public putSiteKubeconfig(value: ServiceCredentialSiteKubeconfig[] | cdktf.IResolvable) {
    this._siteKubeconfig.internalValue = value;
  }
  public resetSiteKubeconfig() {
    this._siteKubeconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKubeconfigInput() {
    return this._siteKubeconfig.internalValue;
  }

  // vk8s_kubeconfig - computed: false, optional: true, required: false
  private _vk8SKubeconfig = new ServiceCredentialVk8SKubeconfigList(this, "vk8s_kubeconfig", false);
  public get vk8SKubeconfig() {
    return this._vk8SKubeconfig;
  }
  public putVk8SKubeconfig(value: ServiceCredentialVk8SKubeconfig[] | cdktf.IResolvable) {
    this._vk8SKubeconfig.internalValue = value;
  }
  public resetVk8SKubeconfig() {
    this._vk8SKubeconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SKubeconfigInput() {
    return this._vk8SKubeconfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_approval_api_token: cdktf.booleanToTerraform(this._automaticApprovalApiToken),
      created_at: cdktf.stringToTerraform(this._createdAt),
      expiration_days: cdktf.numberToTerraform(this._expirationDays),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_api_token: cdktf.booleanToTerraform(this._serviceApiToken),
      service_credential_type: cdktf.stringToTerraform(this._serviceCredentialType),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
      namespace_roles: cdktf.listMapper(serviceCredentialNamespaceRolesToTerraform, true)(this._namespaceRoles.internalValue),
      service_api_certificate: cdktf.listMapper(serviceCredentialServiceApiCertificateToTerraform, true)(this._serviceApiCertificate.internalValue),
      site_kubeconfig: cdktf.listMapper(serviceCredentialSiteKubeconfigToTerraform, true)(this._siteKubeconfig.internalValue),
      vk8s_kubeconfig: cdktf.listMapper(serviceCredentialVk8SKubeconfigToTerraform, true)(this._vk8SKubeconfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_approval_api_token: {
        value: cdktf.booleanToHclTerraform(this._automaticApprovalApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_days: {
        value: cdktf.numberToHclTerraform(this._expirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      service_api_token: {
        value: cdktf.booleanToHclTerraform(this._serviceApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_credential_type: {
        value: cdktf.stringToHclTerraform(this._serviceCredentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      namespace_roles: {
        value: cdktf.listMapperHcl(serviceCredentialNamespaceRolesToHclTerraform, true)(this._namespaceRoles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCredentialNamespaceRolesList",
      },
      service_api_certificate: {
        value: cdktf.listMapperHcl(serviceCredentialServiceApiCertificateToHclTerraform, true)(this._serviceApiCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCredentialServiceApiCertificateList",
      },
      site_kubeconfig: {
        value: cdktf.listMapperHcl(serviceCredentialSiteKubeconfigToHclTerraform, true)(this._siteKubeconfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCredentialSiteKubeconfigList",
      },
      vk8s_kubeconfig: {
        value: cdktf.listMapperHcl(serviceCredentialVk8SKubeconfigToHclTerraform, true)(this._vk8SKubeconfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCredentialVk8SKubeconfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
