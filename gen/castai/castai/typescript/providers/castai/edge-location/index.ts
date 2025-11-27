// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS configuration for the edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#aws EdgeLocation#aws}
  */
  readonly aws?: EdgeLocationAws;
  /**
  * CAST AI cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#cluster_id EdgeLocation#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Description of the edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#description EdgeLocation#description}
  */
  readonly description?: string;
  /**
  * GCP configuration for the edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#gcp EdgeLocation#gcp}
  */
  readonly gcp?: EdgeLocationGcp;
  /**
  * Name of the edge location. Must be unique and relatively short as it's used for creating service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#name EdgeLocation#name}
  */
  readonly name: string;
  /**
  * OCI configuration for the edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#oci EdgeLocation#oci}
  */
  readonly oci?: EdgeLocationOci;
  /**
  * CAST AI organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#organization_id EdgeLocation#organization_id}
  */
  readonly organizationId: string;
  /**
  * The region where the edge location is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#region EdgeLocation#region}
  */
  readonly region: string;
  /**
  * List of availability zones for the edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#zones EdgeLocation#zones}
  */
  readonly zones?: EdgeLocationZones[] | cdktf.IResolvable;
}
export interface EdgeLocationAws {
  /**
  * AWS access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#access_key_id_wo EdgeLocation#access_key_id_wo}
  */
  readonly accessKeyIdWo: string;
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#account_id EdgeLocation#account_id}
  */
  readonly accountId: string;
  /**
  * The value of a 'Name' tag applied to VPC resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#name_tag EdgeLocation#name_tag}
  */
  readonly nameTag: string;
  /**
  * AWS secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#secret_access_key_wo EdgeLocation#secret_access_key_wo}
  */
  readonly secretAccessKeyWo: string;
  /**
  * Security group ID to be used in the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#security_group_id EdgeLocation#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Map of zone names to subnet IDs to be used in the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#subnet_ids EdgeLocation#subnet_ids}
  */
  readonly subnetIds: { [key: string]: string };
  /**
  * VPC ID to be used in the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#vpc_id EdgeLocation#vpc_id}
  */
  readonly vpcId: string;
}

export function edgeLocationAwsToTerraform(struct?: EdgeLocationAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_wo: cdktf.stringToTerraform(struct!.accessKeyIdWo),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    name_tag: cdktf.stringToTerraform(struct!.nameTag),
    secret_access_key_wo: cdktf.stringToTerraform(struct!.secretAccessKeyWo),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    subnet_ids: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function edgeLocationAwsToHclTerraform(struct?: EdgeLocationAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_wo: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyIdWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_tag: {
      value: cdktf.stringToHclTerraform(struct!.nameTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_wo: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKeyWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subnetIds),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class EdgeLocationAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgeLocationAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdWo = this._accessKeyIdWo;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._nameTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTag = this._nameTag;
    }
    if (this._secretAccessKeyWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeyWo = this._secretAccessKeyWo;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdWo = undefined;
      this._accountId = undefined;
      this._nameTag = undefined;
      this._secretAccessKeyWo = undefined;
      this._securityGroupId = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdWo = value.accessKeyIdWo;
      this._accountId = value.accountId;
      this._nameTag = value.nameTag;
      this._secretAccessKeyWo = value.secretAccessKeyWo;
      this._securityGroupId = value.securityGroupId;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // access_key_id_wo - computed: false, optional: false, required: true
  private _accessKeyIdWo?: string; 
  public get accessKeyIdWo() {
    return this.getStringAttribute('access_key_id_wo');
  }
  public set accessKeyIdWo(value: string) {
    this._accessKeyIdWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdWoInput() {
    return this._accessKeyIdWo;
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // name_tag - computed: false, optional: false, required: true
  private _nameTag?: string; 
  public get nameTag() {
    return this.getStringAttribute('name_tag');
  }
  public set nameTag(value: string) {
    this._nameTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTagInput() {
    return this._nameTag;
  }

  // secret_access_key_wo - computed: false, optional: false, required: true
  private _secretAccessKeyWo?: string; 
  public get secretAccessKeyWo() {
    return this.getStringAttribute('secret_access_key_wo');
  }
  public set secretAccessKeyWo(value: string) {
    this._secretAccessKeyWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyWoInput() {
    return this._secretAccessKeyWo;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: { [key: string]: string }; 
  public get subnetIds() {
    return this.getStringMapAttribute('subnet_ids');
  }
  public set subnetIds(value: { [key: string]: string }) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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
export interface EdgeLocationGcp {
  /**
  * Base64 encoded service account JSON for provisioning edge resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#client_service_account_json_base64_wo EdgeLocation#client_service_account_json_base64_wo}
  */
  readonly clientServiceAccountJsonBase64Wo: string;
  /**
  * The name of the network to be used in the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#network_name EdgeLocation#network_name}
  */
  readonly networkName: string;
  /**
  * Tags applied on the provisioned cloud resources and the firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#network_tags EdgeLocation#network_tags}
  */
  readonly networkTags: string[];
  /**
  * GCP project ID where edges run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#project_id EdgeLocation#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the subnetwork to be used in the selected region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#subnet_name EdgeLocation#subnet_name}
  */
  readonly subnetName: string;
}

export function edgeLocationGcpToTerraform(struct?: EdgeLocationGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_service_account_json_base64_wo: cdktf.stringToTerraform(struct!.clientServiceAccountJsonBase64Wo),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}


export function edgeLocationGcpToHclTerraform(struct?: EdgeLocationGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_service_account_json_base64_wo: {
      value: cdktf.stringToHclTerraform(struct!.clientServiceAccountJsonBase64Wo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeLocationGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgeLocationGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientServiceAccountJsonBase64Wo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientServiceAccountJsonBase64Wo = this._clientServiceAccountJsonBase64Wo;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientServiceAccountJsonBase64Wo = undefined;
      this._networkName = undefined;
      this._networkTags = undefined;
      this._projectId = undefined;
      this._subnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientServiceAccountJsonBase64Wo = value.clientServiceAccountJsonBase64Wo;
      this._networkName = value.networkName;
      this._networkTags = value.networkTags;
      this._projectId = value.projectId;
      this._subnetName = value.subnetName;
    }
  }

  // client_service_account_json_base64_wo - computed: false, optional: false, required: true
  private _clientServiceAccountJsonBase64Wo?: string; 
  public get clientServiceAccountJsonBase64Wo() {
    return this.getStringAttribute('client_service_account_json_base64_wo');
  }
  public set clientServiceAccountJsonBase64Wo(value: string) {
    this._clientServiceAccountJsonBase64Wo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientServiceAccountJsonBase64WoInput() {
    return this._clientServiceAccountJsonBase64Wo;
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

  // network_tags - computed: false, optional: false, required: true
  private _networkTags?: string[]; 
  public get networkTags() {
    return cdktf.Fn.tolist(this.getListAttribute('network_tags'));
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
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

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }
}
export interface EdgeLocationOci {
  /**
  * OCI compartment ID of edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#compartment_id EdgeLocation#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * API key fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#fingerprint_wo EdgeLocation#fingerprint_wo}
  */
  readonly fingerprintWo: string;
  /**
  * Base64 encoded API private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#private_key_base64_wo EdgeLocation#private_key_base64_wo}
  */
  readonly privateKeyBase64Wo: string;
  /**
  * OCI subnet ID of edge location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#subnet_id EdgeLocation#subnet_id}
  */
  readonly subnetId: string;
  /**
  * OCI tenancy ID of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#tenancy_id EdgeLocation#tenancy_id}
  */
  readonly tenancyId: string;
  /**
  * User ID used to authenticate OCI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#user_id_wo EdgeLocation#user_id_wo}
  */
  readonly userIdWo: string;
  /**
  * OCI virtual cloud network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#vcn_id EdgeLocation#vcn_id}
  */
  readonly vcnId: string;
}

export function edgeLocationOciToTerraform(struct?: EdgeLocationOci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    fingerprint_wo: cdktf.stringToTerraform(struct!.fingerprintWo),
    private_key_base64_wo: cdktf.stringToTerraform(struct!.privateKeyBase64Wo),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tenancy_id: cdktf.stringToTerraform(struct!.tenancyId),
    user_id_wo: cdktf.stringToTerraform(struct!.userIdWo),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
  }
}


export function edgeLocationOciToHclTerraform(struct?: EdgeLocationOci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint_wo: {
      value: cdktf.stringToHclTerraform(struct!.fingerprintWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_base64_wo: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyBase64Wo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktf.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_wo: {
      value: cdktf.stringToHclTerraform(struct!.userIdWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeLocationOciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgeLocationOci | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._fingerprintWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintWo = this._fingerprintWo;
    }
    if (this._privateKeyBase64Wo !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyBase64Wo = this._privateKeyBase64Wo;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    if (this._userIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdWo = this._userIdWo;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationOci | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._fingerprintWo = undefined;
      this._privateKeyBase64Wo = undefined;
      this._subnetId = undefined;
      this._tenancyId = undefined;
      this._userIdWo = undefined;
      this._vcnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._fingerprintWo = value.fingerprintWo;
      this._privateKeyBase64Wo = value.privateKeyBase64Wo;
      this._subnetId = value.subnetId;
      this._tenancyId = value.tenancyId;
      this._userIdWo = value.userIdWo;
      this._vcnId = value.vcnId;
    }
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // fingerprint_wo - computed: false, optional: false, required: true
  private _fingerprintWo?: string; 
  public get fingerprintWo() {
    return this.getStringAttribute('fingerprint_wo');
  }
  public set fingerprintWo(value: string) {
    this._fingerprintWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintWoInput() {
    return this._fingerprintWo;
  }

  // private_key_base64_wo - computed: false, optional: false, required: true
  private _privateKeyBase64Wo?: string; 
  public get privateKeyBase64Wo() {
    return this.getStringAttribute('private_key_base64_wo');
  }
  public set privateKeyBase64Wo(value: string) {
    this._privateKeyBase64Wo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyBase64WoInput() {
    return this._privateKeyBase64Wo;
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

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // user_id_wo - computed: false, optional: false, required: true
  private _userIdWo?: string; 
  public get userIdWo() {
    return this.getStringAttribute('user_id_wo');
  }
  public set userIdWo(value: string) {
    this._userIdWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdWoInput() {
    return this._userIdWo;
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }
}
export interface EdgeLocationZones {
  /**
  * The ID of the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#id EdgeLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#name EdgeLocation#name}
  */
  readonly name: string;
}

export function edgeLocationZonesToTerraform(struct?: EdgeLocationZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function edgeLocationZonesToHclTerraform(struct?: EdgeLocationZones | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeLocationZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeLocationZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeLocationZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
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
}

export class EdgeLocationZonesList extends cdktf.ComplexList {
  public internalValue? : EdgeLocationZones[] | cdktf.IResolvable

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
  public get(index: number): EdgeLocationZonesOutputReference {
    return new EdgeLocationZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location castai_edge_location}
*/
export class EdgeLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_edge_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeLocation to import
  * @param importFromId The id of the existing EdgeLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_edge_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/edge_location castai_edge_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeLocationConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_edge_location',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aws.internalValue = config.aws;
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._gcp.internalValue = config.gcp;
    this._name = config.name;
    this._oci.internalValue = config.oci;
    this._organizationId = config.organizationId;
    this._region = config.region;
    this._zones.internalValue = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: false, optional: true, required: false
  private _aws = new EdgeLocationAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: EdgeLocationAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // credentials_revision - computed: true, optional: false, required: false
  public get credentialsRevision() {
    return this.getNumberAttribute('credentials_revision');
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

  // gcp - computed: false, optional: true, required: false
  private _gcp = new EdgeLocationGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: EdgeLocationGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oci - computed: false, optional: true, required: false
  private _oci = new EdgeLocationOciOutputReference(this, "oci");
  public get oci() {
    return this._oci;
  }
  public putOci(value: EdgeLocationOci) {
    this._oci.internalValue = value;
  }
  public resetOci() {
    this._oci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociInput() {
    return this._oci.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // zones - computed: false, optional: true, required: false
  private _zones = new EdgeLocationZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: EdgeLocationZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws: edgeLocationAwsToTerraform(this._aws.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      gcp: edgeLocationGcpToTerraform(this._gcp.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oci: edgeLocationOciToTerraform(this._oci.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      region: cdktf.stringToTerraform(this._region),
      zones: cdktf.listMapper(edgeLocationZonesToTerraform, false)(this._zones.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws: {
        value: edgeLocationAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgeLocationAws",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      gcp: {
        value: edgeLocationGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgeLocationGcp",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci: {
        value: edgeLocationOciToHclTerraform(this._oci.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgeLocationOci",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      zones: {
        value: cdktf.listMapperHcl(edgeLocationZonesToHclTerraform, false)(this._zones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeLocationZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
