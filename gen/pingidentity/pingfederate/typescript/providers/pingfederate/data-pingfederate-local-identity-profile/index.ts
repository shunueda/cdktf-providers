// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/local_identity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateLocalIdentityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID for the local identity profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/local_identity_profile#profile_id DataPingfederateLocalIdentityProfile#profile_id}
  */
  readonly profileId: string;
}
export interface DataPingfederateLocalIdentityProfileApcId {
}

export function dataPingfederateLocalIdentityProfileApcIdToTerraform(struct?: DataPingfederateLocalIdentityProfileApcId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileApcIdToHclTerraform(struct?: DataPingfederateLocalIdentityProfileApcId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileApcIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileApcId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileApcId | undefined) {
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
export interface DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicy {
}

export function dataPingfederateLocalIdentityProfileAuthSourceUpdatePolicyToTerraform(struct?: DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileAuthSourceUpdatePolicyToHclTerraform(struct?: DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_attributes - computed: true, optional: false, required: false
  public get retainAttributes() {
    return this.getBooleanAttribute('retain_attributes');
  }

  // store_attributes - computed: true, optional: false, required: false
  public get storeAttributes() {
    return this.getBooleanAttribute('store_attributes');
  }

  // update_attributes - computed: true, optional: false, required: false
  public get updateAttributes() {
    return this.getBooleanAttribute('update_attributes');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
}
export interface DataPingfederateLocalIdentityProfileAuthSources {
}

export function dataPingfederateLocalIdentityProfileAuthSourcesToTerraform(struct?: DataPingfederateLocalIdentityProfileAuthSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileAuthSourcesToHclTerraform(struct?: DataPingfederateLocalIdentityProfileAuthSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileAuthSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateLocalIdentityProfileAuthSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileAuthSources | undefined) {
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

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataPingfederateLocalIdentityProfileAuthSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateLocalIdentityProfileAuthSourcesOutputReference {
    return new DataPingfederateLocalIdentityProfileAuthSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMapping {
}

export function dataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingToTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingToHclTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference {
    return new DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRef {
}

export function dataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRefToTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRefToHclTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRef | undefined) {
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
export interface DataPingfederateLocalIdentityProfileDataStoreConfig {
}

export function dataPingfederateLocalIdentityProfileDataStoreConfigToTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileDataStoreConfigToHclTerraform(struct?: DataPingfederateLocalIdentityProfileDataStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileDataStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileDataStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileDataStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auxiliary_object_classes - computed: true, optional: false, required: false
  public get auxiliaryObjectClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_object_classes'));
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // create_pattern - computed: true, optional: false, required: false
  public get createPattern() {
    return this.getStringAttribute('create_pattern');
  }

  // data_store_mapping - computed: true, optional: false, required: false
  private _dataStoreMapping = new DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreMappingMap(this, "data_store_mapping");
  public get dataStoreMapping() {
    return this._dataStoreMapping;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateLocalIdentityProfileDataStoreConfigDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // object_class - computed: true, optional: false, required: false
  public get objectClass() {
    return this.getStringAttribute('object_class');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRef {
}

export function dataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRefToTerraform(struct?: DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRefToHclTerraform(struct?: DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | undefined) {
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
export interface DataPingfederateLocalIdentityProfileEmailVerificationConfig {
}

export function dataPingfederateLocalIdentityProfileEmailVerificationConfigToTerraform(struct?: DataPingfederateLocalIdentityProfileEmailVerificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileEmailVerificationConfigToHclTerraform(struct?: DataPingfederateLocalIdentityProfileEmailVerificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileEmailVerificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileEmailVerificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileEmailVerificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_otp_character_set - computed: true, optional: false, required: false
  public get allowedOtpCharacterSet() {
    return this.getStringAttribute('allowed_otp_character_set');
  }

  // email_verification_enabled - computed: true, optional: false, required: false
  public get emailVerificationEnabled() {
    return this.getBooleanAttribute('email_verification_enabled');
  }

  // email_verification_error_template_name - computed: true, optional: false, required: false
  public get emailVerificationErrorTemplateName() {
    return this.getStringAttribute('email_verification_error_template_name');
  }

  // email_verification_otp_template_name - computed: true, optional: false, required: false
  public get emailVerificationOtpTemplateName() {
    return this.getStringAttribute('email_verification_otp_template_name');
  }

  // email_verification_sent_template_name - computed: true, optional: false, required: false
  public get emailVerificationSentTemplateName() {
    return this.getStringAttribute('email_verification_sent_template_name');
  }

  // email_verification_success_template_name - computed: true, optional: false, required: false
  public get emailVerificationSuccessTemplateName() {
    return this.getStringAttribute('email_verification_success_template_name');
  }

  // email_verification_type - computed: true, optional: false, required: false
  public get emailVerificationType() {
    return this.getStringAttribute('email_verification_type');
  }

  // field_for_email_to_verify - computed: true, optional: false, required: false
  public get fieldForEmailToVerify() {
    return this.getStringAttribute('field_for_email_to_verify');
  }

  // field_storing_verification_status - computed: true, optional: false, required: false
  public get fieldStoringVerificationStatus() {
    return this.getStringAttribute('field_storing_verification_status');
  }

  // notification_publisher_ref - computed: true, optional: false, required: false
  private _notificationPublisherRef = new DataPingfederateLocalIdentityProfileEmailVerificationConfigNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }

  // otl_time_to_live - computed: true, optional: false, required: false
  public get otlTimeToLive() {
    return this.getNumberAttribute('otl_time_to_live');
  }

  // otp_length - computed: true, optional: false, required: false
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }

  // otp_retry_attempts - computed: true, optional: false, required: false
  public get otpRetryAttempts() {
    return this.getNumberAttribute('otp_retry_attempts');
  }

  // otp_time_to_live - computed: true, optional: false, required: false
  public get otpTimeToLive() {
    return this.getNumberAttribute('otp_time_to_live');
  }

  // require_verified_email - computed: true, optional: false, required: false
  public get requireVerifiedEmail() {
    return this.getBooleanAttribute('require_verified_email');
  }

  // require_verified_email_template_name - computed: true, optional: false, required: false
  public get requireVerifiedEmailTemplateName() {
    return this.getStringAttribute('require_verified_email_template_name');
  }

  // verify_email_template_name - computed: true, optional: false, required: false
  public get verifyEmailTemplateName() {
    return this.getStringAttribute('verify_email_template_name');
  }
}
export interface DataPingfederateLocalIdentityProfileFieldConfigFields {
}

export function dataPingfederateLocalIdentityProfileFieldConfigFieldsToTerraform(struct?: DataPingfederateLocalIdentityProfileFieldConfigFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileFieldConfigFieldsToHclTerraform(struct?: DataPingfederateLocalIdentityProfileFieldConfigFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileFieldConfigFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateLocalIdentityProfileFieldConfigFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileFieldConfigFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.BooleanMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }

  // profile_page_field - computed: true, optional: false, required: false
  public get profilePageField() {
    return this.getBooleanAttribute('profile_page_field');
  }

  // registration_page_field - computed: true, optional: false, required: false
  public get registrationPageField() {
    return this.getBooleanAttribute('registration_page_field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPingfederateLocalIdentityProfileFieldConfigFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateLocalIdentityProfileFieldConfigFieldsOutputReference {
    return new DataPingfederateLocalIdentityProfileFieldConfigFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateLocalIdentityProfileFieldConfig {
}

export function dataPingfederateLocalIdentityProfileFieldConfigToTerraform(struct?: DataPingfederateLocalIdentityProfileFieldConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileFieldConfigToHclTerraform(struct?: DataPingfederateLocalIdentityProfileFieldConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileFieldConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileFieldConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataPingfederateLocalIdentityProfileFieldConfigFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }

  // strip_space_from_unique_field - computed: true, optional: false, required: false
  public get stripSpaceFromUniqueField() {
    return this.getBooleanAttribute('strip_space_from_unique_field');
  }
}
export interface DataPingfederateLocalIdentityProfileProfileConfig {
}

export function dataPingfederateLocalIdentityProfileProfileConfigToTerraform(struct?: DataPingfederateLocalIdentityProfileProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileProfileConfigToHclTerraform(struct?: DataPingfederateLocalIdentityProfileProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_identity_enabled - computed: true, optional: false, required: false
  public get deleteIdentityEnabled() {
    return this.getBooleanAttribute('delete_identity_enabled');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}
export interface DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRef {
}

export function dataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRefToTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRefToHclTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRef | undefined) {
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
export interface DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflow {
}

export function dataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflowToTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflowToHclTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflow | undefined) {
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
export interface DataPingfederateLocalIdentityProfileRegistrationConfig {
}

export function dataPingfederateLocalIdentityProfileRegistrationConfigToTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateLocalIdentityProfileRegistrationConfigToHclTerraform(struct?: DataPingfederateLocalIdentityProfileRegistrationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateLocalIdentityProfileRegistrationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateLocalIdentityProfileRegistrationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateLocalIdentityProfileRegistrationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // captcha_enabled - computed: true, optional: false, required: false
  public get captchaEnabled() {
    return this.getBooleanAttribute('captcha_enabled');
  }

  // captcha_provider_ref - computed: true, optional: false, required: false
  private _captchaProviderRef = new DataPingfederateLocalIdentityProfileRegistrationConfigCaptchaProviderRefOutputReference(this, "captcha_provider_ref");
  public get captchaProviderRef() {
    return this._captchaProviderRef;
  }

  // create_authn_session_after_registration - computed: true, optional: false, required: false
  public get createAuthnSessionAfterRegistration() {
    return this.getBooleanAttribute('create_authn_session_after_registration');
  }

  // execute_workflow - computed: true, optional: false, required: false
  public get executeWorkflow() {
    return this.getStringAttribute('execute_workflow');
  }

  // registration_workflow - computed: true, optional: false, required: false
  private _registrationWorkflow = new DataPingfederateLocalIdentityProfileRegistrationConfigRegistrationWorkflowOutputReference(this, "registration_workflow");
  public get registrationWorkflow() {
    return this._registrationWorkflow;
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // this_is_my_device_enabled - computed: true, optional: false, required: false
  public get thisIsMyDeviceEnabled() {
    return this.getBooleanAttribute('this_is_my_device_enabled');
  }

  // username_field - computed: true, optional: false, required: false
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/local_identity_profile pingfederate_local_identity_profile}
*/
export class DataPingfederateLocalIdentityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_local_identity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateLocalIdentityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateLocalIdentityProfile to import
  * @param importFromId The id of the existing DataPingfederateLocalIdentityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/local_identity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateLocalIdentityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_local_identity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/local_identity_profile pingfederate_local_identity_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateLocalIdentityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateLocalIdentityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_local_identity_profile',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._profileId = config.profileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apc_id - computed: true, optional: false, required: false
  private _apcId = new DataPingfederateLocalIdentityProfileApcIdOutputReference(this, "apc_id");
  public get apcId() {
    return this._apcId;
  }

  // auth_source_update_policy - computed: true, optional: false, required: false
  private _authSourceUpdatePolicy = new DataPingfederateLocalIdentityProfileAuthSourceUpdatePolicyOutputReference(this, "auth_source_update_policy");
  public get authSourceUpdatePolicy() {
    return this._authSourceUpdatePolicy;
  }

  // auth_sources - computed: true, optional: false, required: false
  private _authSources = new DataPingfederateLocalIdentityProfileAuthSourcesList(this, "auth_sources", true);
  public get authSources() {
    return this._authSources;
  }

  // data_store_config - computed: true, optional: false, required: false
  private _dataStoreConfig = new DataPingfederateLocalIdentityProfileDataStoreConfigOutputReference(this, "data_store_config");
  public get dataStoreConfig() {
    return this._dataStoreConfig;
  }

  // email_verification_config - computed: true, optional: false, required: false
  private _emailVerificationConfig = new DataPingfederateLocalIdentityProfileEmailVerificationConfigOutputReference(this, "email_verification_config");
  public get emailVerificationConfig() {
    return this._emailVerificationConfig;
  }

  // field_config - computed: true, optional: false, required: false
  private _fieldConfig = new DataPingfederateLocalIdentityProfileFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // profile_config - computed: true, optional: false, required: false
  private _profileConfig = new DataPingfederateLocalIdentityProfileProfileConfigOutputReference(this, "profile_config");
  public get profileConfig() {
    return this._profileConfig;
  }

  // profile_enabled - computed: true, optional: false, required: false
  public get profileEnabled() {
    return this.getBooleanAttribute('profile_enabled');
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // registration_config - computed: true, optional: false, required: false
  private _registrationConfig = new DataPingfederateLocalIdentityProfileRegistrationConfigOutputReference(this, "registration_config");
  public get registrationConfig() {
    return this._registrationConfig;
  }

  // registration_enabled - computed: true, optional: false, required: false
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      profile_id: cdktf.stringToTerraform(this._profileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
