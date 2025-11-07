// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsGcpEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The zones of the environment in the given region. Multi-zone selection is not supported in GCP yet. It accepts only one zone until support is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#availability_zones EnvironmentsGcpEnvironment#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#cascading_delete EnvironmentsGcpEnvironment#cascading_delete}
  */
  readonly cascadingDelete?: boolean | cdktf.IResolvable;
  /**
  * Name of the credential to use for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#credential_name EnvironmentsGcpEnvironment#credential_name}
  */
  readonly credentialName: string;
  /**
  * Options for deleting the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#delete_options EnvironmentsGcpEnvironment#delete_options}
  */
  readonly deleteOptions?: EnvironmentsGcpEnvironmentDeleteOptions;
  /**
  * A description of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#description EnvironmentsGcpEnvironment#description}
  */
  readonly description?: string;
  /**
  * Whether to enable SSH tunneling for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#enable_tunnel EnvironmentsGcpEnvironment#enable_tunnel}
  */
  readonly enableTunnel?: boolean | cdktf.IResolvable;
  /**
  * Key Resource ID of the customer managed encryption key to encrypt GCP resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#encryption_key EnvironmentsGcpEnvironment#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The scheme for the endpoint gateway. PUBLIC creates an external endpoint that can be accessed over the Internet. Defaults to PRIVATE which restricts the traffic to be internal to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#endpoint_access_gateway_scheme EnvironmentsGcpEnvironment#endpoint_access_gateway_scheme}
  */
  readonly endpointAccessGatewayScheme?: string;
  /**
  * The name of the environment. Must contain only lowercase letters, numbers and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#environment_name EnvironmentsGcpEnvironment#environment_name}
  */
  readonly environmentName: string;
  /**
  * Parameters needed to use an existing VPC and Subnets. For now only existing network params is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#existing_network_params EnvironmentsGcpEnvironment#existing_network_params}
  */
  readonly existingNetworkParams: EnvironmentsGcpEnvironmentExistingNetworkParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#freeipa EnvironmentsGcpEnvironment#freeipa}
  */
  readonly freeipa?: EnvironmentsGcpEnvironmentFreeipa;
  /**
  * GCP storage configuration for cluster and audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#log_storage EnvironmentsGcpEnvironment#log_storage}
  */
  readonly logStorage?: EnvironmentsGcpEnvironmentLogStorage;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#polling_options EnvironmentsGcpEnvironment#polling_options}
  */
  readonly pollingOptions?: EnvironmentsGcpEnvironmentPollingOptions;
  /**
  * Name of the proxy config to use for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#proxy_config_name EnvironmentsGcpEnvironment#proxy_config_name}
  */
  readonly proxyConfigName?: string;
  /**
  * Public SSH key string. The associated private key can be used to get root-level access to the Data Lake instance and Data Hub cluster instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#public_key EnvironmentsGcpEnvironment#public_key}
  */
  readonly publicKey: string;
  /**
  * The region of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#region EnvironmentsGcpEnvironment#region}
  */
  readonly region: string;
  /**
  * Firewall rules for FreeIPA, Data Lake and Data Hub deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#security_access EnvironmentsGcpEnvironment#security_access}
  */
  readonly securityAccess?: EnvironmentsGcpEnvironmentSecurityAccess;
  /**
  * Tags that can be attached to GCP resources. Please refer to Google documentation for the rules https://cloud.google.com/compute/docs/labeling-resources#label_format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#tags EnvironmentsGcpEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Whether to associate public IPs to the resources within the network or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#use_public_ip EnvironmentsGcpEnvironment#use_public_ip}
  */
  readonly usePublicIp: boolean | cdktf.IResolvable;
  /**
  * When this is enabled, diagnostic information about job and query execution is sent to Workload Manager for Data Hub clusters created within this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#workload_analytics EnvironmentsGcpEnvironment#workload_analytics}
  */
  readonly workloadAnalytics?: boolean | cdktf.IResolvable;
}
export interface EnvironmentsGcpEnvironmentDeleteOptions {
  /**
  * If true, all resources in the environment will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#cascading EnvironmentsGcpEnvironment#cascading}
  */
  readonly cascading?: boolean | cdktf.IResolvable;
  /**
  * Force delete action removes CDP resources and may leave cloud provider resources running even if the deletion did not succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#forced EnvironmentsGcpEnvironment#forced}
  */
  readonly forced?: boolean | cdktf.IResolvable;
}

export function environmentsGcpEnvironmentDeleteOptionsToTerraform(struct?: EnvironmentsGcpEnvironmentDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cascading: cdktf.booleanToTerraform(struct!.cascading),
    forced: cdktf.booleanToTerraform(struct!.forced),
  }
}


export function environmentsGcpEnvironmentDeleteOptionsToHclTerraform(struct?: EnvironmentsGcpEnvironmentDeleteOptions | cdktf.IResolvable): any {
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

export class EnvironmentsGcpEnvironmentDeleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentDeleteOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsGcpEnvironmentDeleteOptions | cdktf.IResolvable | undefined) {
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
export interface EnvironmentsGcpEnvironmentExistingNetworkParams {
  /**
  * The name of the GCP VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#network_name EnvironmentsGcpEnvironment#network_name}
  */
  readonly networkName: string;
  /**
  * The ID of the Google project associated with the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#shared_project_id EnvironmentsGcpEnvironment#shared_project_id}
  */
  readonly sharedProjectId: string;
  /**
  * One or more subnet names within the VPC. Google VPCs are global, please give subnets from single geographic region only to reduce latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#subnet_names EnvironmentsGcpEnvironment#subnet_names}
  */
  readonly subnetNames: string[];
}

export function environmentsGcpEnvironmentExistingNetworkParamsToTerraform(struct?: EnvironmentsGcpEnvironmentExistingNetworkParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_name: cdktf.stringToTerraform(struct!.networkName),
    shared_project_id: cdktf.stringToTerraform(struct!.sharedProjectId),
    subnet_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetNames),
  }
}


export function environmentsGcpEnvironmentExistingNetworkParamsToHclTerraform(struct?: EnvironmentsGcpEnvironmentExistingNetworkParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_project_id: {
      value: cdktf.stringToHclTerraform(struct!.sharedProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsGcpEnvironmentExistingNetworkParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentExistingNetworkParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._sharedProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedProjectId = this._sharedProjectId;
    }
    if (this._subnetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetNames = this._subnetNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsGcpEnvironmentExistingNetworkParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkName = undefined;
      this._sharedProjectId = undefined;
      this._subnetNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkName = value.networkName;
      this._sharedProjectId = value.sharedProjectId;
      this._subnetNames = value.subnetNames;
    }
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // shared_project_id - computed: false, optional: false, required: true
  private _sharedProjectId?: string; 
  public get sharedProjectId() {
    return this.getStringAttribute('shared_project_id');
  }
  public set sharedProjectId(value: string) {
    this._sharedProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedProjectIdInput() {
    return this._sharedProjectId;
  }

  // subnet_names - computed: false, optional: false, required: true
  private _subnetNames?: string[]; 
  public get subnetNames() {
    return this.getListAttribute('subnet_names');
  }
  public set subnetNames(value: string[]) {
    this._subnetNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNamesInput() {
    return this._subnetNames;
  }
}
export interface EnvironmentsGcpEnvironmentFreeipaInstances {
}

export function environmentsGcpEnvironmentFreeipaInstancesToTerraform(struct?: EnvironmentsGcpEnvironmentFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function environmentsGcpEnvironmentFreeipaInstancesToHclTerraform(struct?: EnvironmentsGcpEnvironmentFreeipaInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EnvironmentsGcpEnvironmentFreeipaInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentsGcpEnvironmentFreeipaInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsGcpEnvironmentFreeipaInstances | undefined) {
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

export class EnvironmentsGcpEnvironmentFreeipaInstancesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EnvironmentsGcpEnvironmentFreeipaInstancesOutputReference {
    return new EnvironmentsGcpEnvironmentFreeipaInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentsGcpEnvironmentFreeipa {
  /**
  * CPU architecture of the freeipa instance. Can be either X86_64 or ARM64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#architecture EnvironmentsGcpEnvironment#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#catalog EnvironmentsGcpEnvironment#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#image_id EnvironmentsGcpEnvironment#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#instance_count_by_group EnvironmentsGcpEnvironment#instance_count_by_group}
  */
  readonly instanceCountByGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#instance_type EnvironmentsGcpEnvironment#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#multi_az EnvironmentsGcpEnvironment#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#os EnvironmentsGcpEnvironment#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#recipes EnvironmentsGcpEnvironment#recipes}
  */
  readonly recipes?: string[];
}

export function environmentsGcpEnvironmentFreeipaToTerraform(struct?: EnvironmentsGcpEnvironmentFreeipa | cdktf.IResolvable): any {
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


export function environmentsGcpEnvironmentFreeipaToHclTerraform(struct?: EnvironmentsGcpEnvironmentFreeipa | cdktf.IResolvable): any {
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

export class EnvironmentsGcpEnvironmentFreeipaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentFreeipa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsGcpEnvironmentFreeipa | cdktf.IResolvable | undefined) {
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
  private _instances = new EnvironmentsGcpEnvironmentFreeipaInstancesList(this, "instances", true);
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
export interface EnvironmentsGcpEnvironmentLogStorage {
  /**
  * The Google storage bucket to use. This should be a gs:// url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#backup_storage_location_base EnvironmentsGcpEnvironment#backup_storage_location_base}
  */
  readonly backupStorageLocationBase?: string;
  /**
  * Email id of the service account to be associated with the instances. This service account should have "storage.ObjectCreator" role on the given storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#service_account_email EnvironmentsGcpEnvironment#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The Google storage bucket to use. This should be a gs:// url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#storage_location_base EnvironmentsGcpEnvironment#storage_location_base}
  */
  readonly storageLocationBase: string;
}

export function environmentsGcpEnvironmentLogStorageToTerraform(struct?: EnvironmentsGcpEnvironmentLogStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_storage_location_base: cdktf.stringToTerraform(struct!.backupStorageLocationBase),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    storage_location_base: cdktf.stringToTerraform(struct!.storageLocationBase),
  }
}


export function environmentsGcpEnvironmentLogStorageToHclTerraform(struct?: EnvironmentsGcpEnvironmentLogStorage | cdktf.IResolvable): any {
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
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
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

export class EnvironmentsGcpEnvironmentLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentLogStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStorageLocationBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageLocationBase = this._backupStorageLocationBase;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._storageLocationBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocationBase = this._storageLocationBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsGcpEnvironmentLogStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupStorageLocationBase = undefined;
      this._serviceAccountEmail = undefined;
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
      this._serviceAccountEmail = value.serviceAccountEmail;
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

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
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
export interface EnvironmentsGcpEnvironmentPollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#async EnvironmentsGcpEnvironment#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#call_failure_threshold EnvironmentsGcpEnvironment#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#polling_timeout EnvironmentsGcpEnvironment#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function environmentsGcpEnvironmentPollingOptionsToTerraform(struct?: EnvironmentsGcpEnvironmentPollingOptions | cdktf.IResolvable): any {
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


export function environmentsGcpEnvironmentPollingOptionsToHclTerraform(struct?: EnvironmentsGcpEnvironmentPollingOptions | cdktf.IResolvable): any {
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

export class EnvironmentsGcpEnvironmentPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentPollingOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentsGcpEnvironmentPollingOptions | cdktf.IResolvable | undefined) {
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
export interface EnvironmentsGcpEnvironmentSecurityAccess {
  /**
  * Firewall rule for other hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#default_security_group_id EnvironmentsGcpEnvironment#default_security_group_id}
  */
  readonly defaultSecurityGroupId?: string;
  /**
  * Firewall rule for Knox hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#security_group_id_for_knox EnvironmentsGcpEnvironment#security_group_id_for_knox}
  */
  readonly securityGroupIdForKnox?: string;
}

export function environmentsGcpEnvironmentSecurityAccessToTerraform(struct?: EnvironmentsGcpEnvironmentSecurityAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security_group_id: cdktf.stringToTerraform(struct!.defaultSecurityGroupId),
    security_group_id_for_knox: cdktf.stringToTerraform(struct!.securityGroupIdForKnox),
  }
}


export function environmentsGcpEnvironmentSecurityAccessToHclTerraform(struct?: EnvironmentsGcpEnvironmentSecurityAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id_for_knox: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupIdForKnox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentsGcpEnvironmentSecurityAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsGcpEnvironmentSecurityAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurityGroupId = this._defaultSecurityGroupId;
    }
    if (this._securityGroupIdForKnox !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdForKnox = this._securityGroupIdForKnox;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsGcpEnvironmentSecurityAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSecurityGroupId = undefined;
      this._securityGroupIdForKnox = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSecurityGroupId = value.defaultSecurityGroupId;
      this._securityGroupIdForKnox = value.securityGroupIdForKnox;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment cdp_environments_gcp_environment}
*/
export class EnvironmentsGcpEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_gcp_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsGcpEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsGcpEnvironment to import
  * @param importFromId The id of the existing EnvironmentsGcpEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsGcpEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_gcp_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_gcp_environment cdp_environments_gcp_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsGcpEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsGcpEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_gcp_environment',
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
    this._availabilityZones = config.availabilityZones;
    this._cascadingDelete = config.cascadingDelete;
    this._credentialName = config.credentialName;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._description = config.description;
    this._enableTunnel = config.enableTunnel;
    this._encryptionKey = config.encryptionKey;
    this._endpointAccessGatewayScheme = config.endpointAccessGatewayScheme;
    this._environmentName = config.environmentName;
    this._existingNetworkParams.internalValue = config.existingNetworkParams;
    this._freeipa.internalValue = config.freeipa;
    this._logStorage.internalValue = config.logStorage;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._proxyConfigName = config.proxyConfigName;
    this._publicKey = config.publicKey;
    this._region = config.region;
    this._securityAccess.internalValue = config.securityAccess;
    this._tags = config.tags;
    this._usePublicIp = config.usePublicIp;
    this._workloadAnalytics = config.workloadAnalytics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

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
  private _deleteOptions = new EnvironmentsGcpEnvironmentDeleteOptionsOutputReference(this, "delete_options");
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: EnvironmentsGcpEnvironmentDeleteOptions) {
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

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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
  private _existingNetworkParams = new EnvironmentsGcpEnvironmentExistingNetworkParamsOutputReference(this, "existing_network_params");
  public get existingNetworkParams() {
    return this._existingNetworkParams;
  }
  public putExistingNetworkParams(value: EnvironmentsGcpEnvironmentExistingNetworkParams) {
    this._existingNetworkParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingNetworkParamsInput() {
    return this._existingNetworkParams.internalValue;
  }

  // freeipa - computed: true, optional: true, required: false
  private _freeipa = new EnvironmentsGcpEnvironmentFreeipaOutputReference(this, "freeipa");
  public get freeipa() {
    return this._freeipa;
  }
  public putFreeipa(value: EnvironmentsGcpEnvironmentFreeipa) {
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

  // log_storage - computed: false, optional: true, required: false
  private _logStorage = new EnvironmentsGcpEnvironmentLogStorageOutputReference(this, "log_storage");
  public get logStorage() {
    return this._logStorage;
  }
  public putLogStorage(value: EnvironmentsGcpEnvironmentLogStorage) {
    this._logStorage.internalValue = value;
  }
  public resetLogStorage() {
    this._logStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageInput() {
    return this._logStorage.internalValue;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new EnvironmentsGcpEnvironmentPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: EnvironmentsGcpEnvironmentPollingOptions) {
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

  // security_access - computed: false, optional: true, required: false
  private _securityAccess = new EnvironmentsGcpEnvironmentSecurityAccessOutputReference(this, "security_access");
  public get securityAccess() {
    return this._securityAccess;
  }
  public putSecurityAccess(value: EnvironmentsGcpEnvironmentSecurityAccess) {
    this._securityAccess.internalValue = value;
  }
  public resetSecurityAccess() {
    this._securityAccess.internalValue = undefined;
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
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      cascading_delete: cdktf.booleanToTerraform(this._cascadingDelete),
      credential_name: cdktf.stringToTerraform(this._credentialName),
      delete_options: environmentsGcpEnvironmentDeleteOptionsToTerraform(this._deleteOptions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_tunnel: cdktf.booleanToTerraform(this._enableTunnel),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      endpoint_access_gateway_scheme: cdktf.stringToTerraform(this._endpointAccessGatewayScheme),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      existing_network_params: environmentsGcpEnvironmentExistingNetworkParamsToTerraform(this._existingNetworkParams.internalValue),
      freeipa: environmentsGcpEnvironmentFreeipaToTerraform(this._freeipa.internalValue),
      log_storage: environmentsGcpEnvironmentLogStorageToTerraform(this._logStorage.internalValue),
      polling_options: environmentsGcpEnvironmentPollingOptionsToTerraform(this._pollingOptions.internalValue),
      proxy_config_name: cdktf.stringToTerraform(this._proxyConfigName),
      public_key: cdktf.stringToTerraform(this._publicKey),
      region: cdktf.stringToTerraform(this._region),
      security_access: environmentsGcpEnvironmentSecurityAccessToTerraform(this._securityAccess.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_public_ip: cdktf.booleanToTerraform(this._usePublicIp),
      workload_analytics: cdktf.booleanToTerraform(this._workloadAnalytics),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cascading_delete: {
        value: cdktf.booleanToHclTerraform(this._cascadingDelete),
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
        value: environmentsGcpEnvironmentDeleteOptionsToHclTerraform(this._deleteOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentDeleteOptions",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tunnel: {
        value: cdktf.booleanToHclTerraform(this._enableTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
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
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_network_params: {
        value: environmentsGcpEnvironmentExistingNetworkParamsToHclTerraform(this._existingNetworkParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentExistingNetworkParams",
      },
      freeipa: {
        value: environmentsGcpEnvironmentFreeipaToHclTerraform(this._freeipa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentFreeipa",
      },
      log_storage: {
        value: environmentsGcpEnvironmentLogStorageToHclTerraform(this._logStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentLogStorage",
      },
      polling_options: {
        value: environmentsGcpEnvironmentPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentPollingOptions",
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
      security_access: {
        value: environmentsGcpEnvironmentSecurityAccessToHclTerraform(this._securityAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsGcpEnvironmentSecurityAccess",
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
