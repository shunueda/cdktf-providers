// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DwAwsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloudera resource name of the environment that the cluster will read from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#crn DwAwsCluster#crn}
  */
  readonly crn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#custom_registry_options DwAwsCluster#custom_registry_options}
  */
  readonly customRegistryOptions?: DwAwsClusterCustomRegistryOptions;
  /**
  * The custom subdomain to keep compatibility with old URL format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#custom_subdomain DwAwsCluster#custom_subdomain}
  */
  readonly customSubdomain?: string;
  /**
  * The number of days to retain database backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#database_backup_retention_days DwAwsCluster#database_backup_retention_days}
  */
  readonly databaseBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#instance_settings DwAwsCluster#instance_settings}
  */
  readonly instanceSettings?: DwAwsClusterInstanceSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#network_settings DwAwsCluster#network_settings}
  */
  readonly networkSettings: DwAwsClusterNetworkSettings;
  /**
  * The managed policy ARN to be attached to the created node instance role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#node_role_cdw_managed_policy_arn DwAwsCluster#node_role_cdw_managed_policy_arn}
  */
  readonly nodeRoleCdwManagedPolicyArn?: string;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#polling_options DwAwsCluster#polling_options}
  */
  readonly pollingOptions?: DwAwsClusterPollingOptions;
}
export interface DwAwsClusterCustomRegistryOptions {
  /**
  * Registry type, supported values are ECR or ACR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#registry_type DwAwsCluster#registry_type}
  */
  readonly registryType: string;
  /**
  * The URL of the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#repository_url DwAwsCluster#repository_url}
  */
  readonly repositoryUrl: string;
}

export function dwAwsClusterCustomRegistryOptionsToTerraform(struct?: DwAwsClusterCustomRegistryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_type: cdktf.stringToTerraform(struct!.registryType),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function dwAwsClusterCustomRegistryOptionsToHclTerraform(struct?: DwAwsClusterCustomRegistryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_type: {
      value: cdktf.stringToHclTerraform(struct!.registryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwAwsClusterCustomRegistryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwAwsClusterCustomRegistryOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryType = this._registryType;
    }
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwAwsClusterCustomRegistryOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryType = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryType = value.registryType;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // registry_type - computed: false, optional: false, required: true
  private _registryType?: string; 
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }
  public set registryType(value: string) {
    this._registryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTypeInput() {
    return this._registryType;
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}
export interface DwAwsClusterInstanceSettings {
  /**
  * The additional instance types that the environment is allowed to use, listed in their priority order. They will be used instead of the primary compute instance type in case it is unavailable. You cannot include any instance type that was already indicated in computeInstanceTypes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#additional_instance_types DwAwsCluster#additional_instance_types}
  */
  readonly additionalInstanceTypes?: string[];
  /**
  * The custom AMI ID to use for worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#custom_ami_id DwAwsCluster#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Whether to use spot instances for worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#enable_spot_instances DwAwsCluster#enable_spot_instances}
  */
  readonly enableSpotInstances?: boolean | cdktf.IResolvable;
}

export function dwAwsClusterInstanceSettingsToTerraform(struct?: DwAwsClusterInstanceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalInstanceTypes),
    custom_ami_id: cdktf.stringToTerraform(struct!.customAmiId),
    enable_spot_instances: cdktf.booleanToTerraform(struct!.enableSpotInstances),
  }
}


export function dwAwsClusterInstanceSettingsToHclTerraform(struct?: DwAwsClusterInstanceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_ami_id: {
      value: cdktf.stringToHclTerraform(struct!.customAmiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_spot_instances: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpotInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwAwsClusterInstanceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwAwsClusterInstanceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInstanceTypes = this._additionalInstanceTypes;
    }
    if (this._customAmiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAmiId = this._customAmiId;
    }
    if (this._enableSpotInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpotInstances = this._enableSpotInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwAwsClusterInstanceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalInstanceTypes = undefined;
      this._customAmiId = undefined;
      this._enableSpotInstances = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalInstanceTypes = value.additionalInstanceTypes;
      this._customAmiId = value.customAmiId;
      this._enableSpotInstances = value.enableSpotInstances;
    }
  }

  // additional_instance_types - computed: false, optional: true, required: false
  private _additionalInstanceTypes?: string[]; 
  public get additionalInstanceTypes() {
    return this.getListAttribute('additional_instance_types');
  }
  public set additionalInstanceTypes(value: string[]) {
    this._additionalInstanceTypes = value;
  }
  public resetAdditionalInstanceTypes() {
    this._additionalInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInstanceTypesInput() {
    return this._additionalInstanceTypes;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string; 
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId;
  }

  // enable_spot_instances - computed: true, optional: true, required: false
  private _enableSpotInstances?: boolean | cdktf.IResolvable; 
  public get enableSpotInstances() {
    return this.getBooleanAttribute('enable_spot_instances');
  }
  public set enableSpotInstances(value: boolean | cdktf.IResolvable) {
    this._enableSpotInstances = value;
  }
  public resetEnableSpotInstances() {
    this._enableSpotInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpotInstancesInput() {
    return this._enableSpotInstances;
  }
}
export interface DwAwsClusterNetworkSettings {
  /**
  * Enable private EKS API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#enable_private_eks DwAwsCluster#enable_private_eks}
  */
  readonly enablePrivateEks?: boolean | cdktf.IResolvable;
  /**
  * The list of subnet IDs for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#load_balancer_subnet_ids DwAwsCluster#load_balancer_subnet_ids}
  */
  readonly loadBalancerSubnetIds: string[];
  /**
  * Whether to use overlay network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#use_overlay_network DwAwsCluster#use_overlay_network}
  */
  readonly useOverlayNetwork: boolean | cdktf.IResolvable;
  /**
  * Whether to use private IP addresses for the load balancer. Determines workload endpoint access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#use_private_load_balancer DwAwsCluster#use_private_load_balancer}
  */
  readonly usePrivateLoadBalancer: boolean | cdktf.IResolvable;
  /**
  * Whether to use public IP addresses for worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#use_public_worker_node DwAwsCluster#use_public_worker_node}
  */
  readonly usePublicWorkerNode: boolean | cdktf.IResolvable;
  /**
  * The list of IP CIDRs to allow access for kubernetes cluster API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#whitelist_k8s_cluster_access_ip_cidrs DwAwsCluster#whitelist_k8s_cluster_access_ip_cidrs}
  */
  readonly whitelistK8SClusterAccessIpCidrs?: string[];
  /**
  * The list of IP CIDRs to allow access for workload endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#whitelist_workload_access_ip_cidrs DwAwsCluster#whitelist_workload_access_ip_cidrs}
  */
  readonly whitelistWorkloadAccessIpCidrs?: string[];
  /**
  * The list of subnet IDs for worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#worker_subnet_ids DwAwsCluster#worker_subnet_ids}
  */
  readonly workerSubnetIds: string[];
}

export function dwAwsClusterNetworkSettingsToTerraform(struct?: DwAwsClusterNetworkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_eks: cdktf.booleanToTerraform(struct!.enablePrivateEks),
    load_balancer_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSubnetIds),
    use_overlay_network: cdktf.booleanToTerraform(struct!.useOverlayNetwork),
    use_private_load_balancer: cdktf.booleanToTerraform(struct!.usePrivateLoadBalancer),
    use_public_worker_node: cdktf.booleanToTerraform(struct!.usePublicWorkerNode),
    whitelist_k8s_cluster_access_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistK8SClusterAccessIpCidrs),
    whitelist_workload_access_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistWorkloadAccessIpCidrs),
    worker_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workerSubnetIds),
  }
}


export function dwAwsClusterNetworkSettingsToHclTerraform(struct?: DwAwsClusterNetworkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_eks: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_overlay_network: {
      value: cdktf.booleanToHclTerraform(struct!.useOverlayNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_private_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_public_worker_node: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicWorkerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    whitelist_k8s_cluster_access_ip_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistK8SClusterAccessIpCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    whitelist_workload_access_ip_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistWorkloadAccessIpCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workerSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwAwsClusterNetworkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwAwsClusterNetworkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEks = this._enablePrivateEks;
    }
    if (this._loadBalancerSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSubnetIds = this._loadBalancerSubnetIds;
    }
    if (this._useOverlayNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOverlayNetwork = this._useOverlayNetwork;
    }
    if (this._usePrivateLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateLoadBalancer = this._usePrivateLoadBalancer;
    }
    if (this._usePublicWorkerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicWorkerNode = this._usePublicWorkerNode;
    }
    if (this._whitelistK8SClusterAccessIpCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistK8SClusterAccessIpCidrs = this._whitelistK8SClusterAccessIpCidrs;
    }
    if (this._whitelistWorkloadAccessIpCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistWorkloadAccessIpCidrs = this._whitelistWorkloadAccessIpCidrs;
    }
    if (this._workerSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerSubnetIds = this._workerSubnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwAwsClusterNetworkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePrivateEks = undefined;
      this._loadBalancerSubnetIds = undefined;
      this._useOverlayNetwork = undefined;
      this._usePrivateLoadBalancer = undefined;
      this._usePublicWorkerNode = undefined;
      this._whitelistK8SClusterAccessIpCidrs = undefined;
      this._whitelistWorkloadAccessIpCidrs = undefined;
      this._workerSubnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePrivateEks = value.enablePrivateEks;
      this._loadBalancerSubnetIds = value.loadBalancerSubnetIds;
      this._useOverlayNetwork = value.useOverlayNetwork;
      this._usePrivateLoadBalancer = value.usePrivateLoadBalancer;
      this._usePublicWorkerNode = value.usePublicWorkerNode;
      this._whitelistK8SClusterAccessIpCidrs = value.whitelistK8SClusterAccessIpCidrs;
      this._whitelistWorkloadAccessIpCidrs = value.whitelistWorkloadAccessIpCidrs;
      this._workerSubnetIds = value.workerSubnetIds;
    }
  }

  // enable_private_eks - computed: true, optional: true, required: false
  private _enablePrivateEks?: boolean | cdktf.IResolvable; 
  public get enablePrivateEks() {
    return this.getBooleanAttribute('enable_private_eks');
  }
  public set enablePrivateEks(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEks = value;
  }
  public resetEnablePrivateEks() {
    this._enablePrivateEks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEksInput() {
    return this._enablePrivateEks;
  }

  // load_balancer_subnet_ids - computed: false, optional: false, required: true
  private _loadBalancerSubnetIds?: string[]; 
  public get loadBalancerSubnetIds() {
    return this.getListAttribute('load_balancer_subnet_ids');
  }
  public set loadBalancerSubnetIds(value: string[]) {
    this._loadBalancerSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSubnetIdsInput() {
    return this._loadBalancerSubnetIds;
  }

  // use_overlay_network - computed: false, optional: false, required: true
  private _useOverlayNetwork?: boolean | cdktf.IResolvable; 
  public get useOverlayNetwork() {
    return this.getBooleanAttribute('use_overlay_network');
  }
  public set useOverlayNetwork(value: boolean | cdktf.IResolvable) {
    this._useOverlayNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useOverlayNetworkInput() {
    return this._useOverlayNetwork;
  }

  // use_private_load_balancer - computed: false, optional: false, required: true
  private _usePrivateLoadBalancer?: boolean | cdktf.IResolvable; 
  public get usePrivateLoadBalancer() {
    return this.getBooleanAttribute('use_private_load_balancer');
  }
  public set usePrivateLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._usePrivateLoadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateLoadBalancerInput() {
    return this._usePrivateLoadBalancer;
  }

  // use_public_worker_node - computed: false, optional: false, required: true
  private _usePublicWorkerNode?: boolean | cdktf.IResolvable; 
  public get usePublicWorkerNode() {
    return this.getBooleanAttribute('use_public_worker_node');
  }
  public set usePublicWorkerNode(value: boolean | cdktf.IResolvable) {
    this._usePublicWorkerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicWorkerNodeInput() {
    return this._usePublicWorkerNode;
  }

  // whitelist_k8s_cluster_access_ip_cidrs - computed: false, optional: true, required: false
  private _whitelistK8SClusterAccessIpCidrs?: string[]; 
  public get whitelistK8SClusterAccessIpCidrs() {
    return this.getListAttribute('whitelist_k8s_cluster_access_ip_cidrs');
  }
  public set whitelistK8SClusterAccessIpCidrs(value: string[]) {
    this._whitelistK8SClusterAccessIpCidrs = value;
  }
  public resetWhitelistK8SClusterAccessIpCidrs() {
    this._whitelistK8SClusterAccessIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistK8SClusterAccessIpCidrsInput() {
    return this._whitelistK8SClusterAccessIpCidrs;
  }

  // whitelist_workload_access_ip_cidrs - computed: false, optional: true, required: false
  private _whitelistWorkloadAccessIpCidrs?: string[]; 
  public get whitelistWorkloadAccessIpCidrs() {
    return this.getListAttribute('whitelist_workload_access_ip_cidrs');
  }
  public set whitelistWorkloadAccessIpCidrs(value: string[]) {
    this._whitelistWorkloadAccessIpCidrs = value;
  }
  public resetWhitelistWorkloadAccessIpCidrs() {
    this._whitelistWorkloadAccessIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistWorkloadAccessIpCidrsInput() {
    return this._whitelistWorkloadAccessIpCidrs;
  }

  // worker_subnet_ids - computed: false, optional: false, required: true
  private _workerSubnetIds?: string[]; 
  public get workerSubnetIds() {
    return this.getListAttribute('worker_subnet_ids');
  }
  public set workerSubnetIds(value: string[]) {
    this._workerSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerSubnetIdsInput() {
    return this._workerSubnetIds;
  }
}
export interface DwAwsClusterPollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#async DwAwsCluster#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#call_failure_threshold DwAwsCluster#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#polling_timeout DwAwsCluster#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function dwAwsClusterPollingOptionsToTerraform(struct?: DwAwsClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function dwAwsClusterPollingOptionsToHclTerraform(struct?: DwAwsClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwAwsClusterPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwAwsClusterPollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwAwsClusterPollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster cdp_dw_aws_cluster}
*/
export class DwAwsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_dw_aws_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DwAwsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DwAwsCluster to import
  * @param importFromId The id of the existing DwAwsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DwAwsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_dw_aws_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_aws_cluster cdp_dw_aws_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DwAwsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DwAwsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_dw_aws_cluster',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crn = config.crn;
    this._customRegistryOptions.internalValue = config.customRegistryOptions;
    this._customSubdomain = config.customSubdomain;
    this._databaseBackupRetentionDays = config.databaseBackupRetentionDays;
    this._instanceSettings.internalValue = config.instanceSettings;
    this._networkSettings.internalValue = config.networkSettings;
    this._nodeRoleCdwManagedPolicyArn = config.nodeRoleCdwManagedPolicyArn;
    this._pollingOptions.internalValue = config.pollingOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // crn - computed: false, optional: false, required: true
  private _crn?: string; 
  public get crn() {
    return this.getStringAttribute('crn');
  }
  public set crn(value: string) {
    this._crn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crnInput() {
    return this._crn;
  }

  // custom_registry_options - computed: false, optional: true, required: false
  private _customRegistryOptions = new DwAwsClusterCustomRegistryOptionsOutputReference(this, "custom_registry_options");
  public get customRegistryOptions() {
    return this._customRegistryOptions;
  }
  public putCustomRegistryOptions(value: DwAwsClusterCustomRegistryOptions) {
    this._customRegistryOptions.internalValue = value;
  }
  public resetCustomRegistryOptions() {
    this._customRegistryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRegistryOptionsInput() {
    return this._customRegistryOptions.internalValue;
  }

  // custom_subdomain - computed: false, optional: true, required: false
  private _customSubdomain?: string; 
  public get customSubdomain() {
    return this.getStringAttribute('custom_subdomain');
  }
  public set customSubdomain(value: string) {
    this._customSubdomain = value;
  }
  public resetCustomSubdomain() {
    this._customSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubdomainInput() {
    return this._customSubdomain;
  }

  // database_backup_retention_days - computed: false, optional: true, required: false
  private _databaseBackupRetentionDays?: number; 
  public get databaseBackupRetentionDays() {
    return this.getNumberAttribute('database_backup_retention_days');
  }
  public set databaseBackupRetentionDays(value: number) {
    this._databaseBackupRetentionDays = value;
  }
  public resetDatabaseBackupRetentionDays() {
    this._databaseBackupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseBackupRetentionDaysInput() {
    return this._databaseBackupRetentionDays;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_settings - computed: false, optional: true, required: false
  private _instanceSettings = new DwAwsClusterInstanceSettingsOutputReference(this, "instance_settings");
  public get instanceSettings() {
    return this._instanceSettings;
  }
  public putInstanceSettings(value: DwAwsClusterInstanceSettings) {
    this._instanceSettings.internalValue = value;
  }
  public resetInstanceSettings() {
    this._instanceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSettingsInput() {
    return this._instanceSettings.internalValue;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_settings - computed: false, optional: false, required: true
  private _networkSettings = new DwAwsClusterNetworkSettingsOutputReference(this, "network_settings");
  public get networkSettings() {
    return this._networkSettings;
  }
  public putNetworkSettings(value: DwAwsClusterNetworkSettings) {
    this._networkSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSettingsInput() {
    return this._networkSettings.internalValue;
  }

  // node_role_cdw_managed_policy_arn - computed: false, optional: true, required: false
  private _nodeRoleCdwManagedPolicyArn?: string; 
  public get nodeRoleCdwManagedPolicyArn() {
    return this.getStringAttribute('node_role_cdw_managed_policy_arn');
  }
  public set nodeRoleCdwManagedPolicyArn(value: string) {
    this._nodeRoleCdwManagedPolicyArn = value;
  }
  public resetNodeRoleCdwManagedPolicyArn() {
    this._nodeRoleCdwManagedPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleCdwManagedPolicyArnInput() {
    return this._nodeRoleCdwManagedPolicyArn;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DwAwsClusterPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DwAwsClusterPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crn: cdktf.stringToTerraform(this._crn),
      custom_registry_options: dwAwsClusterCustomRegistryOptionsToTerraform(this._customRegistryOptions.internalValue),
      custom_subdomain: cdktf.stringToTerraform(this._customSubdomain),
      database_backup_retention_days: cdktf.numberToTerraform(this._databaseBackupRetentionDays),
      instance_settings: dwAwsClusterInstanceSettingsToTerraform(this._instanceSettings.internalValue),
      network_settings: dwAwsClusterNetworkSettingsToTerraform(this._networkSettings.internalValue),
      node_role_cdw_managed_policy_arn: cdktf.stringToTerraform(this._nodeRoleCdwManagedPolicyArn),
      polling_options: dwAwsClusterPollingOptionsToTerraform(this._pollingOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crn: {
        value: cdktf.stringToHclTerraform(this._crn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_registry_options: {
        value: dwAwsClusterCustomRegistryOptionsToHclTerraform(this._customRegistryOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwAwsClusterCustomRegistryOptions",
      },
      custom_subdomain: {
        value: cdktf.stringToHclTerraform(this._customSubdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._databaseBackupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_settings: {
        value: dwAwsClusterInstanceSettingsToHclTerraform(this._instanceSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwAwsClusterInstanceSettings",
      },
      network_settings: {
        value: dwAwsClusterNetworkSettingsToHclTerraform(this._networkSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwAwsClusterNetworkSettings",
      },
      node_role_cdw_managed_policy_arn: {
        value: cdktf.stringToHclTerraform(this._nodeRoleCdwManagedPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_options: {
        value: dwAwsClusterPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwAwsClusterPollingOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
