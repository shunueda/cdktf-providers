// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateServerSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateServerSettingsContactInfo {
}

export function dataPingfederateServerSettingsContactInfoToTerraform(struct?: DataPingfederateServerSettingsContactInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsContactInfoToHclTerraform(struct?: DataPingfederateServerSettingsContactInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsContactInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsContactInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsContactInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }
}
export interface DataPingfederateServerSettingsFederationInfo {
}

export function dataPingfederateServerSettingsFederationInfoToTerraform(struct?: DataPingfederateServerSettingsFederationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsFederationInfoToHclTerraform(struct?: DataPingfederateServerSettingsFederationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsFederationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsFederationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsFederationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // saml_1x_issuer_id - computed: true, optional: false, required: false
  public get saml1XIssuerId() {
    return this.getStringAttribute('saml_1x_issuer_id');
  }

  // saml_1x_source_id - computed: true, optional: false, required: false
  public get saml1XSourceId() {
    return this.getStringAttribute('saml_1x_source_id');
  }

  // saml_2_entity_id - computed: true, optional: false, required: false
  public get saml2EntityId() {
    return this.getStringAttribute('saml_2_entity_id');
  }

  // wsfed_realm - computed: true, optional: false, required: false
  public get wsfedRealm() {
    return this.getStringAttribute('wsfed_realm');
  }
}
export interface DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettings {
}

export function dataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsToTerraform(struct?: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // notification_mode - computed: true, optional: false, required: false
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }

  // thread_dump_enabled - computed: true, optional: false, required: false
  public get threadDumpEnabled() {
    return this.getBooleanAttribute('thread_dump_enabled');
  }
}
export interface DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsCertificateExpirations {
}

export function dataPingfederateServerSettingsNotificationsCertificateExpirationsToTerraform(struct?: DataPingfederateServerSettingsNotificationsCertificateExpirations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsCertificateExpirationsToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsCertificateExpirations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsCertificateExpirationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsCertificateExpirations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsCertificateExpirations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // final_warning_period - computed: true, optional: false, required: false
  public get finalWarningPeriod() {
    return this.getNumberAttribute('final_warning_period');
  }

  // initial_warning_period - computed: true, optional: false, required: false
  public get initialWarningPeriod() {
    return this.getNumberAttribute('initial_warning_period');
  }

  // notification_mode - computed: true, optional: false, required: false
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateServerSettingsNotificationsCertificateExpirationsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
}
export interface DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsLicenseEvents {
}

export function dataPingfederateServerSettingsNotificationsLicenseEventsToTerraform(struct?: DataPingfederateServerSettingsNotificationsLicenseEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsLicenseEventsToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsLicenseEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsLicenseEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsLicenseEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsLicenseEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateServerSettingsNotificationsLicenseEventsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
}
export interface DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsMetadataNotificationSettings {
}

export function dataPingfederateServerSettingsNotificationsMetadataNotificationSettingsToTerraform(struct?: DataPingfederateServerSettingsNotificationsMetadataNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsMetadataNotificationSettingsToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsMetadataNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsMetadataNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsMetadataNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
}
export interface DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef {
}

export function dataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToTerraform(struct?: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettings {
}

export function dataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsToTerraform(struct?: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsToHclTerraform(struct?: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // notification_mode - computed: true, optional: false, required: false
  public get notificationMode() {
    return this.getStringAttribute('notification_mode');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }

  // thread_dump_enabled - computed: true, optional: false, required: false
  public get threadDumpEnabled() {
    return this.getBooleanAttribute('thread_dump_enabled');
  }
}
export interface DataPingfederateServerSettingsNotifications {
  /**
  * Indicates the number of days prior to certificate expiry date, the administrative console warning starts. The default value is 14 days. Supported in PF 12.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings#expired_certificate_administrative_console_warning_days DataPingfederateServerSettings#expired_certificate_administrative_console_warning_days}
  */
  readonly expiredCertificateAdministrativeConsoleWarningDays?: number;
}

export function dataPingfederateServerSettingsNotificationsToTerraform(struct?: DataPingfederateServerSettingsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expired_certificate_administrative_console_warning_days: cdktf.numberToTerraform(struct!.expiredCertificateAdministrativeConsoleWarningDays),
  }
}


export function dataPingfederateServerSettingsNotificationsToHclTerraform(struct?: DataPingfederateServerSettingsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expired_certificate_administrative_console_warning_days: {
      value: cdktf.numberToHclTerraform(struct!.expiredCertificateAdministrativeConsoleWarningDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateServerSettingsNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiredCertificateAdministrativeConsoleWarningDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredCertificateAdministrativeConsoleWarningDays = this._expiredCertificateAdministrativeConsoleWarningDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiredCertificateAdministrativeConsoleWarningDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiredCertificateAdministrativeConsoleWarningDays = value.expiredCertificateAdministrativeConsoleWarningDays;
    }
  }

  // account_changes_notification_publisher_ref - computed: true, optional: false, required: false
  private _accountChangesNotificationPublisherRef = new DataPingfederateServerSettingsNotificationsAccountChangesNotificationPublisherRefOutputReference(this, "account_changes_notification_publisher_ref");
  public get accountChangesNotificationPublisherRef() {
    return this._accountChangesNotificationPublisherRef;
  }

  // bulkhead_alert_notification_settings - computed: true, optional: false, required: false
  private _bulkheadAlertNotificationSettings = new DataPingfederateServerSettingsNotificationsBulkheadAlertNotificationSettingsOutputReference(this, "bulkhead_alert_notification_settings");
  public get bulkheadAlertNotificationSettings() {
    return this._bulkheadAlertNotificationSettings;
  }

  // certificate_expirations - computed: true, optional: false, required: false
  private _certificateExpirations = new DataPingfederateServerSettingsNotificationsCertificateExpirationsOutputReference(this, "certificate_expirations");
  public get certificateExpirations() {
    return this._certificateExpirations;
  }

  // expired_certificate_administrative_console_warning_days - computed: true, optional: true, required: false
  private _expiredCertificateAdministrativeConsoleWarningDays?: number; 
  public get expiredCertificateAdministrativeConsoleWarningDays() {
    return this.getNumberAttribute('expired_certificate_administrative_console_warning_days');
  }
  public set expiredCertificateAdministrativeConsoleWarningDays(value: number) {
    this._expiredCertificateAdministrativeConsoleWarningDays = value;
  }
  public resetExpiredCertificateAdministrativeConsoleWarningDays() {
    this._expiredCertificateAdministrativeConsoleWarningDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredCertificateAdministrativeConsoleWarningDaysInput() {
    return this._expiredCertificateAdministrativeConsoleWarningDays;
  }

  // expiring_certificate_administrative_console_warning_days - computed: true, optional: false, required: false
  public get expiringCertificateAdministrativeConsoleWarningDays() {
    return this.getNumberAttribute('expiring_certificate_administrative_console_warning_days');
  }

  // license_events - computed: true, optional: false, required: false
  private _licenseEvents = new DataPingfederateServerSettingsNotificationsLicenseEventsOutputReference(this, "license_events");
  public get licenseEvents() {
    return this._licenseEvents;
  }

  // metadata_notification_settings - computed: true, optional: false, required: false
  private _metadataNotificationSettings = new DataPingfederateServerSettingsNotificationsMetadataNotificationSettingsOutputReference(this, "metadata_notification_settings");
  public get metadataNotificationSettings() {
    return this._metadataNotificationSettings;
  }

  // notify_admin_user_password_changes - computed: true, optional: false, required: false
  public get notifyAdminUserPasswordChanges() {
    return this.getBooleanAttribute('notify_admin_user_password_changes');
  }

  // thread_pool_exhaustion_notification_settings - computed: true, optional: false, required: false
  private _threadPoolExhaustionNotificationSettings = new DataPingfederateServerSettingsNotificationsThreadPoolExhaustionNotificationSettingsOutputReference(this, "thread_pool_exhaustion_notification_settings");
  public get threadPoolExhaustionNotificationSettings() {
    return this._threadPoolExhaustionNotificationSettings;
  }
}
export interface DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20Profile {
}

export function dataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20Profile | undefined) {
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
}
export interface DataPingfederateServerSettingsRolesAndProtocolsIdpRole {
}

export function dataPingfederateServerSettingsRolesAndProtocolsIdpRoleToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsIdpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsIdpRoleToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsIdpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsIdpRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocolsIdpRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocolsIdpRole | undefined) {
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

  // enable_outbound_provisioning - computed: true, optional: false, required: false
  public get enableOutboundProvisioning() {
    return this.getBooleanAttribute('enable_outbound_provisioning');
  }

  // enable_saml_1_0 - computed: true, optional: false, required: false
  public get enableSaml10() {
    return this.getBooleanAttribute('enable_saml_1_0');
  }

  // enable_saml_1_1 - computed: true, optional: false, required: false
  public get enableSaml11() {
    return this.getBooleanAttribute('enable_saml_1_1');
  }

  // enable_ws_fed - computed: true, optional: false, required: false
  public get enableWsFed() {
    return this.getBooleanAttribute('enable_ws_fed');
  }

  // enable_ws_trust - computed: true, optional: false, required: false
  public get enableWsTrust() {
    return this.getBooleanAttribute('enable_ws_trust');
  }

  // saml_2_0_profile - computed: true, optional: false, required: false
  private _saml20Profile = new DataPingfederateServerSettingsRolesAndProtocolsIdpRoleSaml20ProfileOutputReference(this, "saml_2_0_profile");
  public get saml20Profile() {
    return this._saml20Profile;
  }
}
export interface DataPingfederateServerSettingsRolesAndProtocolsOauthRole {
}

export function dataPingfederateServerSettingsRolesAndProtocolsOauthRoleToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsOauthRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsOauthRoleToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsOauthRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsOauthRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocolsOauthRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocolsOauthRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_oauth - computed: true, optional: false, required: false
  public get enableOauth() {
    return this.getBooleanAttribute('enable_oauth');
  }

  // enable_open_id_connect - computed: true, optional: false, required: false
  public get enableOpenIdConnect() {
    return this.getBooleanAttribute('enable_open_id_connect');
  }
}
export interface DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20Profile {
}

export function dataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20ProfileToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20ProfileToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20Profile | undefined) {
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

  // enable_xasp - computed: true, optional: false, required: false
  public get enableXasp() {
    return this.getBooleanAttribute('enable_xasp');
  }
}
export interface DataPingfederateServerSettingsRolesAndProtocolsSpRole {
}

export function dataPingfederateServerSettingsRolesAndProtocolsSpRoleToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsSpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsSpRoleToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocolsSpRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsSpRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocolsSpRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocolsSpRole | undefined) {
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

  // enable_inbound_provisioning - computed: true, optional: false, required: false
  public get enableInboundProvisioning() {
    return this.getBooleanAttribute('enable_inbound_provisioning');
  }

  // enable_open_id_connect - computed: true, optional: false, required: false
  public get enableOpenIdConnect() {
    return this.getBooleanAttribute('enable_open_id_connect');
  }

  // enable_saml_1_0 - computed: true, optional: false, required: false
  public get enableSaml10() {
    return this.getBooleanAttribute('enable_saml_1_0');
  }

  // enable_saml_1_1 - computed: true, optional: false, required: false
  public get enableSaml11() {
    return this.getBooleanAttribute('enable_saml_1_1');
  }

  // enable_ws_fed - computed: true, optional: false, required: false
  public get enableWsFed() {
    return this.getBooleanAttribute('enable_ws_fed');
  }

  // enable_ws_trust - computed: true, optional: false, required: false
  public get enableWsTrust() {
    return this.getBooleanAttribute('enable_ws_trust');
  }

  // saml_2_0_profile - computed: true, optional: false, required: false
  private _saml20Profile = new DataPingfederateServerSettingsRolesAndProtocolsSpRoleSaml20ProfileOutputReference(this, "saml_2_0_profile");
  public get saml20Profile() {
    return this._saml20Profile;
  }
}
export interface DataPingfederateServerSettingsRolesAndProtocols {
}

export function dataPingfederateServerSettingsRolesAndProtocolsToTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsRolesAndProtocolsToHclTerraform(struct?: DataPingfederateServerSettingsRolesAndProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsRolesAndProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsRolesAndProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsRolesAndProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_idp_discovery - computed: true, optional: false, required: false
  public get enableIdpDiscovery() {
    return this.getBooleanAttribute('enable_idp_discovery');
  }

  // idp_role - computed: true, optional: false, required: false
  private _idpRole = new DataPingfederateServerSettingsRolesAndProtocolsIdpRoleOutputReference(this, "idp_role");
  public get idpRole() {
    return this._idpRole;
  }

  // oauth_role - computed: true, optional: false, required: false
  private _oauthRole = new DataPingfederateServerSettingsRolesAndProtocolsOauthRoleOutputReference(this, "oauth_role");
  public get oauthRole() {
    return this._oauthRole;
  }

  // sp_role - computed: true, optional: false, required: false
  private _spRole = new DataPingfederateServerSettingsRolesAndProtocolsSpRoleOutputReference(this, "sp_role");
  public get spRole() {
    return this._spRole;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings pingfederate_server_settings}
*/
export class DataPingfederateServerSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateServerSettings to import
  * @param importFromId The id of the existing DataPingfederateServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings pingfederate_server_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateServerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateServerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_info - computed: true, optional: false, required: false
  private _contactInfo = new DataPingfederateServerSettingsContactInfoOutputReference(this, "contact_info");
  public get contactInfo() {
    return this._contactInfo;
  }

  // federation_info - computed: true, optional: false, required: false
  private _federationInfo = new DataPingfederateServerSettingsFederationInfoOutputReference(this, "federation_info");
  public get federationInfo() {
    return this._federationInfo;
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataPingfederateServerSettingsNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }

  // roles_and_protocols - computed: true, optional: false, required: false
  private _rolesAndProtocols = new DataPingfederateServerSettingsRolesAndProtocolsOutputReference(this, "roles_and_protocols");
  public get rolesAndProtocols() {
    return this._rolesAndProtocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
