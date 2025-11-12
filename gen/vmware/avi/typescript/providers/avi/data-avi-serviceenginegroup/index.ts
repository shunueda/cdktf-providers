// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviServiceenginegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#cloud_ref DataAviServiceenginegroup#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#id DataAviServiceenginegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#name DataAviServiceenginegroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#tenant_ref DataAviServiceenginegroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#uuid DataAviServiceenginegroup#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviServiceenginegroupConfigpbAttributes {
}

export function dataAviServiceenginegroupConfigpbAttributesToTerraform(struct?: DataAviServiceenginegroupConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupConfigpbAttributesToHclTerraform(struct?: DataAviServiceenginegroupConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviServiceenginegroupConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupConfigpbAttributesOutputReference {
    return new DataAviServiceenginegroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupCustomTag {
}

export function dataAviServiceenginegroupCustomTagToTerraform(struct?: DataAviServiceenginegroupCustomTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupCustomTagToHclTerraform(struct?: DataAviServiceenginegroupCustomTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupCustomTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupCustomTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupCustomTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_val - computed: true, optional: false, required: false
  public get tagVal() {
    return this.getStringAttribute('tag_val');
  }
}

export class DataAviServiceenginegroupCustomTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupCustomTagOutputReference {
    return new DataAviServiceenginegroupCustomTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupGcpConfig {
}

export function dataAviServiceenginegroupGcpConfigToTerraform(struct?: DataAviServiceenginegroupGcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupGcpConfigToHclTerraform(struct?: DataAviServiceenginegroupGcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupGcpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupGcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupGcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_data_vpc_network_name - computed: true, optional: false, required: false
  public get backendDataVpcNetworkName() {
    return this.getStringAttribute('backend_data_vpc_network_name');
  }

  // backend_data_vpc_project_id - computed: true, optional: false, required: false
  public get backendDataVpcProjectId() {
    return this.getStringAttribute('backend_data_vpc_project_id');
  }

  // backend_data_vpc_subnet_name - computed: true, optional: false, required: false
  public get backendDataVpcSubnetName() {
    return this.getStringAttribute('backend_data_vpc_subnet_name');
  }
}

export class DataAviServiceenginegroupGcpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupGcpConfigOutputReference {
    return new DataAviServiceenginegroupGcpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupInstanceFlavorInfoMeta {
}

export function dataAviServiceenginegroupInstanceFlavorInfoMetaToTerraform(struct?: DataAviServiceenginegroupInstanceFlavorInfoMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupInstanceFlavorInfoMetaToHclTerraform(struct?: DataAviServiceenginegroupInstanceFlavorInfoMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupInstanceFlavorInfoMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupInstanceFlavorInfoMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupInstanceFlavorInfoMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviServiceenginegroupInstanceFlavorInfoMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupInstanceFlavorInfoMetaOutputReference {
    return new DataAviServiceenginegroupInstanceFlavorInfoMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupInstanceFlavorInfo {
}

export function dataAviServiceenginegroupInstanceFlavorInfoToTerraform(struct?: DataAviServiceenginegroupInstanceFlavorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupInstanceFlavorInfoToHclTerraform(struct?: DataAviServiceenginegroupInstanceFlavorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupInstanceFlavorInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupInstanceFlavorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupInstanceFlavorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }

  // disk_gb - computed: true, optional: false, required: false
  public get diskGb() {
    return this.getStringAttribute('disk_gb');
  }

  // enhanced_nw - computed: true, optional: false, required: false
  public get enhancedNw() {
    return this.getStringAttribute('enhanced_nw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_recommended - computed: true, optional: false, required: false
  public get isRecommended() {
    return this.getStringAttribute('is_recommended');
  }

  // max_ip6s_per_nic - computed: true, optional: false, required: false
  public get maxIp6SPerNic() {
    return this.getStringAttribute('max_ip6s_per_nic');
  }

  // max_ips_per_nic - computed: true, optional: false, required: false
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }

  // max_nics - computed: true, optional: false, required: false
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataAviServiceenginegroupInstanceFlavorInfoMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getStringAttribute('public');
  }

  // ram_mb - computed: true, optional: false, required: false
  public get ramMb() {
    return this.getStringAttribute('ram_mb');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

export class DataAviServiceenginegroupInstanceFlavorInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupInstanceFlavorInfoOutputReference {
    return new DataAviServiceenginegroupInstanceFlavorInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesDnatIp {
}

export function dataAviServiceenginegroupIptablesRulesDnatIpToTerraform(struct?: DataAviServiceenginegroupIptablesRulesDnatIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesDnatIpToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesDnatIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesDnatIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesDnatIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesDnatIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupIptablesRulesDnatIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesDnatIpOutputReference {
    return new DataAviServiceenginegroupIptablesRulesDnatIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesDstIpIpAddr {
}

export function dataAviServiceenginegroupIptablesRulesDstIpIpAddrToTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesDstIpIpAddrToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesDstIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesDstIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesDstIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupIptablesRulesDstIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesDstIpIpAddrOutputReference {
    return new DataAviServiceenginegroupIptablesRulesDstIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesDstIp {
}

export function dataAviServiceenginegroupIptablesRulesDstIpToTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesDstIpToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesDstIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesDstIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesDstIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceenginegroupIptablesRulesDstIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceenginegroupIptablesRulesDstIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesDstIpOutputReference {
    return new DataAviServiceenginegroupIptablesRulesDstIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesDstPort {
}

export function dataAviServiceenginegroupIptablesRulesDstPortToTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesDstPortToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesDstPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesDstPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesDstPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesDstPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataAviServiceenginegroupIptablesRulesDstPortList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesDstPortOutputReference {
    return new DataAviServiceenginegroupIptablesRulesDstPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesSrcIpIpAddr {
}

export function dataAviServiceenginegroupIptablesRulesSrcIpIpAddrToTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesSrcIpIpAddrToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcIpIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesSrcIpIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesSrcIpIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupIptablesRulesSrcIpIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference {
    return new DataAviServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesSrcIp {
}

export function dataAviServiceenginegroupIptablesRulesSrcIpToTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesSrcIpToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesSrcIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesSrcIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesSrcIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceenginegroupIptablesRulesSrcIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceenginegroupIptablesRulesSrcIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesSrcIpOutputReference {
    return new DataAviServiceenginegroupIptablesRulesSrcIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRulesSrcPort {
}

export function dataAviServiceenginegroupIptablesRulesSrcPortToTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesSrcPortToHclTerraform(struct?: DataAviServiceenginegroupIptablesRulesSrcPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesSrcPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRulesSrcPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRulesSrcPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataAviServiceenginegroupIptablesRulesSrcPortList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesSrcPortOutputReference {
    return new DataAviServiceenginegroupIptablesRulesSrcPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptablesRules {
}

export function dataAviServiceenginegroupIptablesRulesToTerraform(struct?: DataAviServiceenginegroupIptablesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesRulesToHclTerraform(struct?: DataAviServiceenginegroupIptablesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptablesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptablesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // dnat_ip - computed: true, optional: false, required: false
  private _dnatIp = new DataAviServiceenginegroupIptablesRulesDnatIpList(this, "dnat_ip", true);
  public get dnatIp() {
    return this._dnatIp;
  }

  // dst_ip - computed: true, optional: false, required: false
  private _dstIp = new DataAviServiceenginegroupIptablesRulesDstIpList(this, "dst_ip", true);
  public get dstIp() {
    return this._dstIp;
  }

  // dst_port - computed: true, optional: false, required: false
  private _dstPort = new DataAviServiceenginegroupIptablesRulesDstPortList(this, "dst_port", true);
  public get dstPort() {
    return this._dstPort;
  }

  // input_interface - computed: true, optional: false, required: false
  public get inputInterface() {
    return this.getStringAttribute('input_interface');
  }

  // output_interface - computed: true, optional: false, required: false
  public get outputInterface() {
    return this.getStringAttribute('output_interface');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // src_ip - computed: true, optional: false, required: false
  private _srcIp = new DataAviServiceenginegroupIptablesRulesSrcIpList(this, "src_ip", true);
  public get srcIp() {
    return this._srcIp;
  }

  // src_port - computed: true, optional: false, required: false
  private _srcPort = new DataAviServiceenginegroupIptablesRulesSrcPortList(this, "src_port", true);
  public get srcPort() {
    return this._srcPort;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataAviServiceenginegroupIptablesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesRulesOutputReference {
    return new DataAviServiceenginegroupIptablesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupIptables {
}

export function dataAviServiceenginegroupIptablesToTerraform(struct?: DataAviServiceenginegroupIptables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupIptablesToHclTerraform(struct?: DataAviServiceenginegroupIptables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupIptablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupIptables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupIptables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAviServiceenginegroupIptablesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataAviServiceenginegroupIptablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupIptablesOutputReference {
    return new DataAviServiceenginegroupIptablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupKniAllowedServerPortsRange {
}

export function dataAviServiceenginegroupKniAllowedServerPortsRangeToTerraform(struct?: DataAviServiceenginegroupKniAllowedServerPortsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupKniAllowedServerPortsRangeToHclTerraform(struct?: DataAviServiceenginegroupKniAllowedServerPortsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupKniAllowedServerPortsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupKniAllowedServerPortsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupKniAllowedServerPortsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataAviServiceenginegroupKniAllowedServerPortsRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupKniAllowedServerPortsRangeOutputReference {
    return new DataAviServiceenginegroupKniAllowedServerPortsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupKniAllowedServerPorts {
}

export function dataAviServiceenginegroupKniAllowedServerPortsToTerraform(struct?: DataAviServiceenginegroupKniAllowedServerPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupKniAllowedServerPortsToHclTerraform(struct?: DataAviServiceenginegroupKniAllowedServerPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupKniAllowedServerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupKniAllowedServerPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupKniAllowedServerPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataAviServiceenginegroupKniAllowedServerPortsRangeList(this, "range", true);
  public get range() {
    return this._range;
  }
}

export class DataAviServiceenginegroupKniAllowedServerPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupKniAllowedServerPortsOutputReference {
    return new DataAviServiceenginegroupKniAllowedServerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupLabels {
}

export function dataAviServiceenginegroupLabelsToTerraform(struct?: DataAviServiceenginegroupLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupLabelsToHclTerraform(struct?: DataAviServiceenginegroupLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviServiceenginegroupLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupLabelsOutputReference {
    return new DataAviServiceenginegroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupMarkers {
}

export function dataAviServiceenginegroupMarkersToTerraform(struct?: DataAviServiceenginegroupMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupMarkersToHclTerraform(struct?: DataAviServiceenginegroupMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviServiceenginegroupMarkersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupMarkersOutputReference {
    return new DataAviServiceenginegroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupMgmtSubnetIpAddr {
}

export function dataAviServiceenginegroupMgmtSubnetIpAddrToTerraform(struct?: DataAviServiceenginegroupMgmtSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupMgmtSubnetIpAddrToHclTerraform(struct?: DataAviServiceenginegroupMgmtSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupMgmtSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupMgmtSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupMgmtSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupMgmtSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupMgmtSubnetIpAddrOutputReference {
    return new DataAviServiceenginegroupMgmtSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupMgmtSubnet {
}

export function dataAviServiceenginegroupMgmtSubnetToTerraform(struct?: DataAviServiceenginegroupMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupMgmtSubnetToHclTerraform(struct?: DataAviServiceenginegroupMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupMgmtSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupMgmtSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupMgmtSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceenginegroupMgmtSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceenginegroupMgmtSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupMgmtSubnetOutputReference {
    return new DataAviServiceenginegroupMgmtSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupObjsyncConfig {
}

export function dataAviServiceenginegroupObjsyncConfigToTerraform(struct?: DataAviServiceenginegroupObjsyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupObjsyncConfigToHclTerraform(struct?: DataAviServiceenginegroupObjsyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupObjsyncConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupObjsyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupObjsyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // objsync_cpu_limit - computed: true, optional: false, required: false
  public get objsyncCpuLimit() {
    return this.getStringAttribute('objsync_cpu_limit');
  }

  // objsync_hub_elect_interval - computed: true, optional: false, required: false
  public get objsyncHubElectInterval() {
    return this.getStringAttribute('objsync_hub_elect_interval');
  }

  // objsync_reconcile_interval - computed: true, optional: false, required: false
  public get objsyncReconcileInterval() {
    return this.getStringAttribute('objsync_reconcile_interval');
  }
}

export class DataAviServiceenginegroupObjsyncConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupObjsyncConfigOutputReference {
    return new DataAviServiceenginegroupObjsyncConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupRealtimeSeMetrics {
}

export function dataAviServiceenginegroupRealtimeSeMetricsToTerraform(struct?: DataAviServiceenginegroupRealtimeSeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupRealtimeSeMetricsToHclTerraform(struct?: DataAviServiceenginegroupRealtimeSeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupRealtimeSeMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupRealtimeSeMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupRealtimeSeMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
}

export class DataAviServiceenginegroupRealtimeSeMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupRealtimeSeMetricsOutputReference {
    return new DataAviServiceenginegroupRealtimeSeMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeDosProfileThreshInfo {
}

export function dataAviServiceenginegroupSeDosProfileThreshInfoToTerraform(struct?: DataAviServiceenginegroupSeDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeDosProfileThreshInfoToHclTerraform(struct?: DataAviServiceenginegroupSeDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeDosProfileThreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeDosProfileThreshInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attack - computed: true, optional: false, required: false
  public get attack() {
    return this.getStringAttribute('attack');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}

export class DataAviServiceenginegroupSeDosProfileThreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeDosProfileThreshInfoOutputReference {
    return new DataAviServiceenginegroupSeDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeDosProfile {
}

export function dataAviServiceenginegroupSeDosProfileToTerraform(struct?: DataAviServiceenginegroupSeDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeDosProfileToHclTerraform(struct?: DataAviServiceenginegroupSeDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeDosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeDosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // thresh_info - computed: true, optional: false, required: false
  private _threshInfo = new DataAviServiceenginegroupSeDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }

  // thresh_period - computed: true, optional: false, required: false
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
}

export class DataAviServiceenginegroupSeDosProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeDosProfileOutputReference {
    return new DataAviServiceenginegroupSeDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds {
}

export function dataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToTerraform(struct?: DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToHclTerraform(struct?: DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_event_threshold_type - computed: true, optional: false, required: false
  public get metricsEventThresholdType() {
    return this.getStringAttribute('metrics_event_threshold_type');
  }

  // reset_threshold - computed: true, optional: false, required: false
  public get resetThreshold() {
    return this.getStringAttribute('reset_threshold');
  }

  // watermark_thresholds - computed: true, optional: false, required: false
  public get watermarkThresholds() {
    return this.getNumberListAttribute('watermark_thresholds');
  }
}

export class DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference {
    return new DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeGroupAnalyticsPolicy {
}

export function dataAviServiceenginegroupSeGroupAnalyticsPolicyToTerraform(struct?: DataAviServiceenginegroupSeGroupAnalyticsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeGroupAnalyticsPolicyToHclTerraform(struct?: DataAviServiceenginegroupSeGroupAnalyticsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeGroupAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeGroupAnalyticsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeGroupAnalyticsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_event_thresholds - computed: true, optional: false, required: false
  private _metricsEventThresholds = new DataAviServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsList(this, "metrics_event_thresholds", false);
  public get metricsEventThresholds() {
    return this._metricsEventThresholds;
  }
}

export class DataAviServiceenginegroupSeGroupAnalyticsPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeGroupAnalyticsPolicyOutputReference {
    return new DataAviServiceenginegroupSeGroupAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeRlProp {
}

export function dataAviServiceenginegroupSeRlPropToTerraform(struct?: DataAviServiceenginegroupSeRlProp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeRlPropToHclTerraform(struct?: DataAviServiceenginegroupSeRlProp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeRlPropOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeRlProp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeRlProp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // msf_num_stages - computed: true, optional: false, required: false
  public get msfNumStages() {
    return this.getStringAttribute('msf_num_stages');
  }

  // msf_stage_size - computed: true, optional: false, required: false
  public get msfStageSize() {
    return this.getStringAttribute('msf_stage_size');
  }
}

export class DataAviServiceenginegroupSeRlPropList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeRlPropOutputReference {
    return new DataAviServiceenginegroupSeRlPropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeTimeTrackerProps {
}

export function dataAviServiceenginegroupSeTimeTrackerPropsToTerraform(struct?: DataAviServiceenginegroupSeTimeTrackerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeTimeTrackerPropsToHclTerraform(struct?: DataAviServiceenginegroupSeTimeTrackerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeTimeTrackerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeTimeTrackerProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeTimeTrackerProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_audit_mode - computed: true, optional: false, required: false
  public get egressAuditMode() {
    return this.getStringAttribute('egress_audit_mode');
  }

  // egress_threshold - computed: true, optional: false, required: false
  public get egressThreshold() {
    return this.getStringAttribute('egress_threshold');
  }

  // event_gen_window - computed: true, optional: false, required: false
  public get eventGenWindow() {
    return this.getStringAttribute('event_gen_window');
  }

  // ingress_audit_mode - computed: true, optional: false, required: false
  public get ingressAuditMode() {
    return this.getStringAttribute('ingress_audit_mode');
  }

  // ingress_threshold - computed: true, optional: false, required: false
  public get ingressThreshold() {
    return this.getStringAttribute('ingress_threshold');
  }
}

export class DataAviServiceenginegroupSeTimeTrackerPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeTimeTrackerPropsOutputReference {
    return new DataAviServiceenginegroupSeTimeTrackerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupSeTracertPortRange {
}

export function dataAviServiceenginegroupSeTracertPortRangeToTerraform(struct?: DataAviServiceenginegroupSeTracertPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupSeTracertPortRangeToHclTerraform(struct?: DataAviServiceenginegroupSeTracertPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupSeTracertPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupSeTracertPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupSeTracertPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataAviServiceenginegroupSeTracertPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupSeTracertPortRangeOutputReference {
    return new DataAviServiceenginegroupSeTracertPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupServiceIp6SubnetsIpAddr {
}

export function dataAviServiceenginegroupServiceIp6SubnetsIpAddrToTerraform(struct?: DataAviServiceenginegroupServiceIp6SubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupServiceIp6SubnetsIpAddrToHclTerraform(struct?: DataAviServiceenginegroupServiceIp6SubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupServiceIp6SubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupServiceIp6SubnetsIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupServiceIp6SubnetsIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupServiceIp6SubnetsIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupServiceIp6SubnetsIpAddrOutputReference {
    return new DataAviServiceenginegroupServiceIp6SubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupServiceIp6Subnets {
}

export function dataAviServiceenginegroupServiceIp6SubnetsToTerraform(struct?: DataAviServiceenginegroupServiceIp6Subnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupServiceIp6SubnetsToHclTerraform(struct?: DataAviServiceenginegroupServiceIp6Subnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupServiceIp6SubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupServiceIp6Subnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupServiceIp6Subnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceenginegroupServiceIp6SubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceenginegroupServiceIp6SubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupServiceIp6SubnetsOutputReference {
    return new DataAviServiceenginegroupServiceIp6SubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupServiceIpSubnetsIpAddr {
}

export function dataAviServiceenginegroupServiceIpSubnetsIpAddrToTerraform(struct?: DataAviServiceenginegroupServiceIpSubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupServiceIpSubnetsIpAddrToHclTerraform(struct?: DataAviServiceenginegroupServiceIpSubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupServiceIpSubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupServiceIpSubnetsIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupServiceIpSubnetsIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviServiceenginegroupServiceIpSubnetsIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupServiceIpSubnetsIpAddrOutputReference {
    return new DataAviServiceenginegroupServiceIpSubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupServiceIpSubnets {
}

export function dataAviServiceenginegroupServiceIpSubnetsToTerraform(struct?: DataAviServiceenginegroupServiceIpSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupServiceIpSubnetsToHclTerraform(struct?: DataAviServiceenginegroupServiceIpSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupServiceIpSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupServiceIpSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupServiceIpSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviServiceenginegroupServiceIpSubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviServiceenginegroupServiceIpSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupServiceIpSubnetsOutputReference {
    return new DataAviServiceenginegroupServiceIpSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupUserAgentCacheConfig {
}

export function dataAviServiceenginegroupUserAgentCacheConfigToTerraform(struct?: DataAviServiceenginegroupUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupUserAgentCacheConfigToHclTerraform(struct?: DataAviServiceenginegroupUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupUserAgentCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupUserAgentCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }

  // controller_cache_size - computed: true, optional: false, required: false
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }

  // max_last_hit_time - computed: true, optional: false, required: false
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }

  // max_upstream_queries - computed: true, optional: false, required: false
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }

  // max_wait_time - computed: true, optional: false, required: false
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }

  // num_entries_upstream_update - computed: true, optional: false, required: false
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }

  // percent_reserved_for_bad_bots - computed: true, optional: false, required: false
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }

  // percent_reserved_for_browsers - computed: true, optional: false, required: false
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }

  // percent_reserved_for_good_bots - computed: true, optional: false, required: false
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }

  // percent_reserved_for_outstanding - computed: true, optional: false, required: false
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }

  // se_cache_size - computed: true, optional: false, required: false
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }

  // upstream_update_interval - computed: true, optional: false, required: false
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
}

export class DataAviServiceenginegroupUserAgentCacheConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupUserAgentCacheConfigOutputReference {
    return new DataAviServiceenginegroupUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcenterClusters {
}

export function dataAviServiceenginegroupVcenterClustersToTerraform(struct?: DataAviServiceenginegroupVcenterClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcenterClustersToHclTerraform(struct?: DataAviServiceenginegroupVcenterClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcenterClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcenterClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcenterClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_refs - computed: true, optional: false, required: false
  public get clusterRefs() {
    return this.getListAttribute('cluster_refs');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}

export class DataAviServiceenginegroupVcenterClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcenterClustersOutputReference {
    return new DataAviServiceenginegroupVcenterClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcenterDatastores {
}

export function dataAviServiceenginegroupVcenterDatastoresToTerraform(struct?: DataAviServiceenginegroupVcenterDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcenterDatastoresToHclTerraform(struct?: DataAviServiceenginegroupVcenterDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcenterDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcenterDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcenterDatastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // managed_object_id - computed: true, optional: false, required: false
  public get managedObjectId() {
    return this.getStringAttribute('managed_object_id');
  }
}

export class DataAviServiceenginegroupVcenterDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcenterDatastoresOutputReference {
    return new DataAviServiceenginegroupVcenterDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcenterHosts {
}

export function dataAviServiceenginegroupVcenterHostsToTerraform(struct?: DataAviServiceenginegroupVcenterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcenterHostsToHclTerraform(struct?: DataAviServiceenginegroupVcenterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcenterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcenterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcenterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_refs - computed: true, optional: false, required: false
  public get hostRefs() {
    return this.getListAttribute('host_refs');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}

export class DataAviServiceenginegroupVcenterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcenterHostsOutputReference {
    return new DataAviServiceenginegroupVcenterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcentersClusters {
}

export function dataAviServiceenginegroupVcentersClustersToTerraform(struct?: DataAviServiceenginegroupVcentersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcentersClustersToHclTerraform(struct?: DataAviServiceenginegroupVcentersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcentersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcentersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcentersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // override_vsphere_ha - computed: true, optional: false, required: false
  public get overrideVsphereHa() {
    return this.getStringAttribute('override_vsphere_ha');
  }

  // vmg_name - computed: true, optional: false, required: false
  public get vmgName() {
    return this.getStringAttribute('vmg_name');
  }
}

export class DataAviServiceenginegroupVcentersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcentersClustersOutputReference {
    return new DataAviServiceenginegroupVcentersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcentersNsxtClusters {
}

export function dataAviServiceenginegroupVcentersNsxtClustersToTerraform(struct?: DataAviServiceenginegroupVcentersNsxtClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcentersNsxtClustersToHclTerraform(struct?: DataAviServiceenginegroupVcentersNsxtClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcentersNsxtClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcentersNsxtClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcentersNsxtClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ids - computed: true, optional: false, required: false
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}

export class DataAviServiceenginegroupVcentersNsxtClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcentersNsxtClustersOutputReference {
    return new DataAviServiceenginegroupVcentersNsxtClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcentersNsxtDatastores {
}

export function dataAviServiceenginegroupVcentersNsxtDatastoresToTerraform(struct?: DataAviServiceenginegroupVcentersNsxtDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcentersNsxtDatastoresToHclTerraform(struct?: DataAviServiceenginegroupVcentersNsxtDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcentersNsxtDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcentersNsxtDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcentersNsxtDatastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ds_ids - computed: true, optional: false, required: false
  public get dsIds() {
    return this.getListAttribute('ds_ids');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}

export class DataAviServiceenginegroupVcentersNsxtDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcentersNsxtDatastoresOutputReference {
    return new DataAviServiceenginegroupVcentersNsxtDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcentersNsxtHosts {
}

export function dataAviServiceenginegroupVcentersNsxtHostsToTerraform(struct?: DataAviServiceenginegroupVcentersNsxtHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcentersNsxtHostsToHclTerraform(struct?: DataAviServiceenginegroupVcentersNsxtHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcentersNsxtHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcentersNsxtHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcentersNsxtHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_ids - computed: true, optional: false, required: false
  public get hostIds() {
    return this.getListAttribute('host_ids');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }
}

export class DataAviServiceenginegroupVcentersNsxtHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcentersNsxtHostsOutputReference {
    return new DataAviServiceenginegroupVcentersNsxtHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVcenters {
}

export function dataAviServiceenginegroupVcentersToTerraform(struct?: DataAviServiceenginegroupVcenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVcentersToHclTerraform(struct?: DataAviServiceenginegroupVcenters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVcentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVcenters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVcenters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataAviServiceenginegroupVcentersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // nsxt_clusters - computed: true, optional: false, required: false
  private _nsxtClusters = new DataAviServiceenginegroupVcentersNsxtClustersList(this, "nsxt_clusters", true);
  public get nsxtClusters() {
    return this._nsxtClusters;
  }

  // nsxt_datastores - computed: true, optional: false, required: false
  private _nsxtDatastores = new DataAviServiceenginegroupVcentersNsxtDatastoresList(this, "nsxt_datastores", true);
  public get nsxtDatastores() {
    return this._nsxtDatastores;
  }

  // nsxt_hosts - computed: true, optional: false, required: false
  private _nsxtHosts = new DataAviServiceenginegroupVcentersNsxtHostsList(this, "nsxt_hosts", true);
  public get nsxtHosts() {
    return this._nsxtHosts;
  }

  // vcenter_folder - computed: true, optional: false, required: false
  public get vcenterFolder() {
    return this.getStringAttribute('vcenter_folder');
  }

  // vcenter_ref - computed: true, optional: false, required: false
  public get vcenterRef() {
    return this.getStringAttribute('vcenter_ref');
  }
}

export class DataAviServiceenginegroupVcentersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVcentersOutputReference {
    return new DataAviServiceenginegroupVcentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVipAsgConfigurationZones {
}

export function dataAviServiceenginegroupVipAsgConfigurationZonesToTerraform(struct?: DataAviServiceenginegroupVipAsgConfigurationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVipAsgConfigurationZonesToHclTerraform(struct?: DataAviServiceenginegroupVipAsgConfigurationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVipAsgConfigurationZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVipAsgConfigurationZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVipAsgConfigurationZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // fip_capable - computed: true, optional: false, required: false
  public get fipCapable() {
    return this.getStringAttribute('fip_capable');
  }

  // subnet_uuid - computed: true, optional: false, required: false
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }
}

export class DataAviServiceenginegroupVipAsgConfigurationZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVipAsgConfigurationZonesOutputReference {
    return new DataAviServiceenginegroupVipAsgConfigurationZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVipAsgConfiguration {
}

export function dataAviServiceenginegroupVipAsgConfigurationToTerraform(struct?: DataAviServiceenginegroupVipAsgConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVipAsgConfigurationToHclTerraform(struct?: DataAviServiceenginegroupVipAsgConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVipAsgConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVipAsgConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVipAsgConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataAviServiceenginegroupVipAsgConfigurationZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
}

export class DataAviServiceenginegroupVipAsgConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVipAsgConfigurationOutputReference {
    return new DataAviServiceenginegroupVipAsgConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVipAsgPolicy {
}

export function dataAviServiceenginegroupVipAsgPolicyToTerraform(struct?: DataAviServiceenginegroupVipAsgPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVipAsgPolicyToHclTerraform(struct?: DataAviServiceenginegroupVipAsgPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVipAsgPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVipAsgPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVipAsgPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_cooldown - computed: true, optional: false, required: false
  public get dnsCooldown() {
    return this.getStringAttribute('dns_cooldown');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getStringAttribute('suspend');
  }
}

export class DataAviServiceenginegroupVipAsgPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVipAsgPolicyOutputReference {
    return new DataAviServiceenginegroupVipAsgPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVipAsg {
}

export function dataAviServiceenginegroupVipAsgToTerraform(struct?: DataAviServiceenginegroupVipAsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVipAsgToHclTerraform(struct?: DataAviServiceenginegroupVipAsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVipAsgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVipAsg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVipAsg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAviServiceenginegroupVipAsgConfigurationList(this, "configuration", true);
  public get configuration() {
    return this._configuration;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataAviServiceenginegroupVipAsgPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
}

export class DataAviServiceenginegroupVipAsgList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVipAsgOutputReference {
    return new DataAviServiceenginegroupVipAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviServiceenginegroupVssPlacement {
}

export function dataAviServiceenginegroupVssPlacementToTerraform(struct?: DataAviServiceenginegroupVssPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviServiceenginegroupVssPlacementToHclTerraform(struct?: DataAviServiceenginegroupVssPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviServiceenginegroupVssPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviServiceenginegroupVssPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviServiceenginegroupVssPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_nonaffinity - computed: true, optional: false, required: false
  public get coreNonaffinity() {
    return this.getStringAttribute('core_nonaffinity');
  }

  // num_subcores - computed: true, optional: false, required: false
  public get numSubcores() {
    return this.getStringAttribute('num_subcores');
  }
}

export class DataAviServiceenginegroupVssPlacementList extends cdktf.ComplexList {

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
  public get(index: number): DataAviServiceenginegroupVssPlacementOutputReference {
    return new DataAviServiceenginegroupVssPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup avi_serviceenginegroup}
*/
export class DataAviServiceenginegroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_serviceenginegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviServiceenginegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviServiceenginegroup to import
  * @param importFromId The id of the existing DataAviServiceenginegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviServiceenginegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_serviceenginegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/serviceenginegroup avi_serviceenginegroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviServiceenginegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviServiceenginegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_serviceenginegroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_networking - computed: true, optional: false, required: false
  public get acceleratedNetworking() {
    return this.getStringAttribute('accelerated_networking');
  }

  // active_standby - computed: true, optional: false, required: false
  public get activeStandby() {
    return this.getStringAttribute('active_standby');
  }

  // aggressive_failure_detection - computed: true, optional: false, required: false
  public get aggressiveFailureDetection() {
    return this.getStringAttribute('aggressive_failure_detection');
  }

  // algo - computed: true, optional: false, required: false
  public get algo() {
    return this.getStringAttribute('algo');
  }

  // allow_burst - computed: true, optional: false, required: false
  public get allowBurst() {
    return this.getStringAttribute('allow_burst');
  }

  // app_cache_percent - computed: true, optional: false, required: false
  public get appCachePercent() {
    return this.getStringAttribute('app_cache_percent');
  }

  // app_cache_threshold - computed: true, optional: false, required: false
  public get appCacheThreshold() {
    return this.getStringAttribute('app_cache_threshold');
  }

  // app_learning_memory_percent - computed: true, optional: false, required: false
  public get appLearningMemoryPercent() {
    return this.getStringAttribute('app_learning_memory_percent');
  }

  // archive_shm_limit - computed: true, optional: false, required: false
  public get archiveShmLimit() {
    return this.getStringAttribute('archive_shm_limit');
  }

  // async_ssl - computed: true, optional: false, required: false
  public get asyncSsl() {
    return this.getStringAttribute('async_ssl');
  }

  // async_ssl_threads - computed: true, optional: false, required: false
  public get asyncSslThreads() {
    return this.getStringAttribute('async_ssl_threads');
  }

  // auto_rebalance - computed: true, optional: false, required: false
  public get autoRebalance() {
    return this.getStringAttribute('auto_rebalance');
  }

  // auto_rebalance_capacity_per_se - computed: true, optional: false, required: false
  public get autoRebalanceCapacityPerSe() {
    return this.getNumberListAttribute('auto_rebalance_capacity_per_se');
  }

  // auto_rebalance_criteria - computed: true, optional: false, required: false
  public get autoRebalanceCriteria() {
    return this.getListAttribute('auto_rebalance_criteria');
  }

  // auto_rebalance_interval - computed: true, optional: false, required: false
  public get autoRebalanceInterval() {
    return this.getStringAttribute('auto_rebalance_interval');
  }

  // auto_redistribute_active_standby_load - computed: true, optional: false, required: false
  public get autoRedistributeActiveStandbyLoad() {
    return this.getStringAttribute('auto_redistribute_active_standby_load');
  }

  // availability_zone_refs - computed: true, optional: false, required: false
  public get availabilityZoneRefs() {
    return this.getListAttribute('availability_zone_refs');
  }

  // baremetal_dispatcher_handles_flows - computed: true, optional: false, required: false
  public get baremetalDispatcherHandlesFlows() {
    return this.getStringAttribute('baremetal_dispatcher_handles_flows');
  }

  // bgp_peer_monitor_failover_enabled - computed: true, optional: false, required: false
  public get bgpPeerMonitorFailoverEnabled() {
    return this.getStringAttribute('bgp_peer_monitor_failover_enabled');
  }

  // bgp_state_update_interval - computed: true, optional: false, required: false
  public get bgpStateUpdateInterval() {
    return this.getStringAttribute('bgp_state_update_interval');
  }

  // buffer_se - computed: true, optional: false, required: false
  public get bufferSe() {
    return this.getStringAttribute('buffer_se');
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // compress_ip_rules_for_each_ns_subnet - computed: true, optional: false, required: false
  public get compressIpRulesForEachNsSubnet() {
    return this.getStringAttribute('compress_ip_rules_for_each_ns_subnet');
  }

  // config_debugs_on_all_cores - computed: true, optional: false, required: false
  public get configDebugsOnAllCores() {
    return this.getStringAttribute('config_debugs_on_all_cores');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviServiceenginegroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // connection_memory_percentage - computed: true, optional: false, required: false
  public get connectionMemoryPercentage() {
    return this.getStringAttribute('connection_memory_percentage');
  }

  // core_shm_app_cache - computed: true, optional: false, required: false
  public get coreShmAppCache() {
    return this.getStringAttribute('core_shm_app_cache');
  }

  // core_shm_app_learning - computed: true, optional: false, required: false
  public get coreShmAppLearning() {
    return this.getStringAttribute('core_shm_app_learning');
  }

  // cpu_reserve - computed: true, optional: false, required: false
  public get cpuReserve() {
    return this.getStringAttribute('cpu_reserve');
  }

  // cpu_socket_affinity - computed: true, optional: false, required: false
  public get cpuSocketAffinity() {
    return this.getStringAttribute('cpu_socket_affinity');
  }

  // custom_securitygroups_data - computed: true, optional: false, required: false
  public get customSecuritygroupsData() {
    return this.getListAttribute('custom_securitygroups_data');
  }

  // custom_securitygroups_mgmt - computed: true, optional: false, required: false
  public get customSecuritygroupsMgmt() {
    return this.getListAttribute('custom_securitygroups_mgmt');
  }

  // custom_tag - computed: true, optional: false, required: false
  private _customTag = new DataAviServiceenginegroupCustomTagList(this, "custom_tag", false);
  public get customTag() {
    return this._customTag;
  }

  // data_network_id - computed: true, optional: false, required: false
  public get dataNetworkId() {
    return this.getStringAttribute('data_network_id');
  }

  // datascript_timeout - computed: true, optional: false, required: false
  public get datascriptTimeout() {
    return this.getStringAttribute('datascript_timeout');
  }

  // deactivate_ipv6_discovery - computed: true, optional: false, required: false
  public get deactivateIpv6Discovery() {
    return this.getStringAttribute('deactivate_ipv6_discovery');
  }

  // deactivate_kni_filtering_at_dispatcher - computed: true, optional: false, required: false
  public get deactivateKniFilteringAtDispatcher() {
    return this.getStringAttribute('deactivate_kni_filtering_at_dispatcher');
  }

  // dedicated_dispatcher_core - computed: true, optional: false, required: false
  public get dedicatedDispatcherCore() {
    return this.getStringAttribute('dedicated_dispatcher_core');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_avi_securitygroups - computed: true, optional: false, required: false
  public get disableAviSecuritygroups() {
    return this.getStringAttribute('disable_avi_securitygroups');
  }

  // disable_csum_offloads - computed: true, optional: false, required: false
  public get disableCsumOffloads() {
    return this.getStringAttribute('disable_csum_offloads');
  }

  // disable_flow_probes - computed: true, optional: false, required: false
  public get disableFlowProbes() {
    return this.getStringAttribute('disable_flow_probes');
  }

  // disable_gro - computed: true, optional: false, required: false
  public get disableGro() {
    return this.getStringAttribute('disable_gro');
  }

  // disable_se_memory_check - computed: true, optional: false, required: false
  public get disableSeMemoryCheck() {
    return this.getStringAttribute('disable_se_memory_check');
  }

  // disable_tso - computed: true, optional: false, required: false
  public get disableTso() {
    return this.getStringAttribute('disable_tso');
  }

  // disk_per_se - computed: true, optional: false, required: false
  public get diskPerSe() {
    return this.getStringAttribute('disk_per_se');
  }

  // distribute_load_active_standby - computed: true, optional: false, required: false
  public get distributeLoadActiveStandby() {
    return this.getStringAttribute('distribute_load_active_standby');
  }

  // distribute_queues - computed: true, optional: false, required: false
  public get distributeQueues() {
    return this.getStringAttribute('distribute_queues');
  }

  // distribute_vnics - computed: true, optional: false, required: false
  public get distributeVnics() {
    return this.getStringAttribute('distribute_vnics');
  }

  // downstream_send_timeout - computed: true, optional: false, required: false
  public get downstreamSendTimeout() {
    return this.getStringAttribute('downstream_send_timeout');
  }

  // dp_aggressive_deq_interval_msec - computed: true, optional: false, required: false
  public get dpAggressiveDeqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_deq_interval_msec');
  }

  // dp_aggressive_enq_interval_msec - computed: true, optional: false, required: false
  public get dpAggressiveEnqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_enq_interval_msec');
  }

  // dp_aggressive_hb_frequency - computed: true, optional: false, required: false
  public get dpAggressiveHbFrequency() {
    return this.getStringAttribute('dp_aggressive_hb_frequency');
  }

  // dp_aggressive_hb_timeout_count - computed: true, optional: false, required: false
  public get dpAggressiveHbTimeoutCount() {
    return this.getStringAttribute('dp_aggressive_hb_timeout_count');
  }

  // dp_deq_interval_msec - computed: true, optional: false, required: false
  public get dpDeqIntervalMsec() {
    return this.getStringAttribute('dp_deq_interval_msec');
  }

  // dp_enq_interval_msec - computed: true, optional: false, required: false
  public get dpEnqIntervalMsec() {
    return this.getStringAttribute('dp_enq_interval_msec');
  }

  // dp_hb_frequency - computed: true, optional: false, required: false
  public get dpHbFrequency() {
    return this.getStringAttribute('dp_hb_frequency');
  }

  // dp_hb_timeout_count - computed: true, optional: false, required: false
  public get dpHbTimeoutCount() {
    return this.getStringAttribute('dp_hb_timeout_count');
  }

  // dpdk_gro_timeout_interval - computed: true, optional: false, required: false
  public get dpdkGroTimeoutInterval() {
    return this.getStringAttribute('dpdk_gro_timeout_interval');
  }

  // enable_gratarp_permanent - computed: true, optional: false, required: false
  public get enableGratarpPermanent() {
    return this.getStringAttribute('enable_gratarp_permanent');
  }

  // enable_hsm_log - computed: true, optional: false, required: false
  public get enableHsmLog() {
    return this.getStringAttribute('enable_hsm_log');
  }

  // enable_hsm_priming - computed: true, optional: false, required: false
  public get enableHsmPriming() {
    return this.getStringAttribute('enable_hsm_priming');
  }

  // enable_multi_lb - computed: true, optional: false, required: false
  public get enableMultiLb() {
    return this.getStringAttribute('enable_multi_lb');
  }

  // enable_pcap_tx_ring - computed: true, optional: false, required: false
  public get enablePcapTxRing() {
    return this.getStringAttribute('enable_pcap_tx_ring');
  }

  // ephemeral_portrange_end - computed: true, optional: false, required: false
  public get ephemeralPortrangeEnd() {
    return this.getStringAttribute('ephemeral_portrange_end');
  }

  // ephemeral_portrange_start - computed: true, optional: false, required: false
  public get ephemeralPortrangeStart() {
    return this.getStringAttribute('ephemeral_portrange_start');
  }

  // extra_config_multiplier - computed: true, optional: false, required: false
  public get extraConfigMultiplier() {
    return this.getStringAttribute('extra_config_multiplier');
  }

  // extra_shared_config_memory - computed: true, optional: false, required: false
  public get extraSharedConfigMemory() {
    return this.getStringAttribute('extra_shared_config_memory');
  }

  // flow_table_new_syn_max_entries - computed: true, optional: false, required: false
  public get flowTableNewSynMaxEntries() {
    return this.getStringAttribute('flow_table_new_syn_max_entries');
  }

  // free_list_size - computed: true, optional: false, required: false
  public get freeListSize() {
    return this.getStringAttribute('free_list_size');
  }

  // gcp_config - computed: true, optional: false, required: false
  private _gcpConfig = new DataAviServiceenginegroupGcpConfigList(this, "gcp_config", true);
  public get gcpConfig() {
    return this._gcpConfig;
  }

  // gratarp_permanent_periodicity - computed: true, optional: false, required: false
  public get gratarpPermanentPeriodicity() {
    return this.getStringAttribute('gratarp_permanent_periodicity');
  }

  // grpc_channel_connect_timeout - computed: true, optional: false, required: false
  public get grpcChannelConnectTimeout() {
    return this.getStringAttribute('grpc_channel_connect_timeout');
  }

  // gve_enabled - computed: true, optional: false, required: false
  public get gveEnabled() {
    return this.getStringAttribute('gve_enabled');
  }

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }

  // handle_per_pkt_attack - computed: true, optional: false, required: false
  public get handlePerPktAttack() {
    return this.getStringAttribute('handle_per_pkt_attack');
  }

  // hardwaresecuritymodulegroup_ref - computed: true, optional: false, required: false
  public get hardwaresecuritymodulegroupRef() {
    return this.getStringAttribute('hardwaresecuritymodulegroup_ref');
  }

  // heap_minimum_config_memory - computed: true, optional: false, required: false
  public get heapMinimumConfigMemory() {
    return this.getStringAttribute('heap_minimum_config_memory');
  }

  // hm_on_standby - computed: true, optional: false, required: false
  public get hmOnStandby() {
    return this.getStringAttribute('hm_on_standby');
  }

  // host_attribute_key - computed: true, optional: false, required: false
  public get hostAttributeKey() {
    return this.getStringAttribute('host_attribute_key');
  }

  // host_attribute_value - computed: true, optional: false, required: false
  public get hostAttributeValue() {
    return this.getStringAttribute('host_attribute_value');
  }

  // host_gateway_monitor - computed: true, optional: false, required: false
  public get hostGatewayMonitor() {
    return this.getStringAttribute('host_gateway_monitor');
  }

  // http_rum_console_log - computed: true, optional: false, required: false
  public get httpRumConsoleLog() {
    return this.getStringAttribute('http_rum_console_log');
  }

  // http_rum_min_content_length - computed: true, optional: false, required: false
  public get httpRumMinContentLength() {
    return this.getStringAttribute('http_rum_min_content_length');
  }

  // hybrid_rss_mode - computed: true, optional: false, required: false
  public get hybridRssMode() {
    return this.getStringAttribute('hybrid_rss_mode');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
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

  // ignore_docker_mac_change - computed: true, optional: false, required: false
  public get ignoreDockerMacChange() {
    return this.getStringAttribute('ignore_docker_mac_change');
  }

  // ignore_rtt_threshold - computed: true, optional: false, required: false
  public get ignoreRttThreshold() {
    return this.getStringAttribute('ignore_rtt_threshold');
  }

  // ingress_access_data - computed: true, optional: false, required: false
  public get ingressAccessData() {
    return this.getStringAttribute('ingress_access_data');
  }

  // ingress_access_mgmt - computed: true, optional: false, required: false
  public get ingressAccessMgmt() {
    return this.getStringAttribute('ingress_access_mgmt');
  }

  // instance_flavor - computed: true, optional: false, required: false
  public get instanceFlavor() {
    return this.getStringAttribute('instance_flavor');
  }

  // instance_flavor_info - computed: true, optional: false, required: false
  private _instanceFlavorInfo = new DataAviServiceenginegroupInstanceFlavorInfoList(this, "instance_flavor_info", true);
  public get instanceFlavorInfo() {
    return this._instanceFlavorInfo;
  }

  // iptables - computed: true, optional: false, required: false
  private _iptables = new DataAviServiceenginegroupIptablesList(this, "iptables", false);
  public get iptables() {
    return this._iptables;
  }

  // kni_allowed_server_ports - computed: true, optional: false, required: false
  private _kniAllowedServerPorts = new DataAviServiceenginegroupKniAllowedServerPortsList(this, "kni_allowed_server_ports", false);
  public get kniAllowedServerPorts() {
    return this._kniAllowedServerPorts;
  }

  // l7_conns_per_core - computed: true, optional: false, required: false
  public get l7ConnsPerCore() {
    return this.getStringAttribute('l7_conns_per_core');
  }

  // l7_resvd_listen_conns_per_core - computed: true, optional: false, required: false
  public get l7ResvdListenConnsPerCore() {
    return this.getStringAttribute('l7_resvd_listen_conns_per_core');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataAviServiceenginegroupLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // lbaction_num_requests_to_dispatch - computed: true, optional: false, required: false
  public get lbactionNumRequestsToDispatch() {
    return this.getStringAttribute('lbaction_num_requests_to_dispatch');
  }

  // lbaction_rq_per_request_max_retries - computed: true, optional: false, required: false
  public get lbactionRqPerRequestMaxRetries() {
    return this.getStringAttribute('lbaction_rq_per_request_max_retries');
  }

  // least_load_core_selection - computed: true, optional: false, required: false
  public get leastLoadCoreSelection() {
    return this.getStringAttribute('least_load_core_selection');
  }

  // license_tier - computed: true, optional: false, required: false
  public get licenseTier() {
    return this.getStringAttribute('license_tier');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // log_agent_compress_logs - computed: true, optional: false, required: false
  public get logAgentCompressLogs() {
    return this.getStringAttribute('log_agent_compress_logs');
  }

  // log_agent_debug_enabled - computed: true, optional: false, required: false
  public get logAgentDebugEnabled() {
    return this.getStringAttribute('log_agent_debug_enabled');
  }

  // log_agent_file_sz_appl - computed: true, optional: false, required: false
  public get logAgentFileSzAppl() {
    return this.getStringAttribute('log_agent_file_sz_appl');
  }

  // log_agent_file_sz_conn - computed: true, optional: false, required: false
  public get logAgentFileSzConn() {
    return this.getStringAttribute('log_agent_file_sz_conn');
  }

  // log_agent_file_sz_debug - computed: true, optional: false, required: false
  public get logAgentFileSzDebug() {
    return this.getStringAttribute('log_agent_file_sz_debug');
  }

  // log_agent_file_sz_event - computed: true, optional: false, required: false
  public get logAgentFileSzEvent() {
    return this.getStringAttribute('log_agent_file_sz_event');
  }

  // log_agent_log_storage_min_sz - computed: true, optional: false, required: false
  public get logAgentLogStorageMinSz() {
    return this.getStringAttribute('log_agent_log_storage_min_sz');
  }

  // log_agent_max_concurrent_rsync - computed: true, optional: false, required: false
  public get logAgentMaxConcurrentRsync() {
    return this.getStringAttribute('log_agent_max_concurrent_rsync');
  }

  // log_agent_max_storage_excess_percent - computed: true, optional: false, required: false
  public get logAgentMaxStorageExcessPercent() {
    return this.getStringAttribute('log_agent_max_storage_excess_percent');
  }

  // log_agent_max_storage_ignore_percent - computed: true, optional: false, required: false
  public get logAgentMaxStorageIgnorePercent() {
    return this.getStringAttribute('log_agent_max_storage_ignore_percent');
  }

  // log_agent_min_storage_per_vs - computed: true, optional: false, required: false
  public get logAgentMinStoragePerVs() {
    return this.getStringAttribute('log_agent_min_storage_per_vs');
  }

  // log_agent_sleep_interval - computed: true, optional: false, required: false
  public get logAgentSleepInterval() {
    return this.getStringAttribute('log_agent_sleep_interval');
  }

  // log_agent_trace_enabled - computed: true, optional: false, required: false
  public get logAgentTraceEnabled() {
    return this.getStringAttribute('log_agent_trace_enabled');
  }

  // log_agent_unknown_vs_timer - computed: true, optional: false, required: false
  public get logAgentUnknownVsTimer() {
    return this.getStringAttribute('log_agent_unknown_vs_timer');
  }

  // log_disksz - computed: true, optional: false, required: false
  public get logDisksz() {
    return this.getStringAttribute('log_disksz');
  }

  // log_malloc_failure - computed: true, optional: false, required: false
  public get logMallocFailure() {
    return this.getStringAttribute('log_malloc_failure');
  }

  // log_message_max_file_list_size - computed: true, optional: false, required: false
  public get logMessageMaxFileListSize() {
    return this.getStringAttribute('log_message_max_file_list_size');
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviServiceenginegroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // max_concurrent_external_hm - computed: true, optional: false, required: false
  public get maxConcurrentExternalHm() {
    return this.getStringAttribute('max_concurrent_external_hm');
  }

  // max_cpu_usage - computed: true, optional: false, required: false
  public get maxCpuUsage() {
    return this.getStringAttribute('max_cpu_usage');
  }

  // max_memory_per_mempool - computed: true, optional: false, required: false
  public get maxMemoryPerMempool() {
    return this.getStringAttribute('max_memory_per_mempool');
  }

  // max_num_http_sessions_to_store - computed: true, optional: false, required: false
  public get maxNumHttpSessionsToStore() {
    return this.getStringAttribute('max_num_http_sessions_to_store');
  }

  // max_num_se_dps - computed: true, optional: false, required: false
  public get maxNumSeDps() {
    return this.getStringAttribute('max_num_se_dps');
  }

  // max_public_ips_per_lb - computed: true, optional: false, required: false
  public get maxPublicIpsPerLb() {
    return this.getStringAttribute('max_public_ips_per_lb');
  }

  // max_queues_per_vnic - computed: true, optional: false, required: false
  public get maxQueuesPerVnic() {
    return this.getStringAttribute('max_queues_per_vnic');
  }

  // max_rules_per_lb - computed: true, optional: false, required: false
  public get maxRulesPerLb() {
    return this.getStringAttribute('max_rules_per_lb');
  }

  // max_scaleout_per_vs - computed: true, optional: false, required: false
  public get maxScaleoutPerVs() {
    return this.getStringAttribute('max_scaleout_per_vs');
  }

  // max_se - computed: true, optional: false, required: false
  public get maxSe() {
    return this.getStringAttribute('max_se');
  }

  // max_skb_frags - computed: true, optional: false, required: false
  public get maxSkbFrags() {
    return this.getStringAttribute('max_skb_frags');
  }

  // max_vs_per_se - computed: true, optional: false, required: false
  public get maxVsPerSe() {
    return this.getStringAttribute('max_vs_per_se');
  }

  // mem_reserve - computed: true, optional: false, required: false
  public get memReserve() {
    return this.getStringAttribute('mem_reserve');
  }

  // memory_for_config_update - computed: true, optional: false, required: false
  public get memoryForConfigUpdate() {
    return this.getStringAttribute('memory_for_config_update');
  }

  // memory_per_se - computed: true, optional: false, required: false
  public get memoryPerSe() {
    return this.getStringAttribute('memory_per_se');
  }

  // metrics_collection_mode - computed: true, optional: false, required: false
  public get metricsCollectionMode() {
    return this.getStringAttribute('metrics_collection_mode');
  }

  // mgmt_network_ref - computed: true, optional: false, required: false
  public get mgmtNetworkRef() {
    return this.getStringAttribute('mgmt_network_ref');
  }

  // mgmt_subnet - computed: true, optional: false, required: false
  private _mgmtSubnet = new DataAviServiceenginegroupMgmtSubnetList(this, "mgmt_subnet", true);
  public get mgmtSubnet() {
    return this._mgmtSubnet;
  }

  // min_cpu_usage - computed: true, optional: false, required: false
  public get minCpuUsage() {
    return this.getStringAttribute('min_cpu_usage');
  }

  // min_scaleout_per_vs - computed: true, optional: false, required: false
  public get minScaleoutPerVs() {
    return this.getStringAttribute('min_scaleout_per_vs');
  }

  // min_se - computed: true, optional: false, required: false
  public get minSe() {
    return this.getStringAttribute('min_se');
  }

  // minimum_connection_memory - computed: true, optional: false, required: false
  public get minimumConnectionMemory() {
    return this.getStringAttribute('minimum_connection_memory');
  }

  // multicast_enable - computed: true, optional: false, required: false
  public get multicastEnable() {
    return this.getStringAttribute('multicast_enable');
  }

  // n_log_streaming_threads - computed: true, optional: false, required: false
  public get nLogStreamingThreads() {
    return this.getStringAttribute('n_log_streaming_threads');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netlink_poller_threads - computed: true, optional: false, required: false
  public get netlinkPollerThreads() {
    return this.getStringAttribute('netlink_poller_threads');
  }

  // netlink_sock_buf_size - computed: true, optional: false, required: false
  public get netlinkSockBufSize() {
    return this.getStringAttribute('netlink_sock_buf_size');
  }

  // ngx_free_connection_stack - computed: true, optional: false, required: false
  public get ngxFreeConnectionStack() {
    return this.getStringAttribute('ngx_free_connection_stack');
  }

  // non_significant_log_throttle - computed: true, optional: false, required: false
  public get nonSignificantLogThrottle() {
    return this.getStringAttribute('non_significant_log_throttle');
  }

  // ns_helper_deq_interval_msec - computed: true, optional: false, required: false
  public get nsHelperDeqIntervalMsec() {
    return this.getStringAttribute('ns_helper_deq_interval_msec');
  }

  // ntp_sync_fail_event - computed: true, optional: false, required: false
  public get ntpSyncFailEvent() {
    return this.getStringAttribute('ntp_sync_fail_event');
  }

  // ntp_sync_status_interval - computed: true, optional: false, required: false
  public get ntpSyncStatusInterval() {
    return this.getStringAttribute('ntp_sync_status_interval');
  }

  // num_dispatcher_cores - computed: true, optional: false, required: false
  public get numDispatcherCores() {
    return this.getStringAttribute('num_dispatcher_cores');
  }

  // num_dispatcher_queues - computed: true, optional: false, required: false
  public get numDispatcherQueues() {
    return this.getStringAttribute('num_dispatcher_queues');
  }

  // num_flow_cores_sum_changes_to_ignore - computed: true, optional: false, required: false
  public get numFlowCoresSumChangesToIgnore() {
    return this.getStringAttribute('num_flow_cores_sum_changes_to_ignore');
  }

  // objsync_config - computed: true, optional: false, required: false
  private _objsyncConfig = new DataAviServiceenginegroupObjsyncConfigList(this, "objsync_config", true);
  public get objsyncConfig() {
    return this._objsyncConfig;
  }

  // objsync_port - computed: true, optional: false, required: false
  public get objsyncPort() {
    return this.getStringAttribute('objsync_port');
  }

  // openstack_availability_zones - computed: true, optional: false, required: false
  public get openstackAvailabilityZones() {
    return this.getListAttribute('openstack_availability_zones');
  }

  // openstack_mgmt_network_name - computed: true, optional: false, required: false
  public get openstackMgmtNetworkName() {
    return this.getStringAttribute('openstack_mgmt_network_name');
  }

  // openstack_mgmt_network_uuid - computed: true, optional: false, required: false
  public get openstackMgmtNetworkUuid() {
    return this.getStringAttribute('openstack_mgmt_network_uuid');
  }

  // os_reserved_memory - computed: true, optional: false, required: false
  public get osReservedMemory() {
    return this.getStringAttribute('os_reserved_memory');
  }

  // path_mtu_discovery_v4 - computed: true, optional: false, required: false
  public get pathMtuDiscoveryV4() {
    return this.getStringAttribute('path_mtu_discovery_v4');
  }

  // path_mtu_discovery_v6 - computed: true, optional: false, required: false
  public get pathMtuDiscoveryV6() {
    return this.getStringAttribute('path_mtu_discovery_v6');
  }

  // pcap_tx_mode - computed: true, optional: false, required: false
  public get pcapTxMode() {
    return this.getStringAttribute('pcap_tx_mode');
  }

  // pcap_tx_ring_rd_balancing_factor - computed: true, optional: false, required: false
  public get pcapTxRingRdBalancingFactor() {
    return this.getStringAttribute('pcap_tx_ring_rd_balancing_factor');
  }

  // per_app - computed: true, optional: false, required: false
  public get perApp() {
    return this.getStringAttribute('per_app');
  }

  // per_vs_admission_control - computed: true, optional: false, required: false
  public get perVsAdmissionControl() {
    return this.getStringAttribute('per_vs_admission_control');
  }

  // placement_mode - computed: true, optional: false, required: false
  public get placementMode() {
    return this.getStringAttribute('placement_mode');
  }

  // realtime_se_metrics - computed: true, optional: false, required: false
  private _realtimeSeMetrics = new DataAviServiceenginegroupRealtimeSeMetricsList(this, "realtime_se_metrics", true);
  public get realtimeSeMetrics() {
    return this._realtimeSeMetrics;
  }

  // reboot_on_panic - computed: true, optional: false, required: false
  public get rebootOnPanic() {
    return this.getStringAttribute('reboot_on_panic');
  }

  // replay_vrf_routes_interval - computed: true, optional: false, required: false
  public get replayVrfRoutesInterval() {
    return this.getStringAttribute('replay_vrf_routes_interval');
  }

  // resync_time_interval - computed: true, optional: false, required: false
  public get resyncTimeInterval() {
    return this.getStringAttribute('resync_time_interval');
  }

  // sdb_flush_interval - computed: true, optional: false, required: false
  public get sdbFlushInterval() {
    return this.getStringAttribute('sdb_flush_interval');
  }

  // sdb_key_timeout - computed: true, optional: false, required: false
  public get sdbKeyTimeout() {
    return this.getStringAttribute('sdb_key_timeout');
  }

  // sdb_pipeline_size - computed: true, optional: false, required: false
  public get sdbPipelineSize() {
    return this.getStringAttribute('sdb_pipeline_size');
  }

  // sdb_scan_count - computed: true, optional: false, required: false
  public get sdbScanCount() {
    return this.getStringAttribute('sdb_scan_count');
  }

  // se_bandwidth_type - computed: true, optional: false, required: false
  public get seBandwidthType() {
    return this.getStringAttribute('se_bandwidth_type');
  }

  // se_debug_trace_sz - computed: true, optional: false, required: false
  public get seDebugTraceSz() {
    return this.getStringAttribute('se_debug_trace_sz');
  }

  // se_delayed_flow_delete - computed: true, optional: false, required: false
  public get seDelayedFlowDelete() {
    return this.getStringAttribute('se_delayed_flow_delete');
  }

  // se_deprovision_delay - computed: true, optional: false, required: false
  public get seDeprovisionDelay() {
    return this.getStringAttribute('se_deprovision_delay');
  }

  // se_dos_profile - computed: true, optional: false, required: false
  private _seDosProfile = new DataAviServiceenginegroupSeDosProfileList(this, "se_dos_profile", true);
  public get seDosProfile() {
    return this._seDosProfile;
  }

  // se_dp_hm_drops - computed: true, optional: false, required: false
  public get seDpHmDrops() {
    return this.getStringAttribute('se_dp_hm_drops');
  }

  // se_dp_if_state_poll_interval - computed: true, optional: false, required: false
  public get seDpIfStatePollInterval() {
    return this.getStringAttribute('se_dp_if_state_poll_interval');
  }

  // se_dp_isolation - computed: true, optional: false, required: false
  public get seDpIsolation() {
    return this.getStringAttribute('se_dp_isolation');
  }

  // se_dp_isolation_num_non_dp_cpus - computed: true, optional: false, required: false
  public get seDpIsolationNumNonDpCpus() {
    return this.getStringAttribute('se_dp_isolation_num_non_dp_cpus');
  }

  // se_dp_log_nf_enqueue_percent - computed: true, optional: false, required: false
  public get seDpLogNfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_nf_enqueue_percent');
  }

  // se_dp_log_udf_enqueue_percent - computed: true, optional: false, required: false
  public get seDpLogUdfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_udf_enqueue_percent');
  }

  // se_dp_max_hb_version - computed: true, optional: false, required: false
  public get seDpMaxHbVersion() {
    return this.getStringAttribute('se_dp_max_hb_version');
  }

  // se_dp_vnic_queue_stall_event_sleep - computed: true, optional: false, required: false
  public get seDpVnicQueueStallEventSleep() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_event_sleep');
  }

  // se_dp_vnic_queue_stall_threshold - computed: true, optional: false, required: false
  public get seDpVnicQueueStallThreshold() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_threshold');
  }

  // se_dp_vnic_queue_stall_timeout - computed: true, optional: false, required: false
  public get seDpVnicQueueStallTimeout() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_timeout');
  }

  // se_dp_vnic_restart_on_queue_stall_count - computed: true, optional: false, required: false
  public get seDpVnicRestartOnQueueStallCount() {
    return this.getStringAttribute('se_dp_vnic_restart_on_queue_stall_count');
  }

  // se_dp_vnic_stall_se_restart_window - computed: true, optional: false, required: false
  public get seDpVnicStallSeRestartWindow() {
    return this.getStringAttribute('se_dp_vnic_stall_se_restart_window');
  }

  // se_dpdk_pmd - computed: true, optional: false, required: false
  public get seDpdkPmd() {
    return this.getStringAttribute('se_dpdk_pmd');
  }

  // se_dump_core_on_assert - computed: true, optional: false, required: false
  public get seDumpCoreOnAssert() {
    return this.getStringAttribute('se_dump_core_on_assert');
  }

  // se_emulated_cores - computed: true, optional: false, required: false
  public get seEmulatedCores() {
    return this.getStringAttribute('se_emulated_cores');
  }

  // se_flow_probe_retries - computed: true, optional: false, required: false
  public get seFlowProbeRetries() {
    return this.getStringAttribute('se_flow_probe_retries');
  }

  // se_flow_probe_retry_timer - computed: true, optional: false, required: false
  public get seFlowProbeRetryTimer() {
    return this.getStringAttribute('se_flow_probe_retry_timer');
  }

  // se_group_analytics_policy - computed: true, optional: false, required: false
  private _seGroupAnalyticsPolicy = new DataAviServiceenginegroupSeGroupAnalyticsPolicyList(this, "se_group_analytics_policy", true);
  public get seGroupAnalyticsPolicy() {
    return this._seGroupAnalyticsPolicy;
  }

  // se_hyperthreaded_mode - computed: true, optional: false, required: false
  public get seHyperthreadedMode() {
    return this.getStringAttribute('se_hyperthreaded_mode');
  }

  // se_ip_encap_ipc - computed: true, optional: false, required: false
  public get seIpEncapIpc() {
    return this.getStringAttribute('se_ip_encap_ipc');
  }

  // se_kni_burst_factor - computed: true, optional: false, required: false
  public get seKniBurstFactor() {
    return this.getStringAttribute('se_kni_burst_factor');
  }

  // se_l3_encap_ipc - computed: true, optional: false, required: false
  public get seL3EncapIpc() {
    return this.getStringAttribute('se_l3_encap_ipc');
  }

  // se_log_buffer_app_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferAppBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_app_blocking_dequeue');
  }

  // se_log_buffer_conn_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferConnBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_conn_blocking_dequeue');
  }

  // se_log_buffer_events_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferEventsBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_events_blocking_dequeue');
  }

  // se_lro - computed: true, optional: false, required: false
  public get seLro() {
    return this.getStringAttribute('se_lro');
  }

  // se_mp_ring_retry_count - computed: true, optional: false, required: false
  public get seMpRingRetryCount() {
    return this.getStringAttribute('se_mp_ring_retry_count');
  }

  // se_mtu - computed: true, optional: false, required: false
  public get seMtu() {
    return this.getStringAttribute('se_mtu');
  }

  // se_name_prefix - computed: true, optional: false, required: false
  public get seNamePrefix() {
    return this.getStringAttribute('se_name_prefix');
  }

  // se_packet_buffer_max - computed: true, optional: false, required: false
  public get sePacketBufferMax() {
    return this.getStringAttribute('se_packet_buffer_max');
  }

  // se_pcap_lookahead - computed: true, optional: false, required: false
  public get sePcapLookahead() {
    return this.getStringAttribute('se_pcap_lookahead');
  }

  // se_pcap_pkt_count - computed: true, optional: false, required: false
  public get sePcapPktCount() {
    return this.getStringAttribute('se_pcap_pkt_count');
  }

  // se_pcap_pkt_sz - computed: true, optional: false, required: false
  public get sePcapPktSz() {
    return this.getStringAttribute('se_pcap_pkt_sz');
  }

  // se_pcap_qdisc_bypass - computed: true, optional: false, required: false
  public get sePcapQdiscBypass() {
    return this.getStringAttribute('se_pcap_qdisc_bypass');
  }

  // se_pcap_reinit_frequency - computed: true, optional: false, required: false
  public get sePcapReinitFrequency() {
    return this.getStringAttribute('se_pcap_reinit_frequency');
  }

  // se_pcap_reinit_threshold - computed: true, optional: false, required: false
  public get sePcapReinitThreshold() {
    return this.getStringAttribute('se_pcap_reinit_threshold');
  }

  // se_probe_port - computed: true, optional: false, required: false
  public get seProbePort() {
    return this.getStringAttribute('se_probe_port');
  }

  // se_rl_prop - computed: true, optional: false, required: false
  private _seRlProp = new DataAviServiceenginegroupSeRlPropList(this, "se_rl_prop", true);
  public get seRlProp() {
    return this._seRlProp;
  }

  // se_rum_sampling_nav_interval - computed: true, optional: false, required: false
  public get seRumSamplingNavInterval() {
    return this.getStringAttribute('se_rum_sampling_nav_interval');
  }

  // se_rum_sampling_nav_percent - computed: true, optional: false, required: false
  public get seRumSamplingNavPercent() {
    return this.getStringAttribute('se_rum_sampling_nav_percent');
  }

  // se_rum_sampling_res_interval - computed: true, optional: false, required: false
  public get seRumSamplingResInterval() {
    return this.getStringAttribute('se_rum_sampling_res_interval');
  }

  // se_rum_sampling_res_percent - computed: true, optional: false, required: false
  public get seRumSamplingResPercent() {
    return this.getStringAttribute('se_rum_sampling_res_percent');
  }

  // se_sb_dedicated_core - computed: true, optional: false, required: false
  public get seSbDedicatedCore() {
    return this.getStringAttribute('se_sb_dedicated_core');
  }

  // se_sb_threads - computed: true, optional: false, required: false
  public get seSbThreads() {
    return this.getStringAttribute('se_sb_threads');
  }

  // se_thread_multiplier - computed: true, optional: false, required: false
  public get seThreadMultiplier() {
    return this.getStringAttribute('se_thread_multiplier');
  }

  // se_time_tracker_props - computed: true, optional: false, required: false
  private _seTimeTrackerProps = new DataAviServiceenginegroupSeTimeTrackerPropsList(this, "se_time_tracker_props", true);
  public get seTimeTrackerProps() {
    return this._seTimeTrackerProps;
  }

  // se_tracert_port_range - computed: true, optional: false, required: false
  private _seTracertPortRange = new DataAviServiceenginegroupSeTracertPortRangeList(this, "se_tracert_port_range", true);
  public get seTracertPortRange() {
    return this._seTracertPortRange;
  }

  // se_tunnel_mode - computed: true, optional: false, required: false
  public get seTunnelMode() {
    return this.getStringAttribute('se_tunnel_mode');
  }

  // se_tunnel_udp_port - computed: true, optional: false, required: false
  public get seTunnelUdpPort() {
    return this.getStringAttribute('se_tunnel_udp_port');
  }

  // se_tx_batch_size - computed: true, optional: false, required: false
  public get seTxBatchSize() {
    return this.getStringAttribute('se_tx_batch_size');
  }

  // se_txq_threshold - computed: true, optional: false, required: false
  public get seTxqThreshold() {
    return this.getStringAttribute('se_txq_threshold');
  }

  // se_udp_encap_ipc - computed: true, optional: false, required: false
  public get seUdpEncapIpc() {
    return this.getStringAttribute('se_udp_encap_ipc');
  }

  // se_use_dpdk - computed: true, optional: false, required: false
  public get seUseDpdk() {
    return this.getStringAttribute('se_use_dpdk');
  }

  // se_vnic_tx_sw_queue_flush_frequency - computed: true, optional: false, required: false
  public get seVnicTxSwQueueFlushFrequency() {
    return this.getStringAttribute('se_vnic_tx_sw_queue_flush_frequency');
  }

  // se_vnic_tx_sw_queue_size - computed: true, optional: false, required: false
  public get seVnicTxSwQueueSize() {
    return this.getStringAttribute('se_vnic_tx_sw_queue_size');
  }

  // se_vs_hb_max_pkts_in_batch - computed: true, optional: false, required: false
  public get seVsHbMaxPktsInBatch() {
    return this.getStringAttribute('se_vs_hb_max_pkts_in_batch');
  }

  // se_vs_hb_max_vs_in_pkt - computed: true, optional: false, required: false
  public get seVsHbMaxVsInPkt() {
    return this.getStringAttribute('se_vs_hb_max_vs_in_pkt');
  }

  // self_se_election - computed: true, optional: false, required: false
  public get selfSeElection() {
    return this.getStringAttribute('self_se_election');
  }

  // send_se_ready_timeout - computed: true, optional: false, required: false
  public get sendSeReadyTimeout() {
    return this.getStringAttribute('send_se_ready_timeout');
  }

  // service_ip6_subnets - computed: true, optional: false, required: false
  private _serviceIp6Subnets = new DataAviServiceenginegroupServiceIp6SubnetsList(this, "service_ip6_subnets", false);
  public get serviceIp6Subnets() {
    return this._serviceIp6Subnets;
  }

  // service_ip_subnets - computed: true, optional: false, required: false
  private _serviceIpSubnets = new DataAviServiceenginegroupServiceIpSubnetsList(this, "service_ip_subnets", false);
  public get serviceIpSubnets() {
    return this._serviceIpSubnets;
  }

  // shm_minimum_config_memory - computed: true, optional: false, required: false
  public get shmMinimumConfigMemory() {
    return this.getStringAttribute('shm_minimum_config_memory');
  }

  // significant_log_throttle - computed: true, optional: false, required: false
  public get significantLogThrottle() {
    return this.getStringAttribute('significant_log_throttle');
  }

  // ssl_preprocess_sni_hostname - computed: true, optional: false, required: false
  public get sslPreprocessSniHostname() {
    return this.getStringAttribute('ssl_preprocess_sni_hostname');
  }

  // ssl_sess_cache_per_vs - computed: true, optional: false, required: false
  public get sslSessCachePerVs() {
    return this.getStringAttribute('ssl_sess_cache_per_vs');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // transient_shared_memory_max - computed: true, optional: false, required: false
  public get transientSharedMemoryMax() {
    return this.getStringAttribute('transient_shared_memory_max');
  }

  // udf_log_throttle - computed: true, optional: false, required: false
  public get udfLogThrottle() {
    return this.getStringAttribute('udf_log_throttle');
  }

  // upstream_connect_timeout - computed: true, optional: false, required: false
  public get upstreamConnectTimeout() {
    return this.getStringAttribute('upstream_connect_timeout');
  }

  // upstream_connpool_enable - computed: true, optional: false, required: false
  public get upstreamConnpoolEnable() {
    return this.getStringAttribute('upstream_connpool_enable');
  }

  // upstream_read_timeout - computed: true, optional: false, required: false
  public get upstreamReadTimeout() {
    return this.getStringAttribute('upstream_read_timeout');
  }

  // upstream_send_timeout - computed: true, optional: false, required: false
  public get upstreamSendTimeout() {
    return this.getStringAttribute('upstream_send_timeout');
  }

  // use_dp_util_for_scaleout - computed: true, optional: false, required: false
  public get useDpUtilForScaleout() {
    return this.getStringAttribute('use_dp_util_for_scaleout');
  }

  // use_hyperthreaded_cores - computed: true, optional: false, required: false
  public get useHyperthreadedCores() {
    return this.getStringAttribute('use_hyperthreaded_cores');
  }

  // use_legacy_netlink - computed: true, optional: false, required: false
  public get useLegacyNetlink() {
    return this.getStringAttribute('use_legacy_netlink');
  }

  // use_objsync - computed: true, optional: false, required: false
  public get useObjsync() {
    return this.getStringAttribute('use_objsync');
  }

  // use_standard_alb - computed: true, optional: false, required: false
  public get useStandardAlb() {
    return this.getStringAttribute('use_standard_alb');
  }

  // user_agent_cache_config - computed: true, optional: false, required: false
  private _userAgentCacheConfig = new DataAviServiceenginegroupUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }

  // user_defined_metric_age - computed: true, optional: false, required: false
  public get userDefinedMetricAge() {
    return this.getStringAttribute('user_defined_metric_age');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vcenter_clusters - computed: true, optional: false, required: false
  private _vcenterClusters = new DataAviServiceenginegroupVcenterClustersList(this, "vcenter_clusters", true);
  public get vcenterClusters() {
    return this._vcenterClusters;
  }

  // vcenter_datastore_mode - computed: true, optional: false, required: false
  public get vcenterDatastoreMode() {
    return this.getStringAttribute('vcenter_datastore_mode');
  }

  // vcenter_datastores - computed: true, optional: false, required: false
  private _vcenterDatastores = new DataAviServiceenginegroupVcenterDatastoresList(this, "vcenter_datastores", false);
  public get vcenterDatastores() {
    return this._vcenterDatastores;
  }

  // vcenter_datastores_include - computed: true, optional: false, required: false
  public get vcenterDatastoresInclude() {
    return this.getStringAttribute('vcenter_datastores_include');
  }

  // vcenter_folder - computed: true, optional: false, required: false
  public get vcenterFolder() {
    return this.getStringAttribute('vcenter_folder');
  }

  // vcenter_hosts - computed: true, optional: false, required: false
  private _vcenterHosts = new DataAviServiceenginegroupVcenterHostsList(this, "vcenter_hosts", true);
  public get vcenterHosts() {
    return this._vcenterHosts;
  }

  // vcenter_parking_vnic_pg - computed: true, optional: false, required: false
  public get vcenterParkingVnicPg() {
    return this.getStringAttribute('vcenter_parking_vnic_pg');
  }

  // vcenters - computed: true, optional: false, required: false
  private _vcenters = new DataAviServiceenginegroupVcentersList(this, "vcenters", false);
  public get vcenters() {
    return this._vcenters;
  }

  // vcpus_per_se - computed: true, optional: false, required: false
  public get vcpusPerSe() {
    return this.getStringAttribute('vcpus_per_se');
  }

  // vip_asg - computed: true, optional: false, required: false
  private _vipAsg = new DataAviServiceenginegroupVipAsgList(this, "vip_asg", true);
  public get vipAsg() {
    return this._vipAsg;
  }

  // vnic_dhcp_ip_check_interval - computed: true, optional: false, required: false
  public get vnicDhcpIpCheckInterval() {
    return this.getStringAttribute('vnic_dhcp_ip_check_interval');
  }

  // vnic_dhcp_ip_max_retries - computed: true, optional: false, required: false
  public get vnicDhcpIpMaxRetries() {
    return this.getStringAttribute('vnic_dhcp_ip_max_retries');
  }

  // vnic_ip_delete_interval - computed: true, optional: false, required: false
  public get vnicIpDeleteInterval() {
    return this.getStringAttribute('vnic_ip_delete_interval');
  }

  // vnic_probe_interval - computed: true, optional: false, required: false
  public get vnicProbeInterval() {
    return this.getStringAttribute('vnic_probe_interval');
  }

  // vnic_rpc_retry_interval - computed: true, optional: false, required: false
  public get vnicRpcRetryInterval() {
    return this.getStringAttribute('vnic_rpc_retry_interval');
  }

  // vnicdb_cmd_history_size - computed: true, optional: false, required: false
  public get vnicdbCmdHistorySize() {
    return this.getStringAttribute('vnicdb_cmd_history_size');
  }

  // vs_host_redundancy - computed: true, optional: false, required: false
  public get vsHostRedundancy() {
    return this.getStringAttribute('vs_host_redundancy');
  }

  // vs_scalein_timeout - computed: true, optional: false, required: false
  public get vsScaleinTimeout() {
    return this.getStringAttribute('vs_scalein_timeout');
  }

  // vs_scalein_timeout_for_upgrade - computed: true, optional: false, required: false
  public get vsScaleinTimeoutForUpgrade() {
    return this.getStringAttribute('vs_scalein_timeout_for_upgrade');
  }

  // vs_scaleout_timeout - computed: true, optional: false, required: false
  public get vsScaleoutTimeout() {
    return this.getStringAttribute('vs_scaleout_timeout');
  }

  // vs_se_primary_switchover_additional_wait_time - computed: true, optional: false, required: false
  public get vsSePrimarySwitchoverAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_primary_switchover_additional_wait_time');
  }

  // vs_se_scalein_additional_wait_time - computed: true, optional: false, required: false
  public get vsSeScaleinAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_scalein_additional_wait_time');
  }

  // vs_se_scaleout_additional_wait_time - computed: true, optional: false, required: false
  public get vsSeScaleoutAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_scaleout_additional_wait_time');
  }

  // vs_se_scaleout_ready_timeout - computed: true, optional: false, required: false
  public get vsSeScaleoutReadyTimeout() {
    return this.getStringAttribute('vs_se_scaleout_ready_timeout');
  }

  // vs_switchover_timeout - computed: true, optional: false, required: false
  public get vsSwitchoverTimeout() {
    return this.getStringAttribute('vs_switchover_timeout');
  }

  // vss_placement - computed: true, optional: false, required: false
  private _vssPlacement = new DataAviServiceenginegroupVssPlacementList(this, "vss_placement", true);
  public get vssPlacement() {
    return this._vssPlacement;
  }

  // vss_placement_enabled - computed: true, optional: false, required: false
  public get vssPlacementEnabled() {
    return this.getStringAttribute('vss_placement_enabled');
  }

  // waf_mempool - computed: true, optional: false, required: false
  public get wafMempool() {
    return this.getStringAttribute('waf_mempool');
  }

  // waf_mempool_size - computed: true, optional: false, required: false
  public get wafMempoolSize() {
    return this.getStringAttribute('waf_mempool_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
