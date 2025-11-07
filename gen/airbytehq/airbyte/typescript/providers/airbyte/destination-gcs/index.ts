// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationGcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#configuration DestinationGcs#configuration}
  */
  readonly configuration: DestinationGcsConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#definition_id DestinationGcs#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#name DestinationGcs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#workspace_id DestinationGcs#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationGcsConfigurationCredentialHmacKey {
  /**
  * Default: "HMAC_KEY"; must be "HMAC_KEY"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#credential_type DestinationGcs#credential_type}
  */
  readonly credentialType?: string;
  /**
  * When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys#overview">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#hmac_key_access_id DestinationGcs#hmac_key_access_id}
  */
  readonly hmacKeyAccessId: string;
  /**
  * The corresponding secret for the access ID. It is a 40-character base-64 encoded string.  Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys#secrets">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#hmac_key_secret DestinationGcs#hmac_key_secret}
  */
  readonly hmacKeySecret: string;
}

export function destinationGcsConfigurationCredentialHmacKeyToTerraform(struct?: DestinationGcsConfigurationCredentialHmacKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    hmac_key_access_id: cdktf.stringToTerraform(struct!.hmacKeyAccessId),
    hmac_key_secret: cdktf.stringToTerraform(struct!.hmacKeySecret),
  }
}


export function destinationGcsConfigurationCredentialHmacKeyToHclTerraform(struct?: DestinationGcsConfigurationCredentialHmacKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationGcsConfigurationCredentialHmacKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationCredentialHmacKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
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

  public set internalValue(value: DestinationGcsConfigurationCredentialHmacKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialType = undefined;
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
      this._credentialType = value.credentialType;
      this._hmacKeyAccessId = value.hmacKeyAccessId;
      this._hmacKeySecret = value.hmacKeySecret;
    }
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
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
export interface DestinationGcsConfigurationCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#hmac_key DestinationGcs#hmac_key}
  */
  readonly hmacKey?: DestinationGcsConfigurationCredentialHmacKey;
}

export function destinationGcsConfigurationCredentialToTerraform(struct?: DestinationGcsConfigurationCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_key: destinationGcsConfigurationCredentialHmacKeyToTerraform(struct!.hmacKey),
  }
}


export function destinationGcsConfigurationCredentialToHclTerraform(struct?: DestinationGcsConfigurationCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_key: {
      value: destinationGcsConfigurationCredentialHmacKeyToHclTerraform(struct!.hmacKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationCredentialHmacKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationCredential | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationGcsConfigurationCredential | cdktf.IResolvable | undefined) {
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
  private _hmacKey = new DestinationGcsConfigurationCredentialHmacKeyOutputReference(this, "hmac_key");
  public get hmacKey() {
    return this._hmacKey;
  }
  public putHmacKey(value: DestinationGcsConfigurationCredentialHmacKey) {
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
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 {
  /**
  * Default: "bzip2"; must be "bzip2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate {
  /**
  * Default: "Deflate"; must be "Deflate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
  /**
  * 0: no compression & fastest, 9: best compression & slowest. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_level DestinationGcs#compression_level}
  */
  readonly compressionLevel?: number;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
      this._compressionLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // compression_level - computed: true, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression {
  /**
  * Default: "no compression"; must be "no compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy {
  /**
  * Default: "snappy"; must be "snappy"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz {
  /**
  * Default: "xz"; must be "xz"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
  /**
  * The presets 0-3 are fast presets with medium compression. The presets 4-6 are fairly slow presets with high compression. The default preset is 6. The presets 7-9 are like the preset 6 but use bigger dictionaries and have higher compressor and decompressor memory requirements. Unless the uncompressed size of the file exceeds 8 MiB, 16 MiB, or 32 MiB, it is waste of memory to use the presets 7, 8, or 9, respectively. Read more <a href="https://commons.apache.org/proper/commons-compress/apidocs/org/apache/commons/compress/compressors/xz/XZCompressorOutputStream.html#XZCompressorOutputStream-java.io.OutputStream-int-">here</a> for details. Default: 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_level DestinationGcs#compression_level}
  */
  readonly compressionLevel?: number;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
      this._compressionLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // compression_level - computed: true, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard {
  /**
  * Default: "zstandard"; must be "zstandard"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#codec DestinationGcs#codec}
  */
  readonly codec?: string;
  /**
  * Negative levels are 'fast' modes akin to lz4 or snappy, levels above 9 are generally for archival purposes, and levels above 18 use a lot of memory. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_level DestinationGcs#compression_level}
  */
  readonly compressionLevel?: number;
  /**
  * If true, include a checksum with each data block. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#include_checksum DestinationGcs#include_checksum}
  */
  readonly includeChecksum?: boolean | cdktf.IResolvable;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
    include_checksum: cdktf.booleanToTerraform(struct!.includeChecksum),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_checksum: {
      value: cdktf.booleanToHclTerraform(struct!.includeChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    if (this._includeChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChecksum = this._includeChecksum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
      this._compressionLevel = undefined;
      this._includeChecksum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
      this._includeChecksum = value.includeChecksum;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // compression_level - computed: true, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // include_checksum - computed: true, optional: true, required: false
  private _includeChecksum?: boolean | cdktf.IResolvable; 
  public get includeChecksum() {
    return this.getBooleanAttribute('include_checksum');
  }
  public set includeChecksum(value: boolean | cdktf.IResolvable) {
    this._includeChecksum = value;
  }
  public resetIncludeChecksum() {
    this._includeChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChecksumInput() {
    return this._includeChecksum;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#bzip2 DestinationGcs#bzip2}
  */
  readonly bzip2?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#deflate DestinationGcs#deflate}
  */
  readonly deflate?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#no_compression DestinationGcs#no_compression}
  */
  readonly noCompression?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#snappy DestinationGcs#snappy}
  */
  readonly snappy?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#xz DestinationGcs#xz}
  */
  readonly xz?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#zstandard DestinationGcs#zstandard}
  */
  readonly zstandard?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard;
}

export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bzip2: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToTerraform(struct!.bzip2),
    deflate: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateToTerraform(struct!.deflate),
    no_compression: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToTerraform(struct!.noCompression),
    snappy: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyToTerraform(struct!.snappy),
    xz: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzToTerraform(struct!.xz),
    zstandard: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardToTerraform(struct!.zstandard),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bzip2: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToHclTerraform(struct!.bzip2),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2",
    },
    deflate: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateToHclTerraform(struct!.deflate),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate",
    },
    no_compression: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression",
    },
    snappy: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyToHclTerraform(struct!.snappy),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy",
    },
    xz: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzToHclTerraform(struct!.xz),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz",
    },
    zstandard: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardToHclTerraform(struct!.zstandard),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bzip2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bzip2 = this._bzip2?.internalValue;
    }
    if (this._deflate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deflate = this._deflate?.internalValue;
    }
    if (this._noCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCompression = this._noCompression?.internalValue;
    }
    if (this._snappy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snappy = this._snappy?.internalValue;
    }
    if (this._xz?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xz = this._xz?.internalValue;
    }
    if (this._zstandard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zstandard = this._zstandard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bzip2.internalValue = undefined;
      this._deflate.internalValue = undefined;
      this._noCompression.internalValue = undefined;
      this._snappy.internalValue = undefined;
      this._xz.internalValue = undefined;
      this._zstandard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bzip2.internalValue = value.bzip2;
      this._deflate.internalValue = value.deflate;
      this._noCompression.internalValue = value.noCompression;
      this._snappy.internalValue = value.snappy;
      this._xz.internalValue = value.xz;
      this._zstandard.internalValue = value.zstandard;
    }
  }

  // bzip2 - computed: false, optional: true, required: false
  private _bzip2 = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2OutputReference(this, "bzip2");
  public get bzip2() {
    return this._bzip2;
  }
  public putBzip2(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecBzip2) {
    this._bzip2.internalValue = value;
  }
  public resetBzip2() {
    this._bzip2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bzip2Input() {
    return this._bzip2.internalValue;
  }

  // deflate - computed: false, optional: true, required: false
  private _deflate = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflateOutputReference(this, "deflate");
  public get deflate() {
    return this._deflate;
  }
  public putDeflate(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecDeflate) {
    this._deflate.internalValue = value;
  }
  public resetDeflate() {
    this._deflate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deflateInput() {
    return this._deflate.internalValue;
  }

  // no_compression - computed: false, optional: true, required: false
  private _noCompression = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecNoCompression) {
    this._noCompression.internalValue = value;
  }
  public resetNoCompression() {
    this._noCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionInput() {
    return this._noCompression.internalValue;
  }

  // snappy - computed: false, optional: true, required: false
  private _snappy = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappyOutputReference(this, "snappy");
  public get snappy() {
    return this._snappy;
  }
  public putSnappy(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecSnappy) {
    this._snappy.internalValue = value;
  }
  public resetSnappy() {
    this._snappy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snappyInput() {
    return this._snappy.internalValue;
  }

  // xz - computed: false, optional: true, required: false
  private _xz = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXzOutputReference(this, "xz");
  public get xz() {
    return this._xz;
  }
  public putXz(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecXz) {
    this._xz.internalValue = value;
  }
  public resetXz() {
    this._xz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xzInput() {
    return this._xz.internalValue;
  }

  // zstandard - computed: false, optional: true, required: false
  private _zstandard = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandardOutputReference(this, "zstandard");
  public get zstandard() {
    return this._zstandard;
  }
  public putZstandard(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecZstandard) {
    this._zstandard.internalValue = value;
  }
  public resetZstandard() {
    this._zstandard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zstandardInput() {
    return this._zstandard.internalValue;
  }
}
export interface DestinationGcsConfigurationFormatAvroApacheAvro {
  /**
  * The compression algorithm used to compress data. Default to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_codec DestinationGcs#compression_codec}
  */
  readonly compressionCodec: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec;
  /**
  * Default: "Avro"; must be "Avro"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#format_type DestinationGcs#format_type}
  */
  readonly formatType?: string;
}

export function destinationGcsConfigurationFormatAvroApacheAvroToTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_codec: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecToTerraform(struct!.compressionCodec),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationGcsConfigurationFormatAvroApacheAvroToHclTerraform(struct?: DestinationGcsConfigurationFormatAvroApacheAvro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_codec: {
      value: destinationGcsConfigurationFormatAvroApacheAvroCompressionCodecToHclTerraform(struct!.compressionCodec),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec",
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

export class DestinationGcsConfigurationFormatAvroApacheAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatAvroApacheAvro | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionCodec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec?.internalValue;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatAvroApacheAvro | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionCodec.internalValue = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionCodec.internalValue = value.compressionCodec;
      this._formatType = value.formatType;
    }
  }

  // compression_codec - computed: false, optional: false, required: true
  private _compressionCodec = new DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodecOutputReference(this, "compression_codec");
  public get compressionCodec() {
    return this._compressionCodec;
  }
  public putCompressionCodec(value: DestinationGcsConfigurationFormatAvroApacheAvroCompressionCodec) {
    this._compressionCodec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec.internalValue;
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
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip {
  /**
  * Default: "GZIP"; must be "GZIP"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_type DestinationGcs#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToHclTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression {
  /**
  * Default: "No Compression"; must be "No Compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_type DestinationGcs#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToHclTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#gzip DestinationGcs#gzip}
  */
  readonly gzip?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#no_compression DestinationGcs#no_compression}
  */
  readonly noCompression?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression;
}

export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionToTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToTerraform(struct!.gzip),
    no_compression: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToTerraform(struct!.noCompression),
  }
}


export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionToHclTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip: {
      value: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToHclTerraform(struct!.gzip),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip",
    },
    no_compression: {
      value: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gzip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzip = this._gzip?.internalValue;
    }
    if (this._noCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCompression = this._noCompression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gzip.internalValue = undefined;
      this._noCompression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gzip.internalValue = value.gzip;
      this._noCompression.internalValue = value.noCompression;
    }
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip = new DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzipOutputReference(this, "gzip");
  public get gzip() {
    return this._gzip;
  }
  public putGzip(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionGzip) {
    this._gzip.internalValue = value;
  }
  public resetGzip() {
    this._gzip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip.internalValue;
  }

  // no_compression - computed: false, optional: true, required: false
  private _noCompression = new DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression) {
    this._noCompression.internalValue = value;
  }
  public resetNoCompression() {
    this._noCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionInput() {
    return this._noCompression.internalValue;
  }
}
export interface DestinationGcsConfigurationFormatCsvCommaSeparatedValues {
  /**
  * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".csv.gz").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression DestinationGcs#compression}
  */
  readonly compression?: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression;
  /**
  * Whether the input JSON data should be normalized (flattened) in the output CSV. Please refer to docs for details. Default: "No flattening"; must be one of ["No flattening", "Root level flattening"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#flattening DestinationGcs#flattening}
  */
  readonly flattening?: string;
  /**
  * Default: "CSV"; must be "CSV"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#format_type DestinationGcs#format_type}
  */
  readonly formatType?: string;
}

export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionToTerraform(struct!.compression),
    flattening: cdktf.stringToTerraform(struct!.flattening),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationGcsConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct?: DestinationGcsConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: destinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression",
    },
    flattening: {
      value: cdktf.stringToHclTerraform(struct!.flattening),
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

export class DestinationGcsConfigurationFormatCsvCommaSeparatedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._flattening !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattening = this._flattening;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression.internalValue = undefined;
      this._flattening = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression.internalValue = value.compression;
      this._flattening = value.flattening;
      this._formatType = value.formatType;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValuesCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // flattening - computed: true, optional: true, required: false
  private _flattening?: string; 
  public get flattening() {
    return this.getStringAttribute('flattening');
  }
  public set flattening(value: string) {
    this._flattening = value;
  }
  public resetFlattening() {
    this._flattening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatteningInput() {
    return this._flattening;
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
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip {
  /**
  * Default: "GZIP"; must be "GZIP"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_type DestinationGcs#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToHclTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression {
  /**
  * Default: "No Compression"; must be "No Compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_type DestinationGcs#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToHclTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#gzip DestinationGcs#gzip}
  */
  readonly gzip?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#no_compression DestinationGcs#no_compression}
  */
  readonly noCompression?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression;
}

export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToTerraform(struct!.gzip),
    no_compression: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToTerraform(struct!.noCompression),
  }
}


export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToHclTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip: {
      value: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToHclTerraform(struct!.gzip),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip",
    },
    no_compression: {
      value: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gzip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzip = this._gzip?.internalValue;
    }
    if (this._noCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCompression = this._noCompression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gzip.internalValue = undefined;
      this._noCompression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gzip.internalValue = value.gzip;
      this._noCompression.internalValue = value.noCompression;
    }
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip = new DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipOutputReference(this, "gzip");
  public get gzip() {
    return this._gzip;
  }
  public putGzip(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip) {
    this._gzip.internalValue = value;
  }
  public resetGzip() {
    this._gzip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip.internalValue;
  }

  // no_compression - computed: false, optional: true, required: false
  private _noCompression = new DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression) {
    this._noCompression.internalValue = value;
  }
  public resetNoCompression() {
    this._noCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionInput() {
    return this._noCompression.internalValue;
  }
}
export interface DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson {
  /**
  * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression DestinationGcs#compression}
  */
  readonly compression?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression;
  /**
  * Default: "JSONL"; must be "JSONL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#format_type DestinationGcs#format_type}
  */
  readonly formatType?: string;
}

export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToTerraform(struct!.compression),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression",
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

export class DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression.internalValue = undefined;
      this._formatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression.internalValue = value.compression;
      this._formatType = value.formatType;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
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
export interface DestinationGcsConfigurationFormatParquetColumnarStorage {
  /**
  * This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing. Default: 128 MB. Default: 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#block_size_mb DestinationGcs#block_size_mb}
  */
  readonly blockSizeMb?: number;
  /**
  * The compression algorithm used to compress data pages. Default: "UNCOMPRESSED"; must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "LZO", "BROTLI", "LZ4", "ZSTD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#compression_codec DestinationGcs#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Default: true. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#dictionary_encoding DestinationGcs#dictionary_encoding}
  */
  readonly dictionaryEncoding?: boolean | cdktf.IResolvable;
  /**
  * There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary. Default: 1024 KB. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#dictionary_page_size_kb DestinationGcs#dictionary_page_size_kb}
  */
  readonly dictionaryPageSizeKb?: number;
  /**
  * Default: "Parquet"; must be "Parquet"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#format_type DestinationGcs#format_type}
  */
  readonly formatType?: string;
  /**
  * Maximum size allowed as padding to align row groups. This is also the minimum size of a row group. Default: 8 MB. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#max_padding_size_mb DestinationGcs#max_padding_size_mb}
  */
  readonly maxPaddingSizeMb?: number;
  /**
  * The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate. Default: 1024 KB. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#page_size_kb DestinationGcs#page_size_kb}
  */
  readonly pageSizeKb?: number;
}

export function destinationGcsConfigurationFormatParquetColumnarStorageToTerraform(struct?: DestinationGcsConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_mb: cdktf.numberToTerraform(struct!.blockSizeMb),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    dictionary_encoding: cdktf.booleanToTerraform(struct!.dictionaryEncoding),
    dictionary_page_size_kb: cdktf.numberToTerraform(struct!.dictionaryPageSizeKb),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    max_padding_size_mb: cdktf.numberToTerraform(struct!.maxPaddingSizeMb),
    page_size_kb: cdktf.numberToTerraform(struct!.pageSizeKb),
  }
}


export function destinationGcsConfigurationFormatParquetColumnarStorageToHclTerraform(struct?: DestinationGcsConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.blockSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_encoding: {
      value: cdktf.booleanToHclTerraform(struct!.dictionaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dictionary_page_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.dictionaryPageSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_padding_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxPaddingSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.pageSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatParquetColumnarStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeMb = this._blockSizeMb;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._dictionaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryEncoding = this._dictionaryEncoding;
    }
    if (this._dictionaryPageSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryPageSizeKb = this._dictionaryPageSizeKb;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._maxPaddingSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPaddingSizeMb = this._maxPaddingSizeMb;
    }
    if (this._pageSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSizeKb = this._pageSizeKb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockSizeMb = undefined;
      this._compressionCodec = undefined;
      this._dictionaryEncoding = undefined;
      this._dictionaryPageSizeKb = undefined;
      this._formatType = undefined;
      this._maxPaddingSizeMb = undefined;
      this._pageSizeKb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockSizeMb = value.blockSizeMb;
      this._compressionCodec = value.compressionCodec;
      this._dictionaryEncoding = value.dictionaryEncoding;
      this._dictionaryPageSizeKb = value.dictionaryPageSizeKb;
      this._formatType = value.formatType;
      this._maxPaddingSizeMb = value.maxPaddingSizeMb;
      this._pageSizeKb = value.pageSizeKb;
    }
  }

  // block_size_mb - computed: true, optional: true, required: false
  private _blockSizeMb?: number; 
  public get blockSizeMb() {
    return this.getNumberAttribute('block_size_mb');
  }
  public set blockSizeMb(value: number) {
    this._blockSizeMb = value;
  }
  public resetBlockSizeMb() {
    this._blockSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeMbInput() {
    return this._blockSizeMb;
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

  // dictionary_encoding - computed: true, optional: true, required: false
  private _dictionaryEncoding?: boolean | cdktf.IResolvable; 
  public get dictionaryEncoding() {
    return this.getBooleanAttribute('dictionary_encoding');
  }
  public set dictionaryEncoding(value: boolean | cdktf.IResolvable) {
    this._dictionaryEncoding = value;
  }
  public resetDictionaryEncoding() {
    this._dictionaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryEncodingInput() {
    return this._dictionaryEncoding;
  }

  // dictionary_page_size_kb - computed: true, optional: true, required: false
  private _dictionaryPageSizeKb?: number; 
  public get dictionaryPageSizeKb() {
    return this.getNumberAttribute('dictionary_page_size_kb');
  }
  public set dictionaryPageSizeKb(value: number) {
    this._dictionaryPageSizeKb = value;
  }
  public resetDictionaryPageSizeKb() {
    this._dictionaryPageSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryPageSizeKbInput() {
    return this._dictionaryPageSizeKb;
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

  // max_padding_size_mb - computed: true, optional: true, required: false
  private _maxPaddingSizeMb?: number; 
  public get maxPaddingSizeMb() {
    return this.getNumberAttribute('max_padding_size_mb');
  }
  public set maxPaddingSizeMb(value: number) {
    this._maxPaddingSizeMb = value;
  }
  public resetMaxPaddingSizeMb() {
    this._maxPaddingSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPaddingSizeMbInput() {
    return this._maxPaddingSizeMb;
  }

  // page_size_kb - computed: true, optional: true, required: false
  private _pageSizeKb?: number; 
  public get pageSizeKb() {
    return this.getNumberAttribute('page_size_kb');
  }
  public set pageSizeKb(value: number) {
    this._pageSizeKb = value;
  }
  public resetPageSizeKb() {
    this._pageSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeKbInput() {
    return this._pageSizeKb;
  }
}
export interface DestinationGcsConfigurationFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#avro_apache_avro DestinationGcs#avro_apache_avro}
  */
  readonly avroApacheAvro?: DestinationGcsConfigurationFormatAvroApacheAvro;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#csv_comma_separated_values DestinationGcs#csv_comma_separated_values}
  */
  readonly csvCommaSeparatedValues?: DestinationGcsConfigurationFormatCsvCommaSeparatedValues;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#json_lines_newline_delimited_json DestinationGcs#json_lines_newline_delimited_json}
  */
  readonly jsonLinesNewlineDelimitedJson?: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#parquet_columnar_storage DestinationGcs#parquet_columnar_storage}
  */
  readonly parquetColumnarStorage?: DestinationGcsConfigurationFormatParquetColumnarStorage;
}

export function destinationGcsConfigurationFormatToTerraform(struct?: DestinationGcsConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_apache_avro: destinationGcsConfigurationFormatAvroApacheAvroToTerraform(struct!.avroApacheAvro),
    csv_comma_separated_values: destinationGcsConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct!.csvCommaSeparatedValues),
    json_lines_newline_delimited_json: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct!.jsonLinesNewlineDelimitedJson),
    parquet_columnar_storage: destinationGcsConfigurationFormatParquetColumnarStorageToTerraform(struct!.parquetColumnarStorage),
  }
}


export function destinationGcsConfigurationFormatToHclTerraform(struct?: DestinationGcsConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_apache_avro: {
      value: destinationGcsConfigurationFormatAvroApacheAvroToHclTerraform(struct!.avroApacheAvro),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatAvroApacheAvro",
    },
    csv_comma_separated_values: {
      value: destinationGcsConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct!.csvCommaSeparatedValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatCsvCommaSeparatedValues",
    },
    json_lines_newline_delimited_json: {
      value: destinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct!.jsonLinesNewlineDelimitedJson),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson",
    },
    parquet_columnar_storage: {
      value: destinationGcsConfigurationFormatParquetColumnarStorageToHclTerraform(struct!.parquetColumnarStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormatParquetColumnarStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfigurationFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroApacheAvro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroApacheAvro = this._avroApacheAvro?.internalValue;
    }
    if (this._csvCommaSeparatedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvCommaSeparatedValues = this._csvCommaSeparatedValues?.internalValue;
    }
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

  public set internalValue(value: DestinationGcsConfigurationFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroApacheAvro.internalValue = undefined;
      this._csvCommaSeparatedValues.internalValue = undefined;
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
      this._avroApacheAvro.internalValue = value.avroApacheAvro;
      this._csvCommaSeparatedValues.internalValue = value.csvCommaSeparatedValues;
      this._jsonLinesNewlineDelimitedJson.internalValue = value.jsonLinesNewlineDelimitedJson;
      this._parquetColumnarStorage.internalValue = value.parquetColumnarStorage;
    }
  }

  // avro_apache_avro - computed: false, optional: true, required: false
  private _avroApacheAvro = new DestinationGcsConfigurationFormatAvroApacheAvroOutputReference(this, "avro_apache_avro");
  public get avroApacheAvro() {
    return this._avroApacheAvro;
  }
  public putAvroApacheAvro(value: DestinationGcsConfigurationFormatAvroApacheAvro) {
    this._avroApacheAvro.internalValue = value;
  }
  public resetAvroApacheAvro() {
    this._avroApacheAvro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroApacheAvroInput() {
    return this._avroApacheAvro.internalValue;
  }

  // csv_comma_separated_values - computed: false, optional: true, required: false
  private _csvCommaSeparatedValues = new DestinationGcsConfigurationFormatCsvCommaSeparatedValuesOutputReference(this, "csv_comma_separated_values");
  public get csvCommaSeparatedValues() {
    return this._csvCommaSeparatedValues;
  }
  public putCsvCommaSeparatedValues(value: DestinationGcsConfigurationFormatCsvCommaSeparatedValues) {
    this._csvCommaSeparatedValues.internalValue = value;
  }
  public resetCsvCommaSeparatedValues() {
    this._csvCommaSeparatedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvCommaSeparatedValuesInput() {
    return this._csvCommaSeparatedValues.internalValue;
  }

  // json_lines_newline_delimited_json - computed: false, optional: true, required: false
  private _jsonLinesNewlineDelimitedJson = new DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference(this, "json_lines_newline_delimited_json");
  public get jsonLinesNewlineDelimitedJson() {
    return this._jsonLinesNewlineDelimitedJson;
  }
  public putJsonLinesNewlineDelimitedJson(value: DestinationGcsConfigurationFormatJsonLinesNewlineDelimitedJson) {
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
  private _parquetColumnarStorage = new DestinationGcsConfigurationFormatParquetColumnarStorageOutputReference(this, "parquet_columnar_storage");
  public get parquetColumnarStorage() {
    return this._parquetColumnarStorage;
  }
  public putParquetColumnarStorage(value: DestinationGcsConfigurationFormatParquetColumnarStorage) {
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
export interface DestinationGcsConfiguration {
  /**
  * An HMAC key is a type of credential and can be associated with a service account or a user account in Cloud Storage. Read more <a href="https://cloud.google.com/storage/docs/authentication/hmackeys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#credential DestinationGcs#credential}
  */
  readonly credential: DestinationGcsConfigurationCredential;
  /**
  * Output data format. One of the following formats must be selected - <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-avro#advantages_of_avro">AVRO</a> format, <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-parquet#parquet_schemas">PARQUET</a> format, <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv#loading_csv_data_into_a_table">CSV</a> format, or <a href="https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-json#loading_json_data_into_a_new_table">JSONL</a> format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#format DestinationGcs#format}
  */
  readonly format: DestinationGcsConfigurationFormat;
  /**
  * You can find the bucket name in the App Engine Admin console Application Settings page, under the label Google Cloud Storage Bucket. Read more <a href="https://cloud.google.com/storage/docs/naming-buckets">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#gcs_bucket_name DestinationGcs#gcs_bucket_name}
  */
  readonly gcsBucketName: string;
  /**
  * GCS Bucket Path string Subdirectory under the above bucket to sync the data into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#gcs_bucket_path DestinationGcs#gcs_bucket_path}
  */
  readonly gcsBucketPath: string;
  /**
  * Select a Region of the GCS Bucket. Read more <a href="https://cloud.google.com/storage/docs/locations">here</a>. Default: "us"; must be one of ["northamerica-northeast1", "northamerica-northeast2", "us-central1", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4", "southamerica-east1", "southamerica-west1", "europe-central2", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-south2", "asia-southeast1", "asia-southeast2", "australia-southeast1", "australia-southeast2", "asia", "eu", "us", "asia1", "eur4", "nam4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#gcs_bucket_region DestinationGcs#gcs_bucket_region}
  */
  readonly gcsBucketRegion?: string;
}

export function destinationGcsConfigurationToTerraform(struct?: DestinationGcsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: destinationGcsConfigurationCredentialToTerraform(struct!.credential),
    format: destinationGcsConfigurationFormatToTerraform(struct!.format),
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    gcs_bucket_path: cdktf.stringToTerraform(struct!.gcsBucketPath),
    gcs_bucket_region: cdktf.stringToTerraform(struct!.gcsBucketRegion),
  }
}


export function destinationGcsConfigurationToHclTerraform(struct?: DestinationGcsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: destinationGcsConfigurationCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationCredential",
    },
    format: {
      value: destinationGcsConfigurationFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationGcsConfigurationFormat",
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
    gcs_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationGcsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._gcsBucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketPath = this._gcsBucketPath;
    }
    if (this._gcsBucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketRegion = this._gcsBucketRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential.internalValue = undefined;
      this._format.internalValue = undefined;
      this._gcsBucketName = undefined;
      this._gcsBucketPath = undefined;
      this._gcsBucketRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential.internalValue = value.credential;
      this._format.internalValue = value.format;
      this._gcsBucketName = value.gcsBucketName;
      this._gcsBucketPath = value.gcsBucketPath;
      this._gcsBucketRegion = value.gcsBucketRegion;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new DestinationGcsConfigurationCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DestinationGcsConfigurationCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // format - computed: false, optional: false, required: true
  private _format = new DestinationGcsConfigurationFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DestinationGcsConfigurationFormat) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
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

  // gcs_bucket_region - computed: true, optional: true, required: false
  private _gcsBucketRegion?: string; 
  public get gcsBucketRegion() {
    return this.getStringAttribute('gcs_bucket_region');
  }
  public set gcsBucketRegion(value: string) {
    this._gcsBucketRegion = value;
  }
  public resetGcsBucketRegion() {
    this._gcsBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketRegionInput() {
    return this._gcsBucketRegion;
  }
}
export interface DestinationGcsResourceAllocationDefault {
}

export function destinationGcsResourceAllocationDefaultToTerraform(struct?: DestinationGcsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationGcsResourceAllocationDefaultToHclTerraform(struct?: DestinationGcsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationGcsResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsResourceAllocationDefault | undefined) {
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
export interface DestinationGcsResourceAllocationJobSpecificResourceRequirements {
}

export function destinationGcsResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationGcsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationGcsResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationGcsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationGcsResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationGcsResourceAllocationJobSpecific {
}

export function destinationGcsResourceAllocationJobSpecificToTerraform(struct?: DestinationGcsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationGcsResourceAllocationJobSpecificToHclTerraform(struct?: DestinationGcsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationGcsResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationGcsResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationGcsResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationGcsResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationGcsResourceAllocationJobSpecificOutputReference {
    return new DestinationGcsResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationGcsResourceAllocation {
}

export function destinationGcsResourceAllocationToTerraform(struct?: DestinationGcsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationGcsResourceAllocationToHclTerraform(struct?: DestinationGcsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationGcsResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationGcsResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationGcsResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationGcsResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationGcsResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs airbyte_destination_gcs}
*/
export class DestinationGcs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_gcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationGcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationGcs to import
  * @param importFromId The id of the existing DestinationGcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationGcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_gcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_gcs airbyte_destination_gcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationGcsConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationGcsConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_gcs',
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
  private _configuration = new DestinationGcsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationGcsConfiguration) {
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
  private _resourceAllocation = new DestinationGcsResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationGcsConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationGcsConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationGcsConfiguration",
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
