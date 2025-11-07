// https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * In a project, an array of environment names in which this pipeline source will be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#environments ProjectIntegration#environments}
  */
  readonly environments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#id ProjectIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this as false to create a Pipelines integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#is_internal ProjectIntegration#is_internal}
  */
  readonly isInternal?: boolean | cdktf.IResolvable;
  /**
  * The Id of the master integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#master_integration_id ProjectIntegration#master_integration_id}
  */
  readonly masterIntegrationId: number;
  /**
  * The name of the master integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#master_integration_name ProjectIntegration#master_integration_name}
  */
  readonly masterIntegrationName?: string;
  /**
  * The name of the project integration. Should be prefixed with the project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#name ProjectIntegration#name}
  */
  readonly name: string;
  /**
  * Id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#project_id ProjectIntegration#project_id}
  */
  readonly projectId?: number;
  /**
  * form_json_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#form_json_values ProjectIntegration#form_json_values}
  */
  readonly formJsonValues: ProjectIntegrationFormJsonValues[] | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#project ProjectIntegration#project}
  */
  readonly project?: ProjectIntegrationProject;
}
export interface ProjectIntegrationFormJsonValues {
  /**
  * Is the underlying Value sensitive or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#is_sensitive ProjectIntegration#is_sensitive}
  */
  readonly isSensitive?: boolean | cdktf.IResolvable;
  /**
  * Key or label of the input property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#label ProjectIntegration#label}
  */
  readonly label: string;
  /**
  * Value of the input property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#value ProjectIntegration#value}
  */
  readonly value: string;
}

export function projectIntegrationFormJsonValuesToTerraform(struct?: ProjectIntegrationFormJsonValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_sensitive: cdktf.booleanToTerraform(struct!.isSensitive),
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectIntegrationFormJsonValuesToHclTerraform(struct?: ProjectIntegrationFormJsonValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.isSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIntegrationFormJsonValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectIntegrationFormJsonValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIntegrationFormJsonValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSensitive = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSensitive = value.isSensitive;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: boolean | cdktf.IResolvable; 
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }
  public set isSensitive(value: boolean | cdktf.IResolvable) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectIntegrationFormJsonValuesList extends cdktf.ComplexList {
  public internalValue? : ProjectIntegrationFormJsonValues[] | cdktf.IResolvable

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
  public get(index: number): ProjectIntegrationFormJsonValuesOutputReference {
    return new ProjectIntegrationFormJsonValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectIntegrationProject {
  /**
  * Key of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#key ProjectIntegration#key}
  */
  readonly key: string;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#name ProjectIntegration#name}
  */
  readonly name: string;
}

export function projectIntegrationProjectToTerraform(struct?: ProjectIntegrationProjectOutputReference | ProjectIntegrationProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function projectIntegrationProjectToHclTerraform(struct?: ProjectIntegrationProjectOutputReference | ProjectIntegrationProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ProjectIntegrationProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectIntegrationProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIntegrationProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration pipeline_project_integration}
*/
export class ProjectIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipeline_project_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIntegration to import
  * @param importFromId The id of the existing ProjectIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipeline_project_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/project_integration pipeline_project_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'pipeline_project_integration',
      terraformGeneratorMetadata: {
        providerName: 'pipeline',
        providerVersion: '1.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environments = config.environments;
    this._id = config.id;
    this._isInternal = config.isInternal;
    this._masterIntegrationId = config.masterIntegrationId;
    this._masterIntegrationName = config.masterIntegrationName;
    this._name = config.name;
    this._projectId = config.projectId;
    this._formJsonValues.internalValue = config.formJsonValues;
    this._project.internalValue = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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

  // is_internal - computed: false, optional: true, required: false
  private _isInternal?: boolean | cdktf.IResolvable; 
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }
  public set isInternal(value: boolean | cdktf.IResolvable) {
    this._isInternal = value;
  }
  public resetIsInternal() {
    this._isInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalInput() {
    return this._isInternal;
  }

  // master_integration_id - computed: false, optional: false, required: true
  private _masterIntegrationId?: number; 
  public get masterIntegrationId() {
    return this.getNumberAttribute('master_integration_id');
  }
  public set masterIntegrationId(value: number) {
    this._masterIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIntegrationIdInput() {
    return this._masterIntegrationId;
  }

  // master_integration_name - computed: false, optional: true, required: false
  private _masterIntegrationName?: string; 
  public get masterIntegrationName() {
    return this.getStringAttribute('master_integration_name');
  }
  public set masterIntegrationName(value: string) {
    this._masterIntegrationName = value;
  }
  public resetMasterIntegrationName() {
    this._masterIntegrationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIntegrationNameInput() {
    return this._masterIntegrationName;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // form_json_values - computed: false, optional: false, required: true
  private _formJsonValues = new ProjectIntegrationFormJsonValuesList(this, "form_json_values", false);
  public get formJsonValues() {
    return this._formJsonValues;
  }
  public putFormJsonValues(value: ProjectIntegrationFormJsonValues[] | cdktf.IResolvable) {
    this._formJsonValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formJsonValuesInput() {
    return this._formJsonValues.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new ProjectIntegrationProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: ProjectIntegrationProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      id: cdktf.stringToTerraform(this._id),
      is_internal: cdktf.booleanToTerraform(this._isInternal),
      master_integration_id: cdktf.numberToTerraform(this._masterIntegrationId),
      master_integration_name: cdktf.stringToTerraform(this._masterIntegrationName),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      form_json_values: cdktf.listMapper(projectIntegrationFormJsonValuesToTerraform, true)(this._formJsonValues.internalValue),
      project: projectIntegrationProjectToTerraform(this._project.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_internal: {
        value: cdktf.booleanToHclTerraform(this._isInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_integration_id: {
        value: cdktf.numberToHclTerraform(this._masterIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_integration_name: {
        value: cdktf.stringToHclTerraform(this._masterIntegrationName),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      form_json_values: {
        value: cdktf.listMapperHcl(projectIntegrationFormJsonValuesToHclTerraform, true)(this._formJsonValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectIntegrationFormJsonValuesList",
      },
      project: {
        value: projectIntegrationProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectIntegrationProjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
