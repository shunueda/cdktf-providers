// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSftpgoGroupsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_tier - computed: true, optional: false, required: false
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // account_key - computed: true, optional: false, required: false
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // sas_url - computed: true, optional: false, required: false
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }

  // use_emulator - computed: true, optional: false, required: false
  public get useEmulator() {
    return this.getBooleanAttribute('use_emulator');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // automatic_credentials - computed: true, optional: false, required: false
  public get automaticCredentials() {
    return this.getNumberAttribute('automatic_credentials');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // hns - computed: true, optional: false, required: false
  public get hns() {
    return this.getNumberAttribute('hns');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemOsconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemOsconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemS3Config {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemS3ConfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemS3ConfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // access_secret - computed: true, optional: false, required: false
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_max_time - computed: true, optional: false, required: false
  public get downloadPartMaxTime() {
    return this.getNumberAttribute('download_part_max_time');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // force_path_style - computed: true, optional: false, required: false
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // sse_customer_key - computed: true, optional: false, required: false
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfig {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfigToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }

  // disable_concurrent_reads - computed: true, optional: false, required: false
  public get disableConcurrentReads() {
    return this.getBooleanAttribute('disable_concurrent_reads');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // fingerprints - computed: true, optional: false, required: false
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }

  // key_passphrase - computed: true, optional: false, required: false
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // socks_password - computed: true, optional: false, required: false
  public get socksPassword() {
    return this.getStringAttribute('socks_password');
  }

  // socks_proxy - computed: true, optional: false, required: false
  public get socksProxy() {
    return this.getStringAttribute('socks_proxy');
  }

  // socks_username - computed: true, optional: false, required: false
  public get socksUsername() {
    return this.getStringAttribute('socks_username');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilesystem {
}

export function dataSftpgoGroupsGroupsUserSettingsFilesystemToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFilesystemToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new DataSftpgoGroupsGroupsUserSettingsFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new DataSftpgoGroupsGroupsUserSettingsFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFiltersAccessTime {
}

export function dataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersAccessTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersAccessTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFiltersAccessTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFiltersAccessTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeOutputReference {
    return new DataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimits {
}

export function dataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download_bandwidth - computed: true, optional: false, required: false
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.getListAttribute('sources');
  }

  // upload_bandwidth - computed: true, optional: false, required: false
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsOutputReference {
    return new DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFiltersFilePatterns {
}

export function dataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersFilePatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFiltersFilePatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFiltersFilePatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFiltersFilePatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_patterns - computed: true, optional: false, required: false
  public get allowedPatterns() {
    return this.getListAttribute('allowed_patterns');
  }

  // denied_patterns - computed: true, optional: false, required: false
  public get deniedPatterns() {
    return this.getListAttribute('denied_patterns');
  }

  // deny_policy - computed: true, optional: false, required: false
  public get denyPolicy() {
    return this.getNumberAttribute('deny_policy');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsOutputReference {
    return new DataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoGroupsGroupsUserSettingsFilters {
}

export function dataSftpgoGroupsGroupsUserSettingsFiltersToTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsFiltersToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettingsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettingsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettingsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_time - computed: true, optional: false, required: false
  private _accessTime = new DataSftpgoGroupsGroupsUserSettingsFiltersAccessTimeList(this, "access_time", false);
  public get accessTime() {
    return this._accessTime;
  }

  // allow_api_key_auth - computed: true, optional: false, required: false
  public get allowApiKeyAuth() {
    return this.getBooleanAttribute('allow_api_key_auth');
  }

  // allowed_ip - computed: true, optional: false, required: false
  public get allowedIp() {
    return this.getListAttribute('allowed_ip');
  }

  // bandwidth_limits - computed: true, optional: false, required: false
  private _bandwidthLimits = new DataSftpgoGroupsGroupsUserSettingsFiltersBandwidthLimitsList(this, "bandwidth_limits", false);
  public get bandwidthLimits() {
    return this._bandwidthLimits;
  }

  // check_password_disabled - computed: true, optional: false, required: false
  public get checkPasswordDisabled() {
    return this.getBooleanAttribute('check_password_disabled');
  }

  // default_shares_expiration - computed: true, optional: false, required: false
  public get defaultSharesExpiration() {
    return this.getNumberAttribute('default_shares_expiration');
  }

  // denied_ip - computed: true, optional: false, required: false
  public get deniedIp() {
    return this.getListAttribute('denied_ip');
  }

  // denied_login_methods - computed: true, optional: false, required: false
  public get deniedLoginMethods() {
    return this.getListAttribute('denied_login_methods');
  }

  // denied_protocols - computed: true, optional: false, required: false
  public get deniedProtocols() {
    return this.getListAttribute('denied_protocols');
  }

  // disable_fs_checks - computed: true, optional: false, required: false
  public get disableFsChecks() {
    return this.getBooleanAttribute('disable_fs_checks');
  }

  // enforce_secure_algorithms - computed: true, optional: false, required: false
  public get enforceSecureAlgorithms() {
    return this.getBooleanAttribute('enforce_secure_algorithms');
  }

  // external_auth_cache_time - computed: true, optional: false, required: false
  public get externalAuthCacheTime() {
    return this.getNumberAttribute('external_auth_cache_time');
  }

  // external_auth_disabled - computed: true, optional: false, required: false
  public get externalAuthDisabled() {
    return this.getBooleanAttribute('external_auth_disabled');
  }

  // file_patterns - computed: true, optional: false, required: false
  private _filePatterns = new DataSftpgoGroupsGroupsUserSettingsFiltersFilePatternsList(this, "file_patterns", false);
  public get filePatterns() {
    return this._filePatterns;
  }

  // ftp_security - computed: true, optional: false, required: false
  public get ftpSecurity() {
    return this.getNumberAttribute('ftp_security');
  }

  // is_anonymous - computed: true, optional: false, required: false
  public get isAnonymous() {
    return this.getBooleanAttribute('is_anonymous');
  }

  // max_shares_expiration - computed: true, optional: false, required: false
  public get maxSharesExpiration() {
    return this.getNumberAttribute('max_shares_expiration');
  }

  // max_upload_file_size - computed: true, optional: false, required: false
  public get maxUploadFileSize() {
    return this.getNumberAttribute('max_upload_file_size');
  }

  // password_expiration - computed: true, optional: false, required: false
  public get passwordExpiration() {
    return this.getNumberAttribute('password_expiration');
  }

  // password_strength - computed: true, optional: false, required: false
  public get passwordStrength() {
    return this.getNumberAttribute('password_strength');
  }

  // pre_login_disabled - computed: true, optional: false, required: false
  public get preLoginDisabled() {
    return this.getBooleanAttribute('pre_login_disabled');
  }

  // start_directory - computed: true, optional: false, required: false
  public get startDirectory() {
    return this.getStringAttribute('start_directory');
  }

  // tls_username - computed: true, optional: false, required: false
  public get tlsUsername() {
    return this.getStringAttribute('tls_username');
  }

  // two_factor_protocols - computed: true, optional: false, required: false
  public get twoFactorProtocols() {
    return this.getListAttribute('two_factor_protocols');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // web_client - computed: true, optional: false, required: false
  public get webClient() {
    return this.getListAttribute('web_client');
  }
}
export interface DataSftpgoGroupsGroupsUserSettings {
}

export function dataSftpgoGroupsGroupsUserSettingsToTerraform(struct?: DataSftpgoGroupsGroupsUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsUserSettingsToHclTerraform(struct?: DataSftpgoGroupsGroupsUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download_bandwidth - computed: true, optional: false, required: false
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }

  // download_data_transfer - computed: true, optional: false, required: false
  public get downloadDataTransfer() {
    return this.getNumberAttribute('download_data_transfer');
  }

  // expires_in - computed: true, optional: false, required: false
  public get expiresIn() {
    return this.getNumberAttribute('expires_in');
  }

  // filesystem - computed: true, optional: false, required: false
  private _filesystem = new DataSftpgoGroupsGroupsUserSettingsFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataSftpgoGroupsGroupsUserSettingsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }

  // home_dir - computed: true, optional: false, required: false
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }

  // max_sessions - computed: true, optional: false, required: false
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new cdktf.StringMap(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // quota_files - computed: true, optional: false, required: false
  public get quotaFiles() {
    return this.getNumberAttribute('quota_files');
  }

  // quota_size - computed: true, optional: false, required: false
  public get quotaSize() {
    return this.getNumberAttribute('quota_size');
  }

  // total_data_transfer - computed: true, optional: false, required: false
  public get totalDataTransfer() {
    return this.getNumberAttribute('total_data_transfer');
  }

  // upload_bandwidth - computed: true, optional: false, required: false
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }

  // upload_data_transfer - computed: true, optional: false, required: false
  public get uploadDataTransfer() {
    return this.getNumberAttribute('upload_data_transfer');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_tier - computed: true, optional: false, required: false
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // account_key - computed: true, optional: false, required: false
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // sas_url - computed: true, optional: false, required: false
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }

  // use_emulator - computed: true, optional: false, required: false
  public get useEmulator() {
    return this.getBooleanAttribute('use_emulator');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // automatic_credentials - computed: true, optional: false, required: false
  public get automaticCredentials() {
    return this.getNumberAttribute('automatic_credentials');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // hns - computed: true, optional: false, required: false
  public get hns() {
    return this.getNumberAttribute('hns');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3Config {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemS3ConfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemS3ConfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // access_secret - computed: true, optional: false, required: false
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_max_time - computed: true, optional: false, required: false
  public get downloadPartMaxTime() {
    return this.getNumberAttribute('download_part_max_time');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // force_path_style - computed: true, optional: false, required: false
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // sse_customer_key - computed: true, optional: false, required: false
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfig {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfigToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfigToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }

  // disable_concurrent_reads - computed: true, optional: false, required: false
  public get disableConcurrentReads() {
    return this.getBooleanAttribute('disable_concurrent_reads');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // fingerprints - computed: true, optional: false, required: false
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }

  // key_passphrase - computed: true, optional: false, required: false
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // socks_password - computed: true, optional: false, required: false
  public get socksPassword() {
    return this.getStringAttribute('socks_password');
  }

  // socks_proxy - computed: true, optional: false, required: false
  public get socksProxy() {
    return this.getStringAttribute('socks_proxy');
  }

  // socks_username - computed: true, optional: false, required: false
  public get socksUsername() {
    return this.getStringAttribute('socks_username');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSftpgoGroupsGroupsVirtualFoldersFilesystem {
}

export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersFilesystemToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFoldersFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFoldersFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface DataSftpgoGroupsGroupsVirtualFolders {
}

export function dataSftpgoGroupsGroupsVirtualFoldersToTerraform(struct?: DataSftpgoGroupsGroupsVirtualFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsVirtualFoldersToHclTerraform(struct?: DataSftpgoGroupsGroupsVirtualFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsVirtualFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoGroupsGroupsVirtualFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroupsVirtualFolders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filesystem - computed: true, optional: false, required: false
  private _filesystem = new DataSftpgoGroupsGroupsVirtualFoldersFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }

  // last_quota_update - computed: true, optional: false, required: false
  public get lastQuotaUpdate() {
    return this.getNumberAttribute('last_quota_update');
  }

  // mapped_path - computed: true, optional: false, required: false
  public get mappedPath() {
    return this.getStringAttribute('mapped_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quota_files - computed: true, optional: false, required: false
  public get quotaFiles() {
    return this.getNumberAttribute('quota_files');
  }

  // quota_size - computed: true, optional: false, required: false
  public get quotaSize() {
    return this.getNumberAttribute('quota_size');
  }

  // used_quota_files - computed: true, optional: false, required: false
  public get usedQuotaFiles() {
    return this.getNumberAttribute('used_quota_files');
  }

  // used_quota_size - computed: true, optional: false, required: false
  public get usedQuotaSize() {
    return this.getNumberAttribute('used_quota_size');
  }

  // virtual_path - computed: true, optional: false, required: false
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
}

export class DataSftpgoGroupsGroupsVirtualFoldersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoGroupsGroupsVirtualFoldersOutputReference {
    return new DataSftpgoGroupsGroupsVirtualFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoGroupsGroups {
}

export function dataSftpgoGroupsGroupsToTerraform(struct?: DataSftpgoGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoGroupsGroupsToHclTerraform(struct?: DataSftpgoGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // user_settings - computed: true, optional: false, required: false
  private _userSettings = new DataSftpgoGroupsGroupsUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }

  // virtual_folders - computed: true, optional: false, required: false
  private _virtualFolders = new DataSftpgoGroupsGroupsVirtualFoldersList(this, "virtual_folders", false);
  public get virtualFolders() {
    return this._virtualFolders;
  }
}

export class DataSftpgoGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoGroupsGroupsOutputReference {
    return new DataSftpgoGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/groups sftpgo_groups}
*/
export class DataSftpgoGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSftpgoGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSftpgoGroups to import
  * @param importFromId The id of the existing DataSftpgoGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSftpgoGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/groups sftpgo_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSftpgoGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSftpgoGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_groups',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
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

  // groups - computed: true, optional: false, required: false
  private _groups = new DataSftpgoGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
