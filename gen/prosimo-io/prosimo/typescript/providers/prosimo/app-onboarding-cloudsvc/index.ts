// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOnboardingCloudsvcConfig extends cdktf.TerraformMetaArguments {
  /**
  * name for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#app_name AppOnboardingCloudsvc#app_name}
  */
  readonly appName: string;
  /**
  * Client Cert details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#client_cert AppOnboardingCloudsvc#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Cloud service platform, as of now default platform is amazon s3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#cloud_svc AppOnboardingCloudsvc#cloud_svc}
  */
  readonly cloudSvc?: string;
  /**
  * Set this to true if you would like app to be offboarded from fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#decommission_app AppOnboardingCloudsvc#decommission_app}
  */
  readonly decommissionApp: boolean | cdktf.IResolvable;
  /**
  * Setting this to true would leverage multi clouds to optimize the app performance 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#enable_multi_cloud_access AppOnboardingCloudsvc#enable_multi_cloud_access}
  */
  readonly enableMultiCloudAccess?: boolean | cdktf.IResolvable;
  /**
  * Force app offboarding incase of normal offboarding failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#force_offboard AppOnboardingCloudsvc#force_offboard}
  */
  readonly forceOffboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#id AppOnboardingCloudsvc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#idp_name AppOnboardingCloudsvc#idp_name}
  */
  readonly idpName?: string;
  /**
  * Set this to true if you would like app to be onboarded to fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#onboard_app AppOnboardingCloudsvc#onboard_app}
  */
  readonly onboardApp: boolean | cdktf.IResolvable;
  /**
  * Optimization option for app: e.g: CostSaving, PerformanceEnhanced, FastLane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#optimization_option AppOnboardingCloudsvc#optimization_option}
  */
  readonly optimizationOption: string;
  /**
  * Select policy name.e.g: ALLOW-ALL-USERS, DENY-ALL-USERS or CUSTOMIZE.Conditional access policies and Web Application Firewall policies for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#policy_name AppOnboardingCloudsvc#policy_name}
  */
  readonly policyName: string[];
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#wait_for_rollout AppOnboardingCloudsvc#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * app_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#app_urls AppOnboardingCloudsvc#app_urls}
  */
  readonly appUrls: AppOnboardingCloudsvcAppUrls[] | cdktf.IResolvable;
  /**
  * customize_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#customize_policy AppOnboardingCloudsvc#customize_policy}
  */
  readonly customizePolicy?: AppOnboardingCloudsvcCustomizePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#timeouts AppOnboardingCloudsvc#timeouts}
  */
  readonly timeouts?: AppOnboardingCloudsvcTimeouts;
}
export interface AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#buckets AppOnboardingCloudsvc#buckets}
  */
  readonly buckets?: string[];
  /**
  * Name of the region where app is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#region_name AppOnboardingCloudsvc#region_name}
  */
  readonly regionName?: string;
  /**
  * Type of region: e.g:active, backup etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#region_type AppOnboardingCloudsvc#region_type}
  */
  readonly regionType?: string;
}

export function appOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsToTerraform(struct?: AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buckets),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    region_type: cdktf.stringToTerraform(struct!.regionType),
  }
}


export function appOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets = undefined;
      this._regionName = undefined;
      this._regionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets = value.buckets;
      this._regionName = value.regionName;
      this._regionType = value.regionType;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return this.getListAttribute('buckets');
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
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
}

export class AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsOutputReference {
    return new AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingCloudsvcAppUrlsCloudConfig {
  /**
  * Wheather app is hosted in Public cloud like AWS/AZURE/GCP or private DC. Available options PRIVATE/PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#app_hosted_type AppOnboardingCloudsvc#app_hosted_type}
  */
  readonly appHostedType?: string;
  /**
  * cloud account under which application is hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#cloud_creds_name AppOnboardingCloudsvc#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * Public, if the app domain has a public IP address / DNS A record on the internet currently, and the Prosimo Edge should connect to the application using a public connection.Private, if the application only has a private IP address, and Edge should connect to it over a private connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#connection_option AppOnboardingCloudsvc#connection_option}
  */
  readonly connectionOption?: string;
  /**
  * Applicable only if  app_hosted_type is PRIVATE, IP of the app hosted in PRIVATE DC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#dc_app_ip AppOnboardingCloudsvc#dc_app_ip}
  */
  readonly dcAppIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#has_private_connection_options AppOnboardingCloudsvc#has_private_connection_options}
  */
  readonly hasPrivateConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#is_show_connection_options AppOnboardingCloudsvc#is_show_connection_options}
  */
  readonly isShowConnectionOptions?: boolean | cdktf.IResolvable;
  /**
  * edge_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#edge_regions AppOnboardingCloudsvc#edge_regions}
  */
  readonly edgeRegions?: AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable;
}

export function appOnboardingCloudsvcAppUrlsCloudConfigToTerraform(struct?: AppOnboardingCloudsvcAppUrlsCloudConfigOutputReference | AppOnboardingCloudsvcAppUrlsCloudConfig): any {
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
    edge_regions: cdktf.listMapper(appOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsToTerraform, true)(struct!.edgeRegions),
  }
}


export function appOnboardingCloudsvcAppUrlsCloudConfigToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsCloudConfigOutputReference | AppOnboardingCloudsvcAppUrlsCloudConfig): any {
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
      value: cdktf.listMapperHcl(appOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsToHclTerraform, true)(struct!.edgeRegions),
      isBlock: true,
      type: "list",
      storageClassType: "AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingCloudsvcAppUrlsCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcAppUrlsCloudConfig | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsCloudConfig | undefined) {
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
  private _edgeRegions = new AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegionsList(this, "edge_regions", false);
  public get edgeRegions() {
    return this._edgeRegions;
  }
  public putEdgeRegions(value: AppOnboardingCloudsvcAppUrlsCloudConfigEdgeRegions[] | cdktf.IResolvable) {
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
export interface AppOnboardingCloudsvcAppUrlsDnsCustom {
  /**
  * DNS App name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#dns_app AppOnboardingCloudsvc#dns_app}
  */
  readonly dnsApp?: string;
  /**
  * DNS Server List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#dns_server AppOnboardingCloudsvc#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * Health check to ensure application domains being resolved by dns servers 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#is_healthcheck_enabled AppOnboardingCloudsvc#is_healthcheck_enabled}
  */
  readonly isHealthcheckEnabled?: boolean | cdktf.IResolvable;
}

export function appOnboardingCloudsvcAppUrlsDnsCustomToTerraform(struct?: AppOnboardingCloudsvcAppUrlsDnsCustomOutputReference | AppOnboardingCloudsvcAppUrlsDnsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_app: cdktf.stringToTerraform(struct!.dnsApp),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServer),
    is_healthcheck_enabled: cdktf.booleanToTerraform(struct!.isHealthcheckEnabled),
  }
}


export function appOnboardingCloudsvcAppUrlsDnsCustomToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsDnsCustomOutputReference | AppOnboardingCloudsvcAppUrlsDnsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_app: {
      value: cdktf.stringToHclTerraform(struct!.dnsApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_healthcheck_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthcheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingCloudsvcAppUrlsDnsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcAppUrlsDnsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsApp = this._dnsApp;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._isHealthcheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthcheckEnabled = this._isHealthcheckEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsDnsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsApp = undefined;
      this._dnsServer = undefined;
      this._isHealthcheckEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsApp = value.dnsApp;
      this._dnsServer = value.dnsServer;
      this._isHealthcheckEnabled = value.isHealthcheckEnabled;
    }
  }

  // dns_app - computed: false, optional: true, required: false
  private _dnsApp?: string; 
  public get dnsApp() {
    return this.getStringAttribute('dns_app');
  }
  public set dnsApp(value: string) {
    this._dnsApp = value;
  }
  public resetDnsApp() {
    this._dnsApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAppInput() {
    return this._dnsApp;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // is_healthcheck_enabled - computed: false, optional: true, required: false
  private _isHealthcheckEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthcheckEnabled() {
    return this.getBooleanAttribute('is_healthcheck_enabled');
  }
  public set isHealthcheckEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthcheckEnabled = value;
  }
  public resetIsHealthcheckEnabled() {
    this._isHealthcheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthcheckEnabledInput() {
    return this._isHealthcheckEnabled;
  }
}
export interface AppOnboardingCloudsvcAppUrlsDnsService {
  /**
  * Cloud creds for route 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#aws_route53_cloud_creds_name AppOnboardingCloudsvc#aws_route53_cloud_creds_name}
  */
  readonly awsRoute53CloudCredsName?: string;
  /**
  * Type of DNS service: e.g: Manual, Route 53, Prosimo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#type AppOnboardingCloudsvc#type}
  */
  readonly type: string;
}

export function appOnboardingCloudsvcAppUrlsDnsServiceToTerraform(struct?: AppOnboardingCloudsvcAppUrlsDnsServiceOutputReference | AppOnboardingCloudsvcAppUrlsDnsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_route53_cloud_creds_name: cdktf.stringToTerraform(struct!.awsRoute53CloudCredsName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appOnboardingCloudsvcAppUrlsDnsServiceToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsDnsServiceOutputReference | AppOnboardingCloudsvcAppUrlsDnsService): any {
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

export class AppOnboardingCloudsvcAppUrlsDnsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcAppUrlsDnsService | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsDnsService | undefined) {
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
export interface AppOnboardingCloudsvcAppUrlsHealthCheckInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#enabled AppOnboardingCloudsvc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * HealthCheck Endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#endpoint AppOnboardingCloudsvc#endpoint}
  */
  readonly endpoint?: string;
}

export function appOnboardingCloudsvcAppUrlsHealthCheckInfoToTerraform(struct?: AppOnboardingCloudsvcAppUrlsHealthCheckInfoOutputReference | AppOnboardingCloudsvcAppUrlsHealthCheckInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function appOnboardingCloudsvcAppUrlsHealthCheckInfoToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsHealthCheckInfoOutputReference | AppOnboardingCloudsvcAppUrlsHealthCheckInfo): any {
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

export class AppOnboardingCloudsvcAppUrlsHealthCheckInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcAppUrlsHealthCheckInfo | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsHealthCheckInfo | undefined) {
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
export interface AppOnboardingCloudsvcAppUrlsSslCertUploadCert {
  /**
  * Path to certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#cert_path AppOnboardingCloudsvc#cert_path}
  */
  readonly certPath?: string;
  /**
  * Path to private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#private_key_path AppOnboardingCloudsvc#private_key_path}
  */
  readonly privateKeyPath?: string;
}

export function appOnboardingCloudsvcAppUrlsSslCertUploadCertToTerraform(struct?: AppOnboardingCloudsvcAppUrlsSslCertUploadCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
  }
}


export function appOnboardingCloudsvcAppUrlsSslCertUploadCertToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsSslCertUploadCert | cdktf.IResolvable): any {
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

export class AppOnboardingCloudsvcAppUrlsSslCertUploadCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingCloudsvcAppUrlsSslCertUploadCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsSslCertUploadCert | cdktf.IResolvable | undefined) {
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

export class AppOnboardingCloudsvcAppUrlsSslCertUploadCertList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingCloudsvcAppUrlsSslCertUploadCert[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingCloudsvcAppUrlsSslCertUploadCertOutputReference {
    return new AppOnboardingCloudsvcAppUrlsSslCertUploadCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingCloudsvcAppUrlsSslCert {
  /**
  * Select from already existing certificates(In certificate TAB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#existing_cert AppOnboardingCloudsvc#existing_cert}
  */
  readonly existingCert?: string;
  /**
  * Set this to true if you want prosimo to generate new certificates 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#generate_cert AppOnboardingCloudsvc#generate_cert}
  */
  readonly generateCert?: boolean | cdktf.IResolvable;
  /**
  * upload_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#upload_cert AppOnboardingCloudsvc#upload_cert}
  */
  readonly uploadCert?: AppOnboardingCloudsvcAppUrlsSslCertUploadCert[] | cdktf.IResolvable;
}

export function appOnboardingCloudsvcAppUrlsSslCertToTerraform(struct?: AppOnboardingCloudsvcAppUrlsSslCertOutputReference | AppOnboardingCloudsvcAppUrlsSslCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_cert: cdktf.stringToTerraform(struct!.existingCert),
    generate_cert: cdktf.booleanToTerraform(struct!.generateCert),
    upload_cert: cdktf.listMapper(appOnboardingCloudsvcAppUrlsSslCertUploadCertToTerraform, true)(struct!.uploadCert),
  }
}


export function appOnboardingCloudsvcAppUrlsSslCertToHclTerraform(struct?: AppOnboardingCloudsvcAppUrlsSslCertOutputReference | AppOnboardingCloudsvcAppUrlsSslCert): any {
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
      value: cdktf.listMapperHcl(appOnboardingCloudsvcAppUrlsSslCertUploadCertToHclTerraform, true)(struct!.uploadCert),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsSslCertUploadCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingCloudsvcAppUrlsSslCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcAppUrlsSslCert | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrlsSslCert | undefined) {
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
  private _uploadCert = new AppOnboardingCloudsvcAppUrlsSslCertUploadCertList(this, "upload_cert", true);
  public get uploadCert() {
    return this._uploadCert;
  }
  public putUploadCert(value: AppOnboardingCloudsvcAppUrlsSslCertUploadCert[] | cdktf.IResolvable) {
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
export interface AppOnboardingCloudsvcAppUrls {
  /**
  * Fqdn of the app that user would access after onboarding 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#app_fqdn AppOnboardingCloudsvc#app_fqdn}
  */
  readonly appFqdn: string;
  /**
  * Cache Rules for your App Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#cache_rule AppOnboardingCloudsvc#cache_rule}
  */
  readonly cacheRule?: string;
  /**
  * Type of Domain: e.g custom or prosimo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#domain_type AppOnboardingCloudsvc#domain_type}
  */
  readonly domainType?: string;
  /**
  * server domain name or IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#internal_domain AppOnboardingCloudsvc#internal_domain}
  */
  readonly internalDomain: string;
  /**
  * Set True to onboard subdomains of the application else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#subdomain_included AppOnboardingCloudsvc#subdomain_included}
  */
  readonly subdomainIncluded?: boolean | cdktf.IResolvable;
  /**
  * WAF Policies for your App Domains, applicable when the Edge to App Protocol is either HTTP or HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#waf_policy_name AppOnboardingCloudsvc#waf_policy_name}
  */
  readonly wafPolicyName?: string;
  /**
  * cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#cloud_config AppOnboardingCloudsvc#cloud_config}
  */
  readonly cloudConfig: AppOnboardingCloudsvcAppUrlsCloudConfig;
  /**
  * dns_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#dns_custom AppOnboardingCloudsvc#dns_custom}
  */
  readonly dnsCustom?: AppOnboardingCloudsvcAppUrlsDnsCustom;
  /**
  * dns_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#dns_service AppOnboardingCloudsvc#dns_service}
  */
  readonly dnsService?: AppOnboardingCloudsvcAppUrlsDnsService;
  /**
  * health_check_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#health_check_info AppOnboardingCloudsvc#health_check_info}
  */
  readonly healthCheckInfo?: AppOnboardingCloudsvcAppUrlsHealthCheckInfo;
  /**
  * ssl_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#ssl_cert AppOnboardingCloudsvc#ssl_cert}
  */
  readonly sslCert?: AppOnboardingCloudsvcAppUrlsSslCert;
}

export function appOnboardingCloudsvcAppUrlsToTerraform(struct?: AppOnboardingCloudsvcAppUrls | cdktf.IResolvable): any {
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
    cloud_config: appOnboardingCloudsvcAppUrlsCloudConfigToTerraform(struct!.cloudConfig),
    dns_custom: appOnboardingCloudsvcAppUrlsDnsCustomToTerraform(struct!.dnsCustom),
    dns_service: appOnboardingCloudsvcAppUrlsDnsServiceToTerraform(struct!.dnsService),
    health_check_info: appOnboardingCloudsvcAppUrlsHealthCheckInfoToTerraform(struct!.healthCheckInfo),
    ssl_cert: appOnboardingCloudsvcAppUrlsSslCertToTerraform(struct!.sslCert),
  }
}


export function appOnboardingCloudsvcAppUrlsToHclTerraform(struct?: AppOnboardingCloudsvcAppUrls | cdktf.IResolvable): any {
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
      value: appOnboardingCloudsvcAppUrlsCloudConfigToHclTerraform(struct!.cloudConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsCloudConfigList",
    },
    dns_custom: {
      value: appOnboardingCloudsvcAppUrlsDnsCustomToHclTerraform(struct!.dnsCustom),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsDnsCustomList",
    },
    dns_service: {
      value: appOnboardingCloudsvcAppUrlsDnsServiceToHclTerraform(struct!.dnsService),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsDnsServiceList",
    },
    health_check_info: {
      value: appOnboardingCloudsvcAppUrlsHealthCheckInfoToHclTerraform(struct!.healthCheckInfo),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsHealthCheckInfoList",
    },
    ssl_cert: {
      value: appOnboardingCloudsvcAppUrlsSslCertToHclTerraform(struct!.sslCert),
      isBlock: true,
      type: "set",
      storageClassType: "AppOnboardingCloudsvcAppUrlsSslCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOnboardingCloudsvcAppUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOnboardingCloudsvcAppUrls | cdktf.IResolvable | undefined {
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
    if (this._dnsCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCustom = this._dnsCustom?.internalValue;
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

  public set internalValue(value: AppOnboardingCloudsvcAppUrls | cdktf.IResolvable | undefined) {
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
      this._dnsCustom.internalValue = undefined;
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
      this._dnsCustom.internalValue = value.dnsCustom;
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
  private _cloudConfig = new AppOnboardingCloudsvcAppUrlsCloudConfigOutputReference(this, "cloud_config");
  public get cloudConfig() {
    return this._cloudConfig;
  }
  public putCloudConfig(value: AppOnboardingCloudsvcAppUrlsCloudConfig) {
    this._cloudConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig.internalValue;
  }

  // dns_custom - computed: false, optional: true, required: false
  private _dnsCustom = new AppOnboardingCloudsvcAppUrlsDnsCustomOutputReference(this, "dns_custom");
  public get dnsCustom() {
    return this._dnsCustom;
  }
  public putDnsCustom(value: AppOnboardingCloudsvcAppUrlsDnsCustom) {
    this._dnsCustom.internalValue = value;
  }
  public resetDnsCustom() {
    this._dnsCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomInput() {
    return this._dnsCustom.internalValue;
  }

  // dns_service - computed: false, optional: true, required: false
  private _dnsService = new AppOnboardingCloudsvcAppUrlsDnsServiceOutputReference(this, "dns_service");
  public get dnsService() {
    return this._dnsService;
  }
  public putDnsService(value: AppOnboardingCloudsvcAppUrlsDnsService) {
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
  private _healthCheckInfo = new AppOnboardingCloudsvcAppUrlsHealthCheckInfoOutputReference(this, "health_check_info");
  public get healthCheckInfo() {
    return this._healthCheckInfo;
  }
  public putHealthCheckInfo(value: AppOnboardingCloudsvcAppUrlsHealthCheckInfo) {
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
  private _sslCert = new AppOnboardingCloudsvcAppUrlsSslCertOutputReference(this, "ssl_cert");
  public get sslCert() {
    return this._sslCert;
  }
  public putSslCert(value: AppOnboardingCloudsvcAppUrlsSslCert) {
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

export class AppOnboardingCloudsvcAppUrlsList extends cdktf.ComplexList {
  public internalValue? : AppOnboardingCloudsvcAppUrls[] | cdktf.IResolvable

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
  public get(index: number): AppOnboardingCloudsvcAppUrlsOutputReference {
    return new AppOnboardingCloudsvcAppUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOnboardingCloudsvcCustomizePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#name AppOnboardingCloudsvc#name}
  */
  readonly name?: string;
}

export function appOnboardingCloudsvcCustomizePolicyToTerraform(struct?: AppOnboardingCloudsvcCustomizePolicyOutputReference | AppOnboardingCloudsvcCustomizePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function appOnboardingCloudsvcCustomizePolicyToHclTerraform(struct?: AppOnboardingCloudsvcCustomizePolicyOutputReference | AppOnboardingCloudsvcCustomizePolicy): any {
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

export class AppOnboardingCloudsvcCustomizePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOnboardingCloudsvcCustomizePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOnboardingCloudsvcCustomizePolicy | undefined) {
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
export interface AppOnboardingCloudsvcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#create AppOnboardingCloudsvc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#delete AppOnboardingCloudsvc#delete}
  */
  readonly delete?: string;
}

export function appOnboardingCloudsvcTimeoutsToTerraform(struct?: AppOnboardingCloudsvcTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function appOnboardingCloudsvcTimeoutsToHclTerraform(struct?: AppOnboardingCloudsvcTimeouts | cdktf.IResolvable): any {
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

export class AppOnboardingCloudsvcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppOnboardingCloudsvcTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppOnboardingCloudsvcTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc prosimo_app_onboarding_cloudsvc}
*/
export class AppOnboardingCloudsvc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_app_onboarding_cloudsvc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppOnboardingCloudsvc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppOnboardingCloudsvc to import
  * @param importFromId The id of the existing AppOnboardingCloudsvc that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppOnboardingCloudsvc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_app_onboarding_cloudsvc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/app_onboarding_cloudsvc prosimo_app_onboarding_cloudsvc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOnboardingCloudsvcConfig
  */
  public constructor(scope: Construct, id: string, config: AppOnboardingCloudsvcConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_app_onboarding_cloudsvc',
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
    this._cloudSvc = config.cloudSvc;
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

  // cloud_svc - computed: false, optional: true, required: false
  private _cloudSvc?: string; 
  public get cloudSvc() {
    return this.getStringAttribute('cloud_svc');
  }
  public set cloudSvc(value: string) {
    this._cloudSvc = value;
  }
  public resetCloudSvc() {
    this._cloudSvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSvcInput() {
    return this._cloudSvc;
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
  private _appUrls = new AppOnboardingCloudsvcAppUrlsList(this, "app_urls", true);
  public get appUrls() {
    return this._appUrls;
  }
  public putAppUrls(value: AppOnboardingCloudsvcAppUrls[] | cdktf.IResolvable) {
    this._appUrls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlsInput() {
    return this._appUrls.internalValue;
  }

  // customize_policy - computed: false, optional: true, required: false
  private _customizePolicy = new AppOnboardingCloudsvcCustomizePolicyOutputReference(this, "customize_policy");
  public get customizePolicy() {
    return this._customizePolicy;
  }
  public putCustomizePolicy(value: AppOnboardingCloudsvcCustomizePolicy) {
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
  private _timeouts = new AppOnboardingCloudsvcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppOnboardingCloudsvcTimeouts) {
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
      cloud_svc: cdktf.stringToTerraform(this._cloudSvc),
      decommission_app: cdktf.booleanToTerraform(this._decommissionApp),
      enable_multi_cloud_access: cdktf.booleanToTerraform(this._enableMultiCloudAccess),
      force_offboard: cdktf.booleanToTerraform(this._forceOffboard),
      id: cdktf.stringToTerraform(this._id),
      idp_name: cdktf.stringToTerraform(this._idpName),
      onboard_app: cdktf.booleanToTerraform(this._onboardApp),
      optimization_option: cdktf.stringToTerraform(this._optimizationOption),
      policy_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyName),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      app_urls: cdktf.listMapper(appOnboardingCloudsvcAppUrlsToTerraform, true)(this._appUrls.internalValue),
      customize_policy: appOnboardingCloudsvcCustomizePolicyToTerraform(this._customizePolicy.internalValue),
      timeouts: appOnboardingCloudsvcTimeoutsToTerraform(this._timeouts.internalValue),
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
      cloud_svc: {
        value: cdktf.stringToHclTerraform(this._cloudSvc),
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
        value: cdktf.listMapperHcl(appOnboardingCloudsvcAppUrlsToHclTerraform, true)(this._appUrls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingCloudsvcAppUrlsList",
      },
      customize_policy: {
        value: appOnboardingCloudsvcCustomizePolicyToHclTerraform(this._customizePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppOnboardingCloudsvcCustomizePolicyList",
      },
      timeouts: {
        value: appOnboardingCloudsvcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppOnboardingCloudsvcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
