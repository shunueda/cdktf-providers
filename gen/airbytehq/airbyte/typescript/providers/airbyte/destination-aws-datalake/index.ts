// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationAwsDatalakeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#configuration DestinationAwsDatalake#configuration}
  */
  readonly configuration: DestinationAwsDatalakeConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#definition_id DestinationAwsDatalake#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#name DestinationAwsDatalake#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#workspace_id DestinationAwsDatalake#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationAwsDatalakeConfigurationCredentialsIamRole {
  /**
  * Will assume this role to write data to s3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#role_arn DestinationAwsDatalake#role_arn}
  */
  readonly roleArn: string;
}

export function destinationAwsDatalakeConfigurationCredentialsIamRoleToTerraform(struct?: DestinationAwsDatalakeConfigurationCredentialsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function destinationAwsDatalakeConfigurationCredentialsIamRoleToHclTerraform(struct?: DestinationAwsDatalakeConfigurationCredentialsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationCredentialsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationCredentialsIamRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationCredentialsIamRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DestinationAwsDatalakeConfigurationCredentialsIamUser {
  /**
  * AWS User Access Key Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#aws_access_key_id DestinationAwsDatalake#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * Secret Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#aws_secret_access_key DestinationAwsDatalake#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
}

export function destinationAwsDatalakeConfigurationCredentialsIamUserToTerraform(struct?: DestinationAwsDatalakeConfigurationCredentialsIamUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function destinationAwsDatalakeConfigurationCredentialsIamUserToHclTerraform(struct?: DestinationAwsDatalakeConfigurationCredentialsIamUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationCredentialsIamUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationCredentialsIamUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationCredentialsIamUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}
export interface DestinationAwsDatalakeConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#iam_role DestinationAwsDatalake#iam_role}
  */
  readonly iamRole?: DestinationAwsDatalakeConfigurationCredentialsIamRole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#iam_user DestinationAwsDatalake#iam_user}
  */
  readonly iamUser?: DestinationAwsDatalakeConfigurationCredentialsIamUser;
}

export function destinationAwsDatalakeConfigurationCredentialsToTerraform(struct?: DestinationAwsDatalakeConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role: destinationAwsDatalakeConfigurationCredentialsIamRoleToTerraform(struct!.iamRole),
    iam_user: destinationAwsDatalakeConfigurationCredentialsIamUserToTerraform(struct!.iamUser),
  }
}


export function destinationAwsDatalakeConfigurationCredentialsToHclTerraform(struct?: DestinationAwsDatalakeConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role: {
      value: destinationAwsDatalakeConfigurationCredentialsIamRoleToHclTerraform(struct!.iamRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationCredentialsIamRole",
    },
    iam_user: {
      value: destinationAwsDatalakeConfigurationCredentialsIamUserToHclTerraform(struct!.iamUser),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationCredentialsIamUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole?.internalValue;
    }
    if (this._iamUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamUser = this._iamUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRole.internalValue = undefined;
      this._iamUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRole.internalValue = value.iamRole;
      this._iamUser.internalValue = value.iamUser;
    }
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole = new DestinationAwsDatalakeConfigurationCredentialsIamRoleOutputReference(this, "iam_role");
  public get iamRole() {
    return this._iamRole;
  }
  public putIamRole(value: DestinationAwsDatalakeConfigurationCredentialsIamRole) {
    this._iamRole.internalValue = value;
  }
  public resetIamRole() {
    this._iamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole.internalValue;
  }

  // iam_user - computed: false, optional: true, required: false
  private _iamUser = new DestinationAwsDatalakeConfigurationCredentialsIamUserOutputReference(this, "iam_user");
  public get iamUser() {
    return this._iamUser;
  }
  public putIamUser(value: DestinationAwsDatalakeConfigurationCredentialsIamUser) {
    this._iamUser.internalValue = value;
  }
  public resetIamUser() {
    this._iamUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUserInput() {
    return this._iamUser.internalValue;
  }
}
export interface DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson {
  /**
  * The compression algorithm used to compress data. Default: "UNCOMPRESSED"; must be one of ["UNCOMPRESSED", "GZIP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#compression_codec DestinationAwsDatalake#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Default: "JSONL"; must be "JSONL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#format_type DestinationAwsDatalake#format_type}
  */
  readonly formatType?: string;
}

export function destinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct?: DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct?: DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionCodec = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionCodec = value.compressionCodec;
      this._formatType = value.formatType;
    }
  }

  // compression_codec - computed: true, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // format_type - computed: true, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }
}
export interface DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage {
  /**
  * The compression algorithm used to compress data. Default: "SNAPPY"; must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "ZSTD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#compression_codec DestinationAwsDatalake#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Default: "Parquet"; must be "Parquet"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#format_type DestinationAwsDatalake#format_type}
  */
  readonly formatType?: string;
}

export function destinationAwsDatalakeConfigurationFormatParquetColumnarStorageToTerraform(struct?: DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationAwsDatalakeConfigurationFormatParquetColumnarStorageToHclTerraform(struct?: DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationFormatParquetColumnarStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionCodec = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionCodec = value.compressionCodec;
      this._formatType = value.formatType;
    }
  }

  // compression_codec - computed: true, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // format_type - computed: true, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }
}
export interface DestinationAwsDatalakeConfigurationFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#json_lines_newline_delimited_json DestinationAwsDatalake#json_lines_newline_delimited_json}
  */
  readonly jsonLinesNewlineDelimitedJson?: DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#parquet_columnar_storage DestinationAwsDatalake#parquet_columnar_storage}
  */
  readonly parquetColumnarStorage?: DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage;
}

export function destinationAwsDatalakeConfigurationFormatToTerraform(struct?: DestinationAwsDatalakeConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_lines_newline_delimited_json: destinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct!.jsonLinesNewlineDelimitedJson),
    parquet_columnar_storage: destinationAwsDatalakeConfigurationFormatParquetColumnarStorageToTerraform(struct!.parquetColumnarStorage),
  }
}


export function destinationAwsDatalakeConfigurationFormatToHclTerraform(struct?: DestinationAwsDatalakeConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_lines_newline_delimited_json: {
      value: destinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct!.jsonLinesNewlineDelimitedJson),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson",
    },
    parquet_columnar_storage: {
      value: destinationAwsDatalakeConfigurationFormatParquetColumnarStorageToHclTerraform(struct!.parquetColumnarStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfigurationFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonLinesNewlineDelimitedJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonLinesNewlineDelimitedJson = this._jsonLinesNewlineDelimitedJson?.internalValue;
    }
    if (this._parquetColumnarStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetColumnarStorage = this._parquetColumnarStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfigurationFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonLinesNewlineDelimitedJson.internalValue = undefined;
      this._parquetColumnarStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonLinesNewlineDelimitedJson.internalValue = value.jsonLinesNewlineDelimitedJson;
      this._parquetColumnarStorage.internalValue = value.parquetColumnarStorage;
    }
  }

  // json_lines_newline_delimited_json - computed: false, optional: true, required: false
  private _jsonLinesNewlineDelimitedJson = new DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference(this, "json_lines_newline_delimited_json");
  public get jsonLinesNewlineDelimitedJson() {
    return this._jsonLinesNewlineDelimitedJson;
  }
  public putJsonLinesNewlineDelimitedJson(value: DestinationAwsDatalakeConfigurationFormatJsonLinesNewlineDelimitedJson) {
    this._jsonLinesNewlineDelimitedJson.internalValue = value;
  }
  public resetJsonLinesNewlineDelimitedJson() {
    this._jsonLinesNewlineDelimitedJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonLinesNewlineDelimitedJsonInput() {
    return this._jsonLinesNewlineDelimitedJson.internalValue;
  }

  // parquet_columnar_storage - computed: false, optional: true, required: false
  private _parquetColumnarStorage = new DestinationAwsDatalakeConfigurationFormatParquetColumnarStorageOutputReference(this, "parquet_columnar_storage");
  public get parquetColumnarStorage() {
    return this._parquetColumnarStorage;
  }
  public putParquetColumnarStorage(value: DestinationAwsDatalakeConfigurationFormatParquetColumnarStorage) {
    this._parquetColumnarStorage.internalValue = value;
  }
  public resetParquetColumnarStorage() {
    this._parquetColumnarStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetColumnarStorageInput() {
    return this._parquetColumnarStorage.internalValue;
  }
}
export interface DestinationAwsDatalakeConfiguration {
  /**
  * target aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#aws_account_id DestinationAwsDatalake#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * The name of the S3 bucket. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#bucket_name DestinationAwsDatalake#bucket_name}
  */
  readonly bucketName: string;
  /**
  * S3 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#bucket_prefix DestinationAwsDatalake#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Choose How to Authenticate to AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#credentials DestinationAwsDatalake#credentials}
  */
  readonly credentials: DestinationAwsDatalakeConfigurationCredentials;
  /**
  * Format of the data output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#format DestinationAwsDatalake#format}
  */
  readonly format?: DestinationAwsDatalakeConfigurationFormat;
  /**
  * Cast float/double as decimal(38,18). This can help achieve higher accuracy and represent numbers correctly as received from the source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#glue_catalog_float_as_decimal DestinationAwsDatalake#glue_catalog_float_as_decimal}
  */
  readonly glueCatalogFloatAsDecimal?: boolean | cdktf.IResolvable;
  /**
  * Add a default tag key to databases created by this destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#lakeformation_database_default_tag_key DestinationAwsDatalake#lakeformation_database_default_tag_key}
  */
  readonly lakeformationDatabaseDefaultTagKey?: string;
  /**
  * Add default values for the `Tag Key` to databases created by this destination. Comma separate for multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#lakeformation_database_default_tag_values DestinationAwsDatalake#lakeformation_database_default_tag_values}
  */
  readonly lakeformationDatabaseDefaultTagValues?: string;
  /**
  * The default database this destination will use to create tables in per stream. Can be changed per connection by customizing the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#lakeformation_database_name DestinationAwsDatalake#lakeformation_database_name}
  */
  readonly lakeformationDatabaseName: string;
  /**
  * Whether to create tables as LF governed tables. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#lakeformation_governed_tables DestinationAwsDatalake#lakeformation_governed_tables}
  */
  readonly lakeformationGovernedTables?: boolean | cdktf.IResolvable;
  /**
  * Partition data by cursor fields when a cursor field is a date. Default: "NO PARTITIONING"; must be one of ["NO PARTITIONING", "DATE", "YEAR", "MONTH", "DAY", "YEAR/MONTH", "YEAR/MONTH/DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#partitioning DestinationAwsDatalake#partitioning}
  */
  readonly partitioning?: string;
  /**
  * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. Default: ""; must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#region DestinationAwsDatalake#region}
  */
  readonly region?: string;
}

export function destinationAwsDatalakeConfigurationToTerraform(struct?: DestinationAwsDatalakeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    credentials: destinationAwsDatalakeConfigurationCredentialsToTerraform(struct!.credentials),
    format: destinationAwsDatalakeConfigurationFormatToTerraform(struct!.format),
    glue_catalog_float_as_decimal: cdktf.booleanToTerraform(struct!.glueCatalogFloatAsDecimal),
    lakeformation_database_default_tag_key: cdktf.stringToTerraform(struct!.lakeformationDatabaseDefaultTagKey),
    lakeformation_database_default_tag_values: cdktf.stringToTerraform(struct!.lakeformationDatabaseDefaultTagValues),
    lakeformation_database_name: cdktf.stringToTerraform(struct!.lakeformationDatabaseName),
    lakeformation_governed_tables: cdktf.booleanToTerraform(struct!.lakeformationGovernedTables),
    partitioning: cdktf.stringToTerraform(struct!.partitioning),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function destinationAwsDatalakeConfigurationToHclTerraform(struct?: DestinationAwsDatalakeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: destinationAwsDatalakeConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationCredentials",
    },
    format: {
      value: destinationAwsDatalakeConfigurationFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationAwsDatalakeConfigurationFormat",
    },
    glue_catalog_float_as_decimal: {
      value: cdktf.booleanToHclTerraform(struct!.glueCatalogFloatAsDecimal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lakeformation_database_default_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.lakeformationDatabaseDefaultTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation_database_default_tag_values: {
      value: cdktf.stringToHclTerraform(struct!.lakeformationDatabaseDefaultTagValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation_database_name: {
      value: cdktf.stringToHclTerraform(struct!.lakeformationDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation_governed_tables: {
      value: cdktf.booleanToHclTerraform(struct!.lakeformationGovernedTables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partitioning: {
      value: cdktf.stringToHclTerraform(struct!.partitioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationAwsDatalakeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._glueCatalogFloatAsDecimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueCatalogFloatAsDecimal = this._glueCatalogFloatAsDecimal;
    }
    if (this._lakeformationDatabaseDefaultTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeformationDatabaseDefaultTagKey = this._lakeformationDatabaseDefaultTagKey;
    }
    if (this._lakeformationDatabaseDefaultTagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeformationDatabaseDefaultTagValues = this._lakeformationDatabaseDefaultTagValues;
    }
    if (this._lakeformationDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeformationDatabaseName = this._lakeformationDatabaseName;
    }
    if (this._lakeformationGovernedTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeformationGovernedTables = this._lakeformationGovernedTables;
    }
    if (this._partitioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioning = this._partitioning;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._credentials.internalValue = undefined;
      this._format.internalValue = undefined;
      this._glueCatalogFloatAsDecimal = undefined;
      this._lakeformationDatabaseDefaultTagKey = undefined;
      this._lakeformationDatabaseDefaultTagValues = undefined;
      this._lakeformationDatabaseName = undefined;
      this._lakeformationGovernedTables = undefined;
      this._partitioning = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId = value.awsAccountId;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._credentials.internalValue = value.credentials;
      this._format.internalValue = value.format;
      this._glueCatalogFloatAsDecimal = value.glueCatalogFloatAsDecimal;
      this._lakeformationDatabaseDefaultTagKey = value.lakeformationDatabaseDefaultTagKey;
      this._lakeformationDatabaseDefaultTagValues = value.lakeformationDatabaseDefaultTagValues;
      this._lakeformationDatabaseName = value.lakeformationDatabaseName;
      this._lakeformationGovernedTables = value.lakeformationGovernedTables;
      this._partitioning = value.partitioning;
      this._region = value.region;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
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

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DestinationAwsDatalakeConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DestinationAwsDatalakeConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new DestinationAwsDatalakeConfigurationFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DestinationAwsDatalakeConfigurationFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // glue_catalog_float_as_decimal - computed: true, optional: true, required: false
  private _glueCatalogFloatAsDecimal?: boolean | cdktf.IResolvable; 
  public get glueCatalogFloatAsDecimal() {
    return this.getBooleanAttribute('glue_catalog_float_as_decimal');
  }
  public set glueCatalogFloatAsDecimal(value: boolean | cdktf.IResolvable) {
    this._glueCatalogFloatAsDecimal = value;
  }
  public resetGlueCatalogFloatAsDecimal() {
    this._glueCatalogFloatAsDecimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueCatalogFloatAsDecimalInput() {
    return this._glueCatalogFloatAsDecimal;
  }

  // lakeformation_database_default_tag_key - computed: false, optional: true, required: false
  private _lakeformationDatabaseDefaultTagKey?: string; 
  public get lakeformationDatabaseDefaultTagKey() {
    return this.getStringAttribute('lakeformation_database_default_tag_key');
  }
  public set lakeformationDatabaseDefaultTagKey(value: string) {
    this._lakeformationDatabaseDefaultTagKey = value;
  }
  public resetLakeformationDatabaseDefaultTagKey() {
    this._lakeformationDatabaseDefaultTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeformationDatabaseDefaultTagKeyInput() {
    return this._lakeformationDatabaseDefaultTagKey;
  }

  // lakeformation_database_default_tag_values - computed: false, optional: true, required: false
  private _lakeformationDatabaseDefaultTagValues?: string; 
  public get lakeformationDatabaseDefaultTagValues() {
    return this.getStringAttribute('lakeformation_database_default_tag_values');
  }
  public set lakeformationDatabaseDefaultTagValues(value: string) {
    this._lakeformationDatabaseDefaultTagValues = value;
  }
  public resetLakeformationDatabaseDefaultTagValues() {
    this._lakeformationDatabaseDefaultTagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeformationDatabaseDefaultTagValuesInput() {
    return this._lakeformationDatabaseDefaultTagValues;
  }

  // lakeformation_database_name - computed: false, optional: false, required: true
  private _lakeformationDatabaseName?: string; 
  public get lakeformationDatabaseName() {
    return this.getStringAttribute('lakeformation_database_name');
  }
  public set lakeformationDatabaseName(value: string) {
    this._lakeformationDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeformationDatabaseNameInput() {
    return this._lakeformationDatabaseName;
  }

  // lakeformation_governed_tables - computed: true, optional: true, required: false
  private _lakeformationGovernedTables?: boolean | cdktf.IResolvable; 
  public get lakeformationGovernedTables() {
    return this.getBooleanAttribute('lakeformation_governed_tables');
  }
  public set lakeformationGovernedTables(value: boolean | cdktf.IResolvable) {
    this._lakeformationGovernedTables = value;
  }
  public resetLakeformationGovernedTables() {
    this._lakeformationGovernedTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeformationGovernedTablesInput() {
    return this._lakeformationGovernedTables;
  }

  // partitioning - computed: true, optional: true, required: false
  private _partitioning?: string; 
  public get partitioning() {
    return this.getStringAttribute('partitioning');
  }
  public set partitioning(value: string) {
    this._partitioning = value;
  }
  public resetPartitioning() {
    this._partitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningInput() {
    return this._partitioning;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DestinationAwsDatalakeResourceAllocationDefault {
}

export function destinationAwsDatalakeResourceAllocationDefaultToTerraform(struct?: DestinationAwsDatalakeResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAwsDatalakeResourceAllocationDefaultToHclTerraform(struct?: DestinationAwsDatalakeResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAwsDatalakeResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeResourceAllocationDefault | undefined) {
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
export interface DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirements {
}

export function destinationAwsDatalakeResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAwsDatalakeResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationAwsDatalakeResourceAllocationJobSpecific {
}

export function destinationAwsDatalakeResourceAllocationJobSpecificToTerraform(struct?: DestinationAwsDatalakeResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAwsDatalakeResourceAllocationJobSpecificToHclTerraform(struct?: DestinationAwsDatalakeResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAwsDatalakeResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationAwsDatalakeResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationAwsDatalakeResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationAwsDatalakeResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationAwsDatalakeResourceAllocationJobSpecificOutputReference {
    return new DestinationAwsDatalakeResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationAwsDatalakeResourceAllocation {
}

export function destinationAwsDatalakeResourceAllocationToTerraform(struct?: DestinationAwsDatalakeResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationAwsDatalakeResourceAllocationToHclTerraform(struct?: DestinationAwsDatalakeResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationAwsDatalakeResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationAwsDatalakeResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationAwsDatalakeResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationAwsDatalakeResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationAwsDatalakeResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake airbyte_destination_aws_datalake}
*/
export class DestinationAwsDatalake extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_aws_datalake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationAwsDatalake resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationAwsDatalake to import
  * @param importFromId The id of the existing DestinationAwsDatalake that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationAwsDatalake to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_aws_datalake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_aws_datalake airbyte_destination_aws_datalake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationAwsDatalakeConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationAwsDatalakeConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_aws_datalake',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
  private _configuration = new DestinationAwsDatalakeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationAwsDatalakeConfiguration) {
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
  private _resourceAllocation = new DestinationAwsDatalakeResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationAwsDatalakeConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationAwsDatalakeConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationAwsDatalakeConfiguration",
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
