// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsAzureEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#cascading_delete EnvironmentsAzureEnvironment#cascading_delete}
  */
  readonly cascadingDelete?: boolean | cdktf.IResolvable;
  /**
  * Option to set up Externalized compute cluster for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#compute_cluster EnvironmentsAzureEnvironment#compute_cluster}
  */
  readonly computeCluster?: EnvironmentsAzureEnvironmentComputeCluster;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#create_private_endpoints EnvironmentsAzureEnvironment#create_private_endpoints}
  */
  readonly createPrivateEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#credential_name EnvironmentsAzureEnvironment#credential_name}
  */
  readonly credentialName: string;
  /**
  * Options for deleting the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#delete_options EnvironmentsAzureEnvironment#delete_options}
  */
  readonly deleteOptions?: EnvironmentsAzureEnvironmentDeleteOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#description EnvironmentsAzureEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#enable_outbound_load_balancer EnvironmentsAzureEnvironment#enable_outbound_load_balancer}
  */
  readonly enableOutboundLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#enable_tunnel EnvironmentsAzureEnvironment#enable_tunnel}
  */
  readonly enableTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#encryption_at_host EnvironmentsAzureEnvironment#encryption_at_host}
  */
  readonly encryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#encryption_key_resource_group_name EnvironmentsAzureEnvironment#encryption_key_resource_group_name}
  */
  readonly encryptionKeyResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#encryption_key_url EnvironmentsAzureEnvironment#encryption_key_url}
  */
  readonly encryptionKeyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#encryption_user_managed_identity EnvironmentsAzureEnvironment#encryption_user_managed_identity}
  */
  readonly encryptionUserManagedIdentity?: string;
  /**
  * The scheme for the endpoint gateway. PUBLIC creates an external endpoint that can be accessed over the Internet. Defaults to PRIVATE which restricts the traffic to be internal to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#endpoint_access_gateway_scheme EnvironmentsAzureEnvironment#endpoint_access_gateway_scheme}
  */
  readonly endpointAccessGatewayScheme?: string;
  /**
  * The subnets to use for endpoint access gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#endpoint_access_gateway_subnet_ids EnvironmentsAzureEnvironment#endpoint_access_gateway_subnet_ids}
  */
  readonly endpointAccessGatewaySubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#environment_name EnvironmentsAzureEnvironment#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#existing_network_params EnvironmentsAzureEnvironment#existing_network_params}
  */
  readonly existingNetworkParams: EnvironmentsAzureEnvironmentExistingNetworkParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#freeipa EnvironmentsAzureEnvironment#freeipa}
  */
  readonly freeipa?: EnvironmentsAzureEnvironmentFreeipa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#log_storage EnvironmentsAzureEnvironment#log_storage}
  */
  readonly logStorage: EnvironmentsAzureEnvironmentLogStorage;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#polling_options EnvironmentsAzureEnvironment#polling_options}
  */
  readonly pollingOptions?: EnvironmentsAzureEnvironmentPollingOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#proxy_config_name EnvironmentsAzureEnvironment#proxy_config_name}
  */
  readonly proxyConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#public_key EnvironmentsAzureEnvironment#public_key}
  */
  readonly publicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#region EnvironmentsAzureEnvironment#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#resource_group_name EnvironmentsAzureEnvironment#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#security_access EnvironmentsAzureEnvironment#security_access}
  */
  readonly securityAccess: EnvironmentsAzureEnvironmentSecurityAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#tags EnvironmentsAzureEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#use_public_ip EnvironmentsAzureEnvironment#use_public_ip}
  */
  readonly usePublicIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#workload_analytics EnvironmentsAzureEnvironment#workload_analytics}
  */
  readonly workloadAnalytics?: boolean | cdktf.IResolvable;
}
export interface EnvironmentsAzureEnvironmentComputeClusterConfiguration {
  /**
  * Kubernetes API authorized IP ranges in CIDR notation. Mutually exclusive with privateCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#kube_api_authorized_ip_ranges EnvironmentsAzureEnvironment#kube_api_authorized_ip_ranges}
  */
  readonly kubeApiAuthorizedIpRanges?: string[];
  /**
  * Customize cluster egress with defined outbound type in Azure Kubernetes Service. Possible value(s): udr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#outbound_type EnvironmentsAzureEnvironment#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * If true, creates private cluster. False, if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#private_cluster EnvironmentsAzureEnvironment#private_cluster}
  */
  readonly privateCluster?: boolean | cdktf.IResolvable;
  /**
  * Specify subnets for Kubernetes Worker Nodes. If not specified, then the environment's subnet(s) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#worker_node_subnets EnvironmentsAzureEnvironment#worker_node_subnets}
  */
  readonly workerNodeSubnets?: string[];
}

export function environmentsAzureEnvironmentComputeClusterConfigurationToTerraform(struct?: EnvironmentsAzureEnvironmentComputeClusterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_api_authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeApiAuthorizedIpRanges),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    private_cluster: cdktf.booleanToTerraform(struct!.privateCluster),
    worker_node_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workerNodeSubnets),
  }
}


export function environmentsAzureEnvironmentComputeClusterConfigurationToHclTerraform(struct?: EnvironmentsAzureEnvironmentComputeClusterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_api_authorized_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeApiAuthorizedIpRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.privateCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_node_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workerNodeSubnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentComputeClusterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentComputeClusterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeApiAuthorizedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiAuthorizedIpRanges = this._kubeApiAuthorizedIpRanges;
    }
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._privateCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateCluster = this._privateCluster;
    }
    if (this._workerNodeSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeSubnets = this._workerNodeSubnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentComputeClusterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubeApiAuthorizedIpRanges = undefined;
      this._outboundType = undefined;
      this._privateCluster = undefined;
      this._workerNodeSubnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubeApiAuthorizedIpRanges = value.kubeApiAuthorizedIpRanges;
      this._outboundType = value.outboundType;
      this._privateCluster = value.privateCluster;
      this._workerNodeSubnets = value.workerNodeSubnets;
    }
  }

  // kube_api_authorized_ip_ranges - computed: false, optional: true, required: false
  private _kubeApiAuthorizedIpRanges?: string[]; 
  public get kubeApiAuthorizedIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('kube_api_authorized_ip_ranges'));
  }
  public set kubeApiAuthorizedIpRanges(value: string[]) {
    this._kubeApiAuthorizedIpRanges = value;
  }
  public resetKubeApiAuthorizedIpRanges() {
    this._kubeApiAuthorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiAuthorizedIpRangesInput() {
    return this._kubeApiAuthorizedIpRanges;
  }

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // private_cluster - computed: true, optional: true, required: false
  private _privateCluster?: boolean | cdktf.IResolvable; 
  public get privateCluster() {
    return this.getBooleanAttribute('private_cluster');
  }
  public set privateCluster(value: boolean | cdktf.IResolvable) {
    this._privateCluster = value;
  }
  public resetPrivateCluster() {
    this._privateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterInput() {
    return this._privateCluster;
  }

  // worker_node_subnets - computed: true, optional: true, required: false
  private _workerNodeSubnets?: string[]; 
  public get workerNodeSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('worker_node_subnets'));
  }
  public set workerNodeSubnets(value: string[]) {
    this._workerNodeSubnets = value;
  }
  public resetWorkerNodeSubnets() {
    this._workerNodeSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeSubnetsInput() {
    return this._workerNodeSubnets;
  }
}
export interface EnvironmentsAzureEnvironmentComputeCluster {
  /**
  * The Externalized k8s configuration for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#configuration EnvironmentsAzureEnvironment#configuration}
  */
  readonly configuration?: EnvironmentsAzureEnvironmentComputeClusterConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#enabled EnvironmentsAzureEnvironment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function environmentsAzureEnvironmentComputeClusterToTerraform(struct?: EnvironmentsAzureEnvironmentComputeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: environmentsAzureEnvironmentComputeClusterConfigurationToTerraform(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function environmentsAzureEnvironmentComputeClusterToHclTerraform(struct?: EnvironmentsAzureEnvironmentComputeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: environmentsAzureEnvironmentComputeClusterConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "EnvironmentsAzureEnvironmentComputeClusterConfiguration",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentComputeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentComputeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentComputeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new EnvironmentsAzureEnvironmentComputeClusterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: EnvironmentsAzureEnvironmentComputeClusterConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EnvironmentsAzureEnvironmentDeleteOptions {
  /**
  * If true, all resources in the environment will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#cascading EnvironmentsAzureEnvironment#cascading}
  */
  readonly cascading?: boolean | cdktf.IResolvable;
  /**
  * Force delete action removes CDP resources and may leave cloud provider resources running even if the deletion did not succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#forced EnvironmentsAzureEnvironment#forced}
  */
  readonly forced?: boolean | cdktf.IResolvable;
}

export function environmentsAzureEnvironmentDeleteOptionsToTerraform(struct?: EnvironmentsAzureEnvironmentDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cascading: cdktf.booleanToTerraform(struct!.cascading),
    forced: cdktf.booleanToTerraform(struct!.forced),
  }
}


export function environmentsAzureEnvironmentDeleteOptionsToHclTerraform(struct?: EnvironmentsAzureEnvironmentDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cascading: {
      value: cdktf.booleanToHclTerraform(struct!.cascading),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forced: {
      value: cdktf.booleanToHclTerraform(struct!.forced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentDeleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentDeleteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cascading !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascading = this._cascading;
    }
    if (this._forced !== undefined) {
      hasAnyValues = true;
      internalValueResult.forced = this._forced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentDeleteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cascading = undefined;
      this._forced = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cascading = value.cascading;
      this._forced = value.forced;
    }
  }

  // cascading - computed: true, optional: true, required: false
  private _cascading?: boolean | cdktf.IResolvable; 
  public get cascading() {
    return this.getBooleanAttribute('cascading');
  }
  public set cascading(value: boolean | cdktf.IResolvable) {
    this._cascading = value;
  }
  public resetCascading() {
    this._cascading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingInput() {
    return this._cascading;
  }

  // forced - computed: true, optional: true, required: false
  private _forced?: boolean | cdktf.IResolvable; 
  public get forced() {
    return this.getBooleanAttribute('forced');
  }
  public set forced(value: boolean | cdktf.IResolvable) {
    this._forced = value;
  }
  public resetForced() {
    this._forced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedInput() {
    return this._forced;
  }
}
export interface EnvironmentsAzureEnvironmentExistingNetworkParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#aks_private_dns_zone_id EnvironmentsAzureEnvironment#aks_private_dns_zone_id}
  */
  readonly aksPrivateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#database_private_dns_zone_id EnvironmentsAzureEnvironment#database_private_dns_zone_id}
  */
  readonly databasePrivateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#flexible_server_subnet_ids EnvironmentsAzureEnvironment#flexible_server_subnet_ids}
  */
  readonly flexibleServerSubnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#network_id EnvironmentsAzureEnvironment#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#resource_group_name EnvironmentsAzureEnvironment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#subnet_ids EnvironmentsAzureEnvironment#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function environmentsAzureEnvironmentExistingNetworkParamsToTerraform(struct?: EnvironmentsAzureEnvironmentExistingNetworkParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aks_private_dns_zone_id: cdktf.stringToTerraform(struct!.aksPrivateDnsZoneId),
    database_private_dns_zone_id: cdktf.stringToTerraform(struct!.databasePrivateDnsZoneId),
    flexible_server_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flexibleServerSubnetIds),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function environmentsAzureEnvironmentExistingNetworkParamsToHclTerraform(struct?: EnvironmentsAzureEnvironmentExistingNetworkParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aks_private_dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.aksPrivateDnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_private_dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.databasePrivateDnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flexible_server_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flexibleServerSubnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
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
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentExistingNetworkParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentExistingNetworkParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aksPrivateDnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aksPrivateDnsZoneId = this._aksPrivateDnsZoneId;
    }
    if (this._databasePrivateDnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databasePrivateDnsZoneId = this._databasePrivateDnsZoneId;
    }
    if (this._flexibleServerSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexibleServerSubnetIds = this._flexibleServerSubnetIds;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentExistingNetworkParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aksPrivateDnsZoneId = undefined;
      this._databasePrivateDnsZoneId = undefined;
      this._flexibleServerSubnetIds = undefined;
      this._networkId = undefined;
      this._resourceGroupName = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aksPrivateDnsZoneId = value.aksPrivateDnsZoneId;
      this._databasePrivateDnsZoneId = value.databasePrivateDnsZoneId;
      this._flexibleServerSubnetIds = value.flexibleServerSubnetIds;
      this._networkId = value.networkId;
      this._resourceGroupName = value.resourceGroupName;
      this._subnetIds = value.subnetIds;
    }
  }

  // aks_private_dns_zone_id - computed: true, optional: true, required: false
  private _aksPrivateDnsZoneId?: string; 
  public get aksPrivateDnsZoneId() {
    return this.getStringAttribute('aks_private_dns_zone_id');
  }
  public set aksPrivateDnsZoneId(value: string) {
    this._aksPrivateDnsZoneId = value;
  }
  public resetAksPrivateDnsZoneId() {
    this._aksPrivateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aksPrivateDnsZoneIdInput() {
    return this._aksPrivateDnsZoneId;
  }

  // database_private_dns_zone_id - computed: true, optional: true, required: false
  private _databasePrivateDnsZoneId?: string; 
  public get databasePrivateDnsZoneId() {
    return this.getStringAttribute('database_private_dns_zone_id');
  }
  public set databasePrivateDnsZoneId(value: string) {
    this._databasePrivateDnsZoneId = value;
  }
  public resetDatabasePrivateDnsZoneId() {
    this._databasePrivateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivateDnsZoneIdInput() {
    return this._databasePrivateDnsZoneId;
  }

  // flexible_server_subnet_ids - computed: true, optional: true, required: false
  private _flexibleServerSubnetIds?: string[]; 
  public get flexibleServerSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('flexible_server_subnet_ids'));
  }
  public set flexibleServerSubnetIds(value: string[]) {
    this._flexibleServerSubnetIds = value;
  }
  public resetFlexibleServerSubnetIds() {
    this._flexibleServerSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleServerSubnetIdsInput() {
    return this._flexibleServerSubnetIds;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface EnvironmentsAzureEnvironmentFreeipaInstances {
}

export function environmentsAzureEnvironmentFreeipaInstancesToTerraform(struct?: EnvironmentsAzureEnvironmentFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function environmentsAzureEnvironmentFreeipaInstancesToHclTerraform(struct?: EnvironmentsAzureEnvironmentFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EnvironmentsAzureEnvironmentFreeipaInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentFreeipaInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentFreeipaInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // discovery_fqdn - computed: true, optional: false, required: false
  public get discoveryFqdn() {
    return this.getStringAttribute('discovery_fqdn');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_status_reason - computed: true, optional: false, required: false
  public get instanceStatusReason() {
    return this.getStringAttribute('instance_status_reason');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_vm_type - computed: true, optional: false, required: false
  public get instanceVmType() {
    return this.getStringAttribute('instance_vm_type');
  }

  // life_cycle - computed: true, optional: false, required: false
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class EnvironmentsAzureEnvironmentFreeipaInstancesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EnvironmentsAzureEnvironmentFreeipaInstancesOutputReference {
    return new EnvironmentsAzureEnvironmentFreeipaInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentsAzureEnvironmentFreeipa {
  /**
  * CPU architecture of the freeipa instance. Can be either X86_64 or ARM64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#architecture EnvironmentsAzureEnvironment#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#catalog EnvironmentsAzureEnvironment#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#image_id EnvironmentsAzureEnvironment#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#instance_count_by_group EnvironmentsAzureEnvironment#instance_count_by_group}
  */
  readonly instanceCountByGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#instance_type EnvironmentsAzureEnvironment#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#multi_az EnvironmentsAzureEnvironment#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#os EnvironmentsAzureEnvironment#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#recipes EnvironmentsAzureEnvironment#recipes}
  */
  readonly recipes?: string[];
}

export function environmentsAzureEnvironmentFreeipaToTerraform(struct?: EnvironmentsAzureEnvironmentFreeipa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    catalog: cdktf.stringToTerraform(struct!.catalog),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_count_by_group: cdktf.numberToTerraform(struct!.instanceCountByGroup),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    multi_az: cdktf.booleanToTerraform(struct!.multiAz),
    os: cdktf.stringToTerraform(struct!.os),
    recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipes),
  }
}


export function environmentsAzureEnvironmentFreeipaToHclTerraform(struct?: EnvironmentsAzureEnvironmentFreeipa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count_by_group: {
      value: cdktf.numberToHclTerraform(struct!.instanceCountByGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_az: {
      value: cdktf.booleanToHclTerraform(struct!.multiAz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentFreeipaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentFreeipa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceCountByGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCountByGroup = this._instanceCountByGroup;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._multiAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAz = this._multiAz;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._recipes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipes = this._recipes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentFreeipa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
      this._catalog = undefined;
      this._imageId = undefined;
      this._instanceCountByGroup = undefined;
      this._instanceType = undefined;
      this._multiAz = undefined;
      this._os = undefined;
      this._recipes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
      this._catalog = value.catalog;
      this._imageId = value.imageId;
      this._instanceCountByGroup = value.instanceCountByGroup;
      this._instanceType = value.instanceType;
      this._multiAz = value.multiAz;
      this._os = value.os;
      this._recipes = value.recipes;
    }
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_count_by_group - computed: true, optional: true, required: false
  private _instanceCountByGroup?: number; 
  public get instanceCountByGroup() {
    return this.getNumberAttribute('instance_count_by_group');
  }
  public set instanceCountByGroup(value: number) {
    this._instanceCountByGroup = value;
  }
  public resetInstanceCountByGroup() {
    this._instanceCountByGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountByGroupInput() {
    return this._instanceCountByGroup;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new EnvironmentsAzureEnvironmentFreeipaInstancesList(this, "instances", true);
  public get instances() {
    return this._instances;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // os - computed: true, optional: true, required: false
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

  // recipes - computed: true, optional: true, required: false
  private _recipes?: string[]; 
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
  public set recipes(value: string[]) {
    this._recipes = value;
  }
  public resetRecipes() {
    this._recipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes;
  }
}
export interface EnvironmentsAzureEnvironmentLogStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#backup_storage_location_base EnvironmentsAzureEnvironment#backup_storage_location_base}
  */
  readonly backupStorageLocationBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#managed_identity EnvironmentsAzureEnvironment#managed_identity}
  */
  readonly managedIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#storage_location_base EnvironmentsAzureEnvironment#storage_location_base}
  */
  readonly storageLocationBase: string;
}

export function environmentsAzureEnvironmentLogStorageToTerraform(struct?: EnvironmentsAzureEnvironmentLogStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location_base: cdktf.stringToTerraform(struct!.backupStorageLocationBase),
    managed_identity: cdktf.stringToTerraform(struct!.managedIdentity),
    storage_location_base: cdktf.stringToTerraform(struct!.storageLocationBase),
  }
}


export function environmentsAzureEnvironmentLogStorageToHclTerraform(struct?: EnvironmentsAzureEnvironmentLogStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_storage_location_base: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageLocationBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_identity: {
      value: cdktf.stringToHclTerraform(struct!.managedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location_base: {
      value: cdktf.stringToHclTerraform(struct!.storageLocationBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentLogStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageLocationBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageLocationBase = this._backupStorageLocationBase;
    }
    if (this._managedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentity = this._managedIdentity;
    }
    if (this._storageLocationBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocationBase = this._storageLocationBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentLogStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocationBase = undefined;
      this._managedIdentity = undefined;
      this._storageLocationBase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupStorageLocationBase = value.backupStorageLocationBase;
      this._managedIdentity = value.managedIdentity;
      this._storageLocationBase = value.storageLocationBase;
    }
  }

  // backup_storage_location_base - computed: true, optional: true, required: false
  private _backupStorageLocationBase?: string; 
  public get backupStorageLocationBase() {
    return this.getStringAttribute('backup_storage_location_base');
  }
  public set backupStorageLocationBase(value: string) {
    this._backupStorageLocationBase = value;
  }
  public resetBackupStorageLocationBase() {
    this._backupStorageLocationBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageLocationBaseInput() {
    return this._backupStorageLocationBase;
  }

  // managed_identity - computed: false, optional: false, required: true
  private _managedIdentity?: string; 
  public get managedIdentity() {
    return this.getStringAttribute('managed_identity');
  }
  public set managedIdentity(value: string) {
    this._managedIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity;
  }

  // storage_location_base - computed: false, optional: false, required: true
  private _storageLocationBase?: string; 
  public get storageLocationBase() {
    return this.getStringAttribute('storage_location_base');
  }
  public set storageLocationBase(value: string) {
    this._storageLocationBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationBaseInput() {
    return this._storageLocationBase;
  }
}
export interface EnvironmentsAzureEnvironmentPollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#async EnvironmentsAzureEnvironment#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#call_failure_threshold EnvironmentsAzureEnvironment#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#polling_timeout EnvironmentsAzureEnvironment#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function environmentsAzureEnvironmentPollingOptionsToTerraform(struct?: EnvironmentsAzureEnvironmentPollingOptions | cdktf.IResolvable): any {
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


export function environmentsAzureEnvironmentPollingOptionsToHclTerraform(struct?: EnvironmentsAzureEnvironmentPollingOptions | cdktf.IResolvable): any {
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

export class EnvironmentsAzureEnvironmentPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentPollingOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsAzureEnvironmentPollingOptions | cdktf.IResolvable | undefined) {
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
export interface EnvironmentsAzureEnvironmentSecurityAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#cidr EnvironmentsAzureEnvironment#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#default_security_group_id EnvironmentsAzureEnvironment#default_security_group_id}
  */
  readonly defaultSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#default_security_group_ids EnvironmentsAzureEnvironment#default_security_group_ids}
  */
  readonly defaultSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#security_group_id_for_knox EnvironmentsAzureEnvironment#security_group_id_for_knox}
  */
  readonly securityGroupIdForKnox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#security_group_ids_for_knox EnvironmentsAzureEnvironment#security_group_ids_for_knox}
  */
  readonly securityGroupIdsForKnox?: string[];
}

export function environmentsAzureEnvironmentSecurityAccessToTerraform(struct?: EnvironmentsAzureEnvironmentSecurityAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    default_security_group_id: cdktf.stringToTerraform(struct!.defaultSecurityGroupId),
    default_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSecurityGroupIds),
    security_group_id_for_knox: cdktf.stringToTerraform(struct!.securityGroupIdForKnox),
    security_group_ids_for_knox: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIdsForKnox),
  }
}


export function environmentsAzureEnvironmentSecurityAccessToHclTerraform(struct?: EnvironmentsAzureEnvironmentSecurityAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_group_id_for_knox: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupIdForKnox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids_for_knox: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIdsForKnox),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsAzureEnvironmentSecurityAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureEnvironmentSecurityAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._defaultSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurityGroupId = this._defaultSecurityGroupId;
    }
    if (this._defaultSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurityGroupIds = this._defaultSecurityGroupIds;
    }
    if (this._securityGroupIdForKnox !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdForKnox = this._securityGroupIdForKnox;
    }
    if (this._securityGroupIdsForKnox !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdsForKnox = this._securityGroupIdsForKnox;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureEnvironmentSecurityAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._defaultSecurityGroupId = undefined;
      this._defaultSecurityGroupIds = undefined;
      this._securityGroupIdForKnox = undefined;
      this._securityGroupIdsForKnox = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._defaultSecurityGroupId = value.defaultSecurityGroupId;
      this._defaultSecurityGroupIds = value.defaultSecurityGroupIds;
      this._securityGroupIdForKnox = value.securityGroupIdForKnox;
      this._securityGroupIdsForKnox = value.securityGroupIdsForKnox;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // default_security_group_id - computed: true, optional: true, required: false
  private _defaultSecurityGroupId?: string; 
  public get defaultSecurityGroupId() {
    return this.getStringAttribute('default_security_group_id');
  }
  public set defaultSecurityGroupId(value: string) {
    this._defaultSecurityGroupId = value;
  }
  public resetDefaultSecurityGroupId() {
    this._defaultSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityGroupIdInput() {
    return this._defaultSecurityGroupId;
  }

  // default_security_group_ids - computed: false, optional: true, required: false
  private _defaultSecurityGroupIds?: string[]; 
  public get defaultSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_security_group_ids'));
  }
  public set defaultSecurityGroupIds(value: string[]) {
    this._defaultSecurityGroupIds = value;
  }
  public resetDefaultSecurityGroupIds() {
    this._defaultSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityGroupIdsInput() {
    return this._defaultSecurityGroupIds;
  }

  // security_group_id_for_knox - computed: true, optional: true, required: false
  private _securityGroupIdForKnox?: string; 
  public get securityGroupIdForKnox() {
    return this.getStringAttribute('security_group_id_for_knox');
  }
  public set securityGroupIdForKnox(value: string) {
    this._securityGroupIdForKnox = value;
  }
  public resetSecurityGroupIdForKnox() {
    this._securityGroupIdForKnox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdForKnoxInput() {
    return this._securityGroupIdForKnox;
  }

  // security_group_ids_for_knox - computed: false, optional: true, required: false
  private _securityGroupIdsForKnox?: string[]; 
  public get securityGroupIdsForKnox() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids_for_knox'));
  }
  public set securityGroupIdsForKnox(value: string[]) {
    this._securityGroupIdsForKnox = value;
  }
  public resetSecurityGroupIdsForKnox() {
    this._securityGroupIdsForKnox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsForKnoxInput() {
    return this._securityGroupIdsForKnox;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment cdp_environments_azure_environment}
*/
export class EnvironmentsAzureEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_azure_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsAzureEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsAzureEnvironment to import
  * @param importFromId The id of the existing EnvironmentsAzureEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsAzureEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_azure_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_environment cdp_environments_azure_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsAzureEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsAzureEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_azure_environment',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cascadingDelete = config.cascadingDelete;
    this._computeCluster.internalValue = config.computeCluster;
    this._createPrivateEndpoints = config.createPrivateEndpoints;
    this._credentialName = config.credentialName;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._description = config.description;
    this._enableOutboundLoadBalancer = config.enableOutboundLoadBalancer;
    this._enableTunnel = config.enableTunnel;
    this._encryptionAtHost = config.encryptionAtHost;
    this._encryptionKeyResourceGroupName = config.encryptionKeyResourceGroupName;
    this._encryptionKeyUrl = config.encryptionKeyUrl;
    this._encryptionUserManagedIdentity = config.encryptionUserManagedIdentity;
    this._endpointAccessGatewayScheme = config.endpointAccessGatewayScheme;
    this._endpointAccessGatewaySubnetIds = config.endpointAccessGatewaySubnetIds;
    this._environmentName = config.environmentName;
    this._existingNetworkParams.internalValue = config.existingNetworkParams;
    this._freeipa.internalValue = config.freeipa;
    this._logStorage.internalValue = config.logStorage;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._proxyConfigName = config.proxyConfigName;
    this._publicKey = config.publicKey;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._securityAccess.internalValue = config.securityAccess;
    this._tags = config.tags;
    this._usePublicIp = config.usePublicIp;
    this._workloadAnalytics = config.workloadAnalytics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascading_delete - computed: true, optional: true, required: false
  private _cascadingDelete?: boolean | cdktf.IResolvable; 
  public get cascadingDelete() {
    return this.getBooleanAttribute('cascading_delete');
  }
  public set cascadingDelete(value: boolean | cdktf.IResolvable) {
    this._cascadingDelete = value;
  }
  public resetCascadingDelete() {
    this._cascadingDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingDeleteInput() {
    return this._cascadingDelete;
  }

  // compute_cluster - computed: false, optional: true, required: false
  private _computeCluster = new EnvironmentsAzureEnvironmentComputeClusterOutputReference(this, "compute_cluster");
  public get computeCluster() {
    return this._computeCluster;
  }
  public putComputeCluster(value: EnvironmentsAzureEnvironmentComputeCluster) {
    this._computeCluster.internalValue = value;
  }
  public resetComputeCluster() {
    this._computeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterInput() {
    return this._computeCluster.internalValue;
  }

  // create_private_endpoints - computed: false, optional: true, required: false
  private _createPrivateEndpoints?: boolean | cdktf.IResolvable; 
  public get createPrivateEndpoints() {
    return this.getBooleanAttribute('create_private_endpoints');
  }
  public set createPrivateEndpoints(value: boolean | cdktf.IResolvable) {
    this._createPrivateEndpoints = value;
  }
  public resetCreatePrivateEndpoints() {
    this._createPrivateEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPrivateEndpointsInput() {
    return this._createPrivateEndpoints;
  }

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new EnvironmentsAzureEnvironmentDeleteOptionsOutputReference(this, "delete_options");
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: EnvironmentsAzureEnvironmentDeleteOptions) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // enable_outbound_load_balancer - computed: false, optional: true, required: false
  private _enableOutboundLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableOutboundLoadBalancer() {
    return this.getBooleanAttribute('enable_outbound_load_balancer');
  }
  public set enableOutboundLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableOutboundLoadBalancer = value;
  }
  public resetEnableOutboundLoadBalancer() {
    this._enableOutboundLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOutboundLoadBalancerInput() {
    return this._enableOutboundLoadBalancer;
  }

  // enable_tunnel - computed: true, optional: true, required: false
  private _enableTunnel?: boolean | cdktf.IResolvable; 
  public get enableTunnel() {
    return this.getBooleanAttribute('enable_tunnel');
  }
  public set enableTunnel(value: boolean | cdktf.IResolvable) {
    this._enableTunnel = value;
  }
  public resetEnableTunnel() {
    this._enableTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTunnelInput() {
    return this._enableTunnel;
  }

  // encryption_at_host - computed: true, optional: true, required: false
  private _encryptionAtHost?: boolean | cdktf.IResolvable; 
  public get encryptionAtHost() {
    return this.getBooleanAttribute('encryption_at_host');
  }
  public set encryptionAtHost(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHost = value;
  }
  public resetEncryptionAtHost() {
    this._encryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostInput() {
    return this._encryptionAtHost;
  }

  // encryption_key_resource_group_name - computed: false, optional: true, required: false
  private _encryptionKeyResourceGroupName?: string; 
  public get encryptionKeyResourceGroupName() {
    return this.getStringAttribute('encryption_key_resource_group_name');
  }
  public set encryptionKeyResourceGroupName(value: string) {
    this._encryptionKeyResourceGroupName = value;
  }
  public resetEncryptionKeyResourceGroupName() {
    this._encryptionKeyResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyResourceGroupNameInput() {
    return this._encryptionKeyResourceGroupName;
  }

  // encryption_key_url - computed: false, optional: true, required: false
  private _encryptionKeyUrl?: string; 
  public get encryptionKeyUrl() {
    return this.getStringAttribute('encryption_key_url');
  }
  public set encryptionKeyUrl(value: string) {
    this._encryptionKeyUrl = value;
  }
  public resetEncryptionKeyUrl() {
    this._encryptionKeyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyUrlInput() {
    return this._encryptionKeyUrl;
  }

  // encryption_user_managed_identity - computed: false, optional: true, required: false
  private _encryptionUserManagedIdentity?: string; 
  public get encryptionUserManagedIdentity() {
    return this.getStringAttribute('encryption_user_managed_identity');
  }
  public set encryptionUserManagedIdentity(value: string) {
    this._encryptionUserManagedIdentity = value;
  }
  public resetEncryptionUserManagedIdentity() {
    this._encryptionUserManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionUserManagedIdentityInput() {
    return this._encryptionUserManagedIdentity;
  }

  // endpoint_access_gateway_scheme - computed: false, optional: true, required: false
  private _endpointAccessGatewayScheme?: string; 
  public get endpointAccessGatewayScheme() {
    return this.getStringAttribute('endpoint_access_gateway_scheme');
  }
  public set endpointAccessGatewayScheme(value: string) {
    this._endpointAccessGatewayScheme = value;
  }
  public resetEndpointAccessGatewayScheme() {
    this._endpointAccessGatewayScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAccessGatewaySchemeInput() {
    return this._endpointAccessGatewayScheme;
  }

  // endpoint_access_gateway_subnet_ids - computed: false, optional: true, required: false
  private _endpointAccessGatewaySubnetIds?: string[]; 
  public get endpointAccessGatewaySubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoint_access_gateway_subnet_ids'));
  }
  public set endpointAccessGatewaySubnetIds(value: string[]) {
    this._endpointAccessGatewaySubnetIds = value;
  }
  public resetEndpointAccessGatewaySubnetIds() {
    this._endpointAccessGatewaySubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAccessGatewaySubnetIdsInput() {
    return this._endpointAccessGatewaySubnetIds;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // existing_network_params - computed: false, optional: false, required: true
  private _existingNetworkParams = new EnvironmentsAzureEnvironmentExistingNetworkParamsOutputReference(this, "existing_network_params");
  public get existingNetworkParams() {
    return this._existingNetworkParams;
  }
  public putExistingNetworkParams(value: EnvironmentsAzureEnvironmentExistingNetworkParams) {
    this._existingNetworkParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingNetworkParamsInput() {
    return this._existingNetworkParams.internalValue;
  }

  // freeipa - computed: true, optional: true, required: false
  private _freeipa = new EnvironmentsAzureEnvironmentFreeipaOutputReference(this, "freeipa");
  public get freeipa() {
    return this._freeipa;
  }
  public putFreeipa(value: EnvironmentsAzureEnvironmentFreeipa) {
    this._freeipa.internalValue = value;
  }
  public resetFreeipa() {
    this._freeipa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeipaInput() {
    return this._freeipa.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_storage - computed: false, optional: false, required: true
  private _logStorage = new EnvironmentsAzureEnvironmentLogStorageOutputReference(this, "log_storage");
  public get logStorage() {
    return this._logStorage;
  }
  public putLogStorage(value: EnvironmentsAzureEnvironmentLogStorage) {
    this._logStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageInput() {
    return this._logStorage.internalValue;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new EnvironmentsAzureEnvironmentPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: EnvironmentsAzureEnvironmentPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // proxy_config_name - computed: false, optional: true, required: false
  private _proxyConfigName?: string; 
  public get proxyConfigName() {
    return this.getStringAttribute('proxy_config_name');
  }
  public set proxyConfigName(value: string) {
    this._proxyConfigName = value;
  }
  public resetProxyConfigName() {
    this._proxyConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigNameInput() {
    return this._proxyConfigName;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // report_deployment_logs - computed: true, optional: false, required: false
  public get reportDeploymentLogs() {
    return this.getBooleanAttribute('report_deployment_logs');
  }

  // resource_group_name - computed: true, optional: true, required: false
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

  // security_access - computed: false, optional: false, required: true
  private _securityAccess = new EnvironmentsAzureEnvironmentSecurityAccessOutputReference(this, "security_access");
  public get securityAccess() {
    return this._securityAccess;
  }
  public putSecurityAccess(value: EnvironmentsAzureEnvironmentSecurityAccess) {
    this._securityAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAccessInput() {
    return this._securityAccess.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: true, required: false
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

  // use_public_ip - computed: false, optional: false, required: true
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }

  // workload_analytics - computed: true, optional: true, required: false
  private _workloadAnalytics?: boolean | cdktf.IResolvable; 
  public get workloadAnalytics() {
    return this.getBooleanAttribute('workload_analytics');
  }
  public set workloadAnalytics(value: boolean | cdktf.IResolvable) {
    this._workloadAnalytics = value;
  }
  public resetWorkloadAnalytics() {
    this._workloadAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadAnalyticsInput() {
    return this._workloadAnalytics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascading_delete: cdktf.booleanToTerraform(this._cascadingDelete),
      compute_cluster: environmentsAzureEnvironmentComputeClusterToTerraform(this._computeCluster.internalValue),
      create_private_endpoints: cdktf.booleanToTerraform(this._createPrivateEndpoints),
      credential_name: cdktf.stringToTerraform(this._credentialName),
      delete_options: environmentsAzureEnvironmentDeleteOptionsToTerraform(this._deleteOptions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_outbound_load_balancer: cdktf.booleanToTerraform(this._enableOutboundLoadBalancer),
      enable_tunnel: cdktf.booleanToTerraform(this._enableTunnel),
      encryption_at_host: cdktf.booleanToTerraform(this._encryptionAtHost),
      encryption_key_resource_group_name: cdktf.stringToTerraform(this._encryptionKeyResourceGroupName),
      encryption_key_url: cdktf.stringToTerraform(this._encryptionKeyUrl),
      encryption_user_managed_identity: cdktf.stringToTerraform(this._encryptionUserManagedIdentity),
      endpoint_access_gateway_scheme: cdktf.stringToTerraform(this._endpointAccessGatewayScheme),
      endpoint_access_gateway_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointAccessGatewaySubnetIds),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      existing_network_params: environmentsAzureEnvironmentExistingNetworkParamsToTerraform(this._existingNetworkParams.internalValue),
      freeipa: environmentsAzureEnvironmentFreeipaToTerraform(this._freeipa.internalValue),
      log_storage: environmentsAzureEnvironmentLogStorageToTerraform(this._logStorage.internalValue),
      polling_options: environmentsAzureEnvironmentPollingOptionsToTerraform(this._pollingOptions.internalValue),
      proxy_config_name: cdktf.stringToTerraform(this._proxyConfigName),
      public_key: cdktf.stringToTerraform(this._publicKey),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_access: environmentsAzureEnvironmentSecurityAccessToTerraform(this._securityAccess.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_public_ip: cdktf.booleanToTerraform(this._usePublicIp),
      workload_analytics: cdktf.booleanToTerraform(this._workloadAnalytics),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascading_delete: {
        value: cdktf.booleanToHclTerraform(this._cascadingDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_cluster: {
        value: environmentsAzureEnvironmentComputeClusterToHclTerraform(this._computeCluster.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentComputeCluster",
      },
      create_private_endpoints: {
        value: cdktf.booleanToHclTerraform(this._createPrivateEndpoints),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_options: {
        value: environmentsAzureEnvironmentDeleteOptionsToHclTerraform(this._deleteOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentDeleteOptions",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_outbound_load_balancer: {
        value: cdktf.booleanToHclTerraform(this._enableOutboundLoadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tunnel: {
        value: cdktf.booleanToHclTerraform(this._enableTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_at_host: {
        value: cdktf.booleanToHclTerraform(this._encryptionAtHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_url: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_user_managed_identity: {
        value: cdktf.stringToHclTerraform(this._encryptionUserManagedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_access_gateway_scheme: {
        value: cdktf.stringToHclTerraform(this._endpointAccessGatewayScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_access_gateway_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointAccessGatewaySubnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_network_params: {
        value: environmentsAzureEnvironmentExistingNetworkParamsToHclTerraform(this._existingNetworkParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentExistingNetworkParams",
      },
      freeipa: {
        value: environmentsAzureEnvironmentFreeipaToHclTerraform(this._freeipa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentFreeipa",
      },
      log_storage: {
        value: environmentsAzureEnvironmentLogStorageToHclTerraform(this._logStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentLogStorage",
      },
      polling_options: {
        value: environmentsAzureEnvironmentPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentPollingOptions",
      },
      proxy_config_name: {
        value: cdktf.stringToHclTerraform(this._proxyConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_access: {
        value: environmentsAzureEnvironmentSecurityAccessToHclTerraform(this._securityAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureEnvironmentSecurityAccess",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_public_ip: {
        value: cdktf.booleanToHclTerraform(this._usePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workload_analytics: {
        value: cdktf.booleanToHclTerraform(this._workloadAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
