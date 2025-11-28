// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaussdbOpengaussParameterTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#description GaussdbOpengaussParameterTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#engine_version GaussdbOpengaussParameterTemplate#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#id GaussdbOpengaussParameterTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#instance_mode GaussdbOpengaussParameterTemplate#instance_mode}
  */
  readonly instanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#name GaussdbOpengaussParameterTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#region GaussdbOpengaussParameterTemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#source_configuration_id GaussdbOpengaussParameterTemplate#source_configuration_id}
  */
  readonly sourceConfigurationId?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#parameters GaussdbOpengaussParameterTemplate#parameters}
  */
  readonly parameters?: GaussdbOpengaussParameterTemplateParameters[] | cdktf.IResolvable;
}
export interface GaussdbOpengaussParameterTemplateParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#name GaussdbOpengaussParameterTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#value GaussdbOpengaussParameterTemplate#value}
  */
  readonly value: string;
}

export function gaussdbOpengaussParameterTemplateParametersToTerraform(struct?: GaussdbOpengaussParameterTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gaussdbOpengaussParameterTemplateParametersToHclTerraform(struct?: GaussdbOpengaussParameterTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class GaussdbOpengaussParameterTemplateParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaussdbOpengaussParameterTemplateParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaussdbOpengaussParameterTemplateParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // need_restart - computed: true, optional: false, required: false
  public get needRestart() {
    return this.getBooleanAttribute('need_restart');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
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

  // value_range - computed: true, optional: false, required: false
  public get valueRange() {
    return this.getStringAttribute('value_range');
  }
}

export class GaussdbOpengaussParameterTemplateParametersList extends cdktf.ComplexList {
  public internalValue? : GaussdbOpengaussParameterTemplateParameters[] | cdktf.IResolvable

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
  public get(index: number): GaussdbOpengaussParameterTemplateParametersOutputReference {
    return new GaussdbOpengaussParameterTemplateParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template hcs_gaussdb_opengauss_parameter_template}
*/
export class GaussdbOpengaussParameterTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_gaussdb_opengauss_parameter_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaussdbOpengaussParameterTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaussdbOpengaussParameterTemplate to import
  * @param importFromId The id of the existing GaussdbOpengaussParameterTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaussdbOpengaussParameterTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_gaussdb_opengauss_parameter_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/gaussdb_opengauss_parameter_template hcs_gaussdb_opengauss_parameter_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaussdbOpengaussParameterTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: GaussdbOpengaussParameterTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_gaussdb_opengauss_parameter_template',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
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
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceMode = config.instanceMode;
    this._name = config.name;
    this._region = config.region;
    this._sourceConfigurationId = config.sourceConfigurationId;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instance_mode - computed: true, optional: true, required: false
  private _instanceMode?: string; 
  public get instanceMode() {
    return this.getStringAttribute('instance_mode');
  }
  public set instanceMode(value: string) {
    this._instanceMode = value;
  }
  public resetInstanceMode() {
    this._instanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceModeInput() {
    return this._instanceMode;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // source_configuration_id - computed: false, optional: true, required: false
  private _sourceConfigurationId?: string; 
  public get sourceConfigurationId() {
    return this.getStringAttribute('source_configuration_id');
  }
  public set sourceConfigurationId(value: string) {
    this._sourceConfigurationId = value;
  }
  public resetSourceConfigurationId() {
    this._sourceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationIdInput() {
    return this._sourceConfigurationId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GaussdbOpengaussParameterTemplateParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GaussdbOpengaussParameterTemplateParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_mode: cdktf.stringToTerraform(this._instanceMode),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      source_configuration_id: cdktf.stringToTerraform(this._sourceConfigurationId),
      parameters: cdktf.listMapper(gaussdbOpengaussParameterTemplateParametersToTerraform, true)(this._parameters.internalValue),
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
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      instance_mode: {
        value: cdktf.stringToHclTerraform(this._instanceMode),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_configuration_id: {
        value: cdktf.stringToHclTerraform(this._sourceConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(gaussdbOpengaussParameterTemplateParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GaussdbOpengaussParameterTemplateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
