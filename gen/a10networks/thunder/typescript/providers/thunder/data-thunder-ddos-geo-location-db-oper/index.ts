// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosGeoLocationDbOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#id DataThunderDdosGeoLocationDbOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#oper DataThunderDdosGeoLocationDbOper#oper}
  */
  readonly oper?: DataThunderDdosGeoLocationDbOperOper;
}
export interface DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#from DataThunderDdosGeoLocationDbOper#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#name DataThunderDdosGeoLocationDbOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#subcnt DataThunderDdosGeoLocationDbOper#subcnt}
  */
  readonly subcnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#tomask DataThunderDdosGeoLocationDbOper#tomask}
  */
  readonly tomask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#type DataThunderDdosGeoLocationDbOper#type}
  */
  readonly type?: string;
}

export function dataThunderDdosGeoLocationDbOperOperGeoLocationListStructToTerraform(struct?: DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    name: cdktf.stringToTerraform(struct!.name),
    subcnt: cdktf.numberToTerraform(struct!.subcnt),
    tomask: cdktf.stringToTerraform(struct!.tomask),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderDdosGeoLocationDbOperOperGeoLocationListStructToHclTerraform(struct?: DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
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
    subcnt: {
      value: cdktf.numberToHclTerraform(struct!.subcnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tomask: {
      value: cdktf.stringToHclTerraform(struct!.tomask),
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

export class DataThunderDdosGeoLocationDbOperOperGeoLocationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subcnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.subcnt = this._subcnt;
    }
    if (this._tomask !== undefined) {
      hasAnyValues = true;
      internalValueResult.tomask = this._tomask;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._name = undefined;
      this._subcnt = undefined;
      this._tomask = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._name = value.name;
      this._subcnt = value.subcnt;
      this._tomask = value.tomask;
      this._type = value.type;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // subcnt - computed: false, optional: true, required: false
  private _subcnt?: number; 
  public get subcnt() {
    return this.getNumberAttribute('subcnt');
  }
  public set subcnt(value: number) {
    this._subcnt = value;
  }
  public resetSubcnt() {
    this._subcnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subcntInput() {
    return this._subcnt;
  }

  // tomask - computed: false, optional: true, required: false
  private _tomask?: string; 
  public get tomask() {
    return this.getStringAttribute('tomask');
  }
  public set tomask(value: string) {
    this._tomask = value;
  }
  public resetTomask() {
    this._tomask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tomaskInput() {
    return this._tomask;
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

export class DataThunderDdosGeoLocationDbOperOperGeoLocationListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosGeoLocationDbOperOperGeoLocationListStructOutputReference {
    return new DataThunderDdosGeoLocationDbOperOperGeoLocationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosGeoLocationDbOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#filter DataThunderDdosGeoLocationDbOper#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#ip DataThunderDdosGeoLocationDbOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#ipv6 DataThunderDdosGeoLocationDbOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#total_geo_location DataThunderDdosGeoLocationDbOper#total_geo_location}
  */
  readonly totalGeoLocation?: number;
  /**
  * geo_location_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#geo_location_list DataThunderDdosGeoLocationDbOper#geo_location_list}
  */
  readonly geoLocationList?: DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosGeoLocationDbOperOperToTerraform(struct?: DataThunderDdosGeoLocationDbOperOperOutputReference | DataThunderDdosGeoLocationDbOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    total_geo_location: cdktf.numberToTerraform(struct!.totalGeoLocation),
    geo_location_list: cdktf.listMapper(dataThunderDdosGeoLocationDbOperOperGeoLocationListStructToTerraform, true)(struct!.geoLocationList),
  }
}


export function dataThunderDdosGeoLocationDbOperOperToHclTerraform(struct?: DataThunderDdosGeoLocationDbOperOperOutputReference | DataThunderDdosGeoLocationDbOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_geo_location: {
      value: cdktf.numberToHclTerraform(struct!.totalGeoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_list: {
      value: cdktf.listMapperHcl(dataThunderDdosGeoLocationDbOperOperGeoLocationListStructToHclTerraform, true)(struct!.geoLocationList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosGeoLocationDbOperOperGeoLocationListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosGeoLocationDbOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosGeoLocationDbOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._totalGeoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalGeoLocation = this._totalGeoLocation;
    }
    if (this._geoLocationList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationList = this._geoLocationList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosGeoLocationDbOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._totalGeoLocation = undefined;
      this._geoLocationList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._totalGeoLocation = value.totalGeoLocation;
      this._geoLocationList.internalValue = value.geoLocationList;
    }
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // total_geo_location - computed: false, optional: true, required: false
  private _totalGeoLocation?: number; 
  public get totalGeoLocation() {
    return this.getNumberAttribute('total_geo_location');
  }
  public set totalGeoLocation(value: number) {
    this._totalGeoLocation = value;
  }
  public resetTotalGeoLocation() {
    this._totalGeoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalGeoLocationInput() {
    return this._totalGeoLocation;
  }

  // geo_location_list - computed: false, optional: true, required: false
  private _geoLocationList = new DataThunderDdosGeoLocationDbOperOperGeoLocationListStructList(this, "geo_location_list", false);
  public get geoLocationList() {
    return this._geoLocationList;
  }
  public putGeoLocationList(value: DataThunderDdosGeoLocationDbOperOperGeoLocationListStruct[] | cdktf.IResolvable) {
    this._geoLocationList.internalValue = value;
  }
  public resetGeoLocationList() {
    this._geoLocationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListInput() {
    return this._geoLocationList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper thunder_ddos_geo_location_db_oper}
*/
export class DataThunderDdosGeoLocationDbOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_geo_location_db_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosGeoLocationDbOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosGeoLocationDbOper to import
  * @param importFromId The id of the existing DataThunderDdosGeoLocationDbOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosGeoLocationDbOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_geo_location_db_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_geo_location_db_oper thunder_ddos_geo_location_db_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosGeoLocationDbOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosGeoLocationDbOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_geo_location_db_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderDdosGeoLocationDbOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosGeoLocationDbOperOper) {
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
      oper: dataThunderDdosGeoLocationDbOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosGeoLocationDbOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosGeoLocationDbOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
