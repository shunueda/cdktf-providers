// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceSiteToSiteVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#hubs ApplianceSiteToSiteVpn#hubs}
  */
  readonly hubs?: ApplianceSiteToSiteVpnHubs[] | cdktf.IResolvable;
  /**
  * The site-to-site VPN mode. Can be one of `none`, `spoke` or `hub`
  *   - Choices: `hub`, `none`, `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#mode ApplianceSiteToSiteVpn#mode}
  */
  readonly mode: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#network_id ApplianceSiteToSiteVpn#network_id}
  */
  readonly networkId: string;
  /**
  * If enabled, VPN subnet translation can be used to translate any local subnets that are allowed to use the VPN into a new subnet with the same number of addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#subnet_nat_is_allowed ApplianceSiteToSiteVpn#subnet_nat_is_allowed}
  */
  readonly subnetNatIsAllowed?: boolean | cdktf.IResolvable;
  /**
  * The list of subnets and their VPN presence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#subnets ApplianceSiteToSiteVpn#subnets}
  */
  readonly subnets?: ApplianceSiteToSiteVpnSubnets[] | cdktf.IResolvable;
}
export interface ApplianceSiteToSiteVpnHubs {
  /**
  * The network ID of the hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#hub_id ApplianceSiteToSiteVpn#hub_id}
  */
  readonly hubId: string;
  /**
  * Only valid in `spoke` mode. Indicates whether default route traffic should be sent to this hub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#use_default_route ApplianceSiteToSiteVpn#use_default_route}
  */
  readonly useDefaultRoute?: boolean | cdktf.IResolvable;
}

export function applianceSiteToSiteVpnHubsToTerraform(struct?: ApplianceSiteToSiteVpnHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hub_id: cdktf.stringToTerraform(struct!.hubId),
    use_default_route: cdktf.booleanToTerraform(struct!.useDefaultRoute),
  }
}


export function applianceSiteToSiteVpnHubsToHclTerraform(struct?: ApplianceSiteToSiteVpnHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hub_id: {
      value: cdktf.stringToHclTerraform(struct!.hubId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceSiteToSiteVpnHubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSiteToSiteVpnHubs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubId = this._hubId;
    }
    if (this._useDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultRoute = this._useDefaultRoute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSiteToSiteVpnHubs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubId = undefined;
      this._useDefaultRoute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubId = value.hubId;
      this._useDefaultRoute = value.useDefaultRoute;
    }
  }

  // hub_id - computed: false, optional: false, required: true
  private _hubId?: string; 
  public get hubId() {
    return this.getStringAttribute('hub_id');
  }
  public set hubId(value: string) {
    this._hubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubIdInput() {
    return this._hubId;
  }

  // use_default_route - computed: false, optional: true, required: false
  private _useDefaultRoute?: boolean | cdktf.IResolvable; 
  public get useDefaultRoute() {
    return this.getBooleanAttribute('use_default_route');
  }
  public set useDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._useDefaultRoute = value;
  }
  public resetUseDefaultRoute() {
    this._useDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultRouteInput() {
    return this._useDefaultRoute;
  }
}

export class ApplianceSiteToSiteVpnHubsList extends cdktf.ComplexList {
  public internalValue? : ApplianceSiteToSiteVpnHubs[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSiteToSiteVpnHubsOutputReference {
    return new ApplianceSiteToSiteVpnHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceSiteToSiteVpnSubnets {
  /**
  * The CIDR notation subnet used within the VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#local_subnet ApplianceSiteToSiteVpn#local_subnet}
  */
  readonly localSubnet: string;
  /**
  * Whether or not VPN subnet translation is enabled for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#nat_enabled ApplianceSiteToSiteVpn#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * The translated subnet to be used in the VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#nat_remote_subnet ApplianceSiteToSiteVpn#nat_remote_subnet}
  */
  readonly natRemoteSubnet?: string;
  /**
  * Indicates the presence of the subnet in the VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#use_vpn ApplianceSiteToSiteVpn#use_vpn}
  */
  readonly useVpn?: boolean | cdktf.IResolvable;
}

export function applianceSiteToSiteVpnSubnetsToTerraform(struct?: ApplianceSiteToSiteVpnSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_subnet: cdktf.stringToTerraform(struct!.localSubnet),
    nat_enabled: cdktf.booleanToTerraform(struct!.natEnabled),
    nat_remote_subnet: cdktf.stringToTerraform(struct!.natRemoteSubnet),
    use_vpn: cdktf.booleanToTerraform(struct!.useVpn),
  }
}


export function applianceSiteToSiteVpnSubnetsToHclTerraform(struct?: ApplianceSiteToSiteVpnSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_subnet: {
      value: cdktf.stringToHclTerraform(struct!.localSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.natEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_remote_subnet: {
      value: cdktf.stringToHclTerraform(struct!.natRemoteSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vpn: {
      value: cdktf.booleanToHclTerraform(struct!.useVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceSiteToSiteVpnSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSiteToSiteVpnSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet;
    }
    if (this._natEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.natEnabled = this._natEnabled;
    }
    if (this._natRemoteSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRemoteSubnet = this._natRemoteSubnet;
    }
    if (this._useVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVpn = this._useVpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSiteToSiteVpnSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localSubnet = undefined;
      this._natEnabled = undefined;
      this._natRemoteSubnet = undefined;
      this._useVpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localSubnet = value.localSubnet;
      this._natEnabled = value.natEnabled;
      this._natRemoteSubnet = value.natRemoteSubnet;
      this._useVpn = value.useVpn;
    }
  }

  // local_subnet - computed: false, optional: false, required: true
  private _localSubnet?: string; 
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }
  public set localSubnet(value: string) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // nat_enabled - computed: false, optional: true, required: false
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  public resetNatEnabled() {
    this._natEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
  }

  // nat_remote_subnet - computed: false, optional: true, required: false
  private _natRemoteSubnet?: string; 
  public get natRemoteSubnet() {
    return this.getStringAttribute('nat_remote_subnet');
  }
  public set natRemoteSubnet(value: string) {
    this._natRemoteSubnet = value;
  }
  public resetNatRemoteSubnet() {
    this._natRemoteSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRemoteSubnetInput() {
    return this._natRemoteSubnet;
  }

  // use_vpn - computed: false, optional: true, required: false
  private _useVpn?: boolean | cdktf.IResolvable; 
  public get useVpn() {
    return this.getBooleanAttribute('use_vpn');
  }
  public set useVpn(value: boolean | cdktf.IResolvable) {
    this._useVpn = value;
  }
  public resetUseVpn() {
    this._useVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVpnInput() {
    return this._useVpn;
  }
}

export class ApplianceSiteToSiteVpnSubnetsList extends cdktf.ComplexList {
  public internalValue? : ApplianceSiteToSiteVpnSubnets[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSiteToSiteVpnSubnetsOutputReference {
    return new ApplianceSiteToSiteVpnSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn meraki_appliance_site_to_site_vpn}
*/
export class ApplianceSiteToSiteVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_site_to_site_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceSiteToSiteVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceSiteToSiteVpn to import
  * @param importFromId The id of the existing ApplianceSiteToSiteVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceSiteToSiteVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_site_to_site_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_site_to_site_vpn meraki_appliance_site_to_site_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceSiteToSiteVpnConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceSiteToSiteVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_site_to_site_vpn',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hubs.internalValue = config.hubs;
    this._mode = config.mode;
    this._networkId = config.networkId;
    this._subnetNatIsAllowed = config.subnetNatIsAllowed;
    this._subnets.internalValue = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hubs - computed: false, optional: true, required: false
  private _hubs = new ApplianceSiteToSiteVpnHubsList(this, "hubs", false);
  public get hubs() {
    return this._hubs;
  }
  public putHubs(value: ApplianceSiteToSiteVpnHubs[] | cdktf.IResolvable) {
    this._hubs.internalValue = value;
  }
  public resetHubs() {
    this._hubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubsInput() {
    return this._hubs.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_nat_is_allowed - computed: false, optional: true, required: false
  private _subnetNatIsAllowed?: boolean | cdktf.IResolvable; 
  public get subnetNatIsAllowed() {
    return this.getBooleanAttribute('subnet_nat_is_allowed');
  }
  public set subnetNatIsAllowed(value: boolean | cdktf.IResolvable) {
    this._subnetNatIsAllowed = value;
  }
  public resetSubnetNatIsAllowed() {
    this._subnetNatIsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNatIsAllowedInput() {
    return this._subnetNatIsAllowed;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new ApplianceSiteToSiteVpnSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: ApplianceSiteToSiteVpnSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hubs: cdktf.listMapper(applianceSiteToSiteVpnHubsToTerraform, false)(this._hubs.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      network_id: cdktf.stringToTerraform(this._networkId),
      subnet_nat_is_allowed: cdktf.booleanToTerraform(this._subnetNatIsAllowed),
      subnets: cdktf.listMapper(applianceSiteToSiteVpnSubnetsToTerraform, false)(this._subnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hubs: {
        value: cdktf.listMapperHcl(applianceSiteToSiteVpnHubsToHclTerraform, false)(this._hubs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceSiteToSiteVpnHubsList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_nat_is_allowed: {
        value: cdktf.booleanToHclTerraform(this._subnetNatIsAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnets: {
        value: cdktf.listMapperHcl(applianceSiteToSiteVpnSubnetsToHclTerraform, false)(this._subnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceSiteToSiteVpnSubnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
