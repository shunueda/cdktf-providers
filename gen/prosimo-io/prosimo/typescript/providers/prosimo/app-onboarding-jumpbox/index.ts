// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOnboardingJumpboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#app_name AppOnboardingJumpbox#app_name}
  */
  readonly appName: string;
  /**
  * Client Cert details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#client_cert AppOnboardingJumpbox#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Set this to true if you would like app to be offboarded from fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#decommission_app AppOnboardingJumpbox#decommission_app}
  */
  readonly decommissionApp: boolean | cdktf.IResolvable;
  /**
  * Setting this to true would leverage multi clouds to optimize the app performance 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#enable_multi_cloud_access AppOnboardingJumpbox#enable_multi_cloud_access}
  */
  readonly enableMultiCloudAccess?: boolean | cdktf.IResolvable;
  /**
  * Force app offboarding incase of normal offboarding failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#force_offboard AppOnboardingJumpbox#force_offboard}
  */
  readonly forceOffboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#id AppOnboardingJumpbox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#idp_name AppOnboardingJumpbox#idp_name}
  */
  readonly idpName?: string;
  /**
  * Set this to true if you would like app to be onboarded to fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#onboard_app AppOnboardingJumpbox#onboard_app}
  */
  readonly onboardApp: boolean | cdktf.IResolvable;
  /**
  * Optimization option for app: e.g: CostSaving, PerformanceEnhanced, FastLane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#optimization_option AppOnboardingJumpbox#optimization_option}
  */
  readonly optimizationOption: string;
  /**
  * Select policy name.e.g: ALLOW-ALL-USERS, DENY-ALL-USERS or CUSTOMIZE.Conditional access policies and Web Application Firewall policies for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#policy_name AppOnboardingJumpbox#policy_name}
  */
  readonly policyName: string[];
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#wait_for_rollout AppOnboardingJumpbox#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * app_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#app_urls AppOnboardingJumpbox#app_urls}
  */
  readonly appUrls: AppOnboardingJumpboxAppUrls[] | cdktf.IResolvable;
  /**
  * customize_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#customize_policy AppOnboardingJumpbox#customize_policy}
  */
  readonly customizePolicy?: AppOnboardingJumpboxCustomizePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#timeouts AppOnboardingJumpbox#timeouts}
  */
  readonly timeouts?: AppOnboardingJumpboxTimeouts;
}
export interface AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions {
  /**
  * App network id details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#app_network_id AppOnboardingJumpbox#app_network_id}
  */
  readonly appNetworkId?: string;
  /**
  * Attach Point id details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#attach_point_id AppOnboardingJumpbox#attach_point_id}
  */
  readonly attachPointId?: string;
  /**
  * if Set to true, auto discovers available endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#backend_ip_address_discover AppOnboardingJumpbox#backend_ip_address_discover}
  */
  readonly backendIpAddressDiscover: boolean | cdktf.IResolvable;
  /**
  * Pass endpoints manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#backend_ip_address_manual AppOnboardingJumpbox#backend_ip_address_manual}
  */
  readonly backendIpAddressManual?: string[];
  /**
  * Connection option for private connection: e.g: peering/transitGateway/awsPrivateLink/azurePrivateLink/azureTransitVnet/vwanHub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#conn_option AppOnboardingJumpbox#conn_option}
  */
  readonly connOption?: string;
  /**
  * Name of the region where app is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#region_name AppOnboardingJumpbox#region_name}
  */
  readonly regionName?: string;
  /**
  * Type of region: e.g:active, backup etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#region_type AppOnboardingJumpbox#region_type}
  */
  readonly regionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#tgw_app_routetable AppOnboardingJumpbox#tgw_app_routetable}
  */
  readonly tgwAppRoutetable?: string;
}

export function appOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsToTerraform(struct?: AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_network_id: cdktf.stringToTerraform(struct!.appNetworkId),
    attach_point_id: cdktf.stringToTerraform(struct!.attachPointId),
    backend_ip_address_discover: cdktf.booleanToTerraform(struct!.backendIpAddressDiscover),
    backend_ip_address_manual: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendIpAddressManual),
    conn_option: cdktf.stringToTerraform(struct!.connOption),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    region_type: cdktf.stringToTerraform(struct!.regionType),
    tgw_app_routetable: cdktf.stringToTerraform(struct!.tgwAppRoutetable),
  }
}


export function appOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
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

export class AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appNetworkId = undefined;
      this._attachPointId = undefined;
      this._backendIpAddressDiscover = undefined;
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

export class AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsOutputReference {
    return new AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingJumpboxAppUrlsCloudConfig {
  /**
  * Wheather app is hosted in Public cloud like AWS/AZURE/GCP or private DC. Available options PRIVATE/PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#app_hosted_type AppOnboardingJumpbox#app_hosted_type}
  */
  readonly appHostedType?: string;
  /**
  * cloud application account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#cloud_creds_name AppOnboardingJumpbox#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * Public, if the app domain has a public IP address / DNS A record on the internet currently, and the Prosimo Edge should connect to the application using a public connection.Private, if the application only has a private IP address, and Edge should connect to it over a private connection. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#connection_option AppOnboardingJumpbox#connection_option}
  */
  readonly connectionOption?: string;
  /**
  * Applicable only if  app_hosted_type is PRIVATE, IP of the app hosted in PRIVATE DC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#dc_app_ip AppOnboardingJumpbox#dc_app_ip}
  */
  readonly dcAppIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#has_private_connection_options AppOnboardingJumpbox#has_private_connection_options}
  */
  readonly hasPrivateConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#is_show_connection_options AppOnboardingJumpbox#is_show_connection_options}
  */
  readonly isShowConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * edge_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#edge_regions AppOnboardingJumpbox#edge_regions}
  */
  readonly edgeRegions?: AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable;
}

export function appOnboardingJumpboxAppUrlsCloudConfigToTerraform(struct?: AppOnboardingJumpboxAppUrlsCloudConfigOutputReference | AppOnboardingJumpboxAppUrlsCloudConfig): any {
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
    edge_regions: cdktf.listMapper(appOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsToTerraform, true)(struct!.edgeRegions),
  }
}


export function appOnboardingJumpboxAppUrlsCloudConfigToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsCloudConfigOutputReference | AppOnboardingJumpboxAppUrlsCloudConfig): any {
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
      value: cdktf.listMapperHcl(appOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsToHclTerraform, true)(struct!.edgeRegions),
      isBlock: true,
      type: "list",
      storageClassType: "AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingJumpboxAppUrlsCloudConfig | undefined {
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

  public set internalValue(value: AppOnboardingJumpboxAppUrlsCloudConfig | undefined) {
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

  // connection_option - computed: false, optional: true, required: false
  private _connectionOption?: string; 
  public get connectionOption() {
    return this.getStringAttribute('connection_option');
  }
  public set connectionOption(value: string) {
    this._connectionOption = value;
  }
  public resetConnectionOption() {
    this._connectionOption = undefined;
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
  private _edgeRegions = new AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegionsList(this, "edge_regions", false);
  public get edgeRegions() {
    return this._edgeRegions;
  }
  public putEdgeRegions(value: AppOnboardingJumpboxAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable) {
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
export interface AppOnboardingJumpboxAppUrlsDnsService {
  /**
  * Cloud creds for route 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#aws_route53_cloud_creds_name AppOnboardingJumpbox#aws_route53_cloud_creds_name}
  */
  readonly awsRoute53CloudCredsName?: string;
  /**
  * Type of DNS service: e.g: Manual, Route 53, Prosimo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#type AppOnboardingJumpbox#type}
  */
  readonly type: string;
}

export function appOnboardingJumpboxAppUrlsDnsServiceToTerraform(struct?: AppOnboardingJumpboxAppUrlsDnsServiceOutputReference | AppOnboardingJumpboxAppUrlsDnsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_route53_cloud_creds_name: cdktf.stringToTerraform(struct!.awsRoute53CloudCredsName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appOnboardingJumpboxAppUrlsDnsServiceToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsDnsServiceOutputReference | AppOnboardingJumpboxAppUrlsDnsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_route53_cloud_creds_name: {
      value: cdktf.stringToHclTerraform(struct!.awsRoute53CloudCredsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsDnsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingJumpboxAppUrlsDnsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRoute53CloudCredsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoute53CloudCredsName = this._awsRoute53CloudCredsName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxAppUrlsDnsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRoute53CloudCredsName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRoute53CloudCredsName = value.awsRoute53CloudCredsName;
      this._type = value.type;
    }
  }

  // aws_route53_cloud_creds_name - computed: false, optional: true, required: false
  private _awsRoute53CloudCredsName?: string; 
  public get awsRoute53CloudCredsName() {
    return this.getStringAttribute('aws_route53_cloud_creds_name');
  }
  public set awsRoute53CloudCredsName(value: string) {
    this._awsRoute53CloudCredsName = value;
  }
  public resetAwsRoute53CloudCredsName() {
    this._awsRoute53CloudCredsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoute53CloudCredsNameInput() {
    return this._awsRoute53CloudCredsName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AppOnboardingJumpboxAppUrlsHealthCheckInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#enabled AppOnboardingJumpbox#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HealthCheck Endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#endpoint AppOnboardingJumpbox#endpoint}
  */
  readonly endpoint?: string;
}

export function appOnboardingJumpboxAppUrlsHealthCheckInfoToTerraform(struct?: AppOnboardingJumpboxAppUrlsHealthCheckInfoOutputReference | AppOnboardingJumpboxAppUrlsHealthCheckInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function appOnboardingJumpboxAppUrlsHealthCheckInfoToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsHealthCheckInfoOutputReference | AppOnboardingJumpboxAppUrlsHealthCheckInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsHealthCheckInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingJumpboxAppUrlsHealthCheckInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxAppUrlsHealthCheckInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._endpoint = value.endpoint;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppOnboardingJumpboxAppUrlsSslCertUploadCert {
  /**
  * Path to certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#cert_path AppOnboardingJumpbox#cert_path}
  */
  readonly certPath?: string;
  /**
  * Path to private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#private_key_path AppOnboardingJumpbox#private_key_path}
  */
  readonly privateKeyPath?: string;
}

export function appOnboardingJumpboxAppUrlsSslCertUploadCertToTerraform(struct?: AppOnboardingJumpboxAppUrlsSslCertUploadCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
  }
}


export function appOnboardingJumpboxAppUrlsSslCertUploadCertToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsSslCertUploadCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsSslCertUploadCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingJumpboxAppUrlsSslCertUploadCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxAppUrlsSslCertUploadCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certPath = undefined;
      this._privateKeyPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certPath = value.certPath;
      this._privateKeyPath = value.privateKeyPath;
    }
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }
}

export class AppOnboardingJumpboxAppUrlsSslCertUploadCertList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingJumpboxAppUrlsSslCertUploadCert[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingJumpboxAppUrlsSslCertUploadCertOutputReference {
    return new AppOnboardingJumpboxAppUrlsSslCertUploadCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingJumpboxAppUrlsSslCert {
  /**
  * Select from already existing certificates(In Certificate TAB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#existing_cert AppOnboardingJumpbox#existing_cert}
  */
  readonly existingCert?: string;
  /**
  * Set this to true if you want prosimo to generate new certificates 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#generate_cert AppOnboardingJumpbox#generate_cert}
  */
  readonly generateCert?: boolean | cdktf.IResolvable;
  /**
  * upload_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#upload_cert AppOnboardingJumpbox#upload_cert}
  */
  readonly uploadCert?: AppOnboardingJumpboxAppUrlsSslCertUploadCert[] | cdktf.IResolvable;
}

export function appOnboardingJumpboxAppUrlsSslCertToTerraform(struct?: AppOnboardingJumpboxAppUrlsSslCertOutputReference | AppOnboardingJumpboxAppUrlsSslCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_cert: cdktf.stringToTerraform(struct!.existingCert),
    generate_cert: cdktf.booleanToTerraform(struct!.generateCert),
    upload_cert: cdktf.listMapper(appOnboardingJumpboxAppUrlsSslCertUploadCertToTerraform, true)(struct!.uploadCert),
  }
}


export function appOnboardingJumpboxAppUrlsSslCertToHclTerraform(struct?: AppOnboardingJumpboxAppUrlsSslCertOutputReference | AppOnboardingJumpboxAppUrlsSslCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_cert: {
      value: cdktf.stringToHclTerraform(struct!.existingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_cert: {
      value: cdktf.booleanToHclTerraform(struct!.generateCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upload_cert: {
      value: cdktf.listMapperHcl(appOnboardingJumpboxAppUrlsSslCertUploadCertToHclTerraform, true)(struct!.uploadCert),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingJumpboxAppUrlsSslCertUploadCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsSslCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingJumpboxAppUrlsSslCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingCert = this._existingCert;
    }
    if (this._generateCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateCert = this._generateCert;
    }
    if (this._uploadCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadCert = this._uploadCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxAppUrlsSslCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingCert = undefined;
      this._generateCert = undefined;
      this._uploadCert.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingCert = value.existingCert;
      this._generateCert = value.generateCert;
      this._uploadCert.internalValue = value.uploadCert;
    }
  }

  // existing_cert - computed: false, optional: true, required: false
  private _existingCert?: string; 
  public get existingCert() {
    return this.getStringAttribute('existing_cert');
  }
  public set existingCert(value: string) {
    this._existingCert = value;
  }
  public resetExistingCert() {
    this._existingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingCertInput() {
    return this._existingCert;
  }

  // generate_cert - computed: false, optional: true, required: false
  private _generateCert?: boolean | cdktf.IResolvable; 
  public get generateCert() {
    return this.getBooleanAttribute('generate_cert');
  }
  public set generateCert(value: boolean | cdktf.IResolvable) {
    this._generateCert = value;
  }
  public resetGenerateCert() {
    this._generateCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateCertInput() {
    return this._generateCert;
  }

  // upload_cert - computed: false, optional: true, required: false
  private _uploadCert = new AppOnboardingJumpboxAppUrlsSslCertUploadCertList(this, "upload_cert", true);
  public get uploadCert() {
    return this._uploadCert;
  }
  public putUploadCert(value: AppOnboardingJumpboxAppUrlsSslCertUploadCert[] | cdktf.IResolvable) {
    this._uploadCert.internalValue = value;
  }
  public resetUploadCert() {
    this._uploadCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadCertInput() {
    return this._uploadCert.internalValue;
  }
}
export interface AppOnboardingJumpboxAppUrls {
  /**
  * Fqdn of the app that user would access after onboarding 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#app_fqdn AppOnboardingJumpbox#app_fqdn}
  */
  readonly appFqdn: string;
  /**
  * Cache Rules for your App Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#cache_rule AppOnboardingJumpbox#cache_rule}
  */
  readonly cacheRule?: string;
  /**
  * Type of Domain: e.g custom or prosimo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#domain_type AppOnboardingJumpbox#domain_type}
  */
  readonly domainType?: string;
  /**
  * server domain name or IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#internal_domain AppOnboardingJumpbox#internal_domain}
  */
  readonly internalDomain: string;
  /**
  * Set True to onboard subdomains of the application else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#subdomain_included AppOnboardingJumpbox#subdomain_included}
  */
  readonly subdomainIncluded?: boolean | cdktf.IResolvable;
  /**
  * WAF Policies for your App Domains, applicable when the Edge to App Protocol is either HTTP or HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#waf_policy_name AppOnboardingJumpbox#waf_policy_name}
  */
  readonly wafPolicyName?: string;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#cloud_config AppOnboardingJumpbox#cloud_config}
  */
  readonly cloudConfig: AppOnboardingJumpboxAppUrlsCloudConfig;
  /**
  * dns_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#dns_service AppOnboardingJumpbox#dns_service}
  */
  readonly dnsService?: AppOnboardingJumpboxAppUrlsDnsService;
  /**
  * health_check_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#health_check_info AppOnboardingJumpbox#health_check_info}
  */
  readonly healthCheckInfo?: AppOnboardingJumpboxAppUrlsHealthCheckInfo;
  /**
  * ssl_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#ssl_cert AppOnboardingJumpbox#ssl_cert}
  */
  readonly sslCert?: AppOnboardingJumpboxAppUrlsSslCert;
}

export function appOnboardingJumpboxAppUrlsToTerraform(struct?: AppOnboardingJumpboxAppUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_fqdn: cdktf.stringToTerraform(struct!.appFqdn),
    cache_rule: cdktf.stringToTerraform(struct!.cacheRule),
    domain_type: cdktf.stringToTerraform(struct!.domainType),
    internal_domain: cdktf.stringToTerraform(struct!.internalDomain),
    subdomain_included: cdktf.booleanToTerraform(struct!.subdomainIncluded),
    waf_policy_name: cdktf.stringToTerraform(struct!.wafPolicyName),
    cloud_config: appOnboardingJumpboxAppUrlsCloudConfigToTerraform(struct!.cloudConfig),
    dns_service: appOnboardingJumpboxAppUrlsDnsServiceToTerraform(struct!.dnsService),
    health_check_info: appOnboardingJumpboxAppUrlsHealthCheckInfoToTerraform(struct!.healthCheckInfo),
    ssl_cert: appOnboardingJumpboxAppUrlsSslCertToTerraform(struct!.sslCert),
  }
}


export function appOnboardingJumpboxAppUrlsToHclTerraform(struct?: AppOnboardingJumpboxAppUrls | cdktf.IResolvable): any {
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
    cache_rule: {
      value: cdktf.stringToHclTerraform(struct!.cacheRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_type: {
      value: cdktf.stringToHclTerraform(struct!.domainType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_domain: {
      value: cdktf.stringToHclTerraform(struct!.internalDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdomain_included: {
      value: cdktf.booleanToHclTerraform(struct!.subdomainIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waf_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.wafPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_config: {
      value: appOnboardingJumpboxAppUrlsCloudConfigToHclTerraform(struct!.cloudConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingJumpboxAppUrlsCloudConfigList",
    },
    dns_service: {
      value: appOnboardingJumpboxAppUrlsDnsServiceToHclTerraform(struct!.dnsService),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingJumpboxAppUrlsDnsServiceList",
    },
    health_check_info: {
      value: appOnboardingJumpboxAppUrlsHealthCheckInfoToHclTerraform(struct!.healthCheckInfo),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingJumpboxAppUrlsHealthCheckInfoList",
    },
    ssl_cert: {
      value: appOnboardingJumpboxAppUrlsSslCertToHclTerraform(struct!.sslCert),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingJumpboxAppUrlsSslCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingJumpboxAppUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingJumpboxAppUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFqdn = this._appFqdn;
    }
    if (this._cacheRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRule = this._cacheRule;
    }
    if (this._domainType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainType = this._domainType;
    }
    if (this._internalDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDomain = this._internalDomain;
    }
    if (this._subdomainIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomainIncluded = this._subdomainIncluded;
    }
    if (this._wafPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafPolicyName = this._wafPolicyName;
    }
    if (this._cloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudConfig = this._cloudConfig?.internalValue;
    }
    if (this._dnsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsService = this._dnsService?.internalValue;
    }
    if (this._healthCheckInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInfo = this._healthCheckInfo?.internalValue;
    }
    if (this._sslCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCert = this._sslCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxAppUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appFqdn = undefined;
      this._cacheRule = undefined;
      this._domainType = undefined;
      this._internalDomain = undefined;
      this._subdomainIncluded = undefined;
      this._wafPolicyName = undefined;
      this._cloudConfig.internalValue = undefined;
      this._dnsService.internalValue = undefined;
      this._healthCheckInfo.internalValue = undefined;
      this._sslCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appFqdn = value.appFqdn;
      this._cacheRule = value.cacheRule;
      this._domainType = value.domainType;
      this._internalDomain = value.internalDomain;
      this._subdomainIncluded = value.subdomainIncluded;
      this._wafPolicyName = value.wafPolicyName;
      this._cloudConfig.internalValue = value.cloudConfig;
      this._dnsService.internalValue = value.dnsService;
      this._healthCheckInfo.internalValue = value.healthCheckInfo;
      this._sslCert.internalValue = value.sslCert;
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

  // cache_rule - computed: false, optional: true, required: false
  private _cacheRule?: string; 
  public get cacheRule() {
    return this.getStringAttribute('cache_rule');
  }
  public set cacheRule(value: string) {
    this._cacheRule = value;
  }
  public resetCacheRule() {
    this._cacheRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRuleInput() {
    return this._cacheRule;
  }

  // domain_type - computed: false, optional: true, required: false
  private _domainType?: string; 
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }
  public set domainType(value: string) {
    this._domainType = value;
  }
  public resetDomainType() {
    this._domainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_domain - computed: false, optional: false, required: true
  private _internalDomain?: string; 
  public get internalDomain() {
    return this.getStringAttribute('internal_domain');
  }
  public set internalDomain(value: string) {
    this._internalDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDomainInput() {
    return this._internalDomain;
  }

  // subdomain_included - computed: false, optional: true, required: false
  private _subdomainIncluded?: boolean | cdktf.IResolvable; 
  public get subdomainIncluded() {
    return this.getBooleanAttribute('subdomain_included');
  }
  public set subdomainIncluded(value: boolean | cdktf.IResolvable) {
    this._subdomainIncluded = value;
  }
  public resetSubdomainIncluded() {
    this._subdomainIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainIncludedInput() {
    return this._subdomainIncluded;
  }

  // waf_policy_name - computed: false, optional: true, required: false
  private _wafPolicyName?: string; 
  public get wafPolicyName() {
    return this.getStringAttribute('waf_policy_name');
  }
  public set wafPolicyName(value: string) {
    this._wafPolicyName = value;
  }
  public resetWafPolicyName() {
    this._wafPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafPolicyNameInput() {
    return this._wafPolicyName;
  }

  // cloud_config - computed: false, optional: false, required: true
  private _cloudConfig = new AppOnboardingJumpboxAppUrlsCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: AppOnboardingJumpboxAppUrlsCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // dns_service - computed: false, optional: true, required: false
  private _dnsService = new AppOnboardingJumpboxAppUrlsDnsServiceOutputReference(this, "dns_service");
  public get dnsService() {
    return this._dnsService;
  }
  public putDnsService(value: AppOnboardingJumpboxAppUrlsDnsService) {
    this._dnsService.internalValue = value;
  }
  public resetDnsService() {
    this._dnsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService.internalValue;
  }

  // health_check_info - computed: false, optional: true, required: false
  private _healthCheckInfo = new AppOnboardingJumpboxAppUrlsHealthCheckInfoOutputReference(this, "health_check_info");
  public get healthCheckInfo() {
    return this._healthCheckInfo;
  }
  public putHealthCheckInfo(value: AppOnboardingJumpboxAppUrlsHealthCheckInfo) {
    this._healthCheckInfo.internalValue = value;
  }
  public resetHealthCheckInfo() {
    this._healthCheckInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInfoInput() {
    return this._healthCheckInfo.internalValue;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert = new AppOnboardingJumpboxAppUrlsSslCertOutputReference(this, "ssl_cert");
  public get sslCert() {
    return this._sslCert;
  }
  public putSslCert(value: AppOnboardingJumpboxAppUrlsSslCert) {
    this._sslCert.internalValue = value;
  }
  public resetSslCert() {
    this._sslCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert.internalValue;
  }
}

export class AppOnboardingJumpboxAppUrlsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingJumpboxAppUrls[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingJumpboxAppUrlsOutputReference {
    return new AppOnboardingJumpboxAppUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingJumpboxCustomizePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#name AppOnboardingJumpbox#name}
  */
  readonly name?: string;
}

export function appOnboardingJumpboxCustomizePolicyToTerraform(struct?: AppOnboardingJumpboxCustomizePolicyOutputReference | AppOnboardingJumpboxCustomizePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appOnboardingJumpboxCustomizePolicyToHclTerraform(struct?: AppOnboardingJumpboxCustomizePolicyOutputReference | AppOnboardingJumpboxCustomizePolicy): any {
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

export class AppOnboardingJumpboxCustomizePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingJumpboxCustomizePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingJumpboxCustomizePolicy | undefined) {
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
export interface AppOnboardingJumpboxTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#create AppOnboardingJumpbox#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#delete AppOnboardingJumpbox#delete}
  */
  readonly delete?: string;
}

export function appOnboardingJumpboxTimeoutsToTerraform(struct?: AppOnboardingJumpboxTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function appOnboardingJumpboxTimeoutsToHclTerraform(struct?: AppOnboardingJumpboxTimeouts | cdktf.IResolvable): any {
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

export class AppOnboardingJumpboxTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppOnboardingJumpboxTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppOnboardingJumpboxTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox prosimo_app_onboarding_jumpbox}
*/
export class AppOnboardingJumpbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_app_onboarding_jumpbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppOnboardingJumpbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppOnboardingJumpbox to import
  * @param importFromId The id of the existing AppOnboardingJumpbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppOnboardingJumpbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_app_onboarding_jumpbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_jumpbox prosimo_app_onboarding_jumpbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOnboardingJumpboxConfig
  */
  public constructor(scope: Construct, id: string, config: AppOnboardingJumpboxConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_app_onboarding_jumpbox',
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
    this._clientCert = config.clientCert;
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

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
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
  private _appUrls = new AppOnboardingJumpboxAppUrlsList(this, "app_urls", true);
  public get appUrls() {
    return this._appUrls;
  }
  public putAppUrls(value: AppOnboardingJumpboxAppUrls[] | cdktf.IResolvable) {
    this._appUrls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlsInput() {
    return this._appUrls.internalValue;
  }

  // customize_policy - computed: false, optional: true, required: false
  private _customizePolicy = new AppOnboardingJumpboxCustomizePolicyOutputReference(this, "customize_policy");
  public get customizePolicy() {
    return this._customizePolicy;
  }
  public putCustomizePolicy(value: AppOnboardingJumpboxCustomizePolicy) {
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
  private _timeouts = new AppOnboardingJumpboxTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppOnboardingJumpboxTimeouts) {
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
      client_cert: cdktf.stringToTerraform(this._clientCert),
      decommission_app: cdktf.booleanToTerraform(this._decommissionApp),
      enable_multi_cloud_access: cdktf.booleanToTerraform(this._enableMultiCloudAccess),
      force_offboard: cdktf.booleanToTerraform(this._forceOffboard),
      id: cdktf.stringToTerraform(this._id),
      idp_name: cdktf.stringToTerraform(this._idpName),
      onboard_app: cdktf.booleanToTerraform(this._onboardApp),
      optimization_option: cdktf.stringToTerraform(this._optimizationOption),
      policy_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyName),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      app_urls: cdktf.listMapper(appOnboardingJumpboxAppUrlsToTerraform, true)(this._appUrls.internalValue),
      customize_policy: appOnboardingJumpboxCustomizePolicyToTerraform(this._customizePolicy.internalValue),
      timeouts: appOnboardingJumpboxTimeoutsToTerraform(this._timeouts.internalValue),
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
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
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
        value: cdktf.listMapperHcl(appOnboardingJumpboxAppUrlsToHclTerraform, true)(this._appUrls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingJumpboxAppUrlsList",
      },
      customize_policy: {
        value: appOnboardingJumpboxCustomizePolicyToHclTerraform(this._customizePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingJumpboxCustomizePolicyList",
      },
      timeouts: {
        value: appOnboardingJumpboxTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppOnboardingJumpboxTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
