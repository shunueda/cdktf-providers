// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspf6AreaAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#authentication RouterOspf6AreaA#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#default_cost RouterOspf6AreaA#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#device_name RouterOspf6AreaA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#device_vdom RouterOspf6AreaA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#dynamic_sort_subtable RouterOspf6AreaA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#fosid RouterOspf6AreaA#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#id RouterOspf6AreaA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_auth_alg RouterOspf6AreaA#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_enc_alg RouterOspf6AreaA#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#key_rollover_interval RouterOspf6AreaA#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#nssa_default_information_originate RouterOspf6AreaA#nssa_default_information_originate}
  */
  readonly nssaDefaultInformationOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#nssa_default_information_originate_metric RouterOspf6AreaA#nssa_default_information_originate_metric}
  */
  readonly nssaDefaultInformationOriginateMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#nssa_default_information_originate_metric_type RouterOspf6AreaA#nssa_default_information_originate_metric_type}
  */
  readonly nssaDefaultInformationOriginateMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#nssa_redistribution RouterOspf6AreaA#nssa_redistribution}
  */
  readonly nssaRedistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#nssa_translator_role RouterOspf6AreaA#nssa_translator_role}
  */
  readonly nssaTranslatorRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#stub_type RouterOspf6AreaA#stub_type}
  */
  readonly stubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#type RouterOspf6AreaA#type}
  */
  readonly type?: string;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_keys RouterOspf6AreaA#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6AreaIpsecKeysA[] | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#range RouterOspf6AreaA#range}
  */
  readonly range?: RouterOspf6AreaRangeA[] | cdktf.IResolvable;
  /**
  * virtual_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#virtual_link RouterOspf6AreaA#virtual_link}
  */
  readonly virtualLink?: RouterOspf6AreaVirtualLinkA[] | cdktf.IResolvable;
}
export interface RouterOspf6AreaIpsecKeysA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#auth_key RouterOspf6AreaA#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#enc_key RouterOspf6AreaA#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#spi RouterOspf6AreaA#spi}
  */
  readonly spi?: number;
}

export function routerOspf6AreaIpsecKeysAToTerraform(struct?: RouterOspf6AreaIpsecKeysA | cdktf.IResolvable): any {
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


export function routerOspf6AreaIpsecKeysAToHclTerraform(struct?: RouterOspf6AreaIpsecKeysA | cdktf.IResolvable): any {
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

export class RouterOspf6AreaIpsecKeysAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaIpsecKeysA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspf6AreaIpsecKeysA | cdktf.IResolvable | undefined) {
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

export class RouterOspf6AreaIpsecKeysAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaIpsecKeysA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaIpsecKeysAOutputReference {
    return new RouterOspf6AreaIpsecKeysAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaRangeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#advertise RouterOspf6AreaA#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#id RouterOspf6AreaA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#prefix6 RouterOspf6AreaA#prefix6}
  */
  readonly prefix6?: string;
}

export function routerOspf6AreaRangeAToTerraform(struct?: RouterOspf6AreaRangeA | cdktf.IResolvable): any {
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


export function routerOspf6AreaRangeAToHclTerraform(struct?: RouterOspf6AreaRangeA | cdktf.IResolvable): any {
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

export class RouterOspf6AreaRangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaRangeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspf6AreaRangeA | cdktf.IResolvable | undefined) {
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

export class RouterOspf6AreaRangeAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaRangeA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaRangeAOutputReference {
    return new RouterOspf6AreaRangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaVirtualLinkIpsecKeysA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#auth_key RouterOspf6AreaA#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#enc_key RouterOspf6AreaA#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#spi RouterOspf6AreaA#spi}
  */
  readonly spi?: number;
}

export function routerOspf6AreaVirtualLinkIpsecKeysAToTerraform(struct?: RouterOspf6AreaVirtualLinkIpsecKeysA | cdktf.IResolvable): any {
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


export function routerOspf6AreaVirtualLinkIpsecKeysAToHclTerraform(struct?: RouterOspf6AreaVirtualLinkIpsecKeysA | cdktf.IResolvable): any {
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

export class RouterOspf6AreaVirtualLinkIpsecKeysAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaVirtualLinkIpsecKeysA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspf6AreaVirtualLinkIpsecKeysA | cdktf.IResolvable | undefined) {
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

export class RouterOspf6AreaVirtualLinkIpsecKeysAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaVirtualLinkIpsecKeysA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaVirtualLinkIpsecKeysAOutputReference {
    return new RouterOspf6AreaVirtualLinkIpsecKeysAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6AreaVirtualLinkA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#authentication RouterOspf6AreaA#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#dead_interval RouterOspf6AreaA#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#hello_interval RouterOspf6AreaA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_auth_alg RouterOspf6AreaA#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_enc_alg RouterOspf6AreaA#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#key_rollover_interval RouterOspf6AreaA#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#name RouterOspf6AreaA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#peer RouterOspf6AreaA#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#retransmit_interval RouterOspf6AreaA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#transmit_delay RouterOspf6AreaA#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#ipsec_keys RouterOspf6AreaA#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6AreaVirtualLinkIpsecKeysA[] | cdktf.IResolvable;
}

export function routerOspf6AreaVirtualLinkAToTerraform(struct?: RouterOspf6AreaVirtualLinkA | cdktf.IResolvable): any {
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
    ipsec_keys: cdktf.listMapper(routerOspf6AreaVirtualLinkIpsecKeysAToTerraform, true)(struct!.ipsecKeys),
  }
}


export function routerOspf6AreaVirtualLinkAToHclTerraform(struct?: RouterOspf6AreaVirtualLinkA | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(routerOspf6AreaVirtualLinkIpsecKeysAToHclTerraform, true)(struct!.ipsecKeys),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspf6AreaVirtualLinkIpsecKeysAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6AreaVirtualLinkAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6AreaVirtualLinkA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspf6AreaVirtualLinkA | cdktf.IResolvable | undefined) {
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
  private _ipsecKeys = new RouterOspf6AreaVirtualLinkIpsecKeysAList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6AreaVirtualLinkIpsecKeysA[] | cdktf.IResolvable) {
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

export class RouterOspf6AreaVirtualLinkAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6AreaVirtualLinkA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6AreaVirtualLinkAOutputReference {
    return new RouterOspf6AreaVirtualLinkAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area fmgdevice_router_ospf6_area}
*/
export class RouterOspf6AreaA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ospf6_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf6AreaA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf6AreaA to import
  * @param importFromId The id of the existing RouterOspf6AreaA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf6AreaA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ospf6_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_area fmgdevice_router_ospf6_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspf6AreaAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspf6AreaAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ospf6_area',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication = config.authentication;
    this._defaultCost = config.defaultCost;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ipsecAuthAlg = config.ipsecAuthAlg;
    this._ipsecEncAlg = config.ipsecEncAlg;
    this._keyRolloverInterval = config.keyRolloverInterval;
    this._nssaDefaultInformationOriginate = config.nssaDefaultInformationOriginate;
    this._nssaDefaultInformationOriginateMetric = config.nssaDefaultInformationOriginateMetric;
    this._nssaDefaultInformationOriginateMetricType = config.nssaDefaultInformationOriginateMetricType;
    this._nssaRedistribution = config.nssaRedistribution;
    this._nssaTranslatorRole = config.nssaTranslatorRole;
    this._stubType = config.stubType;
    this._type = config.type;
    this._ipsecKeys.internalValue = config.ipsecKeys;
    this._range.internalValue = config.range;
    this._virtualLink.internalValue = config.virtualLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fosid - computed: false, optional: true, required: false
  private _fosid?: string; 
  public get fosid() {
    return this.getStringAttribute('fosid');
  }
  public set fosid(value: string) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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
  private _ipsecKeys = new RouterOspf6AreaIpsecKeysAList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6AreaIpsecKeysA[] | cdktf.IResolvable) {
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
  private _range = new RouterOspf6AreaRangeAList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: RouterOspf6AreaRangeA[] | cdktf.IResolvable) {
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
  private _virtualLink = new RouterOspf6AreaVirtualLinkAList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: RouterOspf6AreaVirtualLinkA[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      default_cost: cdktf.numberToTerraform(this._defaultCost),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.stringToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ipsec_auth_alg: cdktf.stringToTerraform(this._ipsecAuthAlg),
      ipsec_enc_alg: cdktf.stringToTerraform(this._ipsecEncAlg),
      key_rollover_interval: cdktf.numberToTerraform(this._keyRolloverInterval),
      nssa_default_information_originate: cdktf.stringToTerraform(this._nssaDefaultInformationOriginate),
      nssa_default_information_originate_metric: cdktf.numberToTerraform(this._nssaDefaultInformationOriginateMetric),
      nssa_default_information_originate_metric_type: cdktf.stringToTerraform(this._nssaDefaultInformationOriginateMetricType),
      nssa_redistribution: cdktf.stringToTerraform(this._nssaRedistribution),
      nssa_translator_role: cdktf.stringToTerraform(this._nssaTranslatorRole),
      stub_type: cdktf.stringToTerraform(this._stubType),
      type: cdktf.stringToTerraform(this._type),
      ipsec_keys: cdktf.listMapper(routerOspf6AreaIpsecKeysAToTerraform, true)(this._ipsecKeys.internalValue),
      range: cdktf.listMapper(routerOspf6AreaRangeAToTerraform, true)(this._range.internalValue),
      virtual_link: cdktf.listMapper(routerOspf6AreaVirtualLinkAToTerraform, true)(this._virtualLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cost: {
        value: cdktf.numberToHclTerraform(this._defaultCost),
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
      fosid: {
        value: cdktf.stringToHclTerraform(this._fosid),
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
      ipsec_auth_alg: {
        value: cdktf.stringToHclTerraform(this._ipsecAuthAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enc_alg: {
        value: cdktf.stringToHclTerraform(this._ipsecEncAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_rollover_interval: {
        value: cdktf.numberToHclTerraform(this._keyRolloverInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nssa_default_information_originate: {
        value: cdktf.stringToHclTerraform(this._nssaDefaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nssa_default_information_originate_metric: {
        value: cdktf.numberToHclTerraform(this._nssaDefaultInformationOriginateMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nssa_default_information_originate_metric_type: {
        value: cdktf.stringToHclTerraform(this._nssaDefaultInformationOriginateMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nssa_redistribution: {
        value: cdktf.stringToHclTerraform(this._nssaRedistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nssa_translator_role: {
        value: cdktf.stringToHclTerraform(this._nssaTranslatorRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stub_type: {
        value: cdktf.stringToHclTerraform(this._stubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_keys: {
        value: cdktf.listMapperHcl(routerOspf6AreaIpsecKeysAToHclTerraform, true)(this._ipsecKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6AreaIpsecKeysAList",
      },
      range: {
        value: cdktf.listMapperHcl(routerOspf6AreaRangeAToHclTerraform, true)(this._range.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6AreaRangeAList",
      },
      virtual_link: {
        value: cdktf.listMapperHcl(routerOspf6AreaVirtualLinkAToHclTerraform, true)(this._virtualLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6AreaVirtualLinkAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
