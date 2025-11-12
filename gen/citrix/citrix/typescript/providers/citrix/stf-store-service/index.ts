// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfStoreServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the Store is anonymous. Anonymous Store not requiring authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#anonymous StfStoreService#anonymous}
  */
  readonly anonymous?: boolean | cdktf.IResolvable;
  /**
  * The Virtual Path of the StoreFront Authentication Service to use for authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#authentication_service_virtual_path StfStoreService#authentication_service_virtual_path}
  */
  readonly authenticationServiceVirtualPath?: string;
  /**
  * Enumeration options for the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#enumeration_options StfStoreService#enumeration_options}
  */
  readonly enumerationOptions?: StfStoreServiceEnumerationOptions;
  /**
  * Store farm configuration settings for the Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farm_settings StfStoreService#farm_settings}
  */
  readonly farmSettings?: StfStoreServiceFarmSettings;
  /**
  * A list of StoreFront Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farms StfStoreService#farms}
  */
  readonly farms: StfStoreServiceFarms[] | cdktf.IResolvable;
  /**
  * The friendly name of the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#friendly_name StfStoreService#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Launch options for the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#launch_options StfStoreService#launch_options}
  */
  readonly launchOptions?: StfStoreServiceLaunchOptions;
  /**
  * Whether the Store is load balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#load_balance StfStoreService#load_balance}
  */
  readonly loadBalance?: boolean | cdktf.IResolvable;
  /**
  * Optimal launch gateway selection for the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#optimal_launch_gateway StfStoreService#optimal_launch_gateway}
  */
  readonly optimalLaunchGateway?: StfStoreServiceOptimalLaunchGateway;
  /**
  * StoreFront PNA (Program Neighborhood Agent) state of the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#pna StfStoreService#pna}
  */
  readonly pna?: StfStoreServicePna;
  /**
  * Roaming account settings for the Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#roaming_account StfStoreService#roaming_account}
  */
  readonly roamingAccount?: StfStoreServiceRoamingAccount;
  /**
  * The IIS site id of the StoreFront storeservice. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#site_id StfStoreService#site_id}
  */
  readonly siteId?: string;
  /**
  * The IIS VirtualPath at which the Store will be configured to be accessed by Receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#virtual_path StfStoreService#virtual_path}
  */
  readonly virtualPath: string;
}
export interface StfStoreServiceEnumerationOptions {
  /**
  * Enable enhanced enumeration. Enumerate multiple farms in parallel to reduce operation time. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#enhanced_enumeration StfStoreService#enhanced_enumeration}
  */
  readonly enhancedEnumeration?: boolean | cdktf.IResolvable;
  /**
  * Exclude applications and desktops that match the keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#filter_by_keywords_exclude StfStoreService#filter_by_keywords_exclude}
  */
  readonly filterByKeywordsExclude?: string[];
  /**
  * Only include applications and desktops that match the keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#filter_by_keywords_include StfStoreService#filter_by_keywords_include}
  */
  readonly filterByKeywordsInclude?: string[];
  /**
  * Inclusive resource filter by type (Applications, Desktops or Documents).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#filter_by_types_include StfStoreService#filter_by_types_include}
  */
  readonly filterByTypesInclude?: string[];
  /**
  * Maximum farms enumerated in parallel. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#maximum_concurrent_enumerations StfStoreService#maximum_concurrent_enumerations}
  */
  readonly maximumConcurrentEnumerations?: number;
  /**
  * Minimum farms required for concurrent enumeration. Default is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#minimum_farms_required_for_concurrent_enumeration StfStoreService#minimum_farms_required_for_concurrent_enumeration}
  */
  readonly minimumFarmsRequiredForConcurrentEnumeration?: number;
}

export function stfStoreServiceEnumerationOptionsToTerraform(struct?: StfStoreServiceEnumerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_enumeration: cdktf.booleanToTerraform(struct!.enhancedEnumeration),
    filter_by_keywords_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterByKeywordsExclude),
    filter_by_keywords_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterByKeywordsInclude),
    filter_by_types_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterByTypesInclude),
    maximum_concurrent_enumerations: cdktf.numberToTerraform(struct!.maximumConcurrentEnumerations),
    minimum_farms_required_for_concurrent_enumeration: cdktf.numberToTerraform(struct!.minimumFarmsRequiredForConcurrentEnumeration),
  }
}


export function stfStoreServiceEnumerationOptionsToHclTerraform(struct?: StfStoreServiceEnumerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_enumeration: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedEnumeration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_by_keywords_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterByKeywordsExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_by_keywords_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterByKeywordsInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_by_types_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterByTypesInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_concurrent_enumerations: {
      value: cdktf.numberToHclTerraform(struct!.maximumConcurrentEnumerations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_farms_required_for_concurrent_enumeration: {
      value: cdktf.numberToHclTerraform(struct!.minimumFarmsRequiredForConcurrentEnumeration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceEnumerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServiceEnumerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedEnumeration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedEnumeration = this._enhancedEnumeration;
    }
    if (this._filterByKeywordsExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterByKeywordsExclude = this._filterByKeywordsExclude;
    }
    if (this._filterByKeywordsInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterByKeywordsInclude = this._filterByKeywordsInclude;
    }
    if (this._filterByTypesInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterByTypesInclude = this._filterByTypesInclude;
    }
    if (this._maximumConcurrentEnumerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumConcurrentEnumerations = this._maximumConcurrentEnumerations;
    }
    if (this._minimumFarmsRequiredForConcurrentEnumeration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumFarmsRequiredForConcurrentEnumeration = this._minimumFarmsRequiredForConcurrentEnumeration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceEnumerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enhancedEnumeration = undefined;
      this._filterByKeywordsExclude = undefined;
      this._filterByKeywordsInclude = undefined;
      this._filterByTypesInclude = undefined;
      this._maximumConcurrentEnumerations = undefined;
      this._minimumFarmsRequiredForConcurrentEnumeration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enhancedEnumeration = value.enhancedEnumeration;
      this._filterByKeywordsExclude = value.filterByKeywordsExclude;
      this._filterByKeywordsInclude = value.filterByKeywordsInclude;
      this._filterByTypesInclude = value.filterByTypesInclude;
      this._maximumConcurrentEnumerations = value.maximumConcurrentEnumerations;
      this._minimumFarmsRequiredForConcurrentEnumeration = value.minimumFarmsRequiredForConcurrentEnumeration;
    }
  }

  // enhanced_enumeration - computed: true, optional: true, required: false
  private _enhancedEnumeration?: boolean | cdktf.IResolvable; 
  public get enhancedEnumeration() {
    return this.getBooleanAttribute('enhanced_enumeration');
  }
  public set enhancedEnumeration(value: boolean | cdktf.IResolvable) {
    this._enhancedEnumeration = value;
  }
  public resetEnhancedEnumeration() {
    this._enhancedEnumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedEnumerationInput() {
    return this._enhancedEnumeration;
  }

  // filter_by_keywords_exclude - computed: false, optional: true, required: false
  private _filterByKeywordsExclude?: string[]; 
  public get filterByKeywordsExclude() {
    return this.getListAttribute('filter_by_keywords_exclude');
  }
  public set filterByKeywordsExclude(value: string[]) {
    this._filterByKeywordsExclude = value;
  }
  public resetFilterByKeywordsExclude() {
    this._filterByKeywordsExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByKeywordsExcludeInput() {
    return this._filterByKeywordsExclude;
  }

  // filter_by_keywords_include - computed: false, optional: true, required: false
  private _filterByKeywordsInclude?: string[]; 
  public get filterByKeywordsInclude() {
    return this.getListAttribute('filter_by_keywords_include');
  }
  public set filterByKeywordsInclude(value: string[]) {
    this._filterByKeywordsInclude = value;
  }
  public resetFilterByKeywordsInclude() {
    this._filterByKeywordsInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByKeywordsIncludeInput() {
    return this._filterByKeywordsInclude;
  }

  // filter_by_types_include - computed: false, optional: true, required: false
  private _filterByTypesInclude?: string[]; 
  public get filterByTypesInclude() {
    return this.getListAttribute('filter_by_types_include');
  }
  public set filterByTypesInclude(value: string[]) {
    this._filterByTypesInclude = value;
  }
  public resetFilterByTypesInclude() {
    this._filterByTypesInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByTypesIncludeInput() {
    return this._filterByTypesInclude;
  }

  // maximum_concurrent_enumerations - computed: true, optional: true, required: false
  private _maximumConcurrentEnumerations?: number; 
  public get maximumConcurrentEnumerations() {
    return this.getNumberAttribute('maximum_concurrent_enumerations');
  }
  public set maximumConcurrentEnumerations(value: number) {
    this._maximumConcurrentEnumerations = value;
  }
  public resetMaximumConcurrentEnumerations() {
    this._maximumConcurrentEnumerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentEnumerationsInput() {
    return this._maximumConcurrentEnumerations;
  }

  // minimum_farms_required_for_concurrent_enumeration - computed: true, optional: true, required: false
  private _minimumFarmsRequiredForConcurrentEnumeration?: number; 
  public get minimumFarmsRequiredForConcurrentEnumeration() {
    return this.getNumberAttribute('minimum_farms_required_for_concurrent_enumeration');
  }
  public set minimumFarmsRequiredForConcurrentEnumeration(value: number) {
    this._minimumFarmsRequiredForConcurrentEnumeration = value;
  }
  public resetMinimumFarmsRequiredForConcurrentEnumeration() {
    this._minimumFarmsRequiredForConcurrentEnumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFarmsRequiredForConcurrentEnumerationInput() {
    return this._minimumFarmsRequiredForConcurrentEnumeration;
  }
}
export interface StfStoreServiceFarmSettings {
  /**
  * Indicates whether advanced healthcheck should be performed. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#advanced_healthcheck StfStoreService#advanced_healthcheck}
  */
  readonly advancedHealthcheck?: boolean | cdktf.IResolvable;
  /**
  * Period of time between polling servers in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:1:0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#background_healthcheck_polling StfStoreService#background_healthcheck_polling}
  */
  readonly backgroundHealthcheckPolling?: string;
  /**
  * Certificate Revocation Policy to use when connecting to XML services using HTTPS. Valid values are NoCheck (Default), MustCheck, FullCheck or NoNetworkAccess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#cert_revocation_policy StfStoreService#cert_revocation_policy}
  */
  readonly certRevocationPolicy?: string;
  /**
  * Communication timeout when using to the Xml service in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:0:30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#communication_timeout StfStoreService#communication_timeout}
  */
  readonly communicationTimeout?: string;
  /**
  * Connection timeout when using to the Xml service in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:0:6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#connection_timeout StfStoreService#connection_timeout}
  */
  readonly connectionTimeout?: string;
  /**
  * Enable File Type Association so that content is seamlessly redirected to users subscribed applications when they open local files of the appropriate types. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#enable_file_type_association StfStoreService#enable_file_type_association}
  */
  readonly enableFileTypeAssociation?: boolean | cdktf.IResolvable;
  /**
  * Period of time before retrying a XenDesktop 7 and greater farm in failed leasing mode in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:3:0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#leasing_status_expiry_failed StfStoreService#leasing_status_expiry_failed}
  */
  readonly leasingStatusExpiryFailed?: string;
  /**
  * Period of time before retrying a XenDesktop 7 and greater farm in leasing mode in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:3:0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#leasing_status_expiry_leasing StfStoreService#leasing_status_expiry_leasing}
  */
  readonly leasingStatusExpiryLeasing?: string;
  /**
  * Period of time before retrying a XenDesktop 7 and greater farm in pending leasing mode in timestamp format, which must be in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:3:0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#leasing_status_expiry_pending StfStoreService#leasing_status_expiry_pending}
  */
  readonly leasingStatusExpiryPending?: string;
  /**
  * Use pooled sockets so that StoreFront maintains a pool of sockets. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#pooled_sockets StfStoreService#pooled_sockets}
  */
  readonly pooledSockets?: boolean | cdktf.IResolvable;
  /**
  * Number of server connection attempts before failure. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#server_communication_attempts StfStoreService#server_communication_attempts}
  */
  readonly serverCommunicationAttempts?: number;
}

export function stfStoreServiceFarmSettingsToTerraform(struct?: StfStoreServiceFarmSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_healthcheck: cdktf.booleanToTerraform(struct!.advancedHealthcheck),
    background_healthcheck_polling: cdktf.stringToTerraform(struct!.backgroundHealthcheckPolling),
    cert_revocation_policy: cdktf.stringToTerraform(struct!.certRevocationPolicy),
    communication_timeout: cdktf.stringToTerraform(struct!.communicationTimeout),
    connection_timeout: cdktf.stringToTerraform(struct!.connectionTimeout),
    enable_file_type_association: cdktf.booleanToTerraform(struct!.enableFileTypeAssociation),
    leasing_status_expiry_failed: cdktf.stringToTerraform(struct!.leasingStatusExpiryFailed),
    leasing_status_expiry_leasing: cdktf.stringToTerraform(struct!.leasingStatusExpiryLeasing),
    leasing_status_expiry_pending: cdktf.stringToTerraform(struct!.leasingStatusExpiryPending),
    pooled_sockets: cdktf.booleanToTerraform(struct!.pooledSockets),
    server_communication_attempts: cdktf.numberToTerraform(struct!.serverCommunicationAttempts),
  }
}


export function stfStoreServiceFarmSettingsToHclTerraform(struct?: StfStoreServiceFarmSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_healthcheck: {
      value: cdktf.booleanToHclTerraform(struct!.advancedHealthcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    background_healthcheck_polling: {
      value: cdktf.stringToHclTerraform(struct!.backgroundHealthcheckPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_revocation_policy: {
      value: cdktf.stringToHclTerraform(struct!.certRevocationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    communication_timeout: {
      value: cdktf.stringToHclTerraform(struct!.communicationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_file_type_association: {
      value: cdktf.booleanToHclTerraform(struct!.enableFileTypeAssociation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    leasing_status_expiry_failed: {
      value: cdktf.stringToHclTerraform(struct!.leasingStatusExpiryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leasing_status_expiry_leasing: {
      value: cdktf.stringToHclTerraform(struct!.leasingStatusExpiryLeasing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leasing_status_expiry_pending: {
      value: cdktf.stringToHclTerraform(struct!.leasingStatusExpiryPending),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pooled_sockets: {
      value: cdktf.booleanToHclTerraform(struct!.pooledSockets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_communication_attempts: {
      value: cdktf.numberToHclTerraform(struct!.serverCommunicationAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceFarmSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServiceFarmSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedHealthcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedHealthcheck = this._advancedHealthcheck;
    }
    if (this._backgroundHealthcheckPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundHealthcheckPolling = this._backgroundHealthcheckPolling;
    }
    if (this._certRevocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.certRevocationPolicy = this._certRevocationPolicy;
    }
    if (this._communicationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.communicationTimeout = this._communicationTimeout;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._enableFileTypeAssociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFileTypeAssociation = this._enableFileTypeAssociation;
    }
    if (this._leasingStatusExpiryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.leasingStatusExpiryFailed = this._leasingStatusExpiryFailed;
    }
    if (this._leasingStatusExpiryLeasing !== undefined) {
      hasAnyValues = true;
      internalValueResult.leasingStatusExpiryLeasing = this._leasingStatusExpiryLeasing;
    }
    if (this._leasingStatusExpiryPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.leasingStatusExpiryPending = this._leasingStatusExpiryPending;
    }
    if (this._pooledSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.pooledSockets = this._pooledSockets;
    }
    if (this._serverCommunicationAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCommunicationAttempts = this._serverCommunicationAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceFarmSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedHealthcheck = undefined;
      this._backgroundHealthcheckPolling = undefined;
      this._certRevocationPolicy = undefined;
      this._communicationTimeout = undefined;
      this._connectionTimeout = undefined;
      this._enableFileTypeAssociation = undefined;
      this._leasingStatusExpiryFailed = undefined;
      this._leasingStatusExpiryLeasing = undefined;
      this._leasingStatusExpiryPending = undefined;
      this._pooledSockets = undefined;
      this._serverCommunicationAttempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedHealthcheck = value.advancedHealthcheck;
      this._backgroundHealthcheckPolling = value.backgroundHealthcheckPolling;
      this._certRevocationPolicy = value.certRevocationPolicy;
      this._communicationTimeout = value.communicationTimeout;
      this._connectionTimeout = value.connectionTimeout;
      this._enableFileTypeAssociation = value.enableFileTypeAssociation;
      this._leasingStatusExpiryFailed = value.leasingStatusExpiryFailed;
      this._leasingStatusExpiryLeasing = value.leasingStatusExpiryLeasing;
      this._leasingStatusExpiryPending = value.leasingStatusExpiryPending;
      this._pooledSockets = value.pooledSockets;
      this._serverCommunicationAttempts = value.serverCommunicationAttempts;
    }
  }

  // advanced_healthcheck - computed: true, optional: true, required: false
  private _advancedHealthcheck?: boolean | cdktf.IResolvable; 
  public get advancedHealthcheck() {
    return this.getBooleanAttribute('advanced_healthcheck');
  }
  public set advancedHealthcheck(value: boolean | cdktf.IResolvable) {
    this._advancedHealthcheck = value;
  }
  public resetAdvancedHealthcheck() {
    this._advancedHealthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedHealthcheckInput() {
    return this._advancedHealthcheck;
  }

  // background_healthcheck_polling - computed: true, optional: true, required: false
  private _backgroundHealthcheckPolling?: string; 
  public get backgroundHealthcheckPolling() {
    return this.getStringAttribute('background_healthcheck_polling');
  }
  public set backgroundHealthcheckPolling(value: string) {
    this._backgroundHealthcheckPolling = value;
  }
  public resetBackgroundHealthcheckPolling() {
    this._backgroundHealthcheckPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundHealthcheckPollingInput() {
    return this._backgroundHealthcheckPolling;
  }

  // cert_revocation_policy - computed: true, optional: true, required: false
  private _certRevocationPolicy?: string; 
  public get certRevocationPolicy() {
    return this.getStringAttribute('cert_revocation_policy');
  }
  public set certRevocationPolicy(value: string) {
    this._certRevocationPolicy = value;
  }
  public resetCertRevocationPolicy() {
    this._certRevocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRevocationPolicyInput() {
    return this._certRevocationPolicy;
  }

  // communication_timeout - computed: true, optional: true, required: false
  private _communicationTimeout?: string; 
  public get communicationTimeout() {
    return this.getStringAttribute('communication_timeout');
  }
  public set communicationTimeout(value: string) {
    this._communicationTimeout = value;
  }
  public resetCommunicationTimeout() {
    this._communicationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTimeoutInput() {
    return this._communicationTimeout;
  }

  // connection_timeout - computed: true, optional: true, required: false
  private _connectionTimeout?: string; 
  public get connectionTimeout() {
    return this.getStringAttribute('connection_timeout');
  }
  public set connectionTimeout(value: string) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // enable_file_type_association - computed: true, optional: true, required: false
  private _enableFileTypeAssociation?: boolean | cdktf.IResolvable; 
  public get enableFileTypeAssociation() {
    return this.getBooleanAttribute('enable_file_type_association');
  }
  public set enableFileTypeAssociation(value: boolean | cdktf.IResolvable) {
    this._enableFileTypeAssociation = value;
  }
  public resetEnableFileTypeAssociation() {
    this._enableFileTypeAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFileTypeAssociationInput() {
    return this._enableFileTypeAssociation;
  }

  // leasing_status_expiry_failed - computed: true, optional: true, required: false
  private _leasingStatusExpiryFailed?: string; 
  public get leasingStatusExpiryFailed() {
    return this.getStringAttribute('leasing_status_expiry_failed');
  }
  public set leasingStatusExpiryFailed(value: string) {
    this._leasingStatusExpiryFailed = value;
  }
  public resetLeasingStatusExpiryFailed() {
    this._leasingStatusExpiryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasingStatusExpiryFailedInput() {
    return this._leasingStatusExpiryFailed;
  }

  // leasing_status_expiry_leasing - computed: true, optional: true, required: false
  private _leasingStatusExpiryLeasing?: string; 
  public get leasingStatusExpiryLeasing() {
    return this.getStringAttribute('leasing_status_expiry_leasing');
  }
  public set leasingStatusExpiryLeasing(value: string) {
    this._leasingStatusExpiryLeasing = value;
  }
  public resetLeasingStatusExpiryLeasing() {
    this._leasingStatusExpiryLeasing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasingStatusExpiryLeasingInput() {
    return this._leasingStatusExpiryLeasing;
  }

  // leasing_status_expiry_pending - computed: true, optional: true, required: false
  private _leasingStatusExpiryPending?: string; 
  public get leasingStatusExpiryPending() {
    return this.getStringAttribute('leasing_status_expiry_pending');
  }
  public set leasingStatusExpiryPending(value: string) {
    this._leasingStatusExpiryPending = value;
  }
  public resetLeasingStatusExpiryPending() {
    this._leasingStatusExpiryPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasingStatusExpiryPendingInput() {
    return this._leasingStatusExpiryPending;
  }

  // pooled_sockets - computed: true, optional: true, required: false
  private _pooledSockets?: boolean | cdktf.IResolvable; 
  public get pooledSockets() {
    return this.getBooleanAttribute('pooled_sockets');
  }
  public set pooledSockets(value: boolean | cdktf.IResolvable) {
    this._pooledSockets = value;
  }
  public resetPooledSockets() {
    this._pooledSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pooledSocketsInput() {
    return this._pooledSockets;
  }

  // server_communication_attempts - computed: true, optional: true, required: false
  private _serverCommunicationAttempts?: number; 
  public get serverCommunicationAttempts() {
    return this.getNumberAttribute('server_communication_attempts');
  }
  public set serverCommunicationAttempts(value: number) {
    this._serverCommunicationAttempts = value;
  }
  public resetServerCommunicationAttempts() {
    this._serverCommunicationAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCommunicationAttemptsInput() {
    return this._serverCommunicationAttempts;
  }
}
export interface StfStoreServiceFarms {
  /**
  * Period of time to skip all xml service requests should all servers fail to respond. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#all_failed_bypass_duration StfStoreService#all_failed_bypass_duration}
  */
  readonly allFailedBypassDuration?: number;
  /**
  * Period of time to skip a server when is fails to respond. Defaults to 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#bypass_duration StfStoreService#bypass_duration}
  */
  readonly bypassDuration?: number;
  /**
  * A tag indicating the scope of the farm. Valid for cloud deployments only. Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farm_guid StfStoreService#farm_guid}
  */
  readonly farmGuid?: string;
  /**
  * The name of the Farm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farm_name StfStoreService#farm_name}
  */
  readonly farmName: string;
  /**
  * The type of the Farm. Can be XenApp, XenDesktop, AppController, VDIinaBox, Store or SPA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farm_type StfStoreService#farm_type}
  */
  readonly farmType: string;
  /**
  * Round robin load balance the xml service servers. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#load_balance StfStoreService#load_balance}
  */
  readonly loadBalance?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of servers within a single farm that can fail before aborting a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#max_failed_servers_per_request StfStoreService#max_failed_servers_per_request}
  */
  readonly maxFailedServersPerRequest?: number;
  /**
  * Service communication port. Default is 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#port StfStoreService#port}
  */
  readonly port?: number;
  /**
  * Cloud deployments only otherwise ignored. The product name of the farm configured. Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#product StfStoreService#product}
  */
  readonly product?: string;
  /**
  * Period of time a RADE launch ticket is valid once requested on pre 7.0 XenApp and XenDesktop farms. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#rade_ticket_time_to_live StfStoreService#rade_ticket_time_to_live}
  */
  readonly radeTicketTimeToLive?: number;
  /**
  * Cloud deployments only otherwise ignored. Restricts GWaaS traffic to the specified POP. Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#restrict_pops StfStoreService#restrict_pops}
  */
  readonly restrictPops?: string;
  /**
  * The url to the service location used to provide web and SaaS apps via this farm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#server_urls StfStoreService#server_urls}
  */
  readonly serverUrls?: string[];
  /**
  * The list of servers in the Farm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#servers StfStoreService#servers}
  */
  readonly servers: string[];
  /**
  * The SSL Relay port. Default is 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#ssl_relay_port StfStoreService#ssl_relay_port}
  */
  readonly sslRelayPort?: number;
  /**
  * Period of time an ICA launch ticket is valid once requested on pre 7.0 XenApp and XenDesktop farms. Defaults to 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#ticket_time_to_live StfStoreService#ticket_time_to_live}
  */
  readonly ticketTimeToLive?: number;
  /**
  * Type of transport to use. Http, Https, SSL for example. Default to HTTPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#transport_type StfStoreService#transport_type}
  */
  readonly transportType?: string;
  /**
  * Enable XML service endpoint validation. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#xml_validation_enabled StfStoreService#xml_validation_enabled}
  */
  readonly xmlValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * XML service endpoint validation shared secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#xml_validation_secret StfStoreService#xml_validation_secret}
  */
  readonly xmlValidationSecret?: string;
  /**
  * The list of Zone names associated with the farm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#zones StfStoreService#zones}
  */
  readonly zones?: string[];
}

export function stfStoreServiceFarmsToTerraform(struct?: StfStoreServiceFarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_failed_bypass_duration: cdktf.numberToTerraform(struct!.allFailedBypassDuration),
    bypass_duration: cdktf.numberToTerraform(struct!.bypassDuration),
    farm_guid: cdktf.stringToTerraform(struct!.farmGuid),
    farm_name: cdktf.stringToTerraform(struct!.farmName),
    farm_type: cdktf.stringToTerraform(struct!.farmType),
    load_balance: cdktf.booleanToTerraform(struct!.loadBalance),
    max_failed_servers_per_request: cdktf.numberToTerraform(struct!.maxFailedServersPerRequest),
    port: cdktf.numberToTerraform(struct!.port),
    product: cdktf.stringToTerraform(struct!.product),
    rade_ticket_time_to_live: cdktf.numberToTerraform(struct!.radeTicketTimeToLive),
    restrict_pops: cdktf.stringToTerraform(struct!.restrictPops),
    server_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverUrls),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
    ssl_relay_port: cdktf.numberToTerraform(struct!.sslRelayPort),
    ticket_time_to_live: cdktf.numberToTerraform(struct!.ticketTimeToLive),
    transport_type: cdktf.stringToTerraform(struct!.transportType),
    xml_validation_enabled: cdktf.booleanToTerraform(struct!.xmlValidationEnabled),
    xml_validation_secret: cdktf.stringToTerraform(struct!.xmlValidationSecret),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function stfStoreServiceFarmsToHclTerraform(struct?: StfStoreServiceFarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_failed_bypass_duration: {
      value: cdktf.numberToHclTerraform(struct!.allFailedBypassDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_duration: {
      value: cdktf.numberToHclTerraform(struct!.bypassDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    farm_guid: {
      value: cdktf.stringToHclTerraform(struct!.farmGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    farm_name: {
      value: cdktf.stringToHclTerraform(struct!.farmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    farm_type: {
      value: cdktf.stringToHclTerraform(struct!.farmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balance: {
      value: cdktf.booleanToHclTerraform(struct!.loadBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_failed_servers_per_request: {
      value: cdktf.numberToHclTerraform(struct!.maxFailedServersPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rade_ticket_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.radeTicketTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrict_pops: {
      value: cdktf.stringToHclTerraform(struct!.restrictPops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_relay_port: {
      value: cdktf.numberToHclTerraform(struct!.sslRelayPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ticket_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.ticketTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_type: {
      value: cdktf.stringToHclTerraform(struct!.transportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xmlValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xml_validation_secret: {
      value: cdktf.stringToHclTerraform(struct!.xmlValidationSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceFarmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StfStoreServiceFarms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allFailedBypassDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFailedBypassDuration = this._allFailedBypassDuration;
    }
    if (this._bypassDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassDuration = this._bypassDuration;
    }
    if (this._farmGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.farmGuid = this._farmGuid;
    }
    if (this._farmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.farmName = this._farmName;
    }
    if (this._farmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.farmType = this._farmType;
    }
    if (this._loadBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance;
    }
    if (this._maxFailedServersPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailedServersPerRequest = this._maxFailedServersPerRequest;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._radeTicketTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.radeTicketTimeToLive = this._radeTicketTimeToLive;
    }
    if (this._restrictPops !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPops = this._restrictPops;
    }
    if (this._serverUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrls = this._serverUrls;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._sslRelayPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRelayPort = this._sslRelayPort;
    }
    if (this._ticketTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketTimeToLive = this._ticketTimeToLive;
    }
    if (this._transportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportType = this._transportType;
    }
    if (this._xmlValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlValidationEnabled = this._xmlValidationEnabled;
    }
    if (this._xmlValidationSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlValidationSecret = this._xmlValidationSecret;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceFarms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allFailedBypassDuration = undefined;
      this._bypassDuration = undefined;
      this._farmGuid = undefined;
      this._farmName = undefined;
      this._farmType = undefined;
      this._loadBalance = undefined;
      this._maxFailedServersPerRequest = undefined;
      this._port = undefined;
      this._product = undefined;
      this._radeTicketTimeToLive = undefined;
      this._restrictPops = undefined;
      this._serverUrls = undefined;
      this._servers = undefined;
      this._sslRelayPort = undefined;
      this._ticketTimeToLive = undefined;
      this._transportType = undefined;
      this._xmlValidationEnabled = undefined;
      this._xmlValidationSecret = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allFailedBypassDuration = value.allFailedBypassDuration;
      this._bypassDuration = value.bypassDuration;
      this._farmGuid = value.farmGuid;
      this._farmName = value.farmName;
      this._farmType = value.farmType;
      this._loadBalance = value.loadBalance;
      this._maxFailedServersPerRequest = value.maxFailedServersPerRequest;
      this._port = value.port;
      this._product = value.product;
      this._radeTicketTimeToLive = value.radeTicketTimeToLive;
      this._restrictPops = value.restrictPops;
      this._serverUrls = value.serverUrls;
      this._servers = value.servers;
      this._sslRelayPort = value.sslRelayPort;
      this._ticketTimeToLive = value.ticketTimeToLive;
      this._transportType = value.transportType;
      this._xmlValidationEnabled = value.xmlValidationEnabled;
      this._xmlValidationSecret = value.xmlValidationSecret;
      this._zones = value.zones;
    }
  }

  // all_failed_bypass_duration - computed: true, optional: true, required: false
  private _allFailedBypassDuration?: number; 
  public get allFailedBypassDuration() {
    return this.getNumberAttribute('all_failed_bypass_duration');
  }
  public set allFailedBypassDuration(value: number) {
    this._allFailedBypassDuration = value;
  }
  public resetAllFailedBypassDuration() {
    this._allFailedBypassDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFailedBypassDurationInput() {
    return this._allFailedBypassDuration;
  }

  // bypass_duration - computed: true, optional: true, required: false
  private _bypassDuration?: number; 
  public get bypassDuration() {
    return this.getNumberAttribute('bypass_duration');
  }
  public set bypassDuration(value: number) {
    this._bypassDuration = value;
  }
  public resetBypassDuration() {
    this._bypassDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassDurationInput() {
    return this._bypassDuration;
  }

  // farm_guid - computed: true, optional: true, required: false
  private _farmGuid?: string; 
  public get farmGuid() {
    return this.getStringAttribute('farm_guid');
  }
  public set farmGuid(value: string) {
    this._farmGuid = value;
  }
  public resetFarmGuid() {
    this._farmGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get farmGuidInput() {
    return this._farmGuid;
  }

  // farm_name - computed: false, optional: false, required: true
  private _farmName?: string; 
  public get farmName() {
    return this.getStringAttribute('farm_name');
  }
  public set farmName(value: string) {
    this._farmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmNameInput() {
    return this._farmName;
  }

  // farm_type - computed: false, optional: false, required: true
  private _farmType?: string; 
  public get farmType() {
    return this.getStringAttribute('farm_type');
  }
  public set farmType(value: string) {
    this._farmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmTypeInput() {
    return this._farmType;
  }

  // load_balance - computed: true, optional: true, required: false
  private _loadBalance?: boolean | cdktf.IResolvable; 
  public get loadBalance() {
    return this.getBooleanAttribute('load_balance');
  }
  public set loadBalance(value: boolean | cdktf.IResolvable) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // max_failed_servers_per_request - computed: true, optional: true, required: false
  private _maxFailedServersPerRequest?: number; 
  public get maxFailedServersPerRequest() {
    return this.getNumberAttribute('max_failed_servers_per_request');
  }
  public set maxFailedServersPerRequest(value: number) {
    this._maxFailedServersPerRequest = value;
  }
  public resetMaxFailedServersPerRequest() {
    this._maxFailedServersPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailedServersPerRequestInput() {
    return this._maxFailedServersPerRequest;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // product - computed: true, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // rade_ticket_time_to_live - computed: true, optional: true, required: false
  private _radeTicketTimeToLive?: number; 
  public get radeTicketTimeToLive() {
    return this.getNumberAttribute('rade_ticket_time_to_live');
  }
  public set radeTicketTimeToLive(value: number) {
    this._radeTicketTimeToLive = value;
  }
  public resetRadeTicketTimeToLive() {
    this._radeTicketTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radeTicketTimeToLiveInput() {
    return this._radeTicketTimeToLive;
  }

  // restrict_pops - computed: true, optional: true, required: false
  private _restrictPops?: string; 
  public get restrictPops() {
    return this.getStringAttribute('restrict_pops');
  }
  public set restrictPops(value: string) {
    this._restrictPops = value;
  }
  public resetRestrictPops() {
    this._restrictPops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPopsInput() {
    return this._restrictPops;
  }

  // server_urls - computed: true, optional: true, required: false
  private _serverUrls?: string[]; 
  public get serverUrls() {
    return this.getListAttribute('server_urls');
  }
  public set serverUrls(value: string[]) {
    this._serverUrls = value;
  }
  public resetServerUrls() {
    this._serverUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlsInput() {
    return this._serverUrls;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // ssl_relay_port - computed: true, optional: true, required: false
  private _sslRelayPort?: number; 
  public get sslRelayPort() {
    return this.getNumberAttribute('ssl_relay_port');
  }
  public set sslRelayPort(value: number) {
    this._sslRelayPort = value;
  }
  public resetSslRelayPort() {
    this._sslRelayPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRelayPortInput() {
    return this._sslRelayPort;
  }

  // ticket_time_to_live - computed: true, optional: true, required: false
  private _ticketTimeToLive?: number; 
  public get ticketTimeToLive() {
    return this.getNumberAttribute('ticket_time_to_live');
  }
  public set ticketTimeToLive(value: number) {
    this._ticketTimeToLive = value;
  }
  public resetTicketTimeToLive() {
    this._ticketTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketTimeToLiveInput() {
    return this._ticketTimeToLive;
  }

  // transport_type - computed: true, optional: true, required: false
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  public resetTransportType() {
    this._transportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // xml_validation_enabled - computed: true, optional: true, required: false
  private _xmlValidationEnabled?: boolean | cdktf.IResolvable; 
  public get xmlValidationEnabled() {
    return this.getBooleanAttribute('xml_validation_enabled');
  }
  public set xmlValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._xmlValidationEnabled = value;
  }
  public resetXmlValidationEnabled() {
    this._xmlValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlValidationEnabledInput() {
    return this._xmlValidationEnabled;
  }

  // xml_validation_secret - computed: true, optional: true, required: false
  private _xmlValidationSecret?: string; 
  public get xmlValidationSecret() {
    return this.getStringAttribute('xml_validation_secret');
  }
  public set xmlValidationSecret(value: string) {
    this._xmlValidationSecret = value;
  }
  public resetXmlValidationSecret() {
    this._xmlValidationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlValidationSecretInput() {
    return this._xmlValidationSecret;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}

export class StfStoreServiceFarmsList extends cdktf.ComplexList {
  public internalValue? : StfStoreServiceFarms[] | cdktf.IResolvable

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
  public get(index: number): StfStoreServiceFarmsOutputReference {
    return new StfStoreServiceFarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StfStoreServiceLaunchOptions {
  /**
  * Specifies the type of address(Dns, DnsPort, IPV4, IPV4Port, Dot, DotPort, Uri, NoChange) to use in the .ica launch file. Default is DnsPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#address_resolution_type StfStoreService#address_resolution_type}
  */
  readonly addressResolutionType?: string;
  /**
  * Specifies whether or not font smoothing is permitted for ICA sessions. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#allow_font_smoothing StfStoreService#allow_font_smoothing}
  */
  readonly allowFontSmoothing?: boolean | cdktf.IResolvable;
  /**
  * Redirect special folders such as Documents, Computer and the Desktop. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#allow_special_folder_redirection StfStoreService#allow_special_folder_redirection}
  */
  readonly allowSpecialFolderRedirection?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to failover to launch without the Federated Auth Service (FAS) should it become uncontactable. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#federated_authentication_service_failover StfStoreService#federated_authentication_service_failover}
  */
  readonly federatedAuthenticationServiceFailover?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not to ignore the address provided by the Citrix client. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#ignore_client_provided_client_address StfStoreService#ignore_client_provided_client_address}
  */
  readonly ignoreClientProvidedClientAddress?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a logon ticket must be duplicated in a logon ticket entry or placed in a separate .ica launch file ticket entry only. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#overlay_auto_login_credentials_with_ticket StfStoreService#overlay_auto_login_credentials_with_ticket}
  */
  readonly overlayAutoLoginCredentialsWithTicket?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not a Web Interface-generated ID must be passed in the client name entry of an .ica launch file. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#override_ica_client_name StfStoreService#override_ica_client_name}
  */
  readonly overrideIcaClientName?: boolean | cdktf.IResolvable;
  /**
  * Specifies TLS settings(SSLAnyCiphers, TLSGovCipers, DetectAnyCiphers). Default is DetectAnyCipher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#request_ica_client_secure_channel StfStoreService#request_ica_client_secure_channel}
  */
  readonly requestIcaClientSecureChannel?: string;
  /**
  * Specifies whether or not the use of launch references is enforced. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#require_launch_reference StfStoreService#require_launch_reference}
  */
  readonly requireLaunchReference?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether XenApp load bias should be used. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#set_no_load_bias_flag StfStoreService#set_no_load_bias_flag}
  */
  readonly setNoLoadBiasFlag?: boolean | cdktf.IResolvable;
  /**
  * The Vda logon data provider to use during launch. Default is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#vda_logon_data_provider StfStoreService#vda_logon_data_provider}
  */
  readonly vdaLogonDataProvider?: string;
}

export function stfStoreServiceLaunchOptionsToTerraform(struct?: StfStoreServiceLaunchOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_resolution_type: cdktf.stringToTerraform(struct!.addressResolutionType),
    allow_font_smoothing: cdktf.booleanToTerraform(struct!.allowFontSmoothing),
    allow_special_folder_redirection: cdktf.booleanToTerraform(struct!.allowSpecialFolderRedirection),
    federated_authentication_service_failover: cdktf.booleanToTerraform(struct!.federatedAuthenticationServiceFailover),
    ignore_client_provided_client_address: cdktf.booleanToTerraform(struct!.ignoreClientProvidedClientAddress),
    overlay_auto_login_credentials_with_ticket: cdktf.booleanToTerraform(struct!.overlayAutoLoginCredentialsWithTicket),
    override_ica_client_name: cdktf.booleanToTerraform(struct!.overrideIcaClientName),
    request_ica_client_secure_channel: cdktf.stringToTerraform(struct!.requestIcaClientSecureChannel),
    require_launch_reference: cdktf.booleanToTerraform(struct!.requireLaunchReference),
    set_no_load_bias_flag: cdktf.booleanToTerraform(struct!.setNoLoadBiasFlag),
    vda_logon_data_provider: cdktf.stringToTerraform(struct!.vdaLogonDataProvider),
  }
}


export function stfStoreServiceLaunchOptionsToHclTerraform(struct?: StfStoreServiceLaunchOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_resolution_type: {
      value: cdktf.stringToHclTerraform(struct!.addressResolutionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_font_smoothing: {
      value: cdktf.booleanToHclTerraform(struct!.allowFontSmoothing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_special_folder_redirection: {
      value: cdktf.booleanToHclTerraform(struct!.allowSpecialFolderRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    federated_authentication_service_failover: {
      value: cdktf.booleanToHclTerraform(struct!.federatedAuthenticationServiceFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_client_provided_client_address: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientProvidedClientAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overlay_auto_login_credentials_with_ticket: {
      value: cdktf.booleanToHclTerraform(struct!.overlayAutoLoginCredentialsWithTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_ica_client_name: {
      value: cdktf.booleanToHclTerraform(struct!.overrideIcaClientName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_ica_client_secure_channel: {
      value: cdktf.stringToHclTerraform(struct!.requestIcaClientSecureChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_launch_reference: {
      value: cdktf.booleanToHclTerraform(struct!.requireLaunchReference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_no_load_bias_flag: {
      value: cdktf.booleanToHclTerraform(struct!.setNoLoadBiasFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vda_logon_data_provider: {
      value: cdktf.stringToHclTerraform(struct!.vdaLogonDataProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceLaunchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServiceLaunchOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressResolutionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressResolutionType = this._addressResolutionType;
    }
    if (this._allowFontSmoothing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFontSmoothing = this._allowFontSmoothing;
    }
    if (this._allowSpecialFolderRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSpecialFolderRedirection = this._allowSpecialFolderRedirection;
    }
    if (this._federatedAuthenticationServiceFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedAuthenticationServiceFailover = this._federatedAuthenticationServiceFailover;
    }
    if (this._ignoreClientProvidedClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientProvidedClientAddress = this._ignoreClientProvidedClientAddress;
    }
    if (this._overlayAutoLoginCredentialsWithTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayAutoLoginCredentialsWithTicket = this._overlayAutoLoginCredentialsWithTicket;
    }
    if (this._overrideIcaClientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideIcaClientName = this._overrideIcaClientName;
    }
    if (this._requestIcaClientSecureChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIcaClientSecureChannel = this._requestIcaClientSecureChannel;
    }
    if (this._requireLaunchReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLaunchReference = this._requireLaunchReference;
    }
    if (this._setNoLoadBiasFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNoLoadBiasFlag = this._setNoLoadBiasFlag;
    }
    if (this._vdaLogonDataProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdaLogonDataProvider = this._vdaLogonDataProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceLaunchOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressResolutionType = undefined;
      this._allowFontSmoothing = undefined;
      this._allowSpecialFolderRedirection = undefined;
      this._federatedAuthenticationServiceFailover = undefined;
      this._ignoreClientProvidedClientAddress = undefined;
      this._overlayAutoLoginCredentialsWithTicket = undefined;
      this._overrideIcaClientName = undefined;
      this._requestIcaClientSecureChannel = undefined;
      this._requireLaunchReference = undefined;
      this._setNoLoadBiasFlag = undefined;
      this._vdaLogonDataProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressResolutionType = value.addressResolutionType;
      this._allowFontSmoothing = value.allowFontSmoothing;
      this._allowSpecialFolderRedirection = value.allowSpecialFolderRedirection;
      this._federatedAuthenticationServiceFailover = value.federatedAuthenticationServiceFailover;
      this._ignoreClientProvidedClientAddress = value.ignoreClientProvidedClientAddress;
      this._overlayAutoLoginCredentialsWithTicket = value.overlayAutoLoginCredentialsWithTicket;
      this._overrideIcaClientName = value.overrideIcaClientName;
      this._requestIcaClientSecureChannel = value.requestIcaClientSecureChannel;
      this._requireLaunchReference = value.requireLaunchReference;
      this._setNoLoadBiasFlag = value.setNoLoadBiasFlag;
      this._vdaLogonDataProvider = value.vdaLogonDataProvider;
    }
  }

  // address_resolution_type - computed: true, optional: true, required: false
  private _addressResolutionType?: string; 
  public get addressResolutionType() {
    return this.getStringAttribute('address_resolution_type');
  }
  public set addressResolutionType(value: string) {
    this._addressResolutionType = value;
  }
  public resetAddressResolutionType() {
    this._addressResolutionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressResolutionTypeInput() {
    return this._addressResolutionType;
  }

  // allow_font_smoothing - computed: true, optional: true, required: false
  private _allowFontSmoothing?: boolean | cdktf.IResolvable; 
  public get allowFontSmoothing() {
    return this.getBooleanAttribute('allow_font_smoothing');
  }
  public set allowFontSmoothing(value: boolean | cdktf.IResolvable) {
    this._allowFontSmoothing = value;
  }
  public resetAllowFontSmoothing() {
    this._allowFontSmoothing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFontSmoothingInput() {
    return this._allowFontSmoothing;
  }

  // allow_special_folder_redirection - computed: true, optional: true, required: false
  private _allowSpecialFolderRedirection?: boolean | cdktf.IResolvable; 
  public get allowSpecialFolderRedirection() {
    return this.getBooleanAttribute('allow_special_folder_redirection');
  }
  public set allowSpecialFolderRedirection(value: boolean | cdktf.IResolvable) {
    this._allowSpecialFolderRedirection = value;
  }
  public resetAllowSpecialFolderRedirection() {
    this._allowSpecialFolderRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSpecialFolderRedirectionInput() {
    return this._allowSpecialFolderRedirection;
  }

  // federated_authentication_service_failover - computed: true, optional: true, required: false
  private _federatedAuthenticationServiceFailover?: boolean | cdktf.IResolvable; 
  public get federatedAuthenticationServiceFailover() {
    return this.getBooleanAttribute('federated_authentication_service_failover');
  }
  public set federatedAuthenticationServiceFailover(value: boolean | cdktf.IResolvable) {
    this._federatedAuthenticationServiceFailover = value;
  }
  public resetFederatedAuthenticationServiceFailover() {
    this._federatedAuthenticationServiceFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedAuthenticationServiceFailoverInput() {
    return this._federatedAuthenticationServiceFailover;
  }

  // ignore_client_provided_client_address - computed: true, optional: true, required: false
  private _ignoreClientProvidedClientAddress?: boolean | cdktf.IResolvable; 
  public get ignoreClientProvidedClientAddress() {
    return this.getBooleanAttribute('ignore_client_provided_client_address');
  }
  public set ignoreClientProvidedClientAddress(value: boolean | cdktf.IResolvable) {
    this._ignoreClientProvidedClientAddress = value;
  }
  public resetIgnoreClientProvidedClientAddress() {
    this._ignoreClientProvidedClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientProvidedClientAddressInput() {
    return this._ignoreClientProvidedClientAddress;
  }

  // overlay_auto_login_credentials_with_ticket - computed: true, optional: true, required: false
  private _overlayAutoLoginCredentialsWithTicket?: boolean | cdktf.IResolvable; 
  public get overlayAutoLoginCredentialsWithTicket() {
    return this.getBooleanAttribute('overlay_auto_login_credentials_with_ticket');
  }
  public set overlayAutoLoginCredentialsWithTicket(value: boolean | cdktf.IResolvable) {
    this._overlayAutoLoginCredentialsWithTicket = value;
  }
  public resetOverlayAutoLoginCredentialsWithTicket() {
    this._overlayAutoLoginCredentialsWithTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayAutoLoginCredentialsWithTicketInput() {
    return this._overlayAutoLoginCredentialsWithTicket;
  }

  // override_ica_client_name - computed: true, optional: true, required: false
  private _overrideIcaClientName?: boolean | cdktf.IResolvable; 
  public get overrideIcaClientName() {
    return this.getBooleanAttribute('override_ica_client_name');
  }
  public set overrideIcaClientName(value: boolean | cdktf.IResolvable) {
    this._overrideIcaClientName = value;
  }
  public resetOverrideIcaClientName() {
    this._overrideIcaClientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIcaClientNameInput() {
    return this._overrideIcaClientName;
  }

  // request_ica_client_secure_channel - computed: true, optional: true, required: false
  private _requestIcaClientSecureChannel?: string; 
  public get requestIcaClientSecureChannel() {
    return this.getStringAttribute('request_ica_client_secure_channel');
  }
  public set requestIcaClientSecureChannel(value: string) {
    this._requestIcaClientSecureChannel = value;
  }
  public resetRequestIcaClientSecureChannel() {
    this._requestIcaClientSecureChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIcaClientSecureChannelInput() {
    return this._requestIcaClientSecureChannel;
  }

  // require_launch_reference - computed: true, optional: true, required: false
  private _requireLaunchReference?: boolean | cdktf.IResolvable; 
  public get requireLaunchReference() {
    return this.getBooleanAttribute('require_launch_reference');
  }
  public set requireLaunchReference(value: boolean | cdktf.IResolvable) {
    this._requireLaunchReference = value;
  }
  public resetRequireLaunchReference() {
    this._requireLaunchReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLaunchReferenceInput() {
    return this._requireLaunchReference;
  }

  // set_no_load_bias_flag - computed: true, optional: true, required: false
  private _setNoLoadBiasFlag?: boolean | cdktf.IResolvable; 
  public get setNoLoadBiasFlag() {
    return this.getBooleanAttribute('set_no_load_bias_flag');
  }
  public set setNoLoadBiasFlag(value: boolean | cdktf.IResolvable) {
    this._setNoLoadBiasFlag = value;
  }
  public resetSetNoLoadBiasFlag() {
    this._setNoLoadBiasFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNoLoadBiasFlagInput() {
    return this._setNoLoadBiasFlag;
  }

  // vda_logon_data_provider - computed: true, optional: true, required: false
  private _vdaLogonDataProvider?: string; 
  public get vdaLogonDataProvider() {
    return this.getStringAttribute('vda_logon_data_provider');
  }
  public set vdaLogonDataProvider(value: string) {
    this._vdaLogonDataProvider = value;
  }
  public resetVdaLogonDataProvider() {
    this._vdaLogonDataProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdaLogonDataProviderInput() {
    return this._vdaLogonDataProvider;
  }
}
export interface StfStoreServiceOptimalLaunchGateway {
  /**
  * If true, enabled on direct access (internal network). Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#enabled_on_direct_access StfStoreService#enabled_on_direct_access}
  */
  readonly enabledOnDirectAccess?: boolean | cdktf.IResolvable;
  /**
  * List of farm names considered for optimal gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#farm_name StfStoreService#farm_name}
  */
  readonly farmName?: string[];
  /**
  * The name of the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#gateway_name StfStoreService#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * List of zone names considered for optimal gateway.
  * 
  * ~> **Please Note** At least one of zone_name or farm_name must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#zone_name StfStoreService#zone_name}
  */
  readonly zoneName?: string[];
}

export function stfStoreServiceOptimalLaunchGatewayToTerraform(struct?: StfStoreServiceOptimalLaunchGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_on_direct_access: cdktf.booleanToTerraform(struct!.enabledOnDirectAccess),
    farm_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.farmName),
    gateway_name: cdktf.stringToTerraform(struct!.gatewayName),
    zone_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneName),
  }
}


export function stfStoreServiceOptimalLaunchGatewayToHclTerraform(struct?: StfStoreServiceOptimalLaunchGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_on_direct_access: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnDirectAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    farm_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.farmName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.gatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zoneName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceOptimalLaunchGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServiceOptimalLaunchGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledOnDirectAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnDirectAccess = this._enabledOnDirectAccess;
    }
    if (this._farmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.farmName = this._farmName;
    }
    if (this._gatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayName = this._gatewayName;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceOptimalLaunchGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledOnDirectAccess = undefined;
      this._farmName = undefined;
      this._gatewayName = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledOnDirectAccess = value.enabledOnDirectAccess;
      this._farmName = value.farmName;
      this._gatewayName = value.gatewayName;
      this._zoneName = value.zoneName;
    }
  }

  // enabled_on_direct_access - computed: true, optional: true, required: false
  private _enabledOnDirectAccess?: boolean | cdktf.IResolvable; 
  public get enabledOnDirectAccess() {
    return this.getBooleanAttribute('enabled_on_direct_access');
  }
  public set enabledOnDirectAccess(value: boolean | cdktf.IResolvable) {
    this._enabledOnDirectAccess = value;
  }
  public resetEnabledOnDirectAccess() {
    this._enabledOnDirectAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnDirectAccessInput() {
    return this._enabledOnDirectAccess;
  }

  // farm_name - computed: true, optional: true, required: false
  private _farmName?: string[]; 
  public get farmName() {
    return this.getListAttribute('farm_name');
  }
  public set farmName(value: string[]) {
    this._farmName = value;
  }
  public resetFarmName() {
    this._farmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get farmNameInput() {
    return this._farmName;
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
  }

  // zone_name - computed: true, optional: true, required: false
  private _zoneName?: string[]; 
  public get zoneName() {
    return this.getListAttribute('zone_name');
  }
  public set zoneName(value: string[]) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}
export interface StfStoreServicePna {
  /**
  * Whether PNA is enabled for the Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#enable StfStoreService#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
}

export function stfStoreServicePnaToTerraform(struct?: StfStoreServicePna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function stfStoreServicePnaToHclTerraform(struct?: StfStoreServicePna | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServicePnaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServicePna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServicePna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface StfStoreServiceRoamingAccount {
  /**
  * Whether the roaming account is published. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#published StfStoreService#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
}

export function stfStoreServiceRoamingAccountToTerraform(struct?: StfStoreServiceRoamingAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    published: cdktf.booleanToTerraform(struct!.published),
  }
}


export function stfStoreServiceRoamingAccountToHclTerraform(struct?: StfStoreServiceRoamingAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    published: {
      value: cdktf.booleanToHclTerraform(struct!.published),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfStoreServiceRoamingAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfStoreServiceRoamingAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._published !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfStoreServiceRoamingAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._published = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._published = value.published;
    }
  }

  // published - computed: true, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service citrix_stf_store_service}
*/
export class StfStoreService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_store_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfStoreService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfStoreService to import
  * @param importFromId The id of the existing StfStoreService that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfStoreService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_store_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_store_service citrix_stf_store_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfStoreServiceConfig
  */
  public constructor(scope: Construct, id: string, config: StfStoreServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_store_service',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anonymous = config.anonymous;
    this._authenticationServiceVirtualPath = config.authenticationServiceVirtualPath;
    this._enumerationOptions.internalValue = config.enumerationOptions;
    this._farmSettings.internalValue = config.farmSettings;
    this._farms.internalValue = config.farms;
    this._friendlyName = config.friendlyName;
    this._launchOptions.internalValue = config.launchOptions;
    this._loadBalance = config.loadBalance;
    this._optimalLaunchGateway.internalValue = config.optimalLaunchGateway;
    this._pna.internalValue = config.pna;
    this._roamingAccount.internalValue = config.roamingAccount;
    this._siteId = config.siteId;
    this._virtualPath = config.virtualPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous - computed: false, optional: true, required: false
  private _anonymous?: boolean | cdktf.IResolvable; 
  public get anonymous() {
    return this.getBooleanAttribute('anonymous');
  }
  public set anonymous(value: boolean | cdktf.IResolvable) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // authentication_service_virtual_path - computed: false, optional: true, required: false
  private _authenticationServiceVirtualPath?: string; 
  public get authenticationServiceVirtualPath() {
    return this.getStringAttribute('authentication_service_virtual_path');
  }
  public set authenticationServiceVirtualPath(value: string) {
    this._authenticationServiceVirtualPath = value;
  }
  public resetAuthenticationServiceVirtualPath() {
    this._authenticationServiceVirtualPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationServiceVirtualPathInput() {
    return this._authenticationServiceVirtualPath;
  }

  // enumeration_options - computed: false, optional: true, required: false
  private _enumerationOptions = new StfStoreServiceEnumerationOptionsOutputReference(this, "enumeration_options");
  public get enumerationOptions() {
    return this._enumerationOptions;
  }
  public putEnumerationOptions(value: StfStoreServiceEnumerationOptions) {
    this._enumerationOptions.internalValue = value;
  }
  public resetEnumerationOptions() {
    this._enumerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerationOptionsInput() {
    return this._enumerationOptions.internalValue;
  }

  // farm_settings - computed: false, optional: true, required: false
  private _farmSettings = new StfStoreServiceFarmSettingsOutputReference(this, "farm_settings");
  public get farmSettings() {
    return this._farmSettings;
  }
  public putFarmSettings(value: StfStoreServiceFarmSettings) {
    this._farmSettings.internalValue = value;
  }
  public resetFarmSettings() {
    this._farmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get farmSettingsInput() {
    return this._farmSettings.internalValue;
  }

  // farms - computed: false, optional: false, required: true
  private _farms = new StfStoreServiceFarmsList(this, "farms", false);
  public get farms() {
    return this._farms;
  }
  public putFarms(value: StfStoreServiceFarms[] | cdktf.IResolvable) {
    this._farms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmsInput() {
    return this._farms.internalValue;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions = new StfStoreServiceLaunchOptionsOutputReference(this, "launch_options");
  public get launchOptions() {
    return this._launchOptions;
  }
  public putLaunchOptions(value: StfStoreServiceLaunchOptions) {
    this._launchOptions.internalValue = value;
  }
  public resetLaunchOptions() {
    this._launchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchOptionsInput() {
    return this._launchOptions.internalValue;
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance?: boolean | cdktf.IResolvable; 
  public get loadBalance() {
    return this.getBooleanAttribute('load_balance');
  }
  public set loadBalance(value: boolean | cdktf.IResolvable) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // optimal_launch_gateway - computed: false, optional: true, required: false
  private _optimalLaunchGateway = new StfStoreServiceOptimalLaunchGatewayOutputReference(this, "optimal_launch_gateway");
  public get optimalLaunchGateway() {
    return this._optimalLaunchGateway;
  }
  public putOptimalLaunchGateway(value: StfStoreServiceOptimalLaunchGateway) {
    this._optimalLaunchGateway.internalValue = value;
  }
  public resetOptimalLaunchGateway() {
    this._optimalLaunchGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimalLaunchGatewayInput() {
    return this._optimalLaunchGateway.internalValue;
  }

  // pna - computed: false, optional: true, required: false
  private _pna = new StfStoreServicePnaOutputReference(this, "pna");
  public get pna() {
    return this._pna;
  }
  public putPna(value: StfStoreServicePna) {
    this._pna.internalValue = value;
  }
  public resetPna() {
    this._pna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnaInput() {
    return this._pna.internalValue;
  }

  // roaming_account - computed: false, optional: true, required: false
  private _roamingAccount = new StfStoreServiceRoamingAccountOutputReference(this, "roaming_account");
  public get roamingAccount() {
    return this._roamingAccount;
  }
  public putRoamingAccount(value: StfStoreServiceRoamingAccount) {
    this._roamingAccount.internalValue = value;
  }
  public resetRoamingAccount() {
    this._roamingAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingAccountInput() {
    return this._roamingAccount.internalValue;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymous: cdktf.booleanToTerraform(this._anonymous),
      authentication_service_virtual_path: cdktf.stringToTerraform(this._authenticationServiceVirtualPath),
      enumeration_options: stfStoreServiceEnumerationOptionsToTerraform(this._enumerationOptions.internalValue),
      farm_settings: stfStoreServiceFarmSettingsToTerraform(this._farmSettings.internalValue),
      farms: cdktf.listMapper(stfStoreServiceFarmsToTerraform, false)(this._farms.internalValue),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      launch_options: stfStoreServiceLaunchOptionsToTerraform(this._launchOptions.internalValue),
      load_balance: cdktf.booleanToTerraform(this._loadBalance),
      optimal_launch_gateway: stfStoreServiceOptimalLaunchGatewayToTerraform(this._optimalLaunchGateway.internalValue),
      pna: stfStoreServicePnaToTerraform(this._pna.internalValue),
      roaming_account: stfStoreServiceRoamingAccountToTerraform(this._roamingAccount.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      virtual_path: cdktf.stringToTerraform(this._virtualPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous: {
        value: cdktf.booleanToHclTerraform(this._anonymous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_service_virtual_path: {
        value: cdktf.stringToHclTerraform(this._authenticationServiceVirtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enumeration_options: {
        value: stfStoreServiceEnumerationOptionsToHclTerraform(this._enumerationOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServiceEnumerationOptions",
      },
      farm_settings: {
        value: stfStoreServiceFarmSettingsToHclTerraform(this._farmSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServiceFarmSettings",
      },
      farms: {
        value: cdktf.listMapperHcl(stfStoreServiceFarmsToHclTerraform, false)(this._farms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StfStoreServiceFarmsList",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_options: {
        value: stfStoreServiceLaunchOptionsToHclTerraform(this._launchOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServiceLaunchOptions",
      },
      load_balance: {
        value: cdktf.booleanToHclTerraform(this._loadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimal_launch_gateway: {
        value: stfStoreServiceOptimalLaunchGatewayToHclTerraform(this._optimalLaunchGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServiceOptimalLaunchGateway",
      },
      pna: {
        value: stfStoreServicePnaToHclTerraform(this._pna.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServicePna",
      },
      roaming_account: {
        value: stfStoreServiceRoamingAccountToHclTerraform(this._roamingAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfStoreServiceRoamingAccount",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_path: {
        value: cdktf.stringToHclTerraform(this._virtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
