// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClustersUnconfiguredNodeNetworksV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#expand ClustersUnconfiguredNodeNetworksV2#expand}
  */
  readonly expand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ext_id ClustersUnconfiguredNodeNetworksV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#id ClustersUnconfiguredNodeNetworksV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#request_type ClustersUnconfiguredNodeNetworksV2#request_type}
  */
  readonly requestType?: string;
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#node_list ClustersUnconfiguredNodeNetworksV2#node_list}
  */
  readonly nodeList: ClustersUnconfiguredNodeNetworksV2NodeListStruct[] | cdktf.IResolvable;
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHci {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSo {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfo {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hci - computed: true, optional: false, required: false
  private _hci = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoHciList(this, "hci", false);
  public get hci() {
    return this._hci;
  }

  // so - computed: true, optional: false, required: false
  private _so = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoSoList(this, "so", false);
  public get so() {
    return this._so;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4 {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6 {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIp {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStruct {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinks {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cvm_ip - computed: true, optional: false, required: false
  private _cvmIp = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksCvmIpList(this, "cvm_ip", false);
  public get cvmIp() {
    return this._cvmIp;
  }

  // uplink_list - computed: true, optional: false, required: false
  private _uplinkList = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksUplinkListStructList(this, "uplink_list", false);
  public get uplinkList() {
    return this._uplinkList;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetails {
}

export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }

  // uplinks - computed: true, optional: false, required: false
  private _uplinks = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsUplinksList(this, "uplinks", false);
  public get uplinks() {
    return this._uplinks;
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getListAttribute('warnings');
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsList extends cdktf.ComplexList {

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListCvmIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv4 ClustersUnconfiguredNodeNetworksV2#ipv4}
  */
  readonly ipv4?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv6 ClustersUnconfiguredNodeNetworksV2#ipv6}
  */
  readonly ipv6?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6[] | cdktf.IResolvable;
}

export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListCvmIpToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListCvmIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListCvmIpList extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListCvmIp[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListCvmIpOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#key ClustersUnconfiguredNodeNetworksV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value?: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
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

export class ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructList extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv4 ClustersUnconfiguredNodeNetworksV2#ipv4}
  */
  readonly ipv4?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv6 ClustersUnconfiguredNodeNetworksV2#ipv6}
  */
  readonly ipv6?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6[] | cdktf.IResolvable;
}

export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpList extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#prefix_length ClustersUnconfiguredNodeNetworksV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#value ClustersUnconfiguredNodeNetworksV2#value}
  */
  readonly value: string;
}

export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6ToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6ToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6OutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv4 ClustersUnconfiguredNodeNetworksV2#ipv4}
  */
  readonly ipv4?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipv6 ClustersUnconfiguredNodeNetworksV2#ipv6}
  */
  readonly ipv6?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6[] | cdktf.IResolvable;
}

export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListIpmiIpToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpList extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersUnconfiguredNodeNetworksV2NodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#block_id ClustersUnconfiguredNodeNetworksV2#block_id}
  */
  readonly blockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#current_network_interface ClustersUnconfiguredNodeNetworksV2#current_network_interface}
  */
  readonly currentNetworkInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#hypervisor_type ClustersUnconfiguredNodeNetworksV2#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#hypervisor_version ClustersUnconfiguredNodeNetworksV2#hypervisor_version}
  */
  readonly hypervisorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#is_compute_only ClustersUnconfiguredNodeNetworksV2#is_compute_only}
  */
  readonly isComputeOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#is_light_compute ClustersUnconfiguredNodeNetworksV2#is_light_compute}
  */
  readonly isLightCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#is_robo_mixed_hypervisor ClustersUnconfiguredNodeNetworksV2#is_robo_mixed_hypervisor}
  */
  readonly isRoboMixedHypervisor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#model ClustersUnconfiguredNodeNetworksV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#node_position ClustersUnconfiguredNodeNetworksV2#node_position}
  */
  readonly nodePosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#node_uuid ClustersUnconfiguredNodeNetworksV2#node_uuid}
  */
  readonly nodeUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#nos_version ClustersUnconfiguredNodeNetworksV2#nos_version}
  */
  readonly nosVersion?: string;
  /**
  * cvm_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#cvm_ip ClustersUnconfiguredNodeNetworksV2#cvm_ip}
  */
  readonly cvmIp?: ClustersUnconfiguredNodeNetworksV2NodeListCvmIp[] | cdktf.IResolvable;
  /**
  * digital_certificate_map_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#digital_certificate_map_list ClustersUnconfiguredNodeNetworksV2#digital_certificate_map_list}
  */
  readonly digitalCertificateMapList?: ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable;
  /**
  * hypervisor_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#hypervisor_ip ClustersUnconfiguredNodeNetworksV2#hypervisor_ip}
  */
  readonly hypervisorIp?: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp[] | cdktf.IResolvable;
  /**
  * ipmi_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#ipmi_ip ClustersUnconfiguredNodeNetworksV2#ipmi_ip}
  */
  readonly ipmiIp?: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp[] | cdktf.IResolvable;
}

export function clustersUnconfiguredNodeNetworksV2NodeListStructToTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    current_network_interface: cdktf.stringToTerraform(struct!.currentNetworkInterface),
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    hypervisor_version: cdktf.stringToTerraform(struct!.hypervisorVersion),
    is_compute_only: cdktf.booleanToTerraform(struct!.isComputeOnly),
    is_light_compute: cdktf.booleanToTerraform(struct!.isLightCompute),
    is_robo_mixed_hypervisor: cdktf.booleanToTerraform(struct!.isRoboMixedHypervisor),
    model: cdktf.stringToTerraform(struct!.model),
    node_position: cdktf.stringToTerraform(struct!.nodePosition),
    node_uuid: cdktf.stringToTerraform(struct!.nodeUuid),
    nos_version: cdktf.stringToTerraform(struct!.nosVersion),
    cvm_ip: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListCvmIpToTerraform, true)(struct!.cvmIp),
    digital_certificate_map_list: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructToTerraform, true)(struct!.digitalCertificateMapList),
    hypervisor_ip: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpToTerraform, true)(struct!.hypervisorIp),
    ipmi_ip: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpToTerraform, true)(struct!.ipmiIp),
  }
}


export function clustersUnconfiguredNodeNetworksV2NodeListStructToHclTerraform(struct?: ClustersUnconfiguredNodeNetworksV2NodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_network_interface: {
      value: cdktf.stringToHclTerraform(struct!.currentNetworkInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_version: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_compute_only: {
      value: cdktf.booleanToHclTerraform(struct!.isComputeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_light_compute: {
      value: cdktf.booleanToHclTerraform(struct!.isLightCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_robo_mixed_hypervisor: {
      value: cdktf.booleanToHclTerraform(struct!.isRoboMixedHypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_position: {
      value: cdktf.stringToHclTerraform(struct!.nodePosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_uuid: {
      value: cdktf.stringToHclTerraform(struct!.nodeUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nos_version: {
      value: cdktf.stringToHclTerraform(struct!.nosVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_ip: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListCvmIpToHclTerraform, true)(struct!.cvmIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListCvmIpList",
    },
    digital_certificate_map_list: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructToHclTerraform, true)(struct!.digitalCertificateMapList),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructList",
    },
    hypervisor_ip: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListHypervisorIpToHclTerraform, true)(struct!.hypervisorIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpList",
    },
    ipmi_ip: {
      value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListIpmiIpToHclTerraform, true)(struct!.ipmiIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersUnconfiguredNodeNetworksV2NodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersUnconfiguredNodeNetworksV2NodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._currentNetworkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentNetworkInterface = this._currentNetworkInterface;
    }
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._hypervisorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorVersion = this._hypervisorVersion;
    }
    if (this._isComputeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isComputeOnly = this._isComputeOnly;
    }
    if (this._isLightCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLightCompute = this._isLightCompute;
    }
    if (this._isRoboMixedHypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRoboMixedHypervisor = this._isRoboMixedHypervisor;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nodePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePosition = this._nodePosition;
    }
    if (this._nodeUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUuid = this._nodeUuid;
    }
    if (this._nosVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosVersion = this._nosVersion;
    }
    if (this._cvmIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmIp = this._cvmIp?.internalValue;
    }
    if (this._digitalCertificateMapList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalCertificateMapList = this._digitalCertificateMapList?.internalValue;
    }
    if (this._hypervisorIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIp = this._hypervisorIp?.internalValue;
    }
    if (this._ipmiIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersUnconfiguredNodeNetworksV2NodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._currentNetworkInterface = undefined;
      this._hypervisorType = undefined;
      this._hypervisorVersion = undefined;
      this._isComputeOnly = undefined;
      this._isLightCompute = undefined;
      this._isRoboMixedHypervisor = undefined;
      this._model = undefined;
      this._nodePosition = undefined;
      this._nodeUuid = undefined;
      this._nosVersion = undefined;
      this._cvmIp.internalValue = undefined;
      this._digitalCertificateMapList.internalValue = undefined;
      this._hypervisorIp.internalValue = undefined;
      this._ipmiIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._currentNetworkInterface = value.currentNetworkInterface;
      this._hypervisorType = value.hypervisorType;
      this._hypervisorVersion = value.hypervisorVersion;
      this._isComputeOnly = value.isComputeOnly;
      this._isLightCompute = value.isLightCompute;
      this._isRoboMixedHypervisor = value.isRoboMixedHypervisor;
      this._model = value.model;
      this._nodePosition = value.nodePosition;
      this._nodeUuid = value.nodeUuid;
      this._nosVersion = value.nosVersion;
      this._cvmIp.internalValue = value.cvmIp;
      this._digitalCertificateMapList.internalValue = value.digitalCertificateMapList;
      this._hypervisorIp.internalValue = value.hypervisorIp;
      this._ipmiIp.internalValue = value.ipmiIp;
    }
  }

  // block_id - computed: true, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // current_network_interface - computed: true, optional: true, required: false
  private _currentNetworkInterface?: string; 
  public get currentNetworkInterface() {
    return this.getStringAttribute('current_network_interface');
  }
  public set currentNetworkInterface(value: string) {
    this._currentNetworkInterface = value;
  }
  public resetCurrentNetworkInterface() {
    this._currentNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentNetworkInterfaceInput() {
    return this._currentNetworkInterface;
  }

  // hypervisor_type - computed: true, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // hypervisor_version - computed: true, optional: true, required: false
  private _hypervisorVersion?: string; 
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }
  public set hypervisorVersion(value: string) {
    this._hypervisorVersion = value;
  }
  public resetHypervisorVersion() {
    this._hypervisorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVersionInput() {
    return this._hypervisorVersion;
  }

  // is_compute_only - computed: true, optional: true, required: false
  private _isComputeOnly?: boolean | cdktf.IResolvable; 
  public get isComputeOnly() {
    return this.getBooleanAttribute('is_compute_only');
  }
  public set isComputeOnly(value: boolean | cdktf.IResolvable) {
    this._isComputeOnly = value;
  }
  public resetIsComputeOnly() {
    this._isComputeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComputeOnlyInput() {
    return this._isComputeOnly;
  }

  // is_light_compute - computed: true, optional: true, required: false
  private _isLightCompute?: boolean | cdktf.IResolvable; 
  public get isLightCompute() {
    return this.getBooleanAttribute('is_light_compute');
  }
  public set isLightCompute(value: boolean | cdktf.IResolvable) {
    this._isLightCompute = value;
  }
  public resetIsLightCompute() {
    this._isLightCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLightComputeInput() {
    return this._isLightCompute;
  }

  // is_robo_mixed_hypervisor - computed: true, optional: true, required: false
  private _isRoboMixedHypervisor?: boolean | cdktf.IResolvable; 
  public get isRoboMixedHypervisor() {
    return this.getBooleanAttribute('is_robo_mixed_hypervisor');
  }
  public set isRoboMixedHypervisor(value: boolean | cdktf.IResolvable) {
    this._isRoboMixedHypervisor = value;
  }
  public resetIsRoboMixedHypervisor() {
    this._isRoboMixedHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRoboMixedHypervisorInput() {
    return this._isRoboMixedHypervisor;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // node_position - computed: true, optional: true, required: false
  private _nodePosition?: string; 
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }
  public set nodePosition(value: string) {
    this._nodePosition = value;
  }
  public resetNodePosition() {
    this._nodePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePositionInput() {
    return this._nodePosition;
  }

  // node_uuid - computed: true, optional: true, required: false
  private _nodeUuid?: string; 
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }
  public set nodeUuid(value: string) {
    this._nodeUuid = value;
  }
  public resetNodeUuid() {
    this._nodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUuidInput() {
    return this._nodeUuid;
  }

  // nos_version - computed: true, optional: true, required: false
  private _nosVersion?: string; 
  public get nosVersion() {
    return this.getStringAttribute('nos_version');
  }
  public set nosVersion(value: string) {
    this._nosVersion = value;
  }
  public resetNosVersion() {
    this._nosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosVersionInput() {
    return this._nosVersion;
  }

  // cvm_ip - computed: false, optional: true, required: false
  private _cvmIp = new ClustersUnconfiguredNodeNetworksV2NodeListCvmIpList(this, "cvm_ip", false);
  public get cvmIp() {
    return this._cvmIp;
  }
  public putCvmIp(value: ClustersUnconfiguredNodeNetworksV2NodeListCvmIp[] | cdktf.IResolvable) {
    this._cvmIp.internalValue = value;
  }
  public resetCvmIp() {
    this._cvmIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmIpInput() {
    return this._cvmIp.internalValue;
  }

  // digital_certificate_map_list - computed: false, optional: true, required: false
  private _digitalCertificateMapList = new ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStructList(this, "digital_certificate_map_list", false);
  public get digitalCertificateMapList() {
    return this._digitalCertificateMapList;
  }
  public putDigitalCertificateMapList(value: ClustersUnconfiguredNodeNetworksV2NodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable) {
    this._digitalCertificateMapList.internalValue = value;
  }
  public resetDigitalCertificateMapList() {
    this._digitalCertificateMapList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalCertificateMapListInput() {
    return this._digitalCertificateMapList.internalValue;
  }

  // hypervisor_ip - computed: false, optional: true, required: false
  private _hypervisorIp = new ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIpList(this, "hypervisor_ip", false);
  public get hypervisorIp() {
    return this._hypervisorIp;
  }
  public putHypervisorIp(value: ClustersUnconfiguredNodeNetworksV2NodeListHypervisorIp[] | cdktf.IResolvable) {
    this._hypervisorIp.internalValue = value;
  }
  public resetHypervisorIp() {
    this._hypervisorIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIpInput() {
    return this._hypervisorIp.internalValue;
  }

  // ipmi_ip - computed: false, optional: true, required: false
  private _ipmiIp = new ClustersUnconfiguredNodeNetworksV2NodeListIpmiIpList(this, "ipmi_ip", false);
  public get ipmiIp() {
    return this._ipmiIp;
  }
  public putIpmiIp(value: ClustersUnconfiguredNodeNetworksV2NodeListIpmiIp[] | cdktf.IResolvable) {
    this._ipmiIp.internalValue = value;
  }
  public resetIpmiIp() {
    this._ipmiIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp.internalValue;
  }
}

export class ClustersUnconfiguredNodeNetworksV2NodeListStructList extends cdktf.ComplexList {
  public internalValue? : ClustersUnconfiguredNodeNetworksV2NodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClustersUnconfiguredNodeNetworksV2NodeListStructOutputReference {
    return new ClustersUnconfiguredNodeNetworksV2NodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2 nutanix_clusters_unconfigured_node_networks_v2}
*/
export class ClustersUnconfiguredNodeNetworksV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_clusters_unconfigured_node_networks_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClustersUnconfiguredNodeNetworksV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClustersUnconfiguredNodeNetworksV2 to import
  * @param importFromId The id of the existing ClustersUnconfiguredNodeNetworksV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClustersUnconfiguredNodeNetworksV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_clusters_unconfigured_node_networks_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/clusters_unconfigured_node_networks_v2 nutanix_clusters_unconfigured_node_networks_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClustersUnconfiguredNodeNetworksV2Config
  */
  public constructor(scope: Construct, id: string, config: ClustersUnconfiguredNodeNetworksV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_clusters_unconfigured_node_networks_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expand = config.expand;
    this._extId = config.extId;
    this._id = config.id;
    this._requestType = config.requestType;
    this._nodeList.internalValue = config.nodeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expand - computed: false, optional: true, required: false
  private _expand?: string; 
  public get expand() {
    return this.getStringAttribute('expand');
  }
  public set expand(value: string) {
    this._expand = value;
  }
  public resetExpand() {
    this._expand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandInput() {
    return this._expand;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // nodes_networking_details - computed: true, optional: false, required: false
  private _nodesNetworkingDetails = new ClustersUnconfiguredNodeNetworksV2NodesNetworkingDetailsList(this, "nodes_networking_details", false);
  public get nodesNetworkingDetails() {
    return this._nodesNetworkingDetails;
  }

  // request_type - computed: true, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new ClustersUnconfiguredNodeNetworksV2NodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: ClustersUnconfiguredNodeNetworksV2NodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expand: cdktf.stringToTerraform(this._expand),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      request_type: cdktf.stringToTerraform(this._requestType),
      node_list: cdktf.listMapper(clustersUnconfiguredNodeNetworksV2NodeListStructToTerraform, true)(this._nodeList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expand: {
        value: cdktf.stringToHclTerraform(this._expand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_list: {
        value: cdktf.listMapperHcl(clustersUnconfiguredNodeNetworksV2NodeListStructToHclTerraform, true)(this._nodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClustersUnconfiguredNodeNetworksV2NodeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
