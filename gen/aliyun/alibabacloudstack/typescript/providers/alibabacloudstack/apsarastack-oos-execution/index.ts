// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackOosExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#description ApsarastackOosExecution#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#id ApsarastackOosExecution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#loop_mode ApsarastackOosExecution#loop_mode}
  */
  readonly loopMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#mode ApsarastackOosExecution#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#parameters ApsarastackOosExecution#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#parent_execution_id ApsarastackOosExecution#parent_execution_id}
  */
  readonly parentExecutionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#safety_check ApsarastackOosExecution#safety_check}
  */
  readonly safetyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#template_content ApsarastackOosExecution#template_content}
  */
  readonly templateContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#template_name ApsarastackOosExecution#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#template_version ApsarastackOosExecution#template_version}
  */
  readonly templateVersion?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#timeouts ApsarastackOosExecution#timeouts}
  */
  readonly timeouts?: ApsarastackOosExecutionTimeouts;
}
export interface ApsarastackOosExecutionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#create ApsarastackOosExecution#create}
  */
  readonly create?: string;
}

export function apsarastackOosExecutionTimeoutsToTerraform(struct?: ApsarastackOosExecutionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function apsarastackOosExecutionTimeoutsToHclTerraform(struct?: ApsarastackOosExecutionTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackOosExecutionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackOosExecutionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackOosExecutionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution apsarastack_oos_execution}
*/
export class ApsarastackOosExecution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_oos_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackOosExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackOosExecution to import
  * @param importFromId The id of the existing ApsarastackOosExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackOosExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_oos_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_oos_execution apsarastack_oos_execution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackOosExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackOosExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_oos_execution',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._loopMode = config.loopMode;
    this._mode = config.mode;
    this._parameters = config.parameters;
    this._parentExecutionId = config.parentExecutionId;
    this._safetyCheck = config.safetyCheck;
    this._templateContent = config.templateContent;
    this._templateName = config.templateName;
    this._templateVersion = config.templateVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // counters - computed: true, optional: false, required: false
  public get counters() {
    return this.getStringAttribute('counters');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
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

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // executed_by - computed: true, optional: false, required: false
  public get executedBy() {
    return this.getStringAttribute('executed_by');
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

  // is_parent - computed: true, optional: false, required: false
  public get isParent() {
    return this.getBooleanAttribute('is_parent');
  }

  // loop_mode - computed: false, optional: true, required: false
  private _loopMode?: string; 
  public get loopMode() {
    return this.getStringAttribute('loop_mode');
  }
  public set loopMode(value: string) {
    this._loopMode = value;
  }
  public resetLoopMode() {
    this._loopMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopModeInput() {
    return this._loopMode;
  }

  // mode - computed: false, optional: true, required: false
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

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getStringAttribute('outputs');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // parent_execution_id - computed: false, optional: true, required: false
  private _parentExecutionId?: string; 
  public get parentExecutionId() {
    return this.getStringAttribute('parent_execution_id');
  }
  public set parentExecutionId(value: string) {
    this._parentExecutionId = value;
  }
  public resetParentExecutionId() {
    this._parentExecutionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentExecutionIdInput() {
    return this._parentExecutionId;
  }

  // ram_role - computed: true, optional: false, required: false
  public get ramRole() {
    return this.getStringAttribute('ram_role');
  }

  // safety_check - computed: false, optional: true, required: false
  private _safetyCheck?: string; 
  public get safetyCheck() {
    return this.getStringAttribute('safety_check');
  }
  public set safetyCheck(value: string) {
    this._safetyCheck = value;
  }
  public resetSafetyCheck() {
    this._safetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyCheckInput() {
    return this._safetyCheck;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // template_content - computed: false, optional: true, required: false
  private _templateContent?: string; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  public resetTemplateContent() {
    this._templateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_version - computed: true, optional: true, required: false
  private _templateVersion?: string; 
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
  public set templateVersion(value: string) {
    this._templateVersion = value;
  }
  public resetTemplateVersion() {
    this._templateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackOosExecutionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackOosExecutionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      loop_mode: cdktf.stringToTerraform(this._loopMode),
      mode: cdktf.stringToTerraform(this._mode),
      parameters: cdktf.stringToTerraform(this._parameters),
      parent_execution_id: cdktf.stringToTerraform(this._parentExecutionId),
      safety_check: cdktf.stringToTerraform(this._safetyCheck),
      template_content: cdktf.stringToTerraform(this._templateContent),
      template_name: cdktf.stringToTerraform(this._templateName),
      template_version: cdktf.stringToTerraform(this._templateVersion),
      timeouts: apsarastackOosExecutionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      loop_mode: {
        value: cdktf.stringToHclTerraform(this._loopMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_execution_id: {
        value: cdktf.stringToHclTerraform(this._parentExecutionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safety_check: {
        value: cdktf.stringToHclTerraform(this._safetyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_content: {
        value: cdktf.stringToHclTerraform(this._templateContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_version: {
        value: cdktf.stringToHclTerraform(this._templateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apsarastackOosExecutionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackOosExecutionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
