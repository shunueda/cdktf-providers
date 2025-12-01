// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#___path___ QueueType#___path___}
  */
  readonly path?: string;
  /**
  * Maximum number of bytes that the BFIFO queue can hold. Applies if `kind` is `bfifo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#bfifo_limit QueueType#bfifo_limit}
  */
  readonly bfifoLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_ack_filter QueueType#cake_ack_filter}
  */
  readonly cakeAckFilter?: string;
  /**
  * Compensates for ATM cell framing, which is normally found on ADSL links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_atm QueueType#cake_atm}
  */
  readonly cakeAtm?: string;
  /**
  * Automatic capacity estimation based on traffic arriving at this qdisc. This is most likely to be useful with cellular links, which tend to change quality randomly.  The Bandwidth Limit parameter can be used in conjunction to specify an initial estimate. The shaper will periodically be set to a bandwidth slightly below the estimated rate.  This estimator cannot estimate the bandwidth of links downstream of itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_autorate_ingress QueueType#cake_autorate_ingress}
  */
  readonly cakeAutorateIngress?: boolean | cdktf.IResolvable;
  /**
  * Sets the shaper bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_bandwidth QueueType#cake_bandwidth}
  */
  readonly cakeBandwidth?: number;
  /**
  * CAKE can divide traffic into `tins` based on the Diffserv field:
  *   * `diffserv4` Provides a general-purpose Diffserv implementation with four tins: Bulk (CS1), 6.25% threshold, generally low priority. Best Effort (general), 100% threshold. Video (AF4x, AF3x, CS3, AF2x, CS2, TOS4, TOS1), 50% threshold. Voice (CS7, CS6, EF, VA, CS5, CS4), 25% threshold.
  *   * `diffserv3` (default) Provides a simple, general-purpose Diffserv implementation with three tins: Bulk (CS1), 6.25% threshold, generally low priority. Best Effort (general), 100% threshold. Voice (CS7, CS6, EF, VA, TOS4), 25% threshold, reduced Codel interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_diffserv QueueType#cake_diffserv}
  */
  readonly cakeDiffserv?: string;
  /**
  * 
  *   * `flowblind` - Disables flow isolation; all traffic passes through a single queue for each tin.
  *   * `srchost` - Flows are defined only by source address.
  *   * `dsthost` Flows are defined only by destination address.
  *   * `hosts` - Flows are defined by source-destination host pairs. This is host isolation, rather than flow isolation.
  *   * `flows` - Flows are defined by the entire 5-tuple of source address, a destination address, transport protocol, source port, and destination port. This is the type of flow isolation performed by SFQ and fq_codel.
  *   * `dual-srchost` Flows are defined by the 5-tuple, and fairness is applied first over source addresses, then over individual flows. Good for use on egress traffic from a LAN to the internet, where it'll prevent any LAN host from monopolizing the uplink, regardless of the number of flows they use.
  *   * `dual-dsthost` Flows are defined by the 5-tuple, and fairness is applied first over destination addresses, then over individual flows. Good for use on ingress traffic to a LAN from the internet, where it'll prevent any LAN host from monopolizing the downlink, regardless of the number of flows they use.
  *   * `triple-isolate` - Flows are defined by the 5-tuple, and fairness is applied over source *and* destination addresses intelligently (ie. not merely by host-pairs), and also over individual flows.
  *   * `nat` Instructs Cake to perform a NAT lookup before applying flow- isolation rules, to determine the true addresses and port numbers of the packet, to improve fairness between hosts `inside` the NAT. This has no practical effect in `flowblind` or `flows` modes, or if NAT is performed on a different host.
  *   * `nonat` (default) The cake will not perform a NAT lookup. Flow isolation will be performed using the addresses and port numbers directly visible to the interface Cake is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_flowmode QueueType#cake_flowmode}
  */
  readonly cakeFlowmode?: string;
  /**
  * Limit the memory consumed by Cake to LIMIT bytes. By default, the limit is calculated based on the bandwidth and RTT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_memlimit QueueType#cake_memlimit}
  */
  readonly cakeMemlimit?: number;
  /**
  * Rounds each packet (including overhead) up to a minimum length BYTES. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_mpu QueueType#cake_mpu}
  */
  readonly cakeMpu?: number;
  /**
  * Instructs Cake to perform a NAT lookup before applying a flow-isolation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_nat QueueType#cake_nat}
  */
  readonly cakeNat?: boolean | cdktf.IResolvable;
  /**
  * Adds BYTES to the size of each packet. BYTES may be negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_overhead QueueType#cake_overhead}
  */
  readonly cakeOverhead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_overhead_scheme QueueType#cake_overhead_scheme}
  */
  readonly cakeOverheadScheme?: string;
  /**
  * Manually specify an RTT. Default 100ms is suitable for most Internet traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_rtt QueueType#cake_rtt}
  */
  readonly cakeRtt?: string;
  /**
  * 
  *   * `datacentre` - For extremely high-performance 10GigE+ networks only. Equivalent to `RTT 100us`.
  *   * `lan` - For pure Ethernet (not Wi-Fi) networks, at home or in the office. Don't use this when shaping for an Internet access link. Equivalent to `RTT 1ms`.
  *   * `metro` - For traffic mostly within a single city. Equivalent to `RTT 10ms`. regional For traffic mostly within a European-sized country. Equivalent to `RTT 30ms`.
  *   * `internet` (default) This is suitable for most Internet traffic. Equivalent to `RTT 100ms`.
  *   * `oceanic` - For Internet traffic with generally above-average latency, such as that suffered by Australasian residents. Equivalent to `RTT 300ms`.
  *   * `satellite` - For traffic via geostationary satellites. Equivalent to `RTT 1000ms`.
  *   * `interplanetary` - So named because Jupiter is about 1 light-hour from Earth. Use this to (almost) completely disable AQM actions. Equivalent to `RTT 3600s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_rtt_scheme QueueType#cake_rtt_scheme}
  */
  readonly cakeRttScheme?: string;
  /**
  * Apply the wash option to clear all extra DiffServ (but not ECN bits), after priority queuing has taken place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#cake_wash QueueType#cake_wash}
  */
  readonly cakeWash?: boolean | cdktf.IResolvable;
  /**
  * Marks packets above a configured threshold with ECN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#codel_ce_threshold QueueType#codel_ce_threshold}
  */
  readonly codelCeThreshold?: number;
  /**
  * An option is used to mark packets instead of dropping them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#codel_ecn QueueType#codel_ecn}
  */
  readonly codelEcn?: boolean | cdktf.IResolvable;
  /**
  * Interval should be set on the order of the worst-case RTT through the bottleneck giving endpoints sufficient time to react.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#codel_interval QueueType#codel_interval}
  */
  readonly codelInterval?: string;
  /**
  * Queue limit, when the limit is reached, incoming packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#codel_limit QueueType#codel_limit}
  */
  readonly codelLimit?: number;
  /**
  * Represents an acceptable minimum persistent queue delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#codel_target QueueType#codel_target}
  */
  readonly codelTarget?: string;
  /**
  * Marks packets above a configured threshold with ECN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_ce_threshold QueueType#fq_codel_ce_threshold}
  */
  readonly fqCodelCeThreshold?: number;
  /**
  * An option is used to mark packets instead of dropping them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_ecn QueueType#fq_codel_ecn}
  */
  readonly fqCodelEcn?: boolean | cdktf.IResolvable;
  /**
  * A number of flows into which the incoming packets are classified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_flows QueueType#fq_codel_flows}
  */
  readonly fqCodelFlows?: number;
  /**
  * Interval should be set on the order of the worst-case RTT through the bottleneck giving endpoints sufficient time to react.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_interval QueueType#fq_codel_interval}
  */
  readonly fqCodelInterval?: string;
  /**
  * Queue limit, when the limit is reached, incoming packets are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_limit QueueType#fq_codel_limit}
  */
  readonly fqCodelLimit?: number;
  /**
  * A total number of bytes that can be queued in this FQ-CoDel instance. Will be enforced from the fq-codel-limit parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_memlimit QueueType#fq_codel_memlimit}
  */
  readonly fqCodelMemlimit?: number;
  /**
  * A number of bytes used as 'deficit' in the fair queuing algorithm. Default (1514 bytes) corresponds to the Ethernet MTU plus the hardware header length of 14 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_quantum QueueType#fq_codel_quantum}
  */
  readonly fqCodelQuantum?: number;
  /**
  * Represents an acceptable minimum persistent queue delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#fq_codel_target QueueType#fq_codel_target}
  */
  readonly fqCodelTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#id QueueType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Queue kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#kind QueueType#kind}
  */
  readonly kind: string;
  /**
  * Multi-queue PFIFO limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#mq_pfifo_limit QueueType#mq_pfifo_limit}
  */
  readonly mqPfifoLimit?: number;
  /**
  * Type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#name QueueType#name}
  */
  readonly name: string;
  /**
  * Maximal upload/download data rate which can be reached while the burst for substream is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_burst_rate QueueType#pcq_burst_rate}
  */
  readonly pcqBurstRate?: number;
  /**
  * This is value of burst on/off switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_burst_threshold QueueType#pcq_burst_threshold}
  */
  readonly pcqBurstThreshold?: number;
  /**
  * Period of time, in seconds, over which the average data rate is calculated. (This is NOT the time of actual burst).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_burst_time QueueType#pcq_burst_time}
  */
  readonly pcqBurstTime?: string;
  /**
  * Selection of sub-stream identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_classifier QueueType#pcq_classifier}
  */
  readonly pcqClassifier?: string[];
  /**
  * Size of IPV6 network that will be used as dst-address sub-stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_dst_address6_mask QueueType#pcq_dst_address6_mask}
  */
  readonly pcqDstAddress6Mask?: number;
  /**
  * Size of IPv4 network that will be used as dst-address sub-stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_dst_address_mask QueueType#pcq_dst_address_mask}
  */
  readonly pcqDstAddressMask?: number;
  /**
  * Queue size of a single sub-stream (in kilobytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_limit QueueType#pcq_limit}
  */
  readonly pcqLimit?: number;
  /**
  * Maximal available data rate of each sub-steam.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_rate QueueType#pcq_rate}
  */
  readonly pcqRate?: number;
  /**
  * Size of IPV6 network that will be used as src-address sub-stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_src_address6_mask QueueType#pcq_src_address6_mask}
  */
  readonly pcqSrcAddress6Mask?: number;
  /**
  * Size of IPv4 network that will be used as src-address sub-stream identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_src_address_mask QueueType#pcq_src_address_mask}
  */
  readonly pcqSrcAddressMask?: number;
  /**
  * Max amount of bytes queued (in kilobytes) for all sub-streams per PCQ instance. Note that each queue tree entry has its own PCQ instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pcq_total_limit QueueType#pcq_total_limit}
  */
  readonly pcqTotalLimit?: number;
  /**
  * Maximum number of packets that the PFIFO queue can hold. Applies if `kind` is `pfifo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#pfifo_limit QueueType#pfifo_limit}
  */
  readonly pfifoLimit?: number;
  /**
  * Used by RED for average queue size calculations (for packet to byte translation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#red_avg_packet QueueType#red_avg_packet}
  */
  readonly redAvgPacket?: number;
  /**
  * Number of packets allowed for bursts of packets when there are no packets in the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#red_burst QueueType#red_burst}
  */
  readonly redBurst?: number;
  /**
  * RED queue limit in packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#red_limit QueueType#red_limit}
  */
  readonly redLimit?: number;
  /**
  * The average queue size at which packet marking probability is the highest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#red_max_threshold QueueType#red_max_threshold}
  */
  readonly redMaxThreshold?: number;
  /**
  * Average queue size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#red_min_threshold QueueType#red_min_threshold}
  */
  readonly redMinThreshold?: number;
  /**
  * Amount of data in bytes that can be sent in one round-robin round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#sfq_allot QueueType#sfq_allot}
  */
  readonly sfqAllot?: number;
  /**
  * How often hash function must be refreshed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#sfq_perturb QueueType#sfq_perturb}
  */
  readonly sfqPerturb?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type routeros_queue_type}
*/
export class QueueType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_queue_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueType to import
  * @param importFromId The id of the existing QueueType that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_queue_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/queue_type routeros_queue_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueTypeConfig
  */
  public constructor(scope: Construct, id: string, config: QueueTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_queue_type',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._bfifoLimit = config.bfifoLimit;
    this._cakeAckFilter = config.cakeAckFilter;
    this._cakeAtm = config.cakeAtm;
    this._cakeAutorateIngress = config.cakeAutorateIngress;
    this._cakeBandwidth = config.cakeBandwidth;
    this._cakeDiffserv = config.cakeDiffserv;
    this._cakeFlowmode = config.cakeFlowmode;
    this._cakeMemlimit = config.cakeMemlimit;
    this._cakeMpu = config.cakeMpu;
    this._cakeNat = config.cakeNat;
    this._cakeOverhead = config.cakeOverhead;
    this._cakeOverheadScheme = config.cakeOverheadScheme;
    this._cakeRtt = config.cakeRtt;
    this._cakeRttScheme = config.cakeRttScheme;
    this._cakeWash = config.cakeWash;
    this._codelCeThreshold = config.codelCeThreshold;
    this._codelEcn = config.codelEcn;
    this._codelInterval = config.codelInterval;
    this._codelLimit = config.codelLimit;
    this._codelTarget = config.codelTarget;
    this._fqCodelCeThreshold = config.fqCodelCeThreshold;
    this._fqCodelEcn = config.fqCodelEcn;
    this._fqCodelFlows = config.fqCodelFlows;
    this._fqCodelInterval = config.fqCodelInterval;
    this._fqCodelLimit = config.fqCodelLimit;
    this._fqCodelMemlimit = config.fqCodelMemlimit;
    this._fqCodelQuantum = config.fqCodelQuantum;
    this._fqCodelTarget = config.fqCodelTarget;
    this._id = config.id;
    this._kind = config.kind;
    this._mqPfifoLimit = config.mqPfifoLimit;
    this._name = config.name;
    this._pcqBurstRate = config.pcqBurstRate;
    this._pcqBurstThreshold = config.pcqBurstThreshold;
    this._pcqBurstTime = config.pcqBurstTime;
    this._pcqClassifier = config.pcqClassifier;
    this._pcqDstAddress6Mask = config.pcqDstAddress6Mask;
    this._pcqDstAddressMask = config.pcqDstAddressMask;
    this._pcqLimit = config.pcqLimit;
    this._pcqRate = config.pcqRate;
    this._pcqSrcAddress6Mask = config.pcqSrcAddress6Mask;
    this._pcqSrcAddressMask = config.pcqSrcAddressMask;
    this._pcqTotalLimit = config.pcqTotalLimit;
    this._pfifoLimit = config.pfifoLimit;
    this._redAvgPacket = config.redAvgPacket;
    this._redBurst = config.redBurst;
    this._redLimit = config.redLimit;
    this._redMaxThreshold = config.redMaxThreshold;
    this._redMinThreshold = config.redMinThreshold;
    this._sfqAllot = config.sfqAllot;
    this._sfqPerturb = config.sfqPerturb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // bfifo_limit - computed: false, optional: true, required: false
  private _bfifoLimit?: number; 
  public get bfifoLimit() {
    return this.getNumberAttribute('bfifo_limit');
  }
  public set bfifoLimit(value: number) {
    this._bfifoLimit = value;
  }
  public resetBfifoLimit() {
    this._bfifoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfifoLimitInput() {
    return this._bfifoLimit;
  }

  // cake_ack_filter - computed: false, optional: true, required: false
  private _cakeAckFilter?: string; 
  public get cakeAckFilter() {
    return this.getStringAttribute('cake_ack_filter');
  }
  public set cakeAckFilter(value: string) {
    this._cakeAckFilter = value;
  }
  public resetCakeAckFilter() {
    this._cakeAckFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeAckFilterInput() {
    return this._cakeAckFilter;
  }

  // cake_atm - computed: false, optional: true, required: false
  private _cakeAtm?: string; 
  public get cakeAtm() {
    return this.getStringAttribute('cake_atm');
  }
  public set cakeAtm(value: string) {
    this._cakeAtm = value;
  }
  public resetCakeAtm() {
    this._cakeAtm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeAtmInput() {
    return this._cakeAtm;
  }

  // cake_autorate_ingress - computed: false, optional: true, required: false
  private _cakeAutorateIngress?: boolean | cdktf.IResolvable; 
  public get cakeAutorateIngress() {
    return this.getBooleanAttribute('cake_autorate_ingress');
  }
  public set cakeAutorateIngress(value: boolean | cdktf.IResolvable) {
    this._cakeAutorateIngress = value;
  }
  public resetCakeAutorateIngress() {
    this._cakeAutorateIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeAutorateIngressInput() {
    return this._cakeAutorateIngress;
  }

  // cake_bandwidth - computed: false, optional: true, required: false
  private _cakeBandwidth?: number; 
  public get cakeBandwidth() {
    return this.getNumberAttribute('cake_bandwidth');
  }
  public set cakeBandwidth(value: number) {
    this._cakeBandwidth = value;
  }
  public resetCakeBandwidth() {
    this._cakeBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeBandwidthInput() {
    return this._cakeBandwidth;
  }

  // cake_diffserv - computed: false, optional: true, required: false
  private _cakeDiffserv?: string; 
  public get cakeDiffserv() {
    return this.getStringAttribute('cake_diffserv');
  }
  public set cakeDiffserv(value: string) {
    this._cakeDiffserv = value;
  }
  public resetCakeDiffserv() {
    this._cakeDiffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeDiffservInput() {
    return this._cakeDiffserv;
  }

  // cake_flowmode - computed: false, optional: true, required: false
  private _cakeFlowmode?: string; 
  public get cakeFlowmode() {
    return this.getStringAttribute('cake_flowmode');
  }
  public set cakeFlowmode(value: string) {
    this._cakeFlowmode = value;
  }
  public resetCakeFlowmode() {
    this._cakeFlowmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeFlowmodeInput() {
    return this._cakeFlowmode;
  }

  // cake_memlimit - computed: false, optional: true, required: false
  private _cakeMemlimit?: number; 
  public get cakeMemlimit() {
    return this.getNumberAttribute('cake_memlimit');
  }
  public set cakeMemlimit(value: number) {
    this._cakeMemlimit = value;
  }
  public resetCakeMemlimit() {
    this._cakeMemlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeMemlimitInput() {
    return this._cakeMemlimit;
  }

  // cake_mpu - computed: false, optional: true, required: false
  private _cakeMpu?: number; 
  public get cakeMpu() {
    return this.getNumberAttribute('cake_mpu');
  }
  public set cakeMpu(value: number) {
    this._cakeMpu = value;
  }
  public resetCakeMpu() {
    this._cakeMpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeMpuInput() {
    return this._cakeMpu;
  }

  // cake_nat - computed: false, optional: true, required: false
  private _cakeNat?: boolean | cdktf.IResolvable; 
  public get cakeNat() {
    return this.getBooleanAttribute('cake_nat');
  }
  public set cakeNat(value: boolean | cdktf.IResolvable) {
    this._cakeNat = value;
  }
  public resetCakeNat() {
    this._cakeNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeNatInput() {
    return this._cakeNat;
  }

  // cake_overhead - computed: false, optional: true, required: false
  private _cakeOverhead?: number; 
  public get cakeOverhead() {
    return this.getNumberAttribute('cake_overhead');
  }
  public set cakeOverhead(value: number) {
    this._cakeOverhead = value;
  }
  public resetCakeOverhead() {
    this._cakeOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeOverheadInput() {
    return this._cakeOverhead;
  }

  // cake_overhead_scheme - computed: false, optional: true, required: false
  private _cakeOverheadScheme?: string; 
  public get cakeOverheadScheme() {
    return this.getStringAttribute('cake_overhead_scheme');
  }
  public set cakeOverheadScheme(value: string) {
    this._cakeOverheadScheme = value;
  }
  public resetCakeOverheadScheme() {
    this._cakeOverheadScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeOverheadSchemeInput() {
    return this._cakeOverheadScheme;
  }

  // cake_rtt - computed: false, optional: true, required: false
  private _cakeRtt?: string; 
  public get cakeRtt() {
    return this.getStringAttribute('cake_rtt');
  }
  public set cakeRtt(value: string) {
    this._cakeRtt = value;
  }
  public resetCakeRtt() {
    this._cakeRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeRttInput() {
    return this._cakeRtt;
  }

  // cake_rtt_scheme - computed: false, optional: true, required: false
  private _cakeRttScheme?: string; 
  public get cakeRttScheme() {
    return this.getStringAttribute('cake_rtt_scheme');
  }
  public set cakeRttScheme(value: string) {
    this._cakeRttScheme = value;
  }
  public resetCakeRttScheme() {
    this._cakeRttScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeRttSchemeInput() {
    return this._cakeRttScheme;
  }

  // cake_wash - computed: false, optional: true, required: false
  private _cakeWash?: boolean | cdktf.IResolvable; 
  public get cakeWash() {
    return this.getBooleanAttribute('cake_wash');
  }
  public set cakeWash(value: boolean | cdktf.IResolvable) {
    this._cakeWash = value;
  }
  public resetCakeWash() {
    this._cakeWash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeWashInput() {
    return this._cakeWash;
  }

  // codel_ce_threshold - computed: false, optional: true, required: false
  private _codelCeThreshold?: number; 
  public get codelCeThreshold() {
    return this.getNumberAttribute('codel_ce_threshold');
  }
  public set codelCeThreshold(value: number) {
    this._codelCeThreshold = value;
  }
  public resetCodelCeThreshold() {
    this._codelCeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codelCeThresholdInput() {
    return this._codelCeThreshold;
  }

  // codel_ecn - computed: false, optional: true, required: false
  private _codelEcn?: boolean | cdktf.IResolvable; 
  public get codelEcn() {
    return this.getBooleanAttribute('codel_ecn');
  }
  public set codelEcn(value: boolean | cdktf.IResolvable) {
    this._codelEcn = value;
  }
  public resetCodelEcn() {
    this._codelEcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codelEcnInput() {
    return this._codelEcn;
  }

  // codel_interval - computed: false, optional: true, required: false
  private _codelInterval?: string; 
  public get codelInterval() {
    return this.getStringAttribute('codel_interval');
  }
  public set codelInterval(value: string) {
    this._codelInterval = value;
  }
  public resetCodelInterval() {
    this._codelInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codelIntervalInput() {
    return this._codelInterval;
  }

  // codel_limit - computed: false, optional: true, required: false
  private _codelLimit?: number; 
  public get codelLimit() {
    return this.getNumberAttribute('codel_limit');
  }
  public set codelLimit(value: number) {
    this._codelLimit = value;
  }
  public resetCodelLimit() {
    this._codelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codelLimitInput() {
    return this._codelLimit;
  }

  // codel_target - computed: false, optional: true, required: false
  private _codelTarget?: string; 
  public get codelTarget() {
    return this.getStringAttribute('codel_target');
  }
  public set codelTarget(value: string) {
    this._codelTarget = value;
  }
  public resetCodelTarget() {
    this._codelTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codelTargetInput() {
    return this._codelTarget;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // fq_codel_ce_threshold - computed: false, optional: true, required: false
  private _fqCodelCeThreshold?: number; 
  public get fqCodelCeThreshold() {
    return this.getNumberAttribute('fq_codel_ce_threshold');
  }
  public set fqCodelCeThreshold(value: number) {
    this._fqCodelCeThreshold = value;
  }
  public resetFqCodelCeThreshold() {
    this._fqCodelCeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelCeThresholdInput() {
    return this._fqCodelCeThreshold;
  }

  // fq_codel_ecn - computed: false, optional: true, required: false
  private _fqCodelEcn?: boolean | cdktf.IResolvable; 
  public get fqCodelEcn() {
    return this.getBooleanAttribute('fq_codel_ecn');
  }
  public set fqCodelEcn(value: boolean | cdktf.IResolvable) {
    this._fqCodelEcn = value;
  }
  public resetFqCodelEcn() {
    this._fqCodelEcn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelEcnInput() {
    return this._fqCodelEcn;
  }

  // fq_codel_flows - computed: false, optional: true, required: false
  private _fqCodelFlows?: number; 
  public get fqCodelFlows() {
    return this.getNumberAttribute('fq_codel_flows');
  }
  public set fqCodelFlows(value: number) {
    this._fqCodelFlows = value;
  }
  public resetFqCodelFlows() {
    this._fqCodelFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelFlowsInput() {
    return this._fqCodelFlows;
  }

  // fq_codel_interval - computed: false, optional: true, required: false
  private _fqCodelInterval?: string; 
  public get fqCodelInterval() {
    return this.getStringAttribute('fq_codel_interval');
  }
  public set fqCodelInterval(value: string) {
    this._fqCodelInterval = value;
  }
  public resetFqCodelInterval() {
    this._fqCodelInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelIntervalInput() {
    return this._fqCodelInterval;
  }

  // fq_codel_limit - computed: false, optional: true, required: false
  private _fqCodelLimit?: number; 
  public get fqCodelLimit() {
    return this.getNumberAttribute('fq_codel_limit');
  }
  public set fqCodelLimit(value: number) {
    this._fqCodelLimit = value;
  }
  public resetFqCodelLimit() {
    this._fqCodelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelLimitInput() {
    return this._fqCodelLimit;
  }

  // fq_codel_memlimit - computed: false, optional: true, required: false
  private _fqCodelMemlimit?: number; 
  public get fqCodelMemlimit() {
    return this.getNumberAttribute('fq_codel_memlimit');
  }
  public set fqCodelMemlimit(value: number) {
    this._fqCodelMemlimit = value;
  }
  public resetFqCodelMemlimit() {
    this._fqCodelMemlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelMemlimitInput() {
    return this._fqCodelMemlimit;
  }

  // fq_codel_quantum - computed: false, optional: true, required: false
  private _fqCodelQuantum?: number; 
  public get fqCodelQuantum() {
    return this.getNumberAttribute('fq_codel_quantum');
  }
  public set fqCodelQuantum(value: number) {
    this._fqCodelQuantum = value;
  }
  public resetFqCodelQuantum() {
    this._fqCodelQuantum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelQuantumInput() {
    return this._fqCodelQuantum;
  }

  // fq_codel_target - computed: false, optional: true, required: false
  private _fqCodelTarget?: string; 
  public get fqCodelTarget() {
    return this.getStringAttribute('fq_codel_target');
  }
  public set fqCodelTarget(value: string) {
    this._fqCodelTarget = value;
  }
  public resetFqCodelTarget() {
    this._fqCodelTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCodelTargetInput() {
    return this._fqCodelTarget;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // mq_pfifo_limit - computed: false, optional: true, required: false
  private _mqPfifoLimit?: number; 
  public get mqPfifoLimit() {
    return this.getNumberAttribute('mq_pfifo_limit');
  }
  public set mqPfifoLimit(value: number) {
    this._mqPfifoLimit = value;
  }
  public resetMqPfifoLimit() {
    this._mqPfifoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqPfifoLimitInput() {
    return this._mqPfifoLimit;
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

  // pcq_burst_rate - computed: false, optional: true, required: false
  private _pcqBurstRate?: number; 
  public get pcqBurstRate() {
    return this.getNumberAttribute('pcq_burst_rate');
  }
  public set pcqBurstRate(value: number) {
    this._pcqBurstRate = value;
  }
  public resetPcqBurstRate() {
    this._pcqBurstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqBurstRateInput() {
    return this._pcqBurstRate;
  }

  // pcq_burst_threshold - computed: false, optional: true, required: false
  private _pcqBurstThreshold?: number; 
  public get pcqBurstThreshold() {
    return this.getNumberAttribute('pcq_burst_threshold');
  }
  public set pcqBurstThreshold(value: number) {
    this._pcqBurstThreshold = value;
  }
  public resetPcqBurstThreshold() {
    this._pcqBurstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqBurstThresholdInput() {
    return this._pcqBurstThreshold;
  }

  // pcq_burst_time - computed: false, optional: true, required: false
  private _pcqBurstTime?: string; 
  public get pcqBurstTime() {
    return this.getStringAttribute('pcq_burst_time');
  }
  public set pcqBurstTime(value: string) {
    this._pcqBurstTime = value;
  }
  public resetPcqBurstTime() {
    this._pcqBurstTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqBurstTimeInput() {
    return this._pcqBurstTime;
  }

  // pcq_classifier - computed: false, optional: true, required: false
  private _pcqClassifier?: string[]; 
  public get pcqClassifier() {
    return cdktf.Fn.tolist(this.getListAttribute('pcq_classifier'));
  }
  public set pcqClassifier(value: string[]) {
    this._pcqClassifier = value;
  }
  public resetPcqClassifier() {
    this._pcqClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqClassifierInput() {
    return this._pcqClassifier;
  }

  // pcq_dst_address6_mask - computed: false, optional: true, required: false
  private _pcqDstAddress6Mask?: number; 
  public get pcqDstAddress6Mask() {
    return this.getNumberAttribute('pcq_dst_address6_mask');
  }
  public set pcqDstAddress6Mask(value: number) {
    this._pcqDstAddress6Mask = value;
  }
  public resetPcqDstAddress6Mask() {
    this._pcqDstAddress6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqDstAddress6MaskInput() {
    return this._pcqDstAddress6Mask;
  }

  // pcq_dst_address_mask - computed: false, optional: true, required: false
  private _pcqDstAddressMask?: number; 
  public get pcqDstAddressMask() {
    return this.getNumberAttribute('pcq_dst_address_mask');
  }
  public set pcqDstAddressMask(value: number) {
    this._pcqDstAddressMask = value;
  }
  public resetPcqDstAddressMask() {
    this._pcqDstAddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqDstAddressMaskInput() {
    return this._pcqDstAddressMask;
  }

  // pcq_limit - computed: false, optional: true, required: false
  private _pcqLimit?: number; 
  public get pcqLimit() {
    return this.getNumberAttribute('pcq_limit');
  }
  public set pcqLimit(value: number) {
    this._pcqLimit = value;
  }
  public resetPcqLimit() {
    this._pcqLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqLimitInput() {
    return this._pcqLimit;
  }

  // pcq_rate - computed: false, optional: true, required: false
  private _pcqRate?: number; 
  public get pcqRate() {
    return this.getNumberAttribute('pcq_rate');
  }
  public set pcqRate(value: number) {
    this._pcqRate = value;
  }
  public resetPcqRate() {
    this._pcqRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqRateInput() {
    return this._pcqRate;
  }

  // pcq_src_address6_mask - computed: false, optional: true, required: false
  private _pcqSrcAddress6Mask?: number; 
  public get pcqSrcAddress6Mask() {
    return this.getNumberAttribute('pcq_src_address6_mask');
  }
  public set pcqSrcAddress6Mask(value: number) {
    this._pcqSrcAddress6Mask = value;
  }
  public resetPcqSrcAddress6Mask() {
    this._pcqSrcAddress6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqSrcAddress6MaskInput() {
    return this._pcqSrcAddress6Mask;
  }

  // pcq_src_address_mask - computed: false, optional: true, required: false
  private _pcqSrcAddressMask?: number; 
  public get pcqSrcAddressMask() {
    return this.getNumberAttribute('pcq_src_address_mask');
  }
  public set pcqSrcAddressMask(value: number) {
    this._pcqSrcAddressMask = value;
  }
  public resetPcqSrcAddressMask() {
    this._pcqSrcAddressMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqSrcAddressMaskInput() {
    return this._pcqSrcAddressMask;
  }

  // pcq_total_limit - computed: false, optional: true, required: false
  private _pcqTotalLimit?: number; 
  public get pcqTotalLimit() {
    return this.getNumberAttribute('pcq_total_limit');
  }
  public set pcqTotalLimit(value: number) {
    this._pcqTotalLimit = value;
  }
  public resetPcqTotalLimit() {
    this._pcqTotalLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcqTotalLimitInput() {
    return this._pcqTotalLimit;
  }

  // pfifo_limit - computed: false, optional: true, required: false
  private _pfifoLimit?: number; 
  public get pfifoLimit() {
    return this.getNumberAttribute('pfifo_limit');
  }
  public set pfifoLimit(value: number) {
    this._pfifoLimit = value;
  }
  public resetPfifoLimit() {
    this._pfifoLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfifoLimitInput() {
    return this._pfifoLimit;
  }

  // red_avg_packet - computed: false, optional: true, required: false
  private _redAvgPacket?: number; 
  public get redAvgPacket() {
    return this.getNumberAttribute('red_avg_packet');
  }
  public set redAvgPacket(value: number) {
    this._redAvgPacket = value;
  }
  public resetRedAvgPacket() {
    this._redAvgPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redAvgPacketInput() {
    return this._redAvgPacket;
  }

  // red_burst - computed: false, optional: true, required: false
  private _redBurst?: number; 
  public get redBurst() {
    return this.getNumberAttribute('red_burst');
  }
  public set redBurst(value: number) {
    this._redBurst = value;
  }
  public resetRedBurst() {
    this._redBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redBurstInput() {
    return this._redBurst;
  }

  // red_limit - computed: false, optional: true, required: false
  private _redLimit?: number; 
  public get redLimit() {
    return this.getNumberAttribute('red_limit');
  }
  public set redLimit(value: number) {
    this._redLimit = value;
  }
  public resetRedLimit() {
    this._redLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redLimitInput() {
    return this._redLimit;
  }

  // red_max_threshold - computed: false, optional: true, required: false
  private _redMaxThreshold?: number; 
  public get redMaxThreshold() {
    return this.getNumberAttribute('red_max_threshold');
  }
  public set redMaxThreshold(value: number) {
    this._redMaxThreshold = value;
  }
  public resetRedMaxThreshold() {
    this._redMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redMaxThresholdInput() {
    return this._redMaxThreshold;
  }

  // red_min_threshold - computed: false, optional: true, required: false
  private _redMinThreshold?: number; 
  public get redMinThreshold() {
    return this.getNumberAttribute('red_min_threshold');
  }
  public set redMinThreshold(value: number) {
    this._redMinThreshold = value;
  }
  public resetRedMinThreshold() {
    this._redMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redMinThresholdInput() {
    return this._redMinThreshold;
  }

  // sfq_allot - computed: false, optional: true, required: false
  private _sfqAllot?: number; 
  public get sfqAllot() {
    return this.getNumberAttribute('sfq_allot');
  }
  public set sfqAllot(value: number) {
    this._sfqAllot = value;
  }
  public resetSfqAllot() {
    this._sfqAllot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfqAllotInput() {
    return this._sfqAllot;
  }

  // sfq_perturb - computed: false, optional: true, required: false
  private _sfqPerturb?: number; 
  public get sfqPerturb() {
    return this.getNumberAttribute('sfq_perturb');
  }
  public set sfqPerturb(value: number) {
    this._sfqPerturb = value;
  }
  public resetSfqPerturb() {
    this._sfqPerturb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfqPerturbInput() {
    return this._sfqPerturb;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      bfifo_limit: cdktf.numberToTerraform(this._bfifoLimit),
      cake_ack_filter: cdktf.stringToTerraform(this._cakeAckFilter),
      cake_atm: cdktf.stringToTerraform(this._cakeAtm),
      cake_autorate_ingress: cdktf.booleanToTerraform(this._cakeAutorateIngress),
      cake_bandwidth: cdktf.numberToTerraform(this._cakeBandwidth),
      cake_diffserv: cdktf.stringToTerraform(this._cakeDiffserv),
      cake_flowmode: cdktf.stringToTerraform(this._cakeFlowmode),
      cake_memlimit: cdktf.numberToTerraform(this._cakeMemlimit),
      cake_mpu: cdktf.numberToTerraform(this._cakeMpu),
      cake_nat: cdktf.booleanToTerraform(this._cakeNat),
      cake_overhead: cdktf.numberToTerraform(this._cakeOverhead),
      cake_overhead_scheme: cdktf.stringToTerraform(this._cakeOverheadScheme),
      cake_rtt: cdktf.stringToTerraform(this._cakeRtt),
      cake_rtt_scheme: cdktf.stringToTerraform(this._cakeRttScheme),
      cake_wash: cdktf.booleanToTerraform(this._cakeWash),
      codel_ce_threshold: cdktf.numberToTerraform(this._codelCeThreshold),
      codel_ecn: cdktf.booleanToTerraform(this._codelEcn),
      codel_interval: cdktf.stringToTerraform(this._codelInterval),
      codel_limit: cdktf.numberToTerraform(this._codelLimit),
      codel_target: cdktf.stringToTerraform(this._codelTarget),
      fq_codel_ce_threshold: cdktf.numberToTerraform(this._fqCodelCeThreshold),
      fq_codel_ecn: cdktf.booleanToTerraform(this._fqCodelEcn),
      fq_codel_flows: cdktf.numberToTerraform(this._fqCodelFlows),
      fq_codel_interval: cdktf.stringToTerraform(this._fqCodelInterval),
      fq_codel_limit: cdktf.numberToTerraform(this._fqCodelLimit),
      fq_codel_memlimit: cdktf.numberToTerraform(this._fqCodelMemlimit),
      fq_codel_quantum: cdktf.numberToTerraform(this._fqCodelQuantum),
      fq_codel_target: cdktf.stringToTerraform(this._fqCodelTarget),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      mq_pfifo_limit: cdktf.numberToTerraform(this._mqPfifoLimit),
      name: cdktf.stringToTerraform(this._name),
      pcq_burst_rate: cdktf.numberToTerraform(this._pcqBurstRate),
      pcq_burst_threshold: cdktf.numberToTerraform(this._pcqBurstThreshold),
      pcq_burst_time: cdktf.stringToTerraform(this._pcqBurstTime),
      pcq_classifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pcqClassifier),
      pcq_dst_address6_mask: cdktf.numberToTerraform(this._pcqDstAddress6Mask),
      pcq_dst_address_mask: cdktf.numberToTerraform(this._pcqDstAddressMask),
      pcq_limit: cdktf.numberToTerraform(this._pcqLimit),
      pcq_rate: cdktf.numberToTerraform(this._pcqRate),
      pcq_src_address6_mask: cdktf.numberToTerraform(this._pcqSrcAddress6Mask),
      pcq_src_address_mask: cdktf.numberToTerraform(this._pcqSrcAddressMask),
      pcq_total_limit: cdktf.numberToTerraform(this._pcqTotalLimit),
      pfifo_limit: cdktf.numberToTerraform(this._pfifoLimit),
      red_avg_packet: cdktf.numberToTerraform(this._redAvgPacket),
      red_burst: cdktf.numberToTerraform(this._redBurst),
      red_limit: cdktf.numberToTerraform(this._redLimit),
      red_max_threshold: cdktf.numberToTerraform(this._redMaxThreshold),
      red_min_threshold: cdktf.numberToTerraform(this._redMinThreshold),
      sfq_allot: cdktf.numberToTerraform(this._sfqAllot),
      sfq_perturb: cdktf.numberToTerraform(this._sfqPerturb),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfifo_limit: {
        value: cdktf.numberToHclTerraform(this._bfifoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cake_ack_filter: {
        value: cdktf.stringToHclTerraform(this._cakeAckFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_atm: {
        value: cdktf.stringToHclTerraform(this._cakeAtm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_autorate_ingress: {
        value: cdktf.booleanToHclTerraform(this._cakeAutorateIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cake_bandwidth: {
        value: cdktf.numberToHclTerraform(this._cakeBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cake_diffserv: {
        value: cdktf.stringToHclTerraform(this._cakeDiffserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_flowmode: {
        value: cdktf.stringToHclTerraform(this._cakeFlowmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_memlimit: {
        value: cdktf.numberToHclTerraform(this._cakeMemlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cake_mpu: {
        value: cdktf.numberToHclTerraform(this._cakeMpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cake_nat: {
        value: cdktf.booleanToHclTerraform(this._cakeNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cake_overhead: {
        value: cdktf.numberToHclTerraform(this._cakeOverhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cake_overhead_scheme: {
        value: cdktf.stringToHclTerraform(this._cakeOverheadScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_rtt: {
        value: cdktf.stringToHclTerraform(this._cakeRtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_rtt_scheme: {
        value: cdktf.stringToHclTerraform(this._cakeRttScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cake_wash: {
        value: cdktf.booleanToHclTerraform(this._cakeWash),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      codel_ce_threshold: {
        value: cdktf.numberToHclTerraform(this._codelCeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      codel_ecn: {
        value: cdktf.booleanToHclTerraform(this._codelEcn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      codel_interval: {
        value: cdktf.stringToHclTerraform(this._codelInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      codel_limit: {
        value: cdktf.numberToHclTerraform(this._codelLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      codel_target: {
        value: cdktf.stringToHclTerraform(this._codelTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fq_codel_ce_threshold: {
        value: cdktf.numberToHclTerraform(this._fqCodelCeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_codel_ecn: {
        value: cdktf.booleanToHclTerraform(this._fqCodelEcn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fq_codel_flows: {
        value: cdktf.numberToHclTerraform(this._fqCodelFlows),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_codel_interval: {
        value: cdktf.stringToHclTerraform(this._fqCodelInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fq_codel_limit: {
        value: cdktf.numberToHclTerraform(this._fqCodelLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_codel_memlimit: {
        value: cdktf.numberToHclTerraform(this._fqCodelMemlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_codel_quantum: {
        value: cdktf.numberToHclTerraform(this._fqCodelQuantum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_codel_target: {
        value: cdktf.stringToHclTerraform(this._fqCodelTarget),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mq_pfifo_limit: {
        value: cdktf.numberToHclTerraform(this._mqPfifoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcq_burst_rate: {
        value: cdktf.numberToHclTerraform(this._pcqBurstRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_burst_threshold: {
        value: cdktf.numberToHclTerraform(this._pcqBurstThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_burst_time: {
        value: cdktf.stringToHclTerraform(this._pcqBurstTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcq_classifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pcqClassifier),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pcq_dst_address6_mask: {
        value: cdktf.numberToHclTerraform(this._pcqDstAddress6Mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_dst_address_mask: {
        value: cdktf.numberToHclTerraform(this._pcqDstAddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_limit: {
        value: cdktf.numberToHclTerraform(this._pcqLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_rate: {
        value: cdktf.numberToHclTerraform(this._pcqRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_src_address6_mask: {
        value: cdktf.numberToHclTerraform(this._pcqSrcAddress6Mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_src_address_mask: {
        value: cdktf.numberToHclTerraform(this._pcqSrcAddressMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pcq_total_limit: {
        value: cdktf.numberToHclTerraform(this._pcqTotalLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pfifo_limit: {
        value: cdktf.numberToHclTerraform(this._pfifoLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      red_avg_packet: {
        value: cdktf.numberToHclTerraform(this._redAvgPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      red_burst: {
        value: cdktf.numberToHclTerraform(this._redBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      red_limit: {
        value: cdktf.numberToHclTerraform(this._redLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      red_max_threshold: {
        value: cdktf.numberToHclTerraform(this._redMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      red_min_threshold: {
        value: cdktf.numberToHclTerraform(this._redMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sfq_allot: {
        value: cdktf.numberToHclTerraform(this._sfqAllot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sfq_perturb: {
        value: cdktf.numberToHclTerraform(this._sfqPerturb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
