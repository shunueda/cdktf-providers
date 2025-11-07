// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRosaClassicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin user credentials. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#admin_credentials ClusterRosaClassic#admin_credentials}
  */
  readonly adminCredentials?: ClusterRosaClassicAdminCredentials;
  /**
  * Enable autoscaling for the initial worker pool. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#autoscaling_enabled ClusterRosaClassic#autoscaling_enabled}
  */
  readonly autoscalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Availability zones. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#availability_zones ClusterRosaClassic#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Identifier of the AWS account. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_account_id ClusterRosaClassic#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS additional compute security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_additional_compute_security_group_ids ClusterRosaClassic#aws_additional_compute_security_group_ids}
  */
  readonly awsAdditionalComputeSecurityGroupIds?: string[];
  /**
  * AWS additional control plane security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_additional_control_plane_security_group_ids ClusterRosaClassic#aws_additional_control_plane_security_group_ids}
  */
  readonly awsAdditionalControlPlaneSecurityGroupIds?: string[];
  /**
  * AWS additional infra security group ids. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_additional_infra_security_group_ids ClusterRosaClassic#aws_additional_infra_security_group_ids}
  */
  readonly awsAdditionalInfraSecurityGroupIds?: string[];
  /**
  * Provides private connectivity from your cluster's VPC to Red Hat SRE, without exposing traffic to the public internet. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_private_link ClusterRosaClassic#aws_private_link}
  */
  readonly awsPrivateLink?: boolean | cdktf.IResolvable;
  /**
  * AWS subnet IDs. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#aws_subnet_ids ClusterRosaClassic#aws_subnet_ids}
  */
  readonly awsSubnetIds?: string[];
  /**
  * Base DNS domain name previously reserved and matching the hosted zone name of the private Route 53 hosted zone associated with intended shared VPC, e.g., '1vo8.p1.openshiftapps.com'. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#base_dns_domain ClusterRosaClassic#base_dns_domain}
  */
  readonly baseDnsDomain?: string;
  /**
  * Name of the channel group where you select the OpenShift cluster version, for example 'stable'. For ROSA, only 'stable' and 'eus' are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#channel_group ClusterRosaClassic#channel_group}
  */
  readonly channelGroup?: string;
  /**
  * Cloud region identifier, for example 'us-east-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#cloud_region ClusterRosaClassic#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Identifies the machine type used by the initial worker nodes, for example `m5.xlarge`. Use the `rhcs_machine_types` data source to find the possible values. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#compute_machine_type ClusterRosaClassic#compute_machine_type}
  */
  readonly computeMachineType?: string;
  /**
  * Indicates if create cluster admin user. Set it true to create cluster admin user with default username `cluster-admin` and generated password. It will be ignored if `admin_credentials` is set.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#create_admin_user ClusterRosaClassic#create_admin_user}
  */
  readonly createAdminUser?: boolean | cdktf.IResolvable;
  /**
  * This value is the default/initial machine pool labels. Format should be a comma-separated list of '{"key1"="value1", "key2"="value2"}'. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#default_mp_labels ClusterRosaClassic#default_mp_labels}
  */
  readonly defaultMpLabels?: { [key: string]: string };
  /**
  * This value sets the maximum duration in minutes to allow for destroying resources. Default value is 60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#destroy_timeout ClusterRosaClassic#destroy_timeout}
  */
  readonly destroyTimeout?: number;
  /**
  * Indicates if cloud permission checks are disabled when attempting installation of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#disable_scp_checks ClusterRosaClassic#disable_scp_checks}
  */
  readonly disableScpChecks?: boolean | cdktf.IResolvable;
  /**
  * Disable addressing cluster state in the destroy resource. Default value is false, and so a `destroy` will wait for the cluster to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#disable_waiting_in_destroy ClusterRosaClassic#disable_waiting_in_destroy}
  */
  readonly disableWaitingInDestroy?: boolean | cdktf.IResolvable;
  /**
  * Enables you to monitor your own projects in isolation from Red Hat Site Reliability Engineer (SRE) platform metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#disable_workload_monitoring ClusterRosaClassic#disable_workload_monitoring}
  */
  readonly disableWorkloadMonitoring?: boolean | cdktf.IResolvable;
  /**
  * The domain prefix is optionally assigned by the user.It will appear in the Cluster's domain when the cluster is provisioned. If not supplied, it will be auto generated. It cannot exceed 15 characters in length. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#domain_prefix ClusterRosaClassic#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * This value determines which EC2 Instance Metadata Service mode to use for EC2 instances in the cluster.This can be set as `optional` (IMDS v1 or v2) or `required` (IMDSv2 only). This feature is available from OpenShift version 4.11.0 and newer. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#ec2_metadata_http_tokens ClusterRosaClassic#ec2_metadata_http_tokens}
  */
  readonly ec2MetadataHttpTokens?: string;
  /**
  * Encrypt etcd data. Note that all AWS storage is already encrypted. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#etcd_encryption ClusterRosaClassic#etcd_encryption}
  */
  readonly etcdEncryption?: boolean | cdktf.IResolvable;
  /**
  * Create cluster that uses FIPS Validated / Modules in Process cryptographic libraries. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#fips ClusterRosaClassic#fips}
  */
  readonly fips?: boolean | cdktf.IResolvable;
  /**
  * Length of the prefix of the subnet assigned to each node. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#host_prefix ClusterRosaClassic#host_prefix}
  */
  readonly hostPrefix?: number;
  /**
  * Used to encrypt root volume of compute node pools. The key ARN is the Amazon Resource Name (ARN) of a AWS Key Management Service (KMS) Key. It is a unique, fully qualified identifier for the AWS KMS Key. A key ARN includes the AWS account, Region, and the key ID(optional). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#kms_key_arn ClusterRosaClassic#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Block of IP addresses for nodes. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#machine_cidr ClusterRosaClassic#machine_cidr}
  */
  readonly machineCidr?: string;
  /**
  * This value sets the maximum duration in minutes to wait for the cluster to be in a ready state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#max_cluster_wait_timeout_in_minutes ClusterRosaClassic#max_cluster_wait_timeout_in_minutes}
  */
  readonly maxClusterWaitTimeoutInMinutes?: number;
  /**
  * Maximum replicas of worker nodes in a machine pool. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#max_replicas ClusterRosaClassic#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Minimum replicas of worker nodes in a machine pool. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#min_replicas ClusterRosaClassic#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Indicates if the cluster should be deployed to multiple availability zones. Default value is 'false'. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#multi_az ClusterRosaClassic#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster. Cannot exceed 54 characters in length. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#name ClusterRosaClassic#name}
  */
  readonly name: string;
  /**
  * Block of IP addresses for pods. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#pod_cidr ClusterRosaClassic#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Restrict cluster API endpoint and application routes to, private connectivity. This requires that PrivateLink be enabled and by extension, your own VPC. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#private ClusterRosaClassic#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Used in a shared VPC topology. HostedZone attributes. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#private_hosted_zone ClusterRosaClassic#private_hosted_zone}
  */
  readonly privateHostedZone?: ClusterRosaClassicPrivateHostedZone;
  /**
  * User defined properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#properties ClusterRosaClassic#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#proxy ClusterRosaClassic#proxy}
  */
  readonly proxy?: ClusterRosaClassicProxy;
  /**
  * Number of worker/compute nodes to provision. Single zone clusters need at least 2 nodes, multizone clusters need at least 3 nodes. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#replicas ClusterRosaClassic#replicas}
  */
  readonly replicas?: number;
  /**
  * Block of IP addresses for the cluster service network. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#service_cidr ClusterRosaClassic#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * STS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#sts ClusterRosaClassic#sts}
  */
  readonly sts?: ClusterRosaClassicSts;
  /**
  * Apply user defined tags to all cluster resources created in AWS. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#tags ClusterRosaClassic#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Indicates acknowledgement of agreements required to upgrade the cluster version between minor versions (e.g. a value of "4.12" indicates acknowledgement of any agreements required to upgrade to OpenShift 4.12.z from 4.11 or before).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#upgrade_acknowledgements_for ClusterRosaClassic#upgrade_acknowledgements_for}
  */
  readonly upgradeAcknowledgementsFor?: string;
  /**
  * Desired version of OpenShift for the cluster, for example '4.11.0'. If version is greater than the currently running version, an upgrade will be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#version ClusterRosaClassic#version}
  */
  readonly version?: string;
  /**
  * Wait until the cluster is either in a ready state or in an error state. The waiter has a timeout of 60 minutes, with the default value set to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#wait_for_create_complete ClusterRosaClassic#wait_for_create_complete}
  */
  readonly waitForCreateComplete?: boolean | cdktf.IResolvable;
  /**
  * Compute node root disk size, in GiB. This attribute specifically applies to the Worker Machine Pool and becomes irrelevant once the resource is created. Any modifications to the initial Machine Pool should be made through the Terraform imported Machine Pool resource. For more details, refer to [Worker Machine Pool in ROSA Cluster](../guides/worker-machine-pool.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#worker_disk_size ClusterRosaClassic#worker_disk_size}
  */
  readonly workerDiskSize?: number;
}
export interface ClusterRosaClassicAdminCredentials {
  /**
  * Admin password that will be created with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#password ClusterRosaClassic#password}
  */
  readonly password?: string;
  /**
  * Admin username that will be created with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#username ClusterRosaClassic#username}
  */
  readonly username?: string;
}

export function clusterRosaClassicAdminCredentialsToTerraform(struct?: ClusterRosaClassicAdminCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterRosaClassicAdminCredentialsToHclTerraform(struct?: ClusterRosaClassicAdminCredentials | cdktf.IResolvable): any {
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

export class ClusterRosaClassicAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaClassicAdminCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterRosaClassicAdminCredentials | cdktf.IResolvable | undefined) {
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
export interface ClusterRosaClassicPrivateHostedZone {
  /**
  * ID assigned by AWS to private Route 53 hosted zone associated with intended shared VPC, e.g. 'Z05646003S02O1ENCDCSN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#id ClusterRosaClassic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * AWS IAM role ARN with a policy attached, granting permissions necessary to create and manage Route 53 DNS records in private Route 53 hosted zone associated with intended shared VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#role_arn ClusterRosaClassic#role_arn}
  */
  readonly roleArn: string;
}

export function clusterRosaClassicPrivateHostedZoneToTerraform(struct?: ClusterRosaClassicPrivateHostedZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function clusterRosaClassicPrivateHostedZoneToHclTerraform(struct?: ClusterRosaClassicPrivateHostedZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRosaClassicPrivateHostedZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaClassicPrivateHostedZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaClassicPrivateHostedZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._roleArn = value.roleArn;
    }
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
}
export interface ClusterRosaClassicProxy {
  /**
  * A string containing a PEM-encoded X.509 certificate bundle that will be added to the nodes' trusted certificate store. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#additional_trust_bundle ClusterRosaClassic#additional_trust_bundle}
  */
  readonly additionalTrustBundle?: string;
  /**
  * HTTP proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#http_proxy ClusterRosaClassic#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#https_proxy ClusterRosaClassic#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * No proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#no_proxy ClusterRosaClassic#no_proxy}
  */
  readonly noProxy?: string;
}

export function clusterRosaClassicProxyToTerraform(struct?: ClusterRosaClassicProxy | cdktf.IResolvable): any {
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


export function clusterRosaClassicProxyToHclTerraform(struct?: ClusterRosaClassicProxy | cdktf.IResolvable): any {
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

export class ClusterRosaClassicProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaClassicProxy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterRosaClassicProxy | cdktf.IResolvable | undefined) {
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
export interface ClusterRosaClassicStsInstanceIamRoles {
  /**
  * Master/Control Plane Node Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#master_role_arn ClusterRosaClassic#master_role_arn}
  */
  readonly masterRoleArn: string;
  /**
  * Worker/Compute Node Role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#worker_role_arn ClusterRosaClassic#worker_role_arn}
  */
  readonly workerRoleArn: string;
}

export function clusterRosaClassicStsInstanceIamRolesToTerraform(struct?: ClusterRosaClassicStsInstanceIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_role_arn: cdktf.stringToTerraform(struct!.masterRoleArn),
    worker_role_arn: cdktf.stringToTerraform(struct!.workerRoleArn),
  }
}


export function clusterRosaClassicStsInstanceIamRolesToHclTerraform(struct?: ClusterRosaClassicStsInstanceIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.masterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ClusterRosaClassicStsInstanceIamRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaClassicStsInstanceIamRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterRoleArn = this._masterRoleArn;
    }
    if (this._workerRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRoleArn = this._workerRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRosaClassicStsInstanceIamRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterRoleArn = undefined;
      this._workerRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterRoleArn = value.masterRoleArn;
      this._workerRoleArn = value.workerRoleArn;
    }
  }

  // master_role_arn - computed: false, optional: false, required: true
  private _masterRoleArn?: string; 
  public get masterRoleArn() {
    return this.getStringAttribute('master_role_arn');
  }
  public set masterRoleArn(value: string) {
    this._masterRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterRoleArnInput() {
    return this._masterRoleArn;
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
export interface ClusterRosaClassicSts {
  /**
  * Instance IAM Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#instance_iam_roles ClusterRosaClassic#instance_iam_roles}
  */
  readonly instanceIamRoles: ClusterRosaClassicStsInstanceIamRoles;
  /**
  * OIDC Configuration ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#oidc_config_id ClusterRosaClassic#oidc_config_id}
  */
  readonly oidcConfigId?: string;
  /**
  * OIDC Endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#oidc_endpoint_url ClusterRosaClassic#oidc_endpoint_url}
  */
  readonly oidcEndpointUrl?: string;
  /**
  * Operator IAM Role prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#operator_role_prefix ClusterRosaClassic#operator_role_prefix}
  */
  readonly operatorRolePrefix: string;
  /**
  * Installer Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#role_arn ClusterRosaClassic#role_arn}
  */
  readonly roleArn: string;
  /**
  * Support Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#support_role_arn ClusterRosaClassic#support_role_arn}
  */
  readonly supportRoleArn: string;
}

export function clusterRosaClassicStsToTerraform(struct?: ClusterRosaClassicSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_iam_roles: clusterRosaClassicStsInstanceIamRolesToTerraform(struct!.instanceIamRoles),
    oidc_config_id: cdktf.stringToTerraform(struct!.oidcConfigId),
    oidc_endpoint_url: cdktf.stringToTerraform(struct!.oidcEndpointUrl),
    operator_role_prefix: cdktf.stringToTerraform(struct!.operatorRolePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    support_role_arn: cdktf.stringToTerraform(struct!.supportRoleArn),
  }
}


export function clusterRosaClassicStsToHclTerraform(struct?: ClusterRosaClassicSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_iam_roles: {
      value: clusterRosaClassicStsInstanceIamRolesToHclTerraform(struct!.instanceIamRoles),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterRosaClassicStsInstanceIamRoles",
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

export class ClusterRosaClassicStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRosaClassicSts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterRosaClassicSts | cdktf.IResolvable | undefined) {
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
  private _instanceIamRoles = new ClusterRosaClassicStsInstanceIamRolesOutputReference(this, "instance_iam_roles");
  public get instanceIamRoles() {
    return this._instanceIamRoles;
  }
  public putInstanceIamRoles(value: ClusterRosaClassicStsInstanceIamRoles) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic rhcs_cluster_rosa_classic}
*/
export class ClusterRosaClassic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster_rosa_classic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterRosaClassic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterRosaClassic to import
  * @param importFromId The id of the existing ClusterRosaClassic that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterRosaClassic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster_rosa_classic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_rosa_classic rhcs_cluster_rosa_classic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRosaClassicConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRosaClassicConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster_rosa_classic',
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
    this._autoscalingEnabled = config.autoscalingEnabled;
    this._availabilityZones = config.availabilityZones;
    this._awsAccountId = config.awsAccountId;
    this._awsAdditionalComputeSecurityGroupIds = config.awsAdditionalComputeSecurityGroupIds;
    this._awsAdditionalControlPlaneSecurityGroupIds = config.awsAdditionalControlPlaneSecurityGroupIds;
    this._awsAdditionalInfraSecurityGroupIds = config.awsAdditionalInfraSecurityGroupIds;
    this._awsPrivateLink = config.awsPrivateLink;
    this._awsSubnetIds = config.awsSubnetIds;
    this._baseDnsDomain = config.baseDnsDomain;
    this._channelGroup = config.channelGroup;
    this._cloudRegion = config.cloudRegion;
    this._computeMachineType = config.computeMachineType;
    this._createAdminUser = config.createAdminUser;
    this._defaultMpLabels = config.defaultMpLabels;
    this._destroyTimeout = config.destroyTimeout;
    this._disableScpChecks = config.disableScpChecks;
    this._disableWaitingInDestroy = config.disableWaitingInDestroy;
    this._disableWorkloadMonitoring = config.disableWorkloadMonitoring;
    this._domainPrefix = config.domainPrefix;
    this._ec2MetadataHttpTokens = config.ec2MetadataHttpTokens;
    this._etcdEncryption = config.etcdEncryption;
    this._fips = config.fips;
    this._hostPrefix = config.hostPrefix;
    this._kmsKeyArn = config.kmsKeyArn;
    this._machineCidr = config.machineCidr;
    this._maxClusterWaitTimeoutInMinutes = config.maxClusterWaitTimeoutInMinutes;
    this._maxReplicas = config.maxReplicas;
    this._minReplicas = config.minReplicas;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._podCidr = config.podCidr;
    this._private = config.private;
    this._privateHostedZone.internalValue = config.privateHostedZone;
    this._properties = config.properties;
    this._proxy.internalValue = config.proxy;
    this._replicas = config.replicas;
    this._serviceCidr = config.serviceCidr;
    this._sts.internalValue = config.sts;
    this._tags = config.tags;
    this._upgradeAcknowledgementsFor = config.upgradeAcknowledgementsFor;
    this._version = config.version;
    this._waitForCreateComplete = config.waitForCreateComplete;
    this._workerDiskSize = config.workerDiskSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_credentials - computed: true, optional: true, required: false
  private _adminCredentials = new ClusterRosaClassicAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }
  public putAdminCredentials(value: ClusterRosaClassicAdminCredentials) {
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

  // autoscaling_enabled - computed: false, optional: true, required: false
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  public resetAutoscalingEnabled() {
    this._autoscalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
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

  // aws_additional_control_plane_security_group_ids - computed: false, optional: true, required: false
  private _awsAdditionalControlPlaneSecurityGroupIds?: string[]; 
  public get awsAdditionalControlPlaneSecurityGroupIds() {
    return this.getListAttribute('aws_additional_control_plane_security_group_ids');
  }
  public set awsAdditionalControlPlaneSecurityGroupIds(value: string[]) {
    this._awsAdditionalControlPlaneSecurityGroupIds = value;
  }
  public resetAwsAdditionalControlPlaneSecurityGroupIds() {
    this._awsAdditionalControlPlaneSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAdditionalControlPlaneSecurityGroupIdsInput() {
    return this._awsAdditionalControlPlaneSecurityGroupIds;
  }

  // aws_additional_infra_security_group_ids - computed: false, optional: true, required: false
  private _awsAdditionalInfraSecurityGroupIds?: string[]; 
  public get awsAdditionalInfraSecurityGroupIds() {
    return this.getListAttribute('aws_additional_infra_security_group_ids');
  }
  public set awsAdditionalInfraSecurityGroupIds(value: string[]) {
    this._awsAdditionalInfraSecurityGroupIds = value;
  }
  public resetAwsAdditionalInfraSecurityGroupIds() {
    this._awsAdditionalInfraSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAdditionalInfraSecurityGroupIdsInput() {
    return this._awsAdditionalInfraSecurityGroupIds;
  }

  // aws_private_link - computed: true, optional: true, required: false
  private _awsPrivateLink?: boolean | cdktf.IResolvable; 
  public get awsPrivateLink() {
    return this.getBooleanAttribute('aws_private_link');
  }
  public set awsPrivateLink(value: boolean | cdktf.IResolvable) {
    this._awsPrivateLink = value;
  }
  public resetAwsPrivateLink() {
    this._awsPrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInput() {
    return this._awsPrivateLink;
  }

  // aws_subnet_ids - computed: false, optional: true, required: false
  private _awsSubnetIds?: string[]; 
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }
  public set awsSubnetIds(value: string[]) {
    this._awsSubnetIds = value;
  }
  public resetAwsSubnetIds() {
    this._awsSubnetIds = undefined;
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

  // ccs_enabled - computed: true, optional: false, required: false
  public get ccsEnabled() {
    return this.getBooleanAttribute('ccs_enabled');
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

  // default_mp_labels - computed: false, optional: true, required: false
  private _defaultMpLabels?: { [key: string]: string }; 
  public get defaultMpLabels() {
    return this.getStringMapAttribute('default_mp_labels');
  }
  public set defaultMpLabels(value: { [key: string]: string }) {
    this._defaultMpLabels = value;
  }
  public resetDefaultMpLabels() {
    this._defaultMpLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMpLabelsInput() {
    return this._defaultMpLabels;
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

  // disable_scp_checks - computed: false, optional: true, required: false
  private _disableScpChecks?: boolean | cdktf.IResolvable; 
  public get disableScpChecks() {
    return this.getBooleanAttribute('disable_scp_checks');
  }
  public set disableScpChecks(value: boolean | cdktf.IResolvable) {
    this._disableScpChecks = value;
  }
  public resetDisableScpChecks() {
    this._disableScpChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScpChecksInput() {
    return this._disableScpChecks;
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

  // disable_workload_monitoring - computed: false, optional: true, required: false
  private _disableWorkloadMonitoring?: boolean | cdktf.IResolvable; 
  public get disableWorkloadMonitoring() {
    return this.getBooleanAttribute('disable_workload_monitoring');
  }
  public set disableWorkloadMonitoring(value: boolean | cdktf.IResolvable) {
    this._disableWorkloadMonitoring = value;
  }
  public resetDisableWorkloadMonitoring() {
    this._disableWorkloadMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWorkloadMonitoringInput() {
    return this._disableWorkloadMonitoring;
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

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // fips - computed: false, optional: true, required: false
  private _fips?: boolean | cdktf.IResolvable; 
  public get fips() {
    return this.getBooleanAttribute('fips');
  }
  public set fips(value: boolean | cdktf.IResolvable) {
    this._fips = value;
  }
  public resetFips() {
    this._fips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsInput() {
    return this._fips;
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

  // infra_id - computed: true, optional: false, required: false
  public get infraId() {
    return this.getStringAttribute('infra_id');
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

  // max_cluster_wait_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxClusterWaitTimeoutInMinutes?: number; 
  public get maxClusterWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_cluster_wait_timeout_in_minutes');
  }
  public set maxClusterWaitTimeoutInMinutes(value: number) {
    this._maxClusterWaitTimeoutInMinutes = value;
  }
  public resetMaxClusterWaitTimeoutInMinutes() {
    this._maxClusterWaitTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClusterWaitTimeoutInMinutesInput() {
    return this._maxClusterWaitTimeoutInMinutes;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
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

  // private_hosted_zone - computed: false, optional: true, required: false
  private _privateHostedZone = new ClusterRosaClassicPrivateHostedZoneOutputReference(this, "private_hosted_zone");
  public get privateHostedZone() {
    return this._privateHostedZone;
  }
  public putPrivateHostedZone(value: ClusterRosaClassicPrivateHostedZone) {
    this._privateHostedZone.internalValue = value;
  }
  public resetPrivateHostedZone() {
    this._privateHostedZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateHostedZoneInput() {
    return this._privateHostedZone.internalValue;
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
  private _proxy = new ClusterRosaClassicProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ClusterRosaClassicProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sts - computed: false, optional: true, required: false
  private _sts = new ClusterRosaClassicStsOutputReference(this, "sts");
  public get sts() {
    return this._sts;
  }
  public putSts(value: ClusterRosaClassicSts) {
    this._sts.internalValue = value;
  }
  public resetSts() {
    this._sts.internalValue = undefined;
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
      admin_credentials: clusterRosaClassicAdminCredentialsToTerraform(this._adminCredentials.internalValue),
      autoscaling_enabled: cdktf.booleanToTerraform(this._autoscalingEnabled),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_additional_compute_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalComputeSecurityGroupIds),
      aws_additional_control_plane_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalControlPlaneSecurityGroupIds),
      aws_additional_infra_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalInfraSecurityGroupIds),
      aws_private_link: cdktf.booleanToTerraform(this._awsPrivateLink),
      aws_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSubnetIds),
      base_dns_domain: cdktf.stringToTerraform(this._baseDnsDomain),
      channel_group: cdktf.stringToTerraform(this._channelGroup),
      cloud_region: cdktf.stringToTerraform(this._cloudRegion),
      compute_machine_type: cdktf.stringToTerraform(this._computeMachineType),
      create_admin_user: cdktf.booleanToTerraform(this._createAdminUser),
      default_mp_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultMpLabels),
      destroy_timeout: cdktf.numberToTerraform(this._destroyTimeout),
      disable_scp_checks: cdktf.booleanToTerraform(this._disableScpChecks),
      disable_waiting_in_destroy: cdktf.booleanToTerraform(this._disableWaitingInDestroy),
      disable_workload_monitoring: cdktf.booleanToTerraform(this._disableWorkloadMonitoring),
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      ec2_metadata_http_tokens: cdktf.stringToTerraform(this._ec2MetadataHttpTokens),
      etcd_encryption: cdktf.booleanToTerraform(this._etcdEncryption),
      fips: cdktf.booleanToTerraform(this._fips),
      host_prefix: cdktf.numberToTerraform(this._hostPrefix),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      machine_cidr: cdktf.stringToTerraform(this._machineCidr),
      max_cluster_wait_timeout_in_minutes: cdktf.numberToTerraform(this._maxClusterWaitTimeoutInMinutes),
      max_replicas: cdktf.numberToTerraform(this._maxReplicas),
      min_replicas: cdktf.numberToTerraform(this._minReplicas),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      private: cdktf.booleanToTerraform(this._private),
      private_hosted_zone: clusterRosaClassicPrivateHostedZoneToTerraform(this._privateHostedZone.internalValue),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      proxy: clusterRosaClassicProxyToTerraform(this._proxy.internalValue),
      replicas: cdktf.numberToTerraform(this._replicas),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      sts: clusterRosaClassicStsToTerraform(this._sts.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_acknowledgements_for: cdktf.stringToTerraform(this._upgradeAcknowledgementsFor),
      version: cdktf.stringToTerraform(this._version),
      wait_for_create_complete: cdktf.booleanToTerraform(this._waitForCreateComplete),
      worker_disk_size: cdktf.numberToTerraform(this._workerDiskSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_credentials: {
        value: clusterRosaClassicAdminCredentialsToHclTerraform(this._adminCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaClassicAdminCredentials",
      },
      autoscaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoscalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      aws_additional_compute_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalComputeSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_additional_control_plane_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalControlPlaneSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_additional_infra_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsAdditionalInfraSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_private_link: {
        value: cdktf.booleanToHclTerraform(this._awsPrivateLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      default_mp_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultMpLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destroy_timeout: {
        value: cdktf.numberToHclTerraform(this._destroyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_scp_checks: {
        value: cdktf.booleanToHclTerraform(this._disableScpChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_waiting_in_destroy: {
        value: cdktf.booleanToHclTerraform(this._disableWaitingInDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_workload_monitoring: {
        value: cdktf.booleanToHclTerraform(this._disableWorkloadMonitoring),
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
      fips: {
        value: cdktf.booleanToHclTerraform(this._fips),
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
      max_cluster_wait_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._maxClusterWaitTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_replicas: {
        value: cdktf.numberToHclTerraform(this._maxReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replicas: {
        value: cdktf.numberToHclTerraform(this._minReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      private_hosted_zone: {
        value: clusterRosaClassicPrivateHostedZoneToHclTerraform(this._privateHostedZone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaClassicPrivateHostedZone",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      proxy: {
        value: clusterRosaClassicProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaClassicProxy",
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
      sts: {
        value: clusterRosaClassicStsToHclTerraform(this._sts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterRosaClassicSts",
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
