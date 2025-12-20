// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#annotations Namespace#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the k8s namespace managed by rancher v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#labels Namespace#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the k8s namespace managed by rancher v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * Project ID where k8s namespace belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#project_id Namespace#project_id}
  */
  readonly projectId: string;
  /**
  * Wait for cluster becomes active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#wait_for_cluster Namespace#wait_for_cluster}
  */
  readonly waitForCluster?: boolean | cdktf.IResolvable;
  /**
  * container_resource_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#container_resource_limit Namespace#container_resource_limit}
  */
  readonly containerResourceLimit?: NamespaceContainerResourceLimit;
  /**
  * resource_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#resource_quota Namespace#resource_quota}
  */
  readonly resourceQuota?: NamespaceResourceQuota;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#timeouts Namespace#timeouts}
  */
  readonly timeouts?: NamespaceTimeouts;
}
export interface NamespaceContainerResourceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#limits_cpu Namespace#limits_cpu}
  */
  readonly limitsCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#limits_memory Namespace#limits_memory}
  */
  readonly limitsMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#requests_cpu Namespace#requests_cpu}
  */
  readonly requestsCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#requests_memory Namespace#requests_memory}
  */
  readonly requestsMemory?: string;
}

export function namespaceContainerResourceLimitToTerraform(struct?: NamespaceContainerResourceLimitOutputReference | NamespaceContainerResourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits_cpu: cdktf.stringToTerraform(struct!.limitsCpu),
    limits_memory: cdktf.stringToTerraform(struct!.limitsMemory),
    requests_cpu: cdktf.stringToTerraform(struct!.requestsCpu),
    requests_memory: cdktf.stringToTerraform(struct!.requestsMemory),
  }
}


export function namespaceContainerResourceLimitToHclTerraform(struct?: NamespaceContainerResourceLimitOutputReference | NamespaceContainerResourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceContainerResourceLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceContainerResourceLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsCpu = this._limitsCpu;
    }
    if (this._limitsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsMemory = this._limitsMemory;
    }
    if (this._requestsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsCpu = this._requestsCpu;
    }
    if (this._requestsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsMemory = this._requestsMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceContainerResourceLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitsCpu = undefined;
      this._limitsMemory = undefined;
      this._requestsCpu = undefined;
      this._requestsMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitsCpu = value.limitsCpu;
      this._limitsMemory = value.limitsMemory;
      this._requestsCpu = value.requestsCpu;
      this._requestsMemory = value.requestsMemory;
    }
  }

  // limits_cpu - computed: false, optional: true, required: false
  private _limitsCpu?: string; 
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }
  public set limitsCpu(value: string) {
    this._limitsCpu = value;
  }
  public resetLimitsCpu() {
    this._limitsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsCpuInput() {
    return this._limitsCpu;
  }

  // limits_memory - computed: false, optional: true, required: false
  private _limitsMemory?: string; 
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }
  public set limitsMemory(value: string) {
    this._limitsMemory = value;
  }
  public resetLimitsMemory() {
    this._limitsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsMemoryInput() {
    return this._limitsMemory;
  }

  // requests_cpu - computed: false, optional: true, required: false
  private _requestsCpu?: string; 
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }
  public set requestsCpu(value: string) {
    this._requestsCpu = value;
  }
  public resetRequestsCpu() {
    this._requestsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsCpuInput() {
    return this._requestsCpu;
  }

  // requests_memory - computed: false, optional: true, required: false
  private _requestsMemory?: string; 
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }
  public set requestsMemory(value: string) {
    this._requestsMemory = value;
  }
  public resetRequestsMemory() {
    this._requestsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMemoryInput() {
    return this._requestsMemory;
  }
}
export interface NamespaceResourceQuotaLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#config_maps Namespace#config_maps}
  */
  readonly configMaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#limits_cpu Namespace#limits_cpu}
  */
  readonly limitsCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#limits_memory Namespace#limits_memory}
  */
  readonly limitsMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#persistent_volume_claims Namespace#persistent_volume_claims}
  */
  readonly persistentVolumeClaims?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#pods Namespace#pods}
  */
  readonly pods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#replication_controllers Namespace#replication_controllers}
  */
  readonly replicationControllers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#requests_cpu Namespace#requests_cpu}
  */
  readonly requestsCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#requests_memory Namespace#requests_memory}
  */
  readonly requestsMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#requests_storage Namespace#requests_storage}
  */
  readonly requestsStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#secrets Namespace#secrets}
  */
  readonly secrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#services Namespace#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#services_load_balancers Namespace#services_load_balancers}
  */
  readonly servicesLoadBalancers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#services_node_ports Namespace#services_node_ports}
  */
  readonly servicesNodePorts?: string;
}

export function namespaceResourceQuotaLimitToTerraform(struct?: NamespaceResourceQuotaLimitOutputReference | NamespaceResourceQuotaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.stringToTerraform(struct!.configMaps),
    limits_cpu: cdktf.stringToTerraform(struct!.limitsCpu),
    limits_memory: cdktf.stringToTerraform(struct!.limitsMemory),
    persistent_volume_claims: cdktf.stringToTerraform(struct!.persistentVolumeClaims),
    pods: cdktf.stringToTerraform(struct!.pods),
    replication_controllers: cdktf.stringToTerraform(struct!.replicationControllers),
    requests_cpu: cdktf.stringToTerraform(struct!.requestsCpu),
    requests_memory: cdktf.stringToTerraform(struct!.requestsMemory),
    requests_storage: cdktf.stringToTerraform(struct!.requestsStorage),
    secrets: cdktf.stringToTerraform(struct!.secrets),
    services: cdktf.stringToTerraform(struct!.services),
    services_load_balancers: cdktf.stringToTerraform(struct!.servicesLoadBalancers),
    services_node_ports: cdktf.stringToTerraform(struct!.servicesNodePorts),
  }
}


export function namespaceResourceQuotaLimitToHclTerraform(struct?: NamespaceResourceQuotaLimitOutputReference | NamespaceResourceQuotaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.stringToHclTerraform(struct!.configMaps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claims: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pods: {
      value: cdktf.stringToHclTerraform(struct!.pods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_controllers: {
      value: cdktf.stringToHclTerraform(struct!.replicationControllers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_storage: {
      value: cdktf.stringToHclTerraform(struct!.requestsStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.stringToHclTerraform(struct!.secrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_load_balancers: {
      value: cdktf.stringToHclTerraform(struct!.servicesLoadBalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_node_ports: {
      value: cdktf.stringToHclTerraform(struct!.servicesNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceResourceQuotaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceResourceQuotaLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._limitsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsCpu = this._limitsCpu;
    }
    if (this._limitsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsMemory = this._limitsMemory;
    }
    if (this._persistentVolumeClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaims = this._persistentVolumeClaims;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    if (this._replicationControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationControllers = this._replicationControllers;
    }
    if (this._requestsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsCpu = this._requestsCpu;
    }
    if (this._requestsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsMemory = this._requestsMemory;
    }
    if (this._requestsStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsStorage = this._requestsStorage;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._servicesLoadBalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesLoadBalancers = this._servicesLoadBalancers;
    }
    if (this._servicesNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesNodePorts = this._servicesNodePorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceResourceQuotaLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMaps = undefined;
      this._limitsCpu = undefined;
      this._limitsMemory = undefined;
      this._persistentVolumeClaims = undefined;
      this._pods = undefined;
      this._replicationControllers = undefined;
      this._requestsCpu = undefined;
      this._requestsMemory = undefined;
      this._requestsStorage = undefined;
      this._secrets = undefined;
      this._services = undefined;
      this._servicesLoadBalancers = undefined;
      this._servicesNodePorts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMaps = value.configMaps;
      this._limitsCpu = value.limitsCpu;
      this._limitsMemory = value.limitsMemory;
      this._persistentVolumeClaims = value.persistentVolumeClaims;
      this._pods = value.pods;
      this._replicationControllers = value.replicationControllers;
      this._requestsCpu = value.requestsCpu;
      this._requestsMemory = value.requestsMemory;
      this._requestsStorage = value.requestsStorage;
      this._secrets = value.secrets;
      this._services = value.services;
      this._servicesLoadBalancers = value.servicesLoadBalancers;
      this._servicesNodePorts = value.servicesNodePorts;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string; 
  public get configMaps() {
    return this.getStringAttribute('config_maps');
  }
  public set configMaps(value: string) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // limits_cpu - computed: false, optional: true, required: false
  private _limitsCpu?: string; 
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }
  public set limitsCpu(value: string) {
    this._limitsCpu = value;
  }
  public resetLimitsCpu() {
    this._limitsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsCpuInput() {
    return this._limitsCpu;
  }

  // limits_memory - computed: false, optional: true, required: false
  private _limitsMemory?: string; 
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }
  public set limitsMemory(value: string) {
    this._limitsMemory = value;
  }
  public resetLimitsMemory() {
    this._limitsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsMemoryInput() {
    return this._limitsMemory;
  }

  // persistent_volume_claims - computed: false, optional: true, required: false
  private _persistentVolumeClaims?: string; 
  public get persistentVolumeClaims() {
    return this.getStringAttribute('persistent_volume_claims');
  }
  public set persistentVolumeClaims(value: string) {
    this._persistentVolumeClaims = value;
  }
  public resetPersistentVolumeClaims() {
    this._persistentVolumeClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimsInput() {
    return this._persistentVolumeClaims;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: string; 
  public get pods() {
    return this.getStringAttribute('pods');
  }
  public set pods(value: string) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }

  // replication_controllers - computed: false, optional: true, required: false
  private _replicationControllers?: string; 
  public get replicationControllers() {
    return this.getStringAttribute('replication_controllers');
  }
  public set replicationControllers(value: string) {
    this._replicationControllers = value;
  }
  public resetReplicationControllers() {
    this._replicationControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllersInput() {
    return this._replicationControllers;
  }

  // requests_cpu - computed: false, optional: true, required: false
  private _requestsCpu?: string; 
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }
  public set requestsCpu(value: string) {
    this._requestsCpu = value;
  }
  public resetRequestsCpu() {
    this._requestsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsCpuInput() {
    return this._requestsCpu;
  }

  // requests_memory - computed: false, optional: true, required: false
  private _requestsMemory?: string; 
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }
  public set requestsMemory(value: string) {
    this._requestsMemory = value;
  }
  public resetRequestsMemory() {
    this._requestsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMemoryInput() {
    return this._requestsMemory;
  }

  // requests_storage - computed: false, optional: true, required: false
  private _requestsStorage?: string; 
  public get requestsStorage() {
    return this.getStringAttribute('requests_storage');
  }
  public set requestsStorage(value: string) {
    this._requestsStorage = value;
  }
  public resetRequestsStorage() {
    this._requestsStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsStorageInput() {
    return this._requestsStorage;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string; 
  public get secrets() {
    return this.getStringAttribute('secrets');
  }
  public set secrets(value: string) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // services_load_balancers - computed: false, optional: true, required: false
  private _servicesLoadBalancers?: string; 
  public get servicesLoadBalancers() {
    return this.getStringAttribute('services_load_balancers');
  }
  public set servicesLoadBalancers(value: string) {
    this._servicesLoadBalancers = value;
  }
  public resetServicesLoadBalancers() {
    this._servicesLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesLoadBalancersInput() {
    return this._servicesLoadBalancers;
  }

  // services_node_ports - computed: false, optional: true, required: false
  private _servicesNodePorts?: string; 
  public get servicesNodePorts() {
    return this.getStringAttribute('services_node_ports');
  }
  public set servicesNodePorts(value: string) {
    this._servicesNodePorts = value;
  }
  public resetServicesNodePorts() {
    this._servicesNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesNodePortsInput() {
    return this._servicesNodePorts;
  }
}
export interface NamespaceResourceQuota {
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#limit Namespace#limit}
  */
  readonly limit: NamespaceResourceQuotaLimit;
}

export function namespaceResourceQuotaToTerraform(struct?: NamespaceResourceQuotaOutputReference | NamespaceResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: namespaceResourceQuotaLimitToTerraform(struct!.limit),
  }
}


export function namespaceResourceQuotaToHclTerraform(struct?: NamespaceResourceQuotaOutputReference | NamespaceResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: namespaceResourceQuotaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceResourceQuotaLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceResourceQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceResourceQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceResourceQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit.internalValue = value.limit;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit = new NamespaceResourceQuotaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: NamespaceResourceQuotaLimit) {
    this._limit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}
export interface NamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#create Namespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#delete Namespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#update Namespace#update}
  */
  readonly update?: string;
}

export function namespaceTimeoutsToTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function namespaceTimeoutsToHclTerraform(struct?: NamespaceTimeouts | cdktf.IResolvable): any {
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

export class NamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NamespaceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace rancher2_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/namespace rancher2_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_namespace',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._projectId = config.projectId;
    this._waitForCluster = config.waitForCluster;
    this._containerResourceLimit.internalValue = config.containerResourceLimit;
    this._resourceQuota.internalValue = config.resourceQuota;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
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

  // labels - computed: true, optional: true, required: false
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

  // wait_for_cluster - computed: false, optional: true, required: false
  private _waitForCluster?: boolean | cdktf.IResolvable; 
  public get waitForCluster() {
    return this.getBooleanAttribute('wait_for_cluster');
  }
  public set waitForCluster(value: boolean | cdktf.IResolvable) {
    this._waitForCluster = value;
  }
  public resetWaitForCluster() {
    this._waitForCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForClusterInput() {
    return this._waitForCluster;
  }

  // container_resource_limit - computed: false, optional: true, required: false
  private _containerResourceLimit = new NamespaceContainerResourceLimitOutputReference(this, "container_resource_limit");
  public get containerResourceLimit() {
    return this._containerResourceLimit;
  }
  public putContainerResourceLimit(value: NamespaceContainerResourceLimit) {
    this._containerResourceLimit.internalValue = value;
  }
  public resetContainerResourceLimit() {
    this._containerResourceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceLimitInput() {
    return this._containerResourceLimit.internalValue;
  }

  // resource_quota - computed: false, optional: true, required: false
  private _resourceQuota = new NamespaceResourceQuotaOutputReference(this, "resource_quota");
  public get resourceQuota() {
    return this._resourceQuota;
  }
  public putResourceQuota(value: NamespaceResourceQuota) {
    this._resourceQuota.internalValue = value;
  }
  public resetResourceQuota() {
    this._resourceQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotaInput() {
    return this._resourceQuota.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NamespaceTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      wait_for_cluster: cdktf.booleanToTerraform(this._waitForCluster),
      container_resource_limit: namespaceContainerResourceLimitToTerraform(this._containerResourceLimit.internalValue),
      resource_quota: namespaceResourceQuotaToTerraform(this._resourceQuota.internalValue),
      timeouts: namespaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_cluster: {
        value: cdktf.booleanToHclTerraform(this._waitForCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_resource_limit: {
        value: namespaceContainerResourceLimitToHclTerraform(this._containerResourceLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceContainerResourceLimitList",
      },
      resource_quota: {
        value: namespaceResourceQuotaToHclTerraform(this._resourceQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceResourceQuotaList",
      },
      timeouts: {
        value: namespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
