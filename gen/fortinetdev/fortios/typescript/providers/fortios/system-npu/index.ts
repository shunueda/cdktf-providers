// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNpuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#capwap_offload SystemNpu#capwap_offload}
  */
  readonly capwapOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#dedicated_management_affinity SystemNpu#dedicated_management_affinity}
  */
  readonly dedicatedManagementAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#dedicated_management_cpu SystemNpu#dedicated_management_cpu}
  */
  readonly dedicatedManagementCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#fastpath SystemNpu#fastpath}
  */
  readonly fastpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#get_all_tables SystemNpu#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#id SystemNpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#ipsec_dec_subengine_mask SystemNpu#ipsec_dec_subengine_mask}
  */
  readonly ipsecDecSubengineMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#ipsec_enc_subengine_mask SystemNpu#ipsec_enc_subengine_mask}
  */
  readonly ipsecEncSubengineMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#ipsec_inbound_cache SystemNpu#ipsec_inbound_cache}
  */
  readonly ipsecInboundCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#ipsec_mtu_override SystemNpu#ipsec_mtu_override}
  */
  readonly ipsecMtuOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#ipsec_over_vlink SystemNpu#ipsec_over_vlink}
  */
  readonly ipsecOverVlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#mcast_session_accounting SystemNpu#mcast_session_accounting}
  */
  readonly mcastSessionAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#np6_cps_optimization_mode SystemNpu#np6_cps_optimization_mode}
  */
  readonly np6CpsOptimizationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#rdp_offload SystemNpu#rdp_offload}
  */
  readonly rdpOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#session_denied_offload SystemNpu#session_denied_offload}
  */
  readonly sessionDeniedOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#sse_backpressure SystemNpu#sse_backpressure}
  */
  readonly sseBackpressure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#strip_clear_text_padding SystemNpu#strip_clear_text_padding}
  */
  readonly stripClearTextPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#strip_esp_padding SystemNpu#strip_esp_padding}
  */
  readonly stripEspPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#sw_np_bandwidth SystemNpu#sw_np_bandwidth}
  */
  readonly swNpBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#uesp_offload SystemNpu#uesp_offload}
  */
  readonly uespOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#vdomparam SystemNpu#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * priority_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#priority_protocol SystemNpu#priority_protocol}
  */
  readonly priorityProtocol?: SystemNpuPriorityProtocol;
}
export interface SystemNpuPriorityProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#bfd SystemNpu#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#bgp SystemNpu#bgp}
  */
  readonly bgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#slbc SystemNpu#slbc}
  */
  readonly slbc?: string;
}

export function systemNpuPriorityProtocolToTerraform(struct?: SystemNpuPriorityProtocolOutputReference | SystemNpuPriorityProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bgp: cdktf.stringToTerraform(struct!.bgp),
    slbc: cdktf.stringToTerraform(struct!.slbc),
  }
}


export function systemNpuPriorityProtocolToHclTerraform(struct?: SystemNpuPriorityProtocolOutputReference | SystemNpuPriorityProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp: {
      value: cdktf.stringToHclTerraform(struct!.bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slbc: {
      value: cdktf.stringToHclTerraform(struct!.slbc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNpuPriorityProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemNpuPriorityProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._slbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbc = this._slbc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNpuPriorityProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._bgp = undefined;
      this._slbc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._bgp = value.bgp;
      this._slbc = value.slbc;
    }
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bgp - computed: true, optional: true, required: false
  private _bgp?: string; 
  public get bgp() {
    return this.getStringAttribute('bgp');
  }
  public set bgp(value: string) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // slbc - computed: true, optional: true, required: false
  private _slbc?: string; 
  public get slbc() {
    return this.getStringAttribute('slbc');
  }
  public set slbc(value: string) {
    this._slbc = value;
  }
  public resetSlbc() {
    this._slbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbcInput() {
    return this._slbc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu fortios_system_npu}
*/
export class SystemNpu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_npu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNpu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNpu to import
  * @param importFromId The id of the existing SystemNpu that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNpu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_npu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_npu fortios_system_npu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNpuConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNpuConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_npu',
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
    this._capwapOffload = config.capwapOffload;
    this._dedicatedManagementAffinity = config.dedicatedManagementAffinity;
    this._dedicatedManagementCpu = config.dedicatedManagementCpu;
    this._fastpath = config.fastpath;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipsecDecSubengineMask = config.ipsecDecSubengineMask;
    this._ipsecEncSubengineMask = config.ipsecEncSubengineMask;
    this._ipsecInboundCache = config.ipsecInboundCache;
    this._ipsecMtuOverride = config.ipsecMtuOverride;
    this._ipsecOverVlink = config.ipsecOverVlink;
    this._mcastSessionAccounting = config.mcastSessionAccounting;
    this._np6CpsOptimizationMode = config.np6CpsOptimizationMode;
    this._rdpOffload = config.rdpOffload;
    this._sessionDeniedOffload = config.sessionDeniedOffload;
    this._sseBackpressure = config.sseBackpressure;
    this._stripClearTextPadding = config.stripClearTextPadding;
    this._stripEspPadding = config.stripEspPadding;
    this._swNpBandwidth = config.swNpBandwidth;
    this._uespOffload = config.uespOffload;
    this._vdomparam = config.vdomparam;
    this._priorityProtocol.internalValue = config.priorityProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capwap_offload - computed: true, optional: true, required: false
  private _capwapOffload?: string; 
  public get capwapOffload() {
    return this.getStringAttribute('capwap_offload');
  }
  public set capwapOffload(value: string) {
    this._capwapOffload = value;
  }
  public resetCapwapOffload() {
    this._capwapOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapOffloadInput() {
    return this._capwapOffload;
  }

  // dedicated_management_affinity - computed: true, optional: true, required: false
  private _dedicatedManagementAffinity?: string; 
  public get dedicatedManagementAffinity() {
    return this.getStringAttribute('dedicated_management_affinity');
  }
  public set dedicatedManagementAffinity(value: string) {
    this._dedicatedManagementAffinity = value;
  }
  public resetDedicatedManagementAffinity() {
    this._dedicatedManagementAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementAffinityInput() {
    return this._dedicatedManagementAffinity;
  }

  // dedicated_management_cpu - computed: true, optional: true, required: false
  private _dedicatedManagementCpu?: string; 
  public get dedicatedManagementCpu() {
    return this.getStringAttribute('dedicated_management_cpu');
  }
  public set dedicatedManagementCpu(value: string) {
    this._dedicatedManagementCpu = value;
  }
  public resetDedicatedManagementCpu() {
    this._dedicatedManagementCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedManagementCpuInput() {
    return this._dedicatedManagementCpu;
  }

  // fastpath - computed: true, optional: true, required: false
  private _fastpath?: string; 
  public get fastpath() {
    return this.getStringAttribute('fastpath');
  }
  public set fastpath(value: string) {
    this._fastpath = value;
  }
  public resetFastpath() {
    this._fastpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastpathInput() {
    return this._fastpath;
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

  // ipsec_dec_subengine_mask - computed: false, optional: true, required: false
  private _ipsecDecSubengineMask?: string; 
  public get ipsecDecSubengineMask() {
    return this.getStringAttribute('ipsec_dec_subengine_mask');
  }
  public set ipsecDecSubengineMask(value: string) {
    this._ipsecDecSubengineMask = value;
  }
  public resetIpsecDecSubengineMask() {
    this._ipsecDecSubengineMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDecSubengineMaskInput() {
    return this._ipsecDecSubengineMask;
  }

  // ipsec_enc_subengine_mask - computed: false, optional: true, required: false
  private _ipsecEncSubengineMask?: string; 
  public get ipsecEncSubengineMask() {
    return this.getStringAttribute('ipsec_enc_subengine_mask');
  }
  public set ipsecEncSubengineMask(value: string) {
    this._ipsecEncSubengineMask = value;
  }
  public resetIpsecEncSubengineMask() {
    this._ipsecEncSubengineMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncSubengineMaskInput() {
    return this._ipsecEncSubengineMask;
  }

  // ipsec_inbound_cache - computed: true, optional: true, required: false
  private _ipsecInboundCache?: string; 
  public get ipsecInboundCache() {
    return this.getStringAttribute('ipsec_inbound_cache');
  }
  public set ipsecInboundCache(value: string) {
    this._ipsecInboundCache = value;
  }
  public resetIpsecInboundCache() {
    this._ipsecInboundCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInboundCacheInput() {
    return this._ipsecInboundCache;
  }

  // ipsec_mtu_override - computed: true, optional: true, required: false
  private _ipsecMtuOverride?: string; 
  public get ipsecMtuOverride() {
    return this.getStringAttribute('ipsec_mtu_override');
  }
  public set ipsecMtuOverride(value: string) {
    this._ipsecMtuOverride = value;
  }
  public resetIpsecMtuOverride() {
    this._ipsecMtuOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecMtuOverrideInput() {
    return this._ipsecMtuOverride;
  }

  // ipsec_over_vlink - computed: true, optional: true, required: false
  private _ipsecOverVlink?: string; 
  public get ipsecOverVlink() {
    return this.getStringAttribute('ipsec_over_vlink');
  }
  public set ipsecOverVlink(value: string) {
    this._ipsecOverVlink = value;
  }
  public resetIpsecOverVlink() {
    this._ipsecOverVlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecOverVlinkInput() {
    return this._ipsecOverVlink;
  }

  // mcast_session_accounting - computed: true, optional: true, required: false
  private _mcastSessionAccounting?: string; 
  public get mcastSessionAccounting() {
    return this.getStringAttribute('mcast_session_accounting');
  }
  public set mcastSessionAccounting(value: string) {
    this._mcastSessionAccounting = value;
  }
  public resetMcastSessionAccounting() {
    this._mcastSessionAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSessionAccountingInput() {
    return this._mcastSessionAccounting;
  }

  // np6_cps_optimization_mode - computed: true, optional: true, required: false
  private _np6CpsOptimizationMode?: string; 
  public get np6CpsOptimizationMode() {
    return this.getStringAttribute('np6_cps_optimization_mode');
  }
  public set np6CpsOptimizationMode(value: string) {
    this._np6CpsOptimizationMode = value;
  }
  public resetNp6CpsOptimizationMode() {
    this._np6CpsOptimizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get np6CpsOptimizationModeInput() {
    return this._np6CpsOptimizationMode;
  }

  // rdp_offload - computed: true, optional: true, required: false
  private _rdpOffload?: string; 
  public get rdpOffload() {
    return this.getStringAttribute('rdp_offload');
  }
  public set rdpOffload(value: string) {
    this._rdpOffload = value;
  }
  public resetRdpOffload() {
    this._rdpOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpOffloadInput() {
    return this._rdpOffload;
  }

  // session_denied_offload - computed: true, optional: true, required: false
  private _sessionDeniedOffload?: string; 
  public get sessionDeniedOffload() {
    return this.getStringAttribute('session_denied_offload');
  }
  public set sessionDeniedOffload(value: string) {
    this._sessionDeniedOffload = value;
  }
  public resetSessionDeniedOffload() {
    this._sessionDeniedOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDeniedOffloadInput() {
    return this._sessionDeniedOffload;
  }

  // sse_backpressure - computed: true, optional: true, required: false
  private _sseBackpressure?: string; 
  public get sseBackpressure() {
    return this.getStringAttribute('sse_backpressure');
  }
  public set sseBackpressure(value: string) {
    this._sseBackpressure = value;
  }
  public resetSseBackpressure() {
    this._sseBackpressure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseBackpressureInput() {
    return this._sseBackpressure;
  }

  // strip_clear_text_padding - computed: true, optional: true, required: false
  private _stripClearTextPadding?: string; 
  public get stripClearTextPadding() {
    return this.getStringAttribute('strip_clear_text_padding');
  }
  public set stripClearTextPadding(value: string) {
    this._stripClearTextPadding = value;
  }
  public resetStripClearTextPadding() {
    this._stripClearTextPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripClearTextPaddingInput() {
    return this._stripClearTextPadding;
  }

  // strip_esp_padding - computed: true, optional: true, required: false
  private _stripEspPadding?: string; 
  public get stripEspPadding() {
    return this.getStringAttribute('strip_esp_padding');
  }
  public set stripEspPadding(value: string) {
    this._stripEspPadding = value;
  }
  public resetStripEspPadding() {
    this._stripEspPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripEspPaddingInput() {
    return this._stripEspPadding;
  }

  // sw_np_bandwidth - computed: true, optional: true, required: false
  private _swNpBandwidth?: string; 
  public get swNpBandwidth() {
    return this.getStringAttribute('sw_np_bandwidth');
  }
  public set swNpBandwidth(value: string) {
    this._swNpBandwidth = value;
  }
  public resetSwNpBandwidth() {
    this._swNpBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swNpBandwidthInput() {
    return this._swNpBandwidth;
  }

  // uesp_offload - computed: true, optional: true, required: false
  private _uespOffload?: string; 
  public get uespOffload() {
    return this.getStringAttribute('uesp_offload');
  }
  public set uespOffload(value: string) {
    this._uespOffload = value;
  }
  public resetUespOffload() {
    this._uespOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uespOffloadInput() {
    return this._uespOffload;
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

  // priority_protocol - computed: false, optional: true, required: false
  private _priorityProtocol = new SystemNpuPriorityProtocolOutputReference(this, "priority_protocol");
  public get priorityProtocol() {
    return this._priorityProtocol;
  }
  public putPriorityProtocol(value: SystemNpuPriorityProtocol) {
    this._priorityProtocol.internalValue = value;
  }
  public resetPriorityProtocol() {
    this._priorityProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityProtocolInput() {
    return this._priorityProtocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capwap_offload: cdktf.stringToTerraform(this._capwapOffload),
      dedicated_management_affinity: cdktf.stringToTerraform(this._dedicatedManagementAffinity),
      dedicated_management_cpu: cdktf.stringToTerraform(this._dedicatedManagementCpu),
      fastpath: cdktf.stringToTerraform(this._fastpath),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ipsec_dec_subengine_mask: cdktf.stringToTerraform(this._ipsecDecSubengineMask),
      ipsec_enc_subengine_mask: cdktf.stringToTerraform(this._ipsecEncSubengineMask),
      ipsec_inbound_cache: cdktf.stringToTerraform(this._ipsecInboundCache),
      ipsec_mtu_override: cdktf.stringToTerraform(this._ipsecMtuOverride),
      ipsec_over_vlink: cdktf.stringToTerraform(this._ipsecOverVlink),
      mcast_session_accounting: cdktf.stringToTerraform(this._mcastSessionAccounting),
      np6_cps_optimization_mode: cdktf.stringToTerraform(this._np6CpsOptimizationMode),
      rdp_offload: cdktf.stringToTerraform(this._rdpOffload),
      session_denied_offload: cdktf.stringToTerraform(this._sessionDeniedOffload),
      sse_backpressure: cdktf.stringToTerraform(this._sseBackpressure),
      strip_clear_text_padding: cdktf.stringToTerraform(this._stripClearTextPadding),
      strip_esp_padding: cdktf.stringToTerraform(this._stripEspPadding),
      sw_np_bandwidth: cdktf.stringToTerraform(this._swNpBandwidth),
      uesp_offload: cdktf.stringToTerraform(this._uespOffload),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      priority_protocol: systemNpuPriorityProtocolToTerraform(this._priorityProtocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capwap_offload: {
        value: cdktf.stringToHclTerraform(this._capwapOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_management_affinity: {
        value: cdktf.stringToHclTerraform(this._dedicatedManagementAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_management_cpu: {
        value: cdktf.stringToHclTerraform(this._dedicatedManagementCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fastpath: {
        value: cdktf.stringToHclTerraform(this._fastpath),
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
      ipsec_dec_subengine_mask: {
        value: cdktf.stringToHclTerraform(this._ipsecDecSubengineMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enc_subengine_mask: {
        value: cdktf.stringToHclTerraform(this._ipsecEncSubengineMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_inbound_cache: {
        value: cdktf.stringToHclTerraform(this._ipsecInboundCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_mtu_override: {
        value: cdktf.stringToHclTerraform(this._ipsecMtuOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_over_vlink: {
        value: cdktf.stringToHclTerraform(this._ipsecOverVlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mcast_session_accounting: {
        value: cdktf.stringToHclTerraform(this._mcastSessionAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      np6_cps_optimization_mode: {
        value: cdktf.stringToHclTerraform(this._np6CpsOptimizationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_offload: {
        value: cdktf.stringToHclTerraform(this._rdpOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_denied_offload: {
        value: cdktf.stringToHclTerraform(this._sessionDeniedOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_backpressure: {
        value: cdktf.stringToHclTerraform(this._sseBackpressure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_clear_text_padding: {
        value: cdktf.stringToHclTerraform(this._stripClearTextPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_esp_padding: {
        value: cdktf.stringToHclTerraform(this._stripEspPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_np_bandwidth: {
        value: cdktf.stringToHclTerraform(this._swNpBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uesp_offload: {
        value: cdktf.stringToHclTerraform(this._uespOffload),
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
      priority_protocol: {
        value: systemNpuPriorityProtocolToHclTerraform(this._priorityProtocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNpuPriorityProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
