// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOnboardingDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#app_name AppOnboardingDns#app_name}
  */
  readonly appName: string;
  /**
  * Set this to true if you would like app to be offboarded from fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#decommission_app AppOnboardingDns#decommission_app}
  */
  readonly decommissionApp: boolean | cdktf.IResolvable;
  /**
  * Setting this to true would leverage multi clouds to optimize the app performance 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#enable_multi_cloud_access AppOnboardingDns#enable_multi_cloud_access}
  */
  readonly enableMultiCloudAccess?: boolean | cdktf.IResolvable;
  /**
  * Force app offboarding incase of normal offboarding failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#force_offboard AppOnboardingDns#force_offboard}
  */
  readonly forceOffboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#id AppOnboardingDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#idp_name AppOnboardingDns#idp_name}
  */
  readonly idpName?: string;
  /**
  * Set this to true if you would like app to be onboarded to fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#onboard_app AppOnboardingDns#onboard_app}
  */
  readonly onboardApp: boolean | cdktf.IResolvable;
  /**
  * Optimization option for app: e.g: CostSaving, PerformanceEnhanced, FastLane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#optimization_option AppOnboardingDns#optimization_option}
  */
  readonly optimizationOption: string;
  /**
  *  Select policy name.e.g: ALLOW-ALL-USERS, DENY-ALL-USERS or CUSTOMIZE.Conditional access policies and Web Application Firewall policies for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#policy_name AppOnboardingDns#policy_name}
  */
  readonly policyName: string[];
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#wait_for_rollout AppOnboardingDns#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * app_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#app_urls AppOnboardingDns#app_urls}
  */
  readonly appUrls: AppOnboardingDnsAppUrls[] | cdktf.IResolvable;
  /**
  * customize_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#customize_policy AppOnboardingDns#customize_policy}
  */
  readonly customizePolicy?: AppOnboardingDnsCustomizePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#timeouts AppOnboardingDns#timeouts}
  */
  readonly timeouts?: AppOnboardingDnsTimeouts;
}
export interface AppOnboardingDnsAppUrlsCloudConfigEdgeRegions {
  /**
  * App network id details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#app_network_id AppOnboardingDns#app_network_id}
  */
  readonly appNetworkId?: string;
  /**
  * Attach Point id details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#attach_point_id AppOnboardingDns#attach_point_id}
  */
  readonly attachPointId?: string;
  /**
  * if Set to true, auto discovers available endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#backend_ip_address_discover AppOnboardingDns#backend_ip_address_discover}
  */
  readonly backendIpAddressDiscover: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#backend_ip_address_dns AppOnboardingDns#backend_ip_address_dns}
  */
  readonly backendIpAddressDns?: boolean | cdktf.IResolvable;
  /**
  * Pass endpoints manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#backend_ip_address_manual AppOnboardingDns#backend_ip_address_manual}
  */
  readonly backendIpAddressManual?: string[];
  /**
  * Connection option for private connection: e.g: peering/transitGateway/awsPrivateLink/azurePrivateLink/azureTransitVnet/vwanHub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#conn_option AppOnboardingDns#conn_option}
  */
  readonly connOption?: string;
  /**
  * Name of the region where app is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#region_name AppOnboardingDns#region_name}
  */
  readonly regionName?: string;
  /**
  * Type of region: e.g:active, backup etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#region_type AppOnboardingDns#region_type}
  */
  readonly regionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#tgw_app_routetable AppOnboardingDns#tgw_app_routetable}
  */
  readonly tgwAppRoutetable?: string;
}

export function appOnboardingDnsAppUrlsCloudConfigEdgeRegionsToTerraform(struct?: AppOnboardingDnsAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_network_id: cdktf.stringToTerraform(struct!.appNetworkId),
    attach_point_id: cdktf.stringToTerraform(struct!.attachPointId),
    backend_ip_address_discover: cdktf.booleanToTerraform(struct!.backendIpAddressDiscover),
    backend_ip_address_dns: cdktf.booleanToTerraform(struct!.backendIpAddressDns),
    backend_ip_address_manual: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendIpAddressManual),
    conn_option: cdktf.stringToTerraform(struct!.connOption),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    region_type: cdktf.stringToTerraform(struct!.regionType),
    tgw_app_routetable: cdktf.stringToTerraform(struct!.tgwAppRoutetable),
  }
}


export function appOnboardingDnsAppUrlsCloudConfigEdgeRegionsToHclTerraform(struct?: AppOnboardingDnsAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_network_id: {
      value: cdktf.stringToHclTerraform(struct!.appNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_point_id: {
      value: cdktf.stringToHclTerraform(struct!.attachPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_ip_address_discover: {
      value: cdktf.booleanToHclTerraform(struct!.backendIpAddressDiscover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_ip_address_dns: {
      value: cdktf.booleanToHclTerraform(struct!.backendIpAddressDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_ip_address_manual: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendIpAddressManual),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_option: {
      value: cdktf.stringToHclTerraform(struct!.connOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_type: {
      value: cdktf.stringToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgw_app_routetable: {
      value: cdktf.stringToHclTerraform(struct!.tgwAppRoutetable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingDnsAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appNetworkId = this._appNetworkId;
    }
    if (this._attachPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPointId = this._attachPointId;
    }
    if (this._backendIpAddressDiscover !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendIpAddressDiscover = this._backendIpAddressDiscover;
    }
    if (this._backendIpAddressDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendIpAddressDns = this._backendIpAddressDns;
    }
    if (this._backendIpAddressManual !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendIpAddressManual = this._backendIpAddressManual;
    }
    if (this._connOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.connOption = this._connOption;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    if (this._tgwAppRoutetable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAppRoutetable = this._tgwAppRoutetable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appNetworkId = undefined;
      this._attachPointId = undefined;
      this._backendIpAddressDiscover = undefined;
      this._backendIpAddressDns = undefined;
      this._backendIpAddressManual = undefined;
      this._connOption = undefined;
      this._regionName = undefined;
      this._regionType = undefined;
      this._tgwAppRoutetable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appNetworkId = value.appNetworkId;
      this._attachPointId = value.attachPointId;
      this._backendIpAddressDiscover = value.backendIpAddressDiscover;
      this._backendIpAddressDns = value.backendIpAddressDns;
      this._backendIpAddressManual = value.backendIpAddressManual;
      this._connOption = value.connOption;
      this._regionName = value.regionName;
      this._regionType = value.regionType;
      this._tgwAppRoutetable = value.tgwAppRoutetable;
    }
  }

  // app_network_id - computed: false, optional: true, required: false
  private _appNetworkId?: string; 
  public get appNetworkId() {
    return this.getStringAttribute('app_network_id');
  }
  public set appNetworkId(value: string) {
    this._appNetworkId = value;
  }
  public resetAppNetworkId() {
    this._appNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkIdInput() {
    return this._appNetworkId;
  }

  // attach_point_id - computed: false, optional: true, required: false
  private _attachPointId?: string; 
  public get attachPointId() {
    return this.getStringAttribute('attach_point_id');
  }
  public set attachPointId(value: string) {
    this._attachPointId = value;
  }
  public resetAttachPointId() {
    this._attachPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPointIdInput() {
    return this._attachPointId;
  }

  // backend_ip_address_discover - computed: false, optional: false, required: true
  private _backendIpAddressDiscover?: boolean | cdktf.IResolvable; 
  public get backendIpAddressDiscover() {
    return this.getBooleanAttribute('backend_ip_address_discover');
  }
  public set backendIpAddressDiscover(value: boolean | cdktf.IResolvable) {
    this._backendIpAddressDiscover = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIpAddressDiscoverInput() {
    return this._backendIpAddressDiscover;
  }

  // backend_ip_address_dns - computed: false, optional: true, required: false
  private _backendIpAddressDns?: boolean | cdktf.IResolvable; 
  public get backendIpAddressDns() {
    return this.getBooleanAttribute('backend_ip_address_dns');
  }
  public set backendIpAddressDns(value: boolean | cdktf.IResolvable) {
    this._backendIpAddressDns = value;
  }
  public resetBackendIpAddressDns() {
    this._backendIpAddressDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIpAddressDnsInput() {
    return this._backendIpAddressDns;
  }

  // backend_ip_address_manual - computed: false, optional: true, required: false
  private _backendIpAddressManual?: string[]; 
  public get backendIpAddressManual() {
    return this.getListAttribute('backend_ip_address_manual');
  }
  public set backendIpAddressManual(value: string[]) {
    this._backendIpAddressManual = value;
  }
  public resetBackendIpAddressManual() {
    this._backendIpAddressManual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIpAddressManualInput() {
    return this._backendIpAddressManual;
  }

  // conn_option - computed: false, optional: true, required: false
  private _connOption?: string; 
  public get connOption() {
    return this.getStringAttribute('conn_option');
  }
  public set connOption(value: string) {
    this._connOption = value;
  }
  public resetConnOption() {
    this._connOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connOptionInput() {
    return this._connOption;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // region_type - computed: false, optional: true, required: false
  private _regionType?: string; 
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
  public set regionType(value: string) {
    this._regionType = value;
  }
  public resetRegionType() {
    this._regionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }

  // tgw_app_routetable - computed: false, optional: true, required: false
  private _tgwAppRoutetable?: string; 
  public get tgwAppRoutetable() {
    return this.getStringAttribute('tgw_app_routetable');
  }
  public set tgwAppRoutetable(value: string) {
    this._tgwAppRoutetable = value;
  }
  public resetTgwAppRoutetable() {
    this._tgwAppRoutetable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAppRoutetableInput() {
    return this._tgwAppRoutetable;
  }
}

export class AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingDnsAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsOutputReference {
    return new AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingDnsAppUrlsCloudConfig {
  /**
  * Wheather app is hosted in Public cloud like AWS/AZURE/GCP or private DC. Available options PRIVATE/PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#app_hosted_type AppOnboardingDns#app_hosted_type}
  */
  readonly appHostedType?: string;
  /**
  * cloud account under which application is hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#cloud_creds_name AppOnboardingDns#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * Public, if the app domain has a public IP address / DNS A record on the internet currently, and the Prosimo Edge should connect to the application using a public connection.Private, if the application only has a private IP address, and Edge should connect to it over a private connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#connection_option AppOnboardingDns#connection_option}
  */
  readonly connectionOption: string;
  /**
  * Applicable only if  app_hosted_type is PRIVATE, IP of the app hosted in PRIVATE DC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#dc_app_ip AppOnboardingDns#dc_app_ip}
  */
  readonly dcAppIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#has_private_connection_options AppOnboardingDns#has_private_connection_options}
  */
  readonly hasPrivateConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#is_show_connection_options AppOnboardingDns#is_show_connection_options}
  */
  readonly isShowConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * edge_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#edge_regions AppOnboardingDns#edge_regions}
  */
  readonly edgeRegions?: AppOnboardingDnsAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable;
}

export function appOnboardingDnsAppUrlsCloudConfigToTerraform(struct?: AppOnboardingDnsAppUrlsCloudConfigOutputReference | AppOnboardingDnsAppUrlsCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_hosted_type: cdktf.stringToTerraform(struct!.appHostedType),
    cloud_creds_name: cdktf.stringToTerraform(struct!.cloudCredsName),
    connection_option: cdktf.stringToTerraform(struct!.connectionOption),
    dc_app_ip: cdktf.stringToTerraform(struct!.dcAppIp),
    has_private_connection_options: cdktf.booleanToTerraform(struct!.hasPrivateConnectionOptions),
    is_show_connection_options: cdktf.booleanToTerraform(struct!.isShowConnectionOptions),
    edge_regions: cdktf.listMapper(appOnboardingDnsAppUrlsCloudConfigEdgeRegionsToTerraform, true)(struct!.edgeRegions),
  }
}


export function appOnboardingDnsAppUrlsCloudConfigToHclTerraform(struct?: AppOnboardingDnsAppUrlsCloudConfigOutputReference | AppOnboardingDnsAppUrlsCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_hosted_type: {
      value: cdktf.stringToHclTerraform(struct!.appHostedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_creds_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_option: {
      value: cdktf.stringToHclTerraform(struct!.connectionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc_app_ip: {
      value: cdktf.stringToHclTerraform(struct!.dcAppIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_private_connection_options: {
      value: cdktf.booleanToHclTerraform(struct!.hasPrivateConnectionOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_show_connection_options: {
      value: cdktf.booleanToHclTerraform(struct!.isShowConnectionOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_regions: {
      value: cdktf.listMapperHcl(appOnboardingDnsAppUrlsCloudConfigEdgeRegionsToHclTerraform, true)(struct!.edgeRegions),
      isBlock: true,
      type: "list",
      storageClassType: "AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsAppUrlsCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingDnsAppUrlsCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appHostedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appHostedType = this._appHostedType;
    }
    if (this._cloudCredsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredsName = this._cloudCredsName;
    }
    if (this._connectionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOption = this._connectionOption;
    }
    if (this._dcAppIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcAppIp = this._dcAppIp;
    }
    if (this._hasPrivateConnectionOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasPrivateConnectionOptions = this._hasPrivateConnectionOptions;
    }
    if (this._isShowConnectionOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShowConnectionOptions = this._isShowConnectionOptions;
    }
    if (this._edgeRegions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeRegions = this._edgeRegions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsAppUrlsCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appHostedType = undefined;
      this._cloudCredsName = undefined;
      this._connectionOption = undefined;
      this._dcAppIp = undefined;
      this._hasPrivateConnectionOptions = undefined;
      this._isShowConnectionOptions = undefined;
      this._edgeRegions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appHostedType = value.appHostedType;
      this._cloudCredsName = value.cloudCredsName;
      this._connectionOption = value.connectionOption;
      this._dcAppIp = value.dcAppIp;
      this._hasPrivateConnectionOptions = value.hasPrivateConnectionOptions;
      this._isShowConnectionOptions = value.isShowConnectionOptions;
      this._edgeRegions.internalValue = value.edgeRegions;
    }
  }

  // app_hosted_type - computed: false, optional: true, required: false
  private _appHostedType?: string; 
  public get appHostedType() {
    return this.getStringAttribute('app_hosted_type');
  }
  public set appHostedType(value: string) {
    this._appHostedType = value;
  }
  public resetAppHostedType() {
    this._appHostedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appHostedTypeInput() {
    return this._appHostedType;
  }

  // cloud_creds_name - computed: false, optional: false, required: true
  private _cloudCredsName?: string; 
  public get cloudCredsName() {
    return this.getStringAttribute('cloud_creds_name');
  }
  public set cloudCredsName(value: string) {
    this._cloudCredsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsNameInput() {
    return this._cloudCredsName;
  }

  // connection_option - computed: false, optional: false, required: true
  private _connectionOption?: string; 
  public get connectionOption() {
    return this.getStringAttribute('connection_option');
  }
  public set connectionOption(value: string) {
    this._connectionOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionInput() {
    return this._connectionOption;
  }

  // dc_app_ip - computed: false, optional: true, required: false
  private _dcAppIp?: string; 
  public get dcAppIp() {
    return this.getStringAttribute('dc_app_ip');
  }
  public set dcAppIp(value: string) {
    this._dcAppIp = value;
  }
  public resetDcAppIp() {
    this._dcAppIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcAppIpInput() {
    return this._dcAppIp;
  }

  // has_private_connection_options - computed: false, optional: true, required: false
  private _hasPrivateConnectionOptions?: boolean | cdktf.IResolvable; 
  public get hasPrivateConnectionOptions() {
    return this.getBooleanAttribute('has_private_connection_options');
  }
  public set hasPrivateConnectionOptions(value: boolean | cdktf.IResolvable) {
    this._hasPrivateConnectionOptions = value;
  }
  public resetHasPrivateConnectionOptions() {
    this._hasPrivateConnectionOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPrivateConnectionOptionsInput() {
    return this._hasPrivateConnectionOptions;
  }

  // is_show_connection_options - computed: false, optional: true, required: false
  private _isShowConnectionOptions?: boolean | cdktf.IResolvable; 
  public get isShowConnectionOptions() {
    return this.getBooleanAttribute('is_show_connection_options');
  }
  public set isShowConnectionOptions(value: boolean | cdktf.IResolvable) {
    this._isShowConnectionOptions = value;
  }
  public resetIsShowConnectionOptions() {
    this._isShowConnectionOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShowConnectionOptionsInput() {
    return this._isShowConnectionOptions;
  }

  // edge_regions - computed: false, optional: true, required: false
  private _edgeRegions = new AppOnboardingDnsAppUrlsCloudConfigEdgeRegionsList(this, "edge_regions", false);
  public get edgeRegions() {
    return this._edgeRegions;
  }
  public putEdgeRegions(value: AppOnboardingDnsAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable) {
    this._edgeRegions.internalValue = value;
  }
  public resetEdgeRegions() {
    this._edgeRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeRegionsInput() {
    return this._edgeRegions.internalValue;
  }
}
export interface AppOnboardingDnsAppUrlsProtocols {
  /**
  * Customized websocket paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#paths AppOnboardingDns#paths}
  */
  readonly paths?: string[];
  /**
  * target port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#port_list AppOnboardingDns#port_list}
  */
  readonly portList?: string[];
  /**
  * Protocol type, e.g: “http”, “https”, “ssh”, “vnc”, or “rdp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#protocol AppOnboardingDns#protocol}
  */
  readonly protocol?: string;
  /**
  * Set to true if tou would like prosimo edges to communicate with app via websocket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#web_socket_enabled AppOnboardingDns#web_socket_enabled}
  */
  readonly webSocketEnabled?: boolean | cdktf.IResolvable;
}

export function appOnboardingDnsAppUrlsProtocolsToTerraform(struct?: AppOnboardingDnsAppUrlsProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    port_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portList),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    web_socket_enabled: cdktf.booleanToTerraform(struct!.webSocketEnabled),
  }
}


export function appOnboardingDnsAppUrlsProtocolsToHclTerraform(struct?: AppOnboardingDnsAppUrlsProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_socket_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.webSocketEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsAppUrlsProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingDnsAppUrlsProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._webSocketEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocketEnabled = this._webSocketEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsAppUrlsProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._portList = undefined;
      this._protocol = undefined;
      this._webSocketEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._portList = value.portList;
      this._protocol = value.protocol;
      this._webSocketEnabled = value.webSocketEnabled;
    }
  }

  // is_valid_protocol_port - computed: true, optional: false, required: false
  public get isValidProtocolPort() {
    return this.getBooleanAttribute('is_valid_protocol_port');
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string[]; 
  public get portList() {
    return this.getListAttribute('port_list');
  }
  public set portList(value: string[]) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // web_socket_enabled - computed: false, optional: true, required: false
  private _webSocketEnabled?: boolean | cdktf.IResolvable; 
  public get webSocketEnabled() {
    return this.getBooleanAttribute('web_socket_enabled');
  }
  public set webSocketEnabled(value: boolean | cdktf.IResolvable) {
    this._webSocketEnabled = value;
  }
  public resetWebSocketEnabled() {
    this._webSocketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketEnabledInput() {
    return this._webSocketEnabled;
  }
}

export class AppOnboardingDnsAppUrlsProtocolsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingDnsAppUrlsProtocols[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingDnsAppUrlsProtocolsOutputReference {
    return new AppOnboardingDnsAppUrlsProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingDnsAppUrls {
  /**
  * Fqdn of the app that user would access after onboarding 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#app_fqdn AppOnboardingDns#app_fqdn}
  */
  readonly appFqdn: string;
  /**
  * Service Ip Address 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#service_ip AppOnboardingDns#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Select if the target needs to be assigned a specific IP address or it could be auto-generated. Even if manually assigned, the address needs to be from the service core IP pool. Default method is to auto generate an IP address from the service core pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#service_ip_type AppOnboardingDns#service_ip_type}
  */
  readonly serviceIpType: string;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#cloud_config AppOnboardingDns#cloud_config}
  */
  readonly cloudConfig: AppOnboardingDnsAppUrlsCloudConfig;
  /**
  * protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#protocols AppOnboardingDns#protocols}
  */
  readonly protocols: AppOnboardingDnsAppUrlsProtocols[] | cdktf.IResolvable;
}

export function appOnboardingDnsAppUrlsToTerraform(struct?: AppOnboardingDnsAppUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_fqdn: cdktf.stringToTerraform(struct!.appFqdn),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    service_ip_type: cdktf.stringToTerraform(struct!.serviceIpType),
    cloud_config: appOnboardingDnsAppUrlsCloudConfigToTerraform(struct!.cloudConfig),
    protocols: cdktf.listMapper(appOnboardingDnsAppUrlsProtocolsToTerraform, true)(struct!.protocols),
  }
}


export function appOnboardingDnsAppUrlsToHclTerraform(struct?: AppOnboardingDnsAppUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.appFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_config: {
      value: appOnboardingDnsAppUrlsCloudConfigToHclTerraform(struct!.cloudConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingDnsAppUrlsCloudConfigList",
    },
    protocols: {
      value: cdktf.listMapperHcl(appOnboardingDnsAppUrlsProtocolsToHclTerraform, true)(struct!.protocols),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingDnsAppUrlsProtocolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsAppUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingDnsAppUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFqdn = this._appFqdn;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._serviceIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpType = this._serviceIpType;
    }
    if (this._cloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudConfig = this._cloudConfig?.internalValue;
    }
    if (this._protocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsAppUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appFqdn = undefined;
      this._serviceIp = undefined;
      this._serviceIpType = undefined;
      this._cloudConfig.internalValue = undefined;
      this._protocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appFqdn = value.appFqdn;
      this._serviceIp = value.serviceIp;
      this._serviceIpType = value.serviceIpType;
      this._cloudConfig.internalValue = value.cloudConfig;
      this._protocols.internalValue = value.protocols;
    }
  }

  // app_fqdn - computed: false, optional: false, required: true
  private _appFqdn?: string; 
  public get appFqdn() {
    return this.getStringAttribute('app_fqdn');
  }
  public set appFqdn(value: string) {
    this._appFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appFqdnInput() {
    return this._appFqdn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // service_ip_type - computed: false, optional: false, required: true
  private _serviceIpType?: string; 
  public get serviceIpType() {
    return this.getStringAttribute('service_ip_type');
  }
  public set serviceIpType(value: string) {
    this._serviceIpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpTypeInput() {
    return this._serviceIpType;
  }

  // cloud_config - computed: false, optional: false, required: true
  private _cloudConfig = new AppOnboardingDnsAppUrlsCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: AppOnboardingDnsAppUrlsCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols = new AppOnboardingDnsAppUrlsProtocolsList(this, "protocols", true);
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: AppOnboardingDnsAppUrlsProtocols[] | cdktf.IResolvable) {
    this._protocols.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }
}

export class AppOnboardingDnsAppUrlsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingDnsAppUrls[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingDnsAppUrlsOutputReference {
    return new AppOnboardingDnsAppUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingDnsCustomizePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#name AppOnboardingDns#name}
  */
  readonly name?: string;
}

export function appOnboardingDnsCustomizePolicyToTerraform(struct?: AppOnboardingDnsCustomizePolicyOutputReference | AppOnboardingDnsCustomizePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appOnboardingDnsCustomizePolicyToHclTerraform(struct?: AppOnboardingDnsCustomizePolicyOutputReference | AppOnboardingDnsCustomizePolicy): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsCustomizePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingDnsCustomizePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsCustomizePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface AppOnboardingDnsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#create AppOnboardingDns#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#delete AppOnboardingDns#delete}
  */
  readonly delete?: string;
}

export function appOnboardingDnsTimeoutsToTerraform(struct?: AppOnboardingDnsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function appOnboardingDnsTimeoutsToHclTerraform(struct?: AppOnboardingDnsTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingDnsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppOnboardingDnsTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingDnsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns prosimo_app_onboarding_dns}
*/
export class AppOnboardingDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_app_onboarding_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppOnboardingDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppOnboardingDns to import
  * @param importFromId The id of the existing AppOnboardingDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppOnboardingDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_app_onboarding_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_dns prosimo_app_onboarding_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOnboardingDnsConfig
  */
  public constructor(scope: Construct, id: string, config: AppOnboardingDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_app_onboarding_dns',
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
    this._appName = config.appName;
    this._decommissionApp = config.decommissionApp;
    this._enableMultiCloudAccess = config.enableMultiCloudAccess;
    this._forceOffboard = config.forceOffboard;
    this._id = config.id;
    this._idpName = config.idpName;
    this._onboardApp = config.onboardApp;
    this._optimizationOption = config.optimizationOption;
    this._policyName = config.policyName;
    this._waitForRollout = config.waitForRollout;
    this._appUrls.internalValue = config.appUrls;
    this._customizePolicy.internalValue = config.customizePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_access_type - computed: true, optional: false, required: false
  public get appAccessType() {
    return this.getStringAttribute('app_access_type');
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // decommission_app - computed: false, optional: false, required: true
  private _decommissionApp?: boolean | cdktf.IResolvable; 
  public get decommissionApp() {
    return this.getBooleanAttribute('decommission_app');
  }
  public set decommissionApp(value: boolean | cdktf.IResolvable) {
    this._decommissionApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionAppInput() {
    return this._decommissionApp;
  }

  // enable_multi_cloud_access - computed: false, optional: true, required: false
  private _enableMultiCloudAccess?: boolean | cdktf.IResolvable; 
  public get enableMultiCloudAccess() {
    return this.getBooleanAttribute('enable_multi_cloud_access');
  }
  public set enableMultiCloudAccess(value: boolean | cdktf.IResolvable) {
    this._enableMultiCloudAccess = value;
  }
  public resetEnableMultiCloudAccess() {
    this._enableMultiCloudAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiCloudAccessInput() {
    return this._enableMultiCloudAccess;
  }

  // force_offboard - computed: false, optional: true, required: false
  private _forceOffboard?: boolean | cdktf.IResolvable; 
  public get forceOffboard() {
    return this.getBooleanAttribute('force_offboard');
  }
  public set forceOffboard(value: boolean | cdktf.IResolvable) {
    this._forceOffboard = value;
  }
  public resetForceOffboard() {
    this._forceOffboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOffboardInput() {
    return this._forceOffboard;
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

  // idp_name - computed: false, optional: true, required: false
  private _idpName?: string; 
  public get idpName() {
    return this.getStringAttribute('idp_name');
  }
  public set idpName(value: string) {
    this._idpName = value;
  }
  public resetIdpName() {
    this._idpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpNameInput() {
    return this._idpName;
  }

  // onboard_app - computed: false, optional: false, required: true
  private _onboardApp?: boolean | cdktf.IResolvable; 
  public get onboardApp() {
    return this.getBooleanAttribute('onboard_app');
  }
  public set onboardApp(value: boolean | cdktf.IResolvable) {
    this._onboardApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardAppInput() {
    return this._onboardApp;
  }

  // optimization_option - computed: false, optional: false, required: true
  private _optimizationOption?: string; 
  public get optimizationOption() {
    return this.getStringAttribute('optimization_option');
  }
  public set optimizationOption(value: string) {
    this._optimizationOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationOptionInput() {
    return this._optimizationOption;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string[]; 
  public get policyName() {
    return this.getListAttribute('policy_name');
  }
  public set policyName(value: string[]) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // app_urls - computed: false, optional: false, required: true
  private _appUrls = new AppOnboardingDnsAppUrlsList(this, "app_urls", true);
  public get appUrls() {
    return this._appUrls;
  }
  public putAppUrls(value: AppOnboardingDnsAppUrls[] | cdktf.IResolvable) {
    this._appUrls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlsInput() {
    return this._appUrls.internalValue;
  }

  // customize_policy - computed: false, optional: true, required: false
  private _customizePolicy = new AppOnboardingDnsCustomizePolicyOutputReference(this, "customize_policy");
  public get customizePolicy() {
    return this._customizePolicy;
  }
  public putCustomizePolicy(value: AppOnboardingDnsCustomizePolicy) {
    this._customizePolicy.internalValue = value;
  }
  public resetCustomizePolicy() {
    this._customizePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizePolicyInput() {
    return this._customizePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppOnboardingDnsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppOnboardingDnsTimeouts) {
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
      app_name: cdktf.stringToTerraform(this._appName),
      decommission_app: cdktf.booleanToTerraform(this._decommissionApp),
      enable_multi_cloud_access: cdktf.booleanToTerraform(this._enableMultiCloudAccess),
      force_offboard: cdktf.booleanToTerraform(this._forceOffboard),
      id: cdktf.stringToTerraform(this._id),
      idp_name: cdktf.stringToTerraform(this._idpName),
      onboard_app: cdktf.booleanToTerraform(this._onboardApp),
      optimization_option: cdktf.stringToTerraform(this._optimizationOption),
      policy_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyName),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      app_urls: cdktf.listMapper(appOnboardingDnsAppUrlsToTerraform, true)(this._appUrls.internalValue),
      customize_policy: appOnboardingDnsCustomizePolicyToTerraform(this._customizePolicy.internalValue),
      timeouts: appOnboardingDnsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decommission_app: {
        value: cdktf.booleanToHclTerraform(this._decommissionApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_multi_cloud_access: {
        value: cdktf.booleanToHclTerraform(this._enableMultiCloudAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_offboard: {
        value: cdktf.booleanToHclTerraform(this._forceOffboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_name: {
        value: cdktf.stringToHclTerraform(this._idpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboard_app: {
        value: cdktf.booleanToHclTerraform(this._onboardApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimization_option: {
        value: cdktf.stringToHclTerraform(this._optimizationOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_urls: {
        value: cdktf.listMapperHcl(appOnboardingDnsAppUrlsToHclTerraform, true)(this._appUrls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingDnsAppUrlsList",
      },
      customize_policy: {
        value: appOnboardingDnsCustomizePolicyToHclTerraform(this._customizePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingDnsCustomizePolicyList",
      },
      timeouts: {
        value: appOnboardingDnsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppOnboardingDnsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
