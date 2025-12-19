// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPathOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#id DataThunderSystemPathOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#l2hm_path_name DataThunderSystemPathOper#l2hm_path_name}
  */
  readonly l2HmPathName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#oper DataThunderSystemPathOper#oper}
  */
  readonly oper?: DataThunderSystemPathOperOper;
}
export interface DataThunderSystemPathOperOperPathListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#apps DataThunderSystemPathOper#apps}
  */
  readonly apps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#endpoint_1 DataThunderSystemPathOper#endpoint_1}
  */
  readonly endpoint1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#endpoint_2 DataThunderSystemPathOper#endpoint_2}
  */
  readonly endpoint2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#health_check DataThunderSystemPathOper#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#l2hm_path DataThunderSystemPathOper#l2hm_path}
  */
  readonly l2HmPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#path_state DataThunderSystemPathOper#path_state}
  */
  readonly pathState?: string;
}

export function dataThunderSystemPathOperOperPathListStructToTerraform(struct?: DataThunderSystemPathOperOperPathListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.stringToTerraform(struct!.apps),
    endpoint_1: cdktf.stringToTerraform(struct!.endpoint1),
    endpoint_2: cdktf.stringToTerraform(struct!.endpoint2),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    l2hm_path: cdktf.stringToTerraform(struct!.l2HmPath),
    path_state: cdktf.stringToTerraform(struct!.pathState),
  }
}


export function dataThunderSystemPathOperOperPathListStructToHclTerraform(struct?: DataThunderSystemPathOperOperPathListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.stringToHclTerraform(struct!.apps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_1: {
      value: cdktf.stringToHclTerraform(struct!.endpoint1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_2: {
      value: cdktf.stringToHclTerraform(struct!.endpoint2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2hm_path: {
      value: cdktf.stringToHclTerraform(struct!.l2HmPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_state: {
      value: cdktf.stringToHclTerraform(struct!.pathState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPathOperOperPathListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemPathOperOperPathListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._endpoint1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint1 = this._endpoint1;
    }
    if (this._endpoint2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint2 = this._endpoint2;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._l2HmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmPath = this._l2HmPath;
    }
    if (this._pathState !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathState = this._pathState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPathOperOperPathListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apps = undefined;
      this._endpoint1 = undefined;
      this._endpoint2 = undefined;
      this._healthCheck = undefined;
      this._l2HmPath = undefined;
      this._pathState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apps = value.apps;
      this._endpoint1 = value.endpoint1;
      this._endpoint2 = value.endpoint2;
      this._healthCheck = value.healthCheck;
      this._l2HmPath = value.l2HmPath;
      this._pathState = value.pathState;
    }
  }

  // apps - computed: false, optional: true, required: false
  private _apps?: string; 
  public get apps() {
    return this.getStringAttribute('apps');
  }
  public set apps(value: string) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // endpoint_1 - computed: false, optional: true, required: false
  private _endpoint1?: string; 
  public get endpoint1() {
    return this.getStringAttribute('endpoint_1');
  }
  public set endpoint1(value: string) {
    this._endpoint1 = value;
  }
  public resetEndpoint1() {
    this._endpoint1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpoint1Input() {
    return this._endpoint1;
  }

  // endpoint_2 - computed: false, optional: true, required: false
  private _endpoint2?: string; 
  public get endpoint2() {
    return this.getStringAttribute('endpoint_2');
  }
  public set endpoint2(value: string) {
    this._endpoint2 = value;
  }
  public resetEndpoint2() {
    this._endpoint2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpoint2Input() {
    return this._endpoint2;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // l2hm_path - computed: false, optional: true, required: false
  private _l2HmPath?: string; 
  public get l2HmPath() {
    return this.getStringAttribute('l2hm_path');
  }
  public set l2HmPath(value: string) {
    this._l2HmPath = value;
  }
  public resetL2HmPath() {
    this._l2HmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmPathInput() {
    return this._l2HmPath;
  }

  // path_state - computed: false, optional: true, required: false
  private _pathState?: string; 
  public get pathState() {
    return this.getStringAttribute('path_state');
  }
  public set pathState(value: string) {
    this._pathState = value;
  }
  public resetPathState() {
    this._pathState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathStateInput() {
    return this._pathState;
  }
}

export class DataThunderSystemPathOperOperPathListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemPathOperOperPathListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemPathOperOperPathListStructOutputReference {
    return new DataThunderSystemPathOperOperPathListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemPathOperOper {
  /**
  * path_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#path_list DataThunderSystemPathOper#path_list}
  */
  readonly pathList?: DataThunderSystemPathOperOperPathListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemPathOperOperToTerraform(struct?: DataThunderSystemPathOperOperOutputReference | DataThunderSystemPathOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_list: cdktf.listMapper(dataThunderSystemPathOperOperPathListStructToTerraform, true)(struct!.pathList),
  }
}


export function dataThunderSystemPathOperOperToHclTerraform(struct?: DataThunderSystemPathOperOperOutputReference | DataThunderSystemPathOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_list: {
      value: cdktf.listMapperHcl(dataThunderSystemPathOperOperPathListStructToHclTerraform, true)(struct!.pathList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemPathOperOperPathListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPathOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPathOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathList = this._pathList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPathOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pathList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pathList.internalValue = value.pathList;
    }
  }

  // path_list - computed: false, optional: true, required: false
  private _pathList = new DataThunderSystemPathOperOperPathListStructList(this, "path_list", false);
  public get pathList() {
    return this._pathList;
  }
  public putPathList(value: DataThunderSystemPathOperOperPathListStruct[] | cdktf.IResolvable) {
    this._pathList.internalValue = value;
  }
  public resetPathList() {
    this._pathList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathListInput() {
    return this._pathList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper thunder_system_path_oper}
*/
export class DataThunderSystemPathOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_path_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPathOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPathOper to import
  * @param importFromId The id of the existing DataThunderSystemPathOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPathOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_path_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_path_oper thunder_system_path_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPathOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPathOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_path_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._l2HmPathName = config.l2HmPathName;
    this._oper.internalValue = config.oper;
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

  // l2hm_path_name - computed: false, optional: false, required: true
  private _l2HmPathName?: string; 
  public get l2HmPathName() {
    return this.getStringAttribute('l2hm_path_name');
  }
  public set l2HmPathName(value: string) {
    this._l2HmPathName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmPathNameInput() {
    return this._l2HmPathName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemPathOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemPathOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      l2hm_path_name: cdktf.stringToTerraform(this._l2HmPathName),
      oper: dataThunderSystemPathOperOperToTerraform(this._oper.internalValue),
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
      l2hm_path_name: {
        value: cdktf.stringToHclTerraform(this._l2HmPathName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSystemPathOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPathOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
