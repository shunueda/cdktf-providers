// https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StepTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#id StepTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the step-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#name StepTypes#name}
  */
  readonly name: string;
  /**
  * The versions of the step-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#version StepTypes#version}
  */
  readonly version: StepTypesVersion[] | cdktf.IResolvable;
}
export interface StepTypesVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#step_types_yaml StepTypes#step_types_yaml}
  */
  readonly stepTypesYaml: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#version_number StepTypes#version_number}
  */
  readonly versionNumber: string;
}

export function stepTypesVersionToTerraform(struct?: StepTypesVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_types_yaml: cdktf.stringToTerraform(struct!.stepTypesYaml),
    version_number: cdktf.stringToTerraform(struct!.versionNumber),
  }
}


export function stepTypesVersionToHclTerraform(struct?: StepTypesVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_types_yaml: {
      value: cdktf.stringToHclTerraform(struct!.stepTypesYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_number: {
      value: cdktf.stringToHclTerraform(struct!.versionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StepTypesVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StepTypesVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepTypesYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepTypesYaml = this._stepTypesYaml;
    }
    if (this._versionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNumber = this._versionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepTypesVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepTypesYaml = undefined;
      this._versionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepTypesYaml = value.stepTypesYaml;
      this._versionNumber = value.versionNumber;
    }
  }

  // step_types_yaml - computed: false, optional: false, required: true
  private _stepTypesYaml?: string; 
  public get stepTypesYaml() {
    return this.getStringAttribute('step_types_yaml');
  }
  public set stepTypesYaml(value: string) {
    this._stepTypesYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepTypesYamlInput() {
    return this._stepTypesYaml;
  }

  // version_number - computed: false, optional: false, required: true
  private _versionNumber?: string; 
  public get versionNumber() {
    return this.getStringAttribute('version_number');
  }
  public set versionNumber(value: string) {
    this._versionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber;
  }
}

export class StepTypesVersionList extends cdktf.ComplexList {
  public internalValue? : StepTypesVersion[] | cdktf.IResolvable

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
  public get(index: number): StepTypesVersionOutputReference {
    return new StepTypesVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types codefresh_step_types}
*/
export class StepTypes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_step_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StepTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StepTypes to import
  * @param importFromId The id of the existing StepTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StepTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_step_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/resources/step_types codefresh_step_types} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StepTypesConfig
  */
  public constructor(scope: Construct, id: string, config: StepTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_step_types',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
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
    this._name = config.name;
    this._version.internalValue = config.version;
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

  // version - computed: false, optional: false, required: true
  private _version = new StepTypesVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: StepTypesVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.listMapper(stepTypesVersionToTerraform, false)(this._version.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.listMapperHcl(stepTypesVersionToHclTerraform, false)(this._version.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StepTypesVersionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
