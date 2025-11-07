// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#availability_zones Cluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Identifier of the AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_access_key_id Cluster#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Identifier of the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_account_id Cluster#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * AWS additional compute security group ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_additional_compute_security_group_ids Cluster#aws_additional_compute_security_group_ids}
  */
  readonly awsAdditionalComputeSecurityGroupIds?: string[];
  /**
  * AWS additional control plane security group ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_additional_control_plane_security_group_ids Cluster#aws_additional_control_plane_security_group_ids}
  */
  readonly awsAdditionalControlPlaneSecurityGroupIds?: string[];
  /**
  * AWS additional infra security group ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_additional_infra_security_group_ids Cluster#aws_additional_infra_security_group_ids}
  */
  readonly awsAdditionalInfraSecurityGroupIds?: string[];
  /**
  * Provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_private_link Cluster#aws_private_link}
  */
  readonly awsPrivateLink?: boolean | cdktf.IResolvable;
  /**
  * AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_secret_access_key Cluster#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * AWS subnet IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#aws_subnet_ids Cluster#aws_subnet_ids}
  */
  readonly awsSubnetIds?: string[];
  /**
  * Enables customer cloud subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#ccs_enabled Cluster#ccs_enabled}
  */
  readonly ccsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Cloud provider identifier, for example 'aws'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Cloud region identifier, for example 'us-east-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#cloud_region Cluster#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Identifier of the machine type used by the compute nodes, for example `r5.xlarge`. Use the `ocm_machine_types` data source to find the possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#compute_machine_type Cluster#compute_machine_type}
  */
  readonly computeMachineType?: string;
  /**
  * Number of compute nodes of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#compute_nodes Cluster#compute_nodes}
  */
  readonly computeNodes?: number;
  /**
  * The domain prefix is optionally assigned by the user.It will appear in the Cluster's domain when the cluster is provisioned. If not supplied, it will be auto generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#domain_prefix Cluster#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * Length of the prefix of the subnet assigned to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#host_prefix Cluster#host_prefix}
  */
  readonly hostPrefix?: number;
  /**
  * Block of IP addresses for nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#machine_cidr Cluster#machine_cidr}
  */
  readonly machineCidr?: string;
  /**
  * Indicates if the cluster should be deployed to multiple availability zones. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#multi_az Cluster#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Block of IP addresses for pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#pod_cidr Cluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Product ID OSD or Rosa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#product Cluster#product}
  */
  readonly product: string;
  /**
  * User defined properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#properties Cluster#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#proxy Cluster#proxy}
  */
  readonly proxy?: ClusterProxy;
  /**
  * Block of IP addresses for services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#service_cidr Cluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Identifier of the version of OpenShift, for example 'openshift-v4.1.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: string;
  /**
  * Wait till the cluster is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#wait Cluster#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}
export interface ClusterProxy {
  /**
  * A string containing a PEM-encoded X.509 certificate bundle that will be added to the nodes' trusted certificate store. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#additional_trust_bundle Cluster#additional_trust_bundle}
  */
  readonly additionalTrustBundle?: string;
  /**
  * HTTP proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#http_proxy Cluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#https_proxy Cluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * No proxy. To reset please provide '' (empty string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#no_proxy Cluster#no_proxy}
  */
  readonly noProxy?: string;
}

export function clusterProxyToTerraform(struct?: ClusterProxy | cdktf.IResolvable): any {
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


export function clusterProxyToHclTerraform(struct?: ClusterProxy | cdktf.IResolvable): any {
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

export class ClusterProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterProxy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterProxy | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster rhcs_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster rhcs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster',
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
    this._availabilityZones = config.availabilityZones;
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsAccountId = config.awsAccountId;
    this._awsAdditionalComputeSecurityGroupIds = config.awsAdditionalComputeSecurityGroupIds;
    this._awsAdditionalControlPlaneSecurityGroupIds = config.awsAdditionalControlPlaneSecurityGroupIds;
    this._awsAdditionalInfraSecurityGroupIds = config.awsAdditionalInfraSecurityGroupIds;
    this._awsPrivateLink = config.awsPrivateLink;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._awsSubnetIds = config.awsSubnetIds;
    this._ccsEnabled = config.ccsEnabled;
    this._cloudProvider = config.cloudProvider;
    this._cloudRegion = config.cloudRegion;
    this._computeMachineType = config.computeMachineType;
    this._computeNodes = config.computeNodes;
    this._domainPrefix = config.domainPrefix;
    this._hostPrefix = config.hostPrefix;
    this._machineCidr = config.machineCidr;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._podCidr = config.podCidr;
    this._product = config.product;
    this._properties = config.properties;
    this._proxy.internalValue = config.proxy;
    this._serviceCidr = config.serviceCidr;
    this._version = config.version;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
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

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
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

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
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

  // ccs_enabled - computed: true, optional: true, required: false
  private _ccsEnabled?: boolean | cdktf.IResolvable; 
  public get ccsEnabled() {
    return this.getBooleanAttribute('ccs_enabled');
  }
  public set ccsEnabled(value: boolean | cdktf.IResolvable) {
    this._ccsEnabled = value;
  }
  public resetCcsEnabled() {
    this._ccsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccsEnabledInput() {
    return this._ccsEnabled;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // compute_machine_type - computed: true, optional: true, required: false
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

  // compute_nodes - computed: true, optional: true, required: false
  private _computeNodes?: number; 
  public get computeNodes() {
    return this.getNumberAttribute('compute_nodes');
  }
  public set computeNodes(value: number) {
    this._computeNodes = value;
  }
  public resetComputeNodes() {
    this._computeNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNodesInput() {
    return this._computeNodes;
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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
  private _proxy = new ClusterProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ClusterProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
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

  // version - computed: true, optional: true, required: false
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

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_additional_compute_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalComputeSecurityGroupIds),
      aws_additional_control_plane_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalControlPlaneSecurityGroupIds),
      aws_additional_infra_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsAdditionalInfraSecurityGroupIds),
      aws_private_link: cdktf.booleanToTerraform(this._awsPrivateLink),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      aws_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSubnetIds),
      ccs_enabled: cdktf.booleanToTerraform(this._ccsEnabled),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cloud_region: cdktf.stringToTerraform(this._cloudRegion),
      compute_machine_type: cdktf.stringToTerraform(this._computeMachineType),
      compute_nodes: cdktf.numberToTerraform(this._computeNodes),
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      host_prefix: cdktf.numberToTerraform(this._hostPrefix),
      machine_cidr: cdktf.stringToTerraform(this._machineCidr),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      product: cdktf.stringToTerraform(this._product),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      proxy: clusterProxyToTerraform(this._proxy.internalValue),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
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
      ccs_enabled: {
        value: cdktf.booleanToHclTerraform(this._ccsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
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
      compute_nodes: {
        value: cdktf.numberToHclTerraform(this._computeNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_prefix: {
        value: cdktf.stringToHclTerraform(this._domainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_prefix: {
        value: cdktf.numberToHclTerraform(this._hostPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      machine_cidr: {
        value: cdktf.stringToHclTerraform(this._machineCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      proxy: {
        value: clusterProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterProxy",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
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
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
