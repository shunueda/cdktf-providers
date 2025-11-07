// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#cron_pattern PipelineSchedule#cron_pattern}
  */
  readonly cronPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#enabled PipelineSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#id PipelineSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#repository PipelineSchedule#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#workspace PipelineSchedule#workspace}
  */
  readonly workspace: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#target PipelineSchedule#target}
  */
  readonly target: PipelineScheduleTarget;
}
export interface PipelineScheduleTargetSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#pattern PipelineSchedule#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#type PipelineSchedule#type}
  */
  readonly type?: string;
}

export function pipelineScheduleTargetSelectorToTerraform(struct?: PipelineScheduleTargetSelectorOutputReference | PipelineScheduleTargetSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pipelineScheduleTargetSelectorToHclTerraform(struct?: PipelineScheduleTargetSelectorOutputReference | PipelineScheduleTargetSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PipelineScheduleTargetSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineScheduleTargetSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineScheduleTargetSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pattern = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // type - computed: false, optional: true, required: false
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
export interface PipelineScheduleTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#ref_name PipelineSchedule#ref_name}
  */
  readonly refName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#ref_type PipelineSchedule#ref_type}
  */
  readonly refType: string;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#selector PipelineSchedule#selector}
  */
  readonly selector: PipelineScheduleTargetSelector;
}

export function pipelineScheduleTargetToTerraform(struct?: PipelineScheduleTargetOutputReference | PipelineScheduleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_name: cdktf.stringToTerraform(struct!.refName),
    ref_type: cdktf.stringToTerraform(struct!.refType),
    selector: pipelineScheduleTargetSelectorToTerraform(struct!.selector),
  }
}


export function pipelineScheduleTargetToHclTerraform(struct?: PipelineScheduleTargetOutputReference | PipelineScheduleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_name: {
      value: cdktf.stringToHclTerraform(struct!.refName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_type: {
      value: cdktf.stringToHclTerraform(struct!.refType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: pipelineScheduleTargetSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineScheduleTargetSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineScheduleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineScheduleTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refName !== undefined) {
      hasAnyValues = true;
      internalValueResult.refName = this._refName;
    }
    if (this._refType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refType = this._refType;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineScheduleTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refName = undefined;
      this._refType = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refName = value.refName;
      this._refType = value.refType;
      this._selector.internalValue = value.selector;
    }
  }

  // ref_name - computed: false, optional: false, required: true
  private _refName?: string; 
  public get refName() {
    return this.getStringAttribute('ref_name');
  }
  public set refName(value: string) {
    this._refName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refNameInput() {
    return this._refName;
  }

  // ref_type - computed: false, optional: false, required: true
  private _refType?: string; 
  public get refType() {
    return this.getStringAttribute('ref_type');
  }
  public set refType(value: string) {
    this._refType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refTypeInput() {
    return this._refType;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new PipelineScheduleTargetSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: PipelineScheduleTargetSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule bitbucket_pipeline_schedule}
*/
export class PipelineSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_pipeline_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipelineSchedule to import
  * @param importFromId The id of the existing PipelineSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipelineSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_pipeline_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/pipeline_schedule bitbucket_pipeline_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_pipeline_schedule',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronPattern = config.cronPattern;
    this._enabled = config.enabled;
    this._id = config.id;
    this._repository = config.repository;
    this._workspace = config.workspace;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_pattern - computed: false, optional: false, required: true
  private _cronPattern?: string; 
  public get cronPattern() {
    return this.getStringAttribute('cron_pattern');
  }
  public set cronPattern(value: string) {
    this._cronPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronPatternInput() {
    return this._cronPattern;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // target - computed: false, optional: false, required: true
  private _target = new PipelineScheduleTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: PipelineScheduleTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_pattern: cdktf.stringToTerraform(this._cronPattern),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      repository: cdktf.stringToTerraform(this._repository),
      workspace: cdktf.stringToTerraform(this._workspace),
      target: pipelineScheduleTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_pattern: {
        value: cdktf.stringToHclTerraform(this._cronPattern),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: pipelineScheduleTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineScheduleTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
