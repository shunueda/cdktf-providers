// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSftpgoUsersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSftpgoUsersUsersFilesystemAzblobconfig {
}

export function dataSftpgoUsersUsersFilesystemAzblobconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemAzblobconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemAzblobconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemCryptconfig {
}

export function dataSftpgoUsersUsersFilesystemCryptconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemCryptconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemCryptconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemGcsconfig {
}

export function dataSftpgoUsersUsersFilesystemGcsconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemGcsconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemGcsconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemHttpconfig {
}

export function dataSftpgoUsersUsersFilesystemHttpconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemHttpconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemHttpconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemOsconfig {
}

export function dataSftpgoUsersUsersFilesystemOsconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemOsconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemOsconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemS3Config {
}

export function dataSftpgoUsersUsersFilesystemS3ConfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemS3ConfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemS3Config | undefined) {
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
export interface DataSftpgoUsersUsersFilesystemSftpconfig {
}

export function dataSftpgoUsersUsersFilesystemSftpconfigToTerraform(struct?: DataSftpgoUsersUsersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemSftpconfigToHclTerraform(struct?: DataSftpgoUsersUsersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystemSftpconfig | undefined) {
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
export interface DataSftpgoUsersUsersFilesystem {
}

export function dataSftpgoUsersUsersFilesystemToTerraform(struct?: DataSftpgoUsersUsersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFilesystemToHclTerraform(struct?: DataSftpgoUsersUsersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new DataSftpgoUsersUsersFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new DataSftpgoUsersUsersFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new DataSftpgoUsersUsersFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new DataSftpgoUsersUsersFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new DataSftpgoUsersUsersFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new DataSftpgoUsersUsersFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new DataSftpgoUsersUsersFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface DataSftpgoUsersUsersFiltersAccessTime {
}

export function dataSftpgoUsersUsersFiltersAccessTimeToTerraform(struct?: DataSftpgoUsersUsersFiltersAccessTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFiltersAccessTimeToHclTerraform(struct?: DataSftpgoUsersUsersFiltersAccessTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFiltersAccessTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsersFiltersAccessTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFiltersAccessTime | undefined) {
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

export class DataSftpgoUsersUsersFiltersAccessTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersFiltersAccessTimeOutputReference {
    return new DataSftpgoUsersUsersFiltersAccessTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoUsersUsersFiltersBandwidthLimits {
}

export function dataSftpgoUsersUsersFiltersBandwidthLimitsToTerraform(struct?: DataSftpgoUsersUsersFiltersBandwidthLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFiltersBandwidthLimitsToHclTerraform(struct?: DataSftpgoUsersUsersFiltersBandwidthLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFiltersBandwidthLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsersFiltersBandwidthLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFiltersBandwidthLimits | undefined) {
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

export class DataSftpgoUsersUsersFiltersBandwidthLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersFiltersBandwidthLimitsOutputReference {
    return new DataSftpgoUsersUsersFiltersBandwidthLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoUsersUsersFiltersFilePatterns {
}

export function dataSftpgoUsersUsersFiltersFilePatternsToTerraform(struct?: DataSftpgoUsersUsersFiltersFilePatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFiltersFilePatternsToHclTerraform(struct?: DataSftpgoUsersUsersFiltersFilePatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFiltersFilePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsersFiltersFilePatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFiltersFilePatterns | undefined) {
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

export class DataSftpgoUsersUsersFiltersFilePatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersFiltersFilePatternsOutputReference {
    return new DataSftpgoUsersUsersFiltersFilePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoUsersUsersFilters {
}

export function dataSftpgoUsersUsersFiltersToTerraform(struct?: DataSftpgoUsersUsersFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersFiltersToHclTerraform(struct?: DataSftpgoUsersUsersFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_time - computed: true, optional: false, required: false
  private _accessTime = new DataSftpgoUsersUsersFiltersAccessTimeList(this, "access_time", false);
  public get accessTime() {
    return this._accessTime;
  }

  // additional_emails - computed: true, optional: false, required: false
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
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
  private _bandwidthLimits = new DataSftpgoUsersUsersFiltersBandwidthLimitsList(this, "bandwidth_limits", false);
  public get bandwidthLimits() {
    return this._bandwidthLimits;
  }

  // check_password_disabled - computed: true, optional: false, required: false
  public get checkPasswordDisabled() {
    return this.getBooleanAttribute('check_password_disabled');
  }

  // custom1 - computed: true, optional: false, required: false
  public get custom1() {
    return this.getStringAttribute('custom1');
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
  private _filePatterns = new DataSftpgoUsersUsersFiltersFilePatternsList(this, "file_patterns", false);
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

  // require_password_change - computed: true, optional: false, required: false
  public get requirePasswordChange() {
    return this.getBooleanAttribute('require_password_change');
  }

  // start_directory - computed: true, optional: false, required: false
  public get startDirectory() {
    return this.getStringAttribute('start_directory');
  }

  // tls_certs - computed: true, optional: false, required: false
  public get tlsCerts() {
    return this.getListAttribute('tls_certs');
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
export interface DataSftpgoUsersUsersGroups {
}

export function dataSftpgoUsersUsersGroupsToTerraform(struct?: DataSftpgoUsersUsersGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersGroupsToHclTerraform(struct?: DataSftpgoUsersUsersGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsersGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataSftpgoUsersUsersGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersGroupsOutputReference {
    return new DataSftpgoUsersUsersGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemOsconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemOsconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemS3Config {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemS3ConfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemS3ConfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemS3Config | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfig {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfigToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfigToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfig | undefined) {
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
export interface DataSftpgoUsersUsersVirtualFoldersFilesystem {
}

export function dataSftpgoUsersUsersVirtualFoldersFilesystemToTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersFilesystemToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSftpgoUsersUsersVirtualFoldersFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFoldersFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new DataSftpgoUsersUsersVirtualFoldersFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new DataSftpgoUsersUsersVirtualFoldersFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface DataSftpgoUsersUsersVirtualFolders {
}

export function dataSftpgoUsersUsersVirtualFoldersToTerraform(struct?: DataSftpgoUsersUsersVirtualFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersVirtualFoldersToHclTerraform(struct?: DataSftpgoUsersUsersVirtualFolders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersVirtualFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsersVirtualFolders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsersVirtualFolders | undefined) {
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
  private _filesystem = new DataSftpgoUsersUsersVirtualFoldersFilesystemOutputReference(this, "filesystem");
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

export class DataSftpgoUsersUsersVirtualFoldersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersVirtualFoldersOutputReference {
    return new DataSftpgoUsersUsersVirtualFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSftpgoUsersUsers {
}

export function dataSftpgoUsersUsersToTerraform(struct?: DataSftpgoUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSftpgoUsersUsersToHclTerraform(struct?: DataSftpgoUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSftpgoUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSftpgoUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSftpgoUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_info - computed: true, optional: false, required: false
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // download_bandwidth - computed: true, optional: false, required: false
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }

  // download_data_transfer - computed: true, optional: false, required: false
  public get downloadDataTransfer() {
    return this.getNumberAttribute('download_data_transfer');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getNumberAttribute('expiration_date');
  }

  // filesystem - computed: true, optional: false, required: false
  private _filesystem = new DataSftpgoUsersUsersFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataSftpgoUsersUsersFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }

  // first_download - computed: true, optional: false, required: false
  public get firstDownload() {
    return this.getNumberAttribute('first_download');
  }

  // first_upload - computed: true, optional: false, required: false
  public get firstUpload() {
    return this.getNumberAttribute('first_upload');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataSftpgoUsersUsersGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // home_dir - computed: true, optional: false, required: false
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getNumberAttribute('last_login');
  }

  // last_password_change - computed: true, optional: false, required: false
  public get lastPasswordChange() {
    return this.getNumberAttribute('last_password_change');
  }

  // last_quota_update - computed: true, optional: false, required: false
  public get lastQuotaUpdate() {
    return this.getNumberAttribute('last_quota_update');
  }

  // max_sessions - computed: true, optional: false, required: false
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new cdktf.StringMap(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // public_keys - computed: true, optional: false, required: false
  public get publicKeys() {
    return this.getListAttribute('public_keys');
  }

  // quota_files - computed: true, optional: false, required: false
  public get quotaFiles() {
    return this.getNumberAttribute('quota_files');
  }

  // quota_size - computed: true, optional: false, required: false
  public get quotaSize() {
    return this.getNumberAttribute('quota_size');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // total_data_transfer - computed: true, optional: false, required: false
  public get totalDataTransfer() {
    return this.getNumberAttribute('total_data_transfer');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // upload_bandwidth - computed: true, optional: false, required: false
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }

  // upload_data_transfer - computed: true, optional: false, required: false
  public get uploadDataTransfer() {
    return this.getNumberAttribute('upload_data_transfer');
  }

  // used_download_data_transfer - computed: true, optional: false, required: false
  public get usedDownloadDataTransfer() {
    return this.getNumberAttribute('used_download_data_transfer');
  }

  // used_quota_files - computed: true, optional: false, required: false
  public get usedQuotaFiles() {
    return this.getNumberAttribute('used_quota_files');
  }

  // used_quota_size - computed: true, optional: false, required: false
  public get usedQuotaSize() {
    return this.getNumberAttribute('used_quota_size');
  }

  // used_upload_data_transfer - computed: true, optional: false, required: false
  public get usedUploadDataTransfer() {
    return this.getNumberAttribute('used_upload_data_transfer');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // virtual_folders - computed: true, optional: false, required: false
  private _virtualFolders = new DataSftpgoUsersUsersVirtualFoldersList(this, "virtual_folders", false);
  public get virtualFolders() {
    return this._virtualFolders;
  }
}

export class DataSftpgoUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSftpgoUsersUsersOutputReference {
    return new DataSftpgoUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/users sftpgo_users}
*/
export class DataSftpgoUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSftpgoUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSftpgoUsers to import
  * @param importFromId The id of the existing DataSftpgoUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSftpgoUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/data-sources/users sftpgo_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSftpgoUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSftpgoUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_users',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataSftpgoUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
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
