// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobTemplateLaunchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Override job template variables. YAML or JSON values are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#extra_vars JobTemplateLaunch#extra_vars}
  */
  readonly extraVars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#id JobTemplateLaunch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Override Inventory ID. Required ask_inventory_on_launch set on job_template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#inventory_id JobTemplateLaunch#inventory_id}
  */
  readonly inventoryId?: number;
  /**
  * Job template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#job_template_id JobTemplateLaunch#job_template_id}
  */
  readonly jobTemplateId: number;
  /**
  * List of comma delimited hosts to limit job execution. Required ask_limit_on_launch set on job_template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#limit JobTemplateLaunch#limit}
  */
  readonly limit?: string;
  /**
  * Resource creation will wait for job completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#wait_for_completion JobTemplateLaunch#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#timeouts JobTemplateLaunch#timeouts}
  */
  readonly timeouts?: JobTemplateLaunchTimeouts;
}
export interface JobTemplateLaunchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#create JobTemplateLaunch#create}
  */
  readonly create?: string;
}

export function jobTemplateLaunchTimeoutsToTerraform(struct?: JobTemplateLaunchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function jobTemplateLaunchTimeoutsToHclTerraform(struct?: JobTemplateLaunchTimeouts | cdktf.IResolvable): any {
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

export class JobTemplateLaunchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobTemplateLaunchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobTemplateLaunchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch awx_job_template_launch}
*/
export class JobTemplateLaunch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_job_template_launch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobTemplateLaunch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobTemplateLaunch to import
  * @param importFromId The id of the existing JobTemplateLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobTemplateLaunch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_job_template_launch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template_launch awx_job_template_launch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobTemplateLaunchConfig
  */
  public constructor(scope: Construct, id: string, config: JobTemplateLaunchConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_job_template_launch',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1',
        providerVersionConstraint: '0.29.1'
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
    this._inventoryId = config.inventoryId;
    this._jobTemplateId = config.jobTemplateId;
    this._limit = config.limit;
    this._waitForCompletion = config.waitForCompletion;
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

  // inventory_id - computed: true, optional: true, required: false
  private _inventoryId?: number; 
  public get inventoryId() {
    return this.getNumberAttribute('inventory_id');
  }
  public set inventoryId(value: number) {
    this._inventoryId = value;
  }
  public resetInventoryId() {
    this._inventoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // job_template_id - computed: false, optional: false, required: true
  private _jobTemplateId?: number; 
  public get jobTemplateId() {
    return this.getNumberAttribute('job_template_id');
  }
  public set jobTemplateId(value: number) {
    this._jobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateIdInput() {
    return this._jobTemplateId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JobTemplateLaunchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JobTemplateLaunchTimeouts) {
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
      inventory_id: cdktf.numberToTerraform(this._inventoryId),
      job_template_id: cdktf.numberToTerraform(this._jobTemplateId),
      limit: cdktf.stringToTerraform(this._limit),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      timeouts: jobTemplateLaunchTimeoutsToTerraform(this._timeouts.internalValue),
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
      inventory_id: {
        value: cdktf.numberToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_template_id: {
        value: cdktf.numberToHclTerraform(this._jobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
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
      timeouts: {
        value: jobTemplateLaunchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobTemplateLaunchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
