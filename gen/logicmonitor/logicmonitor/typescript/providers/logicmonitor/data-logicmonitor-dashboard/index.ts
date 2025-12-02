// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#description DataLogicmonitorDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#filter DataLogicmonitorDashboard#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#full_name DataLogicmonitorDashboard#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#group_full_path DataLogicmonitorDashboard#group_full_path}
  */
  readonly groupFullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#group_id DataLogicmonitorDashboard#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#group_name DataLogicmonitorDashboard#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#id DataLogicmonitorDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#name DataLogicmonitorDashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#owner DataLogicmonitorDashboard#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#sharable DataLogicmonitorDashboard#sharable}
  */
  readonly sharable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#template DataLogicmonitorDashboard#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#user_permission DataLogicmonitorDashboard#user_permission}
  */
  readonly userPermission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#widget_tokens DataLogicmonitorDashboard#widget_tokens}
  */
  readonly widgetTokens?: DataLogicmonitorDashboardWidgetTokens[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#widgets_config DataLogicmonitorDashboard#widgets_config}
  */
  readonly widgetsConfig?: { [key: string]: string };
}
export interface DataLogicmonitorDashboardWidgetTokensInheritListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#fullpath DataLogicmonitorDashboard#fullpath}
  */
  readonly fullpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#value DataLogicmonitorDashboard#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDashboardWidgetTokensInheritListStructToTerraform(struct?: DataLogicmonitorDashboardWidgetTokensInheritListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fullpath: cdktf.stringToTerraform(struct!.fullpath),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDashboardWidgetTokensInheritListStructToHclTerraform(struct?: DataLogicmonitorDashboardWidgetTokensInheritListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fullpath: {
      value: cdktf.stringToHclTerraform(struct!.fullpath),
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

export class DataLogicmonitorDashboardWidgetTokensInheritListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDashboardWidgetTokensInheritListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullpath = this._fullpath;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDashboardWidgetTokensInheritListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullpath = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullpath = value.fullpath;
      this._value = value.value;
    }
  }

  // fullpath - computed: false, optional: true, required: false
  private _fullpath?: string; 
  public get fullpath() {
    return this.getStringAttribute('fullpath');
  }
  public set fullpath(value: string) {
    this._fullpath = value;
  }
  public resetFullpath() {
    this._fullpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullpathInput() {
    return this._fullpath;
  }

  // value - computed: false, optional: true, required: false
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

export class DataLogicmonitorDashboardWidgetTokensInheritListStructList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDashboardWidgetTokensInheritListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDashboardWidgetTokensInheritListStructOutputReference {
    return new DataLogicmonitorDashboardWidgetTokensInheritListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDashboardWidgetTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#inherit_list DataLogicmonitorDashboard#inherit_list}
  */
  readonly inheritList?: DataLogicmonitorDashboardWidgetTokensInheritListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#name DataLogicmonitorDashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#type DataLogicmonitorDashboard#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#value DataLogicmonitorDashboard#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDashboardWidgetTokensToTerraform(struct?: DataLogicmonitorDashboardWidgetTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_list: cdktf.listMapper(dataLogicmonitorDashboardWidgetTokensInheritListStructToTerraform, false)(struct!.inheritList),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDashboardWidgetTokensToHclTerraform(struct?: DataLogicmonitorDashboardWidgetTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherit_list: {
      value: cdktf.listMapperHcl(dataLogicmonitorDashboardWidgetTokensInheritListStructToHclTerraform, false)(struct!.inheritList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDashboardWidgetTokensInheritListStructList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataLogicmonitorDashboardWidgetTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDashboardWidgetTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritList = this._inheritList?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDashboardWidgetTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inheritList.internalValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inheritList.internalValue = value.inheritList;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // inherit_list - computed: false, optional: true, required: false
  private _inheritList = new DataLogicmonitorDashboardWidgetTokensInheritListStructList(this, "inherit_list", false);
  public get inheritList() {
    return this._inheritList;
  }
  public putInheritList(value: DataLogicmonitorDashboardWidgetTokensInheritListStruct[] | cdktf.IResolvable) {
    this._inheritList.internalValue = value;
  }
  public resetInheritList() {
    this._inheritList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritListInput() {
    return this._inheritList.internalValue;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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

export class DataLogicmonitorDashboardWidgetTokensList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDashboardWidgetTokens[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDashboardWidgetTokensOutputReference {
    return new DataLogicmonitorDashboardWidgetTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard logicmonitor_dashboard}
*/
export class DataLogicmonitorDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorDashboard to import
  * @param importFromId The id of the existing DataLogicmonitorDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard logicmonitor_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorDashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorDashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
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
    this._filter = config.filter;
    this._fullName = config.fullName;
    this._groupFullPath = config.groupFullPath;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._sharable = config.sharable;
    this._template = config.template;
    this._userPermission = config.userPermission;
    this._widgetTokens.internalValue = config.widgetTokens;
    this._widgetsConfig = config.widgetsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // group_full_path - computed: false, optional: true, required: false
  private _groupFullPath?: string; 
  public get groupFullPath() {
    return this.getStringAttribute('group_full_path');
  }
  public set groupFullPath(value: string) {
    this._groupFullPath = value;
  }
  public resetGroupFullPath() {
    this._groupFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFullPathInput() {
    return this._groupFullPath;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // sharable - computed: false, optional: true, required: false
  private _sharable?: boolean | cdktf.IResolvable; 
  public get sharable() {
    return this.getBooleanAttribute('sharable');
  }
  public set sharable(value: boolean | cdktf.IResolvable) {
    this._sharable = value;
  }
  public resetSharable() {
    this._sharable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharableInput() {
    return this._sharable;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // widget_tokens - computed: false, optional: true, required: false
  private _widgetTokens = new DataLogicmonitorDashboardWidgetTokensList(this, "widget_tokens", false);
  public get widgetTokens() {
    return this._widgetTokens;
  }
  public putWidgetTokens(value: DataLogicmonitorDashboardWidgetTokens[] | cdktf.IResolvable) {
    this._widgetTokens.internalValue = value;
  }
  public resetWidgetTokens() {
    this._widgetTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTokensInput() {
    return this._widgetTokens.internalValue;
  }

  // widgets_config - computed: false, optional: true, required: false
  private _widgetsConfig?: { [key: string]: string }; 
  public get widgetsConfig() {
    return this.getStringMapAttribute('widgets_config');
  }
  public set widgetsConfig(value: { [key: string]: string }) {
    this._widgetsConfig = value;
  }
  public resetWidgetsConfig() {
    this._widgetsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetsConfigInput() {
    return this._widgetsConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      full_name: cdktf.stringToTerraform(this._fullName),
      group_full_path: cdktf.stringToTerraform(this._groupFullPath),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      sharable: cdktf.booleanToTerraform(this._sharable),
      template: cdktf.hashMapper(cdktf.stringToTerraform)(this._template),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      widget_tokens: cdktf.listMapper(dataLogicmonitorDashboardWidgetTokensToTerraform, false)(this._widgetTokens.internalValue),
      widgets_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._widgetsConfig),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_full_path: {
        value: cdktf.stringToHclTerraform(this._groupFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      sharable: {
        value: cdktf.booleanToHclTerraform(this._sharable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._template),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      widget_tokens: {
        value: cdktf.listMapperHcl(dataLogicmonitorDashboardWidgetTokensToHclTerraform, false)(this._widgetTokens.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDashboardWidgetTokensList",
      },
      widgets_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._widgetsConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
