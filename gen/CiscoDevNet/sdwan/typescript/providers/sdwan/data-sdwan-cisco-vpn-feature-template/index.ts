// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoVpnFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template#id DataSdwanCiscoVpnFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template#name DataSdwanCiscoVpnFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoVpnFeatureTemplateDnsHosts {
}

export function dataSdwanCiscoVpnFeatureTemplateDnsHostsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateDnsHostsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateDnsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateDnsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateDnsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_variable - computed: true, optional: false, required: false
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }

  // ip_variable - computed: true, optional: false, required: false
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateDnsHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateDnsHostsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateDnsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateDnsIpv4Servers {
}

export function dataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateDnsIpv4Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateDnsIpv4Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_variable - computed: true, optional: false, required: false
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateDnsIpv6Servers {
}

export function dataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateDnsIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateDnsIpv6Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateDnsIpv6Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_variable - computed: true, optional: false, required: false
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutes {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interfaces - computed: true, optional: false, required: false
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }

  // interfaces_variable - computed: true, optional: false, required: false
  public get interfacesVariable() {
    return this.getStringAttribute('interfaces_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutes {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interfaces - computed: true, optional: false, required: false
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }

  // interfaces_variable - computed: true, optional: false, required: false
  public get interfacesVariable() {
    return this.getStringAttribute('interfaces_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHops {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // distance_variable - computed: true, optional: false, required: false
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // distance_variable - computed: true, optional: false, required: false
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return this.getStringAttribute('tracker');
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutes {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // dhcp_variable - computed: true, optional: false, required: false
  public get dhcpVariable() {
    return this.getStringAttribute('dhcp_variable');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // distance_variable - computed: true, optional: false, required: false
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // null0 - computed: true, optional: false, required: false
  public get null0() {
    return this.getBooleanAttribute('null0');
  }

  // null0_variable - computed: true, optional: false, required: false
  public get null0Variable() {
    return this.getStringAttribute('null0_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // track_next_hops - computed: true, optional: false, required: false
  private _trackNextHops = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsList(this, "track_next_hops", false);
  public get trackNextHops() {
    return this._trackNextHops;
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutes {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHops {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // distance_variable - computed: true, optional: false, required: false
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutes {
}

export function dataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getStringAttribute('nat');
  }

  // nat_variable - computed: true, optional: false, required: false
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // null0 - computed: true, optional: false, required: false
  public get null0() {
    return this.getBooleanAttribute('null0');
  }

  // null0_variable - computed: true, optional: false, required: false
  public get null0Variable() {
    return this.getStringAttribute('null0_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateNat64Pools {
}

export function dataSdwanCiscoVpnFeatureTemplateNat64PoolsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateNat64Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateNat64PoolsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateNat64Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateNat64PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateNat64Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateNat64Pools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_address - computed: true, optional: false, required: false
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }

  // end_address_variable - computed: true, optional: false, required: false
  public get endAddressVariable() {
    return this.getStringAttribute('end_address_variable');
  }

  // leak_from_global - computed: true, optional: false, required: false
  public get leakFromGlobal() {
    return this.getBooleanAttribute('leak_from_global');
  }

  // leak_from_global_protocol - computed: true, optional: false, required: false
  public get leakFromGlobalProtocol() {
    return this.getStringAttribute('leak_from_global_protocol');
  }

  // leak_to_global - computed: true, optional: false, required: false
  public get leakToGlobal() {
    return this.getBooleanAttribute('leak_to_global');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // overload - computed: true, optional: false, required: false
  public get overload() {
    return this.getBooleanAttribute('overload');
  }

  // overload_variable - computed: true, optional: false, required: false
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }

  // start_address - computed: true, optional: false, required: false
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }

  // start_address_variable - computed: true, optional: false, required: false
  public get startAddressVariable() {
    return this.getStringAttribute('start_address_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateNat64PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateNat64PoolsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateNat64PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateNatPools {
}

export function dataSdwanCiscoVpnFeatureTemplateNatPoolsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateNatPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateNatPoolsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateNatPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateNatPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateNatPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateNatPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // direction_variable - computed: true, optional: false, required: false
  public get directionVariable() {
    return this.getStringAttribute('direction_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // overload - computed: true, optional: false, required: false
  public get overload() {
    return this.getBooleanAttribute('overload');
  }

  // overload_variable - computed: true, optional: false, required: false
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // prefix_length_variable - computed: true, optional: false, required: false
  public get prefixLengthVariable() {
    return this.getStringAttribute('prefix_length_variable');
  }

  // range_end - computed: true, optional: false, required: false
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }

  // range_end_variable - computed: true, optional: false, required: false
  public get rangeEndVariable() {
    return this.getStringAttribute('range_end_variable');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_start_variable - computed: true, optional: false, required: false
  public get rangeStartVariable() {
    return this.getStringAttribute('range_start_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }

  // tracker_id_variable - computed: true, optional: false, required: false
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateNatPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateNatPoolsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateNatPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes {
}

export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_only - computed: true, optional: false, required: false
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }

  // aggregate_only_variable - computed: true, optional: false, required: false
  public get aggregateOnlyVariable() {
    return this.getStringAttribute('aggregate_only_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix_entry - computed: true, optional: false, required: false
  public get prefixEntry() {
    return this.getStringAttribute('prefix_entry');
  }

  // prefix_entry_variable - computed: true, optional: false, required: false
  public get prefixEntryVariable() {
    return this.getStringAttribute('prefix_entry_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes {
}

export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes {
}

export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_only - computed: true, optional: false, required: false
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }

  // aggregate_only_variable - computed: true, optional: false, required: false
  public get aggregateOnlyVariable() {
    return this.getStringAttribute('aggregate_only_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix_entry - computed: true, optional: false, required: false
  public get prefixEntry() {
    return this.getStringAttribute('prefix_entry');
  }

  // prefix_entry_variable - computed: true, optional: false, required: false
  public get prefixEntryVariable() {
    return this.getStringAttribute('prefix_entry_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes {
}

export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplatePortForwardRules {
}

export function dataSdwanCiscoVpnFeatureTemplatePortForwardRulesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplatePortForwardRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplatePortForwardRulesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplatePortForwardRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplatePortForwardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplatePortForwardRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplatePortForwardRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getNumberAttribute('pool_name');
  }

  // pool_name_variable - computed: true, optional: false, required: false
  public get poolNameVariable() {
    return this.getStringAttribute('pool_name_variable');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // source_port_variable - computed: true, optional: false, required: false
  public get sourcePortVariable() {
    return this.getStringAttribute('source_port_variable');
  }

  // translate_ip - computed: true, optional: false, required: false
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }

  // translate_ip_variable - computed: true, optional: false, required: false
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }

  // translate_port - computed: true, optional: false, required: false
  public get translatePort() {
    return this.getNumberAttribute('translate_port');
  }

  // translate_port_variable - computed: true, optional: false, required: false
  public get translatePortVariable() {
    return this.getStringAttribute('translate_port_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplatePortForwardRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplatePortForwardRulesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplatePortForwardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributes {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteGlobalExports {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteGlobalExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteGlobalExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // redistributes - computed: true, optional: false, required: false
  private _redistributes = new DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributes {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteGlobalImports {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteGlobalImports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteGlobalImports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // redistributes - computed: true, optional: false, required: false
  private _redistributes = new DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributes {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateRouteVpnImports {
}

export function dataSdwanCiscoVpnFeatureTemplateRouteVpnImportsToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteVpnImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateRouteVpnImportsToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateRouteVpnImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateRouteVpnImports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateRouteVpnImports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // redistributes - computed: true, optional: false, required: false
  private _redistributes = new DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }

  // source_vpn_id - computed: true, optional: false, required: false
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }

  // source_vpn_id_variable - computed: true, optional: false, required: false
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateServices {
}

export function dataSdwanCiscoVpnFeatureTemplateServicesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateServicesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_variable - computed: true, optional: false, required: false
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // service_types - computed: true, optional: false, required: false
  public get serviceTypes() {
    return this.getStringAttribute('service_types');
  }

  // track_enable - computed: true, optional: false, required: false
  public get trackEnable() {
    return this.getBooleanAttribute('track_enable');
  }

  // track_enable_variable - computed: true, optional: false, required: false
  public get trackEnableVariable() {
    return this.getStringAttribute('track_enable_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateServicesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateStaticNatRules {
}

export function dataSdwanCiscoVpnFeatureTemplateStaticNatRulesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateStaticNatRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateStaticNatRulesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateStaticNatRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateStaticNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateStaticNatRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateStaticNatRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getNumberAttribute('pool_name');
  }

  // pool_name_variable - computed: true, optional: false, required: false
  public get poolNameVariable() {
    return this.getStringAttribute('pool_name_variable');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // static_nat_direction - computed: true, optional: false, required: false
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }

  // static_nat_direction_variable - computed: true, optional: false, required: false
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }

  // tracker_id_variable - computed: true, optional: false, required: false
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }

  // translate_ip - computed: true, optional: false, required: false
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }

  // translate_ip_variable - computed: true, optional: false, required: false
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateStaticNatRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateStaticNatRulesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateStaticNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRules {
}

export function dataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesToTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesToHclTerraform(struct?: DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // prefix_length_variable - computed: true, optional: false, required: false
  public get prefixLengthVariable() {
    return this.getStringAttribute('prefix_length_variable');
  }

  // source_ip_subnet - computed: true, optional: false, required: false
  public get sourceIpSubnet() {
    return this.getStringAttribute('source_ip_subnet');
  }

  // source_ip_subnet_variable - computed: true, optional: false, required: false
  public get sourceIpSubnetVariable() {
    return this.getStringAttribute('source_ip_subnet_variable');
  }

  // static_nat_direction - computed: true, optional: false, required: false
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }

  // static_nat_direction_variable - computed: true, optional: false, required: false
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }

  // tracker_id_variable - computed: true, optional: false, required: false
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }

  // translate_ip_subnet - computed: true, optional: false, required: false
  public get translateIpSubnet() {
    return this.getStringAttribute('translate_ip_subnet');
  }

  // translate_ip_subnet_variable - computed: true, optional: false, required: false
  public get translateIpSubnetVariable() {
    return this.getStringAttribute('translate_ip_subnet_variable');
  }
}

export class DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference {
    return new DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template sdwan_cisco_vpn_feature_template}
*/
export class DataSdwanCiscoVpnFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoVpnFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoVpnFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoVpnFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoVpnFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_feature_template sdwan_cisco_vpn_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoVpnFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoVpnFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // dns_hosts - computed: true, optional: false, required: false
  private _dnsHosts = new DataSdwanCiscoVpnFeatureTemplateDnsHostsList(this, "dns_hosts", false);
  public get dnsHosts() {
    return this._dnsHosts;
  }

  // dns_ipv4_servers - computed: true, optional: false, required: false
  private _dnsIpv4Servers = new DataSdwanCiscoVpnFeatureTemplateDnsIpv4ServersList(this, "dns_ipv4_servers", false);
  public get dnsIpv4Servers() {
    return this._dnsIpv4Servers;
  }

  // dns_ipv6_servers - computed: true, optional: false, required: false
  private _dnsIpv6Servers = new DataSdwanCiscoVpnFeatureTemplateDnsIpv6ServersList(this, "dns_ipv6_servers", false);
  public get dnsIpv6Servers() {
    return this._dnsIpv6Servers;
  }

  // enhance_ecmp_keying - computed: true, optional: false, required: false
  public get enhanceEcmpKeying() {
    return this.getBooleanAttribute('enhance_ecmp_keying');
  }

  // enhance_ecmp_keying_variable - computed: true, optional: false, required: false
  public get enhanceEcmpKeyingVariable() {
    return this.getStringAttribute('enhance_ecmp_keying_variable');
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

  // ipv4_static_gre_routes - computed: true, optional: false, required: false
  private _ipv4StaticGreRoutes = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticGreRoutesList(this, "ipv4_static_gre_routes", false);
  public get ipv4StaticGreRoutes() {
    return this._ipv4StaticGreRoutes;
  }

  // ipv4_static_ipsec_routes - computed: true, optional: false, required: false
  private _ipv4StaticIpsecRoutes = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticIpsecRoutesList(this, "ipv4_static_ipsec_routes", false);
  public get ipv4StaticIpsecRoutes() {
    return this._ipv4StaticIpsecRoutes;
  }

  // ipv4_static_routes - computed: true, optional: false, required: false
  private _ipv4StaticRoutes = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }

  // ipv4_static_service_routes - computed: true, optional: false, required: false
  private _ipv4StaticServiceRoutes = new DataSdwanCiscoVpnFeatureTemplateIpv4StaticServiceRoutesList(this, "ipv4_static_service_routes", false);
  public get ipv4StaticServiceRoutes() {
    return this._ipv4StaticServiceRoutes;
  }

  // ipv6_static_routes - computed: true, optional: false, required: false
  private _ipv6StaticRoutes = new DataSdwanCiscoVpnFeatureTemplateIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
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

  // nat64_pools - computed: true, optional: false, required: false
  private _nat64Pools = new DataSdwanCiscoVpnFeatureTemplateNat64PoolsList(this, "nat64_pools", false);
  public get nat64Pools() {
    return this._nat64Pools;
  }

  // nat_pools - computed: true, optional: false, required: false
  private _natPools = new DataSdwanCiscoVpnFeatureTemplateNatPoolsList(this, "nat_pools", false);
  public get natPools() {
    return this._natPools;
  }

  // omp_admin_distance_ipv4 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }

  // omp_admin_distance_ipv4_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }

  // omp_admin_distance_ipv6 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }

  // omp_admin_distance_ipv6_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }

  // omp_advertise_ipv4_routes - computed: true, optional: false, required: false
  private _ompAdvertiseIpv4Routes = new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesList(this, "omp_advertise_ipv4_routes", false);
  public get ompAdvertiseIpv4Routes() {
    return this._ompAdvertiseIpv4Routes;
  }

  // omp_advertise_ipv6_routes - computed: true, optional: false, required: false
  private _ompAdvertiseIpv6Routes = new DataSdwanCiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesList(this, "omp_advertise_ipv6_routes", false);
  public get ompAdvertiseIpv6Routes() {
    return this._ompAdvertiseIpv6Routes;
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // port_forward_rules - computed: true, optional: false, required: false
  private _portForwardRules = new DataSdwanCiscoVpnFeatureTemplatePortForwardRulesList(this, "port_forward_rules", false);
  public get portForwardRules() {
    return this._portForwardRules;
  }

  // route_global_exports - computed: true, optional: false, required: false
  private _routeGlobalExports = new DataSdwanCiscoVpnFeatureTemplateRouteGlobalExportsList(this, "route_global_exports", false);
  public get routeGlobalExports() {
    return this._routeGlobalExports;
  }

  // route_global_imports - computed: true, optional: false, required: false
  private _routeGlobalImports = new DataSdwanCiscoVpnFeatureTemplateRouteGlobalImportsList(this, "route_global_imports", false);
  public get routeGlobalImports() {
    return this._routeGlobalImports;
  }

  // route_vpn_imports - computed: true, optional: false, required: false
  private _routeVpnImports = new DataSdwanCiscoVpnFeatureTemplateRouteVpnImportsList(this, "route_vpn_imports", false);
  public get routeVpnImports() {
    return this._routeVpnImports;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataSdwanCiscoVpnFeatureTemplateServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // static_nat_rules - computed: true, optional: false, required: false
  private _staticNatRules = new DataSdwanCiscoVpnFeatureTemplateStaticNatRulesList(this, "static_nat_rules", false);
  public get staticNatRules() {
    return this._staticNatRules;
  }

  // static_nat_subnet_rules - computed: true, optional: false, required: false
  private _staticNatSubnetRules = new DataSdwanCiscoVpnFeatureTemplateStaticNatSubnetRulesList(this, "static_nat_subnet_rules", false);
  public get staticNatSubnetRules() {
    return this._staticNatSubnetRules;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tenant_vpn_id - computed: true, optional: false, required: false
  public get tenantVpnId() {
    return this.getNumberAttribute('tenant_vpn_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_name - computed: true, optional: false, required: false
  public get vpnName() {
    return this.getStringAttribute('vpn_name');
  }

  // vpn_name_variable - computed: true, optional: false, required: false
  public get vpnNameVariable() {
    return this.getStringAttribute('vpn_name_variable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
