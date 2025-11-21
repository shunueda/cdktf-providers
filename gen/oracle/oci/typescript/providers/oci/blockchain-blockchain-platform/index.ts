// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockchainBlockchainPlatformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}
  */
  readonly caCertArchiveText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}
  */
  readonly computeShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}
  */
  readonly federatedUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}
  */
  readonly idcsAccessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}
  */
  readonly isByol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}
  */
  readonly loadBalancerShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}
  */
  readonly platformRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}
  */
  readonly storageSizeInTbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}
  */
  readonly totalOcpuCapacity?: number;
  /**
  * replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}
  */
  readonly replicas?: BlockchainBlockchainPlatformReplicas;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}
  */
  readonly timeouts?: BlockchainBlockchainPlatformTimeouts;
}
export interface BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {
}

export function blockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamToTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamToHclTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocpu_allocation_number - computed: true, optional: false, required: false
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}

export class BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference {
    return new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformComponentDetailsOsns {
}

export function blockchainBlockchainPlatformComponentDetailsOsnsToTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsOsns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformComponentDetailsOsnsToHclTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsOsns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformComponentDetailsOsns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformComponentDetailsOsns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad - computed: true, optional: false, required: false
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: false
  private _ocpuAllocationParam = new BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(this, "ocpu_allocation_param", false);
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }

  // osn_key - computed: true, optional: false, required: false
  public get osnKey() {
    return this.getStringAttribute('osn_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class BlockchainBlockchainPlatformComponentDetailsOsnsList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference {
    return new BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {
}

export function blockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamToTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamToHclTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocpu_allocation_number - computed: true, optional: false, required: false
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}

export class BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference {
    return new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformComponentDetailsPeers {
}

export function blockchainBlockchainPlatformComponentDetailsPeersToTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformComponentDetailsPeersToHclTerraform(struct?: BlockchainBlockchainPlatformComponentDetailsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformComponentDetailsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformComponentDetailsPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformComponentDetailsPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad - computed: true, optional: false, required: false
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: false
  private _ocpuAllocationParam = new BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(this, "ocpu_allocation_param", false);
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }

  // peer_key - computed: true, optional: false, required: false
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class BlockchainBlockchainPlatformComponentDetailsPeersList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformComponentDetailsPeersOutputReference {
    return new BlockchainBlockchainPlatformComponentDetailsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformComponentDetails {
}

export function blockchainBlockchainPlatformComponentDetailsToTerraform(struct?: BlockchainBlockchainPlatformComponentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformComponentDetailsToHclTerraform(struct?: BlockchainBlockchainPlatformComponentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformComponentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformComponentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformComponentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // osns - computed: true, optional: false, required: false
  private _osns = new BlockchainBlockchainPlatformComponentDetailsOsnsList(this, "osns", false);
  public get osns() {
    return this._osns;
  }

  // peers - computed: true, optional: false, required: false
  private _peers = new BlockchainBlockchainPlatformComponentDetailsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
}

export class BlockchainBlockchainPlatformComponentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformComponentDetailsOutputReference {
    return new BlockchainBlockchainPlatformComponentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformHostOcpuUtilizationInfo {
}

export function blockchainBlockchainPlatformHostOcpuUtilizationInfoToTerraform(struct?: BlockchainBlockchainPlatformHostOcpuUtilizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainBlockchainPlatformHostOcpuUtilizationInfoToHclTerraform(struct?: BlockchainBlockchainPlatformHostOcpuUtilizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainBlockchainPlatformHostOcpuUtilizationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformHostOcpuUtilizationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ocpu_capacity_number - computed: true, optional: false, required: false
  public get ocpuCapacityNumber() {
    return this.getNumberAttribute('ocpu_capacity_number');
  }

  // ocpu_utilization_number - computed: true, optional: false, required: false
  public get ocpuUtilizationNumber() {
    return this.getNumberAttribute('ocpu_utilization_number');
  }
}

export class BlockchainBlockchainPlatformHostOcpuUtilizationInfoList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference {
    return new BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainBlockchainPlatformReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}
  */
  readonly caCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}
  */
  readonly consoleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}
  */
  readonly proxyCount?: number;
}

export function blockchainBlockchainPlatformReplicasToTerraform(struct?: BlockchainBlockchainPlatformReplicasOutputReference | BlockchainBlockchainPlatformReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_count: cdktf.numberToTerraform(struct!.caCount),
    console_count: cdktf.numberToTerraform(struct!.consoleCount),
    proxy_count: cdktf.numberToTerraform(struct!.proxyCount),
  }
}


export function blockchainBlockchainPlatformReplicasToHclTerraform(struct?: BlockchainBlockchainPlatformReplicasOutputReference | BlockchainBlockchainPlatformReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_count: {
      value: cdktf.numberToHclTerraform(struct!.caCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    console_count: {
      value: cdktf.numberToHclTerraform(struct!.consoleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_count: {
      value: cdktf.numberToHclTerraform(struct!.proxyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainBlockchainPlatformReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockchainBlockchainPlatformReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCount = this._caCount;
    }
    if (this._consoleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleCount = this._consoleCount;
    }
    if (this._proxyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCount = this._proxyCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainBlockchainPlatformReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCount = undefined;
      this._consoleCount = undefined;
      this._proxyCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCount = value.caCount;
      this._consoleCount = value.consoleCount;
      this._proxyCount = value.proxyCount;
    }
  }

  // ca_count - computed: true, optional: true, required: false
  private _caCount?: number; 
  public get caCount() {
    return this.getNumberAttribute('ca_count');
  }
  public set caCount(value: number) {
    this._caCount = value;
  }
  public resetCaCount() {
    this._caCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCountInput() {
    return this._caCount;
  }

  // console_count - computed: true, optional: true, required: false
  private _consoleCount?: number; 
  public get consoleCount() {
    return this.getNumberAttribute('console_count');
  }
  public set consoleCount(value: number) {
    this._consoleCount = value;
  }
  public resetConsoleCount() {
    this._consoleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleCountInput() {
    return this._consoleCount;
  }

  // proxy_count - computed: true, optional: true, required: false
  private _proxyCount?: number; 
  public get proxyCount() {
    return this.getNumberAttribute('proxy_count');
  }
  public set proxyCount(value: number) {
    this._proxyCount = value;
  }
  public resetProxyCount() {
    this._proxyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCountInput() {
    return this._proxyCount;
  }
}
export interface BlockchainBlockchainPlatformTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}
  */
  readonly update?: string;
}

export function blockchainBlockchainPlatformTimeoutsToTerraform(struct?: BlockchainBlockchainPlatformTimeouts | cdktf.IResolvable): any {
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


export function blockchainBlockchainPlatformTimeoutsToHclTerraform(struct?: BlockchainBlockchainPlatformTimeouts | cdktf.IResolvable): any {
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

export class BlockchainBlockchainPlatformTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockchainBlockchainPlatformTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlockchainBlockchainPlatformTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}
*/
export class BlockchainBlockchainPlatform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_blockchain_blockchain_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockchainBlockchainPlatform to import
  * @param importFromId The id of the existing BlockchainBlockchainPlatform that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_blockchain_blockchain_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockchainBlockchainPlatformConfig
  */
  public constructor(scope: Construct, id: string, config: BlockchainBlockchainPlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_blockchain_platform',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertArchiveText = config.caCertArchiveText;
    this._compartmentId = config.compartmentId;
    this._computeShape = config.computeShape;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._federatedUserId = config.federatedUserId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._idcsAccessToken = config.idcsAccessToken;
    this._isByol = config.isByol;
    this._loadBalancerShape = config.loadBalancerShape;
    this._platformRole = config.platformRole;
    this._platformVersion = config.platformVersion;
    this._storageSizeInTbs = config.storageSizeInTbs;
    this._totalOcpuCapacity = config.totalOcpuCapacity;
    this._replicas.internalValue = config.replicas;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert_archive_text - computed: true, optional: true, required: false
  private _caCertArchiveText?: string; 
  public get caCertArchiveText() {
    return this.getStringAttribute('ca_cert_archive_text');
  }
  public set caCertArchiveText(value: string) {
    this._caCertArchiveText = value;
  }
  public resetCaCertArchiveText() {
    this._caCertArchiveText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertArchiveTextInput() {
    return this._caCertArchiveText;
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

  // component_details - computed: true, optional: false, required: false
  private _componentDetails = new BlockchainBlockchainPlatformComponentDetailsList(this, "component_details", false);
  public get componentDetails() {
    return this._componentDetails;
  }

  // compute_shape - computed: false, optional: false, required: true
  private _computeShape?: string; 
  public get computeShape() {
    return this.getStringAttribute('compute_shape');
  }
  public set computeShape(value: string) {
    this._computeShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeShapeInput() {
    return this._computeShape;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // federated_user_id - computed: true, optional: true, required: false
  private _federatedUserId?: string; 
  public get federatedUserId() {
    return this.getStringAttribute('federated_user_id');
  }
  public set federatedUserId(value: string) {
    this._federatedUserId = value;
  }
  public resetFederatedUserId() {
    this._federatedUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedUserIdInput() {
    return this._federatedUserId;
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

  // host_ocpu_utilization_info - computed: true, optional: false, required: false
  private _hostOcpuUtilizationInfo = new BlockchainBlockchainPlatformHostOcpuUtilizationInfoList(this, "host_ocpu_utilization_info", false);
  public get hostOcpuUtilizationInfo() {
    return this._hostOcpuUtilizationInfo;
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

  // idcs_access_token - computed: false, optional: false, required: true
  private _idcsAccessToken?: string; 
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }
  public set idcsAccessToken(value: string) {
    this._idcsAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccessTokenInput() {
    return this._idcsAccessToken;
  }

  // is_byol - computed: true, optional: true, required: false
  private _isByol?: boolean | cdktf.IResolvable; 
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }
  public set isByol(value: boolean | cdktf.IResolvable) {
    this._isByol = value;
  }
  public resetIsByol() {
    this._isByol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isByolInput() {
    return this._isByol;
  }

  // is_multi_ad - computed: true, optional: false, required: false
  public get isMultiAd() {
    return this.getBooleanAttribute('is_multi_ad');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // load_balancer_shape - computed: true, optional: true, required: false
  private _loadBalancerShape?: string; 
  public get loadBalancerShape() {
    return this.getStringAttribute('load_balancer_shape');
  }
  public set loadBalancerShape(value: string) {
    this._loadBalancerShape = value;
  }
  public resetLoadBalancerShape() {
    this._loadBalancerShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerShapeInput() {
    return this._loadBalancerShape;
  }

  // platform_role - computed: false, optional: false, required: true
  private _platformRole?: string; 
  public get platformRole() {
    return this.getStringAttribute('platform_role');
  }
  public set platformRole(value: string) {
    this._platformRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformRoleInput() {
    return this._platformRole;
  }

  // platform_shape_type - computed: true, optional: false, required: false
  public get platformShapeType() {
    return this.getStringAttribute('platform_shape_type');
  }

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // service_endpoint - computed: true, optional: false, required: false
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_size_in_tbs - computed: true, optional: true, required: false
  private _storageSizeInTbs?: number; 
  public get storageSizeInTbs() {
    return this.getNumberAttribute('storage_size_in_tbs');
  }
  public set storageSizeInTbs(value: number) {
    this._storageSizeInTbs = value;
  }
  public resetStorageSizeInTbs() {
    this._storageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInTbsInput() {
    return this._storageSizeInTbs;
  }

  // storage_used_in_tbs - computed: true, optional: false, required: false
  public get storageUsedInTbs() {
    return this.getNumberAttribute('storage_used_in_tbs');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_ocpu_capacity - computed: true, optional: true, required: false
  private _totalOcpuCapacity?: number; 
  public get totalOcpuCapacity() {
    return this.getNumberAttribute('total_ocpu_capacity');
  }
  public set totalOcpuCapacity(value: number) {
    this._totalOcpuCapacity = value;
  }
  public resetTotalOcpuCapacity() {
    this._totalOcpuCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOcpuCapacityInput() {
    return this._totalOcpuCapacity;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new BlockchainBlockchainPlatformReplicasOutputReference(this, "replicas");
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: BlockchainBlockchainPlatformReplicas) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockchainBlockchainPlatformTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockchainBlockchainPlatformTimeouts) {
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
      ca_cert_archive_text: cdktf.stringToTerraform(this._caCertArchiveText),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_shape: cdktf.stringToTerraform(this._computeShape),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      federated_user_id: cdktf.stringToTerraform(this._federatedUserId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      idcs_access_token: cdktf.stringToTerraform(this._idcsAccessToken),
      is_byol: cdktf.booleanToTerraform(this._isByol),
      load_balancer_shape: cdktf.stringToTerraform(this._loadBalancerShape),
      platform_role: cdktf.stringToTerraform(this._platformRole),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      storage_size_in_tbs: cdktf.numberToTerraform(this._storageSizeInTbs),
      total_ocpu_capacity: cdktf.numberToTerraform(this._totalOcpuCapacity),
      replicas: blockchainBlockchainPlatformReplicasToTerraform(this._replicas.internalValue),
      timeouts: blockchainBlockchainPlatformTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert_archive_text: {
        value: cdktf.stringToHclTerraform(this._caCertArchiveText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_shape: {
        value: cdktf.stringToHclTerraform(this._computeShape),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_user_id: {
        value: cdktf.stringToHclTerraform(this._federatedUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      idcs_access_token: {
        value: cdktf.stringToHclTerraform(this._idcsAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_byol: {
        value: cdktf.booleanToHclTerraform(this._isByol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancer_shape: {
        value: cdktf.stringToHclTerraform(this._loadBalancerShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_role: {
        value: cdktf.stringToHclTerraform(this._platformRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_version: {
        value: cdktf.stringToHclTerraform(this._platformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size_in_tbs: {
        value: cdktf.numberToHclTerraform(this._storageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_ocpu_capacity: {
        value: cdktf.numberToHclTerraform(this._totalOcpuCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicas: {
        value: blockchainBlockchainPlatformReplicasToHclTerraform(this._replicas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlockchainBlockchainPlatformReplicasList",
      },
      timeouts: {
        value: blockchainBlockchainPlatformTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockchainBlockchainPlatformTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
