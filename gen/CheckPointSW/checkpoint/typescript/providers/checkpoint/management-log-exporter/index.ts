// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLogExporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#color ManagementLogExporter#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#comments ManagementLogExporter#comments}
  */
  readonly comments?: string;
  /**
  * Indicates whether to enable export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#enabled ManagementLogExporter#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#id ManagementLogExporter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#ignore_errors ManagementLogExporter#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#ignore_warnings ManagementLogExporter#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#name ManagementLogExporter#name}
  */
  readonly name: string;
  /**
  * Protocol used to send logs to the target server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#protocol ManagementLogExporter#protocol}
  */
  readonly protocol?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#tags ManagementLogExporter#tags}
  */
  readonly tags?: string[];
  /**
  * Port number of the target server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#target_port ManagementLogExporter#target_port}
  */
  readonly targetPort: number;
  /**
  * Target server port to which logs are exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#target_server ManagementLogExporter#target_server}
  */
  readonly targetServer: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#attachments ManagementLogExporter#attachments}
  */
  readonly attachments?: ManagementLogExporterAttachments;
  /**
  * data_manipulation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#data_manipulation ManagementLogExporter#data_manipulation}
  */
  readonly dataManipulation?: ManagementLogExporterDataManipulation;
}
export interface ManagementLogExporterAttachments {
  /**
  * Indicates whether to add link to log attachment in SmartView.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#add_link_to_log_attachment ManagementLogExporter#add_link_to_log_attachment}
  */
  readonly addLinkToLogAttachment?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to add link to log details in SmartView.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#add_link_to_log_details ManagementLogExporter#add_link_to_log_details}
  */
  readonly addLinkToLogDetails?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to add log attachment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#add_log_attachment_id ManagementLogExporter#add_log_attachment_id}
  */
  readonly addLogAttachmentId?: boolean | cdktf.IResolvable;
}

export function managementLogExporterAttachmentsToTerraform(struct?: ManagementLogExporterAttachmentsOutputReference | ManagementLogExporterAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_link_to_log_attachment: cdktf.booleanToTerraform(struct!.addLinkToLogAttachment),
    add_link_to_log_details: cdktf.booleanToTerraform(struct!.addLinkToLogDetails),
    add_log_attachment_id: cdktf.booleanToTerraform(struct!.addLogAttachmentId),
  }
}


export function managementLogExporterAttachmentsToHclTerraform(struct?: ManagementLogExporterAttachmentsOutputReference | ManagementLogExporterAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_link_to_log_attachment: {
      value: cdktf.booleanToHclTerraform(struct!.addLinkToLogAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_link_to_log_details: {
      value: cdktf.booleanToHclTerraform(struct!.addLinkToLogDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_log_attachment_id: {
      value: cdktf.booleanToHclTerraform(struct!.addLogAttachmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLogExporterAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLogExporterAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLinkToLogAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLinkToLogAttachment = this._addLinkToLogAttachment;
    }
    if (this._addLinkToLogDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLinkToLogDetails = this._addLinkToLogDetails;
    }
    if (this._addLogAttachmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLogAttachmentId = this._addLogAttachmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLogExporterAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addLinkToLogAttachment = undefined;
      this._addLinkToLogDetails = undefined;
      this._addLogAttachmentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addLinkToLogAttachment = value.addLinkToLogAttachment;
      this._addLinkToLogDetails = value.addLinkToLogDetails;
      this._addLogAttachmentId = value.addLogAttachmentId;
    }
  }

  // add_link_to_log_attachment - computed: false, optional: true, required: false
  private _addLinkToLogAttachment?: boolean | cdktf.IResolvable; 
  public get addLinkToLogAttachment() {
    return this.getBooleanAttribute('add_link_to_log_attachment');
  }
  public set addLinkToLogAttachment(value: boolean | cdktf.IResolvable) {
    this._addLinkToLogAttachment = value;
  }
  public resetAddLinkToLogAttachment() {
    this._addLinkToLogAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLinkToLogAttachmentInput() {
    return this._addLinkToLogAttachment;
  }

  // add_link_to_log_details - computed: false, optional: true, required: false
  private _addLinkToLogDetails?: boolean | cdktf.IResolvable; 
  public get addLinkToLogDetails() {
    return this.getBooleanAttribute('add_link_to_log_details');
  }
  public set addLinkToLogDetails(value: boolean | cdktf.IResolvable) {
    this._addLinkToLogDetails = value;
  }
  public resetAddLinkToLogDetails() {
    this._addLinkToLogDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLinkToLogDetailsInput() {
    return this._addLinkToLogDetails;
  }

  // add_log_attachment_id - computed: false, optional: true, required: false
  private _addLogAttachmentId?: boolean | cdktf.IResolvable; 
  public get addLogAttachmentId() {
    return this.getBooleanAttribute('add_log_attachment_id');
  }
  public set addLogAttachmentId(value: boolean | cdktf.IResolvable) {
    this._addLogAttachmentId = value;
  }
  public resetAddLogAttachmentId() {
    this._addLogAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLogAttachmentIdInput() {
    return this._addLogAttachmentId;
  }
}
export interface ManagementLogExporterDataManipulation {
  /**
  * Indicates whether to aggregate log updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#aggregate_log_updates ManagementLogExporter#aggregate_log_updates}
  */
  readonly aggregateLogUpdates?: boolean | cdktf.IResolvable;
  /**
  * Logs format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#format ManagementLogExporter#format}
  */
  readonly format?: string;
}

export function managementLogExporterDataManipulationToTerraform(struct?: ManagementLogExporterDataManipulationOutputReference | ManagementLogExporterDataManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_log_updates: cdktf.booleanToTerraform(struct!.aggregateLogUpdates),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function managementLogExporterDataManipulationToHclTerraform(struct?: ManagementLogExporterDataManipulationOutputReference | ManagementLogExporterDataManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_log_updates: {
      value: cdktf.booleanToHclTerraform(struct!.aggregateLogUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementLogExporterDataManipulationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementLogExporterDataManipulation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateLogUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateLogUpdates = this._aggregateLogUpdates;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementLogExporterDataManipulation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregateLogUpdates = undefined;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregateLogUpdates = value.aggregateLogUpdates;
      this._format = value.format;
    }
  }

  // aggregate_log_updates - computed: false, optional: true, required: false
  private _aggregateLogUpdates?: boolean | cdktf.IResolvable; 
  public get aggregateLogUpdates() {
    return this.getBooleanAttribute('aggregate_log_updates');
  }
  public set aggregateLogUpdates(value: boolean | cdktf.IResolvable) {
    this._aggregateLogUpdates = value;
  }
  public resetAggregateLogUpdates() {
    this._aggregateLogUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateLogUpdatesInput() {
    return this._aggregateLogUpdates;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter checkpoint_management_log_exporter}
*/
export class ManagementLogExporter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_log_exporter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLogExporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLogExporter to import
  * @param importFromId The id of the existing ManagementLogExporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLogExporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_log_exporter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_log_exporter checkpoint_management_log_exporter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLogExporterConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLogExporterConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_log_exporter',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._protocol = config.protocol;
    this._tags = config.tags;
    this._targetPort = config.targetPort;
    this._targetServer = config.targetServer;
    this._attachments.internalValue = config.attachments;
    this._dataManipulation.internalValue = config.dataManipulation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
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

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // target_server - computed: false, optional: false, required: true
  private _targetServer?: string; 
  public get targetServer() {
    return this.getStringAttribute('target_server');
  }
  public set targetServer(value: string) {
    this._targetServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServerInput() {
    return this._targetServer;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new ManagementLogExporterAttachmentsOutputReference(this, "attachments");
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: ManagementLogExporterAttachments) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // data_manipulation - computed: false, optional: true, required: false
  private _dataManipulation = new ManagementLogExporterDataManipulationOutputReference(this, "data_manipulation");
  public get dataManipulation() {
    return this._dataManipulation;
  }
  public putDataManipulation(value: ManagementLogExporterDataManipulation) {
    this._dataManipulation.internalValue = value;
  }
  public resetDataManipulation() {
    this._dataManipulation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataManipulationInput() {
    return this._dataManipulation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_port: cdktf.numberToTerraform(this._targetPort),
      target_server: cdktf.stringToTerraform(this._targetServer),
      attachments: managementLogExporterAttachmentsToTerraform(this._attachments.internalValue),
      data_manipulation: managementLogExporterDataManipulationToTerraform(this._dataManipulation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_port: {
        value: cdktf.numberToHclTerraform(this._targetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_server: {
        value: cdktf.stringToHclTerraform(this._targetServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachments: {
        value: managementLogExporterAttachmentsToHclTerraform(this._attachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLogExporterAttachmentsList",
      },
      data_manipulation: {
        value: managementLogExporterDataManipulationToHclTerraform(this._dataManipulation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementLogExporterDataManipulationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
