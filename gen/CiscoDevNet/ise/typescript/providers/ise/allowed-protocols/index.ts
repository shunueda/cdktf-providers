// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllowedProtocolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow 5G. This field is only supported from ISE 3.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_5g AllowedProtocols#allow_5g}
  */
  readonly allow5G?: boolean | cdktf.IResolvable;
  /**
  * Allow CHAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_chap AllowedProtocols#allow_chap}
  */
  readonly allowChap: boolean | cdktf.IResolvable;
  /**
  * Allow EAP Fast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_eap_fast AllowedProtocols#allow_eap_fast}
  */
  readonly allowEapFast: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MD5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_eap_md5 AllowedProtocols#allow_eap_md5}
  */
  readonly allowEapMd5: boolean | cdktf.IResolvable;
  /**
  * Allow EAP TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_eap_tls AllowedProtocols#allow_eap_tls}
  */
  readonly allowEapTls: boolean | cdktf.IResolvable;
  /**
  * Allow EAP TTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_eap_ttls AllowedProtocols#allow_eap_ttls}
  */
  readonly allowEapTtls: boolean | cdktf.IResolvable;
  /**
  * Allow LEAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_leap AllowedProtocols#allow_leap}
  */
  readonly allowLeap: boolean | cdktf.IResolvable;
  /**
  * Allow MS CHAP v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_ms_chap_v1 AllowedProtocols#allow_ms_chap_v1}
  */
  readonly allowMsChapV1: boolean | cdktf.IResolvable;
  /**
  * Allow MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_ms_chap_v2 AllowedProtocols#allow_ms_chap_v2}
  */
  readonly allowMsChapV2: boolean | cdktf.IResolvable;
  /**
  * Allow PAP ASCII
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_pap_ascii AllowedProtocols#allow_pap_ascii}
  */
  readonly allowPapAscii: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_peap AllowedProtocols#allow_peap}
  */
  readonly allowPeap: boolean | cdktf.IResolvable;
  /**
  * Allow preferred EAP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_preferred_eap_protocol AllowedProtocols#allow_preferred_eap_protocol}
  */
  readonly allowPreferredEapProtocol: boolean | cdktf.IResolvable;
  /**
  * Allow TEAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_teap AllowedProtocols#allow_teap}
  */
  readonly allowTeap: boolean | cdktf.IResolvable;
  /**
  * Allow weak ciphers for EAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#allow_weak_ciphers_for_eap AllowedProtocols#allow_weak_ciphers_for_eap}
  */
  readonly allowWeakCiphersForEap: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#description AllowedProtocols#description}
  */
  readonly description?: string;
  /**
  * Accept client certificates. Is required only if `eap_fast_use_pacs` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_accept_client_cert AllowedProtocols#eap_fast_accept_client_cert}
  */
  readonly eapFastAcceptClientCert?: boolean | cdktf.IResolvable;
  /**
  * Allow machine authentication. Is required only if `eap_fast_use_pacs` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_allow_machine_authentication AllowedProtocols#eap_fast_allow_machine_authentication}
  */
  readonly eapFastAllowMachineAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP GTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_gtc AllowedProtocols#eap_fast_eap_gtc}
  */
  readonly eapFastEapGtc?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP GTC password change. Is required only if `eap_fast_eap_gtc` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_gtc_pwd_change AllowedProtocols#eap_fast_eap_gtc_pwd_change}
  */
  readonly eapFastEapGtcPwdChange?: boolean | cdktf.IResolvable;
  /**
  * EAP GTC password change retries. Is required only if `eap_fast_eap_gtc` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_gtc_pwd_change_retries AllowedProtocols#eap_fast_eap_gtc_pwd_change_retries}
  */
  readonly eapFastEapGtcPwdChangeRetries?: number;
  /**
  * Allow EAP MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_ms_chap_v2 AllowedProtocols#eap_fast_eap_ms_chap_v2}
  */
  readonly eapFastEapMsChapV2?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MS CHAP v2 password change. Is required only if `eap_fast_eap_ms_chap_v2` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_ms_chap_v2_pwd_change AllowedProtocols#eap_fast_eap_ms_chap_v2_pwd_change}
  */
  readonly eapFastEapMsChapV2PwdChange?: boolean | cdktf.IResolvable;
  /**
  * EAP MS CHAP v2 password change retries. Is required only if `eap_fast_eap_ms_chap_v2` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_ms_chap_v2_pwd_change_retries AllowedProtocols#eap_fast_eap_ms_chap_v2_pwd_change_retries}
  */
  readonly eapFastEapMsChapV2PwdChangeRetries?: number;
  /**
  * Allow EAP TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_tls AllowedProtocols#eap_fast_eap_tls}
  */
  readonly eapFastEapTls?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP TLS authentication of expired certificates. Is required only if `eap_fast_eap_tls` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_eap_tls_auth_of_expired_certs AllowedProtocols#eap_fast_eap_tls_auth_of_expired_certs}
  */
  readonly eapFastEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable;
  /**
  * Enable EAP chaining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_enable_eap_chaining AllowedProtocols#eap_fast_enable_eap_chaining}
  */
  readonly eapFastEnableEapChaining?: boolean | cdktf.IResolvable;
  /**
  * Allow anonymous provisioning. Is required only if `eap_fast_use_pacs` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_allow_anonymous_provisioning AllowedProtocols#eap_fast_pacs_allow_anonymous_provisioning}
  */
  readonly eapFastPacsAllowAnonymousProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Allow authenticated provisioning. Is required only if `eap_fast_use_pacs` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_allow_authenticated_provisioning AllowedProtocols#eap_fast_pacs_allow_authenticated_provisioning}
  */
  readonly eapFastPacsAllowAuthenticatedProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Accept client certification for provisioning. Is required only if `eap_fast_pacs_allow_authenticated_provisioning` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_allow_client_cert AllowedProtocols#eap_fast_pacs_allow_client_cert}
  */
  readonly eapFastPacsAllowClientCert?: boolean | cdktf.IResolvable;
  /**
  * Allow machine authentication. Is required only if `eap_fast_use_pacs` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_allow_machine_authentication AllowedProtocols#eap_fast_pacs_allow_machine_authentication}
  */
  readonly eapFastPacsAllowMachineAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Authorization PAC TTL. Is required only if `eap_fast_pacs_stateless_session_resume` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_authorization_pac_ttl AllowedProtocols#eap_fast_pacs_authorization_pac_ttl}
  */
  readonly eapFastPacsAuthorizationPacTtl?: number;
  /**
  * Authorization PAC TTL unit. Is required only if `eap_fast_pacs_stateless_session_resume` is `true`.
  *   - Choices: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `WEEKS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_authorization_pac_ttl_unit AllowedProtocols#eap_fast_pacs_authorization_pac_ttl_unit}
  */
  readonly eapFastPacsAuthorizationPacTtlUnit?: string;
  /**
  * Machine PAC TTL. Is required only if `eap_fast_pacs_allow_machine_authentication` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_machine_pac_ttl AllowedProtocols#eap_fast_pacs_machine_pac_ttl}
  */
  readonly eapFastPacsMachinePacTtl?: number;
  /**
  * Machine PAC TTL unit. Is required only if `eap_fast_pacs_allow_machine_authentication` is `true`.
  *   - Choices: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `WEEKS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_machine_pac_ttl_unit AllowedProtocols#eap_fast_pacs_machine_pac_ttl_unit}
  */
  readonly eapFastPacsMachinePacTtlUnit?: string;
  /**
  * Server returns access accept after authenticated provisioning. Is required only if `eap_fast_pacs_allow_authenticated_provisioning` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_server_returns AllowedProtocols#eap_fast_pacs_server_returns}
  */
  readonly eapFastPacsServerReturns?: boolean | cdktf.IResolvable;
  /**
  * Stateless session resume. Is required only if `eap_fast_use_pacs` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_stateless_session_resume AllowedProtocols#eap_fast_pacs_stateless_session_resume}
  */
  readonly eapFastPacsStatelessSessionResume?: boolean | cdktf.IResolvable;
  /**
  * PACs tunnel PAC time to live. Is required only if `eap_fast_use_pacs` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_tunnel_pac_ttl AllowedProtocols#eap_fast_pacs_tunnel_pac_ttl}
  */
  readonly eapFastPacsTunnelPacTtl?: number;
  /**
  * PACs tunnel PAC time to live unit. Is required only if `eap_fast_use_pacs` is `true`.
  *   - Choices: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `WEEKS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_tunnel_pac_ttl_unit AllowedProtocols#eap_fast_pacs_tunnel_pac_ttl_unit}
  */
  readonly eapFastPacsTunnelPacTtlUnit?: string;
  /**
  * Use proactive pac update percentage. Is required only if `eap_fast_use_pacs` is `true`.
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_pacs_use_proactive_pac_update_percentage AllowedProtocols#eap_fast_pacs_use_proactive_pac_update_percentage}
  */
  readonly eapFastPacsUseProactivePacUpdatePercentage?: number;
  /**
  * Use PACs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_fast_use_pacs AllowedProtocols#eap_fast_use_pacs}
  */
  readonly eapFastUsePacs?: boolean | cdktf.IResolvable;
  /**
  * Allow authentication of expired certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_allow_auth_of_expired_certs AllowedProtocols#eap_tls_allow_auth_of_expired_certs}
  */
  readonly eapTlsAllowAuthOfExpiredCerts?: boolean | cdktf.IResolvable;
  /**
  * Enable stateless session resume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_enable_stateless_session_resume AllowedProtocols#eap_tls_enable_stateless_session_resume}
  */
  readonly eapTlsEnableStatelessSessionResume?: boolean | cdktf.IResolvable;
  /**
  * EAP TLS L-Bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_l_bit AllowedProtocols#eap_tls_l_bit}
  */
  readonly eapTlsLBit: boolean | cdktf.IResolvable;
  /**
  * Session ticket percentage. Is required only if `eap_tls_enable_stateless_session_resume` is `true`.
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_session_ticket_percentage AllowedProtocols#eap_tls_session_ticket_percentage}
  */
  readonly eapTlsSessionTicketPercentage?: number;
  /**
  * Session ticket TTL. Is required only if `eap_tls_enable_stateless_session_resume` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_session_ticket_ttl AllowedProtocols#eap_tls_session_ticket_ttl}
  */
  readonly eapTlsSessionTicketTtl?: number;
  /**
  * Session ticket TTL unit. Is required only if `eap_tls_enable_stateless_session_resume` is `true`.
  *   - Choices: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `WEEKS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_tls_session_ticket_ttl_unit AllowedProtocols#eap_tls_session_ticket_ttl_unit}
  */
  readonly eapTlsSessionTicketTtlUnit?: string;
  /**
  * Allow CHAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_chap AllowedProtocols#eap_ttls_chap}
  */
  readonly eapTtlsChap?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MD5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_eap_md5 AllowedProtocols#eap_ttls_eap_md5}
  */
  readonly eapTtlsEapMd5?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_eap_ms_chap_v2 AllowedProtocols#eap_ttls_eap_ms_chap_v2}
  */
  readonly eapTtlsEapMsChapV2?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MS CHAP v2 password change. Is required only if `eap_ttls_eap_ms_chap_v2` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_eap_ms_chap_v2_pwd_change AllowedProtocols#eap_ttls_eap_ms_chap_v2_pwd_change}
  */
  readonly eapTtlsEapMsChapV2PwdChange?: boolean | cdktf.IResolvable;
  /**
  * EAP MS CHAP v2 password change retries. Is required only if `eap_ttls_eap_ms_chap_v2` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_eap_ms_chap_v2_pwd_change_retries AllowedProtocols#eap_ttls_eap_ms_chap_v2_pwd_change_retries}
  */
  readonly eapTtlsEapMsChapV2PwdChangeRetries?: number;
  /**
  * Allow MS CHAP v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_ms_chap_v1 AllowedProtocols#eap_ttls_ms_chap_v1}
  */
  readonly eapTtlsMsChapV1?: boolean | cdktf.IResolvable;
  /**
  * Allow MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_ms_chap_v2 AllowedProtocols#eap_ttls_ms_chap_v2}
  */
  readonly eapTtlsMsChapV2?: boolean | cdktf.IResolvable;
  /**
  * Allow PAP ASCII
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#eap_ttls_pap_ascii AllowedProtocols#eap_ttls_pap_ascii}
  */
  readonly eapTtlsPapAscii?: boolean | cdktf.IResolvable;
  /**
  * The name of the allowed protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#name AllowedProtocols#name}
  */
  readonly name: string;
  /**
  * Allow PEAP EAP GTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_gtc AllowedProtocols#peap_allow_peap_eap_gtc}
  */
  readonly peapAllowPeapEapGtc?: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP EAP GTC password change. Is required only if `allow_peap_eap_gtc` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_gtc_pwd_change AllowedProtocols#peap_allow_peap_eap_gtc_pwd_change}
  */
  readonly peapAllowPeapEapGtcPwdChange?: boolean | cdktf.IResolvable;
  /**
  * PEAP EAP GTC password change retries. Is required only if `allow_peap_eap_gtc` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_gtc_pwd_change_retries AllowedProtocols#peap_allow_peap_eap_gtc_pwd_change_retries}
  */
  readonly peapAllowPeapEapGtcPwdChangeRetries?: number;
  /**
  * Allow PEAP EAP MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_ms_chap_v2 AllowedProtocols#peap_allow_peap_eap_ms_chap_v2}
  */
  readonly peapAllowPeapEapMsChapV2?: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP EAP MS CHAP v2 password change. Is required only if `allow_peap_eap_ms_chap_v2` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_ms_chap_v2_pwd_change AllowedProtocols#peap_allow_peap_eap_ms_chap_v2_pwd_change}
  */
  readonly peapAllowPeapEapMsChapV2PwdChange?: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP EAP MS CHAP v2 password change retries. Is required only if `allow_peap_eap_ms_chap_v2` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_ms_chap_v2_pwd_change_retries AllowedProtocols#peap_allow_peap_eap_ms_chap_v2_pwd_change_retries}
  */
  readonly peapAllowPeapEapMsChapV2PwdChangeRetries?: number;
  /**
  * Allow PEAP EAP TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_tls AllowedProtocols#peap_allow_peap_eap_tls}
  */
  readonly peapAllowPeapEapTls?: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP EAP TLS authentication of expired certificates. Is required only if `peap_allow_peap_eap_tls` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_allow_peap_eap_tls_auth_of_expired_certs AllowedProtocols#peap_allow_peap_eap_tls_auth_of_expired_certs}
  */
  readonly peapAllowPeapEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable;
  /**
  * Allow PEAP v0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#peap_peap_v0 AllowedProtocols#peap_peap_v0}
  */
  readonly peapPeapV0?: boolean | cdktf.IResolvable;
  /**
  * Preferred EAP protocol
  *   - Choices: `EAP_FAST`, `PEAP`, `LEAP`, `EAP_MD5`, `EAP_TLS`, `EAP_TTLS`, `TEAP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#preferred_eap_protocol AllowedProtocols#preferred_eap_protocol}
  */
  readonly preferredEapProtocol?: string;
  /**
  * Process host lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#process_host_lookup AllowedProtocols#process_host_lookup}
  */
  readonly processHostLookup: boolean | cdktf.IResolvable;
  /**
  * Require cryptobinding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#require_cryptobinding AllowedProtocols#require_cryptobinding}
  */
  readonly requireCryptobinding?: boolean | cdktf.IResolvable;
  /**
  * Require message authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#require_message_auth AllowedProtocols#require_message_auth}
  */
  readonly requireMessageAuth: boolean | cdktf.IResolvable;
  /**
  * Allow downgrade to MSK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_downgrade_msk AllowedProtocols#teap_downgrade_msk}
  */
  readonly teapDowngradeMsk?: boolean | cdktf.IResolvable;
  /**
  * Accept client certificate during tunnel establishment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_accept_client_cert_during_tunnel_est AllowedProtocols#teap_eap_accept_client_cert_during_tunnel_est}
  */
  readonly teapEapAcceptClientCertDuringTunnelEst?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP chaining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_chaining AllowedProtocols#teap_eap_chaining}
  */
  readonly teapEapChaining?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MS CHAP v2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_ms_chap_v2 AllowedProtocols#teap_eap_ms_chap_v2}
  */
  readonly teapEapMsChapV2?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP MS CHAP v2 password change. Is required only if `teap_eap_ms_chap_v2` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_ms_chap_v2_pwd_change AllowedProtocols#teap_eap_ms_chap_v2_pwd_change}
  */
  readonly teapEapMsChapV2PwdChange?: boolean | cdktf.IResolvable;
  /**
  * EAP MS CHAP v2 password change retries. Is required only if `teap_eap_ms_chap_v2` is `true`.
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_ms_chap_v2_pwd_change_retries AllowedProtocols#teap_eap_ms_chap_v2_pwd_change_retries}
  */
  readonly teapEapMsChapV2PwdChangeRetries?: number;
  /**
  * Allow EAP TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_tls AllowedProtocols#teap_eap_tls}
  */
  readonly teapEapTls?: boolean | cdktf.IResolvable;
  /**
  * Allow EAP TLS authentication of expired certs. Is required only if `teap_eap_tls` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_eap_tls_auth_of_expired_certs AllowedProtocols#teap_eap_tls_auth_of_expired_certs}
  */
  readonly teapEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable;
  /**
  * Request basic password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#teap_request_basic_pwd_auth AllowedProtocols#teap_request_basic_pwd_auth}
  */
  readonly teapRequestBasicPwdAuth?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols ise_allowed_protocols}
*/
export class AllowedProtocols extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_allowed_protocols";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllowedProtocols resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllowedProtocols to import
  * @param importFromId The id of the existing AllowedProtocols that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllowedProtocols to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_allowed_protocols", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/allowed_protocols ise_allowed_protocols} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllowedProtocolsConfig
  */
  public constructor(scope: Construct, id: string, config: AllowedProtocolsConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_allowed_protocols',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allow5G = config.allow5G;
    this._allowChap = config.allowChap;
    this._allowEapFast = config.allowEapFast;
    this._allowEapMd5 = config.allowEapMd5;
    this._allowEapTls = config.allowEapTls;
    this._allowEapTtls = config.allowEapTtls;
    this._allowLeap = config.allowLeap;
    this._allowMsChapV1 = config.allowMsChapV1;
    this._allowMsChapV2 = config.allowMsChapV2;
    this._allowPapAscii = config.allowPapAscii;
    this._allowPeap = config.allowPeap;
    this._allowPreferredEapProtocol = config.allowPreferredEapProtocol;
    this._allowTeap = config.allowTeap;
    this._allowWeakCiphersForEap = config.allowWeakCiphersForEap;
    this._description = config.description;
    this._eapFastAcceptClientCert = config.eapFastAcceptClientCert;
    this._eapFastAllowMachineAuthentication = config.eapFastAllowMachineAuthentication;
    this._eapFastEapGtc = config.eapFastEapGtc;
    this._eapFastEapGtcPwdChange = config.eapFastEapGtcPwdChange;
    this._eapFastEapGtcPwdChangeRetries = config.eapFastEapGtcPwdChangeRetries;
    this._eapFastEapMsChapV2 = config.eapFastEapMsChapV2;
    this._eapFastEapMsChapV2PwdChange = config.eapFastEapMsChapV2PwdChange;
    this._eapFastEapMsChapV2PwdChangeRetries = config.eapFastEapMsChapV2PwdChangeRetries;
    this._eapFastEapTls = config.eapFastEapTls;
    this._eapFastEapTlsAuthOfExpiredCerts = config.eapFastEapTlsAuthOfExpiredCerts;
    this._eapFastEnableEapChaining = config.eapFastEnableEapChaining;
    this._eapFastPacsAllowAnonymousProvisioning = config.eapFastPacsAllowAnonymousProvisioning;
    this._eapFastPacsAllowAuthenticatedProvisioning = config.eapFastPacsAllowAuthenticatedProvisioning;
    this._eapFastPacsAllowClientCert = config.eapFastPacsAllowClientCert;
    this._eapFastPacsAllowMachineAuthentication = config.eapFastPacsAllowMachineAuthentication;
    this._eapFastPacsAuthorizationPacTtl = config.eapFastPacsAuthorizationPacTtl;
    this._eapFastPacsAuthorizationPacTtlUnit = config.eapFastPacsAuthorizationPacTtlUnit;
    this._eapFastPacsMachinePacTtl = config.eapFastPacsMachinePacTtl;
    this._eapFastPacsMachinePacTtlUnit = config.eapFastPacsMachinePacTtlUnit;
    this._eapFastPacsServerReturns = config.eapFastPacsServerReturns;
    this._eapFastPacsStatelessSessionResume = config.eapFastPacsStatelessSessionResume;
    this._eapFastPacsTunnelPacTtl = config.eapFastPacsTunnelPacTtl;
    this._eapFastPacsTunnelPacTtlUnit = config.eapFastPacsTunnelPacTtlUnit;
    this._eapFastPacsUseProactivePacUpdatePercentage = config.eapFastPacsUseProactivePacUpdatePercentage;
    this._eapFastUsePacs = config.eapFastUsePacs;
    this._eapTlsAllowAuthOfExpiredCerts = config.eapTlsAllowAuthOfExpiredCerts;
    this._eapTlsEnableStatelessSessionResume = config.eapTlsEnableStatelessSessionResume;
    this._eapTlsLBit = config.eapTlsLBit;
    this._eapTlsSessionTicketPercentage = config.eapTlsSessionTicketPercentage;
    this._eapTlsSessionTicketTtl = config.eapTlsSessionTicketTtl;
    this._eapTlsSessionTicketTtlUnit = config.eapTlsSessionTicketTtlUnit;
    this._eapTtlsChap = config.eapTtlsChap;
    this._eapTtlsEapMd5 = config.eapTtlsEapMd5;
    this._eapTtlsEapMsChapV2 = config.eapTtlsEapMsChapV2;
    this._eapTtlsEapMsChapV2PwdChange = config.eapTtlsEapMsChapV2PwdChange;
    this._eapTtlsEapMsChapV2PwdChangeRetries = config.eapTtlsEapMsChapV2PwdChangeRetries;
    this._eapTtlsMsChapV1 = config.eapTtlsMsChapV1;
    this._eapTtlsMsChapV2 = config.eapTtlsMsChapV2;
    this._eapTtlsPapAscii = config.eapTtlsPapAscii;
    this._name = config.name;
    this._peapAllowPeapEapGtc = config.peapAllowPeapEapGtc;
    this._peapAllowPeapEapGtcPwdChange = config.peapAllowPeapEapGtcPwdChange;
    this._peapAllowPeapEapGtcPwdChangeRetries = config.peapAllowPeapEapGtcPwdChangeRetries;
    this._peapAllowPeapEapMsChapV2 = config.peapAllowPeapEapMsChapV2;
    this._peapAllowPeapEapMsChapV2PwdChange = config.peapAllowPeapEapMsChapV2PwdChange;
    this._peapAllowPeapEapMsChapV2PwdChangeRetries = config.peapAllowPeapEapMsChapV2PwdChangeRetries;
    this._peapAllowPeapEapTls = config.peapAllowPeapEapTls;
    this._peapAllowPeapEapTlsAuthOfExpiredCerts = config.peapAllowPeapEapTlsAuthOfExpiredCerts;
    this._peapPeapV0 = config.peapPeapV0;
    this._preferredEapProtocol = config.preferredEapProtocol;
    this._processHostLookup = config.processHostLookup;
    this._requireCryptobinding = config.requireCryptobinding;
    this._requireMessageAuth = config.requireMessageAuth;
    this._teapDowngradeMsk = config.teapDowngradeMsk;
    this._teapEapAcceptClientCertDuringTunnelEst = config.teapEapAcceptClientCertDuringTunnelEst;
    this._teapEapChaining = config.teapEapChaining;
    this._teapEapMsChapV2 = config.teapEapMsChapV2;
    this._teapEapMsChapV2PwdChange = config.teapEapMsChapV2PwdChange;
    this._teapEapMsChapV2PwdChangeRetries = config.teapEapMsChapV2PwdChangeRetries;
    this._teapEapTls = config.teapEapTls;
    this._teapEapTlsAuthOfExpiredCerts = config.teapEapTlsAuthOfExpiredCerts;
    this._teapRequestBasicPwdAuth = config.teapRequestBasicPwdAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_5g - computed: false, optional: true, required: false
  private _allow5G?: boolean | cdktf.IResolvable; 
  public get allow5G() {
    return this.getBooleanAttribute('allow_5g');
  }
  public set allow5G(value: boolean | cdktf.IResolvable) {
    this._allow5G = value;
  }
  public resetAllow5G() {
    this._allow5G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allow5GInput() {
    return this._allow5G;
  }

  // allow_chap - computed: false, optional: false, required: true
  private _allowChap?: boolean | cdktf.IResolvable; 
  public get allowChap() {
    return this.getBooleanAttribute('allow_chap');
  }
  public set allowChap(value: boolean | cdktf.IResolvable) {
    this._allowChap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChapInput() {
    return this._allowChap;
  }

  // allow_eap_fast - computed: false, optional: false, required: true
  private _allowEapFast?: boolean | cdktf.IResolvable; 
  public get allowEapFast() {
    return this.getBooleanAttribute('allow_eap_fast');
  }
  public set allowEapFast(value: boolean | cdktf.IResolvable) {
    this._allowEapFast = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEapFastInput() {
    return this._allowEapFast;
  }

  // allow_eap_md5 - computed: false, optional: false, required: true
  private _allowEapMd5?: boolean | cdktf.IResolvable; 
  public get allowEapMd5() {
    return this.getBooleanAttribute('allow_eap_md5');
  }
  public set allowEapMd5(value: boolean | cdktf.IResolvable) {
    this._allowEapMd5 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEapMd5Input() {
    return this._allowEapMd5;
  }

  // allow_eap_tls - computed: false, optional: false, required: true
  private _allowEapTls?: boolean | cdktf.IResolvable; 
  public get allowEapTls() {
    return this.getBooleanAttribute('allow_eap_tls');
  }
  public set allowEapTls(value: boolean | cdktf.IResolvable) {
    this._allowEapTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEapTlsInput() {
    return this._allowEapTls;
  }

  // allow_eap_ttls - computed: false, optional: false, required: true
  private _allowEapTtls?: boolean | cdktf.IResolvable; 
  public get allowEapTtls() {
    return this.getBooleanAttribute('allow_eap_ttls');
  }
  public set allowEapTtls(value: boolean | cdktf.IResolvable) {
    this._allowEapTtls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEapTtlsInput() {
    return this._allowEapTtls;
  }

  // allow_leap - computed: false, optional: false, required: true
  private _allowLeap?: boolean | cdktf.IResolvable; 
  public get allowLeap() {
    return this.getBooleanAttribute('allow_leap');
  }
  public set allowLeap(value: boolean | cdktf.IResolvable) {
    this._allowLeap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLeapInput() {
    return this._allowLeap;
  }

  // allow_ms_chap_v1 - computed: false, optional: false, required: true
  private _allowMsChapV1?: boolean | cdktf.IResolvable; 
  public get allowMsChapV1() {
    return this.getBooleanAttribute('allow_ms_chap_v1');
  }
  public set allowMsChapV1(value: boolean | cdktf.IResolvable) {
    this._allowMsChapV1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMsChapV1Input() {
    return this._allowMsChapV1;
  }

  // allow_ms_chap_v2 - computed: false, optional: false, required: true
  private _allowMsChapV2?: boolean | cdktf.IResolvable; 
  public get allowMsChapV2() {
    return this.getBooleanAttribute('allow_ms_chap_v2');
  }
  public set allowMsChapV2(value: boolean | cdktf.IResolvable) {
    this._allowMsChapV2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMsChapV2Input() {
    return this._allowMsChapV2;
  }

  // allow_pap_ascii - computed: false, optional: false, required: true
  private _allowPapAscii?: boolean | cdktf.IResolvable; 
  public get allowPapAscii() {
    return this.getBooleanAttribute('allow_pap_ascii');
  }
  public set allowPapAscii(value: boolean | cdktf.IResolvable) {
    this._allowPapAscii = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPapAsciiInput() {
    return this._allowPapAscii;
  }

  // allow_peap - computed: false, optional: false, required: true
  private _allowPeap?: boolean | cdktf.IResolvable; 
  public get allowPeap() {
    return this.getBooleanAttribute('allow_peap');
  }
  public set allowPeap(value: boolean | cdktf.IResolvable) {
    this._allowPeap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPeapInput() {
    return this._allowPeap;
  }

  // allow_preferred_eap_protocol - computed: false, optional: false, required: true
  private _allowPreferredEapProtocol?: boolean | cdktf.IResolvable; 
  public get allowPreferredEapProtocol() {
    return this.getBooleanAttribute('allow_preferred_eap_protocol');
  }
  public set allowPreferredEapProtocol(value: boolean | cdktf.IResolvable) {
    this._allowPreferredEapProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPreferredEapProtocolInput() {
    return this._allowPreferredEapProtocol;
  }

  // allow_teap - computed: false, optional: false, required: true
  private _allowTeap?: boolean | cdktf.IResolvable; 
  public get allowTeap() {
    return this.getBooleanAttribute('allow_teap');
  }
  public set allowTeap(value: boolean | cdktf.IResolvable) {
    this._allowTeap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTeapInput() {
    return this._allowTeap;
  }

  // allow_weak_ciphers_for_eap - computed: false, optional: false, required: true
  private _allowWeakCiphersForEap?: boolean | cdktf.IResolvable; 
  public get allowWeakCiphersForEap() {
    return this.getBooleanAttribute('allow_weak_ciphers_for_eap');
  }
  public set allowWeakCiphersForEap(value: boolean | cdktf.IResolvable) {
    this._allowWeakCiphersForEap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWeakCiphersForEapInput() {
    return this._allowWeakCiphersForEap;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // eap_fast_accept_client_cert - computed: false, optional: true, required: false
  private _eapFastAcceptClientCert?: boolean | cdktf.IResolvable; 
  public get eapFastAcceptClientCert() {
    return this.getBooleanAttribute('eap_fast_accept_client_cert');
  }
  public set eapFastAcceptClientCert(value: boolean | cdktf.IResolvable) {
    this._eapFastAcceptClientCert = value;
  }
  public resetEapFastAcceptClientCert() {
    this._eapFastAcceptClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastAcceptClientCertInput() {
    return this._eapFastAcceptClientCert;
  }

  // eap_fast_allow_machine_authentication - computed: false, optional: true, required: false
  private _eapFastAllowMachineAuthentication?: boolean | cdktf.IResolvable; 
  public get eapFastAllowMachineAuthentication() {
    return this.getBooleanAttribute('eap_fast_allow_machine_authentication');
  }
  public set eapFastAllowMachineAuthentication(value: boolean | cdktf.IResolvable) {
    this._eapFastAllowMachineAuthentication = value;
  }
  public resetEapFastAllowMachineAuthentication() {
    this._eapFastAllowMachineAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastAllowMachineAuthenticationInput() {
    return this._eapFastAllowMachineAuthentication;
  }

  // eap_fast_eap_gtc - computed: false, optional: true, required: false
  private _eapFastEapGtc?: boolean | cdktf.IResolvable; 
  public get eapFastEapGtc() {
    return this.getBooleanAttribute('eap_fast_eap_gtc');
  }
  public set eapFastEapGtc(value: boolean | cdktf.IResolvable) {
    this._eapFastEapGtc = value;
  }
  public resetEapFastEapGtc() {
    this._eapFastEapGtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapGtcInput() {
    return this._eapFastEapGtc;
  }

  // eap_fast_eap_gtc_pwd_change - computed: false, optional: true, required: false
  private _eapFastEapGtcPwdChange?: boolean | cdktf.IResolvable; 
  public get eapFastEapGtcPwdChange() {
    return this.getBooleanAttribute('eap_fast_eap_gtc_pwd_change');
  }
  public set eapFastEapGtcPwdChange(value: boolean | cdktf.IResolvable) {
    this._eapFastEapGtcPwdChange = value;
  }
  public resetEapFastEapGtcPwdChange() {
    this._eapFastEapGtcPwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapGtcPwdChangeInput() {
    return this._eapFastEapGtcPwdChange;
  }

  // eap_fast_eap_gtc_pwd_change_retries - computed: false, optional: true, required: false
  private _eapFastEapGtcPwdChangeRetries?: number; 
  public get eapFastEapGtcPwdChangeRetries() {
    return this.getNumberAttribute('eap_fast_eap_gtc_pwd_change_retries');
  }
  public set eapFastEapGtcPwdChangeRetries(value: number) {
    this._eapFastEapGtcPwdChangeRetries = value;
  }
  public resetEapFastEapGtcPwdChangeRetries() {
    this._eapFastEapGtcPwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapGtcPwdChangeRetriesInput() {
    return this._eapFastEapGtcPwdChangeRetries;
  }

  // eap_fast_eap_ms_chap_v2 - computed: false, optional: true, required: false
  private _eapFastEapMsChapV2?: boolean | cdktf.IResolvable; 
  public get eapFastEapMsChapV2() {
    return this.getBooleanAttribute('eap_fast_eap_ms_chap_v2');
  }
  public set eapFastEapMsChapV2(value: boolean | cdktf.IResolvable) {
    this._eapFastEapMsChapV2 = value;
  }
  public resetEapFastEapMsChapV2() {
    this._eapFastEapMsChapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapMsChapV2Input() {
    return this._eapFastEapMsChapV2;
  }

  // eap_fast_eap_ms_chap_v2_pwd_change - computed: false, optional: true, required: false
  private _eapFastEapMsChapV2PwdChange?: boolean | cdktf.IResolvable; 
  public get eapFastEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('eap_fast_eap_ms_chap_v2_pwd_change');
  }
  public set eapFastEapMsChapV2PwdChange(value: boolean | cdktf.IResolvable) {
    this._eapFastEapMsChapV2PwdChange = value;
  }
  public resetEapFastEapMsChapV2PwdChange() {
    this._eapFastEapMsChapV2PwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapMsChapV2PwdChangeInput() {
    return this._eapFastEapMsChapV2PwdChange;
  }

  // eap_fast_eap_ms_chap_v2_pwd_change_retries - computed: false, optional: true, required: false
  private _eapFastEapMsChapV2PwdChangeRetries?: number; 
  public get eapFastEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('eap_fast_eap_ms_chap_v2_pwd_change_retries');
  }
  public set eapFastEapMsChapV2PwdChangeRetries(value: number) {
    this._eapFastEapMsChapV2PwdChangeRetries = value;
  }
  public resetEapFastEapMsChapV2PwdChangeRetries() {
    this._eapFastEapMsChapV2PwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapMsChapV2PwdChangeRetriesInput() {
    return this._eapFastEapMsChapV2PwdChangeRetries;
  }

  // eap_fast_eap_tls - computed: false, optional: true, required: false
  private _eapFastEapTls?: boolean | cdktf.IResolvable; 
  public get eapFastEapTls() {
    return this.getBooleanAttribute('eap_fast_eap_tls');
  }
  public set eapFastEapTls(value: boolean | cdktf.IResolvable) {
    this._eapFastEapTls = value;
  }
  public resetEapFastEapTls() {
    this._eapFastEapTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapTlsInput() {
    return this._eapFastEapTls;
  }

  // eap_fast_eap_tls_auth_of_expired_certs - computed: false, optional: true, required: false
  private _eapFastEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable; 
  public get eapFastEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('eap_fast_eap_tls_auth_of_expired_certs');
  }
  public set eapFastEapTlsAuthOfExpiredCerts(value: boolean | cdktf.IResolvable) {
    this._eapFastEapTlsAuthOfExpiredCerts = value;
  }
  public resetEapFastEapTlsAuthOfExpiredCerts() {
    this._eapFastEapTlsAuthOfExpiredCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEapTlsAuthOfExpiredCertsInput() {
    return this._eapFastEapTlsAuthOfExpiredCerts;
  }

  // eap_fast_enable_eap_chaining - computed: false, optional: true, required: false
  private _eapFastEnableEapChaining?: boolean | cdktf.IResolvable; 
  public get eapFastEnableEapChaining() {
    return this.getBooleanAttribute('eap_fast_enable_eap_chaining');
  }
  public set eapFastEnableEapChaining(value: boolean | cdktf.IResolvable) {
    this._eapFastEnableEapChaining = value;
  }
  public resetEapFastEnableEapChaining() {
    this._eapFastEnableEapChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastEnableEapChainingInput() {
    return this._eapFastEnableEapChaining;
  }

  // eap_fast_pacs_allow_anonymous_provisioning - computed: false, optional: true, required: false
  private _eapFastPacsAllowAnonymousProvisioning?: boolean | cdktf.IResolvable; 
  public get eapFastPacsAllowAnonymousProvisioning() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_anonymous_provisioning');
  }
  public set eapFastPacsAllowAnonymousProvisioning(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsAllowAnonymousProvisioning = value;
  }
  public resetEapFastPacsAllowAnonymousProvisioning() {
    this._eapFastPacsAllowAnonymousProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAllowAnonymousProvisioningInput() {
    return this._eapFastPacsAllowAnonymousProvisioning;
  }

  // eap_fast_pacs_allow_authenticated_provisioning - computed: false, optional: true, required: false
  private _eapFastPacsAllowAuthenticatedProvisioning?: boolean | cdktf.IResolvable; 
  public get eapFastPacsAllowAuthenticatedProvisioning() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_authenticated_provisioning');
  }
  public set eapFastPacsAllowAuthenticatedProvisioning(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsAllowAuthenticatedProvisioning = value;
  }
  public resetEapFastPacsAllowAuthenticatedProvisioning() {
    this._eapFastPacsAllowAuthenticatedProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAllowAuthenticatedProvisioningInput() {
    return this._eapFastPacsAllowAuthenticatedProvisioning;
  }

  // eap_fast_pacs_allow_client_cert - computed: false, optional: true, required: false
  private _eapFastPacsAllowClientCert?: boolean | cdktf.IResolvable; 
  public get eapFastPacsAllowClientCert() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_client_cert');
  }
  public set eapFastPacsAllowClientCert(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsAllowClientCert = value;
  }
  public resetEapFastPacsAllowClientCert() {
    this._eapFastPacsAllowClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAllowClientCertInput() {
    return this._eapFastPacsAllowClientCert;
  }

  // eap_fast_pacs_allow_machine_authentication - computed: false, optional: true, required: false
  private _eapFastPacsAllowMachineAuthentication?: boolean | cdktf.IResolvable; 
  public get eapFastPacsAllowMachineAuthentication() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_machine_authentication');
  }
  public set eapFastPacsAllowMachineAuthentication(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsAllowMachineAuthentication = value;
  }
  public resetEapFastPacsAllowMachineAuthentication() {
    this._eapFastPacsAllowMachineAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAllowMachineAuthenticationInput() {
    return this._eapFastPacsAllowMachineAuthentication;
  }

  // eap_fast_pacs_authorization_pac_ttl - computed: false, optional: true, required: false
  private _eapFastPacsAuthorizationPacTtl?: number; 
  public get eapFastPacsAuthorizationPacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_authorization_pac_ttl');
  }
  public set eapFastPacsAuthorizationPacTtl(value: number) {
    this._eapFastPacsAuthorizationPacTtl = value;
  }
  public resetEapFastPacsAuthorizationPacTtl() {
    this._eapFastPacsAuthorizationPacTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAuthorizationPacTtlInput() {
    return this._eapFastPacsAuthorizationPacTtl;
  }

  // eap_fast_pacs_authorization_pac_ttl_unit - computed: false, optional: true, required: false
  private _eapFastPacsAuthorizationPacTtlUnit?: string; 
  public get eapFastPacsAuthorizationPacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_authorization_pac_ttl_unit');
  }
  public set eapFastPacsAuthorizationPacTtlUnit(value: string) {
    this._eapFastPacsAuthorizationPacTtlUnit = value;
  }
  public resetEapFastPacsAuthorizationPacTtlUnit() {
    this._eapFastPacsAuthorizationPacTtlUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsAuthorizationPacTtlUnitInput() {
    return this._eapFastPacsAuthorizationPacTtlUnit;
  }

  // eap_fast_pacs_machine_pac_ttl - computed: false, optional: true, required: false
  private _eapFastPacsMachinePacTtl?: number; 
  public get eapFastPacsMachinePacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_machine_pac_ttl');
  }
  public set eapFastPacsMachinePacTtl(value: number) {
    this._eapFastPacsMachinePacTtl = value;
  }
  public resetEapFastPacsMachinePacTtl() {
    this._eapFastPacsMachinePacTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsMachinePacTtlInput() {
    return this._eapFastPacsMachinePacTtl;
  }

  // eap_fast_pacs_machine_pac_ttl_unit - computed: false, optional: true, required: false
  private _eapFastPacsMachinePacTtlUnit?: string; 
  public get eapFastPacsMachinePacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_machine_pac_ttl_unit');
  }
  public set eapFastPacsMachinePacTtlUnit(value: string) {
    this._eapFastPacsMachinePacTtlUnit = value;
  }
  public resetEapFastPacsMachinePacTtlUnit() {
    this._eapFastPacsMachinePacTtlUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsMachinePacTtlUnitInput() {
    return this._eapFastPacsMachinePacTtlUnit;
  }

  // eap_fast_pacs_server_returns - computed: false, optional: true, required: false
  private _eapFastPacsServerReturns?: boolean | cdktf.IResolvable; 
  public get eapFastPacsServerReturns() {
    return this.getBooleanAttribute('eap_fast_pacs_server_returns');
  }
  public set eapFastPacsServerReturns(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsServerReturns = value;
  }
  public resetEapFastPacsServerReturns() {
    this._eapFastPacsServerReturns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsServerReturnsInput() {
    return this._eapFastPacsServerReturns;
  }

  // eap_fast_pacs_stateless_session_resume - computed: false, optional: true, required: false
  private _eapFastPacsStatelessSessionResume?: boolean | cdktf.IResolvable; 
  public get eapFastPacsStatelessSessionResume() {
    return this.getBooleanAttribute('eap_fast_pacs_stateless_session_resume');
  }
  public set eapFastPacsStatelessSessionResume(value: boolean | cdktf.IResolvable) {
    this._eapFastPacsStatelessSessionResume = value;
  }
  public resetEapFastPacsStatelessSessionResume() {
    this._eapFastPacsStatelessSessionResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsStatelessSessionResumeInput() {
    return this._eapFastPacsStatelessSessionResume;
  }

  // eap_fast_pacs_tunnel_pac_ttl - computed: false, optional: true, required: false
  private _eapFastPacsTunnelPacTtl?: number; 
  public get eapFastPacsTunnelPacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_tunnel_pac_ttl');
  }
  public set eapFastPacsTunnelPacTtl(value: number) {
    this._eapFastPacsTunnelPacTtl = value;
  }
  public resetEapFastPacsTunnelPacTtl() {
    this._eapFastPacsTunnelPacTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsTunnelPacTtlInput() {
    return this._eapFastPacsTunnelPacTtl;
  }

  // eap_fast_pacs_tunnel_pac_ttl_unit - computed: false, optional: true, required: false
  private _eapFastPacsTunnelPacTtlUnit?: string; 
  public get eapFastPacsTunnelPacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_tunnel_pac_ttl_unit');
  }
  public set eapFastPacsTunnelPacTtlUnit(value: string) {
    this._eapFastPacsTunnelPacTtlUnit = value;
  }
  public resetEapFastPacsTunnelPacTtlUnit() {
    this._eapFastPacsTunnelPacTtlUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsTunnelPacTtlUnitInput() {
    return this._eapFastPacsTunnelPacTtlUnit;
  }

  // eap_fast_pacs_use_proactive_pac_update_percentage - computed: false, optional: true, required: false
  private _eapFastPacsUseProactivePacUpdatePercentage?: number; 
  public get eapFastPacsUseProactivePacUpdatePercentage() {
    return this.getNumberAttribute('eap_fast_pacs_use_proactive_pac_update_percentage');
  }
  public set eapFastPacsUseProactivePacUpdatePercentage(value: number) {
    this._eapFastPacsUseProactivePacUpdatePercentage = value;
  }
  public resetEapFastPacsUseProactivePacUpdatePercentage() {
    this._eapFastPacsUseProactivePacUpdatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastPacsUseProactivePacUpdatePercentageInput() {
    return this._eapFastPacsUseProactivePacUpdatePercentage;
  }

  // eap_fast_use_pacs - computed: false, optional: true, required: false
  private _eapFastUsePacs?: boolean | cdktf.IResolvable; 
  public get eapFastUsePacs() {
    return this.getBooleanAttribute('eap_fast_use_pacs');
  }
  public set eapFastUsePacs(value: boolean | cdktf.IResolvable) {
    this._eapFastUsePacs = value;
  }
  public resetEapFastUsePacs() {
    this._eapFastUsePacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapFastUsePacsInput() {
    return this._eapFastUsePacs;
  }

  // eap_tls_allow_auth_of_expired_certs - computed: false, optional: true, required: false
  private _eapTlsAllowAuthOfExpiredCerts?: boolean | cdktf.IResolvable; 
  public get eapTlsAllowAuthOfExpiredCerts() {
    return this.getBooleanAttribute('eap_tls_allow_auth_of_expired_certs');
  }
  public set eapTlsAllowAuthOfExpiredCerts(value: boolean | cdktf.IResolvable) {
    this._eapTlsAllowAuthOfExpiredCerts = value;
  }
  public resetEapTlsAllowAuthOfExpiredCerts() {
    this._eapTlsAllowAuthOfExpiredCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsAllowAuthOfExpiredCertsInput() {
    return this._eapTlsAllowAuthOfExpiredCerts;
  }

  // eap_tls_enable_stateless_session_resume - computed: false, optional: true, required: false
  private _eapTlsEnableStatelessSessionResume?: boolean | cdktf.IResolvable; 
  public get eapTlsEnableStatelessSessionResume() {
    return this.getBooleanAttribute('eap_tls_enable_stateless_session_resume');
  }
  public set eapTlsEnableStatelessSessionResume(value: boolean | cdktf.IResolvable) {
    this._eapTlsEnableStatelessSessionResume = value;
  }
  public resetEapTlsEnableStatelessSessionResume() {
    this._eapTlsEnableStatelessSessionResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsEnableStatelessSessionResumeInput() {
    return this._eapTlsEnableStatelessSessionResume;
  }

  // eap_tls_l_bit - computed: false, optional: false, required: true
  private _eapTlsLBit?: boolean | cdktf.IResolvable; 
  public get eapTlsLBit() {
    return this.getBooleanAttribute('eap_tls_l_bit');
  }
  public set eapTlsLBit(value: boolean | cdktf.IResolvable) {
    this._eapTlsLBit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsLBitInput() {
    return this._eapTlsLBit;
  }

  // eap_tls_session_ticket_percentage - computed: false, optional: true, required: false
  private _eapTlsSessionTicketPercentage?: number; 
  public get eapTlsSessionTicketPercentage() {
    return this.getNumberAttribute('eap_tls_session_ticket_percentage');
  }
  public set eapTlsSessionTicketPercentage(value: number) {
    this._eapTlsSessionTicketPercentage = value;
  }
  public resetEapTlsSessionTicketPercentage() {
    this._eapTlsSessionTicketPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsSessionTicketPercentageInput() {
    return this._eapTlsSessionTicketPercentage;
  }

  // eap_tls_session_ticket_ttl - computed: false, optional: true, required: false
  private _eapTlsSessionTicketTtl?: number; 
  public get eapTlsSessionTicketTtl() {
    return this.getNumberAttribute('eap_tls_session_ticket_ttl');
  }
  public set eapTlsSessionTicketTtl(value: number) {
    this._eapTlsSessionTicketTtl = value;
  }
  public resetEapTlsSessionTicketTtl() {
    this._eapTlsSessionTicketTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsSessionTicketTtlInput() {
    return this._eapTlsSessionTicketTtl;
  }

  // eap_tls_session_ticket_ttl_unit - computed: false, optional: true, required: false
  private _eapTlsSessionTicketTtlUnit?: string; 
  public get eapTlsSessionTicketTtlUnit() {
    return this.getStringAttribute('eap_tls_session_ticket_ttl_unit');
  }
  public set eapTlsSessionTicketTtlUnit(value: string) {
    this._eapTlsSessionTicketTtlUnit = value;
  }
  public resetEapTlsSessionTicketTtlUnit() {
    this._eapTlsSessionTicketTtlUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsSessionTicketTtlUnitInput() {
    return this._eapTlsSessionTicketTtlUnit;
  }

  // eap_ttls_chap - computed: false, optional: true, required: false
  private _eapTtlsChap?: boolean | cdktf.IResolvable; 
  public get eapTtlsChap() {
    return this.getBooleanAttribute('eap_ttls_chap');
  }
  public set eapTtlsChap(value: boolean | cdktf.IResolvable) {
    this._eapTtlsChap = value;
  }
  public resetEapTtlsChap() {
    this._eapTtlsChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsChapInput() {
    return this._eapTtlsChap;
  }

  // eap_ttls_eap_md5 - computed: false, optional: true, required: false
  private _eapTtlsEapMd5?: boolean | cdktf.IResolvable; 
  public get eapTtlsEapMd5() {
    return this.getBooleanAttribute('eap_ttls_eap_md5');
  }
  public set eapTtlsEapMd5(value: boolean | cdktf.IResolvable) {
    this._eapTtlsEapMd5 = value;
  }
  public resetEapTtlsEapMd5() {
    this._eapTtlsEapMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsEapMd5Input() {
    return this._eapTtlsEapMd5;
  }

  // eap_ttls_eap_ms_chap_v2 - computed: false, optional: true, required: false
  private _eapTtlsEapMsChapV2?: boolean | cdktf.IResolvable; 
  public get eapTtlsEapMsChapV2() {
    return this.getBooleanAttribute('eap_ttls_eap_ms_chap_v2');
  }
  public set eapTtlsEapMsChapV2(value: boolean | cdktf.IResolvable) {
    this._eapTtlsEapMsChapV2 = value;
  }
  public resetEapTtlsEapMsChapV2() {
    this._eapTtlsEapMsChapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsEapMsChapV2Input() {
    return this._eapTtlsEapMsChapV2;
  }

  // eap_ttls_eap_ms_chap_v2_pwd_change - computed: false, optional: true, required: false
  private _eapTtlsEapMsChapV2PwdChange?: boolean | cdktf.IResolvable; 
  public get eapTtlsEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('eap_ttls_eap_ms_chap_v2_pwd_change');
  }
  public set eapTtlsEapMsChapV2PwdChange(value: boolean | cdktf.IResolvable) {
    this._eapTtlsEapMsChapV2PwdChange = value;
  }
  public resetEapTtlsEapMsChapV2PwdChange() {
    this._eapTtlsEapMsChapV2PwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsEapMsChapV2PwdChangeInput() {
    return this._eapTtlsEapMsChapV2PwdChange;
  }

  // eap_ttls_eap_ms_chap_v2_pwd_change_retries - computed: false, optional: true, required: false
  private _eapTtlsEapMsChapV2PwdChangeRetries?: number; 
  public get eapTtlsEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('eap_ttls_eap_ms_chap_v2_pwd_change_retries');
  }
  public set eapTtlsEapMsChapV2PwdChangeRetries(value: number) {
    this._eapTtlsEapMsChapV2PwdChangeRetries = value;
  }
  public resetEapTtlsEapMsChapV2PwdChangeRetries() {
    this._eapTtlsEapMsChapV2PwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsEapMsChapV2PwdChangeRetriesInput() {
    return this._eapTtlsEapMsChapV2PwdChangeRetries;
  }

  // eap_ttls_ms_chap_v1 - computed: false, optional: true, required: false
  private _eapTtlsMsChapV1?: boolean | cdktf.IResolvable; 
  public get eapTtlsMsChapV1() {
    return this.getBooleanAttribute('eap_ttls_ms_chap_v1');
  }
  public set eapTtlsMsChapV1(value: boolean | cdktf.IResolvable) {
    this._eapTtlsMsChapV1 = value;
  }
  public resetEapTtlsMsChapV1() {
    this._eapTtlsMsChapV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsMsChapV1Input() {
    return this._eapTtlsMsChapV1;
  }

  // eap_ttls_ms_chap_v2 - computed: false, optional: true, required: false
  private _eapTtlsMsChapV2?: boolean | cdktf.IResolvable; 
  public get eapTtlsMsChapV2() {
    return this.getBooleanAttribute('eap_ttls_ms_chap_v2');
  }
  public set eapTtlsMsChapV2(value: boolean | cdktf.IResolvable) {
    this._eapTtlsMsChapV2 = value;
  }
  public resetEapTtlsMsChapV2() {
    this._eapTtlsMsChapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsMsChapV2Input() {
    return this._eapTtlsMsChapV2;
  }

  // eap_ttls_pap_ascii - computed: false, optional: true, required: false
  private _eapTtlsPapAscii?: boolean | cdktf.IResolvable; 
  public get eapTtlsPapAscii() {
    return this.getBooleanAttribute('eap_ttls_pap_ascii');
  }
  public set eapTtlsPapAscii(value: boolean | cdktf.IResolvable) {
    this._eapTtlsPapAscii = value;
  }
  public resetEapTtlsPapAscii() {
    this._eapTtlsPapAscii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTtlsPapAsciiInput() {
    return this._eapTtlsPapAscii;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // peap_allow_peap_eap_gtc - computed: false, optional: true, required: false
  private _peapAllowPeapEapGtc?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapGtc() {
    return this.getBooleanAttribute('peap_allow_peap_eap_gtc');
  }
  public set peapAllowPeapEapGtc(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapGtc = value;
  }
  public resetPeapAllowPeapEapGtc() {
    this._peapAllowPeapEapGtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapGtcInput() {
    return this._peapAllowPeapEapGtc;
  }

  // peap_allow_peap_eap_gtc_pwd_change - computed: false, optional: true, required: false
  private _peapAllowPeapEapGtcPwdChange?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapGtcPwdChange() {
    return this.getBooleanAttribute('peap_allow_peap_eap_gtc_pwd_change');
  }
  public set peapAllowPeapEapGtcPwdChange(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapGtcPwdChange = value;
  }
  public resetPeapAllowPeapEapGtcPwdChange() {
    this._peapAllowPeapEapGtcPwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapGtcPwdChangeInput() {
    return this._peapAllowPeapEapGtcPwdChange;
  }

  // peap_allow_peap_eap_gtc_pwd_change_retries - computed: false, optional: true, required: false
  private _peapAllowPeapEapGtcPwdChangeRetries?: number; 
  public get peapAllowPeapEapGtcPwdChangeRetries() {
    return this.getNumberAttribute('peap_allow_peap_eap_gtc_pwd_change_retries');
  }
  public set peapAllowPeapEapGtcPwdChangeRetries(value: number) {
    this._peapAllowPeapEapGtcPwdChangeRetries = value;
  }
  public resetPeapAllowPeapEapGtcPwdChangeRetries() {
    this._peapAllowPeapEapGtcPwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapGtcPwdChangeRetriesInput() {
    return this._peapAllowPeapEapGtcPwdChangeRetries;
  }

  // peap_allow_peap_eap_ms_chap_v2 - computed: false, optional: true, required: false
  private _peapAllowPeapEapMsChapV2?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapMsChapV2() {
    return this.getBooleanAttribute('peap_allow_peap_eap_ms_chap_v2');
  }
  public set peapAllowPeapEapMsChapV2(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapMsChapV2 = value;
  }
  public resetPeapAllowPeapEapMsChapV2() {
    this._peapAllowPeapEapMsChapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapMsChapV2Input() {
    return this._peapAllowPeapEapMsChapV2;
  }

  // peap_allow_peap_eap_ms_chap_v2_pwd_change - computed: false, optional: true, required: false
  private _peapAllowPeapEapMsChapV2PwdChange?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('peap_allow_peap_eap_ms_chap_v2_pwd_change');
  }
  public set peapAllowPeapEapMsChapV2PwdChange(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapMsChapV2PwdChange = value;
  }
  public resetPeapAllowPeapEapMsChapV2PwdChange() {
    this._peapAllowPeapEapMsChapV2PwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapMsChapV2PwdChangeInput() {
    return this._peapAllowPeapEapMsChapV2PwdChange;
  }

  // peap_allow_peap_eap_ms_chap_v2_pwd_change_retries - computed: false, optional: true, required: false
  private _peapAllowPeapEapMsChapV2PwdChangeRetries?: number; 
  public get peapAllowPeapEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('peap_allow_peap_eap_ms_chap_v2_pwd_change_retries');
  }
  public set peapAllowPeapEapMsChapV2PwdChangeRetries(value: number) {
    this._peapAllowPeapEapMsChapV2PwdChangeRetries = value;
  }
  public resetPeapAllowPeapEapMsChapV2PwdChangeRetries() {
    this._peapAllowPeapEapMsChapV2PwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapMsChapV2PwdChangeRetriesInput() {
    return this._peapAllowPeapEapMsChapV2PwdChangeRetries;
  }

  // peap_allow_peap_eap_tls - computed: false, optional: true, required: false
  private _peapAllowPeapEapTls?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapTls() {
    return this.getBooleanAttribute('peap_allow_peap_eap_tls');
  }
  public set peapAllowPeapEapTls(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapTls = value;
  }
  public resetPeapAllowPeapEapTls() {
    this._peapAllowPeapEapTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapTlsInput() {
    return this._peapAllowPeapEapTls;
  }

  // peap_allow_peap_eap_tls_auth_of_expired_certs - computed: false, optional: true, required: false
  private _peapAllowPeapEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable; 
  public get peapAllowPeapEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('peap_allow_peap_eap_tls_auth_of_expired_certs');
  }
  public set peapAllowPeapEapTlsAuthOfExpiredCerts(value: boolean | cdktf.IResolvable) {
    this._peapAllowPeapEapTlsAuthOfExpiredCerts = value;
  }
  public resetPeapAllowPeapEapTlsAuthOfExpiredCerts() {
    this._peapAllowPeapEapTlsAuthOfExpiredCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapAllowPeapEapTlsAuthOfExpiredCertsInput() {
    return this._peapAllowPeapEapTlsAuthOfExpiredCerts;
  }

  // peap_peap_v0 - computed: false, optional: true, required: false
  private _peapPeapV0?: boolean | cdktf.IResolvable; 
  public get peapPeapV0() {
    return this.getBooleanAttribute('peap_peap_v0');
  }
  public set peapPeapV0(value: boolean | cdktf.IResolvable) {
    this._peapPeapV0 = value;
  }
  public resetPeapPeapV0() {
    this._peapPeapV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peapPeapV0Input() {
    return this._peapPeapV0;
  }

  // preferred_eap_protocol - computed: false, optional: true, required: false
  private _preferredEapProtocol?: string; 
  public get preferredEapProtocol() {
    return this.getStringAttribute('preferred_eap_protocol');
  }
  public set preferredEapProtocol(value: string) {
    this._preferredEapProtocol = value;
  }
  public resetPreferredEapProtocol() {
    this._preferredEapProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEapProtocolInput() {
    return this._preferredEapProtocol;
  }

  // process_host_lookup - computed: false, optional: false, required: true
  private _processHostLookup?: boolean | cdktf.IResolvable; 
  public get processHostLookup() {
    return this.getBooleanAttribute('process_host_lookup');
  }
  public set processHostLookup(value: boolean | cdktf.IResolvable) {
    this._processHostLookup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processHostLookupInput() {
    return this._processHostLookup;
  }

  // require_cryptobinding - computed: false, optional: true, required: false
  private _requireCryptobinding?: boolean | cdktf.IResolvable; 
  public get requireCryptobinding() {
    return this.getBooleanAttribute('require_cryptobinding');
  }
  public set requireCryptobinding(value: boolean | cdktf.IResolvable) {
    this._requireCryptobinding = value;
  }
  public resetRequireCryptobinding() {
    this._requireCryptobinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCryptobindingInput() {
    return this._requireCryptobinding;
  }

  // require_message_auth - computed: false, optional: false, required: true
  private _requireMessageAuth?: boolean | cdktf.IResolvable; 
  public get requireMessageAuth() {
    return this.getBooleanAttribute('require_message_auth');
  }
  public set requireMessageAuth(value: boolean | cdktf.IResolvable) {
    this._requireMessageAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthInput() {
    return this._requireMessageAuth;
  }

  // teap_downgrade_msk - computed: false, optional: true, required: false
  private _teapDowngradeMsk?: boolean | cdktf.IResolvable; 
  public get teapDowngradeMsk() {
    return this.getBooleanAttribute('teap_downgrade_msk');
  }
  public set teapDowngradeMsk(value: boolean | cdktf.IResolvable) {
    this._teapDowngradeMsk = value;
  }
  public resetTeapDowngradeMsk() {
    this._teapDowngradeMsk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapDowngradeMskInput() {
    return this._teapDowngradeMsk;
  }

  // teap_eap_accept_client_cert_during_tunnel_est - computed: false, optional: true, required: false
  private _teapEapAcceptClientCertDuringTunnelEst?: boolean | cdktf.IResolvable; 
  public get teapEapAcceptClientCertDuringTunnelEst() {
    return this.getBooleanAttribute('teap_eap_accept_client_cert_during_tunnel_est');
  }
  public set teapEapAcceptClientCertDuringTunnelEst(value: boolean | cdktf.IResolvable) {
    this._teapEapAcceptClientCertDuringTunnelEst = value;
  }
  public resetTeapEapAcceptClientCertDuringTunnelEst() {
    this._teapEapAcceptClientCertDuringTunnelEst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapAcceptClientCertDuringTunnelEstInput() {
    return this._teapEapAcceptClientCertDuringTunnelEst;
  }

  // teap_eap_chaining - computed: false, optional: true, required: false
  private _teapEapChaining?: boolean | cdktf.IResolvable; 
  public get teapEapChaining() {
    return this.getBooleanAttribute('teap_eap_chaining');
  }
  public set teapEapChaining(value: boolean | cdktf.IResolvable) {
    this._teapEapChaining = value;
  }
  public resetTeapEapChaining() {
    this._teapEapChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapChainingInput() {
    return this._teapEapChaining;
  }

  // teap_eap_ms_chap_v2 - computed: false, optional: true, required: false
  private _teapEapMsChapV2?: boolean | cdktf.IResolvable; 
  public get teapEapMsChapV2() {
    return this.getBooleanAttribute('teap_eap_ms_chap_v2');
  }
  public set teapEapMsChapV2(value: boolean | cdktf.IResolvable) {
    this._teapEapMsChapV2 = value;
  }
  public resetTeapEapMsChapV2() {
    this._teapEapMsChapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapMsChapV2Input() {
    return this._teapEapMsChapV2;
  }

  // teap_eap_ms_chap_v2_pwd_change - computed: false, optional: true, required: false
  private _teapEapMsChapV2PwdChange?: boolean | cdktf.IResolvable; 
  public get teapEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('teap_eap_ms_chap_v2_pwd_change');
  }
  public set teapEapMsChapV2PwdChange(value: boolean | cdktf.IResolvable) {
    this._teapEapMsChapV2PwdChange = value;
  }
  public resetTeapEapMsChapV2PwdChange() {
    this._teapEapMsChapV2PwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapMsChapV2PwdChangeInput() {
    return this._teapEapMsChapV2PwdChange;
  }

  // teap_eap_ms_chap_v2_pwd_change_retries - computed: false, optional: true, required: false
  private _teapEapMsChapV2PwdChangeRetries?: number; 
  public get teapEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('teap_eap_ms_chap_v2_pwd_change_retries');
  }
  public set teapEapMsChapV2PwdChangeRetries(value: number) {
    this._teapEapMsChapV2PwdChangeRetries = value;
  }
  public resetTeapEapMsChapV2PwdChangeRetries() {
    this._teapEapMsChapV2PwdChangeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapMsChapV2PwdChangeRetriesInput() {
    return this._teapEapMsChapV2PwdChangeRetries;
  }

  // teap_eap_tls - computed: false, optional: true, required: false
  private _teapEapTls?: boolean | cdktf.IResolvable; 
  public get teapEapTls() {
    return this.getBooleanAttribute('teap_eap_tls');
  }
  public set teapEapTls(value: boolean | cdktf.IResolvable) {
    this._teapEapTls = value;
  }
  public resetTeapEapTls() {
    this._teapEapTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapTlsInput() {
    return this._teapEapTls;
  }

  // teap_eap_tls_auth_of_expired_certs - computed: false, optional: true, required: false
  private _teapEapTlsAuthOfExpiredCerts?: boolean | cdktf.IResolvable; 
  public get teapEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('teap_eap_tls_auth_of_expired_certs');
  }
  public set teapEapTlsAuthOfExpiredCerts(value: boolean | cdktf.IResolvable) {
    this._teapEapTlsAuthOfExpiredCerts = value;
  }
  public resetTeapEapTlsAuthOfExpiredCerts() {
    this._teapEapTlsAuthOfExpiredCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapEapTlsAuthOfExpiredCertsInput() {
    return this._teapEapTlsAuthOfExpiredCerts;
  }

  // teap_request_basic_pwd_auth - computed: false, optional: true, required: false
  private _teapRequestBasicPwdAuth?: boolean | cdktf.IResolvable; 
  public get teapRequestBasicPwdAuth() {
    return this.getBooleanAttribute('teap_request_basic_pwd_auth');
  }
  public set teapRequestBasicPwdAuth(value: boolean | cdktf.IResolvable) {
    this._teapRequestBasicPwdAuth = value;
  }
  public resetTeapRequestBasicPwdAuth() {
    this._teapRequestBasicPwdAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teapRequestBasicPwdAuthInput() {
    return this._teapRequestBasicPwdAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_5g: cdktf.booleanToTerraform(this._allow5G),
      allow_chap: cdktf.booleanToTerraform(this._allowChap),
      allow_eap_fast: cdktf.booleanToTerraform(this._allowEapFast),
      allow_eap_md5: cdktf.booleanToTerraform(this._allowEapMd5),
      allow_eap_tls: cdktf.booleanToTerraform(this._allowEapTls),
      allow_eap_ttls: cdktf.booleanToTerraform(this._allowEapTtls),
      allow_leap: cdktf.booleanToTerraform(this._allowLeap),
      allow_ms_chap_v1: cdktf.booleanToTerraform(this._allowMsChapV1),
      allow_ms_chap_v2: cdktf.booleanToTerraform(this._allowMsChapV2),
      allow_pap_ascii: cdktf.booleanToTerraform(this._allowPapAscii),
      allow_peap: cdktf.booleanToTerraform(this._allowPeap),
      allow_preferred_eap_protocol: cdktf.booleanToTerraform(this._allowPreferredEapProtocol),
      allow_teap: cdktf.booleanToTerraform(this._allowTeap),
      allow_weak_ciphers_for_eap: cdktf.booleanToTerraform(this._allowWeakCiphersForEap),
      description: cdktf.stringToTerraform(this._description),
      eap_fast_accept_client_cert: cdktf.booleanToTerraform(this._eapFastAcceptClientCert),
      eap_fast_allow_machine_authentication: cdktf.booleanToTerraform(this._eapFastAllowMachineAuthentication),
      eap_fast_eap_gtc: cdktf.booleanToTerraform(this._eapFastEapGtc),
      eap_fast_eap_gtc_pwd_change: cdktf.booleanToTerraform(this._eapFastEapGtcPwdChange),
      eap_fast_eap_gtc_pwd_change_retries: cdktf.numberToTerraform(this._eapFastEapGtcPwdChangeRetries),
      eap_fast_eap_ms_chap_v2: cdktf.booleanToTerraform(this._eapFastEapMsChapV2),
      eap_fast_eap_ms_chap_v2_pwd_change: cdktf.booleanToTerraform(this._eapFastEapMsChapV2PwdChange),
      eap_fast_eap_ms_chap_v2_pwd_change_retries: cdktf.numberToTerraform(this._eapFastEapMsChapV2PwdChangeRetries),
      eap_fast_eap_tls: cdktf.booleanToTerraform(this._eapFastEapTls),
      eap_fast_eap_tls_auth_of_expired_certs: cdktf.booleanToTerraform(this._eapFastEapTlsAuthOfExpiredCerts),
      eap_fast_enable_eap_chaining: cdktf.booleanToTerraform(this._eapFastEnableEapChaining),
      eap_fast_pacs_allow_anonymous_provisioning: cdktf.booleanToTerraform(this._eapFastPacsAllowAnonymousProvisioning),
      eap_fast_pacs_allow_authenticated_provisioning: cdktf.booleanToTerraform(this._eapFastPacsAllowAuthenticatedProvisioning),
      eap_fast_pacs_allow_client_cert: cdktf.booleanToTerraform(this._eapFastPacsAllowClientCert),
      eap_fast_pacs_allow_machine_authentication: cdktf.booleanToTerraform(this._eapFastPacsAllowMachineAuthentication),
      eap_fast_pacs_authorization_pac_ttl: cdktf.numberToTerraform(this._eapFastPacsAuthorizationPacTtl),
      eap_fast_pacs_authorization_pac_ttl_unit: cdktf.stringToTerraform(this._eapFastPacsAuthorizationPacTtlUnit),
      eap_fast_pacs_machine_pac_ttl: cdktf.numberToTerraform(this._eapFastPacsMachinePacTtl),
      eap_fast_pacs_machine_pac_ttl_unit: cdktf.stringToTerraform(this._eapFastPacsMachinePacTtlUnit),
      eap_fast_pacs_server_returns: cdktf.booleanToTerraform(this._eapFastPacsServerReturns),
      eap_fast_pacs_stateless_session_resume: cdktf.booleanToTerraform(this._eapFastPacsStatelessSessionResume),
      eap_fast_pacs_tunnel_pac_ttl: cdktf.numberToTerraform(this._eapFastPacsTunnelPacTtl),
      eap_fast_pacs_tunnel_pac_ttl_unit: cdktf.stringToTerraform(this._eapFastPacsTunnelPacTtlUnit),
      eap_fast_pacs_use_proactive_pac_update_percentage: cdktf.numberToTerraform(this._eapFastPacsUseProactivePacUpdatePercentage),
      eap_fast_use_pacs: cdktf.booleanToTerraform(this._eapFastUsePacs),
      eap_tls_allow_auth_of_expired_certs: cdktf.booleanToTerraform(this._eapTlsAllowAuthOfExpiredCerts),
      eap_tls_enable_stateless_session_resume: cdktf.booleanToTerraform(this._eapTlsEnableStatelessSessionResume),
      eap_tls_l_bit: cdktf.booleanToTerraform(this._eapTlsLBit),
      eap_tls_session_ticket_percentage: cdktf.numberToTerraform(this._eapTlsSessionTicketPercentage),
      eap_tls_session_ticket_ttl: cdktf.numberToTerraform(this._eapTlsSessionTicketTtl),
      eap_tls_session_ticket_ttl_unit: cdktf.stringToTerraform(this._eapTlsSessionTicketTtlUnit),
      eap_ttls_chap: cdktf.booleanToTerraform(this._eapTtlsChap),
      eap_ttls_eap_md5: cdktf.booleanToTerraform(this._eapTtlsEapMd5),
      eap_ttls_eap_ms_chap_v2: cdktf.booleanToTerraform(this._eapTtlsEapMsChapV2),
      eap_ttls_eap_ms_chap_v2_pwd_change: cdktf.booleanToTerraform(this._eapTtlsEapMsChapV2PwdChange),
      eap_ttls_eap_ms_chap_v2_pwd_change_retries: cdktf.numberToTerraform(this._eapTtlsEapMsChapV2PwdChangeRetries),
      eap_ttls_ms_chap_v1: cdktf.booleanToTerraform(this._eapTtlsMsChapV1),
      eap_ttls_ms_chap_v2: cdktf.booleanToTerraform(this._eapTtlsMsChapV2),
      eap_ttls_pap_ascii: cdktf.booleanToTerraform(this._eapTtlsPapAscii),
      name: cdktf.stringToTerraform(this._name),
      peap_allow_peap_eap_gtc: cdktf.booleanToTerraform(this._peapAllowPeapEapGtc),
      peap_allow_peap_eap_gtc_pwd_change: cdktf.booleanToTerraform(this._peapAllowPeapEapGtcPwdChange),
      peap_allow_peap_eap_gtc_pwd_change_retries: cdktf.numberToTerraform(this._peapAllowPeapEapGtcPwdChangeRetries),
      peap_allow_peap_eap_ms_chap_v2: cdktf.booleanToTerraform(this._peapAllowPeapEapMsChapV2),
      peap_allow_peap_eap_ms_chap_v2_pwd_change: cdktf.booleanToTerraform(this._peapAllowPeapEapMsChapV2PwdChange),
      peap_allow_peap_eap_ms_chap_v2_pwd_change_retries: cdktf.numberToTerraform(this._peapAllowPeapEapMsChapV2PwdChangeRetries),
      peap_allow_peap_eap_tls: cdktf.booleanToTerraform(this._peapAllowPeapEapTls),
      peap_allow_peap_eap_tls_auth_of_expired_certs: cdktf.booleanToTerraform(this._peapAllowPeapEapTlsAuthOfExpiredCerts),
      peap_peap_v0: cdktf.booleanToTerraform(this._peapPeapV0),
      preferred_eap_protocol: cdktf.stringToTerraform(this._preferredEapProtocol),
      process_host_lookup: cdktf.booleanToTerraform(this._processHostLookup),
      require_cryptobinding: cdktf.booleanToTerraform(this._requireCryptobinding),
      require_message_auth: cdktf.booleanToTerraform(this._requireMessageAuth),
      teap_downgrade_msk: cdktf.booleanToTerraform(this._teapDowngradeMsk),
      teap_eap_accept_client_cert_during_tunnel_est: cdktf.booleanToTerraform(this._teapEapAcceptClientCertDuringTunnelEst),
      teap_eap_chaining: cdktf.booleanToTerraform(this._teapEapChaining),
      teap_eap_ms_chap_v2: cdktf.booleanToTerraform(this._teapEapMsChapV2),
      teap_eap_ms_chap_v2_pwd_change: cdktf.booleanToTerraform(this._teapEapMsChapV2PwdChange),
      teap_eap_ms_chap_v2_pwd_change_retries: cdktf.numberToTerraform(this._teapEapMsChapV2PwdChangeRetries),
      teap_eap_tls: cdktf.booleanToTerraform(this._teapEapTls),
      teap_eap_tls_auth_of_expired_certs: cdktf.booleanToTerraform(this._teapEapTlsAuthOfExpiredCerts),
      teap_request_basic_pwd_auth: cdktf.booleanToTerraform(this._teapRequestBasicPwdAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_5g: {
        value: cdktf.booleanToHclTerraform(this._allow5G),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_chap: {
        value: cdktf.booleanToHclTerraform(this._allowChap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_eap_fast: {
        value: cdktf.booleanToHclTerraform(this._allowEapFast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_eap_md5: {
        value: cdktf.booleanToHclTerraform(this._allowEapMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_eap_tls: {
        value: cdktf.booleanToHclTerraform(this._allowEapTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_eap_ttls: {
        value: cdktf.booleanToHclTerraform(this._allowEapTtls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_leap: {
        value: cdktf.booleanToHclTerraform(this._allowLeap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_ms_chap_v1: {
        value: cdktf.booleanToHclTerraform(this._allowMsChapV1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._allowMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_pap_ascii: {
        value: cdktf.booleanToHclTerraform(this._allowPapAscii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_peap: {
        value: cdktf.booleanToHclTerraform(this._allowPeap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_preferred_eap_protocol: {
        value: cdktf.booleanToHclTerraform(this._allowPreferredEapProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_teap: {
        value: cdktf.booleanToHclTerraform(this._allowTeap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_weak_ciphers_for_eap: {
        value: cdktf.booleanToHclTerraform(this._allowWeakCiphersForEap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_fast_accept_client_cert: {
        value: cdktf.booleanToHclTerraform(this._eapFastAcceptClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_allow_machine_authentication: {
        value: cdktf.booleanToHclTerraform(this._eapFastAllowMachineAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_gtc: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapGtc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_gtc_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapGtcPwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_gtc_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._eapFastEapGtcPwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_eap_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_ms_chap_v2_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapMsChapV2PwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_ms_chap_v2_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._eapFastEapMsChapV2PwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_eap_tls: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_eap_tls_auth_of_expired_certs: {
        value: cdktf.booleanToHclTerraform(this._eapFastEapTlsAuthOfExpiredCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_enable_eap_chaining: {
        value: cdktf.booleanToHclTerraform(this._eapFastEnableEapChaining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_allow_anonymous_provisioning: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsAllowAnonymousProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_allow_authenticated_provisioning: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsAllowAuthenticatedProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_allow_client_cert: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsAllowClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_allow_machine_authentication: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsAllowMachineAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_authorization_pac_ttl: {
        value: cdktf.numberToHclTerraform(this._eapFastPacsAuthorizationPacTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_pacs_authorization_pac_ttl_unit: {
        value: cdktf.stringToHclTerraform(this._eapFastPacsAuthorizationPacTtlUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_fast_pacs_machine_pac_ttl: {
        value: cdktf.numberToHclTerraform(this._eapFastPacsMachinePacTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_pacs_machine_pac_ttl_unit: {
        value: cdktf.stringToHclTerraform(this._eapFastPacsMachinePacTtlUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_fast_pacs_server_returns: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsServerReturns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_stateless_session_resume: {
        value: cdktf.booleanToHclTerraform(this._eapFastPacsStatelessSessionResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_fast_pacs_tunnel_pac_ttl: {
        value: cdktf.numberToHclTerraform(this._eapFastPacsTunnelPacTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_pacs_tunnel_pac_ttl_unit: {
        value: cdktf.stringToHclTerraform(this._eapFastPacsTunnelPacTtlUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_fast_pacs_use_proactive_pac_update_percentage: {
        value: cdktf.numberToHclTerraform(this._eapFastPacsUseProactivePacUpdatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_fast_use_pacs: {
        value: cdktf.booleanToHclTerraform(this._eapFastUsePacs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_tls_allow_auth_of_expired_certs: {
        value: cdktf.booleanToHclTerraform(this._eapTlsAllowAuthOfExpiredCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_tls_enable_stateless_session_resume: {
        value: cdktf.booleanToHclTerraform(this._eapTlsEnableStatelessSessionResume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_tls_l_bit: {
        value: cdktf.booleanToHclTerraform(this._eapTlsLBit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_tls_session_ticket_percentage: {
        value: cdktf.numberToHclTerraform(this._eapTlsSessionTicketPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_tls_session_ticket_ttl: {
        value: cdktf.numberToHclTerraform(this._eapTlsSessionTicketTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_tls_session_ticket_ttl_unit: {
        value: cdktf.stringToHclTerraform(this._eapTlsSessionTicketTtlUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_ttls_chap: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsChap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_eap_md5: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsEapMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_eap_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsEapMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_eap_ms_chap_v2_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsEapMsChapV2PwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_eap_ms_chap_v2_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._eapTtlsEapMsChapV2PwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eap_ttls_ms_chap_v1: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsMsChapV1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_ttls_pap_ascii: {
        value: cdktf.booleanToHclTerraform(this._eapTtlsPapAscii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peap_allow_peap_eap_gtc: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapGtc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_allow_peap_eap_gtc_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapGtcPwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_allow_peap_eap_gtc_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._peapAllowPeapEapGtcPwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peap_allow_peap_eap_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_allow_peap_eap_ms_chap_v2_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapMsChapV2PwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_allow_peap_eap_ms_chap_v2_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._peapAllowPeapEapMsChapV2PwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peap_allow_peap_eap_tls: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_allow_peap_eap_tls_auth_of_expired_certs: {
        value: cdktf.booleanToHclTerraform(this._peapAllowPeapEapTlsAuthOfExpiredCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peap_peap_v0: {
        value: cdktf.booleanToHclTerraform(this._peapPeapV0),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferred_eap_protocol: {
        value: cdktf.stringToHclTerraform(this._preferredEapProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_host_lookup: {
        value: cdktf.booleanToHclTerraform(this._processHostLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_cryptobinding: {
        value: cdktf.booleanToHclTerraform(this._requireCryptobinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_message_auth: {
        value: cdktf.booleanToHclTerraform(this._requireMessageAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_downgrade_msk: {
        value: cdktf.booleanToHclTerraform(this._teapDowngradeMsk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_accept_client_cert_during_tunnel_est: {
        value: cdktf.booleanToHclTerraform(this._teapEapAcceptClientCertDuringTunnelEst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_chaining: {
        value: cdktf.booleanToHclTerraform(this._teapEapChaining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_ms_chap_v2: {
        value: cdktf.booleanToHclTerraform(this._teapEapMsChapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_ms_chap_v2_pwd_change: {
        value: cdktf.booleanToHclTerraform(this._teapEapMsChapV2PwdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_ms_chap_v2_pwd_change_retries: {
        value: cdktf.numberToHclTerraform(this._teapEapMsChapV2PwdChangeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      teap_eap_tls: {
        value: cdktf.booleanToHclTerraform(this._teapEapTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_eap_tls_auth_of_expired_certs: {
        value: cdktf.booleanToHclTerraform(this._teapEapTlsAuthOfExpiredCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      teap_request_basic_pwd_auth: {
        value: cdktf.booleanToHclTerraform(this._teapRequestBasicPwdAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
