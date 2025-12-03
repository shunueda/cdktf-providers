// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskSendEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#enabled WorkflowTaskSendEmail#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#id WorkflowTaskSendEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#name WorkflowTaskSendEmail#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#position WorkflowTaskSendEmail#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#skip_on_failure WorkflowTaskSendEmail#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#workflow_id WorkflowTaskSendEmail#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#task_params WorkflowTaskSendEmail#task_params}
  */
  readonly taskParams: WorkflowTaskSendEmailTaskParams;
}
export interface WorkflowTaskSendEmailTaskParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#bcc WorkflowTaskSendEmail#bcc}
  */
  readonly bcc?: string[];
  /**
  * The email body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#body WorkflowTaskSendEmail#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#cc WorkflowTaskSendEmail#cc}
  */
  readonly cc?: string[];
  /**
  * URL to your custom email logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#custom_logo_url WorkflowTaskSendEmail#custom_logo_url}
  */
  readonly customLogoUrl?: string;
  /**
  * The from email address. Need to use SMTP integration if different than rootly.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#from WorkflowTaskSendEmail#from}
  */
  readonly from?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#include_footer WorkflowTaskSendEmail#include_footer}
  */
  readonly includeFooter?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#include_header WorkflowTaskSendEmail#include_header}
  */
  readonly includeHeader?: boolean | cdktf.IResolvable;
  /**
  * The preheader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#preheader WorkflowTaskSendEmail#preheader}
  */
  readonly preheader?: string;
  /**
  * The subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#subject WorkflowTaskSendEmail#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#task_type WorkflowTaskSendEmail#task_type}
  */
  readonly taskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#to WorkflowTaskSendEmail#to}
  */
  readonly to: string[];
}

export function workflowTaskSendEmailTaskParamsToTerraform(struct?: WorkflowTaskSendEmailTaskParamsOutputReference | WorkflowTaskSendEmailTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bcc),
    body: cdktf.stringToTerraform(struct!.body),
    cc: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cc),
    custom_logo_url: cdktf.stringToTerraform(struct!.customLogoUrl),
    from: cdktf.stringToTerraform(struct!.from),
    include_footer: cdktf.booleanToTerraform(struct!.includeFooter),
    include_header: cdktf.booleanToTerraform(struct!.includeHeader),
    preheader: cdktf.stringToTerraform(struct!.preheader),
    subject: cdktf.stringToTerraform(struct!.subject),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.to),
  }
}


export function workflowTaskSendEmailTaskParamsToHclTerraform(struct?: WorkflowTaskSendEmailTaskParamsOutputReference | WorkflowTaskSendEmailTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcc: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bcc),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cc: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cc),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_logo_url: {
      value: cdktf.stringToHclTerraform(struct!.customLogoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_footer: {
      value: cdktf.booleanToHclTerraform(struct!.includeFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_header: {
      value: cdktf.booleanToHclTerraform(struct!.includeHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preheader: {
      value: cdktf.stringToHclTerraform(struct!.preheader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.to),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskSendEmailTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskSendEmailTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcc = this._bcc;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._cc !== undefined) {
      hasAnyValues = true;
      internalValueResult.cc = this._cc;
    }
    if (this._customLogoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLogoUrl = this._customLogoUrl;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._includeFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFooter = this._includeFooter;
    }
    if (this._includeHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHeader = this._includeHeader;
    }
    if (this._preheader !== undefined) {
      hasAnyValues = true;
      internalValueResult.preheader = this._preheader;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskSendEmailTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bcc = undefined;
      this._body = undefined;
      this._cc = undefined;
      this._customLogoUrl = undefined;
      this._from = undefined;
      this._includeFooter = undefined;
      this._includeHeader = undefined;
      this._preheader = undefined;
      this._subject = undefined;
      this._taskType = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bcc = value.bcc;
      this._body = value.body;
      this._cc = value.cc;
      this._customLogoUrl = value.customLogoUrl;
      this._from = value.from;
      this._includeFooter = value.includeFooter;
      this._includeHeader = value.includeHeader;
      this._preheader = value.preheader;
      this._subject = value.subject;
      this._taskType = value.taskType;
      this._to = value.to;
    }
  }

  // bcc - computed: false, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return this.getListAttribute('bcc');
  }
  public set bcc(value: string[]) {
    this._bcc = value;
  }
  public resetBcc() {
    this._bcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccInput() {
    return this._bcc;
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // cc - computed: false, optional: true, required: false
  private _cc?: string[]; 
  public get cc() {
    return this.getListAttribute('cc');
  }
  public set cc(value: string[]) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // custom_logo_url - computed: false, optional: true, required: false
  private _customLogoUrl?: string; 
  public get customLogoUrl() {
    return this.getStringAttribute('custom_logo_url');
  }
  public set customLogoUrl(value: string) {
    this._customLogoUrl = value;
  }
  public resetCustomLogoUrl() {
    this._customLogoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoUrlInput() {
    return this._customLogoUrl;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // include_footer - computed: false, optional: true, required: false
  private _includeFooter?: boolean | cdktf.IResolvable; 
  public get includeFooter() {
    return this.getBooleanAttribute('include_footer');
  }
  public set includeFooter(value: boolean | cdktf.IResolvable) {
    this._includeFooter = value;
  }
  public resetIncludeFooter() {
    this._includeFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFooterInput() {
    return this._includeFooter;
  }

  // include_header - computed: false, optional: true, required: false
  private _includeHeader?: boolean | cdktf.IResolvable; 
  public get includeHeader() {
    return this.getBooleanAttribute('include_header');
  }
  public set includeHeader(value: boolean | cdktf.IResolvable) {
    this._includeHeader = value;
  }
  public resetIncludeHeader() {
    this._includeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeaderInput() {
    return this._includeHeader;
  }

  // preheader - computed: false, optional: true, required: false
  private _preheader?: string; 
  public get preheader() {
    return this.getStringAttribute('preheader');
  }
  public set preheader(value: string) {
    this._preheader = value;
  }
  public resetPreheader() {
    this._preheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preheaderInput() {
    return this._preheader;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email rootly_workflow_task_send_email}
*/
export class WorkflowTaskSendEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_send_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskSendEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskSendEmail to import
  * @param importFromId The id of the existing WorkflowTaskSendEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskSendEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_send_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_email rootly_workflow_task_send_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskSendEmailConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskSendEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_send_email',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskSendEmailTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskSendEmailTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskSendEmailTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskSendEmailTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskSendEmailTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
