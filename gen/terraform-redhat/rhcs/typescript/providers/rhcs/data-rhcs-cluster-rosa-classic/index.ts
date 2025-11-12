// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsClusterRosaClassicConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain prefix is optionally assigned by the user.It will appear in the Cluster's domain when the cluster is provisionedIf not supplied, it will be auto generated.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic#domain_prefix DataRhcsClusterRosaClassic#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * Unique identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic#id DataRhcsClusterRosaClassic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Used to encrypt root volume of compute node pools. The key ARN is the Amazon Resource Name (ARN) of a AWS Key Management Service (KMS) Key. It is a unique, fully qualified identifier for the AWS KMS Key. A key ARN includes the AWS account, Region, and the key ID(optional). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic#kms_key_arn DataRhcsClusterRosaClassic#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export interface DataRhcsClusterRosaClassicAdminCredentials {
}

export function dataRhcsClusterRosaClassicAdminCredentialsToTerraform(struct?: DataRhcsClusterRosaClassicAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaClassicAdminCredentialsToHclTerraform(struct?: DataRhcsClusterRosaClassicAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaClassicAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaClassicAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaClassicAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataRhcsClusterRosaClassicPrivateHostedZone {
}

export function dataRhcsClusterRosaClassicPrivateHostedZoneToTerraform(struct?: DataRhcsClusterRosaClassicPrivateHostedZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaClassicPrivateHostedZoneToHclTerraform(struct?: DataRhcsClusterRosaClassicPrivateHostedZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaClassicPrivateHostedZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaClassicPrivateHostedZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaClassicPrivateHostedZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataRhcsClusterRosaClassicProxy {
}

export function dataRhcsClusterRosaClassicProxyToTerraform(struct?: DataRhcsClusterRosaClassicProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaClassicProxyToHclTerraform(struct?: DataRhcsClusterRosaClassicProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaClassicProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaClassicProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaClassicProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_trust_bundle - computed: true, optional: false, required: false
  public get additionalTrustBundle() {
    return this.getStringAttribute('additional_trust_bundle');
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
}
export interface DataRhcsClusterRosaClassicStsInstanceIamRoles {
}

export function dataRhcsClusterRosaClassicStsInstanceIamRolesToTerraform(struct?: DataRhcsClusterRosaClassicStsInstanceIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaClassicStsInstanceIamRolesToHclTerraform(struct?: DataRhcsClusterRosaClassicStsInstanceIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaClassicStsInstanceIamRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaClassicStsInstanceIamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaClassicStsInstanceIamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_role_arn - computed: true, optional: false, required: false
  public get masterRoleArn() {
    return this.getStringAttribute('master_role_arn');
  }

  // worker_role_arn - computed: true, optional: false, required: false
  public get workerRoleArn() {
    return this.getStringAttribute('worker_role_arn');
  }
}
export interface DataRhcsClusterRosaClassicSts {
}

export function dataRhcsClusterRosaClassicStsToTerraform(struct?: DataRhcsClusterRosaClassicSts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaClassicStsToHclTerraform(struct?: DataRhcsClusterRosaClassicSts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaClassicStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaClassicSts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaClassicSts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_iam_roles - computed: true, optional: false, required: false
  private _instanceIamRoles = new DataRhcsClusterRosaClassicStsInstanceIamRolesOutputReference(this, "instance_iam_roles");
  public get instanceIamRoles() {
    return this._instanceIamRoles;
  }

  // oidc_config_id - computed: true, optional: false, required: false
  public get oidcConfigId() {
    return this.getStringAttribute('oidc_config_id');
  }

  // oidc_endpoint_url - computed: true, optional: false, required: false
  public get oidcEndpointUrl() {
    return this.getStringAttribute('oidc_endpoint_url');
  }

  // operator_role_prefix - computed: true, optional: false, required: false
  public get operatorRolePrefix() {
    return this.getStringAttribute('operator_role_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // support_role_arn - computed: true, optional: false, required: false
  public get supportRoleArn() {
    return this.getStringAttribute('support_role_arn');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic rhcs_cluster_rosa_classic}
*/
export class DataRhcsClusterRosaClassic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster_rosa_classic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsClusterRosaClassic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsClusterRosaClassic to import
  * @param importFromId The id of the existing DataRhcsClusterRosaClassic that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsClusterRosaClassic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster_rosa_classic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_classic rhcs_cluster_rosa_classic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsClusterRosaClassicConfig
  */
  public constructor(scope: Construct, id: string, config: DataRhcsClusterRosaClassicConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster_rosa_classic',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainPrefix = config.domainPrefix;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_credentials - computed: true, optional: false, required: false
  private _adminCredentials = new DataRhcsClusterRosaClassicAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // autoscaling_enabled - computed: true, optional: false, required: false
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_additional_compute_security_group_ids - computed: true, optional: false, required: false
  public get awsAdditionalComputeSecurityGroupIds() {
    return this.getListAttribute('aws_additional_compute_security_group_ids');
  }

  // aws_additional_control_plane_security_group_ids - computed: true, optional: false, required: false
  public get awsAdditionalControlPlaneSecurityGroupIds() {
    return this.getListAttribute('aws_additional_control_plane_security_group_ids');
  }

  // aws_additional_infra_security_group_ids - computed: true, optional: false, required: false
  public get awsAdditionalInfraSecurityGroupIds() {
    return this.getListAttribute('aws_additional_infra_security_group_ids');
  }

  // aws_private_link - computed: true, optional: false, required: false
  public get awsPrivateLink() {
    return this.getBooleanAttribute('aws_private_link');
  }

  // aws_subnet_ids - computed: true, optional: false, required: false
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }

  // base_dns_domain - computed: true, optional: false, required: false
  public get baseDnsDomain() {
    return this.getStringAttribute('base_dns_domain');
  }

  // ccs_enabled - computed: true, optional: false, required: false
  public get ccsEnabled() {
    return this.getBooleanAttribute('ccs_enabled');
  }

  // channel_group - computed: true, optional: false, required: false
  public get channelGroup() {
    return this.getStringAttribute('channel_group');
  }

  // cloud_region - computed: true, optional: false, required: false
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }

  // compute_machine_type - computed: true, optional: false, required: false
  public get computeMachineType() {
    return this.getStringAttribute('compute_machine_type');
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // create_admin_user - computed: true, optional: false, required: false
  public get createAdminUser() {
    return this.getBooleanAttribute('create_admin_user');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // default_mp_labels - computed: true, optional: false, required: false
  private _defaultMpLabels = new cdktf.StringMap(this, "default_mp_labels");
  public get defaultMpLabels() {
    return this._defaultMpLabels;
  }

  // destroy_timeout - computed: true, optional: false, required: false
  public get destroyTimeout() {
    return this.getNumberAttribute('destroy_timeout');
  }

  // disable_scp_checks - computed: true, optional: false, required: false
  public get disableScpChecks() {
    return this.getBooleanAttribute('disable_scp_checks');
  }

  // disable_waiting_in_destroy - computed: true, optional: false, required: false
  public get disableWaitingInDestroy() {
    return this.getBooleanAttribute('disable_waiting_in_destroy');
  }

  // disable_workload_monitoring - computed: true, optional: false, required: false
  public get disableWorkloadMonitoring() {
    return this.getBooleanAttribute('disable_workload_monitoring');
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

  // ec2_metadata_http_tokens - computed: true, optional: false, required: false
  public get ec2MetadataHttpTokens() {
    return this.getStringAttribute('ec2_metadata_http_tokens');
  }

  // etcd_encryption - computed: true, optional: false, required: false
  public get etcdEncryption() {
    return this.getBooleanAttribute('etcd_encryption');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // fips - computed: true, optional: false, required: false
  public get fips() {
    return this.getBooleanAttribute('fips');
  }

  // host_prefix - computed: true, optional: false, required: false
  public get hostPrefix() {
    return this.getNumberAttribute('host_prefix');
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

  // machine_cidr - computed: true, optional: false, required: false
  public get machineCidr() {
    return this.getStringAttribute('machine_cidr');
  }

  // max_cluster_wait_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxClusterWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_cluster_wait_timeout_in_minutes');
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocm_properties - computed: true, optional: false, required: false
  private _ocmProperties = new cdktf.StringMap(this, "ocm_properties");
  public get ocmProperties() {
    return this._ocmProperties;
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // private_hosted_zone - computed: true, optional: false, required: false
  private _privateHostedZone = new DataRhcsClusterRosaClassicPrivateHostedZoneOutputReference(this, "private_hosted_zone");
  public get privateHostedZone() {
    return this._privateHostedZone;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataRhcsClusterRosaClassicProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sts - computed: true, optional: false, required: false
  private _sts = new DataRhcsClusterRosaClassicStsOutputReference(this, "sts");
  public get sts() {
    return this._sts;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // upgrade_acknowledgements_for - computed: true, optional: false, required: false
  public get upgradeAcknowledgementsFor() {
    return this.getStringAttribute('upgrade_acknowledgements_for');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // wait_for_create_complete - computed: true, optional: false, required: false
  public get waitForCreateComplete() {
    return this.getBooleanAttribute('wait_for_create_complete');
  }

  // worker_disk_size - computed: true, optional: false, required: false
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_prefix: {
        value: cdktf.stringToHclTerraform(this._domainPrefix),
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
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
