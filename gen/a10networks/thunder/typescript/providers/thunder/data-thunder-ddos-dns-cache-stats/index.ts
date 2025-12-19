// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDnsCacheStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#id DataThunderDdosDnsCacheStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS Cache Instance Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#name DataThunderDdosDnsCacheStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#stats DataThunderDdosDnsCacheStats#stats}
  */
  readonly stats?: DataThunderDdosDnsCacheStatsStats;
}
export interface DataThunderDdosDnsCacheStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#a_record DataThunderDdosDnsCacheStats#a_record}
  */
  readonly aRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#aaaa_record DataThunderDdosDnsCacheStats#aaaa_record}
  */
  readonly aaaaRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#alias_record DataThunderDdosDnsCacheStats#alias_record}
  */
  readonly aliasRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#cdnskey_record DataThunderDdosDnsCacheStats#cdnskey_record}
  */
  readonly cdnskeyRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#cds_record DataThunderDdosDnsCacheStats#cds_record}
  */
  readonly cdsRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#cname_record DataThunderDdosDnsCacheStats#cname_record}
  */
  readonly cnameRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#dnskey_record DataThunderDdosDnsCacheStats#dnskey_record}
  */
  readonly dnskeyRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#ds_record DataThunderDdosDnsCacheStats#ds_record}
  */
  readonly dsRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_a DataThunderDdosDnsCacheStats#fqdn_a}
  */
  readonly fqdnA?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_aaaa DataThunderDdosDnsCacheStats#fqdn_aaaa}
  */
  readonly fqdnAaaa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_alias DataThunderDdosDnsCacheStats#fqdn_alias}
  */
  readonly fqdnAlias?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_cdnskey DataThunderDdosDnsCacheStats#fqdn_cdnskey}
  */
  readonly fqdnCdnskey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_cds DataThunderDdosDnsCacheStats#fqdn_cds}
  */
  readonly fqdnCds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_cname DataThunderDdosDnsCacheStats#fqdn_cname}
  */
  readonly fqdnCname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_delegation DataThunderDdosDnsCacheStats#fqdn_delegation}
  */
  readonly fqdnDelegation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_dnskey DataThunderDdosDnsCacheStats#fqdn_dnskey}
  */
  readonly fqdnDnskey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_ds DataThunderDdosDnsCacheStats#fqdn_ds}
  */
  readonly fqdnDs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_in_shard_filter DataThunderDdosDnsCacheStats#fqdn_in_shard_filter}
  */
  readonly fqdnInShardFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_mx DataThunderDdosDnsCacheStats#fqdn_mx}
  */
  readonly fqdnMx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_ns DataThunderDdosDnsCacheStats#fqdn_ns}
  */
  readonly fqdnNs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_nsec DataThunderDdosDnsCacheStats#fqdn_nsec}
  */
  readonly fqdnNsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_nsec3 DataThunderDdosDnsCacheStats#fqdn_nsec3}
  */
  readonly fqdnNsec3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_nsec3param DataThunderDdosDnsCacheStats#fqdn_nsec3param}
  */
  readonly fqdnNsec3Param?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_other DataThunderDdosDnsCacheStats#fqdn_other}
  */
  readonly fqdnOther?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_ptr DataThunderDdosDnsCacheStats#fqdn_ptr}
  */
  readonly fqdnPtr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_rrsig DataThunderDdosDnsCacheStats#fqdn_rrsig}
  */
  readonly fqdnRrsig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_soa DataThunderDdosDnsCacheStats#fqdn_soa}
  */
  readonly fqdnSoa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_srv DataThunderDdosDnsCacheStats#fqdn_srv}
  */
  readonly fqdnSrv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_ta DataThunderDdosDnsCacheStats#fqdn_ta}
  */
  readonly fqdnTa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_txt DataThunderDdosDnsCacheStats#fqdn_txt}
  */
  readonly fqdnTxt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#fqdn_wildcard DataThunderDdosDnsCacheStats#fqdn_wildcard}
  */
  readonly fqdnWildcard?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#mx_record DataThunderDdosDnsCacheStats#mx_record}
  */
  readonly mxRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#ns_record DataThunderDdosDnsCacheStats#ns_record}
  */
  readonly nsRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#nsec3_record DataThunderDdosDnsCacheStats#nsec3_record}
  */
  readonly nsec3Record?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#nsec3param_record DataThunderDdosDnsCacheStats#nsec3param_record}
  */
  readonly nsec3ParamRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#nsec_record DataThunderDdosDnsCacheStats#nsec_record}
  */
  readonly nsecRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#other_record DataThunderDdosDnsCacheStats#other_record}
  */
  readonly otherRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#ptr_record DataThunderDdosDnsCacheStats#ptr_record}
  */
  readonly ptrRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#resp_ext_size DataThunderDdosDnsCacheStats#resp_ext_size}
  */
  readonly respExtSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#rrsig_record DataThunderDdosDnsCacheStats#rrsig_record}
  */
  readonly rrsigRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#shard_size DataThunderDdosDnsCacheStats#shard_size}
  */
  readonly shardSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#soa_record DataThunderDdosDnsCacheStats#soa_record}
  */
  readonly soaRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#srv_record DataThunderDdosDnsCacheStats#srv_record}
  */
  readonly srvRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#ta_record DataThunderDdosDnsCacheStats#ta_record}
  */
  readonly taRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#total_cached_fqdn DataThunderDdosDnsCacheStats#total_cached_fqdn}
  */
  readonly totalCachedFqdn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#total_cached_records DataThunderDdosDnsCacheStats#total_cached_records}
  */
  readonly totalCachedRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#txt_record DataThunderDdosDnsCacheStats#txt_record}
  */
  readonly txtRecord?: number;
}

export function dataThunderDdosDnsCacheStatsStatsToTerraform(struct?: DataThunderDdosDnsCacheStatsStatsOutputReference | DataThunderDdosDnsCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_record: cdktf.numberToTerraform(struct!.aRecord),
    aaaa_record: cdktf.numberToTerraform(struct!.aaaaRecord),
    alias_record: cdktf.numberToTerraform(struct!.aliasRecord),
    cdnskey_record: cdktf.numberToTerraform(struct!.cdnskeyRecord),
    cds_record: cdktf.numberToTerraform(struct!.cdsRecord),
    cname_record: cdktf.numberToTerraform(struct!.cnameRecord),
    dnskey_record: cdktf.numberToTerraform(struct!.dnskeyRecord),
    ds_record: cdktf.numberToTerraform(struct!.dsRecord),
    fqdn_a: cdktf.numberToTerraform(struct!.fqdnA),
    fqdn_aaaa: cdktf.numberToTerraform(struct!.fqdnAaaa),
    fqdn_alias: cdktf.numberToTerraform(struct!.fqdnAlias),
    fqdn_cdnskey: cdktf.numberToTerraform(struct!.fqdnCdnskey),
    fqdn_cds: cdktf.numberToTerraform(struct!.fqdnCds),
    fqdn_cname: cdktf.numberToTerraform(struct!.fqdnCname),
    fqdn_delegation: cdktf.numberToTerraform(struct!.fqdnDelegation),
    fqdn_dnskey: cdktf.numberToTerraform(struct!.fqdnDnskey),
    fqdn_ds: cdktf.numberToTerraform(struct!.fqdnDs),
    fqdn_in_shard_filter: cdktf.numberToTerraform(struct!.fqdnInShardFilter),
    fqdn_mx: cdktf.numberToTerraform(struct!.fqdnMx),
    fqdn_ns: cdktf.numberToTerraform(struct!.fqdnNs),
    fqdn_nsec: cdktf.numberToTerraform(struct!.fqdnNsec),
    fqdn_nsec3: cdktf.numberToTerraform(struct!.fqdnNsec3),
    fqdn_nsec3param: cdktf.numberToTerraform(struct!.fqdnNsec3Param),
    fqdn_other: cdktf.numberToTerraform(struct!.fqdnOther),
    fqdn_ptr: cdktf.numberToTerraform(struct!.fqdnPtr),
    fqdn_rrsig: cdktf.numberToTerraform(struct!.fqdnRrsig),
    fqdn_soa: cdktf.numberToTerraform(struct!.fqdnSoa),
    fqdn_srv: cdktf.numberToTerraform(struct!.fqdnSrv),
    fqdn_ta: cdktf.numberToTerraform(struct!.fqdnTa),
    fqdn_txt: cdktf.numberToTerraform(struct!.fqdnTxt),
    fqdn_wildcard: cdktf.numberToTerraform(struct!.fqdnWildcard),
    mx_record: cdktf.numberToTerraform(struct!.mxRecord),
    ns_record: cdktf.numberToTerraform(struct!.nsRecord),
    nsec3_record: cdktf.numberToTerraform(struct!.nsec3Record),
    nsec3param_record: cdktf.numberToTerraform(struct!.nsec3ParamRecord),
    nsec_record: cdktf.numberToTerraform(struct!.nsecRecord),
    other_record: cdktf.numberToTerraform(struct!.otherRecord),
    ptr_record: cdktf.numberToTerraform(struct!.ptrRecord),
    resp_ext_size: cdktf.numberToTerraform(struct!.respExtSize),
    rrsig_record: cdktf.numberToTerraform(struct!.rrsigRecord),
    shard_size: cdktf.numberToTerraform(struct!.shardSize),
    soa_record: cdktf.numberToTerraform(struct!.soaRecord),
    srv_record: cdktf.numberToTerraform(struct!.srvRecord),
    ta_record: cdktf.numberToTerraform(struct!.taRecord),
    total_cached_fqdn: cdktf.numberToTerraform(struct!.totalCachedFqdn),
    total_cached_records: cdktf.numberToTerraform(struct!.totalCachedRecords),
    txt_record: cdktf.numberToTerraform(struct!.txtRecord),
  }
}


export function dataThunderDdosDnsCacheStatsStatsToHclTerraform(struct?: DataThunderDdosDnsCacheStatsStatsOutputReference | DataThunderDdosDnsCacheStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_record: {
      value: cdktf.numberToHclTerraform(struct!.aRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aaaa_record: {
      value: cdktf.numberToHclTerraform(struct!.aaaaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alias_record: {
      value: cdktf.numberToHclTerraform(struct!.aliasRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cdnskey_record: {
      value: cdktf.numberToHclTerraform(struct!.cdnskeyRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cds_record: {
      value: cdktf.numberToHclTerraform(struct!.cdsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cname_record: {
      value: cdktf.numberToHclTerraform(struct!.cnameRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_record: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_record: {
      value: cdktf.numberToHclTerraform(struct!.dsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_a: {
      value: cdktf.numberToHclTerraform(struct!.fqdnA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.fqdnAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_alias: {
      value: cdktf.numberToHclTerraform(struct!.fqdnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_cdnskey: {
      value: cdktf.numberToHclTerraform(struct!.fqdnCdnskey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_cds: {
      value: cdktf.numberToHclTerraform(struct!.fqdnCds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_cname: {
      value: cdktf.numberToHclTerraform(struct!.fqdnCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_delegation: {
      value: cdktf.numberToHclTerraform(struct!.fqdnDelegation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_dnskey: {
      value: cdktf.numberToHclTerraform(struct!.fqdnDnskey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_ds: {
      value: cdktf.numberToHclTerraform(struct!.fqdnDs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_in_shard_filter: {
      value: cdktf.numberToHclTerraform(struct!.fqdnInShardFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_mx: {
      value: cdktf.numberToHclTerraform(struct!.fqdnMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_ns: {
      value: cdktf.numberToHclTerraform(struct!.fqdnNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_nsec: {
      value: cdktf.numberToHclTerraform(struct!.fqdnNsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_nsec3: {
      value: cdktf.numberToHclTerraform(struct!.fqdnNsec3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_nsec3param: {
      value: cdktf.numberToHclTerraform(struct!.fqdnNsec3Param),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_other: {
      value: cdktf.numberToHclTerraform(struct!.fqdnOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_ptr: {
      value: cdktf.numberToHclTerraform(struct!.fqdnPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_rrsig: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRrsig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_soa: {
      value: cdktf.numberToHclTerraform(struct!.fqdnSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_srv: {
      value: cdktf.numberToHclTerraform(struct!.fqdnSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_ta: {
      value: cdktf.numberToHclTerraform(struct!.fqdnTa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_txt: {
      value: cdktf.numberToHclTerraform(struct!.fqdnTxt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_wildcard: {
      value: cdktf.numberToHclTerraform(struct!.fqdnWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mx_record: {
      value: cdktf.numberToHclTerraform(struct!.mxRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns_record: {
      value: cdktf.numberToHclTerraform(struct!.nsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3_record: {
      value: cdktf.numberToHclTerraform(struct!.nsec3Record),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3param_record: {
      value: cdktf.numberToHclTerraform(struct!.nsec3ParamRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec_record: {
      value: cdktf.numberToHclTerraform(struct!.nsecRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_record: {
      value: cdktf.numberToHclTerraform(struct!.otherRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ptr_record: {
      value: cdktf.numberToHclTerraform(struct!.ptrRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_ext_size: {
      value: cdktf.numberToHclTerraform(struct!.respExtSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig_record: {
      value: cdktf.numberToHclTerraform(struct!.rrsigRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_size: {
      value: cdktf.numberToHclTerraform(struct!.shardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_record: {
      value: cdktf.numberToHclTerraform(struct!.soaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_record: {
      value: cdktf.numberToHclTerraform(struct!.srvRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ta_record: {
      value: cdktf.numberToHclTerraform(struct!.taRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_cached_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.totalCachedFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_cached_records: {
      value: cdktf.numberToHclTerraform(struct!.totalCachedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_record: {
      value: cdktf.numberToHclTerraform(struct!.txtRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.aRecord = this._aRecord;
    }
    if (this._aaaaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaRecord = this._aaaaRecord;
    }
    if (this._aliasRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasRecord = this._aliasRecord;
    }
    if (this._cdnskeyRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnskeyRecord = this._cdnskeyRecord;
    }
    if (this._cdsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdsRecord = this._cdsRecord;
    }
    if (this._cnameRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameRecord = this._cnameRecord;
    }
    if (this._dnskeyRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyRecord = this._dnskeyRecord;
    }
    if (this._dsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsRecord = this._dsRecord;
    }
    if (this._fqdnA !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnA = this._fqdnA;
    }
    if (this._fqdnAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnAaaa = this._fqdnAaaa;
    }
    if (this._fqdnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnAlias = this._fqdnAlias;
    }
    if (this._fqdnCdnskey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnCdnskey = this._fqdnCdnskey;
    }
    if (this._fqdnCds !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnCds = this._fqdnCds;
    }
    if (this._fqdnCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnCname = this._fqdnCname;
    }
    if (this._fqdnDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnDelegation = this._fqdnDelegation;
    }
    if (this._fqdnDnskey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnDnskey = this._fqdnDnskey;
    }
    if (this._fqdnDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnDs = this._fqdnDs;
    }
    if (this._fqdnInShardFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnInShardFilter = this._fqdnInShardFilter;
    }
    if (this._fqdnMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnMx = this._fqdnMx;
    }
    if (this._fqdnNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnNs = this._fqdnNs;
    }
    if (this._fqdnNsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnNsec = this._fqdnNsec;
    }
    if (this._fqdnNsec3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnNsec3 = this._fqdnNsec3;
    }
    if (this._fqdnNsec3Param !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnNsec3Param = this._fqdnNsec3Param;
    }
    if (this._fqdnOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnOther = this._fqdnOther;
    }
    if (this._fqdnPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnPtr = this._fqdnPtr;
    }
    if (this._fqdnRrsig !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRrsig = this._fqdnRrsig;
    }
    if (this._fqdnSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnSoa = this._fqdnSoa;
    }
    if (this._fqdnSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnSrv = this._fqdnSrv;
    }
    if (this._fqdnTa !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnTa = this._fqdnTa;
    }
    if (this._fqdnTxt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnTxt = this._fqdnTxt;
    }
    if (this._fqdnWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnWildcard = this._fqdnWildcard;
    }
    if (this._mxRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxRecord = this._mxRecord;
    }
    if (this._nsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsRecord = this._nsRecord;
    }
    if (this._nsec3Record !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3Record = this._nsec3Record;
    }
    if (this._nsec3ParamRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3ParamRecord = this._nsec3ParamRecord;
    }
    if (this._nsecRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsecRecord = this._nsecRecord;
    }
    if (this._otherRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherRecord = this._otherRecord;
    }
    if (this._ptrRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrRecord = this._ptrRecord;
    }
    if (this._respExtSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.respExtSize = this._respExtSize;
    }
    if (this._rrsigRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsigRecord = this._rrsigRecord;
    }
    if (this._shardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardSize = this._shardSize;
    }
    if (this._soaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaRecord = this._soaRecord;
    }
    if (this._srvRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRecord = this._srvRecord;
    }
    if (this._taRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.taRecord = this._taRecord;
    }
    if (this._totalCachedFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCachedFqdn = this._totalCachedFqdn;
    }
    if (this._totalCachedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCachedRecords = this._totalCachedRecords;
    }
    if (this._txtRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtRecord = this._txtRecord;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aRecord = undefined;
      this._aaaaRecord = undefined;
      this._aliasRecord = undefined;
      this._cdnskeyRecord = undefined;
      this._cdsRecord = undefined;
      this._cnameRecord = undefined;
      this._dnskeyRecord = undefined;
      this._dsRecord = undefined;
      this._fqdnA = undefined;
      this._fqdnAaaa = undefined;
      this._fqdnAlias = undefined;
      this._fqdnCdnskey = undefined;
      this._fqdnCds = undefined;
      this._fqdnCname = undefined;
      this._fqdnDelegation = undefined;
      this._fqdnDnskey = undefined;
      this._fqdnDs = undefined;
      this._fqdnInShardFilter = undefined;
      this._fqdnMx = undefined;
      this._fqdnNs = undefined;
      this._fqdnNsec = undefined;
      this._fqdnNsec3 = undefined;
      this._fqdnNsec3Param = undefined;
      this._fqdnOther = undefined;
      this._fqdnPtr = undefined;
      this._fqdnRrsig = undefined;
      this._fqdnSoa = undefined;
      this._fqdnSrv = undefined;
      this._fqdnTa = undefined;
      this._fqdnTxt = undefined;
      this._fqdnWildcard = undefined;
      this._mxRecord = undefined;
      this._nsRecord = undefined;
      this._nsec3Record = undefined;
      this._nsec3ParamRecord = undefined;
      this._nsecRecord = undefined;
      this._otherRecord = undefined;
      this._ptrRecord = undefined;
      this._respExtSize = undefined;
      this._rrsigRecord = undefined;
      this._shardSize = undefined;
      this._soaRecord = undefined;
      this._srvRecord = undefined;
      this._taRecord = undefined;
      this._totalCachedFqdn = undefined;
      this._totalCachedRecords = undefined;
      this._txtRecord = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aRecord = value.aRecord;
      this._aaaaRecord = value.aaaaRecord;
      this._aliasRecord = value.aliasRecord;
      this._cdnskeyRecord = value.cdnskeyRecord;
      this._cdsRecord = value.cdsRecord;
      this._cnameRecord = value.cnameRecord;
      this._dnskeyRecord = value.dnskeyRecord;
      this._dsRecord = value.dsRecord;
      this._fqdnA = value.fqdnA;
      this._fqdnAaaa = value.fqdnAaaa;
      this._fqdnAlias = value.fqdnAlias;
      this._fqdnCdnskey = value.fqdnCdnskey;
      this._fqdnCds = value.fqdnCds;
      this._fqdnCname = value.fqdnCname;
      this._fqdnDelegation = value.fqdnDelegation;
      this._fqdnDnskey = value.fqdnDnskey;
      this._fqdnDs = value.fqdnDs;
      this._fqdnInShardFilter = value.fqdnInShardFilter;
      this._fqdnMx = value.fqdnMx;
      this._fqdnNs = value.fqdnNs;
      this._fqdnNsec = value.fqdnNsec;
      this._fqdnNsec3 = value.fqdnNsec3;
      this._fqdnNsec3Param = value.fqdnNsec3Param;
      this._fqdnOther = value.fqdnOther;
      this._fqdnPtr = value.fqdnPtr;
      this._fqdnRrsig = value.fqdnRrsig;
      this._fqdnSoa = value.fqdnSoa;
      this._fqdnSrv = value.fqdnSrv;
      this._fqdnTa = value.fqdnTa;
      this._fqdnTxt = value.fqdnTxt;
      this._fqdnWildcard = value.fqdnWildcard;
      this._mxRecord = value.mxRecord;
      this._nsRecord = value.nsRecord;
      this._nsec3Record = value.nsec3Record;
      this._nsec3ParamRecord = value.nsec3ParamRecord;
      this._nsecRecord = value.nsecRecord;
      this._otherRecord = value.otherRecord;
      this._ptrRecord = value.ptrRecord;
      this._respExtSize = value.respExtSize;
      this._rrsigRecord = value.rrsigRecord;
      this._shardSize = value.shardSize;
      this._soaRecord = value.soaRecord;
      this._srvRecord = value.srvRecord;
      this._taRecord = value.taRecord;
      this._totalCachedFqdn = value.totalCachedFqdn;
      this._totalCachedRecords = value.totalCachedRecords;
      this._txtRecord = value.txtRecord;
    }
  }

  // a_record - computed: false, optional: true, required: false
  private _aRecord?: number; 
  public get aRecord() {
    return this.getNumberAttribute('a_record');
  }
  public set aRecord(value: number) {
    this._aRecord = value;
  }
  public resetARecord() {
    this._aRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aRecordInput() {
    return this._aRecord;
  }

  // aaaa_record - computed: false, optional: true, required: false
  private _aaaaRecord?: number; 
  public get aaaaRecord() {
    return this.getNumberAttribute('aaaa_record');
  }
  public set aaaaRecord(value: number) {
    this._aaaaRecord = value;
  }
  public resetAaaaRecord() {
    this._aaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaRecordInput() {
    return this._aaaaRecord;
  }

  // alias_record - computed: false, optional: true, required: false
  private _aliasRecord?: number; 
  public get aliasRecord() {
    return this.getNumberAttribute('alias_record');
  }
  public set aliasRecord(value: number) {
    this._aliasRecord = value;
  }
  public resetAliasRecord() {
    this._aliasRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasRecordInput() {
    return this._aliasRecord;
  }

  // cdnskey_record - computed: false, optional: true, required: false
  private _cdnskeyRecord?: number; 
  public get cdnskeyRecord() {
    return this.getNumberAttribute('cdnskey_record');
  }
  public set cdnskeyRecord(value: number) {
    this._cdnskeyRecord = value;
  }
  public resetCdnskeyRecord() {
    this._cdnskeyRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnskeyRecordInput() {
    return this._cdnskeyRecord;
  }

  // cds_record - computed: false, optional: true, required: false
  private _cdsRecord?: number; 
  public get cdsRecord() {
    return this.getNumberAttribute('cds_record');
  }
  public set cdsRecord(value: number) {
    this._cdsRecord = value;
  }
  public resetCdsRecord() {
    this._cdsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdsRecordInput() {
    return this._cdsRecord;
  }

  // cname_record - computed: false, optional: true, required: false
  private _cnameRecord?: number; 
  public get cnameRecord() {
    return this.getNumberAttribute('cname_record');
  }
  public set cnameRecord(value: number) {
    this._cnameRecord = value;
  }
  public resetCnameRecord() {
    this._cnameRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameRecordInput() {
    return this._cnameRecord;
  }

  // dnskey_record - computed: false, optional: true, required: false
  private _dnskeyRecord?: number; 
  public get dnskeyRecord() {
    return this.getNumberAttribute('dnskey_record');
  }
  public set dnskeyRecord(value: number) {
    this._dnskeyRecord = value;
  }
  public resetDnskeyRecord() {
    this._dnskeyRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyRecordInput() {
    return this._dnskeyRecord;
  }

  // ds_record - computed: false, optional: true, required: false
  private _dsRecord?: number; 
  public get dsRecord() {
    return this.getNumberAttribute('ds_record');
  }
  public set dsRecord(value: number) {
    this._dsRecord = value;
  }
  public resetDsRecord() {
    this._dsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsRecordInput() {
    return this._dsRecord;
  }

  // fqdn_a - computed: false, optional: true, required: false
  private _fqdnA?: number; 
  public get fqdnA() {
    return this.getNumberAttribute('fqdn_a');
  }
  public set fqdnA(value: number) {
    this._fqdnA = value;
  }
  public resetFqdnA() {
    this._fqdnA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnAInput() {
    return this._fqdnA;
  }

  // fqdn_aaaa - computed: false, optional: true, required: false
  private _fqdnAaaa?: number; 
  public get fqdnAaaa() {
    return this.getNumberAttribute('fqdn_aaaa');
  }
  public set fqdnAaaa(value: number) {
    this._fqdnAaaa = value;
  }
  public resetFqdnAaaa() {
    this._fqdnAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnAaaaInput() {
    return this._fqdnAaaa;
  }

  // fqdn_alias - computed: false, optional: true, required: false
  private _fqdnAlias?: number; 
  public get fqdnAlias() {
    return this.getNumberAttribute('fqdn_alias');
  }
  public set fqdnAlias(value: number) {
    this._fqdnAlias = value;
  }
  public resetFqdnAlias() {
    this._fqdnAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnAliasInput() {
    return this._fqdnAlias;
  }

  // fqdn_cdnskey - computed: false, optional: true, required: false
  private _fqdnCdnskey?: number; 
  public get fqdnCdnskey() {
    return this.getNumberAttribute('fqdn_cdnskey');
  }
  public set fqdnCdnskey(value: number) {
    this._fqdnCdnskey = value;
  }
  public resetFqdnCdnskey() {
    this._fqdnCdnskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnCdnskeyInput() {
    return this._fqdnCdnskey;
  }

  // fqdn_cds - computed: false, optional: true, required: false
  private _fqdnCds?: number; 
  public get fqdnCds() {
    return this.getNumberAttribute('fqdn_cds');
  }
  public set fqdnCds(value: number) {
    this._fqdnCds = value;
  }
  public resetFqdnCds() {
    this._fqdnCds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnCdsInput() {
    return this._fqdnCds;
  }

  // fqdn_cname - computed: false, optional: true, required: false
  private _fqdnCname?: number; 
  public get fqdnCname() {
    return this.getNumberAttribute('fqdn_cname');
  }
  public set fqdnCname(value: number) {
    this._fqdnCname = value;
  }
  public resetFqdnCname() {
    this._fqdnCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnCnameInput() {
    return this._fqdnCname;
  }

  // fqdn_delegation - computed: false, optional: true, required: false
  private _fqdnDelegation?: number; 
  public get fqdnDelegation() {
    return this.getNumberAttribute('fqdn_delegation');
  }
  public set fqdnDelegation(value: number) {
    this._fqdnDelegation = value;
  }
  public resetFqdnDelegation() {
    this._fqdnDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnDelegationInput() {
    return this._fqdnDelegation;
  }

  // fqdn_dnskey - computed: false, optional: true, required: false
  private _fqdnDnskey?: number; 
  public get fqdnDnskey() {
    return this.getNumberAttribute('fqdn_dnskey');
  }
  public set fqdnDnskey(value: number) {
    this._fqdnDnskey = value;
  }
  public resetFqdnDnskey() {
    this._fqdnDnskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnDnskeyInput() {
    return this._fqdnDnskey;
  }

  // fqdn_ds - computed: false, optional: true, required: false
  private _fqdnDs?: number; 
  public get fqdnDs() {
    return this.getNumberAttribute('fqdn_ds');
  }
  public set fqdnDs(value: number) {
    this._fqdnDs = value;
  }
  public resetFqdnDs() {
    this._fqdnDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnDsInput() {
    return this._fqdnDs;
  }

  // fqdn_in_shard_filter - computed: false, optional: true, required: false
  private _fqdnInShardFilter?: number; 
  public get fqdnInShardFilter() {
    return this.getNumberAttribute('fqdn_in_shard_filter');
  }
  public set fqdnInShardFilter(value: number) {
    this._fqdnInShardFilter = value;
  }
  public resetFqdnInShardFilter() {
    this._fqdnInShardFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInShardFilterInput() {
    return this._fqdnInShardFilter;
  }

  // fqdn_mx - computed: false, optional: true, required: false
  private _fqdnMx?: number; 
  public get fqdnMx() {
    return this.getNumberAttribute('fqdn_mx');
  }
  public set fqdnMx(value: number) {
    this._fqdnMx = value;
  }
  public resetFqdnMx() {
    this._fqdnMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnMxInput() {
    return this._fqdnMx;
  }

  // fqdn_ns - computed: false, optional: true, required: false
  private _fqdnNs?: number; 
  public get fqdnNs() {
    return this.getNumberAttribute('fqdn_ns');
  }
  public set fqdnNs(value: number) {
    this._fqdnNs = value;
  }
  public resetFqdnNs() {
    this._fqdnNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNsInput() {
    return this._fqdnNs;
  }

  // fqdn_nsec - computed: false, optional: true, required: false
  private _fqdnNsec?: number; 
  public get fqdnNsec() {
    return this.getNumberAttribute('fqdn_nsec');
  }
  public set fqdnNsec(value: number) {
    this._fqdnNsec = value;
  }
  public resetFqdnNsec() {
    this._fqdnNsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNsecInput() {
    return this._fqdnNsec;
  }

  // fqdn_nsec3 - computed: false, optional: true, required: false
  private _fqdnNsec3?: number; 
  public get fqdnNsec3() {
    return this.getNumberAttribute('fqdn_nsec3');
  }
  public set fqdnNsec3(value: number) {
    this._fqdnNsec3 = value;
  }
  public resetFqdnNsec3() {
    this._fqdnNsec3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNsec3Input() {
    return this._fqdnNsec3;
  }

  // fqdn_nsec3param - computed: false, optional: true, required: false
  private _fqdnNsec3Param?: number; 
  public get fqdnNsec3Param() {
    return this.getNumberAttribute('fqdn_nsec3param');
  }
  public set fqdnNsec3Param(value: number) {
    this._fqdnNsec3Param = value;
  }
  public resetFqdnNsec3Param() {
    this._fqdnNsec3Param = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNsec3ParamInput() {
    return this._fqdnNsec3Param;
  }

  // fqdn_other - computed: false, optional: true, required: false
  private _fqdnOther?: number; 
  public get fqdnOther() {
    return this.getNumberAttribute('fqdn_other');
  }
  public set fqdnOther(value: number) {
    this._fqdnOther = value;
  }
  public resetFqdnOther() {
    this._fqdnOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnOtherInput() {
    return this._fqdnOther;
  }

  // fqdn_ptr - computed: false, optional: true, required: false
  private _fqdnPtr?: number; 
  public get fqdnPtr() {
    return this.getNumberAttribute('fqdn_ptr');
  }
  public set fqdnPtr(value: number) {
    this._fqdnPtr = value;
  }
  public resetFqdnPtr() {
    this._fqdnPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnPtrInput() {
    return this._fqdnPtr;
  }

  // fqdn_rrsig - computed: false, optional: true, required: false
  private _fqdnRrsig?: number; 
  public get fqdnRrsig() {
    return this.getNumberAttribute('fqdn_rrsig');
  }
  public set fqdnRrsig(value: number) {
    this._fqdnRrsig = value;
  }
  public resetFqdnRrsig() {
    this._fqdnRrsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRrsigInput() {
    return this._fqdnRrsig;
  }

  // fqdn_soa - computed: false, optional: true, required: false
  private _fqdnSoa?: number; 
  public get fqdnSoa() {
    return this.getNumberAttribute('fqdn_soa');
  }
  public set fqdnSoa(value: number) {
    this._fqdnSoa = value;
  }
  public resetFqdnSoa() {
    this._fqdnSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnSoaInput() {
    return this._fqdnSoa;
  }

  // fqdn_srv - computed: false, optional: true, required: false
  private _fqdnSrv?: number; 
  public get fqdnSrv() {
    return this.getNumberAttribute('fqdn_srv');
  }
  public set fqdnSrv(value: number) {
    this._fqdnSrv = value;
  }
  public resetFqdnSrv() {
    this._fqdnSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnSrvInput() {
    return this._fqdnSrv;
  }

  // fqdn_ta - computed: false, optional: true, required: false
  private _fqdnTa?: number; 
  public get fqdnTa() {
    return this.getNumberAttribute('fqdn_ta');
  }
  public set fqdnTa(value: number) {
    this._fqdnTa = value;
  }
  public resetFqdnTa() {
    this._fqdnTa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnTaInput() {
    return this._fqdnTa;
  }

  // fqdn_txt - computed: false, optional: true, required: false
  private _fqdnTxt?: number; 
  public get fqdnTxt() {
    return this.getNumberAttribute('fqdn_txt');
  }
  public set fqdnTxt(value: number) {
    this._fqdnTxt = value;
  }
  public resetFqdnTxt() {
    this._fqdnTxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnTxtInput() {
    return this._fqdnTxt;
  }

  // fqdn_wildcard - computed: false, optional: true, required: false
  private _fqdnWildcard?: number; 
  public get fqdnWildcard() {
    return this.getNumberAttribute('fqdn_wildcard');
  }
  public set fqdnWildcard(value: number) {
    this._fqdnWildcard = value;
  }
  public resetFqdnWildcard() {
    this._fqdnWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnWildcardInput() {
    return this._fqdnWildcard;
  }

  // mx_record - computed: false, optional: true, required: false
  private _mxRecord?: number; 
  public get mxRecord() {
    return this.getNumberAttribute('mx_record');
  }
  public set mxRecord(value: number) {
    this._mxRecord = value;
  }
  public resetMxRecord() {
    this._mxRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxRecordInput() {
    return this._mxRecord;
  }

  // ns_record - computed: false, optional: true, required: false
  private _nsRecord?: number; 
  public get nsRecord() {
    return this.getNumberAttribute('ns_record');
  }
  public set nsRecord(value: number) {
    this._nsRecord = value;
  }
  public resetNsRecord() {
    this._nsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsRecordInput() {
    return this._nsRecord;
  }

  // nsec3_record - computed: false, optional: true, required: false
  private _nsec3Record?: number; 
  public get nsec3Record() {
    return this.getNumberAttribute('nsec3_record');
  }
  public set nsec3Record(value: number) {
    this._nsec3Record = value;
  }
  public resetNsec3Record() {
    this._nsec3Record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3RecordInput() {
    return this._nsec3Record;
  }

  // nsec3param_record - computed: false, optional: true, required: false
  private _nsec3ParamRecord?: number; 
  public get nsec3ParamRecord() {
    return this.getNumberAttribute('nsec3param_record');
  }
  public set nsec3ParamRecord(value: number) {
    this._nsec3ParamRecord = value;
  }
  public resetNsec3ParamRecord() {
    this._nsec3ParamRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3ParamRecordInput() {
    return this._nsec3ParamRecord;
  }

  // nsec_record - computed: false, optional: true, required: false
  private _nsecRecord?: number; 
  public get nsecRecord() {
    return this.getNumberAttribute('nsec_record');
  }
  public set nsecRecord(value: number) {
    this._nsecRecord = value;
  }
  public resetNsecRecord() {
    this._nsecRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecRecordInput() {
    return this._nsecRecord;
  }

  // other_record - computed: false, optional: true, required: false
  private _otherRecord?: number; 
  public get otherRecord() {
    return this.getNumberAttribute('other_record');
  }
  public set otherRecord(value: number) {
    this._otherRecord = value;
  }
  public resetOtherRecord() {
    this._otherRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherRecordInput() {
    return this._otherRecord;
  }

  // ptr_record - computed: false, optional: true, required: false
  private _ptrRecord?: number; 
  public get ptrRecord() {
    return this.getNumberAttribute('ptr_record');
  }
  public set ptrRecord(value: number) {
    this._ptrRecord = value;
  }
  public resetPtrRecord() {
    this._ptrRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrRecordInput() {
    return this._ptrRecord;
  }

  // resp_ext_size - computed: false, optional: true, required: false
  private _respExtSize?: number; 
  public get respExtSize() {
    return this.getNumberAttribute('resp_ext_size');
  }
  public set respExtSize(value: number) {
    this._respExtSize = value;
  }
  public resetRespExtSize() {
    this._respExtSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respExtSizeInput() {
    return this._respExtSize;
  }

  // rrsig_record - computed: false, optional: true, required: false
  private _rrsigRecord?: number; 
  public get rrsigRecord() {
    return this.getNumberAttribute('rrsig_record');
  }
  public set rrsigRecord(value: number) {
    this._rrsigRecord = value;
  }
  public resetRrsigRecord() {
    this._rrsigRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsigRecordInput() {
    return this._rrsigRecord;
  }

  // shard_size - computed: false, optional: true, required: false
  private _shardSize?: number; 
  public get shardSize() {
    return this.getNumberAttribute('shard_size');
  }
  public set shardSize(value: number) {
    this._shardSize = value;
  }
  public resetShardSize() {
    this._shardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardSizeInput() {
    return this._shardSize;
  }

  // soa_record - computed: false, optional: true, required: false
  private _soaRecord?: number; 
  public get soaRecord() {
    return this.getNumberAttribute('soa_record');
  }
  public set soaRecord(value: number) {
    this._soaRecord = value;
  }
  public resetSoaRecord() {
    this._soaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRecordInput() {
    return this._soaRecord;
  }

  // srv_record - computed: false, optional: true, required: false
  private _srvRecord?: number; 
  public get srvRecord() {
    return this.getNumberAttribute('srv_record');
  }
  public set srvRecord(value: number) {
    this._srvRecord = value;
  }
  public resetSrvRecord() {
    this._srvRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRecordInput() {
    return this._srvRecord;
  }

  // ta_record - computed: false, optional: true, required: false
  private _taRecord?: number; 
  public get taRecord() {
    return this.getNumberAttribute('ta_record');
  }
  public set taRecord(value: number) {
    this._taRecord = value;
  }
  public resetTaRecord() {
    this._taRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taRecordInput() {
    return this._taRecord;
  }

  // total_cached_fqdn - computed: false, optional: true, required: false
  private _totalCachedFqdn?: number; 
  public get totalCachedFqdn() {
    return this.getNumberAttribute('total_cached_fqdn');
  }
  public set totalCachedFqdn(value: number) {
    this._totalCachedFqdn = value;
  }
  public resetTotalCachedFqdn() {
    this._totalCachedFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCachedFqdnInput() {
    return this._totalCachedFqdn;
  }

  // total_cached_records - computed: false, optional: true, required: false
  private _totalCachedRecords?: number; 
  public get totalCachedRecords() {
    return this.getNumberAttribute('total_cached_records');
  }
  public set totalCachedRecords(value: number) {
    this._totalCachedRecords = value;
  }
  public resetTotalCachedRecords() {
    this._totalCachedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCachedRecordsInput() {
    return this._totalCachedRecords;
  }

  // txt_record - computed: false, optional: true, required: false
  private _txtRecord?: number; 
  public get txtRecord() {
    return this.getNumberAttribute('txt_record');
  }
  public set txtRecord(value: number) {
    this._txtRecord = value;
  }
  public resetTxtRecord() {
    this._txtRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordInput() {
    return this._txtRecord;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats thunder_ddos_dns_cache_stats}
*/
export class DataThunderDdosDnsCacheStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDnsCacheStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDnsCacheStats to import
  * @param importFromId The id of the existing DataThunderDdosDnsCacheStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDnsCacheStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_stats thunder_ddos_dns_cache_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDnsCacheStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDnsCacheStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDnsCacheStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDnsCacheStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderDdosDnsCacheStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderDdosDnsCacheStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsCacheStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
