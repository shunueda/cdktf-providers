// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScmLicenseSrcInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#id DataThunderScmLicenseSrcInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#oper DataThunderScmLicenseSrcInfoOper#oper}
  */
  readonly oper?: DataThunderScmLicenseSrcInfoOperOper;
}
export interface DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source1_expiry DataThunderScmLicenseSrcInfoOper#source1_expiry}
  */
  readonly source1Expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source1_module DataThunderScmLicenseSrcInfoOper#source1_module}
  */
  readonly source1Module?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source1_notes DataThunderScmLicenseSrcInfoOper#source1_notes}
  */
  readonly source1Notes?: string;
}

export function dataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructToTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source1_expiry: cdktf.stringToTerraform(struct!.source1Expiry),
    source1_module: cdktf.stringToTerraform(struct!.source1Module),
    source1_notes: cdktf.stringToTerraform(struct!.source1Notes),
  }
}


export function dataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructToHclTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source1_expiry: {
      value: cdktf.stringToHclTerraform(struct!.source1Expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source1_module: {
      value: cdktf.stringToHclTerraform(struct!.source1Module),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source1_notes: {
      value: cdktf.stringToHclTerraform(struct!.source1Notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source1Expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.source1Expiry = this._source1Expiry;
    }
    if (this._source1Module !== undefined) {
      hasAnyValues = true;
      internalValueResult.source1Module = this._source1Module;
    }
    if (this._source1Notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.source1Notes = this._source1Notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source1Expiry = undefined;
      this._source1Module = undefined;
      this._source1Notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source1Expiry = value.source1Expiry;
      this._source1Module = value.source1Module;
      this._source1Notes = value.source1Notes;
    }
  }

  // source1_expiry - computed: false, optional: true, required: false
  private _source1Expiry?: string; 
  public get source1Expiry() {
    return this.getStringAttribute('source1_expiry');
  }
  public set source1Expiry(value: string) {
    this._source1Expiry = value;
  }
  public resetSource1Expiry() {
    this._source1Expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source1ExpiryInput() {
    return this._source1Expiry;
  }

  // source1_module - computed: false, optional: true, required: false
  private _source1Module?: string; 
  public get source1Module() {
    return this.getStringAttribute('source1_module');
  }
  public set source1Module(value: string) {
    this._source1Module = value;
  }
  public resetSource1Module() {
    this._source1Module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source1ModuleInput() {
    return this._source1Module;
  }

  // source1_notes - computed: false, optional: true, required: false
  private _source1Notes?: string; 
  public get source1Notes() {
    return this.getStringAttribute('source1_notes');
  }
  public set source1Notes(value: string) {
    this._source1Notes = value;
  }
  public resetSource1Notes() {
    this._source1Notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source1NotesInput() {
    return this._source1Notes;
  }
}

export class DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructOutputReference {
    return new DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source2_expiry DataThunderScmLicenseSrcInfoOper#source2_expiry}
  */
  readonly source2Expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source2_module DataThunderScmLicenseSrcInfoOper#source2_module}
  */
  readonly source2Module?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source2_notes DataThunderScmLicenseSrcInfoOper#source2_notes}
  */
  readonly source2Notes?: string;
}

export function dataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructToTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source2_expiry: cdktf.stringToTerraform(struct!.source2Expiry),
    source2_module: cdktf.stringToTerraform(struct!.source2Module),
    source2_notes: cdktf.stringToTerraform(struct!.source2Notes),
  }
}


export function dataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructToHclTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source2_expiry: {
      value: cdktf.stringToHclTerraform(struct!.source2Expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source2_module: {
      value: cdktf.stringToHclTerraform(struct!.source2Module),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source2_notes: {
      value: cdktf.stringToHclTerraform(struct!.source2Notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source2Expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.source2Expiry = this._source2Expiry;
    }
    if (this._source2Module !== undefined) {
      hasAnyValues = true;
      internalValueResult.source2Module = this._source2Module;
    }
    if (this._source2Notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.source2Notes = this._source2Notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source2Expiry = undefined;
      this._source2Module = undefined;
      this._source2Notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source2Expiry = value.source2Expiry;
      this._source2Module = value.source2Module;
      this._source2Notes = value.source2Notes;
    }
  }

  // source2_expiry - computed: false, optional: true, required: false
  private _source2Expiry?: string; 
  public get source2Expiry() {
    return this.getStringAttribute('source2_expiry');
  }
  public set source2Expiry(value: string) {
    this._source2Expiry = value;
  }
  public resetSource2Expiry() {
    this._source2Expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source2ExpiryInput() {
    return this._source2Expiry;
  }

  // source2_module - computed: false, optional: true, required: false
  private _source2Module?: string; 
  public get source2Module() {
    return this.getStringAttribute('source2_module');
  }
  public set source2Module(value: string) {
    this._source2Module = value;
  }
  public resetSource2Module() {
    this._source2Module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source2ModuleInput() {
    return this._source2Module;
  }

  // source2_notes - computed: false, optional: true, required: false
  private _source2Notes?: string; 
  public get source2Notes() {
    return this.getStringAttribute('source2_notes');
  }
  public set source2Notes(value: string) {
    this._source2Notes = value;
  }
  public resetSource2Notes() {
    this._source2Notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source2NotesInput() {
    return this._source2Notes;
  }
}

export class DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructOutputReference {
    return new DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source3_expiry DataThunderScmLicenseSrcInfoOper#source3_expiry}
  */
  readonly source3Expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source3_module DataThunderScmLicenseSrcInfoOper#source3_module}
  */
  readonly source3Module?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source3_notes DataThunderScmLicenseSrcInfoOper#source3_notes}
  */
  readonly source3Notes?: string;
}

export function dataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructToTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source3_expiry: cdktf.stringToTerraform(struct!.source3Expiry),
    source3_module: cdktf.stringToTerraform(struct!.source3Module),
    source3_notes: cdktf.stringToTerraform(struct!.source3Notes),
  }
}


export function dataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructToHclTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source3_expiry: {
      value: cdktf.stringToHclTerraform(struct!.source3Expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source3_module: {
      value: cdktf.stringToHclTerraform(struct!.source3Module),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source3_notes: {
      value: cdktf.stringToHclTerraform(struct!.source3Notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source3Expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.source3Expiry = this._source3Expiry;
    }
    if (this._source3Module !== undefined) {
      hasAnyValues = true;
      internalValueResult.source3Module = this._source3Module;
    }
    if (this._source3Notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.source3Notes = this._source3Notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source3Expiry = undefined;
      this._source3Module = undefined;
      this._source3Notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source3Expiry = value.source3Expiry;
      this._source3Module = value.source3Module;
      this._source3Notes = value.source3Notes;
    }
  }

  // source3_expiry - computed: false, optional: true, required: false
  private _source3Expiry?: string; 
  public get source3Expiry() {
    return this.getStringAttribute('source3_expiry');
  }
  public set source3Expiry(value: string) {
    this._source3Expiry = value;
  }
  public resetSource3Expiry() {
    this._source3Expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source3ExpiryInput() {
    return this._source3Expiry;
  }

  // source3_module - computed: false, optional: true, required: false
  private _source3Module?: string; 
  public get source3Module() {
    return this.getStringAttribute('source3_module');
  }
  public set source3Module(value: string) {
    this._source3Module = value;
  }
  public resetSource3Module() {
    this._source3Module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source3ModuleInput() {
    return this._source3Module;
  }

  // source3_notes - computed: false, optional: true, required: false
  private _source3Notes?: string; 
  public get source3Notes() {
    return this.getStringAttribute('source3_notes');
  }
  public set source3Notes(value: string) {
    this._source3Notes = value;
  }
  public resetSource3Notes() {
    this._source3Notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source3NotesInput() {
    return this._source3Notes;
  }
}

export class DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructOutputReference {
    return new DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScmLicenseSrcInfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#billing_serial DataThunderScmLicenseSrcInfoOper#billing_serial}
  */
  readonly billingSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#burst DataThunderScmLicenseSrcInfoOper#burst}
  */
  readonly burst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#glm_ping_interval DataThunderScmLicenseSrcInfoOper#glm_ping_interval}
  */
  readonly glmPingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#hw_serialno DataThunderScmLicenseSrcInfoOper#hw_serialno}
  */
  readonly hwSerialno?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#platform DataThunderScmLicenseSrcInfoOper#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#product DataThunderScmLicenseSrcInfoOper#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#product_desc DataThunderScmLicenseSrcInfoOper#product_desc}
  */
  readonly productDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source1 DataThunderScmLicenseSrcInfoOper#source1}
  */
  readonly source1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source2 DataThunderScmLicenseSrcInfoOper#source2}
  */
  readonly source2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source3 DataThunderScmLicenseSrcInfoOper#source3}
  */
  readonly source3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#token DataThunderScmLicenseSrcInfoOper#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#usb_uuid DataThunderScmLicenseSrcInfoOper#usb_uuid}
  */
  readonly usbUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#uuid DataThunderScmLicenseSrcInfoOper#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#version DataThunderScmLicenseSrcInfoOper#version}
  */
  readonly version?: string;
  /**
  * source1_module_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source1_module_list DataThunderScmLicenseSrcInfoOper#source1_module_list}
  */
  readonly source1ModuleList?: DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct[] | cdktf.IResolvable;
  /**
  * source2_module_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source2_module_list DataThunderScmLicenseSrcInfoOper#source2_module_list}
  */
  readonly source2ModuleList?: DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct[] | cdktf.IResolvable;
  /**
  * source3_module_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#source3_module_list DataThunderScmLicenseSrcInfoOper#source3_module_list}
  */
  readonly source3ModuleList?: DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderScmLicenseSrcInfoOperOperToTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperOutputReference | DataThunderScmLicenseSrcInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_serial: cdktf.stringToTerraform(struct!.billingSerial),
    burst: cdktf.stringToTerraform(struct!.burst),
    glm_ping_interval: cdktf.numberToTerraform(struct!.glmPingInterval),
    hw_serialno: cdktf.stringToTerraform(struct!.hwSerialno),
    platform: cdktf.stringToTerraform(struct!.platform),
    product: cdktf.stringToTerraform(struct!.product),
    product_desc: cdktf.stringToTerraform(struct!.productDesc),
    source1: cdktf.stringToTerraform(struct!.source1),
    source2: cdktf.stringToTerraform(struct!.source2),
    source3: cdktf.stringToTerraform(struct!.source3),
    token: cdktf.stringToTerraform(struct!.token),
    usb_uuid: cdktf.stringToTerraform(struct!.usbUuid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version: cdktf.stringToTerraform(struct!.version),
    source1_module_list: cdktf.listMapper(dataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructToTerraform, true)(struct!.source1ModuleList),
    source2_module_list: cdktf.listMapper(dataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructToTerraform, true)(struct!.source2ModuleList),
    source3_module_list: cdktf.listMapper(dataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructToTerraform, true)(struct!.source3ModuleList),
  }
}


export function dataThunderScmLicenseSrcInfoOperOperToHclTerraform(struct?: DataThunderScmLicenseSrcInfoOperOperOutputReference | DataThunderScmLicenseSrcInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_serial: {
      value: cdktf.stringToHclTerraform(struct!.billingSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burst: {
      value: cdktf.stringToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glm_ping_interval: {
      value: cdktf.numberToHclTerraform(struct!.glmPingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_serialno: {
      value: cdktf.stringToHclTerraform(struct!.hwSerialno),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_desc: {
      value: cdktf.stringToHclTerraform(struct!.productDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source1: {
      value: cdktf.stringToHclTerraform(struct!.source1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source2: {
      value: cdktf.stringToHclTerraform(struct!.source2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source3: {
      value: cdktf.stringToHclTerraform(struct!.source3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usb_uuid: {
      value: cdktf.stringToHclTerraform(struct!.usbUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
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
    source1_module_list: {
      value: cdktf.listMapperHcl(dataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructToHclTerraform, true)(struct!.source1ModuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructList",
    },
    source2_module_list: {
      value: cdktf.listMapperHcl(dataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructToHclTerraform, true)(struct!.source2ModuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructList",
    },
    source3_module_list: {
      value: cdktf.listMapperHcl(dataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructToHclTerraform, true)(struct!.source3ModuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseSrcInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScmLicenseSrcInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingSerial = this._billingSerial;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._glmPingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmPingInterval = this._glmPingInterval;
    }
    if (this._hwSerialno !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwSerialno = this._hwSerialno;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._productDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.productDesc = this._productDesc;
    }
    if (this._source1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source1 = this._source1;
    }
    if (this._source2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source2 = this._source2;
    }
    if (this._source3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source3 = this._source3;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._usbUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.usbUuid = this._usbUuid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._source1ModuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source1ModuleList = this._source1ModuleList?.internalValue;
    }
    if (this._source2ModuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source2ModuleList = this._source2ModuleList?.internalValue;
    }
    if (this._source3ModuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source3ModuleList = this._source3ModuleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseSrcInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingSerial = undefined;
      this._burst = undefined;
      this._glmPingInterval = undefined;
      this._hwSerialno = undefined;
      this._platform = undefined;
      this._product = undefined;
      this._productDesc = undefined;
      this._source1 = undefined;
      this._source2 = undefined;
      this._source3 = undefined;
      this._token = undefined;
      this._usbUuid = undefined;
      this._uuid = undefined;
      this._version = undefined;
      this._source1ModuleList.internalValue = undefined;
      this._source2ModuleList.internalValue = undefined;
      this._source3ModuleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingSerial = value.billingSerial;
      this._burst = value.burst;
      this._glmPingInterval = value.glmPingInterval;
      this._hwSerialno = value.hwSerialno;
      this._platform = value.platform;
      this._product = value.product;
      this._productDesc = value.productDesc;
      this._source1 = value.source1;
      this._source2 = value.source2;
      this._source3 = value.source3;
      this._token = value.token;
      this._usbUuid = value.usbUuid;
      this._uuid = value.uuid;
      this._version = value.version;
      this._source1ModuleList.internalValue = value.source1ModuleList;
      this._source2ModuleList.internalValue = value.source2ModuleList;
      this._source3ModuleList.internalValue = value.source3ModuleList;
    }
  }

  // billing_serial - computed: false, optional: true, required: false
  private _billingSerial?: string; 
  public get billingSerial() {
    return this.getStringAttribute('billing_serial');
  }
  public set billingSerial(value: string) {
    this._billingSerial = value;
  }
  public resetBillingSerial() {
    this._billingSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingSerialInput() {
    return this._billingSerial;
  }

  // burst - computed: false, optional: true, required: false
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

  // glm_ping_interval - computed: false, optional: true, required: false
  private _glmPingInterval?: number; 
  public get glmPingInterval() {
    return this.getNumberAttribute('glm_ping_interval');
  }
  public set glmPingInterval(value: number) {
    this._glmPingInterval = value;
  }
  public resetGlmPingInterval() {
    this._glmPingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmPingIntervalInput() {
    return this._glmPingInterval;
  }

  // hw_serialno - computed: false, optional: true, required: false
  private _hwSerialno?: string; 
  public get hwSerialno() {
    return this.getStringAttribute('hw_serialno');
  }
  public set hwSerialno(value: string) {
    this._hwSerialno = value;
  }
  public resetHwSerialno() {
    this._hwSerialno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSerialnoInput() {
    return this._hwSerialno;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // product_desc - computed: false, optional: true, required: false
  private _productDesc?: string; 
  public get productDesc() {
    return this.getStringAttribute('product_desc');
  }
  public set productDesc(value: string) {
    this._productDesc = value;
  }
  public resetProductDesc() {
    this._productDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productDescInput() {
    return this._productDesc;
  }

  // source1 - computed: false, optional: true, required: false
  private _source1?: string; 
  public get source1() {
    return this.getStringAttribute('source1');
  }
  public set source1(value: string) {
    this._source1 = value;
  }
  public resetSource1() {
    this._source1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source1Input() {
    return this._source1;
  }

  // source2 - computed: false, optional: true, required: false
  private _source2?: string; 
  public get source2() {
    return this.getStringAttribute('source2');
  }
  public set source2(value: string) {
    this._source2 = value;
  }
  public resetSource2() {
    this._source2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source2Input() {
    return this._source2;
  }

  // source3 - computed: false, optional: true, required: false
  private _source3?: string; 
  public get source3() {
    return this.getStringAttribute('source3');
  }
  public set source3(value: string) {
    this._source3 = value;
  }
  public resetSource3() {
    this._source3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source3Input() {
    return this._source3;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // usb_uuid - computed: false, optional: true, required: false
  private _usbUuid?: string; 
  public get usbUuid() {
    return this.getStringAttribute('usb_uuid');
  }
  public set usbUuid(value: string) {
    this._usbUuid = value;
  }
  public resetUsbUuid() {
    this._usbUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbUuidInput() {
    return this._usbUuid;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // source1_module_list - computed: false, optional: true, required: false
  private _source1ModuleList = new DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStructList(this, "source1_module_list", false);
  public get source1ModuleList() {
    return this._source1ModuleList;
  }
  public putSource1ModuleList(value: DataThunderScmLicenseSrcInfoOperOperSource1ModuleListStruct[] | cdktf.IResolvable) {
    this._source1ModuleList.internalValue = value;
  }
  public resetSource1ModuleList() {
    this._source1ModuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source1ModuleListInput() {
    return this._source1ModuleList.internalValue;
  }

  // source2_module_list - computed: false, optional: true, required: false
  private _source2ModuleList = new DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStructList(this, "source2_module_list", false);
  public get source2ModuleList() {
    return this._source2ModuleList;
  }
  public putSource2ModuleList(value: DataThunderScmLicenseSrcInfoOperOperSource2ModuleListStruct[] | cdktf.IResolvable) {
    this._source2ModuleList.internalValue = value;
  }
  public resetSource2ModuleList() {
    this._source2ModuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source2ModuleListInput() {
    return this._source2ModuleList.internalValue;
  }

  // source3_module_list - computed: false, optional: true, required: false
  private _source3ModuleList = new DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStructList(this, "source3_module_list", false);
  public get source3ModuleList() {
    return this._source3ModuleList;
  }
  public putSource3ModuleList(value: DataThunderScmLicenseSrcInfoOperOperSource3ModuleListStruct[] | cdktf.IResolvable) {
    this._source3ModuleList.internalValue = value;
  }
  public resetSource3ModuleList() {
    this._source3ModuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source3ModuleListInput() {
    return this._source3ModuleList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper thunder_scm_license_src_info_oper}
*/
export class DataThunderScmLicenseSrcInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scm_license_src_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScmLicenseSrcInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScmLicenseSrcInfoOper to import
  * @param importFromId The id of the existing DataThunderScmLicenseSrcInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScmLicenseSrcInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scm_license_src_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_license_src_info_oper thunder_scm_license_src_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScmLicenseSrcInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScmLicenseSrcInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scm_license_src_info_oper',
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
  private _oper = new DataThunderScmLicenseSrcInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScmLicenseSrcInfoOperOper) {
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
      oper: dataThunderScmLicenseSrcInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScmLicenseSrcInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScmLicenseSrcInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
