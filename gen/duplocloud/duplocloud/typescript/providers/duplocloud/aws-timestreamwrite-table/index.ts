// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full name of the Timestream database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#database_name AwsTimestreamwriteTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#id AwsTimestreamwriteTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The short name of the Timestream Table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#name AwsTimestreamwriteTable#name}
  */
  readonly name: string;
  /**
  * The GUID of the tenant that the Timestream Table will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#tenant_id AwsTimestreamwriteTable#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#wait_for_deployment AwsTimestreamwriteTable#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktf.IResolvable;
  /**
  * magnetic_store_write_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#magnetic_store_write_properties AwsTimestreamwriteTable#magnetic_store_write_properties}
  */
  readonly magneticStoreWriteProperties?: AwsTimestreamwriteTableMagneticStoreWriteProperties;
  /**
  * retention_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#retention_properties AwsTimestreamwriteTable#retention_properties}
  */
  readonly retentionProperties?: AwsTimestreamwriteTableRetentionProperties;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#tags AwsTimestreamwriteTable#tags}
  */
  readonly tags?: AwsTimestreamwriteTableTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#timeouts AwsTimestreamwriteTable#timeouts}
  */
  readonly timeouts?: AwsTimestreamwriteTableTimeouts;
}
export interface AwsTimestreamwriteTableAllTags {
}

export function awsTimestreamwriteTableAllTagsToTerraform(struct?: AwsTimestreamwriteTableAllTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsTimestreamwriteTableAllTagsToHclTerraform(struct?: AwsTimestreamwriteTableAllTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsTimestreamwriteTableAllTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTimestreamwriteTableAllTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableAllTags | undefined) {
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

export class AwsTimestreamwriteTableAllTagsList extends cdktf.ComplexList {

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
  public get(index: number): AwsTimestreamwriteTableAllTagsOutputReference {
    return new AwsTimestreamwriteTableAllTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
  /**
  * Bucket name of the customer S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#bucket_name AwsTimestreamwriteTable#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Encryption option for the customer s3 location. Options are S3 server side encryption with an S3-managed key or KMS managed key. Valid values are `SSE_KMS` and `SSE_S3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#encryption_option AwsTimestreamwriteTable#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * KMS key arn for the customer s3 location when encrypting with a KMS managed key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#kms_key_id AwsTimestreamwriteTable#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Object key prefix for the customer S3 location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#object_key_prefix AwsTimestreamwriteTable#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}

export function awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference | AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    object_key_prefix: cdktf.stringToTerraform(struct!.objectKeyPrefix),
  }
}


export function awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference | AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_option: {
      value: cdktf.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._kmsKeyId = undefined;
      this._objectKeyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyId = value.kmsKeyId;
      this._objectKeyPrefix = value.objectKeyPrefix;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // object_key_prefix - computed: true, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}
export interface AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#s3_configuration AwsTimestreamwriteTable#s3_configuration}
  */
  readonly s3Configuration?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}

export function awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference | AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_configuration: awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}


export function awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference | AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_configuration: {
      value: awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface AwsTimestreamwriteTableMagneticStoreWriteProperties {
  /**
  * A flag to enable magnetic store writes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#enable_magnetic_store_writes AwsTimestreamwriteTable#enable_magnetic_store_writes}
  */
  readonly enableMagneticStoreWrites?: boolean | cdktf.IResolvable;
  /**
  * magnetic_store_rejected_data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#magnetic_store_rejected_data_location AwsTimestreamwriteTable#magnetic_store_rejected_data_location}
  */
  readonly magneticStoreRejectedDataLocation?: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
}

export function awsTimestreamwriteTableMagneticStoreWritePropertiesToTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference | AwsTimestreamwriteTableMagneticStoreWriteProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_magnetic_store_writes: cdktf.booleanToTerraform(struct!.enableMagneticStoreWrites),
    magnetic_store_rejected_data_location: awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct!.magneticStoreRejectedDataLocation),
  }
}


export function awsTimestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(struct?: AwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference | AwsTimestreamwriteTableMagneticStoreWriteProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_magnetic_store_writes: {
      value: cdktf.booleanToHclTerraform(struct!.enableMagneticStoreWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    magnetic_store_rejected_data_location: {
      value: awsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct!.magneticStoreRejectedDataLocation),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTimestreamwriteTableMagneticStoreWriteProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMagneticStoreWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMagneticStoreWrites = this._enableMagneticStoreWrites;
    }
    if (this._magneticStoreRejectedDataLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRejectedDataLocation = this._magneticStoreRejectedDataLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableMagneticStoreWriteProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMagneticStoreWrites = undefined;
      this._magneticStoreRejectedDataLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMagneticStoreWrites = value.enableMagneticStoreWrites;
      this._magneticStoreRejectedDataLocation.internalValue = value.magneticStoreRejectedDataLocation;
    }
  }

  // enable_magnetic_store_writes - computed: false, optional: true, required: false
  private _enableMagneticStoreWrites?: boolean | cdktf.IResolvable; 
  public get enableMagneticStoreWrites() {
    return this.getBooleanAttribute('enable_magnetic_store_writes');
  }
  public set enableMagneticStoreWrites(value: boolean | cdktf.IResolvable) {
    this._enableMagneticStoreWrites = value;
  }
  public resetEnableMagneticStoreWrites() {
    this._enableMagneticStoreWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMagneticStoreWritesInput() {
    return this._enableMagneticStoreWrites;
  }

  // magnetic_store_rejected_data_location - computed: false, optional: true, required: false
  private _magneticStoreRejectedDataLocation = new AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(this, "magnetic_store_rejected_data_location");
  public get magneticStoreRejectedDataLocation() {
    return this._magneticStoreRejectedDataLocation;
  }
  public putMagneticStoreRejectedDataLocation(value: AwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation) {
    this._magneticStoreRejectedDataLocation.internalValue = value;
  }
  public resetMagneticStoreRejectedDataLocation() {
    this._magneticStoreRejectedDataLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRejectedDataLocationInput() {
    return this._magneticStoreRejectedDataLocation.internalValue;
  }
}
export interface AwsTimestreamwriteTableRetentionProperties {
  /**
  * The duration for which data must be stored in the magnetic store. Minimum value of 1. Maximum value of 73000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#magnetic_store_retention_period_in_days AwsTimestreamwriteTable#magnetic_store_retention_period_in_days}
  */
  readonly magneticStoreRetentionPeriodInDays: number;
  /**
  * The duration for which data must be stored in the memory store. Minimum value of 1. Maximum value of 8766.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#memory_store_retention_period_in_hours AwsTimestreamwriteTable#memory_store_retention_period_in_hours}
  */
  readonly memoryStoreRetentionPeriodInHours: number;
}

export function awsTimestreamwriteTableRetentionPropertiesToTerraform(struct?: AwsTimestreamwriteTableRetentionPropertiesOutputReference | AwsTimestreamwriteTableRetentionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}


export function awsTimestreamwriteTableRetentionPropertiesToHclTerraform(struct?: AwsTimestreamwriteTableRetentionPropertiesOutputReference | AwsTimestreamwriteTableRetentionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    magnetic_store_retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.magneticStoreRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_store_retention_period_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.memoryStoreRetentionPeriodInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTimestreamwriteTableRetentionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._magneticStoreRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
    }
    if (this._memoryStoreRetentionPeriodInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableRetentionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._magneticStoreRetentionPeriodInDays = undefined;
      this._memoryStoreRetentionPeriodInHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
      this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
    }
  }

  // magnetic_store_retention_period_in_days - computed: false, optional: false, required: true
  private _magneticStoreRetentionPeriodInDays?: number; 
  public get magneticStoreRetentionPeriodInDays() {
    return this.getNumberAttribute('magnetic_store_retention_period_in_days');
  }
  public set magneticStoreRetentionPeriodInDays(value: number) {
    this._magneticStoreRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRetentionPeriodInDaysInput() {
    return this._magneticStoreRetentionPeriodInDays;
  }

  // memory_store_retention_period_in_hours - computed: false, optional: false, required: true
  private _memoryStoreRetentionPeriodInHours?: number; 
  public get memoryStoreRetentionPeriodInHours() {
    return this.getNumberAttribute('memory_store_retention_period_in_hours');
  }
  public set memoryStoreRetentionPeriodInHours(value: number) {
    this._memoryStoreRetentionPeriodInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStoreRetentionPeriodInHoursInput() {
    return this._memoryStoreRetentionPeriodInHours;
  }
}
export interface AwsTimestreamwriteTableTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#key AwsTimestreamwriteTable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#value AwsTimestreamwriteTable#value}
  */
  readonly value: string;
}

export function awsTimestreamwriteTableTagsToTerraform(struct?: AwsTimestreamwriteTableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsTimestreamwriteTableTagsToHclTerraform(struct?: AwsTimestreamwriteTableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTimestreamwriteTableTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AwsTimestreamwriteTableTagsList extends cdktf.ComplexList {
  public internalValue? : AwsTimestreamwriteTableTags[] | cdktf.IResolvable

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
  public get(index: number): AwsTimestreamwriteTableTagsOutputReference {
    return new AwsTimestreamwriteTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTimestreamwriteTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#create AwsTimestreamwriteTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#delete AwsTimestreamwriteTable#delete}
  */
  readonly delete?: string;
}

export function awsTimestreamwriteTableTimeoutsToTerraform(struct?: AwsTimestreamwriteTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsTimestreamwriteTableTimeoutsToHclTerraform(struct?: AwsTimestreamwriteTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTimestreamwriteTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsTimestreamwriteTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTimestreamwriteTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table duplocloud_aws_timestreamwrite_table}
*/
export class AwsTimestreamwriteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_timestreamwrite_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTimestreamwriteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTimestreamwriteTable to import
  * @param importFromId The id of the existing AwsTimestreamwriteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTimestreamwriteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_timestreamwrite_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_timestreamwrite_table duplocloud_aws_timestreamwrite_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTimestreamwriteTableConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTimestreamwriteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_timestreamwrite_table',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._waitForDeployment = config.waitForDeployment;
    this._magneticStoreWriteProperties.internalValue = config.magneticStoreWriteProperties;
    this._retentionProperties.internalValue = config.retentionProperties;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_tags - computed: true, optional: false, required: false
  private _allTags = new AwsTimestreamwriteTableAllTagsList(this, "all_tags", false);
  public get allTags() {
    return this._allTags;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // specified_tags - computed: true, optional: false, required: false
  public get specifiedTags() {
    return this.getListAttribute('specified_tags');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktf.IResolvable; 
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktf.IResolvable) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment;
  }

  // magnetic_store_write_properties - computed: false, optional: true, required: false
  private _magneticStoreWriteProperties = new AwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference(this, "magnetic_store_write_properties");
  public get magneticStoreWriteProperties() {
    return this._magneticStoreWriteProperties;
  }
  public putMagneticStoreWriteProperties(value: AwsTimestreamwriteTableMagneticStoreWriteProperties) {
    this._magneticStoreWriteProperties.internalValue = value;
  }
  public resetMagneticStoreWriteProperties() {
    this._magneticStoreWriteProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreWritePropertiesInput() {
    return this._magneticStoreWriteProperties.internalValue;
  }

  // retention_properties - computed: false, optional: true, required: false
  private _retentionProperties = new AwsTimestreamwriteTableRetentionPropertiesOutputReference(this, "retention_properties");
  public get retentionProperties() {
    return this._retentionProperties;
  }
  public putRetentionProperties(value: AwsTimestreamwriteTableRetentionProperties) {
    this._retentionProperties.internalValue = value;
  }
  public resetRetentionProperties() {
    this._retentionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPropertiesInput() {
    return this._retentionProperties.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AwsTimestreamwriteTableTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AwsTimestreamwriteTableTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsTimestreamwriteTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsTimestreamwriteTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
      magnetic_store_write_properties: awsTimestreamwriteTableMagneticStoreWritePropertiesToTerraform(this._magneticStoreWriteProperties.internalValue),
      retention_properties: awsTimestreamwriteTableRetentionPropertiesToTerraform(this._retentionProperties.internalValue),
      tags: cdktf.listMapper(awsTimestreamwriteTableTagsToTerraform, true)(this._tags.internalValue),
      timeouts: awsTimestreamwriteTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_deployment: {
        value: cdktf.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      magnetic_store_write_properties: {
        value: awsTimestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(this._magneticStoreWriteProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTimestreamwriteTableMagneticStoreWritePropertiesList",
      },
      retention_properties: {
        value: awsTimestreamwriteTableRetentionPropertiesToHclTerraform(this._retentionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTimestreamwriteTableRetentionPropertiesList",
      },
      tags: {
        value: cdktf.listMapperHcl(awsTimestreamwriteTableTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTimestreamwriteTableTagsList",
      },
      timeouts: {
        value: awsTimestreamwriteTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsTimestreamwriteTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
