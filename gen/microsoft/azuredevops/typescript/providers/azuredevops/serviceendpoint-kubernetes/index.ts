// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL to Kubernete's API-Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#apiserver_url ServiceendpointKubernetes#apiserver_url}
  */
  readonly apiserverUrl: string;
  /**
  * Type of credentials to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#authorization_type ServiceendpointKubernetes#authorization_type}
  */
  readonly authorizationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#description ServiceendpointKubernetes#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#id ServiceendpointKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#project_id ServiceendpointKubernetes#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#service_endpoint_name ServiceendpointKubernetes#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * azure_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#azure_subscription ServiceendpointKubernetes#azure_subscription}
  */
  readonly azureSubscription?: ServiceendpointKubernetesAzureSubscription[] | cdktf.IResolvable;
  /**
  * kubeconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#kubeconfig ServiceendpointKubernetes#kubeconfig}
  */
  readonly kubeconfig?: ServiceendpointKubernetesKubeconfig;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#service_account ServiceendpointKubernetes#service_account}
  */
  readonly serviceAccount?: ServiceendpointKubernetesServiceAccount;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#timeouts ServiceendpointKubernetes#timeouts}
  */
  readonly timeouts?: ServiceendpointKubernetesTimeouts;
}
export interface ServiceendpointKubernetesAzureSubscription {
  /**
  * type of azure cloud: AzureCloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#azure_environment ServiceendpointKubernetes#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * Enable Cluster Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#cluster_admin ServiceendpointKubernetes#cluster_admin}
  */
  readonly clusterAdmin?: boolean | cdktf.IResolvable;
  /**
  * name of aks-resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#cluster_name ServiceendpointKubernetes#cluster_name}
  */
  readonly clusterName: string;
  /**
  * accessed namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#namespace ServiceendpointKubernetes#namespace}
  */
  readonly namespace?: string;
  /**
  * id of resourcegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#resourcegroup_id ServiceendpointKubernetes#resourcegroup_id}
  */
  readonly resourcegroupId: string;
  /**
  * id of azure subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#subscription_id ServiceendpointKubernetes#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * name of azure subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#subscription_name ServiceendpointKubernetes#subscription_name}
  */
  readonly subscriptionName: string;
  /**
  * id of aad-tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#tenant_id ServiceendpointKubernetes#tenant_id}
  */
  readonly tenantId: string;
}

export function serviceendpointKubernetesAzureSubscriptionToTerraform(struct?: ServiceendpointKubernetesAzureSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_environment: cdktf.stringToTerraform(struct!.azureEnvironment),
    cluster_admin: cdktf.booleanToTerraform(struct!.clusterAdmin),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resourcegroup_id: cdktf.stringToTerraform(struct!.resourcegroupId),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    subscription_name: cdktf.stringToTerraform(struct!.subscriptionName),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function serviceendpointKubernetesAzureSubscriptionToHclTerraform(struct?: ServiceendpointKubernetesAzureSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_environment: {
      value: cdktf.stringToHclTerraform(struct!.azureEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_admin: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
    resourcegroup_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroupId),
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
    subscription_name: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointKubernetesAzureSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceendpointKubernetesAzureSubscription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEnvironment = this._azureEnvironment;
    }
    if (this._clusterAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAdmin = this._clusterAdmin;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourcegroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcegroupId = this._resourcegroupId;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._subscriptionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionName = this._subscriptionName;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointKubernetesAzureSubscription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureEnvironment = undefined;
      this._clusterAdmin = undefined;
      this._clusterName = undefined;
      this._namespace = undefined;
      this._resourcegroupId = undefined;
      this._subscriptionId = undefined;
      this._subscriptionName = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureEnvironment = value.azureEnvironment;
      this._clusterAdmin = value.clusterAdmin;
      this._clusterName = value.clusterName;
      this._namespace = value.namespace;
      this._resourcegroupId = value.resourcegroupId;
      this._subscriptionId = value.subscriptionId;
      this._subscriptionName = value.subscriptionName;
      this._tenantId = value.tenantId;
    }
  }

  // azure_environment - computed: false, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this.getStringAttribute('azure_environment');
  }
  public set azureEnvironment(value: string) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // cluster_admin - computed: false, optional: true, required: false
  private _clusterAdmin?: boolean | cdktf.IResolvable; 
  public get clusterAdmin() {
    return this.getBooleanAttribute('cluster_admin');
  }
  public set clusterAdmin(value: boolean | cdktf.IResolvable) {
    this._clusterAdmin = value;
  }
  public resetClusterAdmin() {
    this._clusterAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminInput() {
    return this._clusterAdmin;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // resourcegroup_id - computed: false, optional: false, required: true
  private _resourcegroupId?: string; 
  public get resourcegroupId() {
    return this.getStringAttribute('resourcegroup_id');
  }
  public set resourcegroupId(value: string) {
    this._resourcegroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcegroupIdInput() {
    return this._resourcegroupId;
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

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class ServiceendpointKubernetesAzureSubscriptionList extends cdktf.ComplexList {
  public internalValue? : ServiceendpointKubernetesAzureSubscription[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceendpointKubernetesAzureSubscriptionOutputReference {
    return new ServiceendpointKubernetesAzureSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceendpointKubernetesKubeconfig {
  /**
  * Enable this if your authentication uses untrusted certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#accept_untrusted_certs ServiceendpointKubernetes#accept_untrusted_certs}
  */
  readonly acceptUntrustedCerts?: boolean | cdktf.IResolvable;
  /**
  * Context of your cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#cluster_context ServiceendpointKubernetes#cluster_context}
  */
  readonly clusterContext?: string;
  /**
  * Content of the kubeconfig file. The configuration information in your kubeconfig file allows Kubernetes clients to talk to your Kubernetes API servers. This file is used by kubectl and all supported Kubernetes clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#kube_config ServiceendpointKubernetes#kube_config}
  */
  readonly kubeConfig: string;
}

export function serviceendpointKubernetesKubeconfigToTerraform(struct?: ServiceendpointKubernetesKubeconfigOutputReference | ServiceendpointKubernetesKubeconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_untrusted_certs: cdktf.booleanToTerraform(struct!.acceptUntrustedCerts),
    cluster_context: cdktf.stringToTerraform(struct!.clusterContext),
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
  }
}


export function serviceendpointKubernetesKubeconfigToHclTerraform(struct?: ServiceendpointKubernetesKubeconfigOutputReference | ServiceendpointKubernetesKubeconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_untrusted_certs: {
      value: cdktf.booleanToHclTerraform(struct!.acceptUntrustedCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_context: {
      value: cdktf.stringToHclTerraform(struct!.clusterContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_config: {
      value: cdktf.stringToHclTerraform(struct!.kubeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointKubernetesKubeconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointKubernetesKubeconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptUntrustedCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptUntrustedCerts = this._acceptUntrustedCerts;
    }
    if (this._clusterContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterContext = this._clusterContext;
    }
    if (this._kubeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointKubernetesKubeconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptUntrustedCerts = undefined;
      this._clusterContext = undefined;
      this._kubeConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptUntrustedCerts = value.acceptUntrustedCerts;
      this._clusterContext = value.clusterContext;
      this._kubeConfig = value.kubeConfig;
    }
  }

  // accept_untrusted_certs - computed: false, optional: true, required: false
  private _acceptUntrustedCerts?: boolean | cdktf.IResolvable; 
  public get acceptUntrustedCerts() {
    return this.getBooleanAttribute('accept_untrusted_certs');
  }
  public set acceptUntrustedCerts(value: boolean | cdktf.IResolvable) {
    this._acceptUntrustedCerts = value;
  }
  public resetAcceptUntrustedCerts() {
    this._acceptUntrustedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUntrustedCertsInput() {
    return this._acceptUntrustedCerts;
  }

  // cluster_context - computed: true, optional: true, required: false
  private _clusterContext?: string; 
  public get clusterContext() {
    return this.getStringAttribute('cluster_context');
  }
  public set clusterContext(value: string) {
    this._clusterContext = value;
  }
  public resetClusterContext() {
    this._clusterContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterContextInput() {
    return this._clusterContext;
  }

  // kube_config - computed: false, optional: false, required: true
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }
}
export interface ServiceendpointKubernetesServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#accept_untrusted_certs ServiceendpointKubernetes#accept_untrusted_certs}
  */
  readonly acceptUntrustedCerts?: boolean | cdktf.IResolvable;
  /**
  * Secret cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#ca_cert ServiceendpointKubernetes#ca_cert}
  */
  readonly caCert: string;
  /**
  * Secret token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#token ServiceendpointKubernetes#token}
  */
  readonly token: string;
}

export function serviceendpointKubernetesServiceAccountToTerraform(struct?: ServiceendpointKubernetesServiceAccountOutputReference | ServiceendpointKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_untrusted_certs: cdktf.booleanToTerraform(struct!.acceptUntrustedCerts),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceendpointKubernetesServiceAccountToHclTerraform(struct?: ServiceendpointKubernetesServiceAccountOutputReference | ServiceendpointKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_untrusted_certs: {
      value: cdktf.booleanToHclTerraform(struct!.acceptUntrustedCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointKubernetesServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointKubernetesServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptUntrustedCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptUntrustedCerts = this._acceptUntrustedCerts;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointKubernetesServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptUntrustedCerts = undefined;
      this._caCert = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptUntrustedCerts = value.acceptUntrustedCerts;
      this._caCert = value.caCert;
      this._token = value.token;
    }
  }

  // accept_untrusted_certs - computed: false, optional: true, required: false
  private _acceptUntrustedCerts?: boolean | cdktf.IResolvable; 
  public get acceptUntrustedCerts() {
    return this.getBooleanAttribute('accept_untrusted_certs');
  }
  public set acceptUntrustedCerts(value: boolean | cdktf.IResolvable) {
    this._acceptUntrustedCerts = value;
  }
  public resetAcceptUntrustedCerts() {
    this._acceptUntrustedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUntrustedCertsInput() {
    return this._acceptUntrustedCerts;
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ServiceendpointKubernetesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#create ServiceendpointKubernetes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#delete ServiceendpointKubernetes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#read ServiceendpointKubernetes#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#update ServiceendpointKubernetes#update}
  */
  readonly update?: string;
}

export function serviceendpointKubernetesTimeoutsToTerraform(struct?: ServiceendpointKubernetesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceendpointKubernetesTimeoutsToHclTerraform(struct?: ServiceendpointKubernetesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointKubernetesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointKubernetesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointKubernetesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes azuredevops_serviceendpoint_kubernetes}
*/
export class ServiceendpointKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointKubernetes to import
  * @param importFromId The id of the existing ServiceendpointKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/serviceendpoint_kubernetes azuredevops_serviceendpoint_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiserverUrl = config.apiserverUrl;
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._azureSubscription.internalValue = config.azureSubscription;
    this._kubeconfig.internalValue = config.kubeconfig;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiserver_url - computed: false, optional: false, required: true
  private _apiserverUrl?: string; 
  public get apiserverUrl() {
    return this.getStringAttribute('apiserver_url');
  }
  public set apiserverUrl(value: string) {
    this._apiserverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverUrlInput() {
    return this._apiserverUrl;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // authorization_type - computed: false, optional: false, required: true
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
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

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // azure_subscription - computed: false, optional: true, required: false
  private _azureSubscription = new ServiceendpointKubernetesAzureSubscriptionList(this, "azure_subscription", true);
  public get azureSubscription() {
    return this._azureSubscription;
  }
  public putAzureSubscription(value: ServiceendpointKubernetesAzureSubscription[] | cdktf.IResolvable) {
    this._azureSubscription.internalValue = value;
  }
  public resetAzureSubscription() {
    this._azureSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionInput() {
    return this._azureSubscription.internalValue;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig = new ServiceendpointKubernetesKubeconfigOutputReference(this, "kubeconfig");
  public get kubeconfig() {
    return this._kubeconfig;
  }
  public putKubeconfig(value: ServiceendpointKubernetesKubeconfig) {
    this._kubeconfig.internalValue = value;
  }
  public resetKubeconfig() {
    this._kubeconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new ServiceendpointKubernetesServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ServiceendpointKubernetesServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointKubernetesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointKubernetesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apiserver_url: cdktf.stringToTerraform(this._apiserverUrl),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      azure_subscription: cdktf.listMapper(serviceendpointKubernetesAzureSubscriptionToTerraform, true)(this._azureSubscription.internalValue),
      kubeconfig: serviceendpointKubernetesKubeconfigToTerraform(this._kubeconfig.internalValue),
      service_account: serviceendpointKubernetesServiceAccountToTerraform(this._serviceAccount.internalValue),
      timeouts: serviceendpointKubernetesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiserver_url: {
        value: cdktf.stringToHclTerraform(this._apiserverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription: {
        value: cdktf.listMapperHcl(serviceendpointKubernetesAzureSubscriptionToHclTerraform, true)(this._azureSubscription.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceendpointKubernetesAzureSubscriptionList",
      },
      kubeconfig: {
        value: serviceendpointKubernetesKubeconfigToHclTerraform(this._kubeconfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointKubernetesKubeconfigList",
      },
      service_account: {
        value: serviceendpointKubernetesServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointKubernetesServiceAccountList",
      },
      timeouts: {
        value: serviceendpointKubernetesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointKubernetesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
