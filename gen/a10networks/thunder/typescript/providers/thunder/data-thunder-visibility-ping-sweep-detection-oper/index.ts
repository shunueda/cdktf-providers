// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPingSweepDetectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#id DataThunderVisibilityPingSweepDetectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#oper DataThunderVisibilityPingSweepDetectionOper#oper}
  */
  readonly oper?: DataThunderVisibilityPingSweepDetectionOperOper;
}
export interface DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#ip DataThunderVisibilityPingSweepDetectionOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#scanned_time DataThunderVisibilityPingSweepDetectionOper#scanned_time}
  */
  readonly scannedTime?: string;
}

export function dataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructToTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    scanned_time: cdktf.stringToTerraform(struct!.scannedTime),
  }
}


export function dataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructToHclTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scanned_time: {
      value: cdktf.stringToHclTerraform(struct!.scannedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._scannedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannedTime = this._scannedTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._scannedTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._scannedTime = value.scannedTime;
    }
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

  // scanned_time - computed: false, optional: true, required: false
  private _scannedTime?: string; 
  public get scannedTime() {
    return this.getStringAttribute('scanned_time');
  }
  public set scannedTime(value: string) {
    this._scannedTime = value;
  }
  public resetScannedTime() {
    this._scannedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannedTimeInput() {
    return this._scannedTime;
  }
}

export class DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructOutputReference {
    return new DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#scanned_ips DataThunderVisibilityPingSweepDetectionOper#scanned_ips}
  */
  readonly scannedIps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#src_ip_addr DataThunderVisibilityPingSweepDetectionOper#src_ip_addr}
  */
  readonly srcIpAddr?: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#ip_list DataThunderVisibilityPingSweepDetectionOper#ip_list}
  */
  readonly ipList?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructToTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scanned_ips: cdktf.numberToTerraform(struct!.scannedIps),
    src_ip_addr: cdktf.stringToTerraform(struct!.srcIpAddr),
    ip_list: cdktf.listMapper(dataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructToTerraform, true)(struct!.ipList),
  }
}


export function dataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructToHclTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scanned_ips: {
      value: cdktf.numberToHclTerraform(struct!.scannedIps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scannedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannedIps = this._scannedIps;
    }
    if (this._srcIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpAddr = this._srcIpAddr;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scannedIps = undefined;
      this._srcIpAddr = undefined;
      this._ipList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scannedIps = value.scannedIps;
      this._srcIpAddr = value.srcIpAddr;
      this._ipList.internalValue = value.ipList;
    }
  }

  // scanned_ips - computed: false, optional: true, required: false
  private _scannedIps?: number; 
  public get scannedIps() {
    return this.getNumberAttribute('scanned_ips');
  }
  public set scannedIps(value: number) {
    this._scannedIps = value;
  }
  public resetScannedIps() {
    this._scannedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannedIpsInput() {
    return this._scannedIps;
  }

  // src_ip_addr - computed: false, optional: true, required: false
  private _srcIpAddr?: string; 
  public get srcIpAddr() {
    return this.getStringAttribute('src_ip_addr');
  }
  public set srcIpAddr(value: string) {
    this._srcIpAddr = value;
  }
  public resetSrcIpAddr() {
    this._srcIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpAddrInput() {
    return this._srcIpAddr;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}

export class DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructOutputReference {
    return new DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPingSweepDetectionOperOper {
  /**
  * src_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#src_ip_list DataThunderVisibilityPingSweepDetectionOper#src_ip_list}
  */
  readonly srcIpList?: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPingSweepDetectionOperOperToTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperOutputReference | DataThunderVisibilityPingSweepDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_list: cdktf.listMapper(dataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructToTerraform, true)(struct!.srcIpList),
  }
}


export function dataThunderVisibilityPingSweepDetectionOperOperToHclTerraform(struct?: DataThunderVisibilityPingSweepDetectionOperOperOutputReference | DataThunderVisibilityPingSweepDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructToHclTerraform, true)(struct!.srcIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPingSweepDetectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPingSweepDetectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpList = this._srcIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPingSweepDetectionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpList.internalValue = value.srcIpList;
    }
  }

  // src_ip_list - computed: false, optional: true, required: false
  private _srcIpList = new DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStructList(this, "src_ip_list", false);
  public get srcIpList() {
    return this._srcIpList;
  }
  public putSrcIpList(value: DataThunderVisibilityPingSweepDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable) {
    this._srcIpList.internalValue = value;
  }
  public resetSrcIpList() {
    this._srcIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpListInput() {
    return this._srcIpList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper thunder_visibility_ping_sweep_detection_oper}
*/
export class DataThunderVisibilityPingSweepDetectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_ping_sweep_detection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPingSweepDetectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPingSweepDetectionOper to import
  * @param importFromId The id of the existing DataThunderVisibilityPingSweepDetectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPingSweepDetectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_ping_sweep_detection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_ping_sweep_detection_oper thunder_visibility_ping_sweep_detection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPingSweepDetectionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPingSweepDetectionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_ping_sweep_detection_oper',
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
  private _oper = new DataThunderVisibilityPingSweepDetectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityPingSweepDetectionOperOper) {
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
      oper: dataThunderVisibilityPingSweepDetectionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityPingSweepDetectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPingSweepDetectionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
