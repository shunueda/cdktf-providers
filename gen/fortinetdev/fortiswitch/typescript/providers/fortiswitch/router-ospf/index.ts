// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#abr_type RouterOspf#abr_type}
  */
  readonly abrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow RouterOspf#database_overflow}
  */
  readonly databaseOverflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow_max_external_lsa RouterOspf#database_overflow_max_external_lsa}
  */
  readonly databaseOverflowMaxExternalLsa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow_time_to_recover RouterOspf#database_overflow_time_to_recover}
  */
  readonly databaseOverflowTimeToRecover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_metric RouterOspf#default_information_metric}
  */
  readonly defaultInformationMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_metric_type RouterOspf#default_information_metric_type}
  */
  readonly defaultInformationMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_originate RouterOspf#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance RouterOspf#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_external RouterOspf#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_inter_area RouterOspf#distance_inter_area}
  */
  readonly distanceInterArea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_intra_area RouterOspf#distance_intra_area}
  */
  readonly distanceIntraArea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#dynamic_sort_subtable RouterOspf#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#log_neighbour_changes RouterOspf#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#rfc1583_compatible RouterOspf#rfc1583_compatible}
  */
  readonly rfc1583Compatible?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#router_id RouterOspf#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#spf_timers RouterOspf#spf_timers}
  */
  readonly spfTimers?: string;
  /**
  * area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#area RouterOspf#area}
  */
  readonly area?: RouterOspfArea[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distribute_list RouterOspf#distribute_list}
  */
  readonly distributeList?: RouterOspfDistributeListStruct[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#interface RouterOspf#interface}
  */
  readonly interface?: RouterOspfInterface[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#network RouterOspf#network}
  */
  readonly network?: RouterOspfNetwork[] | cdktf.IResolvable;
  /**
  * passive_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#passive_interface RouterOspf#passive_interface}
  */
  readonly passiveInterface?: RouterOspfPassiveInterface[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#redistribute RouterOspf#redistribute}
  */
  readonly redistribute?: RouterOspfRedistribute[] | cdktf.IResolvable;
  /**
  * summary_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#summary_address RouterOspf#summary_address}
  */
  readonly summaryAddress?: RouterOspfSummaryAddress[] | cdktf.IResolvable;
  /**
  * vrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#vrf RouterOspf#vrf}
  */
  readonly vrf?: RouterOspfVrf[] | cdktf.IResolvable;
}
export interface RouterOspfAreaFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#direction RouterOspf#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#list RouterOspf#list}
  */
  readonly list?: string;
}

export function routerOspfAreaFilterListStructToTerraform(struct?: RouterOspfAreaFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    id: cdktf.numberToTerraform(struct!.id),
    list: cdktf.stringToTerraform(struct!.list),
  }
}


export function routerOspfAreaFilterListStructToHclTerraform(struct?: RouterOspfAreaFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list: {
      value: cdktf.stringToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._id = undefined;
      this._list = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._id = value.id;
      this._list = value.list;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // list - computed: true, optional: true, required: false
  private _list?: string; 
  public get list() {
    return this.getStringAttribute('list');
  }
  public set list(value: string) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }
}

export class RouterOspfAreaFilterListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaFilterListStructOutputReference {
    return new RouterOspfAreaFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#advertise RouterOspf#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#substitute RouterOspf#substitute}
  */
  readonly substitute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#substitute_status RouterOspf#substitute_status}
  */
  readonly substituteStatus?: string;
}

export function routerOspfAreaRangeToTerraform(struct?: RouterOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.stringToTerraform(struct!.advertise),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    substitute: cdktf.stringToTerraform(struct!.substitute),
    substitute_status: cdktf.stringToTerraform(struct!.substituteStatus),
  }
}


export function routerOspfAreaRangeToHclTerraform(struct?: RouterOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.stringToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute: {
      value: cdktf.stringToHclTerraform(struct!.substitute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute_status: {
      value: cdktf.stringToHclTerraform(struct!.substituteStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._substitute !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitute = this._substitute;
    }
    if (this._substituteStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteStatus = this._substituteStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._substitute = undefined;
      this._substituteStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._id = value.id;
      this._prefix = value.prefix;
      this._substitute = value.substitute;
      this._substituteStatus = value.substituteStatus;
    }
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise?: string; 
  public get advertise() {
    return this.getStringAttribute('advertise');
  }
  public set advertise(value: string) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // substitute - computed: true, optional: true, required: false
  private _substitute?: string; 
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
  public set substitute(value: string) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }

  // substitute_status - computed: true, optional: true, required: false
  private _substituteStatus?: string; 
  public get substituteStatus() {
    return this.getStringAttribute('substitute_status');
  }
  public set substituteStatus(value: string) {
    this._substituteStatus = value;
  }
  public resetSubstituteStatus() {
    this._substituteStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteStatusInput() {
    return this._substituteStatus;
  }
}

export class RouterOspfAreaRangeList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaRange[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaRangeOutputReference {
    return new RouterOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaVirtualLinkMd5Keys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#key RouterOspf#key}
  */
  readonly key?: string;
}

export function routerOspfAreaVirtualLinkMd5KeysToTerraform(struct?: RouterOspfAreaVirtualLinkMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function routerOspfAreaVirtualLinkMd5KeysToHclTerraform(struct?: RouterOspfAreaVirtualLinkMd5Keys | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaVirtualLinkMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaVirtualLinkMd5Keys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaVirtualLinkMd5Keys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
    }
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

  // key - computed: false, optional: true, required: false
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
}

export class RouterOspfAreaVirtualLinkMd5KeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaVirtualLinkMd5Keys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaVirtualLinkMd5KeysOutputReference {
    return new RouterOspfAreaVirtualLinkMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaVirtualLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication RouterOspf#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication_key RouterOspf#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#dead_interval RouterOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_interval RouterOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#peer RouterOspf#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#retransmit_interval RouterOspf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#transmit_delay RouterOspf#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * md5_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#md5_keys RouterOspf#md5_keys}
  */
  readonly md5Keys?: RouterOspfAreaVirtualLinkMd5Keys[] | cdktf.IResolvable;
}

export function routerOspfAreaVirtualLinkToTerraform(struct?: RouterOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    name: cdktf.stringToTerraform(struct!.name),
    peer: cdktf.stringToTerraform(struct!.peer),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    md5_keys: cdktf.listMapper(routerOspfAreaVirtualLinkMd5KeysToTerraform, true)(struct!.md5Keys),
  }
}


export function routerOspfAreaVirtualLinkToHclTerraform(struct?: RouterOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
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
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_keys: {
      value: cdktf.listMapperHcl(routerOspfAreaVirtualLinkMd5KeysToHclTerraform, true)(struct!.md5Keys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaVirtualLinkMd5KeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._md5Keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Keys = this._md5Keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._name = undefined;
      this._peer = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._md5Keys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._name = value.name;
      this._peer = value.peer;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._md5Keys.internalValue = value.md5Keys;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // dead_interval - computed: true, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // name - computed: true, optional: true, required: false
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

  // peer - computed: true, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // md5_keys - computed: false, optional: true, required: false
  private _md5Keys = new RouterOspfAreaVirtualLinkMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }
  public putMd5Keys(value: RouterOspfAreaVirtualLinkMd5Keys[] | cdktf.IResolvable) {
    this._md5Keys.internalValue = value;
  }
  public resetMd5Keys() {
    this._md5Keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeysInput() {
    return this._md5Keys.internalValue;
  }
}

export class RouterOspfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaVirtualLinkOutputReference {
    return new RouterOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_cost RouterOspf#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#nssa_translator_role RouterOspf#nssa_translator_role}
  */
  readonly nssaTranslatorRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#shortcut RouterOspf#shortcut}
  */
  readonly shortcut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#stub_type RouterOspf#stub_type}
  */
  readonly stubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#type RouterOspf#type}
  */
  readonly type?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#filter_list RouterOspf#filter_list}
  */
  readonly filterList?: RouterOspfAreaFilterListStruct[] | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#range RouterOspf#range}
  */
  readonly range?: RouterOspfAreaRange[] | cdktf.IResolvable;
  /**
  * virtual_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#virtual_link RouterOspf#virtual_link}
  */
  readonly virtualLink?: RouterOspfAreaVirtualLink[] | cdktf.IResolvable;
}

export function routerOspfAreaToTerraform(struct?: RouterOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cost: cdktf.numberToTerraform(struct!.defaultCost),
    id: cdktf.stringToTerraform(struct!.id),
    nssa_translator_role: cdktf.stringToTerraform(struct!.nssaTranslatorRole),
    shortcut: cdktf.stringToTerraform(struct!.shortcut),
    stub_type: cdktf.stringToTerraform(struct!.stubType),
    type: cdktf.stringToTerraform(struct!.type),
    filter_list: cdktf.listMapper(routerOspfAreaFilterListStructToTerraform, true)(struct!.filterList),
    range: cdktf.listMapper(routerOspfAreaRangeToTerraform, true)(struct!.range),
    virtual_link: cdktf.listMapper(routerOspfAreaVirtualLinkToTerraform, true)(struct!.virtualLink),
  }
}


export function routerOspfAreaToHclTerraform(struct?: RouterOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cost: {
      value: cdktf.numberToHclTerraform(struct!.defaultCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_translator_role: {
      value: cdktf.stringToHclTerraform(struct!.nssaTranslatorRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shortcut: {
      value: cdktf.stringToHclTerraform(struct!.shortcut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stub_type: {
      value: cdktf.stringToHclTerraform(struct!.stubType),
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
    filter_list: {
      value: cdktf.listMapperHcl(routerOspfAreaFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaFilterListStructList",
    },
    range: {
      value: cdktf.listMapperHcl(routerOspfAreaRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaRangeList",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(routerOspfAreaVirtualLinkToHclTerraform, true)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfArea | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCost = this._defaultCost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nssaTranslatorRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaTranslatorRole = this._nssaTranslatorRole;
    }
    if (this._shortcut !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcut = this._shortcut;
    }
    if (this._stubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubType = this._stubType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._virtualLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLink = this._virtualLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfArea | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCost = undefined;
      this._id = undefined;
      this._nssaTranslatorRole = undefined;
      this._shortcut = undefined;
      this._stubType = undefined;
      this._type = undefined;
      this._filterList.internalValue = undefined;
      this._range.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCost = value.defaultCost;
      this._id = value.id;
      this._nssaTranslatorRole = value.nssaTranslatorRole;
      this._shortcut = value.shortcut;
      this._stubType = value.stubType;
      this._type = value.type;
      this._filterList.internalValue = value.filterList;
      this._range.internalValue = value.range;
      this._virtualLink.internalValue = value.virtualLink;
    }
  }

  // default_cost - computed: true, optional: true, required: false
  private _defaultCost?: number; 
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }
  public set defaultCost(value: number) {
    this._defaultCost = value;
  }
  public resetDefaultCost() {
    this._defaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCostInput() {
    return this._defaultCost;
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

  // nssa_translator_role - computed: true, optional: true, required: false
  private _nssaTranslatorRole?: string; 
  public get nssaTranslatorRole() {
    return this.getStringAttribute('nssa_translator_role');
  }
  public set nssaTranslatorRole(value: string) {
    this._nssaTranslatorRole = value;
  }
  public resetNssaTranslatorRole() {
    this._nssaTranslatorRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaTranslatorRoleInput() {
    return this._nssaTranslatorRole;
  }

  // shortcut - computed: true, optional: true, required: false
  private _shortcut?: string; 
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }
  public set shortcut(value: string) {
    this._shortcut = value;
  }
  public resetShortcut() {
    this._shortcut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutInput() {
    return this._shortcut;
  }

  // stub_type - computed: true, optional: true, required: false
  private _stubType?: string; 
  public get stubType() {
    return this.getStringAttribute('stub_type');
  }
  public set stubType(value: string) {
    this._stubType = value;
  }
  public resetStubType() {
    this._stubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubTypeInput() {
    return this._stubType;
  }

  // type - computed: true, optional: true, required: false
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new RouterOspfAreaFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: RouterOspfAreaFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // range - computed: false, optional: true, required: false
  private _range = new RouterOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: RouterOspfAreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new RouterOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: RouterOspfAreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }
}

export class RouterOspfAreaList extends cdktf.ComplexList {
  public internalValue? : RouterOspfArea[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaOutputReference {
    return new RouterOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfDistributeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#access_list RouterOspf#access_list}
  */
  readonly accessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#protocol RouterOspf#protocol}
  */
  readonly protocol?: string;
}

export function routerOspfDistributeListStructToTerraform(struct?: RouterOspfDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    id: cdktf.numberToTerraform(struct!.id),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function routerOspfDistributeListStructToHclTerraform(struct?: RouterOspfDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfDistributeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._id = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._id = value.id;
      this._protocol = value.protocol;
    }
  }

  // access_list - computed: true, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class RouterOspfDistributeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfDistributeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfDistributeListStructOutputReference {
    return new RouterOspfDistributeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfInterfaceMd5Keys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#key RouterOspf#key}
  */
  readonly key?: string;
}

export function routerOspfInterfaceMd5KeysToTerraform(struct?: RouterOspfInterfaceMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function routerOspfInterfaceMd5KeysToHclTerraform(struct?: RouterOspfInterfaceMd5Keys | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfInterfaceMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfInterfaceMd5Keys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfInterfaceMd5Keys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
    }
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

  // key - computed: false, optional: true, required: false
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
}

export class RouterOspfInterfaceMd5KeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspfInterfaceMd5Keys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfInterfaceMd5KeysOutputReference {
    return new RouterOspfInterfaceMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication RouterOspf#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication_key RouterOspf#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#bfd RouterOspf#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#cost RouterOspf#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#dead_interval RouterOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_interval RouterOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_multiplier RouterOspf#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#mtu RouterOspf#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#mtu_ignore RouterOspf#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#priority RouterOspf#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#retransmit_interval RouterOspf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#transmit_delay RouterOspf#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#ttl RouterOspf#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#ucast_ttl RouterOspf#ucast_ttl}
  */
  readonly ucastTtl?: number;
  /**
  * md5_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#md5_keys RouterOspf#md5_keys}
  */
  readonly md5Keys?: RouterOspfInterfaceMd5Keys[] | cdktf.IResolvable;
}

export function routerOspfInterfaceToTerraform(struct?: RouterOspfInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.stringToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    ucast_ttl: cdktf.numberToTerraform(struct!.ucastTtl),
    md5_keys: cdktf.listMapper(routerOspfInterfaceMd5KeysToTerraform, true)(struct!.md5Keys),
  }
}


export function routerOspfInterfaceToHclTerraform(struct?: RouterOspfInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.stringToHclTerraform(struct!.mtuIgnore),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ucast_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ucastTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_keys: {
      value: cdktf.listMapperHcl(routerOspfInterfaceMd5KeysToHclTerraform, true)(struct!.md5Keys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfInterfaceMd5KeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._helloMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplier = this._helloMultiplier;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._ucastTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucastTtl = this._ucastTtl;
    }
    if (this._md5Keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Keys = this._md5Keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._bfd = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._helloMultiplier = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._ttl = undefined;
      this._ucastTtl = undefined;
      this._md5Keys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._bfd = value.bfd;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._helloMultiplier = value.helloMultiplier;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._ttl = value.ttl;
      this._ucastTtl = value.ucastTtl;
      this._md5Keys.internalValue = value.md5Keys;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: true, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_multiplier - computed: true, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: true, optional: true, required: false
  private _mtuIgnore?: string; 
  public get mtuIgnore() {
    return this.getStringAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: string) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // ucast_ttl - computed: true, optional: true, required: false
  private _ucastTtl?: number; 
  public get ucastTtl() {
    return this.getNumberAttribute('ucast_ttl');
  }
  public set ucastTtl(value: number) {
    this._ucastTtl = value;
  }
  public resetUcastTtl() {
    this._ucastTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucastTtlInput() {
    return this._ucastTtl;
  }

  // md5_keys - computed: false, optional: true, required: false
  private _md5Keys = new RouterOspfInterfaceMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }
  public putMd5Keys(value: RouterOspfInterfaceMd5Keys[] | cdktf.IResolvable) {
    this._md5Keys.internalValue = value;
  }
  public resetMd5Keys() {
    this._md5Keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeysInput() {
    return this._md5Keys.internalValue;
  }
}

export class RouterOspfInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterOspfInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfInterfaceOutputReference {
    return new RouterOspfInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#area RouterOspf#area}
  */
  readonly area?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
}

export function routerOspfNetworkToTerraform(struct?: RouterOspfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function routerOspfNetworkToHclTerraform(struct?: RouterOspfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // area - computed: true, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterOspfNetworkList extends cdktf.ComplexList {
  public internalValue? : RouterOspfNetwork[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfNetworkOutputReference {
    return new RouterOspfNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
}

export function routerOspfPassiveInterfaceToTerraform(struct?: RouterOspfPassiveInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerOspfPassiveInterfaceToHclTerraform(struct?: RouterOspfPassiveInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RouterOspfPassiveInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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

export class RouterOspfPassiveInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceOutputReference {
    return new RouterOspfPassiveInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#metric RouterOspf#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#metric_type RouterOspf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#routemap RouterOspf#routemap}
  */
  readonly routemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#status RouterOspf#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
}

export function routerOspfRedistributeToTerraform(struct?: RouterOspfRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    routemap: cdktf.stringToTerraform(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfRedistributeToHclTerraform(struct?: RouterOspfRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
    routemap: {
      value: cdktf.stringToHclTerraform(struct!.routemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routemap = this._routemap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._routemap = undefined;
      this._status = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._name = value.name;
      this._routemap = value.routemap;
      this._status = value.status;
      this._tag = value.tag;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // name - computed: true, optional: true, required: false
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string; 
  public get routemap() {
    return this.getStringAttribute('routemap');
  }
  public set routemap(value: string) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfRedistributeList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistribute[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeOutputReference {
    return new RouterOspfRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfSummaryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
}

export function routerOspfSummaryAddressToTerraform(struct?: RouterOspfSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfSummaryAddressToHclTerraform(struct?: RouterOspfSummaryAddress | cdktf.IResolvable): any {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfSummaryAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfSummaryAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._tag = value.tag;
    }
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfSummaryAddressList extends cdktf.ComplexList {
  public internalValue? : RouterOspfSummaryAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfSummaryAddressOutputReference {
    return new RouterOspfSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfAreaFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#direction RouterOspf#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#list RouterOspf#list}
  */
  readonly list?: string;
}

export function routerOspfVrfAreaFilterListStructToTerraform(struct?: RouterOspfVrfAreaFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    id: cdktf.numberToTerraform(struct!.id),
    list: cdktf.stringToTerraform(struct!.list),
  }
}


export function routerOspfVrfAreaFilterListStructToHclTerraform(struct?: RouterOspfVrfAreaFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list: {
      value: cdktf.stringToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfAreaFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfAreaFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfAreaFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._id = undefined;
      this._list = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._id = value.id;
      this._list = value.list;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // list - computed: true, optional: true, required: false
  private _list?: string; 
  public get list() {
    return this.getStringAttribute('list');
  }
  public set list(value: string) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }
}

export class RouterOspfVrfAreaFilterListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfAreaFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfAreaFilterListStructOutputReference {
    return new RouterOspfVrfAreaFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfAreaRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#advertise RouterOspf#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#substitute RouterOspf#substitute}
  */
  readonly substitute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#substitute_status RouterOspf#substitute_status}
  */
  readonly substituteStatus?: string;
}

export function routerOspfVrfAreaRangeToTerraform(struct?: RouterOspfVrfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.stringToTerraform(struct!.advertise),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    substitute: cdktf.stringToTerraform(struct!.substitute),
    substitute_status: cdktf.stringToTerraform(struct!.substituteStatus),
  }
}


export function routerOspfVrfAreaRangeToHclTerraform(struct?: RouterOspfVrfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.stringToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute: {
      value: cdktf.stringToHclTerraform(struct!.substitute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute_status: {
      value: cdktf.stringToHclTerraform(struct!.substituteStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._substitute !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitute = this._substitute;
    }
    if (this._substituteStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteStatus = this._substituteStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._substitute = undefined;
      this._substituteStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._id = value.id;
      this._prefix = value.prefix;
      this._substitute = value.substitute;
      this._substituteStatus = value.substituteStatus;
    }
  }

  // advertise - computed: true, optional: true, required: false
  private _advertise?: string; 
  public get advertise() {
    return this.getStringAttribute('advertise');
  }
  public set advertise(value: string) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // substitute - computed: true, optional: true, required: false
  private _substitute?: string; 
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
  public set substitute(value: string) {
    this._substitute = value;
  }
  public resetSubstitute() {
    this._substitute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteInput() {
    return this._substitute;
  }

  // substitute_status - computed: true, optional: true, required: false
  private _substituteStatus?: string; 
  public get substituteStatus() {
    return this.getStringAttribute('substitute_status');
  }
  public set substituteStatus(value: string) {
    this._substituteStatus = value;
  }
  public resetSubstituteStatus() {
    this._substituteStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteStatusInput() {
    return this._substituteStatus;
  }
}

export class RouterOspfVrfAreaRangeList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfAreaRange[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfAreaRangeOutputReference {
    return new RouterOspfVrfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfAreaVirtualLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication RouterOspf#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication_key RouterOspf#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#dead_interval RouterOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_interval RouterOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#peer RouterOspf#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#retransmit_interval RouterOspf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#transmit_delay RouterOspf#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function routerOspfVrfAreaVirtualLinkToTerraform(struct?: RouterOspfVrfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    name: cdktf.stringToTerraform(struct!.name),
    peer: cdktf.stringToTerraform(struct!.peer),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function routerOspfVrfAreaVirtualLinkToHclTerraform(struct?: RouterOspfVrfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
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
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfAreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfAreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._name = undefined;
      this._peer = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._name = value.name;
      this._peer = value.peer;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // dead_interval - computed: true, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // name - computed: true, optional: true, required: false
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

  // peer - computed: true, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

export class RouterOspfVrfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfAreaVirtualLinkOutputReference {
    return new RouterOspfVrfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_cost RouterOspf#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#nssa_translator_role RouterOspf#nssa_translator_role}
  */
  readonly nssaTranslatorRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#shortcut RouterOspf#shortcut}
  */
  readonly shortcut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#stub_type RouterOspf#stub_type}
  */
  readonly stubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#type RouterOspf#type}
  */
  readonly type?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#filter_list RouterOspf#filter_list}
  */
  readonly filterList?: RouterOspfVrfAreaFilterListStruct[] | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#range RouterOspf#range}
  */
  readonly range?: RouterOspfVrfAreaRange[] | cdktf.IResolvable;
  /**
  * virtual_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#virtual_link RouterOspf#virtual_link}
  */
  readonly virtualLink?: RouterOspfVrfAreaVirtualLink[] | cdktf.IResolvable;
}

export function routerOspfVrfAreaToTerraform(struct?: RouterOspfVrfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cost: cdktf.numberToTerraform(struct!.defaultCost),
    id: cdktf.stringToTerraform(struct!.id),
    nssa_translator_role: cdktf.stringToTerraform(struct!.nssaTranslatorRole),
    shortcut: cdktf.stringToTerraform(struct!.shortcut),
    stub_type: cdktf.stringToTerraform(struct!.stubType),
    type: cdktf.stringToTerraform(struct!.type),
    filter_list: cdktf.listMapper(routerOspfVrfAreaFilterListStructToTerraform, true)(struct!.filterList),
    range: cdktf.listMapper(routerOspfVrfAreaRangeToTerraform, true)(struct!.range),
    virtual_link: cdktf.listMapper(routerOspfVrfAreaVirtualLinkToTerraform, true)(struct!.virtualLink),
  }
}


export function routerOspfVrfAreaToHclTerraform(struct?: RouterOspfVrfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cost: {
      value: cdktf.numberToHclTerraform(struct!.defaultCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_translator_role: {
      value: cdktf.stringToHclTerraform(struct!.nssaTranslatorRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shortcut: {
      value: cdktf.stringToHclTerraform(struct!.shortcut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stub_type: {
      value: cdktf.stringToHclTerraform(struct!.stubType),
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
    filter_list: {
      value: cdktf.listMapperHcl(routerOspfVrfAreaFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfAreaFilterListStructList",
    },
    range: {
      value: cdktf.listMapperHcl(routerOspfVrfAreaRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfAreaRangeList",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(routerOspfVrfAreaVirtualLinkToHclTerraform, true)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfAreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfArea | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCost = this._defaultCost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nssaTranslatorRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaTranslatorRole = this._nssaTranslatorRole;
    }
    if (this._shortcut !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcut = this._shortcut;
    }
    if (this._stubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubType = this._stubType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._virtualLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLink = this._virtualLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfArea | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCost = undefined;
      this._id = undefined;
      this._nssaTranslatorRole = undefined;
      this._shortcut = undefined;
      this._stubType = undefined;
      this._type = undefined;
      this._filterList.internalValue = undefined;
      this._range.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCost = value.defaultCost;
      this._id = value.id;
      this._nssaTranslatorRole = value.nssaTranslatorRole;
      this._shortcut = value.shortcut;
      this._stubType = value.stubType;
      this._type = value.type;
      this._filterList.internalValue = value.filterList;
      this._range.internalValue = value.range;
      this._virtualLink.internalValue = value.virtualLink;
    }
  }

  // default_cost - computed: true, optional: true, required: false
  private _defaultCost?: number; 
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }
  public set defaultCost(value: number) {
    this._defaultCost = value;
  }
  public resetDefaultCost() {
    this._defaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCostInput() {
    return this._defaultCost;
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

  // nssa_translator_role - computed: true, optional: true, required: false
  private _nssaTranslatorRole?: string; 
  public get nssaTranslatorRole() {
    return this.getStringAttribute('nssa_translator_role');
  }
  public set nssaTranslatorRole(value: string) {
    this._nssaTranslatorRole = value;
  }
  public resetNssaTranslatorRole() {
    this._nssaTranslatorRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaTranslatorRoleInput() {
    return this._nssaTranslatorRole;
  }

  // shortcut - computed: true, optional: true, required: false
  private _shortcut?: string; 
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }
  public set shortcut(value: string) {
    this._shortcut = value;
  }
  public resetShortcut() {
    this._shortcut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutInput() {
    return this._shortcut;
  }

  // stub_type - computed: true, optional: true, required: false
  private _stubType?: string; 
  public get stubType() {
    return this.getStringAttribute('stub_type');
  }
  public set stubType(value: string) {
    this._stubType = value;
  }
  public resetStubType() {
    this._stubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubTypeInput() {
    return this._stubType;
  }

  // type - computed: true, optional: true, required: false
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new RouterOspfVrfAreaFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: RouterOspfVrfAreaFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // range - computed: false, optional: true, required: false
  private _range = new RouterOspfVrfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: RouterOspfVrfAreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new RouterOspfVrfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: RouterOspfVrfAreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }
}

export class RouterOspfVrfAreaList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfArea[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfAreaOutputReference {
    return new RouterOspfVrfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfDistributeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#access_list RouterOspf#access_list}
  */
  readonly accessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#protocol RouterOspf#protocol}
  */
  readonly protocol?: string;
}

export function routerOspfVrfDistributeListStructToTerraform(struct?: RouterOspfVrfDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    id: cdktf.numberToTerraform(struct!.id),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function routerOspfVrfDistributeListStructToHclTerraform(struct?: RouterOspfVrfDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfDistributeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._id = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._id = value.id;
      this._protocol = value.protocol;
    }
  }

  // access_list - computed: true, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class RouterOspfVrfDistributeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfDistributeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfDistributeListStructOutputReference {
    return new RouterOspfVrfDistributeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfInterfaceMd5Keys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#key RouterOspf#key}
  */
  readonly key?: string;
}

export function routerOspfVrfInterfaceMd5KeysToTerraform(struct?: RouterOspfVrfInterfaceMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function routerOspfVrfInterfaceMd5KeysToHclTerraform(struct?: RouterOspfVrfInterfaceMd5Keys | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfInterfaceMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfInterfaceMd5Keys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfInterfaceMd5Keys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
    }
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

  // key - computed: false, optional: true, required: false
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
}

export class RouterOspfVrfInterfaceMd5KeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfInterfaceMd5Keys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfInterfaceMd5KeysOutputReference {
    return new RouterOspfVrfInterfaceMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication RouterOspf#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#authentication_key RouterOspf#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#cost RouterOspf#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#dead_interval RouterOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_interval RouterOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#hello_multiplier RouterOspf#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#mtu RouterOspf#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#mtu_ignore RouterOspf#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#priority RouterOspf#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#retransmit_interval RouterOspf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#transmit_delay RouterOspf#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#ttl RouterOspf#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#ucast_ttl RouterOspf#ucast_ttl}
  */
  readonly ucastTtl?: number;
  /**
  * md5_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#md5_keys RouterOspf#md5_keys}
  */
  readonly md5Keys?: RouterOspfVrfInterfaceMd5Keys[] | cdktf.IResolvable;
}

export function routerOspfVrfInterfaceToTerraform(struct?: RouterOspfVrfInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.stringToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    ucast_ttl: cdktf.numberToTerraform(struct!.ucastTtl),
    md5_keys: cdktf.listMapper(routerOspfVrfInterfaceMd5KeysToTerraform, true)(struct!.md5Keys),
  }
}


export function routerOspfVrfInterfaceToHclTerraform(struct?: RouterOspfVrfInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.stringToHclTerraform(struct!.mtuIgnore),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ucast_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ucastTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_keys: {
      value: cdktf.listMapperHcl(routerOspfVrfInterfaceMd5KeysToHclTerraform, true)(struct!.md5Keys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfInterfaceMd5KeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._helloMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplier = this._helloMultiplier;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._ucastTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucastTtl = this._ucastTtl;
    }
    if (this._md5Keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Keys = this._md5Keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._helloMultiplier = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._ttl = undefined;
      this._ucastTtl = undefined;
      this._md5Keys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._helloMultiplier = value.helloMultiplier;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._ttl = value.ttl;
      this._ucastTtl = value.ucastTtl;
      this._md5Keys.internalValue = value.md5Keys;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: true, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_multiplier - computed: true, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: true, optional: true, required: false
  private _mtuIgnore?: string; 
  public get mtuIgnore() {
    return this.getStringAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: string) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // ucast_ttl - computed: true, optional: true, required: false
  private _ucastTtl?: number; 
  public get ucastTtl() {
    return this.getNumberAttribute('ucast_ttl');
  }
  public set ucastTtl(value: number) {
    this._ucastTtl = value;
  }
  public resetUcastTtl() {
    this._ucastTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucastTtlInput() {
    return this._ucastTtl;
  }

  // md5_keys - computed: false, optional: true, required: false
  private _md5Keys = new RouterOspfVrfInterfaceMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }
  public putMd5Keys(value: RouterOspfVrfInterfaceMd5Keys[] | cdktf.IResolvable) {
    this._md5Keys.internalValue = value;
  }
  public resetMd5Keys() {
    this._md5Keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeysInput() {
    return this._md5Keys.internalValue;
  }
}

export class RouterOspfVrfInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfInterfaceOutputReference {
    return new RouterOspfVrfInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#area RouterOspf#area}
  */
  readonly area?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
}

export function routerOspfVrfNetworkToTerraform(struct?: RouterOspfVrfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function routerOspfVrfNetworkToHclTerraform(struct?: RouterOspfVrfNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // area - computed: true, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterOspfVrfNetworkList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfNetwork[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfNetworkOutputReference {
    return new RouterOspfVrfNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfPassiveInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
}

export function routerOspfVrfPassiveInterfaceToTerraform(struct?: RouterOspfVrfPassiveInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerOspfVrfPassiveInterfaceToHclTerraform(struct?: RouterOspfVrfPassiveInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RouterOspfVrfPassiveInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfPassiveInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfPassiveInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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

export class RouterOspfVrfPassiveInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfPassiveInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfPassiveInterfaceOutputReference {
    return new RouterOspfVrfPassiveInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#metric RouterOspf#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#metric_type RouterOspf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#routemap RouterOspf#routemap}
  */
  readonly routemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#status RouterOspf#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
}

export function routerOspfVrfRedistributeToTerraform(struct?: RouterOspfVrfRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    routemap: cdktf.stringToTerraform(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfVrfRedistributeToHclTerraform(struct?: RouterOspfVrfRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
    routemap: {
      value: cdktf.stringToHclTerraform(struct!.routemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfRedistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routemap = this._routemap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfRedistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._routemap = undefined;
      this._status = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._name = value.name;
      this._routemap = value.routemap;
      this._status = value.status;
      this._tag = value.tag;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // name - computed: true, optional: true, required: false
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string; 
  public get routemap() {
    return this.getStringAttribute('routemap');
  }
  public set routemap(value: string) {
    this._routemap = value;
  }
  public resetRoutemap() {
    this._routemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routemapInput() {
    return this._routemap;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfVrfRedistributeList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfRedistribute[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfRedistributeOutputReference {
    return new RouterOspfVrfRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfSummaryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#prefix RouterOspf#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
}

export function routerOspfVrfSummaryAddressToTerraform(struct?: RouterOspfVrfSummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfVrfSummaryAddressToHclTerraform(struct?: RouterOspfVrfSummaryAddress | cdktf.IResolvable): any {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfSummaryAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfSummaryAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._tag = value.tag;
    }
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfVrfSummaryAddressList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfSummaryAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfSummaryAddressOutputReference {
    return new RouterOspfVrfSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#abr_type RouterOspf#abr_type}
  */
  readonly abrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow RouterOspf#database_overflow}
  */
  readonly databaseOverflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow_max_external_lsa RouterOspf#database_overflow_max_external_lsa}
  */
  readonly databaseOverflowMaxExternalLsa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#database_overflow_time_to_recover RouterOspf#database_overflow_time_to_recover}
  */
  readonly databaseOverflowTimeToRecover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_metric RouterOspf#default_information_metric}
  */
  readonly defaultInformationMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_metric_type RouterOspf#default_information_metric_type}
  */
  readonly defaultInformationMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#default_information_originate RouterOspf#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance RouterOspf#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_external RouterOspf#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_inter_area RouterOspf#distance_inter_area}
  */
  readonly distanceInterArea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distance_intra_area RouterOspf#distance_intra_area}
  */
  readonly distanceIntraArea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#log_neighbour_changes RouterOspf#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#name RouterOspf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#rfc1583_compatible RouterOspf#rfc1583_compatible}
  */
  readonly rfc1583Compatible?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#router_id RouterOspf#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#spf_timers RouterOspf#spf_timers}
  */
  readonly spfTimers?: string;
  /**
  * area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#area RouterOspf#area}
  */
  readonly area?: RouterOspfVrfArea[] | cdktf.IResolvable;
  /**
  * distribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#distribute_list RouterOspf#distribute_list}
  */
  readonly distributeList?: RouterOspfVrfDistributeListStruct[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#interface RouterOspf#interface}
  */
  readonly interface?: RouterOspfVrfInterface[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#network RouterOspf#network}
  */
  readonly network?: RouterOspfVrfNetwork[] | cdktf.IResolvable;
  /**
  * passive_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#passive_interface RouterOspf#passive_interface}
  */
  readonly passiveInterface?: RouterOspfVrfPassiveInterface[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#redistribute RouterOspf#redistribute}
  */
  readonly redistribute?: RouterOspfVrfRedistribute[] | cdktf.IResolvable;
  /**
  * summary_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#summary_address RouterOspf#summary_address}
  */
  readonly summaryAddress?: RouterOspfVrfSummaryAddress[] | cdktf.IResolvable;
}

export function routerOspfVrfToTerraform(struct?: RouterOspfVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr_type: cdktf.stringToTerraform(struct!.abrType),
    database_overflow: cdktf.stringToTerraform(struct!.databaseOverflow),
    database_overflow_max_external_lsa: cdktf.numberToTerraform(struct!.databaseOverflowMaxExternalLsa),
    database_overflow_time_to_recover: cdktf.numberToTerraform(struct!.databaseOverflowTimeToRecover),
    default_information_metric: cdktf.numberToTerraform(struct!.defaultInformationMetric),
    default_information_metric_type: cdktf.stringToTerraform(struct!.defaultInformationMetricType),
    default_information_originate: cdktf.stringToTerraform(struct!.defaultInformationOriginate),
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_external: cdktf.numberToTerraform(struct!.distanceExternal),
    distance_inter_area: cdktf.numberToTerraform(struct!.distanceInterArea),
    distance_intra_area: cdktf.numberToTerraform(struct!.distanceIntraArea),
    log_neighbour_changes: cdktf.stringToTerraform(struct!.logNeighbourChanges),
    name: cdktf.stringToTerraform(struct!.name),
    rfc1583_compatible: cdktf.stringToTerraform(struct!.rfc1583Compatible),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timers: cdktf.stringToTerraform(struct!.spfTimers),
    area: cdktf.listMapper(routerOspfVrfAreaToTerraform, true)(struct!.area),
    distribute_list: cdktf.listMapper(routerOspfVrfDistributeListStructToTerraform, true)(struct!.distributeList),
    interface: cdktf.listMapper(routerOspfVrfInterfaceToTerraform, true)(struct!.interface),
    network: cdktf.listMapper(routerOspfVrfNetworkToTerraform, true)(struct!.network),
    passive_interface: cdktf.listMapper(routerOspfVrfPassiveInterfaceToTerraform, true)(struct!.passiveInterface),
    redistribute: cdktf.listMapper(routerOspfVrfRedistributeToTerraform, true)(struct!.redistribute),
    summary_address: cdktf.listMapper(routerOspfVrfSummaryAddressToTerraform, true)(struct!.summaryAddress),
  }
}


export function routerOspfVrfToHclTerraform(struct?: RouterOspfVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr_type: {
      value: cdktf.stringToHclTerraform(struct!.abrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_overflow: {
      value: cdktf.stringToHclTerraform(struct!.databaseOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_overflow_max_external_lsa: {
      value: cdktf.numberToHclTerraform(struct!.databaseOverflowMaxExternalLsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_overflow_time_to_recover: {
      value: cdktf.numberToHclTerraform(struct!.databaseOverflowTimeToRecover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_information_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultInformationMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_information_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultInformationMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_information_originate: {
      value: cdktf.stringToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_external: {
      value: cdktf.numberToHclTerraform(struct!.distanceExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_inter_area: {
      value: cdktf.numberToHclTerraform(struct!.distanceInterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_intra_area: {
      value: cdktf.numberToHclTerraform(struct!.distanceIntraArea),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_neighbour_changes: {
      value: cdktf.stringToHclTerraform(struct!.logNeighbourChanges),
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
    rfc1583_compatible: {
      value: cdktf.stringToHclTerraform(struct!.rfc1583Compatible),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spf_timers: {
      value: cdktf.stringToHclTerraform(struct!.spfTimers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area: {
      value: cdktf.listMapperHcl(routerOspfVrfAreaToHclTerraform, true)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfAreaList",
    },
    distribute_list: {
      value: cdktf.listMapperHcl(routerOspfVrfDistributeListStructToHclTerraform, true)(struct!.distributeList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfDistributeListStructList",
    },
    interface: {
      value: cdktf.listMapperHcl(routerOspfVrfInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfInterfaceList",
    },
    network: {
      value: cdktf.listMapperHcl(routerOspfVrfNetworkToHclTerraform, true)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfNetworkList",
    },
    passive_interface: {
      value: cdktf.listMapperHcl(routerOspfVrfPassiveInterfaceToHclTerraform, true)(struct!.passiveInterface),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfPassiveInterfaceList",
    },
    redistribute: {
      value: cdktf.listMapperHcl(routerOspfVrfRedistributeToHclTerraform, true)(struct!.redistribute),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfRedistributeList",
    },
    summary_address: {
      value: cdktf.listMapperHcl(routerOspfVrfSummaryAddressToHclTerraform, true)(struct!.summaryAddress),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfVrfSummaryAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.abrType = this._abrType;
    }
    if (this._databaseOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOverflow = this._databaseOverflow;
    }
    if (this._databaseOverflowMaxExternalLsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOverflowMaxExternalLsa = this._databaseOverflowMaxExternalLsa;
    }
    if (this._databaseOverflowTimeToRecover !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOverflowTimeToRecover = this._databaseOverflowTimeToRecover;
    }
    if (this._defaultInformationMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationMetric = this._defaultInformationMetric;
    }
    if (this._defaultInformationMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationMetricType = this._defaultInformationMetricType;
    }
    if (this._defaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceExternal = this._distanceExternal;
    }
    if (this._distanceInterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceInterArea = this._distanceInterArea;
    }
    if (this._distanceIntraArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceIntraArea = this._distanceIntraArea;
    }
    if (this._logNeighbourChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.logNeighbourChanges = this._logNeighbourChanges;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rfc1583Compatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc1583Compatible = this._rfc1583Compatible;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._spfTimers !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfTimers = this._spfTimers;
    }
    if (this._area?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area?.internalValue;
    }
    if (this._distributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._passiveInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveInterface = this._passiveInterface?.internalValue;
    }
    if (this._redistribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute?.internalValue;
    }
    if (this._summaryAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryAddress = this._summaryAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abrType = undefined;
      this._databaseOverflow = undefined;
      this._databaseOverflowMaxExternalLsa = undefined;
      this._databaseOverflowTimeToRecover = undefined;
      this._defaultInformationMetric = undefined;
      this._defaultInformationMetricType = undefined;
      this._defaultInformationOriginate = undefined;
      this._distance = undefined;
      this._distanceExternal = undefined;
      this._distanceInterArea = undefined;
      this._distanceIntraArea = undefined;
      this._logNeighbourChanges = undefined;
      this._name = undefined;
      this._rfc1583Compatible = undefined;
      this._routerId = undefined;
      this._spfTimers = undefined;
      this._area.internalValue = undefined;
      this._distributeList.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._network.internalValue = undefined;
      this._passiveInterface.internalValue = undefined;
      this._redistribute.internalValue = undefined;
      this._summaryAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abrType = value.abrType;
      this._databaseOverflow = value.databaseOverflow;
      this._databaseOverflowMaxExternalLsa = value.databaseOverflowMaxExternalLsa;
      this._databaseOverflowTimeToRecover = value.databaseOverflowTimeToRecover;
      this._defaultInformationMetric = value.defaultInformationMetric;
      this._defaultInformationMetricType = value.defaultInformationMetricType;
      this._defaultInformationOriginate = value.defaultInformationOriginate;
      this._distance = value.distance;
      this._distanceExternal = value.distanceExternal;
      this._distanceInterArea = value.distanceInterArea;
      this._distanceIntraArea = value.distanceIntraArea;
      this._logNeighbourChanges = value.logNeighbourChanges;
      this._name = value.name;
      this._rfc1583Compatible = value.rfc1583Compatible;
      this._routerId = value.routerId;
      this._spfTimers = value.spfTimers;
      this._area.internalValue = value.area;
      this._distributeList.internalValue = value.distributeList;
      this._interface.internalValue = value.interface;
      this._network.internalValue = value.network;
      this._passiveInterface.internalValue = value.passiveInterface;
      this._redistribute.internalValue = value.redistribute;
      this._summaryAddress.internalValue = value.summaryAddress;
    }
  }

  // abr_type - computed: true, optional: true, required: false
  private _abrType?: string; 
  public get abrType() {
    return this.getStringAttribute('abr_type');
  }
  public set abrType(value: string) {
    this._abrType = value;
  }
  public resetAbrType() {
    this._abrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrTypeInput() {
    return this._abrType;
  }

  // database_overflow - computed: true, optional: true, required: false
  private _databaseOverflow?: string; 
  public get databaseOverflow() {
    return this.getStringAttribute('database_overflow');
  }
  public set databaseOverflow(value: string) {
    this._databaseOverflow = value;
  }
  public resetDatabaseOverflow() {
    this._databaseOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowInput() {
    return this._databaseOverflow;
  }

  // database_overflow_max_external_lsa - computed: true, optional: true, required: false
  private _databaseOverflowMaxExternalLsa?: number; 
  public get databaseOverflowMaxExternalLsa() {
    return this.getNumberAttribute('database_overflow_max_external_lsa');
  }
  public set databaseOverflowMaxExternalLsa(value: number) {
    this._databaseOverflowMaxExternalLsa = value;
  }
  public resetDatabaseOverflowMaxExternalLsa() {
    this._databaseOverflowMaxExternalLsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowMaxExternalLsaInput() {
    return this._databaseOverflowMaxExternalLsa;
  }

  // database_overflow_time_to_recover - computed: true, optional: true, required: false
  private _databaseOverflowTimeToRecover?: number; 
  public get databaseOverflowTimeToRecover() {
    return this.getNumberAttribute('database_overflow_time_to_recover');
  }
  public set databaseOverflowTimeToRecover(value: number) {
    this._databaseOverflowTimeToRecover = value;
  }
  public resetDatabaseOverflowTimeToRecover() {
    this._databaseOverflowTimeToRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowTimeToRecoverInput() {
    return this._databaseOverflowTimeToRecover;
  }

  // default_information_metric - computed: true, optional: true, required: false
  private _defaultInformationMetric?: number; 
  public get defaultInformationMetric() {
    return this.getNumberAttribute('default_information_metric');
  }
  public set defaultInformationMetric(value: number) {
    this._defaultInformationMetric = value;
  }
  public resetDefaultInformationMetric() {
    this._defaultInformationMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricInput() {
    return this._defaultInformationMetric;
  }

  // default_information_metric_type - computed: true, optional: true, required: false
  private _defaultInformationMetricType?: string; 
  public get defaultInformationMetricType() {
    return this.getStringAttribute('default_information_metric_type');
  }
  public set defaultInformationMetricType(value: string) {
    this._defaultInformationMetricType = value;
  }
  public resetDefaultInformationMetricType() {
    this._defaultInformationMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricTypeInput() {
    return this._defaultInformationMetricType;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_external - computed: true, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_inter_area - computed: true, optional: true, required: false
  private _distanceInterArea?: number; 
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }
  public set distanceInterArea(value: number) {
    this._distanceInterArea = value;
  }
  public resetDistanceInterArea() {
    this._distanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInterAreaInput() {
    return this._distanceInterArea;
  }

  // distance_intra_area - computed: true, optional: true, required: false
  private _distanceIntraArea?: number; 
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }
  public set distanceIntraArea(value: number) {
    this._distanceIntraArea = value;
  }
  public resetDistanceIntraArea() {
    this._distanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntraAreaInput() {
    return this._distanceIntraArea;
  }

  // log_neighbour_changes - computed: true, optional: true, required: false
  private _logNeighbourChanges?: string; 
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }
  public set logNeighbourChanges(value: string) {
    this._logNeighbourChanges = value;
  }
  public resetLogNeighbourChanges() {
    this._logNeighbourChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighbourChangesInput() {
    return this._logNeighbourChanges;
  }

  // name - computed: true, optional: true, required: false
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

  // rfc1583_compatible - computed: true, optional: true, required: false
  private _rfc1583Compatible?: string; 
  public get rfc1583Compatible() {
    return this.getStringAttribute('rfc1583_compatible');
  }
  public set rfc1583Compatible(value: string) {
    this._rfc1583Compatible = value;
  }
  public resetRfc1583Compatible() {
    this._rfc1583Compatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583CompatibleInput() {
    return this._rfc1583Compatible;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // spf_timers - computed: true, optional: true, required: false
  private _spfTimers?: string; 
  public get spfTimers() {
    return this.getStringAttribute('spf_timers');
  }
  public set spfTimers(value: string) {
    this._spfTimers = value;
  }
  public resetSpfTimers() {
    this._spfTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimersInput() {
    return this._spfTimers;
  }

  // area - computed: false, optional: true, required: false
  private _area = new RouterOspfVrfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: RouterOspfVrfArea[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterOspfVrfDistributeListStructList(this, "distribute_list", false);
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterOspfVrfDistributeListStruct[] | cdktf.IResolvable) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterOspfVrfInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterOspfVrfInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterOspfVrfNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterOspfVrfNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface = new RouterOspfVrfPassiveInterfaceList(this, "passive_interface", false);
  public get passiveInterface() {
    return this._passiveInterface;
  }
  public putPassiveInterface(value: RouterOspfVrfPassiveInterface[] | cdktf.IResolvable) {
    this._passiveInterface.internalValue = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterOspfVrfRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterOspfVrfRedistribute[] | cdktf.IResolvable) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // summary_address - computed: false, optional: true, required: false
  private _summaryAddress = new RouterOspfVrfSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }
  public putSummaryAddress(value: RouterOspfVrfSummaryAddress[] | cdktf.IResolvable) {
    this._summaryAddress.internalValue = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress.internalValue;
  }
}

export class RouterOspfVrfList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrf[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfOutputReference {
    return new RouterOspfVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf fortiswitch_router_ospf}
*/
export class RouterOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf to import
  * @param importFromId The id of the existing RouterOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_ospf fortiswitch_router_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_ospf',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abrType = config.abrType;
    this._databaseOverflow = config.databaseOverflow;
    this._databaseOverflowMaxExternalLsa = config.databaseOverflowMaxExternalLsa;
    this._databaseOverflowTimeToRecover = config.databaseOverflowTimeToRecover;
    this._defaultInformationMetric = config.defaultInformationMetric;
    this._defaultInformationMetricType = config.defaultInformationMetricType;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._distance = config.distance;
    this._distanceExternal = config.distanceExternal;
    this._distanceInterArea = config.distanceInterArea;
    this._distanceIntraArea = config.distanceIntraArea;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._logNeighbourChanges = config.logNeighbourChanges;
    this._name = config.name;
    this._rfc1583Compatible = config.rfc1583Compatible;
    this._routerId = config.routerId;
    this._spfTimers = config.spfTimers;
    this._area.internalValue = config.area;
    this._distributeList.internalValue = config.distributeList;
    this._interface.internalValue = config.interface;
    this._network.internalValue = config.network;
    this._passiveInterface.internalValue = config.passiveInterface;
    this._redistribute.internalValue = config.redistribute;
    this._summaryAddress.internalValue = config.summaryAddress;
    this._vrf.internalValue = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abr_type - computed: true, optional: true, required: false
  private _abrType?: string; 
  public get abrType() {
    return this.getStringAttribute('abr_type');
  }
  public set abrType(value: string) {
    this._abrType = value;
  }
  public resetAbrType() {
    this._abrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrTypeInput() {
    return this._abrType;
  }

  // database_overflow - computed: true, optional: true, required: false
  private _databaseOverflow?: string; 
  public get databaseOverflow() {
    return this.getStringAttribute('database_overflow');
  }
  public set databaseOverflow(value: string) {
    this._databaseOverflow = value;
  }
  public resetDatabaseOverflow() {
    this._databaseOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowInput() {
    return this._databaseOverflow;
  }

  // database_overflow_max_external_lsa - computed: true, optional: true, required: false
  private _databaseOverflowMaxExternalLsa?: number; 
  public get databaseOverflowMaxExternalLsa() {
    return this.getNumberAttribute('database_overflow_max_external_lsa');
  }
  public set databaseOverflowMaxExternalLsa(value: number) {
    this._databaseOverflowMaxExternalLsa = value;
  }
  public resetDatabaseOverflowMaxExternalLsa() {
    this._databaseOverflowMaxExternalLsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowMaxExternalLsaInput() {
    return this._databaseOverflowMaxExternalLsa;
  }

  // database_overflow_time_to_recover - computed: true, optional: true, required: false
  private _databaseOverflowTimeToRecover?: number; 
  public get databaseOverflowTimeToRecover() {
    return this.getNumberAttribute('database_overflow_time_to_recover');
  }
  public set databaseOverflowTimeToRecover(value: number) {
    this._databaseOverflowTimeToRecover = value;
  }
  public resetDatabaseOverflowTimeToRecover() {
    this._databaseOverflowTimeToRecover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOverflowTimeToRecoverInput() {
    return this._databaseOverflowTimeToRecover;
  }

  // default_information_metric - computed: true, optional: true, required: false
  private _defaultInformationMetric?: number; 
  public get defaultInformationMetric() {
    return this.getNumberAttribute('default_information_metric');
  }
  public set defaultInformationMetric(value: number) {
    this._defaultInformationMetric = value;
  }
  public resetDefaultInformationMetric() {
    this._defaultInformationMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricInput() {
    return this._defaultInformationMetric;
  }

  // default_information_metric_type - computed: true, optional: true, required: false
  private _defaultInformationMetricType?: string; 
  public get defaultInformationMetricType() {
    return this.getStringAttribute('default_information_metric_type');
  }
  public set defaultInformationMetricType(value: string) {
    this._defaultInformationMetricType = value;
  }
  public resetDefaultInformationMetricType() {
    this._defaultInformationMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationMetricTypeInput() {
    return this._defaultInformationMetricType;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_external - computed: true, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_inter_area - computed: true, optional: true, required: false
  private _distanceInterArea?: number; 
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }
  public set distanceInterArea(value: number) {
    this._distanceInterArea = value;
  }
  public resetDistanceInterArea() {
    this._distanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInterAreaInput() {
    return this._distanceInterArea;
  }

  // distance_intra_area - computed: true, optional: true, required: false
  private _distanceIntraArea?: number; 
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }
  public set distanceIntraArea(value: number) {
    this._distanceIntraArea = value;
  }
  public resetDistanceIntraArea() {
    this._distanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntraAreaInput() {
    return this._distanceIntraArea;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // log_neighbour_changes - computed: true, optional: true, required: false
  private _logNeighbourChanges?: string; 
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }
  public set logNeighbourChanges(value: string) {
    this._logNeighbourChanges = value;
  }
  public resetLogNeighbourChanges() {
    this._logNeighbourChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighbourChangesInput() {
    return this._logNeighbourChanges;
  }

  // name - computed: true, optional: true, required: false
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

  // rfc1583_compatible - computed: true, optional: true, required: false
  private _rfc1583Compatible?: string; 
  public get rfc1583Compatible() {
    return this.getStringAttribute('rfc1583_compatible');
  }
  public set rfc1583Compatible(value: string) {
    this._rfc1583Compatible = value;
  }
  public resetRfc1583Compatible() {
    this._rfc1583Compatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583CompatibleInput() {
    return this._rfc1583Compatible;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // spf_timers - computed: true, optional: true, required: false
  private _spfTimers?: string; 
  public get spfTimers() {
    return this.getStringAttribute('spf_timers');
  }
  public set spfTimers(value: string) {
    this._spfTimers = value;
  }
  public resetSpfTimers() {
    this._spfTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimersInput() {
    return this._spfTimers;
  }

  // area - computed: false, optional: true, required: false
  private _area = new RouterOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: RouterOspfArea[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList = new RouterOspfDistributeListStructList(this, "distribute_list", false);
  public get distributeList() {
    return this._distributeList;
  }
  public putDistributeList(value: RouterOspfDistributeListStruct[] | cdktf.IResolvable) {
    this._distributeList.internalValue = value;
  }
  public resetDistributeList() {
    this._distributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterOspfInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterOspfInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterOspfNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterOspfNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface = new RouterOspfPassiveInterfaceList(this, "passive_interface", false);
  public get passiveInterface() {
    return this._passiveInterface;
  }
  public putPassiveInterface(value: RouterOspfPassiveInterface[] | cdktf.IResolvable) {
    this._passiveInterface.internalValue = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterOspfRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterOspfRedistribute[] | cdktf.IResolvable) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // summary_address - computed: false, optional: true, required: false
  private _summaryAddress = new RouterOspfSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }
  public putSummaryAddress(value: RouterOspfSummaryAddress[] | cdktf.IResolvable) {
    this._summaryAddress.internalValue = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress.internalValue;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf = new RouterOspfVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
  public putVrf(value: RouterOspfVrf[] | cdktf.IResolvable) {
    this._vrf.internalValue = value;
  }
  public resetVrf() {
    this._vrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abr_type: cdktf.stringToTerraform(this._abrType),
      database_overflow: cdktf.stringToTerraform(this._databaseOverflow),
      database_overflow_max_external_lsa: cdktf.numberToTerraform(this._databaseOverflowMaxExternalLsa),
      database_overflow_time_to_recover: cdktf.numberToTerraform(this._databaseOverflowTimeToRecover),
      default_information_metric: cdktf.numberToTerraform(this._defaultInformationMetric),
      default_information_metric_type: cdktf.stringToTerraform(this._defaultInformationMetricType),
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      distance: cdktf.numberToTerraform(this._distance),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_inter_area: cdktf.numberToTerraform(this._distanceInterArea),
      distance_intra_area: cdktf.numberToTerraform(this._distanceIntraArea),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      log_neighbour_changes: cdktf.stringToTerraform(this._logNeighbourChanges),
      name: cdktf.stringToTerraform(this._name),
      rfc1583_compatible: cdktf.stringToTerraform(this._rfc1583Compatible),
      router_id: cdktf.stringToTerraform(this._routerId),
      spf_timers: cdktf.stringToTerraform(this._spfTimers),
      area: cdktf.listMapper(routerOspfAreaToTerraform, true)(this._area.internalValue),
      distribute_list: cdktf.listMapper(routerOspfDistributeListStructToTerraform, true)(this._distributeList.internalValue),
      interface: cdktf.listMapper(routerOspfInterfaceToTerraform, true)(this._interface.internalValue),
      network: cdktf.listMapper(routerOspfNetworkToTerraform, true)(this._network.internalValue),
      passive_interface: cdktf.listMapper(routerOspfPassiveInterfaceToTerraform, true)(this._passiveInterface.internalValue),
      redistribute: cdktf.listMapper(routerOspfRedistributeToTerraform, true)(this._redistribute.internalValue),
      summary_address: cdktf.listMapper(routerOspfSummaryAddressToTerraform, true)(this._summaryAddress.internalValue),
      vrf: cdktf.listMapper(routerOspfVrfToTerraform, true)(this._vrf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abr_type: {
        value: cdktf.stringToHclTerraform(this._abrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_overflow: {
        value: cdktf.stringToHclTerraform(this._databaseOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_overflow_max_external_lsa: {
        value: cdktf.numberToHclTerraform(this._databaseOverflowMaxExternalLsa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_overflow_time_to_recover: {
        value: cdktf.numberToHclTerraform(this._databaseOverflowTimeToRecover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_metric: {
        value: cdktf.numberToHclTerraform(this._defaultInformationMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_metric_type: {
        value: cdktf.stringToHclTerraform(this._defaultInformationMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_external: {
        value: cdktf.numberToHclTerraform(this._distanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_inter_area: {
        value: cdktf.numberToHclTerraform(this._distanceInterArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_intra_area: {
        value: cdktf.numberToHclTerraform(this._distanceIntraArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_neighbour_changes: {
        value: cdktf.stringToHclTerraform(this._logNeighbourChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc1583_compatible: {
        value: cdktf.stringToHclTerraform(this._rfc1583Compatible),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_timers: {
        value: cdktf.stringToHclTerraform(this._spfTimers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area: {
        value: cdktf.listMapperHcl(routerOspfAreaToHclTerraform, true)(this._area.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaList",
      },
      distribute_list: {
        value: cdktf.listMapperHcl(routerOspfDistributeListStructToHclTerraform, true)(this._distributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfDistributeListStructList",
      },
      interface: {
        value: cdktf.listMapperHcl(routerOspfInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfInterfaceList",
      },
      network: {
        value: cdktf.listMapperHcl(routerOspfNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfNetworkList",
      },
      passive_interface: {
        value: cdktf.listMapperHcl(routerOspfPassiveInterfaceToHclTerraform, true)(this._passiveInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfPassiveInterfaceList",
      },
      redistribute: {
        value: cdktf.listMapperHcl(routerOspfRedistributeToHclTerraform, true)(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeList",
      },
      summary_address: {
        value: cdktf.listMapperHcl(routerOspfSummaryAddressToHclTerraform, true)(this._summaryAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfSummaryAddressList",
      },
      vrf: {
        value: cdktf.listMapperHcl(routerOspfVrfToHclTerraform, true)(this._vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfVrfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
