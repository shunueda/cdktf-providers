// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoVpnClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#branches AutoVpnCluster#branches}
  */
  readonly branches?: AutoVpnClusterBranches[] | cdktf.IResolvable;
  /**
  * Enable mesh between hubs?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable_mesh_between_hubs AutoVpnCluster#enable_mesh_between_hubs}
  */
  readonly enableMeshBetweenHubs?: boolean | cdktf.IResolvable;
  /**
  * Enable mesh interconnect?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable_mesh_interconnect AutoVpnCluster#enable_mesh_interconnect}
  */
  readonly enableMeshInterconnect?: boolean | cdktf.IResolvable;
  /**
  * Enable SD-WAN?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable_sdwan AutoVpnCluster#enable_sdwan}
  */
  readonly enableSdwan?: boolean | cdktf.IResolvable;
  /**
  * Hubs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#gateways AutoVpnCluster#gateways}
  */
  readonly gateways?: AutoVpnClusterGateways[] | cdktf.IResolvable;
  /**
  * VPN cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * VPN cluster type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#type AutoVpnCluster#type}
  */
  readonly type?: string;
}
export interface AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * FQDN
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#fqdn AutoVpnCluster#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#ip_address AutoVpnCluster#ip_address}
  */
  readonly ipAddress?: string;
}

export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat {
  /**
  * Upstream NAT?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable AutoVpnCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Static ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#static_ip AutoVpnCluster#static_ip}
  */
  readonly staticIp?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp;
}

export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface AutoVpnClusterBranchesInterfacesSdwanLinkSettings {
  /**
  * Next hop gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_gateway AutoVpnCluster#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
  /**
  * SD-WAN interface profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_interface_profile AutoVpnCluster#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Upstream nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#upstream_nat AutoVpnCluster#upstream_nat}
  */
  readonly upstreamNat?: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat;
}

export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsToTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function autoVpnClusterBranchesInterfacesSdwanLinkSettingsToHclTerraform(struct?: AutoVpnClusterBranchesInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: autoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanGateway = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanGateway = value.sdwanGateway;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
    }
  }

  // sdwan_gateway - computed: false, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: false, optional: true, required: false
  private _upstreamNat = new AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}
export interface AutoVpnClusterBranchesInterfaces {
  /**
  * DHCP IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#dhcp_ip AutoVpnCluster#dhcp_ip}
  */
  readonly dhcpIp?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Sdwan link settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_link_settings AutoVpnCluster#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: AutoVpnClusterBranchesInterfacesSdwanLinkSettings;
}

export function autoVpnClusterBranchesInterfacesToTerraform(struct?: AutoVpnClusterBranchesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_ip: cdktf.stringToTerraform(struct!.dhcpIp),
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_link_settings: autoVpnClusterBranchesInterfacesSdwanLinkSettingsToTerraform(struct!.sdwanLinkSettings),
  }
}


export function autoVpnClusterBranchesInterfacesToHclTerraform(struct?: AutoVpnClusterBranchesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcpIp),
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
    sdwan_link_settings: {
      value: autoVpnClusterBranchesInterfacesSdwanLinkSettingsToHclTerraform(struct!.sdwanLinkSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesInterfacesSdwanLinkSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterBranchesInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpIp = this._dhcpIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanLinkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanLinkSettings = this._sdwanLinkSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpIp = undefined;
      this._name = undefined;
      this._sdwanLinkSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpIp = value.dhcpIp;
      this._name = value.name;
      this._sdwanLinkSettings.internalValue = value.sdwanLinkSettings;
    }
  }

  // dhcp_ip - computed: false, optional: true, required: false
  private _dhcpIp?: string; 
  public get dhcpIp() {
    return this.getStringAttribute('dhcp_ip');
  }
  public set dhcpIp(value: string) {
    this._dhcpIp = value;
  }
  public resetDhcpIp() {
    this._dhcpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpInput() {
    return this._dhcpIp;
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

  // sdwan_link_settings - computed: false, optional: true, required: false
  private _sdwanLinkSettings = new AutoVpnClusterBranchesInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: AutoVpnClusterBranchesInterfacesSdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
  }
}

export class AutoVpnClusterBranchesInterfacesList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterBranchesInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterBranchesInterfacesOutputReference {
    return new AutoVpnClusterBranchesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * FQDN
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#fqdn AutoVpnCluster#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#ip_address AutoVpnCluster#ip_address}
  */
  readonly ipAddress?: string;
}

export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat {
  /**
  * Upstream NAT?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable AutoVpnCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Static ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#static_ip AutoVpnCluster#static_ip}
  */
  readonly staticIp?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp;
}

export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings {
  /**
  * Next hop gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_gateway AutoVpnCluster#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
  /**
  * SD-WAN interface profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_interface_profile AutoVpnCluster#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Upstream nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#upstream_nat AutoVpnCluster#upstream_nat}
  */
  readonly upstreamNat?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat;
}

export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanGateway = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanGateway = value.sdwanGateway;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
    }
  }

  // sdwan_gateway - computed: false, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: false, optional: true, required: false
  private _upstreamNat = new AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}
export interface AutoVpnClusterBranchesPrivateInterfaces {
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Sdwan link settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_link_settings AutoVpnCluster#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings;
}

export function autoVpnClusterBranchesPrivateInterfacesToTerraform(struct?: AutoVpnClusterBranchesPrivateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_link_settings: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToTerraform(struct!.sdwanLinkSettings),
  }
}


export function autoVpnClusterBranchesPrivateInterfacesToHclTerraform(struct?: AutoVpnClusterBranchesPrivateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_link_settings: {
      value: autoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct!.sdwanLinkSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterBranchesPrivateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanLinkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanLinkSettings = this._sdwanLinkSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranchesPrivateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sdwanLinkSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sdwanLinkSettings.internalValue = value.sdwanLinkSettings;
    }
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

  // sdwan_link_settings - computed: false, optional: true, required: false
  private _sdwanLinkSettings = new AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: AutoVpnClusterBranchesPrivateInterfacesSdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
  }
}

export class AutoVpnClusterBranchesPrivateInterfacesList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterBranchesPrivateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterBranchesPrivateInterfacesOutputReference {
    return new AutoVpnClusterBranchesPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoVpnClusterBranches {
  /**
  * BGP redistribution profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#bgp_redistribution_profile AutoVpnCluster#bgp_redistribution_profile}
  */
  readonly bgpRedistributionProfile?: string;
  /**
  * Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#interfaces AutoVpnCluster#interfaces}
  */
  readonly interfaces?: AutoVpnClusterBranchesInterfaces[] | cdktf.IResolvable;
  /**
  * Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#logical_router AutoVpnCluster#logical_router}
  */
  readonly logicalRouter?: string;
  /**
  * Branch firewall serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Private interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#private_interfaces AutoVpnCluster#private_interfaces}
  */
  readonly privateInterfaces?: AutoVpnClusterBranchesPrivateInterfaces[] | cdktf.IResolvable;
  /**
  * Site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#site AutoVpnCluster#site}
  */
  readonly site?: string;
}

export function autoVpnClusterBranchesToTerraform(struct?: AutoVpnClusterBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_redistribution_profile: cdktf.stringToTerraform(struct!.bgpRedistributionProfile),
    interfaces: cdktf.listMapper(autoVpnClusterBranchesInterfacesToTerraform, false)(struct!.interfaces),
    logical_router: cdktf.stringToTerraform(struct!.logicalRouter),
    name: cdktf.stringToTerraform(struct!.name),
    private_interfaces: cdktf.listMapper(autoVpnClusterBranchesPrivateInterfacesToTerraform, false)(struct!.privateInterfaces),
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function autoVpnClusterBranchesToHclTerraform(struct?: AutoVpnClusterBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.bgpRedistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(autoVpnClusterBranchesInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AutoVpnClusterBranchesInterfacesList",
    },
    logical_router: {
      value: cdktf.stringToHclTerraform(struct!.logicalRouter),
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
    private_interfaces: {
      value: cdktf.listMapperHcl(autoVpnClusterBranchesPrivateInterfacesToHclTerraform, false)(struct!.privateInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AutoVpnClusterBranchesPrivateInterfacesList",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpRedistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRedistributionProfile = this._bgpRedistributionProfile;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._logicalRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalRouter = this._logicalRouter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateInterfaces = this._privateInterfaces?.internalValue;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpRedistributionProfile = undefined;
      this._interfaces.internalValue = undefined;
      this._logicalRouter = undefined;
      this._name = undefined;
      this._privateInterfaces.internalValue = undefined;
      this._site = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpRedistributionProfile = value.bgpRedistributionProfile;
      this._interfaces.internalValue = value.interfaces;
      this._logicalRouter = value.logicalRouter;
      this._name = value.name;
      this._privateInterfaces.internalValue = value.privateInterfaces;
      this._site = value.site;
    }
  }

  // bgp_redistribution_profile - computed: false, optional: true, required: false
  private _bgpRedistributionProfile?: string; 
  public get bgpRedistributionProfile() {
    return this.getStringAttribute('bgp_redistribution_profile');
  }
  public set bgpRedistributionProfile(value: string) {
    this._bgpRedistributionProfile = value;
  }
  public resetBgpRedistributionProfile() {
    this._bgpRedistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRedistributionProfileInput() {
    return this._bgpRedistributionProfile;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new AutoVpnClusterBranchesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: AutoVpnClusterBranchesInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // logical_router - computed: false, optional: true, required: false
  private _logicalRouter?: string; 
  public get logicalRouter() {
    return this.getStringAttribute('logical_router');
  }
  public set logicalRouter(value: string) {
    this._logicalRouter = value;
  }
  public resetLogicalRouter() {
    this._logicalRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRouterInput() {
    return this._logicalRouter;
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

  // private_interfaces - computed: false, optional: true, required: false
  private _privateInterfaces = new AutoVpnClusterBranchesPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }
  public putPrivateInterfaces(value: AutoVpnClusterBranchesPrivateInterfaces[] | cdktf.IResolvable) {
    this._privateInterfaces.internalValue = value;
  }
  public resetPrivateInterfaces() {
    this._privateInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInterfacesInput() {
    return this._privateInterfaces.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }
}

export class AutoVpnClusterBranchesList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterBranches[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterBranchesOutputReference {
    return new AutoVpnClusterBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * FQDN
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#fqdn AutoVpnCluster#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#ip_address AutoVpnCluster#ip_address}
  */
  readonly ipAddress?: string;
}

export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat {
  /**
  * Upstream NAT?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable AutoVpnCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Static ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#static_ip AutoVpnCluster#static_ip}
  */
  readonly staticIp?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp;
}

export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface AutoVpnClusterGatewaysInterfacesSdwanLinkSettings {
  /**
  * Next hop gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_gateway AutoVpnCluster#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
  /**
  * SD-WAN interface profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_interface_profile AutoVpnCluster#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Upstream nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#upstream_nat AutoVpnCluster#upstream_nat}
  */
  readonly upstreamNat?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat;
}

export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsToTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function autoVpnClusterGatewaysInterfacesSdwanLinkSettingsToHclTerraform(struct?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanGateway = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanGateway = value.sdwanGateway;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
    }
  }

  // sdwan_gateway - computed: false, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: false, optional: true, required: false
  private _upstreamNat = new AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}
export interface AutoVpnClusterGatewaysInterfaces {
  /**
  * DHCP IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#dhcp_ip AutoVpnCluster#dhcp_ip}
  */
  readonly dhcpIp?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Sdwan link settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_link_settings AutoVpnCluster#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: AutoVpnClusterGatewaysInterfacesSdwanLinkSettings;
}

export function autoVpnClusterGatewaysInterfacesToTerraform(struct?: AutoVpnClusterGatewaysInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_ip: cdktf.stringToTerraform(struct!.dhcpIp),
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_link_settings: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsToTerraform(struct!.sdwanLinkSettings),
  }
}


export function autoVpnClusterGatewaysInterfacesToHclTerraform(struct?: AutoVpnClusterGatewaysInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcpIp),
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
    sdwan_link_settings: {
      value: autoVpnClusterGatewaysInterfacesSdwanLinkSettingsToHclTerraform(struct!.sdwanLinkSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysInterfacesSdwanLinkSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterGatewaysInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpIp = this._dhcpIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanLinkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanLinkSettings = this._sdwanLinkSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpIp = undefined;
      this._name = undefined;
      this._sdwanLinkSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpIp = value.dhcpIp;
      this._name = value.name;
      this._sdwanLinkSettings.internalValue = value.sdwanLinkSettings;
    }
  }

  // dhcp_ip - computed: false, optional: true, required: false
  private _dhcpIp?: string; 
  public get dhcpIp() {
    return this.getStringAttribute('dhcp_ip');
  }
  public set dhcpIp(value: string) {
    this._dhcpIp = value;
  }
  public resetDhcpIp() {
    this._dhcpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpInput() {
    return this._dhcpIp;
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

  // sdwan_link_settings - computed: false, optional: true, required: false
  private _sdwanLinkSettings = new AutoVpnClusterGatewaysInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: AutoVpnClusterGatewaysInterfacesSdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
  }
}

export class AutoVpnClusterGatewaysInterfacesList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterGatewaysInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterGatewaysInterfacesOutputReference {
    return new AutoVpnClusterGatewaysInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp {
  /**
  * FQDN
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#fqdn AutoVpnCluster#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#ip_address AutoVpnCluster#ip_address}
  */
  readonly ipAddress?: string;
}

export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat {
  /**
  * Upstream NAT?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#enable AutoVpnCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Static ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#static_ip AutoVpnCluster#static_ip}
  */
  readonly staticIp?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp;
}

export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    static_ip: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToTerraform(struct!.staticIp),
  }
}


export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings {
  /**
  * Next hop gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_gateway AutoVpnCluster#sdwan_gateway}
  */
  readonly sdwanGateway?: string;
  /**
  * SD-WAN interface profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_interface_profile AutoVpnCluster#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Upstream nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#upstream_nat AutoVpnCluster#upstream_nat}
  */
  readonly upstreamNat?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat;
}

export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_gateway: cdktf.stringToTerraform(struct!.sdwanGateway),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    upstream_nat: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToTerraform(struct!.upstreamNat),
  }
}


export function autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_gateway: {
      value: cdktf.stringToHclTerraform(struct!.sdwanGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_nat: {
      value: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatToHclTerraform(struct!.upstreamNat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanGateway = this._sdwanGateway;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._upstreamNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNat = this._upstreamNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanGateway = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._upstreamNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanGateway = value.sdwanGateway;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._upstreamNat.internalValue = value.upstreamNat;
    }
  }

  // sdwan_gateway - computed: false, optional: true, required: false
  private _sdwanGateway?: string; 
  public get sdwanGateway() {
    return this.getStringAttribute('sdwan_gateway');
  }
  public set sdwanGateway(value: string) {
    this._sdwanGateway = value;
  }
  public resetSdwanGateway() {
    this._sdwanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanGatewayInput() {
    return this._sdwanGateway;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // upstream_nat - computed: false, optional: true, required: false
  private _upstreamNat = new AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNatOutputReference(this, "upstream_nat");
  public get upstreamNat() {
    return this._upstreamNat;
  }
  public putUpstreamNat(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsUpstreamNat) {
    this._upstreamNat.internalValue = value;
  }
  public resetUpstreamNat() {
    this._upstreamNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNatInput() {
    return this._upstreamNat.internalValue;
  }
}
export interface AutoVpnClusterGatewaysPrivateInterfaces {
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Sdwan link settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#sdwan_link_settings AutoVpnCluster#sdwan_link_settings}
  */
  readonly sdwanLinkSettings?: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings;
}

export function autoVpnClusterGatewaysPrivateInterfacesToTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sdwan_link_settings: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToTerraform(struct!.sdwanLinkSettings),
  }
}


export function autoVpnClusterGatewaysPrivateInterfacesToHclTerraform(struct?: AutoVpnClusterGatewaysPrivateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_link_settings: {
      value: autoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsToHclTerraform(struct!.sdwanLinkSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysPrivateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterGatewaysPrivateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sdwanLinkSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanLinkSettings = this._sdwanLinkSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGatewaysPrivateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sdwanLinkSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sdwanLinkSettings.internalValue = value.sdwanLinkSettings;
    }
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

  // sdwan_link_settings - computed: false, optional: true, required: false
  private _sdwanLinkSettings = new AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettingsOutputReference(this, "sdwan_link_settings");
  public get sdwanLinkSettings() {
    return this._sdwanLinkSettings;
  }
  public putSdwanLinkSettings(value: AutoVpnClusterGatewaysPrivateInterfacesSdwanLinkSettings) {
    this._sdwanLinkSettings.internalValue = value;
  }
  public resetSdwanLinkSettings() {
    this._sdwanLinkSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanLinkSettingsInput() {
    return this._sdwanLinkSettings.internalValue;
  }
}

export class AutoVpnClusterGatewaysPrivateInterfacesList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterGatewaysPrivateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterGatewaysPrivateInterfacesOutputReference {
    return new AutoVpnClusterGatewaysPrivateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoVpnClusterGateways {
  /**
  * Allow DIA to VPN failover on branch device for the hub?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#allow_dia_vpn_failover AutoVpnCluster#allow_dia_vpn_failover}
  */
  readonly allowDiaVpnFailover?: boolean | cdktf.IResolvable;
  /**
  * BGP redistribution file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#bgp_redistribution_profile AutoVpnCluster#bgp_redistribution_profile}
  */
  readonly bgpRedistributionProfile?: string;
  /**
  * Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#interfaces AutoVpnCluster#interfaces}
  */
  readonly interfaces?: AutoVpnClusterGatewaysInterfaces[] | cdktf.IResolvable;
  /**
  * Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#logical_router AutoVpnCluster#logical_router}
  */
  readonly logicalRouter?: string;
  /**
  * Hub firewall serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#name AutoVpnCluster#name}
  */
  readonly name?: string;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#priority AutoVpnCluster#priority}
  */
  readonly priority?: string;
  /**
  * Private interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#private_interfaces AutoVpnCluster#private_interfaces}
  */
  readonly privateInterfaces?: AutoVpnClusterGatewaysPrivateInterfaces[] | cdktf.IResolvable;
  /**
  * Site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#site AutoVpnCluster#site}
  */
  readonly site?: string;
}

export function autoVpnClusterGatewaysToTerraform(struct?: AutoVpnClusterGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dia_vpn_failover: cdktf.booleanToTerraform(struct!.allowDiaVpnFailover),
    bgp_redistribution_profile: cdktf.stringToTerraform(struct!.bgpRedistributionProfile),
    interfaces: cdktf.listMapper(autoVpnClusterGatewaysInterfacesToTerraform, false)(struct!.interfaces),
    logical_router: cdktf.stringToTerraform(struct!.logicalRouter),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.stringToTerraform(struct!.priority),
    private_interfaces: cdktf.listMapper(autoVpnClusterGatewaysPrivateInterfacesToTerraform, false)(struct!.privateInterfaces),
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function autoVpnClusterGatewaysToHclTerraform(struct?: AutoVpnClusterGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dia_vpn_failover: {
      value: cdktf.booleanToHclTerraform(struct!.allowDiaVpnFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.bgpRedistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(autoVpnClusterGatewaysInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AutoVpnClusterGatewaysInterfacesList",
    },
    logical_router: {
      value: cdktf.stringToHclTerraform(struct!.logicalRouter),
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_interfaces: {
      value: cdktf.listMapperHcl(autoVpnClusterGatewaysPrivateInterfacesToHclTerraform, false)(struct!.privateInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "AutoVpnClusterGatewaysPrivateInterfacesList",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnClusterGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoVpnClusterGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDiaVpnFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDiaVpnFailover = this._allowDiaVpnFailover;
    }
    if (this._bgpRedistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRedistributionProfile = this._bgpRedistributionProfile;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._logicalRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalRouter = this._logicalRouter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._privateInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateInterfaces = this._privateInterfaces?.internalValue;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnClusterGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDiaVpnFailover = undefined;
      this._bgpRedistributionProfile = undefined;
      this._interfaces.internalValue = undefined;
      this._logicalRouter = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._privateInterfaces.internalValue = undefined;
      this._site = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDiaVpnFailover = value.allowDiaVpnFailover;
      this._bgpRedistributionProfile = value.bgpRedistributionProfile;
      this._interfaces.internalValue = value.interfaces;
      this._logicalRouter = value.logicalRouter;
      this._name = value.name;
      this._priority = value.priority;
      this._privateInterfaces.internalValue = value.privateInterfaces;
      this._site = value.site;
    }
  }

  // allow_dia_vpn_failover - computed: false, optional: true, required: false
  private _allowDiaVpnFailover?: boolean | cdktf.IResolvable; 
  public get allowDiaVpnFailover() {
    return this.getBooleanAttribute('allow_dia_vpn_failover');
  }
  public set allowDiaVpnFailover(value: boolean | cdktf.IResolvable) {
    this._allowDiaVpnFailover = value;
  }
  public resetAllowDiaVpnFailover() {
    this._allowDiaVpnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDiaVpnFailoverInput() {
    return this._allowDiaVpnFailover;
  }

  // bgp_redistribution_profile - computed: false, optional: true, required: false
  private _bgpRedistributionProfile?: string; 
  public get bgpRedistributionProfile() {
    return this.getStringAttribute('bgp_redistribution_profile');
  }
  public set bgpRedistributionProfile(value: string) {
    this._bgpRedistributionProfile = value;
  }
  public resetBgpRedistributionProfile() {
    this._bgpRedistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRedistributionProfileInput() {
    return this._bgpRedistributionProfile;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new AutoVpnClusterGatewaysInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: AutoVpnClusterGatewaysInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // logical_router - computed: false, optional: true, required: false
  private _logicalRouter?: string; 
  public get logicalRouter() {
    return this.getStringAttribute('logical_router');
  }
  public set logicalRouter(value: string) {
    this._logicalRouter = value;
  }
  public resetLogicalRouter() {
    this._logicalRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRouterInput() {
    return this._logicalRouter;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // private_interfaces - computed: false, optional: true, required: false
  private _privateInterfaces = new AutoVpnClusterGatewaysPrivateInterfacesList(this, "private_interfaces", false);
  public get privateInterfaces() {
    return this._privateInterfaces;
  }
  public putPrivateInterfaces(value: AutoVpnClusterGatewaysPrivateInterfaces[] | cdktf.IResolvable) {
    this._privateInterfaces.internalValue = value;
  }
  public resetPrivateInterfaces() {
    this._privateInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInterfacesInput() {
    return this._privateInterfaces.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }
}

export class AutoVpnClusterGatewaysList extends cdktf.ComplexList {
  public internalValue? : AutoVpnClusterGateways[] | cdktf.IResolvable

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
  public get(index: number): AutoVpnClusterGatewaysOutputReference {
    return new AutoVpnClusterGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster scm_auto_vpn_cluster}
*/
export class AutoVpnCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_auto_vpn_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoVpnCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoVpnCluster to import
  * @param importFromId The id of the existing AutoVpnCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoVpnCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_auto_vpn_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_cluster scm_auto_vpn_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoVpnClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutoVpnClusterConfig = {}) {
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
    this._branches.internalValue = config.branches;
    this._enableMeshBetweenHubs = config.enableMeshBetweenHubs;
    this._enableMeshInterconnect = config.enableMeshInterconnect;
    this._enableSdwan = config.enableSdwan;
    this._gateways.internalValue = config.gateways;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches - computed: false, optional: true, required: false
  private _branches = new AutoVpnClusterBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: AutoVpnClusterBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // enable_mesh_between_hubs - computed: false, optional: true, required: false
  private _enableMeshBetweenHubs?: boolean | cdktf.IResolvable; 
  public get enableMeshBetweenHubs() {
    return this.getBooleanAttribute('enable_mesh_between_hubs');
  }
  public set enableMeshBetweenHubs(value: boolean | cdktf.IResolvable) {
    this._enableMeshBetweenHubs = value;
  }
  public resetEnableMeshBetweenHubs() {
    this._enableMeshBetweenHubs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMeshBetweenHubsInput() {
    return this._enableMeshBetweenHubs;
  }

  // enable_mesh_interconnect - computed: false, optional: true, required: false
  private _enableMeshInterconnect?: boolean | cdktf.IResolvable; 
  public get enableMeshInterconnect() {
    return this.getBooleanAttribute('enable_mesh_interconnect');
  }
  public set enableMeshInterconnect(value: boolean | cdktf.IResolvable) {
    this._enableMeshInterconnect = value;
  }
  public resetEnableMeshInterconnect() {
    this._enableMeshInterconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMeshInterconnectInput() {
    return this._enableMeshInterconnect;
  }

  // enable_sdwan - computed: false, optional: true, required: false
  private _enableSdwan?: boolean | cdktf.IResolvable; 
  public get enableSdwan() {
    return this.getBooleanAttribute('enable_sdwan');
  }
  public set enableSdwan(value: boolean | cdktf.IResolvable) {
    this._enableSdwan = value;
  }
  public resetEnableSdwan() {
    this._enableSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSdwanInput() {
    return this._enableSdwan;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new AutoVpnClusterGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: AutoVpnClusterGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branches: cdktf.listMapper(autoVpnClusterBranchesToTerraform, false)(this._branches.internalValue),
      enable_mesh_between_hubs: cdktf.booleanToTerraform(this._enableMeshBetweenHubs),
      enable_mesh_interconnect: cdktf.booleanToTerraform(this._enableMeshInterconnect),
      enable_sdwan: cdktf.booleanToTerraform(this._enableSdwan),
      gateways: cdktf.listMapper(autoVpnClusterGatewaysToTerraform, false)(this._gateways.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branches: {
        value: cdktf.listMapperHcl(autoVpnClusterBranchesToHclTerraform, false)(this._branches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoVpnClusterBranchesList",
      },
      enable_mesh_between_hubs: {
        value: cdktf.booleanToHclTerraform(this._enableMeshBetweenHubs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_mesh_interconnect: {
        value: cdktf.booleanToHclTerraform(this._enableMeshInterconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sdwan: {
        value: cdktf.booleanToHclTerraform(this._enableSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateways: {
        value: cdktf.listMapperHcl(autoVpnClusterGatewaysToHclTerraform, false)(this._gateways.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoVpnClusterGatewaysList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
