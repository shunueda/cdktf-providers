// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_blockchain_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBlockchainBlockchainPlatformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}
  */
  readonly blockchainPlatformId: string;
}
export interface DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {
}

export function dataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamToTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam | undefined) {
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

export class DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference {
    return new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformComponentDetailsOsns {
}

export function dataOciBlockchainBlockchainPlatformComponentDetailsOsnsToTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsOsns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformComponentDetailsOsnsToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsOsns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformComponentDetailsOsns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformComponentDetailsOsns | undefined) {
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
  private _ocpuAllocationParam = new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(this, "ocpu_allocation_param", false);
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

export class DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference {
    return new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {
}

export function dataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamToTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam | undefined) {
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

export class DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference {
    return new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformComponentDetailsPeers {
}

export function dataOciBlockchainBlockchainPlatformComponentDetailsPeersToTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformComponentDetailsPeersToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetailsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformComponentDetailsPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformComponentDetailsPeers | undefined) {
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
  private _ocpuAllocationParam = new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(this, "ocpu_allocation_param", false);
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

export class DataOciBlockchainBlockchainPlatformComponentDetailsPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference {
    return new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformComponentDetails {
}

export function dataOciBlockchainBlockchainPlatformComponentDetailsToTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformComponentDetailsToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformComponentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformComponentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformComponentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // osns - computed: true, optional: false, required: false
  private _osns = new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList(this, "osns", false);
  public get osns() {
    return this._osns;
  }

  // peers - computed: true, optional: false, required: false
  private _peers = new DataOciBlockchainBlockchainPlatformComponentDetailsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
}

export class DataOciBlockchainBlockchainPlatformComponentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference {
    return new DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo {
}

export function dataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoToTerraform(struct?: DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo | undefined) {
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

export class DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference {
    return new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBlockchainBlockchainPlatformReplicas {
}

export function dataOciBlockchainBlockchainPlatformReplicasToTerraform(struct?: DataOciBlockchainBlockchainPlatformReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainBlockchainPlatformReplicasToHclTerraform(struct?: DataOciBlockchainBlockchainPlatformReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainBlockchainPlatformReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainBlockchainPlatformReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainBlockchainPlatformReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_count - computed: true, optional: false, required: false
  public get caCount() {
    return this.getNumberAttribute('ca_count');
  }

  // console_count - computed: true, optional: false, required: false
  public get consoleCount() {
    return this.getNumberAttribute('console_count');
  }

  // proxy_count - computed: true, optional: false, required: false
  public get proxyCount() {
    return this.getNumberAttribute('proxy_count');
  }
}

export class DataOciBlockchainBlockchainPlatformReplicasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainBlockchainPlatformReplicasOutputReference {
    return new DataOciBlockchainBlockchainPlatformReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}
*/
export class DataOciBlockchainBlockchainPlatform extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_blockchain_blockchain_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBlockchainBlockchainPlatform to import
  * @param importFromId The id of the existing DataOciBlockchainBlockchainPlatform that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBlockchainBlockchainPlatform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_blockchain_blockchain_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_blockchain_platform oci_blockchain_blockchain_platform} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBlockchainBlockchainPlatformConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBlockchainBlockchainPlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_blockchain_platform',
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
    this._blockchainPlatformId = config.blockchainPlatformId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId?: string; 
  public get blockchainPlatformId() {
    return this.getStringAttribute('blockchain_platform_id');
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainPlatformIdInput() {
    return this._blockchainPlatformId;
  }

  // ca_cert_archive_text - computed: true, optional: false, required: false
  public get caCertArchiveText() {
    return this.getStringAttribute('ca_cert_archive_text');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_details - computed: true, optional: false, required: false
  private _componentDetails = new DataOciBlockchainBlockchainPlatformComponentDetailsList(this, "component_details", false);
  public get componentDetails() {
    return this._componentDetails;
  }

  // compute_shape - computed: true, optional: false, required: false
  public get computeShape() {
    return this.getStringAttribute('compute_shape');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // federated_user_id - computed: true, optional: false, required: false
  public get federatedUserId() {
    return this.getStringAttribute('federated_user_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host_ocpu_utilization_info - computed: true, optional: false, required: false
  private _hostOcpuUtilizationInfo = new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList(this, "host_ocpu_utilization_info", false);
  public get hostOcpuUtilizationInfo() {
    return this._hostOcpuUtilizationInfo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: false
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // is_byol - computed: true, optional: false, required: false
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }

  // is_multi_ad - computed: true, optional: false, required: false
  public get isMultiAd() {
    return this.getBooleanAttribute('is_multi_ad');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // load_balancer_shape - computed: true, optional: false, required: false
  public get loadBalancerShape() {
    return this.getStringAttribute('load_balancer_shape');
  }

  // platform_role - computed: true, optional: false, required: false
  public get platformRole() {
    return this.getStringAttribute('platform_role');
  }

  // platform_shape_type - computed: true, optional: false, required: false
  public get platformShapeType() {
    return this.getStringAttribute('platform_shape_type');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // replicas - computed: true, optional: false, required: false
  private _replicas = new DataOciBlockchainBlockchainPlatformReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
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

  // storage_size_in_tbs - computed: true, optional: false, required: false
  public get storageSizeInTbs() {
    return this.getNumberAttribute('storage_size_in_tbs');
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

  // total_ocpu_capacity - computed: true, optional: false, required: false
  public get totalOcpuCapacity() {
    return this.getNumberAttribute('total_ocpu_capacity');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blockchain_platform_id: cdktf.stringToTerraform(this._blockchainPlatformId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blockchain_platform_id: {
        value: cdktf.stringToHclTerraform(this._blockchainPlatformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
