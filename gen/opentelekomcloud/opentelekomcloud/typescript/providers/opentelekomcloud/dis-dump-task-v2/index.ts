// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisDumpTaskV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#action DisDumpTaskV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#destination DisDumpTaskV2#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#id DisDumpTaskV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#stream_name DisDumpTaskV2#stream_name}
  */
  readonly streamName: string;
  /**
  * obs_destination_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#obs_destination_descriptor DisDumpTaskV2#obs_destination_descriptor}
  */
  readonly obsDestinationDescriptor?: DisDumpTaskV2ObsDestinationDescriptor[] | cdktf.IResolvable;
  /**
  * obs_processing_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#obs_processing_schema DisDumpTaskV2#obs_processing_schema}
  */
  readonly obsProcessingSchema?: DisDumpTaskV2ObsProcessingSchema[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#timeouts DisDumpTaskV2#timeouts}
  */
  readonly timeouts?: DisDumpTaskV2Timeouts;
}
export interface DisDumpTaskV2Partitions {
}

export function disDumpTaskV2PartitionsToTerraform(struct?: DisDumpTaskV2Partitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function disDumpTaskV2PartitionsToHclTerraform(struct?: DisDumpTaskV2Partitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DisDumpTaskV2PartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisDumpTaskV2Partitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisDumpTaskV2Partitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_range - computed: true, optional: false, required: false
  public get hashRange() {
    return this.getStringAttribute('hash_range');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_partitions - computed: true, optional: false, required: false
  public get parentPartitions() {
    return this.getStringAttribute('parent_partitions');
  }

  // sequence_number_range - computed: true, optional: false, required: false
  public get sequenceNumberRange() {
    return this.getStringAttribute('sequence_number_range');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DisDumpTaskV2PartitionsList extends cdktf.ComplexList {

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
  public get(index: number): DisDumpTaskV2PartitionsOutputReference {
    return new DisDumpTaskV2PartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisDumpTaskV2ObsDestinationDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#agency_name DisDumpTaskV2#agency_name}
  */
  readonly agencyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#consumer_strategy DisDumpTaskV2#consumer_strategy}
  */
  readonly consumerStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#deliver_time_interval DisDumpTaskV2#deliver_time_interval}
  */
  readonly deliverTimeInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#destination_file_type DisDumpTaskV2#destination_file_type}
  */
  readonly destinationFileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#file_prefix DisDumpTaskV2#file_prefix}
  */
  readonly filePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#obs_bucket_path DisDumpTaskV2#obs_bucket_path}
  */
  readonly obsBucketPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#partition_format DisDumpTaskV2#partition_format}
  */
  readonly partitionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#record_delimiter DisDumpTaskV2#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#task_name DisDumpTaskV2#task_name}
  */
  readonly taskName: string;
}

export function disDumpTaskV2ObsDestinationDescriptorToTerraform(struct?: DisDumpTaskV2ObsDestinationDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agency_name: cdktf.stringToTerraform(struct!.agencyName),
    consumer_strategy: cdktf.stringToTerraform(struct!.consumerStrategy),
    deliver_time_interval: cdktf.numberToTerraform(struct!.deliverTimeInterval),
    destination_file_type: cdktf.stringToTerraform(struct!.destinationFileType),
    file_prefix: cdktf.stringToTerraform(struct!.filePrefix),
    obs_bucket_path: cdktf.stringToTerraform(struct!.obsBucketPath),
    partition_format: cdktf.stringToTerraform(struct!.partitionFormat),
    record_delimiter: cdktf.stringToTerraform(struct!.recordDelimiter),
    task_name: cdktf.stringToTerraform(struct!.taskName),
  }
}


export function disDumpTaskV2ObsDestinationDescriptorToHclTerraform(struct?: DisDumpTaskV2ObsDestinationDescriptor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agency_name: {
      value: cdktf.stringToHclTerraform(struct!.agencyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_strategy: {
      value: cdktf.stringToHclTerraform(struct!.consumerStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deliver_time_interval: {
      value: cdktf.numberToHclTerraform(struct!.deliverTimeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_file_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationFileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_prefix: {
      value: cdktf.stringToHclTerraform(struct!.filePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obs_bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.obsBucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_format: {
      value: cdktf.stringToHclTerraform(struct!.partitionFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.recordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisDumpTaskV2ObsDestinationDescriptorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisDumpTaskV2ObsDestinationDescriptor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agencyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agencyName = this._agencyName;
    }
    if (this._consumerStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerStrategy = this._consumerStrategy;
    }
    if (this._deliverTimeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverTimeInterval = this._deliverTimeInterval;
    }
    if (this._destinationFileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileType = this._destinationFileType;
    }
    if (this._filePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePrefix = this._filePrefix;
    }
    if (this._obsBucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.obsBucketPath = this._obsBucketPath;
    }
    if (this._partitionFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFormat = this._partitionFormat;
    }
    if (this._recordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDelimiter = this._recordDelimiter;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisDumpTaskV2ObsDestinationDescriptor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agencyName = undefined;
      this._consumerStrategy = undefined;
      this._deliverTimeInterval = undefined;
      this._destinationFileType = undefined;
      this._filePrefix = undefined;
      this._obsBucketPath = undefined;
      this._partitionFormat = undefined;
      this._recordDelimiter = undefined;
      this._taskName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agencyName = value.agencyName;
      this._consumerStrategy = value.consumerStrategy;
      this._deliverTimeInterval = value.deliverTimeInterval;
      this._destinationFileType = value.destinationFileType;
      this._filePrefix = value.filePrefix;
      this._obsBucketPath = value.obsBucketPath;
      this._partitionFormat = value.partitionFormat;
      this._recordDelimiter = value.recordDelimiter;
      this._taskName = value.taskName;
    }
  }

  // agency_name - computed: false, optional: false, required: true
  private _agencyName?: string; 
  public get agencyName() {
    return this.getStringAttribute('agency_name');
  }
  public set agencyName(value: string) {
    this._agencyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyNameInput() {
    return this._agencyName;
  }

  // consumer_strategy - computed: false, optional: true, required: false
  private _consumerStrategy?: string; 
  public get consumerStrategy() {
    return this.getStringAttribute('consumer_strategy');
  }
  public set consumerStrategy(value: string) {
    this._consumerStrategy = value;
  }
  public resetConsumerStrategy() {
    this._consumerStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerStrategyInput() {
    return this._consumerStrategy;
  }

  // deliver_time_interval - computed: false, optional: false, required: true
  private _deliverTimeInterval?: number; 
  public get deliverTimeInterval() {
    return this.getNumberAttribute('deliver_time_interval');
  }
  public set deliverTimeInterval(value: number) {
    this._deliverTimeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverTimeIntervalInput() {
    return this._deliverTimeInterval;
  }

  // destination_file_type - computed: false, optional: true, required: false
  private _destinationFileType?: string; 
  public get destinationFileType() {
    return this.getStringAttribute('destination_file_type');
  }
  public set destinationFileType(value: string) {
    this._destinationFileType = value;
  }
  public resetDestinationFileType() {
    this._destinationFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileTypeInput() {
    return this._destinationFileType;
  }

  // file_prefix - computed: false, optional: true, required: false
  private _filePrefix?: string; 
  public get filePrefix() {
    return this.getStringAttribute('file_prefix');
  }
  public set filePrefix(value: string) {
    this._filePrefix = value;
  }
  public resetFilePrefix() {
    this._filePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePrefixInput() {
    return this._filePrefix;
  }

  // obs_bucket_path - computed: false, optional: false, required: true
  private _obsBucketPath?: string; 
  public get obsBucketPath() {
    return this.getStringAttribute('obs_bucket_path');
  }
  public set obsBucketPath(value: string) {
    this._obsBucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get obsBucketPathInput() {
    return this._obsBucketPath;
  }

  // partition_format - computed: false, optional: true, required: false
  private _partitionFormat?: string; 
  public get partitionFormat() {
    return this.getStringAttribute('partition_format');
  }
  public set partitionFormat(value: string) {
    this._partitionFormat = value;
  }
  public resetPartitionFormat() {
    this._partitionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFormatInput() {
    return this._partitionFormat;
  }

  // record_delimiter - computed: false, optional: true, required: false
  private _recordDelimiter?: string; 
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }
}

export class DisDumpTaskV2ObsDestinationDescriptorList extends cdktf.ComplexList {
  public internalValue? : DisDumpTaskV2ObsDestinationDescriptor[] | cdktf.IResolvable

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
  public get(index: number): DisDumpTaskV2ObsDestinationDescriptorOutputReference {
    return new DisDumpTaskV2ObsDestinationDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisDumpTaskV2ObsProcessingSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#timestamp_format DisDumpTaskV2#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#timestamp_name DisDumpTaskV2#timestamp_name}
  */
  readonly timestampName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#timestamp_type DisDumpTaskV2#timestamp_type}
  */
  readonly timestampType: string;
}

export function disDumpTaskV2ObsProcessingSchemaToTerraform(struct?: DisDumpTaskV2ObsProcessingSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp_format: cdktf.stringToTerraform(struct!.timestampFormat),
    timestamp_name: cdktf.stringToTerraform(struct!.timestampName),
    timestamp_type: cdktf.stringToTerraform(struct!.timestampType),
  }
}


export function disDumpTaskV2ObsProcessingSchemaToHclTerraform(struct?: DisDumpTaskV2ObsProcessingSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_name: {
      value: cdktf.stringToHclTerraform(struct!.timestampName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_type: {
      value: cdktf.stringToHclTerraform(struct!.timestampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisDumpTaskV2ObsProcessingSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisDumpTaskV2ObsProcessingSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._timestampName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampName = this._timestampName;
    }
    if (this._timestampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampType = this._timestampType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisDumpTaskV2ObsProcessingSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestampFormat = undefined;
      this._timestampName = undefined;
      this._timestampType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestampFormat = value.timestampFormat;
      this._timestampName = value.timestampName;
      this._timestampType = value.timestampType;
    }
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // timestamp_name - computed: false, optional: false, required: true
  private _timestampName?: string; 
  public get timestampName() {
    return this.getStringAttribute('timestamp_name');
  }
  public set timestampName(value: string) {
    this._timestampName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampNameInput() {
    return this._timestampName;
  }

  // timestamp_type - computed: false, optional: false, required: true
  private _timestampType?: string; 
  public get timestampType() {
    return this.getStringAttribute('timestamp_type');
  }
  public set timestampType(value: string) {
    this._timestampType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeInput() {
    return this._timestampType;
  }
}

export class DisDumpTaskV2ObsProcessingSchemaList extends cdktf.ComplexList {
  public internalValue? : DisDumpTaskV2ObsProcessingSchema[] | cdktf.IResolvable

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
  public get(index: number): DisDumpTaskV2ObsProcessingSchemaOutputReference {
    return new DisDumpTaskV2ObsProcessingSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisDumpTaskV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#update DisDumpTaskV2#update}
  */
  readonly update?: string;
}

export function disDumpTaskV2TimeoutsToTerraform(struct?: DisDumpTaskV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function disDumpTaskV2TimeoutsToHclTerraform(struct?: DisDumpTaskV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisDumpTaskV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisDumpTaskV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisDumpTaskV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2 opentelekomcloud_dis_dump_task_v2}
*/
export class DisDumpTaskV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dis_dump_task_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisDumpTaskV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisDumpTaskV2 to import
  * @param importFromId The id of the existing DisDumpTaskV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisDumpTaskV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dis_dump_task_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/dis_dump_task_v2 opentelekomcloud_dis_dump_task_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisDumpTaskV2Config
  */
  public constructor(scope: Construct, id: string, config: DisDumpTaskV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dis_dump_task_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._destination = config.destination;
    this._id = config.id;
    this._streamName = config.streamName;
    this._obsDestinationDescriptor.internalValue = config.obsDestinationDescriptor;
    this._obsProcessingSchema.internalValue = config.obsProcessingSchema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // last_transfer_timestamp - computed: true, optional: false, required: false
  public get lastTransferTimestamp() {
    return this.getNumberAttribute('last_transfer_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DisDumpTaskV2PartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // obs_destination_descriptor - computed: false, optional: true, required: false
  private _obsDestinationDescriptor = new DisDumpTaskV2ObsDestinationDescriptorList(this, "obs_destination_descriptor", true);
  public get obsDestinationDescriptor() {
    return this._obsDestinationDescriptor;
  }
  public putObsDestinationDescriptor(value: DisDumpTaskV2ObsDestinationDescriptor[] | cdktf.IResolvable) {
    this._obsDestinationDescriptor.internalValue = value;
  }
  public resetObsDestinationDescriptor() {
    this._obsDestinationDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsDestinationDescriptorInput() {
    return this._obsDestinationDescriptor.internalValue;
  }

  // obs_processing_schema - computed: false, optional: true, required: false
  private _obsProcessingSchema = new DisDumpTaskV2ObsProcessingSchemaList(this, "obs_processing_schema", true);
  public get obsProcessingSchema() {
    return this._obsProcessingSchema;
  }
  public putObsProcessingSchema(value: DisDumpTaskV2ObsProcessingSchema[] | cdktf.IResolvable) {
    this._obsProcessingSchema.internalValue = value;
  }
  public resetObsProcessingSchema() {
    this._obsProcessingSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsProcessingSchemaInput() {
    return this._obsProcessingSchema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DisDumpTaskV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DisDumpTaskV2Timeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      destination: cdktf.stringToTerraform(this._destination),
      id: cdktf.stringToTerraform(this._id),
      stream_name: cdktf.stringToTerraform(this._streamName),
      obs_destination_descriptor: cdktf.listMapper(disDumpTaskV2ObsDestinationDescriptorToTerraform, true)(this._obsDestinationDescriptor.internalValue),
      obs_processing_schema: cdktf.listMapper(disDumpTaskV2ObsProcessingSchemaToTerraform, true)(this._obsProcessingSchema.internalValue),
      timeouts: disDumpTaskV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
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
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obs_destination_descriptor: {
        value: cdktf.listMapperHcl(disDumpTaskV2ObsDestinationDescriptorToHclTerraform, true)(this._obsDestinationDescriptor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DisDumpTaskV2ObsDestinationDescriptorList",
      },
      obs_processing_schema: {
        value: cdktf.listMapperHcl(disDumpTaskV2ObsProcessingSchemaToHclTerraform, true)(this._obsProcessingSchema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DisDumpTaskV2ObsProcessingSchemaList",
      },
      timeouts: {
        value: disDumpTaskV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisDumpTaskV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
