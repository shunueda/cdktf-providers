// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerQosprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#bandwidth_admission_control WirelesscontrollerQosprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#bandwidth_capacity WirelesscontrollerQosprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#burst WirelesscontrollerQosprofile#burst}
  */
  readonly burst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#call_admission_control WirelesscontrollerQosprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#call_capacity WirelesscontrollerQosprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#comment WirelesscontrollerQosprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#downlink WirelesscontrollerQosprofile#downlink}
  */
  readonly downlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#downlink_sta WirelesscontrollerQosprofile#downlink_sta}
  */
  readonly downlinkSta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_mapping WirelesscontrollerQosprofile#dscp_wmm_mapping}
  */
  readonly dscpWmmMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dynamic_sort_subtable WirelesscontrollerQosprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#get_all_tables WirelesscontrollerQosprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#name WirelesscontrollerQosprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#uplink WirelesscontrollerQosprofile#uplink}
  */
  readonly uplink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#uplink_sta WirelesscontrollerQosprofile#uplink_sta}
  */
  readonly uplinkSta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#vdomparam WirelesscontrollerQosprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm WirelesscontrollerQosprofile#wmm}
  */
  readonly wmm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_be_dscp WirelesscontrollerQosprofile#wmm_be_dscp}
  */
  readonly wmmBeDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_bk_dscp WirelesscontrollerQosprofile#wmm_bk_dscp}
  */
  readonly wmmBkDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_dscp_marking WirelesscontrollerQosprofile#wmm_dscp_marking}
  */
  readonly wmmDscpMarking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_uapsd WirelesscontrollerQosprofile#wmm_uapsd}
  */
  readonly wmmUapsd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_vi_dscp WirelesscontrollerQosprofile#wmm_vi_dscp}
  */
  readonly wmmViDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#wmm_vo_dscp WirelesscontrollerQosprofile#wmm_vo_dscp}
  */
  readonly wmmVoDscp?: number;
  /**
  * dscp_wmm_be block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_be WirelesscontrollerQosprofile#dscp_wmm_be}
  */
  readonly dscpWmmBe?: WirelesscontrollerQosprofileDscpWmmBe[] | cdktf.IResolvable;
  /**
  * dscp_wmm_bk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_bk WirelesscontrollerQosprofile#dscp_wmm_bk}
  */
  readonly dscpWmmBk?: WirelesscontrollerQosprofileDscpWmmBk[] | cdktf.IResolvable;
  /**
  * dscp_wmm_vi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_vi WirelesscontrollerQosprofile#dscp_wmm_vi}
  */
  readonly dscpWmmVi?: WirelesscontrollerQosprofileDscpWmmVi[] | cdktf.IResolvable;
  /**
  * dscp_wmm_vo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#dscp_wmm_vo WirelesscontrollerQosprofile#dscp_wmm_vo}
  */
  readonly dscpWmmVo?: WirelesscontrollerQosprofileDscpWmmVo[] | cdktf.IResolvable;
}
export interface WirelesscontrollerQosprofileDscpWmmBe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerQosprofileDscpWmmBeToTerraform(struct?: WirelesscontrollerQosprofileDscpWmmBe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerQosprofileDscpWmmBeToHclTerraform(struct?: WirelesscontrollerQosprofileDscpWmmBe | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerQosprofileDscpWmmBeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerQosprofileDscpWmmBe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerQosprofileDscpWmmBe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WirelesscontrollerQosprofileDscpWmmBeList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerQosprofileDscpWmmBe[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerQosprofileDscpWmmBeOutputReference {
    return new WirelesscontrollerQosprofileDscpWmmBeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerQosprofileDscpWmmBk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerQosprofileDscpWmmBkToTerraform(struct?: WirelesscontrollerQosprofileDscpWmmBk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerQosprofileDscpWmmBkToHclTerraform(struct?: WirelesscontrollerQosprofileDscpWmmBk | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerQosprofileDscpWmmBkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerQosprofileDscpWmmBk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerQosprofileDscpWmmBk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WirelesscontrollerQosprofileDscpWmmBkList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerQosprofileDscpWmmBk[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerQosprofileDscpWmmBkOutputReference {
    return new WirelesscontrollerQosprofileDscpWmmBkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerQosprofileDscpWmmVi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerQosprofileDscpWmmViToTerraform(struct?: WirelesscontrollerQosprofileDscpWmmVi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerQosprofileDscpWmmViToHclTerraform(struct?: WirelesscontrollerQosprofileDscpWmmVi | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerQosprofileDscpWmmViOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerQosprofileDscpWmmVi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerQosprofileDscpWmmVi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WirelesscontrollerQosprofileDscpWmmViList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerQosprofileDscpWmmVi[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerQosprofileDscpWmmViOutputReference {
    return new WirelesscontrollerQosprofileDscpWmmViOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerQosprofileDscpWmmVo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#id WirelesscontrollerQosprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerQosprofileDscpWmmVoToTerraform(struct?: WirelesscontrollerQosprofileDscpWmmVo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerQosprofileDscpWmmVoToHclTerraform(struct?: WirelesscontrollerQosprofileDscpWmmVo | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerQosprofileDscpWmmVoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerQosprofileDscpWmmVo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerQosprofileDscpWmmVo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WirelesscontrollerQosprofileDscpWmmVoList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerQosprofileDscpWmmVo[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerQosprofileDscpWmmVoOutputReference {
    return new WirelesscontrollerQosprofileDscpWmmVoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile fortios_wirelesscontroller_qosprofile}
*/
export class WirelesscontrollerQosprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_qosprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerQosprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerQosprofile to import
  * @param importFromId The id of the existing WirelesscontrollerQosprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerQosprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_qosprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_qosprofile fortios_wirelesscontroller_qosprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerQosprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerQosprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_qosprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthAdmissionControl = config.bandwidthAdmissionControl;
    this._bandwidthCapacity = config.bandwidthCapacity;
    this._burst = config.burst;
    this._callAdmissionControl = config.callAdmissionControl;
    this._callCapacity = config.callCapacity;
    this._comment = config.comment;
    this._downlink = config.downlink;
    this._downlinkSta = config.downlinkSta;
    this._dscpWmmMapping = config.dscpWmmMapping;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._uplink = config.uplink;
    this._uplinkSta = config.uplinkSta;
    this._vdomparam = config.vdomparam;
    this._wmm = config.wmm;
    this._wmmBeDscp = config.wmmBeDscp;
    this._wmmBkDscp = config.wmmBkDscp;
    this._wmmDscpMarking = config.wmmDscpMarking;
    this._wmmUapsd = config.wmmUapsd;
    this._wmmViDscp = config.wmmViDscp;
    this._wmmVoDscp = config.wmmVoDscp;
    this._dscpWmmBe.internalValue = config.dscpWmmBe;
    this._dscpWmmBk.internalValue = config.dscpWmmBk;
    this._dscpWmmVi.internalValue = config.dscpWmmVi;
    this._dscpWmmVo.internalValue = config.dscpWmmVo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_admission_control - computed: true, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: true, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
  }

  // burst - computed: true, optional: true, required: false
  private _burst?: string; 
  public get burst() {
    return this.getStringAttribute('burst');
  }
  public set burst(value: string) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: true, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // downlink - computed: false, optional: true, required: false
  private _downlink?: number; 
  public get downlink() {
    return this.getNumberAttribute('downlink');
  }
  public set downlink(value: number) {
    this._downlink = value;
  }
  public resetDownlink() {
    this._downlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // downlink_sta - computed: false, optional: true, required: false
  private _downlinkSta?: number; 
  public get downlinkSta() {
    return this.getNumberAttribute('downlink_sta');
  }
  public set downlinkSta(value: number) {
    this._downlinkSta = value;
  }
  public resetDownlinkSta() {
    this._downlinkSta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkStaInput() {
    return this._downlinkSta;
  }

  // dscp_wmm_mapping - computed: true, optional: true, required: false
  private _dscpWmmMapping?: string; 
  public get dscpWmmMapping() {
    return this.getStringAttribute('dscp_wmm_mapping');
  }
  public set dscpWmmMapping(value: string) {
    this._dscpWmmMapping = value;
  }
  public resetDscpWmmMapping() {
    this._dscpWmmMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmMappingInput() {
    return this._dscpWmmMapping;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // uplink - computed: false, optional: true, required: false
  private _uplink?: number; 
  public get uplink() {
    return this.getNumberAttribute('uplink');
  }
  public set uplink(value: number) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // uplink_sta - computed: false, optional: true, required: false
  private _uplinkSta?: number; 
  public get uplinkSta() {
    return this.getNumberAttribute('uplink_sta');
  }
  public set uplinkSta(value: number) {
    this._uplinkSta = value;
  }
  public resetUplinkSta() {
    this._uplinkSta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkStaInput() {
    return this._uplinkSta;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wmm - computed: true, optional: true, required: false
  private _wmm?: string; 
  public get wmm() {
    return this.getStringAttribute('wmm');
  }
  public set wmm(value: string) {
    this._wmm = value;
  }
  public resetWmm() {
    this._wmm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmInput() {
    return this._wmm;
  }

  // wmm_be_dscp - computed: false, optional: true, required: false
  private _wmmBeDscp?: number; 
  public get wmmBeDscp() {
    return this.getNumberAttribute('wmm_be_dscp');
  }
  public set wmmBeDscp(value: number) {
    this._wmmBeDscp = value;
  }
  public resetWmmBeDscp() {
    this._wmmBeDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmBeDscpInput() {
    return this._wmmBeDscp;
  }

  // wmm_bk_dscp - computed: true, optional: true, required: false
  private _wmmBkDscp?: number; 
  public get wmmBkDscp() {
    return this.getNumberAttribute('wmm_bk_dscp');
  }
  public set wmmBkDscp(value: number) {
    this._wmmBkDscp = value;
  }
  public resetWmmBkDscp() {
    this._wmmBkDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmBkDscpInput() {
    return this._wmmBkDscp;
  }

  // wmm_dscp_marking - computed: true, optional: true, required: false
  private _wmmDscpMarking?: string; 
  public get wmmDscpMarking() {
    return this.getStringAttribute('wmm_dscp_marking');
  }
  public set wmmDscpMarking(value: string) {
    this._wmmDscpMarking = value;
  }
  public resetWmmDscpMarking() {
    this._wmmDscpMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmDscpMarkingInput() {
    return this._wmmDscpMarking;
  }

  // wmm_uapsd - computed: true, optional: true, required: false
  private _wmmUapsd?: string; 
  public get wmmUapsd() {
    return this.getStringAttribute('wmm_uapsd');
  }
  public set wmmUapsd(value: string) {
    this._wmmUapsd = value;
  }
  public resetWmmUapsd() {
    this._wmmUapsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmUapsdInput() {
    return this._wmmUapsd;
  }

  // wmm_vi_dscp - computed: true, optional: true, required: false
  private _wmmViDscp?: number; 
  public get wmmViDscp() {
    return this.getNumberAttribute('wmm_vi_dscp');
  }
  public set wmmViDscp(value: number) {
    this._wmmViDscp = value;
  }
  public resetWmmViDscp() {
    this._wmmViDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmViDscpInput() {
    return this._wmmViDscp;
  }

  // wmm_vo_dscp - computed: true, optional: true, required: false
  private _wmmVoDscp?: number; 
  public get wmmVoDscp() {
    return this.getNumberAttribute('wmm_vo_dscp');
  }
  public set wmmVoDscp(value: number) {
    this._wmmVoDscp = value;
  }
  public resetWmmVoDscp() {
    this._wmmVoDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmVoDscpInput() {
    return this._wmmVoDscp;
  }

  // dscp_wmm_be - computed: false, optional: true, required: false
  private _dscpWmmBe = new WirelesscontrollerQosprofileDscpWmmBeList(this, "dscp_wmm_be", true);
  public get dscpWmmBe() {
    return this._dscpWmmBe;
  }
  public putDscpWmmBe(value: WirelesscontrollerQosprofileDscpWmmBe[] | cdktf.IResolvable) {
    this._dscpWmmBe.internalValue = value;
  }
  public resetDscpWmmBe() {
    this._dscpWmmBe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmBeInput() {
    return this._dscpWmmBe.internalValue;
  }

  // dscp_wmm_bk - computed: false, optional: true, required: false
  private _dscpWmmBk = new WirelesscontrollerQosprofileDscpWmmBkList(this, "dscp_wmm_bk", true);
  public get dscpWmmBk() {
    return this._dscpWmmBk;
  }
  public putDscpWmmBk(value: WirelesscontrollerQosprofileDscpWmmBk[] | cdktf.IResolvable) {
    this._dscpWmmBk.internalValue = value;
  }
  public resetDscpWmmBk() {
    this._dscpWmmBk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmBkInput() {
    return this._dscpWmmBk.internalValue;
  }

  // dscp_wmm_vi - computed: false, optional: true, required: false
  private _dscpWmmVi = new WirelesscontrollerQosprofileDscpWmmViList(this, "dscp_wmm_vi", true);
  public get dscpWmmVi() {
    return this._dscpWmmVi;
  }
  public putDscpWmmVi(value: WirelesscontrollerQosprofileDscpWmmVi[] | cdktf.IResolvable) {
    this._dscpWmmVi.internalValue = value;
  }
  public resetDscpWmmVi() {
    this._dscpWmmVi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmViInput() {
    return this._dscpWmmVi.internalValue;
  }

  // dscp_wmm_vo - computed: false, optional: true, required: false
  private _dscpWmmVo = new WirelesscontrollerQosprofileDscpWmmVoList(this, "dscp_wmm_vo", true);
  public get dscpWmmVo() {
    return this._dscpWmmVo;
  }
  public putDscpWmmVo(value: WirelesscontrollerQosprofileDscpWmmVo[] | cdktf.IResolvable) {
    this._dscpWmmVo.internalValue = value;
  }
  public resetDscpWmmVo() {
    this._dscpWmmVo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpWmmVoInput() {
    return this._dscpWmmVo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_admission_control: cdktf.stringToTerraform(this._bandwidthAdmissionControl),
      bandwidth_capacity: cdktf.numberToTerraform(this._bandwidthCapacity),
      burst: cdktf.stringToTerraform(this._burst),
      call_admission_control: cdktf.stringToTerraform(this._callAdmissionControl),
      call_capacity: cdktf.numberToTerraform(this._callCapacity),
      comment: cdktf.stringToTerraform(this._comment),
      downlink: cdktf.numberToTerraform(this._downlink),
      downlink_sta: cdktf.numberToTerraform(this._downlinkSta),
      dscp_wmm_mapping: cdktf.stringToTerraform(this._dscpWmmMapping),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uplink: cdktf.numberToTerraform(this._uplink),
      uplink_sta: cdktf.numberToTerraform(this._uplinkSta),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wmm: cdktf.stringToTerraform(this._wmm),
      wmm_be_dscp: cdktf.numberToTerraform(this._wmmBeDscp),
      wmm_bk_dscp: cdktf.numberToTerraform(this._wmmBkDscp),
      wmm_dscp_marking: cdktf.stringToTerraform(this._wmmDscpMarking),
      wmm_uapsd: cdktf.stringToTerraform(this._wmmUapsd),
      wmm_vi_dscp: cdktf.numberToTerraform(this._wmmViDscp),
      wmm_vo_dscp: cdktf.numberToTerraform(this._wmmVoDscp),
      dscp_wmm_be: cdktf.listMapper(wirelesscontrollerQosprofileDscpWmmBeToTerraform, true)(this._dscpWmmBe.internalValue),
      dscp_wmm_bk: cdktf.listMapper(wirelesscontrollerQosprofileDscpWmmBkToTerraform, true)(this._dscpWmmBk.internalValue),
      dscp_wmm_vi: cdktf.listMapper(wirelesscontrollerQosprofileDscpWmmViToTerraform, true)(this._dscpWmmVi.internalValue),
      dscp_wmm_vo: cdktf.listMapper(wirelesscontrollerQosprofileDscpWmmVoToTerraform, true)(this._dscpWmmVo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_admission_control: {
        value: cdktf.stringToHclTerraform(this._bandwidthAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_capacity: {
        value: cdktf.numberToHclTerraform(this._bandwidthCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      burst: {
        value: cdktf.stringToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_admission_control: {
        value: cdktf.stringToHclTerraform(this._callAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_capacity: {
        value: cdktf.numberToHclTerraform(this._callCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downlink: {
        value: cdktf.numberToHclTerraform(this._downlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_sta: {
        value: cdktf.numberToHclTerraform(this._downlinkSta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_wmm_mapping: {
        value: cdktf.stringToHclTerraform(this._dscpWmmMapping),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink: {
        value: cdktf.numberToHclTerraform(this._uplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_sta: {
        value: cdktf.numberToHclTerraform(this._uplinkSta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm: {
        value: cdktf.stringToHclTerraform(this._wmm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_be_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmBeDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_bk_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmBkDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_dscp_marking: {
        value: cdktf.stringToHclTerraform(this._wmmDscpMarking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_uapsd: {
        value: cdktf.stringToHclTerraform(this._wmmUapsd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_vi_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmViDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wmm_vo_dscp: {
        value: cdktf.numberToHclTerraform(this._wmmVoDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_wmm_be: {
        value: cdktf.listMapperHcl(wirelesscontrollerQosprofileDscpWmmBeToHclTerraform, true)(this._dscpWmmBe.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerQosprofileDscpWmmBeList",
      },
      dscp_wmm_bk: {
        value: cdktf.listMapperHcl(wirelesscontrollerQosprofileDscpWmmBkToHclTerraform, true)(this._dscpWmmBk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerQosprofileDscpWmmBkList",
      },
      dscp_wmm_vi: {
        value: cdktf.listMapperHcl(wirelesscontrollerQosprofileDscpWmmViToHclTerraform, true)(this._dscpWmmVi.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerQosprofileDscpWmmViList",
      },
      dscp_wmm_vo: {
        value: cdktf.listMapperHcl(wirelesscontrollerQosprofileDscpWmmVoToHclTerraform, true)(this._dscpWmmVo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerQosprofileDscpWmmVoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
