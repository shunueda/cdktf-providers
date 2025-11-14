// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuFpanomalyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#adom ObjectSystemNpuFpanomaly#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#capwap_minlen_err ObjectSystemNpuFpanomaly#capwap_minlen_err}
  */
  readonly capwapMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#esp_minlen_err ObjectSystemNpuFpanomaly#esp_minlen_err}
  */
  readonly espMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#gre_csum_err ObjectSystemNpuFpanomaly#gre_csum_err}
  */
  readonly greCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#gtpu_plen_err ObjectSystemNpuFpanomaly#gtpu_plen_err}
  */
  readonly gtpuPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#icmp_csum_err ObjectSystemNpuFpanomaly#icmp_csum_err}
  */
  readonly icmpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#icmp_frag ObjectSystemNpuFpanomaly#icmp_frag}
  */
  readonly icmpFrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#icmp_land ObjectSystemNpuFpanomaly#icmp_land}
  */
  readonly icmpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#icmp_minlen_err ObjectSystemNpuFpanomaly#icmp_minlen_err}
  */
  readonly icmpMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#id ObjectSystemNpuFpanomaly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_csum_err ObjectSystemNpuFpanomaly#ipv4_csum_err}
  */
  readonly ipv4CsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_ihl_err ObjectSystemNpuFpanomaly#ipv4_ihl_err}
  */
  readonly ipv4IhlErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_land ObjectSystemNpuFpanomaly#ipv4_land}
  */
  readonly ipv4Land?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_len_err ObjectSystemNpuFpanomaly#ipv4_len_err}
  */
  readonly ipv4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_opt_err ObjectSystemNpuFpanomaly#ipv4_opt_err}
  */
  readonly ipv4OptErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_optlsrr ObjectSystemNpuFpanomaly#ipv4_optlsrr}
  */
  readonly ipv4Optlsrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_optrr ObjectSystemNpuFpanomaly#ipv4_optrr}
  */
  readonly ipv4Optrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_optsecurity ObjectSystemNpuFpanomaly#ipv4_optsecurity}
  */
  readonly ipv4Optsecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_optssrr ObjectSystemNpuFpanomaly#ipv4_optssrr}
  */
  readonly ipv4Optssrr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_optstream ObjectSystemNpuFpanomaly#ipv4_optstream}
  */
  readonly ipv4Optstream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_opttimestamp ObjectSystemNpuFpanomaly#ipv4_opttimestamp}
  */
  readonly ipv4Opttimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_proto_err ObjectSystemNpuFpanomaly#ipv4_proto_err}
  */
  readonly ipv4ProtoErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_ttlzero_err ObjectSystemNpuFpanomaly#ipv4_ttlzero_err}
  */
  readonly ipv4TtlzeroErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_unknopt ObjectSystemNpuFpanomaly#ipv4_unknopt}
  */
  readonly ipv4Unknopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv4_ver_err ObjectSystemNpuFpanomaly#ipv4_ver_err}
  */
  readonly ipv4VerErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_daddr_err ObjectSystemNpuFpanomaly#ipv6_daddr_err}
  */
  readonly ipv6DaddrErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_exthdr_len_err ObjectSystemNpuFpanomaly#ipv6_exthdr_len_err}
  */
  readonly ipv6ExthdrLenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_exthdr_order_err ObjectSystemNpuFpanomaly#ipv6_exthdr_order_err}
  */
  readonly ipv6ExthdrOrderErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_ihl_err ObjectSystemNpuFpanomaly#ipv6_ihl_err}
  */
  readonly ipv6IhlErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_land ObjectSystemNpuFpanomaly#ipv6_land}
  */
  readonly ipv6Land?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_optendpid ObjectSystemNpuFpanomaly#ipv6_optendpid}
  */
  readonly ipv6Optendpid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_opthomeaddr ObjectSystemNpuFpanomaly#ipv6_opthomeaddr}
  */
  readonly ipv6Opthomeaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_optinvld ObjectSystemNpuFpanomaly#ipv6_optinvld}
  */
  readonly ipv6Optinvld?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_optjumbo ObjectSystemNpuFpanomaly#ipv6_optjumbo}
  */
  readonly ipv6Optjumbo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_optnsap ObjectSystemNpuFpanomaly#ipv6_optnsap}
  */
  readonly ipv6Optnsap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_optralert ObjectSystemNpuFpanomaly#ipv6_optralert}
  */
  readonly ipv6Optralert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_opttunnel ObjectSystemNpuFpanomaly#ipv6_opttunnel}
  */
  readonly ipv6Opttunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_plen_zero ObjectSystemNpuFpanomaly#ipv6_plen_zero}
  */
  readonly ipv6PlenZero?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_proto_err ObjectSystemNpuFpanomaly#ipv6_proto_err}
  */
  readonly ipv6ProtoErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_saddr_err ObjectSystemNpuFpanomaly#ipv6_saddr_err}
  */
  readonly ipv6SaddrErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_unknopt ObjectSystemNpuFpanomaly#ipv6_unknopt}
  */
  readonly ipv6Unknopt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#ipv6_ver_err ObjectSystemNpuFpanomaly#ipv6_ver_err}
  */
  readonly ipv6VerErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#nvgre_minlen_err ObjectSystemNpuFpanomaly#nvgre_minlen_err}
  */
  readonly nvgreMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#scopetype ObjectSystemNpuFpanomaly#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#sctp_clen_err ObjectSystemNpuFpanomaly#sctp_clen_err}
  */
  readonly sctpClenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#sctp_crc_err ObjectSystemNpuFpanomaly#sctp_crc_err}
  */
  readonly sctpCrcErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#sctp_csum_err ObjectSystemNpuFpanomaly#sctp_csum_err}
  */
  readonly sctpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#sctp_l4len_err ObjectSystemNpuFpanomaly#sctp_l4len_err}
  */
  readonly sctpL4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_csum_err ObjectSystemNpuFpanomaly#tcp_csum_err}
  */
  readonly tcpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_fin_noack ObjectSystemNpuFpanomaly#tcp_fin_noack}
  */
  readonly tcpFinNoack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_fin_only ObjectSystemNpuFpanomaly#tcp_fin_only}
  */
  readonly tcpFinOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_hlen_err ObjectSystemNpuFpanomaly#tcp_hlen_err}
  */
  readonly tcpHlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_hlenvsl4len_err ObjectSystemNpuFpanomaly#tcp_hlenvsl4len_err}
  */
  readonly tcpHlenvsl4LenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_land ObjectSystemNpuFpanomaly#tcp_land}
  */
  readonly tcpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_no_flag ObjectSystemNpuFpanomaly#tcp_no_flag}
  */
  readonly tcpNoFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_plen_err ObjectSystemNpuFpanomaly#tcp_plen_err}
  */
  readonly tcpPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_syn_data ObjectSystemNpuFpanomaly#tcp_syn_data}
  */
  readonly tcpSynData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_syn_fin ObjectSystemNpuFpanomaly#tcp_syn_fin}
  */
  readonly tcpSynFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#tcp_winnuke ObjectSystemNpuFpanomaly#tcp_winnuke}
  */
  readonly tcpWinnuke?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udp_csum_err ObjectSystemNpuFpanomaly#udp_csum_err}
  */
  readonly udpCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udp_hlen_err ObjectSystemNpuFpanomaly#udp_hlen_err}
  */
  readonly udpHlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udp_land ObjectSystemNpuFpanomaly#udp_land}
  */
  readonly udpLand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udp_len_err ObjectSystemNpuFpanomaly#udp_len_err}
  */
  readonly udpLenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udp_plen_err ObjectSystemNpuFpanomaly#udp_plen_err}
  */
  readonly udpPlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udplite_cover_err ObjectSystemNpuFpanomaly#udplite_cover_err}
  */
  readonly udpliteCoverErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#udplite_csum_err ObjectSystemNpuFpanomaly#udplite_csum_err}
  */
  readonly udpliteCsumErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#uesp_minlen_err ObjectSystemNpuFpanomaly#uesp_minlen_err}
  */
  readonly uespMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#unknproto_minlen_err ObjectSystemNpuFpanomaly#unknproto_minlen_err}
  */
  readonly unknprotoMinlenErr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#vxlan_minlen_err ObjectSystemNpuFpanomaly#vxlan_minlen_err}
  */
  readonly vxlanMinlenErr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly fortimanager_object_system_npu_fpanomaly}
*/
export class ObjectSystemNpuFpanomaly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_fpanomaly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuFpanomaly resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuFpanomaly to import
  * @param importFromId The id of the existing ObjectSystemNpuFpanomaly that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuFpanomaly to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_fpanomaly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_fpanomaly fortimanager_object_system_npu_fpanomaly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuFpanomalyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuFpanomalyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_fpanomaly',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._capwapMinlenErr = config.capwapMinlenErr;
    this._espMinlenErr = config.espMinlenErr;
    this._greCsumErr = config.greCsumErr;
    this._gtpuPlenErr = config.gtpuPlenErr;
    this._icmpCsumErr = config.icmpCsumErr;
    this._icmpFrag = config.icmpFrag;
    this._icmpLand = config.icmpLand;
    this._icmpMinlenErr = config.icmpMinlenErr;
    this._id = config.id;
    this._ipv4CsumErr = config.ipv4CsumErr;
    this._ipv4IhlErr = config.ipv4IhlErr;
    this._ipv4Land = config.ipv4Land;
    this._ipv4LenErr = config.ipv4LenErr;
    this._ipv4OptErr = config.ipv4OptErr;
    this._ipv4Optlsrr = config.ipv4Optlsrr;
    this._ipv4Optrr = config.ipv4Optrr;
    this._ipv4Optsecurity = config.ipv4Optsecurity;
    this._ipv4Optssrr = config.ipv4Optssrr;
    this._ipv4Optstream = config.ipv4Optstream;
    this._ipv4Opttimestamp = config.ipv4Opttimestamp;
    this._ipv4ProtoErr = config.ipv4ProtoErr;
    this._ipv4TtlzeroErr = config.ipv4TtlzeroErr;
    this._ipv4Unknopt = config.ipv4Unknopt;
    this._ipv4VerErr = config.ipv4VerErr;
    this._ipv6DaddrErr = config.ipv6DaddrErr;
    this._ipv6ExthdrLenErr = config.ipv6ExthdrLenErr;
    this._ipv6ExthdrOrderErr = config.ipv6ExthdrOrderErr;
    this._ipv6IhlErr = config.ipv6IhlErr;
    this._ipv6Land = config.ipv6Land;
    this._ipv6Optendpid = config.ipv6Optendpid;
    this._ipv6Opthomeaddr = config.ipv6Opthomeaddr;
    this._ipv6Optinvld = config.ipv6Optinvld;
    this._ipv6Optjumbo = config.ipv6Optjumbo;
    this._ipv6Optnsap = config.ipv6Optnsap;
    this._ipv6Optralert = config.ipv6Optralert;
    this._ipv6Opttunnel = config.ipv6Opttunnel;
    this._ipv6PlenZero = config.ipv6PlenZero;
    this._ipv6ProtoErr = config.ipv6ProtoErr;
    this._ipv6SaddrErr = config.ipv6SaddrErr;
    this._ipv6Unknopt = config.ipv6Unknopt;
    this._ipv6VerErr = config.ipv6VerErr;
    this._nvgreMinlenErr = config.nvgreMinlenErr;
    this._scopetype = config.scopetype;
    this._sctpClenErr = config.sctpClenErr;
    this._sctpCrcErr = config.sctpCrcErr;
    this._sctpCsumErr = config.sctpCsumErr;
    this._sctpL4LenErr = config.sctpL4LenErr;
    this._tcpCsumErr = config.tcpCsumErr;
    this._tcpFinNoack = config.tcpFinNoack;
    this._tcpFinOnly = config.tcpFinOnly;
    this._tcpHlenErr = config.tcpHlenErr;
    this._tcpHlenvsl4LenErr = config.tcpHlenvsl4LenErr;
    this._tcpLand = config.tcpLand;
    this._tcpNoFlag = config.tcpNoFlag;
    this._tcpPlenErr = config.tcpPlenErr;
    this._tcpSynData = config.tcpSynData;
    this._tcpSynFin = config.tcpSynFin;
    this._tcpWinnuke = config.tcpWinnuke;
    this._udpCsumErr = config.udpCsumErr;
    this._udpHlenErr = config.udpHlenErr;
    this._udpLand = config.udpLand;
    this._udpLenErr = config.udpLenErr;
    this._udpPlenErr = config.udpPlenErr;
    this._udpliteCoverErr = config.udpliteCoverErr;
    this._udpliteCsumErr = config.udpliteCsumErr;
    this._uespMinlenErr = config.uespMinlenErr;
    this._unknprotoMinlenErr = config.unknprotoMinlenErr;
    this._vxlanMinlenErr = config.vxlanMinlenErr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // capwap_minlen_err - computed: false, optional: true, required: false
  private _capwapMinlenErr?: string; 
  public get capwapMinlenErr() {
    return this.getStringAttribute('capwap_minlen_err');
  }
  public set capwapMinlenErr(value: string) {
    this._capwapMinlenErr = value;
  }
  public resetCapwapMinlenErr() {
    this._capwapMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapMinlenErrInput() {
    return this._capwapMinlenErr;
  }

  // esp_minlen_err - computed: true, optional: true, required: false
  private _espMinlenErr?: string; 
  public get espMinlenErr() {
    return this.getStringAttribute('esp_minlen_err');
  }
  public set espMinlenErr(value: string) {
    this._espMinlenErr = value;
  }
  public resetEspMinlenErr() {
    this._espMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espMinlenErrInput() {
    return this._espMinlenErr;
  }

  // gre_csum_err - computed: false, optional: true, required: false
  private _greCsumErr?: string; 
  public get greCsumErr() {
    return this.getStringAttribute('gre_csum_err');
  }
  public set greCsumErr(value: string) {
    this._greCsumErr = value;
  }
  public resetGreCsumErr() {
    this._greCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greCsumErrInput() {
    return this._greCsumErr;
  }

  // gtpu_plen_err - computed: false, optional: true, required: false
  private _gtpuPlenErr?: string; 
  public get gtpuPlenErr() {
    return this.getStringAttribute('gtpu_plen_err');
  }
  public set gtpuPlenErr(value: string) {
    this._gtpuPlenErr = value;
  }
  public resetGtpuPlenErr() {
    this._gtpuPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpuPlenErrInput() {
    return this._gtpuPlenErr;
  }

  // icmp_csum_err - computed: true, optional: true, required: false
  private _icmpCsumErr?: string; 
  public get icmpCsumErr() {
    return this.getStringAttribute('icmp_csum_err');
  }
  public set icmpCsumErr(value: string) {
    this._icmpCsumErr = value;
  }
  public resetIcmpCsumErr() {
    this._icmpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCsumErrInput() {
    return this._icmpCsumErr;
  }

  // icmp_frag - computed: true, optional: true, required: false
  private _icmpFrag?: string; 
  public get icmpFrag() {
    return this.getStringAttribute('icmp_frag');
  }
  public set icmpFrag(value: string) {
    this._icmpFrag = value;
  }
  public resetIcmpFrag() {
    this._icmpFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFragInput() {
    return this._icmpFrag;
  }

  // icmp_land - computed: true, optional: true, required: false
  private _icmpLand?: string; 
  public get icmpLand() {
    return this.getStringAttribute('icmp_land');
  }
  public set icmpLand(value: string) {
    this._icmpLand = value;
  }
  public resetIcmpLand() {
    this._icmpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpLandInput() {
    return this._icmpLand;
  }

  // icmp_minlen_err - computed: true, optional: true, required: false
  private _icmpMinlenErr?: string; 
  public get icmpMinlenErr() {
    return this.getStringAttribute('icmp_minlen_err');
  }
  public set icmpMinlenErr(value: string) {
    this._icmpMinlenErr = value;
  }
  public resetIcmpMinlenErr() {
    this._icmpMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMinlenErrInput() {
    return this._icmpMinlenErr;
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

  // ipv4_csum_err - computed: true, optional: true, required: false
  private _ipv4CsumErr?: string; 
  public get ipv4CsumErr() {
    return this.getStringAttribute('ipv4_csum_err');
  }
  public set ipv4CsumErr(value: string) {
    this._ipv4CsumErr = value;
  }
  public resetIpv4CsumErr() {
    this._ipv4CsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CsumErrInput() {
    return this._ipv4CsumErr;
  }

  // ipv4_ihl_err - computed: true, optional: true, required: false
  private _ipv4IhlErr?: string; 
  public get ipv4IhlErr() {
    return this.getStringAttribute('ipv4_ihl_err');
  }
  public set ipv4IhlErr(value: string) {
    this._ipv4IhlErr = value;
  }
  public resetIpv4IhlErr() {
    this._ipv4IhlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IhlErrInput() {
    return this._ipv4IhlErr;
  }

  // ipv4_land - computed: true, optional: true, required: false
  private _ipv4Land?: string; 
  public get ipv4Land() {
    return this.getStringAttribute('ipv4_land');
  }
  public set ipv4Land(value: string) {
    this._ipv4Land = value;
  }
  public resetIpv4Land() {
    this._ipv4Land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LandInput() {
    return this._ipv4Land;
  }

  // ipv4_len_err - computed: true, optional: true, required: false
  private _ipv4LenErr?: string; 
  public get ipv4LenErr() {
    return this.getStringAttribute('ipv4_len_err');
  }
  public set ipv4LenErr(value: string) {
    this._ipv4LenErr = value;
  }
  public resetIpv4LenErr() {
    this._ipv4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LenErrInput() {
    return this._ipv4LenErr;
  }

  // ipv4_opt_err - computed: true, optional: true, required: false
  private _ipv4OptErr?: string; 
  public get ipv4OptErr() {
    return this.getStringAttribute('ipv4_opt_err');
  }
  public set ipv4OptErr(value: string) {
    this._ipv4OptErr = value;
  }
  public resetIpv4OptErr() {
    this._ipv4OptErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptErrInput() {
    return this._ipv4OptErr;
  }

  // ipv4_optlsrr - computed: true, optional: true, required: false
  private _ipv4Optlsrr?: string; 
  public get ipv4Optlsrr() {
    return this.getStringAttribute('ipv4_optlsrr');
  }
  public set ipv4Optlsrr(value: string) {
    this._ipv4Optlsrr = value;
  }
  public resetIpv4Optlsrr() {
    this._ipv4Optlsrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptlsrrInput() {
    return this._ipv4Optlsrr;
  }

  // ipv4_optrr - computed: true, optional: true, required: false
  private _ipv4Optrr?: string; 
  public get ipv4Optrr() {
    return this.getStringAttribute('ipv4_optrr');
  }
  public set ipv4Optrr(value: string) {
    this._ipv4Optrr = value;
  }
  public resetIpv4Optrr() {
    this._ipv4Optrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptrrInput() {
    return this._ipv4Optrr;
  }

  // ipv4_optsecurity - computed: true, optional: true, required: false
  private _ipv4Optsecurity?: string; 
  public get ipv4Optsecurity() {
    return this.getStringAttribute('ipv4_optsecurity');
  }
  public set ipv4Optsecurity(value: string) {
    this._ipv4Optsecurity = value;
  }
  public resetIpv4Optsecurity() {
    this._ipv4Optsecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptsecurityInput() {
    return this._ipv4Optsecurity;
  }

  // ipv4_optssrr - computed: true, optional: true, required: false
  private _ipv4Optssrr?: string; 
  public get ipv4Optssrr() {
    return this.getStringAttribute('ipv4_optssrr');
  }
  public set ipv4Optssrr(value: string) {
    this._ipv4Optssrr = value;
  }
  public resetIpv4Optssrr() {
    this._ipv4Optssrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptssrrInput() {
    return this._ipv4Optssrr;
  }

  // ipv4_optstream - computed: true, optional: true, required: false
  private _ipv4Optstream?: string; 
  public get ipv4Optstream() {
    return this.getStringAttribute('ipv4_optstream');
  }
  public set ipv4Optstream(value: string) {
    this._ipv4Optstream = value;
  }
  public resetIpv4Optstream() {
    this._ipv4Optstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptstreamInput() {
    return this._ipv4Optstream;
  }

  // ipv4_opttimestamp - computed: true, optional: true, required: false
  private _ipv4Opttimestamp?: string; 
  public get ipv4Opttimestamp() {
    return this.getStringAttribute('ipv4_opttimestamp');
  }
  public set ipv4Opttimestamp(value: string) {
    this._ipv4Opttimestamp = value;
  }
  public resetIpv4Opttimestamp() {
    this._ipv4Opttimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OpttimestampInput() {
    return this._ipv4Opttimestamp;
  }

  // ipv4_proto_err - computed: true, optional: true, required: false
  private _ipv4ProtoErr?: string; 
  public get ipv4ProtoErr() {
    return this.getStringAttribute('ipv4_proto_err');
  }
  public set ipv4ProtoErr(value: string) {
    this._ipv4ProtoErr = value;
  }
  public resetIpv4ProtoErr() {
    this._ipv4ProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ProtoErrInput() {
    return this._ipv4ProtoErr;
  }

  // ipv4_ttlzero_err - computed: true, optional: true, required: false
  private _ipv4TtlzeroErr?: string; 
  public get ipv4TtlzeroErr() {
    return this.getStringAttribute('ipv4_ttlzero_err');
  }
  public set ipv4TtlzeroErr(value: string) {
    this._ipv4TtlzeroErr = value;
  }
  public resetIpv4TtlzeroErr() {
    this._ipv4TtlzeroErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TtlzeroErrInput() {
    return this._ipv4TtlzeroErr;
  }

  // ipv4_unknopt - computed: true, optional: true, required: false
  private _ipv4Unknopt?: string; 
  public get ipv4Unknopt() {
    return this.getStringAttribute('ipv4_unknopt');
  }
  public set ipv4Unknopt(value: string) {
    this._ipv4Unknopt = value;
  }
  public resetIpv4Unknopt() {
    this._ipv4Unknopt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnknoptInput() {
    return this._ipv4Unknopt;
  }

  // ipv4_ver_err - computed: true, optional: true, required: false
  private _ipv4VerErr?: string; 
  public get ipv4VerErr() {
    return this.getStringAttribute('ipv4_ver_err');
  }
  public set ipv4VerErr(value: string) {
    this._ipv4VerErr = value;
  }
  public resetIpv4VerErr() {
    this._ipv4VerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VerErrInput() {
    return this._ipv4VerErr;
  }

  // ipv6_daddr_err - computed: true, optional: true, required: false
  private _ipv6DaddrErr?: string; 
  public get ipv6DaddrErr() {
    return this.getStringAttribute('ipv6_daddr_err');
  }
  public set ipv6DaddrErr(value: string) {
    this._ipv6DaddrErr = value;
  }
  public resetIpv6DaddrErr() {
    this._ipv6DaddrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DaddrErrInput() {
    return this._ipv6DaddrErr;
  }

  // ipv6_exthdr_len_err - computed: true, optional: true, required: false
  private _ipv6ExthdrLenErr?: string; 
  public get ipv6ExthdrLenErr() {
    return this.getStringAttribute('ipv6_exthdr_len_err');
  }
  public set ipv6ExthdrLenErr(value: string) {
    this._ipv6ExthdrLenErr = value;
  }
  public resetIpv6ExthdrLenErr() {
    this._ipv6ExthdrLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExthdrLenErrInput() {
    return this._ipv6ExthdrLenErr;
  }

  // ipv6_exthdr_order_err - computed: true, optional: true, required: false
  private _ipv6ExthdrOrderErr?: string; 
  public get ipv6ExthdrOrderErr() {
    return this.getStringAttribute('ipv6_exthdr_order_err');
  }
  public set ipv6ExthdrOrderErr(value: string) {
    this._ipv6ExthdrOrderErr = value;
  }
  public resetIpv6ExthdrOrderErr() {
    this._ipv6ExthdrOrderErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExthdrOrderErrInput() {
    return this._ipv6ExthdrOrderErr;
  }

  // ipv6_ihl_err - computed: true, optional: true, required: false
  private _ipv6IhlErr?: string; 
  public get ipv6IhlErr() {
    return this.getStringAttribute('ipv6_ihl_err');
  }
  public set ipv6IhlErr(value: string) {
    this._ipv6IhlErr = value;
  }
  public resetIpv6IhlErr() {
    this._ipv6IhlErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IhlErrInput() {
    return this._ipv6IhlErr;
  }

  // ipv6_land - computed: true, optional: true, required: false
  private _ipv6Land?: string; 
  public get ipv6Land() {
    return this.getStringAttribute('ipv6_land');
  }
  public set ipv6Land(value: string) {
    this._ipv6Land = value;
  }
  public resetIpv6Land() {
    this._ipv6Land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LandInput() {
    return this._ipv6Land;
  }

  // ipv6_optendpid - computed: true, optional: true, required: false
  private _ipv6Optendpid?: string; 
  public get ipv6Optendpid() {
    return this.getStringAttribute('ipv6_optendpid');
  }
  public set ipv6Optendpid(value: string) {
    this._ipv6Optendpid = value;
  }
  public resetIpv6Optendpid() {
    this._ipv6Optendpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptendpidInput() {
    return this._ipv6Optendpid;
  }

  // ipv6_opthomeaddr - computed: true, optional: true, required: false
  private _ipv6Opthomeaddr?: string; 
  public get ipv6Opthomeaddr() {
    return this.getStringAttribute('ipv6_opthomeaddr');
  }
  public set ipv6Opthomeaddr(value: string) {
    this._ipv6Opthomeaddr = value;
  }
  public resetIpv6Opthomeaddr() {
    this._ipv6Opthomeaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OpthomeaddrInput() {
    return this._ipv6Opthomeaddr;
  }

  // ipv6_optinvld - computed: true, optional: true, required: false
  private _ipv6Optinvld?: string; 
  public get ipv6Optinvld() {
    return this.getStringAttribute('ipv6_optinvld');
  }
  public set ipv6Optinvld(value: string) {
    this._ipv6Optinvld = value;
  }
  public resetIpv6Optinvld() {
    this._ipv6Optinvld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptinvldInput() {
    return this._ipv6Optinvld;
  }

  // ipv6_optjumbo - computed: true, optional: true, required: false
  private _ipv6Optjumbo?: string; 
  public get ipv6Optjumbo() {
    return this.getStringAttribute('ipv6_optjumbo');
  }
  public set ipv6Optjumbo(value: string) {
    this._ipv6Optjumbo = value;
  }
  public resetIpv6Optjumbo() {
    this._ipv6Optjumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptjumboInput() {
    return this._ipv6Optjumbo;
  }

  // ipv6_optnsap - computed: true, optional: true, required: false
  private _ipv6Optnsap?: string; 
  public get ipv6Optnsap() {
    return this.getStringAttribute('ipv6_optnsap');
  }
  public set ipv6Optnsap(value: string) {
    this._ipv6Optnsap = value;
  }
  public resetIpv6Optnsap() {
    this._ipv6Optnsap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptnsapInput() {
    return this._ipv6Optnsap;
  }

  // ipv6_optralert - computed: true, optional: true, required: false
  private _ipv6Optralert?: string; 
  public get ipv6Optralert() {
    return this.getStringAttribute('ipv6_optralert');
  }
  public set ipv6Optralert(value: string) {
    this._ipv6Optralert = value;
  }
  public resetIpv6Optralert() {
    this._ipv6Optralert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OptralertInput() {
    return this._ipv6Optralert;
  }

  // ipv6_opttunnel - computed: true, optional: true, required: false
  private _ipv6Opttunnel?: string; 
  public get ipv6Opttunnel() {
    return this.getStringAttribute('ipv6_opttunnel');
  }
  public set ipv6Opttunnel(value: string) {
    this._ipv6Opttunnel = value;
  }
  public resetIpv6Opttunnel() {
    this._ipv6Opttunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OpttunnelInput() {
    return this._ipv6Opttunnel;
  }

  // ipv6_plen_zero - computed: true, optional: true, required: false
  private _ipv6PlenZero?: string; 
  public get ipv6PlenZero() {
    return this.getStringAttribute('ipv6_plen_zero');
  }
  public set ipv6PlenZero(value: string) {
    this._ipv6PlenZero = value;
  }
  public resetIpv6PlenZero() {
    this._ipv6PlenZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PlenZeroInput() {
    return this._ipv6PlenZero;
  }

  // ipv6_proto_err - computed: true, optional: true, required: false
  private _ipv6ProtoErr?: string; 
  public get ipv6ProtoErr() {
    return this.getStringAttribute('ipv6_proto_err');
  }
  public set ipv6ProtoErr(value: string) {
    this._ipv6ProtoErr = value;
  }
  public resetIpv6ProtoErr() {
    this._ipv6ProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ProtoErrInput() {
    return this._ipv6ProtoErr;
  }

  // ipv6_saddr_err - computed: true, optional: true, required: false
  private _ipv6SaddrErr?: string; 
  public get ipv6SaddrErr() {
    return this.getStringAttribute('ipv6_saddr_err');
  }
  public set ipv6SaddrErr(value: string) {
    this._ipv6SaddrErr = value;
  }
  public resetIpv6SaddrErr() {
    this._ipv6SaddrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SaddrErrInput() {
    return this._ipv6SaddrErr;
  }

  // ipv6_unknopt - computed: true, optional: true, required: false
  private _ipv6Unknopt?: string; 
  public get ipv6Unknopt() {
    return this.getStringAttribute('ipv6_unknopt');
  }
  public set ipv6Unknopt(value: string) {
    this._ipv6Unknopt = value;
  }
  public resetIpv6Unknopt() {
    this._ipv6Unknopt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnknoptInput() {
    return this._ipv6Unknopt;
  }

  // ipv6_ver_err - computed: true, optional: true, required: false
  private _ipv6VerErr?: string; 
  public get ipv6VerErr() {
    return this.getStringAttribute('ipv6_ver_err');
  }
  public set ipv6VerErr(value: string) {
    this._ipv6VerErr = value;
  }
  public resetIpv6VerErr() {
    this._ipv6VerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VerErrInput() {
    return this._ipv6VerErr;
  }

  // nvgre_minlen_err - computed: false, optional: true, required: false
  private _nvgreMinlenErr?: string; 
  public get nvgreMinlenErr() {
    return this.getStringAttribute('nvgre_minlen_err');
  }
  public set nvgreMinlenErr(value: string) {
    this._nvgreMinlenErr = value;
  }
  public resetNvgreMinlenErr() {
    this._nvgreMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreMinlenErrInput() {
    return this._nvgreMinlenErr;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sctp_clen_err - computed: false, optional: true, required: false
  private _sctpClenErr?: string; 
  public get sctpClenErr() {
    return this.getStringAttribute('sctp_clen_err');
  }
  public set sctpClenErr(value: string) {
    this._sctpClenErr = value;
  }
  public resetSctpClenErr() {
    this._sctpClenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpClenErrInput() {
    return this._sctpClenErr;
  }

  // sctp_crc_err - computed: false, optional: true, required: false
  private _sctpCrcErr?: string; 
  public get sctpCrcErr() {
    return this.getStringAttribute('sctp_crc_err');
  }
  public set sctpCrcErr(value: string) {
    this._sctpCrcErr = value;
  }
  public resetSctpCrcErr() {
    this._sctpCrcErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpCrcErrInput() {
    return this._sctpCrcErr;
  }

  // sctp_csum_err - computed: true, optional: true, required: false
  private _sctpCsumErr?: string; 
  public get sctpCsumErr() {
    return this.getStringAttribute('sctp_csum_err');
  }
  public set sctpCsumErr(value: string) {
    this._sctpCsumErr = value;
  }
  public resetSctpCsumErr() {
    this._sctpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpCsumErrInput() {
    return this._sctpCsumErr;
  }

  // sctp_l4len_err - computed: false, optional: true, required: false
  private _sctpL4LenErr?: string; 
  public get sctpL4LenErr() {
    return this.getStringAttribute('sctp_l4len_err');
  }
  public set sctpL4LenErr(value: string) {
    this._sctpL4LenErr = value;
  }
  public resetSctpL4LenErr() {
    this._sctpL4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpL4LenErrInput() {
    return this._sctpL4LenErr;
  }

  // tcp_csum_err - computed: true, optional: true, required: false
  private _tcpCsumErr?: string; 
  public get tcpCsumErr() {
    return this.getStringAttribute('tcp_csum_err');
  }
  public set tcpCsumErr(value: string) {
    this._tcpCsumErr = value;
  }
  public resetTcpCsumErr() {
    this._tcpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCsumErrInput() {
    return this._tcpCsumErr;
  }

  // tcp_fin_noack - computed: true, optional: true, required: false
  private _tcpFinNoack?: string; 
  public get tcpFinNoack() {
    return this.getStringAttribute('tcp_fin_noack');
  }
  public set tcpFinNoack(value: string) {
    this._tcpFinNoack = value;
  }
  public resetTcpFinNoack() {
    this._tcpFinNoack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinNoackInput() {
    return this._tcpFinNoack;
  }

  // tcp_fin_only - computed: true, optional: true, required: false
  private _tcpFinOnly?: string; 
  public get tcpFinOnly() {
    return this.getStringAttribute('tcp_fin_only');
  }
  public set tcpFinOnly(value: string) {
    this._tcpFinOnly = value;
  }
  public resetTcpFinOnly() {
    this._tcpFinOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinOnlyInput() {
    return this._tcpFinOnly;
  }

  // tcp_hlen_err - computed: true, optional: true, required: false
  private _tcpHlenErr?: string; 
  public get tcpHlenErr() {
    return this.getStringAttribute('tcp_hlen_err');
  }
  public set tcpHlenErr(value: string) {
    this._tcpHlenErr = value;
  }
  public resetTcpHlenErr() {
    this._tcpHlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHlenErrInput() {
    return this._tcpHlenErr;
  }

  // tcp_hlenvsl4len_err - computed: false, optional: true, required: false
  private _tcpHlenvsl4LenErr?: string; 
  public get tcpHlenvsl4LenErr() {
    return this.getStringAttribute('tcp_hlenvsl4len_err');
  }
  public set tcpHlenvsl4LenErr(value: string) {
    this._tcpHlenvsl4LenErr = value;
  }
  public resetTcpHlenvsl4LenErr() {
    this._tcpHlenvsl4LenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHlenvsl4LenErrInput() {
    return this._tcpHlenvsl4LenErr;
  }

  // tcp_land - computed: true, optional: true, required: false
  private _tcpLand?: string; 
  public get tcpLand() {
    return this.getStringAttribute('tcp_land');
  }
  public set tcpLand(value: string) {
    this._tcpLand = value;
  }
  public resetTcpLand() {
    this._tcpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLandInput() {
    return this._tcpLand;
  }

  // tcp_no_flag - computed: true, optional: true, required: false
  private _tcpNoFlag?: string; 
  public get tcpNoFlag() {
    return this.getStringAttribute('tcp_no_flag');
  }
  public set tcpNoFlag(value: string) {
    this._tcpNoFlag = value;
  }
  public resetTcpNoFlag() {
    this._tcpNoFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNoFlagInput() {
    return this._tcpNoFlag;
  }

  // tcp_plen_err - computed: true, optional: true, required: false
  private _tcpPlenErr?: string; 
  public get tcpPlenErr() {
    return this.getStringAttribute('tcp_plen_err');
  }
  public set tcpPlenErr(value: string) {
    this._tcpPlenErr = value;
  }
  public resetTcpPlenErr() {
    this._tcpPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPlenErrInput() {
    return this._tcpPlenErr;
  }

  // tcp_syn_data - computed: true, optional: true, required: false
  private _tcpSynData?: string; 
  public get tcpSynData() {
    return this.getStringAttribute('tcp_syn_data');
  }
  public set tcpSynData(value: string) {
    this._tcpSynData = value;
  }
  public resetTcpSynData() {
    this._tcpSynData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynDataInput() {
    return this._tcpSynData;
  }

  // tcp_syn_fin - computed: true, optional: true, required: false
  private _tcpSynFin?: string; 
  public get tcpSynFin() {
    return this.getStringAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: string) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
  }

  // tcp_winnuke - computed: true, optional: true, required: false
  private _tcpWinnuke?: string; 
  public get tcpWinnuke() {
    return this.getStringAttribute('tcp_winnuke');
  }
  public set tcpWinnuke(value: string) {
    this._tcpWinnuke = value;
  }
  public resetTcpWinnuke() {
    this._tcpWinnuke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWinnukeInput() {
    return this._tcpWinnuke;
  }

  // udp_csum_err - computed: true, optional: true, required: false
  private _udpCsumErr?: string; 
  public get udpCsumErr() {
    return this.getStringAttribute('udp_csum_err');
  }
  public set udpCsumErr(value: string) {
    this._udpCsumErr = value;
  }
  public resetUdpCsumErr() {
    this._udpCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCsumErrInput() {
    return this._udpCsumErr;
  }

  // udp_hlen_err - computed: true, optional: true, required: false
  private _udpHlenErr?: string; 
  public get udpHlenErr() {
    return this.getStringAttribute('udp_hlen_err');
  }
  public set udpHlenErr(value: string) {
    this._udpHlenErr = value;
  }
  public resetUdpHlenErr() {
    this._udpHlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpHlenErrInput() {
    return this._udpHlenErr;
  }

  // udp_land - computed: true, optional: true, required: false
  private _udpLand?: string; 
  public get udpLand() {
    return this.getStringAttribute('udp_land');
  }
  public set udpLand(value: string) {
    this._udpLand = value;
  }
  public resetUdpLand() {
    this._udpLand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLandInput() {
    return this._udpLand;
  }

  // udp_len_err - computed: true, optional: true, required: false
  private _udpLenErr?: string; 
  public get udpLenErr() {
    return this.getStringAttribute('udp_len_err');
  }
  public set udpLenErr(value: string) {
    this._udpLenErr = value;
  }
  public resetUdpLenErr() {
    this._udpLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLenErrInput() {
    return this._udpLenErr;
  }

  // udp_plen_err - computed: true, optional: true, required: false
  private _udpPlenErr?: string; 
  public get udpPlenErr() {
    return this.getStringAttribute('udp_plen_err');
  }
  public set udpPlenErr(value: string) {
    this._udpPlenErr = value;
  }
  public resetUdpPlenErr() {
    this._udpPlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPlenErrInput() {
    return this._udpPlenErr;
  }

  // udplite_cover_err - computed: true, optional: true, required: false
  private _udpliteCoverErr?: string; 
  public get udpliteCoverErr() {
    return this.getStringAttribute('udplite_cover_err');
  }
  public set udpliteCoverErr(value: string) {
    this._udpliteCoverErr = value;
  }
  public resetUdpliteCoverErr() {
    this._udpliteCoverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpliteCoverErrInput() {
    return this._udpliteCoverErr;
  }

  // udplite_csum_err - computed: true, optional: true, required: false
  private _udpliteCsumErr?: string; 
  public get udpliteCsumErr() {
    return this.getStringAttribute('udplite_csum_err');
  }
  public set udpliteCsumErr(value: string) {
    this._udpliteCsumErr = value;
  }
  public resetUdpliteCsumErr() {
    this._udpliteCsumErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpliteCsumErrInput() {
    return this._udpliteCsumErr;
  }

  // uesp_minlen_err - computed: false, optional: true, required: false
  private _uespMinlenErr?: string; 
  public get uespMinlenErr() {
    return this.getStringAttribute('uesp_minlen_err');
  }
  public set uespMinlenErr(value: string) {
    this._uespMinlenErr = value;
  }
  public resetUespMinlenErr() {
    this._uespMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uespMinlenErrInput() {
    return this._uespMinlenErr;
  }

  // unknproto_minlen_err - computed: true, optional: true, required: false
  private _unknprotoMinlenErr?: string; 
  public get unknprotoMinlenErr() {
    return this.getStringAttribute('unknproto_minlen_err');
  }
  public set unknprotoMinlenErr(value: string) {
    this._unknprotoMinlenErr = value;
  }
  public resetUnknprotoMinlenErr() {
    this._unknprotoMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknprotoMinlenErrInput() {
    return this._unknprotoMinlenErr;
  }

  // vxlan_minlen_err - computed: false, optional: true, required: false
  private _vxlanMinlenErr?: string; 
  public get vxlanMinlenErr() {
    return this.getStringAttribute('vxlan_minlen_err');
  }
  public set vxlanMinlenErr(value: string) {
    this._vxlanMinlenErr = value;
  }
  public resetVxlanMinlenErr() {
    this._vxlanMinlenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanMinlenErrInput() {
    return this._vxlanMinlenErr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      capwap_minlen_err: cdktf.stringToTerraform(this._capwapMinlenErr),
      esp_minlen_err: cdktf.stringToTerraform(this._espMinlenErr),
      gre_csum_err: cdktf.stringToTerraform(this._greCsumErr),
      gtpu_plen_err: cdktf.stringToTerraform(this._gtpuPlenErr),
      icmp_csum_err: cdktf.stringToTerraform(this._icmpCsumErr),
      icmp_frag: cdktf.stringToTerraform(this._icmpFrag),
      icmp_land: cdktf.stringToTerraform(this._icmpLand),
      icmp_minlen_err: cdktf.stringToTerraform(this._icmpMinlenErr),
      id: cdktf.stringToTerraform(this._id),
      ipv4_csum_err: cdktf.stringToTerraform(this._ipv4CsumErr),
      ipv4_ihl_err: cdktf.stringToTerraform(this._ipv4IhlErr),
      ipv4_land: cdktf.stringToTerraform(this._ipv4Land),
      ipv4_len_err: cdktf.stringToTerraform(this._ipv4LenErr),
      ipv4_opt_err: cdktf.stringToTerraform(this._ipv4OptErr),
      ipv4_optlsrr: cdktf.stringToTerraform(this._ipv4Optlsrr),
      ipv4_optrr: cdktf.stringToTerraform(this._ipv4Optrr),
      ipv4_optsecurity: cdktf.stringToTerraform(this._ipv4Optsecurity),
      ipv4_optssrr: cdktf.stringToTerraform(this._ipv4Optssrr),
      ipv4_optstream: cdktf.stringToTerraform(this._ipv4Optstream),
      ipv4_opttimestamp: cdktf.stringToTerraform(this._ipv4Opttimestamp),
      ipv4_proto_err: cdktf.stringToTerraform(this._ipv4ProtoErr),
      ipv4_ttlzero_err: cdktf.stringToTerraform(this._ipv4TtlzeroErr),
      ipv4_unknopt: cdktf.stringToTerraform(this._ipv4Unknopt),
      ipv4_ver_err: cdktf.stringToTerraform(this._ipv4VerErr),
      ipv6_daddr_err: cdktf.stringToTerraform(this._ipv6DaddrErr),
      ipv6_exthdr_len_err: cdktf.stringToTerraform(this._ipv6ExthdrLenErr),
      ipv6_exthdr_order_err: cdktf.stringToTerraform(this._ipv6ExthdrOrderErr),
      ipv6_ihl_err: cdktf.stringToTerraform(this._ipv6IhlErr),
      ipv6_land: cdktf.stringToTerraform(this._ipv6Land),
      ipv6_optendpid: cdktf.stringToTerraform(this._ipv6Optendpid),
      ipv6_opthomeaddr: cdktf.stringToTerraform(this._ipv6Opthomeaddr),
      ipv6_optinvld: cdktf.stringToTerraform(this._ipv6Optinvld),
      ipv6_optjumbo: cdktf.stringToTerraform(this._ipv6Optjumbo),
      ipv6_optnsap: cdktf.stringToTerraform(this._ipv6Optnsap),
      ipv6_optralert: cdktf.stringToTerraform(this._ipv6Optralert),
      ipv6_opttunnel: cdktf.stringToTerraform(this._ipv6Opttunnel),
      ipv6_plen_zero: cdktf.stringToTerraform(this._ipv6PlenZero),
      ipv6_proto_err: cdktf.stringToTerraform(this._ipv6ProtoErr),
      ipv6_saddr_err: cdktf.stringToTerraform(this._ipv6SaddrErr),
      ipv6_unknopt: cdktf.stringToTerraform(this._ipv6Unknopt),
      ipv6_ver_err: cdktf.stringToTerraform(this._ipv6VerErr),
      nvgre_minlen_err: cdktf.stringToTerraform(this._nvgreMinlenErr),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sctp_clen_err: cdktf.stringToTerraform(this._sctpClenErr),
      sctp_crc_err: cdktf.stringToTerraform(this._sctpCrcErr),
      sctp_csum_err: cdktf.stringToTerraform(this._sctpCsumErr),
      sctp_l4len_err: cdktf.stringToTerraform(this._sctpL4LenErr),
      tcp_csum_err: cdktf.stringToTerraform(this._tcpCsumErr),
      tcp_fin_noack: cdktf.stringToTerraform(this._tcpFinNoack),
      tcp_fin_only: cdktf.stringToTerraform(this._tcpFinOnly),
      tcp_hlen_err: cdktf.stringToTerraform(this._tcpHlenErr),
      tcp_hlenvsl4len_err: cdktf.stringToTerraform(this._tcpHlenvsl4LenErr),
      tcp_land: cdktf.stringToTerraform(this._tcpLand),
      tcp_no_flag: cdktf.stringToTerraform(this._tcpNoFlag),
      tcp_plen_err: cdktf.stringToTerraform(this._tcpPlenErr),
      tcp_syn_data: cdktf.stringToTerraform(this._tcpSynData),
      tcp_syn_fin: cdktf.stringToTerraform(this._tcpSynFin),
      tcp_winnuke: cdktf.stringToTerraform(this._tcpWinnuke),
      udp_csum_err: cdktf.stringToTerraform(this._udpCsumErr),
      udp_hlen_err: cdktf.stringToTerraform(this._udpHlenErr),
      udp_land: cdktf.stringToTerraform(this._udpLand),
      udp_len_err: cdktf.stringToTerraform(this._udpLenErr),
      udp_plen_err: cdktf.stringToTerraform(this._udpPlenErr),
      udplite_cover_err: cdktf.stringToTerraform(this._udpliteCoverErr),
      udplite_csum_err: cdktf.stringToTerraform(this._udpliteCsumErr),
      uesp_minlen_err: cdktf.stringToTerraform(this._uespMinlenErr),
      unknproto_minlen_err: cdktf.stringToTerraform(this._unknprotoMinlenErr),
      vxlan_minlen_err: cdktf.stringToTerraform(this._vxlanMinlenErr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capwap_minlen_err: {
        value: cdktf.stringToHclTerraform(this._capwapMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esp_minlen_err: {
        value: cdktf.stringToHclTerraform(this._espMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_csum_err: {
        value: cdktf.stringToHclTerraform(this._greCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtpu_plen_err: {
        value: cdktf.stringToHclTerraform(this._gtpuPlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_csum_err: {
        value: cdktf.stringToHclTerraform(this._icmpCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_frag: {
        value: cdktf.stringToHclTerraform(this._icmpFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_land: {
        value: cdktf.stringToHclTerraform(this._icmpLand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_minlen_err: {
        value: cdktf.stringToHclTerraform(this._icmpMinlenErr),
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
      ipv4_csum_err: {
        value: cdktf.stringToHclTerraform(this._ipv4CsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_ihl_err: {
        value: cdktf.stringToHclTerraform(this._ipv4IhlErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_land: {
        value: cdktf.stringToHclTerraform(this._ipv4Land),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_len_err: {
        value: cdktf.stringToHclTerraform(this._ipv4LenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_opt_err: {
        value: cdktf.stringToHclTerraform(this._ipv4OptErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_optlsrr: {
        value: cdktf.stringToHclTerraform(this._ipv4Optlsrr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_optrr: {
        value: cdktf.stringToHclTerraform(this._ipv4Optrr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_optsecurity: {
        value: cdktf.stringToHclTerraform(this._ipv4Optsecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_optssrr: {
        value: cdktf.stringToHclTerraform(this._ipv4Optssrr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_optstream: {
        value: cdktf.stringToHclTerraform(this._ipv4Optstream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_opttimestamp: {
        value: cdktf.stringToHclTerraform(this._ipv4Opttimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_proto_err: {
        value: cdktf.stringToHclTerraform(this._ipv4ProtoErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_ttlzero_err: {
        value: cdktf.stringToHclTerraform(this._ipv4TtlzeroErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_unknopt: {
        value: cdktf.stringToHclTerraform(this._ipv4Unknopt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_ver_err: {
        value: cdktf.stringToHclTerraform(this._ipv4VerErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_daddr_err: {
        value: cdktf.stringToHclTerraform(this._ipv6DaddrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_exthdr_len_err: {
        value: cdktf.stringToHclTerraform(this._ipv6ExthdrLenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_exthdr_order_err: {
        value: cdktf.stringToHclTerraform(this._ipv6ExthdrOrderErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ihl_err: {
        value: cdktf.stringToHclTerraform(this._ipv6IhlErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_land: {
        value: cdktf.stringToHclTerraform(this._ipv6Land),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_optendpid: {
        value: cdktf.stringToHclTerraform(this._ipv6Optendpid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_opthomeaddr: {
        value: cdktf.stringToHclTerraform(this._ipv6Opthomeaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_optinvld: {
        value: cdktf.stringToHclTerraform(this._ipv6Optinvld),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_optjumbo: {
        value: cdktf.stringToHclTerraform(this._ipv6Optjumbo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_optnsap: {
        value: cdktf.stringToHclTerraform(this._ipv6Optnsap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_optralert: {
        value: cdktf.stringToHclTerraform(this._ipv6Optralert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_opttunnel: {
        value: cdktf.stringToHclTerraform(this._ipv6Opttunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_plen_zero: {
        value: cdktf.stringToHclTerraform(this._ipv6PlenZero),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_proto_err: {
        value: cdktf.stringToHclTerraform(this._ipv6ProtoErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_saddr_err: {
        value: cdktf.stringToHclTerraform(this._ipv6SaddrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_unknopt: {
        value: cdktf.stringToHclTerraform(this._ipv6Unknopt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ver_err: {
        value: cdktf.stringToHclTerraform(this._ipv6VerErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nvgre_minlen_err: {
        value: cdktf.stringToHclTerraform(this._nvgreMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_clen_err: {
        value: cdktf.stringToHclTerraform(this._sctpClenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_crc_err: {
        value: cdktf.stringToHclTerraform(this._sctpCrcErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_csum_err: {
        value: cdktf.stringToHclTerraform(this._sctpCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_l4len_err: {
        value: cdktf.stringToHclTerraform(this._sctpL4LenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_csum_err: {
        value: cdktf.stringToHclTerraform(this._tcpCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_fin_noack: {
        value: cdktf.stringToHclTerraform(this._tcpFinNoack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_fin_only: {
        value: cdktf.stringToHclTerraform(this._tcpFinOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_hlen_err: {
        value: cdktf.stringToHclTerraform(this._tcpHlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_hlenvsl4len_err: {
        value: cdktf.stringToHclTerraform(this._tcpHlenvsl4LenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_land: {
        value: cdktf.stringToHclTerraform(this._tcpLand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_no_flag: {
        value: cdktf.stringToHclTerraform(this._tcpNoFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_plen_err: {
        value: cdktf.stringToHclTerraform(this._tcpPlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn_data: {
        value: cdktf.stringToHclTerraform(this._tcpSynData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn_fin: {
        value: cdktf.stringToHclTerraform(this._tcpSynFin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_winnuke: {
        value: cdktf.stringToHclTerraform(this._tcpWinnuke),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_csum_err: {
        value: cdktf.stringToHclTerraform(this._udpCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_hlen_err: {
        value: cdktf.stringToHclTerraform(this._udpHlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_land: {
        value: cdktf.stringToHclTerraform(this._udpLand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_len_err: {
        value: cdktf.stringToHclTerraform(this._udpLenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_plen_err: {
        value: cdktf.stringToHclTerraform(this._udpPlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udplite_cover_err: {
        value: cdktf.stringToHclTerraform(this._udpliteCoverErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udplite_csum_err: {
        value: cdktf.stringToHclTerraform(this._udpliteCsumErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uesp_minlen_err: {
        value: cdktf.stringToHclTerraform(this._uespMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknproto_minlen_err: {
        value: cdktf.stringToHclTerraform(this._unknprotoMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_minlen_err: {
        value: cdktf.stringToHclTerraform(this._vxlanMinlenErr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
