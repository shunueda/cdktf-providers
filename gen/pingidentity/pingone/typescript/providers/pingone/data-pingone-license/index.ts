// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the license resource’s unique identifier.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license#license_id DataPingoneLicense#license_id}
  */
  readonly licenseId: string;
  /**
  * A string that specifies the organization resource’s unique identifier associated with the license.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license#organization_id DataPingoneLicense#organization_id}
  */
  readonly organizationId: string;
}
export interface DataPingoneLicenseAdvancedServicesPingid {
}

export function dataPingoneLicenseAdvancedServicesPingidToTerraform(struct?: DataPingoneLicenseAdvancedServicesPingid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseAdvancedServicesPingidToHclTerraform(struct?: DataPingoneLicenseAdvancedServicesPingid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseAdvancedServicesPingidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseAdvancedServicesPingid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseAdvancedServicesPingid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // included - computed: true, optional: false, required: false
  public get included() {
    return this.getBooleanAttribute('included');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingoneLicenseAdvancedServices {
}

export function dataPingoneLicenseAdvancedServicesToTerraform(struct?: DataPingoneLicenseAdvancedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseAdvancedServicesToHclTerraform(struct?: DataPingoneLicenseAdvancedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseAdvancedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseAdvancedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseAdvancedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pingid - computed: true, optional: false, required: false
  private _pingid = new DataPingoneLicenseAdvancedServicesPingidOutputReference(this, "pingid");
  public get pingid() {
    return this._pingid;
  }
}
export interface DataPingoneLicenseAuthorize {
}

export function dataPingoneLicenseAuthorizeToTerraform(struct?: DataPingoneLicenseAuthorize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseAuthorizeToHclTerraform(struct?: DataPingoneLicenseAuthorize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseAuthorizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseAuthorize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseAuthorize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_api_access_management - computed: true, optional: false, required: false
  public get allowApiAccessManagement() {
    return this.getBooleanAttribute('allow_api_access_management');
  }

  // allow_dynamic_authorization - computed: true, optional: false, required: false
  public get allowDynamicAuthorization() {
    return this.getBooleanAttribute('allow_dynamic_authorization');
  }
}
export interface DataPingoneLicenseCredentials {
}

export function dataPingoneLicenseCredentialsToTerraform(struct?: DataPingoneLicenseCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseCredentialsToHclTerraform(struct?: DataPingoneLicenseCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_credentials - computed: true, optional: false, required: false
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
}
export interface DataPingoneLicenseEnvironments {
}

export function dataPingoneLicenseEnvironmentsToTerraform(struct?: DataPingoneLicenseEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseEnvironmentsToHclTerraform(struct?: DataPingoneLicenseEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseEnvironmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseEnvironments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_add_resources - computed: true, optional: false, required: false
  public get allowAddResources() {
    return this.getBooleanAttribute('allow_add_resources');
  }

  // allow_connections - computed: true, optional: false, required: false
  public get allowConnections() {
    return this.getBooleanAttribute('allow_connections');
  }

  // allow_custom_domain - computed: true, optional: false, required: false
  public get allowCustomDomain() {
    return this.getBooleanAttribute('allow_custom_domain');
  }

  // allow_custom_schema - computed: true, optional: false, required: false
  public get allowCustomSchema() {
    return this.getBooleanAttribute('allow_custom_schema');
  }

  // allow_production - computed: true, optional: false, required: false
  public get allowProduction() {
    return this.getBooleanAttribute('allow_production');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
}
export interface DataPingoneLicenseFraud {
}

export function dataPingoneLicenseFraudToTerraform(struct?: DataPingoneLicenseFraud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseFraudToHclTerraform(struct?: DataPingoneLicenseFraud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseFraudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseFraud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseFraud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_account_protection - computed: true, optional: false, required: false
  public get allowAccountProtection() {
    return this.getBooleanAttribute('allow_account_protection');
  }

  // allow_bot_malicious_device_detection - computed: true, optional: false, required: false
  public get allowBotMaliciousDeviceDetection() {
    return this.getBooleanAttribute('allow_bot_malicious_device_detection');
  }
}
export interface DataPingoneLicenseGateways {
}

export function dataPingoneLicenseGatewaysToTerraform(struct?: DataPingoneLicenseGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseGatewaysToHclTerraform(struct?: DataPingoneLicenseGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseGatewaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_kerberos_gateway - computed: true, optional: false, required: false
  public get allowKerberosGateway() {
    return this.getBooleanAttribute('allow_kerberos_gateway');
  }

  // allow_ldap_gateway - computed: true, optional: false, required: false
  public get allowLdapGateway() {
    return this.getBooleanAttribute('allow_ldap_gateway');
  }

  // allow_radius_gateway - computed: true, optional: false, required: false
  public get allowRadiusGateway() {
    return this.getBooleanAttribute('allow_radius_gateway');
  }
}
export interface DataPingoneLicenseIntelligence {
}

export function dataPingoneLicenseIntelligenceToTerraform(struct?: DataPingoneLicenseIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseIntelligenceToHclTerraform(struct?: DataPingoneLicenseIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseIntelligence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseIntelligence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_advanced_predictors - computed: true, optional: false, required: false
  public get allowAdvancedPredictors() {
    return this.getBooleanAttribute('allow_advanced_predictors');
  }

  // allow_anonymous_network_detection - computed: true, optional: false, required: false
  public get allowAnonymousNetworkDetection() {
    return this.getBooleanAttribute('allow_anonymous_network_detection');
  }

  // allow_data_consent - computed: true, optional: false, required: false
  public get allowDataConsent() {
    return this.getBooleanAttribute('allow_data_consent');
  }

  // allow_geo_velocity - computed: true, optional: false, required: false
  public get allowGeoVelocity() {
    return this.getBooleanAttribute('allow_geo_velocity');
  }

  // allow_reputation - computed: true, optional: false, required: false
  public get allowReputation() {
    return this.getBooleanAttribute('allow_reputation');
  }

  // allow_risk - computed: true, optional: false, required: false
  public get allowRisk() {
    return this.getBooleanAttribute('allow_risk');
  }
}
export interface DataPingoneLicenseMfa {
}

export function dataPingoneLicenseMfaToTerraform(struct?: DataPingoneLicenseMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseMfaToHclTerraform(struct?: DataPingoneLicenseMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_email_otp - computed: true, optional: false, required: false
  public get allowEmailOtp() {
    return this.getBooleanAttribute('allow_email_otp');
  }

  // allow_fido2_devices - computed: true, optional: false, required: false
  public get allowFido2Devices() {
    return this.getBooleanAttribute('allow_fido2_devices');
  }

  // allow_notification_outside_whitelist - computed: true, optional: false, required: false
  public get allowNotificationOutsideWhitelist() {
    return this.getBooleanAttribute('allow_notification_outside_whitelist');
  }

  // allow_push_notification - computed: true, optional: false, required: false
  public get allowPushNotification() {
    return this.getBooleanAttribute('allow_push_notification');
  }

  // allow_sms_otp - computed: true, optional: false, required: false
  public get allowSmsOtp() {
    return this.getBooleanAttribute('allow_sms_otp');
  }

  // allow_totp - computed: true, optional: false, required: false
  public get allowTotp() {
    return this.getBooleanAttribute('allow_totp');
  }

  // allow_voice_otp - computed: true, optional: false, required: false
  public get allowVoiceOtp() {
    return this.getBooleanAttribute('allow_voice_otp');
  }
}
export interface DataPingoneLicenseOrchestrate {
}

export function dataPingoneLicenseOrchestrateToTerraform(struct?: DataPingoneLicenseOrchestrate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseOrchestrateToHclTerraform(struct?: DataPingoneLicenseOrchestrate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseOrchestrateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseOrchestrate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseOrchestrate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_orchestration - computed: true, optional: false, required: false
  public get allowOrchestration() {
    return this.getBooleanAttribute('allow_orchestration');
  }
}
export interface DataPingoneLicenseUsers {
}

export function dataPingoneLicenseUsersToTerraform(struct?: DataPingoneLicenseUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseUsersToHclTerraform(struct?: DataPingoneLicenseUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_identity_providers - computed: true, optional: false, required: false
  public get allowIdentityProviders() {
    return this.getBooleanAttribute('allow_identity_providers');
  }

  // allow_inbound_provisioning - computed: true, optional: false, required: false
  public get allowInboundProvisioning() {
    return this.getBooleanAttribute('allow_inbound_provisioning');
  }

  // allow_my_account - computed: true, optional: false, required: false
  public get allowMyAccount() {
    return this.getBooleanAttribute('allow_my_account');
  }

  // allow_password_management_notifications - computed: true, optional: false, required: false
  public get allowPasswordManagementNotifications() {
    return this.getBooleanAttribute('allow_password_management_notifications');
  }

  // allow_password_only_authentication - computed: true, optional: false, required: false
  public get allowPasswordOnlyAuthentication() {
    return this.getBooleanAttribute('allow_password_only_authentication');
  }

  // allow_password_policy - computed: true, optional: false, required: false
  public get allowPasswordPolicy() {
    return this.getBooleanAttribute('allow_password_policy');
  }

  // allow_provisioning - computed: true, optional: false, required: false
  public get allowProvisioning() {
    return this.getBooleanAttribute('allow_provisioning');
  }

  // allow_role_assignment - computed: true, optional: false, required: false
  public get allowRoleAssignment() {
    return this.getBooleanAttribute('allow_role_assignment');
  }

  // allow_update_self - computed: true, optional: false, required: false
  public get allowUpdateSelf() {
    return this.getBooleanAttribute('allow_update_self');
  }

  // allow_verification_flow - computed: true, optional: false, required: false
  public get allowVerificationFlow() {
    return this.getBooleanAttribute('allow_verification_flow');
  }

  // annual_active_included - computed: true, optional: false, required: false
  public get annualActiveIncluded() {
    return this.getNumberAttribute('annual_active_included');
  }

  // entitled_to_support - computed: true, optional: false, required: false
  public get entitledToSupport() {
    return this.getBooleanAttribute('entitled_to_support');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // max_hard_limit - computed: true, optional: false, required: false
  public get maxHardLimit() {
    return this.getNumberAttribute('max_hard_limit');
  }

  // monthly_active_included - computed: true, optional: false, required: false
  public get monthlyActiveIncluded() {
    return this.getNumberAttribute('monthly_active_included');
  }
}
export interface DataPingoneLicenseVerify {
}

export function dataPingoneLicenseVerifyToTerraform(struct?: DataPingoneLicenseVerify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneLicenseVerifyToHclTerraform(struct?: DataPingoneLicenseVerify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneLicenseVerifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneLicenseVerify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneLicenseVerify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_document_match - computed: true, optional: false, required: false
  public get allowDocumentMatch() {
    return this.getBooleanAttribute('allow_document_match');
  }

  // allow_face_match - computed: true, optional: false, required: false
  public get allowFaceMatch() {
    return this.getBooleanAttribute('allow_face_match');
  }

  // allow_manual_id_inspection - computed: true, optional: false, required: false
  public get allowManualIdInspection() {
    return this.getBooleanAttribute('allow_manual_id_inspection');
  }

  // allow_push_notifications - computed: true, optional: false, required: false
  public get allowPushNotifications() {
    return this.getBooleanAttribute('allow_push_notifications');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license pingone_license}
*/
export class DataPingoneLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneLicense to import
  * @param importFromId The id of the existing DataPingoneLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/license pingone_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_license',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenseId = config.licenseId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_services - computed: true, optional: false, required: false
  private _advancedServices = new DataPingoneLicenseAdvancedServicesOutputReference(this, "advanced_services");
  public get advancedServices() {
    return this._advancedServices;
  }

  // assigned_environments_count - computed: true, optional: false, required: false
  public get assignedEnvironmentsCount() {
    return this.getNumberAttribute('assigned_environments_count');
  }

  // authorize - computed: true, optional: false, required: false
  private _authorize = new DataPingoneLicenseAuthorizeOutputReference(this, "authorize");
  public get authorize() {
    return this._authorize;
  }

  // begins_at - computed: true, optional: false, required: false
  public get beginsAt() {
    return this.getStringAttribute('begins_at');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataPingoneLicenseCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // environments - computed: true, optional: false, required: false
  private _environments = new DataPingoneLicenseEnvironmentsOutputReference(this, "environments");
  public get environments() {
    return this._environments;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // fraud - computed: true, optional: false, required: false
  private _fraud = new DataPingoneLicenseFraudOutputReference(this, "fraud");
  public get fraud() {
    return this._fraud;
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataPingoneLicenseGatewaysOutputReference(this, "gateways");
  public get gateways() {
    return this._gateways;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intelligence - computed: true, optional: false, required: false
  private _intelligence = new DataPingoneLicenseIntelligenceOutputReference(this, "intelligence");
  public get intelligence() {
    return this._intelligence;
  }

  // license_id - computed: false, optional: false, required: true
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // mfa - computed: true, optional: false, required: false
  private _mfa = new DataPingoneLicenseMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orchestrate - computed: true, optional: false, required: false
  private _orchestrate = new DataPingoneLicenseOrchestrateOutputReference(this, "orchestrate");
  public get orchestrate() {
    return this._orchestrate;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // package - computed: true, optional: false, required: false
  public get package() {
    return this.getStringAttribute('package');
  }

  // replaced_by_license_id - computed: true, optional: false, required: false
  public get replacedByLicenseId() {
    return this.getStringAttribute('replaced_by_license_id');
  }

  // replaces_license_id - computed: true, optional: false, required: false
  public get replacesLicenseId() {
    return this.getStringAttribute('replaces_license_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // terminates_at - computed: true, optional: false, required: false
  public get terminatesAt() {
    return this.getStringAttribute('terminates_at');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataPingoneLicenseUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }

  // verify - computed: true, optional: false, required: false
  private _verify = new DataPingoneLicenseVerifyOutputReference(this, "verify");
  public get verify() {
    return this._verify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_id: cdktf.stringToTerraform(this._licenseId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      license_id: {
        value: cdktf.stringToHclTerraform(this._licenseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
