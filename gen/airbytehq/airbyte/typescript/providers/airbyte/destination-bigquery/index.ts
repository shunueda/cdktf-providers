// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationBigqueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#configuration DestinationBigquery#configuration}
  */
  readonly configuration: DestinationBigqueryConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#definition_id DestinationBigquery#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#name DestinationBigquery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#workspace_id DestinationBigquery#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts {
}

export function destinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsToTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsToHclTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey {
  /**
  * HMAC key access ID. When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#hmac_key_access_id DestinationBigquery#hmac_key_access_id}
  */
  readonly hmacKeyAccessId: string;
  /**
  * The corresponding secret for the access ID. It is a 40-character base-64 encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#hmac_key_secret DestinationBigquery#hmac_key_secret}
  */
  readonly hmacKeySecret: string;
}

export function destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyToTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_key_access_id: cdktf.stringToTerraform(struct!.hmacKeyAccessId),
    hmac_key_secret: cdktf.stringToTerraform(struct!.hmacKeySecret),
  }
}


export function destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyToHclTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_key_access_id: {
      value: cdktf.stringToHclTerraform(struct!.hmacKeyAccessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.hmacKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacKeyAccessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKeyAccessId = this._hmacKeyAccessId;
    }
    if (this._hmacKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKeySecret = this._hmacKeySecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmacKeyAccessId = undefined;
      this._hmacKeySecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmacKeyAccessId = value.hmacKeyAccessId;
      this._hmacKeySecret = value.hmacKeySecret;
    }
  }

  // hmac_key_access_id - computed: false, optional: false, required: true
  private _hmacKeyAccessId?: string; 
  public get hmacKeyAccessId() {
    return this.getStringAttribute('hmac_key_access_id');
  }
  public set hmacKeyAccessId(value: string) {
    this._hmacKeyAccessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyAccessIdInput() {
    return this._hmacKeyAccessId;
  }

  // hmac_key_secret - computed: false, optional: false, required: true
  private _hmacKeySecret?: string; 
  public get hmacKeySecret() {
    return this.getStringAttribute('hmac_key_secret');
  }
  public set hmacKeySecret(value: string) {
    this._hmacKeySecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeySecretInput() {
    return this._hmacKeySecret;
  }
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#hmac_key DestinationBigquery#hmac_key}
  */
  readonly hmacKey?: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey;
}

export function destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialToTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_key: destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyToTerraform(struct!.hmacKey),
  }
}


export function destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialToHclTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_key: {
      value: destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyToHclTerraform(struct!.hmacKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKey = this._hmacKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmacKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmacKey.internalValue = value.hmacKey;
    }
  }

  // hmac_key - computed: false, optional: true, required: false
  private _hmacKey = new DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKeyOutputReference(this, "hmac_key");
  public get hmacKey() {
    return this._hmacKey;
  }
  public putHmacKey(value: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialHmacKey) {
    this._hmacKey.internalValue = value;
  }
  public resetHmacKey() {
    this._hmacKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyInput() {
    return this._hmacKey.internalValue;
  }
}
export interface DestinationBigqueryConfigurationLoadingMethodGcsStaging {
  /**
  * An HMAC key is a type of credential and can be associated with a service account or a user account in Cloud Storage. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#credential DestinationBigquery#credential}
  */
  readonly credential: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential;
  /**
  * The name of the GCS bucket. Read more <a href="https://cloud.google.com/storage/docs/naming-buckets">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#gcs_bucket_name DestinationBigquery#gcs_bucket_name}
  */
  readonly gcsBucketName: string;
  /**
  * Directory under the GCS bucket where data will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#gcs_bucket_path DestinationBigquery#gcs_bucket_path}
  */
  readonly gcsBucketPath: string;
  /**
  * This upload method is supposed to temporary store records in GCS bucket. By this select you can chose if these records should be removed from GCS when migration has finished. The default "Delete all tmp files from GCS" value is used if not set explicitly. Default: "Delete all tmp files from GCS"; must be one of ["Delete all tmp files from GCS", "Keep all tmp files in GCS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#keep_files_in_gcs_bucket DestinationBigquery#keep_files_in_gcs_bucket}
  */
  readonly keepFilesInGcsBucket?: string;
}

export function destinationBigqueryConfigurationLoadingMethodGcsStagingToTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStaging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialToTerraform(struct!.credential),
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    gcs_bucket_path: cdktf.stringToTerraform(struct!.gcsBucketPath),
    keep_files_in_gcs_bucket: cdktf.stringToTerraform(struct!.keepFilesInGcsBucket),
  }
}


export function destinationBigqueryConfigurationLoadingMethodGcsStagingToHclTerraform(struct?: DestinationBigqueryConfigurationLoadingMethodGcsStaging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: destinationBigqueryConfigurationLoadingMethodGcsStagingCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential",
    },
    gcs_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_files_in_gcs_bucket: {
      value: cdktf.stringToHclTerraform(struct!.keepFilesInGcsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationBigqueryConfigurationLoadingMethodGcsStagingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfigurationLoadingMethodGcsStaging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._gcsBucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketPath = this._gcsBucketPath;
    }
    if (this._keepFilesInGcsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepFilesInGcsBucket = this._keepFilesInGcsBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfigurationLoadingMethodGcsStaging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential.internalValue = undefined;
      this._gcsBucketName = undefined;
      this._gcsBucketPath = undefined;
      this._keepFilesInGcsBucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential.internalValue = value.credential;
      this._gcsBucketName = value.gcsBucketName;
      this._gcsBucketPath = value.gcsBucketPath;
      this._keepFilesInGcsBucket = value.keepFilesInGcsBucket;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new DestinationBigqueryConfigurationLoadingMethodGcsStagingCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DestinationBigqueryConfigurationLoadingMethodGcsStagingCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // gcs_bucket_name - computed: false, optional: false, required: true
  private _gcsBucketName?: string; 
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }
  public set gcsBucketName(value: string) {
    this._gcsBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketNameInput() {
    return this._gcsBucketName;
  }

  // gcs_bucket_path - computed: false, optional: false, required: true
  private _gcsBucketPath?: string; 
  public get gcsBucketPath() {
    return this.getStringAttribute('gcs_bucket_path');
  }
  public set gcsBucketPath(value: string) {
    this._gcsBucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketPathInput() {
    return this._gcsBucketPath;
  }

  // keep_files_in_gcs_bucket - computed: true, optional: true, required: false
  private _keepFilesInGcsBucket?: string; 
  public get keepFilesInGcsBucket() {
    return this.getStringAttribute('keep_files_in_gcs_bucket');
  }
  public set keepFilesInGcsBucket(value: string) {
    this._keepFilesInGcsBucket = value;
  }
  public resetKeepFilesInGcsBucket() {
    this._keepFilesInGcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFilesInGcsBucketInput() {
    return this._keepFilesInGcsBucket;
  }
}
export interface DestinationBigqueryConfigurationLoadingMethod {
  /**
  * Direct loading using batched SQL INSERT statements. This method uses the BigQuery driver to convert large INSERT statements into file uploads automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#batched_standard_inserts DestinationBigquery#batched_standard_inserts}
  */
  readonly batchedStandardInserts?: DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts;
  /**
  * Writes large batches of records to a file, uploads the file to GCS, then uses COPY INTO to load your data into BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#gcs_staging DestinationBigquery#gcs_staging}
  */
  readonly gcsStaging?: DestinationBigqueryConfigurationLoadingMethodGcsStaging;
}

export function destinationBigqueryConfigurationLoadingMethodToTerraform(struct?: DestinationBigqueryConfigurationLoadingMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batched_standard_inserts: destinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsToTerraform(struct!.batchedStandardInserts),
    gcs_staging: destinationBigqueryConfigurationLoadingMethodGcsStagingToTerraform(struct!.gcsStaging),
  }
}


export function destinationBigqueryConfigurationLoadingMethodToHclTerraform(struct?: DestinationBigqueryConfigurationLoadingMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batched_standard_inserts: {
      value: destinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsToHclTerraform(struct!.batchedStandardInserts),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts",
    },
    gcs_staging: {
      value: destinationBigqueryConfigurationLoadingMethodGcsStagingToHclTerraform(struct!.gcsStaging),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationBigqueryConfigurationLoadingMethodGcsStaging",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationBigqueryConfigurationLoadingMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfigurationLoadingMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchedStandardInserts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchedStandardInserts = this._batchedStandardInserts?.internalValue;
    }
    if (this._gcsStaging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsStaging = this._gcsStaging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfigurationLoadingMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchedStandardInserts.internalValue = undefined;
      this._gcsStaging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchedStandardInserts.internalValue = value.batchedStandardInserts;
      this._gcsStaging.internalValue = value.gcsStaging;
    }
  }

  // batched_standard_inserts - computed: false, optional: true, required: false
  private _batchedStandardInserts = new DestinationBigqueryConfigurationLoadingMethodBatchedStandardInsertsOutputReference(this, "batched_standard_inserts");
  public get batchedStandardInserts() {
    return this._batchedStandardInserts;
  }
  public putBatchedStandardInserts(value: DestinationBigqueryConfigurationLoadingMethodBatchedStandardInserts) {
    this._batchedStandardInserts.internalValue = value;
  }
  public resetBatchedStandardInserts() {
    this._batchedStandardInserts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchedStandardInsertsInput() {
    return this._batchedStandardInserts.internalValue;
  }

  // gcs_staging - computed: false, optional: true, required: false
  private _gcsStaging = new DestinationBigqueryConfigurationLoadingMethodGcsStagingOutputReference(this, "gcs_staging");
  public get gcsStaging() {
    return this._gcsStaging;
  }
  public putGcsStaging(value: DestinationBigqueryConfigurationLoadingMethodGcsStaging) {
    this._gcsStaging.internalValue = value;
  }
  public resetGcsStaging() {
    this._gcsStaging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsStagingInput() {
    return this._gcsStaging.internalValue;
  }
}
export interface DestinationBigqueryConfiguration {
  /**
  * Google BigQuery client's chunk (buffer) size (MIN=1, MAX = 15) for each table. The size that will be written by a single RPC. Written data will be buffered and only flushed upon reaching this size or closing the channel. The default 15MB value is used if not set explicitly. Read more <a href="https://googleapis.dev/python/bigquery/latest/generated/google.cloud.bigquery.client.Client.html">here</a>. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#big_query_client_buffer_size_mb DestinationBigquery#big_query_client_buffer_size_mb}
  */
  readonly bigQueryClientBufferSizeMb?: number;
  /**
  * The contents of the JSON service account key. Check out the <a href="https://docs.airbyte.com/integrations/destinations/bigquery#service-account-key">docs</a> if you need help generating this key. Default credentials will be used if this field is left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#credentials_json DestinationBigquery#credentials_json}
  */
  readonly credentialsJson?: string;
  /**
  * The default BigQuery Dataset ID that tables are replicated to if the source does not specify a namespace. Read more <a href="https://cloud.google.com/bigquery/docs/datasets#create-dataset">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#dataset_id DestinationBigquery#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The location of the dataset. Warning: Changes made after creation will not be applied. Read more <a href="https://cloud.google.com/bigquery/docs/locations">here</a>. must be one of ["US", "EU", "asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-south2", "asia-southeast1", "asia-southeast2", "australia-southeast1", "australia-southeast2", "europe-central1", "europe-central2", "europe-north1", "europe-north2", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "europe-west7", "europe-west8", "europe-west9", "europe-west12", "me-central1", "me-central2", "me-west1", "northamerica-northeast1", "northamerica-northeast2", "southamerica-east1", "southamerica-west1", "us-central1", "us-east1", "us-east2", "us-east3", "us-east4", "us-east5", "us-south1", "us-west1", "us-west2", "us-west3", "us-west4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#dataset_location DestinationBigquery#dataset_location}
  */
  readonly datasetLocation: string;
  /**
  * Disable Writing Final Tables. WARNING! The data format in _airbyte_data is likely stable but there are no guarantees that other metadata columns will remain the same in future versions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#disable_type_dedupe DestinationBigquery#disable_type_dedupe}
  */
  readonly disableTypeDedupe?: boolean | cdktf.IResolvable;
  /**
  * The way data will be uploaded to BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#loading_method DestinationBigquery#loading_method}
  */
  readonly loadingMethod?: DestinationBigqueryConfigurationLoadingMethod;
  /**
  * The GCP project ID for the project containing the target BigQuery dataset. Read more <a href="https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#project_id DestinationBigquery#project_id}
  */
  readonly projectId: string;
  /**
  * The dataset to write raw tables into (default: airbyte_internal)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#raw_data_dataset DestinationBigquery#raw_data_dataset}
  */
  readonly rawDataDataset?: string;
  /**
  * Interactive run type means that the query is executed as soon as possible, and these queries count towards concurrent rate limit and daily limit. Read more about interactive run type <a href="https://cloud.google.com/bigquery/docs/running-queries#queries">here</a>. Batch queries are queued and started as soon as idle resources are available in the BigQuery shared resource pool, which usually occurs within a few minutes. Batch queries don’t count towards your concurrent rate limit. Read more about batch queries <a href="https://cloud.google.com/bigquery/docs/running-queries#batch">here</a>. The default "interactive" value is used if not set explicitly. Default: "interactive"; must be one of ["interactive", "batch"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#transformation_priority DestinationBigquery#transformation_priority}
  */
  readonly transformationPriority?: string;
}

export function destinationBigqueryConfigurationToTerraform(struct?: DestinationBigqueryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_client_buffer_size_mb: cdktf.numberToTerraform(struct!.bigQueryClientBufferSizeMb),
    credentials_json: cdktf.stringToTerraform(struct!.credentialsJson),
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_location: cdktf.stringToTerraform(struct!.datasetLocation),
    disable_type_dedupe: cdktf.booleanToTerraform(struct!.disableTypeDedupe),
    loading_method: destinationBigqueryConfigurationLoadingMethodToTerraform(struct!.loadingMethod),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    raw_data_dataset: cdktf.stringToTerraform(struct!.rawDataDataset),
    transformation_priority: cdktf.stringToTerraform(struct!.transformationPriority),
  }
}


export function destinationBigqueryConfigurationToHclTerraform(struct?: DestinationBigqueryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_query_client_buffer_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.bigQueryClientBufferSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.credentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_location: {
      value: cdktf.stringToHclTerraform(struct!.datasetLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_type_dedupe: {
      value: cdktf.booleanToHclTerraform(struct!.disableTypeDedupe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loading_method: {
      value: destinationBigqueryConfigurationLoadingMethodToHclTerraform(struct!.loadingMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationBigqueryConfigurationLoadingMethod",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_data_dataset: {
      value: cdktf.stringToHclTerraform(struct!.rawDataDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_priority: {
      value: cdktf.stringToHclTerraform(struct!.transformationPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationBigqueryConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryClientBufferSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryClientBufferSizeMb = this._bigQueryClientBufferSizeMb;
    }
    if (this._credentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsJson = this._credentialsJson;
    }
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetLocation = this._datasetLocation;
    }
    if (this._disableTypeDedupe !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeDedupe = this._disableTypeDedupe;
    }
    if (this._loadingMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingMethod = this._loadingMethod?.internalValue;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._rawDataDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDataDataset = this._rawDataDataset;
    }
    if (this._transformationPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationPriority = this._transformationPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigQueryClientBufferSizeMb = undefined;
      this._credentialsJson = undefined;
      this._datasetId = undefined;
      this._datasetLocation = undefined;
      this._disableTypeDedupe = undefined;
      this._loadingMethod.internalValue = undefined;
      this._projectId = undefined;
      this._rawDataDataset = undefined;
      this._transformationPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigQueryClientBufferSizeMb = value.bigQueryClientBufferSizeMb;
      this._credentialsJson = value.credentialsJson;
      this._datasetId = value.datasetId;
      this._datasetLocation = value.datasetLocation;
      this._disableTypeDedupe = value.disableTypeDedupe;
      this._loadingMethod.internalValue = value.loadingMethod;
      this._projectId = value.projectId;
      this._rawDataDataset = value.rawDataDataset;
      this._transformationPriority = value.transformationPriority;
    }
  }

  // big_query_client_buffer_size_mb - computed: true, optional: true, required: false
  private _bigQueryClientBufferSizeMb?: number; 
  public get bigQueryClientBufferSizeMb() {
    return this.getNumberAttribute('big_query_client_buffer_size_mb');
  }
  public set bigQueryClientBufferSizeMb(value: number) {
    this._bigQueryClientBufferSizeMb = value;
  }
  public resetBigQueryClientBufferSizeMb() {
    this._bigQueryClientBufferSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryClientBufferSizeMbInput() {
    return this._bigQueryClientBufferSizeMb;
  }

  // credentials_json - computed: false, optional: true, required: false
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  public resetCredentialsJson() {
    this._credentialsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // dataset_location - computed: false, optional: false, required: true
  private _datasetLocation?: string; 
  public get datasetLocation() {
    return this.getStringAttribute('dataset_location');
  }
  public set datasetLocation(value: string) {
    this._datasetLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetLocationInput() {
    return this._datasetLocation;
  }

  // disable_type_dedupe - computed: true, optional: true, required: false
  private _disableTypeDedupe?: boolean | cdktf.IResolvable; 
  public get disableTypeDedupe() {
    return this.getBooleanAttribute('disable_type_dedupe');
  }
  public set disableTypeDedupe(value: boolean | cdktf.IResolvable) {
    this._disableTypeDedupe = value;
  }
  public resetDisableTypeDedupe() {
    this._disableTypeDedupe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeDedupeInput() {
    return this._disableTypeDedupe;
  }

  // loading_method - computed: false, optional: true, required: false
  private _loadingMethod = new DestinationBigqueryConfigurationLoadingMethodOutputReference(this, "loading_method");
  public get loadingMethod() {
    return this._loadingMethod;
  }
  public putLoadingMethod(value: DestinationBigqueryConfigurationLoadingMethod) {
    this._loadingMethod.internalValue = value;
  }
  public resetLoadingMethod() {
    this._loadingMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingMethodInput() {
    return this._loadingMethod.internalValue;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // raw_data_dataset - computed: false, optional: true, required: false
  private _rawDataDataset?: string; 
  public get rawDataDataset() {
    return this.getStringAttribute('raw_data_dataset');
  }
  public set rawDataDataset(value: string) {
    this._rawDataDataset = value;
  }
  public resetRawDataDataset() {
    this._rawDataDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDataDatasetInput() {
    return this._rawDataDataset;
  }

  // transformation_priority - computed: true, optional: true, required: false
  private _transformationPriority?: string; 
  public get transformationPriority() {
    return this.getStringAttribute('transformation_priority');
  }
  public set transformationPriority(value: string) {
    this._transformationPriority = value;
  }
  public resetTransformationPriority() {
    this._transformationPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationPriorityInput() {
    return this._transformationPriority;
  }
}
export interface DestinationBigqueryResourceAllocationDefault {
}

export function destinationBigqueryResourceAllocationDefaultToTerraform(struct?: DestinationBigqueryResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationBigqueryResourceAllocationDefaultToHclTerraform(struct?: DestinationBigqueryResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationBigqueryResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationBigqueryResourceAllocationJobSpecificResourceRequirements {
}

export function destinationBigqueryResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationBigqueryResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationBigqueryResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationBigqueryResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationBigqueryResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationBigqueryResourceAllocationJobSpecific {
}

export function destinationBigqueryResourceAllocationJobSpecificToTerraform(struct?: DestinationBigqueryResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationBigqueryResourceAllocationJobSpecificToHclTerraform(struct?: DestinationBigqueryResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationBigqueryResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationBigqueryResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationBigqueryResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationBigqueryResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationBigqueryResourceAllocationJobSpecificOutputReference {
    return new DestinationBigqueryResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationBigqueryResourceAllocation {
}

export function destinationBigqueryResourceAllocationToTerraform(struct?: DestinationBigqueryResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationBigqueryResourceAllocationToHclTerraform(struct?: DestinationBigqueryResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationBigqueryResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationBigqueryResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationBigqueryResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationBigqueryResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationBigqueryResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery airbyte_destination_bigquery}
*/
export class DestinationBigquery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_bigquery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationBigquery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationBigquery to import
  * @param importFromId The id of the existing DestinationBigquery that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationBigquery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_bigquery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_bigquery airbyte_destination_bigquery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationBigqueryConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationBigqueryConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_bigquery',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationBigqueryConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationBigqueryConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationBigqueryResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationBigqueryConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationBigqueryConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationBigqueryConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
