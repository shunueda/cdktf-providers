// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#anomaly_mode IpsGlobal#anomaly_mode}
  */
  readonly anomalyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#av_mem_limit IpsGlobal#av_mem_limit}
  */
  readonly avMemLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#cp_accel_mode IpsGlobal#cp_accel_mode}
  */
  readonly cpAccelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#database IpsGlobal#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#deep_app_insp_db_limit IpsGlobal#deep_app_insp_db_limit}
  */
  readonly deepAppInspDbLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#deep_app_insp_timeout IpsGlobal#deep_app_insp_timeout}
  */
  readonly deepAppInspTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#engine_count IpsGlobal#engine_count}
  */
  readonly engineCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#exclude_signatures IpsGlobal#exclude_signatures}
  */
  readonly excludeSignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#fail_open IpsGlobal#fail_open}
  */
  readonly failOpen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#get_all_tables IpsGlobal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#id IpsGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#intelligent_mode IpsGlobal#intelligent_mode}
  */
  readonly intelligentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#ips_reserve_cpu IpsGlobal#ips_reserve_cpu}
  */
  readonly ipsReserveCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#machine_learning_detection IpsGlobal#machine_learning_detection}
  */
  readonly machineLearningDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#ngfw_max_scan_range IpsGlobal#ngfw_max_scan_range}
  */
  readonly ngfwMaxScanRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#np_accel_mode IpsGlobal#np_accel_mode}
  */
  readonly npAccelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#packet_log_queue_depth IpsGlobal#packet_log_queue_depth}
  */
  readonly packetLogQueueDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#session_limit_mode IpsGlobal#session_limit_mode}
  */
  readonly sessionLimitMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#skype_client_public_ipaddr IpsGlobal#skype_client_public_ipaddr}
  */
  readonly skypeClientPublicIpaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#socket_size IpsGlobal#socket_size}
  */
  readonly socketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#sync_session_ttl IpsGlobal#sync_session_ttl}
  */
  readonly syncSessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#traffic_submit IpsGlobal#traffic_submit}
  */
  readonly trafficSubmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#vdomparam IpsGlobal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * tls_active_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#tls_active_probe IpsGlobal#tls_active_probe}
  */
  readonly tlsActiveProbe?: IpsGlobalTlsActiveProbe;
}
export interface IpsGlobalTlsActiveProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#interface IpsGlobal#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#interface_select_method IpsGlobal#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#source_ip IpsGlobal#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#source_ip6 IpsGlobal#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#vdom IpsGlobal#vdom}
  */
  readonly vdom?: string;
}

export function ipsGlobalTlsActiveProbeToTerraform(struct?: IpsGlobalTlsActiveProbeOutputReference | IpsGlobalTlsActiveProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip6: cdktf.stringToTerraform(struct!.sourceIp6),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function ipsGlobalTlsActiveProbeToHclTerraform(struct?: IpsGlobalTlsActiveProbeOutputReference | IpsGlobalTlsActiveProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip6: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsGlobalTlsActiveProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpsGlobalTlsActiveProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp6 = this._sourceIp6;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsGlobalTlsActiveProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._sourceIp = undefined;
      this._sourceIp6 = undefined;
      this._vdom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._sourceIp = value.sourceIp;
      this._sourceIp6 = value.sourceIp6;
      this._vdom = value.vdom;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global fortios_ips_global}
*/
export class IpsGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ips_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsGlobal to import
  * @param importFromId The id of the existing IpsGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ips_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ips_global fortios_ips_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpsGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ips_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anomalyMode = config.anomalyMode;
    this._avMemLimit = config.avMemLimit;
    this._cpAccelMode = config.cpAccelMode;
    this._database = config.database;
    this._deepAppInspDbLimit = config.deepAppInspDbLimit;
    this._deepAppInspTimeout = config.deepAppInspTimeout;
    this._engineCount = config.engineCount;
    this._excludeSignatures = config.excludeSignatures;
    this._failOpen = config.failOpen;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._intelligentMode = config.intelligentMode;
    this._ipsReserveCpu = config.ipsReserveCpu;
    this._machineLearningDetection = config.machineLearningDetection;
    this._ngfwMaxScanRange = config.ngfwMaxScanRange;
    this._npAccelMode = config.npAccelMode;
    this._packetLogQueueDepth = config.packetLogQueueDepth;
    this._sessionLimitMode = config.sessionLimitMode;
    this._skypeClientPublicIpaddr = config.skypeClientPublicIpaddr;
    this._socketSize = config.socketSize;
    this._syncSessionTtl = config.syncSessionTtl;
    this._trafficSubmit = config.trafficSubmit;
    this._vdomparam = config.vdomparam;
    this._tlsActiveProbe.internalValue = config.tlsActiveProbe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_mode - computed: true, optional: true, required: false
  private _anomalyMode?: string; 
  public get anomalyMode() {
    return this.getStringAttribute('anomaly_mode');
  }
  public set anomalyMode(value: string) {
    this._anomalyMode = value;
  }
  public resetAnomalyMode() {
    this._anomalyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyModeInput() {
    return this._anomalyMode;
  }

  // av_mem_limit - computed: false, optional: true, required: false
  private _avMemLimit?: number; 
  public get avMemLimit() {
    return this.getNumberAttribute('av_mem_limit');
  }
  public set avMemLimit(value: number) {
    this._avMemLimit = value;
  }
  public resetAvMemLimit() {
    this._avMemLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avMemLimitInput() {
    return this._avMemLimit;
  }

  // cp_accel_mode - computed: true, optional: true, required: false
  private _cpAccelMode?: string; 
  public get cpAccelMode() {
    return this.getStringAttribute('cp_accel_mode');
  }
  public set cpAccelMode(value: string) {
    this._cpAccelMode = value;
  }
  public resetCpAccelMode() {
    this._cpAccelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpAccelModeInput() {
    return this._cpAccelMode;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // deep_app_insp_db_limit - computed: false, optional: true, required: false
  private _deepAppInspDbLimit?: number; 
  public get deepAppInspDbLimit() {
    return this.getNumberAttribute('deep_app_insp_db_limit');
  }
  public set deepAppInspDbLimit(value: number) {
    this._deepAppInspDbLimit = value;
  }
  public resetDeepAppInspDbLimit() {
    this._deepAppInspDbLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepAppInspDbLimitInput() {
    return this._deepAppInspDbLimit;
  }

  // deep_app_insp_timeout - computed: false, optional: true, required: false
  private _deepAppInspTimeout?: number; 
  public get deepAppInspTimeout() {
    return this.getNumberAttribute('deep_app_insp_timeout');
  }
  public set deepAppInspTimeout(value: number) {
    this._deepAppInspTimeout = value;
  }
  public resetDeepAppInspTimeout() {
    this._deepAppInspTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepAppInspTimeoutInput() {
    return this._deepAppInspTimeout;
  }

  // engine_count - computed: false, optional: true, required: false
  private _engineCount?: number; 
  public get engineCount() {
    return this.getNumberAttribute('engine_count');
  }
  public set engineCount(value: number) {
    this._engineCount = value;
  }
  public resetEngineCount() {
    this._engineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineCountInput() {
    return this._engineCount;
  }

  // exclude_signatures - computed: true, optional: true, required: false
  private _excludeSignatures?: string; 
  public get excludeSignatures() {
    return this.getStringAttribute('exclude_signatures');
  }
  public set excludeSignatures(value: string) {
    this._excludeSignatures = value;
  }
  public resetExcludeSignatures() {
    this._excludeSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignaturesInput() {
    return this._excludeSignatures;
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: string; 
  public get failOpen() {
    return this.getStringAttribute('fail_open');
  }
  public set failOpen(value: string) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
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

  // intelligent_mode - computed: false, optional: true, required: false
  private _intelligentMode?: string; 
  public get intelligentMode() {
    return this.getStringAttribute('intelligent_mode');
  }
  public set intelligentMode(value: string) {
    this._intelligentMode = value;
  }
  public resetIntelligentMode() {
    this._intelligentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentModeInput() {
    return this._intelligentMode;
  }

  // ips_reserve_cpu - computed: true, optional: true, required: false
  private _ipsReserveCpu?: string; 
  public get ipsReserveCpu() {
    return this.getStringAttribute('ips_reserve_cpu');
  }
  public set ipsReserveCpu(value: string) {
    this._ipsReserveCpu = value;
  }
  public resetIpsReserveCpu() {
    this._ipsReserveCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsReserveCpuInput() {
    return this._ipsReserveCpu;
  }

  // machine_learning_detection - computed: true, optional: true, required: false
  private _machineLearningDetection?: string; 
  public get machineLearningDetection() {
    return this.getStringAttribute('machine_learning_detection');
  }
  public set machineLearningDetection(value: string) {
    this._machineLearningDetection = value;
  }
  public resetMachineLearningDetection() {
    this._machineLearningDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningDetectionInput() {
    return this._machineLearningDetection;
  }

  // ngfw_max_scan_range - computed: true, optional: true, required: false
  private _ngfwMaxScanRange?: number; 
  public get ngfwMaxScanRange() {
    return this.getNumberAttribute('ngfw_max_scan_range');
  }
  public set ngfwMaxScanRange(value: number) {
    this._ngfwMaxScanRange = value;
  }
  public resetNgfwMaxScanRange() {
    this._ngfwMaxScanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwMaxScanRangeInput() {
    return this._ngfwMaxScanRange;
  }

  // np_accel_mode - computed: true, optional: true, required: false
  private _npAccelMode?: string; 
  public get npAccelMode() {
    return this.getStringAttribute('np_accel_mode');
  }
  public set npAccelMode(value: string) {
    this._npAccelMode = value;
  }
  public resetNpAccelMode() {
    this._npAccelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npAccelModeInput() {
    return this._npAccelMode;
  }

  // packet_log_queue_depth - computed: true, optional: true, required: false
  private _packetLogQueueDepth?: number; 
  public get packetLogQueueDepth() {
    return this.getNumberAttribute('packet_log_queue_depth');
  }
  public set packetLogQueueDepth(value: number) {
    this._packetLogQueueDepth = value;
  }
  public resetPacketLogQueueDepth() {
    this._packetLogQueueDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLogQueueDepthInput() {
    return this._packetLogQueueDepth;
  }

  // session_limit_mode - computed: true, optional: true, required: false
  private _sessionLimitMode?: string; 
  public get sessionLimitMode() {
    return this.getStringAttribute('session_limit_mode');
  }
  public set sessionLimitMode(value: string) {
    this._sessionLimitMode = value;
  }
  public resetSessionLimitMode() {
    this._sessionLimitMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLimitModeInput() {
    return this._sessionLimitMode;
  }

  // skype_client_public_ipaddr - computed: false, optional: true, required: false
  private _skypeClientPublicIpaddr?: string; 
  public get skypeClientPublicIpaddr() {
    return this.getStringAttribute('skype_client_public_ipaddr');
  }
  public set skypeClientPublicIpaddr(value: string) {
    this._skypeClientPublicIpaddr = value;
  }
  public resetSkypeClientPublicIpaddr() {
    this._skypeClientPublicIpaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skypeClientPublicIpaddrInput() {
    return this._skypeClientPublicIpaddr;
  }

  // socket_size - computed: true, optional: true, required: false
  private _socketSize?: number; 
  public get socketSize() {
    return this.getNumberAttribute('socket_size');
  }
  public set socketSize(value: number) {
    this._socketSize = value;
  }
  public resetSocketSize() {
    this._socketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketSizeInput() {
    return this._socketSize;
  }

  // sync_session_ttl - computed: true, optional: true, required: false
  private _syncSessionTtl?: string; 
  public get syncSessionTtl() {
    return this.getStringAttribute('sync_session_ttl');
  }
  public set syncSessionTtl(value: string) {
    this._syncSessionTtl = value;
  }
  public resetSyncSessionTtl() {
    this._syncSessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSessionTtlInput() {
    return this._syncSessionTtl;
  }

  // traffic_submit - computed: true, optional: true, required: false
  private _trafficSubmit?: string; 
  public get trafficSubmit() {
    return this.getStringAttribute('traffic_submit');
  }
  public set trafficSubmit(value: string) {
    this._trafficSubmit = value;
  }
  public resetTrafficSubmit() {
    this._trafficSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSubmitInput() {
    return this._trafficSubmit;
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

  // tls_active_probe - computed: false, optional: true, required: false
  private _tlsActiveProbe = new IpsGlobalTlsActiveProbeOutputReference(this, "tls_active_probe");
  public get tlsActiveProbe() {
    return this._tlsActiveProbe;
  }
  public putTlsActiveProbe(value: IpsGlobalTlsActiveProbe) {
    this._tlsActiveProbe.internalValue = value;
  }
  public resetTlsActiveProbe() {
    this._tlsActiveProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsActiveProbeInput() {
    return this._tlsActiveProbe.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_mode: cdktf.stringToTerraform(this._anomalyMode),
      av_mem_limit: cdktf.numberToTerraform(this._avMemLimit),
      cp_accel_mode: cdktf.stringToTerraform(this._cpAccelMode),
      database: cdktf.stringToTerraform(this._database),
      deep_app_insp_db_limit: cdktf.numberToTerraform(this._deepAppInspDbLimit),
      deep_app_insp_timeout: cdktf.numberToTerraform(this._deepAppInspTimeout),
      engine_count: cdktf.numberToTerraform(this._engineCount),
      exclude_signatures: cdktf.stringToTerraform(this._excludeSignatures),
      fail_open: cdktf.stringToTerraform(this._failOpen),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      intelligent_mode: cdktf.stringToTerraform(this._intelligentMode),
      ips_reserve_cpu: cdktf.stringToTerraform(this._ipsReserveCpu),
      machine_learning_detection: cdktf.stringToTerraform(this._machineLearningDetection),
      ngfw_max_scan_range: cdktf.numberToTerraform(this._ngfwMaxScanRange),
      np_accel_mode: cdktf.stringToTerraform(this._npAccelMode),
      packet_log_queue_depth: cdktf.numberToTerraform(this._packetLogQueueDepth),
      session_limit_mode: cdktf.stringToTerraform(this._sessionLimitMode),
      skype_client_public_ipaddr: cdktf.stringToTerraform(this._skypeClientPublicIpaddr),
      socket_size: cdktf.numberToTerraform(this._socketSize),
      sync_session_ttl: cdktf.stringToTerraform(this._syncSessionTtl),
      traffic_submit: cdktf.stringToTerraform(this._trafficSubmit),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      tls_active_probe: ipsGlobalTlsActiveProbeToTerraform(this._tlsActiveProbe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly_mode: {
        value: cdktf.stringToHclTerraform(this._anomalyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_mem_limit: {
        value: cdktf.numberToHclTerraform(this._avMemLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cp_accel_mode: {
        value: cdktf.stringToHclTerraform(this._cpAccelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_app_insp_db_limit: {
        value: cdktf.numberToHclTerraform(this._deepAppInspDbLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deep_app_insp_timeout: {
        value: cdktf.numberToHclTerraform(this._deepAppInspTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_count: {
        value: cdktf.numberToHclTerraform(this._engineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_signatures: {
        value: cdktf.stringToHclTerraform(this._excludeSignatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_open: {
        value: cdktf.stringToHclTerraform(this._failOpen),
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
      intelligent_mode: {
        value: cdktf.stringToHclTerraform(this._intelligentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_reserve_cpu: {
        value: cdktf.stringToHclTerraform(this._ipsReserveCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_learning_detection: {
        value: cdktf.stringToHclTerraform(this._machineLearningDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ngfw_max_scan_range: {
        value: cdktf.numberToHclTerraform(this._ngfwMaxScanRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      np_accel_mode: {
        value: cdktf.stringToHclTerraform(this._npAccelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_log_queue_depth: {
        value: cdktf.numberToHclTerraform(this._packetLogQueueDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_limit_mode: {
        value: cdktf.stringToHclTerraform(this._sessionLimitMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skype_client_public_ipaddr: {
        value: cdktf.stringToHclTerraform(this._skypeClientPublicIpaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socket_size: {
        value: cdktf.numberToHclTerraform(this._socketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_session_ttl: {
        value: cdktf.stringToHclTerraform(this._syncSessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_submit: {
        value: cdktf.stringToHclTerraform(this._trafficSubmit),
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
      tls_active_probe: {
        value: ipsGlobalTlsActiveProbeToHclTerraform(this._tlsActiveProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpsGlobalTlsActiveProbeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
