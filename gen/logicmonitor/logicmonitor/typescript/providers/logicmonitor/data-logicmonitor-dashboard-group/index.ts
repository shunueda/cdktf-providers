// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorDashboardGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#dashboards DataLogicmonitorDashboardGroup#dashboards}
  */
  readonly dashboards?: DataLogicmonitorDashboardGroupDashboards[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#description DataLogicmonitorDashboardGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#filter DataLogicmonitorDashboardGroup#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#full_path DataLogicmonitorDashboardGroup#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#id DataLogicmonitorDashboardGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#name DataLogicmonitorDashboardGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#num_of_dashboards DataLogicmonitorDashboardGroup#num_of_dashboards}
  */
  readonly numOfDashboards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#num_of_direct_dashboards DataLogicmonitorDashboardGroup#num_of_direct_dashboards}
  */
  readonly numOfDirectDashboards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#num_of_direct_sub_groups DataLogicmonitorDashboardGroup#num_of_direct_sub_groups}
  */
  readonly numOfDirectSubGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#parent_id DataLogicmonitorDashboardGroup#parent_id}
  */
  readonly parentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#template DataLogicmonitorDashboardGroup#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#user_permission DataLogicmonitorDashboardGroup#user_permission}
  */
  readonly userPermission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#widget_tokens DataLogicmonitorDashboardGroup#widget_tokens}
  */
  readonly widgetTokens?: DataLogicmonitorDashboardGroupWidgetTokens[] | cdktf.IResolvable;
}
export interface DataLogicmonitorDashboardGroupDashboards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#id DataLogicmonitorDashboardGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#name DataLogicmonitorDashboardGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#sharable DataLogicmonitorDashboardGroup#sharable}
  */
  readonly sharable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#user_permission DataLogicmonitorDashboardGroup#user_permission}
  */
  readonly userPermission?: string;
}

export function dataLogicmonitorDashboardGroupDashboardsToTerraform(struct?: DataLogicmonitorDashboardGroupDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    sharable: cdktf.booleanToTerraform(struct!.sharable),
    user_permission: cdktf.stringToTerraform(struct!.userPermission),
  }
}


export function dataLogicmonitorDashboardGroupDashboardsToHclTerraform(struct?: DataLogicmonitorDashboardGroupDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharable: {
      value: cdktf.booleanToHclTerraform(struct!.sharable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_permission: {
      value: cdktf.stringToHclTerraform(struct!.userPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDashboardGroupDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDashboardGroupDashboards | cdktf.IResolvable | undefined {
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
    if (this._sharable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharable = this._sharable;
    }
    if (this._userPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPermission = this._userPermission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDashboardGroupDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._sharable = undefined;
      this._userPermission = undefined;
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
      this._sharable = value.sharable;
      this._userPermission = value.userPermission;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class DataLogicmonitorDashboardGroupDashboardsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDashboardGroupDashboards[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDashboardGroupDashboardsOutputReference {
    return new DataLogicmonitorDashboardGroupDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#fullpath DataLogicmonitorDashboardGroup#fullpath}
  */
  readonly fullpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#value DataLogicmonitorDashboardGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDashboardGroupWidgetTokensInheritListStructToTerraform(struct?: DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fullpath: cdktf.stringToTerraform(struct!.fullpath),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDashboardGroupWidgetTokensInheritListStructToHclTerraform(struct?: DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct | cdktf.IResolvable): any {
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

export class DataLogicmonitorDashboardGroupWidgetTokensInheritListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct | cdktf.IResolvable | undefined) {
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

export class DataLogicmonitorDashboardGroupWidgetTokensInheritListStructList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDashboardGroupWidgetTokensInheritListStructOutputReference {
    return new DataLogicmonitorDashboardGroupWidgetTokensInheritListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDashboardGroupWidgetTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#inherit_list DataLogicmonitorDashboardGroup#inherit_list}
  */
  readonly inheritList?: DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#name DataLogicmonitorDashboardGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#type DataLogicmonitorDashboardGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#value DataLogicmonitorDashboardGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDashboardGroupWidgetTokensToTerraform(struct?: DataLogicmonitorDashboardGroupWidgetTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_list: cdktf.listMapper(dataLogicmonitorDashboardGroupWidgetTokensInheritListStructToTerraform, false)(struct!.inheritList),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDashboardGroupWidgetTokensToHclTerraform(struct?: DataLogicmonitorDashboardGroupWidgetTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherit_list: {
      value: cdktf.listMapperHcl(dataLogicmonitorDashboardGroupWidgetTokensInheritListStructToHclTerraform, false)(struct!.inheritList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDashboardGroupWidgetTokensInheritListStructList",
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

export class DataLogicmonitorDashboardGroupWidgetTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorDashboardGroupWidgetTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogicmonitorDashboardGroupWidgetTokens | cdktf.IResolvable | undefined) {
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
  private _inheritList = new DataLogicmonitorDashboardGroupWidgetTokensInheritListStructList(this, "inherit_list", false);
  public get inheritList() {
    return this._inheritList;
  }
  public putInheritList(value: DataLogicmonitorDashboardGroupWidgetTokensInheritListStruct[] | cdktf.IResolvable) {
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

export class DataLogicmonitorDashboardGroupWidgetTokensList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDashboardGroupWidgetTokens[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorDashboardGroupWidgetTokensOutputReference {
    return new DataLogicmonitorDashboardGroupWidgetTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group logicmonitor_dashboard_group}
*/
export class DataLogicmonitorDashboardGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_dashboard_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorDashboardGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorDashboardGroup to import
  * @param importFromId The id of the existing DataLogicmonitorDashboardGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorDashboardGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_dashboard_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/dashboard_group logicmonitor_dashboard_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorDashboardGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorDashboardGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_dashboard_group',
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
    this._dashboards.internalValue = config.dashboards;
    this._description = config.description;
    this._filter = config.filter;
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._name = config.name;
    this._numOfDashboards = config.numOfDashboards;
    this._numOfDirectDashboards = config.numOfDirectDashboards;
    this._numOfDirectSubGroups = config.numOfDirectSubGroups;
    this._parentId = config.parentId;
    this._template = config.template;
    this._userPermission = config.userPermission;
    this._widgetTokens.internalValue = config.widgetTokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new DataLogicmonitorDashboardGroupDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: DataLogicmonitorDashboardGroupDashboards[] | cdktf.IResolvable) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
  }

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

  // full_path - computed: false, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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

  // num_of_dashboards - computed: false, optional: true, required: false
  private _numOfDashboards?: number; 
  public get numOfDashboards() {
    return this.getNumberAttribute('num_of_dashboards');
  }
  public set numOfDashboards(value: number) {
    this._numOfDashboards = value;
  }
  public resetNumOfDashboards() {
    this._numOfDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfDashboardsInput() {
    return this._numOfDashboards;
  }

  // num_of_direct_dashboards - computed: false, optional: true, required: false
  private _numOfDirectDashboards?: number; 
  public get numOfDirectDashboards() {
    return this.getNumberAttribute('num_of_direct_dashboards');
  }
  public set numOfDirectDashboards(value: number) {
    this._numOfDirectDashboards = value;
  }
  public resetNumOfDirectDashboards() {
    this._numOfDirectDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfDirectDashboardsInput() {
    return this._numOfDirectDashboards;
  }

  // num_of_direct_sub_groups - computed: false, optional: true, required: false
  private _numOfDirectSubGroups?: number; 
  public get numOfDirectSubGroups() {
    return this.getNumberAttribute('num_of_direct_sub_groups');
  }
  public set numOfDirectSubGroups(value: number) {
    this._numOfDirectSubGroups = value;
  }
  public resetNumOfDirectSubGroups() {
    this._numOfDirectSubGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfDirectSubGroupsInput() {
    return this._numOfDirectSubGroups;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
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
  private _widgetTokens = new DataLogicmonitorDashboardGroupWidgetTokensList(this, "widget_tokens", false);
  public get widgetTokens() {
    return this._widgetTokens;
  }
  public putWidgetTokens(value: DataLogicmonitorDashboardGroupWidgetTokens[] | cdktf.IResolvable) {
    this._widgetTokens.internalValue = value;
  }
  public resetWidgetTokens() {
    this._widgetTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTokensInput() {
    return this._widgetTokens.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboards: cdktf.listMapper(dataLogicmonitorDashboardGroupDashboardsToTerraform, false)(this._dashboards.internalValue),
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      full_path: cdktf.stringToTerraform(this._fullPath),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_of_dashboards: cdktf.numberToTerraform(this._numOfDashboards),
      num_of_direct_dashboards: cdktf.numberToTerraform(this._numOfDirectDashboards),
      num_of_direct_sub_groups: cdktf.numberToTerraform(this._numOfDirectSubGroups),
      parent_id: cdktf.numberToTerraform(this._parentId),
      template: cdktf.hashMapper(cdktf.stringToTerraform)(this._template),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      widget_tokens: cdktf.listMapper(dataLogicmonitorDashboardGroupWidgetTokensToTerraform, false)(this._widgetTokens.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboards: {
        value: cdktf.listMapperHcl(dataLogicmonitorDashboardGroupDashboardsToHclTerraform, false)(this._dashboards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDashboardGroupDashboardsList",
      },
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
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
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
      num_of_dashboards: {
        value: cdktf.numberToHclTerraform(this._numOfDashboards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_direct_dashboards: {
        value: cdktf.numberToHclTerraform(this._numOfDirectDashboards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_direct_sub_groups: {
        value: cdktf.numberToHclTerraform(this._numOfDirectSubGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.listMapperHcl(dataLogicmonitorDashboardGroupWidgetTokensToHclTerraform, false)(this._widgetTokens.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorDashboardGroupWidgetTokensList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
