// https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBritiveApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of environment group ids for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#environment_group_ids DataBritiveApplication#environment_group_ids}
  */
  readonly environmentGroupIds?: string[];
  /**
  * A set of environment ids for the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#environment_ids DataBritiveApplication#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#id DataBritiveApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#name DataBritiveApplication#name}
  */
  readonly name: string;
  /**
  * environment_group_ids_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#environment_group_ids_names DataBritiveApplication#environment_group_ids_names}
  */
  readonly environmentGroupIdsNames?: DataBritiveApplicationEnvironmentGroupIdsNames[] | cdktf.IResolvable;
  /**
  * environment_ids_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#environment_ids_names DataBritiveApplication#environment_ids_names}
  */
  readonly environmentIdsNames?: DataBritiveApplicationEnvironmentIdsNames[] | cdktf.IResolvable;
}
export interface DataBritiveApplicationEnvironmentGroupIdsNames {
  /**
  * The environment group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#id DataBritiveApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The environment group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#name DataBritiveApplication#name}
  */
  readonly name: string;
}

export function dataBritiveApplicationEnvironmentGroupIdsNamesToTerraform(struct?: DataBritiveApplicationEnvironmentGroupIdsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataBritiveApplicationEnvironmentGroupIdsNamesToHclTerraform(struct?: DataBritiveApplicationEnvironmentGroupIdsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBritiveApplicationEnvironmentGroupIdsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBritiveApplicationEnvironmentGroupIdsNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBritiveApplicationEnvironmentGroupIdsNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataBritiveApplicationEnvironmentGroupIdsNamesList extends cdktf.ComplexList {
  public internalValue? : DataBritiveApplicationEnvironmentGroupIdsNames[] | cdktf.IResolvable

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
  public get(index: number): DataBritiveApplicationEnvironmentGroupIdsNamesOutputReference {
    return new DataBritiveApplicationEnvironmentGroupIdsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBritiveApplicationEnvironmentIdsNames {
  /**
  * The environment id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#id DataBritiveApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The environment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#name DataBritiveApplication#name}
  */
  readonly name: string;
}

export function dataBritiveApplicationEnvironmentIdsNamesToTerraform(struct?: DataBritiveApplicationEnvironmentIdsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataBritiveApplicationEnvironmentIdsNamesToHclTerraform(struct?: DataBritiveApplicationEnvironmentIdsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBritiveApplicationEnvironmentIdsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBritiveApplicationEnvironmentIdsNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBritiveApplicationEnvironmentIdsNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataBritiveApplicationEnvironmentIdsNamesList extends cdktf.ComplexList {
  public internalValue? : DataBritiveApplicationEnvironmentIdsNames[] | cdktf.IResolvable

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
  public get(index: number): DataBritiveApplicationEnvironmentIdsNamesOutputReference {
    return new DataBritiveApplicationEnvironmentIdsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application britive_application}
*/
export class DataBritiveApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBritiveApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBritiveApplication to import
  * @param importFromId The id of the existing DataBritiveApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBritiveApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.6/docs/data-sources/application britive_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBritiveApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataBritiveApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_application',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentGroupIds = config.environmentGroupIds;
    this._environmentIds = config.environmentIds;
    this._id = config.id;
    this._name = config.name;
    this._environmentGroupIdsNames.internalValue = config.environmentGroupIdsNames;
    this._environmentIdsNames.internalValue = config.environmentIdsNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_group_ids - computed: true, optional: true, required: false
  private _environmentGroupIds?: string[]; 
  public get environmentGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_group_ids'));
  }
  public set environmentGroupIds(value: string[]) {
    this._environmentGroupIds = value;
  }
  public resetEnvironmentGroupIds() {
    this._environmentGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentGroupIdsInput() {
    return this._environmentGroupIds;
  }

  // environment_ids - computed: true, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_ids'));
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
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

  // environment_group_ids_names - computed: false, optional: true, required: false
  private _environmentGroupIdsNames = new DataBritiveApplicationEnvironmentGroupIdsNamesList(this, "environment_group_ids_names", true);
  public get environmentGroupIdsNames() {
    return this._environmentGroupIdsNames;
  }
  public putEnvironmentGroupIdsNames(value: DataBritiveApplicationEnvironmentGroupIdsNames[] | cdktf.IResolvable) {
    this._environmentGroupIdsNames.internalValue = value;
  }
  public resetEnvironmentGroupIdsNames() {
    this._environmentGroupIdsNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentGroupIdsNamesInput() {
    return this._environmentGroupIdsNames.internalValue;
  }

  // environment_ids_names - computed: false, optional: true, required: false
  private _environmentIdsNames = new DataBritiveApplicationEnvironmentIdsNamesList(this, "environment_ids_names", true);
  public get environmentIdsNames() {
    return this._environmentIdsNames;
  }
  public putEnvironmentIdsNames(value: DataBritiveApplicationEnvironmentIdsNames[] | cdktf.IResolvable) {
    this._environmentIdsNames.internalValue = value;
  }
  public resetEnvironmentIdsNames() {
    this._environmentIdsNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsNamesInput() {
    return this._environmentIdsNames.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentGroupIds),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      environment_group_ids_names: cdktf.listMapper(dataBritiveApplicationEnvironmentGroupIdsNamesToTerraform, true)(this._environmentGroupIdsNames.internalValue),
      environment_ids_names: cdktf.listMapper(dataBritiveApplicationEnvironmentIdsNamesToTerraform, true)(this._environmentIdsNames.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      environment_group_ids_names: {
        value: cdktf.listMapperHcl(dataBritiveApplicationEnvironmentGroupIdsNamesToHclTerraform, true)(this._environmentGroupIdsNames.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataBritiveApplicationEnvironmentGroupIdsNamesList",
      },
      environment_ids_names: {
        value: cdktf.listMapperHcl(dataBritiveApplicationEnvironmentIdsNamesToHclTerraform, true)(this._environmentIdsNames.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataBritiveApplicationEnvironmentIdsNamesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
