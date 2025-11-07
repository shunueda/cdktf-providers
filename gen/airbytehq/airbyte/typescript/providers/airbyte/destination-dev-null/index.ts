// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationDevNullConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#configuration DestinationDevNull#configuration}
  */
  readonly configuration: DestinationDevNullConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#definition_id DestinationDevNull#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#name DestinationDevNull#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#workspace_id DestinationDevNull#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationDevNullConfigurationTestDestinationFailing {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Number of messages after which to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#num_messages DestinationDevNull#num_messages}
  */
  readonly numMessages: number;
  /**
  * Default: "FAILING"; must be "FAILING"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#test_destination_type DestinationDevNull#test_destination_type}
  */
  readonly testDestinationType?: string;
}

export function destinationDevNullConfigurationTestDestinationFailingToTerraform(struct?: DestinationDevNullConfigurationTestDestinationFailing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    num_messages: cdktf.numberToTerraform(struct!.numMessages),
    test_destination_type: cdktf.stringToTerraform(struct!.testDestinationType),
  }
}


export function destinationDevNullConfigurationTestDestinationFailingToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationFailing | cdktf.IResolvable): any {
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
    num_messages: {
      value: cdktf.numberToHclTerraform(struct!.numMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.testDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationFailingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationFailing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._numMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMessages = this._numMessages;
    }
    if (this._testDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testDestinationType = this._testDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationFailing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._numMessages = undefined;
      this._testDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._numMessages = value.numMessages;
      this._testDestinationType = value.testDestinationType;
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

  // num_messages - computed: false, optional: false, required: true
  private _numMessages?: number; 
  public get numMessages() {
    return this.getNumberAttribute('num_messages');
  }
  public set numMessages(value: number) {
    this._numMessages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numMessagesInput() {
    return this._numMessages;
  }

  // test_destination_type - computed: true, optional: true, required: false
  private _testDestinationType?: string; 
  public get testDestinationType() {
    return this.getStringAttribute('test_destination_type');
  }
  public set testDestinationType(value: string) {
    this._testDestinationType = value;
  }
  public resetTestDestinationType() {
    this._testDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDestinationTypeInput() {
    return this._testDestinationType;
  }
}
export interface DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "EveryNth"; must be "EveryNth"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#logging_type DestinationDevNull#logging_type}
  */
  readonly loggingType?: string;
  /**
  * Number of entries to log. This destination is for testing only. So it won't make sense to log infinitely. The maximum is 1,000 entries. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#max_entry_count DestinationDevNull#max_entry_count}
  */
  readonly maxEntryCount?: number;
  /**
  * The N-th entry to log for each stream. N starts from 1. For example, when N = 1, every entry is logged; when N = 2, every other entry is logged; when N = 3, one out of three entries is logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#nth_entry_to_log DestinationDevNull#nth_entry_to_log}
  */
  readonly nthEntryToLog: number;
}

export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryToTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    logging_type: cdktf.stringToTerraform(struct!.loggingType),
    max_entry_count: cdktf.numberToTerraform(struct!.maxEntryCount),
    nth_entry_to_log: cdktf.numberToTerraform(struct!.nthEntryToLog),
  }
}


export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry | cdktf.IResolvable): any {
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
    logging_type: {
      value: cdktf.stringToHclTerraform(struct!.loggingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nth_entry_to_log: {
      value: cdktf.numberToHclTerraform(struct!.nthEntryToLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._loggingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingType = this._loggingType;
    }
    if (this._maxEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntryCount = this._maxEntryCount;
    }
    if (this._nthEntryToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.nthEntryToLog = this._nthEntryToLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._loggingType = undefined;
      this._maxEntryCount = undefined;
      this._nthEntryToLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._loggingType = value.loggingType;
      this._maxEntryCount = value.maxEntryCount;
      this._nthEntryToLog = value.nthEntryToLog;
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

  // logging_type - computed: true, optional: true, required: false
  private _loggingType?: string; 
  public get loggingType() {
    return this.getStringAttribute('logging_type');
  }
  public set loggingType(value: string) {
    this._loggingType = value;
  }
  public resetLoggingType() {
    this._loggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTypeInput() {
    return this._loggingType;
  }

  // max_entry_count - computed: true, optional: true, required: false
  private _maxEntryCount?: number; 
  public get maxEntryCount() {
    return this.getNumberAttribute('max_entry_count');
  }
  public set maxEntryCount(value: number) {
    this._maxEntryCount = value;
  }
  public resetMaxEntryCount() {
    this._maxEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntryCountInput() {
    return this._maxEntryCount;
  }

  // nth_entry_to_log - computed: false, optional: false, required: true
  private _nthEntryToLog?: number; 
  public get nthEntryToLog() {
    return this.getNumberAttribute('nth_entry_to_log');
  }
  public set nthEntryToLog(value: number) {
    this._nthEntryToLog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nthEntryToLogInput() {
    return this._nthEntryToLog;
  }
}
export interface DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "FirstN"; must be "FirstN"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#logging_type DestinationDevNull#logging_type}
  */
  readonly loggingType?: string;
  /**
  * Number of entries to log. This destination is for testing only. So it won't make sense to log infinitely. The maximum is 1,000 entries. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#max_entry_count DestinationDevNull#max_entry_count}
  */
  readonly maxEntryCount?: number;
}

export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesToTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    logging_type: cdktf.stringToTerraform(struct!.loggingType),
    max_entry_count: cdktf.numberToTerraform(struct!.maxEntryCount),
  }
}


export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries | cdktf.IResolvable): any {
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
    logging_type: {
      value: cdktf.stringToHclTerraform(struct!.loggingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._loggingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingType = this._loggingType;
    }
    if (this._maxEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntryCount = this._maxEntryCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._loggingType = undefined;
      this._maxEntryCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._loggingType = value.loggingType;
      this._maxEntryCount = value.maxEntryCount;
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

  // logging_type - computed: true, optional: true, required: false
  private _loggingType?: string; 
  public get loggingType() {
    return this.getStringAttribute('logging_type');
  }
  public set loggingType(value: string) {
    this._loggingType = value;
  }
  public resetLoggingType() {
    this._loggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTypeInput() {
    return this._loggingType;
  }

  // max_entry_count - computed: true, optional: true, required: false
  private _maxEntryCount?: number; 
  public get maxEntryCount() {
    return this.getNumberAttribute('max_entry_count');
  }
  public set maxEntryCount(value: number) {
    this._maxEntryCount = value;
  }
  public resetMaxEntryCount() {
    this._maxEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntryCountInput() {
    return this._maxEntryCount;
  }
}
export interface DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "RandomSampling"; must be "RandomSampling"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#logging_type DestinationDevNull#logging_type}
  */
  readonly loggingType?: string;
  /**
  * Number of entries to log. This destination is for testing only. So it won't make sense to log infinitely. The maximum is 1,000 entries. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#max_entry_count DestinationDevNull#max_entry_count}
  */
  readonly maxEntryCount?: number;
  /**
  * A positive floating number smaller than 1. Default: 0.001
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#sampling_ratio DestinationDevNull#sampling_ratio}
  */
  readonly samplingRatio?: number;
  /**
  * When the seed is unspecified, the current time millis will be used as the seed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#seed DestinationDevNull#seed}
  */
  readonly seed?: number;
}

export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingToTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    logging_type: cdktf.stringToTerraform(struct!.loggingType),
    max_entry_count: cdktf.numberToTerraform(struct!.maxEntryCount),
    sampling_ratio: cdktf.numberToTerraform(struct!.samplingRatio),
    seed: cdktf.numberToTerraform(struct!.seed),
  }
}


export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling | cdktf.IResolvable): any {
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
    logging_type: {
      value: cdktf.stringToHclTerraform(struct!.loggingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_ratio: {
      value: cdktf.numberToHclTerraform(struct!.samplingRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed: {
      value: cdktf.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._loggingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingType = this._loggingType;
    }
    if (this._maxEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntryCount = this._maxEntryCount;
    }
    if (this._samplingRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRatio = this._samplingRatio;
    }
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._loggingType = undefined;
      this._maxEntryCount = undefined;
      this._samplingRatio = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._loggingType = value.loggingType;
      this._maxEntryCount = value.maxEntryCount;
      this._samplingRatio = value.samplingRatio;
      this._seed = value.seed;
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

  // logging_type - computed: true, optional: true, required: false
  private _loggingType?: string; 
  public get loggingType() {
    return this.getStringAttribute('logging_type');
  }
  public set loggingType(value: string) {
    this._loggingType = value;
  }
  public resetLoggingType() {
    this._loggingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTypeInput() {
    return this._loggingType;
  }

  // max_entry_count - computed: true, optional: true, required: false
  private _maxEntryCount?: number; 
  public get maxEntryCount() {
    return this.getNumberAttribute('max_entry_count');
  }
  public set maxEntryCount(value: number) {
    this._maxEntryCount = value;
  }
  public resetMaxEntryCount() {
    this._maxEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntryCountInput() {
    return this._maxEntryCount;
  }

  // sampling_ratio - computed: true, optional: true, required: false
  private _samplingRatio?: number; 
  public get samplingRatio() {
    return this.getNumberAttribute('sampling_ratio');
  }
  public set samplingRatio(value: number) {
    this._samplingRatio = value;
  }
  public resetSamplingRatio() {
    this._samplingRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRatioInput() {
    return this._samplingRatio;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig {
  /**
  * For each stream, log every N-th entry with a maximum cap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#every_n_th_entry DestinationDevNull#every_n_th_entry}
  */
  readonly everyNThEntry?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry;
  /**
  * Log first N entries per stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#first_n_entries DestinationDevNull#first_n_entries}
  */
  readonly firstNEntries?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries;
  /**
  * For each stream, randomly log a percentage of the entries with a maximum cap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#random_sampling DestinationDevNull#random_sampling}
  */
  readonly randomSampling?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling;
}

export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigToTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every_n_th_entry: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryToTerraform(struct!.everyNThEntry),
    first_n_entries: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesToTerraform(struct!.firstNEntries),
    random_sampling: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingToTerraform(struct!.randomSampling),
  }
}


export function destinationDevNullConfigurationTestDestinationLoggingLoggingConfigToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every_n_th_entry: {
      value: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryToHclTerraform(struct!.everyNThEntry),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry",
    },
    first_n_entries: {
      value: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesToHclTerraform(struct!.firstNEntries),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries",
    },
    random_sampling: {
      value: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingToHclTerraform(struct!.randomSampling),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._everyNThEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyNThEntry = this._everyNThEntry?.internalValue;
    }
    if (this._firstNEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstNEntries = this._firstNEntries?.internalValue;
    }
    if (this._randomSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSampling = this._randomSampling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._everyNThEntry.internalValue = undefined;
      this._firstNEntries.internalValue = undefined;
      this._randomSampling.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._everyNThEntry.internalValue = value.everyNThEntry;
      this._firstNEntries.internalValue = value.firstNEntries;
      this._randomSampling.internalValue = value.randomSampling;
    }
  }

  // every_n_th_entry - computed: false, optional: true, required: false
  private _everyNThEntry = new DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntryOutputReference(this, "every_n_th_entry");
  public get everyNThEntry() {
    return this._everyNThEntry;
  }
  public putEveryNThEntry(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigEveryNThEntry) {
    this._everyNThEntry.internalValue = value;
  }
  public resetEveryNThEntry() {
    this._everyNThEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyNThEntryInput() {
    return this._everyNThEntry.internalValue;
  }

  // first_n_entries - computed: false, optional: true, required: false
  private _firstNEntries = new DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntriesOutputReference(this, "first_n_entries");
  public get firstNEntries() {
    return this._firstNEntries;
  }
  public putFirstNEntries(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigFirstNEntries) {
    this._firstNEntries.internalValue = value;
  }
  public resetFirstNEntries() {
    this._firstNEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNEntriesInput() {
    return this._firstNEntries.internalValue;
  }

  // random_sampling - computed: false, optional: true, required: false
  private _randomSampling = new DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSamplingOutputReference(this, "random_sampling");
  public get randomSampling() {
    return this._randomSampling;
  }
  public putRandomSampling(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigRandomSampling) {
    this._randomSampling.internalValue = value;
  }
  public resetRandomSampling() {
    this._randomSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSamplingInput() {
    return this._randomSampling.internalValue;
  }
}
export interface DestinationDevNullConfigurationTestDestinationLogging {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Configurate how the messages are logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#logging_config DestinationDevNull#logging_config}
  */
  readonly loggingConfig: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig;
  /**
  * Default: "LOGGING"; must be "LOGGING"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#test_destination_type DestinationDevNull#test_destination_type}
  */
  readonly testDestinationType?: string;
}

export function destinationDevNullConfigurationTestDestinationLoggingToTerraform(struct?: DestinationDevNullConfigurationTestDestinationLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    logging_config: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigToTerraform(struct!.loggingConfig),
    test_destination_type: cdktf.stringToTerraform(struct!.testDestinationType),
  }
}


export function destinationDevNullConfigurationTestDestinationLoggingToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationLogging | cdktf.IResolvable): any {
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
    logging_config: {
      value: destinationDevNullConfigurationTestDestinationLoggingLoggingConfigToHclTerraform(struct!.loggingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig",
    },
    test_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.testDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    if (this._testDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testDestinationType = this._testDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._loggingConfig.internalValue = undefined;
      this._testDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._loggingConfig.internalValue = value.loggingConfig;
      this._testDestinationType = value.testDestinationType;
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

  // logging_config - computed: false, optional: false, required: true
  private _loggingConfig = new DestinationDevNullConfigurationTestDestinationLoggingLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: DestinationDevNullConfigurationTestDestinationLoggingLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // test_destination_type - computed: true, optional: true, required: false
  private _testDestinationType?: string; 
  public get testDestinationType() {
    return this.getStringAttribute('test_destination_type');
  }
  public set testDestinationType(value: string) {
    this._testDestinationType = value;
  }
  public resetTestDestinationType() {
    this._testDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDestinationTypeInput() {
    return this._testDestinationType;
  }
}
export interface DestinationDevNullConfigurationTestDestinationSilent {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "SILENT"; must be "SILENT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#test_destination_type DestinationDevNull#test_destination_type}
  */
  readonly testDestinationType?: string;
}

export function destinationDevNullConfigurationTestDestinationSilentToTerraform(struct?: DestinationDevNullConfigurationTestDestinationSilent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    test_destination_type: cdktf.stringToTerraform(struct!.testDestinationType),
  }
}


export function destinationDevNullConfigurationTestDestinationSilentToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationSilent | cdktf.IResolvable): any {
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
    test_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.testDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationSilentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationSilent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._testDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testDestinationType = this._testDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationSilent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._testDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._testDestinationType = value.testDestinationType;
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

  // test_destination_type - computed: true, optional: true, required: false
  private _testDestinationType?: string; 
  public get testDestinationType() {
    return this.getStringAttribute('test_destination_type');
  }
  public set testDestinationType(value: string) {
    this._testDestinationType = value;
  }
  public resetTestDestinationType() {
    this._testDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDestinationTypeInput() {
    return this._testDestinationType;
  }
}
export interface DestinationDevNullConfigurationTestDestinationThrottled {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#additional_properties DestinationDevNull#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The number of milliseconds to wait between each record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#millis_per_record DestinationDevNull#millis_per_record}
  */
  readonly millisPerRecord: number;
  /**
  * Default: "THROTTLED"; must be "THROTTLED"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#test_destination_type DestinationDevNull#test_destination_type}
  */
  readonly testDestinationType?: string;
}

export function destinationDevNullConfigurationTestDestinationThrottledToTerraform(struct?: DestinationDevNullConfigurationTestDestinationThrottled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    millis_per_record: cdktf.numberToTerraform(struct!.millisPerRecord),
    test_destination_type: cdktf.stringToTerraform(struct!.testDestinationType),
  }
}


export function destinationDevNullConfigurationTestDestinationThrottledToHclTerraform(struct?: DestinationDevNullConfigurationTestDestinationThrottled | cdktf.IResolvable): any {
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
    millis_per_record: {
      value: cdktf.numberToHclTerraform(struct!.millisPerRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.testDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationThrottledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestinationThrottled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._millisPerRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.millisPerRecord = this._millisPerRecord;
    }
    if (this._testDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testDestinationType = this._testDestinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestinationThrottled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._millisPerRecord = undefined;
      this._testDestinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._millisPerRecord = value.millisPerRecord;
      this._testDestinationType = value.testDestinationType;
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

  // millis_per_record - computed: false, optional: false, required: true
  private _millisPerRecord?: number; 
  public get millisPerRecord() {
    return this.getNumberAttribute('millis_per_record');
  }
  public set millisPerRecord(value: number) {
    this._millisPerRecord = value;
  }
  // Temporarily expose input value. Use with caution.
  public get millisPerRecordInput() {
    return this._millisPerRecord;
  }

  // test_destination_type - computed: true, optional: true, required: false
  private _testDestinationType?: string; 
  public get testDestinationType() {
    return this.getStringAttribute('test_destination_type');
  }
  public set testDestinationType(value: string) {
    this._testDestinationType = value;
  }
  public resetTestDestinationType() {
    this._testDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDestinationTypeInput() {
    return this._testDestinationType;
  }
}
export interface DestinationDevNullConfigurationTestDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#failing DestinationDevNull#failing}
  */
  readonly failing?: DestinationDevNullConfigurationTestDestinationFailing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#logging DestinationDevNull#logging}
  */
  readonly logging?: DestinationDevNullConfigurationTestDestinationLogging;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#silent DestinationDevNull#silent}
  */
  readonly silent?: DestinationDevNullConfigurationTestDestinationSilent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#throttled DestinationDevNull#throttled}
  */
  readonly throttled?: DestinationDevNullConfigurationTestDestinationThrottled;
}

export function destinationDevNullConfigurationTestDestinationToTerraform(struct?: DestinationDevNullConfigurationTestDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failing: destinationDevNullConfigurationTestDestinationFailingToTerraform(struct!.failing),
    logging: destinationDevNullConfigurationTestDestinationLoggingToTerraform(struct!.logging),
    silent: destinationDevNullConfigurationTestDestinationSilentToTerraform(struct!.silent),
    throttled: destinationDevNullConfigurationTestDestinationThrottledToTerraform(struct!.throttled),
  }
}


export function destinationDevNullConfigurationTestDestinationToHclTerraform(struct?: DestinationDevNullConfigurationTestDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failing: {
      value: destinationDevNullConfigurationTestDestinationFailingToHclTerraform(struct!.failing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationFailing",
    },
    logging: {
      value: destinationDevNullConfigurationTestDestinationLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationLogging",
    },
    silent: {
      value: destinationDevNullConfigurationTestDestinationSilentToHclTerraform(struct!.silent),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationSilent",
    },
    throttled: {
      value: destinationDevNullConfigurationTestDestinationThrottledToHclTerraform(struct!.throttled),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestinationThrottled",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationTestDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfigurationTestDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failing = this._failing?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._silent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.silent = this._silent?.internalValue;
    }
    if (this._throttled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttled = this._throttled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfigurationTestDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failing.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._silent.internalValue = undefined;
      this._throttled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failing.internalValue = value.failing;
      this._logging.internalValue = value.logging;
      this._silent.internalValue = value.silent;
      this._throttled.internalValue = value.throttled;
    }
  }

  // failing - computed: false, optional: true, required: false
  private _failing = new DestinationDevNullConfigurationTestDestinationFailingOutputReference(this, "failing");
  public get failing() {
    return this._failing;
  }
  public putFailing(value: DestinationDevNullConfigurationTestDestinationFailing) {
    this._failing.internalValue = value;
  }
  public resetFailing() {
    this._failing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failingInput() {
    return this._failing.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DestinationDevNullConfigurationTestDestinationLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DestinationDevNullConfigurationTestDestinationLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // silent - computed: false, optional: true, required: false
  private _silent = new DestinationDevNullConfigurationTestDestinationSilentOutputReference(this, "silent");
  public get silent() {
    return this._silent;
  }
  public putSilent(value: DestinationDevNullConfigurationTestDestinationSilent) {
    this._silent.internalValue = value;
  }
  public resetSilent() {
    this._silent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentInput() {
    return this._silent.internalValue;
  }

  // throttled - computed: false, optional: true, required: false
  private _throttled = new DestinationDevNullConfigurationTestDestinationThrottledOutputReference(this, "throttled");
  public get throttled() {
    return this._throttled;
  }
  public putThrottled(value: DestinationDevNullConfigurationTestDestinationThrottled) {
    this._throttled.internalValue = value;
  }
  public resetThrottled() {
    this._throttled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttledInput() {
    return this._throttled.internalValue;
  }
}
export interface DestinationDevNullConfiguration {
  /**
  * The type of destination to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#test_destination DestinationDevNull#test_destination}
  */
  readonly testDestination: DestinationDevNullConfigurationTestDestination;
}

export function destinationDevNullConfigurationToTerraform(struct?: DestinationDevNullConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_destination: destinationDevNullConfigurationTestDestinationToTerraform(struct!.testDestination),
  }
}


export function destinationDevNullConfigurationToHclTerraform(struct?: DestinationDevNullConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_destination: {
      value: destinationDevNullConfigurationTestDestinationToHclTerraform(struct!.testDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDevNullConfigurationTestDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDevNullConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testDestination = this._testDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testDestination.internalValue = value.testDestination;
    }
  }

  // test_destination - computed: false, optional: false, required: true
  private _testDestination = new DestinationDevNullConfigurationTestDestinationOutputReference(this, "test_destination");
  public get testDestination() {
    return this._testDestination;
  }
  public putTestDestination(value: DestinationDevNullConfigurationTestDestination) {
    this._testDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testDestinationInput() {
    return this._testDestination.internalValue;
  }
}
export interface DestinationDevNullResourceAllocationDefault {
}

export function destinationDevNullResourceAllocationDefaultToTerraform(struct?: DestinationDevNullResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDevNullResourceAllocationDefaultToHclTerraform(struct?: DestinationDevNullResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDevNullResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullResourceAllocationDefault | undefined) {
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
export interface DestinationDevNullResourceAllocationJobSpecificResourceRequirements {
}

export function destinationDevNullResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationDevNullResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDevNullResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationDevNullResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDevNullResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationDevNullResourceAllocationJobSpecific {
}

export function destinationDevNullResourceAllocationJobSpecificToTerraform(struct?: DestinationDevNullResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDevNullResourceAllocationJobSpecificToHclTerraform(struct?: DestinationDevNullResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDevNullResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationDevNullResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationDevNullResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationDevNullResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationDevNullResourceAllocationJobSpecificOutputReference {
    return new DestinationDevNullResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationDevNullResourceAllocation {
}

export function destinationDevNullResourceAllocationToTerraform(struct?: DestinationDevNullResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDevNullResourceAllocationToHclTerraform(struct?: DestinationDevNullResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDevNullResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDevNullResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDevNullResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationDevNullResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationDevNullResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null airbyte_destination_dev_null}
*/
export class DestinationDevNull extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_dev_null";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationDevNull resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationDevNull to import
  * @param importFromId The id of the existing DestinationDevNull that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationDevNull to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_dev_null", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_dev_null airbyte_destination_dev_null} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationDevNullConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationDevNullConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_dev_null',
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
  private _configuration = new DestinationDevNullConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationDevNullConfiguration) {
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
  private _resourceAllocation = new DestinationDevNullResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationDevNullConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationDevNullConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationDevNullConfiguration",
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
