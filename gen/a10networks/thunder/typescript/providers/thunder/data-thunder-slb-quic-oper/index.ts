// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbQuicOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#id DataThunderSlbQuicOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#oper DataThunderSlbQuicOper#oper}
  */
  readonly oper?: DataThunderSlbQuicOperOper;
}
export interface DataThunderSlbQuicOperOperSessionListFwdActiveDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_active_dcid DataThunderSlbQuicOper#fwd_active_dcid}
  */
  readonly fwdActiveDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdActiveDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdActiveDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_active_dcid: cdktf.stringToTerraform(struct!.fwdActiveDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdActiveDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdActiveDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_active_dcid: {
      value: cdktf.stringToHclTerraform(struct!.fwdActiveDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdActiveDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdActiveDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdActiveDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdActiveDcid = this._fwdActiveDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdActiveDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdActiveDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdActiveDcid = value.fwdActiveDcid;
    }
  }

  // fwd_active_dcid - computed: false, optional: true, required: false
  private _fwdActiveDcid?: string; 
  public get fwdActiveDcid() {
    return this.getStringAttribute('fwd_active_dcid');
  }
  public set fwdActiveDcid(value: string) {
    this._fwdActiveDcid = value;
  }
  public resetFwdActiveDcid() {
    this._fwdActiveDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdActiveDcidInput() {
    return this._fwdActiveDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdActiveDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdActiveDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdActiveDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdActiveDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListFwdActiveScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_active_scid DataThunderSlbQuicOper#fwd_active_scid}
  */
  readonly fwdActiveScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdActiveScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdActiveScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_active_scid: cdktf.stringToTerraform(struct!.fwdActiveScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdActiveScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdActiveScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_active_scid: {
      value: cdktf.stringToHclTerraform(struct!.fwdActiveScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdActiveScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdActiveScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdActiveScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdActiveScid = this._fwdActiveScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdActiveScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdActiveScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdActiveScid = value.fwdActiveScid;
    }
  }

  // fwd_active_scid - computed: false, optional: true, required: false
  private _fwdActiveScid?: string; 
  public get fwdActiveScid() {
    return this.getStringAttribute('fwd_active_scid');
  }
  public set fwdActiveScid(value: string) {
    this._fwdActiveScid = value;
  }
  public resetFwdActiveScid() {
    this._fwdActiveScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdActiveScidInput() {
    return this._fwdActiveScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdActiveScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdActiveScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdActiveScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdActiveScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListFwdAvailableDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_available_dcid DataThunderSlbQuicOper#fwd_available_dcid}
  */
  readonly fwdAvailableDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdAvailableDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdAvailableDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_available_dcid: cdktf.stringToTerraform(struct!.fwdAvailableDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdAvailableDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdAvailableDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_available_dcid: {
      value: cdktf.stringToHclTerraform(struct!.fwdAvailableDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdAvailableDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdAvailableDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdAvailableDcid = this._fwdAvailableDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdAvailableDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdAvailableDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdAvailableDcid = value.fwdAvailableDcid;
    }
  }

  // fwd_available_dcid - computed: false, optional: true, required: false
  private _fwdAvailableDcid?: string; 
  public get fwdAvailableDcid() {
    return this.getStringAttribute('fwd_available_dcid');
  }
  public set fwdAvailableDcid(value: string) {
    this._fwdAvailableDcid = value;
  }
  public resetFwdAvailableDcid() {
    this._fwdAvailableDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdAvailableDcidInput() {
    return this._fwdAvailableDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdAvailableDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListFwdAvailableScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_available_scid DataThunderSlbQuicOper#fwd_available_scid}
  */
  readonly fwdAvailableScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdAvailableScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdAvailableScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_available_scid: cdktf.stringToTerraform(struct!.fwdAvailableScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdAvailableScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdAvailableScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_available_scid: {
      value: cdktf.stringToHclTerraform(struct!.fwdAvailableScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdAvailableScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdAvailableScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdAvailableScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdAvailableScid = this._fwdAvailableScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdAvailableScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdAvailableScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdAvailableScid = value.fwdAvailableScid;
    }
  }

  // fwd_available_scid - computed: false, optional: true, required: false
  private _fwdAvailableScid?: string; 
  public get fwdAvailableScid() {
    return this.getStringAttribute('fwd_available_scid');
  }
  public set fwdAvailableScid(value: string) {
    this._fwdAvailableScid = value;
  }
  public resetFwdAvailableScid() {
    this._fwdAvailableScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdAvailableScidInput() {
    return this._fwdAvailableScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdAvailableScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdAvailableScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdAvailableScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdAvailableScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListFwdRetiredDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_retired_dcid DataThunderSlbQuicOper#fwd_retired_dcid}
  */
  readonly fwdRetiredDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdRetiredDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdRetiredDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_retired_dcid: cdktf.stringToTerraform(struct!.fwdRetiredDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdRetiredDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdRetiredDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_retired_dcid: {
      value: cdktf.stringToHclTerraform(struct!.fwdRetiredDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdRetiredDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdRetiredDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRetiredDcid = this._fwdRetiredDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdRetiredDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdRetiredDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdRetiredDcid = value.fwdRetiredDcid;
    }
  }

  // fwd_retired_dcid - computed: false, optional: true, required: false
  private _fwdRetiredDcid?: string; 
  public get fwdRetiredDcid() {
    return this.getStringAttribute('fwd_retired_dcid');
  }
  public set fwdRetiredDcid(value: string) {
    this._fwdRetiredDcid = value;
  }
  public resetFwdRetiredDcid() {
    this._fwdRetiredDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRetiredDcidInput() {
    return this._fwdRetiredDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdRetiredDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListFwdRetiredScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_retired_scid DataThunderSlbQuicOper#fwd_retired_scid}
  */
  readonly fwdRetiredScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListFwdRetiredScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdRetiredScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_retired_scid: cdktf.stringToTerraform(struct!.fwdRetiredScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListFwdRetiredScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListFwdRetiredScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_retired_scid: {
      value: cdktf.stringToHclTerraform(struct!.fwdRetiredScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListFwdRetiredScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListFwdRetiredScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdRetiredScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRetiredScid = this._fwdRetiredScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListFwdRetiredScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdRetiredScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdRetiredScid = value.fwdRetiredScid;
    }
  }

  // fwd_retired_scid - computed: false, optional: true, required: false
  private _fwdRetiredScid?: string; 
  public get fwdRetiredScid() {
    return this.getStringAttribute('fwd_retired_scid');
  }
  public set fwdRetiredScid(value: string) {
    this._fwdRetiredScid = value;
  }
  public resetFwdRetiredScid() {
    this._fwdRetiredScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRetiredScidInput() {
    return this._fwdRetiredScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListFwdRetiredScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListFwdRetiredScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListFwdRetiredScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListFwdRetiredScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_active_dcid DataThunderSlbQuicOper#rev_active_dcid}
  */
  readonly revActiveDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_active_dcid: cdktf.stringToTerraform(struct!.revActiveDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_active_dcid: {
      value: cdktf.stringToHclTerraform(struct!.revActiveDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revActiveDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revActiveDcid = this._revActiveDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revActiveDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revActiveDcid = value.revActiveDcid;
    }
  }

  // rev_active_dcid - computed: false, optional: true, required: false
  private _revActiveDcid?: string; 
  public get revActiveDcid() {
    return this.getStringAttribute('rev_active_dcid');
  }
  public set revActiveDcid(value: string) {
    this._revActiveDcid = value;
  }
  public resetRevActiveDcid() {
    this._revActiveDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revActiveDcidInput() {
    return this._revActiveDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_active_scid DataThunderSlbQuicOper#rev_active_scid}
  */
  readonly revActiveScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_active_scid: cdktf.stringToTerraform(struct!.revActiveScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_active_scid: {
      value: cdktf.stringToHclTerraform(struct!.revActiveScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revActiveScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revActiveScid = this._revActiveScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revActiveScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revActiveScid = value.revActiveScid;
    }
  }

  // rev_active_scid - computed: false, optional: true, required: false
  private _revActiveScid?: string; 
  public get revActiveScid() {
    return this.getStringAttribute('rev_active_scid');
  }
  public set revActiveScid(value: string) {
    this._revActiveScid = value;
  }
  public resetRevActiveScid() {
    this._revActiveScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revActiveScidInput() {
    return this._revActiveScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_available_dcid DataThunderSlbQuicOper#rev_available_dcid}
  */
  readonly revAvailableDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_available_dcid: cdktf.stringToTerraform(struct!.revAvailableDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_available_dcid: {
      value: cdktf.stringToHclTerraform(struct!.revAvailableDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revAvailableDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revAvailableDcid = this._revAvailableDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revAvailableDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revAvailableDcid = value.revAvailableDcid;
    }
  }

  // rev_available_dcid - computed: false, optional: true, required: false
  private _revAvailableDcid?: string; 
  public get revAvailableDcid() {
    return this.getStringAttribute('rev_available_dcid');
  }
  public set revAvailableDcid(value: string) {
    this._revAvailableDcid = value;
  }
  public resetRevAvailableDcid() {
    this._revAvailableDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revAvailableDcidInput() {
    return this._revAvailableDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_available_scid DataThunderSlbQuicOper#rev_available_scid}
  */
  readonly revAvailableScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_available_scid: cdktf.stringToTerraform(struct!.revAvailableScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_available_scid: {
      value: cdktf.stringToHclTerraform(struct!.revAvailableScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revAvailableScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revAvailableScid = this._revAvailableScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revAvailableScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revAvailableScid = value.revAvailableScid;
    }
  }

  // rev_available_scid - computed: false, optional: true, required: false
  private _revAvailableScid?: string; 
  public get revAvailableScid() {
    return this.getStringAttribute('rev_available_scid');
  }
  public set revAvailableScid(value: string) {
    this._revAvailableScid = value;
  }
  public resetRevAvailableScid() {
    this._revAvailableScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revAvailableScidInput() {
    return this._revAvailableScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_retired_dcid DataThunderSlbQuicOper#rev_retired_dcid}
  */
  readonly revRetiredDcid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_retired_dcid: cdktf.stringToTerraform(struct!.revRetiredDcid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_retired_dcid: {
      value: cdktf.stringToHclTerraform(struct!.revRetiredDcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revRetiredDcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revRetiredDcid = this._revRetiredDcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revRetiredDcid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revRetiredDcid = value.revRetiredDcid;
    }
  }

  // rev_retired_dcid - computed: false, optional: true, required: false
  private _revRetiredDcid?: string; 
  public get revRetiredDcid() {
    return this.getStringAttribute('rev_retired_dcid');
  }
  public set revRetiredDcid(value: string) {
    this._revRetiredDcid = value;
  }
  public resetRevRetiredDcid() {
    this._revRetiredDcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revRetiredDcidInput() {
    return this._revRetiredDcid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_retired_scid DataThunderSlbQuicOper#rev_retired_scid}
  */
  readonly revRetiredScid?: string;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_retired_scid: cdktf.stringToTerraform(struct!.revRetiredScid),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_retired_scid: {
      value: cdktf.stringToHclTerraform(struct!.revRetiredScid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revRetiredScid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revRetiredScid = this._revRetiredScid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revRetiredScid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revRetiredScid = value.revRetiredScid;
    }
  }

  // rev_retired_scid - computed: false, optional: true, required: false
  private _revRetiredScid?: string; 
  public get revRetiredScid() {
    return this.getStringAttribute('rev_retired_scid');
  }
  public set revRetiredScid(value: string) {
    this._revRetiredScid = value;
  }
  public resetRevRetiredScid() {
    this._revRetiredScid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revRetiredScidInput() {
    return this._revRetiredScid;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListReverseTuples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_dest DataThunderSlbQuicOper#rev_dest}
  */
  readonly revDest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_dest_cid DataThunderSlbQuicOper#rev_dest_cid}
  */
  readonly revDestCid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_flags DataThunderSlbQuicOper#rev_flags}
  */
  readonly revFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_source DataThunderSlbQuicOper#rev_source}
  */
  readonly revSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_source_cid DataThunderSlbQuicOper#rev_source_cid}
  */
  readonly revSourceCid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_state DataThunderSlbQuicOper#rev_state}
  */
  readonly revState?: string;
  /**
  * rev_active_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_active_dcids DataThunderSlbQuicOper#rev_active_dcids}
  */
  readonly revActiveDcids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids[] | cdktf.IResolvable;
  /**
  * rev_active_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_active_scids DataThunderSlbQuicOper#rev_active_scids}
  */
  readonly revActiveScids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids[] | cdktf.IResolvable;
  /**
  * rev_available_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_available_dcids DataThunderSlbQuicOper#rev_available_dcids}
  */
  readonly revAvailableDcids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids[] | cdktf.IResolvable;
  /**
  * rev_available_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_available_scids DataThunderSlbQuicOper#rev_available_scids}
  */
  readonly revAvailableScids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids[] | cdktf.IResolvable;
  /**
  * rev_retired_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_retired_dcids DataThunderSlbQuicOper#rev_retired_dcids}
  */
  readonly revRetiredDcids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids[] | cdktf.IResolvable;
  /**
  * rev_retired_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#rev_retired_scids DataThunderSlbQuicOper#rev_retired_scids}
  */
  readonly revRetiredScids?: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids[] | cdktf.IResolvable;
}

export function dataThunderSlbQuicOperOperSessionListReverseTuplesToTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rev_dest: cdktf.stringToTerraform(struct!.revDest),
    rev_dest_cid: cdktf.stringToTerraform(struct!.revDestCid),
    rev_flags: cdktf.stringToTerraform(struct!.revFlags),
    rev_source: cdktf.stringToTerraform(struct!.revSource),
    rev_source_cid: cdktf.stringToTerraform(struct!.revSourceCid),
    rev_state: cdktf.stringToTerraform(struct!.revState),
    rev_active_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsToTerraform, true)(struct!.revActiveDcids),
    rev_active_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsToTerraform, true)(struct!.revActiveScids),
    rev_available_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsToTerraform, true)(struct!.revAvailableDcids),
    rev_available_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsToTerraform, true)(struct!.revAvailableScids),
    rev_retired_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsToTerraform, true)(struct!.revRetiredDcids),
    rev_retired_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsToTerraform, true)(struct!.revRetiredScids),
  }
}


export function dataThunderSlbQuicOperOperSessionListReverseTuplesToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListReverseTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rev_dest: {
      value: cdktf.stringToHclTerraform(struct!.revDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_dest_cid: {
      value: cdktf.stringToHclTerraform(struct!.revDestCid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_flags: {
      value: cdktf.stringToHclTerraform(struct!.revFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_source: {
      value: cdktf.stringToHclTerraform(struct!.revSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_source_cid: {
      value: cdktf.stringToHclTerraform(struct!.revSourceCid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_state: {
      value: cdktf.stringToHclTerraform(struct!.revState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rev_active_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsToHclTerraform, true)(struct!.revActiveDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsList",
    },
    rev_active_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsToHclTerraform, true)(struct!.revActiveScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsList",
    },
    rev_available_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsToHclTerraform, true)(struct!.revAvailableDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsList",
    },
    rev_available_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsToHclTerraform, true)(struct!.revAvailableScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsList",
    },
    rev_retired_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsToHclTerraform, true)(struct!.revRetiredDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsList",
    },
    rev_retired_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsToHclTerraform, true)(struct!.revRetiredScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListReverseTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDest = this._revDest;
    }
    if (this._revDestCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revDestCid = this._revDestCid;
    }
    if (this._revFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.revFlags = this._revFlags;
    }
    if (this._revSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSource = this._revSource;
    }
    if (this._revSourceCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.revSourceCid = this._revSourceCid;
    }
    if (this._revState !== undefined) {
      hasAnyValues = true;
      internalValueResult.revState = this._revState;
    }
    if (this._revActiveDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revActiveDcids = this._revActiveDcids?.internalValue;
    }
    if (this._revActiveScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revActiveScids = this._revActiveScids?.internalValue;
    }
    if (this._revAvailableDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revAvailableDcids = this._revAvailableDcids?.internalValue;
    }
    if (this._revAvailableScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revAvailableScids = this._revAvailableScids?.internalValue;
    }
    if (this._revRetiredDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revRetiredDcids = this._revRetiredDcids?.internalValue;
    }
    if (this._revRetiredScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revRetiredScids = this._revRetiredScids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListReverseTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revDest = undefined;
      this._revDestCid = undefined;
      this._revFlags = undefined;
      this._revSource = undefined;
      this._revSourceCid = undefined;
      this._revState = undefined;
      this._revActiveDcids.internalValue = undefined;
      this._revActiveScids.internalValue = undefined;
      this._revAvailableDcids.internalValue = undefined;
      this._revAvailableScids.internalValue = undefined;
      this._revRetiredDcids.internalValue = undefined;
      this._revRetiredScids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revDest = value.revDest;
      this._revDestCid = value.revDestCid;
      this._revFlags = value.revFlags;
      this._revSource = value.revSource;
      this._revSourceCid = value.revSourceCid;
      this._revState = value.revState;
      this._revActiveDcids.internalValue = value.revActiveDcids;
      this._revActiveScids.internalValue = value.revActiveScids;
      this._revAvailableDcids.internalValue = value.revAvailableDcids;
      this._revAvailableScids.internalValue = value.revAvailableScids;
      this._revRetiredDcids.internalValue = value.revRetiredDcids;
      this._revRetiredScids.internalValue = value.revRetiredScids;
    }
  }

  // rev_dest - computed: false, optional: true, required: false
  private _revDest?: string; 
  public get revDest() {
    return this.getStringAttribute('rev_dest');
  }
  public set revDest(value: string) {
    this._revDest = value;
  }
  public resetRevDest() {
    this._revDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDestInput() {
    return this._revDest;
  }

  // rev_dest_cid - computed: false, optional: true, required: false
  private _revDestCid?: string; 
  public get revDestCid() {
    return this.getStringAttribute('rev_dest_cid');
  }
  public set revDestCid(value: string) {
    this._revDestCid = value;
  }
  public resetRevDestCid() {
    this._revDestCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revDestCidInput() {
    return this._revDestCid;
  }

  // rev_flags - computed: false, optional: true, required: false
  private _revFlags?: string; 
  public get revFlags() {
    return this.getStringAttribute('rev_flags');
  }
  public set revFlags(value: string) {
    this._revFlags = value;
  }
  public resetRevFlags() {
    this._revFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revFlagsInput() {
    return this._revFlags;
  }

  // rev_source - computed: false, optional: true, required: false
  private _revSource?: string; 
  public get revSource() {
    return this.getStringAttribute('rev_source');
  }
  public set revSource(value: string) {
    this._revSource = value;
  }
  public resetRevSource() {
    this._revSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSourceInput() {
    return this._revSource;
  }

  // rev_source_cid - computed: false, optional: true, required: false
  private _revSourceCid?: string; 
  public get revSourceCid() {
    return this.getStringAttribute('rev_source_cid');
  }
  public set revSourceCid(value: string) {
    this._revSourceCid = value;
  }
  public resetRevSourceCid() {
    this._revSourceCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revSourceCidInput() {
    return this._revSourceCid;
  }

  // rev_state - computed: false, optional: true, required: false
  private _revState?: string; 
  public get revState() {
    return this.getStringAttribute('rev_state');
  }
  public set revState(value: string) {
    this._revState = value;
  }
  public resetRevState() {
    this._revState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revStateInput() {
    return this._revState;
  }

  // rev_active_dcids - computed: false, optional: true, required: false
  private _revActiveDcids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcidsList(this, "rev_active_dcids", false);
  public get revActiveDcids() {
    return this._revActiveDcids;
  }
  public putRevActiveDcids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveDcids[] | cdktf.IResolvable) {
    this._revActiveDcids.internalValue = value;
  }
  public resetRevActiveDcids() {
    this._revActiveDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revActiveDcidsInput() {
    return this._revActiveDcids.internalValue;
  }

  // rev_active_scids - computed: false, optional: true, required: false
  private _revActiveScids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScidsList(this, "rev_active_scids", false);
  public get revActiveScids() {
    return this._revActiveScids;
  }
  public putRevActiveScids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevActiveScids[] | cdktf.IResolvable) {
    this._revActiveScids.internalValue = value;
  }
  public resetRevActiveScids() {
    this._revActiveScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revActiveScidsInput() {
    return this._revActiveScids.internalValue;
  }

  // rev_available_dcids - computed: false, optional: true, required: false
  private _revAvailableDcids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcidsList(this, "rev_available_dcids", false);
  public get revAvailableDcids() {
    return this._revAvailableDcids;
  }
  public putRevAvailableDcids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableDcids[] | cdktf.IResolvable) {
    this._revAvailableDcids.internalValue = value;
  }
  public resetRevAvailableDcids() {
    this._revAvailableDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revAvailableDcidsInput() {
    return this._revAvailableDcids.internalValue;
  }

  // rev_available_scids - computed: false, optional: true, required: false
  private _revAvailableScids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScidsList(this, "rev_available_scids", false);
  public get revAvailableScids() {
    return this._revAvailableScids;
  }
  public putRevAvailableScids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevAvailableScids[] | cdktf.IResolvable) {
    this._revAvailableScids.internalValue = value;
  }
  public resetRevAvailableScids() {
    this._revAvailableScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revAvailableScidsInput() {
    return this._revAvailableScids.internalValue;
  }

  // rev_retired_dcids - computed: false, optional: true, required: false
  private _revRetiredDcids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcidsList(this, "rev_retired_dcids", false);
  public get revRetiredDcids() {
    return this._revRetiredDcids;
  }
  public putRevRetiredDcids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredDcids[] | cdktf.IResolvable) {
    this._revRetiredDcids.internalValue = value;
  }
  public resetRevRetiredDcids() {
    this._revRetiredDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revRetiredDcidsInput() {
    return this._revRetiredDcids.internalValue;
  }

  // rev_retired_scids - computed: false, optional: true, required: false
  private _revRetiredScids = new DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScidsList(this, "rev_retired_scids", false);
  public get revRetiredScids() {
    return this._revRetiredScids;
  }
  public putRevRetiredScids(value: DataThunderSlbQuicOperOperSessionListReverseTuplesRevRetiredScids[] | cdktf.IResolvable) {
    this._revRetiredScids.internalValue = value;
  }
  public resetRevRetiredScids() {
    this._revRetiredScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revRetiredScidsInput() {
    return this._revRetiredScids.internalValue;
  }
}

export class DataThunderSlbQuicOperOperSessionListReverseTuplesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListReverseTuples[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListReverseTuplesOutputReference {
    return new DataThunderSlbQuicOperOperSessionListReverseTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_dest DataThunderSlbQuicOper#fwd_dest}
  */
  readonly fwdDest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_dest_cid DataThunderSlbQuicOper#fwd_dest_cid}
  */
  readonly fwdDestCid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_flags DataThunderSlbQuicOper#fwd_flags}
  */
  readonly fwdFlags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_source DataThunderSlbQuicOper#fwd_source}
  */
  readonly fwdSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_source_cid DataThunderSlbQuicOper#fwd_source_cid}
  */
  readonly fwdSourceCid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_state DataThunderSlbQuicOper#fwd_state}
  */
  readonly fwdState?: string;
  /**
  * fwd_active_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_active_dcids DataThunderSlbQuicOper#fwd_active_dcids}
  */
  readonly fwdActiveDcids?: DataThunderSlbQuicOperOperSessionListFwdActiveDcids[] | cdktf.IResolvable;
  /**
  * fwd_active_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_active_scids DataThunderSlbQuicOper#fwd_active_scids}
  */
  readonly fwdActiveScids?: DataThunderSlbQuicOperOperSessionListFwdActiveScids[] | cdktf.IResolvable;
  /**
  * fwd_available_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_available_dcids DataThunderSlbQuicOper#fwd_available_dcids}
  */
  readonly fwdAvailableDcids?: DataThunderSlbQuicOperOperSessionListFwdAvailableDcids[] | cdktf.IResolvable;
  /**
  * fwd_available_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_available_scids DataThunderSlbQuicOper#fwd_available_scids}
  */
  readonly fwdAvailableScids?: DataThunderSlbQuicOperOperSessionListFwdAvailableScids[] | cdktf.IResolvable;
  /**
  * fwd_retired_dcids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_retired_dcids DataThunderSlbQuicOper#fwd_retired_dcids}
  */
  readonly fwdRetiredDcids?: DataThunderSlbQuicOperOperSessionListFwdRetiredDcids[] | cdktf.IResolvable;
  /**
  * fwd_retired_scids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#fwd_retired_scids DataThunderSlbQuicOper#fwd_retired_scids}
  */
  readonly fwdRetiredScids?: DataThunderSlbQuicOperOperSessionListFwdRetiredScids[] | cdktf.IResolvable;
  /**
  * reverse_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#reverse_tuples DataThunderSlbQuicOper#reverse_tuples}
  */
  readonly reverseTuples?: DataThunderSlbQuicOperOperSessionListReverseTuples[] | cdktf.IResolvable;
}

export function dataThunderSlbQuicOperOperSessionListStructToTerraform(struct?: DataThunderSlbQuicOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwd_dest: cdktf.stringToTerraform(struct!.fwdDest),
    fwd_dest_cid: cdktf.stringToTerraform(struct!.fwdDestCid),
    fwd_flags: cdktf.stringToTerraform(struct!.fwdFlags),
    fwd_source: cdktf.stringToTerraform(struct!.fwdSource),
    fwd_source_cid: cdktf.stringToTerraform(struct!.fwdSourceCid),
    fwd_state: cdktf.stringToTerraform(struct!.fwdState),
    fwd_active_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdActiveDcidsToTerraform, true)(struct!.fwdActiveDcids),
    fwd_active_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdActiveScidsToTerraform, true)(struct!.fwdActiveScids),
    fwd_available_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdAvailableDcidsToTerraform, true)(struct!.fwdAvailableDcids),
    fwd_available_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdAvailableScidsToTerraform, true)(struct!.fwdAvailableScids),
    fwd_retired_dcids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdRetiredDcidsToTerraform, true)(struct!.fwdRetiredDcids),
    fwd_retired_scids: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListFwdRetiredScidsToTerraform, true)(struct!.fwdRetiredScids),
    reverse_tuples: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListReverseTuplesToTerraform, true)(struct!.reverseTuples),
  }
}


export function dataThunderSlbQuicOperOperSessionListStructToHclTerraform(struct?: DataThunderSlbQuicOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwd_dest: {
      value: cdktf.stringToHclTerraform(struct!.fwdDest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_dest_cid: {
      value: cdktf.stringToHclTerraform(struct!.fwdDestCid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_flags: {
      value: cdktf.stringToHclTerraform(struct!.fwdFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_source: {
      value: cdktf.stringToHclTerraform(struct!.fwdSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_source_cid: {
      value: cdktf.stringToHclTerraform(struct!.fwdSourceCid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_state: {
      value: cdktf.stringToHclTerraform(struct!.fwdState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_active_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdActiveDcidsToHclTerraform, true)(struct!.fwdActiveDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdActiveDcidsList",
    },
    fwd_active_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdActiveScidsToHclTerraform, true)(struct!.fwdActiveScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdActiveScidsList",
    },
    fwd_available_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdAvailableDcidsToHclTerraform, true)(struct!.fwdAvailableDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsList",
    },
    fwd_available_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdAvailableScidsToHclTerraform, true)(struct!.fwdAvailableScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdAvailableScidsList",
    },
    fwd_retired_dcids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdRetiredDcidsToHclTerraform, true)(struct!.fwdRetiredDcids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsList",
    },
    fwd_retired_scids: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListFwdRetiredScidsToHclTerraform, true)(struct!.fwdRetiredScids),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListFwdRetiredScidsList",
    },
    reverse_tuples: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListReverseTuplesToHclTerraform, true)(struct!.reverseTuples),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListReverseTuplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbQuicOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwdDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDest = this._fwdDest;
    }
    if (this._fwdDestCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdDestCid = this._fwdDestCid;
    }
    if (this._fwdFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdFlags = this._fwdFlags;
    }
    if (this._fwdSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSource = this._fwdSource;
    }
    if (this._fwdSourceCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSourceCid = this._fwdSourceCid;
    }
    if (this._fwdState !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdState = this._fwdState;
    }
    if (this._fwdActiveDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdActiveDcids = this._fwdActiveDcids?.internalValue;
    }
    if (this._fwdActiveScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdActiveScids = this._fwdActiveScids?.internalValue;
    }
    if (this._fwdAvailableDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdAvailableDcids = this._fwdAvailableDcids?.internalValue;
    }
    if (this._fwdAvailableScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdAvailableScids = this._fwdAvailableScids?.internalValue;
    }
    if (this._fwdRetiredDcids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRetiredDcids = this._fwdRetiredDcids?.internalValue;
    }
    if (this._fwdRetiredScids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRetiredScids = this._fwdRetiredScids?.internalValue;
    }
    if (this._reverseTuples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseTuples = this._reverseTuples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwdDest = undefined;
      this._fwdDestCid = undefined;
      this._fwdFlags = undefined;
      this._fwdSource = undefined;
      this._fwdSourceCid = undefined;
      this._fwdState = undefined;
      this._fwdActiveDcids.internalValue = undefined;
      this._fwdActiveScids.internalValue = undefined;
      this._fwdAvailableDcids.internalValue = undefined;
      this._fwdAvailableScids.internalValue = undefined;
      this._fwdRetiredDcids.internalValue = undefined;
      this._fwdRetiredScids.internalValue = undefined;
      this._reverseTuples.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwdDest = value.fwdDest;
      this._fwdDestCid = value.fwdDestCid;
      this._fwdFlags = value.fwdFlags;
      this._fwdSource = value.fwdSource;
      this._fwdSourceCid = value.fwdSourceCid;
      this._fwdState = value.fwdState;
      this._fwdActiveDcids.internalValue = value.fwdActiveDcids;
      this._fwdActiveScids.internalValue = value.fwdActiveScids;
      this._fwdAvailableDcids.internalValue = value.fwdAvailableDcids;
      this._fwdAvailableScids.internalValue = value.fwdAvailableScids;
      this._fwdRetiredDcids.internalValue = value.fwdRetiredDcids;
      this._fwdRetiredScids.internalValue = value.fwdRetiredScids;
      this._reverseTuples.internalValue = value.reverseTuples;
    }
  }

  // fwd_dest - computed: false, optional: true, required: false
  private _fwdDest?: string; 
  public get fwdDest() {
    return this.getStringAttribute('fwd_dest');
  }
  public set fwdDest(value: string) {
    this._fwdDest = value;
  }
  public resetFwdDest() {
    this._fwdDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDestInput() {
    return this._fwdDest;
  }

  // fwd_dest_cid - computed: false, optional: true, required: false
  private _fwdDestCid?: string; 
  public get fwdDestCid() {
    return this.getStringAttribute('fwd_dest_cid');
  }
  public set fwdDestCid(value: string) {
    this._fwdDestCid = value;
  }
  public resetFwdDestCid() {
    this._fwdDestCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDestCidInput() {
    return this._fwdDestCid;
  }

  // fwd_flags - computed: false, optional: true, required: false
  private _fwdFlags?: string; 
  public get fwdFlags() {
    return this.getStringAttribute('fwd_flags');
  }
  public set fwdFlags(value: string) {
    this._fwdFlags = value;
  }
  public resetFwdFlags() {
    this._fwdFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdFlagsInput() {
    return this._fwdFlags;
  }

  // fwd_source - computed: false, optional: true, required: false
  private _fwdSource?: string; 
  public get fwdSource() {
    return this.getStringAttribute('fwd_source');
  }
  public set fwdSource(value: string) {
    this._fwdSource = value;
  }
  public resetFwdSource() {
    this._fwdSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSourceInput() {
    return this._fwdSource;
  }

  // fwd_source_cid - computed: false, optional: true, required: false
  private _fwdSourceCid?: string; 
  public get fwdSourceCid() {
    return this.getStringAttribute('fwd_source_cid');
  }
  public set fwdSourceCid(value: string) {
    this._fwdSourceCid = value;
  }
  public resetFwdSourceCid() {
    this._fwdSourceCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSourceCidInput() {
    return this._fwdSourceCid;
  }

  // fwd_state - computed: false, optional: true, required: false
  private _fwdState?: string; 
  public get fwdState() {
    return this.getStringAttribute('fwd_state');
  }
  public set fwdState(value: string) {
    this._fwdState = value;
  }
  public resetFwdState() {
    this._fwdState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdStateInput() {
    return this._fwdState;
  }

  // fwd_active_dcids - computed: false, optional: true, required: false
  private _fwdActiveDcids = new DataThunderSlbQuicOperOperSessionListFwdActiveDcidsList(this, "fwd_active_dcids", false);
  public get fwdActiveDcids() {
    return this._fwdActiveDcids;
  }
  public putFwdActiveDcids(value: DataThunderSlbQuicOperOperSessionListFwdActiveDcids[] | cdktf.IResolvable) {
    this._fwdActiveDcids.internalValue = value;
  }
  public resetFwdActiveDcids() {
    this._fwdActiveDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdActiveDcidsInput() {
    return this._fwdActiveDcids.internalValue;
  }

  // fwd_active_scids - computed: false, optional: true, required: false
  private _fwdActiveScids = new DataThunderSlbQuicOperOperSessionListFwdActiveScidsList(this, "fwd_active_scids", false);
  public get fwdActiveScids() {
    return this._fwdActiveScids;
  }
  public putFwdActiveScids(value: DataThunderSlbQuicOperOperSessionListFwdActiveScids[] | cdktf.IResolvable) {
    this._fwdActiveScids.internalValue = value;
  }
  public resetFwdActiveScids() {
    this._fwdActiveScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdActiveScidsInput() {
    return this._fwdActiveScids.internalValue;
  }

  // fwd_available_dcids - computed: false, optional: true, required: false
  private _fwdAvailableDcids = new DataThunderSlbQuicOperOperSessionListFwdAvailableDcidsList(this, "fwd_available_dcids", false);
  public get fwdAvailableDcids() {
    return this._fwdAvailableDcids;
  }
  public putFwdAvailableDcids(value: DataThunderSlbQuicOperOperSessionListFwdAvailableDcids[] | cdktf.IResolvable) {
    this._fwdAvailableDcids.internalValue = value;
  }
  public resetFwdAvailableDcids() {
    this._fwdAvailableDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdAvailableDcidsInput() {
    return this._fwdAvailableDcids.internalValue;
  }

  // fwd_available_scids - computed: false, optional: true, required: false
  private _fwdAvailableScids = new DataThunderSlbQuicOperOperSessionListFwdAvailableScidsList(this, "fwd_available_scids", false);
  public get fwdAvailableScids() {
    return this._fwdAvailableScids;
  }
  public putFwdAvailableScids(value: DataThunderSlbQuicOperOperSessionListFwdAvailableScids[] | cdktf.IResolvable) {
    this._fwdAvailableScids.internalValue = value;
  }
  public resetFwdAvailableScids() {
    this._fwdAvailableScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdAvailableScidsInput() {
    return this._fwdAvailableScids.internalValue;
  }

  // fwd_retired_dcids - computed: false, optional: true, required: false
  private _fwdRetiredDcids = new DataThunderSlbQuicOperOperSessionListFwdRetiredDcidsList(this, "fwd_retired_dcids", false);
  public get fwdRetiredDcids() {
    return this._fwdRetiredDcids;
  }
  public putFwdRetiredDcids(value: DataThunderSlbQuicOperOperSessionListFwdRetiredDcids[] | cdktf.IResolvable) {
    this._fwdRetiredDcids.internalValue = value;
  }
  public resetFwdRetiredDcids() {
    this._fwdRetiredDcids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRetiredDcidsInput() {
    return this._fwdRetiredDcids.internalValue;
  }

  // fwd_retired_scids - computed: false, optional: true, required: false
  private _fwdRetiredScids = new DataThunderSlbQuicOperOperSessionListFwdRetiredScidsList(this, "fwd_retired_scids", false);
  public get fwdRetiredScids() {
    return this._fwdRetiredScids;
  }
  public putFwdRetiredScids(value: DataThunderSlbQuicOperOperSessionListFwdRetiredScids[] | cdktf.IResolvable) {
    this._fwdRetiredScids.internalValue = value;
  }
  public resetFwdRetiredScids() {
    this._fwdRetiredScids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRetiredScidsInput() {
    return this._fwdRetiredScids.internalValue;
  }

  // reverse_tuples - computed: false, optional: true, required: false
  private _reverseTuples = new DataThunderSlbQuicOperOperSessionListReverseTuplesList(this, "reverse_tuples", false);
  public get reverseTuples() {
    return this._reverseTuples;
  }
  public putReverseTuples(value: DataThunderSlbQuicOperOperSessionListReverseTuples[] | cdktf.IResolvable) {
    this._reverseTuples.internalValue = value;
  }
  public resetReverseTuples() {
    this._reverseTuples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseTuplesInput() {
    return this._reverseTuples.internalValue;
  }
}

export class DataThunderSlbQuicOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbQuicOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbQuicOperOperSessionListStructOutputReference {
    return new DataThunderSlbQuicOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbQuicOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#total_sessions DataThunderSlbQuicOper#total_sessions}
  */
  readonly totalSessions?: number;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#session_list DataThunderSlbQuicOper#session_list}
  */
  readonly sessionList?: DataThunderSlbQuicOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbQuicOperOperToTerraform(struct?: DataThunderSlbQuicOperOperOutputReference | DataThunderSlbQuicOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_sessions: cdktf.numberToTerraform(struct!.totalSessions),
    session_list: cdktf.listMapper(dataThunderSlbQuicOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderSlbQuicOperOperToHclTerraform(struct?: DataThunderSlbQuicOperOperOutputReference | DataThunderSlbQuicOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_sessions: {
      value: cdktf.numberToHclTerraform(struct!.totalSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderSlbQuicOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbQuicOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbQuicOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbQuicOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessions = this._totalSessions;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbQuicOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalSessions = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalSessions = value.totalSessions;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // total_sessions - computed: false, optional: true, required: false
  private _totalSessions?: number; 
  public get totalSessions() {
    return this.getNumberAttribute('total_sessions');
  }
  public set totalSessions(value: number) {
    this._totalSessions = value;
  }
  public resetTotalSessions() {
    this._totalSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionsInput() {
    return this._totalSessions;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderSlbQuicOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderSlbQuicOperOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper thunder_slb_quic_oper}
*/
export class DataThunderSlbQuicOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_quic_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbQuicOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbQuicOper to import
  * @param importFromId The id of the existing DataThunderSlbQuicOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbQuicOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_quic_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_quic_oper thunder_slb_quic_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbQuicOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbQuicOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_quic_oper',
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
  private _oper = new DataThunderSlbQuicOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbQuicOperOper) {
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
      oper: dataThunderSlbQuicOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbQuicOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbQuicOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
