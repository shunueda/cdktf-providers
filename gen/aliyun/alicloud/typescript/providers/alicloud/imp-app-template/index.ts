// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImpAppTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#app_template_name ImpAppTemplate#app_template_name}
  */
  readonly appTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#component_list ImpAppTemplate#component_list}
  */
  readonly componentList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#id ImpAppTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#integration_mode ImpAppTemplate#integration_mode}
  */
  readonly integrationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#scene ImpAppTemplate#scene}
  */
  readonly scene?: string;
  /**
  * config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#config_list ImpAppTemplate#config_list}
  */
  readonly configList?: ImpAppTemplateConfigListStruct[] | cdktf.IResolvable;
}
export interface ImpAppTemplateConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#key ImpAppTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#value ImpAppTemplate#value}
  */
  readonly value?: string;
}

export function impAppTemplateConfigListStructToTerraform(struct?: ImpAppTemplateConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function impAppTemplateConfigListStructToHclTerraform(struct?: ImpAppTemplateConfigListStruct | cdktf.IResolvable): any {
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

export class ImpAppTemplateConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImpAppTemplateConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImpAppTemplateConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ImpAppTemplateConfigListStructList extends cdktf.ComplexList {
  public internalValue? : ImpAppTemplateConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): ImpAppTemplateConfigListStructOutputReference {
    return new ImpAppTemplateConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template alicloud_imp_app_template}
*/
export class ImpAppTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_imp_app_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImpAppTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImpAppTemplate to import
  * @param importFromId The id of the existing ImpAppTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImpAppTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_imp_app_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/imp_app_template alicloud_imp_app_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImpAppTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ImpAppTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_imp_app_template',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appTemplateName = config.appTemplateName;
    this._componentList = config.componentList;
    this._id = config.id;
    this._integrationMode = config.integrationMode;
    this._scene = config.scene;
    this._configList.internalValue = config.configList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_template_name - computed: false, optional: false, required: true
  private _appTemplateName?: string; 
  public get appTemplateName() {
    return this.getStringAttribute('app_template_name');
  }
  public set appTemplateName(value: string) {
    this._appTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTemplateNameInput() {
    return this._appTemplateName;
  }

  // component_list - computed: false, optional: false, required: true
  private _componentList?: string[]; 
  public get componentList() {
    return this.getListAttribute('component_list');
  }
  public set componentList(value: string[]) {
    this._componentList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentListInput() {
    return this._componentList;
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

  // integration_mode - computed: false, optional: true, required: false
  private _integrationMode?: string; 
  public get integrationMode() {
    return this.getStringAttribute('integration_mode');
  }
  public set integrationMode(value: string) {
    this._integrationMode = value;
  }
  public resetIntegrationMode() {
    this._integrationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationModeInput() {
    return this._integrationMode;
  }

  // scene - computed: false, optional: true, required: false
  private _scene?: string; 
  public get scene() {
    return this.getStringAttribute('scene');
  }
  public set scene(value: string) {
    this._scene = value;
  }
  public resetScene() {
    this._scene = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneInput() {
    return this._scene;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // config_list - computed: false, optional: true, required: false
  private _configList = new ImpAppTemplateConfigListStructList(this, "config_list", true);
  public get configList() {
    return this._configList;
  }
  public putConfigList(value: ImpAppTemplateConfigListStruct[] | cdktf.IResolvable) {
    this._configList.internalValue = value;
  }
  public resetConfigList() {
    this._configList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configListInput() {
    return this._configList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_template_name: cdktf.stringToTerraform(this._appTemplateName),
      component_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentList),
      id: cdktf.stringToTerraform(this._id),
      integration_mode: cdktf.stringToTerraform(this._integrationMode),
      scene: cdktf.stringToTerraform(this._scene),
      config_list: cdktf.listMapper(impAppTemplateConfigListStructToTerraform, true)(this._configList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_template_name: {
        value: cdktf.stringToHclTerraform(this._appTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentList),
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
      integration_mode: {
        value: cdktf.stringToHclTerraform(this._integrationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scene: {
        value: cdktf.stringToHclTerraform(this._scene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_list: {
        value: cdktf.listMapperHcl(impAppTemplateConfigListStructToHclTerraform, true)(this._configList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImpAppTemplateConfigListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
