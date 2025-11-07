// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspf6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#abr_type RouterOspf6#abr_type}
  */
  readonly abrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#auto_cost_ref_bandwidth RouterOspf6#auto_cost_ref_bandwidth}
  */
  readonly autoCostRefBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#bfd RouterOspf6#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_information_metric RouterOspf6#default_information_metric}
  */
  readonly defaultInformationMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_information_metric_type RouterOspf6#default_information_metric_type}
  */
  readonly defaultInformationMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_information_originate RouterOspf6#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_information_route_map RouterOspf6#default_information_route_map}
  */
  readonly defaultInformationRouteMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_metric RouterOspf6#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#device_name RouterOspf6#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#device_vdom RouterOspf6#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#dynamic_sort_subtable RouterOspf6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#id RouterOspf6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#log_neighbour_changes RouterOspf6#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#passive_interface RouterOspf6#passive_interface}
  */
  readonly passiveInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#restart_mode RouterOspf6#restart_mode}
  */
  readonly restartMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#restart_on_topology_change RouterOspf6#restart_on_topology_change}
  */
  readonly restartOnTopologyChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#restart_period RouterOspf6#restart_period}
  */
  readonly restartPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#router_id RouterOspf6#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#spf_timers RouterOspf6#spf_timers}
  */
  readonly spfTimers?: number[];
  /**
  * area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#area RouterOspf6#area}
  */
  readonly area?: RouterOspf6Area[] | cdktf.IResolvable;
  /**
  * ospf6_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ospf6_interface RouterOspf6#ospf6_interface}
  */
  readonly ospf6Interface?: RouterOspf6Ospf6Interface[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#redistribute RouterOspf6#redistribute}
  */
  readonly redistribute?: RouterOspf6Redistribute;
  /**
  * summary_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#summary_address RouterOspf6#summary_address}
  */
  readonly summaryAddress?: RouterOspf6SummaryAddress[] | cdktf.IResolvable;
}
export interface RouterOspf6AreaIpsecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#auth_key RouterOspf6#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#enc_key RouterOspf6#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#spi RouterOspf6#spi}
  */
  readonly spi?: number;
}

export function routerOspf6AreaIpsecKeysToTerraform(struct?: RouterOspf6AreaIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKey),
    enc_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encKey),
    spi: cdktf.numberToTerraform(struct!.spi),
  }
}


export function routerOspf6AreaIpsecKeysToHclTerraform(struct?: RouterOspf6AreaIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enc_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spi: {
      value: cdktf.numberToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaIpsecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaIpsecKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._encKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encKey = this._encKey;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6AreaIpsecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKey = undefined;
      this._encKey = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKey = value.authKey;
      this._encKey = value.encKey;
      this._spi = value.spi;
    }
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string[]; 
  public get authKey() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_key'));
  }
  public set authKey(value: string[]) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // enc_key - computed: true, optional: true, required: false
  private _encKey?: string[]; 
  public get encKey() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_key'));
  }
  public set encKey(value: string[]) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}

export class RouterOspf6AreaIpsecKeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaIpsecKeys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaIpsecKeysOutputReference {
    return new RouterOspf6AreaIpsecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#advertise RouterOspf6#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#id RouterOspf6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#prefix6 RouterOspf6#prefix6}
  */
  readonly prefix6?: string;
}

export function routerOspf6AreaRangeToTerraform(struct?: RouterOspf6AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.stringToTerraform(struct!.advertise),
    id: cdktf.numberToTerraform(struct!.id),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
  }
}


export function routerOspf6AreaRangeToHclTerraform(struct?: RouterOspf6AreaRange | cdktf.IResolvable): any {
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
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaRange | cdktf.IResolvable | undefined {
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
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6AreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._id = undefined;
      this._prefix6 = undefined;
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
      this._prefix6 = value.prefix6;
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

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }
}

export class RouterOspf6AreaRangeList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaRange[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaRangeOutputReference {
    return new RouterOspf6AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaVirtualLinkIpsecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#auth_key RouterOspf6#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#enc_key RouterOspf6#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#spi RouterOspf6#spi}
  */
  readonly spi?: number;
}

export function routerOspf6AreaVirtualLinkIpsecKeysToTerraform(struct?: RouterOspf6AreaVirtualLinkIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKey),
    enc_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encKey),
    spi: cdktf.numberToTerraform(struct!.spi),
  }
}


export function routerOspf6AreaVirtualLinkIpsecKeysToHclTerraform(struct?: RouterOspf6AreaVirtualLinkIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enc_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spi: {
      value: cdktf.numberToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaVirtualLinkIpsecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaVirtualLinkIpsecKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._encKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encKey = this._encKey;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6AreaVirtualLinkIpsecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKey = undefined;
      this._encKey = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKey = value.authKey;
      this._encKey = value.encKey;
      this._spi = value.spi;
    }
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string[]; 
  public get authKey() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_key'));
  }
  public set authKey(value: string[]) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // enc_key - computed: true, optional: true, required: false
  private _encKey?: string[]; 
  public get encKey() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_key'));
  }
  public set encKey(value: string[]) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}

export class RouterOspf6AreaVirtualLinkIpsecKeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaVirtualLinkIpsecKeys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaVirtualLinkIpsecKeysOutputReference {
    return new RouterOspf6AreaVirtualLinkIpsecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaVirtualLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#authentication RouterOspf6#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#dead_interval RouterOspf6#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#hello_interval RouterOspf6#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_auth_alg RouterOspf6#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_enc_alg RouterOspf6#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#key_rollover_interval RouterOspf6#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#name RouterOspf6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#peer RouterOspf6#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#retransmit_interval RouterOspf6#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#transmit_delay RouterOspf6#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_keys RouterOspf6#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6AreaVirtualLinkIpsecKeys[] | cdktf.IResolvable;
}

export function routerOspf6AreaVirtualLinkToTerraform(struct?: RouterOspf6AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    key_rollover_interval: cdktf.numberToTerraform(struct!.keyRolloverInterval),
    name: cdktf.stringToTerraform(struct!.name),
    peer: cdktf.stringToTerraform(struct!.peer),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    ipsec_keys: cdktf.listMapper(routerOspf6AreaVirtualLinkIpsecKeysToTerraform, true)(struct!.ipsecKeys),
  }
}


export function routerOspf6AreaVirtualLinkToHclTerraform(struct?: RouterOspf6AreaVirtualLink | cdktf.IResolvable): any {
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
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_rollover_interval: {
      value: cdktf.numberToHclTerraform(struct!.keyRolloverInterval),
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
    ipsec_keys: {
      value: cdktf.listMapperHcl(routerOspf6AreaVirtualLinkIpsecKeysToHclTerraform, true)(struct!.ipsecKeys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6AreaVirtualLinkIpsecKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._keyRolloverInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRolloverInterval = this._keyRolloverInterval;
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
    if (this._ipsecKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecKeys = this._ipsecKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6AreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._keyRolloverInterval = undefined;
      this._name = undefined;
      this._peer = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._ipsecKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._keyRolloverInterval = value.keyRolloverInterval;
      this._name = value.name;
      this._peer = value.peer;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._ipsecKeys.internalValue = value.ipsecKeys;
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

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // key_rollover_interval - computed: true, optional: true, required: false
  private _keyRolloverInterval?: number; 
  public get keyRolloverInterval() {
    return this.getNumberAttribute('key_rollover_interval');
  }
  public set keyRolloverInterval(value: number) {
    this._keyRolloverInterval = value;
  }
  public resetKeyRolloverInterval() {
    this._keyRolloverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRolloverIntervalInput() {
    return this._keyRolloverInterval;
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

  // ipsec_keys - computed: false, optional: true, required: false
  private _ipsecKeys = new RouterOspf6AreaVirtualLinkIpsecKeysList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6AreaVirtualLinkIpsecKeys[] | cdktf.IResolvable) {
    this._ipsecKeys.internalValue = value;
  }
  public resetIpsecKeys() {
    this._ipsecKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecKeysInput() {
    return this._ipsecKeys.internalValue;
  }
}

export class RouterOspf6AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaVirtualLinkOutputReference {
    return new RouterOspf6AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Area {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#authentication RouterOspf6#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#default_cost RouterOspf6#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#id RouterOspf6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_auth_alg RouterOspf6#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_enc_alg RouterOspf6#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#key_rollover_interval RouterOspf6#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#nssa_default_information_originate RouterOspf6#nssa_default_information_originate}
  */
  readonly nssaDefaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#nssa_default_information_originate_metric RouterOspf6#nssa_default_information_originate_metric}
  */
  readonly nssaDefaultInformationOriginateMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#nssa_default_information_originate_metric_type RouterOspf6#nssa_default_information_originate_metric_type}
  */
  readonly nssaDefaultInformationOriginateMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#nssa_redistribution RouterOspf6#nssa_redistribution}
  */
  readonly nssaRedistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#nssa_translator_role RouterOspf6#nssa_translator_role}
  */
  readonly nssaTranslatorRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#stub_type RouterOspf6#stub_type}
  */
  readonly stubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#type RouterOspf6#type}
  */
  readonly type?: string;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_keys RouterOspf6#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6AreaIpsecKeys[] | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#range RouterOspf6#range}
  */
  readonly range?: RouterOspf6AreaRange[] | cdktf.IResolvable;
  /**
  * virtual_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#virtual_link RouterOspf6#virtual_link}
  */
  readonly virtualLink?: RouterOspf6AreaVirtualLink[] | cdktf.IResolvable;
}

export function routerOspf6AreaToTerraform(struct?: RouterOspf6Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    default_cost: cdktf.numberToTerraform(struct!.defaultCost),
    id: cdktf.stringToTerraform(struct!.id),
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    key_rollover_interval: cdktf.numberToTerraform(struct!.keyRolloverInterval),
    nssa_default_information_originate: cdktf.stringToTerraform(struct!.nssaDefaultInformationOriginate),
    nssa_default_information_originate_metric: cdktf.numberToTerraform(struct!.nssaDefaultInformationOriginateMetric),
    nssa_default_information_originate_metric_type: cdktf.stringToTerraform(struct!.nssaDefaultInformationOriginateMetricType),
    nssa_redistribution: cdktf.stringToTerraform(struct!.nssaRedistribution),
    nssa_translator_role: cdktf.stringToTerraform(struct!.nssaTranslatorRole),
    stub_type: cdktf.stringToTerraform(struct!.stubType),
    type: cdktf.stringToTerraform(struct!.type),
    ipsec_keys: cdktf.listMapper(routerOspf6AreaIpsecKeysToTerraform, true)(struct!.ipsecKeys),
    range: cdktf.listMapper(routerOspf6AreaRangeToTerraform, true)(struct!.range),
    virtual_link: cdktf.listMapper(routerOspf6AreaVirtualLinkToTerraform, true)(struct!.virtualLink),
  }
}


export function routerOspf6AreaToHclTerraform(struct?: RouterOspf6Area | cdktf.IResolvable): any {
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
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_rollover_interval: {
      value: cdktf.numberToHclTerraform(struct!.keyRolloverInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nssa_default_information_originate: {
      value: cdktf.stringToHclTerraform(struct!.nssaDefaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_default_information_originate_metric: {
      value: cdktf.numberToHclTerraform(struct!.nssaDefaultInformationOriginateMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nssa_default_information_originate_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.nssaDefaultInformationOriginateMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_redistribution: {
      value: cdktf.stringToHclTerraform(struct!.nssaRedistribution),
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
    ipsec_keys: {
      value: cdktf.listMapperHcl(routerOspf6AreaIpsecKeysToHclTerraform, true)(struct!.ipsecKeys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6AreaIpsecKeysList",
    },
    range: {
      value: cdktf.listMapperHcl(routerOspf6AreaRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6AreaRangeList",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(routerOspf6AreaVirtualLinkToHclTerraform, true)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6AreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Area | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._defaultCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCost = this._defaultCost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._keyRolloverInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRolloverInterval = this._keyRolloverInterval;
    }
    if (this._nssaDefaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginate = this._nssaDefaultInformationOriginate;
    }
    if (this._nssaDefaultInformationOriginateMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginateMetric = this._nssaDefaultInformationOriginateMetric;
    }
    if (this._nssaDefaultInformationOriginateMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaDefaultInformationOriginateMetricType = this._nssaDefaultInformationOriginateMetricType;
    }
    if (this._nssaRedistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaRedistribution = this._nssaRedistribution;
    }
    if (this._nssaTranslatorRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaTranslatorRole = this._nssaTranslatorRole;
    }
    if (this._stubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubType = this._stubType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ipsecKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecKeys = this._ipsecKeys?.internalValue;
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

  public set internalValue(value: RouterOspf6Area | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._defaultCost = undefined;
      this._id = undefined;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._keyRolloverInterval = undefined;
      this._nssaDefaultInformationOriginate = undefined;
      this._nssaDefaultInformationOriginateMetric = undefined;
      this._nssaDefaultInformationOriginateMetricType = undefined;
      this._nssaRedistribution = undefined;
      this._nssaTranslatorRole = undefined;
      this._stubType = undefined;
      this._type = undefined;
      this._ipsecKeys.internalValue = undefined;
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
      this._authentication = value.authentication;
      this._defaultCost = value.defaultCost;
      this._id = value.id;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._keyRolloverInterval = value.keyRolloverInterval;
      this._nssaDefaultInformationOriginate = value.nssaDefaultInformationOriginate;
      this._nssaDefaultInformationOriginateMetric = value.nssaDefaultInformationOriginateMetric;
      this._nssaDefaultInformationOriginateMetricType = value.nssaDefaultInformationOriginateMetricType;
      this._nssaRedistribution = value.nssaRedistribution;
      this._nssaTranslatorRole = value.nssaTranslatorRole;
      this._stubType = value.stubType;
      this._type = value.type;
      this._ipsecKeys.internalValue = value.ipsecKeys;
      this._range.internalValue = value.range;
      this._virtualLink.internalValue = value.virtualLink;
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

  // id - computed: false, optional: true, required: false
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

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // key_rollover_interval - computed: true, optional: true, required: false
  private _keyRolloverInterval?: number; 
  public get keyRolloverInterval() {
    return this.getNumberAttribute('key_rollover_interval');
  }
  public set keyRolloverInterval(value: number) {
    this._keyRolloverInterval = value;
  }
  public resetKeyRolloverInterval() {
    this._keyRolloverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRolloverIntervalInput() {
    return this._keyRolloverInterval;
  }

  // nssa_default_information_originate - computed: true, optional: true, required: false
  private _nssaDefaultInformationOriginate?: string; 
  public get nssaDefaultInformationOriginate() {
    return this.getStringAttribute('nssa_default_information_originate');
  }
  public set nssaDefaultInformationOriginate(value: string) {
    this._nssaDefaultInformationOriginate = value;
  }
  public resetNssaDefaultInformationOriginate() {
    this._nssaDefaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateInput() {
    return this._nssaDefaultInformationOriginate;
  }

  // nssa_default_information_originate_metric - computed: true, optional: true, required: false
  private _nssaDefaultInformationOriginateMetric?: number; 
  public get nssaDefaultInformationOriginateMetric() {
    return this.getNumberAttribute('nssa_default_information_originate_metric');
  }
  public set nssaDefaultInformationOriginateMetric(value: number) {
    this._nssaDefaultInformationOriginateMetric = value;
  }
  public resetNssaDefaultInformationOriginateMetric() {
    this._nssaDefaultInformationOriginateMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateMetricInput() {
    return this._nssaDefaultInformationOriginateMetric;
  }

  // nssa_default_information_originate_metric_type - computed: true, optional: true, required: false
  private _nssaDefaultInformationOriginateMetricType?: string; 
  public get nssaDefaultInformationOriginateMetricType() {
    return this.getStringAttribute('nssa_default_information_originate_metric_type');
  }
  public set nssaDefaultInformationOriginateMetricType(value: string) {
    this._nssaDefaultInformationOriginateMetricType = value;
  }
  public resetNssaDefaultInformationOriginateMetricType() {
    this._nssaDefaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaDefaultInformationOriginateMetricTypeInput() {
    return this._nssaDefaultInformationOriginateMetricType;
  }

  // nssa_redistribution - computed: true, optional: true, required: false
  private _nssaRedistribution?: string; 
  public get nssaRedistribution() {
    return this.getStringAttribute('nssa_redistribution');
  }
  public set nssaRedistribution(value: string) {
    this._nssaRedistribution = value;
  }
  public resetNssaRedistribution() {
    this._nssaRedistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaRedistributionInput() {
    return this._nssaRedistribution;
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

  // ipsec_keys - computed: false, optional: true, required: false
  private _ipsecKeys = new RouterOspf6AreaIpsecKeysList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6AreaIpsecKeys[] | cdktf.IResolvable) {
    this._ipsecKeys.internalValue = value;
  }
  public resetIpsecKeys() {
    this._ipsecKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecKeysInput() {
    return this._ipsecKeys.internalValue;
  }

  // range - computed: false, optional: true, required: false
  private _range = new RouterOspf6AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: RouterOspf6AreaRange[] | cdktf.IResolvable) {
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
  private _virtualLink = new RouterOspf6AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: RouterOspf6AreaVirtualLink[] | cdktf.IResolvable) {
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

export class RouterOspf6AreaList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Area[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaOutputReference {
    return new RouterOspf6AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Ospf6InterfaceIpsecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#auth_key RouterOspf6#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#enc_key RouterOspf6#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#spi RouterOspf6#spi}
  */
  readonly spi?: number;
}

export function routerOspf6Ospf6InterfaceIpsecKeysToTerraform(struct?: RouterOspf6Ospf6InterfaceIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKey),
    enc_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encKey),
    spi: cdktf.numberToTerraform(struct!.spi),
  }
}


export function routerOspf6Ospf6InterfaceIpsecKeysToHclTerraform(struct?: RouterOspf6Ospf6InterfaceIpsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enc_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spi: {
      value: cdktf.numberToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6Ospf6InterfaceIpsecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Ospf6InterfaceIpsecKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._encKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encKey = this._encKey;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Ospf6InterfaceIpsecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKey = undefined;
      this._encKey = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKey = value.authKey;
      this._encKey = value.encKey;
      this._spi = value.spi;
    }
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string[]; 
  public get authKey() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_key'));
  }
  public set authKey(value: string[]) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // enc_key - computed: true, optional: true, required: false
  private _encKey?: string[]; 
  public get encKey() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_key'));
  }
  public set encKey(value: string[]) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}

export class RouterOspf6Ospf6InterfaceIpsecKeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Ospf6InterfaceIpsecKeys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6Ospf6InterfaceIpsecKeysOutputReference {
    return new RouterOspf6Ospf6InterfaceIpsecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Ospf6InterfaceNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#cost RouterOspf6#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ip6 RouterOspf6#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#poll_interval RouterOspf6#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#priority RouterOspf6#priority}
  */
  readonly priority?: number;
}

export function routerOspf6Ospf6InterfaceNeighborToTerraform(struct?: RouterOspf6Ospf6InterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function routerOspf6Ospf6InterfaceNeighborToHclTerraform(struct?: RouterOspf6Ospf6InterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6Ospf6InterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Ospf6InterfaceNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Ospf6InterfaceNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._ip6 = undefined;
      this._pollInterval = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._ip6 = value.ip6;
      this._pollInterval = value.pollInterval;
      this._priority = value.priority;
    }
  }

  // cost - computed: false, optional: true, required: false
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

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // poll_interval - computed: true, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
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
}

export class RouterOspf6Ospf6InterfaceNeighborList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Ospf6InterfaceNeighbor[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6Ospf6InterfaceNeighborOutputReference {
    return new RouterOspf6Ospf6InterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Ospf6Interface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#area_id RouterOspf6#area_id}
  */
  readonly areaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#authentication RouterOspf6#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#bfd RouterOspf6#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#cost RouterOspf6#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#dead_interval RouterOspf6#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#hello_interval RouterOspf6#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#interface RouterOspf6#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_auth_alg RouterOspf6#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_enc_alg RouterOspf6#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#key_rollover_interval RouterOspf6#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#mtu RouterOspf6#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#mtu_ignore RouterOspf6#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#name RouterOspf6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#network_type RouterOspf6#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#priority RouterOspf6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#retransmit_interval RouterOspf6#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#status RouterOspf6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#transmit_delay RouterOspf6#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#ipsec_keys RouterOspf6#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6Ospf6InterfaceIpsecKeys[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#neighbor RouterOspf6#neighbor}
  */
  readonly neighbor?: RouterOspf6Ospf6InterfaceNeighbor[] | cdktf.IResolvable;
}

export function routerOspf6Ospf6InterfaceToTerraform(struct?: RouterOspf6Ospf6Interface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    ipsec_auth_alg: cdktf.stringToTerraform(struct!.ipsecAuthAlg),
    ipsec_enc_alg: cdktf.stringToTerraform(struct!.ipsecEncAlg),
    key_rollover_interval: cdktf.numberToTerraform(struct!.keyRolloverInterval),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.stringToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    status: cdktf.stringToTerraform(struct!.status),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    ipsec_keys: cdktf.listMapper(routerOspf6Ospf6InterfaceIpsecKeysToTerraform, true)(struct!.ipsecKeys),
    neighbor: cdktf.listMapper(routerOspf6Ospf6InterfaceNeighborToTerraform, true)(struct!.neighbor),
  }
}


export function routerOspf6Ospf6InterfaceToHclTerraform(struct?: RouterOspf6Ospf6Interface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
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
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipsec_auth_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecAuthAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_enc_alg: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_rollover_interval: {
      value: cdktf.numberToHclTerraform(struct!.keyRolloverInterval),
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
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_keys: {
      value: cdktf.listMapperHcl(routerOspf6Ospf6InterfaceIpsecKeysToHclTerraform, true)(struct!.ipsecKeys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6Ospf6InterfaceIpsecKeysList",
    },
    neighbor: {
      value: cdktf.listMapperHcl(routerOspf6Ospf6InterfaceNeighborToHclTerraform, true)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6Ospf6InterfaceNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6Ospf6InterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Ospf6Interface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
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
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipsecAuthAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAuthAlg = this._ipsecAuthAlg;
    }
    if (this._ipsecEncAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncAlg = this._ipsecEncAlg;
    }
    if (this._keyRolloverInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRolloverInterval = this._keyRolloverInterval;
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
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._ipsecKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecKeys = this._ipsecKeys?.internalValue;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Ospf6Interface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
      this._authentication = undefined;
      this._bfd = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._interface = undefined;
      this._ipsecAuthAlg = undefined;
      this._ipsecEncAlg = undefined;
      this._keyRolloverInterval = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._networkType = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._status = undefined;
      this._transmitDelay = undefined;
      this._ipsecKeys.internalValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
      this._authentication = value.authentication;
      this._bfd = value.bfd;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._interface = value.interface;
      this._ipsecAuthAlg = value.ipsecAuthAlg;
      this._ipsecEncAlg = value.ipsecEncAlg;
      this._keyRolloverInterval = value.keyRolloverInterval;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._networkType = value.networkType;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._status = value.status;
      this._transmitDelay = value.transmitDelay;
      this._ipsecKeys.internalValue = value.ipsecKeys;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // area_id - computed: true, optional: true, required: false
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  public resetAreaId() {
    this._areaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
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

  // cost - computed: false, optional: true, required: false
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

  // dead_interval - computed: false, optional: true, required: false
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

  // hello_interval - computed: false, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // key_rollover_interval - computed: true, optional: true, required: false
  private _keyRolloverInterval?: number; 
  public get keyRolloverInterval() {
    return this.getNumberAttribute('key_rollover_interval');
  }
  public set keyRolloverInterval(value: number) {
    this._keyRolloverInterval = value;
  }
  public resetKeyRolloverInterval() {
    this._keyRolloverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRolloverIntervalInput() {
    return this._keyRolloverInterval;
  }

  // mtu - computed: false, optional: true, required: false
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

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // ipsec_keys - computed: false, optional: true, required: false
  private _ipsecKeys = new RouterOspf6Ospf6InterfaceIpsecKeysList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6Ospf6InterfaceIpsecKeys[] | cdktf.IResolvable) {
    this._ipsecKeys.internalValue = value;
  }
  public resetIpsecKeys() {
    this._ipsecKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecKeysInput() {
    return this._ipsecKeys.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterOspf6Ospf6InterfaceNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterOspf6Ospf6InterfaceNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}

export class RouterOspf6Ospf6InterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Ospf6Interface[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6Ospf6InterfaceOutputReference {
    return new RouterOspf6Ospf6InterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Redistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#metric RouterOspf6#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#metric_type RouterOspf6#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#name RouterOspf6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#routemap RouterOspf6#routemap}
  */
  readonly routemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#status RouterOspf6#status}
  */
  readonly status?: string;
}

export function routerOspf6RedistributeToTerraform(struct?: RouterOspf6RedistributeOutputReference | RouterOspf6Redistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routemap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerOspf6RedistributeToHclTerraform(struct?: RouterOspf6RedistributeOutputReference | RouterOspf6Redistribute): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6RedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspf6Redistribute | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Redistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._routemap = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._name = value.name;
      this._routemap = value.routemap;
      this._status = value.status;
    }
  }

  // metric - computed: false, optional: true, required: false
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

  // routemap - computed: true, optional: true, required: false
  private _routemap?: string[]; 
  public get routemap() {
    return cdktf.Fn.tolist(this.getListAttribute('routemap'));
  }
  public set routemap(value: string[]) {
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
}
export interface RouterOspf6SummaryAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#advertise RouterOspf6#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#id RouterOspf6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#prefix6 RouterOspf6#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#tag RouterOspf6#tag}
  */
  readonly tag?: number;
}

export function routerOspf6SummaryAddressToTerraform(struct?: RouterOspf6SummaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.stringToTerraform(struct!.advertise),
    id: cdktf.numberToTerraform(struct!.id),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspf6SummaryAddressToHclTerraform(struct?: RouterOspf6SummaryAddress | cdktf.IResolvable): any {
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
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
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

export class RouterOspf6SummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6SummaryAddress | cdktf.IResolvable | undefined {
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
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6SummaryAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._id = undefined;
      this._prefix6 = undefined;
      this._tag = undefined;
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
      this._prefix6 = value.prefix6;
      this._tag = value.tag;
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

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // tag - computed: false, optional: true, required: false
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

export class RouterOspf6SummaryAddressList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6SummaryAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6SummaryAddressOutputReference {
    return new RouterOspf6SummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6 fmgdevice_router_ospf6}
*/
export class RouterOspf6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ospf6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf6 to import
  * @param importFromId The id of the existing RouterOspf6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ospf6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6 fmgdevice_router_ospf6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspf6Config = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspf6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ospf6',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._autoCostRefBandwidth = config.autoCostRefBandwidth;
    this._bfd = config.bfd;
    this._defaultInformationMetric = config.defaultInformationMetric;
    this._defaultInformationMetricType = config.defaultInformationMetricType;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationRouteMap = config.defaultInformationRouteMap;
    this._defaultMetric = config.defaultMetric;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._logNeighbourChanges = config.logNeighbourChanges;
    this._passiveInterface = config.passiveInterface;
    this._restartMode = config.restartMode;
    this._restartOnTopologyChange = config.restartOnTopologyChange;
    this._restartPeriod = config.restartPeriod;
    this._routerId = config.routerId;
    this._spfTimers = config.spfTimers;
    this._area.internalValue = config.area;
    this._ospf6Interface.internalValue = config.ospf6Interface;
    this._redistribute.internalValue = config.redistribute;
    this._summaryAddress.internalValue = config.summaryAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abr_type - computed: false, optional: true, required: false
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

  // auto_cost_ref_bandwidth - computed: true, optional: true, required: false
  private _autoCostRefBandwidth?: number; 
  public get autoCostRefBandwidth() {
    return this.getNumberAttribute('auto_cost_ref_bandwidth');
  }
  public set autoCostRefBandwidth(value: number) {
    this._autoCostRefBandwidth = value;
  }
  public resetAutoCostRefBandwidth() {
    this._autoCostRefBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostRefBandwidthInput() {
    return this._autoCostRefBandwidth;
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

  // default_information_route_map - computed: true, optional: true, required: false
  private _defaultInformationRouteMap?: string[]; 
  public get defaultInformationRouteMap() {
    return cdktf.Fn.tolist(this.getListAttribute('default_information_route_map'));
  }
  public set defaultInformationRouteMap(value: string[]) {
    this._defaultInformationRouteMap = value;
  }
  public resetDefaultInformationRouteMap() {
    this._defaultInformationRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationRouteMapInput() {
    return this._defaultInformationRouteMap;
  }

  // default_metric - computed: true, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // passive_interface - computed: true, optional: true, required: false
  private _passiveInterface?: string[]; 
  public get passiveInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('passive_interface'));
  }
  public set passiveInterface(value: string[]) {
    this._passiveInterface = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface;
  }

  // restart_mode - computed: true, optional: true, required: false
  private _restartMode?: string; 
  public get restartMode() {
    return this.getStringAttribute('restart_mode');
  }
  public set restartMode(value: string) {
    this._restartMode = value;
  }
  public resetRestartMode() {
    this._restartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartModeInput() {
    return this._restartMode;
  }

  // restart_on_topology_change - computed: true, optional: true, required: false
  private _restartOnTopologyChange?: string; 
  public get restartOnTopologyChange() {
    return this.getStringAttribute('restart_on_topology_change');
  }
  public set restartOnTopologyChange(value: string) {
    this._restartOnTopologyChange = value;
  }
  public resetRestartOnTopologyChange() {
    this._restartOnTopologyChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartOnTopologyChangeInput() {
    return this._restartOnTopologyChange;
  }

  // restart_period - computed: true, optional: true, required: false
  private _restartPeriod?: number; 
  public get restartPeriod() {
    return this.getNumberAttribute('restart_period');
  }
  public set restartPeriod(value: number) {
    this._restartPeriod = value;
  }
  public resetRestartPeriod() {
    this._restartPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPeriodInput() {
    return this._restartPeriod;
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
  private _spfTimers?: number[]; 
  public get spfTimers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('spf_timers')));
  }
  public set spfTimers(value: number[]) {
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
  private _area = new RouterOspf6AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: RouterOspf6Area[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // ospf6_interface - computed: false, optional: true, required: false
  private _ospf6Interface = new RouterOspf6Ospf6InterfaceList(this, "ospf6_interface", false);
  public get ospf6Interface() {
    return this._ospf6Interface;
  }
  public putOspf6Interface(value: RouterOspf6Ospf6Interface[] | cdktf.IResolvable) {
    this._ospf6Interface.internalValue = value;
  }
  public resetOspf6Interface() {
    this._ospf6Interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6InterfaceInput() {
    return this._ospf6Interface.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterOspf6RedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterOspf6Redistribute) {
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
  private _summaryAddress = new RouterOspf6SummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }
  public putSummaryAddress(value: RouterOspf6SummaryAddress[] | cdktf.IResolvable) {
    this._summaryAddress.internalValue = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abr_type: cdktf.stringToTerraform(this._abrType),
      auto_cost_ref_bandwidth: cdktf.numberToTerraform(this._autoCostRefBandwidth),
      bfd: cdktf.stringToTerraform(this._bfd),
      default_information_metric: cdktf.numberToTerraform(this._defaultInformationMetric),
      default_information_metric_type: cdktf.stringToTerraform(this._defaultInformationMetricType),
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      default_information_route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultInformationRouteMap),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      log_neighbour_changes: cdktf.stringToTerraform(this._logNeighbourChanges),
      passive_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passiveInterface),
      restart_mode: cdktf.stringToTerraform(this._restartMode),
      restart_on_topology_change: cdktf.stringToTerraform(this._restartOnTopologyChange),
      restart_period: cdktf.numberToTerraform(this._restartPeriod),
      router_id: cdktf.stringToTerraform(this._routerId),
      spf_timers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._spfTimers),
      area: cdktf.listMapper(routerOspf6AreaToTerraform, true)(this._area.internalValue),
      ospf6_interface: cdktf.listMapper(routerOspf6Ospf6InterfaceToTerraform, true)(this._ospf6Interface.internalValue),
      redistribute: routerOspf6RedistributeToTerraform(this._redistribute.internalValue),
      summary_address: cdktf.listMapper(routerOspf6SummaryAddressToTerraform, true)(this._summaryAddress.internalValue),
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
      auto_cost_ref_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostRefBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      default_information_route_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultInformationRouteMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      passive_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passiveInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restart_mode: {
        value: cdktf.stringToHclTerraform(this._restartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_on_topology_change: {
        value: cdktf.stringToHclTerraform(this._restartOnTopologyChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_period: {
        value: cdktf.numberToHclTerraform(this._restartPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_timers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._spfTimers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      area: {
        value: cdktf.listMapperHcl(routerOspf6AreaToHclTerraform, true)(this._area.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6AreaList",
      },
      ospf6_interface: {
        value: cdktf.listMapperHcl(routerOspf6Ospf6InterfaceToHclTerraform, true)(this._ospf6Interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6Ospf6InterfaceList",
      },
      redistribute: {
        value: routerOspf6RedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6RedistributeList",
      },
      summary_address: {
        value: cdktf.listMapperHcl(routerOspf6SummaryAddressToHclTerraform, true)(this._summaryAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6SummaryAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
