// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRosaHcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin user credentials. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#admin_credentials ClusterRosaHcp#admin_credentials}
  */
  readonly adminCredentials?: ClusterRosaHcpAdminCredentials;
  /**
  * Availability zones. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#availability_zones ClusterRosaHcp#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Identifier of the AWS account. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#aws_account_id ClusterRosaHcp#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS additional allowed principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#aws_additional_allowed_principals ClusterRosaHcp#aws_additional_allowed_principals}
  */
  readonly awsAdditionalAllowedPrincipals?: string[];
  /**
  * AWS additional compute security group ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#aws_additional_compute_security_group_ids ClusterRosaHcp#aws_additional_compute_security_group_ids}
  */
  readonly awsAdditionalComputeSecurityGroupIds?: string[];
  /**
  * Identifier of the AWS account for billing. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#aws_billing_account_id ClusterRosaHcp#aws_billing_account_id}
  */
  readonly awsBillingAccountId?: string;
  /**
  * AWS subnet IDs. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#aws_subnet_ids ClusterRosaHcp#aws_subnet_ids}
  */
  readonly awsSubnetIds: string[];
  /**
  * Base DNS domain name previously reserved, e.g. '1vo8.p3.openshiftapps.com'. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#base_dns_domain ClusterRosaHcp#base_dns_domain}
  */
  readonly baseDnsDomain?: string;
  /**
  * Name of the channel group where you select the OpenShift cluster version, for example 'stable'. For ROSA, only 'stable' and 'eus' are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#channel_group ClusterRosaHcp#channel_group}
  */
  readonly channelGroup?: string;
  /**
  * AWS region identifier, for example 'us-east-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#cloud_region ClusterRosaHcp#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Identifies the machine type used by the initial worker nodes, for example `m5.xlarge`. Use the `rhcs_machine_types` data source to find the possible values. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#compute_machine_type ClusterRosaHcp#compute_machine_type}
  */
  readonly computeMachineType?: string;
  /**
  * Indicates if create cluster admin user. Set it true to create cluster admin user with default username `cluster-admin` and generated password. It will be ignored if `admin_credentials` is set.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#create_admin_user ClusterRosaHcp#create_admin_user}
  */
  readonly createAdminUser?: boolean | cdktf.IResolvable;
  /**
  * This value sets the maximum duration in minutes to allow for destroying resources. Default value is 60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#destroy_timeout ClusterRosaHcp#destroy_timeout}
  */
  readonly destroyTimeout?: number;
  /**
  * Disable addressing cluster state in the destroy resource. Default value is false, and so a `destroy` will wait for the cluster to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#disable_waiting_in_destroy ClusterRosaHcp#disable_waiting_in_destroy}
  */
  readonly disableWaitingInDestroy?: boolean | cdktf.IResolvable;
  /**
  * The domain prefix is optionally assigned by the user.It will appear in the Cluster's domain when the cluster is provisioned. If not supplied, it will be auto generated. It cannot exceed 15 characters in length. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#domain_prefix ClusterRosaHcp#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * This value determines which EC2 Instance Metadata Service mode to use for EC2 instances in the cluster.This can be set as `optional` (IMDS v1 or v2) or `required` (IMDSv2 only).After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#ec2_metadata_http_tokens ClusterRosaHcp#ec2_metadata_http_tokens}
  */
  readonly ec2MetadataHttpTokens?: string;
  /**
  * Encrypt etcd data. Note that all AWS storage is already encrypted. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#etcd_encryption ClusterRosaHcp#etcd_encryption}
  */
  readonly etcdEncryption?: boolean | cdktf.IResolvable;
  /**
  * Used for etcd encryption. The key ARN is the Amazon Resource Name (ARN) of a AWS Key Management Service (KMS) Key. It is a unique, fully qualified identifier for the AWS KMS Key. A key ARN includes the AWS account, Region, and the key ID(optional). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#etcd_kms_key_arn ClusterRosaHcp#etcd_kms_key_arn}
  */
  readonly etcdKmsKeyArn?: string;
  /**
  * Enable external authentication providers on the cluster. This feature is only available for ROSA HCP clusters. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#external_auth_providers_enabled ClusterRosaHcp#external_auth_providers_enabled}
  */
  readonly externalAuthProvidersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Length of the prefix of the subnet assigned to each node. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#host_prefix ClusterRosaHcp#host_prefix}
  */
  readonly hostPrefix?: number;
  /**
  * Used to encrypt root volume of compute node pools. The key ARN is the Amazon Resource Name (ARN) of a AWS Key Management Service (KMS) Key. It is a unique, fully qualified identifier for the AWS KMS Key. A key ARN includes the AWS account, Region, and the key ID(optional). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#kms_key_arn ClusterRosaHcp#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Block of IP addresses for nodes. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#machine_cidr ClusterRosaHcp#machine_cidr}
  */
  readonly machineCidr?: string;
  /**
  * This value sets the maximum duration in minutes to wait for a HCP cluster to be in a ready state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#max_hcp_cluster_wait_timeout_in_minutes ClusterRosaHcp#max_hcp_cluster_wait_timeout_in_minutes}
  */
  readonly maxHcpClusterWaitTimeoutInMinutes?: number;
  /**
  * This value sets the maximum duration in minutes to wait for machine pools to be in a ready state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#max_machinepool_wait_timeout_in_minutes ClusterRosaHcp#max_machinepool_wait_timeout_in_minutes}
  */
  readonly maxMachinepoolWaitTimeoutInMinutes?: number;
  /**
  * Name of the cluster. Cannot exceed 54 characters in length. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#name ClusterRosaHcp#name}
  */
  readonly name: string;
  /**
  * Block of IP addresses for pods. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#pod_cidr ClusterRosaHcp#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Provides private connectivity from your cluster's VPC to Red Hat SRE, without exposing traffic to the public internet. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#private ClusterRosaHcp#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * User defined properties. It is essential to include property 'role_creator_arn' with the value of the user creating the cluster. Example: properties = {rosa_creator_arn = data.aws_caller_identity.current.arn}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#properties ClusterRosaHcp#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#proxy ClusterRosaHcp#proxy}
  */
  readonly proxy?: ClusterRosaHcpProxy;
  /**
  * Registry configuration for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#registry_config ClusterRosaHcp#registry_config}
  */
  readonly registryConfig?: ClusterRosaHcpRegistryConfig;
  /**
  * Number of worker/compute nodes to provision. Requires that the number supplied be a multiple of the number of private subnets. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#replicas ClusterRosaHcp#replicas}
  */
  readonly replicas?: number;
  /**
  * Block of IP addresses for the cluster service network. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#service_cidr ClusterRosaHcp#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Shared VPC configuration.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#shared_vpc ClusterRosaHcp#shared_vpc}
  */
  readonly sharedVpc?: ClusterRosaHcpSharedVpc;
  /**
  * STS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#sts ClusterRosaHcp#sts}
  */
  readonly sts: ClusterRosaHcpSts;
  /**
  * Apply user defined tags to all cluster resources created in AWS. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#tags ClusterRosaHcp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Indicates acknowledgement of agreements required to upgrade the cluster version between minor versions (e.g. a value of "4.12" indicates acknowledgement of any agreements required to upgrade to OpenShift 4.12.z from 4.11 or before).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#upgrade_acknowledgements_for ClusterRosaHcp#upgrade_acknowledgements_for}
  */
  readonly upgradeAcknowledgementsFor?: string;
  /**
  * Desired version of OpenShift for the cluster, for example '4.11.0'. If version is greater than the currently running version, an upgrade will be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#version ClusterRosaHcp#version}
  */
  readonly version?: string;
  /**
  * Wait until the cluster is either in a ready state or in an error state. The waiter has a timeout of 45 minutes, with the default value set to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#wait_for_create_complete ClusterRosaHcp#wait_for_create_complete}
  */
  readonly waitForCreateComplete?: boolean | cdktf.IResolvable;
  /**
  * Wait until the cluster standard compute pools are created. The waiter has a timeout of 60 minutes, with the default value set to false. This can only be provided when also waiting for create completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#wait_for_std_compute_nodes_complete ClusterRosaHcp#wait_for_std_compute_nodes_complete}
  */
  readonly waitForStdComputeNodesComplete?: boolean | cdktf.IResolvable;
  /**
  * Compute node root disk size, in GiB. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#worker_disk_size ClusterRosaHcp#worker_disk_size}
  */
  readonly workerDiskSize?: number;
}
export interface ClusterRosaHcpAdminCredentials {
  /**
  * Admin password that will be created with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#password ClusterRosaHcp#password}
  */
  readonly password?: string;
  /**
  * Admin username that will be created with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#username ClusterRosaHcp#username}
  */
  readonly username?: string;
}

export function clusterRosaHcpAdminCredentialsToTerraform(struct?: ClusterRosaHcpAdminCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterRosaHcpAdminCredentialsToHclTerraform(struct?: ClusterRosaHcpAdminCredentials | cdktf.IResolvable): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpAdminCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpAdminCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ClusterRosaHcpProxy {
  /**
  * A string containing a PEM-encoded X.509 certificate bundle that will be added to the nodes' trusted certificate store. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#additional_trust_bundle ClusterRosaHcp#additional_trust_bundle}
  */
  readonly additionalTrustBundle?: string;
  /**
  * HTTP proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#http_proxy ClusterRosaHcp#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#https_proxy ClusterRosaHcp#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * No proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#no_proxy ClusterRosaHcp#no_proxy}
  */
  readonly noProxy?: string;
}

export function clusterRosaHcpProxyToTerraform(struct?: ClusterRosaHcpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_trust_bundle: cdktf.stringToTerraform(struct!.additionalTrustBundle),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
  }
}


export function clusterRosaHcpProxyToHclTerraform(struct?: ClusterRosaHcpProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_trust_bundle: {
      value: cdktf.stringToHclTerraform(struct!.additionalTrustBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTrustBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTrustBundle = this._additionalTrustBundle;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalTrustBundle = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalTrustBundle = value.additionalTrustBundle;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
    }
  }

  // additional_trust_bundle - computed: false, optional: true, required: false
  private _additionalTrustBundle?: string; 
  public get additionalTrustBundle() {
    return this.getStringAttribute('additional_trust_bundle');
  }
  public set additionalTrustBundle(value: string) {
    this._additionalTrustBundle = value;
  }
  public resetAdditionalTrustBundle() {
    this._additionalTrustBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustBundleInput() {
    return this._additionalTrustBundle;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }
}
export interface ClusterRosaHcpRegistryConfigAllowedRegistriesForImport {
  /**
  * domain_name specifies a domain name for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#domain_name ClusterRosaHcp#domain_name}
  */
  readonly domainName?: string;
  /**
  * insecure indicates whether the registry is secure (https) or insecure (http). By default (if not specified) the registry is assumed as secure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#insecure ClusterRosaHcp#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
}

export function clusterRosaHcpRegistryConfigAllowedRegistriesForImportToTerraform(struct?: ClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
  }
}


export function clusterRosaHcpRegistryConfigAllowedRegistriesForImportToHclTerraform(struct?: ClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._insecure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._insecure = value.insecure;
    }
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // insecure - computed: true, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }
}

export class ClusterRosaHcpRegistryConfigAllowedRegistriesForImportList extends cdktf.ComplexList {
  public internalValue? : ClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable

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
  public get(index: number): ClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference {
    return new ClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterRosaHcpRegistryConfigRegistrySources {
  /**
  * allowed_registries: registries for which image pull and push actions are allowed. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest. All other registries are blocked. Mutually exclusive with `BlockedRegistries`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#allowed_registries ClusterRosaHcp#allowed_registries}
  */
  readonly allowedRegistries?: string[];
  /**
  * blocked_registries: registries for which image pull and push actions are denied. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest. All other registries are allowed. Mutually exclusive with `AllowedRegistries`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#blocked_registries ClusterRosaHcp#blocked_registries}
  */
  readonly blockedRegistries?: string[];
  /**
  * insecure_registries are registries which do not have a valid TLS certificate or only support HTTP connections. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#insecure_registries ClusterRosaHcp#insecure_registries}
  */
  readonly insecureRegistries?: string[];
}

export function clusterRosaHcpRegistryConfigRegistrySourcesToTerraform(struct?: ClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegistries),
    blocked_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedRegistries),
    insecure_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureRegistries),
  }
}


export function clusterRosaHcpRegistryConfigRegistrySourcesToHclTerraform(struct?: ClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocked_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class ClusterRosaHcpRegistryConfigRegistrySourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistries = this._allowedRegistries;
    }
    if (this._blockedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedRegistries = this._blockedRegistries;
    }
    if (this._insecureRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureRegistries = this._insecureRegistries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRegistries = undefined;
      this._blockedRegistries = undefined;
      this._insecureRegistries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRegistries = value.allowedRegistries;
      this._blockedRegistries = value.blockedRegistries;
      this._insecureRegistries = value.insecureRegistries;
    }
  }

  // allowed_registries - computed: true, optional: true, required: false
  private _allowedRegistries?: string[]; 
  public get allowedRegistries() {
    return this.getListAttribute('allowed_registries');
  }
  public set allowedRegistries(value: string[]) {
    this._allowedRegistries = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries;
  }

  // blocked_registries - computed: true, optional: true, required: false
  private _blockedRegistries?: string[]; 
  public get blockedRegistries() {
    return this.getListAttribute('blocked_registries');
  }
  public set blockedRegistries(value: string[]) {
    this._blockedRegistries = value;
  }
  public resetBlockedRegistries() {
    this._blockedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRegistriesInput() {
    return this._blockedRegistries;
  }

  // insecure_registries - computed: true, optional: true, required: false
  private _insecureRegistries?: string[]; 
  public get insecureRegistries() {
    return this.getListAttribute('insecure_registries');
  }
  public set insecureRegistries(value: string[]) {
    this._insecureRegistries = value;
  }
  public resetInsecureRegistries() {
    this._insecureRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistriesInput() {
    return this._insecureRegistries;
  }
}
export interface ClusterRosaHcpRegistryConfig {
  /**
  * additional_trusted_ca is a map containing the registry hostname as the key, and the PEM-encoded certificate as the value, for each additional registry CA to trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#additional_trusted_ca ClusterRosaHcp#additional_trusted_ca}
  */
  readonly additionalTrustedCa?: { [key: string]: string };
  /**
  * allowed_registries_for_import limits the container image registries that normal users may import images from. Set this list to the registries that you trust to contain valid Docker images and that you want applications to be able to import from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#allowed_registries_for_import ClusterRosaHcp#allowed_registries_for_import}
  */
  readonly allowedRegistriesForImport?: ClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable;
  /**
  * platform_allowlist_id contains a reference to a RegistryAllowlist which is a list of internal registries which needs to be whitelisted for the platform to work. It can be omitted at creation and updating and its lifecycle can be managed separately if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#platform_allowlist_id ClusterRosaHcp#platform_allowlist_id}
  */
  readonly platformAllowlistId?: string;
  /**
  * registry_sources contains configuration that determines how the container runtime should treat individual registries when accessing images for builds+pods. (e.g. whether or not to allow insecure access).  It does not contain configuration for the internal cluster registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#registry_sources ClusterRosaHcp#registry_sources}
  */
  readonly registrySources?: ClusterRosaHcpRegistryConfigRegistrySources;
}

export function clusterRosaHcpRegistryConfigToTerraform(struct?: ClusterRosaHcpRegistryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_trusted_ca: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalTrustedCa),
    allowed_registries_for_import: cdktf.listMapper(clusterRosaHcpRegistryConfigAllowedRegistriesForImportToTerraform, false)(struct!.allowedRegistriesForImport),
    platform_allowlist_id: cdktf.stringToTerraform(struct!.platformAllowlistId),
    registry_sources: clusterRosaHcpRegistryConfigRegistrySourcesToTerraform(struct!.registrySources),
  }
}


export function clusterRosaHcpRegistryConfigToHclTerraform(struct?: ClusterRosaHcpRegistryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_trusted_ca: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalTrustedCa),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_registries_for_import: {
      value: cdktf.listMapperHcl(clusterRosaHcpRegistryConfigAllowedRegistriesForImportToHclTerraform, false)(struct!.allowedRegistriesForImport),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterRosaHcpRegistryConfigAllowedRegistriesForImportList",
    },
    platform_allowlist_id: {
      value: cdktf.stringToHclTerraform(struct!.platformAllowlistId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_sources: {
      value: clusterRosaHcpRegistryConfigRegistrySourcesToHclTerraform(struct!.registrySources),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterRosaHcpRegistryConfigRegistrySources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpRegistryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpRegistryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTrustedCa = this._additionalTrustedCa;
    }
    if (this._allowedRegistriesForImport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistriesForImport = this._allowedRegistriesForImport?.internalValue;
    }
    if (this._platformAllowlistId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformAllowlistId = this._platformAllowlistId;
    }
    if (this._registrySources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrySources = this._registrySources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpRegistryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalTrustedCa = undefined;
      this._allowedRegistriesForImport.internalValue = undefined;
      this._platformAllowlistId = undefined;
      this._registrySources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalTrustedCa = value.additionalTrustedCa;
      this._allowedRegistriesForImport.internalValue = value.allowedRegistriesForImport;
      this._platformAllowlistId = value.platformAllowlistId;
      this._registrySources.internalValue = value.registrySources;
    }
  }

  // additional_trusted_ca - computed: true, optional: true, required: false
  private _additionalTrustedCa?: { [key: string]: string }; 
  public get additionalTrustedCa() {
    return this.getStringMapAttribute('additional_trusted_ca');
  }
  public set additionalTrustedCa(value: { [key: string]: string }) {
    this._additionalTrustedCa = value;
  }
  public resetAdditionalTrustedCa() {
    this._additionalTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustedCaInput() {
    return this._additionalTrustedCa;
  }

  // allowed_registries_for_import - computed: true, optional: true, required: false
  private _allowedRegistriesForImport = new ClusterRosaHcpRegistryConfigAllowedRegistriesForImportList(this, "allowed_registries_for_import", false);
  public get allowedRegistriesForImport() {
    return this._allowedRegistriesForImport;
  }
  public putAllowedRegistriesForImport(value: ClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable) {
    this._allowedRegistriesForImport.internalValue = value;
  }
  public resetAllowedRegistriesForImport() {
    this._allowedRegistriesForImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesForImportInput() {
    return this._allowedRegistriesForImport.internalValue;
  }

  // platform_allowlist_id - computed: true, optional: true, required: false
  private _platformAllowlistId?: string; 
  public get platformAllowlistId() {
    return this.getStringAttribute('platform_allowlist_id');
  }
  public set platformAllowlistId(value: string) {
    this._platformAllowlistId = value;
  }
  public resetPlatformAllowlistId() {
    this._platformAllowlistId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformAllowlistIdInput() {
    return this._platformAllowlistId;
  }

  // registry_sources - computed: false, optional: true, required: false
  private _registrySources = new ClusterRosaHcpRegistryConfigRegistrySourcesOutputReference(this, "registry_sources");
  public get registrySources() {
    return this._registrySources;
  }
  public putRegistrySources(value: ClusterRosaHcpRegistryConfigRegistrySources) {
    this._registrySources.internalValue = value;
  }
  public resetRegistrySources() {
    this._registrySources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrySourcesInput() {
    return this._registrySources.internalValue;
  }
}
export interface ClusterRosaHcpSharedVpc {
  /**
  * ID assigned by AWS to private Route 53 hosted zone associated with intended shared VPC, e.g. 'Z05646003S02O1ENCDCSN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#ingress_private_hosted_zone_id ClusterRosaHcp#ingress_private_hosted_zone_id}
  */
  readonly ingressPrivateHostedZoneId: string;
  /**
  * ID assigned by AWS to private Route 53 hosted zone associated with intended shared VPC, e.g. 'Z05646003S02O1ENCDCSN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#internal_communication_private_hosted_zone_id ClusterRosaHcp#internal_communication_private_hosted_zone_id}
  */
  readonly internalCommunicationPrivateHostedZoneId?: string;
  /**
  * AWS IAM role ARN with a policy attached, granting permissions necessary to create and manage Route 53 DNS records in private Route 53 hosted zone associated with intended shared VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#route53_role_arn ClusterRosaHcp#route53_role_arn}
  */
  readonly route53RoleArn: string;
  /**
  * AWS IAM role ARN with a policy attached, granting permissions necessary to create and manage VPC Endpoints associated with intended shared VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#vpce_role_arn ClusterRosaHcp#vpce_role_arn}
  */
  readonly vpceRoleArn: string;
}

export function clusterRosaHcpSharedVpcToTerraform(struct?: ClusterRosaHcpSharedVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_private_hosted_zone_id: cdktf.stringToTerraform(struct!.ingressPrivateHostedZoneId),
    internal_communication_private_hosted_zone_id: cdktf.stringToTerraform(struct!.internalCommunicationPrivateHostedZoneId),
    route53_role_arn: cdktf.stringToTerraform(struct!.route53RoleArn),
    vpce_role_arn: cdktf.stringToTerraform(struct!.vpceRoleArn),
  }
}


export function clusterRosaHcpSharedVpcToHclTerraform(struct?: ClusterRosaHcpSharedVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_private_hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.ingressPrivateHostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_communication_private_hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.internalCommunicationPrivateHostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.route53RoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpce_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.vpceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpSharedVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpSharedVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressPrivateHostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPrivateHostedZoneId = this._ingressPrivateHostedZoneId;
    }
    if (this._internalCommunicationPrivateHostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalCommunicationPrivateHostedZoneId = this._internalCommunicationPrivateHostedZoneId;
    }
    if (this._route53RoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53RoleArn = this._route53RoleArn;
    }
    if (this._vpceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceRoleArn = this._vpceRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpSharedVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressPrivateHostedZoneId = undefined;
      this._internalCommunicationPrivateHostedZoneId = undefined;
      this._route53RoleArn = undefined;
      this._vpceRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressPrivateHostedZoneId = value.ingressPrivateHostedZoneId;
      this._internalCommunicationPrivateHostedZoneId = value.internalCommunicationPrivateHostedZoneId;
      this._route53RoleArn = value.route53RoleArn;
      this._vpceRoleArn = value.vpceRoleArn;
    }
  }

  // ingress_private_hosted_zone_id - computed: false, optional: false, required: true
  private _ingressPrivateHostedZoneId?: string; 
  public get ingressPrivateHostedZoneId() {
    return this.getStringAttribute('ingress_private_hosted_zone_id');
  }
  public set ingressPrivateHostedZoneId(value: string) {
    this._ingressPrivateHostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPrivateHostedZoneIdInput() {
    return this._ingressPrivateHostedZoneId;
  }

  // internal_communication_private_hosted_zone_id - computed: false, optional: true, required: false
  private _internalCommunicationPrivateHostedZoneId?: string; 
  public get internalCommunicationPrivateHostedZoneId() {
    return this.getStringAttribute('internal_communication_private_hosted_zone_id');
  }
  public set internalCommunicationPrivateHostedZoneId(value: string) {
    this._internalCommunicationPrivateHostedZoneId = value;
  }
  public resetInternalCommunicationPrivateHostedZoneId() {
    this._internalCommunicationPrivateHostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalCommunicationPrivateHostedZoneIdInput() {
    return this._internalCommunicationPrivateHostedZoneId;
  }

  // route53_role_arn - computed: false, optional: false, required: true
  private _route53RoleArn?: string; 
  public get route53RoleArn() {
    return this.getStringAttribute('route53_role_arn');
  }
  public set route53RoleArn(value: string) {
    this._route53RoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get route53RoleArnInput() {
    return this._route53RoleArn;
  }

  // vpce_role_arn - computed: false, optional: false, required: true
  private _vpceRoleArn?: string; 
  public get vpceRoleArn() {
    return this.getStringAttribute('vpce_role_arn');
  }
  public set vpceRoleArn(value: string) {
    this._vpceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceRoleArnInput() {
    return this._vpceRoleArn;
  }
}
export interface ClusterRosaHcpStsInstanceIamRoles {
  /**
  * Worker/Compute Node Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#worker_role_arn ClusterRosaHcp#worker_role_arn}
  */
  readonly workerRoleArn: string;
}

export function clusterRosaHcpStsInstanceIamRolesToTerraform(struct?: ClusterRosaHcpStsInstanceIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_role_arn: cdktf.stringToTerraform(struct!.workerRoleArn),
  }
}


export function clusterRosaHcpStsInstanceIamRolesToHclTerraform(struct?: ClusterRosaHcpStsInstanceIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.workerRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpStsInstanceIamRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpStsInstanceIamRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRoleArn = this._workerRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpStsInstanceIamRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workerRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workerRoleArn = value.workerRoleArn;
    }
  }

  // worker_role_arn - computed: false, optional: false, required: true
  private _workerRoleArn?: string; 
  public get workerRoleArn() {
    return this.getStringAttribute('worker_role_arn');
  }
  public set workerRoleArn(value: string) {
    this._workerRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRoleArnInput() {
    return this._workerRoleArn;
  }
}
export interface ClusterRosaHcpSts {
  /**
  * Instance IAM Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#instance_iam_roles ClusterRosaHcp#instance_iam_roles}
  */
  readonly instanceIamRoles: ClusterRosaHcpStsInstanceIamRoles;
  /**
  * OIDC Configuration ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#oidc_config_id ClusterRosaHcp#oidc_config_id}
  */
  readonly oidcConfigId?: string;
  /**
  * OIDC Endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#oidc_endpoint_url ClusterRosaHcp#oidc_endpoint_url}
  */
  readonly oidcEndpointUrl?: string;
  /**
  * Operator IAM Role prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#operator_role_prefix ClusterRosaHcp#operator_role_prefix}
  */
  readonly operatorRolePrefix: string;
  /**
  * Installer Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#role_arn ClusterRosaHcp#role_arn}
  */
  readonly roleArn: string;
  /**
  * Support Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#support_role_arn ClusterRosaHcp#support_role_arn}
  */
  readonly supportRoleArn: string;
}

export function clusterRosaHcpStsToTerraform(struct?: ClusterRosaHcpSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_iam_roles: clusterRosaHcpStsInstanceIamRolesToTerraform(struct!.instanceIamRoles),
    oidc_config_id: cdktf.stringToTerraform(struct!.oidcConfigId),
    oidc_endpoint_url: cdktf.stringToTerraform(struct!.oidcEndpointUrl),
    operator_role_prefix: cdktf.stringToTerraform(struct!.operatorRolePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    support_role_arn: cdktf.stringToTerraform(struct!.supportRoleArn),
  }
}


export function clusterRosaHcpStsToHclTerraform(struct?: ClusterRosaHcpSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_iam_roles: {
      value: clusterRosaHcpStsInstanceIamRolesToHclTerraform(struct!.instanceIamRoles),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterRosaHcpStsInstanceIamRoles",
    },
    oidc_config_id: {
      value: cdktf.stringToHclTerraform(struct!.oidcConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.oidcEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_role_prefix: {
      value: cdktf.stringToHclTerraform(struct!.operatorRolePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.supportRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaHcpStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaHcpSts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceIamRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIamRoles = this._instanceIamRoles?.internalValue;
    }
    if (this._oidcConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcConfigId = this._oidcConfigId;
    }
    if (this._oidcEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEndpointUrl = this._oidcEndpointUrl;
    }
    if (this._operatorRolePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorRolePrefix = this._operatorRolePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._supportRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRoleArn = this._supportRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaHcpSts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceIamRoles.internalValue = undefined;
      this._oidcConfigId = undefined;
      this._oidcEndpointUrl = undefined;
      this._operatorRolePrefix = undefined;
      this._roleArn = undefined;
      this._supportRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceIamRoles.internalValue = value.instanceIamRoles;
      this._oidcConfigId = value.oidcConfigId;
      this._oidcEndpointUrl = value.oidcEndpointUrl;
      this._operatorRolePrefix = value.operatorRolePrefix;
      this._roleArn = value.roleArn;
      this._supportRoleArn = value.supportRoleArn;
    }
  }

  // instance_iam_roles - computed: false, optional: false, required: true
  private _instanceIamRoles = new ClusterRosaHcpStsInstanceIamRolesOutputReference(this, "instance_iam_roles");
  public get instanceIamRoles() {
    return this._instanceIamRoles;
  }
  public putInstanceIamRoles(value: ClusterRosaHcpStsInstanceIamRoles) {
    this._instanceIamRoles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIamRolesInput() {
    return this._instanceIamRoles.internalValue;
  }

  // oidc_config_id - computed: false, optional: true, required: false
  private _oidcConfigId?: string; 
  public get oidcConfigId() {
    return this.getStringAttribute('oidc_config_id');
  }
  public set oidcConfigId(value: string) {
    this._oidcConfigId = value;
  }
  public resetOidcConfigId() {
    this._oidcConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigIdInput() {
    return this._oidcConfigId;
  }

  // oidc_endpoint_url - computed: true, optional: true, required: false
  private _oidcEndpointUrl?: string; 
  public get oidcEndpointUrl() {
    return this.getStringAttribute('oidc_endpoint_url');
  }
  public set oidcEndpointUrl(value: string) {
    this._oidcEndpointUrl = value;
  }
  public resetOidcEndpointUrl() {
    this._oidcEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointUrlInput() {
    return this._oidcEndpointUrl;
  }

  // operator_role_prefix - computed: false, optional: false, required: true
  private _operatorRolePrefix?: string; 
  public get operatorRolePrefix() {
    return this.getStringAttribute('operator_role_prefix');
  }
  public set operatorRolePrefix(value: string) {
    this._operatorRolePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorRolePrefixInput() {
    return this._operatorRolePrefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // support_role_arn - computed: false, optional: false, required: true
  private _supportRoleArn?: string; 
  public get supportRoleArn() {
    return this.getStringAttribute('support_role_arn');
  }
  public set supportRoleArn(value: string) {
    this._supportRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRoleArnInput() {
    return this._supportRoleArn;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp rhcs_cluster_rosa_hcp}
*/
export class ClusterRosaHcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster_rosa_hcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterRosaHcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterRosaHcp to import
  * @param importFromId The id of the existing ClusterRosaHcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterRosaHcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster_rosa_hcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_hcp rhcs_cluster_rosa_hcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRosaHcpConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRosaHcpConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster_rosa_hcp',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminCredentials.internalValue = config.adminCredentials;
    this._availabilityZones = config.availabilityZones;
    this._awsAccountId = config.awsAccountId;
    this._awsAdditionalAllowedPrincipals = config.awsAdditionalAllowedPrincipals;
    this._awsAdditionalComputeSecurityGroupIds = config.awsAdditionalComputeSecurityGroupIds;
    this._awsBillingAccountId = config.awsBillingAccountId;
    this._awsSubnetIds = config.awsSubnetIds;
    this._baseDnsDomain = config.baseDnsDomain;
    this._channelGroup = config.channelGroup;
    this._cloudRegion = config.cloudRegion;
    this._computeMachineType = config.computeMachineType;
    this._createAdminUser = config.createAdminUser;
    this._destroyTimeout = config.destroyTimeout;
    this._disableWaitingInDestroy = config.disableWaitingInDestroy;
    this._domainPrefix = config.domainPrefix;
    this._ec2MetadataHttpTokens = config.ec2MetadataHttpTokens;
    this._etcdEncryption = config.etcdEncryption;
    this._etcdKmsKeyArn = config.etcdKmsKeyArn;
    this._externalAuthProvidersEnabled = config.externalAuthProvidersEnabled;
    this._hostPrefix = config.hostPrefix;
    this._kmsKeyArn = config.kmsKeyArn;
    this._machineCidr = config.machineCidr;
    this._maxHcpClusterWaitTimeoutInMinutes = config.maxHcpClusterWaitTimeoutInMinutes;
    this._maxMachinepoolWaitTimeoutInMinutes = config.maxMachinepoolWaitTimeoutInMinutes;
    this._name = config.name;
    this._podCidr = config.podCidr;
    this._private = config.private;
    this._properties = config.properties;
    this._proxy.internalValue = config.proxy;
    this._registryConfig.internalValue = config.registryConfig;
    this._replicas = config.replicas;
    this._serviceCidr = config.serviceCidr;
    this._sharedVpc.internalValue = config.sharedVpc;
    this._sts.internalValue = config.sts;
    this._tags = config.tags;
    this._upgradeAcknowledgementsFor = config.upgradeAcknowledgementsFor;
    this._version = config.version;
    this._waitForCreateComplete = config.waitForCreateComplete;
    this._waitForStdComputeNodesComplete = config.waitForStdComputeNodesComplete;
    this._workerDiskSize = config.workerDiskSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_credentials - computed: true, optional: true, required: false
  private _adminCredentials = new ClusterRosaHcpAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }
  public putAdminCredentials(value: ClusterRosaHcpAdminCredentials) {
    this._adminCredentials.internalValue = value;
  }
  public resetAdminCredentials() {
    this._adminCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialsInput() {
    return this._adminCredentials.internalValue;
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_additional_allowed_principals - computed: false, optional: true, required: false
  private _awsAdditionalAllowedPrincipals?: string[]; 
  public get awsAdditionalAllowedPrincipals() {
    return this.getListAttribute('aws_additional_allowed_principals');
  }
  public set awsAdditionalAllowedPrincipals(value: string[]) {
    this._awsAdditionalAllowedPrincipals = value;
  }
  public resetAwsAdditionalAllowedPrincipals() {
    this._awsAdditionalAllowedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAdditionalAllowedPrincipalsInput() {
    return this._awsAdditionalAllowedPrincipals;
  }

  // aws_additional_compute_security_group_ids - computed: false, optional: true, required: false
  private _awsAdditionalComputeSecurityGroupIds?: string[]; 
  public get awsAdditionalComputeSecurityGroupIds() {
    return this.getListAttribute('aws_additional_compute_security_group_ids');
  }
  public set awsAdditionalComputeSecurityGroupIds(value: string[]) {
    this._awsAdditionalComputeSecurityGroupIds = value;
  }
  public resetAwsAdditionalComputeSecurityGroupIds() {
    this._awsAdditionalComputeSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAdditionalComputeSecurityGroupIdsInput() {
    return this._awsAdditionalComputeSecurityGroupIds;
  }

  // aws_billing_account_id - computed: false, optional: true, required: false
  private _awsBillingAccountId?: string; 
  public get awsBillingAccountId() {
    return this.getStringAttribute('aws_billing_account_id');
  }
  public set awsBillingAccountId(value: string) {
    this._awsBillingAccountId = value;
  }
  public resetAwsBillingAccountId() {
    this._awsBillingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsBillingAccountIdInput() {
    return this._awsBillingAccountId;
  }

  // aws_subnet_ids - computed: false, optional: false, required: true
  private _awsSubnetIds?: string[]; 
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }
  public set awsSubnetIds(value: string[]) {
    this._awsSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSubnetIdsInput() {
    return this._awsSubnetIds;
  }

  // base_dns_domain - computed: true, optional: true, required: false
  private _baseDnsDomain?: string; 
  public get baseDnsDomain() {
    return this.getStringAttribute('base_dns_domain');
  }
  public set baseDnsDomain(value: string) {
    this._baseDnsDomain = value;
  }
  public resetBaseDnsDomain() {
    this._baseDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnsDomainInput() {
    return this._baseDnsDomain;
  }

  // channel_group - computed: true, optional: true, required: false
  private _channelGroup?: string; 
  public get channelGroup() {
    return this.getStringAttribute('channel_group');
  }
  public set channelGroup(value: string) {
    this._channelGroup = value;
  }
  public resetChannelGroup() {
    this._channelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupInput() {
    return this._channelGroup;
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // compute_machine_type - computed: false, optional: true, required: false
  private _computeMachineType?: string; 
  public get computeMachineType() {
    return this.getStringAttribute('compute_machine_type');
  }
  public set computeMachineType(value: string) {
    this._computeMachineType = value;
  }
  public resetComputeMachineType() {
    this._computeMachineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMachineTypeInput() {
    return this._computeMachineType;
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // create_admin_user - computed: false, optional: true, required: false
  private _createAdminUser?: boolean | cdktf.IResolvable; 
  public get createAdminUser() {
    return this.getBooleanAttribute('create_admin_user');
  }
  public set createAdminUser(value: boolean | cdktf.IResolvable) {
    this._createAdminUser = value;
  }
  public resetCreateAdminUser() {
    this._createAdminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAdminUserInput() {
    return this._createAdminUser;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // destroy_timeout - computed: false, optional: true, required: false
  private _destroyTimeout?: number; 
  public get destroyTimeout() {
    return this.getNumberAttribute('destroy_timeout');
  }
  public set destroyTimeout(value: number) {
    this._destroyTimeout = value;
  }
  public resetDestroyTimeout() {
    this._destroyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyTimeoutInput() {
    return this._destroyTimeout;
  }

  // disable_waiting_in_destroy - computed: false, optional: true, required: false
  private _disableWaitingInDestroy?: boolean | cdktf.IResolvable; 
  public get disableWaitingInDestroy() {
    return this.getBooleanAttribute('disable_waiting_in_destroy');
  }
  public set disableWaitingInDestroy(value: boolean | cdktf.IResolvable) {
    this._disableWaitingInDestroy = value;
  }
  public resetDisableWaitingInDestroy() {
    this._disableWaitingInDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitingInDestroyInput() {
    return this._disableWaitingInDestroy;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_prefix - computed: true, optional: true, required: false
  private _domainPrefix?: string; 
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }
  public set domainPrefix(value: string) {
    this._domainPrefix = value;
  }
  public resetDomainPrefix() {
    this._domainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPrefixInput() {
    return this._domainPrefix;
  }

  // ec2_metadata_http_tokens - computed: true, optional: true, required: false
  private _ec2MetadataHttpTokens?: string; 
  public get ec2MetadataHttpTokens() {
    return this.getStringAttribute('ec2_metadata_http_tokens');
  }
  public set ec2MetadataHttpTokens(value: string) {
    this._ec2MetadataHttpTokens = value;
  }
  public resetEc2MetadataHttpTokens() {
    this._ec2MetadataHttpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataHttpTokensInput() {
    return this._ec2MetadataHttpTokens;
  }

  // etcd_encryption - computed: true, optional: true, required: false
  private _etcdEncryption?: boolean | cdktf.IResolvable; 
  public get etcdEncryption() {
    return this.getBooleanAttribute('etcd_encryption');
  }
  public set etcdEncryption(value: boolean | cdktf.IResolvable) {
    this._etcdEncryption = value;
  }
  public resetEtcdEncryption() {
    this._etcdEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdEncryptionInput() {
    return this._etcdEncryption;
  }

  // etcd_kms_key_arn - computed: false, optional: true, required: false
  private _etcdKmsKeyArn?: string; 
  public get etcdKmsKeyArn() {
    return this.getStringAttribute('etcd_kms_key_arn');
  }
  public set etcdKmsKeyArn(value: string) {
    this._etcdKmsKeyArn = value;
  }
  public resetEtcdKmsKeyArn() {
    this._etcdKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdKmsKeyArnInput() {
    return this._etcdKmsKeyArn;
  }

  // external_auth_providers_enabled - computed: false, optional: true, required: false
  private _externalAuthProvidersEnabled?: boolean | cdktf.IResolvable; 
  public get externalAuthProvidersEnabled() {
    return this.getBooleanAttribute('external_auth_providers_enabled');
  }
  public set externalAuthProvidersEnabled(value: boolean | cdktf.IResolvable) {
    this._externalAuthProvidersEnabled = value;
  }
  public resetExternalAuthProvidersEnabled() {
    this._externalAuthProvidersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthProvidersEnabledInput() {
    return this._externalAuthProvidersEnabled;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // host_prefix - computed: true, optional: true, required: false
  private _hostPrefix?: number; 
  public get hostPrefix() {
    return this.getNumberAttribute('host_prefix');
  }
  public set hostPrefix(value: number) {
    this._hostPrefix = value;
  }
  public resetHostPrefix() {
    this._hostPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrefixInput() {
    return this._hostPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // machine_cidr - computed: true, optional: true, required: false
  private _machineCidr?: string; 
  public get machineCidr() {
    return this.getStringAttribute('machine_cidr');
  }
  public set machineCidr(value: string) {
    this._machineCidr = value;
  }
  public resetMachineCidr() {
    this._machineCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCidrInput() {
    return this._machineCidr;
  }

  // max_hcp_cluster_wait_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxHcpClusterWaitTimeoutInMinutes?: number; 
  public get maxHcpClusterWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_hcp_cluster_wait_timeout_in_minutes');
  }
  public set maxHcpClusterWaitTimeoutInMinutes(value: number) {
    this._maxHcpClusterWaitTimeoutInMinutes = value;
  }
  public resetMaxHcpClusterWaitTimeoutInMinutes() {
    this._maxHcpClusterWaitTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHcpClusterWaitTimeoutInMinutesInput() {
    return this._maxHcpClusterWaitTimeoutInMinutes;
  }

  // max_machinepool_wait_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxMachinepoolWaitTimeoutInMinutes?: number; 
  public get maxMachinepoolWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_machinepool_wait_timeout_in_minutes');
  }
  public set maxMachinepoolWaitTimeoutInMinutes(value: number) {
    this._maxMachinepoolWaitTimeoutInMinutes = value;
  }
  public resetMaxMachinepoolWaitTimeoutInMinutes() {
    this._maxMachinepoolWaitTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMachinepoolWaitTimeoutInMinutesInput() {
    return this._maxMachinepoolWaitTimeoutInMinutes;
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

  // ocm_properties - computed: true, optional: false, required: false
  private _ocmProperties = new cdktf.StringMap(this, "ocm_properties");
  public get ocmProperties() {
    return this._ocmProperties;
  }

  // pod_cidr - computed: true, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // private - computed: true, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new ClusterRosaHcpProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ClusterRosaHcpProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // registry_config - computed: false, optional: true, required: false
  private _registryConfig = new ClusterRosaHcpRegistryConfigOutputReference(this, "registry_config");
  public get registryConfig() {
    return this._registryConfig;
  }
  public putRegistryConfig(value: ClusterRosaHcpRegistryConfig) {
    this._registryConfig.internalValue = value;
  }
  public resetRegistryConfig() {
    this._registryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryConfigInput() {
    return this._registryConfig.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // service_cidr - computed: true, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // shared_vpc - computed: false, optional: true, required: false
  private _sharedVpc = new ClusterRosaHcpSharedVpcOutputReference(this, "shared_vpc");
  public get sharedVpc() {
    return this._sharedVpc;
  }
  public putSharedVpc(value: ClusterRosaHcpSharedVpc) {
    this._sharedVpc.internalValue = value;
  }
  public resetSharedVpc() {
    this._sharedVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVpcInput() {
    return this._sharedVpc.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sts - computed: false, optional: false, required: true
  private _sts = new ClusterRosaHcpStsOutputReference(this, "sts");
  public get sts() {
    return this._sts;
  }
  public putSts(value: ClusterRosaHcpSts) {
    this._sts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stsInput() {
    return this._sts.internalValue;
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

  // upgrade_acknowledgements_for - computed: false, optional: true, required: false
  private _upgradeAcknowledgementsFor?: string; 
  public get upgradeAcknowledgementsFor() {
    return this.getStringAttribute('upgrade_acknowledgements_for');
  }
  public set upgradeAcknowledgementsFor(value: string) {
    this._upgradeAcknowledgementsFor = value;
  }
  public resetUpgradeAcknowledgementsFor() {
    this._upgradeAcknowledgementsFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAcknowledgementsForInput() {
    return this._upgradeAcknowledgementsFor;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_for_create_complete - computed: false, optional: true, required: false
  private _waitForCreateComplete?: boolean | cdktf.IResolvable; 
  public get waitForCreateComplete() {
    return this.getBooleanAttribute('wait_for_create_complete');
  }
  public set waitForCreateComplete(value: boolean | cdktf.IResolvable) {
    this._waitForCreateComplete = value;
  }
  public resetWaitForCreateComplete() {
    this._waitForCreateComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCreateCompleteInput() {
    return this._waitForCreateComplete;
  }

  // wait_for_std_compute_nodes_complete - computed: false, optional: true, required: false
  private _waitForStdComputeNodesComplete?: boolean | cdktf.IResolvable; 
  public get waitForStdComputeNodesComplete() {
    return this.getBooleanAttribute('wait_for_std_compute_nodes_complete');
  }
  public set waitForStdComputeNodesComplete(value: boolean | cdktf.IResolvable) {
    this._waitForStdComputeNodesComplete = value;
  }
  public resetWaitForStdComputeNodesComplete() {
    this._waitForStdComputeNodesComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForStdComputeNodesCompleteInput() {
    return this._waitForStdComputeNodesComplete;
  }

  // worker_disk_size - computed: false, optional: true, required: false
  private _workerDiskSize?: number; 
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }
  public set workerDiskSize(value: number) {
    this._workerDiskSize = value;
  }
  public resetWorkerDiskSize() {
    this._workerDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSizeInput() {
    return this._workerDiskSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_credentials: clusterRosaHcpAdminCredentialsToTerraform(this._adminCredentials.internalValue),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_additional_allowed_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalAllowedPrincipals),
      aws_additional_compute_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalComputeSecurityGroupIds),
      aws_billing_account_id: cdktf.stringToTerraform(this._awsBillingAccountId),
      aws_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSubnetIds),
      base_dns_domain: cdktf.stringToTerraform(this._baseDnsDomain),
      channel_group: cdktf.stringToTerraform(this._channelGroup),
      cloud_region: cdktf.stringToTerraform(this._cloudRegion),
      compute_machine_type: cdktf.stringToTerraform(this._computeMachineType),
      create_admin_user: cdktf.booleanToTerraform(this._createAdminUser),
      destroy_timeout: cdktf.numberToTerraform(this._destroyTimeout),
      disable_waiting_in_destroy: cdktf.booleanToTerraform(this._disableWaitingInDestroy),
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      ec2_metadata_http_tokens: cdktf.stringToTerraform(this._ec2MetadataHttpTokens),
      etcd_encryption: cdktf.booleanToTerraform(this._etcdEncryption),
      etcd_kms_key_arn: cdktf.stringToTerraform(this._etcdKmsKeyArn),
      external_auth_providers_enabled: cdktf.booleanToTerraform(this._externalAuthProvidersEnabled),
      host_prefix: cdktf.numberToTerraform(this._hostPrefix),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      machine_cidr: cdktf.stringToTerraform(this._machineCidr),
      max_hcp_cluster_wait_timeout_in_minutes: cdktf.numberToTerraform(this._maxHcpClusterWaitTimeoutInMinutes),
      max_machinepool_wait_timeout_in_minutes: cdktf.numberToTerraform(this._maxMachinepoolWaitTimeoutInMinutes),
      name: cdktf.stringToTerraform(this._name),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      private: cdktf.booleanToTerraform(this._private),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      proxy: clusterRosaHcpProxyToTerraform(this._proxy.internalValue),
      registry_config: clusterRosaHcpRegistryConfigToTerraform(this._registryConfig.internalValue),
      replicas: cdktf.numberToTerraform(this._replicas),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      shared_vpc: clusterRosaHcpSharedVpcToTerraform(this._sharedVpc.internalValue),
      sts: clusterRosaHcpStsToTerraform(this._sts.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_acknowledgements_for: cdktf.stringToTerraform(this._upgradeAcknowledgementsFor),
      version: cdktf.stringToTerraform(this._version),
      wait_for_create_complete: cdktf.booleanToTerraform(this._waitForCreateComplete),
      wait_for_std_compute_nodes_complete: cdktf.booleanToTerraform(this._waitForStdComputeNodesComplete),
      worker_disk_size: cdktf.numberToTerraform(this._workerDiskSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_credentials: {
        value: clusterRosaHcpAdminCredentialsToHclTerraform(this._adminCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaHcpAdminCredentials",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_additional_allowed_principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalAllowedPrincipals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_additional_compute_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalComputeSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_billing_account_id: {
        value: cdktf.stringToHclTerraform(this._awsBillingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      base_dns_domain: {
        value: cdktf.stringToHclTerraform(this._baseDnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_group: {
        value: cdktf.stringToHclTerraform(this._channelGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_region: {
        value: cdktf.stringToHclTerraform(this._cloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_machine_type: {
        value: cdktf.stringToHclTerraform(this._computeMachineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_admin_user: {
        value: cdktf.booleanToHclTerraform(this._createAdminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destroy_timeout: {
        value: cdktf.numberToHclTerraform(this._destroyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_waiting_in_destroy: {
        value: cdktf.booleanToHclTerraform(this._disableWaitingInDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_prefix: {
        value: cdktf.stringToHclTerraform(this._domainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_http_tokens: {
        value: cdktf.stringToHclTerraform(this._ec2MetadataHttpTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etcd_encryption: {
        value: cdktf.booleanToHclTerraform(this._etcdEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etcd_kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._etcdKmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_auth_providers_enabled: {
        value: cdktf.booleanToHclTerraform(this._externalAuthProvidersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_prefix: {
        value: cdktf.numberToHclTerraform(this._hostPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_cidr: {
        value: cdktf.stringToHclTerraform(this._machineCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hcp_cluster_wait_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._maxHcpClusterWaitTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_machinepool_wait_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._maxMachinepoolWaitTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_cidr: {
        value: cdktf.stringToHclTerraform(this._podCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      proxy: {
        value: clusterRosaHcpProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaHcpProxy",
      },
      registry_config: {
        value: clusterRosaHcpRegistryConfigToHclTerraform(this._registryConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaHcpRegistryConfig",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_vpc: {
        value: clusterRosaHcpSharedVpcToHclTerraform(this._sharedVpc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaHcpSharedVpc",
      },
      sts: {
        value: clusterRosaHcpStsToHclTerraform(this._sts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaHcpSts",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upgrade_acknowledgements_for: {
        value: cdktf.stringToHclTerraform(this._upgradeAcknowledgementsFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_create_complete: {
        value: cdktf.booleanToHclTerraform(this._waitForCreateComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_std_compute_nodes_complete: {
        value: cdktf.booleanToHclTerraform(this._waitForStdComputeNodesComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      worker_disk_size: {
        value: cdktf.numberToHclTerraform(this._workerDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
