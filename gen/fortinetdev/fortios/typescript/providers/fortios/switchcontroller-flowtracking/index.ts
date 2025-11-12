// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerFlowtrackingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#collector_ip SwitchcontrollerFlowtracking#collector_ip}
  */
  readonly collectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#collector_port SwitchcontrollerFlowtracking#collector_port}
  */
  readonly collectorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#dynamic_sort_subtable SwitchcontrollerFlowtracking#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#format SwitchcontrollerFlowtracking#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#get_all_tables SwitchcontrollerFlowtracking#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#id SwitchcontrollerFlowtracking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#level SwitchcontrollerFlowtracking#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#max_export_pkt_size SwitchcontrollerFlowtracking#max_export_pkt_size}
  */
  readonly maxExportPktSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#sample_mode SwitchcontrollerFlowtracking#sample_mode}
  */
  readonly sampleMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#sample_rate SwitchcontrollerFlowtracking#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#template_export_period SwitchcontrollerFlowtracking#template_export_period}
  */
  readonly templateExportPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_general SwitchcontrollerFlowtracking#timeout_general}
  */
  readonly timeoutGeneral?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_icmp SwitchcontrollerFlowtracking#timeout_icmp}
  */
  readonly timeoutIcmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_max SwitchcontrollerFlowtracking#timeout_max}
  */
  readonly timeoutMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_tcp SwitchcontrollerFlowtracking#timeout_tcp}
  */
  readonly timeoutTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_tcp_fin SwitchcontrollerFlowtracking#timeout_tcp_fin}
  */
  readonly timeoutTcpFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_tcp_rst SwitchcontrollerFlowtracking#timeout_tcp_rst}
  */
  readonly timeoutTcpRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#timeout_udp SwitchcontrollerFlowtracking#timeout_udp}
  */
  readonly timeoutUdp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#transport SwitchcontrollerFlowtracking#transport}
  */
  readonly transport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#vdomparam SwitchcontrollerFlowtracking#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * aggregates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#aggregates SwitchcontrollerFlowtracking#aggregates}
  */
  readonly aggregates?: SwitchcontrollerFlowtrackingAggregates[] | cdktf.IResolvable;
  /**
  * collectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#collectors SwitchcontrollerFlowtracking#collectors}
  */
  readonly collectors?: SwitchcontrollerFlowtrackingCollectors[] | cdktf.IResolvable;
}
export interface SwitchcontrollerFlowtrackingAggregates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#id SwitchcontrollerFlowtracking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#ip SwitchcontrollerFlowtracking#ip}
  */
  readonly ip?: string;
}

export function switchcontrollerFlowtrackingAggregatesToTerraform(struct?: SwitchcontrollerFlowtrackingAggregates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function switchcontrollerFlowtrackingAggregatesToHclTerraform(struct?: SwitchcontrollerFlowtrackingAggregates | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerFlowtrackingAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerFlowtrackingAggregates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerFlowtrackingAggregates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
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

  // ip - computed: true, optional: true, required: false
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
}

export class SwitchcontrollerFlowtrackingAggregatesList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerFlowtrackingAggregates[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerFlowtrackingAggregatesOutputReference {
    return new SwitchcontrollerFlowtrackingAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerFlowtrackingCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#ip SwitchcontrollerFlowtracking#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#name SwitchcontrollerFlowtracking#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#port SwitchcontrollerFlowtracking#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#transport SwitchcontrollerFlowtracking#transport}
  */
  readonly transport?: string;
}

export function switchcontrollerFlowtrackingCollectorsToTerraform(struct?: SwitchcontrollerFlowtrackingCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    transport: cdktf.stringToTerraform(struct!.transport),
  }
}


export function switchcontrollerFlowtrackingCollectorsToHclTerraform(struct?: SwitchcontrollerFlowtrackingCollectors | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerFlowtrackingCollectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerFlowtrackingCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerFlowtrackingCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._name = undefined;
      this._port = undefined;
      this._transport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._name = value.name;
      this._port = value.port;
      this._transport = value.transport;
    }
  }

  // ip - computed: true, optional: true, required: false
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

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }
}

export class SwitchcontrollerFlowtrackingCollectorsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerFlowtrackingCollectors[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerFlowtrackingCollectorsOutputReference {
    return new SwitchcontrollerFlowtrackingCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking fortios_switchcontroller_flowtracking}
*/
export class SwitchcontrollerFlowtracking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_flowtracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerFlowtracking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerFlowtracking to import
  * @param importFromId The id of the existing SwitchcontrollerFlowtracking that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerFlowtracking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_flowtracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_flowtracking fortios_switchcontroller_flowtracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerFlowtrackingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerFlowtrackingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_flowtracking',
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
    this._collectorIp = config.collectorIp;
    this._collectorPort = config.collectorPort;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._format = config.format;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._level = config.level;
    this._maxExportPktSize = config.maxExportPktSize;
    this._sampleMode = config.sampleMode;
    this._sampleRate = config.sampleRate;
    this._templateExportPeriod = config.templateExportPeriod;
    this._timeoutGeneral = config.timeoutGeneral;
    this._timeoutIcmp = config.timeoutIcmp;
    this._timeoutMax = config.timeoutMax;
    this._timeoutTcp = config.timeoutTcp;
    this._timeoutTcpFin = config.timeoutTcpFin;
    this._timeoutTcpRst = config.timeoutTcpRst;
    this._timeoutUdp = config.timeoutUdp;
    this._transport = config.transport;
    this._vdomparam = config.vdomparam;
    this._aggregates.internalValue = config.aggregates;
    this._collectors.internalValue = config.collectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_ip - computed: true, optional: true, required: false
  private _collectorIp?: string; 
  public get collectorIp() {
    return this.getStringAttribute('collector_ip');
  }
  public set collectorIp(value: string) {
    this._collectorIp = value;
  }
  public resetCollectorIp() {
    this._collectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIpInput() {
    return this._collectorIp;
  }

  // collector_port - computed: false, optional: true, required: false
  private _collectorPort?: number; 
  public get collectorPort() {
    return this.getNumberAttribute('collector_port');
  }
  public set collectorPort(value: number) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
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

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // max_export_pkt_size - computed: true, optional: true, required: false
  private _maxExportPktSize?: number; 
  public get maxExportPktSize() {
    return this.getNumberAttribute('max_export_pkt_size');
  }
  public set maxExportPktSize(value: number) {
    this._maxExportPktSize = value;
  }
  public resetMaxExportPktSize() {
    this._maxExportPktSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExportPktSizeInput() {
    return this._maxExportPktSize;
  }

  // sample_mode - computed: true, optional: true, required: false
  private _sampleMode?: string; 
  public get sampleMode() {
    return this.getStringAttribute('sample_mode');
  }
  public set sampleMode(value: string) {
    this._sampleMode = value;
  }
  public resetSampleMode() {
    this._sampleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleModeInput() {
    return this._sampleMode;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // template_export_period - computed: true, optional: true, required: false
  private _templateExportPeriod?: number; 
  public get templateExportPeriod() {
    return this.getNumberAttribute('template_export_period');
  }
  public set templateExportPeriod(value: number) {
    this._templateExportPeriod = value;
  }
  public resetTemplateExportPeriod() {
    this._templateExportPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateExportPeriodInput() {
    return this._templateExportPeriod;
  }

  // timeout_general - computed: true, optional: true, required: false
  private _timeoutGeneral?: number; 
  public get timeoutGeneral() {
    return this.getNumberAttribute('timeout_general');
  }
  public set timeoutGeneral(value: number) {
    this._timeoutGeneral = value;
  }
  public resetTimeoutGeneral() {
    this._timeoutGeneral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutGeneralInput() {
    return this._timeoutGeneral;
  }

  // timeout_icmp - computed: true, optional: true, required: false
  private _timeoutIcmp?: number; 
  public get timeoutIcmp() {
    return this.getNumberAttribute('timeout_icmp');
  }
  public set timeoutIcmp(value: number) {
    this._timeoutIcmp = value;
  }
  public resetTimeoutIcmp() {
    this._timeoutIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutIcmpInput() {
    return this._timeoutIcmp;
  }

  // timeout_max - computed: true, optional: true, required: false
  private _timeoutMax?: number; 
  public get timeoutMax() {
    return this.getNumberAttribute('timeout_max');
  }
  public set timeoutMax(value: number) {
    this._timeoutMax = value;
  }
  public resetTimeoutMax() {
    this._timeoutMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMaxInput() {
    return this._timeoutMax;
  }

  // timeout_tcp - computed: true, optional: true, required: false
  private _timeoutTcp?: number; 
  public get timeoutTcp() {
    return this.getNumberAttribute('timeout_tcp');
  }
  public set timeoutTcp(value: number) {
    this._timeoutTcp = value;
  }
  public resetTimeoutTcp() {
    this._timeoutTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpInput() {
    return this._timeoutTcp;
  }

  // timeout_tcp_fin - computed: true, optional: true, required: false
  private _timeoutTcpFin?: number; 
  public get timeoutTcpFin() {
    return this.getNumberAttribute('timeout_tcp_fin');
  }
  public set timeoutTcpFin(value: number) {
    this._timeoutTcpFin = value;
  }
  public resetTimeoutTcpFin() {
    this._timeoutTcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpFinInput() {
    return this._timeoutTcpFin;
  }

  // timeout_tcp_rst - computed: true, optional: true, required: false
  private _timeoutTcpRst?: number; 
  public get timeoutTcpRst() {
    return this.getNumberAttribute('timeout_tcp_rst');
  }
  public set timeoutTcpRst(value: number) {
    this._timeoutTcpRst = value;
  }
  public resetTimeoutTcpRst() {
    this._timeoutTcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpRstInput() {
    return this._timeoutTcpRst;
  }

  // timeout_udp - computed: true, optional: true, required: false
  private _timeoutUdp?: number; 
  public get timeoutUdp() {
    return this.getNumberAttribute('timeout_udp');
  }
  public set timeoutUdp(value: number) {
    this._timeoutUdp = value;
  }
  public resetTimeoutUdp() {
    this._timeoutUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutUdpInput() {
    return this._timeoutUdp;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
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

  // aggregates - computed: false, optional: true, required: false
  private _aggregates = new SwitchcontrollerFlowtrackingAggregatesList(this, "aggregates", false);
  public get aggregates() {
    return this._aggregates;
  }
  public putAggregates(value: SwitchcontrollerFlowtrackingAggregates[] | cdktf.IResolvable) {
    this._aggregates.internalValue = value;
  }
  public resetAggregates() {
    this._aggregates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates.internalValue;
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new SwitchcontrollerFlowtrackingCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: SwitchcontrollerFlowtrackingCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_ip: cdktf.stringToTerraform(this._collectorIp),
      collector_port: cdktf.numberToTerraform(this._collectorPort),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      format: cdktf.stringToTerraform(this._format),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      max_export_pkt_size: cdktf.numberToTerraform(this._maxExportPktSize),
      sample_mode: cdktf.stringToTerraform(this._sampleMode),
      sample_rate: cdktf.numberToTerraform(this._sampleRate),
      template_export_period: cdktf.numberToTerraform(this._templateExportPeriod),
      timeout_general: cdktf.numberToTerraform(this._timeoutGeneral),
      timeout_icmp: cdktf.numberToTerraform(this._timeoutIcmp),
      timeout_max: cdktf.numberToTerraform(this._timeoutMax),
      timeout_tcp: cdktf.numberToTerraform(this._timeoutTcp),
      timeout_tcp_fin: cdktf.numberToTerraform(this._timeoutTcpFin),
      timeout_tcp_rst: cdktf.numberToTerraform(this._timeoutTcpRst),
      timeout_udp: cdktf.numberToTerraform(this._timeoutUdp),
      transport: cdktf.stringToTerraform(this._transport),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      aggregates: cdktf.listMapper(switchcontrollerFlowtrackingAggregatesToTerraform, true)(this._aggregates.internalValue),
      collectors: cdktf.listMapper(switchcontrollerFlowtrackingCollectorsToTerraform, true)(this._collectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_ip: {
        value: cdktf.stringToHclTerraform(this._collectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_port: {
        value: cdktf.numberToHclTerraform(this._collectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_export_pkt_size: {
        value: cdktf.numberToHclTerraform(this._maxExportPktSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_mode: {
        value: cdktf.stringToHclTerraform(this._sampleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_rate: {
        value: cdktf.numberToHclTerraform(this._sampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_export_period: {
        value: cdktf.numberToHclTerraform(this._templateExportPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_general: {
        value: cdktf.numberToHclTerraform(this._timeoutGeneral),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_icmp: {
        value: cdktf.numberToHclTerraform(this._timeoutIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_max: {
        value: cdktf.numberToHclTerraform(this._timeoutMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_tcp: {
        value: cdktf.numberToHclTerraform(this._timeoutTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_tcp_fin: {
        value: cdktf.numberToHclTerraform(this._timeoutTcpFin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_tcp_rst: {
        value: cdktf.numberToHclTerraform(this._timeoutTcpRst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_udp: {
        value: cdktf.numberToHclTerraform(this._timeoutUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregates: {
        value: cdktf.listMapperHcl(switchcontrollerFlowtrackingAggregatesToHclTerraform, true)(this._aggregates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerFlowtrackingAggregatesList",
      },
      collectors: {
        value: cdktf.listMapperHcl(switchcontrollerFlowtrackingCollectorsToHclTerraform, true)(this._collectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerFlowtrackingCollectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
