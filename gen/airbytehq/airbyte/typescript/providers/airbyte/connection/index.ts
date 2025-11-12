// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of configured stream options for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#configurations Connection#configurations}
  */
  readonly configurations?: ConnectionConfigurations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#data_residency Connection#data_residency}
  */
  readonly dataResidency?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#destination_id Connection#destination_id}
  */
  readonly destinationId: string;
  /**
  * Optional name of the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#name Connection#name}
  */
  readonly name?: string;
  /**
  * Define the location where the data will be stored in the destination. Default: "destination"; must be one of ["source", "destination", "custom_format"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#namespace_definition Connection#namespace_definition}
  */
  readonly namespaceDefinition?: string;
  /**
  * Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#namespace_format Connection#namespace_format}
  */
  readonly namespaceFormat?: string;
  /**
  * Set how Airbyte handles syncs when it detects a non-breaking schema change in the source. Default: "ignore"; must be one of ["ignore", "disable_connection", "propagate_columns", "propagate_fully"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#non_breaking_schema_updates_behavior Connection#non_breaking_schema_updates_behavior}
  */
  readonly nonBreakingSchemaUpdatesBehavior?: string;
  /**
  * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_” causes “projects” => “airbyte_projects”). Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#prefix Connection#prefix}
  */
  readonly prefix?: string;
  /**
  * schedule for when the the connection should run, per the schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#schedule Connection#schedule}
  */
  readonly schedule?: ConnectionSchedule;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#source_id Connection#source_id}
  */
  readonly sourceId: string;
  /**
  * must be one of ["active", "inactive", "deprecated"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#tags Connection#tags}
  */
  readonly tags?: ConnectionTags[] | cdktf.IResolvable;
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes {
  /**
  * Not Null; must be one of ["RSA", "AES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#algorithm Connection#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#field_name_suffix Connection#field_name_suffix}
  */
  readonly fieldNameSuffix?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#key Connection#key}
  */
  readonly key?: string;
  /**
  * Not Null; must be one of ["CBC", "CFB", "OFB", "CTR", "GCM", "ECB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#mode Connection#mode}
  */
  readonly mode?: string;
  /**
  * Not Null; must be one of ["NoPadding", "PKCS5Padding"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#padding Connection#padding}
  */
  readonly padding?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#target_field Connection#target_field}
  */
  readonly targetField?: string;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    field_name_suffix: cdktf.stringToTerraform(struct!.fieldNameSuffix),
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    padding: cdktf.stringToTerraform(struct!.padding),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.fieldNameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._fieldNameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNameSuffix = this._fieldNameSuffix;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._fieldNameSuffix = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._padding = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._fieldNameSuffix = value.fieldNameSuffix;
      this._key = value.key;
      this._mode = value.mode;
      this._padding = value.padding;
      this._targetField = value.targetField;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // field_name_suffix - computed: true, optional: true, required: false
  private _fieldNameSuffix?: string; 
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }
  public set fieldNameSuffix(value: string) {
    this._fieldNameSuffix = value;
  }
  public resetFieldNameSuffix() {
    this._fieldNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameSuffixInput() {
    return this._fieldNameSuffix;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa {
  /**
  * Not Null; must be one of ["RSA", "AES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#algorithm Connection#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#field_name_suffix Connection#field_name_suffix}
  */
  readonly fieldNameSuffix?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#public_key Connection#public_key}
  */
  readonly publicKey?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#target_field Connection#target_field}
  */
  readonly targetField?: string;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    field_name_suffix: cdktf.stringToTerraform(struct!.fieldNameSuffix),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.fieldNameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._fieldNameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNameSuffix = this._fieldNameSuffix;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._fieldNameSuffix = undefined;
      this._publicKey = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._fieldNameSuffix = value.fieldNameSuffix;
      this._publicKey = value.publicKey;
      this._targetField = value.targetField;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // field_name_suffix - computed: true, optional: true, required: false
  private _fieldNameSuffix?: string; 
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }
  public set fieldNameSuffix(value: string) {
    this._fieldNameSuffix = value;
  }
  public resetFieldNameSuffix() {
    this._fieldNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameSuffixInput() {
    return this._fieldNameSuffix;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#aes Connection#aes}
  */
  readonly aes?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#rsa Connection#rsa}
  */
  readonly rsa?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aes: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToTerraform(struct!.aes),
    rsa: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToTerraform(struct!.rsa),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationEncryptionToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aes: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToHclTerraform(struct!.aes),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes",
    },
    rsa: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToHclTerraform(struct!.rsa),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aes = this._aes?.internalValue;
    }
    if (this._rsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsa = this._rsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aes.internalValue = undefined;
      this._rsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aes.internalValue = value.aes;
      this._rsa.internalValue = value.rsa;
    }
  }

  // aes - computed: true, optional: true, required: false
  private _aes = new ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference(this, "aes");
  public get aes() {
    return this._aes;
  }
  public putAes(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes) {
    this._aes.internalValue = value;
  }
  public resetAes() {
    this._aes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesInput() {
    return this._aes.internalValue;
  }

  // rsa - computed: true, optional: true, required: false
  private _rsa = new ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
  public putRsa(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa) {
    this._rsa.internalValue = value;
  }
  public resetRsa() {
    this._rsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa.internalValue;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming {
  /**
  * The new name for the field after renaming. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#new_field_name Connection#new_field_name}
  */
  readonly newFieldName?: string;
  /**
  * The current name of the field to rename. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#original_field_name Connection#original_field_name}
  */
  readonly originalFieldName?: string;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_field_name: cdktf.stringToTerraform(struct!.newFieldName),
    original_field_name: cdktf.stringToTerraform(struct!.originalFieldName),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_field_name: {
      value: cdktf.stringToHclTerraform(struct!.newFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_field_name: {
      value: cdktf.stringToHclTerraform(struct!.originalFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFieldName = this._newFieldName;
    }
    if (this._originalFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalFieldName = this._originalFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newFieldName = undefined;
      this._originalFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newFieldName = value.newFieldName;
      this._originalFieldName = value.originalFieldName;
    }
  }

  // new_field_name - computed: true, optional: true, required: false
  private _newFieldName?: string; 
  public get newFieldName() {
    return this.getStringAttribute('new_field_name');
  }
  public set newFieldName(value: string) {
    this._newFieldName = value;
  }
  public resetNewFieldName() {
    this._newFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFieldNameInput() {
    return this._newFieldName;
  }

  // original_field_name - computed: true, optional: true, required: false
  private _originalFieldName?: string; 
  public get originalFieldName() {
    return this.getStringAttribute('original_field_name');
  }
  public set originalFieldName(value: string) {
    this._originalFieldName = value;
  }
  public resetOriginalFieldName() {
    this._originalFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFieldNameInput() {
    return this._originalFieldName;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationHashing {
  /**
  * The suffix to append to the field name after hashing. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#field_name_suffix Connection#field_name_suffix}
  */
  readonly fieldNameSuffix?: string;
  /**
  * The hashing algorithm to use. Not Null; must be one of ["MD2", "MD5", "SHA-1", "SHA-224", "SHA-256", "SHA-384", "SHA-512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#method Connection#method}
  */
  readonly method?: string;
  /**
  * The name of the field to be hashed. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#target_field Connection#target_field}
  */
  readonly targetField?: string;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationHashingToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationHashing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name_suffix: cdktf.stringToTerraform(struct!.fieldNameSuffix),
    method: cdktf.stringToTerraform(struct!.method),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationHashingToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationHashing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.fieldNameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationHashingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationHashing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNameSuffix = this._fieldNameSuffix;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationHashing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldNameSuffix = undefined;
      this._method = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldNameSuffix = value.fieldNameSuffix;
      this._method = value.method;
      this._targetField = value.targetField;
    }
  }

  // field_name_suffix - computed: true, optional: true, required: false
  private _fieldNameSuffix?: string; 
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }
  public set fieldNameSuffix(value: string) {
    this._fieldNameSuffix = value;
  }
  public resetFieldNameSuffix() {
    this._fieldNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameSuffixInput() {
    return this._fieldNameSuffix;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // target_field - computed: true, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering {
  /**
  * Not Null; Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#conditions Connection#conditions}
  */
  readonly conditions?: string;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.stringToTerraform(struct!.conditions),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.stringToHclTerraform(struct!.conditions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions = value.conditions;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface ConnectionConfigurationsStreamsMappersMapperConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#encryption Connection#encryption}
  */
  readonly encryption?: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#field_renaming Connection#field_renaming}
  */
  readonly fieldRenaming?: ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#hashing Connection#hashing}
  */
  readonly hashing?: ConnectionConfigurationsStreamsMappersMapperConfigurationHashing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#row_filtering Connection#row_filtering}
  */
  readonly rowFiltering?: ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering;
}

export function connectionConfigurationsStreamsMappersMapperConfigurationToTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionToTerraform(struct!.encryption),
    field_renaming: connectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToTerraform(struct!.fieldRenaming),
    hashing: connectionConfigurationsStreamsMappersMapperConfigurationHashingToTerraform(struct!.hashing),
    row_filtering: connectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToTerraform(struct!.rowFiltering),
  }
}


export function connectionConfigurationsStreamsMappersMapperConfigurationToHclTerraform(struct?: ConnectionConfigurationsStreamsMappersMapperConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption",
    },
    field_renaming: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToHclTerraform(struct!.fieldRenaming),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming",
    },
    hashing: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationHashingToHclTerraform(struct!.hashing),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationHashing",
    },
    row_filtering: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToHclTerraform(struct!.rowFiltering),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersMapperConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurationsStreamsMappersMapperConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._fieldRenaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRenaming = this._fieldRenaming?.internalValue;
    }
    if (this._hashing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashing = this._hashing?.internalValue;
    }
    if (this._rowFiltering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFiltering = this._rowFiltering?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappersMapperConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._fieldRenaming.internalValue = undefined;
      this._hashing.internalValue = undefined;
      this._rowFiltering.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._fieldRenaming.internalValue = value.fieldRenaming;
      this._hashing.internalValue = value.hashing;
      this._rowFiltering.internalValue = value.rowFiltering;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new ConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: ConnectionConfigurationsStreamsMappersMapperConfigurationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // field_renaming - computed: true, optional: true, required: false
  private _fieldRenaming = new ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference(this, "field_renaming");
  public get fieldRenaming() {
    return this._fieldRenaming;
  }
  public putFieldRenaming(value: ConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming) {
    this._fieldRenaming.internalValue = value;
  }
  public resetFieldRenaming() {
    this._fieldRenaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRenamingInput() {
    return this._fieldRenaming.internalValue;
  }

  // hashing - computed: true, optional: true, required: false
  private _hashing = new ConnectionConfigurationsStreamsMappersMapperConfigurationHashingOutputReference(this, "hashing");
  public get hashing() {
    return this._hashing;
  }
  public putHashing(value: ConnectionConfigurationsStreamsMappersMapperConfigurationHashing) {
    this._hashing.internalValue = value;
  }
  public resetHashing() {
    this._hashing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingInput() {
    return this._hashing.internalValue;
  }

  // row_filtering - computed: true, optional: true, required: false
  private _rowFiltering = new ConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference(this, "row_filtering");
  public get rowFiltering() {
    return this._rowFiltering;
  }
  public putRowFiltering(value: ConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering) {
    this._rowFiltering.internalValue = value;
  }
  public resetRowFiltering() {
    this._rowFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilteringInput() {
    return this._rowFiltering.internalValue;
  }
}
export interface ConnectionConfigurationsStreamsMappers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The values required to configure the mapper. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#mapper_configuration Connection#mapper_configuration}
  */
  readonly mapperConfiguration?: ConnectionConfigurationsStreamsMappersMapperConfiguration;
  /**
  * Not Null; must be one of ["hashing", "field-renaming", "row-filtering", "encryption"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#type Connection#type}
  */
  readonly type?: string;
}

export function connectionConfigurationsStreamsMappersToTerraform(struct?: ConnectionConfigurationsStreamsMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    mapper_configuration: connectionConfigurationsStreamsMappersMapperConfigurationToTerraform(struct!.mapperConfiguration),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectionConfigurationsStreamsMappersToHclTerraform(struct?: ConnectionConfigurationsStreamsMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapper_configuration: {
      value: connectionConfigurationsStreamsMappersMapperConfigurationToHclTerraform(struct!.mapperConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionConfigurationsStreamsMappersMapperConfiguration",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionConfigurationsStreamsMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mapperConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapperConfiguration = this._mapperConfiguration?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mapperConfiguration.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mapperConfiguration.internalValue = value.mapperConfiguration;
      this._type = value.type;
    }
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

  // mapper_configuration - computed: true, optional: true, required: false
  private _mapperConfiguration = new ConnectionConfigurationsStreamsMappersMapperConfigurationOutputReference(this, "mapper_configuration");
  public get mapperConfiguration() {
    return this._mapperConfiguration;
  }
  public putMapperConfiguration(value: ConnectionConfigurationsStreamsMappersMapperConfiguration) {
    this._mapperConfiguration.internalValue = value;
  }
  public resetMapperConfiguration() {
    this._mapperConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapperConfigurationInput() {
    return this._mapperConfiguration.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ConnectionConfigurationsStreamsMappersList extends cdktf.ComplexList {
  public internalValue? : ConnectionConfigurationsStreamsMappers[] | cdktf.IResolvable

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
  public get(index: number): ConnectionConfigurationsStreamsMappersOutputReference {
    return new ConnectionConfigurationsStreamsMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionConfigurationsStreamsSelectedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#field_path Connection#field_path}
  */
  readonly fieldPath?: string[];
}

export function connectionConfigurationsStreamsSelectedFieldsToTerraform(struct?: ConnectionConfigurationsStreamsSelectedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldPath),
  }
}


export function connectionConfigurationsStreamsSelectedFieldsToHclTerraform(struct?: ConnectionConfigurationsStreamsSelectedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsSelectedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionConfigurationsStreamsSelectedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreamsSelectedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
    }
  }

  // field_path - computed: true, optional: true, required: false
  private _fieldPath?: string[]; 
  public get fieldPath() {
    return this.getListAttribute('field_path');
  }
  public set fieldPath(value: string[]) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}

export class ConnectionConfigurationsStreamsSelectedFieldsList extends cdktf.ComplexList {
  public internalValue? : ConnectionConfigurationsStreamsSelectedFields[] | cdktf.IResolvable

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
  public get(index: number): ConnectionConfigurationsStreamsSelectedFieldsOutputReference {
    return new ConnectionConfigurationsStreamsSelectedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionConfigurationsStreams {
  /**
  * Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental` unless there is a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#cursor_field Connection#cursor_field}
  */
  readonly cursorField?: string[];
  /**
  * The name of the destination object that this stream will be written to, used for data activation destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#destination_object_name Connection#destination_object_name}
  */
  readonly destinationObjectName?: string;
  /**
  * Whether to move raw files from the source to the destination during the sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#include_files Connection#include_files}
  */
  readonly includeFiles?: boolean | cdktf.IResolvable;
  /**
  * Mappers that should be applied to the stream before writing to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#mappers Connection#mappers}
  */
  readonly mappers?: ConnectionConfigurationsStreamsMappers[] | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#name Connection#name}
  */
  readonly name?: string;
  /**
  * Namespace of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#namespace Connection#namespace}
  */
  readonly namespace?: string;
  /**
  * Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup` unless it is already supplied by the source schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#primary_key Connection#primary_key}
  */
  readonly primaryKey?: string[][] | cdktf.IResolvable;
  /**
  * Paths to the fields that will be included in the configured catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#selected_fields Connection#selected_fields}
  */
  readonly selectedFields?: ConnectionConfigurationsStreamsSelectedFields[] | cdktf.IResolvable;
  /**
  * must be one of ["full_refresh_overwrite", "full_refresh_overwrite_deduped", "full_refresh_append", "incremental_append", "incremental_deduped_history"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#sync_mode Connection#sync_mode}
  */
  readonly syncMode?: string;
}

export function connectionConfigurationsStreamsToTerraform(struct?: ConnectionConfigurationsStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cursor_field: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cursorField),
    destination_object_name: cdktf.stringToTerraform(struct!.destinationObjectName),
    include_files: cdktf.booleanToTerraform(struct!.includeFiles),
    mappers: cdktf.listMapper(connectionConfigurationsStreamsMappersToTerraform, false)(struct!.mappers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    primary_key: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.primaryKey),
    selected_fields: cdktf.listMapper(connectionConfigurationsStreamsSelectedFieldsToTerraform, false)(struct!.selectedFields),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
  }
}


export function connectionConfigurationsStreamsToHclTerraform(struct?: ConnectionConfigurationsStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cursor_field: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cursorField),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_object_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_files: {
      value: cdktf.booleanToHclTerraform(struct!.includeFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mappers: {
      value: cdktf.listMapperHcl(connectionConfigurationsStreamsMappersToHclTerraform, false)(struct!.mappers),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionConfigurationsStreamsMappersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    selected_fields: {
      value: cdktf.listMapperHcl(connectionConfigurationsStreamsSelectedFieldsToHclTerraform, false)(struct!.selectedFields),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionConfigurationsStreamsSelectedFieldsList",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionConfigurationsStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cursorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorField = this._cursorField;
    }
    if (this._destinationObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectName = this._destinationObjectName;
    }
    if (this._includeFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFiles = this._includeFiles;
    }
    if (this._mappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappers = this._mappers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._selectedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedFields = this._selectedFields?.internalValue;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurationsStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cursorField = undefined;
      this._destinationObjectName = undefined;
      this._includeFiles = undefined;
      this._mappers.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._primaryKey = undefined;
      this._selectedFields.internalValue = undefined;
      this._syncMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cursorField = value.cursorField;
      this._destinationObjectName = value.destinationObjectName;
      this._includeFiles = value.includeFiles;
      this._mappers.internalValue = value.mappers;
      this._name = value.name;
      this._namespace = value.namespace;
      this._primaryKey = value.primaryKey;
      this._selectedFields.internalValue = value.selectedFields;
      this._syncMode = value.syncMode;
    }
  }

  // cursor_field - computed: true, optional: true, required: false
  private _cursorField?: string[]; 
  public get cursorField() {
    return this.getListAttribute('cursor_field');
  }
  public set cursorField(value: string[]) {
    this._cursorField = value;
  }
  public resetCursorField() {
    this._cursorField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorFieldInput() {
    return this._cursorField;
  }

  // destination_object_name - computed: true, optional: true, required: false
  private _destinationObjectName?: string; 
  public get destinationObjectName() {
    return this.getStringAttribute('destination_object_name');
  }
  public set destinationObjectName(value: string) {
    this._destinationObjectName = value;
  }
  public resetDestinationObjectName() {
    this._destinationObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectNameInput() {
    return this._destinationObjectName;
  }

  // include_files - computed: true, optional: true, required: false
  private _includeFiles?: boolean | cdktf.IResolvable; 
  public get includeFiles() {
    return this.getBooleanAttribute('include_files');
  }
  public set includeFiles(value: boolean | cdktf.IResolvable) {
    this._includeFiles = value;
  }
  public resetIncludeFiles() {
    this._includeFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilesInput() {
    return this._includeFiles;
  }

  // mappers - computed: true, optional: true, required: false
  private _mappers = new ConnectionConfigurationsStreamsMappersList(this, "mappers", false);
  public get mappers() {
    return this._mappers;
  }
  public putMappers(value: ConnectionConfigurationsStreamsMappers[] | cdktf.IResolvable) {
    this._mappers.internalValue = value;
  }
  public resetMappers() {
    this._mappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappersInput() {
    return this._mappers.internalValue;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string[][] | cdktf.IResolvable; 
  public get primaryKey() {
    return this.interpolationForAttribute('primary_key');
  }
  public set primaryKey(value: string[][] | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // selected_fields - computed: true, optional: true, required: false
  private _selectedFields = new ConnectionConfigurationsStreamsSelectedFieldsList(this, "selected_fields", false);
  public get selectedFields() {
    return this._selectedFields;
  }
  public putSelectedFields(value: ConnectionConfigurationsStreamsSelectedFields[] | cdktf.IResolvable) {
    this._selectedFields.internalValue = value;
  }
  public resetSelectedFields() {
    this._selectedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsInput() {
    return this._selectedFields.internalValue;
  }

  // sync_mode - computed: true, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }
}

export class ConnectionConfigurationsStreamsList extends cdktf.ComplexList {
  public internalValue? : ConnectionConfigurationsStreams[] | cdktf.IResolvable

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
  public get(index: number): ConnectionConfigurationsStreamsOutputReference {
    return new ConnectionConfigurationsStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#streams Connection#streams}
  */
  readonly streams?: ConnectionConfigurationsStreams[] | cdktf.IResolvable;
}

export function connectionConfigurationsToTerraform(struct?: ConnectionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    streams: cdktf.listMapper(connectionConfigurationsStreamsToTerraform, false)(struct!.streams),
  }
}


export function connectionConfigurationsToHclTerraform(struct?: ConnectionConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    streams: {
      value: cdktf.listMapperHcl(connectionConfigurationsStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectionConfigurationsStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streams.internalValue = value.streams;
    }
  }

  // streams - computed: true, optional: true, required: false
  private _streams = new ConnectionConfigurationsStreamsList(this, "streams", true);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: ConnectionConfigurationsStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  public resetStreams() {
    this._streams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }
}
export interface ConnectionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#cron_expression Connection#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Not Null; must be one of ["manual", "cron"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#schedule_type Connection#schedule_type}
  */
  readonly scheduleType?: string;
}

export function connectionScheduleToTerraform(struct?: ConnectionSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
  }
}


export function connectionScheduleToHclTerraform(struct?: ConnectionSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._scheduleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._scheduleType = value.scheduleType;
    }
  }

  // basic_timing - computed: true, optional: false, required: false
  public get basicTiming() {
    return this.getStringAttribute('basic_timing');
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }
}
export interface ConnectionTags {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#color Connection#color}
  */
  readonly color?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#name Connection#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#tag_id Connection#tag_id}
  */
  readonly tagId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#workspace_id Connection#workspace_id}
  */
  readonly workspaceId?: string;
}

export function connectionTagsToTerraform(struct?: ConnectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function connectionTagsToHclTerraform(struct?: ConnectionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._name = undefined;
      this._tagId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._name = value.name;
      this._tagId = value.tagId;
      this._workspaceId = value.workspaceId;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class ConnectionTagsList extends cdktf.ComplexList {
  public internalValue? : ConnectionTags[] | cdktf.IResolvable

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
  public get(index: number): ConnectionTagsOutputReference {
    return new ConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection airbyte_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/connection airbyte_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_connection',
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
    this._configurations.internalValue = config.configurations;
    this._dataResidency = config.dataResidency;
    this._destinationId = config.destinationId;
    this._name = config.name;
    this._namespaceDefinition = config.namespaceDefinition;
    this._namespaceFormat = config.namespaceFormat;
    this._nonBreakingSchemaUpdatesBehavior = config.nonBreakingSchemaUpdatesBehavior;
    this._prefix = config.prefix;
    this._schedule.internalValue = config.schedule;
    this._sourceId = config.sourceId;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurations - computed: true, optional: true, required: false
  private _configurations = new ConnectionConfigurationsOutputReference(this, "configurations");
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: ConnectionConfigurations) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // data_residency - computed: false, optional: true, required: false
  private _dataResidency?: string; 
  public get dataResidency() {
    return this.getStringAttribute('data_residency');
  }
  public set dataResidency(value: string) {
    this._dataResidency = value;
  }
  public resetDataResidency() {
    this._dataResidency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataResidencyInput() {
    return this._dataResidency;
  }

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // namespace_definition - computed: true, optional: true, required: false
  private _namespaceDefinition?: string; 
  public get namespaceDefinition() {
    return this.getStringAttribute('namespace_definition');
  }
  public set namespaceDefinition(value: string) {
    this._namespaceDefinition = value;
  }
  public resetNamespaceDefinition() {
    this._namespaceDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceDefinitionInput() {
    return this._namespaceDefinition;
  }

  // namespace_format - computed: true, optional: true, required: false
  private _namespaceFormat?: string; 
  public get namespaceFormat() {
    return this.getStringAttribute('namespace_format');
  }
  public set namespaceFormat(value: string) {
    this._namespaceFormat = value;
  }
  public resetNamespaceFormat() {
    this._namespaceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceFormatInput() {
    return this._namespaceFormat;
  }

  // non_breaking_schema_updates_behavior - computed: true, optional: true, required: false
  private _nonBreakingSchemaUpdatesBehavior?: string; 
  public get nonBreakingSchemaUpdatesBehavior() {
    return this.getStringAttribute('non_breaking_schema_updates_behavior');
  }
  public set nonBreakingSchemaUpdatesBehavior(value: string) {
    this._nonBreakingSchemaUpdatesBehavior = value;
  }
  public resetNonBreakingSchemaUpdatesBehavior() {
    this._nonBreakingSchemaUpdatesBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBreakingSchemaUpdatesBehaviorInput() {
    return this._nonBreakingSchemaUpdatesBehavior;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new ConnectionScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ConnectionSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectionTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configurations: connectionConfigurationsToTerraform(this._configurations.internalValue),
      data_residency: cdktf.stringToTerraform(this._dataResidency),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      name: cdktf.stringToTerraform(this._name),
      namespace_definition: cdktf.stringToTerraform(this._namespaceDefinition),
      namespace_format: cdktf.stringToTerraform(this._namespaceFormat),
      non_breaking_schema_updates_behavior: cdktf.stringToTerraform(this._nonBreakingSchemaUpdatesBehavior),
      prefix: cdktf.stringToTerraform(this._prefix),
      schedule: connectionScheduleToTerraform(this._schedule.internalValue),
      source_id: cdktf.stringToTerraform(this._sourceId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(connectionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configurations: {
        value: connectionConfigurationsToHclTerraform(this._configurations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionConfigurations",
      },
      data_residency: {
        value: cdktf.stringToHclTerraform(this._dataResidency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
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
      namespace_definition: {
        value: cdktf.stringToHclTerraform(this._namespaceDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_format: {
        value: cdktf.stringToHclTerraform(this._namespaceFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_breaking_schema_updates_behavior: {
        value: cdktf.stringToHclTerraform(this._nonBreakingSchemaUpdatesBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: connectionScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionSchedule",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(connectionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
