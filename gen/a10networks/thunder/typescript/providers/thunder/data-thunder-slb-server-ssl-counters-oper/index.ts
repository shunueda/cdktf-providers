// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbServerSslCountersOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#id DataThunderSlbServerSslCountersOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#oper DataThunderSlbServerSslCountersOper#oper}
  */
  readonly oper?: DataThunderSlbServerSslCountersOperOper;
}
export interface DataThunderSlbServerSslCountersOperOper {
  /**
  * Sent certificate verify for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#cert_vfy DataThunderSlbServerSslCountersOper#cert_vfy}
  */
  readonly certVfy?: number;
  /**
  * Cumulative SSL sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#cumulative_sessions DataThunderSlbServerSslCountersOper#cumulative_sessions}
  */
  readonly cumulativeSessions?: number;
  /**
  * TLS version downgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#downgraded DataThunderSlbServerSslCountersOper#downgraded}
  */
  readonly downgraded?: number;
  /**
  * Average handshake time in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#hs_avg_time DataThunderSlbServerSslCountersOper#hs_avg_time}
  */
  readonly hsAvgTime?: number;
  /**
  * Total handshake failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#hs_failures DataThunderSlbServerSslCountersOper#hs_failures}
  */
  readonly hsFailures?: number;
  /**
  * Failed 1024-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_1024_failures DataThunderSlbServerSslCountersOper#kex_dhe_1024_failures}
  */
  readonly kexDhe1024Failures?: number;
  /**
  * Successful 1024-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_1024_successes DataThunderSlbServerSslCountersOper#kex_dhe_1024_successes}
  */
  readonly kexDhe1024Successes?: number;
  /**
  * Failed 2048-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_2048_failures DataThunderSlbServerSslCountersOper#kex_dhe_2048_failures}
  */
  readonly kexDhe2048Failures?: number;
  /**
  * Successful 2048-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_2048_successes DataThunderSlbServerSslCountersOper#kex_dhe_2048_successes}
  */
  readonly kexDhe2048Successes?: number;
  /**
  * Failed 512-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_512_failures DataThunderSlbServerSslCountersOper#kex_dhe_512_failures}
  */
  readonly kexDhe512Failures?: number;
  /**
  * Successful 512-bit DHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_dhe_512_successes DataThunderSlbServerSslCountersOper#kex_dhe_512_successes}
  */
  readonly kexDhe512Successes?: number;
  /**
  * Failed secp256r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp256r1_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_secp256r1_failures}
  */
  readonly kexEcdheSecp256R1Failures?: number;
  /**
  * Successful secp256r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp256r1_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_secp256r1_successes}
  */
  readonly kexEcdheSecp256R1Successes?: number;
  /**
  * Failed secp384r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp384r1_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_secp384r1_failures}
  */
  readonly kexEcdheSecp384R1Failures?: number;
  /**
  * Successful secp384r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp384r1_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_secp384r1_successes}
  */
  readonly kexEcdheSecp384R1Successes?: number;
  /**
  * Failed secp521r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp521r1_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_secp521r1_failures}
  */
  readonly kexEcdheSecp521R1Failures?: number;
  /**
  * Successful secp521r1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_secp521r1_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_secp521r1_successes}
  */
  readonly kexEcdheSecp521R1Successes?: number;
  /**
  * Failed sm2p256v1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_sm2_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_sm2_failures}
  */
  readonly kexEcdheSm2Failures?: number;
  /**
  * Successful sm2p256v1 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_sm2_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_sm2_successes}
  */
  readonly kexEcdheSm2Successes?: number;
  /**
  * Failed x25519 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_x25519_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_x25519_failures}
  */
  readonly kexEcdheX25519Failures?: number;
  /**
  * Successful x25519 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_x25519_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_x25519_successes}
  */
  readonly kexEcdheX25519Successes?: number;
  /**
  * Failed x448 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_x448_failures DataThunderSlbServerSslCountersOper#kex_ecdhe_x448_failures}
  */
  readonly kexEcdheX448Failures?: number;
  /**
  * Successful x448 ECDHE key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_ecdhe_x448_successes DataThunderSlbServerSslCountersOper#kex_ecdhe_x448_successes}
  */
  readonly kexEcdheX448Successes?: number;
  /**
  * Failed 1024-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_1024_failures DataThunderSlbServerSslCountersOper#kex_rsa_1024_failures}
  */
  readonly kexRsa1024Failures?: number;
  /**
  * Successful 1024-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_1024_successes DataThunderSlbServerSslCountersOper#kex_rsa_1024_successes}
  */
  readonly kexRsa1024Successes?: number;
  /**
  * Failed 2048-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_2048_failures DataThunderSlbServerSslCountersOper#kex_rsa_2048_failures}
  */
  readonly kexRsa2048Failures?: number;
  /**
  * Successful 2048-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_2048_successes DataThunderSlbServerSslCountersOper#kex_rsa_2048_successes}
  */
  readonly kexRsa2048Successes?: number;
  /**
  * Failed 4096-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_4096_failures DataThunderSlbServerSslCountersOper#kex_rsa_4096_failures}
  */
  readonly kexRsa4096Failures?: number;
  /**
  * Successful 4096-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_4096_successes DataThunderSlbServerSslCountersOper#kex_rsa_4096_successes}
  */
  readonly kexRsa4096Successes?: number;
  /**
  * Failed 512-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_512_failures DataThunderSlbServerSslCountersOper#kex_rsa_512_failures}
  */
  readonly kexRsa512Failures?: number;
  /**
  * Successful 512-bit RSA key exchanges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#kex_rsa_512_successes DataThunderSlbServerSslCountersOper#kex_rsa_512_successes}
  */
  readonly kexRsa512Successes?: number;
  /**
  * Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#port DataThunderSlbServerSslCountersOper#port}
  */
  readonly port?: number;
  /**
  * Failed SSL2 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_ssl2_failures DataThunderSlbServerSslCountersOper#renego_ssl2_failures}
  */
  readonly renegoSsl2Failures?: number;
  /**
  * Successful SSL2 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_ssl2_successes DataThunderSlbServerSslCountersOper#renego_ssl2_successes}
  */
  readonly renegoSsl2Successes?: number;
  /**
  * Failed SSL3 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_ssl3_failures DataThunderSlbServerSslCountersOper#renego_ssl3_failures}
  */
  readonly renegoSsl3Failures?: number;
  /**
  * Successful SSL3 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_ssl3_successes DataThunderSlbServerSslCountersOper#renego_ssl3_successes}
  */
  readonly renegoSsl3Successes?: number;
  /**
  * Failed TLS1.0 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls10_failures DataThunderSlbServerSslCountersOper#renego_tls10_failures}
  */
  readonly renegoTls10Failures?: number;
  /**
  * Successful TLS1.0 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls10_successes DataThunderSlbServerSslCountersOper#renego_tls10_successes}
  */
  readonly renegoTls10Successes?: number;
  /**
  * Failed TLS1.1 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls11_failures DataThunderSlbServerSslCountersOper#renego_tls11_failures}
  */
  readonly renegoTls11Failures?: number;
  /**
  * Successful TLS1.1 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls11_successes DataThunderSlbServerSslCountersOper#renego_tls11_successes}
  */
  readonly renegoTls11Successes?: number;
  /**
  * Failed TLS1.2 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls12_failures DataThunderSlbServerSslCountersOper#renego_tls12_failures}
  */
  readonly renegoTls12Failures?: number;
  /**
  * Successful TLS1.2 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls12_successes DataThunderSlbServerSslCountersOper#renego_tls12_successes}
  */
  readonly renegoTls12Successes?: number;
  /**
  * Failed TLS1.3 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls13_failures DataThunderSlbServerSslCountersOper#renego_tls13_failures}
  */
  readonly renegoTls13Failures?: number;
  /**
  * Successful TLS1.3 renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renego_tls13_successes DataThunderSlbServerSslCountersOper#renego_tls13_successes}
  */
  readonly renegoTls13Successes?: number;
  /**
  * Total renegotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#renegotiation_total DataThunderSlbServerSslCountersOper#renegotiation_total}
  */
  readonly renegotiationTotal?: number;
  /**
  * Session cache current connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#sess_cache_curr_conn DataThunderSlbServerSslCountersOper#sess_cache_curr_conn}
  */
  readonly sessCacheCurrConn?: number;
  /**
  * Session cache hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#sess_cache_hit DataThunderSlbServerSslCountersOper#sess_cache_hit}
  */
  readonly sessCacheHit?: number;
  /**
  * Session cache misses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#sess_cache_miss DataThunderSlbServerSslCountersOper#sess_cache_miss}
  */
  readonly sessCacheMiss?: number;
  /**
  * Session cache new entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#sess_cache_new DataThunderSlbServerSslCountersOper#sess_cache_new}
  */
  readonly sessCacheNew?: number;
  /**
  * Session cache timeouts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#sess_cache_timeout DataThunderSlbServerSslCountersOper#sess_cache_timeout}
  */
  readonly sessCacheTimeout?: number;
  /**
  * Failed SSL2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl2_failures DataThunderSlbServerSslCountersOper#ssl2_failures}
  */
  readonly ssl2Failures?: number;
  /**
  * Successful SSL2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl2_successes DataThunderSlbServerSslCountersOper#ssl2_successes}
  */
  readonly ssl2Successes?: number;
  /**
  * Failed SSL3 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_failures DataThunderSlbServerSslCountersOper#ssl3_failures}
  */
  readonly ssl3Failures?: number;
  /**
  * SSL3_RSA_DES_192_CBC3_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_192_cbc3_sha_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_des_192_cbc3_sha_failures}
  */
  readonly ssl3RsaDes192Cbc3ShaFailures?: number;
  /**
  * SSL3_RSA_DES_192_CBC3_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_192_cbc3_sha_id DataThunderSlbServerSslCountersOper#ssl3_rsa_des_192_cbc3_sha_id}
  */
  readonly ssl3RsaDes192Cbc3ShaId?: string;
  /**
  * SSL3_RSA_DES_192_CBC3_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_192_cbc3_sha_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_des_192_cbc3_sha_successes}
  */
  readonly ssl3RsaDes192Cbc3ShaSuccesses?: number;
  /**
  * SSL3_RSA_DES_40_CBC_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_40_cbc_sha_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_des_40_cbc_sha_failures}
  */
  readonly ssl3RsaDes40CbcShaFailures?: number;
  /**
  * SSL3_RSA_DES_40_CBC_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_40_cbc_sha_id DataThunderSlbServerSslCountersOper#ssl3_rsa_des_40_cbc_sha_id}
  */
  readonly ssl3RsaDes40CbcShaId?: string;
  /**
  * SSL3_RSA_DES_40_CBC_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_40_cbc_sha_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_des_40_cbc_sha_successes}
  */
  readonly ssl3RsaDes40CbcShaSuccesses?: number;
  /**
  * SSL3_RSA_DES_64_CBC_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_64_cbc_sha_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_des_64_cbc_sha_failures}
  */
  readonly ssl3RsaDes64CbcShaFailures?: number;
  /**
  * SSL3_RSA_DES_64_CBC_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_64_cbc_sha_id DataThunderSlbServerSslCountersOper#ssl3_rsa_des_64_cbc_sha_id}
  */
  readonly ssl3RsaDes64CbcShaId?: string;
  /**
  * SSL3_RSA_DES_64_CBC_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_des_64_cbc_sha_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_des_64_cbc_sha_successes}
  */
  readonly ssl3RsaDes64CbcShaSuccesses?: number;
  /**
  * SSL3_RSA_RC4_128_MD5 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_md5_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_md5_failures}
  */
  readonly ssl3RsaRc4128Md5Failures?: number;
  /**
  * SSL3_RSA_RC4_128_MD5 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_md5_id DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_md5_id}
  */
  readonly ssl3RsaRc4128Md5Id?: string;
  /**
  * SSL3_RSA_RC4_128_MD5 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_md5_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_md5_successes}
  */
  readonly ssl3RsaRc4128Md5Successes?: number;
  /**
  * SSL3_RSA_RC4_128_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_sha_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_sha_failures}
  */
  readonly ssl3RsaRc4128ShaFailures?: number;
  /**
  * SSL3_RSA_RC4_128_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_sha_id DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_sha_id}
  */
  readonly ssl3RsaRc4128ShaId?: string;
  /**
  * SSL3_RSA_RC4_128_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_128_sha_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_128_sha_successes}
  */
  readonly ssl3RsaRc4128ShaSuccesses?: number;
  /**
  * SSL3_RSA_RC4_40_MD5 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_40_md5_failures DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_40_md5_failures}
  */
  readonly ssl3RsaRc440Md5Failures?: number;
  /**
  * SSL3_RSA_RC4_40_MD5 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_40_md5_id DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_40_md5_id}
  */
  readonly ssl3RsaRc440Md5Id?: string;
  /**
  * SSL3_RSA_RC4_40_MD5 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_rsa_rc4_40_md5_successes DataThunderSlbServerSslCountersOper#ssl3_rsa_rc4_40_md5_successes}
  */
  readonly ssl3RsaRc440Md5Successes?: number;
  /**
  * Successful SSL3 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#ssl3_successes DataThunderSlbServerSslCountersOper#ssl3_successes}
  */
  readonly ssl3Successes?: number;
  /**
  * Failed TLS1.0 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls10_failures DataThunderSlbServerSslCountersOper#tls10_failures}
  */
  readonly tls10Failures?: number;
  /**
  * Successful TLS1.0 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls10_successes DataThunderSlbServerSslCountersOper#tls10_successes}
  */
  readonly tls10Successes?: number;
  /**
  * Failed TLS1.1 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls11_failures DataThunderSlbServerSslCountersOper#tls11_failures}
  */
  readonly tls11Failures?: number;
  /**
  * Successful TLS1.1 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls11_successes DataThunderSlbServerSslCountersOper#tls11_successes}
  */
  readonly tls11Successes?: number;
  /**
  * Failed TLS1.2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls12_failures DataThunderSlbServerSslCountersOper#tls12_failures}
  */
  readonly tls12Failures?: number;
  /**
  * Successful TLS1.2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls12_successes DataThunderSlbServerSslCountersOper#tls12_successes}
  */
  readonly tls12Successes?: number;
  /**
  * TLS13_AES_128_GCM_SHA256 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_128_gcm_sha256_failures DataThunderSlbServerSslCountersOper#tls13_aes_128_gcm_sha256_failures}
  */
  readonly tls13Aes128GcmSha256Failures?: number;
  /**
  * TLS13_AES_128_GCM_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_128_gcm_sha256_id DataThunderSlbServerSslCountersOper#tls13_aes_128_gcm_sha256_id}
  */
  readonly tls13Aes128GcmSha256Id?: string;
  /**
  * TLS13_AES_128_GCM_SHA256 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_128_gcm_sha256_successes DataThunderSlbServerSslCountersOper#tls13_aes_128_gcm_sha256_successes}
  */
  readonly tls13Aes128GcmSha256Successes?: number;
  /**
  * TLS13_AES_256_GCM_SHA384 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_256_gcm_sha384_failures DataThunderSlbServerSslCountersOper#tls13_aes_256_gcm_sha384_failures}
  */
  readonly tls13Aes256GcmSha384Failures?: number;
  /**
  * TLS13_AES_256_GCM_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_256_gcm_sha384_id DataThunderSlbServerSslCountersOper#tls13_aes_256_gcm_sha384_id}
  */
  readonly tls13Aes256GcmSha384Id?: string;
  /**
  * TLS13_AES_256_GCM_SHA384 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_aes_256_gcm_sha384_successes DataThunderSlbServerSslCountersOper#tls13_aes_256_gcm_sha384_successes}
  */
  readonly tls13Aes256GcmSha384Successes?: number;
  /**
  * TLS13_CHACHA20_POLY1305_SHA256 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_chacha20_poly1305_sha256_failures DataThunderSlbServerSslCountersOper#tls13_chacha20_poly1305_sha256_failures}
  */
  readonly tls13Chacha20Poly1305Sha256Failures?: number;
  /**
  * TLS13_CHACHA20_POLY1305_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_chacha20_poly1305_sha256_id DataThunderSlbServerSslCountersOper#tls13_chacha20_poly1305_sha256_id}
  */
  readonly tls13Chacha20Poly1305Sha256Id?: string;
  /**
  * TLS13_CHACHA20_POLY1305_SHA256 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_chacha20_poly1305_sha256_successes DataThunderSlbServerSslCountersOper#tls13_chacha20_poly1305_sha256_successes}
  */
  readonly tls13Chacha20Poly1305Sha256Successes?: number;
  /**
  * Failed TLS1.3 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_failures DataThunderSlbServerSslCountersOper#tls13_failures}
  */
  readonly tls13Failures?: number;
  /**
  * Successful TLS1.3 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls13_successes DataThunderSlbServerSslCountersOper#tls13_successes}
  */
  readonly tls13Successes?: number;
  /**
  * TLS1_DHE_RSA_AES_128_GCM_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_gcm_sha256_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_gcm_sha256_failures}
  */
  readonly tls1DheRsaAes128GcmSha256Failures?: number;
  /**
  * TLS1_DHE_RSA_AES_128_GCM_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_gcm_sha256_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_gcm_sha256_id}
  */
  readonly tls1DheRsaAes128GcmSha256Id?: string;
  /**
  * TLS1_DHE_RSA_AES_128_GCM_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_gcm_sha256_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_gcm_sha256_successes}
  */
  readonly tls1DheRsaAes128GcmSha256Successes?: number;
  /**
  * TLS1_DHE_RSA_AES_128_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha256_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha256_failures}
  */
  readonly tls1DheRsaAes128Sha256Failures?: number;
  /**
  * TLS1_DHE_RSA_AES_128_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha256_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha256_id}
  */
  readonly tls1DheRsaAes128Sha256Id?: string;
  /**
  * TLS1_DHE_RSA_AES_128_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha256_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha256_successes}
  */
  readonly tls1DheRsaAes128Sha256Successes?: number;
  /**
  * TLS1_DHE_RSA_AES_128_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha_failures}
  */
  readonly tls1DheRsaAes128ShaFailures?: number;
  /**
  * TLS1_DHE_RSA_AES_128_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha_id}
  */
  readonly tls1DheRsaAes128ShaId?: string;
  /**
  * TLS1_DHE_RSA_AES_128_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_128_sha_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_128_sha_successes}
  */
  readonly tls1DheRsaAes128ShaSuccesses?: number;
  /**
  * TLS1_DHE_RSA_AES_256_GCM_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_gcm_sha384_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_gcm_sha384_failures}
  */
  readonly tls1DheRsaAes256GcmSha384Failures?: number;
  /**
  * TLS1_DHE_RSA_AES_256_GCM_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_gcm_sha384_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_gcm_sha384_id}
  */
  readonly tls1DheRsaAes256GcmSha384Id?: string;
  /**
  * TLS1_DHE_RSA_AES_256_GCM_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_gcm_sha384_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_gcm_sha384_successes}
  */
  readonly tls1DheRsaAes256GcmSha384Successes?: number;
  /**
  * TLS1_DHE_RSA_AES_256_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha256_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha256_failures}
  */
  readonly tls1DheRsaAes256Sha256Failures?: number;
  /**
  * TLS1_DHE_RSA_AES_256_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha256_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha256_id}
  */
  readonly tls1DheRsaAes256Sha256Id?: string;
  /**
  * TLS1_DHE_RSA_AES_256_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha256_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha256_successes}
  */
  readonly tls1DheRsaAes256Sha256Successes?: number;
  /**
  * TLS1_DHE_RSA_AES_256_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha_failures}
  */
  readonly tls1DheRsaAes256ShaFailures?: number;
  /**
  * TLS1_DHE_RSA_AES_256_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha_id}
  */
  readonly tls1DheRsaAes256ShaId?: string;
  /**
  * TLS1_DHE_RSA_AES_256_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_aes_256_sha_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_aes_256_sha_successes}
  */
  readonly tls1DheRsaAes256ShaSuccesses?: number;
  /**
  * TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256 Cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_chacha20_poly1305_sha256_failures DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_chacha20_poly1305_sha256_failures}
  */
  readonly tls1DheRsaChacha20Poly1305Sha256Failures?: number;
  /**
  * TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_chacha20_poly1305_sha256_id DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_chacha20_poly1305_sha256_id}
  */
  readonly tls1DheRsaChacha20Poly1305Sha256Id?: string;
  /**
  * TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256 Cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_dhe_rsa_chacha20_poly1305_sha256_successes DataThunderSlbServerSslCountersOper#tls1_dhe_rsa_chacha20_poly1305_sha256_successes}
  */
  readonly tls1DheRsaChacha20Poly1305Sha256Successes?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures}
  */
  readonly tls1EcdheEcdsaAes128GcmSha256Failures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id}
  */
  readonly tls1EcdheEcdsaAes128GcmSha256Id?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes}
  */
  readonly tls1EcdheEcdsaAes128GcmSha256Successes?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha256_failures}
  */
  readonly tls1EcdheEcdsaAes128Sha256Failures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha256_id}
  */
  readonly tls1EcdheEcdsaAes128Sha256Id?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha256_successes}
  */
  readonly tls1EcdheEcdsaAes128Sha256Successes?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha_failures}
  */
  readonly tls1EcdheEcdsaAes128ShaFailures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha_id}
  */
  readonly tls1EcdheEcdsaAes128ShaId?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_128_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_128_sha_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_128_sha_successes}
  */
  readonly tls1EcdheEcdsaAes128ShaSuccesses?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures}
  */
  readonly tls1EcdheEcdsaAes256GcmSha384Failures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id}
  */
  readonly tls1EcdheEcdsaAes256GcmSha384Id?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes}
  */
  readonly tls1EcdheEcdsaAes256GcmSha384Successes?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha384_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha384_failures}
  */
  readonly tls1EcdheEcdsaAes256Sha384Failures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha384_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha384_id}
  */
  readonly tls1EcdheEcdsaAes256Sha384Id?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha384_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha384_successes}
  */
  readonly tls1EcdheEcdsaAes256Sha384Successes?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha_failures}
  */
  readonly tls1EcdheEcdsaAes256ShaFailures?: number;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha_id}
  */
  readonly tls1EcdheEcdsaAes256ShaId?: string;
  /**
  * TLS1_ECDHE_ECDSA_AES_256_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_aes_256_sha_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_aes_256_sha_successes}
  */
  readonly tls1EcdheEcdsaAes256ShaSuccesses?: number;
  /**
  * TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256 Cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures}
  */
  readonly tls1EcdheEcdsaChacha20Poly1305Sha256Failures?: number;
  /**
  * TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id}
  */
  readonly tls1EcdheEcdsaChacha20Poly1305Sha256Id?: string;
  /**
  * TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256 Cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes}
  */
  readonly tls1EcdheEcdsaChacha20Poly1305Sha256Successes?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_GCM_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_gcm_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_gcm_sha256_failures}
  */
  readonly tls1EcdheRsaAes128GcmSha256Failures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_GCM_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_gcm_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_gcm_sha256_id}
  */
  readonly tls1EcdheRsaAes128GcmSha256Id?: string;
  /**
  * TLS1_ECDHE_RSA_AES_128_GCM_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_gcm_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_gcm_sha256_successes}
  */
  readonly tls1EcdheRsaAes128GcmSha256Successes?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha256_failures}
  */
  readonly tls1EcdheRsaAes128Sha256Failures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha256_id}
  */
  readonly tls1EcdheRsaAes128Sha256Id?: string;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha256_successes}
  */
  readonly tls1EcdheRsaAes128Sha256Successes?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha_failures}
  */
  readonly tls1EcdheRsaAes128ShaFailures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha_id}
  */
  readonly tls1EcdheRsaAes128ShaId?: string;
  /**
  * TLS1_ECDHE_RSA_AES_128_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_128_sha_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_128_sha_successes}
  */
  readonly tls1EcdheRsaAes128ShaSuccesses?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_GCM_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_gcm_sha384_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_gcm_sha384_failures}
  */
  readonly tls1EcdheRsaAes256GcmSha384Failures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_GCM_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_gcm_sha384_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_gcm_sha384_id}
  */
  readonly tls1EcdheRsaAes256GcmSha384Id?: string;
  /**
  * TLS1_ECDHE_RSA_AES_256_GCM_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_gcm_sha384_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_gcm_sha384_successes}
  */
  readonly tls1EcdheRsaAes256GcmSha384Successes?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha384_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha384_failures}
  */
  readonly tls1EcdheRsaAes256Sha384Failures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha384_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha384_id}
  */
  readonly tls1EcdheRsaAes256Sha384Id?: string;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha384_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha384_successes}
  */
  readonly tls1EcdheRsaAes256Sha384Successes?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha_failures}
  */
  readonly tls1EcdheRsaAes256ShaFailures?: number;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha_id}
  */
  readonly tls1EcdheRsaAes256ShaId?: string;
  /**
  * TLS1_ECDHE_RSA_AES_256_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_aes_256_sha_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_aes_256_sha_successes}
  */
  readonly tls1EcdheRsaAes256ShaSuccesses?: number;
  /**
  * TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256 Cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures}
  */
  readonly tls1EcdheRsaChacha20Poly1305Sha256Failures?: number;
  /**
  * TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_id}
  */
  readonly tls1EcdheRsaChacha20Poly1305Sha256Id?: string;
  /**
  * TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256 Cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes}
  */
  readonly tls1EcdheRsaChacha20Poly1305Sha256Successes?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_GCM_SM3 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_gcm_sm3_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_gcm_sm3_failures}
  */
  readonly tls1EcdheSm2Sms4GcmSm3Failures?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_GCM_SM3 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_gcm_sm3_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_gcm_sm3_id}
  */
  readonly tls1EcdheSm2Sms4GcmSm3Id?: string;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_GCM_SM3 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_gcm_sm3_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_gcm_sm3_successes}
  */
  readonly tls1EcdheSm2Sms4GcmSm3Successes?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SHA256 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sha256_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sha256_failures}
  */
  readonly tls1EcdheSm2Sms4Sha256Failures?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sha256_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sha256_id}
  */
  readonly tls1EcdheSm2Sms4Sha256Id?: string;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SHA256 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sha256_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sha256_successes}
  */
  readonly tls1EcdheSm2Sms4Sha256Successes?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SM3 cipher failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sm3_failures DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sm3_failures}
  */
  readonly tls1EcdheSm2Sms4Sm3Failures?: number;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SM3 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sm3_id DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sm3_id}
  */
  readonly tls1EcdheSm2Sms4Sm3Id?: string;
  /**
  * TLS1_ECDHE_SM2_WITH_SMS4_SM3 cipher successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_ecdhe_sm2_sms4_sm3_successes DataThunderSlbServerSslCountersOper#tls1_ecdhe_sm2_sms4_sm3_successes}
  */
  readonly tls1EcdheSm2Sms4Sm3Successes?: number;
  /**
  * TLS1_RSA_AES_128_GCM_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_gcm_sha256_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_gcm_sha256_failures}
  */
  readonly tls1RsaAes128GcmSha256Failures?: number;
  /**
  * TLS1_RSA_AES_128_GCM_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_gcm_sha256_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_gcm_sha256_id}
  */
  readonly tls1RsaAes128GcmSha256Id?: string;
  /**
  * TLS1_RSA_AES_128_GCM_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_gcm_sha256_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_gcm_sha256_successes}
  */
  readonly tls1RsaAes128GcmSha256Successes?: number;
  /**
  * TLS1_RSA_AES_128_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha256_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha256_failures}
  */
  readonly tls1RsaAes128Sha256Failures?: number;
  /**
  * TLS1_RSA_AES_128_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha256_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha256_id}
  */
  readonly tls1RsaAes128Sha256Id?: string;
  /**
  * TLS1_RSA_AES_128_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha256_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha256_successes}
  */
  readonly tls1RsaAes128Sha256Successes?: number;
  /**
  * TLS1_RSA_AES_128_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha_failures}
  */
  readonly tls1RsaAes128ShaFailures?: number;
  /**
  * TLS1_RSA_AES_128_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha_id}
  */
  readonly tls1RsaAes128ShaId?: string;
  /**
  * TLS1_RSA_AES_128_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_128_sha_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_128_sha_successes}
  */
  readonly tls1RsaAes128ShaSuccesses?: number;
  /**
  * TLS1_RSA_AES_256_GCM_SHA384 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_gcm_sha384_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_gcm_sha384_failures}
  */
  readonly tls1RsaAes256GcmSha384Failures?: number;
  /**
  * TLS1_RSA_AES_256_GCM_SHA384 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_gcm_sha384_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_gcm_sha384_id}
  */
  readonly tls1RsaAes256GcmSha384Id?: string;
  /**
  * TLS1_RSA_AES_256_GCM_SHA384 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_gcm_sha384_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_gcm_sha384_successes}
  */
  readonly tls1RsaAes256GcmSha384Successes?: number;
  /**
  * TLS1_RSA_AES_256_SHA256 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha256_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha256_failures}
  */
  readonly tls1RsaAes256Sha256Failures?: number;
  /**
  * TLS1_RSA_AES_256_SHA256 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha256_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha256_id}
  */
  readonly tls1RsaAes256Sha256Id?: string;
  /**
  * TLS1_RSA_AES_256_SHA256 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha256_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha256_successes}
  */
  readonly tls1RsaAes256Sha256Successes?: number;
  /**
  * TLS1_RSA_AES_256_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha_failures DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha_failures}
  */
  readonly tls1RsaAes256ShaFailures?: number;
  /**
  * TLS1_RSA_AES_256_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha_id DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha_id}
  */
  readonly tls1RsaAes256ShaId?: string;
  /**
  * TLS1_RSA_AES_256_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_aes_256_sha_successes DataThunderSlbServerSslCountersOper#tls1_rsa_aes_256_sha_successes}
  */
  readonly tls1RsaAes256ShaSuccesses?: number;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_MD5 Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_md5_failures DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_md5_failures}
  */
  readonly tls1RsaExport1024Rc456Md5Failures?: number;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_MD5 Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_md5_id DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_md5_id}
  */
  readonly tls1RsaExport1024Rc456Md5Id?: string;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_MD5 Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_md5_successes DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_md5_successes}
  */
  readonly tls1RsaExport1024Rc456Md5Successes?: number;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_SHA Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_sha_failures DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_sha_failures}
  */
  readonly tls1RsaExport1024Rc456ShaFailures?: number;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_SHA Cipher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_sha_id DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_sha_id}
  */
  readonly tls1RsaExport1024Rc456ShaId?: string;
  /**
  * TLS1_RSA_EXPORT1024_RC4_56_SHA Successes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#tls1_rsa_export1024_rc4_56_sha_successes DataThunderSlbServerSslCountersOper#tls1_rsa_export1024_rc4_56_sha_successes}
  */
  readonly tls1RsaExport1024Rc456ShaSuccesses?: number;
  /**
  * virtual server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#vserver DataThunderSlbServerSslCountersOper#vserver}
  */
  readonly vserver?: string;
}

export function dataThunderSlbServerSslCountersOperOperToTerraform(struct?: DataThunderSlbServerSslCountersOperOperOutputReference | DataThunderSlbServerSslCountersOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_vfy: cdktf.numberToTerraform(struct!.certVfy),
    cumulative_sessions: cdktf.numberToTerraform(struct!.cumulativeSessions),
    downgraded: cdktf.numberToTerraform(struct!.downgraded),
    hs_avg_time: cdktf.numberToTerraform(struct!.hsAvgTime),
    hs_failures: cdktf.numberToTerraform(struct!.hsFailures),
    kex_dhe_1024_failures: cdktf.numberToTerraform(struct!.kexDhe1024Failures),
    kex_dhe_1024_successes: cdktf.numberToTerraform(struct!.kexDhe1024Successes),
    kex_dhe_2048_failures: cdktf.numberToTerraform(struct!.kexDhe2048Failures),
    kex_dhe_2048_successes: cdktf.numberToTerraform(struct!.kexDhe2048Successes),
    kex_dhe_512_failures: cdktf.numberToTerraform(struct!.kexDhe512Failures),
    kex_dhe_512_successes: cdktf.numberToTerraform(struct!.kexDhe512Successes),
    kex_ecdhe_secp256r1_failures: cdktf.numberToTerraform(struct!.kexEcdheSecp256R1Failures),
    kex_ecdhe_secp256r1_successes: cdktf.numberToTerraform(struct!.kexEcdheSecp256R1Successes),
    kex_ecdhe_secp384r1_failures: cdktf.numberToTerraform(struct!.kexEcdheSecp384R1Failures),
    kex_ecdhe_secp384r1_successes: cdktf.numberToTerraform(struct!.kexEcdheSecp384R1Successes),
    kex_ecdhe_secp521r1_failures: cdktf.numberToTerraform(struct!.kexEcdheSecp521R1Failures),
    kex_ecdhe_secp521r1_successes: cdktf.numberToTerraform(struct!.kexEcdheSecp521R1Successes),
    kex_ecdhe_sm2_failures: cdktf.numberToTerraform(struct!.kexEcdheSm2Failures),
    kex_ecdhe_sm2_successes: cdktf.numberToTerraform(struct!.kexEcdheSm2Successes),
    kex_ecdhe_x25519_failures: cdktf.numberToTerraform(struct!.kexEcdheX25519Failures),
    kex_ecdhe_x25519_successes: cdktf.numberToTerraform(struct!.kexEcdheX25519Successes),
    kex_ecdhe_x448_failures: cdktf.numberToTerraform(struct!.kexEcdheX448Failures),
    kex_ecdhe_x448_successes: cdktf.numberToTerraform(struct!.kexEcdheX448Successes),
    kex_rsa_1024_failures: cdktf.numberToTerraform(struct!.kexRsa1024Failures),
    kex_rsa_1024_successes: cdktf.numberToTerraform(struct!.kexRsa1024Successes),
    kex_rsa_2048_failures: cdktf.numberToTerraform(struct!.kexRsa2048Failures),
    kex_rsa_2048_successes: cdktf.numberToTerraform(struct!.kexRsa2048Successes),
    kex_rsa_4096_failures: cdktf.numberToTerraform(struct!.kexRsa4096Failures),
    kex_rsa_4096_successes: cdktf.numberToTerraform(struct!.kexRsa4096Successes),
    kex_rsa_512_failures: cdktf.numberToTerraform(struct!.kexRsa512Failures),
    kex_rsa_512_successes: cdktf.numberToTerraform(struct!.kexRsa512Successes),
    port: cdktf.numberToTerraform(struct!.port),
    renego_ssl2_failures: cdktf.numberToTerraform(struct!.renegoSsl2Failures),
    renego_ssl2_successes: cdktf.numberToTerraform(struct!.renegoSsl2Successes),
    renego_ssl3_failures: cdktf.numberToTerraform(struct!.renegoSsl3Failures),
    renego_ssl3_successes: cdktf.numberToTerraform(struct!.renegoSsl3Successes),
    renego_tls10_failures: cdktf.numberToTerraform(struct!.renegoTls10Failures),
    renego_tls10_successes: cdktf.numberToTerraform(struct!.renegoTls10Successes),
    renego_tls11_failures: cdktf.numberToTerraform(struct!.renegoTls11Failures),
    renego_tls11_successes: cdktf.numberToTerraform(struct!.renegoTls11Successes),
    renego_tls12_failures: cdktf.numberToTerraform(struct!.renegoTls12Failures),
    renego_tls12_successes: cdktf.numberToTerraform(struct!.renegoTls12Successes),
    renego_tls13_failures: cdktf.numberToTerraform(struct!.renegoTls13Failures),
    renego_tls13_successes: cdktf.numberToTerraform(struct!.renegoTls13Successes),
    renegotiation_total: cdktf.numberToTerraform(struct!.renegotiationTotal),
    sess_cache_curr_conn: cdktf.numberToTerraform(struct!.sessCacheCurrConn),
    sess_cache_hit: cdktf.numberToTerraform(struct!.sessCacheHit),
    sess_cache_miss: cdktf.numberToTerraform(struct!.sessCacheMiss),
    sess_cache_new: cdktf.numberToTerraform(struct!.sessCacheNew),
    sess_cache_timeout: cdktf.numberToTerraform(struct!.sessCacheTimeout),
    ssl2_failures: cdktf.numberToTerraform(struct!.ssl2Failures),
    ssl2_successes: cdktf.numberToTerraform(struct!.ssl2Successes),
    ssl3_failures: cdktf.numberToTerraform(struct!.ssl3Failures),
    ssl3_rsa_des_192_cbc3_sha_failures: cdktf.numberToTerraform(struct!.ssl3RsaDes192Cbc3ShaFailures),
    ssl3_rsa_des_192_cbc3_sha_id: cdktf.stringToTerraform(struct!.ssl3RsaDes192Cbc3ShaId),
    ssl3_rsa_des_192_cbc3_sha_successes: cdktf.numberToTerraform(struct!.ssl3RsaDes192Cbc3ShaSuccesses),
    ssl3_rsa_des_40_cbc_sha_failures: cdktf.numberToTerraform(struct!.ssl3RsaDes40CbcShaFailures),
    ssl3_rsa_des_40_cbc_sha_id: cdktf.stringToTerraform(struct!.ssl3RsaDes40CbcShaId),
    ssl3_rsa_des_40_cbc_sha_successes: cdktf.numberToTerraform(struct!.ssl3RsaDes40CbcShaSuccesses),
    ssl3_rsa_des_64_cbc_sha_failures: cdktf.numberToTerraform(struct!.ssl3RsaDes64CbcShaFailures),
    ssl3_rsa_des_64_cbc_sha_id: cdktf.stringToTerraform(struct!.ssl3RsaDes64CbcShaId),
    ssl3_rsa_des_64_cbc_sha_successes: cdktf.numberToTerraform(struct!.ssl3RsaDes64CbcShaSuccesses),
    ssl3_rsa_rc4_128_md5_failures: cdktf.numberToTerraform(struct!.ssl3RsaRc4128Md5Failures),
    ssl3_rsa_rc4_128_md5_id: cdktf.stringToTerraform(struct!.ssl3RsaRc4128Md5Id),
    ssl3_rsa_rc4_128_md5_successes: cdktf.numberToTerraform(struct!.ssl3RsaRc4128Md5Successes),
    ssl3_rsa_rc4_128_sha_failures: cdktf.numberToTerraform(struct!.ssl3RsaRc4128ShaFailures),
    ssl3_rsa_rc4_128_sha_id: cdktf.stringToTerraform(struct!.ssl3RsaRc4128ShaId),
    ssl3_rsa_rc4_128_sha_successes: cdktf.numberToTerraform(struct!.ssl3RsaRc4128ShaSuccesses),
    ssl3_rsa_rc4_40_md5_failures: cdktf.numberToTerraform(struct!.ssl3RsaRc440Md5Failures),
    ssl3_rsa_rc4_40_md5_id: cdktf.stringToTerraform(struct!.ssl3RsaRc440Md5Id),
    ssl3_rsa_rc4_40_md5_successes: cdktf.numberToTerraform(struct!.ssl3RsaRc440Md5Successes),
    ssl3_successes: cdktf.numberToTerraform(struct!.ssl3Successes),
    tls10_failures: cdktf.numberToTerraform(struct!.tls10Failures),
    tls10_successes: cdktf.numberToTerraform(struct!.tls10Successes),
    tls11_failures: cdktf.numberToTerraform(struct!.tls11Failures),
    tls11_successes: cdktf.numberToTerraform(struct!.tls11Successes),
    tls12_failures: cdktf.numberToTerraform(struct!.tls12Failures),
    tls12_successes: cdktf.numberToTerraform(struct!.tls12Successes),
    tls13_aes_128_gcm_sha256_failures: cdktf.numberToTerraform(struct!.tls13Aes128GcmSha256Failures),
    tls13_aes_128_gcm_sha256_id: cdktf.stringToTerraform(struct!.tls13Aes128GcmSha256Id),
    tls13_aes_128_gcm_sha256_successes: cdktf.numberToTerraform(struct!.tls13Aes128GcmSha256Successes),
    tls13_aes_256_gcm_sha384_failures: cdktf.numberToTerraform(struct!.tls13Aes256GcmSha384Failures),
    tls13_aes_256_gcm_sha384_id: cdktf.stringToTerraform(struct!.tls13Aes256GcmSha384Id),
    tls13_aes_256_gcm_sha384_successes: cdktf.numberToTerraform(struct!.tls13Aes256GcmSha384Successes),
    tls13_chacha20_poly1305_sha256_failures: cdktf.numberToTerraform(struct!.tls13Chacha20Poly1305Sha256Failures),
    tls13_chacha20_poly1305_sha256_id: cdktf.stringToTerraform(struct!.tls13Chacha20Poly1305Sha256Id),
    tls13_chacha20_poly1305_sha256_successes: cdktf.numberToTerraform(struct!.tls13Chacha20Poly1305Sha256Successes),
    tls13_failures: cdktf.numberToTerraform(struct!.tls13Failures),
    tls13_successes: cdktf.numberToTerraform(struct!.tls13Successes),
    tls1_dhe_rsa_aes_128_gcm_sha256_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes128GcmSha256Failures),
    tls1_dhe_rsa_aes_128_gcm_sha256_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes128GcmSha256Id),
    tls1_dhe_rsa_aes_128_gcm_sha256_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes128GcmSha256Successes),
    tls1_dhe_rsa_aes_128_sha256_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes128Sha256Failures),
    tls1_dhe_rsa_aes_128_sha256_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes128Sha256Id),
    tls1_dhe_rsa_aes_128_sha256_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes128Sha256Successes),
    tls1_dhe_rsa_aes_128_sha_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes128ShaFailures),
    tls1_dhe_rsa_aes_128_sha_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes128ShaId),
    tls1_dhe_rsa_aes_128_sha_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes128ShaSuccesses),
    tls1_dhe_rsa_aes_256_gcm_sha384_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes256GcmSha384Failures),
    tls1_dhe_rsa_aes_256_gcm_sha384_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes256GcmSha384Id),
    tls1_dhe_rsa_aes_256_gcm_sha384_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes256GcmSha384Successes),
    tls1_dhe_rsa_aes_256_sha256_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes256Sha256Failures),
    tls1_dhe_rsa_aes_256_sha256_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes256Sha256Id),
    tls1_dhe_rsa_aes_256_sha256_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes256Sha256Successes),
    tls1_dhe_rsa_aes_256_sha_failures: cdktf.numberToTerraform(struct!.tls1DheRsaAes256ShaFailures),
    tls1_dhe_rsa_aes_256_sha_id: cdktf.stringToTerraform(struct!.tls1DheRsaAes256ShaId),
    tls1_dhe_rsa_aes_256_sha_successes: cdktf.numberToTerraform(struct!.tls1DheRsaAes256ShaSuccesses),
    tls1_dhe_rsa_chacha20_poly1305_sha256_failures: cdktf.numberToTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Failures),
    tls1_dhe_rsa_chacha20_poly1305_sha256_id: cdktf.stringToTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Id),
    tls1_dhe_rsa_chacha20_poly1305_sha256_successes: cdktf.numberToTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Successes),
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Failures),
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Id),
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Successes),
    tls1_ecdhe_ecdsa_aes_128_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128Sha256Failures),
    tls1_ecdhe_ecdsa_aes_128_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes128Sha256Id),
    tls1_ecdhe_ecdsa_aes_128_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128Sha256Successes),
    tls1_ecdhe_ecdsa_aes_128_sha_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128ShaFailures),
    tls1_ecdhe_ecdsa_aes_128_sha_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes128ShaId),
    tls1_ecdhe_ecdsa_aes_128_sha_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes128ShaSuccesses),
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Failures),
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Id),
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Successes),
    tls1_ecdhe_ecdsa_aes_256_sha384_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256Sha384Failures),
    tls1_ecdhe_ecdsa_aes_256_sha384_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes256Sha384Id),
    tls1_ecdhe_ecdsa_aes_256_sha384_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256Sha384Successes),
    tls1_ecdhe_ecdsa_aes_256_sha_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256ShaFailures),
    tls1_ecdhe_ecdsa_aes_256_sha_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaAes256ShaId),
    tls1_ecdhe_ecdsa_aes_256_sha_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaAes256ShaSuccesses),
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Failures),
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Id),
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Successes),
    tls1_ecdhe_rsa_aes_128_gcm_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128GcmSha256Failures),
    tls1_ecdhe_rsa_aes_128_gcm_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes128GcmSha256Id),
    tls1_ecdhe_rsa_aes_128_gcm_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128GcmSha256Successes),
    tls1_ecdhe_rsa_aes_128_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128Sha256Failures),
    tls1_ecdhe_rsa_aes_128_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes128Sha256Id),
    tls1_ecdhe_rsa_aes_128_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128Sha256Successes),
    tls1_ecdhe_rsa_aes_128_sha_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128ShaFailures),
    tls1_ecdhe_rsa_aes_128_sha_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes128ShaId),
    tls1_ecdhe_rsa_aes_128_sha_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes128ShaSuccesses),
    tls1_ecdhe_rsa_aes_256_gcm_sha384_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256GcmSha384Failures),
    tls1_ecdhe_rsa_aes_256_gcm_sha384_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes256GcmSha384Id),
    tls1_ecdhe_rsa_aes_256_gcm_sha384_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256GcmSha384Successes),
    tls1_ecdhe_rsa_aes_256_sha384_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256Sha384Failures),
    tls1_ecdhe_rsa_aes_256_sha384_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes256Sha384Id),
    tls1_ecdhe_rsa_aes_256_sha384_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256Sha384Successes),
    tls1_ecdhe_rsa_aes_256_sha_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256ShaFailures),
    tls1_ecdhe_rsa_aes_256_sha_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaAes256ShaId),
    tls1_ecdhe_rsa_aes_256_sha_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaAes256ShaSuccesses),
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Failures),
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Id),
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Successes),
    tls1_ecdhe_sm2_sms4_gcm_sm3_failures: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Failures),
    tls1_ecdhe_sm2_sms4_gcm_sm3_id: cdktf.stringToTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Id),
    tls1_ecdhe_sm2_sms4_gcm_sm3_successes: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Successes),
    tls1_ecdhe_sm2_sms4_sha256_failures: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4Sha256Failures),
    tls1_ecdhe_sm2_sms4_sha256_id: cdktf.stringToTerraform(struct!.tls1EcdheSm2Sms4Sha256Id),
    tls1_ecdhe_sm2_sms4_sha256_successes: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4Sha256Successes),
    tls1_ecdhe_sm2_sms4_sm3_failures: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4Sm3Failures),
    tls1_ecdhe_sm2_sms4_sm3_id: cdktf.stringToTerraform(struct!.tls1EcdheSm2Sms4Sm3Id),
    tls1_ecdhe_sm2_sms4_sm3_successes: cdktf.numberToTerraform(struct!.tls1EcdheSm2Sms4Sm3Successes),
    tls1_rsa_aes_128_gcm_sha256_failures: cdktf.numberToTerraform(struct!.tls1RsaAes128GcmSha256Failures),
    tls1_rsa_aes_128_gcm_sha256_id: cdktf.stringToTerraform(struct!.tls1RsaAes128GcmSha256Id),
    tls1_rsa_aes_128_gcm_sha256_successes: cdktf.numberToTerraform(struct!.tls1RsaAes128GcmSha256Successes),
    tls1_rsa_aes_128_sha256_failures: cdktf.numberToTerraform(struct!.tls1RsaAes128Sha256Failures),
    tls1_rsa_aes_128_sha256_id: cdktf.stringToTerraform(struct!.tls1RsaAes128Sha256Id),
    tls1_rsa_aes_128_sha256_successes: cdktf.numberToTerraform(struct!.tls1RsaAes128Sha256Successes),
    tls1_rsa_aes_128_sha_failures: cdktf.numberToTerraform(struct!.tls1RsaAes128ShaFailures),
    tls1_rsa_aes_128_sha_id: cdktf.stringToTerraform(struct!.tls1RsaAes128ShaId),
    tls1_rsa_aes_128_sha_successes: cdktf.numberToTerraform(struct!.tls1RsaAes128ShaSuccesses),
    tls1_rsa_aes_256_gcm_sha384_failures: cdktf.numberToTerraform(struct!.tls1RsaAes256GcmSha384Failures),
    tls1_rsa_aes_256_gcm_sha384_id: cdktf.stringToTerraform(struct!.tls1RsaAes256GcmSha384Id),
    tls1_rsa_aes_256_gcm_sha384_successes: cdktf.numberToTerraform(struct!.tls1RsaAes256GcmSha384Successes),
    tls1_rsa_aes_256_sha256_failures: cdktf.numberToTerraform(struct!.tls1RsaAes256Sha256Failures),
    tls1_rsa_aes_256_sha256_id: cdktf.stringToTerraform(struct!.tls1RsaAes256Sha256Id),
    tls1_rsa_aes_256_sha256_successes: cdktf.numberToTerraform(struct!.tls1RsaAes256Sha256Successes),
    tls1_rsa_aes_256_sha_failures: cdktf.numberToTerraform(struct!.tls1RsaAes256ShaFailures),
    tls1_rsa_aes_256_sha_id: cdktf.stringToTerraform(struct!.tls1RsaAes256ShaId),
    tls1_rsa_aes_256_sha_successes: cdktf.numberToTerraform(struct!.tls1RsaAes256ShaSuccesses),
    tls1_rsa_export1024_rc4_56_md5_failures: cdktf.numberToTerraform(struct!.tls1RsaExport1024Rc456Md5Failures),
    tls1_rsa_export1024_rc4_56_md5_id: cdktf.stringToTerraform(struct!.tls1RsaExport1024Rc456Md5Id),
    tls1_rsa_export1024_rc4_56_md5_successes: cdktf.numberToTerraform(struct!.tls1RsaExport1024Rc456Md5Successes),
    tls1_rsa_export1024_rc4_56_sha_failures: cdktf.numberToTerraform(struct!.tls1RsaExport1024Rc456ShaFailures),
    tls1_rsa_export1024_rc4_56_sha_id: cdktf.stringToTerraform(struct!.tls1RsaExport1024Rc456ShaId),
    tls1_rsa_export1024_rc4_56_sha_successes: cdktf.numberToTerraform(struct!.tls1RsaExport1024Rc456ShaSuccesses),
    vserver: cdktf.stringToTerraform(struct!.vserver),
  }
}


export function dataThunderSlbServerSslCountersOperOperToHclTerraform(struct?: DataThunderSlbServerSslCountersOperOperOutputReference | DataThunderSlbServerSslCountersOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_vfy: {
      value: cdktf.numberToHclTerraform(struct!.certVfy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cumulative_sessions: {
      value: cdktf.numberToHclTerraform(struct!.cumulativeSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downgraded: {
      value: cdktf.numberToHclTerraform(struct!.downgraded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hs_avg_time: {
      value: cdktf.numberToHclTerraform(struct!.hsAvgTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hs_failures: {
      value: cdktf.numberToHclTerraform(struct!.hsFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_1024_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe1024Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_1024_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe1024Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_2048_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe2048Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_2048_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe2048Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_512_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe512Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_dhe_512_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexDhe512Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp256r1_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp256R1Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp256r1_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp256R1Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp384r1_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp384R1Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp384r1_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp384R1Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp521r1_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp521R1Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_secp521r1_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSecp521R1Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_sm2_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSm2Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_sm2_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheSm2Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_x25519_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheX25519Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_x25519_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheX25519Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_x448_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheX448Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_ecdhe_x448_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexEcdheX448Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_1024_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa1024Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_1024_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa1024Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_2048_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa2048Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_2048_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa2048Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_4096_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa4096Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_4096_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa4096Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_512_failures: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa512Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kex_rsa_512_successes: {
      value: cdktf.numberToHclTerraform(struct!.kexRsa512Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_ssl2_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoSsl2Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_ssl2_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoSsl2Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_ssl3_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoSsl3Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_ssl3_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoSsl3Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls10_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls10Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls10_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls10Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls11_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls11Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls11_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls11Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls12_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls12Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls12_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls12Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls13_failures: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls13Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renego_tls13_successes: {
      value: cdktf.numberToHclTerraform(struct!.renegoTls13Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renegotiation_total: {
      value: cdktf.numberToHclTerraform(struct!.renegotiationTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_cache_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.sessCacheCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_cache_hit: {
      value: cdktf.numberToHclTerraform(struct!.sessCacheHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_cache_miss: {
      value: cdktf.numberToHclTerraform(struct!.sessCacheMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_cache_new: {
      value: cdktf.numberToHclTerraform(struct!.sessCacheNew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_cache_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessCacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl2_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl2Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl2_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl2Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_192_cbc3_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes192Cbc3ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_192_cbc3_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaDes192Cbc3ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_des_192_cbc3_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes192Cbc3ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_40_cbc_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes40CbcShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_40_cbc_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaDes40CbcShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_des_40_cbc_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes40CbcShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_64_cbc_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes64CbcShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_des_64_cbc_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaDes64CbcShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_des_64_cbc_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaDes64CbcShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_128_md5_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc4128Md5Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_128_md5_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaRc4128Md5Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_rc4_128_md5_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc4128Md5Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_128_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc4128ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_128_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaRc4128ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_rc4_128_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc4128ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_40_md5_failures: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc440Md5Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_rsa_rc4_40_md5_id: {
      value: cdktf.stringToHclTerraform(struct!.ssl3RsaRc440Md5Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl3_rsa_rc4_40_md5_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3RsaRc440Md5Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_successes: {
      value: cdktf.numberToHclTerraform(struct!.ssl3Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls10_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls10Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls10_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls10Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls11_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls11Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls11_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls11Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls12Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls12Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_aes_128_gcm_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls13Aes128GcmSha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_aes_128_gcm_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls13Aes128GcmSha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls13_aes_128_gcm_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls13Aes128GcmSha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_aes_256_gcm_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls13Aes256GcmSha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_aes_256_gcm_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls13Aes256GcmSha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls13_aes_256_gcm_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls13Aes256GcmSha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_chacha20_poly1305_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls13Chacha20Poly1305Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_chacha20_poly1305_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls13Chacha20Poly1305Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls13_chacha20_poly1305_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls13Chacha20Poly1305Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls13Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls13Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_gcm_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128GcmSha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_gcm_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes128GcmSha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_128_gcm_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128GcmSha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes128Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_128_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_128_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes128ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_128_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes128ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_gcm_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256GcmSha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_gcm_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes256GcmSha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_256_gcm_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256GcmSha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes256Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_256_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_aes_256_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaAes256ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_aes_256_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaAes256ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_chacha20_poly1305_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_dhe_rsa_chacha20_poly1305_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_dhe_rsa_chacha20_poly1305_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1DheRsaChacha20Poly1305Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128GcmSha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes128Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_128_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_128_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes128ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_128_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes128ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256GcmSha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256Sha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes256Sha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_256_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256Sha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_aes_256_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaAes256ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_aes_256_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaAes256ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheEcdsaChacha20Poly1305Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_gcm_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128GcmSha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_gcm_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes128GcmSha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_128_gcm_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128GcmSha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes128Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_128_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_128_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes128ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_128_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes128ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_gcm_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256GcmSha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_gcm_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes256GcmSha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_256_gcm_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256GcmSha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256Sha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes256Sha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_256_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256Sha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_aes_256_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaAes256ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_aes_256_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaAes256ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheRsaChacha20Poly1305Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_gcm_sm3_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_gcm_sm3_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_sm2_sms4_gcm_sm3_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4GcmSm3Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheSm2Sms4Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_sm2_sms4_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_sm3_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4Sm3Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_ecdhe_sm2_sms4_sm3_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1EcdheSm2Sms4Sm3Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_ecdhe_sm2_sms4_sm3_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1EcdheSm2Sms4Sm3Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_gcm_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128GcmSha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_gcm_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes128GcmSha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_128_gcm_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128GcmSha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes128Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_128_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_128_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes128ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_128_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes128ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_gcm_sha384_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256GcmSha384Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_gcm_sha384_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes256GcmSha384Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_256_gcm_sha384_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256GcmSha384Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_sha256_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256Sha256Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_sha256_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes256Sha256Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_256_sha256_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256Sha256Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_aes_256_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaAes256ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_aes_256_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaAes256ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_export1024_rc4_56_md5_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaExport1024Rc456Md5Failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_export1024_rc4_56_md5_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaExport1024Rc456Md5Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_export1024_rc4_56_md5_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaExport1024Rc456Md5Successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_export1024_rc4_56_sha_failures: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaExport1024Rc456ShaFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls1_rsa_export1024_rc4_56_sha_id: {
      value: cdktf.stringToHclTerraform(struct!.tls1RsaExport1024Rc456ShaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls1_rsa_export1024_rc4_56_sha_successes: {
      value: cdktf.numberToHclTerraform(struct!.tls1RsaExport1024Rc456ShaSuccesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vserver: {
      value: cdktf.stringToHclTerraform(struct!.vserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbServerSslCountersOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbServerSslCountersOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certVfy !== undefined) {
      hasAnyValues = true;
      internalValueResult.certVfy = this._certVfy;
    }
    if (this._cumulativeSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cumulativeSessions = this._cumulativeSessions;
    }
    if (this._downgraded !== undefined) {
      hasAnyValues = true;
      internalValueResult.downgraded = this._downgraded;
    }
    if (this._hsAvgTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsAvgTime = this._hsAvgTime;
    }
    if (this._hsFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsFailures = this._hsFailures;
    }
    if (this._kexDhe1024Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe1024Failures = this._kexDhe1024Failures;
    }
    if (this._kexDhe1024Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe1024Successes = this._kexDhe1024Successes;
    }
    if (this._kexDhe2048Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe2048Failures = this._kexDhe2048Failures;
    }
    if (this._kexDhe2048Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe2048Successes = this._kexDhe2048Successes;
    }
    if (this._kexDhe512Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe512Failures = this._kexDhe512Failures;
    }
    if (this._kexDhe512Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexDhe512Successes = this._kexDhe512Successes;
    }
    if (this._kexEcdheSecp256R1Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp256R1Failures = this._kexEcdheSecp256R1Failures;
    }
    if (this._kexEcdheSecp256R1Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp256R1Successes = this._kexEcdheSecp256R1Successes;
    }
    if (this._kexEcdheSecp384R1Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp384R1Failures = this._kexEcdheSecp384R1Failures;
    }
    if (this._kexEcdheSecp384R1Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp384R1Successes = this._kexEcdheSecp384R1Successes;
    }
    if (this._kexEcdheSecp521R1Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp521R1Failures = this._kexEcdheSecp521R1Failures;
    }
    if (this._kexEcdheSecp521R1Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSecp521R1Successes = this._kexEcdheSecp521R1Successes;
    }
    if (this._kexEcdheSm2Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSm2Failures = this._kexEcdheSm2Failures;
    }
    if (this._kexEcdheSm2Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheSm2Successes = this._kexEcdheSm2Successes;
    }
    if (this._kexEcdheX25519Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheX25519Failures = this._kexEcdheX25519Failures;
    }
    if (this._kexEcdheX25519Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheX25519Successes = this._kexEcdheX25519Successes;
    }
    if (this._kexEcdheX448Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheX448Failures = this._kexEcdheX448Failures;
    }
    if (this._kexEcdheX448Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexEcdheX448Successes = this._kexEcdheX448Successes;
    }
    if (this._kexRsa1024Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa1024Failures = this._kexRsa1024Failures;
    }
    if (this._kexRsa1024Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa1024Successes = this._kexRsa1024Successes;
    }
    if (this._kexRsa2048Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa2048Failures = this._kexRsa2048Failures;
    }
    if (this._kexRsa2048Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa2048Successes = this._kexRsa2048Successes;
    }
    if (this._kexRsa4096Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa4096Failures = this._kexRsa4096Failures;
    }
    if (this._kexRsa4096Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa4096Successes = this._kexRsa4096Successes;
    }
    if (this._kexRsa512Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa512Failures = this._kexRsa512Failures;
    }
    if (this._kexRsa512Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kexRsa512Successes = this._kexRsa512Successes;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._renegoSsl2Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoSsl2Failures = this._renegoSsl2Failures;
    }
    if (this._renegoSsl2Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoSsl2Successes = this._renegoSsl2Successes;
    }
    if (this._renegoSsl3Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoSsl3Failures = this._renegoSsl3Failures;
    }
    if (this._renegoSsl3Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoSsl3Successes = this._renegoSsl3Successes;
    }
    if (this._renegoTls10Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls10Failures = this._renegoTls10Failures;
    }
    if (this._renegoTls10Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls10Successes = this._renegoTls10Successes;
    }
    if (this._renegoTls11Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls11Failures = this._renegoTls11Failures;
    }
    if (this._renegoTls11Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls11Successes = this._renegoTls11Successes;
    }
    if (this._renegoTls12Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls12Failures = this._renegoTls12Failures;
    }
    if (this._renegoTls12Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls12Successes = this._renegoTls12Successes;
    }
    if (this._renegoTls13Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls13Failures = this._renegoTls13Failures;
    }
    if (this._renegoTls13Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegoTls13Successes = this._renegoTls13Successes;
    }
    if (this._renegotiationTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.renegotiationTotal = this._renegotiationTotal;
    }
    if (this._sessCacheCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCacheCurrConn = this._sessCacheCurrConn;
    }
    if (this._sessCacheHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCacheHit = this._sessCacheHit;
    }
    if (this._sessCacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCacheMiss = this._sessCacheMiss;
    }
    if (this._sessCacheNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCacheNew = this._sessCacheNew;
    }
    if (this._sessCacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCacheTimeout = this._sessCacheTimeout;
    }
    if (this._ssl2Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl2Failures = this._ssl2Failures;
    }
    if (this._ssl2Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl2Successes = this._ssl2Successes;
    }
    if (this._ssl3Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3Failures = this._ssl3Failures;
    }
    if (this._ssl3RsaDes192Cbc3ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes192Cbc3ShaFailures = this._ssl3RsaDes192Cbc3ShaFailures;
    }
    if (this._ssl3RsaDes192Cbc3ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes192Cbc3ShaId = this._ssl3RsaDes192Cbc3ShaId;
    }
    if (this._ssl3RsaDes192Cbc3ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes192Cbc3ShaSuccesses = this._ssl3RsaDes192Cbc3ShaSuccesses;
    }
    if (this._ssl3RsaDes40CbcShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes40CbcShaFailures = this._ssl3RsaDes40CbcShaFailures;
    }
    if (this._ssl3RsaDes40CbcShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes40CbcShaId = this._ssl3RsaDes40CbcShaId;
    }
    if (this._ssl3RsaDes40CbcShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes40CbcShaSuccesses = this._ssl3RsaDes40CbcShaSuccesses;
    }
    if (this._ssl3RsaDes64CbcShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes64CbcShaFailures = this._ssl3RsaDes64CbcShaFailures;
    }
    if (this._ssl3RsaDes64CbcShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes64CbcShaId = this._ssl3RsaDes64CbcShaId;
    }
    if (this._ssl3RsaDes64CbcShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaDes64CbcShaSuccesses = this._ssl3RsaDes64CbcShaSuccesses;
    }
    if (this._ssl3RsaRc4128Md5Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128Md5Failures = this._ssl3RsaRc4128Md5Failures;
    }
    if (this._ssl3RsaRc4128Md5Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128Md5Id = this._ssl3RsaRc4128Md5Id;
    }
    if (this._ssl3RsaRc4128Md5Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128Md5Successes = this._ssl3RsaRc4128Md5Successes;
    }
    if (this._ssl3RsaRc4128ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128ShaFailures = this._ssl3RsaRc4128ShaFailures;
    }
    if (this._ssl3RsaRc4128ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128ShaId = this._ssl3RsaRc4128ShaId;
    }
    if (this._ssl3RsaRc4128ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc4128ShaSuccesses = this._ssl3RsaRc4128ShaSuccesses;
    }
    if (this._ssl3RsaRc440Md5Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc440Md5Failures = this._ssl3RsaRc440Md5Failures;
    }
    if (this._ssl3RsaRc440Md5Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc440Md5Id = this._ssl3RsaRc440Md5Id;
    }
    if (this._ssl3RsaRc440Md5Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3RsaRc440Md5Successes = this._ssl3RsaRc440Md5Successes;
    }
    if (this._ssl3Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3Successes = this._ssl3Successes;
    }
    if (this._tls10Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls10Failures = this._tls10Failures;
    }
    if (this._tls10Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls10Successes = this._tls10Successes;
    }
    if (this._tls11Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls11Failures = this._tls11Failures;
    }
    if (this._tls11Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls11Successes = this._tls11Successes;
    }
    if (this._tls12Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Failures = this._tls12Failures;
    }
    if (this._tls12Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Successes = this._tls12Successes;
    }
    if (this._tls13Aes128GcmSha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes128GcmSha256Failures = this._tls13Aes128GcmSha256Failures;
    }
    if (this._tls13Aes128GcmSha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes128GcmSha256Id = this._tls13Aes128GcmSha256Id;
    }
    if (this._tls13Aes128GcmSha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes128GcmSha256Successes = this._tls13Aes128GcmSha256Successes;
    }
    if (this._tls13Aes256GcmSha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes256GcmSha384Failures = this._tls13Aes256GcmSha384Failures;
    }
    if (this._tls13Aes256GcmSha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes256GcmSha384Id = this._tls13Aes256GcmSha384Id;
    }
    if (this._tls13Aes256GcmSha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Aes256GcmSha384Successes = this._tls13Aes256GcmSha384Successes;
    }
    if (this._tls13Chacha20Poly1305Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Chacha20Poly1305Sha256Failures = this._tls13Chacha20Poly1305Sha256Failures;
    }
    if (this._tls13Chacha20Poly1305Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Chacha20Poly1305Sha256Id = this._tls13Chacha20Poly1305Sha256Id;
    }
    if (this._tls13Chacha20Poly1305Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Chacha20Poly1305Sha256Successes = this._tls13Chacha20Poly1305Sha256Successes;
    }
    if (this._tls13Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Failures = this._tls13Failures;
    }
    if (this._tls13Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Successes = this._tls13Successes;
    }
    if (this._tls1DheRsaAes128GcmSha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128GcmSha256Failures = this._tls1DheRsaAes128GcmSha256Failures;
    }
    if (this._tls1DheRsaAes128GcmSha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128GcmSha256Id = this._tls1DheRsaAes128GcmSha256Id;
    }
    if (this._tls1DheRsaAes128GcmSha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128GcmSha256Successes = this._tls1DheRsaAes128GcmSha256Successes;
    }
    if (this._tls1DheRsaAes128Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128Sha256Failures = this._tls1DheRsaAes128Sha256Failures;
    }
    if (this._tls1DheRsaAes128Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128Sha256Id = this._tls1DheRsaAes128Sha256Id;
    }
    if (this._tls1DheRsaAes128Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128Sha256Successes = this._tls1DheRsaAes128Sha256Successes;
    }
    if (this._tls1DheRsaAes128ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128ShaFailures = this._tls1DheRsaAes128ShaFailures;
    }
    if (this._tls1DheRsaAes128ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128ShaId = this._tls1DheRsaAes128ShaId;
    }
    if (this._tls1DheRsaAes128ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes128ShaSuccesses = this._tls1DheRsaAes128ShaSuccesses;
    }
    if (this._tls1DheRsaAes256GcmSha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256GcmSha384Failures = this._tls1DheRsaAes256GcmSha384Failures;
    }
    if (this._tls1DheRsaAes256GcmSha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256GcmSha384Id = this._tls1DheRsaAes256GcmSha384Id;
    }
    if (this._tls1DheRsaAes256GcmSha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256GcmSha384Successes = this._tls1DheRsaAes256GcmSha384Successes;
    }
    if (this._tls1DheRsaAes256Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256Sha256Failures = this._tls1DheRsaAes256Sha256Failures;
    }
    if (this._tls1DheRsaAes256Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256Sha256Id = this._tls1DheRsaAes256Sha256Id;
    }
    if (this._tls1DheRsaAes256Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256Sha256Successes = this._tls1DheRsaAes256Sha256Successes;
    }
    if (this._tls1DheRsaAes256ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256ShaFailures = this._tls1DheRsaAes256ShaFailures;
    }
    if (this._tls1DheRsaAes256ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256ShaId = this._tls1DheRsaAes256ShaId;
    }
    if (this._tls1DheRsaAes256ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaAes256ShaSuccesses = this._tls1DheRsaAes256ShaSuccesses;
    }
    if (this._tls1DheRsaChacha20Poly1305Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaChacha20Poly1305Sha256Failures = this._tls1DheRsaChacha20Poly1305Sha256Failures;
    }
    if (this._tls1DheRsaChacha20Poly1305Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaChacha20Poly1305Sha256Id = this._tls1DheRsaChacha20Poly1305Sha256Id;
    }
    if (this._tls1DheRsaChacha20Poly1305Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1DheRsaChacha20Poly1305Sha256Successes = this._tls1DheRsaChacha20Poly1305Sha256Successes;
    }
    if (this._tls1EcdheEcdsaAes128GcmSha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128GcmSha256Failures = this._tls1EcdheEcdsaAes128GcmSha256Failures;
    }
    if (this._tls1EcdheEcdsaAes128GcmSha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128GcmSha256Id = this._tls1EcdheEcdsaAes128GcmSha256Id;
    }
    if (this._tls1EcdheEcdsaAes128GcmSha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128GcmSha256Successes = this._tls1EcdheEcdsaAes128GcmSha256Successes;
    }
    if (this._tls1EcdheEcdsaAes128Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128Sha256Failures = this._tls1EcdheEcdsaAes128Sha256Failures;
    }
    if (this._tls1EcdheEcdsaAes128Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128Sha256Id = this._tls1EcdheEcdsaAes128Sha256Id;
    }
    if (this._tls1EcdheEcdsaAes128Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128Sha256Successes = this._tls1EcdheEcdsaAes128Sha256Successes;
    }
    if (this._tls1EcdheEcdsaAes128ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128ShaFailures = this._tls1EcdheEcdsaAes128ShaFailures;
    }
    if (this._tls1EcdheEcdsaAes128ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128ShaId = this._tls1EcdheEcdsaAes128ShaId;
    }
    if (this._tls1EcdheEcdsaAes128ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes128ShaSuccesses = this._tls1EcdheEcdsaAes128ShaSuccesses;
    }
    if (this._tls1EcdheEcdsaAes256GcmSha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256GcmSha384Failures = this._tls1EcdheEcdsaAes256GcmSha384Failures;
    }
    if (this._tls1EcdheEcdsaAes256GcmSha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256GcmSha384Id = this._tls1EcdheEcdsaAes256GcmSha384Id;
    }
    if (this._tls1EcdheEcdsaAes256GcmSha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256GcmSha384Successes = this._tls1EcdheEcdsaAes256GcmSha384Successes;
    }
    if (this._tls1EcdheEcdsaAes256Sha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256Sha384Failures = this._tls1EcdheEcdsaAes256Sha384Failures;
    }
    if (this._tls1EcdheEcdsaAes256Sha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256Sha384Id = this._tls1EcdheEcdsaAes256Sha384Id;
    }
    if (this._tls1EcdheEcdsaAes256Sha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256Sha384Successes = this._tls1EcdheEcdsaAes256Sha384Successes;
    }
    if (this._tls1EcdheEcdsaAes256ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256ShaFailures = this._tls1EcdheEcdsaAes256ShaFailures;
    }
    if (this._tls1EcdheEcdsaAes256ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256ShaId = this._tls1EcdheEcdsaAes256ShaId;
    }
    if (this._tls1EcdheEcdsaAes256ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaAes256ShaSuccesses = this._tls1EcdheEcdsaAes256ShaSuccesses;
    }
    if (this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaChacha20Poly1305Sha256Failures = this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures;
    }
    if (this._tls1EcdheEcdsaChacha20Poly1305Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaChacha20Poly1305Sha256Id = this._tls1EcdheEcdsaChacha20Poly1305Sha256Id;
    }
    if (this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheEcdsaChacha20Poly1305Sha256Successes = this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes;
    }
    if (this._tls1EcdheRsaAes128GcmSha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128GcmSha256Failures = this._tls1EcdheRsaAes128GcmSha256Failures;
    }
    if (this._tls1EcdheRsaAes128GcmSha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128GcmSha256Id = this._tls1EcdheRsaAes128GcmSha256Id;
    }
    if (this._tls1EcdheRsaAes128GcmSha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128GcmSha256Successes = this._tls1EcdheRsaAes128GcmSha256Successes;
    }
    if (this._tls1EcdheRsaAes128Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128Sha256Failures = this._tls1EcdheRsaAes128Sha256Failures;
    }
    if (this._tls1EcdheRsaAes128Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128Sha256Id = this._tls1EcdheRsaAes128Sha256Id;
    }
    if (this._tls1EcdheRsaAes128Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128Sha256Successes = this._tls1EcdheRsaAes128Sha256Successes;
    }
    if (this._tls1EcdheRsaAes128ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128ShaFailures = this._tls1EcdheRsaAes128ShaFailures;
    }
    if (this._tls1EcdheRsaAes128ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128ShaId = this._tls1EcdheRsaAes128ShaId;
    }
    if (this._tls1EcdheRsaAes128ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes128ShaSuccesses = this._tls1EcdheRsaAes128ShaSuccesses;
    }
    if (this._tls1EcdheRsaAes256GcmSha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256GcmSha384Failures = this._tls1EcdheRsaAes256GcmSha384Failures;
    }
    if (this._tls1EcdheRsaAes256GcmSha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256GcmSha384Id = this._tls1EcdheRsaAes256GcmSha384Id;
    }
    if (this._tls1EcdheRsaAes256GcmSha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256GcmSha384Successes = this._tls1EcdheRsaAes256GcmSha384Successes;
    }
    if (this._tls1EcdheRsaAes256Sha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256Sha384Failures = this._tls1EcdheRsaAes256Sha384Failures;
    }
    if (this._tls1EcdheRsaAes256Sha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256Sha384Id = this._tls1EcdheRsaAes256Sha384Id;
    }
    if (this._tls1EcdheRsaAes256Sha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256Sha384Successes = this._tls1EcdheRsaAes256Sha384Successes;
    }
    if (this._tls1EcdheRsaAes256ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256ShaFailures = this._tls1EcdheRsaAes256ShaFailures;
    }
    if (this._tls1EcdheRsaAes256ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256ShaId = this._tls1EcdheRsaAes256ShaId;
    }
    if (this._tls1EcdheRsaAes256ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaAes256ShaSuccesses = this._tls1EcdheRsaAes256ShaSuccesses;
    }
    if (this._tls1EcdheRsaChacha20Poly1305Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaChacha20Poly1305Sha256Failures = this._tls1EcdheRsaChacha20Poly1305Sha256Failures;
    }
    if (this._tls1EcdheRsaChacha20Poly1305Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaChacha20Poly1305Sha256Id = this._tls1EcdheRsaChacha20Poly1305Sha256Id;
    }
    if (this._tls1EcdheRsaChacha20Poly1305Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheRsaChacha20Poly1305Sha256Successes = this._tls1EcdheRsaChacha20Poly1305Sha256Successes;
    }
    if (this._tls1EcdheSm2Sms4GcmSm3Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4GcmSm3Failures = this._tls1EcdheSm2Sms4GcmSm3Failures;
    }
    if (this._tls1EcdheSm2Sms4GcmSm3Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4GcmSm3Id = this._tls1EcdheSm2Sms4GcmSm3Id;
    }
    if (this._tls1EcdheSm2Sms4GcmSm3Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4GcmSm3Successes = this._tls1EcdheSm2Sms4GcmSm3Successes;
    }
    if (this._tls1EcdheSm2Sms4Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sha256Failures = this._tls1EcdheSm2Sms4Sha256Failures;
    }
    if (this._tls1EcdheSm2Sms4Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sha256Id = this._tls1EcdheSm2Sms4Sha256Id;
    }
    if (this._tls1EcdheSm2Sms4Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sha256Successes = this._tls1EcdheSm2Sms4Sha256Successes;
    }
    if (this._tls1EcdheSm2Sms4Sm3Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sm3Failures = this._tls1EcdheSm2Sms4Sm3Failures;
    }
    if (this._tls1EcdheSm2Sms4Sm3Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sm3Id = this._tls1EcdheSm2Sms4Sm3Id;
    }
    if (this._tls1EcdheSm2Sms4Sm3Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1EcdheSm2Sms4Sm3Successes = this._tls1EcdheSm2Sms4Sm3Successes;
    }
    if (this._tls1RsaAes128GcmSha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128GcmSha256Failures = this._tls1RsaAes128GcmSha256Failures;
    }
    if (this._tls1RsaAes128GcmSha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128GcmSha256Id = this._tls1RsaAes128GcmSha256Id;
    }
    if (this._tls1RsaAes128GcmSha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128GcmSha256Successes = this._tls1RsaAes128GcmSha256Successes;
    }
    if (this._tls1RsaAes128Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128Sha256Failures = this._tls1RsaAes128Sha256Failures;
    }
    if (this._tls1RsaAes128Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128Sha256Id = this._tls1RsaAes128Sha256Id;
    }
    if (this._tls1RsaAes128Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128Sha256Successes = this._tls1RsaAes128Sha256Successes;
    }
    if (this._tls1RsaAes128ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128ShaFailures = this._tls1RsaAes128ShaFailures;
    }
    if (this._tls1RsaAes128ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128ShaId = this._tls1RsaAes128ShaId;
    }
    if (this._tls1RsaAes128ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes128ShaSuccesses = this._tls1RsaAes128ShaSuccesses;
    }
    if (this._tls1RsaAes256GcmSha384Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256GcmSha384Failures = this._tls1RsaAes256GcmSha384Failures;
    }
    if (this._tls1RsaAes256GcmSha384Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256GcmSha384Id = this._tls1RsaAes256GcmSha384Id;
    }
    if (this._tls1RsaAes256GcmSha384Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256GcmSha384Successes = this._tls1RsaAes256GcmSha384Successes;
    }
    if (this._tls1RsaAes256Sha256Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256Sha256Failures = this._tls1RsaAes256Sha256Failures;
    }
    if (this._tls1RsaAes256Sha256Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256Sha256Id = this._tls1RsaAes256Sha256Id;
    }
    if (this._tls1RsaAes256Sha256Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256Sha256Successes = this._tls1RsaAes256Sha256Successes;
    }
    if (this._tls1RsaAes256ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256ShaFailures = this._tls1RsaAes256ShaFailures;
    }
    if (this._tls1RsaAes256ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256ShaId = this._tls1RsaAes256ShaId;
    }
    if (this._tls1RsaAes256ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaAes256ShaSuccesses = this._tls1RsaAes256ShaSuccesses;
    }
    if (this._tls1RsaExport1024Rc456Md5Failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456Md5Failures = this._tls1RsaExport1024Rc456Md5Failures;
    }
    if (this._tls1RsaExport1024Rc456Md5Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456Md5Id = this._tls1RsaExport1024Rc456Md5Id;
    }
    if (this._tls1RsaExport1024Rc456Md5Successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456Md5Successes = this._tls1RsaExport1024Rc456Md5Successes;
    }
    if (this._tls1RsaExport1024Rc456ShaFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456ShaFailures = this._tls1RsaExport1024Rc456ShaFailures;
    }
    if (this._tls1RsaExport1024Rc456ShaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456ShaId = this._tls1RsaExport1024Rc456ShaId;
    }
    if (this._tls1RsaExport1024Rc456ShaSuccesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls1RsaExport1024Rc456ShaSuccesses = this._tls1RsaExport1024Rc456ShaSuccesses;
    }
    if (this._vserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserver = this._vserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbServerSslCountersOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certVfy = undefined;
      this._cumulativeSessions = undefined;
      this._downgraded = undefined;
      this._hsAvgTime = undefined;
      this._hsFailures = undefined;
      this._kexDhe1024Failures = undefined;
      this._kexDhe1024Successes = undefined;
      this._kexDhe2048Failures = undefined;
      this._kexDhe2048Successes = undefined;
      this._kexDhe512Failures = undefined;
      this._kexDhe512Successes = undefined;
      this._kexEcdheSecp256R1Failures = undefined;
      this._kexEcdheSecp256R1Successes = undefined;
      this._kexEcdheSecp384R1Failures = undefined;
      this._kexEcdheSecp384R1Successes = undefined;
      this._kexEcdheSecp521R1Failures = undefined;
      this._kexEcdheSecp521R1Successes = undefined;
      this._kexEcdheSm2Failures = undefined;
      this._kexEcdheSm2Successes = undefined;
      this._kexEcdheX25519Failures = undefined;
      this._kexEcdheX25519Successes = undefined;
      this._kexEcdheX448Failures = undefined;
      this._kexEcdheX448Successes = undefined;
      this._kexRsa1024Failures = undefined;
      this._kexRsa1024Successes = undefined;
      this._kexRsa2048Failures = undefined;
      this._kexRsa2048Successes = undefined;
      this._kexRsa4096Failures = undefined;
      this._kexRsa4096Successes = undefined;
      this._kexRsa512Failures = undefined;
      this._kexRsa512Successes = undefined;
      this._port = undefined;
      this._renegoSsl2Failures = undefined;
      this._renegoSsl2Successes = undefined;
      this._renegoSsl3Failures = undefined;
      this._renegoSsl3Successes = undefined;
      this._renegoTls10Failures = undefined;
      this._renegoTls10Successes = undefined;
      this._renegoTls11Failures = undefined;
      this._renegoTls11Successes = undefined;
      this._renegoTls12Failures = undefined;
      this._renegoTls12Successes = undefined;
      this._renegoTls13Failures = undefined;
      this._renegoTls13Successes = undefined;
      this._renegotiationTotal = undefined;
      this._sessCacheCurrConn = undefined;
      this._sessCacheHit = undefined;
      this._sessCacheMiss = undefined;
      this._sessCacheNew = undefined;
      this._sessCacheTimeout = undefined;
      this._ssl2Failures = undefined;
      this._ssl2Successes = undefined;
      this._ssl3Failures = undefined;
      this._ssl3RsaDes192Cbc3ShaFailures = undefined;
      this._ssl3RsaDes192Cbc3ShaId = undefined;
      this._ssl3RsaDes192Cbc3ShaSuccesses = undefined;
      this._ssl3RsaDes40CbcShaFailures = undefined;
      this._ssl3RsaDes40CbcShaId = undefined;
      this._ssl3RsaDes40CbcShaSuccesses = undefined;
      this._ssl3RsaDes64CbcShaFailures = undefined;
      this._ssl3RsaDes64CbcShaId = undefined;
      this._ssl3RsaDes64CbcShaSuccesses = undefined;
      this._ssl3RsaRc4128Md5Failures = undefined;
      this._ssl3RsaRc4128Md5Id = undefined;
      this._ssl3RsaRc4128Md5Successes = undefined;
      this._ssl3RsaRc4128ShaFailures = undefined;
      this._ssl3RsaRc4128ShaId = undefined;
      this._ssl3RsaRc4128ShaSuccesses = undefined;
      this._ssl3RsaRc440Md5Failures = undefined;
      this._ssl3RsaRc440Md5Id = undefined;
      this._ssl3RsaRc440Md5Successes = undefined;
      this._ssl3Successes = undefined;
      this._tls10Failures = undefined;
      this._tls10Successes = undefined;
      this._tls11Failures = undefined;
      this._tls11Successes = undefined;
      this._tls12Failures = undefined;
      this._tls12Successes = undefined;
      this._tls13Aes128GcmSha256Failures = undefined;
      this._tls13Aes128GcmSha256Id = undefined;
      this._tls13Aes128GcmSha256Successes = undefined;
      this._tls13Aes256GcmSha384Failures = undefined;
      this._tls13Aes256GcmSha384Id = undefined;
      this._tls13Aes256GcmSha384Successes = undefined;
      this._tls13Chacha20Poly1305Sha256Failures = undefined;
      this._tls13Chacha20Poly1305Sha256Id = undefined;
      this._tls13Chacha20Poly1305Sha256Successes = undefined;
      this._tls13Failures = undefined;
      this._tls13Successes = undefined;
      this._tls1DheRsaAes128GcmSha256Failures = undefined;
      this._tls1DheRsaAes128GcmSha256Id = undefined;
      this._tls1DheRsaAes128GcmSha256Successes = undefined;
      this._tls1DheRsaAes128Sha256Failures = undefined;
      this._tls1DheRsaAes128Sha256Id = undefined;
      this._tls1DheRsaAes128Sha256Successes = undefined;
      this._tls1DheRsaAes128ShaFailures = undefined;
      this._tls1DheRsaAes128ShaId = undefined;
      this._tls1DheRsaAes128ShaSuccesses = undefined;
      this._tls1DheRsaAes256GcmSha384Failures = undefined;
      this._tls1DheRsaAes256GcmSha384Id = undefined;
      this._tls1DheRsaAes256GcmSha384Successes = undefined;
      this._tls1DheRsaAes256Sha256Failures = undefined;
      this._tls1DheRsaAes256Sha256Id = undefined;
      this._tls1DheRsaAes256Sha256Successes = undefined;
      this._tls1DheRsaAes256ShaFailures = undefined;
      this._tls1DheRsaAes256ShaId = undefined;
      this._tls1DheRsaAes256ShaSuccesses = undefined;
      this._tls1DheRsaChacha20Poly1305Sha256Failures = undefined;
      this._tls1DheRsaChacha20Poly1305Sha256Id = undefined;
      this._tls1DheRsaChacha20Poly1305Sha256Successes = undefined;
      this._tls1EcdheEcdsaAes128GcmSha256Failures = undefined;
      this._tls1EcdheEcdsaAes128GcmSha256Id = undefined;
      this._tls1EcdheEcdsaAes128GcmSha256Successes = undefined;
      this._tls1EcdheEcdsaAes128Sha256Failures = undefined;
      this._tls1EcdheEcdsaAes128Sha256Id = undefined;
      this._tls1EcdheEcdsaAes128Sha256Successes = undefined;
      this._tls1EcdheEcdsaAes128ShaFailures = undefined;
      this._tls1EcdheEcdsaAes128ShaId = undefined;
      this._tls1EcdheEcdsaAes128ShaSuccesses = undefined;
      this._tls1EcdheEcdsaAes256GcmSha384Failures = undefined;
      this._tls1EcdheEcdsaAes256GcmSha384Id = undefined;
      this._tls1EcdheEcdsaAes256GcmSha384Successes = undefined;
      this._tls1EcdheEcdsaAes256Sha384Failures = undefined;
      this._tls1EcdheEcdsaAes256Sha384Id = undefined;
      this._tls1EcdheEcdsaAes256Sha384Successes = undefined;
      this._tls1EcdheEcdsaAes256ShaFailures = undefined;
      this._tls1EcdheEcdsaAes256ShaId = undefined;
      this._tls1EcdheEcdsaAes256ShaSuccesses = undefined;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures = undefined;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Id = undefined;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes = undefined;
      this._tls1EcdheRsaAes128GcmSha256Failures = undefined;
      this._tls1EcdheRsaAes128GcmSha256Id = undefined;
      this._tls1EcdheRsaAes128GcmSha256Successes = undefined;
      this._tls1EcdheRsaAes128Sha256Failures = undefined;
      this._tls1EcdheRsaAes128Sha256Id = undefined;
      this._tls1EcdheRsaAes128Sha256Successes = undefined;
      this._tls1EcdheRsaAes128ShaFailures = undefined;
      this._tls1EcdheRsaAes128ShaId = undefined;
      this._tls1EcdheRsaAes128ShaSuccesses = undefined;
      this._tls1EcdheRsaAes256GcmSha384Failures = undefined;
      this._tls1EcdheRsaAes256GcmSha384Id = undefined;
      this._tls1EcdheRsaAes256GcmSha384Successes = undefined;
      this._tls1EcdheRsaAes256Sha384Failures = undefined;
      this._tls1EcdheRsaAes256Sha384Id = undefined;
      this._tls1EcdheRsaAes256Sha384Successes = undefined;
      this._tls1EcdheRsaAes256ShaFailures = undefined;
      this._tls1EcdheRsaAes256ShaId = undefined;
      this._tls1EcdheRsaAes256ShaSuccesses = undefined;
      this._tls1EcdheRsaChacha20Poly1305Sha256Failures = undefined;
      this._tls1EcdheRsaChacha20Poly1305Sha256Id = undefined;
      this._tls1EcdheRsaChacha20Poly1305Sha256Successes = undefined;
      this._tls1EcdheSm2Sms4GcmSm3Failures = undefined;
      this._tls1EcdheSm2Sms4GcmSm3Id = undefined;
      this._tls1EcdheSm2Sms4GcmSm3Successes = undefined;
      this._tls1EcdheSm2Sms4Sha256Failures = undefined;
      this._tls1EcdheSm2Sms4Sha256Id = undefined;
      this._tls1EcdheSm2Sms4Sha256Successes = undefined;
      this._tls1EcdheSm2Sms4Sm3Failures = undefined;
      this._tls1EcdheSm2Sms4Sm3Id = undefined;
      this._tls1EcdheSm2Sms4Sm3Successes = undefined;
      this._tls1RsaAes128GcmSha256Failures = undefined;
      this._tls1RsaAes128GcmSha256Id = undefined;
      this._tls1RsaAes128GcmSha256Successes = undefined;
      this._tls1RsaAes128Sha256Failures = undefined;
      this._tls1RsaAes128Sha256Id = undefined;
      this._tls1RsaAes128Sha256Successes = undefined;
      this._tls1RsaAes128ShaFailures = undefined;
      this._tls1RsaAes128ShaId = undefined;
      this._tls1RsaAes128ShaSuccesses = undefined;
      this._tls1RsaAes256GcmSha384Failures = undefined;
      this._tls1RsaAes256GcmSha384Id = undefined;
      this._tls1RsaAes256GcmSha384Successes = undefined;
      this._tls1RsaAes256Sha256Failures = undefined;
      this._tls1RsaAes256Sha256Id = undefined;
      this._tls1RsaAes256Sha256Successes = undefined;
      this._tls1RsaAes256ShaFailures = undefined;
      this._tls1RsaAes256ShaId = undefined;
      this._tls1RsaAes256ShaSuccesses = undefined;
      this._tls1RsaExport1024Rc456Md5Failures = undefined;
      this._tls1RsaExport1024Rc456Md5Id = undefined;
      this._tls1RsaExport1024Rc456Md5Successes = undefined;
      this._tls1RsaExport1024Rc456ShaFailures = undefined;
      this._tls1RsaExport1024Rc456ShaId = undefined;
      this._tls1RsaExport1024Rc456ShaSuccesses = undefined;
      this._vserver = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certVfy = value.certVfy;
      this._cumulativeSessions = value.cumulativeSessions;
      this._downgraded = value.downgraded;
      this._hsAvgTime = value.hsAvgTime;
      this._hsFailures = value.hsFailures;
      this._kexDhe1024Failures = value.kexDhe1024Failures;
      this._kexDhe1024Successes = value.kexDhe1024Successes;
      this._kexDhe2048Failures = value.kexDhe2048Failures;
      this._kexDhe2048Successes = value.kexDhe2048Successes;
      this._kexDhe512Failures = value.kexDhe512Failures;
      this._kexDhe512Successes = value.kexDhe512Successes;
      this._kexEcdheSecp256R1Failures = value.kexEcdheSecp256R1Failures;
      this._kexEcdheSecp256R1Successes = value.kexEcdheSecp256R1Successes;
      this._kexEcdheSecp384R1Failures = value.kexEcdheSecp384R1Failures;
      this._kexEcdheSecp384R1Successes = value.kexEcdheSecp384R1Successes;
      this._kexEcdheSecp521R1Failures = value.kexEcdheSecp521R1Failures;
      this._kexEcdheSecp521R1Successes = value.kexEcdheSecp521R1Successes;
      this._kexEcdheSm2Failures = value.kexEcdheSm2Failures;
      this._kexEcdheSm2Successes = value.kexEcdheSm2Successes;
      this._kexEcdheX25519Failures = value.kexEcdheX25519Failures;
      this._kexEcdheX25519Successes = value.kexEcdheX25519Successes;
      this._kexEcdheX448Failures = value.kexEcdheX448Failures;
      this._kexEcdheX448Successes = value.kexEcdheX448Successes;
      this._kexRsa1024Failures = value.kexRsa1024Failures;
      this._kexRsa1024Successes = value.kexRsa1024Successes;
      this._kexRsa2048Failures = value.kexRsa2048Failures;
      this._kexRsa2048Successes = value.kexRsa2048Successes;
      this._kexRsa4096Failures = value.kexRsa4096Failures;
      this._kexRsa4096Successes = value.kexRsa4096Successes;
      this._kexRsa512Failures = value.kexRsa512Failures;
      this._kexRsa512Successes = value.kexRsa512Successes;
      this._port = value.port;
      this._renegoSsl2Failures = value.renegoSsl2Failures;
      this._renegoSsl2Successes = value.renegoSsl2Successes;
      this._renegoSsl3Failures = value.renegoSsl3Failures;
      this._renegoSsl3Successes = value.renegoSsl3Successes;
      this._renegoTls10Failures = value.renegoTls10Failures;
      this._renegoTls10Successes = value.renegoTls10Successes;
      this._renegoTls11Failures = value.renegoTls11Failures;
      this._renegoTls11Successes = value.renegoTls11Successes;
      this._renegoTls12Failures = value.renegoTls12Failures;
      this._renegoTls12Successes = value.renegoTls12Successes;
      this._renegoTls13Failures = value.renegoTls13Failures;
      this._renegoTls13Successes = value.renegoTls13Successes;
      this._renegotiationTotal = value.renegotiationTotal;
      this._sessCacheCurrConn = value.sessCacheCurrConn;
      this._sessCacheHit = value.sessCacheHit;
      this._sessCacheMiss = value.sessCacheMiss;
      this._sessCacheNew = value.sessCacheNew;
      this._sessCacheTimeout = value.sessCacheTimeout;
      this._ssl2Failures = value.ssl2Failures;
      this._ssl2Successes = value.ssl2Successes;
      this._ssl3Failures = value.ssl3Failures;
      this._ssl3RsaDes192Cbc3ShaFailures = value.ssl3RsaDes192Cbc3ShaFailures;
      this._ssl3RsaDes192Cbc3ShaId = value.ssl3RsaDes192Cbc3ShaId;
      this._ssl3RsaDes192Cbc3ShaSuccesses = value.ssl3RsaDes192Cbc3ShaSuccesses;
      this._ssl3RsaDes40CbcShaFailures = value.ssl3RsaDes40CbcShaFailures;
      this._ssl3RsaDes40CbcShaId = value.ssl3RsaDes40CbcShaId;
      this._ssl3RsaDes40CbcShaSuccesses = value.ssl3RsaDes40CbcShaSuccesses;
      this._ssl3RsaDes64CbcShaFailures = value.ssl3RsaDes64CbcShaFailures;
      this._ssl3RsaDes64CbcShaId = value.ssl3RsaDes64CbcShaId;
      this._ssl3RsaDes64CbcShaSuccesses = value.ssl3RsaDes64CbcShaSuccesses;
      this._ssl3RsaRc4128Md5Failures = value.ssl3RsaRc4128Md5Failures;
      this._ssl3RsaRc4128Md5Id = value.ssl3RsaRc4128Md5Id;
      this._ssl3RsaRc4128Md5Successes = value.ssl3RsaRc4128Md5Successes;
      this._ssl3RsaRc4128ShaFailures = value.ssl3RsaRc4128ShaFailures;
      this._ssl3RsaRc4128ShaId = value.ssl3RsaRc4128ShaId;
      this._ssl3RsaRc4128ShaSuccesses = value.ssl3RsaRc4128ShaSuccesses;
      this._ssl3RsaRc440Md5Failures = value.ssl3RsaRc440Md5Failures;
      this._ssl3RsaRc440Md5Id = value.ssl3RsaRc440Md5Id;
      this._ssl3RsaRc440Md5Successes = value.ssl3RsaRc440Md5Successes;
      this._ssl3Successes = value.ssl3Successes;
      this._tls10Failures = value.tls10Failures;
      this._tls10Successes = value.tls10Successes;
      this._tls11Failures = value.tls11Failures;
      this._tls11Successes = value.tls11Successes;
      this._tls12Failures = value.tls12Failures;
      this._tls12Successes = value.tls12Successes;
      this._tls13Aes128GcmSha256Failures = value.tls13Aes128GcmSha256Failures;
      this._tls13Aes128GcmSha256Id = value.tls13Aes128GcmSha256Id;
      this._tls13Aes128GcmSha256Successes = value.tls13Aes128GcmSha256Successes;
      this._tls13Aes256GcmSha384Failures = value.tls13Aes256GcmSha384Failures;
      this._tls13Aes256GcmSha384Id = value.tls13Aes256GcmSha384Id;
      this._tls13Aes256GcmSha384Successes = value.tls13Aes256GcmSha384Successes;
      this._tls13Chacha20Poly1305Sha256Failures = value.tls13Chacha20Poly1305Sha256Failures;
      this._tls13Chacha20Poly1305Sha256Id = value.tls13Chacha20Poly1305Sha256Id;
      this._tls13Chacha20Poly1305Sha256Successes = value.tls13Chacha20Poly1305Sha256Successes;
      this._tls13Failures = value.tls13Failures;
      this._tls13Successes = value.tls13Successes;
      this._tls1DheRsaAes128GcmSha256Failures = value.tls1DheRsaAes128GcmSha256Failures;
      this._tls1DheRsaAes128GcmSha256Id = value.tls1DheRsaAes128GcmSha256Id;
      this._tls1DheRsaAes128GcmSha256Successes = value.tls1DheRsaAes128GcmSha256Successes;
      this._tls1DheRsaAes128Sha256Failures = value.tls1DheRsaAes128Sha256Failures;
      this._tls1DheRsaAes128Sha256Id = value.tls1DheRsaAes128Sha256Id;
      this._tls1DheRsaAes128Sha256Successes = value.tls1DheRsaAes128Sha256Successes;
      this._tls1DheRsaAes128ShaFailures = value.tls1DheRsaAes128ShaFailures;
      this._tls1DheRsaAes128ShaId = value.tls1DheRsaAes128ShaId;
      this._tls1DheRsaAes128ShaSuccesses = value.tls1DheRsaAes128ShaSuccesses;
      this._tls1DheRsaAes256GcmSha384Failures = value.tls1DheRsaAes256GcmSha384Failures;
      this._tls1DheRsaAes256GcmSha384Id = value.tls1DheRsaAes256GcmSha384Id;
      this._tls1DheRsaAes256GcmSha384Successes = value.tls1DheRsaAes256GcmSha384Successes;
      this._tls1DheRsaAes256Sha256Failures = value.tls1DheRsaAes256Sha256Failures;
      this._tls1DheRsaAes256Sha256Id = value.tls1DheRsaAes256Sha256Id;
      this._tls1DheRsaAes256Sha256Successes = value.tls1DheRsaAes256Sha256Successes;
      this._tls1DheRsaAes256ShaFailures = value.tls1DheRsaAes256ShaFailures;
      this._tls1DheRsaAes256ShaId = value.tls1DheRsaAes256ShaId;
      this._tls1DheRsaAes256ShaSuccesses = value.tls1DheRsaAes256ShaSuccesses;
      this._tls1DheRsaChacha20Poly1305Sha256Failures = value.tls1DheRsaChacha20Poly1305Sha256Failures;
      this._tls1DheRsaChacha20Poly1305Sha256Id = value.tls1DheRsaChacha20Poly1305Sha256Id;
      this._tls1DheRsaChacha20Poly1305Sha256Successes = value.tls1DheRsaChacha20Poly1305Sha256Successes;
      this._tls1EcdheEcdsaAes128GcmSha256Failures = value.tls1EcdheEcdsaAes128GcmSha256Failures;
      this._tls1EcdheEcdsaAes128GcmSha256Id = value.tls1EcdheEcdsaAes128GcmSha256Id;
      this._tls1EcdheEcdsaAes128GcmSha256Successes = value.tls1EcdheEcdsaAes128GcmSha256Successes;
      this._tls1EcdheEcdsaAes128Sha256Failures = value.tls1EcdheEcdsaAes128Sha256Failures;
      this._tls1EcdheEcdsaAes128Sha256Id = value.tls1EcdheEcdsaAes128Sha256Id;
      this._tls1EcdheEcdsaAes128Sha256Successes = value.tls1EcdheEcdsaAes128Sha256Successes;
      this._tls1EcdheEcdsaAes128ShaFailures = value.tls1EcdheEcdsaAes128ShaFailures;
      this._tls1EcdheEcdsaAes128ShaId = value.tls1EcdheEcdsaAes128ShaId;
      this._tls1EcdheEcdsaAes128ShaSuccesses = value.tls1EcdheEcdsaAes128ShaSuccesses;
      this._tls1EcdheEcdsaAes256GcmSha384Failures = value.tls1EcdheEcdsaAes256GcmSha384Failures;
      this._tls1EcdheEcdsaAes256GcmSha384Id = value.tls1EcdheEcdsaAes256GcmSha384Id;
      this._tls1EcdheEcdsaAes256GcmSha384Successes = value.tls1EcdheEcdsaAes256GcmSha384Successes;
      this._tls1EcdheEcdsaAes256Sha384Failures = value.tls1EcdheEcdsaAes256Sha384Failures;
      this._tls1EcdheEcdsaAes256Sha384Id = value.tls1EcdheEcdsaAes256Sha384Id;
      this._tls1EcdheEcdsaAes256Sha384Successes = value.tls1EcdheEcdsaAes256Sha384Successes;
      this._tls1EcdheEcdsaAes256ShaFailures = value.tls1EcdheEcdsaAes256ShaFailures;
      this._tls1EcdheEcdsaAes256ShaId = value.tls1EcdheEcdsaAes256ShaId;
      this._tls1EcdheEcdsaAes256ShaSuccesses = value.tls1EcdheEcdsaAes256ShaSuccesses;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures = value.tls1EcdheEcdsaChacha20Poly1305Sha256Failures;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Id = value.tls1EcdheEcdsaChacha20Poly1305Sha256Id;
      this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes = value.tls1EcdheEcdsaChacha20Poly1305Sha256Successes;
      this._tls1EcdheRsaAes128GcmSha256Failures = value.tls1EcdheRsaAes128GcmSha256Failures;
      this._tls1EcdheRsaAes128GcmSha256Id = value.tls1EcdheRsaAes128GcmSha256Id;
      this._tls1EcdheRsaAes128GcmSha256Successes = value.tls1EcdheRsaAes128GcmSha256Successes;
      this._tls1EcdheRsaAes128Sha256Failures = value.tls1EcdheRsaAes128Sha256Failures;
      this._tls1EcdheRsaAes128Sha256Id = value.tls1EcdheRsaAes128Sha256Id;
      this._tls1EcdheRsaAes128Sha256Successes = value.tls1EcdheRsaAes128Sha256Successes;
      this._tls1EcdheRsaAes128ShaFailures = value.tls1EcdheRsaAes128ShaFailures;
      this._tls1EcdheRsaAes128ShaId = value.tls1EcdheRsaAes128ShaId;
      this._tls1EcdheRsaAes128ShaSuccesses = value.tls1EcdheRsaAes128ShaSuccesses;
      this._tls1EcdheRsaAes256GcmSha384Failures = value.tls1EcdheRsaAes256GcmSha384Failures;
      this._tls1EcdheRsaAes256GcmSha384Id = value.tls1EcdheRsaAes256GcmSha384Id;
      this._tls1EcdheRsaAes256GcmSha384Successes = value.tls1EcdheRsaAes256GcmSha384Successes;
      this._tls1EcdheRsaAes256Sha384Failures = value.tls1EcdheRsaAes256Sha384Failures;
      this._tls1EcdheRsaAes256Sha384Id = value.tls1EcdheRsaAes256Sha384Id;
      this._tls1EcdheRsaAes256Sha384Successes = value.tls1EcdheRsaAes256Sha384Successes;
      this._tls1EcdheRsaAes256ShaFailures = value.tls1EcdheRsaAes256ShaFailures;
      this._tls1EcdheRsaAes256ShaId = value.tls1EcdheRsaAes256ShaId;
      this._tls1EcdheRsaAes256ShaSuccesses = value.tls1EcdheRsaAes256ShaSuccesses;
      this._tls1EcdheRsaChacha20Poly1305Sha256Failures = value.tls1EcdheRsaChacha20Poly1305Sha256Failures;
      this._tls1EcdheRsaChacha20Poly1305Sha256Id = value.tls1EcdheRsaChacha20Poly1305Sha256Id;
      this._tls1EcdheRsaChacha20Poly1305Sha256Successes = value.tls1EcdheRsaChacha20Poly1305Sha256Successes;
      this._tls1EcdheSm2Sms4GcmSm3Failures = value.tls1EcdheSm2Sms4GcmSm3Failures;
      this._tls1EcdheSm2Sms4GcmSm3Id = value.tls1EcdheSm2Sms4GcmSm3Id;
      this._tls1EcdheSm2Sms4GcmSm3Successes = value.tls1EcdheSm2Sms4GcmSm3Successes;
      this._tls1EcdheSm2Sms4Sha256Failures = value.tls1EcdheSm2Sms4Sha256Failures;
      this._tls1EcdheSm2Sms4Sha256Id = value.tls1EcdheSm2Sms4Sha256Id;
      this._tls1EcdheSm2Sms4Sha256Successes = value.tls1EcdheSm2Sms4Sha256Successes;
      this._tls1EcdheSm2Sms4Sm3Failures = value.tls1EcdheSm2Sms4Sm3Failures;
      this._tls1EcdheSm2Sms4Sm3Id = value.tls1EcdheSm2Sms4Sm3Id;
      this._tls1EcdheSm2Sms4Sm3Successes = value.tls1EcdheSm2Sms4Sm3Successes;
      this._tls1RsaAes128GcmSha256Failures = value.tls1RsaAes128GcmSha256Failures;
      this._tls1RsaAes128GcmSha256Id = value.tls1RsaAes128GcmSha256Id;
      this._tls1RsaAes128GcmSha256Successes = value.tls1RsaAes128GcmSha256Successes;
      this._tls1RsaAes128Sha256Failures = value.tls1RsaAes128Sha256Failures;
      this._tls1RsaAes128Sha256Id = value.tls1RsaAes128Sha256Id;
      this._tls1RsaAes128Sha256Successes = value.tls1RsaAes128Sha256Successes;
      this._tls1RsaAes128ShaFailures = value.tls1RsaAes128ShaFailures;
      this._tls1RsaAes128ShaId = value.tls1RsaAes128ShaId;
      this._tls1RsaAes128ShaSuccesses = value.tls1RsaAes128ShaSuccesses;
      this._tls1RsaAes256GcmSha384Failures = value.tls1RsaAes256GcmSha384Failures;
      this._tls1RsaAes256GcmSha384Id = value.tls1RsaAes256GcmSha384Id;
      this._tls1RsaAes256GcmSha384Successes = value.tls1RsaAes256GcmSha384Successes;
      this._tls1RsaAes256Sha256Failures = value.tls1RsaAes256Sha256Failures;
      this._tls1RsaAes256Sha256Id = value.tls1RsaAes256Sha256Id;
      this._tls1RsaAes256Sha256Successes = value.tls1RsaAes256Sha256Successes;
      this._tls1RsaAes256ShaFailures = value.tls1RsaAes256ShaFailures;
      this._tls1RsaAes256ShaId = value.tls1RsaAes256ShaId;
      this._tls1RsaAes256ShaSuccesses = value.tls1RsaAes256ShaSuccesses;
      this._tls1RsaExport1024Rc456Md5Failures = value.tls1RsaExport1024Rc456Md5Failures;
      this._tls1RsaExport1024Rc456Md5Id = value.tls1RsaExport1024Rc456Md5Id;
      this._tls1RsaExport1024Rc456Md5Successes = value.tls1RsaExport1024Rc456Md5Successes;
      this._tls1RsaExport1024Rc456ShaFailures = value.tls1RsaExport1024Rc456ShaFailures;
      this._tls1RsaExport1024Rc456ShaId = value.tls1RsaExport1024Rc456ShaId;
      this._tls1RsaExport1024Rc456ShaSuccesses = value.tls1RsaExport1024Rc456ShaSuccesses;
      this._vserver = value.vserver;
    }
  }

  // cert_vfy - computed: false, optional: true, required: false
  private _certVfy?: number; 
  public get certVfy() {
    return this.getNumberAttribute('cert_vfy');
  }
  public set certVfy(value: number) {
    this._certVfy = value;
  }
  public resetCertVfy() {
    this._certVfy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certVfyInput() {
    return this._certVfy;
  }

  // cumulative_sessions - computed: false, optional: true, required: false
  private _cumulativeSessions?: number; 
  public get cumulativeSessions() {
    return this.getNumberAttribute('cumulative_sessions');
  }
  public set cumulativeSessions(value: number) {
    this._cumulativeSessions = value;
  }
  public resetCumulativeSessions() {
    this._cumulativeSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeSessionsInput() {
    return this._cumulativeSessions;
  }

  // downgraded - computed: false, optional: true, required: false
  private _downgraded?: number; 
  public get downgraded() {
    return this.getNumberAttribute('downgraded');
  }
  public set downgraded(value: number) {
    this._downgraded = value;
  }
  public resetDowngraded() {
    this._downgraded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downgradedInput() {
    return this._downgraded;
  }

  // hs_avg_time - computed: false, optional: true, required: false
  private _hsAvgTime?: number; 
  public get hsAvgTime() {
    return this.getNumberAttribute('hs_avg_time');
  }
  public set hsAvgTime(value: number) {
    this._hsAvgTime = value;
  }
  public resetHsAvgTime() {
    this._hsAvgTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsAvgTimeInput() {
    return this._hsAvgTime;
  }

  // hs_failures - computed: false, optional: true, required: false
  private _hsFailures?: number; 
  public get hsFailures() {
    return this.getNumberAttribute('hs_failures');
  }
  public set hsFailures(value: number) {
    this._hsFailures = value;
  }
  public resetHsFailures() {
    this._hsFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsFailuresInput() {
    return this._hsFailures;
  }

  // kex_dhe_1024_failures - computed: false, optional: true, required: false
  private _kexDhe1024Failures?: number; 
  public get kexDhe1024Failures() {
    return this.getNumberAttribute('kex_dhe_1024_failures');
  }
  public set kexDhe1024Failures(value: number) {
    this._kexDhe1024Failures = value;
  }
  public resetKexDhe1024Failures() {
    this._kexDhe1024Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe1024FailuresInput() {
    return this._kexDhe1024Failures;
  }

  // kex_dhe_1024_successes - computed: false, optional: true, required: false
  private _kexDhe1024Successes?: number; 
  public get kexDhe1024Successes() {
    return this.getNumberAttribute('kex_dhe_1024_successes');
  }
  public set kexDhe1024Successes(value: number) {
    this._kexDhe1024Successes = value;
  }
  public resetKexDhe1024Successes() {
    this._kexDhe1024Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe1024SuccessesInput() {
    return this._kexDhe1024Successes;
  }

  // kex_dhe_2048_failures - computed: false, optional: true, required: false
  private _kexDhe2048Failures?: number; 
  public get kexDhe2048Failures() {
    return this.getNumberAttribute('kex_dhe_2048_failures');
  }
  public set kexDhe2048Failures(value: number) {
    this._kexDhe2048Failures = value;
  }
  public resetKexDhe2048Failures() {
    this._kexDhe2048Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe2048FailuresInput() {
    return this._kexDhe2048Failures;
  }

  // kex_dhe_2048_successes - computed: false, optional: true, required: false
  private _kexDhe2048Successes?: number; 
  public get kexDhe2048Successes() {
    return this.getNumberAttribute('kex_dhe_2048_successes');
  }
  public set kexDhe2048Successes(value: number) {
    this._kexDhe2048Successes = value;
  }
  public resetKexDhe2048Successes() {
    this._kexDhe2048Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe2048SuccessesInput() {
    return this._kexDhe2048Successes;
  }

  // kex_dhe_512_failures - computed: false, optional: true, required: false
  private _kexDhe512Failures?: number; 
  public get kexDhe512Failures() {
    return this.getNumberAttribute('kex_dhe_512_failures');
  }
  public set kexDhe512Failures(value: number) {
    this._kexDhe512Failures = value;
  }
  public resetKexDhe512Failures() {
    this._kexDhe512Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe512FailuresInput() {
    return this._kexDhe512Failures;
  }

  // kex_dhe_512_successes - computed: false, optional: true, required: false
  private _kexDhe512Successes?: number; 
  public get kexDhe512Successes() {
    return this.getNumberAttribute('kex_dhe_512_successes');
  }
  public set kexDhe512Successes(value: number) {
    this._kexDhe512Successes = value;
  }
  public resetKexDhe512Successes() {
    this._kexDhe512Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexDhe512SuccessesInput() {
    return this._kexDhe512Successes;
  }

  // kex_ecdhe_secp256r1_failures - computed: false, optional: true, required: false
  private _kexEcdheSecp256R1Failures?: number; 
  public get kexEcdheSecp256R1Failures() {
    return this.getNumberAttribute('kex_ecdhe_secp256r1_failures');
  }
  public set kexEcdheSecp256R1Failures(value: number) {
    this._kexEcdheSecp256R1Failures = value;
  }
  public resetKexEcdheSecp256R1Failures() {
    this._kexEcdheSecp256R1Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp256R1FailuresInput() {
    return this._kexEcdheSecp256R1Failures;
  }

  // kex_ecdhe_secp256r1_successes - computed: false, optional: true, required: false
  private _kexEcdheSecp256R1Successes?: number; 
  public get kexEcdheSecp256R1Successes() {
    return this.getNumberAttribute('kex_ecdhe_secp256r1_successes');
  }
  public set kexEcdheSecp256R1Successes(value: number) {
    this._kexEcdheSecp256R1Successes = value;
  }
  public resetKexEcdheSecp256R1Successes() {
    this._kexEcdheSecp256R1Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp256R1SuccessesInput() {
    return this._kexEcdheSecp256R1Successes;
  }

  // kex_ecdhe_secp384r1_failures - computed: false, optional: true, required: false
  private _kexEcdheSecp384R1Failures?: number; 
  public get kexEcdheSecp384R1Failures() {
    return this.getNumberAttribute('kex_ecdhe_secp384r1_failures');
  }
  public set kexEcdheSecp384R1Failures(value: number) {
    this._kexEcdheSecp384R1Failures = value;
  }
  public resetKexEcdheSecp384R1Failures() {
    this._kexEcdheSecp384R1Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp384R1FailuresInput() {
    return this._kexEcdheSecp384R1Failures;
  }

  // kex_ecdhe_secp384r1_successes - computed: false, optional: true, required: false
  private _kexEcdheSecp384R1Successes?: number; 
  public get kexEcdheSecp384R1Successes() {
    return this.getNumberAttribute('kex_ecdhe_secp384r1_successes');
  }
  public set kexEcdheSecp384R1Successes(value: number) {
    this._kexEcdheSecp384R1Successes = value;
  }
  public resetKexEcdheSecp384R1Successes() {
    this._kexEcdheSecp384R1Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp384R1SuccessesInput() {
    return this._kexEcdheSecp384R1Successes;
  }

  // kex_ecdhe_secp521r1_failures - computed: false, optional: true, required: false
  private _kexEcdheSecp521R1Failures?: number; 
  public get kexEcdheSecp521R1Failures() {
    return this.getNumberAttribute('kex_ecdhe_secp521r1_failures');
  }
  public set kexEcdheSecp521R1Failures(value: number) {
    this._kexEcdheSecp521R1Failures = value;
  }
  public resetKexEcdheSecp521R1Failures() {
    this._kexEcdheSecp521R1Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp521R1FailuresInput() {
    return this._kexEcdheSecp521R1Failures;
  }

  // kex_ecdhe_secp521r1_successes - computed: false, optional: true, required: false
  private _kexEcdheSecp521R1Successes?: number; 
  public get kexEcdheSecp521R1Successes() {
    return this.getNumberAttribute('kex_ecdhe_secp521r1_successes');
  }
  public set kexEcdheSecp521R1Successes(value: number) {
    this._kexEcdheSecp521R1Successes = value;
  }
  public resetKexEcdheSecp521R1Successes() {
    this._kexEcdheSecp521R1Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSecp521R1SuccessesInput() {
    return this._kexEcdheSecp521R1Successes;
  }

  // kex_ecdhe_sm2_failures - computed: false, optional: true, required: false
  private _kexEcdheSm2Failures?: number; 
  public get kexEcdheSm2Failures() {
    return this.getNumberAttribute('kex_ecdhe_sm2_failures');
  }
  public set kexEcdheSm2Failures(value: number) {
    this._kexEcdheSm2Failures = value;
  }
  public resetKexEcdheSm2Failures() {
    this._kexEcdheSm2Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSm2FailuresInput() {
    return this._kexEcdheSm2Failures;
  }

  // kex_ecdhe_sm2_successes - computed: false, optional: true, required: false
  private _kexEcdheSm2Successes?: number; 
  public get kexEcdheSm2Successes() {
    return this.getNumberAttribute('kex_ecdhe_sm2_successes');
  }
  public set kexEcdheSm2Successes(value: number) {
    this._kexEcdheSm2Successes = value;
  }
  public resetKexEcdheSm2Successes() {
    this._kexEcdheSm2Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheSm2SuccessesInput() {
    return this._kexEcdheSm2Successes;
  }

  // kex_ecdhe_x25519_failures - computed: false, optional: true, required: false
  private _kexEcdheX25519Failures?: number; 
  public get kexEcdheX25519Failures() {
    return this.getNumberAttribute('kex_ecdhe_x25519_failures');
  }
  public set kexEcdheX25519Failures(value: number) {
    this._kexEcdheX25519Failures = value;
  }
  public resetKexEcdheX25519Failures() {
    this._kexEcdheX25519Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheX25519FailuresInput() {
    return this._kexEcdheX25519Failures;
  }

  // kex_ecdhe_x25519_successes - computed: false, optional: true, required: false
  private _kexEcdheX25519Successes?: number; 
  public get kexEcdheX25519Successes() {
    return this.getNumberAttribute('kex_ecdhe_x25519_successes');
  }
  public set kexEcdheX25519Successes(value: number) {
    this._kexEcdheX25519Successes = value;
  }
  public resetKexEcdheX25519Successes() {
    this._kexEcdheX25519Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheX25519SuccessesInput() {
    return this._kexEcdheX25519Successes;
  }

  // kex_ecdhe_x448_failures - computed: false, optional: true, required: false
  private _kexEcdheX448Failures?: number; 
  public get kexEcdheX448Failures() {
    return this.getNumberAttribute('kex_ecdhe_x448_failures');
  }
  public set kexEcdheX448Failures(value: number) {
    this._kexEcdheX448Failures = value;
  }
  public resetKexEcdheX448Failures() {
    this._kexEcdheX448Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheX448FailuresInput() {
    return this._kexEcdheX448Failures;
  }

  // kex_ecdhe_x448_successes - computed: false, optional: true, required: false
  private _kexEcdheX448Successes?: number; 
  public get kexEcdheX448Successes() {
    return this.getNumberAttribute('kex_ecdhe_x448_successes');
  }
  public set kexEcdheX448Successes(value: number) {
    this._kexEcdheX448Successes = value;
  }
  public resetKexEcdheX448Successes() {
    this._kexEcdheX448Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexEcdheX448SuccessesInput() {
    return this._kexEcdheX448Successes;
  }

  // kex_rsa_1024_failures - computed: false, optional: true, required: false
  private _kexRsa1024Failures?: number; 
  public get kexRsa1024Failures() {
    return this.getNumberAttribute('kex_rsa_1024_failures');
  }
  public set kexRsa1024Failures(value: number) {
    this._kexRsa1024Failures = value;
  }
  public resetKexRsa1024Failures() {
    this._kexRsa1024Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa1024FailuresInput() {
    return this._kexRsa1024Failures;
  }

  // kex_rsa_1024_successes - computed: false, optional: true, required: false
  private _kexRsa1024Successes?: number; 
  public get kexRsa1024Successes() {
    return this.getNumberAttribute('kex_rsa_1024_successes');
  }
  public set kexRsa1024Successes(value: number) {
    this._kexRsa1024Successes = value;
  }
  public resetKexRsa1024Successes() {
    this._kexRsa1024Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa1024SuccessesInput() {
    return this._kexRsa1024Successes;
  }

  // kex_rsa_2048_failures - computed: false, optional: true, required: false
  private _kexRsa2048Failures?: number; 
  public get kexRsa2048Failures() {
    return this.getNumberAttribute('kex_rsa_2048_failures');
  }
  public set kexRsa2048Failures(value: number) {
    this._kexRsa2048Failures = value;
  }
  public resetKexRsa2048Failures() {
    this._kexRsa2048Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa2048FailuresInput() {
    return this._kexRsa2048Failures;
  }

  // kex_rsa_2048_successes - computed: false, optional: true, required: false
  private _kexRsa2048Successes?: number; 
  public get kexRsa2048Successes() {
    return this.getNumberAttribute('kex_rsa_2048_successes');
  }
  public set kexRsa2048Successes(value: number) {
    this._kexRsa2048Successes = value;
  }
  public resetKexRsa2048Successes() {
    this._kexRsa2048Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa2048SuccessesInput() {
    return this._kexRsa2048Successes;
  }

  // kex_rsa_4096_failures - computed: false, optional: true, required: false
  private _kexRsa4096Failures?: number; 
  public get kexRsa4096Failures() {
    return this.getNumberAttribute('kex_rsa_4096_failures');
  }
  public set kexRsa4096Failures(value: number) {
    this._kexRsa4096Failures = value;
  }
  public resetKexRsa4096Failures() {
    this._kexRsa4096Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa4096FailuresInput() {
    return this._kexRsa4096Failures;
  }

  // kex_rsa_4096_successes - computed: false, optional: true, required: false
  private _kexRsa4096Successes?: number; 
  public get kexRsa4096Successes() {
    return this.getNumberAttribute('kex_rsa_4096_successes');
  }
  public set kexRsa4096Successes(value: number) {
    this._kexRsa4096Successes = value;
  }
  public resetKexRsa4096Successes() {
    this._kexRsa4096Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa4096SuccessesInput() {
    return this._kexRsa4096Successes;
  }

  // kex_rsa_512_failures - computed: false, optional: true, required: false
  private _kexRsa512Failures?: number; 
  public get kexRsa512Failures() {
    return this.getNumberAttribute('kex_rsa_512_failures');
  }
  public set kexRsa512Failures(value: number) {
    this._kexRsa512Failures = value;
  }
  public resetKexRsa512Failures() {
    this._kexRsa512Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa512FailuresInput() {
    return this._kexRsa512Failures;
  }

  // kex_rsa_512_successes - computed: false, optional: true, required: false
  private _kexRsa512Successes?: number; 
  public get kexRsa512Successes() {
    return this.getNumberAttribute('kex_rsa_512_successes');
  }
  public set kexRsa512Successes(value: number) {
    this._kexRsa512Successes = value;
  }
  public resetKexRsa512Successes() {
    this._kexRsa512Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexRsa512SuccessesInput() {
    return this._kexRsa512Successes;
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

  // renego_ssl2_failures - computed: false, optional: true, required: false
  private _renegoSsl2Failures?: number; 
  public get renegoSsl2Failures() {
    return this.getNumberAttribute('renego_ssl2_failures');
  }
  public set renegoSsl2Failures(value: number) {
    this._renegoSsl2Failures = value;
  }
  public resetRenegoSsl2Failures() {
    this._renegoSsl2Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoSsl2FailuresInput() {
    return this._renegoSsl2Failures;
  }

  // renego_ssl2_successes - computed: false, optional: true, required: false
  private _renegoSsl2Successes?: number; 
  public get renegoSsl2Successes() {
    return this.getNumberAttribute('renego_ssl2_successes');
  }
  public set renegoSsl2Successes(value: number) {
    this._renegoSsl2Successes = value;
  }
  public resetRenegoSsl2Successes() {
    this._renegoSsl2Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoSsl2SuccessesInput() {
    return this._renegoSsl2Successes;
  }

  // renego_ssl3_failures - computed: false, optional: true, required: false
  private _renegoSsl3Failures?: number; 
  public get renegoSsl3Failures() {
    return this.getNumberAttribute('renego_ssl3_failures');
  }
  public set renegoSsl3Failures(value: number) {
    this._renegoSsl3Failures = value;
  }
  public resetRenegoSsl3Failures() {
    this._renegoSsl3Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoSsl3FailuresInput() {
    return this._renegoSsl3Failures;
  }

  // renego_ssl3_successes - computed: false, optional: true, required: false
  private _renegoSsl3Successes?: number; 
  public get renegoSsl3Successes() {
    return this.getNumberAttribute('renego_ssl3_successes');
  }
  public set renegoSsl3Successes(value: number) {
    this._renegoSsl3Successes = value;
  }
  public resetRenegoSsl3Successes() {
    this._renegoSsl3Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoSsl3SuccessesInput() {
    return this._renegoSsl3Successes;
  }

  // renego_tls10_failures - computed: false, optional: true, required: false
  private _renegoTls10Failures?: number; 
  public get renegoTls10Failures() {
    return this.getNumberAttribute('renego_tls10_failures');
  }
  public set renegoTls10Failures(value: number) {
    this._renegoTls10Failures = value;
  }
  public resetRenegoTls10Failures() {
    this._renegoTls10Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls10FailuresInput() {
    return this._renegoTls10Failures;
  }

  // renego_tls10_successes - computed: false, optional: true, required: false
  private _renegoTls10Successes?: number; 
  public get renegoTls10Successes() {
    return this.getNumberAttribute('renego_tls10_successes');
  }
  public set renegoTls10Successes(value: number) {
    this._renegoTls10Successes = value;
  }
  public resetRenegoTls10Successes() {
    this._renegoTls10Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls10SuccessesInput() {
    return this._renegoTls10Successes;
  }

  // renego_tls11_failures - computed: false, optional: true, required: false
  private _renegoTls11Failures?: number; 
  public get renegoTls11Failures() {
    return this.getNumberAttribute('renego_tls11_failures');
  }
  public set renegoTls11Failures(value: number) {
    this._renegoTls11Failures = value;
  }
  public resetRenegoTls11Failures() {
    this._renegoTls11Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls11FailuresInput() {
    return this._renegoTls11Failures;
  }

  // renego_tls11_successes - computed: false, optional: true, required: false
  private _renegoTls11Successes?: number; 
  public get renegoTls11Successes() {
    return this.getNumberAttribute('renego_tls11_successes');
  }
  public set renegoTls11Successes(value: number) {
    this._renegoTls11Successes = value;
  }
  public resetRenegoTls11Successes() {
    this._renegoTls11Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls11SuccessesInput() {
    return this._renegoTls11Successes;
  }

  // renego_tls12_failures - computed: false, optional: true, required: false
  private _renegoTls12Failures?: number; 
  public get renegoTls12Failures() {
    return this.getNumberAttribute('renego_tls12_failures');
  }
  public set renegoTls12Failures(value: number) {
    this._renegoTls12Failures = value;
  }
  public resetRenegoTls12Failures() {
    this._renegoTls12Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls12FailuresInput() {
    return this._renegoTls12Failures;
  }

  // renego_tls12_successes - computed: false, optional: true, required: false
  private _renegoTls12Successes?: number; 
  public get renegoTls12Successes() {
    return this.getNumberAttribute('renego_tls12_successes');
  }
  public set renegoTls12Successes(value: number) {
    this._renegoTls12Successes = value;
  }
  public resetRenegoTls12Successes() {
    this._renegoTls12Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls12SuccessesInput() {
    return this._renegoTls12Successes;
  }

  // renego_tls13_failures - computed: false, optional: true, required: false
  private _renegoTls13Failures?: number; 
  public get renegoTls13Failures() {
    return this.getNumberAttribute('renego_tls13_failures');
  }
  public set renegoTls13Failures(value: number) {
    this._renegoTls13Failures = value;
  }
  public resetRenegoTls13Failures() {
    this._renegoTls13Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls13FailuresInput() {
    return this._renegoTls13Failures;
  }

  // renego_tls13_successes - computed: false, optional: true, required: false
  private _renegoTls13Successes?: number; 
  public get renegoTls13Successes() {
    return this.getNumberAttribute('renego_tls13_successes');
  }
  public set renegoTls13Successes(value: number) {
    this._renegoTls13Successes = value;
  }
  public resetRenegoTls13Successes() {
    this._renegoTls13Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegoTls13SuccessesInput() {
    return this._renegoTls13Successes;
  }

  // renegotiation_total - computed: false, optional: true, required: false
  private _renegotiationTotal?: number; 
  public get renegotiationTotal() {
    return this.getNumberAttribute('renegotiation_total');
  }
  public set renegotiationTotal(value: number) {
    this._renegotiationTotal = value;
  }
  public resetRenegotiationTotal() {
    this._renegotiationTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationTotalInput() {
    return this._renegotiationTotal;
  }

  // sess_cache_curr_conn - computed: false, optional: true, required: false
  private _sessCacheCurrConn?: number; 
  public get sessCacheCurrConn() {
    return this.getNumberAttribute('sess_cache_curr_conn');
  }
  public set sessCacheCurrConn(value: number) {
    this._sessCacheCurrConn = value;
  }
  public resetSessCacheCurrConn() {
    this._sessCacheCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCacheCurrConnInput() {
    return this._sessCacheCurrConn;
  }

  // sess_cache_hit - computed: false, optional: true, required: false
  private _sessCacheHit?: number; 
  public get sessCacheHit() {
    return this.getNumberAttribute('sess_cache_hit');
  }
  public set sessCacheHit(value: number) {
    this._sessCacheHit = value;
  }
  public resetSessCacheHit() {
    this._sessCacheHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCacheHitInput() {
    return this._sessCacheHit;
  }

  // sess_cache_miss - computed: false, optional: true, required: false
  private _sessCacheMiss?: number; 
  public get sessCacheMiss() {
    return this.getNumberAttribute('sess_cache_miss');
  }
  public set sessCacheMiss(value: number) {
    this._sessCacheMiss = value;
  }
  public resetSessCacheMiss() {
    this._sessCacheMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCacheMissInput() {
    return this._sessCacheMiss;
  }

  // sess_cache_new - computed: false, optional: true, required: false
  private _sessCacheNew?: number; 
  public get sessCacheNew() {
    return this.getNumberAttribute('sess_cache_new');
  }
  public set sessCacheNew(value: number) {
    this._sessCacheNew = value;
  }
  public resetSessCacheNew() {
    this._sessCacheNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCacheNewInput() {
    return this._sessCacheNew;
  }

  // sess_cache_timeout - computed: false, optional: true, required: false
  private _sessCacheTimeout?: number; 
  public get sessCacheTimeout() {
    return this.getNumberAttribute('sess_cache_timeout');
  }
  public set sessCacheTimeout(value: number) {
    this._sessCacheTimeout = value;
  }
  public resetSessCacheTimeout() {
    this._sessCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCacheTimeoutInput() {
    return this._sessCacheTimeout;
  }

  // ssl2_failures - computed: false, optional: true, required: false
  private _ssl2Failures?: number; 
  public get ssl2Failures() {
    return this.getNumberAttribute('ssl2_failures');
  }
  public set ssl2Failures(value: number) {
    this._ssl2Failures = value;
  }
  public resetSsl2Failures() {
    this._ssl2Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl2FailuresInput() {
    return this._ssl2Failures;
  }

  // ssl2_successes - computed: false, optional: true, required: false
  private _ssl2Successes?: number; 
  public get ssl2Successes() {
    return this.getNumberAttribute('ssl2_successes');
  }
  public set ssl2Successes(value: number) {
    this._ssl2Successes = value;
  }
  public resetSsl2Successes() {
    this._ssl2Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl2SuccessesInput() {
    return this._ssl2Successes;
  }

  // ssl3_failures - computed: false, optional: true, required: false
  private _ssl3Failures?: number; 
  public get ssl3Failures() {
    return this.getNumberAttribute('ssl3_failures');
  }
  public set ssl3Failures(value: number) {
    this._ssl3Failures = value;
  }
  public resetSsl3Failures() {
    this._ssl3Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3FailuresInput() {
    return this._ssl3Failures;
  }

  // ssl3_rsa_des_192_cbc3_sha_failures - computed: false, optional: true, required: false
  private _ssl3RsaDes192Cbc3ShaFailures?: number; 
  public get ssl3RsaDes192Cbc3ShaFailures() {
    return this.getNumberAttribute('ssl3_rsa_des_192_cbc3_sha_failures');
  }
  public set ssl3RsaDes192Cbc3ShaFailures(value: number) {
    this._ssl3RsaDes192Cbc3ShaFailures = value;
  }
  public resetSsl3RsaDes192Cbc3ShaFailures() {
    this._ssl3RsaDes192Cbc3ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes192Cbc3ShaFailuresInput() {
    return this._ssl3RsaDes192Cbc3ShaFailures;
  }

  // ssl3_rsa_des_192_cbc3_sha_id - computed: false, optional: true, required: false
  private _ssl3RsaDes192Cbc3ShaId?: string; 
  public get ssl3RsaDes192Cbc3ShaId() {
    return this.getStringAttribute('ssl3_rsa_des_192_cbc3_sha_id');
  }
  public set ssl3RsaDes192Cbc3ShaId(value: string) {
    this._ssl3RsaDes192Cbc3ShaId = value;
  }
  public resetSsl3RsaDes192Cbc3ShaId() {
    this._ssl3RsaDes192Cbc3ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes192Cbc3ShaIdInput() {
    return this._ssl3RsaDes192Cbc3ShaId;
  }

  // ssl3_rsa_des_192_cbc3_sha_successes - computed: false, optional: true, required: false
  private _ssl3RsaDes192Cbc3ShaSuccesses?: number; 
  public get ssl3RsaDes192Cbc3ShaSuccesses() {
    return this.getNumberAttribute('ssl3_rsa_des_192_cbc3_sha_successes');
  }
  public set ssl3RsaDes192Cbc3ShaSuccesses(value: number) {
    this._ssl3RsaDes192Cbc3ShaSuccesses = value;
  }
  public resetSsl3RsaDes192Cbc3ShaSuccesses() {
    this._ssl3RsaDes192Cbc3ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes192Cbc3ShaSuccessesInput() {
    return this._ssl3RsaDes192Cbc3ShaSuccesses;
  }

  // ssl3_rsa_des_40_cbc_sha_failures - computed: false, optional: true, required: false
  private _ssl3RsaDes40CbcShaFailures?: number; 
  public get ssl3RsaDes40CbcShaFailures() {
    return this.getNumberAttribute('ssl3_rsa_des_40_cbc_sha_failures');
  }
  public set ssl3RsaDes40CbcShaFailures(value: number) {
    this._ssl3RsaDes40CbcShaFailures = value;
  }
  public resetSsl3RsaDes40CbcShaFailures() {
    this._ssl3RsaDes40CbcShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes40CbcShaFailuresInput() {
    return this._ssl3RsaDes40CbcShaFailures;
  }

  // ssl3_rsa_des_40_cbc_sha_id - computed: false, optional: true, required: false
  private _ssl3RsaDes40CbcShaId?: string; 
  public get ssl3RsaDes40CbcShaId() {
    return this.getStringAttribute('ssl3_rsa_des_40_cbc_sha_id');
  }
  public set ssl3RsaDes40CbcShaId(value: string) {
    this._ssl3RsaDes40CbcShaId = value;
  }
  public resetSsl3RsaDes40CbcShaId() {
    this._ssl3RsaDes40CbcShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes40CbcShaIdInput() {
    return this._ssl3RsaDes40CbcShaId;
  }

  // ssl3_rsa_des_40_cbc_sha_successes - computed: false, optional: true, required: false
  private _ssl3RsaDes40CbcShaSuccesses?: number; 
  public get ssl3RsaDes40CbcShaSuccesses() {
    return this.getNumberAttribute('ssl3_rsa_des_40_cbc_sha_successes');
  }
  public set ssl3RsaDes40CbcShaSuccesses(value: number) {
    this._ssl3RsaDes40CbcShaSuccesses = value;
  }
  public resetSsl3RsaDes40CbcShaSuccesses() {
    this._ssl3RsaDes40CbcShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes40CbcShaSuccessesInput() {
    return this._ssl3RsaDes40CbcShaSuccesses;
  }

  // ssl3_rsa_des_64_cbc_sha_failures - computed: false, optional: true, required: false
  private _ssl3RsaDes64CbcShaFailures?: number; 
  public get ssl3RsaDes64CbcShaFailures() {
    return this.getNumberAttribute('ssl3_rsa_des_64_cbc_sha_failures');
  }
  public set ssl3RsaDes64CbcShaFailures(value: number) {
    this._ssl3RsaDes64CbcShaFailures = value;
  }
  public resetSsl3RsaDes64CbcShaFailures() {
    this._ssl3RsaDes64CbcShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes64CbcShaFailuresInput() {
    return this._ssl3RsaDes64CbcShaFailures;
  }

  // ssl3_rsa_des_64_cbc_sha_id - computed: false, optional: true, required: false
  private _ssl3RsaDes64CbcShaId?: string; 
  public get ssl3RsaDes64CbcShaId() {
    return this.getStringAttribute('ssl3_rsa_des_64_cbc_sha_id');
  }
  public set ssl3RsaDes64CbcShaId(value: string) {
    this._ssl3RsaDes64CbcShaId = value;
  }
  public resetSsl3RsaDes64CbcShaId() {
    this._ssl3RsaDes64CbcShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes64CbcShaIdInput() {
    return this._ssl3RsaDes64CbcShaId;
  }

  // ssl3_rsa_des_64_cbc_sha_successes - computed: false, optional: true, required: false
  private _ssl3RsaDes64CbcShaSuccesses?: number; 
  public get ssl3RsaDes64CbcShaSuccesses() {
    return this.getNumberAttribute('ssl3_rsa_des_64_cbc_sha_successes');
  }
  public set ssl3RsaDes64CbcShaSuccesses(value: number) {
    this._ssl3RsaDes64CbcShaSuccesses = value;
  }
  public resetSsl3RsaDes64CbcShaSuccesses() {
    this._ssl3RsaDes64CbcShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaDes64CbcShaSuccessesInput() {
    return this._ssl3RsaDes64CbcShaSuccesses;
  }

  // ssl3_rsa_rc4_128_md5_failures - computed: false, optional: true, required: false
  private _ssl3RsaRc4128Md5Failures?: number; 
  public get ssl3RsaRc4128Md5Failures() {
    return this.getNumberAttribute('ssl3_rsa_rc4_128_md5_failures');
  }
  public set ssl3RsaRc4128Md5Failures(value: number) {
    this._ssl3RsaRc4128Md5Failures = value;
  }
  public resetSsl3RsaRc4128Md5Failures() {
    this._ssl3RsaRc4128Md5Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128Md5FailuresInput() {
    return this._ssl3RsaRc4128Md5Failures;
  }

  // ssl3_rsa_rc4_128_md5_id - computed: false, optional: true, required: false
  private _ssl3RsaRc4128Md5Id?: string; 
  public get ssl3RsaRc4128Md5Id() {
    return this.getStringAttribute('ssl3_rsa_rc4_128_md5_id');
  }
  public set ssl3RsaRc4128Md5Id(value: string) {
    this._ssl3RsaRc4128Md5Id = value;
  }
  public resetSsl3RsaRc4128Md5Id() {
    this._ssl3RsaRc4128Md5Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128Md5IdInput() {
    return this._ssl3RsaRc4128Md5Id;
  }

  // ssl3_rsa_rc4_128_md5_successes - computed: false, optional: true, required: false
  private _ssl3RsaRc4128Md5Successes?: number; 
  public get ssl3RsaRc4128Md5Successes() {
    return this.getNumberAttribute('ssl3_rsa_rc4_128_md5_successes');
  }
  public set ssl3RsaRc4128Md5Successes(value: number) {
    this._ssl3RsaRc4128Md5Successes = value;
  }
  public resetSsl3RsaRc4128Md5Successes() {
    this._ssl3RsaRc4128Md5Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128Md5SuccessesInput() {
    return this._ssl3RsaRc4128Md5Successes;
  }

  // ssl3_rsa_rc4_128_sha_failures - computed: false, optional: true, required: false
  private _ssl3RsaRc4128ShaFailures?: number; 
  public get ssl3RsaRc4128ShaFailures() {
    return this.getNumberAttribute('ssl3_rsa_rc4_128_sha_failures');
  }
  public set ssl3RsaRc4128ShaFailures(value: number) {
    this._ssl3RsaRc4128ShaFailures = value;
  }
  public resetSsl3RsaRc4128ShaFailures() {
    this._ssl3RsaRc4128ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128ShaFailuresInput() {
    return this._ssl3RsaRc4128ShaFailures;
  }

  // ssl3_rsa_rc4_128_sha_id - computed: false, optional: true, required: false
  private _ssl3RsaRc4128ShaId?: string; 
  public get ssl3RsaRc4128ShaId() {
    return this.getStringAttribute('ssl3_rsa_rc4_128_sha_id');
  }
  public set ssl3RsaRc4128ShaId(value: string) {
    this._ssl3RsaRc4128ShaId = value;
  }
  public resetSsl3RsaRc4128ShaId() {
    this._ssl3RsaRc4128ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128ShaIdInput() {
    return this._ssl3RsaRc4128ShaId;
  }

  // ssl3_rsa_rc4_128_sha_successes - computed: false, optional: true, required: false
  private _ssl3RsaRc4128ShaSuccesses?: number; 
  public get ssl3RsaRc4128ShaSuccesses() {
    return this.getNumberAttribute('ssl3_rsa_rc4_128_sha_successes');
  }
  public set ssl3RsaRc4128ShaSuccesses(value: number) {
    this._ssl3RsaRc4128ShaSuccesses = value;
  }
  public resetSsl3RsaRc4128ShaSuccesses() {
    this._ssl3RsaRc4128ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc4128ShaSuccessesInput() {
    return this._ssl3RsaRc4128ShaSuccesses;
  }

  // ssl3_rsa_rc4_40_md5_failures - computed: false, optional: true, required: false
  private _ssl3RsaRc440Md5Failures?: number; 
  public get ssl3RsaRc440Md5Failures() {
    return this.getNumberAttribute('ssl3_rsa_rc4_40_md5_failures');
  }
  public set ssl3RsaRc440Md5Failures(value: number) {
    this._ssl3RsaRc440Md5Failures = value;
  }
  public resetSsl3RsaRc440Md5Failures() {
    this._ssl3RsaRc440Md5Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc440Md5FailuresInput() {
    return this._ssl3RsaRc440Md5Failures;
  }

  // ssl3_rsa_rc4_40_md5_id - computed: false, optional: true, required: false
  private _ssl3RsaRc440Md5Id?: string; 
  public get ssl3RsaRc440Md5Id() {
    return this.getStringAttribute('ssl3_rsa_rc4_40_md5_id');
  }
  public set ssl3RsaRc440Md5Id(value: string) {
    this._ssl3RsaRc440Md5Id = value;
  }
  public resetSsl3RsaRc440Md5Id() {
    this._ssl3RsaRc440Md5Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc440Md5IdInput() {
    return this._ssl3RsaRc440Md5Id;
  }

  // ssl3_rsa_rc4_40_md5_successes - computed: false, optional: true, required: false
  private _ssl3RsaRc440Md5Successes?: number; 
  public get ssl3RsaRc440Md5Successes() {
    return this.getNumberAttribute('ssl3_rsa_rc4_40_md5_successes');
  }
  public set ssl3RsaRc440Md5Successes(value: number) {
    this._ssl3RsaRc440Md5Successes = value;
  }
  public resetSsl3RsaRc440Md5Successes() {
    this._ssl3RsaRc440Md5Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3RsaRc440Md5SuccessesInput() {
    return this._ssl3RsaRc440Md5Successes;
  }

  // ssl3_successes - computed: false, optional: true, required: false
  private _ssl3Successes?: number; 
  public get ssl3Successes() {
    return this.getNumberAttribute('ssl3_successes');
  }
  public set ssl3Successes(value: number) {
    this._ssl3Successes = value;
  }
  public resetSsl3Successes() {
    this._ssl3Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3SuccessesInput() {
    return this._ssl3Successes;
  }

  // tls10_failures - computed: false, optional: true, required: false
  private _tls10Failures?: number; 
  public get tls10Failures() {
    return this.getNumberAttribute('tls10_failures');
  }
  public set tls10Failures(value: number) {
    this._tls10Failures = value;
  }
  public resetTls10Failures() {
    this._tls10Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls10FailuresInput() {
    return this._tls10Failures;
  }

  // tls10_successes - computed: false, optional: true, required: false
  private _tls10Successes?: number; 
  public get tls10Successes() {
    return this.getNumberAttribute('tls10_successes');
  }
  public set tls10Successes(value: number) {
    this._tls10Successes = value;
  }
  public resetTls10Successes() {
    this._tls10Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls10SuccessesInput() {
    return this._tls10Successes;
  }

  // tls11_failures - computed: false, optional: true, required: false
  private _tls11Failures?: number; 
  public get tls11Failures() {
    return this.getNumberAttribute('tls11_failures');
  }
  public set tls11Failures(value: number) {
    this._tls11Failures = value;
  }
  public resetTls11Failures() {
    this._tls11Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11FailuresInput() {
    return this._tls11Failures;
  }

  // tls11_successes - computed: false, optional: true, required: false
  private _tls11Successes?: number; 
  public get tls11Successes() {
    return this.getNumberAttribute('tls11_successes');
  }
  public set tls11Successes(value: number) {
    this._tls11Successes = value;
  }
  public resetTls11Successes() {
    this._tls11Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11SuccessesInput() {
    return this._tls11Successes;
  }

  // tls12_failures - computed: false, optional: true, required: false
  private _tls12Failures?: number; 
  public get tls12Failures() {
    return this.getNumberAttribute('tls12_failures');
  }
  public set tls12Failures(value: number) {
    this._tls12Failures = value;
  }
  public resetTls12Failures() {
    this._tls12Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12FailuresInput() {
    return this._tls12Failures;
  }

  // tls12_successes - computed: false, optional: true, required: false
  private _tls12Successes?: number; 
  public get tls12Successes() {
    return this.getNumberAttribute('tls12_successes');
  }
  public set tls12Successes(value: number) {
    this._tls12Successes = value;
  }
  public resetTls12Successes() {
    this._tls12Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12SuccessesInput() {
    return this._tls12Successes;
  }

  // tls13_aes_128_gcm_sha256_failures - computed: false, optional: true, required: false
  private _tls13Aes128GcmSha256Failures?: number; 
  public get tls13Aes128GcmSha256Failures() {
    return this.getNumberAttribute('tls13_aes_128_gcm_sha256_failures');
  }
  public set tls13Aes128GcmSha256Failures(value: number) {
    this._tls13Aes128GcmSha256Failures = value;
  }
  public resetTls13Aes128GcmSha256Failures() {
    this._tls13Aes128GcmSha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes128GcmSha256FailuresInput() {
    return this._tls13Aes128GcmSha256Failures;
  }

  // tls13_aes_128_gcm_sha256_id - computed: false, optional: true, required: false
  private _tls13Aes128GcmSha256Id?: string; 
  public get tls13Aes128GcmSha256Id() {
    return this.getStringAttribute('tls13_aes_128_gcm_sha256_id');
  }
  public set tls13Aes128GcmSha256Id(value: string) {
    this._tls13Aes128GcmSha256Id = value;
  }
  public resetTls13Aes128GcmSha256Id() {
    this._tls13Aes128GcmSha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes128GcmSha256IdInput() {
    return this._tls13Aes128GcmSha256Id;
  }

  // tls13_aes_128_gcm_sha256_successes - computed: false, optional: true, required: false
  private _tls13Aes128GcmSha256Successes?: number; 
  public get tls13Aes128GcmSha256Successes() {
    return this.getNumberAttribute('tls13_aes_128_gcm_sha256_successes');
  }
  public set tls13Aes128GcmSha256Successes(value: number) {
    this._tls13Aes128GcmSha256Successes = value;
  }
  public resetTls13Aes128GcmSha256Successes() {
    this._tls13Aes128GcmSha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes128GcmSha256SuccessesInput() {
    return this._tls13Aes128GcmSha256Successes;
  }

  // tls13_aes_256_gcm_sha384_failures - computed: false, optional: true, required: false
  private _tls13Aes256GcmSha384Failures?: number; 
  public get tls13Aes256GcmSha384Failures() {
    return this.getNumberAttribute('tls13_aes_256_gcm_sha384_failures');
  }
  public set tls13Aes256GcmSha384Failures(value: number) {
    this._tls13Aes256GcmSha384Failures = value;
  }
  public resetTls13Aes256GcmSha384Failures() {
    this._tls13Aes256GcmSha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes256GcmSha384FailuresInput() {
    return this._tls13Aes256GcmSha384Failures;
  }

  // tls13_aes_256_gcm_sha384_id - computed: false, optional: true, required: false
  private _tls13Aes256GcmSha384Id?: string; 
  public get tls13Aes256GcmSha384Id() {
    return this.getStringAttribute('tls13_aes_256_gcm_sha384_id');
  }
  public set tls13Aes256GcmSha384Id(value: string) {
    this._tls13Aes256GcmSha384Id = value;
  }
  public resetTls13Aes256GcmSha384Id() {
    this._tls13Aes256GcmSha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes256GcmSha384IdInput() {
    return this._tls13Aes256GcmSha384Id;
  }

  // tls13_aes_256_gcm_sha384_successes - computed: false, optional: true, required: false
  private _tls13Aes256GcmSha384Successes?: number; 
  public get tls13Aes256GcmSha384Successes() {
    return this.getNumberAttribute('tls13_aes_256_gcm_sha384_successes');
  }
  public set tls13Aes256GcmSha384Successes(value: number) {
    this._tls13Aes256GcmSha384Successes = value;
  }
  public resetTls13Aes256GcmSha384Successes() {
    this._tls13Aes256GcmSha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Aes256GcmSha384SuccessesInput() {
    return this._tls13Aes256GcmSha384Successes;
  }

  // tls13_chacha20_poly1305_sha256_failures - computed: false, optional: true, required: false
  private _tls13Chacha20Poly1305Sha256Failures?: number; 
  public get tls13Chacha20Poly1305Sha256Failures() {
    return this.getNumberAttribute('tls13_chacha20_poly1305_sha256_failures');
  }
  public set tls13Chacha20Poly1305Sha256Failures(value: number) {
    this._tls13Chacha20Poly1305Sha256Failures = value;
  }
  public resetTls13Chacha20Poly1305Sha256Failures() {
    this._tls13Chacha20Poly1305Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Chacha20Poly1305Sha256FailuresInput() {
    return this._tls13Chacha20Poly1305Sha256Failures;
  }

  // tls13_chacha20_poly1305_sha256_id - computed: false, optional: true, required: false
  private _tls13Chacha20Poly1305Sha256Id?: string; 
  public get tls13Chacha20Poly1305Sha256Id() {
    return this.getStringAttribute('tls13_chacha20_poly1305_sha256_id');
  }
  public set tls13Chacha20Poly1305Sha256Id(value: string) {
    this._tls13Chacha20Poly1305Sha256Id = value;
  }
  public resetTls13Chacha20Poly1305Sha256Id() {
    this._tls13Chacha20Poly1305Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Chacha20Poly1305Sha256IdInput() {
    return this._tls13Chacha20Poly1305Sha256Id;
  }

  // tls13_chacha20_poly1305_sha256_successes - computed: false, optional: true, required: false
  private _tls13Chacha20Poly1305Sha256Successes?: number; 
  public get tls13Chacha20Poly1305Sha256Successes() {
    return this.getNumberAttribute('tls13_chacha20_poly1305_sha256_successes');
  }
  public set tls13Chacha20Poly1305Sha256Successes(value: number) {
    this._tls13Chacha20Poly1305Sha256Successes = value;
  }
  public resetTls13Chacha20Poly1305Sha256Successes() {
    this._tls13Chacha20Poly1305Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Chacha20Poly1305Sha256SuccessesInput() {
    return this._tls13Chacha20Poly1305Sha256Successes;
  }

  // tls13_failures - computed: false, optional: true, required: false
  private _tls13Failures?: number; 
  public get tls13Failures() {
    return this.getNumberAttribute('tls13_failures');
  }
  public set tls13Failures(value: number) {
    this._tls13Failures = value;
  }
  public resetTls13Failures() {
    this._tls13Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13FailuresInput() {
    return this._tls13Failures;
  }

  // tls13_successes - computed: false, optional: true, required: false
  private _tls13Successes?: number; 
  public get tls13Successes() {
    return this.getNumberAttribute('tls13_successes');
  }
  public set tls13Successes(value: number) {
    this._tls13Successes = value;
  }
  public resetTls13Successes() {
    this._tls13Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13SuccessesInput() {
    return this._tls13Successes;
  }

  // tls1_dhe_rsa_aes_128_gcm_sha256_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes128GcmSha256Failures?: number; 
  public get tls1DheRsaAes128GcmSha256Failures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_gcm_sha256_failures');
  }
  public set tls1DheRsaAes128GcmSha256Failures(value: number) {
    this._tls1DheRsaAes128GcmSha256Failures = value;
  }
  public resetTls1DheRsaAes128GcmSha256Failures() {
    this._tls1DheRsaAes128GcmSha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128GcmSha256FailuresInput() {
    return this._tls1DheRsaAes128GcmSha256Failures;
  }

  // tls1_dhe_rsa_aes_128_gcm_sha256_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes128GcmSha256Id?: string; 
  public get tls1DheRsaAes128GcmSha256Id() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_128_gcm_sha256_id');
  }
  public set tls1DheRsaAes128GcmSha256Id(value: string) {
    this._tls1DheRsaAes128GcmSha256Id = value;
  }
  public resetTls1DheRsaAes128GcmSha256Id() {
    this._tls1DheRsaAes128GcmSha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128GcmSha256IdInput() {
    return this._tls1DheRsaAes128GcmSha256Id;
  }

  // tls1_dhe_rsa_aes_128_gcm_sha256_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes128GcmSha256Successes?: number; 
  public get tls1DheRsaAes128GcmSha256Successes() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_gcm_sha256_successes');
  }
  public set tls1DheRsaAes128GcmSha256Successes(value: number) {
    this._tls1DheRsaAes128GcmSha256Successes = value;
  }
  public resetTls1DheRsaAes128GcmSha256Successes() {
    this._tls1DheRsaAes128GcmSha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128GcmSha256SuccessesInput() {
    return this._tls1DheRsaAes128GcmSha256Successes;
  }

  // tls1_dhe_rsa_aes_128_sha256_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes128Sha256Failures?: number; 
  public get tls1DheRsaAes128Sha256Failures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_sha256_failures');
  }
  public set tls1DheRsaAes128Sha256Failures(value: number) {
    this._tls1DheRsaAes128Sha256Failures = value;
  }
  public resetTls1DheRsaAes128Sha256Failures() {
    this._tls1DheRsaAes128Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128Sha256FailuresInput() {
    return this._tls1DheRsaAes128Sha256Failures;
  }

  // tls1_dhe_rsa_aes_128_sha256_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes128Sha256Id?: string; 
  public get tls1DheRsaAes128Sha256Id() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_128_sha256_id');
  }
  public set tls1DheRsaAes128Sha256Id(value: string) {
    this._tls1DheRsaAes128Sha256Id = value;
  }
  public resetTls1DheRsaAes128Sha256Id() {
    this._tls1DheRsaAes128Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128Sha256IdInput() {
    return this._tls1DheRsaAes128Sha256Id;
  }

  // tls1_dhe_rsa_aes_128_sha256_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes128Sha256Successes?: number; 
  public get tls1DheRsaAes128Sha256Successes() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_sha256_successes');
  }
  public set tls1DheRsaAes128Sha256Successes(value: number) {
    this._tls1DheRsaAes128Sha256Successes = value;
  }
  public resetTls1DheRsaAes128Sha256Successes() {
    this._tls1DheRsaAes128Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128Sha256SuccessesInput() {
    return this._tls1DheRsaAes128Sha256Successes;
  }

  // tls1_dhe_rsa_aes_128_sha_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes128ShaFailures?: number; 
  public get tls1DheRsaAes128ShaFailures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_sha_failures');
  }
  public set tls1DheRsaAes128ShaFailures(value: number) {
    this._tls1DheRsaAes128ShaFailures = value;
  }
  public resetTls1DheRsaAes128ShaFailures() {
    this._tls1DheRsaAes128ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128ShaFailuresInput() {
    return this._tls1DheRsaAes128ShaFailures;
  }

  // tls1_dhe_rsa_aes_128_sha_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes128ShaId?: string; 
  public get tls1DheRsaAes128ShaId() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_128_sha_id');
  }
  public set tls1DheRsaAes128ShaId(value: string) {
    this._tls1DheRsaAes128ShaId = value;
  }
  public resetTls1DheRsaAes128ShaId() {
    this._tls1DheRsaAes128ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128ShaIdInput() {
    return this._tls1DheRsaAes128ShaId;
  }

  // tls1_dhe_rsa_aes_128_sha_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes128ShaSuccesses?: number; 
  public get tls1DheRsaAes128ShaSuccesses() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_128_sha_successes');
  }
  public set tls1DheRsaAes128ShaSuccesses(value: number) {
    this._tls1DheRsaAes128ShaSuccesses = value;
  }
  public resetTls1DheRsaAes128ShaSuccesses() {
    this._tls1DheRsaAes128ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes128ShaSuccessesInput() {
    return this._tls1DheRsaAes128ShaSuccesses;
  }

  // tls1_dhe_rsa_aes_256_gcm_sha384_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes256GcmSha384Failures?: number; 
  public get tls1DheRsaAes256GcmSha384Failures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_gcm_sha384_failures');
  }
  public set tls1DheRsaAes256GcmSha384Failures(value: number) {
    this._tls1DheRsaAes256GcmSha384Failures = value;
  }
  public resetTls1DheRsaAes256GcmSha384Failures() {
    this._tls1DheRsaAes256GcmSha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256GcmSha384FailuresInput() {
    return this._tls1DheRsaAes256GcmSha384Failures;
  }

  // tls1_dhe_rsa_aes_256_gcm_sha384_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes256GcmSha384Id?: string; 
  public get tls1DheRsaAes256GcmSha384Id() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_256_gcm_sha384_id');
  }
  public set tls1DheRsaAes256GcmSha384Id(value: string) {
    this._tls1DheRsaAes256GcmSha384Id = value;
  }
  public resetTls1DheRsaAes256GcmSha384Id() {
    this._tls1DheRsaAes256GcmSha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256GcmSha384IdInput() {
    return this._tls1DheRsaAes256GcmSha384Id;
  }

  // tls1_dhe_rsa_aes_256_gcm_sha384_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes256GcmSha384Successes?: number; 
  public get tls1DheRsaAes256GcmSha384Successes() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_gcm_sha384_successes');
  }
  public set tls1DheRsaAes256GcmSha384Successes(value: number) {
    this._tls1DheRsaAes256GcmSha384Successes = value;
  }
  public resetTls1DheRsaAes256GcmSha384Successes() {
    this._tls1DheRsaAes256GcmSha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256GcmSha384SuccessesInput() {
    return this._tls1DheRsaAes256GcmSha384Successes;
  }

  // tls1_dhe_rsa_aes_256_sha256_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes256Sha256Failures?: number; 
  public get tls1DheRsaAes256Sha256Failures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_sha256_failures');
  }
  public set tls1DheRsaAes256Sha256Failures(value: number) {
    this._tls1DheRsaAes256Sha256Failures = value;
  }
  public resetTls1DheRsaAes256Sha256Failures() {
    this._tls1DheRsaAes256Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256Sha256FailuresInput() {
    return this._tls1DheRsaAes256Sha256Failures;
  }

  // tls1_dhe_rsa_aes_256_sha256_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes256Sha256Id?: string; 
  public get tls1DheRsaAes256Sha256Id() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_256_sha256_id');
  }
  public set tls1DheRsaAes256Sha256Id(value: string) {
    this._tls1DheRsaAes256Sha256Id = value;
  }
  public resetTls1DheRsaAes256Sha256Id() {
    this._tls1DheRsaAes256Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256Sha256IdInput() {
    return this._tls1DheRsaAes256Sha256Id;
  }

  // tls1_dhe_rsa_aes_256_sha256_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes256Sha256Successes?: number; 
  public get tls1DheRsaAes256Sha256Successes() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_sha256_successes');
  }
  public set tls1DheRsaAes256Sha256Successes(value: number) {
    this._tls1DheRsaAes256Sha256Successes = value;
  }
  public resetTls1DheRsaAes256Sha256Successes() {
    this._tls1DheRsaAes256Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256Sha256SuccessesInput() {
    return this._tls1DheRsaAes256Sha256Successes;
  }

  // tls1_dhe_rsa_aes_256_sha_failures - computed: false, optional: true, required: false
  private _tls1DheRsaAes256ShaFailures?: number; 
  public get tls1DheRsaAes256ShaFailures() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_sha_failures');
  }
  public set tls1DheRsaAes256ShaFailures(value: number) {
    this._tls1DheRsaAes256ShaFailures = value;
  }
  public resetTls1DheRsaAes256ShaFailures() {
    this._tls1DheRsaAes256ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256ShaFailuresInput() {
    return this._tls1DheRsaAes256ShaFailures;
  }

  // tls1_dhe_rsa_aes_256_sha_id - computed: false, optional: true, required: false
  private _tls1DheRsaAes256ShaId?: string; 
  public get tls1DheRsaAes256ShaId() {
    return this.getStringAttribute('tls1_dhe_rsa_aes_256_sha_id');
  }
  public set tls1DheRsaAes256ShaId(value: string) {
    this._tls1DheRsaAes256ShaId = value;
  }
  public resetTls1DheRsaAes256ShaId() {
    this._tls1DheRsaAes256ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256ShaIdInput() {
    return this._tls1DheRsaAes256ShaId;
  }

  // tls1_dhe_rsa_aes_256_sha_successes - computed: false, optional: true, required: false
  private _tls1DheRsaAes256ShaSuccesses?: number; 
  public get tls1DheRsaAes256ShaSuccesses() {
    return this.getNumberAttribute('tls1_dhe_rsa_aes_256_sha_successes');
  }
  public set tls1DheRsaAes256ShaSuccesses(value: number) {
    this._tls1DheRsaAes256ShaSuccesses = value;
  }
  public resetTls1DheRsaAes256ShaSuccesses() {
    this._tls1DheRsaAes256ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaAes256ShaSuccessesInput() {
    return this._tls1DheRsaAes256ShaSuccesses;
  }

  // tls1_dhe_rsa_chacha20_poly1305_sha256_failures - computed: false, optional: true, required: false
  private _tls1DheRsaChacha20Poly1305Sha256Failures?: number; 
  public get tls1DheRsaChacha20Poly1305Sha256Failures() {
    return this.getNumberAttribute('tls1_dhe_rsa_chacha20_poly1305_sha256_failures');
  }
  public set tls1DheRsaChacha20Poly1305Sha256Failures(value: number) {
    this._tls1DheRsaChacha20Poly1305Sha256Failures = value;
  }
  public resetTls1DheRsaChacha20Poly1305Sha256Failures() {
    this._tls1DheRsaChacha20Poly1305Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaChacha20Poly1305Sha256FailuresInput() {
    return this._tls1DheRsaChacha20Poly1305Sha256Failures;
  }

  // tls1_dhe_rsa_chacha20_poly1305_sha256_id - computed: false, optional: true, required: false
  private _tls1DheRsaChacha20Poly1305Sha256Id?: string; 
  public get tls1DheRsaChacha20Poly1305Sha256Id() {
    return this.getStringAttribute('tls1_dhe_rsa_chacha20_poly1305_sha256_id');
  }
  public set tls1DheRsaChacha20Poly1305Sha256Id(value: string) {
    this._tls1DheRsaChacha20Poly1305Sha256Id = value;
  }
  public resetTls1DheRsaChacha20Poly1305Sha256Id() {
    this._tls1DheRsaChacha20Poly1305Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaChacha20Poly1305Sha256IdInput() {
    return this._tls1DheRsaChacha20Poly1305Sha256Id;
  }

  // tls1_dhe_rsa_chacha20_poly1305_sha256_successes - computed: false, optional: true, required: false
  private _tls1DheRsaChacha20Poly1305Sha256Successes?: number; 
  public get tls1DheRsaChacha20Poly1305Sha256Successes() {
    return this.getNumberAttribute('tls1_dhe_rsa_chacha20_poly1305_sha256_successes');
  }
  public set tls1DheRsaChacha20Poly1305Sha256Successes(value: number) {
    this._tls1DheRsaChacha20Poly1305Sha256Successes = value;
  }
  public resetTls1DheRsaChacha20Poly1305Sha256Successes() {
    this._tls1DheRsaChacha20Poly1305Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1DheRsaChacha20Poly1305Sha256SuccessesInput() {
    return this._tls1DheRsaChacha20Poly1305Sha256Successes;
  }

  // tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128GcmSha256Failures?: number; 
  public get tls1EcdheEcdsaAes128GcmSha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_gcm_sha256_failures');
  }
  public set tls1EcdheEcdsaAes128GcmSha256Failures(value: number) {
    this._tls1EcdheEcdsaAes128GcmSha256Failures = value;
  }
  public resetTls1EcdheEcdsaAes128GcmSha256Failures() {
    this._tls1EcdheEcdsaAes128GcmSha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128GcmSha256FailuresInput() {
    return this._tls1EcdheEcdsaAes128GcmSha256Failures;
  }

  // tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128GcmSha256Id?: string; 
  public get tls1EcdheEcdsaAes128GcmSha256Id() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_128_gcm_sha256_id');
  }
  public set tls1EcdheEcdsaAes128GcmSha256Id(value: string) {
    this._tls1EcdheEcdsaAes128GcmSha256Id = value;
  }
  public resetTls1EcdheEcdsaAes128GcmSha256Id() {
    this._tls1EcdheEcdsaAes128GcmSha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128GcmSha256IdInput() {
    return this._tls1EcdheEcdsaAes128GcmSha256Id;
  }

  // tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128GcmSha256Successes?: number; 
  public get tls1EcdheEcdsaAes128GcmSha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_gcm_sha256_successes');
  }
  public set tls1EcdheEcdsaAes128GcmSha256Successes(value: number) {
    this._tls1EcdheEcdsaAes128GcmSha256Successes = value;
  }
  public resetTls1EcdheEcdsaAes128GcmSha256Successes() {
    this._tls1EcdheEcdsaAes128GcmSha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128GcmSha256SuccessesInput() {
    return this._tls1EcdheEcdsaAes128GcmSha256Successes;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128Sha256Failures?: number; 
  public get tls1EcdheEcdsaAes128Sha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_sha256_failures');
  }
  public set tls1EcdheEcdsaAes128Sha256Failures(value: number) {
    this._tls1EcdheEcdsaAes128Sha256Failures = value;
  }
  public resetTls1EcdheEcdsaAes128Sha256Failures() {
    this._tls1EcdheEcdsaAes128Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128Sha256FailuresInput() {
    return this._tls1EcdheEcdsaAes128Sha256Failures;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128Sha256Id?: string; 
  public get tls1EcdheEcdsaAes128Sha256Id() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_128_sha256_id');
  }
  public set tls1EcdheEcdsaAes128Sha256Id(value: string) {
    this._tls1EcdheEcdsaAes128Sha256Id = value;
  }
  public resetTls1EcdheEcdsaAes128Sha256Id() {
    this._tls1EcdheEcdsaAes128Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128Sha256IdInput() {
    return this._tls1EcdheEcdsaAes128Sha256Id;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128Sha256Successes?: number; 
  public get tls1EcdheEcdsaAes128Sha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_sha256_successes');
  }
  public set tls1EcdheEcdsaAes128Sha256Successes(value: number) {
    this._tls1EcdheEcdsaAes128Sha256Successes = value;
  }
  public resetTls1EcdheEcdsaAes128Sha256Successes() {
    this._tls1EcdheEcdsaAes128Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128Sha256SuccessesInput() {
    return this._tls1EcdheEcdsaAes128Sha256Successes;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128ShaFailures?: number; 
  public get tls1EcdheEcdsaAes128ShaFailures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_sha_failures');
  }
  public set tls1EcdheEcdsaAes128ShaFailures(value: number) {
    this._tls1EcdheEcdsaAes128ShaFailures = value;
  }
  public resetTls1EcdheEcdsaAes128ShaFailures() {
    this._tls1EcdheEcdsaAes128ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128ShaFailuresInput() {
    return this._tls1EcdheEcdsaAes128ShaFailures;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128ShaId?: string; 
  public get tls1EcdheEcdsaAes128ShaId() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_128_sha_id');
  }
  public set tls1EcdheEcdsaAes128ShaId(value: string) {
    this._tls1EcdheEcdsaAes128ShaId = value;
  }
  public resetTls1EcdheEcdsaAes128ShaId() {
    this._tls1EcdheEcdsaAes128ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128ShaIdInput() {
    return this._tls1EcdheEcdsaAes128ShaId;
  }

  // tls1_ecdhe_ecdsa_aes_128_sha_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes128ShaSuccesses?: number; 
  public get tls1EcdheEcdsaAes128ShaSuccesses() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_128_sha_successes');
  }
  public set tls1EcdheEcdsaAes128ShaSuccesses(value: number) {
    this._tls1EcdheEcdsaAes128ShaSuccesses = value;
  }
  public resetTls1EcdheEcdsaAes128ShaSuccesses() {
    this._tls1EcdheEcdsaAes128ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes128ShaSuccessesInput() {
    return this._tls1EcdheEcdsaAes128ShaSuccesses;
  }

  // tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256GcmSha384Failures?: number; 
  public get tls1EcdheEcdsaAes256GcmSha384Failures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_gcm_sha384_failures');
  }
  public set tls1EcdheEcdsaAes256GcmSha384Failures(value: number) {
    this._tls1EcdheEcdsaAes256GcmSha384Failures = value;
  }
  public resetTls1EcdheEcdsaAes256GcmSha384Failures() {
    this._tls1EcdheEcdsaAes256GcmSha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256GcmSha384FailuresInput() {
    return this._tls1EcdheEcdsaAes256GcmSha384Failures;
  }

  // tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256GcmSha384Id?: string; 
  public get tls1EcdheEcdsaAes256GcmSha384Id() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_256_gcm_sha384_id');
  }
  public set tls1EcdheEcdsaAes256GcmSha384Id(value: string) {
    this._tls1EcdheEcdsaAes256GcmSha384Id = value;
  }
  public resetTls1EcdheEcdsaAes256GcmSha384Id() {
    this._tls1EcdheEcdsaAes256GcmSha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256GcmSha384IdInput() {
    return this._tls1EcdheEcdsaAes256GcmSha384Id;
  }

  // tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256GcmSha384Successes?: number; 
  public get tls1EcdheEcdsaAes256GcmSha384Successes() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_gcm_sha384_successes');
  }
  public set tls1EcdheEcdsaAes256GcmSha384Successes(value: number) {
    this._tls1EcdheEcdsaAes256GcmSha384Successes = value;
  }
  public resetTls1EcdheEcdsaAes256GcmSha384Successes() {
    this._tls1EcdheEcdsaAes256GcmSha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256GcmSha384SuccessesInput() {
    return this._tls1EcdheEcdsaAes256GcmSha384Successes;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha384_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256Sha384Failures?: number; 
  public get tls1EcdheEcdsaAes256Sha384Failures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_sha384_failures');
  }
  public set tls1EcdheEcdsaAes256Sha384Failures(value: number) {
    this._tls1EcdheEcdsaAes256Sha384Failures = value;
  }
  public resetTls1EcdheEcdsaAes256Sha384Failures() {
    this._tls1EcdheEcdsaAes256Sha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256Sha384FailuresInput() {
    return this._tls1EcdheEcdsaAes256Sha384Failures;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha384_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256Sha384Id?: string; 
  public get tls1EcdheEcdsaAes256Sha384Id() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_256_sha384_id');
  }
  public set tls1EcdheEcdsaAes256Sha384Id(value: string) {
    this._tls1EcdheEcdsaAes256Sha384Id = value;
  }
  public resetTls1EcdheEcdsaAes256Sha384Id() {
    this._tls1EcdheEcdsaAes256Sha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256Sha384IdInput() {
    return this._tls1EcdheEcdsaAes256Sha384Id;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha384_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256Sha384Successes?: number; 
  public get tls1EcdheEcdsaAes256Sha384Successes() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_sha384_successes');
  }
  public set tls1EcdheEcdsaAes256Sha384Successes(value: number) {
    this._tls1EcdheEcdsaAes256Sha384Successes = value;
  }
  public resetTls1EcdheEcdsaAes256Sha384Successes() {
    this._tls1EcdheEcdsaAes256Sha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256Sha384SuccessesInput() {
    return this._tls1EcdheEcdsaAes256Sha384Successes;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256ShaFailures?: number; 
  public get tls1EcdheEcdsaAes256ShaFailures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_sha_failures');
  }
  public set tls1EcdheEcdsaAes256ShaFailures(value: number) {
    this._tls1EcdheEcdsaAes256ShaFailures = value;
  }
  public resetTls1EcdheEcdsaAes256ShaFailures() {
    this._tls1EcdheEcdsaAes256ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256ShaFailuresInput() {
    return this._tls1EcdheEcdsaAes256ShaFailures;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256ShaId?: string; 
  public get tls1EcdheEcdsaAes256ShaId() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_aes_256_sha_id');
  }
  public set tls1EcdheEcdsaAes256ShaId(value: string) {
    this._tls1EcdheEcdsaAes256ShaId = value;
  }
  public resetTls1EcdheEcdsaAes256ShaId() {
    this._tls1EcdheEcdsaAes256ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256ShaIdInput() {
    return this._tls1EcdheEcdsaAes256ShaId;
  }

  // tls1_ecdhe_ecdsa_aes_256_sha_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaAes256ShaSuccesses?: number; 
  public get tls1EcdheEcdsaAes256ShaSuccesses() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_aes_256_sha_successes');
  }
  public set tls1EcdheEcdsaAes256ShaSuccesses(value: number) {
    this._tls1EcdheEcdsaAes256ShaSuccesses = value;
  }
  public resetTls1EcdheEcdsaAes256ShaSuccesses() {
    this._tls1EcdheEcdsaAes256ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaAes256ShaSuccessesInput() {
    return this._tls1EcdheEcdsaAes256ShaSuccesses;
  }

  // tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaChacha20Poly1305Sha256Failures?: number; 
  public get tls1EcdheEcdsaChacha20Poly1305Sha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_failures');
  }
  public set tls1EcdheEcdsaChacha20Poly1305Sha256Failures(value: number) {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures = value;
  }
  public resetTls1EcdheEcdsaChacha20Poly1305Sha256Failures() {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaChacha20Poly1305Sha256FailuresInput() {
    return this._tls1EcdheEcdsaChacha20Poly1305Sha256Failures;
  }

  // tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaChacha20Poly1305Sha256Id?: string; 
  public get tls1EcdheEcdsaChacha20Poly1305Sha256Id() {
    return this.getStringAttribute('tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_id');
  }
  public set tls1EcdheEcdsaChacha20Poly1305Sha256Id(value: string) {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Id = value;
  }
  public resetTls1EcdheEcdsaChacha20Poly1305Sha256Id() {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaChacha20Poly1305Sha256IdInput() {
    return this._tls1EcdheEcdsaChacha20Poly1305Sha256Id;
  }

  // tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheEcdsaChacha20Poly1305Sha256Successes?: number; 
  public get tls1EcdheEcdsaChacha20Poly1305Sha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_ecdsa_chacha20_poly1305_sha256_successes');
  }
  public set tls1EcdheEcdsaChacha20Poly1305Sha256Successes(value: number) {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes = value;
  }
  public resetTls1EcdheEcdsaChacha20Poly1305Sha256Successes() {
    this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheEcdsaChacha20Poly1305Sha256SuccessesInput() {
    return this._tls1EcdheEcdsaChacha20Poly1305Sha256Successes;
  }

  // tls1_ecdhe_rsa_aes_128_gcm_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128GcmSha256Failures?: number; 
  public get tls1EcdheRsaAes128GcmSha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_gcm_sha256_failures');
  }
  public set tls1EcdheRsaAes128GcmSha256Failures(value: number) {
    this._tls1EcdheRsaAes128GcmSha256Failures = value;
  }
  public resetTls1EcdheRsaAes128GcmSha256Failures() {
    this._tls1EcdheRsaAes128GcmSha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128GcmSha256FailuresInput() {
    return this._tls1EcdheRsaAes128GcmSha256Failures;
  }

  // tls1_ecdhe_rsa_aes_128_gcm_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128GcmSha256Id?: string; 
  public get tls1EcdheRsaAes128GcmSha256Id() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_128_gcm_sha256_id');
  }
  public set tls1EcdheRsaAes128GcmSha256Id(value: string) {
    this._tls1EcdheRsaAes128GcmSha256Id = value;
  }
  public resetTls1EcdheRsaAes128GcmSha256Id() {
    this._tls1EcdheRsaAes128GcmSha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128GcmSha256IdInput() {
    return this._tls1EcdheRsaAes128GcmSha256Id;
  }

  // tls1_ecdhe_rsa_aes_128_gcm_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128GcmSha256Successes?: number; 
  public get tls1EcdheRsaAes128GcmSha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_gcm_sha256_successes');
  }
  public set tls1EcdheRsaAes128GcmSha256Successes(value: number) {
    this._tls1EcdheRsaAes128GcmSha256Successes = value;
  }
  public resetTls1EcdheRsaAes128GcmSha256Successes() {
    this._tls1EcdheRsaAes128GcmSha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128GcmSha256SuccessesInput() {
    return this._tls1EcdheRsaAes128GcmSha256Successes;
  }

  // tls1_ecdhe_rsa_aes_128_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128Sha256Failures?: number; 
  public get tls1EcdheRsaAes128Sha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_sha256_failures');
  }
  public set tls1EcdheRsaAes128Sha256Failures(value: number) {
    this._tls1EcdheRsaAes128Sha256Failures = value;
  }
  public resetTls1EcdheRsaAes128Sha256Failures() {
    this._tls1EcdheRsaAes128Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128Sha256FailuresInput() {
    return this._tls1EcdheRsaAes128Sha256Failures;
  }

  // tls1_ecdhe_rsa_aes_128_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128Sha256Id?: string; 
  public get tls1EcdheRsaAes128Sha256Id() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_128_sha256_id');
  }
  public set tls1EcdheRsaAes128Sha256Id(value: string) {
    this._tls1EcdheRsaAes128Sha256Id = value;
  }
  public resetTls1EcdheRsaAes128Sha256Id() {
    this._tls1EcdheRsaAes128Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128Sha256IdInput() {
    return this._tls1EcdheRsaAes128Sha256Id;
  }

  // tls1_ecdhe_rsa_aes_128_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128Sha256Successes?: number; 
  public get tls1EcdheRsaAes128Sha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_sha256_successes');
  }
  public set tls1EcdheRsaAes128Sha256Successes(value: number) {
    this._tls1EcdheRsaAes128Sha256Successes = value;
  }
  public resetTls1EcdheRsaAes128Sha256Successes() {
    this._tls1EcdheRsaAes128Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128Sha256SuccessesInput() {
    return this._tls1EcdheRsaAes128Sha256Successes;
  }

  // tls1_ecdhe_rsa_aes_128_sha_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128ShaFailures?: number; 
  public get tls1EcdheRsaAes128ShaFailures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_sha_failures');
  }
  public set tls1EcdheRsaAes128ShaFailures(value: number) {
    this._tls1EcdheRsaAes128ShaFailures = value;
  }
  public resetTls1EcdheRsaAes128ShaFailures() {
    this._tls1EcdheRsaAes128ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128ShaFailuresInput() {
    return this._tls1EcdheRsaAes128ShaFailures;
  }

  // tls1_ecdhe_rsa_aes_128_sha_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128ShaId?: string; 
  public get tls1EcdheRsaAes128ShaId() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_128_sha_id');
  }
  public set tls1EcdheRsaAes128ShaId(value: string) {
    this._tls1EcdheRsaAes128ShaId = value;
  }
  public resetTls1EcdheRsaAes128ShaId() {
    this._tls1EcdheRsaAes128ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128ShaIdInput() {
    return this._tls1EcdheRsaAes128ShaId;
  }

  // tls1_ecdhe_rsa_aes_128_sha_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes128ShaSuccesses?: number; 
  public get tls1EcdheRsaAes128ShaSuccesses() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_128_sha_successes');
  }
  public set tls1EcdheRsaAes128ShaSuccesses(value: number) {
    this._tls1EcdheRsaAes128ShaSuccesses = value;
  }
  public resetTls1EcdheRsaAes128ShaSuccesses() {
    this._tls1EcdheRsaAes128ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes128ShaSuccessesInput() {
    return this._tls1EcdheRsaAes128ShaSuccesses;
  }

  // tls1_ecdhe_rsa_aes_256_gcm_sha384_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256GcmSha384Failures?: number; 
  public get tls1EcdheRsaAes256GcmSha384Failures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_gcm_sha384_failures');
  }
  public set tls1EcdheRsaAes256GcmSha384Failures(value: number) {
    this._tls1EcdheRsaAes256GcmSha384Failures = value;
  }
  public resetTls1EcdheRsaAes256GcmSha384Failures() {
    this._tls1EcdheRsaAes256GcmSha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256GcmSha384FailuresInput() {
    return this._tls1EcdheRsaAes256GcmSha384Failures;
  }

  // tls1_ecdhe_rsa_aes_256_gcm_sha384_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256GcmSha384Id?: string; 
  public get tls1EcdheRsaAes256GcmSha384Id() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_256_gcm_sha384_id');
  }
  public set tls1EcdheRsaAes256GcmSha384Id(value: string) {
    this._tls1EcdheRsaAes256GcmSha384Id = value;
  }
  public resetTls1EcdheRsaAes256GcmSha384Id() {
    this._tls1EcdheRsaAes256GcmSha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256GcmSha384IdInput() {
    return this._tls1EcdheRsaAes256GcmSha384Id;
  }

  // tls1_ecdhe_rsa_aes_256_gcm_sha384_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256GcmSha384Successes?: number; 
  public get tls1EcdheRsaAes256GcmSha384Successes() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_gcm_sha384_successes');
  }
  public set tls1EcdheRsaAes256GcmSha384Successes(value: number) {
    this._tls1EcdheRsaAes256GcmSha384Successes = value;
  }
  public resetTls1EcdheRsaAes256GcmSha384Successes() {
    this._tls1EcdheRsaAes256GcmSha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256GcmSha384SuccessesInput() {
    return this._tls1EcdheRsaAes256GcmSha384Successes;
  }

  // tls1_ecdhe_rsa_aes_256_sha384_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256Sha384Failures?: number; 
  public get tls1EcdheRsaAes256Sha384Failures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_sha384_failures');
  }
  public set tls1EcdheRsaAes256Sha384Failures(value: number) {
    this._tls1EcdheRsaAes256Sha384Failures = value;
  }
  public resetTls1EcdheRsaAes256Sha384Failures() {
    this._tls1EcdheRsaAes256Sha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256Sha384FailuresInput() {
    return this._tls1EcdheRsaAes256Sha384Failures;
  }

  // tls1_ecdhe_rsa_aes_256_sha384_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256Sha384Id?: string; 
  public get tls1EcdheRsaAes256Sha384Id() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_256_sha384_id');
  }
  public set tls1EcdheRsaAes256Sha384Id(value: string) {
    this._tls1EcdheRsaAes256Sha384Id = value;
  }
  public resetTls1EcdheRsaAes256Sha384Id() {
    this._tls1EcdheRsaAes256Sha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256Sha384IdInput() {
    return this._tls1EcdheRsaAes256Sha384Id;
  }

  // tls1_ecdhe_rsa_aes_256_sha384_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256Sha384Successes?: number; 
  public get tls1EcdheRsaAes256Sha384Successes() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_sha384_successes');
  }
  public set tls1EcdheRsaAes256Sha384Successes(value: number) {
    this._tls1EcdheRsaAes256Sha384Successes = value;
  }
  public resetTls1EcdheRsaAes256Sha384Successes() {
    this._tls1EcdheRsaAes256Sha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256Sha384SuccessesInput() {
    return this._tls1EcdheRsaAes256Sha384Successes;
  }

  // tls1_ecdhe_rsa_aes_256_sha_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256ShaFailures?: number; 
  public get tls1EcdheRsaAes256ShaFailures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_sha_failures');
  }
  public set tls1EcdheRsaAes256ShaFailures(value: number) {
    this._tls1EcdheRsaAes256ShaFailures = value;
  }
  public resetTls1EcdheRsaAes256ShaFailures() {
    this._tls1EcdheRsaAes256ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256ShaFailuresInput() {
    return this._tls1EcdheRsaAes256ShaFailures;
  }

  // tls1_ecdhe_rsa_aes_256_sha_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256ShaId?: string; 
  public get tls1EcdheRsaAes256ShaId() {
    return this.getStringAttribute('tls1_ecdhe_rsa_aes_256_sha_id');
  }
  public set tls1EcdheRsaAes256ShaId(value: string) {
    this._tls1EcdheRsaAes256ShaId = value;
  }
  public resetTls1EcdheRsaAes256ShaId() {
    this._tls1EcdheRsaAes256ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256ShaIdInput() {
    return this._tls1EcdheRsaAes256ShaId;
  }

  // tls1_ecdhe_rsa_aes_256_sha_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaAes256ShaSuccesses?: number; 
  public get tls1EcdheRsaAes256ShaSuccesses() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_aes_256_sha_successes');
  }
  public set tls1EcdheRsaAes256ShaSuccesses(value: number) {
    this._tls1EcdheRsaAes256ShaSuccesses = value;
  }
  public resetTls1EcdheRsaAes256ShaSuccesses() {
    this._tls1EcdheRsaAes256ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaAes256ShaSuccessesInput() {
    return this._tls1EcdheRsaAes256ShaSuccesses;
  }

  // tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheRsaChacha20Poly1305Sha256Failures?: number; 
  public get tls1EcdheRsaChacha20Poly1305Sha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_chacha20_poly1305_sha256_failures');
  }
  public set tls1EcdheRsaChacha20Poly1305Sha256Failures(value: number) {
    this._tls1EcdheRsaChacha20Poly1305Sha256Failures = value;
  }
  public resetTls1EcdheRsaChacha20Poly1305Sha256Failures() {
    this._tls1EcdheRsaChacha20Poly1305Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaChacha20Poly1305Sha256FailuresInput() {
    return this._tls1EcdheRsaChacha20Poly1305Sha256Failures;
  }

  // tls1_ecdhe_rsa_chacha20_poly1305_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheRsaChacha20Poly1305Sha256Id?: string; 
  public get tls1EcdheRsaChacha20Poly1305Sha256Id() {
    return this.getStringAttribute('tls1_ecdhe_rsa_chacha20_poly1305_sha256_id');
  }
  public set tls1EcdheRsaChacha20Poly1305Sha256Id(value: string) {
    this._tls1EcdheRsaChacha20Poly1305Sha256Id = value;
  }
  public resetTls1EcdheRsaChacha20Poly1305Sha256Id() {
    this._tls1EcdheRsaChacha20Poly1305Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaChacha20Poly1305Sha256IdInput() {
    return this._tls1EcdheRsaChacha20Poly1305Sha256Id;
  }

  // tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheRsaChacha20Poly1305Sha256Successes?: number; 
  public get tls1EcdheRsaChacha20Poly1305Sha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_rsa_chacha20_poly1305_sha256_successes');
  }
  public set tls1EcdheRsaChacha20Poly1305Sha256Successes(value: number) {
    this._tls1EcdheRsaChacha20Poly1305Sha256Successes = value;
  }
  public resetTls1EcdheRsaChacha20Poly1305Sha256Successes() {
    this._tls1EcdheRsaChacha20Poly1305Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheRsaChacha20Poly1305Sha256SuccessesInput() {
    return this._tls1EcdheRsaChacha20Poly1305Sha256Successes;
  }

  // tls1_ecdhe_sm2_sms4_gcm_sm3_failures - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4GcmSm3Failures?: number; 
  public get tls1EcdheSm2Sms4GcmSm3Failures() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_gcm_sm3_failures');
  }
  public set tls1EcdheSm2Sms4GcmSm3Failures(value: number) {
    this._tls1EcdheSm2Sms4GcmSm3Failures = value;
  }
  public resetTls1EcdheSm2Sms4GcmSm3Failures() {
    this._tls1EcdheSm2Sms4GcmSm3Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4GcmSm3FailuresInput() {
    return this._tls1EcdheSm2Sms4GcmSm3Failures;
  }

  // tls1_ecdhe_sm2_sms4_gcm_sm3_id - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4GcmSm3Id?: string; 
  public get tls1EcdheSm2Sms4GcmSm3Id() {
    return this.getStringAttribute('tls1_ecdhe_sm2_sms4_gcm_sm3_id');
  }
  public set tls1EcdheSm2Sms4GcmSm3Id(value: string) {
    this._tls1EcdheSm2Sms4GcmSm3Id = value;
  }
  public resetTls1EcdheSm2Sms4GcmSm3Id() {
    this._tls1EcdheSm2Sms4GcmSm3Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4GcmSm3IdInput() {
    return this._tls1EcdheSm2Sms4GcmSm3Id;
  }

  // tls1_ecdhe_sm2_sms4_gcm_sm3_successes - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4GcmSm3Successes?: number; 
  public get tls1EcdheSm2Sms4GcmSm3Successes() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_gcm_sm3_successes');
  }
  public set tls1EcdheSm2Sms4GcmSm3Successes(value: number) {
    this._tls1EcdheSm2Sms4GcmSm3Successes = value;
  }
  public resetTls1EcdheSm2Sms4GcmSm3Successes() {
    this._tls1EcdheSm2Sms4GcmSm3Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4GcmSm3SuccessesInput() {
    return this._tls1EcdheSm2Sms4GcmSm3Successes;
  }

  // tls1_ecdhe_sm2_sms4_sha256_failures - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sha256Failures?: number; 
  public get tls1EcdheSm2Sms4Sha256Failures() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_sha256_failures');
  }
  public set tls1EcdheSm2Sms4Sha256Failures(value: number) {
    this._tls1EcdheSm2Sms4Sha256Failures = value;
  }
  public resetTls1EcdheSm2Sms4Sha256Failures() {
    this._tls1EcdheSm2Sms4Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sha256FailuresInput() {
    return this._tls1EcdheSm2Sms4Sha256Failures;
  }

  // tls1_ecdhe_sm2_sms4_sha256_id - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sha256Id?: string; 
  public get tls1EcdheSm2Sms4Sha256Id() {
    return this.getStringAttribute('tls1_ecdhe_sm2_sms4_sha256_id');
  }
  public set tls1EcdheSm2Sms4Sha256Id(value: string) {
    this._tls1EcdheSm2Sms4Sha256Id = value;
  }
  public resetTls1EcdheSm2Sms4Sha256Id() {
    this._tls1EcdheSm2Sms4Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sha256IdInput() {
    return this._tls1EcdheSm2Sms4Sha256Id;
  }

  // tls1_ecdhe_sm2_sms4_sha256_successes - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sha256Successes?: number; 
  public get tls1EcdheSm2Sms4Sha256Successes() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_sha256_successes');
  }
  public set tls1EcdheSm2Sms4Sha256Successes(value: number) {
    this._tls1EcdheSm2Sms4Sha256Successes = value;
  }
  public resetTls1EcdheSm2Sms4Sha256Successes() {
    this._tls1EcdheSm2Sms4Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sha256SuccessesInput() {
    return this._tls1EcdheSm2Sms4Sha256Successes;
  }

  // tls1_ecdhe_sm2_sms4_sm3_failures - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sm3Failures?: number; 
  public get tls1EcdheSm2Sms4Sm3Failures() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_sm3_failures');
  }
  public set tls1EcdheSm2Sms4Sm3Failures(value: number) {
    this._tls1EcdheSm2Sms4Sm3Failures = value;
  }
  public resetTls1EcdheSm2Sms4Sm3Failures() {
    this._tls1EcdheSm2Sms4Sm3Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sm3FailuresInput() {
    return this._tls1EcdheSm2Sms4Sm3Failures;
  }

  // tls1_ecdhe_sm2_sms4_sm3_id - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sm3Id?: string; 
  public get tls1EcdheSm2Sms4Sm3Id() {
    return this.getStringAttribute('tls1_ecdhe_sm2_sms4_sm3_id');
  }
  public set tls1EcdheSm2Sms4Sm3Id(value: string) {
    this._tls1EcdheSm2Sms4Sm3Id = value;
  }
  public resetTls1EcdheSm2Sms4Sm3Id() {
    this._tls1EcdheSm2Sms4Sm3Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sm3IdInput() {
    return this._tls1EcdheSm2Sms4Sm3Id;
  }

  // tls1_ecdhe_sm2_sms4_sm3_successes - computed: false, optional: true, required: false
  private _tls1EcdheSm2Sms4Sm3Successes?: number; 
  public get tls1EcdheSm2Sms4Sm3Successes() {
    return this.getNumberAttribute('tls1_ecdhe_sm2_sms4_sm3_successes');
  }
  public set tls1EcdheSm2Sms4Sm3Successes(value: number) {
    this._tls1EcdheSm2Sms4Sm3Successes = value;
  }
  public resetTls1EcdheSm2Sms4Sm3Successes() {
    this._tls1EcdheSm2Sms4Sm3Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1EcdheSm2Sms4Sm3SuccessesInput() {
    return this._tls1EcdheSm2Sms4Sm3Successes;
  }

  // tls1_rsa_aes_128_gcm_sha256_failures - computed: false, optional: true, required: false
  private _tls1RsaAes128GcmSha256Failures?: number; 
  public get tls1RsaAes128GcmSha256Failures() {
    return this.getNumberAttribute('tls1_rsa_aes_128_gcm_sha256_failures');
  }
  public set tls1RsaAes128GcmSha256Failures(value: number) {
    this._tls1RsaAes128GcmSha256Failures = value;
  }
  public resetTls1RsaAes128GcmSha256Failures() {
    this._tls1RsaAes128GcmSha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128GcmSha256FailuresInput() {
    return this._tls1RsaAes128GcmSha256Failures;
  }

  // tls1_rsa_aes_128_gcm_sha256_id - computed: false, optional: true, required: false
  private _tls1RsaAes128GcmSha256Id?: string; 
  public get tls1RsaAes128GcmSha256Id() {
    return this.getStringAttribute('tls1_rsa_aes_128_gcm_sha256_id');
  }
  public set tls1RsaAes128GcmSha256Id(value: string) {
    this._tls1RsaAes128GcmSha256Id = value;
  }
  public resetTls1RsaAes128GcmSha256Id() {
    this._tls1RsaAes128GcmSha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128GcmSha256IdInput() {
    return this._tls1RsaAes128GcmSha256Id;
  }

  // tls1_rsa_aes_128_gcm_sha256_successes - computed: false, optional: true, required: false
  private _tls1RsaAes128GcmSha256Successes?: number; 
  public get tls1RsaAes128GcmSha256Successes() {
    return this.getNumberAttribute('tls1_rsa_aes_128_gcm_sha256_successes');
  }
  public set tls1RsaAes128GcmSha256Successes(value: number) {
    this._tls1RsaAes128GcmSha256Successes = value;
  }
  public resetTls1RsaAes128GcmSha256Successes() {
    this._tls1RsaAes128GcmSha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128GcmSha256SuccessesInput() {
    return this._tls1RsaAes128GcmSha256Successes;
  }

  // tls1_rsa_aes_128_sha256_failures - computed: false, optional: true, required: false
  private _tls1RsaAes128Sha256Failures?: number; 
  public get tls1RsaAes128Sha256Failures() {
    return this.getNumberAttribute('tls1_rsa_aes_128_sha256_failures');
  }
  public set tls1RsaAes128Sha256Failures(value: number) {
    this._tls1RsaAes128Sha256Failures = value;
  }
  public resetTls1RsaAes128Sha256Failures() {
    this._tls1RsaAes128Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128Sha256FailuresInput() {
    return this._tls1RsaAes128Sha256Failures;
  }

  // tls1_rsa_aes_128_sha256_id - computed: false, optional: true, required: false
  private _tls1RsaAes128Sha256Id?: string; 
  public get tls1RsaAes128Sha256Id() {
    return this.getStringAttribute('tls1_rsa_aes_128_sha256_id');
  }
  public set tls1RsaAes128Sha256Id(value: string) {
    this._tls1RsaAes128Sha256Id = value;
  }
  public resetTls1RsaAes128Sha256Id() {
    this._tls1RsaAes128Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128Sha256IdInput() {
    return this._tls1RsaAes128Sha256Id;
  }

  // tls1_rsa_aes_128_sha256_successes - computed: false, optional: true, required: false
  private _tls1RsaAes128Sha256Successes?: number; 
  public get tls1RsaAes128Sha256Successes() {
    return this.getNumberAttribute('tls1_rsa_aes_128_sha256_successes');
  }
  public set tls1RsaAes128Sha256Successes(value: number) {
    this._tls1RsaAes128Sha256Successes = value;
  }
  public resetTls1RsaAes128Sha256Successes() {
    this._tls1RsaAes128Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128Sha256SuccessesInput() {
    return this._tls1RsaAes128Sha256Successes;
  }

  // tls1_rsa_aes_128_sha_failures - computed: false, optional: true, required: false
  private _tls1RsaAes128ShaFailures?: number; 
  public get tls1RsaAes128ShaFailures() {
    return this.getNumberAttribute('tls1_rsa_aes_128_sha_failures');
  }
  public set tls1RsaAes128ShaFailures(value: number) {
    this._tls1RsaAes128ShaFailures = value;
  }
  public resetTls1RsaAes128ShaFailures() {
    this._tls1RsaAes128ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128ShaFailuresInput() {
    return this._tls1RsaAes128ShaFailures;
  }

  // tls1_rsa_aes_128_sha_id - computed: false, optional: true, required: false
  private _tls1RsaAes128ShaId?: string; 
  public get tls1RsaAes128ShaId() {
    return this.getStringAttribute('tls1_rsa_aes_128_sha_id');
  }
  public set tls1RsaAes128ShaId(value: string) {
    this._tls1RsaAes128ShaId = value;
  }
  public resetTls1RsaAes128ShaId() {
    this._tls1RsaAes128ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128ShaIdInput() {
    return this._tls1RsaAes128ShaId;
  }

  // tls1_rsa_aes_128_sha_successes - computed: false, optional: true, required: false
  private _tls1RsaAes128ShaSuccesses?: number; 
  public get tls1RsaAes128ShaSuccesses() {
    return this.getNumberAttribute('tls1_rsa_aes_128_sha_successes');
  }
  public set tls1RsaAes128ShaSuccesses(value: number) {
    this._tls1RsaAes128ShaSuccesses = value;
  }
  public resetTls1RsaAes128ShaSuccesses() {
    this._tls1RsaAes128ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes128ShaSuccessesInput() {
    return this._tls1RsaAes128ShaSuccesses;
  }

  // tls1_rsa_aes_256_gcm_sha384_failures - computed: false, optional: true, required: false
  private _tls1RsaAes256GcmSha384Failures?: number; 
  public get tls1RsaAes256GcmSha384Failures() {
    return this.getNumberAttribute('tls1_rsa_aes_256_gcm_sha384_failures');
  }
  public set tls1RsaAes256GcmSha384Failures(value: number) {
    this._tls1RsaAes256GcmSha384Failures = value;
  }
  public resetTls1RsaAes256GcmSha384Failures() {
    this._tls1RsaAes256GcmSha384Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256GcmSha384FailuresInput() {
    return this._tls1RsaAes256GcmSha384Failures;
  }

  // tls1_rsa_aes_256_gcm_sha384_id - computed: false, optional: true, required: false
  private _tls1RsaAes256GcmSha384Id?: string; 
  public get tls1RsaAes256GcmSha384Id() {
    return this.getStringAttribute('tls1_rsa_aes_256_gcm_sha384_id');
  }
  public set tls1RsaAes256GcmSha384Id(value: string) {
    this._tls1RsaAes256GcmSha384Id = value;
  }
  public resetTls1RsaAes256GcmSha384Id() {
    this._tls1RsaAes256GcmSha384Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256GcmSha384IdInput() {
    return this._tls1RsaAes256GcmSha384Id;
  }

  // tls1_rsa_aes_256_gcm_sha384_successes - computed: false, optional: true, required: false
  private _tls1RsaAes256GcmSha384Successes?: number; 
  public get tls1RsaAes256GcmSha384Successes() {
    return this.getNumberAttribute('tls1_rsa_aes_256_gcm_sha384_successes');
  }
  public set tls1RsaAes256GcmSha384Successes(value: number) {
    this._tls1RsaAes256GcmSha384Successes = value;
  }
  public resetTls1RsaAes256GcmSha384Successes() {
    this._tls1RsaAes256GcmSha384Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256GcmSha384SuccessesInput() {
    return this._tls1RsaAes256GcmSha384Successes;
  }

  // tls1_rsa_aes_256_sha256_failures - computed: false, optional: true, required: false
  private _tls1RsaAes256Sha256Failures?: number; 
  public get tls1RsaAes256Sha256Failures() {
    return this.getNumberAttribute('tls1_rsa_aes_256_sha256_failures');
  }
  public set tls1RsaAes256Sha256Failures(value: number) {
    this._tls1RsaAes256Sha256Failures = value;
  }
  public resetTls1RsaAes256Sha256Failures() {
    this._tls1RsaAes256Sha256Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256Sha256FailuresInput() {
    return this._tls1RsaAes256Sha256Failures;
  }

  // tls1_rsa_aes_256_sha256_id - computed: false, optional: true, required: false
  private _tls1RsaAes256Sha256Id?: string; 
  public get tls1RsaAes256Sha256Id() {
    return this.getStringAttribute('tls1_rsa_aes_256_sha256_id');
  }
  public set tls1RsaAes256Sha256Id(value: string) {
    this._tls1RsaAes256Sha256Id = value;
  }
  public resetTls1RsaAes256Sha256Id() {
    this._tls1RsaAes256Sha256Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256Sha256IdInput() {
    return this._tls1RsaAes256Sha256Id;
  }

  // tls1_rsa_aes_256_sha256_successes - computed: false, optional: true, required: false
  private _tls1RsaAes256Sha256Successes?: number; 
  public get tls1RsaAes256Sha256Successes() {
    return this.getNumberAttribute('tls1_rsa_aes_256_sha256_successes');
  }
  public set tls1RsaAes256Sha256Successes(value: number) {
    this._tls1RsaAes256Sha256Successes = value;
  }
  public resetTls1RsaAes256Sha256Successes() {
    this._tls1RsaAes256Sha256Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256Sha256SuccessesInput() {
    return this._tls1RsaAes256Sha256Successes;
  }

  // tls1_rsa_aes_256_sha_failures - computed: false, optional: true, required: false
  private _tls1RsaAes256ShaFailures?: number; 
  public get tls1RsaAes256ShaFailures() {
    return this.getNumberAttribute('tls1_rsa_aes_256_sha_failures');
  }
  public set tls1RsaAes256ShaFailures(value: number) {
    this._tls1RsaAes256ShaFailures = value;
  }
  public resetTls1RsaAes256ShaFailures() {
    this._tls1RsaAes256ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256ShaFailuresInput() {
    return this._tls1RsaAes256ShaFailures;
  }

  // tls1_rsa_aes_256_sha_id - computed: false, optional: true, required: false
  private _tls1RsaAes256ShaId?: string; 
  public get tls1RsaAes256ShaId() {
    return this.getStringAttribute('tls1_rsa_aes_256_sha_id');
  }
  public set tls1RsaAes256ShaId(value: string) {
    this._tls1RsaAes256ShaId = value;
  }
  public resetTls1RsaAes256ShaId() {
    this._tls1RsaAes256ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256ShaIdInput() {
    return this._tls1RsaAes256ShaId;
  }

  // tls1_rsa_aes_256_sha_successes - computed: false, optional: true, required: false
  private _tls1RsaAes256ShaSuccesses?: number; 
  public get tls1RsaAes256ShaSuccesses() {
    return this.getNumberAttribute('tls1_rsa_aes_256_sha_successes');
  }
  public set tls1RsaAes256ShaSuccesses(value: number) {
    this._tls1RsaAes256ShaSuccesses = value;
  }
  public resetTls1RsaAes256ShaSuccesses() {
    this._tls1RsaAes256ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaAes256ShaSuccessesInput() {
    return this._tls1RsaAes256ShaSuccesses;
  }

  // tls1_rsa_export1024_rc4_56_md5_failures - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456Md5Failures?: number; 
  public get tls1RsaExport1024Rc456Md5Failures() {
    return this.getNumberAttribute('tls1_rsa_export1024_rc4_56_md5_failures');
  }
  public set tls1RsaExport1024Rc456Md5Failures(value: number) {
    this._tls1RsaExport1024Rc456Md5Failures = value;
  }
  public resetTls1RsaExport1024Rc456Md5Failures() {
    this._tls1RsaExport1024Rc456Md5Failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456Md5FailuresInput() {
    return this._tls1RsaExport1024Rc456Md5Failures;
  }

  // tls1_rsa_export1024_rc4_56_md5_id - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456Md5Id?: string; 
  public get tls1RsaExport1024Rc456Md5Id() {
    return this.getStringAttribute('tls1_rsa_export1024_rc4_56_md5_id');
  }
  public set tls1RsaExport1024Rc456Md5Id(value: string) {
    this._tls1RsaExport1024Rc456Md5Id = value;
  }
  public resetTls1RsaExport1024Rc456Md5Id() {
    this._tls1RsaExport1024Rc456Md5Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456Md5IdInput() {
    return this._tls1RsaExport1024Rc456Md5Id;
  }

  // tls1_rsa_export1024_rc4_56_md5_successes - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456Md5Successes?: number; 
  public get tls1RsaExport1024Rc456Md5Successes() {
    return this.getNumberAttribute('tls1_rsa_export1024_rc4_56_md5_successes');
  }
  public set tls1RsaExport1024Rc456Md5Successes(value: number) {
    this._tls1RsaExport1024Rc456Md5Successes = value;
  }
  public resetTls1RsaExport1024Rc456Md5Successes() {
    this._tls1RsaExport1024Rc456Md5Successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456Md5SuccessesInput() {
    return this._tls1RsaExport1024Rc456Md5Successes;
  }

  // tls1_rsa_export1024_rc4_56_sha_failures - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456ShaFailures?: number; 
  public get tls1RsaExport1024Rc456ShaFailures() {
    return this.getNumberAttribute('tls1_rsa_export1024_rc4_56_sha_failures');
  }
  public set tls1RsaExport1024Rc456ShaFailures(value: number) {
    this._tls1RsaExport1024Rc456ShaFailures = value;
  }
  public resetTls1RsaExport1024Rc456ShaFailures() {
    this._tls1RsaExport1024Rc456ShaFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456ShaFailuresInput() {
    return this._tls1RsaExport1024Rc456ShaFailures;
  }

  // tls1_rsa_export1024_rc4_56_sha_id - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456ShaId?: string; 
  public get tls1RsaExport1024Rc456ShaId() {
    return this.getStringAttribute('tls1_rsa_export1024_rc4_56_sha_id');
  }
  public set tls1RsaExport1024Rc456ShaId(value: string) {
    this._tls1RsaExport1024Rc456ShaId = value;
  }
  public resetTls1RsaExport1024Rc456ShaId() {
    this._tls1RsaExport1024Rc456ShaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456ShaIdInput() {
    return this._tls1RsaExport1024Rc456ShaId;
  }

  // tls1_rsa_export1024_rc4_56_sha_successes - computed: false, optional: true, required: false
  private _tls1RsaExport1024Rc456ShaSuccesses?: number; 
  public get tls1RsaExport1024Rc456ShaSuccesses() {
    return this.getNumberAttribute('tls1_rsa_export1024_rc4_56_sha_successes');
  }
  public set tls1RsaExport1024Rc456ShaSuccesses(value: number) {
    this._tls1RsaExport1024Rc456ShaSuccesses = value;
  }
  public resetTls1RsaExport1024Rc456ShaSuccesses() {
    this._tls1RsaExport1024Rc456ShaSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls1RsaExport1024Rc456ShaSuccessesInput() {
    return this._tls1RsaExport1024Rc456ShaSuccesses;
  }

  // vserver - computed: false, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper thunder_slb_server_ssl_counters_oper}
*/
export class DataThunderSlbServerSslCountersOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server_ssl_counters_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbServerSslCountersOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbServerSslCountersOper to import
  * @param importFromId The id of the existing DataThunderSlbServerSslCountersOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbServerSslCountersOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server_ssl_counters_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_server_ssl_counters_oper thunder_slb_server_ssl_counters_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbServerSslCountersOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbServerSslCountersOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server_ssl_counters_oper',
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
  private _oper = new DataThunderSlbServerSslCountersOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbServerSslCountersOperOper) {
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
      oper: dataThunderSlbServerSslCountersOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbServerSslCountersOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbServerSslCountersOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
