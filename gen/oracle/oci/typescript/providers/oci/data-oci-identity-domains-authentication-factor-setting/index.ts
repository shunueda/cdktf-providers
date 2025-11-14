// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsAuthenticationFactorSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}
  */
  readonly authenticationFactorSettingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // help_desk_code_expiry_in_mins - computed: true, optional: false, required: false
  public get helpDeskCodeExpiryInMins() {
    return this.getNumberAttribute('help_desk_code_expiry_in_mins');
  }

  // help_desk_generation_enabled - computed: true, optional: false, required: false
  public get helpDeskGenerationEnabled() {
    return this.getBooleanAttribute('help_desk_generation_enabled');
  }

  // help_desk_max_usage - computed: true, optional: false, required: false
  public get helpDeskMaxUsage() {
    return this.getNumberAttribute('help_desk_max_usage');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // max_active - computed: true, optional: false, required: false
  public get maxActive() {
    return this.getNumberAttribute('max_active');
  }

  // self_service_generation_enabled - computed: true, optional: false, required: false
  public get selfServiceGenerationEnabled() {
    return this.getBooleanAttribute('self_service_generation_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_protection_policy - computed: true, optional: false, required: false
  public get deviceProtectionPolicy() {
    return this.getStringAttribute('device_protection_policy');
  }

  // initial_lockout_period_in_secs - computed: true, optional: false, required: false
  public get initialLockoutPeriodInSecs() {
    return this.getNumberAttribute('initial_lockout_period_in_secs');
  }

  // key_pair_length - computed: true, optional: false, required: false
  public get keyPairLength() {
    return this.getNumberAttribute('key_pair_length');
  }

  // lockout_escalation_pattern - computed: true, optional: false, required: false
  public get lockoutEscalationPattern() {
    return this.getStringAttribute('lockout_escalation_pattern');
  }

  // max_failures_before_lockout - computed: true, optional: false, required: false
  public get maxFailuresBeforeLockout() {
    return this.getNumberAttribute('max_failures_before_lockout');
  }

  // max_failures_before_warning - computed: true, optional: false, required: false
  public get maxFailuresBeforeWarning() {
    return this.getNumberAttribute('max_failures_before_warning');
  }

  // max_lockout_interval_in_secs - computed: true, optional: false, required: false
  public get maxLockoutIntervalInSecs() {
    return this.getNumberAttribute('max_lockout_interval_in_secs');
  }

  // min_pin_length - computed: true, optional: false, required: false
  public get minPinLength() {
    return this.getNumberAttribute('min_pin_length');
  }

  // policy_update_freq_in_days - computed: true, optional: false, required: false
  public get policyUpdateFreqInDays() {
    return this.getNumberAttribute('policy_update_freq_in_days');
  }

  // request_signing_algo - computed: true, optional: false, required: false
  public get requestSigningAlgo() {
    return this.getStringAttribute('request_signing_algo');
  }

  // shared_secret_encoding - computed: true, optional: false, required: false
  public get sharedSecretEncoding() {
    return this.getStringAttribute('shared_secret_encoding');
  }

  // unlock_app_for_each_request_enabled - computed: true, optional: false, required: false
  public get unlockAppForEachRequestEnabled() {
    return this.getBooleanAttribute('unlock_app_for_each_request_enabled');
  }

  // unlock_app_interval_in_secs - computed: true, optional: false, required: false
  public get unlockAppIntervalInSecs() {
    return this.getNumberAttribute('unlock_app_interval_in_secs');
  }

  // unlock_on_app_foreground_enabled - computed: true, optional: false, required: false
  public get unlockOnAppForegroundEnabled() {
    return this.getBooleanAttribute('unlock_on_app_foreground_enabled');
  }

  // unlock_on_app_start_enabled - computed: true, optional: false, required: false
  public get unlockOnAppStartEnabled() {
    return this.getBooleanAttribute('unlock_on_app_start_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_link_custom_url - computed: true, optional: false, required: false
  public get emailLinkCustomUrl() {
    return this.getStringAttribute('email_link_custom_url');
  }

  // email_link_enabled - computed: true, optional: false, required: false
  public get emailLinkEnabled() {
    return this.getBooleanAttribute('email_link_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_endpoint_trust_duration_in_days - computed: true, optional: false, required: false
  public get maxEndpointTrustDurationInDays() {
    return this.getNumberAttribute('max_endpoint_trust_duration_in_days');
  }

  // max_enrolled_devices - computed: true, optional: false, required: false
  public get maxEnrolledDevices() {
    return this.getNumberAttribute('max_enrolled_devices');
  }

  // max_incorrect_attempts - computed: true, optional: false, required: false
  public get maxIncorrectAttempts() {
    return this.getNumberAttribute('max_incorrect_attempts');
  }

  // max_trusted_endpoints - computed: true, optional: false, required: false
  public get maxTrustedEndpoints() {
    return this.getNumberAttribute('max_trusted_endpoints');
  }

  // trusted_endpoints_enabled - computed: true, optional: false, required: false
  public get trustedEndpointsEnabled() {
    return this.getBooleanAttribute('trusted_endpoints_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mobile_number_enabled - computed: true, optional: false, required: false
  public get mobileNumberEnabled() {
    return this.getBooleanAttribute('mobile_number_enabled');
  }

  // mobile_number_update_enabled - computed: true, optional: false, required: false
  public get mobileNumberUpdateEnabled() {
    return this.getBooleanAttribute('mobile_number_update_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingMeta {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingMetaToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingMetaToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pull_enabled - computed: true, optional: false, required: false
  public get pullEnabled() {
    return this.getBooleanAttribute('pull_enabled');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingTags {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingTagsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingTagsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duo_security - computed: true, optional: false, required: false
  public get duoSecurity() {
    return this.getBooleanAttribute('duo_security');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_otp_validity_duration_in_mins - computed: true, optional: false, required: false
  public get emailOtpValidityDurationInMins() {
    return this.getNumberAttribute('email_otp_validity_duration_in_mins');
  }

  // email_passcode_length - computed: true, optional: false, required: false
  public get emailPasscodeLength() {
    return this.getNumberAttribute('email_passcode_length');
  }

  // hashing_algorithm - computed: true, optional: false, required: false
  public get hashingAlgorithm() {
    return this.getStringAttribute('hashing_algorithm');
  }

  // jwt_validity_duration_in_secs - computed: true, optional: false, required: false
  public get jwtValidityDurationInSecs() {
    return this.getNumberAttribute('jwt_validity_duration_in_secs');
  }

  // key_refresh_interval_in_days - computed: true, optional: false, required: false
  public get keyRefreshIntervalInDays() {
    return this.getNumberAttribute('key_refresh_interval_in_days');
  }

  // passcode_length - computed: true, optional: false, required: false
  public get passcodeLength() {
    return this.getNumberAttribute('passcode_length');
  }

  // sms_otp_validity_duration_in_mins - computed: true, optional: false, required: false
  public get smsOtpValidityDurationInMins() {
    return this.getNumberAttribute('sms_otp_validity_duration_in_mins');
  }

  // sms_passcode_length - computed: true, optional: false, required: false
  public get smsPasscodeLength() {
    return this.getNumberAttribute('sms_passcode_length');
  }

  // time_step_in_secs - computed: true, optional: false, required: false
  public get timeStepInSecs() {
    return this.getNumberAttribute('time_step_in_secs');
  }

  // time_step_tolerance - computed: true, optional: false, required: false
  public get timeStepTolerance() {
    return this.getNumberAttribute('time_step_tolerance');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attestation - computed: true, optional: false, required: false
  public get attestation() {
    return this.getStringAttribute('attestation');
  }

  // authenticator_selection_attachment - computed: true, optional: false, required: false
  public get authenticatorSelectionAttachment() {
    return this.getStringAttribute('authenticator_selection_attachment');
  }

  // authenticator_selection_require_resident_key - computed: true, optional: false, required: false
  public get authenticatorSelectionRequireResidentKey() {
    return this.getBooleanAttribute('authenticator_selection_require_resident_key');
  }

  // authenticator_selection_resident_key - computed: true, optional: false, required: false
  public get authenticatorSelectionResidentKey() {
    return this.getStringAttribute('authenticator_selection_resident_key');
  }

  // authenticator_selection_user_verification - computed: true, optional: false, required: false
  public get authenticatorSelectionUserVerification() {
    return this.getStringAttribute('authenticator_selection_user_verification');
  }

  // domain_validation_level - computed: true, optional: false, required: false
  public get domainValidationLevel() {
    return this.getNumberAttribute('domain_validation_level');
  }

  // exclude_credentials - computed: true, optional: false, required: false
  public get excludeCredentials() {
    return this.getBooleanAttribute('exclude_credentials');
  }

  // public_key_types - computed: true, optional: false, required: false
  public get publicKeyTypes() {
    return this.getListAttribute('public_key_types');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_hostname - computed: true, optional: false, required: false
  public get apiHostname() {
    return this.getStringAttribute('api_hostname');
  }

  // attestation_key - computed: true, optional: false, required: false
  public get attestationKey() {
    return this.getStringAttribute('attestation_key');
  }

  // integration_key - computed: true, optional: false, required: false
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // user_mapping_attribute - computed: true, optional: false, required: false
  public get userMappingAttribute() {
    return this.getStringAttribute('user_mapping_attribute');
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings {
}

export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsToHclTerraform(struct?: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duo_security_settings - computed: true, optional: false, required: false
  private _duoSecuritySettings = new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList(this, "duo_security_settings", false);
  public get duoSecuritySettings() {
    return this._duoSecuritySettings;
  }
}

export class DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference {
    return new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}
*/
export class DataOciIdentityDomainsAuthenticationFactorSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_authentication_factor_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsAuthenticationFactorSetting to import
  * @param importFromId The id of the existing DataOciIdentityDomainsAuthenticationFactorSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsAuthenticationFactorSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_authentication_factor_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsAuthenticationFactorSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsAuthenticationFactorSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_authentication_factor_setting',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authenticationFactorSettingId = config.authenticationFactorSettingId;
    this._authorization = config.authorization;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authentication_factor_setting_id - computed: false, optional: true, required: false
  private _authenticationFactorSettingId?: string; 
  public get authenticationFactorSettingId() {
    return this.getStringAttribute('authentication_factor_setting_id');
  }
  public set authenticationFactorSettingId(value: string) {
    this._authenticationFactorSettingId = value;
  }
  public resetAuthenticationFactorSettingId() {
    this._authenticationFactorSettingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFactorSettingIdInput() {
    return this._authenticationFactorSettingId;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // auto_enroll_email_factor_disabled - computed: true, optional: false, required: false
  public get autoEnrollEmailFactorDisabled() {
    return this.getBooleanAttribute('auto_enroll_email_factor_disabled');
  }

  // bypass_code_enabled - computed: true, optional: false, required: false
  public get bypassCodeEnabled() {
    return this.getBooleanAttribute('bypass_code_enabled');
  }

  // bypass_code_settings - computed: true, optional: false, required: false
  private _bypassCodeSettings = new DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList(this, "bypass_code_settings", false);
  public get bypassCodeSettings() {
    return this._bypassCodeSettings;
  }

  // client_app_settings - computed: true, optional: false, required: false
  private _clientAppSettings = new DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList(this, "client_app_settings", false);
  public get clientAppSettings() {
    return this._clientAppSettings;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // compliance_policy - computed: true, optional: false, required: false
  private _compliancePolicy = new DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList(this, "compliance_policy", false);
  public get compliancePolicy() {
    return this._compliancePolicy;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // email_enabled - computed: true, optional: false, required: false
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }

  // email_settings - computed: true, optional: false, required: false
  private _emailSettings = new DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList(this, "email_settings", false);
  public get emailSettings() {
    return this._emailSettings;
  }

  // endpoint_restrictions - computed: true, optional: false, required: false
  private _endpointRestrictions = new DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList(this, "endpoint_restrictions", false);
  public get endpointRestrictions() {
    return this._endpointRestrictions;
  }

  // fido_authenticator_enabled - computed: true, optional: false, required: false
  public get fidoAuthenticatorEnabled() {
    return this.getBooleanAttribute('fido_authenticator_enabled');
  }

  // hide_backup_factor_enabled - computed: true, optional: false, required: false
  public get hideBackupFactorEnabled() {
    return this.getBooleanAttribute('hide_backup_factor_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // identity_store_settings - computed: true, optional: false, required: false
  private _identityStoreSettings = new DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList(this, "identity_store_settings", false);
  public get identityStoreSettings() {
    return this._identityStoreSettings;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsAuthenticationFactorSettingMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // mfa_enabled_category - computed: true, optional: false, required: false
  public get mfaEnabledCategory() {
    return this.getStringAttribute('mfa_enabled_category');
  }

  // mfa_enrollment_type - computed: true, optional: false, required: false
  public get mfaEnrollmentType() {
    return this.getStringAttribute('mfa_enrollment_type');
  }

  // notification_settings - computed: true, optional: false, required: false
  private _notificationSettings = new DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList(this, "notification_settings", false);
  public get notificationSettings() {
    return this._notificationSettings;
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // phone_call_enabled - computed: true, optional: false, required: false
  public get phoneCallEnabled() {
    return this.getBooleanAttribute('phone_call_enabled');
  }

  // push_enabled - computed: true, optional: false, required: false
  public get pushEnabled() {
    return this.getBooleanAttribute('push_enabled');
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // security_questions_enabled - computed: true, optional: false, required: false
  public get securityQuestionsEnabled() {
    return this.getBooleanAttribute('security_questions_enabled');
  }

  // sms_enabled - computed: true, optional: false, required: false
  public get smsEnabled() {
    return this.getBooleanAttribute('sms_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsAuthenticationFactorSettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // third_party_factor - computed: true, optional: false, required: false
  private _thirdPartyFactor = new DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList(this, "third_party_factor", false);
  public get thirdPartyFactor() {
    return this._thirdPartyFactor;
  }

  // totp_enabled - computed: true, optional: false, required: false
  public get totpEnabled() {
    return this.getBooleanAttribute('totp_enabled');
  }

  // totp_settings - computed: true, optional: false, required: false
  private _totpSettings = new DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList(this, "totp_settings", false);
  public get totpSettings() {
    return this._totpSettings;
  }

  // urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList(this, "urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings", false);
  public get urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings() {
    return this._urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;
  }

  // urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = new DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList(this, "urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings", false);
  public get urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings() {
    return this._urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;
  }

  // user_enrollment_disabled_factors - computed: true, optional: false, required: false
  public get userEnrollmentDisabledFactors() {
    return this.getListAttribute('user_enrollment_disabled_factors');
  }

  // yubico_otp_enabled - computed: true, optional: false, required: false
  public get yubicoOtpEnabled() {
    return this.getBooleanAttribute('yubico_otp_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authentication_factor_setting_id: cdktf.stringToTerraform(this._authenticationFactorSettingId),
      authorization: cdktf.stringToTerraform(this._authorization),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_factor_setting_id: {
        value: cdktf.stringToHclTerraform(this._authenticationFactorSettingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
