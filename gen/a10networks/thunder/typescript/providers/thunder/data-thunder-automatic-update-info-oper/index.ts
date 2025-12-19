// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAutomaticUpdateInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#id DataThunderAutomaticUpdateInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#oper DataThunderAutomaticUpdateInfoOper#oper}
  */
  readonly oper?: DataThunderAutomaticUpdateInfoOperOper;
}
export interface DataThunderAutomaticUpdateInfoOperOperFeatureListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#feature_name DataThunderAutomaticUpdateInfoOper#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#last_update DataThunderAutomaticUpdateInfoOper#last_update}
  */
  readonly lastUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#next_check DataThunderAutomaticUpdateInfoOper#next_check}
  */
  readonly nextCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#schedule DataThunderAutomaticUpdateInfoOper#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#time DataThunderAutomaticUpdateInfoOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#version DataThunderAutomaticUpdateInfoOper#version}
  */
  readonly version?: string;
}

export function dataThunderAutomaticUpdateInfoOperOperFeatureListStructToTerraform(struct?: DataThunderAutomaticUpdateInfoOperOperFeatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    last_update: cdktf.stringToTerraform(struct!.lastUpdate),
    next_check: cdktf.stringToTerraform(struct!.nextCheck),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    time: cdktf.stringToTerraform(struct!.time),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataThunderAutomaticUpdateInfoOperOperFeatureListStructToHclTerraform(struct?: DataThunderAutomaticUpdateInfoOperOperFeatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_check: {
      value: cdktf.stringToHclTerraform(struct!.nextCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAutomaticUpdateInfoOperOperFeatureListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAutomaticUpdateInfoOperOperFeatureListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._lastUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdate = this._lastUpdate;
    }
    if (this._nextCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextCheck = this._nextCheck;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAutomaticUpdateInfoOperOperFeatureListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureName = undefined;
      this._lastUpdate = undefined;
      this._nextCheck = undefined;
      this._schedule = undefined;
      this._time = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureName = value.featureName;
      this._lastUpdate = value.lastUpdate;
      this._nextCheck = value.nextCheck;
      this._schedule = value.schedule;
      this._time = value.time;
      this._version = value.version;
    }
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // last_update - computed: false, optional: true, required: false
  private _lastUpdate?: string; 
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
  public set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
  public resetLastUpdate() {
    this._lastUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateInput() {
    return this._lastUpdate;
  }

  // next_check - computed: false, optional: true, required: false
  private _nextCheck?: string; 
  public get nextCheck() {
    return this.getStringAttribute('next_check');
  }
  public set nextCheck(value: string) {
    this._nextCheck = value;
  }
  public resetNextCheck() {
    this._nextCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextCheckInput() {
    return this._nextCheck;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataThunderAutomaticUpdateInfoOperOperFeatureListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAutomaticUpdateInfoOperOperFeatureListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAutomaticUpdateInfoOperOperFeatureListStructOutputReference {
    return new DataThunderAutomaticUpdateInfoOperOperFeatureListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAutomaticUpdateInfoOperOper {
  /**
  * feature_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#feature_list DataThunderAutomaticUpdateInfoOper#feature_list}
  */
  readonly featureList?: DataThunderAutomaticUpdateInfoOperOperFeatureListStruct[] | cdktf.IResolvable;
}

export function dataThunderAutomaticUpdateInfoOperOperToTerraform(struct?: DataThunderAutomaticUpdateInfoOperOperOutputReference | DataThunderAutomaticUpdateInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_list: cdktf.listMapper(dataThunderAutomaticUpdateInfoOperOperFeatureListStructToTerraform, true)(struct!.featureList),
  }
}


export function dataThunderAutomaticUpdateInfoOperOperToHclTerraform(struct?: DataThunderAutomaticUpdateInfoOperOperOutputReference | DataThunderAutomaticUpdateInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_list: {
      value: cdktf.listMapperHcl(dataThunderAutomaticUpdateInfoOperOperFeatureListStructToHclTerraform, true)(struct!.featureList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAutomaticUpdateInfoOperOperFeatureListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAutomaticUpdateInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAutomaticUpdateInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureList = this._featureList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAutomaticUpdateInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureList.internalValue = value.featureList;
    }
  }

  // feature_list - computed: false, optional: true, required: false
  private _featureList = new DataThunderAutomaticUpdateInfoOperOperFeatureListStructList(this, "feature_list", false);
  public get featureList() {
    return this._featureList;
  }
  public putFeatureList(value: DataThunderAutomaticUpdateInfoOperOperFeatureListStruct[] | cdktf.IResolvable) {
    this._featureList.internalValue = value;
  }
  public resetFeatureList() {
    this._featureList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureListInput() {
    return this._featureList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper thunder_automatic_update_info_oper}
*/
export class DataThunderAutomaticUpdateInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_automatic_update_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAutomaticUpdateInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAutomaticUpdateInfoOper to import
  * @param importFromId The id of the existing DataThunderAutomaticUpdateInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAutomaticUpdateInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_automatic_update_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/automatic_update_info_oper thunder_automatic_update_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAutomaticUpdateInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAutomaticUpdateInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_automatic_update_info_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAutomaticUpdateInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAutomaticUpdateInfoOperOper) {
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
      oper: dataThunderAutomaticUpdateInfoOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderAutomaticUpdateInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAutomaticUpdateInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
