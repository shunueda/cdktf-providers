// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAutoVpnClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster#id DataScmAutoVpnCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * VPN cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster#name DataScmAutoVpnCluster#name}
  */
  readonly name?: string;
}
export interface DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
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
export interface DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
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
  private _staticIp = new DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettings | undefined) {
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
  private _upstreamNat = new DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterBranchesInterfaces {
}

export function dataScmAutoVpnClusterBranchesInterfacesToTerraform(struct?: DataScmAutoVpnClusterBranchesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterBranchesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterBranchesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesInterfaces | undefined) {
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
  private _sdwanLinkSettings = new DataScmAutoVpnClusterBranchesInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterBranchesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterBranchesInterfacesOutputReference {
    return new DataScmAutoVpnClusterBranchesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
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
export interface DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
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
  private _staticIp = new DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | undefined) {
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
  private _upstreamNat = new DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterBranchesPrivateInterfaces {
}

export function dataScmAutoVpnClusterBranchesPrivateInterfacesToTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesPrivateInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterBranchesPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterBranchesPrivateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranchesPrivateInterfaces | undefined) {
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
  private _sdwanLinkSettings = new DataScmAutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterBranchesPrivateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterBranchesPrivateInterfacesOutputReference {
    return new DataScmAutoVpnClusterBranchesPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterBranches {
}

export function dataScmAutoVpnClusterBranchesToTerraform(struct?: DataScmAutoVpnClusterBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterBranchesToHclTerraform(struct?: DataScmAutoVpnClusterBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterBranches | undefined) {
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
  private _interfaces = new DataScmAutoVpnClusterBranchesInterfacesList(this, "interfaces", false);
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
  private _privateInterfaces = new DataScmAutoVpnClusterBranchesPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataScmAutoVpnClusterBranchesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterBranchesOutputReference {
    return new DataScmAutoVpnClusterBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
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
export interface DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
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
  private _staticIp = new DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettings | undefined) {
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
  private _upstreamNat = new DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterGatewaysInterfaces {
}

export function dataScmAutoVpnClusterGatewaysInterfacesToTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterGatewaysInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysInterfaces | undefined) {
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
  private _sdwanLinkSettings = new DataScmAutoVpnClusterGatewaysInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterGatewaysInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterGatewaysInterfacesOutputReference {
    return new DataScmAutoVpnClusterGatewaysInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
}

export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | undefined) {
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
export interface DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat {
}

export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | undefined) {
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
  private _staticIp = new DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
}
export interface DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings {
}

export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | undefined) {
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
  private _upstreamNat = new DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
}
export interface DataScmAutoVpnClusterGatewaysPrivateInterfaces {
}

export function dataScmAutoVpnClusterGatewaysPrivateInterfacesToTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysPrivateInterfacesToHclTerraform(struct?: DataScmAutoVpnClusterGatewaysPrivateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterGatewaysPrivateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGatewaysPrivateInterfaces | undefined) {
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
  private _sdwanLinkSettings = new DataScmAutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
}

export class DataScmAutoVpnClusterGatewaysPrivateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterGatewaysPrivateInterfacesOutputReference {
    return new DataScmAutoVpnClusterGatewaysPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAutoVpnClusterGateways {
}

export function dataScmAutoVpnClusterGatewaysToTerraform(struct?: DataScmAutoVpnClusterGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAutoVpnClusterGatewaysToHclTerraform(struct?: DataScmAutoVpnClusterGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAutoVpnClusterGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAutoVpnClusterGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAutoVpnClusterGateways | undefined) {
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
  private _interfaces = new DataScmAutoVpnClusterGatewaysInterfacesList(this, "interfaces", false);
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
  private _privateInterfaces = new DataScmAutoVpnClusterGatewaysPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataScmAutoVpnClusterGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAutoVpnClusterGatewaysOutputReference {
    return new DataScmAutoVpnClusterGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster scm_auto_vpn_cluster}
*/
export class DataScmAutoVpnCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_auto_vpn_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAutoVpnCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAutoVpnCluster to import
  * @param importFromId The id of the existing DataScmAutoVpnCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAutoVpnCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_auto_vpn_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/auto_vpn_cluster scm_auto_vpn_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAutoVpnClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmAutoVpnClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_auto_vpn_cluster',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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

  // branches - computed: true, optional: false, required: false
  private _branches = new DataScmAutoVpnClusterBranchesList(this, "branches", false);
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
  private _gateways = new DataScmAutoVpnClusterGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
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
