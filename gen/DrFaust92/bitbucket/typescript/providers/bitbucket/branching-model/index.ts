// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchingModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#default_branch_deletion BranchingModel#default_branch_deletion}
  */
  readonly defaultBranchDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#id BranchingModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#owner BranchingModel#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#repository BranchingModel#repository}
  */
  readonly repository: string;
  /**
  * branch_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#branch_type BranchingModel#branch_type}
  */
  readonly branchType?: BranchingModelBranchType[] | cdktf.IResolvable;
  /**
  * development block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#development BranchingModel#development}
  */
  readonly development: BranchingModelDevelopment;
  /**
  * production block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#production BranchingModel#production}
  */
  readonly production?: BranchingModelProduction;
}
export interface BranchingModelBranchType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#enabled BranchingModel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#kind BranchingModel#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#prefix BranchingModel#prefix}
  */
  readonly prefix?: string;
}

export function branchingModelBranchTypeToTerraform(struct?: BranchingModelBranchType | cdktf.IResolvable): any {
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


export function branchingModelBranchTypeToHclTerraform(struct?: BranchingModelBranchType | cdktf.IResolvable): any {
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

export class BranchingModelBranchTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchingModelBranchType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchingModelBranchType | cdktf.IResolvable | undefined) {
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

export class BranchingModelBranchTypeList extends cdktf.ComplexList {
  public internalValue? : BranchingModelBranchType[] | cdktf.IResolvable

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
  public get(index: number): BranchingModelBranchTypeOutputReference {
    return new BranchingModelBranchTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchingModelDevelopment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#branch_does_not_exist BranchingModel#branch_does_not_exist}
  */
  readonly branchDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#name BranchingModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#use_mainbranch BranchingModel#use_mainbranch}
  */
  readonly useMainbranch?: boolean | cdktf.IResolvable;
}

export function branchingModelDevelopmentToTerraform(struct?: BranchingModelDevelopmentOutputReference | BranchingModelDevelopment): any {
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


export function branchingModelDevelopmentToHclTerraform(struct?: BranchingModelDevelopmentOutputReference | BranchingModelDevelopment): any {
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

export class BranchingModelDevelopmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchingModelDevelopment | undefined {
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

  public set internalValue(value: BranchingModelDevelopment | undefined) {
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
export interface BranchingModelProduction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#branch_does_not_exist BranchingModel#branch_does_not_exist}
  */
  readonly branchDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#enabled BranchingModel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#name BranchingModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#use_mainbranch BranchingModel#use_mainbranch}
  */
  readonly useMainbranch?: boolean | cdktf.IResolvable;
}

export function branchingModelProductionToTerraform(struct?: BranchingModelProductionOutputReference | BranchingModelProduction): any {
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


export function branchingModelProductionToHclTerraform(struct?: BranchingModelProductionOutputReference | BranchingModelProduction): any {
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

export class BranchingModelProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchingModelProduction | undefined {
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

  public set internalValue(value: BranchingModelProduction | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model bitbucket_branching_model}
*/
export class BranchingModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_branching_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchingModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchingModel to import
  * @param importFromId The id of the existing BranchingModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchingModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_branching_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/branching_model bitbucket_branching_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchingModelConfig
  */
  public constructor(scope: Construct, id: string, config: BranchingModelConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_branching_model',
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
    this._defaultBranchDeletion = config.defaultBranchDeletion;
    this._id = config.id;
    this._owner = config.owner;
    this._repository = config.repository;
    this._branchType.internalValue = config.branchType;
    this._development.internalValue = config.development;
    this._production.internalValue = config.production;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_branch_deletion - computed: false, optional: true, required: false
  private _defaultBranchDeletion?: boolean | cdktf.IResolvable; 
  public get defaultBranchDeletion() {
    return this.getBooleanAttribute('default_branch_deletion');
  }
  public set defaultBranchDeletion(value: boolean | cdktf.IResolvable) {
    this._defaultBranchDeletion = value;
  }
  public resetDefaultBranchDeletion() {
    this._defaultBranchDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchDeletionInput() {
    return this._defaultBranchDeletion;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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

  // branch_type - computed: false, optional: true, required: false
  private _branchType = new BranchingModelBranchTypeList(this, "branch_type", true);
  public get branchType() {
    return this._branchType;
  }
  public putBranchType(value: BranchingModelBranchType[] | cdktf.IResolvable) {
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
  private _development = new BranchingModelDevelopmentOutputReference(this, "development");
  public get development() {
    return this._development;
  }
  public putDevelopment(value: BranchingModelDevelopment) {
    this._development.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development.internalValue;
  }

  // production - computed: false, optional: true, required: false
  private _production = new BranchingModelProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: BranchingModelProduction) {
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
      default_branch_deletion: cdktf.booleanToTerraform(this._defaultBranchDeletion),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
      branch_type: cdktf.listMapper(branchingModelBranchTypeToTerraform, true)(this._branchType.internalValue),
      development: branchingModelDevelopmentToTerraform(this._development.internalValue),
      production: branchingModelProductionToTerraform(this._production.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_branch_deletion: {
        value: cdktf.booleanToHclTerraform(this._defaultBranchDeletion),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
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
      branch_type: {
        value: cdktf.listMapperHcl(branchingModelBranchTypeToHclTerraform, true)(this._branchType.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BranchingModelBranchTypeList",
      },
      development: {
        value: branchingModelDevelopmentToHclTerraform(this._development.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchingModelDevelopmentList",
      },
      production: {
        value: branchingModelProductionToHclTerraform(this._production.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchingModelProductionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
