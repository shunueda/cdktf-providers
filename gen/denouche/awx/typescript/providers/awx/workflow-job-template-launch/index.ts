// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateLaunchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Override workflow job template variables. YAML or JSON values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#extra_vars WorkflowJobTemplateLaunch#extra_vars}
  */
  readonly extraVars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#id WorkflowJobTemplateLaunch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource creation will wait for workflow job completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#wait_for_completion WorkflowJobTemplateLaunch#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * Workflow job template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#workflow_job_template_id WorkflowJobTemplateLaunch#workflow_job_template_id}
  */
  readonly workflowJobTemplateId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#timeouts WorkflowJobTemplateLaunch#timeouts}
  */
  readonly timeouts?: WorkflowJobTemplateLaunchTimeouts;
}
export interface WorkflowJobTemplateLaunchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#create WorkflowJobTemplateLaunch#create}
  */
  readonly create?: string;
}

export function workflowJobTemplateLaunchTimeoutsToTerraform(struct?: WorkflowJobTemplateLaunchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function workflowJobTemplateLaunchTimeoutsToHclTerraform(struct?: WorkflowJobTemplateLaunchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowJobTemplateLaunchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowJobTemplateLaunchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowJobTemplateLaunchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch awx_workflow_job_template_launch}
*/
export class WorkflowJobTemplateLaunch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_launch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateLaunch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateLaunch to import
  * @param importFromId The id of the existing WorkflowJobTemplateLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateLaunch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_launch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/workflow_job_template_launch awx_workflow_job_template_launch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateLaunchConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateLaunchConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_launch',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extraVars = config.extraVars;
    this._id = config.id;
    this._waitForCompletion = config.waitForCompletion;
    this._workflowJobTemplateId = config.workflowJobTemplateId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_vars - computed: false, optional: true, required: false
  private _extraVars?: string; 
  public get extraVars() {
    return this.getStringAttribute('extra_vars');
  }
  public set extraVars(value: string) {
    this._extraVars = value;
  }
  public resetExtraVars() {
    this._extraVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVarsInput() {
    return this._extraVars;
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

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktf.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // workflow_job_template_id - computed: false, optional: false, required: true
  private _workflowJobTemplateId?: number; 
  public get workflowJobTemplateId() {
    return this.getNumberAttribute('workflow_job_template_id');
  }
  public set workflowJobTemplateId(value: number) {
    this._workflowJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateIdInput() {
    return this._workflowJobTemplateId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkflowJobTemplateLaunchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkflowJobTemplateLaunchTimeouts) {
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
      extra_vars: cdktf.stringToTerraform(this._extraVars),
      id: cdktf.stringToTerraform(this._id),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      workflow_job_template_id: cdktf.numberToTerraform(this._workflowJobTemplateId),
      timeouts: workflowJobTemplateLaunchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_vars: {
        value: cdktf.stringToHclTerraform(this._extraVars),
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
      wait_for_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_job_template_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: workflowJobTemplateLaunchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkflowJobTemplateLaunchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
