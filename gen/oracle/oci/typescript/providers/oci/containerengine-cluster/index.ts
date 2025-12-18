// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerengineClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}
  */
  readonly vcnId: string;
  /**
  * cluster_pod_network_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#cluster_pod_network_options ContainerengineCluster#cluster_pod_network_options}
  */
  readonly clusterPodNetworkOptions?: ContainerengineClusterClusterPodNetworkOptions[] | cdktf.IResolvable;
  /**
  * endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#endpoint_config ContainerengineCluster#endpoint_config}
  */
  readonly endpointConfig?: ContainerengineClusterEndpointConfig;
  /**
  * image_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#image_policy_config ContainerengineCluster#image_policy_config}
  */
  readonly imagePolicyConfig?: ContainerengineClusterImagePolicyConfig;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#options ContainerengineCluster#options}
  */
  readonly options?: ContainerengineClusterOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#timeouts ContainerengineCluster#timeouts}
  */
  readonly timeouts?: ContainerengineClusterTimeouts;
}
export interface ContainerengineClusterEndpoints {
}

export function containerengineClusterEndpointsToTerraform(struct?: ContainerengineClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerengineClusterEndpointsToHclTerraform(struct?: ContainerengineClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerengineClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6endpoint - computed: true, optional: false, required: false
  public get ipv6Endpoint() {
    return this.getStringAttribute('ipv6endpoint');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // vcn_hostname_endpoint - computed: true, optional: false, required: false
  public get vcnHostnameEndpoint() {
    return this.getStringAttribute('vcn_hostname_endpoint');
  }
}

export class ContainerengineClusterEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): ContainerengineClusterEndpointsOutputReference {
    return new ContainerengineClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineClusterMetadata {
}

export function containerengineClusterMetadataToTerraform(struct?: ContainerengineClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerengineClusterMetadataToHclTerraform(struct?: ContainerengineClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerengineClusterMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineClusterMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by_user_id - computed: true, optional: false, required: false
  public get createdByUserId() {
    return this.getStringAttribute('created_by_user_id');
  }

  // created_by_work_request_id - computed: true, optional: false, required: false
  public get createdByWorkRequestId() {
    return this.getStringAttribute('created_by_work_request_id');
  }

  // deleted_by_user_id - computed: true, optional: false, required: false
  public get deletedByUserId() {
    return this.getStringAttribute('deleted_by_user_id');
  }

  // deleted_by_work_request_id - computed: true, optional: false, required: false
  public get deletedByWorkRequestId() {
    return this.getStringAttribute('deleted_by_work_request_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_credential_expiration - computed: true, optional: false, required: false
  public get timeCredentialExpiration() {
    return this.getStringAttribute('time_credential_expiration');
  }

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by_user_id - computed: true, optional: false, required: false
  public get updatedByUserId() {
    return this.getStringAttribute('updated_by_user_id');
  }

  // updated_by_work_request_id - computed: true, optional: false, required: false
  public get updatedByWorkRequestId() {
    return this.getStringAttribute('updated_by_work_request_id');
  }
}

export class ContainerengineClusterMetadataList extends cdktf.ComplexList {

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
  public get(index: number): ContainerengineClusterMetadataOutputReference {
    return new ContainerengineClusterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineClusterClusterPodNetworkOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}
  */
  readonly cniType: string;
}

export function containerengineClusterClusterPodNetworkOptionsToTerraform(struct?: ContainerengineClusterClusterPodNetworkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni_type: cdktf.stringToTerraform(struct!.cniType),
  }
}


export function containerengineClusterClusterPodNetworkOptionsToHclTerraform(struct?: ContainerengineClusterClusterPodNetworkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni_type: {
      value: cdktf.stringToHclTerraform(struct!.cniType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterClusterPodNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineClusterClusterPodNetworkOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cniType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniType = this._cniType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterClusterPodNetworkOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cniType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cniType = value.cniType;
    }
  }

  // cni_type - computed: false, optional: false, required: true
  private _cniType?: string; 
  public get cniType() {
    return this.getStringAttribute('cni_type');
  }
  public set cniType(value: string) {
    this._cniType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cniTypeInput() {
    return this._cniType;
  }
}

export class ContainerengineClusterClusterPodNetworkOptionsList extends cdktf.ComplexList {
  public internalValue? : ContainerengineClusterClusterPodNetworkOptions[] | cdktf.IResolvable

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
  public get(index: number): ContainerengineClusterClusterPodNetworkOptionsOutputReference {
    return new ContainerengineClusterClusterPodNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineClusterEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}
  */
  readonly isPublicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}
  */
  readonly subnetId: string;
}

export function containerengineClusterEndpointConfigToTerraform(struct?: ContainerengineClusterEndpointConfigOutputReference | ContainerengineClusterEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public_ip_enabled: cdktf.booleanToTerraform(struct!.isPublicIpEnabled),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function containerengineClusterEndpointConfigToHclTerraform(struct?: ContainerengineClusterEndpointConfigOutputReference | ContainerengineClusterEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPublicIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublicIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublicIpEnabled = this._isPublicIpEnabled;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPublicIpEnabled = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPublicIpEnabled = value.isPublicIpEnabled;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // is_public_ip_enabled - computed: true, optional: true, required: false
  private _isPublicIpEnabled?: boolean | cdktf.IResolvable; 
  public get isPublicIpEnabled() {
    return this.getBooleanAttribute('is_public_ip_enabled');
  }
  public set isPublicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._isPublicIpEnabled = value;
  }
  public resetIsPublicIpEnabled() {
    this._isPublicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicIpEnabledInput() {
    return this._isPublicIpEnabled;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
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
}
export interface ContainerengineClusterImagePolicyConfigKeyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function containerengineClusterImagePolicyConfigKeyDetailsToTerraform(struct?: ContainerengineClusterImagePolicyConfigKeyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function containerengineClusterImagePolicyConfigKeyDetailsToHclTerraform(struct?: ContainerengineClusterImagePolicyConfigKeyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineClusterImagePolicyConfigKeyDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterImagePolicyConfigKeyDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}

export class ContainerengineClusterImagePolicyConfigKeyDetailsList extends cdktf.ComplexList {
  public internalValue? : ContainerengineClusterImagePolicyConfigKeyDetails[] | cdktf.IResolvable

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
  public get(index: number): ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference {
    return new ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineClusterImagePolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}
  */
  readonly isPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * key_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#key_details ContainerengineCluster#key_details}
  */
  readonly keyDetails?: ContainerengineClusterImagePolicyConfigKeyDetails[] | cdktf.IResolvable;
}

export function containerengineClusterImagePolicyConfigToTerraform(struct?: ContainerengineClusterImagePolicyConfigOutputReference | ContainerengineClusterImagePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_policy_enabled: cdktf.booleanToTerraform(struct!.isPolicyEnabled),
    key_details: cdktf.listMapper(containerengineClusterImagePolicyConfigKeyDetailsToTerraform, true)(struct!.keyDetails),
  }
}


export function containerengineClusterImagePolicyConfigToHclTerraform(struct?: ContainerengineClusterImagePolicyConfigOutputReference | ContainerengineClusterImagePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_details: {
      value: cdktf.listMapperHcl(containerengineClusterImagePolicyConfigKeyDetailsToHclTerraform, true)(struct!.keyDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterImagePolicyConfigKeyDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterImagePolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterImagePolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPolicyEnabled = this._isPolicyEnabled;
    }
    if (this._keyDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyDetails = this._keyDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterImagePolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPolicyEnabled = undefined;
      this._keyDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPolicyEnabled = value.isPolicyEnabled;
      this._keyDetails.internalValue = value.keyDetails;
    }
  }

  // is_policy_enabled - computed: true, optional: true, required: false
  private _isPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get isPolicyEnabled() {
    return this.getBooleanAttribute('is_policy_enabled');
  }
  public set isPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._isPolicyEnabled = value;
  }
  public resetIsPolicyEnabled() {
    this._isPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPolicyEnabledInput() {
    return this._isPolicyEnabled;
  }

  // key_details - computed: false, optional: true, required: false
  private _keyDetails = new ContainerengineClusterImagePolicyConfigKeyDetailsList(this, "key_details", false);
  public get keyDetails() {
    return this._keyDetails;
  }
  public putKeyDetails(value: ContainerengineClusterImagePolicyConfigKeyDetails[] | cdktf.IResolvable) {
    this._keyDetails.internalValue = value;
  }
  public resetKeyDetails() {
    this._keyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDetailsInput() {
    return this._keyDetails.internalValue;
  }
}
export interface ContainerengineClusterOptionsAddOns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}
  */
  readonly isKubernetesDashboardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}
  */
  readonly isTillerEnabled?: boolean | cdktf.IResolvable;
}

export function containerengineClusterOptionsAddOnsToTerraform(struct?: ContainerengineClusterOptionsAddOnsOutputReference | ContainerengineClusterOptionsAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_kubernetes_dashboard_enabled: cdktf.booleanToTerraform(struct!.isKubernetesDashboardEnabled),
    is_tiller_enabled: cdktf.booleanToTerraform(struct!.isTillerEnabled),
  }
}


export function containerengineClusterOptionsAddOnsToHclTerraform(struct?: ContainerengineClusterOptionsAddOnsOutputReference | ContainerengineClusterOptionsAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_kubernetes_dashboard_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isKubernetesDashboardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_tiller_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isTillerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsAddOnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsAddOns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isKubernetesDashboardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKubernetesDashboardEnabled = this._isKubernetesDashboardEnabled;
    }
    if (this._isTillerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTillerEnabled = this._isTillerEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsAddOns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isKubernetesDashboardEnabled = undefined;
      this._isTillerEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isKubernetesDashboardEnabled = value.isKubernetesDashboardEnabled;
      this._isTillerEnabled = value.isTillerEnabled;
    }
  }

  // is_kubernetes_dashboard_enabled - computed: true, optional: true, required: false
  private _isKubernetesDashboardEnabled?: boolean | cdktf.IResolvable; 
  public get isKubernetesDashboardEnabled() {
    return this.getBooleanAttribute('is_kubernetes_dashboard_enabled');
  }
  public set isKubernetesDashboardEnabled(value: boolean | cdktf.IResolvable) {
    this._isKubernetesDashboardEnabled = value;
  }
  public resetIsKubernetesDashboardEnabled() {
    this._isKubernetesDashboardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKubernetesDashboardEnabledInput() {
    return this._isKubernetesDashboardEnabled;
  }

  // is_tiller_enabled - computed: true, optional: true, required: false
  private _isTillerEnabled?: boolean | cdktf.IResolvable; 
  public get isTillerEnabled() {
    return this.getBooleanAttribute('is_tiller_enabled');
  }
  public set isTillerEnabled(value: boolean | cdktf.IResolvable) {
    this._isTillerEnabled = value;
  }
  public resetIsTillerEnabled() {
    this._isTillerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTillerEnabledInput() {
    return this._isTillerEnabled;
  }
}
export interface ContainerengineClusterOptionsAdmissionControllerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}
  */
  readonly isPodSecurityPolicyEnabled?: boolean | cdktf.IResolvable;
}

export function containerengineClusterOptionsAdmissionControllerOptionsToTerraform(struct?: ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference | ContainerengineClusterOptionsAdmissionControllerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_pod_security_policy_enabled: cdktf.booleanToTerraform(struct!.isPodSecurityPolicyEnabled),
  }
}


export function containerengineClusterOptionsAdmissionControllerOptionsToHclTerraform(struct?: ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference | ContainerengineClusterOptionsAdmissionControllerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_pod_security_policy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPodSecurityPolicyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsAdmissionControllerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPodSecurityPolicyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPodSecurityPolicyEnabled = this._isPodSecurityPolicyEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsAdmissionControllerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPodSecurityPolicyEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPodSecurityPolicyEnabled = value.isPodSecurityPolicyEnabled;
    }
  }

  // is_pod_security_policy_enabled - computed: true, optional: true, required: false
  private _isPodSecurityPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get isPodSecurityPolicyEnabled() {
    return this.getBooleanAttribute('is_pod_security_policy_enabled');
  }
  public set isPodSecurityPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._isPodSecurityPolicyEnabled = value;
  }
  public resetIsPodSecurityPolicyEnabled() {
    this._isPodSecurityPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPodSecurityPolicyEnabledInput() {
    return this._isPodSecurityPolicyEnabled;
  }
}
export interface ContainerengineClusterOptionsKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}
  */
  readonly podsCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}
  */
  readonly servicesCidr?: string;
}

export function containerengineClusterOptionsKubernetesNetworkConfigToTerraform(struct?: ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference | ContainerengineClusterOptionsKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pods_cidr: cdktf.stringToTerraform(struct!.podsCidr),
    services_cidr: cdktf.stringToTerraform(struct!.servicesCidr),
  }
}


export function containerengineClusterOptionsKubernetesNetworkConfigToHclTerraform(struct?: ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference | ContainerengineClusterOptionsKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pods_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podsCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_cidr: {
      value: cdktf.stringToHclTerraform(struct!.servicesCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsKubernetesNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podsCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podsCidr = this._podsCidr;
    }
    if (this._servicesCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesCidr = this._servicesCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsKubernetesNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podsCidr = undefined;
      this._servicesCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podsCidr = value.podsCidr;
      this._servicesCidr = value.servicesCidr;
    }
  }

  // pods_cidr - computed: true, optional: true, required: false
  private _podsCidr?: string; 
  public get podsCidr() {
    return this.getStringAttribute('pods_cidr');
  }
  public set podsCidr(value: string) {
    this._podsCidr = value;
  }
  public resetPodsCidr() {
    this._podsCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsCidrInput() {
    return this._podsCidr;
  }

  // services_cidr - computed: true, optional: true, required: false
  private _servicesCidr?: string; 
  public get servicesCidr() {
    return this.getStringAttribute('services_cidr');
  }
  public set servicesCidr(value: string) {
    this._servicesCidr = value;
  }
  public resetServicesCidr() {
    this._servicesCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesCidrInput() {
    return this._servicesCidr;
  }
}
export interface ContainerengineClusterOptionsOpenIdConnectDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}
  */
  readonly isOpenIdConnectDiscoveryEnabled?: boolean | cdktf.IResolvable;
}

export function containerengineClusterOptionsOpenIdConnectDiscoveryToTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference | ContainerengineClusterOptionsOpenIdConnectDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_open_id_connect_discovery_enabled: cdktf.booleanToTerraform(struct!.isOpenIdConnectDiscoveryEnabled),
  }
}


export function containerengineClusterOptionsOpenIdConnectDiscoveryToHclTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference | ContainerengineClusterOptionsOpenIdConnectDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_open_id_connect_discovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isOpenIdConnectDiscoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsOpenIdConnectDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOpenIdConnectDiscoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOpenIdConnectDiscoveryEnabled = this._isOpenIdConnectDiscoveryEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsOpenIdConnectDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isOpenIdConnectDiscoveryEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isOpenIdConnectDiscoveryEnabled = value.isOpenIdConnectDiscoveryEnabled;
    }
  }

  // is_open_id_connect_discovery_enabled - computed: true, optional: true, required: false
  private _isOpenIdConnectDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get isOpenIdConnectDiscoveryEnabled() {
    return this.getBooleanAttribute('is_open_id_connect_discovery_enabled');
  }
  public set isOpenIdConnectDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._isOpenIdConnectDiscoveryEnabled = value;
  }
  public resetIsOpenIdConnectDiscoveryEnabled() {
    this._isOpenIdConnectDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpenIdConnectDiscoveryEnabledInput() {
    return this._isOpenIdConnectDiscoveryEnabled;
  }
}
export interface ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}
  */
  readonly value?: string;
}

export function containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToHclTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList extends cdktf.ComplexList {
  public internalValue? : ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[] | cdktf.IResolvable

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
  public get(index: number): ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference {
    return new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#configuration_file ContainerengineCluster#configuration_file}
  */
  readonly configurationFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}
  */
  readonly isOpenIdConnectAuthEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}
  */
  readonly signingAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}
  */
  readonly usernamePrefix?: string;
  /**
  * required_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#required_claims ContainerengineCluster#required_claims}
  */
  readonly requiredClaims?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[] | cdktf.IResolvable;
}

export function containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    configuration_file: cdktf.stringToTerraform(struct!.configurationFile),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    is_open_id_connect_auth_enabled: cdktf.booleanToTerraform(struct!.isOpenIdConnectAuthEnabled),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    signing_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingAlgorithms),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
    required_claims: cdktf.listMapper(containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToTerraform, true)(struct!.requiredClaims),
  }
}


export function containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToHclTerraform(struct?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_file: {
      value: cdktf.stringToHclTerraform(struct!.configurationFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_open_id_connect_auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isOpenIdConnectAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signingAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_claims: {
      value: cdktf.listMapperHcl(containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsToHclTerraform, true)(struct!.requiredClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._configurationFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationFile = this._configurationFile;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._isOpenIdConnectAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOpenIdConnectAuthEnabled = this._isOpenIdConnectAuthEnabled;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._signingAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgorithms = this._signingAlgorithms;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    if (this._requiredClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaims = this._requiredClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientId = undefined;
      this._configurationFile = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._isOpenIdConnectAuthEnabled = undefined;
      this._issuerUrl = undefined;
      this._signingAlgorithms = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
      this._requiredClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientId = value.clientId;
      this._configurationFile = value.configurationFile;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._isOpenIdConnectAuthEnabled = value.isOpenIdConnectAuthEnabled;
      this._issuerUrl = value.issuerUrl;
      this._signingAlgorithms = value.signingAlgorithms;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
      this._requiredClaims.internalValue = value.requiredClaims;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // configuration_file - computed: false, optional: true, required: false
  private _configurationFile?: string; 
  public get configurationFile() {
    return this.getStringAttribute('configuration_file');
  }
  public set configurationFile(value: string) {
    this._configurationFile = value;
  }
  public resetConfigurationFile() {
    this._configurationFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFileInput() {
    return this._configurationFile;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // is_open_id_connect_auth_enabled - computed: false, optional: false, required: true
  private _isOpenIdConnectAuthEnabled?: boolean | cdktf.IResolvable; 
  public get isOpenIdConnectAuthEnabled() {
    return this.getBooleanAttribute('is_open_id_connect_auth_enabled');
  }
  public set isOpenIdConnectAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._isOpenIdConnectAuthEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpenIdConnectAuthEnabledInput() {
    return this._isOpenIdConnectAuthEnabled;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // signing_algorithms - computed: false, optional: true, required: false
  private _signingAlgorithms?: string[]; 
  public get signingAlgorithms() {
    return this.getListAttribute('signing_algorithms');
  }
  public set signingAlgorithms(value: string[]) {
    this._signingAlgorithms = value;
  }
  public resetSigningAlgorithms() {
    this._signingAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmsInput() {
    return this._signingAlgorithms;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }

  // required_claims - computed: false, optional: true, required: false
  private _requiredClaims = new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(this, "required_claims", false);
  public get requiredClaims() {
    return this._requiredClaims;
  }
  public putRequiredClaims(value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[] | cdktf.IResolvable) {
    this._requiredClaims.internalValue = value;
  }
  public resetRequiredClaims() {
    this._requiredClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimsInput() {
    return this._requiredClaims.internalValue;
  }
}
export interface ContainerengineClusterOptionsPersistentVolumeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
}

export function containerengineClusterOptionsPersistentVolumeConfigToTerraform(struct?: ContainerengineClusterOptionsPersistentVolumeConfigOutputReference | ContainerengineClusterOptionsPersistentVolumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
  }
}


export function containerengineClusterOptionsPersistentVolumeConfigToHclTerraform(struct?: ContainerengineClusterOptionsPersistentVolumeConfigOutputReference | ContainerengineClusterOptionsPersistentVolumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsPersistentVolumeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsPersistentVolumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsPersistentVolumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._freeformTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }
}
export interface ContainerengineClusterOptionsServiceLbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#backend_nsg_ids ContainerengineCluster#backend_nsg_ids}
  */
  readonly backendNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
}

export function containerengineClusterOptionsServiceLbConfigToTerraform(struct?: ContainerengineClusterOptionsServiceLbConfigOutputReference | ContainerengineClusterOptionsServiceLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendNsgIds),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
  }
}


export function containerengineClusterOptionsServiceLbConfigToHclTerraform(struct?: ContainerengineClusterOptionsServiceLbConfigOutputReference | ContainerengineClusterOptionsServiceLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendNsgIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsServiceLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptionsServiceLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendNsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendNsgIds = this._backendNsgIds;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptionsServiceLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendNsgIds = undefined;
      this._definedTags = undefined;
      this._freeformTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendNsgIds = value.backendNsgIds;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
    }
  }

  // backend_nsg_ids - computed: true, optional: true, required: false
  private _backendNsgIds?: string[]; 
  public get backendNsgIds() {
    return this.getListAttribute('backend_nsg_ids');
  }
  public set backendNsgIds(value: string[]) {
    this._backendNsgIds = value;
  }
  public resetBackendNsgIds() {
    this._backendNsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNsgIdsInput() {
    return this._backendNsgIds;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }
}
export interface ContainerengineClusterOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#ip_families ContainerengineCluster#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}
  */
  readonly serviceLbSubnetIds?: string[];
  /**
  * add_ons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#add_ons ContainerengineCluster#add_ons}
  */
  readonly addOns?: ContainerengineClusterOptionsAddOns;
  /**
  * admission_controller_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#admission_controller_options ContainerengineCluster#admission_controller_options}
  */
  readonly admissionControllerOptions?: ContainerengineClusterOptionsAdmissionControllerOptions;
  /**
  * kubernetes_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#kubernetes_network_config ContainerengineCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: ContainerengineClusterOptionsKubernetesNetworkConfig;
  /**
  * open_id_connect_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#open_id_connect_discovery ContainerengineCluster#open_id_connect_discovery}
  */
  readonly openIdConnectDiscovery?: ContainerengineClusterOptionsOpenIdConnectDiscovery;
  /**
  * open_id_connect_token_authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#open_id_connect_token_authentication_config ContainerengineCluster#open_id_connect_token_authentication_config}
  */
  readonly openIdConnectTokenAuthenticationConfig?: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig;
  /**
  * persistent_volume_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#persistent_volume_config ContainerengineCluster#persistent_volume_config}
  */
  readonly persistentVolumeConfig?: ContainerengineClusterOptionsPersistentVolumeConfig;
  /**
  * service_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#service_lb_config ContainerengineCluster#service_lb_config}
  */
  readonly serviceLbConfig?: ContainerengineClusterOptionsServiceLbConfig;
}

export function containerengineClusterOptionsToTerraform(struct?: ContainerengineClusterOptionsOutputReference | ContainerengineClusterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    service_lb_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceLbSubnetIds),
    add_ons: containerengineClusterOptionsAddOnsToTerraform(struct!.addOns),
    admission_controller_options: containerengineClusterOptionsAdmissionControllerOptionsToTerraform(struct!.admissionControllerOptions),
    kubernetes_network_config: containerengineClusterOptionsKubernetesNetworkConfigToTerraform(struct!.kubernetesNetworkConfig),
    open_id_connect_discovery: containerengineClusterOptionsOpenIdConnectDiscoveryToTerraform(struct!.openIdConnectDiscovery),
    open_id_connect_token_authentication_config: containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToTerraform(struct!.openIdConnectTokenAuthenticationConfig),
    persistent_volume_config: containerengineClusterOptionsPersistentVolumeConfigToTerraform(struct!.persistentVolumeConfig),
    service_lb_config: containerengineClusterOptionsServiceLbConfigToTerraform(struct!.serviceLbConfig),
  }
}


export function containerengineClusterOptionsToHclTerraform(struct?: ContainerengineClusterOptionsOutputReference | ContainerengineClusterOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_lb_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceLbSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    add_ons: {
      value: containerengineClusterOptionsAddOnsToHclTerraform(struct!.addOns),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsAddOnsList",
    },
    admission_controller_options: {
      value: containerengineClusterOptionsAdmissionControllerOptionsToHclTerraform(struct!.admissionControllerOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsAdmissionControllerOptionsList",
    },
    kubernetes_network_config: {
      value: containerengineClusterOptionsKubernetesNetworkConfigToHclTerraform(struct!.kubernetesNetworkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsKubernetesNetworkConfigList",
    },
    open_id_connect_discovery: {
      value: containerengineClusterOptionsOpenIdConnectDiscoveryToHclTerraform(struct!.openIdConnectDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsOpenIdConnectDiscoveryList",
    },
    open_id_connect_token_authentication_config: {
      value: containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigToHclTerraform(struct!.openIdConnectTokenAuthenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigList",
    },
    persistent_volume_config: {
      value: containerengineClusterOptionsPersistentVolumeConfigToHclTerraform(struct!.persistentVolumeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsPersistentVolumeConfigList",
    },
    service_lb_config: {
      value: containerengineClusterOptionsServiceLbConfigToHclTerraform(struct!.serviceLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineClusterOptionsServiceLbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineClusterOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineClusterOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._serviceLbSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLbSubnetIds = this._serviceLbSubnetIds;
    }
    if (this._addOns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOns = this._addOns?.internalValue;
    }
    if (this._admissionControllerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionControllerOptions = this._admissionControllerOptions?.internalValue;
    }
    if (this._kubernetesNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNetworkConfig = this._kubernetesNetworkConfig?.internalValue;
    }
    if (this._openIdConnectDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectDiscovery = this._openIdConnectDiscovery?.internalValue;
    }
    if (this._openIdConnectTokenAuthenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectTokenAuthenticationConfig = this._openIdConnectTokenAuthenticationConfig?.internalValue;
    }
    if (this._persistentVolumeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeConfig = this._persistentVolumeConfig?.internalValue;
    }
    if (this._serviceLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLbConfig = this._serviceLbConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineClusterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipFamilies = undefined;
      this._serviceLbSubnetIds = undefined;
      this._addOns.internalValue = undefined;
      this._admissionControllerOptions.internalValue = undefined;
      this._kubernetesNetworkConfig.internalValue = undefined;
      this._openIdConnectDiscovery.internalValue = undefined;
      this._openIdConnectTokenAuthenticationConfig.internalValue = undefined;
      this._persistentVolumeConfig.internalValue = undefined;
      this._serviceLbConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipFamilies = value.ipFamilies;
      this._serviceLbSubnetIds = value.serviceLbSubnetIds;
      this._addOns.internalValue = value.addOns;
      this._admissionControllerOptions.internalValue = value.admissionControllerOptions;
      this._kubernetesNetworkConfig.internalValue = value.kubernetesNetworkConfig;
      this._openIdConnectDiscovery.internalValue = value.openIdConnectDiscovery;
      this._openIdConnectTokenAuthenticationConfig.internalValue = value.openIdConnectTokenAuthenticationConfig;
      this._persistentVolumeConfig.internalValue = value.persistentVolumeConfig;
      this._serviceLbConfig.internalValue = value.serviceLbConfig;
    }
  }

  // ip_families - computed: true, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // service_lb_subnet_ids - computed: true, optional: true, required: false
  private _serviceLbSubnetIds?: string[]; 
  public get serviceLbSubnetIds() {
    return this.getListAttribute('service_lb_subnet_ids');
  }
  public set serviceLbSubnetIds(value: string[]) {
    this._serviceLbSubnetIds = value;
  }
  public resetServiceLbSubnetIds() {
    this._serviceLbSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLbSubnetIdsInput() {
    return this._serviceLbSubnetIds;
  }

  // add_ons - computed: false, optional: true, required: false
  private _addOns = new ContainerengineClusterOptionsAddOnsOutputReference(this, "add_ons");
  public get addOns() {
    return this._addOns;
  }
  public putAddOns(value: ContainerengineClusterOptionsAddOns) {
    this._addOns.internalValue = value;
  }
  public resetAddOns() {
    this._addOns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnsInput() {
    return this._addOns.internalValue;
  }

  // admission_controller_options - computed: false, optional: true, required: false
  private _admissionControllerOptions = new ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(this, "admission_controller_options");
  public get admissionControllerOptions() {
    return this._admissionControllerOptions;
  }
  public putAdmissionControllerOptions(value: ContainerengineClusterOptionsAdmissionControllerOptions) {
    this._admissionControllerOptions.internalValue = value;
  }
  public resetAdmissionControllerOptions() {
    this._admissionControllerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionControllerOptionsInput() {
    return this._admissionControllerOptions.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config");
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: ContainerengineClusterOptionsKubernetesNetworkConfig) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // open_id_connect_discovery - computed: false, optional: true, required: false
  private _openIdConnectDiscovery = new ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(this, "open_id_connect_discovery");
  public get openIdConnectDiscovery() {
    return this._openIdConnectDiscovery;
  }
  public putOpenIdConnectDiscovery(value: ContainerengineClusterOptionsOpenIdConnectDiscovery) {
    this._openIdConnectDiscovery.internalValue = value;
  }
  public resetOpenIdConnectDiscovery() {
    this._openIdConnectDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectDiscoveryInput() {
    return this._openIdConnectDiscovery.internalValue;
  }

  // open_id_connect_token_authentication_config - computed: false, optional: true, required: false
  private _openIdConnectTokenAuthenticationConfig = new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(this, "open_id_connect_token_authentication_config");
  public get openIdConnectTokenAuthenticationConfig() {
    return this._openIdConnectTokenAuthenticationConfig;
  }
  public putOpenIdConnectTokenAuthenticationConfig(value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig) {
    this._openIdConnectTokenAuthenticationConfig.internalValue = value;
  }
  public resetOpenIdConnectTokenAuthenticationConfig() {
    this._openIdConnectTokenAuthenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectTokenAuthenticationConfigInput() {
    return this._openIdConnectTokenAuthenticationConfig.internalValue;
  }

  // persistent_volume_config - computed: false, optional: true, required: false
  private _persistentVolumeConfig = new ContainerengineClusterOptionsPersistentVolumeConfigOutputReference(this, "persistent_volume_config");
  public get persistentVolumeConfig() {
    return this._persistentVolumeConfig;
  }
  public putPersistentVolumeConfig(value: ContainerengineClusterOptionsPersistentVolumeConfig) {
    this._persistentVolumeConfig.internalValue = value;
  }
  public resetPersistentVolumeConfig() {
    this._persistentVolumeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeConfigInput() {
    return this._persistentVolumeConfig.internalValue;
  }

  // service_lb_config - computed: false, optional: true, required: false
  private _serviceLbConfig = new ContainerengineClusterOptionsServiceLbConfigOutputReference(this, "service_lb_config");
  public get serviceLbConfig() {
    return this._serviceLbConfig;
  }
  public putServiceLbConfig(value: ContainerengineClusterOptionsServiceLbConfig) {
    this._serviceLbConfig.internalValue = value;
  }
  public resetServiceLbConfig() {
    this._serviceLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLbConfigInput() {
    return this._serviceLbConfig.internalValue;
  }
}
export interface ContainerengineClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}
  */
  readonly update?: string;
}

export function containerengineClusterTimeoutsToTerraform(struct?: ContainerengineClusterTimeouts | cdktf.IResolvable): any {
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


export function containerengineClusterTimeoutsToHclTerraform(struct?: ContainerengineClusterTimeouts | cdktf.IResolvable): any {
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

export class ContainerengineClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerengineClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerengineClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster oci_containerengine_cluster}
*/
export class ContainerengineCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerengineCluster to import
  * @param importFromId The id of the existing ContainerengineCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerengineCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/containerengine_cluster oci_containerengine_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerengineClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerengineClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._kubernetesVersion = config.kubernetesVersion;
    this._name = config.name;
    this._type = config.type;
    this._vcnId = config.vcnId;
    this._clusterPodNetworkOptions.internalValue = config.clusterPodNetworkOptions;
    this._endpointConfig.internalValue = config.endpointConfig;
    this._imagePolicyConfig.internalValue = config.imagePolicyConfig;
    this._options.internalValue = config.options;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_kubernetes_upgrades - computed: true, optional: false, required: false
  public get availableKubernetesUpgrades() {
    return this.getListAttribute('available_kubernetes_upgrades');
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new ContainerengineClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new ContainerengineClusterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
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

  // open_id_connect_discovery_endpoint - computed: true, optional: false, required: false
  public get openIdConnectDiscoveryEndpoint() {
    return this.getStringAttribute('open_id_connect_discovery_endpoint');
  }

  // open_id_connect_discovery_key - computed: true, optional: false, required: false
  public get openIdConnectDiscoveryKey() {
    return this.getStringAttribute('open_id_connect_discovery_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // cluster_pod_network_options - computed: false, optional: true, required: false
  private _clusterPodNetworkOptions = new ContainerengineClusterClusterPodNetworkOptionsList(this, "cluster_pod_network_options", false);
  public get clusterPodNetworkOptions() {
    return this._clusterPodNetworkOptions;
  }
  public putClusterPodNetworkOptions(value: ContainerengineClusterClusterPodNetworkOptions[] | cdktf.IResolvable) {
    this._clusterPodNetworkOptions.internalValue = value;
  }
  public resetClusterPodNetworkOptions() {
    this._clusterPodNetworkOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPodNetworkOptionsInput() {
    return this._clusterPodNetworkOptions.internalValue;
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig = new ContainerengineClusterEndpointConfigOutputReference(this, "endpoint_config");
  public get endpointConfig() {
    return this._endpointConfig;
  }
  public putEndpointConfig(value: ContainerengineClusterEndpointConfig) {
    this._endpointConfig.internalValue = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig.internalValue;
  }

  // image_policy_config - computed: false, optional: true, required: false
  private _imagePolicyConfig = new ContainerengineClusterImagePolicyConfigOutputReference(this, "image_policy_config");
  public get imagePolicyConfig() {
    return this._imagePolicyConfig;
  }
  public putImagePolicyConfig(value: ContainerengineClusterImagePolicyConfig) {
    this._imagePolicyConfig.internalValue = value;
  }
  public resetImagePolicyConfig() {
    this._imagePolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePolicyConfigInput() {
    return this._imagePolicyConfig.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ContainerengineClusterOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ContainerengineClusterOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerengineClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerengineClusterTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      cluster_pod_network_options: cdktf.listMapper(containerengineClusterClusterPodNetworkOptionsToTerraform, true)(this._clusterPodNetworkOptions.internalValue),
      endpoint_config: containerengineClusterEndpointConfigToTerraform(this._endpointConfig.internalValue),
      image_policy_config: containerengineClusterImagePolicyConfigToTerraform(this._imagePolicyConfig.internalValue),
      options: containerengineClusterOptionsToTerraform(this._options.internalValue),
      timeouts: containerengineClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_pod_network_options: {
        value: cdktf.listMapperHcl(containerengineClusterClusterPodNetworkOptionsToHclTerraform, true)(this._clusterPodNetworkOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineClusterClusterPodNetworkOptionsList",
      },
      endpoint_config: {
        value: containerengineClusterEndpointConfigToHclTerraform(this._endpointConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineClusterEndpointConfigList",
      },
      image_policy_config: {
        value: containerengineClusterImagePolicyConfigToHclTerraform(this._imagePolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineClusterImagePolicyConfigList",
      },
      options: {
        value: containerengineClusterOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineClusterOptionsList",
      },
      timeouts: {
        value: containerengineClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerengineClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
