// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbParamTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database type, optional values: NORMAL (default), SERVERLESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#db_mode CynosdbParamTemplate#db_mode}
  */
  readonly dbMode?: string;
  /**
  * MySQL version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#engine_version CynosdbParamTemplate#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#id CynosdbParamTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#template_description CynosdbParamTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Optional parameter, template ID to be copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#template_id CynosdbParamTemplate#template_id}
  */
  readonly templateId?: number;
  /**
  * Template Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#template_name CynosdbParamTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * param_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#param_list CynosdbParamTemplate#param_list}
  */
  readonly paramList?: CynosdbParamTemplateParamListStruct[] | cdktf.IResolvable;
}
export interface CynosdbParamTemplateParamListStruct {
  /**
  * Current value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#current_value CynosdbParamTemplate#current_value}
  */
  readonly currentValue?: string;
  /**
  * Parameter Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#param_name CynosdbParamTemplate#param_name}
  */
  readonly paramName?: string;
}

export function cynosdbParamTemplateParamListStructToTerraform(struct?: CynosdbParamTemplateParamListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_value: cdktf.stringToTerraform(struct!.currentValue),
    param_name: cdktf.stringToTerraform(struct!.paramName),
  }
}


export function cynosdbParamTemplateParamListStructToHclTerraform(struct?: CynosdbParamTemplateParamListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_value: {
      value: cdktf.stringToHclTerraform(struct!.currentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbParamTemplateParamListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbParamTemplateParamListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentValue = this._currentValue;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbParamTemplateParamListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentValue = undefined;
      this._paramName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentValue = value.currentValue;
      this._paramName = value.paramName;
    }
  }

  // current_value - computed: true, optional: true, required: false
  private _currentValue?: string; 
  public get currentValue() {
    return this.getStringAttribute('current_value');
  }
  public set currentValue(value: string) {
    this._currentValue = value;
  }
  public resetCurrentValue() {
    this._currentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentValueInput() {
    return this._currentValue;
  }

  // param_name - computed: true, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }
}

export class CynosdbParamTemplateParamListStructList extends cdktf.ComplexList {
  public internalValue? : CynosdbParamTemplateParamListStruct[] | cdktf.IResolvable

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
  public get(index: number): CynosdbParamTemplateParamListStructOutputReference {
    return new CynosdbParamTemplateParamListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template tencentcloud_cynosdb_param_template}
*/
export class CynosdbParamTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_param_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbParamTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbParamTemplate to import
  * @param importFromId The id of the existing CynosdbParamTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbParamTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_param_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cynosdb_param_template tencentcloud_cynosdb_param_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbParamTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbParamTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_param_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbMode = config.dbMode;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._templateDescription = config.templateDescription;
    this._templateId = config.templateId;
    this._templateName = config.templateName;
    this._paramList.internalValue = config.paramList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_mode - computed: false, optional: true, required: false
  private _dbMode?: string; 
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }
  public set dbMode(value: string) {
    this._dbMode = value;
  }
  public resetDbMode() {
    this._dbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModeInput() {
    return this._dbMode;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
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

  // template_id - computed: true, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
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

  // param_list - computed: false, optional: true, required: false
  private _paramList = new CynosdbParamTemplateParamListStructList(this, "param_list", true);
  public get paramList() {
    return this._paramList;
  }
  public putParamList(value: CynosdbParamTemplateParamListStruct[] | cdktf.IResolvable) {
    this._paramList.internalValue = value;
  }
  public resetParamList() {
    this._paramList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramListInput() {
    return this._paramList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_mode: cdktf.stringToTerraform(this._dbMode),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      template_description: cdktf.stringToTerraform(this._templateDescription),
      template_id: cdktf.numberToTerraform(this._templateId),
      template_name: cdktf.stringToTerraform(this._templateName),
      param_list: cdktf.listMapper(cynosdbParamTemplateParamListStructToTerraform, true)(this._paramList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_mode: {
        value: cdktf.stringToHclTerraform(this._dbMode),
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
      template_description: {
        value: cdktf.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.numberToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_list: {
        value: cdktf.listMapperHcl(cynosdbParamTemplateParamListStructToHclTerraform, true)(this._paramList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CynosdbParamTemplateParamListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
