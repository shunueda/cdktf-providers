// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPortScanDetectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#id DataThunderVisibilityPortScanDetectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#oper DataThunderVisibilityPortScanDetectionOper#oper}
  */
  readonly oper?: DataThunderVisibilityPortScanDetectionOperOper;
}
export interface DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#port DataThunderVisibilityPortScanDetectionOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#protocol DataThunderVisibilityPortScanDetectionOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#scanned_time DataThunderVisibilityPortScanDetectionOper#scanned_time}
  */
  readonly scannedTime?: string;
}

export function dataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructToTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    scanned_time: cdktf.stringToTerraform(struct!.scannedTime),
  }
}


export function dataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructToHclTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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

export class DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._scannedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannedTime = this._scannedTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._scannedTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._scannedTime = value.scannedTime;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
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

export class DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructOutputReference {
    return new DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#scanned_ports DataThunderVisibilityPortScanDetectionOper#scanned_ports}
  */
  readonly scannedPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#src_ip_addr DataThunderVisibilityPortScanDetectionOper#src_ip_addr}
  */
  readonly srcIpAddr?: string;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#port_list DataThunderVisibilityPortScanDetectionOper#port_list}
  */
  readonly portList?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPortScanDetectionOperOperSrcIpListStructToTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scanned_ports: cdktf.numberToTerraform(struct!.scannedPorts),
    src_ip_addr: cdktf.stringToTerraform(struct!.srcIpAddr),
    port_list: cdktf.listMapper(dataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructToTerraform, true)(struct!.portList),
  }
}


export function dataThunderVisibilityPortScanDetectionOperOperSrcIpListStructToHclTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scanned_ports: {
      value: cdktf.numberToHclTerraform(struct!.scannedPorts),
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
    port_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructToHclTerraform, true)(struct!.portList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scannedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scannedPorts = this._scannedPorts;
    }
    if (this._srcIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpAddr = this._srcIpAddr;
    }
    if (this._portList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scannedPorts = undefined;
      this._srcIpAddr = undefined;
      this._portList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scannedPorts = value.scannedPorts;
      this._srcIpAddr = value.srcIpAddr;
      this._portList.internalValue = value.portList;
    }
  }

  // scanned_ports - computed: false, optional: true, required: false
  private _scannedPorts?: number; 
  public get scannedPorts() {
    return this.getNumberAttribute('scanned_ports');
  }
  public set scannedPorts(value: number) {
    this._scannedPorts = value;
  }
  public resetScannedPorts() {
    this._scannedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannedPortsInput() {
    return this._scannedPorts;
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

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderVisibilityPortScanDetectionOperOperSrcIpListPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }
}

export class DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructOutputReference {
    return new DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityPortScanDetectionOperOper {
  /**
  * src_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#src_ip_list DataThunderVisibilityPortScanDetectionOper#src_ip_list}
  */
  readonly srcIpList?: DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityPortScanDetectionOperOperToTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperOutputReference | DataThunderVisibilityPortScanDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_list: cdktf.listMapper(dataThunderVisibilityPortScanDetectionOperOperSrcIpListStructToTerraform, true)(struct!.srcIpList),
  }
}


export function dataThunderVisibilityPortScanDetectionOperOperToHclTerraform(struct?: DataThunderVisibilityPortScanDetectionOperOperOutputReference | DataThunderVisibilityPortScanDetectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityPortScanDetectionOperOperSrcIpListStructToHclTerraform, true)(struct!.srcIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPortScanDetectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPortScanDetectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpList = this._srcIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPortScanDetectionOperOper | undefined) {
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
  private _srcIpList = new DataThunderVisibilityPortScanDetectionOperOperSrcIpListStructList(this, "src_ip_list", false);
  public get srcIpList() {
    return this._srcIpList;
  }
  public putSrcIpList(value: DataThunderVisibilityPortScanDetectionOperOperSrcIpListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper thunder_visibility_port_scan_detection_oper}
*/
export class DataThunderVisibilityPortScanDetectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_port_scan_detection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPortScanDetectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPortScanDetectionOper to import
  * @param importFromId The id of the existing DataThunderVisibilityPortScanDetectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPortScanDetectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_port_scan_detection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_port_scan_detection_oper thunder_visibility_port_scan_detection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPortScanDetectionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPortScanDetectionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_port_scan_detection_oper',
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
  private _oper = new DataThunderVisibilityPortScanDetectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityPortScanDetectionOperOper) {
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
      oper: dataThunderVisibilityPortScanDetectionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityPortScanDetectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPortScanDetectionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
