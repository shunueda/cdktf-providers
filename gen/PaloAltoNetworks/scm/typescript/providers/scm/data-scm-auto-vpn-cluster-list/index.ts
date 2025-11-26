// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAutoVpnClusterListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#device DataScmAutoVpnClusterList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#folder DataScmAutoVpnClusterList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#limit DataScmAutoVpnClusterList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#name DataScmAutoVpnClusterList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#offset DataScmAutoVpnClusterList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#snippet DataScmAutoVpnClusterList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sdwan_gateway - computed: true, optional: false, required: false
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }

  // sdwan_interface_profile - computed: true, optional: false, required: false
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }

  // upstream_nat - computed: true, optional: false, required: false
  private _upstreamNat = new DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterListDataBranchesInterfaces {
}

export function dataScmAutoVpnClusterListDataBranchesInterfacesToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_ip - computed: true, optional: false, required: false
  public get dhcpIp() {
    return this.getStringAttribute('dhcp_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sdwan_link_settings - computed: true, optional: false, required: false
  private _sdwanLinkSettings = new DataScmAutoVpnClusterListDataBranchesInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterListDataBranchesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataBranchesInterfacesOutputReference {
    return new DataScmAutoVpnClusterListDataBranchesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sdwan_gateway - computed: true, optional: false, required: false
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }

  // sdwan_interface_profile - computed: true, optional: false, required: false
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }

  // upstream_nat - computed: true, optional: false, required: false
  private _upstreamNat = new DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterListDataBranchesPrivateInterfaces {
}

export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesToTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesPrivateInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranchesPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataBranchesPrivateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranchesPrivateInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sdwan_link_settings - computed: true, optional: false, required: false
  private _sdwanLinkSettings = new DataScmAutoVpnClusterListDataBranchesPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterListDataBranchesPrivateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataBranchesPrivateInterfacesOutputReference {
    return new DataScmAutoVpnClusterListDataBranchesPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListDataBranches {
}

export function dataScmAutoVpnClusterListDataBranchesToTerraform(struct?: DataScmAutoVpnClusterListDataBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataBranchesToHclTerraform(struct?: DataScmAutoVpnClusterListDataBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_redistribution_profile - computed: true, optional: false, required: false
  public get bgpRedistributionProfile() {
    return this.getStringAttribute('bgp_redistribution_profile');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataScmAutoVpnClusterListDataBranchesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // logical_router - computed: true, optional: false, required: false
  public get logicalRouter() {
    return this.getStringAttribute('logical_router');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_interfaces - computed: true, optional: false, required: false
  private _privateInterfaces = new DataScmAutoVpnClusterListDataBranchesPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataScmAutoVpnClusterListDataBranchesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataBranchesOutputReference {
    return new DataScmAutoVpnClusterListDataBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sdwan_gateway - computed: true, optional: false, required: false
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }

  // sdwan_interface_profile - computed: true, optional: false, required: false
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }

  // upstream_nat - computed: true, optional: false, required: false
  private _upstreamNat = new DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysInterfaces {
}

export function dataScmAutoVpnClusterListDataGatewaysInterfacesToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_ip - computed: true, optional: false, required: false
  public get dhcpIp() {
    return this.getStringAttribute('dhcp_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sdwan_link_settings - computed: true, optional: false, required: false
  private _sdwanLinkSettings = new DataScmAutoVpnClusterListDataGatewaysInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterListDataGatewaysInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataGatewaysInterfacesOutputReference {
    return new DataScmAutoVpnClusterListDataGatewaysInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static_ip - computed: true, optional: false, required: false
  private _staticIp = new DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sdwan_gateway - computed: true, optional: false, required: false
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }

  // sdwan_interface_profile - computed: true, optional: false, required: false
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }

  // upstream_nat - computed: true, optional: false, required: false
  private _upstreamNat = new DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterListDataGatewaysPrivateInterfaces {
}

export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesToTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysPrivateInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterListDataGatewaysPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataGatewaysPrivateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGatewaysPrivateInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sdwan_link_settings - computed: true, optional: false, required: false
  private _sdwanLinkSettings = new DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesOutputReference {
    return new DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListDataGateways {
}

export function dataScmAutoVpnClusterListDataGatewaysToTerraform(struct?: DataScmAutoVpnClusterListDataGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterListDataGatewaysToHclTerraform(struct?: DataScmAutoVpnClusterListDataGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterListDataGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListDataGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterListDataGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_dia_vpn_failover - computed: true, optional: false, required: false
  public get allowDiaVpnFailover() {
    return this.getBooleanAttribute('allow_dia_vpn_failover');
  }

  // bgp_redistribution_profile - computed: true, optional: false, required: false
  public get bgpRedistributionProfile() {
    return this.getStringAttribute('bgp_redistribution_profile');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataScmAutoVpnClusterListDataGatewaysInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // logical_router - computed: true, optional: false, required: false
  public get logicalRouter() {
    return this.getStringAttribute('logical_router');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // private_interfaces - computed: true, optional: false, required: false
  private _privateInterfaces = new DataScmAutoVpnClusterListDataGatewaysPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataScmAutoVpnClusterListDataGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterListDataGatewaysOutputReference {
    return new DataScmAutoVpnClusterListDataGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#id DataScmAutoVpnClusterList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * VPN cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#name DataScmAutoVpnClusterList#name}
  */
  readonly name?: string;
}

export function dataScmAutoVpnClusterListDataToTerraform(struct?: DataScmAutoVpnClusterListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmAutoVpnClusterListDataToHclTerraform(struct?: DataScmAutoVpnClusterListData): any {
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

export class DataScmAutoVpnClusterListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterListData | undefined {
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

  public set internalValue(value: DataScmAutoVpnClusterListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // branches - computed: true, optional: false, required: false
  private _branches = new DataScmAutoVpnClusterListDataBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }

  // enable_mesh_between_hubs - computed: true, optional: false, required: false
  public get enableMeshBetweenHubs() {
    return this.getBooleanAttribute('enable_mesh_between_hubs');
  }

  // enable_mesh_interconnect - computed: true, optional: false, required: false
  public get enableMeshInterconnect() {
    return this.getBooleanAttribute('enable_mesh_interconnect');
  }

  // enable_sdwan - computed: true, optional: false, required: false
  public get enableSdwan() {
    return this.getBooleanAttribute('enable_sdwan');
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataScmAutoVpnClusterListDataGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }

  // id - computed: true, optional: false, required: true
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

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataScmAutoVpnClusterListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmAutoVpnClusterListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmAutoVpnClusterListDataOutputReference {
    return new DataScmAutoVpnClusterListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list scm_auto_vpn_cluster_list}
*/
export class DataScmAutoVpnClusterList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_auto_vpn_cluster_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAutoVpnClusterList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAutoVpnClusterList to import
  * @param importFromId The id of the existing DataScmAutoVpnClusterList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAutoVpnClusterList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_auto_vpn_cluster_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/auto_vpn_cluster_list scm_auto_vpn_cluster_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAutoVpnClusterListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmAutoVpnClusterListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_auto_vpn_cluster_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmAutoVpnClusterListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
