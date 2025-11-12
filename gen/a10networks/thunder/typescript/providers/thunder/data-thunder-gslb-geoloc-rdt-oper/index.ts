// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbGeolocRdtOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#id DataThunderGslbGeolocRdtOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#oper DataThunderGslbGeolocRdtOper#oper}
  */
  readonly oper?: DataThunderGslbGeolocRdtOperOper;
}
export interface DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#age DataThunderGslbGeolocRdtOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#gl_name DataThunderGslbGeolocRdtOper#gl_name}
  */
  readonly glName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#rdt DataThunderGslbGeolocRdtOper#rdt}
  */
  readonly rdt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#site_name DataThunderGslbGeolocRdtOper#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#type DataThunderGslbGeolocRdtOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbGeolocRdtOperOperGeolocRdtListStructToTerraform(struct?: DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    gl_name: cdktf.stringToTerraform(struct!.glName),
    rdt: cdktf.numberToTerraform(struct!.rdt),
    site_name: cdktf.stringToTerraform(struct!.siteName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbGeolocRdtOperOperGeolocRdtListStructToHclTerraform(struct?: DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gl_name: {
      value: cdktf.stringToHclTerraform(struct!.glName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdt: {
      value: cdktf.numberToHclTerraform(struct!.rdt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbGeolocRdtOperOperGeolocRdtListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._glName !== undefined) {
      hasAnyValues = true;
      internalValueResult.glName = this._glName;
    }
    if (this._rdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdt = this._rdt;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._glName = undefined;
      this._rdt = undefined;
      this._siteName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._glName = value.glName;
      this._rdt = value.rdt;
      this._siteName = value.siteName;
      this._type = value.type;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // gl_name - computed: false, optional: true, required: false
  private _glName?: string; 
  public get glName() {
    return this.getStringAttribute('gl_name');
  }
  public set glName(value: string) {
    this._glName = value;
  }
  public resetGlName() {
    this._glName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glNameInput() {
    return this._glName;
  }

  // rdt - computed: false, optional: true, required: false
  private _rdt?: number; 
  public get rdt() {
    return this.getNumberAttribute('rdt');
  }
  public set rdt(value: number) {
    this._rdt = value;
  }
  public resetRdt() {
    this._rdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtInput() {
    return this._rdt;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
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
}

export class DataThunderGslbGeolocRdtOperOperGeolocRdtListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbGeolocRdtOperOperGeolocRdtListStructOutputReference {
    return new DataThunderGslbGeolocRdtOperOperGeolocRdtListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbGeolocRdtOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#active_status DataThunderGslbGeolocRdtOper#active_status}
  */
  readonly activeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#geo_name DataThunderGslbGeolocRdtOper#geo_name}
  */
  readonly geoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#site_name DataThunderGslbGeolocRdtOper#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#total_rdt DataThunderGslbGeolocRdtOper#total_rdt}
  */
  readonly totalRdt?: number;
  /**
  * geoloc_rdt_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#geoloc_rdt_list DataThunderGslbGeolocRdtOper#geoloc_rdt_list}
  */
  readonly geolocRdtList?: DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbGeolocRdtOperOperToTerraform(struct?: DataThunderGslbGeolocRdtOperOperOutputReference | DataThunderGslbGeolocRdtOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_status: cdktf.stringToTerraform(struct!.activeStatus),
    geo_name: cdktf.stringToTerraform(struct!.geoName),
    site_name: cdktf.stringToTerraform(struct!.siteName),
    total_rdt: cdktf.numberToTerraform(struct!.totalRdt),
    geoloc_rdt_list: cdktf.listMapper(dataThunderGslbGeolocRdtOperOperGeolocRdtListStructToTerraform, true)(struct!.geolocRdtList),
  }
}


export function dataThunderGslbGeolocRdtOperOperToHclTerraform(struct?: DataThunderGslbGeolocRdtOperOperOutputReference | DataThunderGslbGeolocRdtOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_status: {
      value: cdktf.stringToHclTerraform(struct!.activeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_name: {
      value: cdktf.stringToHclTerraform(struct!.geoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_rdt: {
      value: cdktf.numberToHclTerraform(struct!.totalRdt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_rdt_list: {
      value: cdktf.listMapperHcl(dataThunderGslbGeolocRdtOperOperGeolocRdtListStructToHclTerraform, true)(struct!.geolocRdtList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbGeolocRdtOperOperGeolocRdtListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbGeolocRdtOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbGeolocRdtOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeStatus = this._activeStatus;
    }
    if (this._geoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoName = this._geoName;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    if (this._totalRdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRdt = this._totalRdt;
    }
    if (this._geolocRdtList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocRdtList = this._geolocRdtList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbGeolocRdtOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeStatus = undefined;
      this._geoName = undefined;
      this._siteName = undefined;
      this._totalRdt = undefined;
      this._geolocRdtList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeStatus = value.activeStatus;
      this._geoName = value.geoName;
      this._siteName = value.siteName;
      this._totalRdt = value.totalRdt;
      this._geolocRdtList.internalValue = value.geolocRdtList;
    }
  }

  // active_status - computed: false, optional: true, required: false
  private _activeStatus?: string; 
  public get activeStatus() {
    return this.getStringAttribute('active_status');
  }
  public set activeStatus(value: string) {
    this._activeStatus = value;
  }
  public resetActiveStatus() {
    this._activeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStatusInput() {
    return this._activeStatus;
  }

  // geo_name - computed: false, optional: true, required: false
  private _geoName?: string; 
  public get geoName() {
    return this.getStringAttribute('geo_name');
  }
  public set geoName(value: string) {
    this._geoName = value;
  }
  public resetGeoName() {
    this._geoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNameInput() {
    return this._geoName;
  }

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // total_rdt - computed: false, optional: true, required: false
  private _totalRdt?: number; 
  public get totalRdt() {
    return this.getNumberAttribute('total_rdt');
  }
  public set totalRdt(value: number) {
    this._totalRdt = value;
  }
  public resetTotalRdt() {
    this._totalRdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRdtInput() {
    return this._totalRdt;
  }

  // geoloc_rdt_list - computed: false, optional: true, required: false
  private _geolocRdtList = new DataThunderGslbGeolocRdtOperOperGeolocRdtListStructList(this, "geoloc_rdt_list", false);
  public get geolocRdtList() {
    return this._geolocRdtList;
  }
  public putGeolocRdtList(value: DataThunderGslbGeolocRdtOperOperGeolocRdtListStruct[] | cdktf.IResolvable) {
    this._geolocRdtList.internalValue = value;
  }
  public resetGeolocRdtList() {
    this._geolocRdtList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocRdtListInput() {
    return this._geolocRdtList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper thunder_gslb_geoloc_rdt_oper}
*/
export class DataThunderGslbGeolocRdtOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_geoloc_rdt_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbGeolocRdtOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbGeolocRdtOper to import
  * @param importFromId The id of the existing DataThunderGslbGeolocRdtOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbGeolocRdtOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_geoloc_rdt_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_geoloc_rdt_oper thunder_gslb_geoloc_rdt_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbGeolocRdtOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbGeolocRdtOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_geoloc_rdt_oper',
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
  private _oper = new DataThunderGslbGeolocRdtOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbGeolocRdtOperOper) {
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
      oper: dataThunderGslbGeolocRdtOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderGslbGeolocRdtOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbGeolocRdtOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
