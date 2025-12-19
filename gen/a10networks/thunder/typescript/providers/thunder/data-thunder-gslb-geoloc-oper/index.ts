// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbGeolocOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#id DataThunderGslbGeolocOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#oper DataThunderGslbGeolocOper#oper}
  */
  readonly oper?: DataThunderGslbGeolocOperOper;
}
export interface DataThunderGslbGeolocOperOperGeolocListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#from DataThunderGslbGeolocOper#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#hits DataThunderGslbGeolocOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#last DataThunderGslbGeolocOper#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#name DataThunderGslbGeolocOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#subcnt DataThunderGslbGeolocOper#subcnt}
  */
  readonly subcnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#tomask DataThunderGslbGeolocOper#tomask}
  */
  readonly tomask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#type DataThunderGslbGeolocOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbGeolocOperOperGeolocListStructToTerraform(struct?: DataThunderGslbGeolocOperOperGeolocListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    hits: cdktf.numberToTerraform(struct!.hits),
    last: cdktf.stringToTerraform(struct!.last),
    name: cdktf.stringToTerraform(struct!.name),
    subcnt: cdktf.numberToTerraform(struct!.subcnt),
    tomask: cdktf.stringToTerraform(struct!.tomask),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbGeolocOperOperGeolocListStructToHclTerraform(struct?: DataThunderGslbGeolocOperOperGeolocListStruct | cdktf.IResolvable): any {
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
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.stringToHclTerraform(struct!.last),
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

export class DataThunderGslbGeolocOperOperGeolocListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbGeolocOperOperGeolocListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
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

  public set internalValue(value: DataThunderGslbGeolocOperOperGeolocListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._hits = undefined;
      this._last = undefined;
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
      this._hits = value.hits;
      this._last = value.last;
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

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // last - computed: false, optional: true, required: false
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
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

export class DataThunderGslbGeolocOperOperGeolocListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbGeolocOperOperGeolocListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbGeolocOperOperGeolocListStructOutputReference {
    return new DataThunderGslbGeolocOperOperGeolocListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbGeolocOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#depth DataThunderGslbGeolocOper#depth}
  */
  readonly depth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#filter1 DataThunderGslbGeolocOper#filter1}
  */
  readonly filter1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#filter2 DataThunderGslbGeolocOper#filter2}
  */
  readonly filter2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#filter3 DataThunderGslbGeolocOper#filter3}
  */
  readonly filter3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#filter4 DataThunderGslbGeolocOper#filter4}
  */
  readonly filter4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#geo_name DataThunderGslbGeolocOper#geo_name}
  */
  readonly geoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#iprangeend DataThunderGslbGeolocOper#iprangeend}
  */
  readonly iprangeend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#iprangestrt DataThunderGslbGeolocOper#iprangestrt}
  */
  readonly iprangestrt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#ipv6rangestrt DataThunderGslbGeolocOper#ipv6rangestrt}
  */
  readonly ipv6Rangestrt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#pol_name DataThunderGslbGeolocOper#pol_name}
  */
  readonly polName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#total_geolocs DataThunderGslbGeolocOper#total_geolocs}
  */
  readonly totalGeolocs?: number;
  /**
  * geoloc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#geoloc_list DataThunderGslbGeolocOper#geoloc_list}
  */
  readonly geolocList?: DataThunderGslbGeolocOperOperGeolocListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbGeolocOperOperToTerraform(struct?: DataThunderGslbGeolocOperOperOutputReference | DataThunderGslbGeolocOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
    filter1: cdktf.stringToTerraform(struct!.filter1),
    filter2: cdktf.stringToTerraform(struct!.filter2),
    filter3: cdktf.stringToTerraform(struct!.filter3),
    filter4: cdktf.stringToTerraform(struct!.filter4),
    geo_name: cdktf.stringToTerraform(struct!.geoName),
    iprangeend: cdktf.stringToTerraform(struct!.iprangeend),
    iprangestrt: cdktf.stringToTerraform(struct!.iprangestrt),
    ipv6rangestrt: cdktf.stringToTerraform(struct!.ipv6Rangestrt),
    pol_name: cdktf.stringToTerraform(struct!.polName),
    total_geolocs: cdktf.numberToTerraform(struct!.totalGeolocs),
    geoloc_list: cdktf.listMapper(dataThunderGslbGeolocOperOperGeolocListStructToTerraform, true)(struct!.geolocList),
  }
}


export function dataThunderGslbGeolocOperOperToHclTerraform(struct?: DataThunderGslbGeolocOperOperOutputReference | DataThunderGslbGeolocOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter1: {
      value: cdktf.stringToHclTerraform(struct!.filter1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter2: {
      value: cdktf.stringToHclTerraform(struct!.filter2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter3: {
      value: cdktf.stringToHclTerraform(struct!.filter3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter4: {
      value: cdktf.stringToHclTerraform(struct!.filter4),
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
    iprangeend: {
      value: cdktf.stringToHclTerraform(struct!.iprangeend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iprangestrt: {
      value: cdktf.stringToHclTerraform(struct!.iprangestrt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6rangestrt: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Rangestrt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pol_name: {
      value: cdktf.stringToHclTerraform(struct!.polName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_geolocs: {
      value: cdktf.numberToHclTerraform(struct!.totalGeolocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_list: {
      value: cdktf.listMapperHcl(dataThunderGslbGeolocOperOperGeolocListStructToHclTerraform, true)(struct!.geolocList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbGeolocOperOperGeolocListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbGeolocOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbGeolocOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._filter1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter1 = this._filter1;
    }
    if (this._filter2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter2 = this._filter2;
    }
    if (this._filter3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter3 = this._filter3;
    }
    if (this._filter4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter4 = this._filter4;
    }
    if (this._geoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoName = this._geoName;
    }
    if (this._iprangeend !== undefined) {
      hasAnyValues = true;
      internalValueResult.iprangeend = this._iprangeend;
    }
    if (this._iprangestrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.iprangestrt = this._iprangestrt;
    }
    if (this._ipv6Rangestrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Rangestrt = this._ipv6Rangestrt;
    }
    if (this._polName !== undefined) {
      hasAnyValues = true;
      internalValueResult.polName = this._polName;
    }
    if (this._totalGeolocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalGeolocs = this._totalGeolocs;
    }
    if (this._geolocList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocList = this._geolocList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbGeolocOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._depth = undefined;
      this._filter1 = undefined;
      this._filter2 = undefined;
      this._filter3 = undefined;
      this._filter4 = undefined;
      this._geoName = undefined;
      this._iprangeend = undefined;
      this._iprangestrt = undefined;
      this._ipv6Rangestrt = undefined;
      this._polName = undefined;
      this._totalGeolocs = undefined;
      this._geolocList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._depth = value.depth;
      this._filter1 = value.filter1;
      this._filter2 = value.filter2;
      this._filter3 = value.filter3;
      this._filter4 = value.filter4;
      this._geoName = value.geoName;
      this._iprangeend = value.iprangeend;
      this._iprangestrt = value.iprangestrt;
      this._ipv6Rangestrt = value.ipv6Rangestrt;
      this._polName = value.polName;
      this._totalGeolocs = value.totalGeolocs;
      this._geolocList.internalValue = value.geolocList;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // filter1 - computed: false, optional: true, required: false
  private _filter1?: string; 
  public get filter1() {
    return this.getStringAttribute('filter1');
  }
  public set filter1(value: string) {
    this._filter1 = value;
  }
  public resetFilter1() {
    this._filter1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter1Input() {
    return this._filter1;
  }

  // filter2 - computed: false, optional: true, required: false
  private _filter2?: string; 
  public get filter2() {
    return this.getStringAttribute('filter2');
  }
  public set filter2(value: string) {
    this._filter2 = value;
  }
  public resetFilter2() {
    this._filter2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter2Input() {
    return this._filter2;
  }

  // filter3 - computed: false, optional: true, required: false
  private _filter3?: string; 
  public get filter3() {
    return this.getStringAttribute('filter3');
  }
  public set filter3(value: string) {
    this._filter3 = value;
  }
  public resetFilter3() {
    this._filter3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter3Input() {
    return this._filter3;
  }

  // filter4 - computed: false, optional: true, required: false
  private _filter4?: string; 
  public get filter4() {
    return this.getStringAttribute('filter4');
  }
  public set filter4(value: string) {
    this._filter4 = value;
  }
  public resetFilter4() {
    this._filter4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter4Input() {
    return this._filter4;
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

  // iprangeend - computed: false, optional: true, required: false
  private _iprangeend?: string; 
  public get iprangeend() {
    return this.getStringAttribute('iprangeend');
  }
  public set iprangeend(value: string) {
    this._iprangeend = value;
  }
  public resetIprangeend() {
    this._iprangeend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangeendInput() {
    return this._iprangeend;
  }

  // iprangestrt - computed: false, optional: true, required: false
  private _iprangestrt?: string; 
  public get iprangestrt() {
    return this.getStringAttribute('iprangestrt');
  }
  public set iprangestrt(value: string) {
    this._iprangestrt = value;
  }
  public resetIprangestrt() {
    this._iprangestrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangestrtInput() {
    return this._iprangestrt;
  }

  // ipv6rangestrt - computed: false, optional: true, required: false
  private _ipv6Rangestrt?: string; 
  public get ipv6Rangestrt() {
    return this.getStringAttribute('ipv6rangestrt');
  }
  public set ipv6Rangestrt(value: string) {
    this._ipv6Rangestrt = value;
  }
  public resetIpv6Rangestrt() {
    this._ipv6Rangestrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangestrtInput() {
    return this._ipv6Rangestrt;
  }

  // pol_name - computed: false, optional: true, required: false
  private _polName?: string; 
  public get polName() {
    return this.getStringAttribute('pol_name');
  }
  public set polName(value: string) {
    this._polName = value;
  }
  public resetPolName() {
    this._polName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polNameInput() {
    return this._polName;
  }

  // total_geolocs - computed: false, optional: true, required: false
  private _totalGeolocs?: number; 
  public get totalGeolocs() {
    return this.getNumberAttribute('total_geolocs');
  }
  public set totalGeolocs(value: number) {
    this._totalGeolocs = value;
  }
  public resetTotalGeolocs() {
    this._totalGeolocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalGeolocsInput() {
    return this._totalGeolocs;
  }

  // geoloc_list - computed: false, optional: true, required: false
  private _geolocList = new DataThunderGslbGeolocOperOperGeolocListStructList(this, "geoloc_list", false);
  public get geolocList() {
    return this._geolocList;
  }
  public putGeolocList(value: DataThunderGslbGeolocOperOperGeolocListStruct[] | cdktf.IResolvable) {
    this._geolocList.internalValue = value;
  }
  public resetGeolocList() {
    this._geolocList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocListInput() {
    return this._geolocList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper thunder_gslb_geoloc_oper}
*/
export class DataThunderGslbGeolocOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_geoloc_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbGeolocOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbGeolocOper to import
  * @param importFromId The id of the existing DataThunderGslbGeolocOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbGeolocOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_geoloc_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_geoloc_oper thunder_gslb_geoloc_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbGeolocOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbGeolocOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_geoloc_oper',
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
  private _oper = new DataThunderGslbGeolocOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbGeolocOperOper) {
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
      oper: dataThunderGslbGeolocOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderGslbGeolocOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbGeolocOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
