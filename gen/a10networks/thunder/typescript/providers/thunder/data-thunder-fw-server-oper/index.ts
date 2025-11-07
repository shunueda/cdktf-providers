// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#id DataThunderFwServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#name DataThunderFwServerOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#oper DataThunderFwServerOper#oper}
  */
  readonly oper?: DataThunderFwServerOperOper;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#port_list DataThunderFwServerOper#port_list}
  */
  readonly portList?: DataThunderFwServerOperPortListStruct[] | cdktf.IResolvable;
}
export interface DataThunderFwServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#state DataThunderFwServerOper#state}
  */
  readonly state?: string;
}

export function dataThunderFwServerOperOperToTerraform(struct?: DataThunderFwServerOperOperOutputReference | DataThunderFwServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderFwServerOperOperToHclTerraform(struct?: DataThunderFwServerOperOperOutputReference | DataThunderFwServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataThunderFwServerOperPortListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#alloc_failed DataThunderFwServerOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ha_group_id DataThunderFwServerOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ip DataThunderFwServerOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ipv6 DataThunderFwServerOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ports_consumed DataThunderFwServerOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ports_consumed_total DataThunderFwServerOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#ports_freed_total DataThunderFwServerOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#state DataThunderFwServerOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#vrid DataThunderFwServerOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderFwServerOperPortListOperToTerraform(struct?: DataThunderFwServerOperPortListOperOutputReference | DataThunderFwServerOperPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failed: cdktf.numberToTerraform(struct!.allocFailed),
    ha_group_id: cdktf.numberToTerraform(struct!.haGroupId),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ports_consumed: cdktf.numberToTerraform(struct!.portsConsumed),
    ports_consumed_total: cdktf.numberToTerraform(struct!.portsConsumedTotal),
    ports_freed_total: cdktf.numberToTerraform(struct!.portsFreedTotal),
    state: cdktf.stringToTerraform(struct!.state),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderFwServerOperPortListOperToHclTerraform(struct?: DataThunderFwServerOperPortListOperOutputReference | DataThunderFwServerOperPortListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.allocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_group_id: {
      value: cdktf.numberToHclTerraform(struct!.haGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports_consumed: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_consumed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsConsumedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports_freed_total: {
      value: cdktf.numberToHclTerraform(struct!.portsFreedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServerOperPortListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwServerOperPortListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailed = this._allocFailed;
    }
    if (this._haGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupId = this._haGroupId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._portsConsumed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumed = this._portsConsumed;
    }
    if (this._portsConsumedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsConsumedTotal = this._portsConsumedTotal;
    }
    if (this._portsFreedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portsFreedTotal = this._portsFreedTotal;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServerOperPortListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocFailed = undefined;
      this._haGroupId = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._portsConsumed = undefined;
      this._portsConsumedTotal = undefined;
      this._portsFreedTotal = undefined;
      this._state = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocFailed = value.allocFailed;
      this._haGroupId = value.haGroupId;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._portsConsumed = value.portsConsumed;
      this._portsConsumedTotal = value.portsConsumedTotal;
      this._portsFreedTotal = value.portsFreedTotal;
      this._state = value.state;
      this._vrid = value.vrid;
    }
  }

  // alloc_failed - computed: false, optional: true, required: false
  private _allocFailed?: number; 
  public get allocFailed() {
    return this.getNumberAttribute('alloc_failed');
  }
  public set allocFailed(value: number) {
    this._allocFailed = value;
  }
  public resetAllocFailed() {
    this._allocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailedInput() {
    return this._allocFailed;
  }

  // ha_group_id - computed: false, optional: true, required: false
  private _haGroupId?: number; 
  public get haGroupId() {
    return this.getNumberAttribute('ha_group_id');
  }
  public set haGroupId(value: number) {
    this._haGroupId = value;
  }
  public resetHaGroupId() {
    this._haGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupIdInput() {
    return this._haGroupId;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ports_consumed - computed: false, optional: true, required: false
  private _portsConsumed?: number; 
  public get portsConsumed() {
    return this.getNumberAttribute('ports_consumed');
  }
  public set portsConsumed(value: number) {
    this._portsConsumed = value;
  }
  public resetPortsConsumed() {
    this._portsConsumed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedInput() {
    return this._portsConsumed;
  }

  // ports_consumed_total - computed: false, optional: true, required: false
  private _portsConsumedTotal?: number; 
  public get portsConsumedTotal() {
    return this.getNumberAttribute('ports_consumed_total');
  }
  public set portsConsumedTotal(value: number) {
    this._portsConsumedTotal = value;
  }
  public resetPortsConsumedTotal() {
    this._portsConsumedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsConsumedTotalInput() {
    return this._portsConsumedTotal;
  }

  // ports_freed_total - computed: false, optional: true, required: false
  private _portsFreedTotal?: number; 
  public get portsFreedTotal() {
    return this.getNumberAttribute('ports_freed_total');
  }
  public set portsFreedTotal(value: number) {
    this._portsFreedTotal = value;
  }
  public resetPortsFreedTotal() {
    this._portsFreedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsFreedTotalInput() {
    return this._portsFreedTotal;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface DataThunderFwServerOperPortListStruct {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#port_number DataThunderFwServerOper#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#protocol DataThunderFwServerOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#oper DataThunderFwServerOper#oper}
  */
  readonly oper?: DataThunderFwServerOperPortListOper;
}

export function dataThunderFwServerOperPortListStructToTerraform(struct?: DataThunderFwServerOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    oper: dataThunderFwServerOperPortListOperToTerraform(struct!.oper),
  }
}


export function dataThunderFwServerOperPortListStructToHclTerraform(struct?: DataThunderFwServerOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
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
    oper: {
      value: dataThunderFwServerOperPortListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwServerOperPortListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwServerOperPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwServerOperPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwServerOperPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._oper.internalValue = value.oper;
    }
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwServerOperPortListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwServerOperPortListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderFwServerOperPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwServerOperPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwServerOperPortListStructOutputReference {
    return new DataThunderFwServerOperPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper thunder_fw_server_oper}
*/
export class DataThunderFwServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwServerOper to import
  * @param importFromId The id of the existing DataThunderFwServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_oper thunder_fw_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwServerOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwServerOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_server_oper',
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
    this._name = config.name;
    this._oper.internalValue = config.oper;
    this._portList.internalValue = config.portList;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwServerOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderFwServerOperPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderFwServerOperPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderFwServerOperOperToTerraform(this._oper.internalValue),
      port_list: cdktf.listMapper(dataThunderFwServerOperPortListStructToTerraform, true)(this._portList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderFwServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwServerOperOperList",
      },
      port_list: {
        value: cdktf.listMapperHcl(dataThunderFwServerOperPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwServerOperPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
