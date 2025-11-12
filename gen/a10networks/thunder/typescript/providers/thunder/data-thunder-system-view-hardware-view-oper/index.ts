// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewHardwareViewOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#id DataThunderSystemViewHardwareViewOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#oper DataThunderSystemViewHardwareViewOper#oper}
  */
  readonly oper?: DataThunderSystemViewHardwareViewOperOper;
}
export interface DataThunderSystemViewHardwareViewOperOperBypassListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bypass_info DataThunderSystemViewHardwareViewOper#bypass_info}
  */
  readonly bypassInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bypass_name DataThunderSystemViewHardwareViewOper#bypass_name}
  */
  readonly bypassName?: string;
}

export function dataThunderSystemViewHardwareViewOperOperBypassListStructToTerraform(struct?: DataThunderSystemViewHardwareViewOperOperBypassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_info: cdktf.stringToTerraform(struct!.bypassInfo),
    bypass_name: cdktf.stringToTerraform(struct!.bypassName),
  }
}


export function dataThunderSystemViewHardwareViewOperOperBypassListStructToHclTerraform(struct?: DataThunderSystemViewHardwareViewOperOperBypassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_info: {
      value: cdktf.stringToHclTerraform(struct!.bypassInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_name: {
      value: cdktf.stringToHclTerraform(struct!.bypassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHardwareViewOperOperBypassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewHardwareViewOperOperBypassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassInfo = this._bypassInfo;
    }
    if (this._bypassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassName = this._bypassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHardwareViewOperOperBypassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassInfo = undefined;
      this._bypassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassInfo = value.bypassInfo;
      this._bypassName = value.bypassName;
    }
  }

  // bypass_info - computed: false, optional: true, required: false
  private _bypassInfo?: string; 
  public get bypassInfo() {
    return this.getStringAttribute('bypass_info');
  }
  public set bypassInfo(value: string) {
    this._bypassInfo = value;
  }
  public resetBypassInfo() {
    this._bypassInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInfoInput() {
    return this._bypassInfo;
  }

  // bypass_name - computed: false, optional: true, required: false
  private _bypassName?: string; 
  public get bypassName() {
    return this.getStringAttribute('bypass_name');
  }
  public set bypassName(value: string) {
    this._bypassName = value;
  }
  public resetBypassName() {
    this._bypassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassNameInput() {
    return this._bypassName;
  }
}

export class DataThunderSystemViewHardwareViewOperOperBypassListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewHardwareViewOperOperBypassListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewHardwareViewOperOperBypassListStructOutputReference {
    return new DataThunderSystemViewHardwareViewOperOperBypassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewHardwareViewOperOperCompressionCards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#aha363 DataThunderSystemViewHardwareViewOper#aha363}
  */
  readonly aha363?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#gzip_devices DataThunderSystemViewHardwareViewOper#gzip_devices}
  */
  readonly gzipDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#unknown_compression DataThunderSystemViewHardwareViewOper#unknown_compression}
  */
  readonly unknownCompression?: number;
}

export function dataThunderSystemViewHardwareViewOperOperCompressionCardsToTerraform(struct?: DataThunderSystemViewHardwareViewOperOperCompressionCardsOutputReference | DataThunderSystemViewHardwareViewOperOperCompressionCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aha363: cdktf.numberToTerraform(struct!.aha363),
    gzip_devices: cdktf.numberToTerraform(struct!.gzipDevices),
    unknown_compression: cdktf.numberToTerraform(struct!.unknownCompression),
  }
}


export function dataThunderSystemViewHardwareViewOperOperCompressionCardsToHclTerraform(struct?: DataThunderSystemViewHardwareViewOperOperCompressionCardsOutputReference | DataThunderSystemViewHardwareViewOperOperCompressionCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aha363: {
      value: cdktf.numberToHclTerraform(struct!.aha363),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gzip_devices: {
      value: cdktf.numberToHclTerraform(struct!.gzipDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_compression: {
      value: cdktf.numberToHclTerraform(struct!.unknownCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHardwareViewOperOperCompressionCardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewHardwareViewOperOperCompressionCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aha363 !== undefined) {
      hasAnyValues = true;
      internalValueResult.aha363 = this._aha363;
    }
    if (this._gzipDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipDevices = this._gzipDevices;
    }
    if (this._unknownCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownCompression = this._unknownCompression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHardwareViewOperOperCompressionCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aha363 = undefined;
      this._gzipDevices = undefined;
      this._unknownCompression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aha363 = value.aha363;
      this._gzipDevices = value.gzipDevices;
      this._unknownCompression = value.unknownCompression;
    }
  }

  // aha363 - computed: false, optional: true, required: false
  private _aha363?: number; 
  public get aha363() {
    return this.getNumberAttribute('aha363');
  }
  public set aha363(value: number) {
    this._aha363 = value;
  }
  public resetAha363() {
    this._aha363 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aha363Input() {
    return this._aha363;
  }

  // gzip_devices - computed: false, optional: true, required: false
  private _gzipDevices?: number; 
  public get gzipDevices() {
    return this.getNumberAttribute('gzip_devices');
  }
  public set gzipDevices(value: number) {
    this._gzipDevices = value;
  }
  public resetGzipDevices() {
    this._gzipDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipDevicesInput() {
    return this._gzipDevices;
  }

  // unknown_compression - computed: false, optional: true, required: false
  private _unknownCompression?: number; 
  public get unknownCompression() {
    return this.getNumberAttribute('unknown_compression');
  }
  public set unknownCompression(value: number) {
    this._unknownCompression = value;
  }
  public resetUnknownCompression() {
    this._unknownCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCompressionInput() {
    return this._unknownCompression;
  }
}
export interface DataThunderSystemViewHardwareViewOperOperRaidListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#md_name DataThunderSystemViewHardwareViewOper#md_name}
  */
  readonly mdName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#md_pri DataThunderSystemViewHardwareViewOper#md_pri}
  */
  readonly mdPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#md_sec DataThunderSystemViewHardwareViewOper#md_sec}
  */
  readonly mdSec?: string;
}

export function dataThunderSystemViewHardwareViewOperOperRaidListStructToTerraform(struct?: DataThunderSystemViewHardwareViewOperOperRaidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md_name: cdktf.stringToTerraform(struct!.mdName),
    md_pri: cdktf.stringToTerraform(struct!.mdPri),
    md_sec: cdktf.stringToTerraform(struct!.mdSec),
  }
}


export function dataThunderSystemViewHardwareViewOperOperRaidListStructToHclTerraform(struct?: DataThunderSystemViewHardwareViewOperOperRaidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md_name: {
      value: cdktf.stringToHclTerraform(struct!.mdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md_pri: {
      value: cdktf.stringToHclTerraform(struct!.mdPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md_sec: {
      value: cdktf.stringToHclTerraform(struct!.mdSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHardwareViewOperOperRaidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewHardwareViewOperOperRaidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdName = this._mdName;
    }
    if (this._mdPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdPri = this._mdPri;
    }
    if (this._mdSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdSec = this._mdSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHardwareViewOperOperRaidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mdName = undefined;
      this._mdPri = undefined;
      this._mdSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mdName = value.mdName;
      this._mdPri = value.mdPri;
      this._mdSec = value.mdSec;
    }
  }

  // md_name - computed: false, optional: true, required: false
  private _mdName?: string; 
  public get mdName() {
    return this.getStringAttribute('md_name');
  }
  public set mdName(value: string) {
    this._mdName = value;
  }
  public resetMdName() {
    this._mdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdNameInput() {
    return this._mdName;
  }

  // md_pri - computed: false, optional: true, required: false
  private _mdPri?: string; 
  public get mdPri() {
    return this.getStringAttribute('md_pri');
  }
  public set mdPri(value: string) {
    this._mdPri = value;
  }
  public resetMdPri() {
    this._mdPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdPriInput() {
    return this._mdPri;
  }

  // md_sec - computed: false, optional: true, required: false
  private _mdSec?: string; 
  public get mdSec() {
    return this.getStringAttribute('md_sec');
  }
  public set mdSec(value: string) {
    this._mdSec = value;
  }
  public resetMdSec() {
    this._mdSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdSecInput() {
    return this._mdSec;
  }
}

export class DataThunderSystemViewHardwareViewOperOperRaidListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewHardwareViewOperOperRaidListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewHardwareViewOperOperRaidListStructOutputReference {
    return new DataThunderSystemViewHardwareViewOperOperRaidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewHardwareViewOperOperSslCards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#coleto_ssl_cards DataThunderSystemViewHardwareViewOper#coleto_ssl_cards}
  */
  readonly coletoSslCards?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#hsm DataThunderSystemViewHardwareViewOper#hsm}
  */
  readonly hsm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox1 DataThunderSystemViewHardwareViewOper#nitrox1}
  */
  readonly nitrox1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox2 DataThunderSystemViewHardwareViewOper#nitrox2}
  */
  readonly nitrox2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox3 DataThunderSystemViewHardwareViewOper#nitrox3}
  */
  readonly nitrox3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox3_cores DataThunderSystemViewHardwareViewOper#nitrox3_cores}
  */
  readonly nitrox3Cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox5 DataThunderSystemViewHardwareViewOper#nitrox5}
  */
  readonly nitrox5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitrox5_cores DataThunderSystemViewHardwareViewOper#nitrox5_cores}
  */
  readonly nitrox5Cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nitroxpx DataThunderSystemViewHardwareViewOper#nitroxpx}
  */
  readonly nitroxpx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#ssl_devices DataThunderSystemViewHardwareViewOper#ssl_devices}
  */
  readonly sslDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#unknown_ssl_cards DataThunderSystemViewHardwareViewOper#unknown_ssl_cards}
  */
  readonly unknownSslCards?: number;
}

export function dataThunderSystemViewHardwareViewOperOperSslCardsToTerraform(struct?: DataThunderSystemViewHardwareViewOperOperSslCardsOutputReference | DataThunderSystemViewHardwareViewOperOperSslCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coleto_ssl_cards: cdktf.numberToTerraform(struct!.coletoSslCards),
    hsm: cdktf.numberToTerraform(struct!.hsm),
    nitrox1: cdktf.numberToTerraform(struct!.nitrox1),
    nitrox2: cdktf.numberToTerraform(struct!.nitrox2),
    nitrox3: cdktf.numberToTerraform(struct!.nitrox3),
    nitrox3_cores: cdktf.numberToTerraform(struct!.nitrox3Cores),
    nitrox5: cdktf.numberToTerraform(struct!.nitrox5),
    nitrox5_cores: cdktf.numberToTerraform(struct!.nitrox5Cores),
    nitroxpx: cdktf.numberToTerraform(struct!.nitroxpx),
    ssl_devices: cdktf.numberToTerraform(struct!.sslDevices),
    unknown_ssl_cards: cdktf.numberToTerraform(struct!.unknownSslCards),
  }
}


export function dataThunderSystemViewHardwareViewOperOperSslCardsToHclTerraform(struct?: DataThunderSystemViewHardwareViewOperOperSslCardsOutputReference | DataThunderSystemViewHardwareViewOperOperSslCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coleto_ssl_cards: {
      value: cdktf.numberToHclTerraform(struct!.coletoSslCards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hsm: {
      value: cdktf.numberToHclTerraform(struct!.hsm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox1: {
      value: cdktf.numberToHclTerraform(struct!.nitrox1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox2: {
      value: cdktf.numberToHclTerraform(struct!.nitrox2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox3: {
      value: cdktf.numberToHclTerraform(struct!.nitrox3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox3_cores: {
      value: cdktf.numberToHclTerraform(struct!.nitrox3Cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox5: {
      value: cdktf.numberToHclTerraform(struct!.nitrox5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitrox5_cores: {
      value: cdktf.numberToHclTerraform(struct!.nitrox5Cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nitroxpx: {
      value: cdktf.numberToHclTerraform(struct!.nitroxpx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_devices: {
      value: cdktf.numberToHclTerraform(struct!.sslDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_ssl_cards: {
      value: cdktf.numberToHclTerraform(struct!.unknownSslCards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHardwareViewOperOperSslCardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewHardwareViewOperOperSslCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coletoSslCards !== undefined) {
      hasAnyValues = true;
      internalValueResult.coletoSslCards = this._coletoSslCards;
    }
    if (this._hsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsm = this._hsm;
    }
    if (this._nitrox1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox1 = this._nitrox1;
    }
    if (this._nitrox2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox2 = this._nitrox2;
    }
    if (this._nitrox3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox3 = this._nitrox3;
    }
    if (this._nitrox3Cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox3Cores = this._nitrox3Cores;
    }
    if (this._nitrox5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox5 = this._nitrox5;
    }
    if (this._nitrox5Cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitrox5Cores = this._nitrox5Cores;
    }
    if (this._nitroxpx !== undefined) {
      hasAnyValues = true;
      internalValueResult.nitroxpx = this._nitroxpx;
    }
    if (this._sslDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDevices = this._sslDevices;
    }
    if (this._unknownSslCards !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownSslCards = this._unknownSslCards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHardwareViewOperOperSslCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coletoSslCards = undefined;
      this._hsm = undefined;
      this._nitrox1 = undefined;
      this._nitrox2 = undefined;
      this._nitrox3 = undefined;
      this._nitrox3Cores = undefined;
      this._nitrox5 = undefined;
      this._nitrox5Cores = undefined;
      this._nitroxpx = undefined;
      this._sslDevices = undefined;
      this._unknownSslCards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coletoSslCards = value.coletoSslCards;
      this._hsm = value.hsm;
      this._nitrox1 = value.nitrox1;
      this._nitrox2 = value.nitrox2;
      this._nitrox3 = value.nitrox3;
      this._nitrox3Cores = value.nitrox3Cores;
      this._nitrox5 = value.nitrox5;
      this._nitrox5Cores = value.nitrox5Cores;
      this._nitroxpx = value.nitroxpx;
      this._sslDevices = value.sslDevices;
      this._unknownSslCards = value.unknownSslCards;
    }
  }

  // coleto_ssl_cards - computed: false, optional: true, required: false
  private _coletoSslCards?: number; 
  public get coletoSslCards() {
    return this.getNumberAttribute('coleto_ssl_cards');
  }
  public set coletoSslCards(value: number) {
    this._coletoSslCards = value;
  }
  public resetColetoSslCards() {
    this._coletoSslCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coletoSslCardsInput() {
    return this._coletoSslCards;
  }

  // hsm - computed: false, optional: true, required: false
  private _hsm?: number; 
  public get hsm() {
    return this.getNumberAttribute('hsm');
  }
  public set hsm(value: number) {
    this._hsm = value;
  }
  public resetHsm() {
    this._hsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm;
  }

  // nitrox1 - computed: false, optional: true, required: false
  private _nitrox1?: number; 
  public get nitrox1() {
    return this.getNumberAttribute('nitrox1');
  }
  public set nitrox1(value: number) {
    this._nitrox1 = value;
  }
  public resetNitrox1() {
    this._nitrox1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox1Input() {
    return this._nitrox1;
  }

  // nitrox2 - computed: false, optional: true, required: false
  private _nitrox2?: number; 
  public get nitrox2() {
    return this.getNumberAttribute('nitrox2');
  }
  public set nitrox2(value: number) {
    this._nitrox2 = value;
  }
  public resetNitrox2() {
    this._nitrox2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox2Input() {
    return this._nitrox2;
  }

  // nitrox3 - computed: false, optional: true, required: false
  private _nitrox3?: number; 
  public get nitrox3() {
    return this.getNumberAttribute('nitrox3');
  }
  public set nitrox3(value: number) {
    this._nitrox3 = value;
  }
  public resetNitrox3() {
    this._nitrox3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox3Input() {
    return this._nitrox3;
  }

  // nitrox3_cores - computed: false, optional: true, required: false
  private _nitrox3Cores?: number; 
  public get nitrox3Cores() {
    return this.getNumberAttribute('nitrox3_cores');
  }
  public set nitrox3Cores(value: number) {
    this._nitrox3Cores = value;
  }
  public resetNitrox3Cores() {
    this._nitrox3Cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox3CoresInput() {
    return this._nitrox3Cores;
  }

  // nitrox5 - computed: false, optional: true, required: false
  private _nitrox5?: number; 
  public get nitrox5() {
    return this.getNumberAttribute('nitrox5');
  }
  public set nitrox5(value: number) {
    this._nitrox5 = value;
  }
  public resetNitrox5() {
    this._nitrox5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox5Input() {
    return this._nitrox5;
  }

  // nitrox5_cores - computed: false, optional: true, required: false
  private _nitrox5Cores?: number; 
  public get nitrox5Cores() {
    return this.getNumberAttribute('nitrox5_cores');
  }
  public set nitrox5Cores(value: number) {
    this._nitrox5Cores = value;
  }
  public resetNitrox5Cores() {
    this._nitrox5Cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitrox5CoresInput() {
    return this._nitrox5Cores;
  }

  // nitroxpx - computed: false, optional: true, required: false
  private _nitroxpx?: number; 
  public get nitroxpx() {
    return this.getNumberAttribute('nitroxpx');
  }
  public set nitroxpx(value: number) {
    this._nitroxpx = value;
  }
  public resetNitroxpx() {
    this._nitroxpx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitroxpxInput() {
    return this._nitroxpx;
  }

  // ssl_devices - computed: false, optional: true, required: false
  private _sslDevices?: number; 
  public get sslDevices() {
    return this.getNumberAttribute('ssl_devices');
  }
  public set sslDevices(value: number) {
    this._sslDevices = value;
  }
  public resetSslDevices() {
    this._sslDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDevicesInput() {
    return this._sslDevices;
  }

  // unknown_ssl_cards - computed: false, optional: true, required: false
  private _unknownSslCards?: number; 
  public get unknownSslCards() {
    return this.getNumberAttribute('unknown_ssl_cards');
  }
  public set unknownSslCards(value: number) {
    this._unknownSslCards = value;
  }
  public resetUnknownSslCards() {
    this._unknownSslCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownSslCardsInput() {
    return this._unknownSslCards;
  }
}
export interface DataThunderSystemViewHardwareViewOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#alldynamic DataThunderSystemViewHardwareViewOper#alldynamic}
  */
  readonly alldynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bios_release_date DataThunderSystemViewHardwareViewOper#bios_release_date}
  */
  readonly biosReleaseDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bios_version DataThunderSystemViewHardwareViewOper#bios_version}
  */
  readonly biosVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bypass_pr DataThunderSystemViewHardwareViewOper#bypass_pr}
  */
  readonly bypassPr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#cpu DataThunderSystemViewHardwareViewOper#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#cpu_cores DataThunderSystemViewHardwareViewOper#cpu_cores}
  */
  readonly cpuCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#cpu_stepping DataThunderSystemViewHardwareViewOper#cpu_stepping}
  */
  readonly cpuStepping?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk1_status DataThunderSystemViewHardwareViewOper#disk1_status}
  */
  readonly disk1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk2_status DataThunderSystemViewHardwareViewOper#disk2_status}
  */
  readonly disk2Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk_free DataThunderSystemViewHardwareViewOper#disk_free}
  */
  readonly diskFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk_percentage DataThunderSystemViewHardwareViewOper#disk_percentage}
  */
  readonly diskPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk_total DataThunderSystemViewHardwareViewOper#disk_total}
  */
  readonly diskTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#disk_used DataThunderSystemViewHardwareViewOper#disk_used}
  */
  readonly diskUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#fpga_date DataThunderSystemViewHardwareViewOper#fpga_date}
  */
  readonly fpgaDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#fpga_summary DataThunderSystemViewHardwareViewOper#fpga_summary}
  */
  readonly fpgaSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#ipmi DataThunderSystemViewHardwareViewOper#ipmi}
  */
  readonly ipmi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#l23_asic DataThunderSystemViewHardwareViewOper#l23_asic}
  */
  readonly l23Asic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#mcpld_date DataThunderSystemViewHardwareViewOper#mcpld_date}
  */
  readonly mcpldDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#mcpld_type DataThunderSystemViewHardwareViewOper#mcpld_type}
  */
  readonly mcpldType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#memory DataThunderSystemViewHardwareViewOper#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#num_disks DataThunderSystemViewHardwareViewOper#num_disks}
  */
  readonly numDisks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#nvm_firmware_versoin DataThunderSystemViewHardwareViewOper#nvm_firmware_versoin}
  */
  readonly nvmFirmwareVersoin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#octeon DataThunderSystemViewHardwareViewOper#octeon}
  */
  readonly octeon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#plat_flag DataThunderSystemViewHardwareViewOper#plat_flag}
  */
  readonly platFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#platform_description DataThunderSystemViewHardwareViewOper#platform_description}
  */
  readonly platformDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#ports DataThunderSystemViewHardwareViewOper#ports}
  */
  readonly ports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#psu1_np15 DataThunderSystemViewHardwareViewOper#psu1_np15}
  */
  readonly psu1Np15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#psu2_np15 DataThunderSystemViewHardwareViewOper#psu2_np15}
  */
  readonly psu2Np15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#raid_present DataThunderSystemViewHardwareViewOper#raid_present}
  */
  readonly raidPresent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#serial DataThunderSystemViewHardwareViewOper#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#spe_present DataThunderSystemViewHardwareViewOper#spe_present}
  */
  readonly spePresent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#storage DataThunderSystemViewHardwareViewOper#storage}
  */
  readonly storage?: string;
  /**
  * bypass_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#bypass_list DataThunderSystemViewHardwareViewOper#bypass_list}
  */
  readonly bypassList?: DataThunderSystemViewHardwareViewOperOperBypassListStruct[] | cdktf.IResolvable;
  /**
  * compression_cards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#compression_cards DataThunderSystemViewHardwareViewOper#compression_cards}
  */
  readonly compressionCards?: DataThunderSystemViewHardwareViewOperOperCompressionCards;
  /**
  * raid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#raid_list DataThunderSystemViewHardwareViewOper#raid_list}
  */
  readonly raidList?: DataThunderSystemViewHardwareViewOperOperRaidListStruct[] | cdktf.IResolvable;
  /**
  * ssl_cards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#ssl_cards DataThunderSystemViewHardwareViewOper#ssl_cards}
  */
  readonly sslCards?: DataThunderSystemViewHardwareViewOperOperSslCards;
}

export function dataThunderSystemViewHardwareViewOperOperToTerraform(struct?: DataThunderSystemViewHardwareViewOperOperOutputReference | DataThunderSystemViewHardwareViewOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alldynamic: cdktf.numberToTerraform(struct!.alldynamic),
    bios_release_date: cdktf.stringToTerraform(struct!.biosReleaseDate),
    bios_version: cdktf.stringToTerraform(struct!.biosVersion),
    bypass_pr: cdktf.numberToTerraform(struct!.bypassPr),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    cpu_cores: cdktf.numberToTerraform(struct!.cpuCores),
    cpu_stepping: cdktf.numberToTerraform(struct!.cpuStepping),
    disk1_status: cdktf.stringToTerraform(struct!.disk1Status),
    disk2_status: cdktf.stringToTerraform(struct!.disk2Status),
    disk_free: cdktf.numberToTerraform(struct!.diskFree),
    disk_percentage: cdktf.numberToTerraform(struct!.diskPercentage),
    disk_total: cdktf.numberToTerraform(struct!.diskTotal),
    disk_used: cdktf.numberToTerraform(struct!.diskUsed),
    fpga_date: cdktf.stringToTerraform(struct!.fpgaDate),
    fpga_summary: cdktf.stringToTerraform(struct!.fpgaSummary),
    ipmi: cdktf.stringToTerraform(struct!.ipmi),
    l23_asic: cdktf.stringToTerraform(struct!.l23Asic),
    mcpld_date: cdktf.stringToTerraform(struct!.mcpldDate),
    mcpld_type: cdktf.numberToTerraform(struct!.mcpldType),
    memory: cdktf.stringToTerraform(struct!.memory),
    num_disks: cdktf.numberToTerraform(struct!.numDisks),
    nvm_firmware_versoin: cdktf.stringToTerraform(struct!.nvmFirmwareVersoin),
    octeon: cdktf.numberToTerraform(struct!.octeon),
    plat_flag: cdktf.stringToTerraform(struct!.platFlag),
    platform_description: cdktf.stringToTerraform(struct!.platformDescription),
    ports: cdktf.stringToTerraform(struct!.ports),
    psu1_np15: cdktf.stringToTerraform(struct!.psu1Np15),
    psu2_np15: cdktf.stringToTerraform(struct!.psu2Np15),
    raid_present: cdktf.numberToTerraform(struct!.raidPresent),
    serial: cdktf.stringToTerraform(struct!.serial),
    spe_present: cdktf.stringToTerraform(struct!.spePresent),
    storage: cdktf.stringToTerraform(struct!.storage),
    bypass_list: cdktf.listMapper(dataThunderSystemViewHardwareViewOperOperBypassListStructToTerraform, true)(struct!.bypassList),
    compression_cards: dataThunderSystemViewHardwareViewOperOperCompressionCardsToTerraform(struct!.compressionCards),
    raid_list: cdktf.listMapper(dataThunderSystemViewHardwareViewOperOperRaidListStructToTerraform, true)(struct!.raidList),
    ssl_cards: dataThunderSystemViewHardwareViewOperOperSslCardsToTerraform(struct!.sslCards),
  }
}


export function dataThunderSystemViewHardwareViewOperOperToHclTerraform(struct?: DataThunderSystemViewHardwareViewOperOperOutputReference | DataThunderSystemViewHardwareViewOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alldynamic: {
      value: cdktf.numberToHclTerraform(struct!.alldynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bios_release_date: {
      value: cdktf.stringToHclTerraform(struct!.biosReleaseDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bios_version: {
      value: cdktf.stringToHclTerraform(struct!.biosVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_pr: {
      value: cdktf.numberToHclTerraform(struct!.bypassPr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cores: {
      value: cdktf.numberToHclTerraform(struct!.cpuCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_stepping: {
      value: cdktf.numberToHclTerraform(struct!.cpuStepping),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk1_status: {
      value: cdktf.stringToHclTerraform(struct!.disk1Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk2_status: {
      value: cdktf.stringToHclTerraform(struct!.disk2Status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_free: {
      value: cdktf.numberToHclTerraform(struct!.diskFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_percentage: {
      value: cdktf.numberToHclTerraform(struct!.diskPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_total: {
      value: cdktf.numberToHclTerraform(struct!.diskTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_used: {
      value: cdktf.numberToHclTerraform(struct!.diskUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_date: {
      value: cdktf.stringToHclTerraform(struct!.fpgaDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fpga_summary: {
      value: cdktf.stringToHclTerraform(struct!.fpgaSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi: {
      value: cdktf.stringToHclTerraform(struct!.ipmi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l23_asic: {
      value: cdktf.stringToHclTerraform(struct!.l23Asic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcpld_date: {
      value: cdktf.stringToHclTerraform(struct!.mcpldDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcpld_type: {
      value: cdktf.numberToHclTerraform(struct!.mcpldType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_disks: {
      value: cdktf.numberToHclTerraform(struct!.numDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvm_firmware_versoin: {
      value: cdktf.stringToHclTerraform(struct!.nvmFirmwareVersoin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    octeon: {
      value: cdktf.numberToHclTerraform(struct!.octeon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plat_flag: {
      value: cdktf.stringToHclTerraform(struct!.platFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_description: {
      value: cdktf.stringToHclTerraform(struct!.platformDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psu1_np15: {
      value: cdktf.stringToHclTerraform(struct!.psu1Np15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psu2_np15: {
      value: cdktf.stringToHclTerraform(struct!.psu2Np15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid_present: {
      value: cdktf.numberToHclTerraform(struct!.raidPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spe_present: {
      value: cdktf.stringToHclTerraform(struct!.spePresent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_list: {
      value: cdktf.listMapperHcl(dataThunderSystemViewHardwareViewOperOperBypassListStructToHclTerraform, true)(struct!.bypassList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewHardwareViewOperOperBypassListStructList",
    },
    compression_cards: {
      value: dataThunderSystemViewHardwareViewOperOperCompressionCardsToHclTerraform(struct!.compressionCards),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewHardwareViewOperOperCompressionCardsList",
    },
    raid_list: {
      value: cdktf.listMapperHcl(dataThunderSystemViewHardwareViewOperOperRaidListStructToHclTerraform, true)(struct!.raidList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewHardwareViewOperOperRaidListStructList",
    },
    ssl_cards: {
      value: dataThunderSystemViewHardwareViewOperOperSslCardsToHclTerraform(struct!.sslCards),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewHardwareViewOperOperSslCardsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewHardwareViewOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewHardwareViewOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alldynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.alldynamic = this._alldynamic;
    }
    if (this._biosReleaseDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.biosReleaseDate = this._biosReleaseDate;
    }
    if (this._biosVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.biosVersion = this._biosVersion;
    }
    if (this._bypassPr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassPr = this._bypassPr;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._cpuCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCores = this._cpuCores;
    }
    if (this._cpuStepping !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuStepping = this._cpuStepping;
    }
    if (this._disk1Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk1Status = this._disk1Status;
    }
    if (this._disk2Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk2Status = this._disk2Status;
    }
    if (this._diskFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskFree = this._diskFree;
    }
    if (this._diskPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPercentage = this._diskPercentage;
    }
    if (this._diskTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTotal = this._diskTotal;
    }
    if (this._diskUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUsed = this._diskUsed;
    }
    if (this._fpgaDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaDate = this._fpgaDate;
    }
    if (this._fpgaSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaSummary = this._fpgaSummary;
    }
    if (this._ipmi !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmi = this._ipmi;
    }
    if (this._l23Asic !== undefined) {
      hasAnyValues = true;
      internalValueResult.l23Asic = this._l23Asic;
    }
    if (this._mcpldDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpldDate = this._mcpldDate;
    }
    if (this._mcpldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpldType = this._mcpldType;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._numDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDisks = this._numDisks;
    }
    if (this._nvmFirmwareVersoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmFirmwareVersoin = this._nvmFirmwareVersoin;
    }
    if (this._octeon !== undefined) {
      hasAnyValues = true;
      internalValueResult.octeon = this._octeon;
    }
    if (this._platFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.platFlag = this._platFlag;
    }
    if (this._platformDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformDescription = this._platformDescription;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._psu1Np15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.psu1Np15 = this._psu1Np15;
    }
    if (this._psu2Np15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.psu2Np15 = this._psu2Np15;
    }
    if (this._raidPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidPresent = this._raidPresent;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._spePresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spePresent = this._spePresent;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._bypassList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassList = this._bypassList?.internalValue;
    }
    if (this._compressionCards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCards = this._compressionCards?.internalValue;
    }
    if (this._raidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidList = this._raidList?.internalValue;
    }
    if (this._sslCards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCards = this._sslCards?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewHardwareViewOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alldynamic = undefined;
      this._biosReleaseDate = undefined;
      this._biosVersion = undefined;
      this._bypassPr = undefined;
      this._cpu = undefined;
      this._cpuCores = undefined;
      this._cpuStepping = undefined;
      this._disk1Status = undefined;
      this._disk2Status = undefined;
      this._diskFree = undefined;
      this._diskPercentage = undefined;
      this._diskTotal = undefined;
      this._diskUsed = undefined;
      this._fpgaDate = undefined;
      this._fpgaSummary = undefined;
      this._ipmi = undefined;
      this._l23Asic = undefined;
      this._mcpldDate = undefined;
      this._mcpldType = undefined;
      this._memory = undefined;
      this._numDisks = undefined;
      this._nvmFirmwareVersoin = undefined;
      this._octeon = undefined;
      this._platFlag = undefined;
      this._platformDescription = undefined;
      this._ports = undefined;
      this._psu1Np15 = undefined;
      this._psu2Np15 = undefined;
      this._raidPresent = undefined;
      this._serial = undefined;
      this._spePresent = undefined;
      this._storage = undefined;
      this._bypassList.internalValue = undefined;
      this._compressionCards.internalValue = undefined;
      this._raidList.internalValue = undefined;
      this._sslCards.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alldynamic = value.alldynamic;
      this._biosReleaseDate = value.biosReleaseDate;
      this._biosVersion = value.biosVersion;
      this._bypassPr = value.bypassPr;
      this._cpu = value.cpu;
      this._cpuCores = value.cpuCores;
      this._cpuStepping = value.cpuStepping;
      this._disk1Status = value.disk1Status;
      this._disk2Status = value.disk2Status;
      this._diskFree = value.diskFree;
      this._diskPercentage = value.diskPercentage;
      this._diskTotal = value.diskTotal;
      this._diskUsed = value.diskUsed;
      this._fpgaDate = value.fpgaDate;
      this._fpgaSummary = value.fpgaSummary;
      this._ipmi = value.ipmi;
      this._l23Asic = value.l23Asic;
      this._mcpldDate = value.mcpldDate;
      this._mcpldType = value.mcpldType;
      this._memory = value.memory;
      this._numDisks = value.numDisks;
      this._nvmFirmwareVersoin = value.nvmFirmwareVersoin;
      this._octeon = value.octeon;
      this._platFlag = value.platFlag;
      this._platformDescription = value.platformDescription;
      this._ports = value.ports;
      this._psu1Np15 = value.psu1Np15;
      this._psu2Np15 = value.psu2Np15;
      this._raidPresent = value.raidPresent;
      this._serial = value.serial;
      this._spePresent = value.spePresent;
      this._storage = value.storage;
      this._bypassList.internalValue = value.bypassList;
      this._compressionCards.internalValue = value.compressionCards;
      this._raidList.internalValue = value.raidList;
      this._sslCards.internalValue = value.sslCards;
    }
  }

  // alldynamic - computed: false, optional: true, required: false
  private _alldynamic?: number; 
  public get alldynamic() {
    return this.getNumberAttribute('alldynamic');
  }
  public set alldynamic(value: number) {
    this._alldynamic = value;
  }
  public resetAlldynamic() {
    this._alldynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alldynamicInput() {
    return this._alldynamic;
  }

  // bios_release_date - computed: false, optional: true, required: false
  private _biosReleaseDate?: string; 
  public get biosReleaseDate() {
    return this.getStringAttribute('bios_release_date');
  }
  public set biosReleaseDate(value: string) {
    this._biosReleaseDate = value;
  }
  public resetBiosReleaseDate() {
    this._biosReleaseDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosReleaseDateInput() {
    return this._biosReleaseDate;
  }

  // bios_version - computed: false, optional: true, required: false
  private _biosVersion?: string; 
  public get biosVersion() {
    return this.getStringAttribute('bios_version');
  }
  public set biosVersion(value: string) {
    this._biosVersion = value;
  }
  public resetBiosVersion() {
    this._biosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosVersionInput() {
    return this._biosVersion;
  }

  // bypass_pr - computed: false, optional: true, required: false
  private _bypassPr?: number; 
  public get bypassPr() {
    return this.getNumberAttribute('bypass_pr');
  }
  public set bypassPr(value: number) {
    this._bypassPr = value;
  }
  public resetBypassPr() {
    this._bypassPr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPrInput() {
    return this._bypassPr;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_cores - computed: false, optional: true, required: false
  private _cpuCores?: number; 
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }
  public set cpuCores(value: number) {
    this._cpuCores = value;
  }
  public resetCpuCores() {
    this._cpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoresInput() {
    return this._cpuCores;
  }

  // cpu_stepping - computed: false, optional: true, required: false
  private _cpuStepping?: number; 
  public get cpuStepping() {
    return this.getNumberAttribute('cpu_stepping');
  }
  public set cpuStepping(value: number) {
    this._cpuStepping = value;
  }
  public resetCpuStepping() {
    this._cpuStepping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSteppingInput() {
    return this._cpuStepping;
  }

  // disk1_status - computed: false, optional: true, required: false
  private _disk1Status?: string; 
  public get disk1Status() {
    return this.getStringAttribute('disk1_status');
  }
  public set disk1Status(value: string) {
    this._disk1Status = value;
  }
  public resetDisk1Status() {
    this._disk1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disk1StatusInput() {
    return this._disk1Status;
  }

  // disk2_status - computed: false, optional: true, required: false
  private _disk2Status?: string; 
  public get disk2Status() {
    return this.getStringAttribute('disk2_status');
  }
  public set disk2Status(value: string) {
    this._disk2Status = value;
  }
  public resetDisk2Status() {
    this._disk2Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disk2StatusInput() {
    return this._disk2Status;
  }

  // disk_free - computed: false, optional: true, required: false
  private _diskFree?: number; 
  public get diskFree() {
    return this.getNumberAttribute('disk_free');
  }
  public set diskFree(value: number) {
    this._diskFree = value;
  }
  public resetDiskFree() {
    this._diskFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFreeInput() {
    return this._diskFree;
  }

  // disk_percentage - computed: false, optional: true, required: false
  private _diskPercentage?: number; 
  public get diskPercentage() {
    return this.getNumberAttribute('disk_percentage');
  }
  public set diskPercentage(value: number) {
    this._diskPercentage = value;
  }
  public resetDiskPercentage() {
    this._diskPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPercentageInput() {
    return this._diskPercentage;
  }

  // disk_total - computed: false, optional: true, required: false
  private _diskTotal?: number; 
  public get diskTotal() {
    return this.getNumberAttribute('disk_total');
  }
  public set diskTotal(value: number) {
    this._diskTotal = value;
  }
  public resetDiskTotal() {
    this._diskTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTotalInput() {
    return this._diskTotal;
  }

  // disk_used - computed: false, optional: true, required: false
  private _diskUsed?: number; 
  public get diskUsed() {
    return this.getNumberAttribute('disk_used');
  }
  public set diskUsed(value: number) {
    this._diskUsed = value;
  }
  public resetDiskUsed() {
    this._diskUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUsedInput() {
    return this._diskUsed;
  }

  // fpga_date - computed: false, optional: true, required: false
  private _fpgaDate?: string; 
  public get fpgaDate() {
    return this.getStringAttribute('fpga_date');
  }
  public set fpgaDate(value: string) {
    this._fpgaDate = value;
  }
  public resetFpgaDate() {
    this._fpgaDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaDateInput() {
    return this._fpgaDate;
  }

  // fpga_summary - computed: false, optional: true, required: false
  private _fpgaSummary?: string; 
  public get fpgaSummary() {
    return this.getStringAttribute('fpga_summary');
  }
  public set fpgaSummary(value: string) {
    this._fpgaSummary = value;
  }
  public resetFpgaSummary() {
    this._fpgaSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaSummaryInput() {
    return this._fpgaSummary;
  }

  // ipmi - computed: false, optional: true, required: false
  private _ipmi?: string; 
  public get ipmi() {
    return this.getStringAttribute('ipmi');
  }
  public set ipmi(value: string) {
    this._ipmi = value;
  }
  public resetIpmi() {
    this._ipmi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiInput() {
    return this._ipmi;
  }

  // l23_asic - computed: false, optional: true, required: false
  private _l23Asic?: string; 
  public get l23Asic() {
    return this.getStringAttribute('l23_asic');
  }
  public set l23Asic(value: string) {
    this._l23Asic = value;
  }
  public resetL23Asic() {
    this._l23Asic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l23AsicInput() {
    return this._l23Asic;
  }

  // mcpld_date - computed: false, optional: true, required: false
  private _mcpldDate?: string; 
  public get mcpldDate() {
    return this.getStringAttribute('mcpld_date');
  }
  public set mcpldDate(value: string) {
    this._mcpldDate = value;
  }
  public resetMcpldDate() {
    this._mcpldDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpldDateInput() {
    return this._mcpldDate;
  }

  // mcpld_type - computed: false, optional: true, required: false
  private _mcpldType?: number; 
  public get mcpldType() {
    return this.getNumberAttribute('mcpld_type');
  }
  public set mcpldType(value: number) {
    this._mcpldType = value;
  }
  public resetMcpldType() {
    this._mcpldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpldTypeInput() {
    return this._mcpldType;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // num_disks - computed: false, optional: true, required: false
  private _numDisks?: number; 
  public get numDisks() {
    return this.getNumberAttribute('num_disks');
  }
  public set numDisks(value: number) {
    this._numDisks = value;
  }
  public resetNumDisks() {
    this._numDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDisksInput() {
    return this._numDisks;
  }

  // nvm_firmware_versoin - computed: false, optional: true, required: false
  private _nvmFirmwareVersoin?: string; 
  public get nvmFirmwareVersoin() {
    return this.getStringAttribute('nvm_firmware_versoin');
  }
  public set nvmFirmwareVersoin(value: string) {
    this._nvmFirmwareVersoin = value;
  }
  public resetNvmFirmwareVersoin() {
    this._nvmFirmwareVersoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmFirmwareVersoinInput() {
    return this._nvmFirmwareVersoin;
  }

  // octeon - computed: false, optional: true, required: false
  private _octeon?: number; 
  public get octeon() {
    return this.getNumberAttribute('octeon');
  }
  public set octeon(value: number) {
    this._octeon = value;
  }
  public resetOcteon() {
    this._octeon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get octeonInput() {
    return this._octeon;
  }

  // plat_flag - computed: false, optional: true, required: false
  private _platFlag?: string; 
  public get platFlag() {
    return this.getStringAttribute('plat_flag');
  }
  public set platFlag(value: string) {
    this._platFlag = value;
  }
  public resetPlatFlag() {
    this._platFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platFlagInput() {
    return this._platFlag;
  }

  // platform_description - computed: false, optional: true, required: false
  private _platformDescription?: string; 
  public get platformDescription() {
    return this.getStringAttribute('platform_description');
  }
  public set platformDescription(value: string) {
    this._platformDescription = value;
  }
  public resetPlatformDescription() {
    this._platformDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformDescriptionInput() {
    return this._platformDescription;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // psu1_np15 - computed: false, optional: true, required: false
  private _psu1Np15?: string; 
  public get psu1Np15() {
    return this.getStringAttribute('psu1_np15');
  }
  public set psu1Np15(value: string) {
    this._psu1Np15 = value;
  }
  public resetPsu1Np15() {
    this._psu1Np15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psu1Np15Input() {
    return this._psu1Np15;
  }

  // psu2_np15 - computed: false, optional: true, required: false
  private _psu2Np15?: string; 
  public get psu2Np15() {
    return this.getStringAttribute('psu2_np15');
  }
  public set psu2Np15(value: string) {
    this._psu2Np15 = value;
  }
  public resetPsu2Np15() {
    this._psu2Np15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psu2Np15Input() {
    return this._psu2Np15;
  }

  // raid_present - computed: false, optional: true, required: false
  private _raidPresent?: number; 
  public get raidPresent() {
    return this.getNumberAttribute('raid_present');
  }
  public set raidPresent(value: number) {
    this._raidPresent = value;
  }
  public resetRaidPresent() {
    this._raidPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidPresentInput() {
    return this._raidPresent;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // spe_present - computed: false, optional: true, required: false
  private _spePresent?: string; 
  public get spePresent() {
    return this.getStringAttribute('spe_present');
  }
  public set spePresent(value: string) {
    this._spePresent = value;
  }
  public resetSpePresent() {
    this._spePresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spePresentInput() {
    return this._spePresent;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // bypass_list - computed: false, optional: true, required: false
  private _bypassList = new DataThunderSystemViewHardwareViewOperOperBypassListStructList(this, "bypass_list", false);
  public get bypassList() {
    return this._bypassList;
  }
  public putBypassList(value: DataThunderSystemViewHardwareViewOperOperBypassListStruct[] | cdktf.IResolvable) {
    this._bypassList.internalValue = value;
  }
  public resetBypassList() {
    this._bypassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassListInput() {
    return this._bypassList.internalValue;
  }

  // compression_cards - computed: false, optional: true, required: false
  private _compressionCards = new DataThunderSystemViewHardwareViewOperOperCompressionCardsOutputReference(this, "compression_cards");
  public get compressionCards() {
    return this._compressionCards;
  }
  public putCompressionCards(value: DataThunderSystemViewHardwareViewOperOperCompressionCards) {
    this._compressionCards.internalValue = value;
  }
  public resetCompressionCards() {
    this._compressionCards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCardsInput() {
    return this._compressionCards.internalValue;
  }

  // raid_list - computed: false, optional: true, required: false
  private _raidList = new DataThunderSystemViewHardwareViewOperOperRaidListStructList(this, "raid_list", false);
  public get raidList() {
    return this._raidList;
  }
  public putRaidList(value: DataThunderSystemViewHardwareViewOperOperRaidListStruct[] | cdktf.IResolvable) {
    this._raidList.internalValue = value;
  }
  public resetRaidList() {
    this._raidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidListInput() {
    return this._raidList.internalValue;
  }

  // ssl_cards - computed: false, optional: true, required: false
  private _sslCards = new DataThunderSystemViewHardwareViewOperOperSslCardsOutputReference(this, "ssl_cards");
  public get sslCards() {
    return this._sslCards;
  }
  public putSslCards(value: DataThunderSystemViewHardwareViewOperOperSslCards) {
    this._sslCards.internalValue = value;
  }
  public resetSslCards() {
    this._sslCards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCardsInput() {
    return this._sslCards.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper thunder_system_view_hardware_view_oper}
*/
export class DataThunderSystemViewHardwareViewOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_hardware_view_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewHardwareViewOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewHardwareViewOper to import
  * @param importFromId The id of the existing DataThunderSystemViewHardwareViewOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewHardwareViewOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_hardware_view_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_hardware_view_oper thunder_system_view_hardware_view_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewHardwareViewOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewHardwareViewOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_hardware_view_oper',
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
  private _oper = new DataThunderSystemViewHardwareViewOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewHardwareViewOperOper) {
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
      oper: dataThunderSystemViewHardwareViewOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewHardwareViewOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewHardwareViewOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
