// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfigInstanceParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#id SqlserverConfigInstanceParam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#instance_id SqlserverConfigInstanceParam#instance_id}
  */
  readonly instanceId: string;
  /**
  * param_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#param_list SqlserverConfigInstanceParam#param_list}
  */
  readonly paramList: SqlserverConfigInstanceParamParamListStruct[] | cdktf.IResolvable;
}
export interface SqlserverConfigInstanceParamParamListStruct {
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#current_value SqlserverConfigInstanceParam#current_value}
  */
  readonly currentValue?: string;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#name SqlserverConfigInstanceParam#name}
  */
  readonly name?: string;
}

export function sqlserverConfigInstanceParamParamListStructToTerraform(struct?: SqlserverConfigInstanceParamParamListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_value: cdktf.stringToTerraform(struct!.currentValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sqlserverConfigInstanceParamParamListStructToHclTerraform(struct?: SqlserverConfigInstanceParamParamListStruct | cdktf.IResolvable): any {
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

export class SqlserverConfigInstanceParamParamListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverConfigInstanceParamParamListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentValue = this._currentValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverConfigInstanceParamParamListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentValue = value.currentValue;
      this._name = value.name;
    }
  }

  // current_value - computed: false, optional: true, required: false
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
}

export class SqlserverConfigInstanceParamParamListStructList extends cdktf.ComplexList {
  public internalValue? : SqlserverConfigInstanceParamParamListStruct[] | cdktf.IResolvable

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
  public get(index: number): SqlserverConfigInstanceParamParamListStructOutputReference {
    return new SqlserverConfigInstanceParamParamListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param tencentcloud_sqlserver_config_instance_param}
*/
export class SqlserverConfigInstanceParam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_config_instance_param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverConfigInstanceParam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverConfigInstanceParam to import
  * @param importFromId The id of the existing SqlserverConfigInstanceParam that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverConfigInstanceParam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_config_instance_param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/sqlserver_config_instance_param tencentcloud_sqlserver_config_instance_param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfigInstanceParamConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfigInstanceParamConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_config_instance_param',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._instanceId = config.instanceId;
    this._paramList.internalValue = config.paramList;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // param_list - computed: false, optional: false, required: true
  private _paramList = new SqlserverConfigInstanceParamParamListStructList(this, "param_list", false);
  public get paramList() {
    return this._paramList;
  }
  public putParamList(value: SqlserverConfigInstanceParamParamListStruct[] | cdktf.IResolvable) {
    this._paramList.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      param_list: cdktf.listMapper(sqlserverConfigInstanceParamParamListStructToTerraform, true)(this._paramList.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_list: {
        value: cdktf.listMapperHcl(sqlserverConfigInstanceParamParamListStructToHclTerraform, true)(this._paramList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverConfigInstanceParamParamListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
