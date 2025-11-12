// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnSystemStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#id DataThunderCgnv6LsnSystemStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#oper DataThunderCgnv6LsnSystemStatusOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnSystemStatusOperOper;
}
export interface DataThunderCgnv6LsnSystemStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#data_sessions_free DataThunderCgnv6LsnSystemStatusOper#data_sessions_free}
  */
  readonly dataSessionsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#data_sessions_used DataThunderCgnv6LsnSystemStatusOper#data_sessions_used}
  */
  readonly dataSessionsUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#lsn_cps DataThunderCgnv6LsnSystemStatusOper#lsn_cps}
  */
  readonly lsnCps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#radius_entries_free DataThunderCgnv6LsnSystemStatusOper#radius_entries_free}
  */
  readonly radiusEntriesFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#radius_entries_used DataThunderCgnv6LsnSystemStatusOper#radius_entries_used}
  */
  readonly radiusEntriesUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#smp_sessions_free DataThunderCgnv6LsnSystemStatusOper#smp_sessions_free}
  */
  readonly smpSessionsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#smp_sessions_used DataThunderCgnv6LsnSystemStatusOper#smp_sessions_used}
  */
  readonly smpSessionsUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#tcp_nat_ports_free DataThunderCgnv6LsnSystemStatusOper#tcp_nat_ports_free}
  */
  readonly tcpNatPortsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#tcp_nat_ports_used DataThunderCgnv6LsnSystemStatusOper#tcp_nat_ports_used}
  */
  readonly tcpNatPortsUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#udp_nat_ports_free DataThunderCgnv6LsnSystemStatusOper#udp_nat_ports_free}
  */
  readonly udpNatPortsFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#udp_nat_ports_used DataThunderCgnv6LsnSystemStatusOper#udp_nat_ports_used}
  */
  readonly udpNatPortsUsed?: number;
}

export function dataThunderCgnv6LsnSystemStatusOperOperToTerraform(struct?: DataThunderCgnv6LsnSystemStatusOperOperOutputReference | DataThunderCgnv6LsnSystemStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sessions_free: cdktf.numberToTerraform(struct!.dataSessionsFree),
    data_sessions_used: cdktf.numberToTerraform(struct!.dataSessionsUsed),
    lsn_cps: cdktf.numberToTerraform(struct!.lsnCps),
    radius_entries_free: cdktf.numberToTerraform(struct!.radiusEntriesFree),
    radius_entries_used: cdktf.numberToTerraform(struct!.radiusEntriesUsed),
    smp_sessions_free: cdktf.numberToTerraform(struct!.smpSessionsFree),
    smp_sessions_used: cdktf.numberToTerraform(struct!.smpSessionsUsed),
    tcp_nat_ports_free: cdktf.numberToTerraform(struct!.tcpNatPortsFree),
    tcp_nat_ports_used: cdktf.numberToTerraform(struct!.tcpNatPortsUsed),
    udp_nat_ports_free: cdktf.numberToTerraform(struct!.udpNatPortsFree),
    udp_nat_ports_used: cdktf.numberToTerraform(struct!.udpNatPortsUsed),
  }
}


export function dataThunderCgnv6LsnSystemStatusOperOperToHclTerraform(struct?: DataThunderCgnv6LsnSystemStatusOperOperOutputReference | DataThunderCgnv6LsnSystemStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sessions_free: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sessions_used: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_cps: {
      value: cdktf.numberToHclTerraform(struct!.lsnCps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_entries_free: {
      value: cdktf.numberToHclTerraform(struct!.radiusEntriesFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_entries_used: {
      value: cdktf.numberToHclTerraform(struct!.radiusEntriesUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_sessions_free: {
      value: cdktf.numberToHclTerraform(struct!.smpSessionsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_sessions_used: {
      value: cdktf.numberToHclTerraform(struct!.smpSessionsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_nat_ports_free: {
      value: cdktf.numberToHclTerraform(struct!.tcpNatPortsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_nat_ports_used: {
      value: cdktf.numberToHclTerraform(struct!.tcpNatPortsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_nat_ports_free: {
      value: cdktf.numberToHclTerraform(struct!.udpNatPortsFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_nat_ports_used: {
      value: cdktf.numberToHclTerraform(struct!.udpNatPortsUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnSystemStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnSystemStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessionsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsFree = this._dataSessionsFree;
    }
    if (this._dataSessionsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsUsed = this._dataSessionsUsed;
    }
    if (this._lsnCps !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnCps = this._lsnCps;
    }
    if (this._radiusEntriesFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusEntriesFree = this._radiusEntriesFree;
    }
    if (this._radiusEntriesUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusEntriesUsed = this._radiusEntriesUsed;
    }
    if (this._smpSessionsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpSessionsFree = this._smpSessionsFree;
    }
    if (this._smpSessionsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpSessionsUsed = this._smpSessionsUsed;
    }
    if (this._tcpNatPortsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNatPortsFree = this._tcpNatPortsFree;
    }
    if (this._tcpNatPortsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNatPortsUsed = this._tcpNatPortsUsed;
    }
    if (this._udpNatPortsFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNatPortsFree = this._udpNatPortsFree;
    }
    if (this._udpNatPortsUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNatPortsUsed = this._udpNatPortsUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnSystemStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionsFree = undefined;
      this._dataSessionsUsed = undefined;
      this._lsnCps = undefined;
      this._radiusEntriesFree = undefined;
      this._radiusEntriesUsed = undefined;
      this._smpSessionsFree = undefined;
      this._smpSessionsUsed = undefined;
      this._tcpNatPortsFree = undefined;
      this._tcpNatPortsUsed = undefined;
      this._udpNatPortsFree = undefined;
      this._udpNatPortsUsed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionsFree = value.dataSessionsFree;
      this._dataSessionsUsed = value.dataSessionsUsed;
      this._lsnCps = value.lsnCps;
      this._radiusEntriesFree = value.radiusEntriesFree;
      this._radiusEntriesUsed = value.radiusEntriesUsed;
      this._smpSessionsFree = value.smpSessionsFree;
      this._smpSessionsUsed = value.smpSessionsUsed;
      this._tcpNatPortsFree = value.tcpNatPortsFree;
      this._tcpNatPortsUsed = value.tcpNatPortsUsed;
      this._udpNatPortsFree = value.udpNatPortsFree;
      this._udpNatPortsUsed = value.udpNatPortsUsed;
    }
  }

  // data_sessions_free - computed: false, optional: true, required: false
  private _dataSessionsFree?: number; 
  public get dataSessionsFree() {
    return this.getNumberAttribute('data_sessions_free');
  }
  public set dataSessionsFree(value: number) {
    this._dataSessionsFree = value;
  }
  public resetDataSessionsFree() {
    this._dataSessionsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsFreeInput() {
    return this._dataSessionsFree;
  }

  // data_sessions_used - computed: false, optional: true, required: false
  private _dataSessionsUsed?: number; 
  public get dataSessionsUsed() {
    return this.getNumberAttribute('data_sessions_used');
  }
  public set dataSessionsUsed(value: number) {
    this._dataSessionsUsed = value;
  }
  public resetDataSessionsUsed() {
    this._dataSessionsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsUsedInput() {
    return this._dataSessionsUsed;
  }

  // lsn_cps - computed: false, optional: true, required: false
  private _lsnCps?: number; 
  public get lsnCps() {
    return this.getNumberAttribute('lsn_cps');
  }
  public set lsnCps(value: number) {
    this._lsnCps = value;
  }
  public resetLsnCps() {
    this._lsnCps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnCpsInput() {
    return this._lsnCps;
  }

  // radius_entries_free - computed: false, optional: true, required: false
  private _radiusEntriesFree?: number; 
  public get radiusEntriesFree() {
    return this.getNumberAttribute('radius_entries_free');
  }
  public set radiusEntriesFree(value: number) {
    this._radiusEntriesFree = value;
  }
  public resetRadiusEntriesFree() {
    this._radiusEntriesFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusEntriesFreeInput() {
    return this._radiusEntriesFree;
  }

  // radius_entries_used - computed: false, optional: true, required: false
  private _radiusEntriesUsed?: number; 
  public get radiusEntriesUsed() {
    return this.getNumberAttribute('radius_entries_used');
  }
  public set radiusEntriesUsed(value: number) {
    this._radiusEntriesUsed = value;
  }
  public resetRadiusEntriesUsed() {
    this._radiusEntriesUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusEntriesUsedInput() {
    return this._radiusEntriesUsed;
  }

  // smp_sessions_free - computed: false, optional: true, required: false
  private _smpSessionsFree?: number; 
  public get smpSessionsFree() {
    return this.getNumberAttribute('smp_sessions_free');
  }
  public set smpSessionsFree(value: number) {
    this._smpSessionsFree = value;
  }
  public resetSmpSessionsFree() {
    this._smpSessionsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpSessionsFreeInput() {
    return this._smpSessionsFree;
  }

  // smp_sessions_used - computed: false, optional: true, required: false
  private _smpSessionsUsed?: number; 
  public get smpSessionsUsed() {
    return this.getNumberAttribute('smp_sessions_used');
  }
  public set smpSessionsUsed(value: number) {
    this._smpSessionsUsed = value;
  }
  public resetSmpSessionsUsed() {
    this._smpSessionsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpSessionsUsedInput() {
    return this._smpSessionsUsed;
  }

  // tcp_nat_ports_free - computed: false, optional: true, required: false
  private _tcpNatPortsFree?: number; 
  public get tcpNatPortsFree() {
    return this.getNumberAttribute('tcp_nat_ports_free');
  }
  public set tcpNatPortsFree(value: number) {
    this._tcpNatPortsFree = value;
  }
  public resetTcpNatPortsFree() {
    this._tcpNatPortsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNatPortsFreeInput() {
    return this._tcpNatPortsFree;
  }

  // tcp_nat_ports_used - computed: false, optional: true, required: false
  private _tcpNatPortsUsed?: number; 
  public get tcpNatPortsUsed() {
    return this.getNumberAttribute('tcp_nat_ports_used');
  }
  public set tcpNatPortsUsed(value: number) {
    this._tcpNatPortsUsed = value;
  }
  public resetTcpNatPortsUsed() {
    this._tcpNatPortsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNatPortsUsedInput() {
    return this._tcpNatPortsUsed;
  }

  // udp_nat_ports_free - computed: false, optional: true, required: false
  private _udpNatPortsFree?: number; 
  public get udpNatPortsFree() {
    return this.getNumberAttribute('udp_nat_ports_free');
  }
  public set udpNatPortsFree(value: number) {
    this._udpNatPortsFree = value;
  }
  public resetUdpNatPortsFree() {
    this._udpNatPortsFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNatPortsFreeInput() {
    return this._udpNatPortsFree;
  }

  // udp_nat_ports_used - computed: false, optional: true, required: false
  private _udpNatPortsUsed?: number; 
  public get udpNatPortsUsed() {
    return this.getNumberAttribute('udp_nat_ports_used');
  }
  public set udpNatPortsUsed(value: number) {
    this._udpNatPortsUsed = value;
  }
  public resetUdpNatPortsUsed() {
    this._udpNatPortsUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNatPortsUsedInput() {
    return this._udpNatPortsUsed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper thunder_cgnv6_lsn_system_status_oper}
*/
export class DataThunderCgnv6LsnSystemStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_system_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnSystemStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnSystemStatusOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnSystemStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnSystemStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_system_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_system_status_oper thunder_cgnv6_lsn_system_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnSystemStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnSystemStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_system_status_oper',
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
  private _oper = new DataThunderCgnv6LsnSystemStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnSystemStatusOperOper) {
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
      oper: dataThunderCgnv6LsnSystemStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LsnSystemStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnSystemStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
