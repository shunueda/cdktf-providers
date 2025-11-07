// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoEdgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge#filter DataProsimoEdge#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge#id DataProsimoEdge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoEdgeEdgesByoresourcedetails {
}

export function dataProsimoEdgeEdgesByoresourcedetailsToTerraform(struct?: DataProsimoEdgeEdgesByoresourcedetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesByoresourcedetailsToHclTerraform(struct?: DataProsimoEdgeEdgesByoresourcedetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesByoresourcedetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesByoresourcedetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesByoresourcedetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpcid - computed: true, optional: false, required: false
  public get vpcid() {
    return this.getStringAttribute('vpcid');
  }
}

export class DataProsimoEdgeEdgesByoresourcedetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesByoresourcedetailsOutputReference {
    return new DataProsimoEdgeEdgesByoresourcedetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdgesFabricconnectinfoAttachments {
}

export function dataProsimoEdgeEdgesFabricconnectinfoAttachmentsToTerraform(struct?: DataProsimoEdgeEdgesFabricconnectinfoAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesFabricconnectinfoAttachmentsToHclTerraform(struct?: DataProsimoEdgeEdgesFabricconnectinfoAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesFabricconnectinfoAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesFabricconnectinfoAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesFabricconnectinfoAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachtype - computed: true, optional: false, required: false
  public get attachtype() {
    return this.getStringAttribute('attachtype');
  }

  // conntype - computed: true, optional: false, required: false
  public get conntype() {
    return this.getStringAttribute('conntype');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pappfqdn - computed: true, optional: false, required: false
  public get pappfqdn() {
    return this.getStringAttribute('pappfqdn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataProsimoEdgeEdgesFabricconnectinfoAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesFabricconnectinfoAttachmentsOutputReference {
    return new DataProsimoEdgeEdgesFabricconnectinfoAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdgesFabricconnectinfo {
}

export function dataProsimoEdgeEdgesFabricconnectinfoToTerraform(struct?: DataProsimoEdgeEdgesFabricconnectinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesFabricconnectinfoToHclTerraform(struct?: DataProsimoEdgeEdgesFabricconnectinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesFabricconnectinfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesFabricconnectinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesFabricconnectinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataProsimoEdgeEdgesFabricconnectinfoAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // cloudtype - computed: true, optional: false, required: false
  public get cloudtype() {
    return this.getStringAttribute('cloudtype');
  }

  // haspublic - computed: true, optional: false, required: false
  public get haspublic() {
    return this.getBooleanAttribute('haspublic');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }
}

export class DataProsimoEdgeEdgesFabricconnectinfoList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesFabricconnectinfoOutputReference {
    return new DataProsimoEdgeEdgesFabricconnectinfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdgesNetworkinfo {
}

export function dataProsimoEdgeEdgesNetworkinfoToTerraform(struct?: DataProsimoEdgeEdgesNetworkinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesNetworkinfoToHclTerraform(struct?: DataProsimoEdgeEdgesNetworkinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesNetworkinfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesNetworkinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesNetworkinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ilbdns - computed: true, optional: false, required: false
  public get ilbdns() {
    return this.getStringAttribute('ilbdns');
  }

  // vpcid - computed: true, optional: false, required: false
  public get vpcid() {
    return this.getStringAttribute('vpcid');
  }
}

export class DataProsimoEdgeEdgesNetworkinfoList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesNetworkinfoOutputReference {
    return new DataProsimoEdgeEdgesNetworkinfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdgesNodesizesettingsBandwidthrange {
}

export function dataProsimoEdgeEdgesNodesizesettingsBandwidthrangeToTerraform(struct?: DataProsimoEdgeEdgesNodesizesettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesNodesizesettingsBandwidthrangeToHclTerraform(struct?: DataProsimoEdgeEdgesNodesizesettingsBandwidthrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesNodesizesettingsBandwidthrangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesNodesizesettingsBandwidthrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesNodesizesettingsBandwidthrange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataProsimoEdgeEdgesNodesizesettingsBandwidthrangeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesNodesizesettingsBandwidthrangeOutputReference {
    return new DataProsimoEdgeEdgesNodesizesettingsBandwidthrangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdgesNodesizesettings {
}

export function dataProsimoEdgeEdgesNodesizesettingsToTerraform(struct?: DataProsimoEdgeEdgesNodesizesettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesNodesizesettingsToHclTerraform(struct?: DataProsimoEdgeEdgesNodesizesettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesNodesizesettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdgesNodesizesettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdgesNodesizesettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // bandwidthname - computed: true, optional: false, required: false
  public get bandwidthname() {
    return this.getStringAttribute('bandwidthname');
  }

  // bandwidthrange - computed: true, optional: false, required: false
  private _bandwidthrange = new DataProsimoEdgeEdgesNodesizesettingsBandwidthrangeList(this, "bandwidthrange", true);
  public get bandwidthrange() {
    return this._bandwidthrange;
  }

  // instancetype - computed: true, optional: false, required: false
  public get instancetype() {
    return this.getStringAttribute('instancetype');
  }
}

export class DataProsimoEdgeEdgesNodesizesettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesNodesizesettingsOutputReference {
    return new DataProsimoEdgeEdgesNodesizesettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoEdgeEdges {
}

export function dataProsimoEdgeEdgesToTerraform(struct?: DataProsimoEdgeEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoEdgeEdgesToHclTerraform(struct?: DataProsimoEdgeEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoEdgeEdgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoEdgeEdges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoEdgeEdges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appnames - computed: true, optional: false, required: false
  public get appnames() {
    return this.getListAttribute('appnames');
  }

  // appusedcount - computed: true, optional: false, required: false
  public get appusedcount() {
    return this.getNumberAttribute('appusedcount');
  }

  // byoresourcedetails - computed: true, optional: false, required: false
  private _byoresourcedetails = new DataProsimoEdgeEdgesByoresourcedetailsList(this, "byoresourcedetails", true);
  public get byoresourcedetails() {
    return this._byoresourcedetails;
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cloudkeyid - computed: true, optional: false, required: false
  public get cloudkeyid() {
    return this.getStringAttribute('cloudkeyid');
  }

  // cloudregion - computed: true, optional: false, required: false
  public get cloudregion() {
    return this.getStringAttribute('cloudregion');
  }

  // cloudtype - computed: true, optional: false, required: false
  public get cloudtype() {
    return this.getStringAttribute('cloudtype');
  }

  // clustername - computed: true, optional: false, required: false
  public get clustername() {
    return this.getStringAttribute('clustername');
  }

  // clustertype - computed: true, optional: false, required: false
  public get clustertype() {
    return this.getStringAttribute('clustertype');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // edgeconnectivitycount - computed: true, optional: false, required: false
  public get edgeconnectivitycount() {
    return this.getNumberAttribute('edgeconnectivitycount');
  }

  // fabricconnectinfo - computed: true, optional: false, required: false
  private _fabricconnectinfo = new DataProsimoEdgeEdgesFabricconnectinfoList(this, "fabricconnectinfo", true);
  public get fabricconnectinfo() {
    return this._fabricconnectinfo;
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locationid - computed: true, optional: false, required: false
  public get locationid() {
    return this.getStringAttribute('locationid');
  }

  // networkinfo - computed: true, optional: false, required: false
  private _networkinfo = new DataProsimoEdgeEdgesNetworkinfoList(this, "networkinfo", true);
  public get networkinfo() {
    return this._networkinfo;
  }

  // networknames - computed: true, optional: false, required: false
  public get networknames() {
    return this.getListAttribute('networknames');
  }

  // networkusedcount - computed: true, optional: false, required: false
  public get networkusedcount() {
    return this.getNumberAttribute('networkusedcount');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }

  // nodesizesettings - computed: true, optional: false, required: false
  private _nodesizesettings = new DataProsimoEdgeEdgesNodesizesettingsList(this, "nodesizesettings", true);
  public get nodesizesettings() {
    return this._nodesizesettings;
  }

  // pappfqdn - computed: true, optional: false, required: false
  public get pappfqdn() {
    return this.getStringAttribute('pappfqdn');
  }

  // privateip - computed: true, optional: false, required: false
  public get privateip() {
    return this.getStringAttribute('privateip');
  }

  // privatelinksourcenames - computed: true, optional: false, required: false
  public get privatelinksourcenames() {
    return this.getListAttribute('privatelinksourcenames');
  }

  // privatelinkusedcount - computed: true, optional: false, required: false
  public get privatelinkusedcount() {
    return this.getNumberAttribute('privatelinkusedcount');
  }

  // publicip - computed: true, optional: false, required: false
  public get publicip() {
    return this.getStringAttribute('publicip');
  }

  // ranchertoken - computed: true, optional: false, required: false
  public get ranchertoken() {
    return this.getStringAttribute('ranchertoken');
  }

  // regstatus - computed: true, optional: false, required: false
  public get regstatus() {
    return this.getStringAttribute('regstatus');
  }

  // sharedservicecount - computed: true, optional: false, required: false
  public get sharedservicecount() {
    return this.getNumberAttribute('sharedservicecount');
  }

  // sharedservicenames - computed: true, optional: false, required: false
  public get sharedservicenames() {
    return this.getListAttribute('sharedservicenames');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // tokenactivated - computed: true, optional: false, required: false
  public get tokenactivated() {
    return this.getBooleanAttribute('tokenactivated');
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }

  // wgexternalendpoint - computed: true, optional: false, required: false
  public get wgexternalendpoint() {
    return this.getStringAttribute('wgexternalendpoint');
  }

  // wginternalendpoint - computed: true, optional: false, required: false
  public get wginternalendpoint() {
    return this.getStringAttribute('wginternalendpoint');
  }
}

export class DataProsimoEdgeEdgesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoEdgeEdgesOutputReference {
    return new DataProsimoEdgeEdgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge prosimo_edge}
*/
export class DataProsimoEdge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_edge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoEdge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoEdge to import
  * @param importFromId The id of the existing DataProsimoEdge that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoEdge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_edge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/edge prosimo_edge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoEdgeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoEdgeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_edge',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edges - computed: true, optional: false, required: false
  private _edges = new DataProsimoEdgeEdgesList(this, "edges", true);
  public get edges() {
    return this._edges;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
