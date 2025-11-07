// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostLdifExportTaskProcessorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external server with information to use when interacting with the AWS S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#aws_external_server PostLdifExportTaskProcessor#aws_external_server}
  */
  readonly awsExternalServer?: string;
  /**
  * A description for this Post LDIF Export Task Processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#description PostLdifExportTaskProcessor#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the Post LDIF Export Task Processor is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#enabled PostLdifExportTaskProcessor#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Post LDIF Export Task Processor. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#extension_argument PostLdifExportTaskProcessor#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Post LDIF Export Task Processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#extension_class PostLdifExportTaskProcessor#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A regular expression pattern that will be used to identify which files are candidates for automatic removal based on the maximum-file-count-to-retain and maximum-file-age-to-retain properties. By default, all files in the bucket will be eligible for removal by retention processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#file_retention_pattern PostLdifExportTaskProcessor#file_retention_pattern}
  */
  readonly fileRetentionPattern?: string;
  /**
  * The maximum number of concurrent connections that may be used when transferring data to or from S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#maximum_concurrent_transfer_connections PostLdifExportTaskProcessor#maximum_concurrent_transfer_connections}
  */
  readonly maximumConcurrentTransferConnections?: number;
  /**
  * The maximum length of time to retain files matching the file retention pattern that should be retained in the S3 bucket after successfully uploading a newly exported file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#maximum_file_age_to_retain PostLdifExportTaskProcessor#maximum_file_age_to_retain}
  */
  readonly maximumFileAgeToRetain?: string;
  /**
  * The maximum number of existing files matching the file retention pattern that should be retained in the S3 bucket after successfully uploading a newly exported file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#maximum_file_count_to_retain PostLdifExportTaskProcessor#maximum_file_count_to_retain}
  */
  readonly maximumFileCountToRetain?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#name PostLdifExportTaskProcessor#name}
  */
  readonly name: string;
  /**
  * The name of the S3 bucket into which LDIF files should be copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#s3_bucket_name PostLdifExportTaskProcessor#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * The target throughput to attempt to achieve for data transfers to or from S3, in megabits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#target_throughput_in_megabits_per_second PostLdifExportTaskProcessor#target_throughput_in_megabits_per_second}
  */
  readonly targetThroughputInMegabitsPerSecond?: number;
  /**
  * The type of Post LDIF Export Task Processor resource. Options are ['upload-to-s3', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#type PostLdifExportTaskProcessor#type}
  */
  readonly type: string;
}
export interface PostLdifExportTaskProcessorRequiredActions {
}

export function postLdifExportTaskProcessorRequiredActionsToTerraform(struct?: PostLdifExportTaskProcessorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function postLdifExportTaskProcessorRequiredActionsToHclTerraform(struct?: PostLdifExportTaskProcessorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PostLdifExportTaskProcessorRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostLdifExportTaskProcessorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostLdifExportTaskProcessorRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PostLdifExportTaskProcessorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): PostLdifExportTaskProcessorRequiredActionsOutputReference {
    return new PostLdifExportTaskProcessorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor pingdirectory_post_ldif_export_task_processor}
*/
export class PostLdifExportTaskProcessor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_post_ldif_export_task_processor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostLdifExportTaskProcessor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostLdifExportTaskProcessor to import
  * @param importFromId The id of the existing PostLdifExportTaskProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostLdifExportTaskProcessor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_post_ldif_export_task_processor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/post_ldif_export_task_processor pingdirectory_post_ldif_export_task_processor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostLdifExportTaskProcessorConfig
  */
  public constructor(scope: Construct, id: string, config: PostLdifExportTaskProcessorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_post_ldif_export_task_processor',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsExternalServer = config.awsExternalServer;
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._fileRetentionPattern = config.fileRetentionPattern;
    this._maximumConcurrentTransferConnections = config.maximumConcurrentTransferConnections;
    this._maximumFileAgeToRetain = config.maximumFileAgeToRetain;
    this._maximumFileCountToRetain = config.maximumFileCountToRetain;
    this._name = config.name;
    this._s3BucketName = config.s3BucketName;
    this._targetThroughputInMegabitsPerSecond = config.targetThroughputInMegabitsPerSecond;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_external_server - computed: false, optional: true, required: false
  private _awsExternalServer?: string; 
  public get awsExternalServer() {
    return this.getStringAttribute('aws_external_server');
  }
  public set awsExternalServer(value: string) {
    this._awsExternalServer = value;
  }
  public resetAwsExternalServer() {
    this._awsExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsExternalServerInput() {
    return this._awsExternalServer;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // file_retention_pattern - computed: true, optional: true, required: false
  private _fileRetentionPattern?: string; 
  public get fileRetentionPattern() {
    return this.getStringAttribute('file_retention_pattern');
  }
  public set fileRetentionPattern(value: string) {
    this._fileRetentionPattern = value;
  }
  public resetFileRetentionPattern() {
    this._fileRetentionPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRetentionPatternInput() {
    return this._fileRetentionPattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_concurrent_transfer_connections - computed: false, optional: true, required: false
  private _maximumConcurrentTransferConnections?: number; 
  public get maximumConcurrentTransferConnections() {
    return this.getNumberAttribute('maximum_concurrent_transfer_connections');
  }
  public set maximumConcurrentTransferConnections(value: number) {
    this._maximumConcurrentTransferConnections = value;
  }
  public resetMaximumConcurrentTransferConnections() {
    this._maximumConcurrentTransferConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrentTransferConnectionsInput() {
    return this._maximumConcurrentTransferConnections;
  }

  // maximum_file_age_to_retain - computed: false, optional: true, required: false
  private _maximumFileAgeToRetain?: string; 
  public get maximumFileAgeToRetain() {
    return this.getStringAttribute('maximum_file_age_to_retain');
  }
  public set maximumFileAgeToRetain(value: string) {
    this._maximumFileAgeToRetain = value;
  }
  public resetMaximumFileAgeToRetain() {
    this._maximumFileAgeToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFileAgeToRetainInput() {
    return this._maximumFileAgeToRetain;
  }

  // maximum_file_count_to_retain - computed: false, optional: true, required: false
  private _maximumFileCountToRetain?: number; 
  public get maximumFileCountToRetain() {
    return this.getNumberAttribute('maximum_file_count_to_retain');
  }
  public set maximumFileCountToRetain(value: number) {
    this._maximumFileCountToRetain = value;
  }
  public resetMaximumFileCountToRetain() {
    this._maximumFileCountToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFileCountToRetainInput() {
    return this._maximumFileCountToRetain;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new PostLdifExportTaskProcessorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // target_throughput_in_megabits_per_second - computed: false, optional: true, required: false
  private _targetThroughputInMegabitsPerSecond?: number; 
  public get targetThroughputInMegabitsPerSecond() {
    return this.getNumberAttribute('target_throughput_in_megabits_per_second');
  }
  public set targetThroughputInMegabitsPerSecond(value: number) {
    this._targetThroughputInMegabitsPerSecond = value;
  }
  public resetTargetThroughputInMegabitsPerSecond() {
    this._targetThroughputInMegabitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThroughputInMegabitsPerSecondInput() {
    return this._targetThroughputInMegabitsPerSecond;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_external_server: cdktf.stringToTerraform(this._awsExternalServer),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      file_retention_pattern: cdktf.stringToTerraform(this._fileRetentionPattern),
      maximum_concurrent_transfer_connections: cdktf.numberToTerraform(this._maximumConcurrentTransferConnections),
      maximum_file_age_to_retain: cdktf.stringToTerraform(this._maximumFileAgeToRetain),
      maximum_file_count_to_retain: cdktf.numberToTerraform(this._maximumFileCountToRetain),
      name: cdktf.stringToTerraform(this._name),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      target_throughput_in_megabits_per_second: cdktf.numberToTerraform(this._targetThroughputInMegabitsPerSecond),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_external_server: {
        value: cdktf.stringToHclTerraform(this._awsExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_retention_pattern: {
        value: cdktf.stringToHclTerraform(this._fileRetentionPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_concurrent_transfer_connections: {
        value: cdktf.numberToHclTerraform(this._maximumConcurrentTransferConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_file_age_to_retain: {
        value: cdktf.stringToHclTerraform(this._maximumFileAgeToRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_file_count_to_retain: {
        value: cdktf.numberToHclTerraform(this._maximumFileCountToRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_throughput_in_megabits_per_second: {
        value: cdktf.numberToHclTerraform(this._targetThroughputInMegabitsPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
