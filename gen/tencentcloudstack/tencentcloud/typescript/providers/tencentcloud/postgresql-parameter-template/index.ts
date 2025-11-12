// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlParameterTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database engine, such as postgresql, mssql_compatible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#db_engine PostgresqlParameterTemplate#db_engine}
  */
  readonly dbEngine: string;
  /**
  * The major database version number, such as 11, 12, 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#db_major_version PostgresqlParameterTemplate#db_major_version}
  */
  readonly dbMajorVersion: string;
  /**
  * The set of parameters that need to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#delete_param_set PostgresqlParameterTemplate#delete_param_set}
  */
  readonly deleteParamSet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#id PostgresqlParameterTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parameter template description, which can contain 1-60 letters, digits, and symbols (-_./()+=:@).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#template_description PostgresqlParameterTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Template name, which can contain 1-60 letters, digits, and symbols (-_./()+=:@).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#template_name PostgresqlParameterTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * modify_param_entry_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#modify_param_entry_set PostgresqlParameterTemplate#modify_param_entry_set}
  */
  readonly modifyParamEntrySet?: PostgresqlParameterTemplateModifyParamEntrySet[] | cdktf.IResolvable;
}
export interface PostgresqlParameterTemplateModifyParamEntrySet {
  /**
  * Modify the parameter value. The input parameters are passed in the form of strings, for example: decimal `0.1`, integer `1000`, enumeration `replica`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#expected_value PostgresqlParameterTemplate#expected_value}
  */
  readonly expectedValue: string;
  /**
  * The parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#name PostgresqlParameterTemplate#name}
  */
  readonly name: string;
}

export function postgresqlParameterTemplateModifyParamEntrySetToTerraform(struct?: PostgresqlParameterTemplateModifyParamEntrySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_value: cdktf.stringToTerraform(struct!.expectedValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function postgresqlParameterTemplateModifyParamEntrySetToHclTerraform(struct?: PostgresqlParameterTemplateModifyParamEntrySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_value: {
      value: cdktf.stringToHclTerraform(struct!.expectedValue),
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

export class PostgresqlParameterTemplateModifyParamEntrySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlParameterTemplateModifyParamEntrySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedValue = this._expectedValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlParameterTemplateModifyParamEntrySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedValue = value.expectedValue;
      this._name = value.name;
    }
  }

  // expected_value - computed: false, optional: false, required: true
  private _expectedValue?: string; 
  public get expectedValue() {
    return this.getStringAttribute('expected_value');
  }
  public set expectedValue(value: string) {
    this._expectedValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedValueInput() {
    return this._expectedValue;
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

export class PostgresqlParameterTemplateModifyParamEntrySetList extends cdktf.ComplexList {
  public internalValue? : PostgresqlParameterTemplateModifyParamEntrySet[] | cdktf.IResolvable

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
  public get(index: number): PostgresqlParameterTemplateModifyParamEntrySetOutputReference {
    return new PostgresqlParameterTemplateModifyParamEntrySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template tencentcloud_postgresql_parameter_template}
*/
export class PostgresqlParameterTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_parameter_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlParameterTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlParameterTemplate to import
  * @param importFromId The id of the existing PostgresqlParameterTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlParameterTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_parameter_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_parameter_template tencentcloud_postgresql_parameter_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlParameterTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlParameterTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_parameter_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbEngine = config.dbEngine;
    this._dbMajorVersion = config.dbMajorVersion;
    this._deleteParamSet = config.deleteParamSet;
    this._id = config.id;
    this._templateDescription = config.templateDescription;
    this._templateName = config.templateName;
    this._modifyParamEntrySet.internalValue = config.modifyParamEntrySet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_engine - computed: false, optional: false, required: true
  private _dbEngine?: string; 
  public get dbEngine() {
    return this.getStringAttribute('db_engine');
  }
  public set dbEngine(value: string) {
    this._dbEngine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEngineInput() {
    return this._dbEngine;
  }

  // db_major_version - computed: false, optional: false, required: true
  private _dbMajorVersion?: string; 
  public get dbMajorVersion() {
    return this.getStringAttribute('db_major_version');
  }
  public set dbMajorVersion(value: string) {
    this._dbMajorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMajorVersionInput() {
    return this._dbMajorVersion;
  }

  // delete_param_set - computed: false, optional: true, required: false
  private _deleteParamSet?: string[]; 
  public get deleteParamSet() {
    return cdktf.Fn.tolist(this.getListAttribute('delete_param_set'));
  }
  public set deleteParamSet(value: string[]) {
    this._deleteParamSet = value;
  }
  public resetDeleteParamSet() {
    this._deleteParamSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteParamSetInput() {
    return this._deleteParamSet;
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

  // template_description - computed: false, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
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

  // modify_param_entry_set - computed: false, optional: true, required: false
  private _modifyParamEntrySet = new PostgresqlParameterTemplateModifyParamEntrySetList(this, "modify_param_entry_set", true);
  public get modifyParamEntrySet() {
    return this._modifyParamEntrySet;
  }
  public putModifyParamEntrySet(value: PostgresqlParameterTemplateModifyParamEntrySet[] | cdktf.IResolvable) {
    this._modifyParamEntrySet.internalValue = value;
  }
  public resetModifyParamEntrySet() {
    this._modifyParamEntrySet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyParamEntrySetInput() {
    return this._modifyParamEntrySet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_engine: cdktf.stringToTerraform(this._dbEngine),
      db_major_version: cdktf.stringToTerraform(this._dbMajorVersion),
      delete_param_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deleteParamSet),
      id: cdktf.stringToTerraform(this._id),
      template_description: cdktf.stringToTerraform(this._templateDescription),
      template_name: cdktf.stringToTerraform(this._templateName),
      modify_param_entry_set: cdktf.listMapper(postgresqlParameterTemplateModifyParamEntrySetToTerraform, true)(this._modifyParamEntrySet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_engine: {
        value: cdktf.stringToHclTerraform(this._dbEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_major_version: {
        value: cdktf.stringToHclTerraform(this._dbMajorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_param_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deleteParamSet),
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
      template_description: {
        value: cdktf.stringToHclTerraform(this._templateDescription),
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
      modify_param_entry_set: {
        value: cdktf.listMapperHcl(postgresqlParameterTemplateModifyParamEntrySetToHclTerraform, true)(this._modifyParamEntrySet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PostgresqlParameterTemplateModifyParamEntrySetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
