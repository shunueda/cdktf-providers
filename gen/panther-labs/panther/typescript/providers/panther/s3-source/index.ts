// https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3SourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the AWS Account where the S3 Bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#aws_account_id S3Source#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * The name of the S3 Bucket where logs will be ingested from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#bucket_name S3Source#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The KMS key ARN used to access the S3 Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#kms_key_arn S3Source#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The AWS Role used to access the S3 Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#log_processing_role_arn S3Source#log_processing_role_arn}
  */
  readonly logProcessingRoleArn: string;
  /**
  * The format of the log files being ingested. Supported log stream types: Auto, JSON, JsonArray, Lines, CloudWatchLogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#log_stream_type S3Source#log_stream_type}
  */
  readonly logStreamType: string;
  /**
  * The display name of the S3 Log Source integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#name S3Source#name}
  */
  readonly name: string;
  /**
  * True if bucket notifications are being managed by Panther.  __This will cause Panther to create additional infrastructure in your AWS account.__ \
  * To manage the notification-related infrastructure through terraform, refer to [this example](https://github.com/panther-labs/panther-auxiliary/tree/main/terraform/panther_log_processing_notifications).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#panther_managed_bucket_notifications_enabled S3Source#panther_managed_bucket_notifications_enabled}
  */
  readonly pantherManagedBucketNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The configured mapping of prefixes to log types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#prefix_log_types S3Source#prefix_log_types}
  */
  readonly prefixLogTypes: S3SourcePrefixLogTypes[] | cdktf.IResolvable;
}
export interface S3SourcePrefixLogTypes {
  /**
  * S3 Prefixes to be excluded from log type mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#excluded_prefixes S3Source#excluded_prefixes}
  */
  readonly excludedPrefixes: string[];
  /**
  * List of log types that map to the S3 Prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#log_types S3Source#log_types}
  */
  readonly logTypes: string[];
  /**
  * S3 Prefix to map Log Types to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#prefix S3Source#prefix}
  */
  readonly prefix: string;
}

export function s3SourcePrefixLogTypesToTerraform(struct?: S3SourcePrefixLogTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPrefixes),
    log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logTypes),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function s3SourcePrefixLogTypesToHclTerraform(struct?: S3SourcePrefixLogTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3SourcePrefixLogTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3SourcePrefixLogTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPrefixes = this._excludedPrefixes;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3SourcePrefixLogTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPrefixes = undefined;
      this._logTypes = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPrefixes = value.excludedPrefixes;
      this._logTypes = value.logTypes;
      this._prefix = value.prefix;
    }
  }

  // excluded_prefixes - computed: false, optional: false, required: true
  private _excludedPrefixes?: string[]; 
  public get excludedPrefixes() {
    return this.getListAttribute('excluded_prefixes');
  }
  public set excludedPrefixes(value: string[]) {
    this._excludedPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPrefixesInput() {
    return this._excludedPrefixes;
  }

  // log_types - computed: false, optional: false, required: true
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class S3SourcePrefixLogTypesList extends cdktf.ComplexList {
  public internalValue? : S3SourcePrefixLogTypes[] | cdktf.IResolvable

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
  public get(index: number): S3SourcePrefixLogTypesOutputReference {
    return new S3SourcePrefixLogTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source panther_s3_source}
*/
export class S3Source extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panther_s3_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Source resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Source to import
  * @param importFromId The id of the existing S3Source that should be imported. Refer to the {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Source to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panther_s3_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/s3_source panther_s3_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3SourceConfig
  */
  public constructor(scope: Construct, id: string, config: S3SourceConfig) {
    super(scope, id, {
      terraformResourceType: 'panther_s3_source',
      terraformGeneratorMetadata: {
        providerName: 'panther',
        providerVersion: '0.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._bucketName = config.bucketName;
    this._kmsKeyArn = config.kmsKeyArn;
    this._logProcessingRoleArn = config.logProcessingRoleArn;
    this._logStreamType = config.logStreamType;
    this._name = config.name;
    this._pantherManagedBucketNotificationsEnabled = config.pantherManagedBucketNotificationsEnabled;
    this._prefixLogTypes.internalValue = config.prefixLogTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // log_processing_role_arn - computed: false, optional: false, required: true
  private _logProcessingRoleArn?: string; 
  public get logProcessingRoleArn() {
    return this.getStringAttribute('log_processing_role_arn');
  }
  public set logProcessingRoleArn(value: string) {
    this._logProcessingRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProcessingRoleArnInput() {
    return this._logProcessingRoleArn;
  }

  // log_stream_type - computed: false, optional: false, required: true
  private _logStreamType?: string; 
  public get logStreamType() {
    return this.getStringAttribute('log_stream_type');
  }
  public set logStreamType(value: string) {
    this._logStreamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamTypeInput() {
    return this._logStreamType;
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

  // panther_managed_bucket_notifications_enabled - computed: true, optional: true, required: false
  private _pantherManagedBucketNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get pantherManagedBucketNotificationsEnabled() {
    return this.getBooleanAttribute('panther_managed_bucket_notifications_enabled');
  }
  public set pantherManagedBucketNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._pantherManagedBucketNotificationsEnabled = value;
  }
  public resetPantherManagedBucketNotificationsEnabled() {
    this._pantherManagedBucketNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pantherManagedBucketNotificationsEnabledInput() {
    return this._pantherManagedBucketNotificationsEnabled;
  }

  // prefix_log_types - computed: false, optional: false, required: true
  private _prefixLogTypes = new S3SourcePrefixLogTypesList(this, "prefix_log_types", false);
  public get prefixLogTypes() {
    return this._prefixLogTypes;
  }
  public putPrefixLogTypes(value: S3SourcePrefixLogTypes[] | cdktf.IResolvable) {
    this._prefixLogTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLogTypesInput() {
    return this._prefixLogTypes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      log_processing_role_arn: cdktf.stringToTerraform(this._logProcessingRoleArn),
      log_stream_type: cdktf.stringToTerraform(this._logStreamType),
      name: cdktf.stringToTerraform(this._name),
      panther_managed_bucket_notifications_enabled: cdktf.booleanToTerraform(this._pantherManagedBucketNotificationsEnabled),
      prefix_log_types: cdktf.listMapper(s3SourcePrefixLogTypesToTerraform, false)(this._prefixLogTypes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_processing_role_arn: {
        value: cdktf.stringToHclTerraform(this._logProcessingRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_type: {
        value: cdktf.stringToHclTerraform(this._logStreamType),
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
      panther_managed_bucket_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._pantherManagedBucketNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefix_log_types: {
        value: cdktf.listMapperHcl(s3SourcePrefixLogTypesToHclTerraform, false)(this._prefixLogTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3SourcePrefixLogTypesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
