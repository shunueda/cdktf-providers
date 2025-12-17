// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCloudClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#cloud_account_id AwsCloudCluster#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * AWS region to deploy the cluster in. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#region AwsCloudCluster#region}
  */
  readonly region: string;
  /**
  * Whether to use placement groups for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#use_placement_groups AwsCloudCluster#use_placement_groups}
  */
  readonly usePlacementGroups?: boolean | cdktf.IResolvable;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#cluster_config AwsCloudCluster#cluster_config}
  */
  readonly clusterConfig: AwsCloudClusterClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#timeouts AwsCloudCluster#timeouts}
  */
  readonly timeouts?: AwsCloudClusterTimeouts;
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#vm_config AwsCloudCluster#vm_config}
  */
  readonly vmConfig: AwsCloudClusterVmConfig;
}
export interface AwsCloudClusterClusterConfig {
  /**
  * Email address for the cluster admin user. Changing this value will have no effect on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#admin_email AwsCloudCluster#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Password for the cluster admin user. Changing this value will have no effect on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#admin_password AwsCloudCluster#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Name of the S3 bucket to use for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#bucket_name AwsCloudCluster#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Unique name to assign to the cloud cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#cluster_name AwsCloudCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * DNS name servers for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#dns_name_servers AwsCloudCluster#dns_name_servers}
  */
  readonly dnsNameServers: string[];
  /**
  * DNS search domains for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#dns_search_domains AwsCloudCluster#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * Whether to enable immutability and object lock for the S3 bucket. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#enable_immutability AwsCloudCluster#enable_immutability}
  */
  readonly enableImmutability: boolean | cdktf.IResolvable;
  /**
  * Whether to keep the cluster on failure (can be useful for troubleshooting). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#keep_cluster_on_failure AwsCloudCluster#keep_cluster_on_failure}
  */
  readonly keepClusterOnFailure: boolean | cdktf.IResolvable;
  /**
  * NTP servers for the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#ntp_servers AwsCloudCluster#ntp_servers}
  */
  readonly ntpServers: string[];
  /**
  * Number of nodes in the cluster. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#num_nodes AwsCloudCluster#num_nodes}
  */
  readonly numNodes: number;
}

export function awsCloudClusterClusterConfigToTerraform(struct?: AwsCloudClusterClusterConfigOutputReference | AwsCloudClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    dns_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNameServers),
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearchDomains),
    enable_immutability: cdktf.booleanToTerraform(struct!.enableImmutability),
    keep_cluster_on_failure: cdktf.booleanToTerraform(struct!.keepClusterOnFailure),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
    num_nodes: cdktf.numberToTerraform(struct!.numNodes),
  }
}


export function awsCloudClusterClusterConfigToHclTerraform(struct?: AwsCloudClusterClusterConfigOutputReference | AwsCloudClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNameServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dns_search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearchDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_immutability: {
      value: cdktf.booleanToHclTerraform(struct!.enableImmutability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_cluster_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.keepClusterOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    num_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCloudClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsCloudClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._dnsNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNameServers = this._dnsNameServers;
    }
    if (this._dnsSearchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
    }
    if (this._enableImmutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmutability = this._enableImmutability;
    }
    if (this._keepClusterOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepClusterOnFailure = this._keepClusterOnFailure;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    if (this._numNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNodes = this._numNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCloudClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._adminPassword = undefined;
      this._bucketName = undefined;
      this._clusterName = undefined;
      this._dnsNameServers = undefined;
      this._dnsSearchDomains = undefined;
      this._enableImmutability = undefined;
      this._keepClusterOnFailure = undefined;
      this._ntpServers = undefined;
      this._numNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._adminPassword = value.adminPassword;
      this._bucketName = value.bucketName;
      this._clusterName = value.clusterName;
      this._dnsNameServers = value.dnsNameServers;
      this._dnsSearchDomains = value.dnsSearchDomains;
      this._enableImmutability = value.enableImmutability;
      this._keepClusterOnFailure = value.keepClusterOnFailure;
      this._ntpServers = value.ntpServers;
      this._numNodes = value.numNodes;
    }
  }

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // dns_name_servers - computed: false, optional: false, required: true
  private _dnsNameServers?: string[]; 
  public get dnsNameServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_name_servers'));
  }
  public set dnsNameServers(value: string[]) {
    this._dnsNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // dns_search_domains - computed: false, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_search_domains'));
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // enable_immutability - computed: false, optional: false, required: true
  private _enableImmutability?: boolean | cdktf.IResolvable; 
  public get enableImmutability() {
    return this.getBooleanAttribute('enable_immutability');
  }
  public set enableImmutability(value: boolean | cdktf.IResolvable) {
    this._enableImmutability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmutabilityInput() {
    return this._enableImmutability;
  }

  // keep_cluster_on_failure - computed: false, optional: false, required: true
  private _keepClusterOnFailure?: boolean | cdktf.IResolvable; 
  public get keepClusterOnFailure() {
    return this.getBooleanAttribute('keep_cluster_on_failure');
  }
  public set keepClusterOnFailure(value: boolean | cdktf.IResolvable) {
    this._keepClusterOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepClusterOnFailureInput() {
    return this._keepClusterOnFailure;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ntp_servers'));
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // num_nodes - computed: false, optional: false, required: true
  private _numNodes?: number; 
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodesInput() {
    return this._numNodes;
  }
}
export interface AwsCloudClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#create AwsCloudCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#default AwsCloudCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#read AwsCloudCluster#read}
  */
  readonly read?: string;
}

export function awsCloudClusterTimeoutsToTerraform(struct?: AwsCloudClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function awsCloudClusterTimeoutsToHclTerraform(struct?: AwsCloudClusterTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCloudClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsCloudClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCloudClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
}
export interface AwsCloudClusterVmConfig {
  /**
  * CDM version to use. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#cdm_version AwsCloudCluster#cdm_version}
  */
  readonly cdmVersion: string;
  /**
  * AWS instance profile name for the cluster nodes. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#instance_profile_name AwsCloudCluster#instance_profile_name}
  */
  readonly instanceProfileName: string;
  /**
  * AWS instance type for the cluster nodes. Changing this forces a new resource to be created. Supported values are `M5_4XLARGE`, `M6I_2XLARGE`, `M6I_4XLARGE`, `M6I_8XLARGE`, `R6I_4XLARGE`, `M6A_2XLARGE`, `M6A_4XLARGE`, `M6A_8XLARGE` and `R6A_4XLARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#instance_type AwsCloudCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * AWS security group IDs for the cluster nodes. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#security_group_ids AwsCloudCluster#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * AWS subnet ID where the cluster nodes will be deployed. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#subnet_id AwsCloudCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VM type for the cluster. Changing this forces a new resource to be created. Possible values are `STANDARD`, `DENSE` and `EXTRA_DENSE`. `DENSE` is recommended for CCES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#vm_type AwsCloudCluster#vm_type}
  */
  readonly vmType?: string;
  /**
  * AWS VPC ID where the cluster will be deployed. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#vpc_id AwsCloudCluster#vpc_id}
  */
  readonly vpcId: string;
}

export function awsCloudClusterVmConfigToTerraform(struct?: AwsCloudClusterVmConfigOutputReference | AwsCloudClusterVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdm_version: cdktf.stringToTerraform(struct!.cdmVersion),
    instance_profile_name: cdktf.stringToTerraform(struct!.instanceProfileName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function awsCloudClusterVmConfigToHclTerraform(struct?: AwsCloudClusterVmConfigOutputReference | AwsCloudClusterVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdm_version: {
      value: cdktf.stringToHclTerraform(struct!.cdmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCloudClusterVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsCloudClusterVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdmVersion = this._cdmVersion;
    }
    if (this._instanceProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileName = this._instanceProfileName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCloudClusterVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdmVersion = undefined;
      this._instanceProfileName = undefined;
      this._instanceType = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._vmType = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdmVersion = value.cdmVersion;
      this._instanceProfileName = value.instanceProfileName;
      this._instanceType = value.instanceType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._vmType = value.vmType;
      this._vpcId = value.vpcId;
    }
  }

  // cdm_product - computed: true, optional: false, required: false
  public get cdmProduct() {
    return this.getStringAttribute('cdm_product');
  }

  // cdm_version - computed: false, optional: false, required: true
  private _cdmVersion?: string; 
  public get cdmVersion() {
    return this.getStringAttribute('cdm_version');
  }
  public set cdmVersion(value: string) {
    this._cdmVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmVersionInput() {
    return this._cdmVersion;
  }

  // instance_profile_name - computed: false, optional: false, required: true
  private _instanceProfileName?: string; 
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileNameInput() {
    return this._instanceProfileName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster polaris_aws_cloud_cluster}
*/
export class AwsCloudCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_cloud_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCloudCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCloudCluster to import
  * @param importFromId The id of the existing AwsCloudCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCloudCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_cloud_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_cloud_cluster polaris_aws_cloud_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCloudClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCloudClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_cloud_cluster',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountId = config.cloudAccountId;
    this._region = config.region;
    this._usePlacementGroups = config.usePlacementGroups;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vmConfig.internalValue = config.vmConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // use_placement_groups - computed: false, optional: true, required: false
  private _usePlacementGroups?: boolean | cdktf.IResolvable; 
  public get usePlacementGroups() {
    return this.getBooleanAttribute('use_placement_groups');
  }
  public set usePlacementGroups(value: boolean | cdktf.IResolvable) {
    this._usePlacementGroups = value;
  }
  public resetUsePlacementGroups() {
    this._usePlacementGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePlacementGroupsInput() {
    return this._usePlacementGroups;
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new AwsCloudClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: AwsCloudClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsCloudClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsCloudClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vm_config - computed: false, optional: false, required: true
  private _vmConfig = new AwsCloudClusterVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: AwsCloudClusterVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      region: cdktf.stringToTerraform(this._region),
      use_placement_groups: cdktf.booleanToTerraform(this._usePlacementGroups),
      cluster_config: awsCloudClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: awsCloudClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vm_config: awsCloudClusterVmConfigToTerraform(this._vmConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
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
      use_placement_groups: {
        value: cdktf.booleanToHclTerraform(this._usePlacementGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_config: {
        value: awsCloudClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudClusterClusterConfigList",
      },
      timeouts: {
        value: awsCloudClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsCloudClusterTimeouts",
      },
      vm_config: {
        value: awsCloudClusterVmConfigToHclTerraform(this._vmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCloudClusterVmConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
