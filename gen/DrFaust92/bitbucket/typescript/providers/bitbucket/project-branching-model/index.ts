// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectBranchingModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#id ProjectBranchingModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#project ProjectBranchingModel#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#workspace ProjectBranchingModel#workspace}
  */
  readonly workspace: string;
  /**
  * branch_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#branch_type ProjectBranchingModel#branch_type}
  */
  readonly branchType?: ProjectBranchingModelBranchType[] | cdktf.IResolvable;
  /**
  * development block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#development ProjectBranchingModel#development}
  */
  readonly development: ProjectBranchingModelDevelopment;
  /**
  * production block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#production ProjectBranchingModel#production}
  */
  readonly production?: ProjectBranchingModelProduction;
}
export interface ProjectBranchingModelBranchType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#enabled ProjectBranchingModel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#kind ProjectBranchingModel#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#prefix ProjectBranchingModel#prefix}
  */
  readonly prefix?: string;
}

export function projectBranchingModelBranchTypeToTerraform(struct?: ProjectBranchingModelBranchType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kind: cdktf.stringToTerraform(struct!.kind),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function projectBranchingModelBranchTypeToHclTerraform(struct?: ProjectBranchingModelBranchType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectBranchingModelBranchTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectBranchingModelBranchType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectBranchingModelBranchType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kind = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kind = value.kind;
      this._prefix = value.prefix;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // prefix - computed: false, optional: true, required: false
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
}

export class ProjectBranchingModelBranchTypeList extends cdktf.ComplexList {
  public internalValue? : ProjectBranchingModelBranchType[] | cdktf.IResolvable

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
  public get(index: number): ProjectBranchingModelBranchTypeOutputReference {
    return new ProjectBranchingModelBranchTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectBranchingModelDevelopment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#branch_does_not_exist ProjectBranchingModel#branch_does_not_exist}
  */
  readonly branchDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#name ProjectBranchingModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#use_mainbranch ProjectBranchingModel#use_mainbranch}
  */
  readonly useMainbranch?: boolean | cdktf.IResolvable;
}

export function projectBranchingModelDevelopmentToTerraform(struct?: ProjectBranchingModelDevelopmentOutputReference | ProjectBranchingModelDevelopment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_does_not_exist: cdktf.booleanToTerraform(struct!.branchDoesNotExist),
    name: cdktf.stringToTerraform(struct!.name),
    use_mainbranch: cdktf.booleanToTerraform(struct!.useMainbranch),
  }
}


export function projectBranchingModelDevelopmentToHclTerraform(struct?: ProjectBranchingModelDevelopmentOutputReference | ProjectBranchingModelDevelopment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_does_not_exist: {
      value: cdktf.booleanToHclTerraform(struct!.branchDoesNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mainbranch: {
      value: cdktf.booleanToHclTerraform(struct!.useMainbranch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectBranchingModelDevelopmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectBranchingModelDevelopment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchDoesNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchDoesNotExist = this._branchDoesNotExist;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useMainbranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMainbranch = this._useMainbranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectBranchingModelDevelopment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchDoesNotExist = undefined;
      this._name = undefined;
      this._useMainbranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchDoesNotExist = value.branchDoesNotExist;
      this._name = value.name;
      this._useMainbranch = value.useMainbranch;
    }
  }

  // branch_does_not_exist - computed: false, optional: true, required: false
  private _branchDoesNotExist?: boolean | cdktf.IResolvable; 
  public get branchDoesNotExist() {
    return this.getBooleanAttribute('branch_does_not_exist');
  }
  public set branchDoesNotExist(value: boolean | cdktf.IResolvable) {
    this._branchDoesNotExist = value;
  }
  public resetBranchDoesNotExist() {
    this._branchDoesNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchDoesNotExistInput() {
    return this._branchDoesNotExist;
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // name - computed: false, optional: true, required: false
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

  // use_mainbranch - computed: false, optional: true, required: false
  private _useMainbranch?: boolean | cdktf.IResolvable; 
  public get useMainbranch() {
    return this.getBooleanAttribute('use_mainbranch');
  }
  public set useMainbranch(value: boolean | cdktf.IResolvable) {
    this._useMainbranch = value;
  }
  public resetUseMainbranch() {
    this._useMainbranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMainbranchInput() {
    return this._useMainbranch;
  }
}
export interface ProjectBranchingModelProduction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#branch_does_not_exist ProjectBranchingModel#branch_does_not_exist}
  */
  readonly branchDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#enabled ProjectBranchingModel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#name ProjectBranchingModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#use_mainbranch ProjectBranchingModel#use_mainbranch}
  */
  readonly useMainbranch?: boolean | cdktf.IResolvable;
}

export function projectBranchingModelProductionToTerraform(struct?: ProjectBranchingModelProductionOutputReference | ProjectBranchingModelProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_does_not_exist: cdktf.booleanToTerraform(struct!.branchDoesNotExist),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    use_mainbranch: cdktf.booleanToTerraform(struct!.useMainbranch),
  }
}


export function projectBranchingModelProductionToHclTerraform(struct?: ProjectBranchingModelProductionOutputReference | ProjectBranchingModelProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_does_not_exist: {
      value: cdktf.booleanToHclTerraform(struct!.branchDoesNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mainbranch: {
      value: cdktf.booleanToHclTerraform(struct!.useMainbranch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectBranchingModelProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectBranchingModelProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchDoesNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchDoesNotExist = this._branchDoesNotExist;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useMainbranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMainbranch = this._useMainbranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectBranchingModelProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchDoesNotExist = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._useMainbranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchDoesNotExist = value.branchDoesNotExist;
      this._enabled = value.enabled;
      this._name = value.name;
      this._useMainbranch = value.useMainbranch;
    }
  }

  // branch_does_not_exist - computed: false, optional: true, required: false
  private _branchDoesNotExist?: boolean | cdktf.IResolvable; 
  public get branchDoesNotExist() {
    return this.getBooleanAttribute('branch_does_not_exist');
  }
  public set branchDoesNotExist(value: boolean | cdktf.IResolvable) {
    this._branchDoesNotExist = value;
  }
  public resetBranchDoesNotExist() {
    this._branchDoesNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchDoesNotExistInput() {
    return this._branchDoesNotExist;
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

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // name - computed: false, optional: true, required: false
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

  // use_mainbranch - computed: false, optional: true, required: false
  private _useMainbranch?: boolean | cdktf.IResolvable; 
  public get useMainbranch() {
    return this.getBooleanAttribute('use_mainbranch');
  }
  public set useMainbranch(value: boolean | cdktf.IResolvable) {
    this._useMainbranch = value;
  }
  public resetUseMainbranch() {
    this._useMainbranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMainbranchInput() {
    return this._useMainbranch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model bitbucket_project_branching_model}
*/
export class ProjectBranchingModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_project_branching_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectBranchingModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectBranchingModel to import
  * @param importFromId The id of the existing ProjectBranchingModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectBranchingModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_project_branching_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/project_branching_model bitbucket_project_branching_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectBranchingModelConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectBranchingModelConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_project_branching_model',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0',
        providerVersionConstraint: '2.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._workspace = config.workspace;
    this._branchType.internalValue = config.branchType;
    this._development.internalValue = config.development;
    this._production.internalValue = config.production;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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

  // branch_type - computed: false, optional: true, required: false
  private _branchType = new ProjectBranchingModelBranchTypeList(this, "branch_type", true);
  public get branchType() {
    return this._branchType;
  }
  public putBranchType(value: ProjectBranchingModelBranchType[] | cdktf.IResolvable) {
    this._branchType.internalValue = value;
  }
  public resetBranchType() {
    this._branchType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchTypeInput() {
    return this._branchType.internalValue;
  }

  // development - computed: false, optional: false, required: true
  private _development = new ProjectBranchingModelDevelopmentOutputReference(this, "development");
  public get development() {
    return this._development;
  }
  public putDevelopment(value: ProjectBranchingModelDevelopment) {
    this._development.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development.internalValue;
  }

  // production - computed: false, optional: true, required: false
  private _production = new ProjectBranchingModelProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: ProjectBranchingModelProduction) {
    this._production.internalValue = value;
  }
  public resetProduction() {
    this._production.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      workspace: cdktf.stringToTerraform(this._workspace),
      branch_type: cdktf.listMapper(projectBranchingModelBranchTypeToTerraform, true)(this._branchType.internalValue),
      development: projectBranchingModelDevelopmentToTerraform(this._development.internalValue),
      production: projectBranchingModelProductionToTerraform(this._production.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      branch_type: {
        value: cdktf.listMapperHcl(projectBranchingModelBranchTypeToHclTerraform, true)(this._branchType.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectBranchingModelBranchTypeList",
      },
      development: {
        value: projectBranchingModelDevelopmentToHclTerraform(this._development.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectBranchingModelDevelopmentList",
      },
      production: {
        value: projectBranchingModelProductionToHclTerraform(this._production.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectBranchingModelProductionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
