// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#configuration DestinationS3#configuration}
  */
  readonly configuration: DestinationS3Configuration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#definition_id DestinationS3#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#name DestinationS3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#workspace_id DestinationS3#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "bzip2"; must be "bzip2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "Deflate"; must be "Deflate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_level DestinationS3#compression_level}
  */
  readonly compressionLevel: number;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // compression_level - computed: false, optional: false, required: true
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "no compression"; must be "no compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "snappy"; must be "snappy"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._codec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "xz"; must be "xz"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_level DestinationS3#compression_level}
  */
  readonly compressionLevel: number;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // compression_level - computed: false, optional: false, required: true
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "zstandard"; must be "zstandard"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#codec DestinationS3#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_level DestinationS3#compression_level}
  */
  readonly compressionLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#include_checksum DestinationS3#include_checksum}
  */
  readonly includeChecksum: boolean | cdktf.IResolvable;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    codec: cdktf.stringToTerraform(struct!.codec),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
    include_checksum: cdktf.booleanToTerraform(struct!.includeChecksum),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._codec = value.codec;
      this._compressionLevel = value.compressionLevel;
      this._includeChecksum = value.includeChecksum;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // compression_level - computed: false, optional: false, required: true
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // include_checksum - computed: false, optional: false, required: true
  private _includeChecksum?: boolean | cdktf.IResolvable; 
  public get includeChecksum() {
    return this.getBooleanAttribute('include_checksum');
  }
  public set includeChecksum(value: boolean | cdktf.IResolvable) {
    this._includeChecksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChecksumInput() {
    return this._includeChecksum;
  }
}
export interface DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#bzip2 DestinationS3#bzip2}
  */
  readonly bzip2?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#deflate DestinationS3#deflate}
  */
  readonly deflate?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#no_compression DestinationS3#no_compression}
  */
  readonly noCompression?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#snappy DestinationS3#snappy}
  */
  readonly snappy?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#xz DestinationS3#xz}
  */
  readonly xz?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#zstandard DestinationS3#zstandard}
  */
  readonly zstandard?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard;
}

export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bzip2: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToTerraform(struct!.bzip2),
    deflate: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateToTerraform(struct!.deflate),
    no_compression: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToTerraform(struct!.noCompression),
    snappy: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyToTerraform(struct!.snappy),
    xz: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzToTerraform(struct!.xz),
    zstandard: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardToTerraform(struct!.zstandard),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bzip2: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2ToHclTerraform(struct!.bzip2),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2",
    },
    deflate: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateToHclTerraform(struct!.deflate),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate",
    },
    no_compression: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression",
    },
    snappy: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyToHclTerraform(struct!.snappy),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy",
    },
    xz: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzToHclTerraform(struct!.xz),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz",
    },
    zstandard: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardToHclTerraform(struct!.zstandard),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec | cdktf.IResolvable | undefined) {
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
  private _bzip2 = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2OutputReference(this, "bzip2");
  public get bzip2() {
    return this._bzip2;
  }
  public putBzip2(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecBzip2) {
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
  private _deflate = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflateOutputReference(this, "deflate");
  public get deflate() {
    return this._deflate;
  }
  public putDeflate(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecDeflate) {
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
  private _noCompression = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecNoCompression) {
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
  private _snappy = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappyOutputReference(this, "snappy");
  public get snappy() {
    return this._snappy;
  }
  public putSnappy(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecSnappy) {
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
  private _xz = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXzOutputReference(this, "xz");
  public get xz() {
    return this._xz;
  }
  public putXz(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecXz) {
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
  private _zstandard = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandardOutputReference(this, "zstandard");
  public get zstandard() {
    return this._zstandard;
  }
  public putZstandard(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecZstandard) {
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
export interface DestinationS3ConfigurationFormatAvroApacheAvro {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The compression algorithm used to compress data. Default to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_codec DestinationS3#compression_codec}
  */
  readonly compressionCodec: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec;
  /**
  * Default: "Avro"; must be "Avro"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#format_type DestinationS3#format_type}
  */
  readonly formatType?: string;
}

export function destinationS3ConfigurationFormatAvroApacheAvroToTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression_codec: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecToTerraform(struct!.compressionCodec),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationS3ConfigurationFormatAvroApacheAvroToHclTerraform(struct?: DestinationS3ConfigurationFormatAvroApacheAvro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: destinationS3ConfigurationFormatAvroApacheAvroCompressionCodecToHclTerraform(struct!.compressionCodec),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec",
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

export class DestinationS3ConfigurationFormatAvroApacheAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatAvroApacheAvro | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatAvroApacheAvro | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._compressionCodec.internalValue = value.compressionCodec;
      this._formatType = value.formatType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // compression_codec - computed: false, optional: false, required: true
  private _compressionCodec = new DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodecOutputReference(this, "compression_codec");
  public get compressionCodec() {
    return this._compressionCodec;
  }
  public putCompressionCodec(value: DestinationS3ConfigurationFormatAvroApacheAvroCompressionCodec) {
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
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "GZIP"; must be "GZIP"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_type DestinationS3#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToHclTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._compressionType = value.compressionType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "No Compression"; must be "No Compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_type DestinationS3#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToHclTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._compressionType = value.compressionType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#gzip DestinationS3#gzip}
  */
  readonly gzip?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#no_compression DestinationS3#no_compression}
  */
  readonly noCompression?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression;
}

export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionToTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToTerraform(struct!.gzip),
    no_compression: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToTerraform(struct!.noCompression),
  }
}


export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionToHclTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip: {
      value: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipToHclTerraform(struct!.gzip),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip",
    },
    no_compression: {
      value: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression | cdktf.IResolvable | undefined) {
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
  private _gzip = new DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzipOutputReference(this, "gzip");
  public get gzip() {
    return this._gzip;
  }
  public putGzip(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionGzip) {
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
  private _noCompression = new DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionNoCompression) {
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
export interface DestinationS3ConfigurationFormatCsvCommaSeparatedValues {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression DestinationS3#compression}
  */
  readonly compression?: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression;
  /**
  * Default: "No flattening"; must be one of ["No flattening", "Root level flattening"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#flattening DestinationS3#flattening}
  */
  readonly flattening?: string;
  /**
  * Default: "CSV"; must be "CSV"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#format_type DestinationS3#format_type}
  */
  readonly formatType?: string;
}

export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionToTerraform(struct!.compression),
    flattening: cdktf.stringToTerraform(struct!.flattening),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationS3ConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct?: DestinationS3ConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: destinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression",
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

export class DestinationS3ConfigurationFormatCsvCommaSeparatedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._compression.internalValue = value.compression;
      this._flattening = value.flattening;
      this._formatType = value.formatType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValuesCompression) {
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
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "GZIP"; must be "GZIP"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_type DestinationS3#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToHclTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._compressionType = value.compressionType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "No Compression"; must be "No Compression"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_type DestinationS3#compression_type}
  */
  readonly compressionType?: string;
}

export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
  }
}


export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToHclTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._compressionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._compressionType = value.compressionType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#gzip DestinationS3#gzip}
  */
  readonly gzip?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#no_compression DestinationS3#no_compression}
  */
  readonly noCompression?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression;
}

export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToTerraform(struct!.gzip),
    no_compression: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToTerraform(struct!.noCompression),
  }
}


export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToHclTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip: {
      value: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipToHclTerraform(struct!.gzip),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip",
    },
    no_compression: {
      value: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionToHclTerraform(struct!.noCompression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression | cdktf.IResolvable | undefined) {
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
  private _gzip = new DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzipOutputReference(this, "gzip");
  public get gzip() {
    return this._gzip;
  }
  public putGzip(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionGzip) {
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
  private _noCompression = new DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompressionOutputReference(this, "no_compression");
  public get noCompression() {
    return this._noCompression;
  }
  public putNoCompression(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionNoCompression) {
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
export interface DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Whether the output files should be compressed. If compression is selected, the output filename will have an extra extension (GZIP: ".jsonl.gz").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression DestinationS3#compression}
  */
  readonly compression?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression;
  /**
  * Default: "No flattening"; must be one of ["No flattening", "Root level flattening"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#flattening DestinationS3#flattening}
  */
  readonly flattening?: string;
  /**
  * Default: "JSONL"; must be "JSONL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#format_type DestinationS3#format_type}
  */
  readonly formatType?: string;
}

export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    compression: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToTerraform(struct!.compression),
    flattening: cdktf.stringToTerraform(struct!.flattening),
    format_type: cdktf.stringToTerraform(struct!.formatType),
  }
}


export function destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression",
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

export class DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._compression.internalValue = value.compression;
      this._flattening = value.flattening;
      this._formatType = value.formatType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonCompression) {
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
export interface DestinationS3ConfigurationFormatParquetColumnarStorage {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#additional_properties DestinationS3#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing. Default: 128 MB. Default: 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#block_size_mb DestinationS3#block_size_mb}
  */
  readonly blockSizeMb?: number;
  /**
  * The compression algorithm used to compress data pages. Default: "UNCOMPRESSED"; must be one of ["UNCOMPRESSED", "SNAPPY", "GZIP", "LZO", "BROTLI", "LZ4", "ZSTD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#compression_codec DestinationS3#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#dictionary_encoding DestinationS3#dictionary_encoding}
  */
  readonly dictionaryEncoding?: boolean | cdktf.IResolvable;
  /**
  * There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary. Default: 1024 KB. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#dictionary_page_size_kb DestinationS3#dictionary_page_size_kb}
  */
  readonly dictionaryPageSizeKb?: number;
  /**
  * Default: "Parquet"; must be "Parquet"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#format_type DestinationS3#format_type}
  */
  readonly formatType?: string;
  /**
  * Maximum size allowed as padding to align row groups. This is also the minimum size of a row group. Default: 8 MB. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#max_padding_size_mb DestinationS3#max_padding_size_mb}
  */
  readonly maxPaddingSizeMb?: number;
  /**
  * The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate. Default: 1024 KB. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#page_size_kb DestinationS3#page_size_kb}
  */
  readonly pageSizeKb?: number;
}

export function destinationS3ConfigurationFormatParquetColumnarStorageToTerraform(struct?: DestinationS3ConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    block_size_mb: cdktf.numberToTerraform(struct!.blockSizeMb),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    dictionary_encoding: cdktf.booleanToTerraform(struct!.dictionaryEncoding),
    dictionary_page_size_kb: cdktf.numberToTerraform(struct!.dictionaryPageSizeKb),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    max_padding_size_mb: cdktf.numberToTerraform(struct!.maxPaddingSizeMb),
    page_size_kb: cdktf.numberToTerraform(struct!.pageSizeKb),
  }
}


export function destinationS3ConfigurationFormatParquetColumnarStorageToHclTerraform(struct?: DestinationS3ConfigurationFormatParquetColumnarStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DestinationS3ConfigurationFormatParquetColumnarStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
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

  public set internalValue(value: DestinationS3ConfigurationFormatParquetColumnarStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._blockSizeMb = value.blockSizeMb;
      this._compressionCodec = value.compressionCodec;
      this._dictionaryEncoding = value.dictionaryEncoding;
      this._dictionaryPageSizeKb = value.dictionaryPageSizeKb;
      this._formatType = value.formatType;
      this._maxPaddingSizeMb = value.maxPaddingSizeMb;
      this._pageSizeKb = value.pageSizeKb;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // dictionary_encoding - computed: false, optional: true, required: false
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
export interface DestinationS3ConfigurationFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#avro_apache_avro DestinationS3#avro_apache_avro}
  */
  readonly avroApacheAvro?: DestinationS3ConfigurationFormatAvroApacheAvro;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#csv_comma_separated_values DestinationS3#csv_comma_separated_values}
  */
  readonly csvCommaSeparatedValues?: DestinationS3ConfigurationFormatCsvCommaSeparatedValues;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#json_lines_newline_delimited_json DestinationS3#json_lines_newline_delimited_json}
  */
  readonly jsonLinesNewlineDelimitedJson?: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#parquet_columnar_storage DestinationS3#parquet_columnar_storage}
  */
  readonly parquetColumnarStorage?: DestinationS3ConfigurationFormatParquetColumnarStorage;
}

export function destinationS3ConfigurationFormatToTerraform(struct?: DestinationS3ConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_apache_avro: destinationS3ConfigurationFormatAvroApacheAvroToTerraform(struct!.avroApacheAvro),
    csv_comma_separated_values: destinationS3ConfigurationFormatCsvCommaSeparatedValuesToTerraform(struct!.csvCommaSeparatedValues),
    json_lines_newline_delimited_json: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonToTerraform(struct!.jsonLinesNewlineDelimitedJson),
    parquet_columnar_storage: destinationS3ConfigurationFormatParquetColumnarStorageToTerraform(struct!.parquetColumnarStorage),
  }
}


export function destinationS3ConfigurationFormatToHclTerraform(struct?: DestinationS3ConfigurationFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_apache_avro: {
      value: destinationS3ConfigurationFormatAvroApacheAvroToHclTerraform(struct!.avroApacheAvro),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatAvroApacheAvro",
    },
    csv_comma_separated_values: {
      value: destinationS3ConfigurationFormatCsvCommaSeparatedValuesToHclTerraform(struct!.csvCommaSeparatedValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatCsvCommaSeparatedValues",
    },
    json_lines_newline_delimited_json: {
      value: destinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonToHclTerraform(struct!.jsonLinesNewlineDelimitedJson),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson",
    },
    parquet_columnar_storage: {
      value: destinationS3ConfigurationFormatParquetColumnarStorageToHclTerraform(struct!.parquetColumnarStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormatParquetColumnarStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3ConfigurationFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ConfigurationFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationS3ConfigurationFormat | cdktf.IResolvable | undefined) {
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
  private _avroApacheAvro = new DestinationS3ConfigurationFormatAvroApacheAvroOutputReference(this, "avro_apache_avro");
  public get avroApacheAvro() {
    return this._avroApacheAvro;
  }
  public putAvroApacheAvro(value: DestinationS3ConfigurationFormatAvroApacheAvro) {
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
  private _csvCommaSeparatedValues = new DestinationS3ConfigurationFormatCsvCommaSeparatedValuesOutputReference(this, "csv_comma_separated_values");
  public get csvCommaSeparatedValues() {
    return this._csvCommaSeparatedValues;
  }
  public putCsvCommaSeparatedValues(value: DestinationS3ConfigurationFormatCsvCommaSeparatedValues) {
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
  private _jsonLinesNewlineDelimitedJson = new DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJsonOutputReference(this, "json_lines_newline_delimited_json");
  public get jsonLinesNewlineDelimitedJson() {
    return this._jsonLinesNewlineDelimitedJson;
  }
  public putJsonLinesNewlineDelimitedJson(value: DestinationS3ConfigurationFormatJsonLinesNewlineDelimitedJson) {
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
  private _parquetColumnarStorage = new DestinationS3ConfigurationFormatParquetColumnarStorageOutputReference(this, "parquet_columnar_storage");
  public get parquetColumnarStorage() {
    return this._parquetColumnarStorage;
  }
  public putParquetColumnarStorage(value: DestinationS3ConfigurationFormatParquetColumnarStorage) {
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
export interface DestinationS3Configuration {
  /**
  * The access key ID to access the S3 bucket. Airbyte requires Read and Write permissions to the given bucket. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#access_key_id DestinationS3#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Pattern to match file names in the bucket directory. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#file_name_pattern DestinationS3#file_name_pattern}
  */
  readonly fileNamePattern?: string;
  /**
  * Format of the data output. See <a href="https://docs.airbyte.com/integrations/destinations/s3/#supported-output-schema">here</a> for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#format DestinationS3#format}
  */
  readonly format: DestinationS3ConfigurationFormat;
  /**
  * The ARN of the AWS role to assume. Only usable in Airbyte Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#role_arn DestinationS3#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The name of the S3 bucket. Read more <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#s3_bucket_name DestinationS3#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Directory under the S3 bucket where data will be written. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=to%20format%20the-,bucket%20path,-%3A">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#s3_bucket_path DestinationS3#s3_bucket_path}
  */
  readonly s3BucketPath: string;
  /**
  * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. Default: ""; must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#s3_bucket_region DestinationS3#s3_bucket_region}
  */
  readonly s3BucketRegion?: string;
  /**
  * Your S3 endpoint url. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#:~:text=Service%20endpoints-,Amazon%20S3%20endpoints,-When%20you%20use">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#s3_endpoint DestinationS3#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * Format string on how data will be organized inside the bucket directory. Read more <a href="https://docs.airbyte.com/integrations/destinations/s3#:~:text=The%20full%20path%20of%20the%20output%20data%20with%20the%20default%20S3%20path%20format">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#s3_path_format DestinationS3#s3_path_format}
  */
  readonly s3PathFormat?: string;
  /**
  * The corresponding secret to the access key ID. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#secret_access_key DestinationS3#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function destinationS3ConfigurationToTerraform(struct?: DestinationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    file_name_pattern: cdktf.stringToTerraform(struct!.fileNamePattern),
    format: destinationS3ConfigurationFormatToTerraform(struct!.format),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_bucket_path: cdktf.stringToTerraform(struct!.s3BucketPath),
    s3_bucket_region: cdktf.stringToTerraform(struct!.s3BucketRegion),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
    s3_path_format: cdktf.stringToTerraform(struct!.s3PathFormat),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function destinationS3ConfigurationToHclTerraform(struct?: DestinationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.fileNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: destinationS3ConfigurationFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3ConfigurationFormat",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path_format: {
      value: cdktf.stringToHclTerraform(struct!.s3PathFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._fileNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNamePattern = this._fileNamePattern;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3BucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketPath = this._s3BucketPath;
    }
    if (this._s3BucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRegion = this._s3BucketRegion;
    }
    if (this._s3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Endpoint = this._s3Endpoint;
    }
    if (this._s3PathFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3PathFormat = this._s3PathFormat;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._fileNamePattern = undefined;
      this._format.internalValue = undefined;
      this._roleArn = undefined;
      this._s3BucketName = undefined;
      this._s3BucketPath = undefined;
      this._s3BucketRegion = undefined;
      this._s3Endpoint = undefined;
      this._s3PathFormat = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._fileNamePattern = value.fileNamePattern;
      this._format.internalValue = value.format;
      this._roleArn = value.roleArn;
      this._s3BucketName = value.s3BucketName;
      this._s3BucketPath = value.s3BucketPath;
      this._s3BucketRegion = value.s3BucketRegion;
      this._s3Endpoint = value.s3Endpoint;
      this._s3PathFormat = value.s3PathFormat;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // file_name_pattern - computed: false, optional: true, required: false
  private _fileNamePattern?: string; 
  public get fileNamePattern() {
    return this.getStringAttribute('file_name_pattern');
  }
  public set fileNamePattern(value: string) {
    this._fileNamePattern = value;
  }
  public resetFileNamePattern() {
    this._fileNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNamePatternInput() {
    return this._fileNamePattern;
  }

  // format - computed: false, optional: false, required: true
  private _format = new DestinationS3ConfigurationFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DestinationS3ConfigurationFormat) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_bucket_path - computed: false, optional: false, required: true
  private _s3BucketPath?: string; 
  public get s3BucketPath() {
    return this.getStringAttribute('s3_bucket_path');
  }
  public set s3BucketPath(value: string) {
    this._s3BucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketPathInput() {
    return this._s3BucketPath;
  }

  // s3_bucket_region - computed: true, optional: true, required: false
  private _s3BucketRegion?: string; 
  public get s3BucketRegion() {
    return this.getStringAttribute('s3_bucket_region');
  }
  public set s3BucketRegion(value: string) {
    this._s3BucketRegion = value;
  }
  public resetS3BucketRegion() {
    this._s3BucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRegionInput() {
    return this._s3BucketRegion;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this.getStringAttribute('s3_endpoint');
  }
  public set s3Endpoint(value: string) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
  }

  // s3_path_format - computed: false, optional: true, required: false
  private _s3PathFormat?: string; 
  public get s3PathFormat() {
    return this.getStringAttribute('s3_path_format');
  }
  public set s3PathFormat(value: string) {
    this._s3PathFormat = value;
  }
  public resetS3PathFormat() {
    this._s3PathFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathFormatInput() {
    return this._s3PathFormat;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface DestinationS3ResourceAllocationDefault {
}

export function destinationS3ResourceAllocationDefaultToTerraform(struct?: DestinationS3ResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3ResourceAllocationDefaultToHclTerraform(struct?: DestinationS3ResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3ResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ResourceAllocationDefault | undefined) {
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
export interface DestinationS3ResourceAllocationJobSpecificResourceRequirements {
}

export function destinationS3ResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationS3ResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3ResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationS3ResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3ResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationS3ResourceAllocationJobSpecific {
}

export function destinationS3ResourceAllocationJobSpecificToTerraform(struct?: DestinationS3ResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3ResourceAllocationJobSpecificToHclTerraform(struct?: DestinationS3ResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3ResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationS3ResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationS3ResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationS3ResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationS3ResourceAllocationJobSpecificOutputReference {
    return new DestinationS3ResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationS3ResourceAllocation {
}

export function destinationS3ResourceAllocationToTerraform(struct?: DestinationS3ResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3ResourceAllocationToHclTerraform(struct?: DestinationS3ResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3ResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3ResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3ResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationS3ResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationS3ResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3 airbyte_destination_s3}
*/
export class DestinationS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationS3 to import
  * @param importFromId The id of the existing DestinationS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3 airbyte_destination_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationS3Config
  */
  public constructor(scope: Construct, id: string, config: DestinationS3Config) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_s3',
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
  private _configuration = new DestinationS3ConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationS3Configuration) {
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
  private _resourceAllocation = new DestinationS3ResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationS3ConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationS3ConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationS3Configuration",
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
