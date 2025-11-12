// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwServerPortOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#id DataThunderFwServerPortOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#name DataThunderFwServerPortOper#name}
  */
  readonly name: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#port_number DataThunderFwServerPortOper#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#protocol DataThunderFwServerPortOper#protocol}
  */
  readonly protocol: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#oper DataThunderFwServerPortOper#oper}
  */
  readonly oper?: DataThunderFwServerPortOperOper;
}
export interface DataThunderFwServerPortOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#alloc_failed DataThunderFwServerPortOper#alloc_failed}
  */
  readonly allocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ha_group_id DataThunderFwServerPortOper#ha_group_id}
  */
  readonly haGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ip DataThunderFwServerPortOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ipv6 DataThunderFwServerPortOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ports_consumed DataThunderFwServerPortOper#ports_consumed}
  */
  readonly portsConsumed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ports_consumed_total DataThunderFwServerPortOper#ports_consumed_total}
  */
  readonly portsConsumedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#ports_freed_total DataThunderFwServerPortOper#ports_freed_total}
  */
  readonly portsFreedTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#state DataThunderFwServerPortOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#vrid DataThunderFwServerPortOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderFwServerPortOperOperToTerraform(struct?: DataThunderFwServerPortOperOperOutputReference | DataThunderFwServerPortOperOper): any {
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


export function dataThunderFwServerPortOperOperToHclTerraform(struct?: DataThunderFwServerPortOperOperOutputReference | DataThunderFwServerPortOperOper): any {
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

export class DataThunderFwServerPortOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwServerPortOperOper | undefined {
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

  public set internalValue(value: DataThunderFwServerPortOperOper | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper thunder_fw_server_port_oper}
*/
export class DataThunderFwServerPortOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_server_port_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwServerPortOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwServerPortOper to import
  * @param importFromId The id of the existing DataThunderFwServerPortOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwServerPortOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_server_port_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_server_port_oper thunder_fw_server_port_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwServerPortOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwServerPortOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_server_port_oper',
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
    this._name = config.name;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
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
  private _oper = new DataThunderFwServerPortOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwServerPortOperOper) {
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
      name: cdktf.stringToTerraform(this._name),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      oper: dataThunderFwServerPortOperOperToTerraform(this._oper.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderFwServerPortOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwServerPortOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
