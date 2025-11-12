// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemGeolocNameHelperOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#id DataThunderSystemGeolocNameHelperOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#oper DataThunderSystemGeolocNameHelperOper#oper}
  */
  readonly oper?: DataThunderSystemGeolocNameHelperOperOper;
}
export interface DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#geoloc_name DataThunderSystemGeolocNameHelperOper#geoloc_name}
  */
  readonly geolocName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#has_subregion DataThunderSystemGeolocNameHelperOper#has_subregion}
  */
  readonly hasSubregion?: number;
}

export function dataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructToTerraform(struct?: DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geoloc_name: cdktf.stringToTerraform(struct!.geolocName),
    has_subregion: cdktf.numberToTerraform(struct!.hasSubregion),
  }
}


export function dataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructToHclTerraform(struct?: DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geoloc_name: {
      value: cdktf.stringToHclTerraform(struct!.geolocName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_subregion: {
      value: cdktf.numberToHclTerraform(struct!.hasSubregion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geolocName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocName = this._geolocName;
    }
    if (this._hasSubregion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasSubregion = this._hasSubregion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geolocName = undefined;
      this._hasSubregion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geolocName = value.geolocName;
      this._hasSubregion = value.hasSubregion;
    }
  }

  // geoloc_name - computed: false, optional: true, required: false
  private _geolocName?: string; 
  public get geolocName() {
    return this.getStringAttribute('geoloc_name');
  }
  public set geolocName(value: string) {
    this._geolocName = value;
  }
  public resetGeolocName() {
    this._geolocName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocNameInput() {
    return this._geolocName;
  }

  // has_subregion - computed: false, optional: true, required: false
  private _hasSubregion?: number; 
  public get hasSubregion() {
    return this.getNumberAttribute('has_subregion');
  }
  public set hasSubregion(value: number) {
    this._hasSubregion = value;
  }
  public resetHasSubregion() {
    this._hasSubregion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSubregionInput() {
    return this._hasSubregion;
  }
}

export class DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructOutputReference {
    return new DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemGeolocNameHelperOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#geoloc DataThunderSystemGeolocNameHelperOper#geoloc}
  */
  readonly geoloc?: string;
  /**
  * geoloc_candidate_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#geoloc_candidate_list DataThunderSystemGeolocNameHelperOper#geoloc_candidate_list}
  */
  readonly geolocCandidateList?: DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemGeolocNameHelperOperOperToTerraform(struct?: DataThunderSystemGeolocNameHelperOperOperOutputReference | DataThunderSystemGeolocNameHelperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geoloc: cdktf.stringToTerraform(struct!.geoloc),
    geoloc_candidate_list: cdktf.listMapper(dataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructToTerraform, true)(struct!.geolocCandidateList),
  }
}


export function dataThunderSystemGeolocNameHelperOperOperToHclTerraform(struct?: DataThunderSystemGeolocNameHelperOperOperOutputReference | DataThunderSystemGeolocNameHelperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geoloc: {
      value: cdktf.stringToHclTerraform(struct!.geoloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geoloc_candidate_list: {
      value: cdktf.listMapperHcl(dataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructToHclTerraform, true)(struct!.geolocCandidateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocNameHelperOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGeolocNameHelperOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoloc = this._geoloc;
    }
    if (this._geolocCandidateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocCandidateList = this._geolocCandidateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocNameHelperOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoloc = undefined;
      this._geolocCandidateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoloc = value.geoloc;
      this._geolocCandidateList.internalValue = value.geolocCandidateList;
    }
  }

  // geoloc - computed: false, optional: true, required: false
  private _geoloc?: string; 
  public get geoloc() {
    return this.getStringAttribute('geoloc');
  }
  public set geoloc(value: string) {
    this._geoloc = value;
  }
  public resetGeoloc() {
    this._geoloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocInput() {
    return this._geoloc;
  }

  // geoloc_candidate_list - computed: false, optional: true, required: false
  private _geolocCandidateList = new DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStructList(this, "geoloc_candidate_list", false);
  public get geolocCandidateList() {
    return this._geolocCandidateList;
  }
  public putGeolocCandidateList(value: DataThunderSystemGeolocNameHelperOperOperGeolocCandidateListStruct[] | cdktf.IResolvable) {
    this._geolocCandidateList.internalValue = value;
  }
  public resetGeolocCandidateList() {
    this._geolocCandidateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocCandidateListInput() {
    return this._geolocCandidateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper thunder_system_geoloc_name_helper_oper}
*/
export class DataThunderSystemGeolocNameHelperOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_geoloc_name_helper_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemGeolocNameHelperOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemGeolocNameHelperOper to import
  * @param importFromId The id of the existing DataThunderSystemGeolocNameHelperOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemGeolocNameHelperOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_geoloc_name_helper_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_geoloc_name_helper_oper thunder_system_geoloc_name_helper_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemGeolocNameHelperOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemGeolocNameHelperOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_geoloc_name_helper_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderSystemGeolocNameHelperOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemGeolocNameHelperOperOper) {
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
      oper: dataThunderSystemGeolocNameHelperOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemGeolocNameHelperOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemGeolocNameHelperOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
