// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviSystemconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration#id DataAviSystemconfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration#uuid DataAviSystemconfiguration#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations {
}

export function dataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToTerraform(struct?: DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsToHclTerraform(struct?: DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_mapping_profile_ref - computed: true, optional: false, required: false
  public get authMappingProfileRef() {
    return this.getStringAttribute('auth_mapping_profile_ref');
  }

  // auth_profile_ref - computed: true, optional: false, required: false
  public get authProfileRef() {
    return this.getStringAttribute('auth_profile_ref');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }
}

export class DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference {
    return new DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurations {
}

export function dataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToTerraform(struct?: DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsToHclTerraform(struct?: DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // service_auth_mapping_profile_ref - computed: true, optional: false, required: false
  public get serviceAuthMappingProfileRef() {
    return this.getStringAttribute('service_auth_mapping_profile_ref');
  }

  // service_auth_profile_ref - computed: true, optional: false, required: false
  public get serviceAuthProfileRef() {
    return this.getStringAttribute('service_auth_profile_ref');
  }
}

export class DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference {
    return new DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationAdminAuthConfiguration {
}

export function dataAviSystemconfigurationAdminAuthConfigurationToTerraform(struct?: DataAviSystemconfigurationAdminAuthConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationAdminAuthConfigurationToHclTerraform(struct?: DataAviSystemconfigurationAdminAuthConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationAdminAuthConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationAdminAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationAdminAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_local_user_login - computed: true, optional: false, required: false
  public get allowLocalUserLogin() {
    return this.getStringAttribute('allow_local_user_login');
  }

  // remote_auth_configurations - computed: true, optional: false, required: false
  private _remoteAuthConfigurations = new DataAviSystemconfigurationAdminAuthConfigurationRemoteAuthConfigurationsList(this, "remote_auth_configurations", false);
  public get remoteAuthConfigurations() {
    return this._remoteAuthConfigurations;
  }

  // service_auth_configurations - computed: true, optional: false, required: false
  private _serviceAuthConfigurations = new DataAviSystemconfigurationAdminAuthConfigurationServiceAuthConfigurationsList(this, "service_auth_configurations", false);
  public get serviceAuthConfigurations() {
    return this._serviceAuthConfigurations;
  }
}

export class DataAviSystemconfigurationAdminAuthConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationAdminAuthConfigurationOutputReference {
    return new DataAviSystemconfigurationAdminAuthConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationConfigpbAttributes {
}

export function dataAviSystemconfigurationConfigpbAttributesToTerraform(struct?: DataAviSystemconfigurationConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationConfigpbAttributesToHclTerraform(struct?: DataAviSystemconfigurationConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationConfigpbAttributes | undefined) {
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

export class DataAviSystemconfigurationConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationConfigpbAttributesOutputReference {
    return new DataAviSystemconfigurationConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds {
}

export function dataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToTerraform(struct?: DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsToHclTerraform(struct?: DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholds | undefined) {
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

export class DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference {
    return new DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationControllerAnalyticsPolicy {
}

export function dataAviSystemconfigurationControllerAnalyticsPolicyToTerraform(struct?: DataAviSystemconfigurationControllerAnalyticsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationControllerAnalyticsPolicyToHclTerraform(struct?: DataAviSystemconfigurationControllerAnalyticsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationControllerAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationControllerAnalyticsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationControllerAnalyticsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics_event_thresholds - computed: true, optional: false, required: false
  private _metricsEventThresholds = new DataAviSystemconfigurationControllerAnalyticsPolicyMetricsEventThresholdsList(this, "metrics_event_thresholds", false);
  public get metricsEventThresholds() {
    return this._metricsEventThresholds;
  }
}

export class DataAviSystemconfigurationControllerAnalyticsPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationControllerAnalyticsPolicyOutputReference {
    return new DataAviSystemconfigurationControllerAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationDnsConfigurationServerListStruct {
}

export function dataAviSystemconfigurationDnsConfigurationServerListStructToTerraform(struct?: DataAviSystemconfigurationDnsConfigurationServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationDnsConfigurationServerListStructToHclTerraform(struct?: DataAviSystemconfigurationDnsConfigurationServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationDnsConfigurationServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationDnsConfigurationServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationDnsConfigurationServerListStruct | undefined) {
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

export class DataAviSystemconfigurationDnsConfigurationServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationDnsConfigurationServerListStructOutputReference {
    return new DataAviSystemconfigurationDnsConfigurationServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationDnsConfiguration {
}

export function dataAviSystemconfigurationDnsConfigurationToTerraform(struct?: DataAviSystemconfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationDnsConfigurationToHclTerraform(struct?: DataAviSystemconfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationDnsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationDnsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationDnsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_domain - computed: true, optional: false, required: false
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }

  // server_list - computed: true, optional: false, required: false
  private _serverList = new DataAviSystemconfigurationDnsConfigurationServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
}

export class DataAviSystemconfigurationDnsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationDnsConfigurationOutputReference {
    return new DataAviSystemconfigurationDnsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationEmailConfiguration {
}

export function dataAviSystemconfigurationEmailConfigurationToTerraform(struct?: DataAviSystemconfigurationEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationEmailConfigurationToHclTerraform(struct?: DataAviSystemconfigurationEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationEmailConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // disable_tls - computed: true, optional: false, required: false
  public get disableTls() {
    return this.getStringAttribute('disable_tls');
  }

  // email_timezone - computed: true, optional: false, required: false
  public get emailTimezone() {
    return this.getStringAttribute('email_timezone');
  }

  // from_email - computed: true, optional: false, required: false
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }

  // from_name - computed: true, optional: false, required: false
  public get fromName() {
    return this.getStringAttribute('from_name');
  }

  // mail_server_name - computed: true, optional: false, required: false
  public get mailServerName() {
    return this.getStringAttribute('mail_server_name');
  }

  // mail_server_port - computed: true, optional: false, required: false
  public get mailServerPort() {
    return this.getStringAttribute('mail_server_port');
  }

  // smtp_type - computed: true, optional: false, required: false
  public get smtpType() {
    return this.getStringAttribute('smtp_type');
  }
}

export class DataAviSystemconfigurationEmailConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationEmailConfigurationOutputReference {
    return new DataAviSystemconfigurationEmailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationGlobalTenantConfigLicenseQuota {
}

export function dataAviSystemconfigurationGlobalTenantConfigLicenseQuotaToTerraform(struct?: DataAviSystemconfigurationGlobalTenantConfigLicenseQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationGlobalTenantConfigLicenseQuotaToHclTerraform(struct?: DataAviSystemconfigurationGlobalTenantConfigLicenseQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationGlobalTenantConfigLicenseQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationGlobalTenantConfigLicenseQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationGlobalTenantConfigLicenseQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // reservation - computed: true, optional: false, required: false
  public get reservation() {
    return this.getStringAttribute('reservation');
  }
}

export class DataAviSystemconfigurationGlobalTenantConfigLicenseQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationGlobalTenantConfigLicenseQuotaOutputReference {
    return new DataAviSystemconfigurationGlobalTenantConfigLicenseQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationGlobalTenantConfig {
}

export function dataAviSystemconfigurationGlobalTenantConfigToTerraform(struct?: DataAviSystemconfigurationGlobalTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationGlobalTenantConfigToHclTerraform(struct?: DataAviSystemconfigurationGlobalTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationGlobalTenantConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationGlobalTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationGlobalTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_quota - computed: true, optional: false, required: false
  private _licenseQuota = new DataAviSystemconfigurationGlobalTenantConfigLicenseQuotaList(this, "license_quota", true);
  public get licenseQuota() {
    return this._licenseQuota;
  }

  // se_in_provider_context - computed: true, optional: false, required: false
  public get seInProviderContext() {
    return this.getStringAttribute('se_in_provider_context');
  }

  // tenant_access_to_provider_se - computed: true, optional: false, required: false
  public get tenantAccessToProviderSe() {
    return this.getStringAttribute('tenant_access_to_provider_se');
  }

  // tenant_vrf - computed: true, optional: false, required: false
  public get tenantVrf() {
    return this.getStringAttribute('tenant_vrf');
  }
}

export class DataAviSystemconfigurationGlobalTenantConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationGlobalTenantConfigOutputReference {
    return new DataAviSystemconfigurationGlobalTenantConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationLicenseQuota {
}

export function dataAviSystemconfigurationLicenseQuotaToTerraform(struct?: DataAviSystemconfigurationLicenseQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationLicenseQuotaToHclTerraform(struct?: DataAviSystemconfigurationLicenseQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationLicenseQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationLicenseQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationLicenseQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // reservation - computed: true, optional: false, required: false
  public get reservation() {
    return this.getStringAttribute('reservation');
  }
}

export class DataAviSystemconfigurationLicenseQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationLicenseQuotaOutputReference {
    return new DataAviSystemconfigurationLicenseQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationLinuxConfiguration {
}

export function dataAviSystemconfigurationLinuxConfigurationToTerraform(struct?: DataAviSystemconfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationLinuxConfigurationToHclTerraform(struct?: DataAviSystemconfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationLinuxConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationLinuxConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationLinuxConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banner - computed: true, optional: false, required: false
  public get banner() {
    return this.getStringAttribute('banner');
  }

  // cis_mode - computed: true, optional: false, required: false
  public get cisMode() {
    return this.getStringAttribute('cis_mode');
  }

  // motd - computed: true, optional: false, required: false
  public get motd() {
    return this.getStringAttribute('motd');
  }
}

export class DataAviSystemconfigurationLinuxConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationLinuxConfigurationOutputReference {
    return new DataAviSystemconfigurationLinuxConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrs {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrs | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddr | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixes {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBegin {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBegin | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEnd {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEnd | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccessRanges {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccessRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlApiAccess {
}

export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlApiAccessToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlApiAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlApiAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlApiAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  private _addrs = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }

  // group_refs - computed: true, optional: false, required: false
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlApiAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlApiAccessOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlApiAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrs {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrs | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddr | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBegin | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEnd | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRanges {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlShellServerAccess {
}

export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlShellServerAccessToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlShellServerAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  private _addrs = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }

  // group_refs - computed: true, optional: false, required: false
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrs {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrs | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddr | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBegin | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEnd | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRanges {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSnmpAccess {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSnmpAccessToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSnmpAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  private _addrs = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }

  // group_refs - computed: true, optional: false, required: false
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrs {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrs | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddr | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixes {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBegin {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBegin | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEnd {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEnd | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccessRanges {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccessRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSshAccess {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSshAccessToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSshAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSshAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSshAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  private _addrs = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }

  // group_refs - computed: true, optional: false, required: false
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSshAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSshAccessOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSshAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrs {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrs | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddr | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixes {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBegin | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEnd | undefined) {
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

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRanges {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  private _begin = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControlSysintAccess {
}

export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlSysintAccessToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControlSysintAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControlSysintAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControlSysintAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addrs - computed: true, optional: false, required: false
  private _addrs = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }

  // group_refs - computed: true, optional: false, required: false
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlSysintAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlSysintAccessOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationMgmtIpAccessControl {
}

export function dataAviSystemconfigurationMgmtIpAccessControlToTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationMgmtIpAccessControlToHclTerraform(struct?: DataAviSystemconfigurationMgmtIpAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationMgmtIpAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationMgmtIpAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationMgmtIpAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_access - computed: true, optional: false, required: false
  private _apiAccess = new DataAviSystemconfigurationMgmtIpAccessControlApiAccessList(this, "api_access", true);
  public get apiAccess() {
    return this._apiAccess;
  }

  // shell_server_access - computed: true, optional: false, required: false
  private _shellServerAccess = new DataAviSystemconfigurationMgmtIpAccessControlShellServerAccessList(this, "shell_server_access", true);
  public get shellServerAccess() {
    return this._shellServerAccess;
  }

  // snmp_access - computed: true, optional: false, required: false
  private _snmpAccess = new DataAviSystemconfigurationMgmtIpAccessControlSnmpAccessList(this, "snmp_access", true);
  public get snmpAccess() {
    return this._snmpAccess;
  }

  // ssh_access - computed: true, optional: false, required: false
  private _sshAccess = new DataAviSystemconfigurationMgmtIpAccessControlSshAccessList(this, "ssh_access", true);
  public get sshAccess() {
    return this._sshAccess;
  }

  // sysint_access - computed: true, optional: false, required: false
  private _sysintAccess = new DataAviSystemconfigurationMgmtIpAccessControlSysintAccessList(this, "sysint_access", true);
  public get sysintAccess() {
    return this._sysintAccess;
  }
}

export class DataAviSystemconfigurationMgmtIpAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationMgmtIpAccessControlOutputReference {
    return new DataAviSystemconfigurationMgmtIpAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeys {
}

export function dataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysToTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysToHclTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
}

export class DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference {
    return new DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationNtpConfigurationNtpServerListStruct {
}

export function dataAviSystemconfigurationNtpConfigurationNtpServerListStructToTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationNtpConfigurationNtpServerListStructToHclTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationNtpConfigurationNtpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationNtpConfigurationNtpServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationNtpConfigurationNtpServerListStruct | undefined) {
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

export class DataAviSystemconfigurationNtpConfigurationNtpServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationNtpConfigurationNtpServerListStructOutputReference {
    return new DataAviSystemconfigurationNtpConfigurationNtpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationNtpConfigurationNtpServersServer {
}

export function dataAviSystemconfigurationNtpConfigurationNtpServersServerToTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServersServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationNtpConfigurationNtpServersServerToHclTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServersServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationNtpConfigurationNtpServersServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationNtpConfigurationNtpServersServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationNtpConfigurationNtpServersServer | undefined) {
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

export class DataAviSystemconfigurationNtpConfigurationNtpServersServerList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationNtpConfigurationNtpServersServerOutputReference {
    return new DataAviSystemconfigurationNtpConfigurationNtpServersServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationNtpConfigurationNtpServers {
}

export function dataAviSystemconfigurationNtpConfigurationNtpServersToTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationNtpConfigurationNtpServersToHclTerraform(struct?: DataAviSystemconfigurationNtpConfigurationNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationNtpConfigurationNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationNtpConfigurationNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationNtpConfigurationNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataAviSystemconfigurationNtpConfigurationNtpServersServerList(this, "server", true);
  public get server() {
    return this._server;
  }
}

export class DataAviSystemconfigurationNtpConfigurationNtpServersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationNtpConfigurationNtpServersOutputReference {
    return new DataAviSystemconfigurationNtpConfigurationNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationNtpConfiguration {
}

export function dataAviSystemconfigurationNtpConfigurationToTerraform(struct?: DataAviSystemconfigurationNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationNtpConfigurationToHclTerraform(struct?: DataAviSystemconfigurationNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationNtpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationNtpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationNtpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ntp_authentication_keys - computed: true, optional: false, required: false
  private _ntpAuthenticationKeys = new DataAviSystemconfigurationNtpConfigurationNtpAuthenticationKeysList(this, "ntp_authentication_keys", false);
  public get ntpAuthenticationKeys() {
    return this._ntpAuthenticationKeys;
  }

  // ntp_server_list - computed: true, optional: false, required: false
  private _ntpServerList = new DataAviSystemconfigurationNtpConfigurationNtpServerListStructList(this, "ntp_server_list", false);
  public get ntpServerList() {
    return this._ntpServerList;
  }

  // ntp_servers - computed: true, optional: false, required: false
  private _ntpServers = new DataAviSystemconfigurationNtpConfigurationNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }
}

export class DataAviSystemconfigurationNtpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationNtpConfigurationOutputReference {
    return new DataAviSystemconfigurationNtpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationPortalConfiguration {
}

export function dataAviSystemconfigurationPortalConfigurationToTerraform(struct?: DataAviSystemconfigurationPortalConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationPortalConfigurationToHclTerraform(struct?: DataAviSystemconfigurationPortalConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationPortalConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationPortalConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationPortalConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_basic_authentication - computed: true, optional: false, required: false
  public get allowBasicAuthentication() {
    return this.getStringAttribute('allow_basic_authentication');
  }

  // api_force_timeout - computed: true, optional: false, required: false
  public get apiForceTimeout() {
    return this.getStringAttribute('api_force_timeout');
  }

  // disable_remote_cli_shell - computed: true, optional: false, required: false
  public get disableRemoteCliShell() {
    return this.getStringAttribute('disable_remote_cli_shell');
  }

  // disable_swagger - computed: true, optional: false, required: false
  public get disableSwagger() {
    return this.getStringAttribute('disable_swagger');
  }

  // enable_clickjacking_protection - computed: true, optional: false, required: false
  public get enableClickjackingProtection() {
    return this.getStringAttribute('enable_clickjacking_protection');
  }

  // enable_http - computed: true, optional: false, required: false
  public get enableHttp() {
    return this.getStringAttribute('enable_http');
  }

  // enable_https - computed: true, optional: false, required: false
  public get enableHttps() {
    return this.getStringAttribute('enable_https');
  }

  // enable_rate_limiter - computed: true, optional: false, required: false
  public get enableRateLimiter() {
    return this.getStringAttribute('enable_rate_limiter');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }

  // legacy_ssl_support - computed: true, optional: false, required: false
  public get legacySslSupport() {
    return this.getStringAttribute('legacy_ssl_support');
  }

  // minimum_password_length - computed: true, optional: false, required: false
  public get minimumPasswordLength() {
    return this.getStringAttribute('minimum_password_length');
  }

  // password_strength_check - computed: true, optional: false, required: false
  public get passwordStrengthCheck() {
    return this.getStringAttribute('password_strength_check');
  }

  // pkiprofile_ref - computed: true, optional: false, required: false
  public get pkiprofileRef() {
    return this.getStringAttribute('pkiprofile_ref');
  }

  // redirect_to_https - computed: true, optional: false, required: false
  public get redirectToHttps() {
    return this.getStringAttribute('redirect_to_https');
  }

  // sslkeyandcertificate_refs - computed: true, optional: false, required: false
  public get sslkeyandcertificateRefs() {
    return this.getListAttribute('sslkeyandcertificate_refs');
  }

  // sslprofile_ref - computed: true, optional: false, required: false
  public get sslprofileRef() {
    return this.getStringAttribute('sslprofile_ref');
  }

  // use_uuid_from_input - computed: true, optional: false, required: false
  public get useUuidFromInput() {
    return this.getStringAttribute('use_uuid_from_input');
  }
}

export class DataAviSystemconfigurationPortalConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationPortalConfigurationOutputReference {
    return new DataAviSystemconfigurationPortalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationProxyConfiguration {
}

export function dataAviSystemconfigurationProxyConfigurationToTerraform(struct?: DataAviSystemconfigurationProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationProxyConfigurationToHclTerraform(struct?: DataAviSystemconfigurationProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviSystemconfigurationProxyConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationProxyConfigurationOutputReference {
    return new DataAviSystemconfigurationProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationSecureChannelConfiguration {
}

export function dataAviSystemconfigurationSecureChannelConfigurationToTerraform(struct?: DataAviSystemconfigurationSecureChannelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationSecureChannelConfigurationToHclTerraform(struct?: DataAviSystemconfigurationSecureChannelConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationSecureChannelConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationSecureChannelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationSecureChannelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sslkeyandcertificate_refs - computed: true, optional: false, required: false
  public get sslkeyandcertificateRefs() {
    return this.getListAttribute('sslkeyandcertificate_refs');
  }
}

export class DataAviSystemconfigurationSecureChannelConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationSecureChannelConfigurationOutputReference {
    return new DataAviSystemconfigurationSecureChannelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUser {
}

export function dataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserToTerraform(struct?: DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserToHclTerraform(struct?: DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_passphrase - computed: true, optional: false, required: false
  public get authPassphrase() {
    return this.getStringAttribute('auth_passphrase');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // priv_passphrase - computed: true, optional: false, required: false
  public get privPassphrase() {
    return this.getStringAttribute('priv_passphrase');
  }

  // priv_type - computed: true, optional: false, required: false
  public get privType() {
    return this.getStringAttribute('priv_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference {
    return new DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationSnmpConfigurationSnmpV3Config {
}

export function dataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigToTerraform(struct?: DataAviSystemconfigurationSnmpConfigurationSnmpV3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigToHclTerraform(struct?: DataAviSystemconfigurationSnmpConfigurationSnmpV3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationSnmpConfigurationSnmpV3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationSnmpConfigurationSnmpV3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigUserList(this, "user", true);
  public get user() {
    return this._user;
  }
}

export class DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference {
    return new DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationSnmpConfiguration {
}

export function dataAviSystemconfigurationSnmpConfigurationToTerraform(struct?: DataAviSystemconfigurationSnmpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationSnmpConfigurationToHclTerraform(struct?: DataAviSystemconfigurationSnmpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationSnmpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationSnmpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationSnmpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // large_trap_payload - computed: true, optional: false, required: false
  public get largeTrapPayload() {
    return this.getStringAttribute('large_trap_payload');
  }

  // snmp_v3_config - computed: true, optional: false, required: false
  private _snmpV3Config = new DataAviSystemconfigurationSnmpConfigurationSnmpV3ConfigList(this, "snmp_v3_config", true);
  public get snmpV3Config() {
    return this._snmpV3Config;
  }

  // sys_contact - computed: true, optional: false, required: false
  public get sysContact() {
    return this.getStringAttribute('sys_contact');
  }

  // sys_location - computed: true, optional: false, required: false
  public get sysLocation() {
    return this.getStringAttribute('sys_location');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviSystemconfigurationSnmpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationSnmpConfigurationOutputReference {
    return new DataAviSystemconfigurationSnmpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationSyslogServers {
}

export function dataAviSystemconfigurationSyslogServersToTerraform(struct?: DataAviSystemconfigurationSyslogServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationSyslogServersToHclTerraform(struct?: DataAviSystemconfigurationSyslogServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationSyslogServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationSyslogServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationSyslogServers | undefined) {
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

export class DataAviSystemconfigurationSyslogServersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationSyslogServersOutputReference {
    return new DataAviSystemconfigurationSyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemconfigurationTelemetryConfiguration {
}

export function dataAviSystemconfigurationTelemetryConfigurationToTerraform(struct?: DataAviSystemconfigurationTelemetryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemconfigurationTelemetryConfigurationToHclTerraform(struct?: DataAviSystemconfigurationTelemetryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemconfigurationTelemetryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemconfigurationTelemetryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemconfigurationTelemetryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getStringAttribute('enable');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAviSystemconfigurationTelemetryConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemconfigurationTelemetryConfigurationOutputReference {
    return new DataAviSystemconfigurationTelemetryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration avi_systemconfiguration}
*/
export class DataAviSystemconfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_systemconfiguration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviSystemconfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviSystemconfiguration to import
  * @param importFromId The id of the existing DataAviSystemconfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviSystemconfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_systemconfiguration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/systemconfiguration avi_systemconfiguration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviSystemconfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviSystemconfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_systemconfiguration',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_auth_configuration - computed: true, optional: false, required: false
  private _adminAuthConfiguration = new DataAviSystemconfigurationAdminAuthConfigurationList(this, "admin_auth_configuration", true);
  public get adminAuthConfiguration() {
    return this._adminAuthConfiguration;
  }

  // avi_email_login_password - computed: true, optional: false, required: false
  public get aviEmailLoginPassword() {
    return this.getStringAttribute('avi_email_login_password');
  }

  // common_criteria_mode - computed: true, optional: false, required: false
  public get commonCriteriaMode() {
    return this.getStringAttribute('common_criteria_mode');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviSystemconfigurationConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // controller_analytics_policy - computed: true, optional: false, required: false
  private _controllerAnalyticsPolicy = new DataAviSystemconfigurationControllerAnalyticsPolicyList(this, "controller_analytics_policy", true);
  public get controllerAnalyticsPolicy() {
    return this._controllerAnalyticsPolicy;
  }

  // default_license_tier - computed: true, optional: false, required: false
  public get defaultLicenseTier() {
    return this.getStringAttribute('default_license_tier');
  }

  // dns_configuration - computed: true, optional: false, required: false
  private _dnsConfiguration = new DataAviSystemconfigurationDnsConfigurationList(this, "dns_configuration", true);
  public get dnsConfiguration() {
    return this._dnsConfiguration;
  }

  // dns_virtualservice_refs - computed: true, optional: false, required: false
  public get dnsVirtualserviceRefs() {
    return this.getListAttribute('dns_virtualservice_refs');
  }

  // docker_mode - computed: true, optional: false, required: false
  public get dockerMode() {
    return this.getStringAttribute('docker_mode');
  }

  // email_configuration - computed: true, optional: false, required: false
  private _emailConfiguration = new DataAviSystemconfigurationEmailConfigurationList(this, "email_configuration", true);
  public get emailConfiguration() {
    return this._emailConfiguration;
  }

  // enable_cors - computed: true, optional: false, required: false
  public get enableCors() {
    return this.getStringAttribute('enable_cors');
  }

  // enable_host_header_check - computed: true, optional: false, required: false
  public get enableHostHeaderCheck() {
    return this.getStringAttribute('enable_host_header_check');
  }

  // enable_license_quota - computed: true, optional: false, required: false
  public get enableLicenseQuota() {
    return this.getStringAttribute('enable_license_quota');
  }

  // fips_mode - computed: true, optional: false, required: false
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }

  // global_tenant_config - computed: true, optional: false, required: false
  private _globalTenantConfig = new DataAviSystemconfigurationGlobalTenantConfigList(this, "global_tenant_config", true);
  public get globalTenantConfig() {
    return this._globalTenantConfig;
  }

  // host_key_algorithm_exclude - computed: true, optional: false, required: false
  public get hostKeyAlgorithmExclude() {
    return this.getStringAttribute('host_key_algorithm_exclude');
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

  // kex_algorithm_exclude - computed: true, optional: false, required: false
  public get kexAlgorithmExclude() {
    return this.getStringAttribute('kex_algorithm_exclude');
  }

  // legacy_ssl_support - computed: true, optional: false, required: false
  public get legacySslSupport() {
    return this.getStringAttribute('legacy_ssl_support');
  }

  // license_quota - computed: true, optional: false, required: false
  private _licenseQuota = new DataAviSystemconfigurationLicenseQuotaList(this, "license_quota", true);
  public get licenseQuota() {
    return this._licenseQuota;
  }

  // linux_configuration - computed: true, optional: false, required: false
  private _linuxConfiguration = new DataAviSystemconfigurationLinuxConfigurationList(this, "linux_configuration", true);
  public get linuxConfiguration() {
    return this._linuxConfiguration;
  }

  // mgmt_ip_access_control - computed: true, optional: false, required: false
  private _mgmtIpAccessControl = new DataAviSystemconfigurationMgmtIpAccessControlList(this, "mgmt_ip_access_control", true);
  public get mgmtIpAccessControl() {
    return this._mgmtIpAccessControl;
  }

  // ntp_configuration - computed: true, optional: false, required: false
  private _ntpConfiguration = new DataAviSystemconfigurationNtpConfigurationList(this, "ntp_configuration", true);
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }

  // portal_configuration - computed: true, optional: false, required: false
  private _portalConfiguration = new DataAviSystemconfigurationPortalConfigurationList(this, "portal_configuration", true);
  public get portalConfiguration() {
    return this._portalConfiguration;
  }

  // proxy_configuration - computed: true, optional: false, required: false
  private _proxyConfiguration = new DataAviSystemconfigurationProxyConfigurationList(this, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }

  // rekey_time_limit - computed: true, optional: false, required: false
  public get rekeyTimeLimit() {
    return this.getStringAttribute('rekey_time_limit');
  }

  // rekey_volume_limit - computed: true, optional: false, required: false
  public get rekeyVolumeLimit() {
    return this.getStringAttribute('rekey_volume_limit');
  }

  // sddcmanager_fqdn - computed: true, optional: false, required: false
  public get sddcmanagerFqdn() {
    return this.getStringAttribute('sddcmanager_fqdn');
  }

  // secure_channel_configuration - computed: true, optional: false, required: false
  private _secureChannelConfiguration = new DataAviSystemconfigurationSecureChannelConfigurationList(this, "secure_channel_configuration", true);
  public get secureChannelConfiguration() {
    return this._secureChannelConfiguration;
  }

  // snmp_configuration - computed: true, optional: false, required: false
  private _snmpConfiguration = new DataAviSystemconfigurationSnmpConfigurationList(this, "snmp_configuration", true);
  public get snmpConfiguration() {
    return this._snmpConfiguration;
  }

  // ssh_ciphers - computed: true, optional: false, required: false
  public get sshCiphers() {
    return this.getListAttribute('ssh_ciphers');
  }

  // ssh_hmacs - computed: true, optional: false, required: false
  public get sshHmacs() {
    return this.getListAttribute('ssh_hmacs');
  }

  // sync_kex_host_to_se - computed: true, optional: false, required: false
  public get syncKexHostToSe() {
    return this.getStringAttribute('sync_kex_host_to_se');
  }

  // sync_syslog_to_se - computed: true, optional: false, required: false
  public get syncSyslogToSe() {
    return this.getStringAttribute('sync_syslog_to_se');
  }

  // syslog_servers - computed: true, optional: false, required: false
  private _syslogServers = new DataAviSystemconfigurationSyslogServersList(this, "syslog_servers", false);
  public get syslogServers() {
    return this._syslogServers;
  }

  // telemetry_configuration - computed: true, optional: false, required: false
  private _telemetryConfiguration = new DataAviSystemconfigurationTelemetryConfigurationList(this, "telemetry_configuration", true);
  public get telemetryConfiguration() {
    return this._telemetryConfiguration;
  }

  // trusted_host_profiles_refs - computed: true, optional: false, required: false
  public get trustedHostProfilesRefs() {
    return this.getListAttribute('trusted_host_profiles_refs');
  }

  // truststore_pkiprofile_ref - computed: true, optional: false, required: false
  public get truststorePkiprofileRef() {
    return this.getStringAttribute('truststore_pkiprofile_ref');
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

  // welcome_workflow_complete - computed: true, optional: false, required: false
  public get welcomeWorkflowComplete() {
    return this.getStringAttribute('welcome_workflow_complete');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
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
