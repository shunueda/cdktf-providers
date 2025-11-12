// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaDlpCloudToCloudIrConfig extends cdktf.TerraformMetaArguments {
  /**
  * System-generated unique ID of the Cloud-to-Cloud DLP Incident Forwarding tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir#id DataZiaDlpCloudToCloudIr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * User-provided name for the SaaS application tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir#name DataZiaDlpCloudToCloudIr#name}
  */
  readonly name?: string;
}
export interface DataZiaDlpCloudToCloudIrLastModifiedBy {
}

export function dataZiaDlpCloudToCloudIrLastModifiedByToTerraform(struct?: DataZiaDlpCloudToCloudIrLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrLastModifiedByToHclTerraform(struct?: DataZiaDlpCloudToCloudIrLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaDlpCloudToCloudIrLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrLastModifiedByOutputReference {
    return new DataZiaDlpCloudToCloudIrLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrLastValidationMsg {
}

export function dataZiaDlpCloudToCloudIrLastValidationMsgToTerraform(struct?: DataZiaDlpCloudToCloudIrLastValidationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrLastValidationMsgToHclTerraform(struct?: DataZiaDlpCloudToCloudIrLastValidationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrLastValidationMsgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrLastValidationMsg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrLastValidationMsg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }
}

export class DataZiaDlpCloudToCloudIrLastValidationMsgList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrLastValidationMsgOutputReference {
    return new DataZiaDlpCloudToCloudIrLastValidationMsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsg {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfo {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_id - computed: true, optional: false, required: false
  public get adminId() {
    return this.getStringAttribute('admin_id');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getNumberAttribute('mod_time');
  }

  // qtn_folder_path - computed: true, optional: false, required: false
  public get qtnFolderPath() {
    return this.getStringAttribute('qtn_folder_path');
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfig {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // data_bucket_name - computed: true, optional: false, required: false
  public get dataBucketName() {
    return this.getStringAttribute('data_bucket_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // metadata_bucket_name - computed: true, optional: false, required: false
  public get metadataBucketName() {
    return this.getStringAttribute('metadata_bucket_name');
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfo {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // apicp - computed: true, optional: false, required: false
  public get apicp() {
    return this.getStringAttribute('apicp');
  }

  // bot_id - computed: true, optional: false, required: false
  public get botId() {
    return this.getStringAttribute('bot_id');
  }

  // bot_token - computed: true, optional: false, required: false
  public get botToken() {
    return this.getStringAttribute('bot_token');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // cloud_trail_bucket_name - computed: true, optional: false, required: false
  public get cloudTrailBucketName() {
    return this.getStringAttribute('cloud_trail_bucket_name');
  }

  // cred_json - computed: true, optional: false, required: false
  public get credJson() {
    return this.getStringAttribute('cred_json');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // dlp_qtn_lib_name - computed: true, optional: false, required: false
  public get dlpQtnLibName() {
    return this.getStringAttribute('dlp_qtn_lib_name');
  }

  // enterprise_id - computed: true, optional: false, required: false
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getStringAttribute('env');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // features_supported - computed: true, optional: false, required: false
  public get featuresSupported() {
    return this.getListAttribute('features_supported');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // mal_qtn_lib_name - computed: true, optional: false, required: false
  public get malQtnLibName() {
    return this.getStringAttribute('mal_qtn_lib_name');
  }

  // org_api_key - computed: true, optional: false, required: false
  public get orgApiKey() {
    return this.getStringAttribute('org_api_key');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // qtn_channel_url - computed: true, optional: false, required: false
  public get qtnChannelUrl() {
    return this.getStringAttribute('qtn_channel_url');
  }

  // qtn_info - computed: true, optional: false, required: false
  private _qtnInfo = new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoQtnInfoList(this, "qtn_info", false);
  public get qtnInfo() {
    return this._qtnInfo;
  }

  // qtn_info_cleared - computed: true, optional: false, required: false
  public get qtnInfoCleared() {
    return this.getBooleanAttribute('qtn_info_cleared');
  }

  // quarantine_bucket_name - computed: true, optional: false, required: false
  public get quarantineBucketName() {
    return this.getStringAttribute('quarantine_bucket_name');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // rest_api_endpoint - computed: true, optional: false, required: false
  public get restApiEndpoint() {
    return this.getStringAttribute('rest_api_endpoint');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_token - computed: true, optional: false, required: false
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }

  // smir_bucket_config - computed: true, optional: false, required: false
  private _smirBucketConfig = new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoSmirBucketConfigList(this, "smir_bucket_config", false);
  public get smirBucketConfig() {
    return this._smirBucketConfig;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // temp_auth_code - computed: true, optional: false, required: false
  public get tempAuthCode() {
    return this.getStringAttribute('temp_auth_code');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_pwd - computed: true, optional: false, required: false
  public get userPwd() {
    return this.getStringAttribute('user_pwd');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_name - computed: true, optional: false, required: false
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantId {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpCloudToCloudIrOnboardableEntity {
}

export function dataZiaDlpCloudToCloudIrOnboardableEntityToTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpCloudToCloudIrOnboardableEntityToHclTerraform(struct?: DataZiaDlpCloudToCloudIrOnboardableEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpCloudToCloudIrOnboardableEntity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpCloudToCloudIrOnboardableEntity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // enterprise_tenant_id - computed: true, optional: false, required: false
  public get enterpriseTenantId() {
    return this.getStringAttribute('enterprise_tenant_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_validation_msg - computed: true, optional: false, required: false
  private _lastValidationMsg = new DataZiaDlpCloudToCloudIrOnboardableEntityLastValidationMsgList(this, "last_validation_msg", false);
  public get lastValidationMsg() {
    return this._lastValidationMsg;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tenant_authorization_info - computed: true, optional: false, required: false
  private _tenantAuthorizationInfo = new DataZiaDlpCloudToCloudIrOnboardableEntityTenantAuthorizationInfoList(this, "tenant_authorization_info", false);
  public get tenantAuthorizationInfo() {
    return this._tenantAuthorizationInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zscaler_app_tenant_id - computed: true, optional: false, required: false
  private _zscalerAppTenantId = new DataZiaDlpCloudToCloudIrOnboardableEntityZscalerAppTenantIdList(this, "zscaler_app_tenant_id", false);
  public get zscalerAppTenantId() {
    return this._zscalerAppTenantId;
  }
}

export class DataZiaDlpCloudToCloudIrOnboardableEntityList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpCloudToCloudIrOnboardableEntityOutputReference {
    return new DataZiaDlpCloudToCloudIrOnboardableEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir zia_dlp_cloud_to_cloud_ir}
*/
export class DataZiaDlpCloudToCloudIr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_cloud_to_cloud_ir";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaDlpCloudToCloudIr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaDlpCloudToCloudIr to import
  * @param importFromId The id of the existing DataZiaDlpCloudToCloudIr that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaDlpCloudToCloudIr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_cloud_to_cloud_ir", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/dlp_cloud_to_cloud_ir zia_dlp_cloud_to_cloud_ir} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaDlpCloudToCloudIrConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaDlpCloudToCloudIrConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_cloud_to_cloud_ir',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified_by - computed: true, optional: false, required: false
  private _lastModifiedBy = new DataZiaDlpCloudToCloudIrLastModifiedByList(this, "last_modified_by", false);
  public get lastModifiedBy() {
    return this._lastModifiedBy;
  }

  // last_tenant_validation_time - computed: true, optional: false, required: false
  public get lastTenantValidationTime() {
    return this.getNumberAttribute('last_tenant_validation_time');
  }

  // last_validation_msg - computed: true, optional: false, required: false
  private _lastValidationMsg = new DataZiaDlpCloudToCloudIrLastValidationMsgList(this, "last_validation_msg", false);
  public get lastValidationMsg() {
    return this._lastValidationMsg;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: true, required: false
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

  // onboardable_entity - computed: true, optional: false, required: false
  private _onboardableEntity = new DataZiaDlpCloudToCloudIrOnboardableEntityList(this, "onboardable_entity", false);
  public get onboardableEntity() {
    return this._onboardableEntity;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getListAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
