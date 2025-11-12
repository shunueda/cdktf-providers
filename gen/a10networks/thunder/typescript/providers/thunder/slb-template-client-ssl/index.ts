// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateClientSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forward proxy bypass if ad-group matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ad_group_list SlbTemplateClientSsl#ad_group_list}
  */
  readonly adGroupList?: string;
  /**
  * 'fatal': Log fatal alerts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#alert_type SlbTemplateClientSsl#alert_type}
  */
  readonly alertType?: string;
  /**
  * Specify authorization LDAP service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auth_sg SlbTemplateClientSsl#auth_sg}
  */
  readonly authSg?: string;
  /**
  * Use Subject DN as LDAP search base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auth_sg_dn SlbTemplateClientSsl#auth_sg_dn}
  */
  readonly authSgDn?: number;
  /**
  * Specify LDAP search filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auth_sg_filter SlbTemplateClientSsl#auth_sg_filter}
  */
  readonly authSgFilter?: string;
  /**
  * Specify the Username Field in the Client Certificate(If multi-fields are specificed, prior one has higher priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auth_username SlbTemplateClientSsl#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Specify attribute name of username for client SSL authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auth_username_attribute SlbTemplateClientSsl#auth_username_attribute}
  */
  readonly authUsernameAttribute?: string;
  /**
  * Specify authorization LDAP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#authen_name SlbTemplateClientSsl#authen_name}
  */
  readonly authenName?: string;
  /**
  * Specify LDAP server for client SSL authorizaiton
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#authorization SlbTemplateClientSsl#authorization}
  */
  readonly authorization?: number;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_issuer_class_list_name SlbTemplateClientSsl#bypass_cert_issuer_class_list_name}
  */
  readonly bypassCertIssuerClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_san_class_list_name SlbTemplateClientSsl#bypass_cert_san_class_list_name}
  */
  readonly bypassCertSanClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_subject_class_list_name SlbTemplateClientSsl#bypass_cert_subject_class_list_name}
  */
  readonly bypassCertSubjectClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cache_persistence_list_name SlbTemplateClientSsl#cache_persistence_list_name}
  */
  readonly cachePersistenceListName?: string;
  /**
  * Case insensitive forward proxy bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#case_insensitive SlbTemplateClientSsl#case_insensitive}
  */
  readonly caseInsensitive?: number;
  /**
  * Forward proxy bypass if SNI string is contained in central updated cert-pinning-candidate list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#central_cert_pin_list SlbTemplateClientSsl#central_cert_pin_list}
  */
  readonly centralCertPinList?: number;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cert_revoke_action SlbTemplateClientSsl#cert_revoke_action}
  */
  readonly certRevokeAction?: string;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cert_unknown_action SlbTemplateClientSsl#cert_unknown_action}
  */
  readonly certUnknownAction?: string;
  /**
  * Chain Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#chain_cert SlbTemplateClientSsl#chain_cert}
  */
  readonly chainCert?: string;
  /**
  * Chain Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#chain_cert_shared_str SlbTemplateClientSsl#chain_cert_shared_str}
  */
  readonly chainCertSharedStr?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#class_list_name SlbTemplateClientSsl#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Case insensitive forward proxy client auth bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_case_insensitive SlbTemplateClientSsl#client_auth_case_insensitive}
  */
  readonly clientAuthCaseInsensitive?: number;
  /**
  * Forward proxy client auth bypass if SNI string matches class-list (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_class_list SlbTemplateClientSsl#client_auth_class_list}
  */
  readonly clientAuthClassList?: string;
  /**
  * 'Ignore': Don't request client certificate; 'Require': Require client certificate; 'Request': Request client certificate;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_certificate SlbTemplateClientSsl#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Send close notification when terminate connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#close_notify SlbTemplateClientSsl#close_notify}
  */
  readonly closeNotify?: number;
  /**
  * Lower TLS/SSL version can be downgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#dgversion SlbTemplateClientSsl#dgversion}
  */
  readonly dgversion?: number;
  /**
  * '1024': 1024; '1024-dsa': 1024-dsa; '2048': 2048;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#dh_type SlbTemplateClientSsl#dh_type}
  */
  readonly dhType?: string;
  /**
  * Let backend server does SSL client authentication directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#direct_client_server_auth SlbTemplateClientSsl#direct_client_server_auth}
  */
  readonly directClientServerAuth?: number;
  /**
  * Reject Client requests for SSL version 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#disable_sslv3 SlbTemplateClientSsl#disable_sslv3}
  */
  readonly disableSslv3?: number;
  /**
  * Enable TLS 1.3 early data (0-RTT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#early_data SlbTemplateClientSsl#early_data}
  */
  readonly earlyData?: number;
  /**
  * Enable SSLi FTP over TLS support at which port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#enable_ssli_ftp_alg SlbTemplateClientSsl#enable_ssli_ftp_alg}
  */
  readonly enableSsliFtpAlg?: number;
  /**
  * Enable TLS alert logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#enable_tls_alert_logging SlbTemplateClientSsl#enable_tls_alert_logging}
  */
  readonly enableTlsAlertLogging?: number;
  /**
  * Exceptions to forward proxy bypass if ad-group matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_ad_group_list SlbTemplateClientSsl#exception_ad_group_list}
  */
  readonly exceptionAdGroupList?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_certificate_issuer_cl_name SlbTemplateClientSsl#exception_certificate_issuer_cl_name}
  */
  readonly exceptionCertificateIssuerClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_certificate_san_cl_name SlbTemplateClientSsl#exception_certificate_san_cl_name}
  */
  readonly exceptionCertificateSanClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_certificate_subject_cl_name SlbTemplateClientSsl#exception_certificate_subject_cl_name}
  */
  readonly exceptionCertificateSubjectClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_sni_cl_name SlbTemplateClientSsl#exception_sni_cl_name}
  */
  readonly exceptionSniClName?: string;
  /**
  * Exceptions to forward proxy bypass if user-name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_user_name_list SlbTemplateClientSsl#exception_user_name_list}
  */
  readonly exceptionUserNameList?: string;
  /**
  * Certificate lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#expire_hours SlbTemplateClientSsl#expire_hours}
  */
  readonly expireHours?: number;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_passphrase SlbTemplateClientSsl#forward_passphrase}
  */
  readonly forwardPassphrase?: string;
  /**
  * Forward proxy alternate signing cert and key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_alt_sign SlbTemplateClientSsl#forward_proxy_alt_sign}
  */
  readonly forwardProxyAltSign?: number;
  /**
  * Message to be included on the block page (Message, enclose in quotes if spaces are present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_block_message SlbTemplateClientSsl#forward_proxy_block_message}
  */
  readonly forwardProxyBlockMessage?: string;
  /**
  * CA Certificate for forward proxy (SSL forward proxy CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_ca_cert SlbTemplateClientSsl#forward_proxy_ca_cert}
  */
  readonly forwardProxyCaCert?: string;
  /**
  * CA Private Key for forward proxy (SSL forward proxy CA Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_ca_key SlbTemplateClientSsl#forward_proxy_ca_key}
  */
  readonly forwardProxyCaKey?: string;
  /**
  * Certificate cache size limit, default is 524288 (set to 0 for unlimited size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_cache_limit SlbTemplateClientSsl#forward_proxy_cert_cache_limit}
  */
  readonly forwardProxyCertCacheLimit?: number;
  /**
  * Certificate cache timeout, default is 1 hour (seconds, set to 0 for never timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_cache_timeout SlbTemplateClientSsl#forward_proxy_cert_cache_timeout}
  */
  readonly forwardProxyCertCacheTimeout?: number;
  /**
  * Adjust certificate expiry relative to the time when it is created on the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_expiry SlbTemplateClientSsl#forward_proxy_cert_expiry}
  */
  readonly forwardProxyCertExpiry?: number;
  /**
  * 'bypass': bypass the connection; 'reset': reset the connection; 'intercept': wait for cert and then inspect the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_not_ready_action SlbTemplateClientSsl#forward_proxy_cert_not_ready_action}
  */
  readonly forwardProxyCertNotReadyAction?: string;
  /**
  * Action taken if a certificate is irreversibly revoked, bypass SSLi processing by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_revoke_action SlbTemplateClientSsl#forward_proxy_cert_revoke_action}
  */
  readonly forwardProxyCertRevokeAction?: number;
  /**
  * Action taken if a certificate revocation status is unknown, bypass SSLi processing by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_cert_unknown_action SlbTemplateClientSsl#forward_proxy_cert_unknown_action}
  */
  readonly forwardProxyCertUnknownAction?: number;
  /**
  * Disable Certificate Revocation List checking for forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_crl_disable SlbTemplateClientSsl#forward_proxy_crl_disable}
  */
  readonly forwardProxyCrlDisable?: number;
  /**
  * Apply a DSCP to decrypted and bypassed traffic (DSCP to apply to decrypted traffic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_decrypted_dscp SlbTemplateClientSsl#forward_proxy_decrypted_dscp}
  */
  readonly forwardProxyDecryptedDscp?: number;
  /**
  * DSCP to apply to bypassed traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_decrypted_dscp_bypass SlbTemplateClientSsl#forward_proxy_decrypted_dscp_bypass}
  */
  readonly forwardProxyDecryptedDscpBypass?: number;
  /**
  * Enable SSL forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_enable SlbTemplateClientSsl#forward_proxy_enable}
  */
  readonly forwardProxyEnable?: number;
  /**
  * Action taken if receiving encrypted server name indication extension in client hello MSG, bypass the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_esni_action SlbTemplateClientSsl#forward_proxy_esni_action}
  */
  readonly forwardProxyEsniAction?: number;
  /**
  * Disable Failsafe for SSL forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_failsafe_disable SlbTemplateClientSsl#forward_proxy_failsafe_disable}
  */
  readonly forwardProxyFailsafeDisable?: number;
  /**
  * Set the time interval to save the hash persistence certs (Interval value, in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_hash_persistence_interval SlbTemplateClientSsl#forward_proxy_hash_persistence_interval}
  */
  readonly forwardProxyHashPersistenceInterval?: number;
  /**
  * Disable SSL forward proxy logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_log_disable SlbTemplateClientSsl#forward_proxy_log_disable}
  */
  readonly forwardProxyLogDisable?: number;
  /**
  * Action taken if handshake fails due to no shared ciper, close the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_no_shared_cipher_action SlbTemplateClientSsl#forward_proxy_no_shared_cipher_action}
  */
  readonly forwardProxyNoSharedCipherAction?: number;
  /**
  * 'intercept': intercept in no SNI case; 'bypass': bypass in no SNI case; 'reset': reset in no SNI case;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_no_sni_action SlbTemplateClientSsl#forward_proxy_no_sni_action}
  */
  readonly forwardProxyNoSniAction?: string;
  /**
  * Disable ocsp-stapling for forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_ocsp_disable SlbTemplateClientSsl#forward_proxy_ocsp_disable}
  */
  readonly forwardProxyOcspDisable?: number;
  /**
  * 'no-match-action-inspect': Inspected if not matched; 'no-match-action-drop': Dropped if not matched;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_require_sni_cert_matched SlbTemplateClientSsl#forward_proxy_require_sni_cert_matched}
  */
  readonly forwardProxyRequireSniCertMatched?: string;
  /**
  * Redirect connections to pages with self signed certs to a warning page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_selfsign_redir SlbTemplateClientSsl#forward_proxy_selfsign_redir}
  */
  readonly forwardProxySelfsignRedir?: number;
  /**
  * TLS/SSL version, default is TLS1.2 (TLS/SSL version: 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_ssl_version SlbTemplateClientSsl#forward_proxy_ssl_version}
  */
  readonly forwardProxySslVersion?: number;
  /**
  * Action taken if certificate verification fails, close the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_verify_cert_fail_action SlbTemplateClientSsl#forward_proxy_verify_cert_fail_action}
  */
  readonly forwardProxyVerifyCertFailAction?: number;
  /**
  * CA Certificate for forward proxy alternate signing (Certificate name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_alt_cert SlbTemplateClientSsl#fp_alt_cert}
  */
  readonly fpAltCert?: string;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_alt_chain_cert SlbTemplateClientSsl#fp_alt_chain_cert}
  */
  readonly fpAltChainCert?: string;
  /**
  * CA Private Key for forward proxy alternate signing (Key name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_alt_key SlbTemplateClientSsl#fp_alt_key}
  */
  readonly fpAltKey?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_alt_passphrase SlbTemplateClientSsl#fp_alt_passphrase}
  */
  readonly fpAltPassphrase?: string;
  /**
  * Alternate CA Certificate and Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_alt_shared SlbTemplateClientSsl#fp_alt_shared}
  */
  readonly fpAltShared?: number;
  /**
  * CA Certificate for forward proxy (SSL forward proxy CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_certificate SlbTemplateClientSsl#fp_ca_certificate}
  */
  readonly fpCaCertificate?: string;
  /**
  * CA Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_certificate_shared SlbTemplateClientSsl#fp_ca_certificate_shared}
  */
  readonly fpCaCertificateShared?: number;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_chain_cert SlbTemplateClientSsl#fp_ca_chain_cert}
  */
  readonly fpCaChainCert?: string;
  /**
  * CA Private Key for forward proxy (SSL forward proxy CA Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_key SlbTemplateClientSsl#fp_ca_key}
  */
  readonly fpCaKey?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_key_passphrase SlbTemplateClientSsl#fp_ca_key_passphrase}
  */
  readonly fpCaKeyPassphrase?: string;
  /**
  * CA Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_key_shared SlbTemplateClientSsl#fp_ca_key_shared}
  */
  readonly fpCaKeyShared?: number;
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_ca_shared SlbTemplateClientSsl#fp_ca_shared}
  */
  readonly fpCaShared?: number;
  /**
  * CA Issuers (Authority Information Access URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_ext_aia_ca_issuers SlbTemplateClientSsl#fp_cert_ext_aia_ca_issuers}
  */
  readonly fpCertExtAiaCaIssuers?: string;
  /**
  * OCSP (Authority Information Access URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_ext_aia_ocsp SlbTemplateClientSsl#fp_cert_ext_aia_ocsp}
  */
  readonly fpCertExtAiaOcsp?: string;
  /**
  * CRL Distribution Point (CRL Distribution Point URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_ext_crldp SlbTemplateClientSsl#fp_cert_ext_crldp}
  */
  readonly fpCertExtCrldp?: string;
  /**
  * 'auto': Configure auto NAT for server certificate fetching;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_fetch_autonat SlbTemplateClientSsl#fp_cert_fetch_autonat}
  */
  readonly fpCertFetchAutonat?: string;
  /**
  * Set this NAT pool as higher precedence than other source NAT like configued under template policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_fetch_autonat_precedence SlbTemplateClientSsl#fp_cert_fetch_autonat_precedence}
  */
  readonly fpCertFetchAutonatPrecedence?: number;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_name SlbTemplateClientSsl#fp_cert_fetch_natpool_name}
  */
  readonly fpCertFetchNatpoolName?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_name_shared SlbTemplateClientSsl#fp_cert_fetch_natpool_name_shared}
  */
  readonly fpCertFetchNatpoolNameShared?: string;
  /**
  * Set this NAT pool as higher precedence than other source NAT like configued under template policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_precedence SlbTemplateClientSsl#fp_cert_fetch_natpool_precedence}
  */
  readonly fpCertFetchNatpoolPrecedence?: number;
  /**
  * 'bypass': bypass SSLi processing; 'drop': close the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_esni_action SlbTemplateClientSsl#fp_esni_action}
  */
  readonly fpEsniAction?: string;
  /**
  * Enable SSL handshake logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#handshake_logging_enable SlbTemplateClientSsl#handshake_logging_enable}
  */
  readonly handshakeLoggingEnable?: number;
  /**
  * 'thales-embed': Thales embed key; 'thales-hwcrhk': Thales hwcrhk Key;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#hsm_type SlbTemplateClientSsl#hsm_type}
  */
  readonly hsmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#id SlbTemplateClientSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Forward proxy Inspect if Certificate issuer matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#inspect_certificate_issuer_cl_name SlbTemplateClientSsl#inspect_certificate_issuer_cl_name}
  */
  readonly inspectCertificateIssuerClName?: string;
  /**
  * Forward proxy Inspect if Certificate Subject Alternative Name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#inspect_certificate_san_cl_name SlbTemplateClientSsl#inspect_certificate_san_cl_name}
  */
  readonly inspectCertificateSanClName?: string;
  /**
  * Forward proxy Inspect if Certificate Subject matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#inspect_certificate_subject_cl_name SlbTemplateClientSsl#inspect_certificate_subject_cl_name}
  */
  readonly inspectCertificateSubjectClName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#inspect_list_name SlbTemplateClientSsl#inspect_list_name}
  */
  readonly inspectListName?: string;
  /**
  * Enable JA3 features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ja3_enable SlbTemplateClientSsl#ja3_enable}
  */
  readonly ja3Enable?: number;
  /**
  * Insert the JA3 hash into this request as a HTTP header (HTTP Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ja3_insert_http_header SlbTemplateClientSsl#ja3_insert_http_header}
  */
  readonly ja3InsertHttpHeader?: string;
  /**
  * Drop request if the JA3 hash matches this class-list (type string-case-insensitive) (Class-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ja3_reject_class_list SlbTemplateClientSsl#ja3_reject_class_list}
  */
  readonly ja3RejectClassList?: string;
  /**
  * Drop request if numbers of JA3 of this client address exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ja3_reject_max_number_per_host SlbTemplateClientSsl#ja3_reject_max_number_per_host}
  */
  readonly ja3RejectMaxNumberPerHost?: number;
  /**
  * seconds to keep each JA3 record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ja3_ttl SlbTemplateClientSsl#ja3_ttl}
  */
  readonly ja3Ttl?: number;
  /**
  * Use Subject DN as LDAP search base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ldap_base_dn_from_cert SlbTemplateClientSsl#ldap_base_dn_from_cert}
  */
  readonly ldapBaseDnFromCert?: number;
  /**
  * Specify LDAP search filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ldap_search_filter SlbTemplateClientSsl#ldap_search_filter}
  */
  readonly ldapSearchFilter?: string;
  /**
  * Enable local logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#local_logging SlbTemplateClientSsl#local_logging}
  */
  readonly localLogging?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#name SlbTemplateClientSsl#name}
  */
  readonly name: string;
  /**
  * Disable anti-replay protection for TLS 1.3 early data (0-RTT data)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#no_anti_replay SlbTemplateClientSsl#no_anti_replay}
  */
  readonly noAntiReplay?: number;
  /**
  * 'bypass': bypass SSLi processing; 'drop': close the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#no_shared_cipher_action SlbTemplateClientSsl#no_shared_cipher_action}
  */
  readonly noSharedCipherAction?: string;
  /**
  * Handle the non-ssl session as L4 for performance optimization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#non_ssl_bypass_l4session SlbTemplateClientSsl#non_ssl_bypass_l4session}
  */
  readonly nonSslBypassL4Session?: number;
  /**
  * Service Group for Bypass non-ssl traffic (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#non_ssl_bypass_service_group SlbTemplateClientSsl#non_ssl_bypass_service_group}
  */
  readonly nonSslBypassServiceGroup?: string;
  /**
  * notAfter date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notafter SlbTemplateClientSsl#notafter}
  */
  readonly notafter?: number;
  /**
  * Day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notafterday SlbTemplateClientSsl#notafterday}
  */
  readonly notafterday?: number;
  /**
  * Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notaftermonth SlbTemplateClientSsl#notaftermonth}
  */
  readonly notaftermonth?: number;
  /**
  * Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notafteryear SlbTemplateClientSsl#notafteryear}
  */
  readonly notafteryear?: number;
  /**
  * notBefore date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notbefore SlbTemplateClientSsl#notbefore}
  */
  readonly notbefore?: number;
  /**
  * Day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notbeforeday SlbTemplateClientSsl#notbeforeday}
  */
  readonly notbeforeday?: number;
  /**
  * Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notbeforemonth SlbTemplateClientSsl#notbeforemonth}
  */
  readonly notbeforemonth?: number;
  /**
  * Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#notbeforeyear SlbTemplateClientSsl#notbeforeyear}
  */
  readonly notbeforeyear?: number;
  /**
  * Config OCSP stapling support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocsp_stapling SlbTemplateClientSsl#ocsp_stapling}
  */
  readonly ocspStapling?: number;
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_ca_cert SlbTemplateClientSsl#ocspst_ca_cert}
  */
  readonly ocspstCaCert?: string;
  /**
  * Specify OCSP Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_ocsp SlbTemplateClientSsl#ocspst_ocsp}
  */
  readonly ocspstOcsp?: number;
  /**
  * Specify authentication service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_sg SlbTemplateClientSsl#ocspst_sg}
  */
  readonly ocspstSg?: string;
  /**
  * Specify update period, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_sg_days SlbTemplateClientSsl#ocspst_sg_days}
  */
  readonly ocspstSgDays?: number;
  /**
  * Specify update period, in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_sg_hours SlbTemplateClientSsl#ocspst_sg_hours}
  */
  readonly ocspstSgHours?: number;
  /**
  * Specify update period, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_sg_minutes SlbTemplateClientSsl#ocspst_sg_minutes}
  */
  readonly ocspstSgMinutes?: number;
  /**
  * Specify retry timeout (Default is 30 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_sg_timeout SlbTemplateClientSsl#ocspst_sg_timeout}
  */
  readonly ocspstSgTimeout?: number;
  /**
  * Specify OCSP authentication server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_srvr SlbTemplateClientSsl#ocspst_srvr}
  */
  readonly ocspstSrvr?: string;
  /**
  * Specify update period, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_srvr_days SlbTemplateClientSsl#ocspst_srvr_days}
  */
  readonly ocspstSrvrDays?: number;
  /**
  * Specify update period, in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_srvr_hours SlbTemplateClientSsl#ocspst_srvr_hours}
  */
  readonly ocspstSrvrHours?: number;
  /**
  * Specify update period, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_srvr_minutes SlbTemplateClientSsl#ocspst_srvr_minutes}
  */
  readonly ocspstSrvrMinutes?: number;
  /**
  * Specify retry timeout (Default is 30 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ocspst_srvr_timeout SlbTemplateClientSsl#ocspst_srvr_timeout}
  */
  readonly ocspstSrvrTimeout?: number;
  /**
  * Disable SSL renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#renegotiation_disable SlbTemplateClientSsl#renegotiation_disable}
  */
  readonly renegotiationDisable?: number;
  /**
  * Wait for web category to be resolved before taking bypass decision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#require_web_category SlbTemplateClientSsl#require_web_category}
  */
  readonly requireWebCategory?: number;
  /**
  * Enable automatic mapping of server name indication in Client hello extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name_auto_map SlbTemplateClientSsl#server_name_auto_map}
  */
  readonly serverNameAutoMap?: number;
  /**
  * Session Cache Size (Maximum cache size. Default value 0 (Session ID reuse disabled))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#session_cache_size SlbTemplateClientSsl#session_cache_size}
  */
  readonly sessionCacheSize?: number;
  /**
  * Session Cache Timeout (Timeout value, in seconds. Default value 0 (Session cache timeout disabled))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#session_cache_timeout SlbTemplateClientSsl#session_cache_timeout}
  */
  readonly sessionCacheTimeout?: number;
  /**
  * Disable client side session ticket support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#session_ticket_disable SlbTemplateClientSsl#session_ticket_disable}
  */
  readonly sessionTicketDisable?: number;
  /**
  * Session ticket lifetime in seconds from stateless session resumption (Lifetime value in seconds. Default value 0 (Session ticket lifetime is 7200 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#session_ticket_lifetime SlbTemplateClientSsl#session_ticket_lifetime}
  */
  readonly sessionTicketLifetime?: number;
  /**
  * Reference a cipher template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#shared_partition_cipher_template SlbTemplateClientSsl#shared_partition_cipher_template}
  */
  readonly sharedPartitionCipherTemplate?: number;
  /**
  * Reference a NAT pool or pool group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#shared_partition_pool SlbTemplateClientSsl#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Enable logging when bypass event happens, disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_bypass_enable_log SlbTemplateClientSsl#sni_bypass_enable_log}
  */
  readonly sniBypassEnableLog?: number;
  /**
  * Bypass when certificate expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_bypass_expired_cert SlbTemplateClientSsl#sni_bypass_expired_cert}
  */
  readonly sniBypassExpiredCert?: number;
  /**
  * Bypass when matched explicit bypass list (Specify class list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_bypass_explicit_list SlbTemplateClientSsl#sni_bypass_explicit_list}
  */
  readonly sniBypassExplicitList?: string;
  /**
  * Bypass when missing cert/key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_bypass_missing_cert SlbTemplateClientSsl#sni_bypass_missing_cert}
  */
  readonly sniBypassMissingCert?: number;
  /**
  * Enable logging of sni-auto-map failures. Disable by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_enable_log SlbTemplateClientSsl#sni_enable_log}
  */
  readonly sniEnableLog?: number;
  /**
  * disable SSL False Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ssl_false_start_disable SlbTemplateClientSsl#ssl_false_start_disable}
  */
  readonly sslFalseStartDisable?: number;
  /**
  * Enable inbound SSLi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ssli_inbound_enable SlbTemplateClientSsl#ssli_inbound_enable}
  */
  readonly ssliInboundEnable?: number;
  /**
  * SSLi logging level, default is error logging only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ssli_logging SlbTemplateClientSsl#ssli_logging}
  */
  readonly ssliLogging?: number;
  /**
  * 'disable': Disable all logging; 'all': enable all logging(error, info);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sslilogging SlbTemplateClientSsl#sslilogging}
  */
  readonly sslilogging?: string;
  /**
  * Service Group for Bypass SSLV2 (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sslv2_bypass_service_group SlbTemplateClientSsl#sslv2_bypass_service_group}
  */
  readonly sslv2BypassServiceGroup?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#template_cipher SlbTemplateClientSsl#template_cipher}
  */
  readonly templateCipher?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#template_cipher_shared SlbTemplateClientSsl#template_cipher_shared}
  */
  readonly templateCipherShared?: string;
  /**
  * HSM Template (HSM Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#template_hsm SlbTemplateClientSsl#template_hsm}
  */
  readonly templateHsm?: string;
  /**
  * Forward proxy bypass if user-name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#user_name_list SlbTemplateClientSsl#user_name_list}
  */
  readonly userNameList?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#user_tag SlbTemplateClientSsl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#uuid SlbTemplateClientSsl#uuid}
  */
  readonly uuid?: string;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#verify_cert_fail_action SlbTemplateClientSsl#verify_cert_fail_action}
  */
  readonly verifyCertFailAction?: string;
  /**
  * TLS/SSL version, default is the highest number supported (TLS/SSL version: 30-SSLv3.0, 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#version SlbTemplateClientSsl#version}
  */
  readonly version?: number;
  /**
  * bypass_cert_issuer_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_issuer_multi_class_list SlbTemplateClientSsl#bypass_cert_issuer_multi_class_list}
  */
  readonly bypassCertIssuerMultiClassList?: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * bypass_cert_san_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_san_multi_class_list SlbTemplateClientSsl#bypass_cert_san_multi_class_list}
  */
  readonly bypassCertSanMultiClassList?: SlbTemplateClientSslBypassCertSanMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * bypass_cert_subject_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_subject_multi_class_list SlbTemplateClientSsl#bypass_cert_subject_multi_class_list}
  */
  readonly bypassCertSubjectMultiClassList?: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ca_certs SlbTemplateClientSsl#ca_certs}
  */
  readonly caCerts?: SlbTemplateClientSslCaCerts[] | cdktf.IResolvable;
  /**
  * certificate_issuer_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_contains_list SlbTemplateClientSsl#certificate_issuer_contains_list}
  */
  readonly certificateIssuerContainsList?: SlbTemplateClientSslCertificateIssuerContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_ends_with_list SlbTemplateClientSsl#certificate_issuer_ends_with_list}
  */
  readonly certificateIssuerEndsWithList?: SlbTemplateClientSslCertificateIssuerEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_equals_list SlbTemplateClientSsl#certificate_issuer_equals_list}
  */
  readonly certificateIssuerEqualsList?: SlbTemplateClientSslCertificateIssuerEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_starts_with_list SlbTemplateClientSsl#certificate_issuer_starts_with_list}
  */
  readonly certificateIssuerStartsWithList?: SlbTemplateClientSslCertificateIssuerStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_list SlbTemplateClientSsl#certificate_list}
  */
  readonly certificateList?: SlbTemplateClientSslCertificateListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_contains_list SlbTemplateClientSsl#certificate_san_contains_list}
  */
  readonly certificateSanContainsList?: SlbTemplateClientSslCertificateSanContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_ends_with_list SlbTemplateClientSsl#certificate_san_ends_with_list}
  */
  readonly certificateSanEndsWithList?: SlbTemplateClientSslCertificateSanEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_equals_list SlbTemplateClientSsl#certificate_san_equals_list}
  */
  readonly certificateSanEqualsList?: SlbTemplateClientSslCertificateSanEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_starts_with_list SlbTemplateClientSsl#certificate_san_starts_with_list}
  */
  readonly certificateSanStartsWithList?: SlbTemplateClientSslCertificateSanStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_contains_list SlbTemplateClientSsl#certificate_subject_contains_list}
  */
  readonly certificateSubjectContainsList?: SlbTemplateClientSslCertificateSubjectContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_ends_with_list SlbTemplateClientSsl#certificate_subject_ends_with_list}
  */
  readonly certificateSubjectEndsWithList?: SlbTemplateClientSslCertificateSubjectEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_equals_list SlbTemplateClientSsl#certificate_subject_equals_list}
  */
  readonly certificateSubjectEqualsList?: SlbTemplateClientSslCertificateSubjectEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_starts_with_list SlbTemplateClientSsl#certificate_subject_starts_with_list}
  */
  readonly certificateSubjectStartsWithList?: SlbTemplateClientSslCertificateSubjectStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * cipher_without_prio_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cipher_without_prio_list SlbTemplateClientSsl#cipher_without_prio_list}
  */
  readonly cipherWithoutPrioList?: SlbTemplateClientSslCipherWithoutPrioListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_contains_list SlbTemplateClientSsl#client_auth_contains_list}
  */
  readonly clientAuthContainsList?: SlbTemplateClientSslClientAuthContainsListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_ends_with_list SlbTemplateClientSsl#client_auth_ends_with_list}
  */
  readonly clientAuthEndsWithList?: SlbTemplateClientSslClientAuthEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_equals_list SlbTemplateClientSsl#client_auth_equals_list}
  */
  readonly clientAuthEqualsList?: SlbTemplateClientSslClientAuthEqualsListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_starts_with_list SlbTemplateClientSsl#client_auth_starts_with_list}
  */
  readonly clientAuthStartsWithList?: SlbTemplateClientSslClientAuthStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * client_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ipv4_list SlbTemplateClientSsl#client_ipv4_list}
  */
  readonly clientIpv4List?: SlbTemplateClientSslClientIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * client_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ipv6_list SlbTemplateClientSsl#client_ipv6_list}
  */
  readonly clientIpv6List?: SlbTemplateClientSslClientIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#contains_list SlbTemplateClientSsl#contains_list}
  */
  readonly containsList?: SlbTemplateClientSslContainsListStruct[] | cdktf.IResolvable;
  /**
  * crl_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#crl_certs SlbTemplateClientSsl#crl_certs}
  */
  readonly crlCerts?: SlbTemplateClientSslCrlCerts[] | cdktf.IResolvable;
  /**
  * ec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ec_list SlbTemplateClientSsl#ec_list}
  */
  readonly ecList?: SlbTemplateClientSslEcListStruct[] | cdktf.IResolvable;
  /**
  * ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ends_with_list SlbTemplateClientSsl#ends_with_list}
  */
  readonly endsWithList?: SlbTemplateClientSslEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#equals_list SlbTemplateClientSsl#equals_list}
  */
  readonly equalsList?: SlbTemplateClientSslEqualsListStruct[] | cdktf.IResolvable;
  /**
  * exception_client_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_client_ipv4_list SlbTemplateClientSsl#exception_client_ipv4_list}
  */
  readonly exceptionClientIpv4List?: SlbTemplateClientSslExceptionClientIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * exception_client_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_client_ipv6_list SlbTemplateClientSsl#exception_client_ipv6_list}
  */
  readonly exceptionClientIpv6List?: SlbTemplateClientSslExceptionClientIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * exception_server_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_server_ipv4_list SlbTemplateClientSsl#exception_server_ipv4_list}
  */
  readonly exceptionServerIpv4List?: SlbTemplateClientSslExceptionServerIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * exception_server_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_server_ipv6_list SlbTemplateClientSsl#exception_server_ipv6_list}
  */
  readonly exceptionServerIpv6List?: SlbTemplateClientSslExceptionServerIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * exception_web_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_web_category SlbTemplateClientSsl#exception_web_category}
  */
  readonly exceptionWebCategory?: SlbTemplateClientSslExceptionWebCategory;
  /**
  * exception_web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_web_reputation SlbTemplateClientSsl#exception_web_reputation}
  */
  readonly exceptionWebReputation?: SlbTemplateClientSslExceptionWebReputation;
  /**
  * forward_proxy_trusted_ca_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_trusted_ca_lists SlbTemplateClientSsl#forward_proxy_trusted_ca_lists}
  */
  readonly forwardProxyTrustedCaLists?: SlbTemplateClientSslForwardProxyTrustedCaLists[] | cdktf.IResolvable;
  /**
  * local_cert_pin_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#local_cert_pin_list SlbTemplateClientSsl#local_cert_pin_list}
  */
  readonly localCertPinList?: SlbTemplateClientSslLocalCertPinListStruct;
  /**
  * multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#multi_class_list SlbTemplateClientSsl#multi_class_list}
  */
  readonly multiClassList?: SlbTemplateClientSslMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * req_ca_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#req_ca_lists SlbTemplateClientSsl#req_ca_lists}
  */
  readonly reqCaLists?: SlbTemplateClientSslReqCaLists[] | cdktf.IResolvable;
  /**
  * server_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_ipv4_list SlbTemplateClientSsl#server_ipv4_list}
  */
  readonly serverIpv4List?: SlbTemplateClientSslServerIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * server_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_ipv6_list SlbTemplateClientSsl#server_ipv6_list}
  */
  readonly serverIpv6List?: SlbTemplateClientSslServerIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name_list SlbTemplateClientSsl#server_name_list}
  */
  readonly serverNameList?: SlbTemplateClientSslServerNameListStruct[] | cdktf.IResolvable;
  /**
  * starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#starts_with_list SlbTemplateClientSsl#starts_with_list}
  */
  readonly startsWithList?: SlbTemplateClientSslStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * web_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#web_category SlbTemplateClientSsl#web_category}
  */
  readonly webCategory?: SlbTemplateClientSslWebCategory;
  /**
  * web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#web_reputation SlbTemplateClientSsl#web_reputation}
  */
  readonly webReputation?: SlbTemplateClientSslWebReputation;
}
export interface SlbTemplateClientSslBypassCertIssuerMultiClassListStruct {
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_issuer_multi_class_list_name SlbTemplateClientSsl#bypass_cert_issuer_multi_class_list_name}
  */
  readonly bypassCertIssuerMultiClassListName?: string;
}

export function slbTemplateClientSslBypassCertIssuerMultiClassListStructToTerraform(struct?: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_cert_issuer_multi_class_list_name: cdktf.stringToTerraform(struct!.bypassCertIssuerMultiClassListName),
  }
}


export function slbTemplateClientSslBypassCertIssuerMultiClassListStructToHclTerraform(struct?: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_cert_issuer_multi_class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.bypassCertIssuerMultiClassListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslBypassCertIssuerMultiClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslBypassCertIssuerMultiClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassCertIssuerMultiClassListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertIssuerMultiClassListName = this._bypassCertIssuerMultiClassListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassCertIssuerMultiClassListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassCertIssuerMultiClassListName = value.bypassCertIssuerMultiClassListName;
    }
  }

  // bypass_cert_issuer_multi_class_list_name - computed: false, optional: true, required: false
  private _bypassCertIssuerMultiClassListName?: string; 
  public get bypassCertIssuerMultiClassListName() {
    return this.getStringAttribute('bypass_cert_issuer_multi_class_list_name');
  }
  public set bypassCertIssuerMultiClassListName(value: string) {
    this._bypassCertIssuerMultiClassListName = value;
  }
  public resetBypassCertIssuerMultiClassListName() {
    this._bypassCertIssuerMultiClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertIssuerMultiClassListNameInput() {
    return this._bypassCertIssuerMultiClassListName;
  }
}

export class SlbTemplateClientSslBypassCertIssuerMultiClassListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslBypassCertIssuerMultiClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslBypassCertIssuerMultiClassListStructOutputReference {
    return new SlbTemplateClientSslBypassCertIssuerMultiClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslBypassCertSanMultiClassListStruct {
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_san_multi_class_list_name SlbTemplateClientSsl#bypass_cert_san_multi_class_list_name}
  */
  readonly bypassCertSanMultiClassListName?: string;
}

export function slbTemplateClientSslBypassCertSanMultiClassListStructToTerraform(struct?: SlbTemplateClientSslBypassCertSanMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_cert_san_multi_class_list_name: cdktf.stringToTerraform(struct!.bypassCertSanMultiClassListName),
  }
}


export function slbTemplateClientSslBypassCertSanMultiClassListStructToHclTerraform(struct?: SlbTemplateClientSslBypassCertSanMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_cert_san_multi_class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.bypassCertSanMultiClassListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslBypassCertSanMultiClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslBypassCertSanMultiClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassCertSanMultiClassListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSanMultiClassListName = this._bypassCertSanMultiClassListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslBypassCertSanMultiClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassCertSanMultiClassListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassCertSanMultiClassListName = value.bypassCertSanMultiClassListName;
    }
  }

  // bypass_cert_san_multi_class_list_name - computed: false, optional: true, required: false
  private _bypassCertSanMultiClassListName?: string; 
  public get bypassCertSanMultiClassListName() {
    return this.getStringAttribute('bypass_cert_san_multi_class_list_name');
  }
  public set bypassCertSanMultiClassListName(value: string) {
    this._bypassCertSanMultiClassListName = value;
  }
  public resetBypassCertSanMultiClassListName() {
    this._bypassCertSanMultiClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSanMultiClassListNameInput() {
    return this._bypassCertSanMultiClassListName;
  }
}

export class SlbTemplateClientSslBypassCertSanMultiClassListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslBypassCertSanMultiClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslBypassCertSanMultiClassListStructOutputReference {
    return new SlbTemplateClientSslBypassCertSanMultiClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslBypassCertSubjectMultiClassListStruct {
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_cert_subject_multi_class_list_name SlbTemplateClientSsl#bypass_cert_subject_multi_class_list_name}
  */
  readonly bypassCertSubjectMultiClassListName?: string;
}

export function slbTemplateClientSslBypassCertSubjectMultiClassListStructToTerraform(struct?: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_cert_subject_multi_class_list_name: cdktf.stringToTerraform(struct!.bypassCertSubjectMultiClassListName),
  }
}


export function slbTemplateClientSslBypassCertSubjectMultiClassListStructToHclTerraform(struct?: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_cert_subject_multi_class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.bypassCertSubjectMultiClassListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslBypassCertSubjectMultiClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslBypassCertSubjectMultiClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassCertSubjectMultiClassListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSubjectMultiClassListName = this._bypassCertSubjectMultiClassListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassCertSubjectMultiClassListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassCertSubjectMultiClassListName = value.bypassCertSubjectMultiClassListName;
    }
  }

  // bypass_cert_subject_multi_class_list_name - computed: false, optional: true, required: false
  private _bypassCertSubjectMultiClassListName?: string; 
  public get bypassCertSubjectMultiClassListName() {
    return this.getStringAttribute('bypass_cert_subject_multi_class_list_name');
  }
  public set bypassCertSubjectMultiClassListName(value: string) {
    this._bypassCertSubjectMultiClassListName = value;
  }
  public resetBypassCertSubjectMultiClassListName() {
    this._bypassCertSubjectMultiClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSubjectMultiClassListNameInput() {
    return this._bypassCertSubjectMultiClassListName;
  }
}

export class SlbTemplateClientSslBypassCertSubjectMultiClassListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslBypassCertSubjectMultiClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslBypassCertSubjectMultiClassListStructOutputReference {
    return new SlbTemplateClientSslBypassCertSubjectMultiClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCaCerts {
  /**
  * CA Certificate (CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ca_cert SlbTemplateClientSsl#ca_cert}
  */
  readonly caCert?: string;
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ca_shared SlbTemplateClientSsl#ca_shared}
  */
  readonly caShared?: number;
  /**
  * Specify ocsp authentication server(s) for client certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ocsp SlbTemplateClientSsl#client_ocsp}
  */
  readonly clientOcsp?: number;
  /**
  * Specify service-group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ocsp_sg SlbTemplateClientSsl#client_ocsp_sg}
  */
  readonly clientOcspSg?: string;
  /**
  * Specify authentication server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ocsp_srvr SlbTemplateClientSsl#client_ocsp_srvr}
  */
  readonly clientOcspSrvr?: string;
}

export function slbTemplateClientSslCaCertsToTerraform(struct?: SlbTemplateClientSslCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_shared: cdktf.numberToTerraform(struct!.caShared),
    client_ocsp: cdktf.numberToTerraform(struct!.clientOcsp),
    client_ocsp_sg: cdktf.stringToTerraform(struct!.clientOcspSg),
    client_ocsp_srvr: cdktf.stringToTerraform(struct!.clientOcspSrvr),
  }
}


export function slbTemplateClientSslCaCertsToHclTerraform(struct?: SlbTemplateClientSslCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_shared: {
      value: cdktf.numberToHclTerraform(struct!.caShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ocsp: {
      value: cdktf.numberToHclTerraform(struct!.clientOcsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ocsp_sg: {
      value: cdktf.stringToHclTerraform(struct!.clientOcspSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ocsp_srvr: {
      value: cdktf.stringToHclTerraform(struct!.clientOcspSrvr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.caShared = this._caShared;
    }
    if (this._clientOcsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOcsp = this._clientOcsp;
    }
    if (this._clientOcspSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOcspSg = this._clientOcspSg;
    }
    if (this._clientOcspSrvr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOcspSrvr = this._clientOcspSrvr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._caShared = undefined;
      this._clientOcsp = undefined;
      this._clientOcspSg = undefined;
      this._clientOcspSrvr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._caShared = value.caShared;
      this._clientOcsp = value.clientOcsp;
      this._clientOcspSg = value.clientOcspSg;
      this._clientOcspSrvr = value.clientOcspSrvr;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_shared - computed: false, optional: true, required: false
  private _caShared?: number; 
  public get caShared() {
    return this.getNumberAttribute('ca_shared');
  }
  public set caShared(value: number) {
    this._caShared = value;
  }
  public resetCaShared() {
    this._caShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSharedInput() {
    return this._caShared;
  }

  // client_ocsp - computed: false, optional: true, required: false
  private _clientOcsp?: number; 
  public get clientOcsp() {
    return this.getNumberAttribute('client_ocsp');
  }
  public set clientOcsp(value: number) {
    this._clientOcsp = value;
  }
  public resetClientOcsp() {
    this._clientOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOcspInput() {
    return this._clientOcsp;
  }

  // client_ocsp_sg - computed: false, optional: true, required: false
  private _clientOcspSg?: string; 
  public get clientOcspSg() {
    return this.getStringAttribute('client_ocsp_sg');
  }
  public set clientOcspSg(value: string) {
    this._clientOcspSg = value;
  }
  public resetClientOcspSg() {
    this._clientOcspSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOcspSgInput() {
    return this._clientOcspSg;
  }

  // client_ocsp_srvr - computed: false, optional: true, required: false
  private _clientOcspSrvr?: string; 
  public get clientOcspSrvr() {
    return this.getStringAttribute('client_ocsp_srvr');
  }
  public set clientOcspSrvr(value: string) {
    this._clientOcspSrvr = value;
  }
  public resetClientOcspSrvr() {
    this._clientOcspSrvr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOcspSrvrInput() {
    return this._clientOcspSrvr;
  }
}

export class SlbTemplateClientSslCaCertsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCaCerts[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCaCertsOutputReference {
    return new SlbTemplateClientSslCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateIssuerContainsListStruct {
  /**
  * Forward proxy bypass if Certificate  issuer contains another string (Certificate issuer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_contains SlbTemplateClientSsl#certificate_issuer_contains}
  */
  readonly certificateIssuerContains?: string;
}

export function slbTemplateClientSslCertificateIssuerContainsListStructToTerraform(struct?: SlbTemplateClientSslCertificateIssuerContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_issuer_contains: cdktf.stringToTerraform(struct!.certificateIssuerContains),
  }
}


export function slbTemplateClientSslCertificateIssuerContainsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateIssuerContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_issuer_contains: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateIssuerContainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateIssuerContainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIssuerContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerContains = this._certificateIssuerContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateIssuerContainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateIssuerContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateIssuerContains = value.certificateIssuerContains;
    }
  }

  // certificate_issuer_contains - computed: false, optional: true, required: false
  private _certificateIssuerContains?: string; 
  public get certificateIssuerContains() {
    return this.getStringAttribute('certificate_issuer_contains');
  }
  public set certificateIssuerContains(value: string) {
    this._certificateIssuerContains = value;
  }
  public resetCertificateIssuerContains() {
    this._certificateIssuerContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerContainsInput() {
    return this._certificateIssuerContains;
  }
}

export class SlbTemplateClientSslCertificateIssuerContainsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateIssuerContainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateIssuerContainsListStructOutputReference {
    return new SlbTemplateClientSslCertificateIssuerContainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateIssuerEndsWithListStruct {
  /**
  * Forward proxy bypass if Certificate issuer ends with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_ends_with SlbTemplateClientSsl#certificate_issuer_ends_with}
  */
  readonly certificateIssuerEndsWith?: string;
}

export function slbTemplateClientSslCertificateIssuerEndsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateIssuerEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_issuer_ends_with: cdktf.stringToTerraform(struct!.certificateIssuerEndsWith),
  }
}


export function slbTemplateClientSslCertificateIssuerEndsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateIssuerEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_issuer_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateIssuerEndsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateIssuerEndsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIssuerEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerEndsWith = this._certificateIssuerEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateIssuerEndsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateIssuerEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateIssuerEndsWith = value.certificateIssuerEndsWith;
    }
  }

  // certificate_issuer_ends_with - computed: false, optional: true, required: false
  private _certificateIssuerEndsWith?: string; 
  public get certificateIssuerEndsWith() {
    return this.getStringAttribute('certificate_issuer_ends_with');
  }
  public set certificateIssuerEndsWith(value: string) {
    this._certificateIssuerEndsWith = value;
  }
  public resetCertificateIssuerEndsWith() {
    this._certificateIssuerEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerEndsWithInput() {
    return this._certificateIssuerEndsWith;
  }
}

export class SlbTemplateClientSslCertificateIssuerEndsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateIssuerEndsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateIssuerEndsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateIssuerEndsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateIssuerEqualsListStruct {
  /**
  * Forward proxy bypass if Certificate issuer equals another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_equals SlbTemplateClientSsl#certificate_issuer_equals}
  */
  readonly certificateIssuerEquals?: string;
}

export function slbTemplateClientSslCertificateIssuerEqualsListStructToTerraform(struct?: SlbTemplateClientSslCertificateIssuerEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_issuer_equals: cdktf.stringToTerraform(struct!.certificateIssuerEquals),
  }
}


export function slbTemplateClientSslCertificateIssuerEqualsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateIssuerEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_issuer_equals: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateIssuerEqualsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateIssuerEqualsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIssuerEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerEquals = this._certificateIssuerEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateIssuerEqualsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateIssuerEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateIssuerEquals = value.certificateIssuerEquals;
    }
  }

  // certificate_issuer_equals - computed: false, optional: true, required: false
  private _certificateIssuerEquals?: string; 
  public get certificateIssuerEquals() {
    return this.getStringAttribute('certificate_issuer_equals');
  }
  public set certificateIssuerEquals(value: string) {
    this._certificateIssuerEquals = value;
  }
  public resetCertificateIssuerEquals() {
    this._certificateIssuerEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerEqualsInput() {
    return this._certificateIssuerEquals;
  }
}

export class SlbTemplateClientSslCertificateIssuerEqualsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateIssuerEqualsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateIssuerEqualsListStructOutputReference {
    return new SlbTemplateClientSslCertificateIssuerEqualsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateIssuerStartsWithListStruct {
  /**
  * Forward proxy bypass if Certificate issuer starts with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_issuer_starts SlbTemplateClientSsl#certificate_issuer_starts}
  */
  readonly certificateIssuerStarts?: string;
}

export function slbTemplateClientSslCertificateIssuerStartsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateIssuerStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_issuer_starts: cdktf.stringToTerraform(struct!.certificateIssuerStarts),
  }
}


export function slbTemplateClientSslCertificateIssuerStartsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateIssuerStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_issuer_starts: {
      value: cdktf.stringToHclTerraform(struct!.certificateIssuerStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateIssuerStartsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateIssuerStartsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIssuerStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIssuerStarts = this._certificateIssuerStarts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateIssuerStartsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateIssuerStarts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateIssuerStarts = value.certificateIssuerStarts;
    }
  }

  // certificate_issuer_starts - computed: false, optional: true, required: false
  private _certificateIssuerStarts?: string; 
  public get certificateIssuerStarts() {
    return this.getStringAttribute('certificate_issuer_starts');
  }
  public set certificateIssuerStarts(value: string) {
    this._certificateIssuerStarts = value;
  }
  public resetCertificateIssuerStarts() {
    this._certificateIssuerStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerStartsInput() {
    return this._certificateIssuerStarts;
  }
}

export class SlbTemplateClientSslCertificateIssuerStartsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateIssuerStartsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateIssuerStartsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateIssuerStartsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateListStruct {
  /**
  * Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cert SlbTemplateClientSsl#cert}
  */
  readonly cert: string;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#chain_cert SlbTemplateClientSsl#chain_cert}
  */
  readonly chainCert?: string;
  /**
  * Server Private Key (Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#key SlbTemplateClientSsl#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#passphrase SlbTemplateClientSsl#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Server Certificate and Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#shared SlbTemplateClientSsl#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#uuid SlbTemplateClientSsl#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateClientSslCertificateListStructToTerraform(struct?: SlbTemplateClientSslCertificateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    chain_cert: cdktf.stringToTerraform(struct!.chainCert),
    key: cdktf.stringToTerraform(struct!.key),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    shared: cdktf.numberToTerraform(struct!.shared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateClientSslCertificateListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_cert: {
      value: cdktf.stringToHclTerraform(struct!.chainCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._chainCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainCert = this._chainCert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._chainCert = undefined;
      this._key = undefined;
      this._passphrase = undefined;
      this._shared = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._chainCert = value.chainCert;
      this._key = value.key;
      this._passphrase = value.passphrase;
      this._shared = value.shared;
      this._uuid = value.uuid;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // chain_cert - computed: false, optional: true, required: false
  private _chainCert?: string; 
  public get chainCert() {
    return this.getStringAttribute('chain_cert');
  }
  public set chainCert(value: string) {
    this._chainCert = value;
  }
  public resetChainCert() {
    this._chainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCertInput() {
    return this._chainCert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class SlbTemplateClientSslCertificateListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateListStructOutputReference {
    return new SlbTemplateClientSslCertificateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSanContainsListStruct {
  /**
  * Forward proxy bypass if Certificate SAN contains another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_contains SlbTemplateClientSsl#certificate_san_contains}
  */
  readonly certificateSanContains?: string;
}

export function slbTemplateClientSslCertificateSanContainsListStructToTerraform(struct?: SlbTemplateClientSslCertificateSanContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_san_contains: cdktf.stringToTerraform(struct!.certificateSanContains),
  }
}


export function slbTemplateClientSslCertificateSanContainsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSanContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_san_contains: {
      value: cdktf.stringToHclTerraform(struct!.certificateSanContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSanContainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSanContainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSanContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSanContains = this._certificateSanContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSanContainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSanContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSanContains = value.certificateSanContains;
    }
  }

  // certificate_san_contains - computed: false, optional: true, required: false
  private _certificateSanContains?: string; 
  public get certificateSanContains() {
    return this.getStringAttribute('certificate_san_contains');
  }
  public set certificateSanContains(value: string) {
    this._certificateSanContains = value;
  }
  public resetCertificateSanContains() {
    this._certificateSanContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanContainsInput() {
    return this._certificateSanContains;
  }
}

export class SlbTemplateClientSslCertificateSanContainsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSanContainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSanContainsListStructOutputReference {
    return new SlbTemplateClientSslCertificateSanContainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSanEndsWithListStruct {
  /**
  * Forward proxy bypass if Certificate SAN ends with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_ends_with SlbTemplateClientSsl#certificate_san_ends_with}
  */
  readonly certificateSanEndsWith?: string;
}

export function slbTemplateClientSslCertificateSanEndsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateSanEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_san_ends_with: cdktf.stringToTerraform(struct!.certificateSanEndsWith),
  }
}


export function slbTemplateClientSslCertificateSanEndsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSanEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_san_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.certificateSanEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSanEndsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSanEndsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSanEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSanEndsWith = this._certificateSanEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSanEndsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSanEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSanEndsWith = value.certificateSanEndsWith;
    }
  }

  // certificate_san_ends_with - computed: false, optional: true, required: false
  private _certificateSanEndsWith?: string; 
  public get certificateSanEndsWith() {
    return this.getStringAttribute('certificate_san_ends_with');
  }
  public set certificateSanEndsWith(value: string) {
    this._certificateSanEndsWith = value;
  }
  public resetCertificateSanEndsWith() {
    this._certificateSanEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanEndsWithInput() {
    return this._certificateSanEndsWith;
  }
}

export class SlbTemplateClientSslCertificateSanEndsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSanEndsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSanEndsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateSanEndsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSanEqualsListStruct {
  /**
  * Forward proxy bypass if Certificate SAN equals another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_equals SlbTemplateClientSsl#certificate_san_equals}
  */
  readonly certificateSanEquals?: string;
}

export function slbTemplateClientSslCertificateSanEqualsListStructToTerraform(struct?: SlbTemplateClientSslCertificateSanEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_san_equals: cdktf.stringToTerraform(struct!.certificateSanEquals),
  }
}


export function slbTemplateClientSslCertificateSanEqualsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSanEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_san_equals: {
      value: cdktf.stringToHclTerraform(struct!.certificateSanEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSanEqualsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSanEqualsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSanEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSanEquals = this._certificateSanEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSanEqualsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSanEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSanEquals = value.certificateSanEquals;
    }
  }

  // certificate_san_equals - computed: false, optional: true, required: false
  private _certificateSanEquals?: string; 
  public get certificateSanEquals() {
    return this.getStringAttribute('certificate_san_equals');
  }
  public set certificateSanEquals(value: string) {
    this._certificateSanEquals = value;
  }
  public resetCertificateSanEquals() {
    this._certificateSanEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanEqualsInput() {
    return this._certificateSanEquals;
  }
}

export class SlbTemplateClientSslCertificateSanEqualsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSanEqualsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSanEqualsListStructOutputReference {
    return new SlbTemplateClientSslCertificateSanEqualsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSanStartsWithListStruct {
  /**
  * Forward proxy bypass if Certificate SAN starts with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_san_starts SlbTemplateClientSsl#certificate_san_starts}
  */
  readonly certificateSanStarts?: string;
}

export function slbTemplateClientSslCertificateSanStartsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateSanStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_san_starts: cdktf.stringToTerraform(struct!.certificateSanStarts),
  }
}


export function slbTemplateClientSslCertificateSanStartsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSanStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_san_starts: {
      value: cdktf.stringToHclTerraform(struct!.certificateSanStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSanStartsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSanStartsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSanStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSanStarts = this._certificateSanStarts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSanStartsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSanStarts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSanStarts = value.certificateSanStarts;
    }
  }

  // certificate_san_starts - computed: false, optional: true, required: false
  private _certificateSanStarts?: string; 
  public get certificateSanStarts() {
    return this.getStringAttribute('certificate_san_starts');
  }
  public set certificateSanStarts(value: string) {
    this._certificateSanStarts = value;
  }
  public resetCertificateSanStarts() {
    this._certificateSanStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanStartsInput() {
    return this._certificateSanStarts;
  }
}

export class SlbTemplateClientSslCertificateSanStartsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSanStartsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSanStartsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateSanStartsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSubjectContainsListStruct {
  /**
  * Forward proxy bypass if Certificate Subject contains another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_contains SlbTemplateClientSsl#certificate_subject_contains}
  */
  readonly certificateSubjectContains?: string;
}

export function slbTemplateClientSslCertificateSubjectContainsListStructToTerraform(struct?: SlbTemplateClientSslCertificateSubjectContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_subject_contains: cdktf.stringToTerraform(struct!.certificateSubjectContains),
  }
}


export function slbTemplateClientSslCertificateSubjectContainsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSubjectContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_subject_contains: {
      value: cdktf.stringToHclTerraform(struct!.certificateSubjectContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSubjectContainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSubjectContainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSubjectContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSubjectContains = this._certificateSubjectContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSubjectContainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSubjectContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSubjectContains = value.certificateSubjectContains;
    }
  }

  // certificate_subject_contains - computed: false, optional: true, required: false
  private _certificateSubjectContains?: string; 
  public get certificateSubjectContains() {
    return this.getStringAttribute('certificate_subject_contains');
  }
  public set certificateSubjectContains(value: string) {
    this._certificateSubjectContains = value;
  }
  public resetCertificateSubjectContains() {
    this._certificateSubjectContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectContainsInput() {
    return this._certificateSubjectContains;
  }
}

export class SlbTemplateClientSslCertificateSubjectContainsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSubjectContainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSubjectContainsListStructOutputReference {
    return new SlbTemplateClientSslCertificateSubjectContainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSubjectEndsWithListStruct {
  /**
  * Forward proxy bypass if Certificate Subject ends with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_ends_with SlbTemplateClientSsl#certificate_subject_ends_with}
  */
  readonly certificateSubjectEndsWith?: string;
}

export function slbTemplateClientSslCertificateSubjectEndsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateSubjectEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_subject_ends_with: cdktf.stringToTerraform(struct!.certificateSubjectEndsWith),
  }
}


export function slbTemplateClientSslCertificateSubjectEndsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSubjectEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_subject_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.certificateSubjectEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSubjectEndsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSubjectEndsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSubjectEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSubjectEndsWith = this._certificateSubjectEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSubjectEndsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSubjectEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSubjectEndsWith = value.certificateSubjectEndsWith;
    }
  }

  // certificate_subject_ends_with - computed: false, optional: true, required: false
  private _certificateSubjectEndsWith?: string; 
  public get certificateSubjectEndsWith() {
    return this.getStringAttribute('certificate_subject_ends_with');
  }
  public set certificateSubjectEndsWith(value: string) {
    this._certificateSubjectEndsWith = value;
  }
  public resetCertificateSubjectEndsWith() {
    this._certificateSubjectEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectEndsWithInput() {
    return this._certificateSubjectEndsWith;
  }
}

export class SlbTemplateClientSslCertificateSubjectEndsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSubjectEndsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSubjectEndsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateSubjectEndsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSubjectEqualsListStruct {
  /**
  * Forward proxy bypass if Certificate Subject equals another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_equals SlbTemplateClientSsl#certificate_subject_equals}
  */
  readonly certificateSubjectEquals?: string;
}

export function slbTemplateClientSslCertificateSubjectEqualsListStructToTerraform(struct?: SlbTemplateClientSslCertificateSubjectEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_subject_equals: cdktf.stringToTerraform(struct!.certificateSubjectEquals),
  }
}


export function slbTemplateClientSslCertificateSubjectEqualsListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSubjectEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_subject_equals: {
      value: cdktf.stringToHclTerraform(struct!.certificateSubjectEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSubjectEqualsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSubjectEqualsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSubjectEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSubjectEquals = this._certificateSubjectEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSubjectEqualsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSubjectEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSubjectEquals = value.certificateSubjectEquals;
    }
  }

  // certificate_subject_equals - computed: false, optional: true, required: false
  private _certificateSubjectEquals?: string; 
  public get certificateSubjectEquals() {
    return this.getStringAttribute('certificate_subject_equals');
  }
  public set certificateSubjectEquals(value: string) {
    this._certificateSubjectEquals = value;
  }
  public resetCertificateSubjectEquals() {
    this._certificateSubjectEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectEqualsInput() {
    return this._certificateSubjectEquals;
  }
}

export class SlbTemplateClientSslCertificateSubjectEqualsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSubjectEqualsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSubjectEqualsListStructOutputReference {
    return new SlbTemplateClientSslCertificateSubjectEqualsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCertificateSubjectStartsWithListStruct {
  /**
  * Forward proxy bypass if Certificate Subject starts with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#certificate_subject_starts SlbTemplateClientSsl#certificate_subject_starts}
  */
  readonly certificateSubjectStarts?: string;
}

export function slbTemplateClientSslCertificateSubjectStartsWithListStructToTerraform(struct?: SlbTemplateClientSslCertificateSubjectStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_subject_starts: cdktf.stringToTerraform(struct!.certificateSubjectStarts),
  }
}


export function slbTemplateClientSslCertificateSubjectStartsWithListStructToHclTerraform(struct?: SlbTemplateClientSslCertificateSubjectStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_subject_starts: {
      value: cdktf.stringToHclTerraform(struct!.certificateSubjectStarts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCertificateSubjectStartsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCertificateSubjectStartsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateSubjectStarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSubjectStarts = this._certificateSubjectStarts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCertificateSubjectStartsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateSubjectStarts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateSubjectStarts = value.certificateSubjectStarts;
    }
  }

  // certificate_subject_starts - computed: false, optional: true, required: false
  private _certificateSubjectStarts?: string; 
  public get certificateSubjectStarts() {
    return this.getStringAttribute('certificate_subject_starts');
  }
  public set certificateSubjectStarts(value: string) {
    this._certificateSubjectStarts = value;
  }
  public resetCertificateSubjectStarts() {
    this._certificateSubjectStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectStartsInput() {
    return this._certificateSubjectStarts;
  }
}

export class SlbTemplateClientSslCertificateSubjectStartsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCertificateSubjectStartsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCertificateSubjectStartsWithListStructOutputReference {
    return new SlbTemplateClientSslCertificateSubjectStartsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCipherWithoutPrioListStruct {
  /**
  * 'SSL3_RSA_DES_192_CBC3_SHA': TLS_RSA_WITH_3DES_EDE_CBC_SHA (0x000A); 'SSL3_RSA_RC4_128_MD5': TLS_RSA_WITH_RC4_128_MD5 (0x0004); 'SSL3_RSA_RC4_128_SHA': TLS_RSA_WITH_RC4_128_SHA (0x0005); 'TLS1_RSA_AES_128_SHA': TLS_RSA_WITH_AES_128_CBC_SHA (0x002F); 'TLS1_RSA_AES_256_SHA': TLS_RSA_WITH_AES_256_CBC_SHA (0x0035); 'TLS1_RSA_AES_128_SHA256': TLS_RSA_WITH_AES_128_CBC_SHA256 (0x003C); 'TLS1_RSA_AES_256_SHA256': TLS_RSA_WITH_AES_256_CBC_SHA256 (0x003D); 'TLS1_DHE_RSA_AES_128_GCM_SHA256': TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x009E); 'TLS1_DHE_RSA_AES_128_SHA': TLS_DHE_RSA_WITH_AES_128_CBC_SHA (0x0033); 'TLS1_DHE_RSA_AES_128_SHA256': TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 (0x0067); 'TLS1_DHE_RSA_AES_256_GCM_SHA384': TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x009F); 'TLS1_DHE_RSA_AES_256_SHA': TLS_DHE_RSA_WITH_AES_256_CBC_SHA (0x0039); 'TLS1_DHE_RSA_AES_256_SHA256': TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 (0x006B); 'TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (0xC02B); 'TLS1_ECDHE_ECDSA_AES_128_SHA': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (0xC009); 'TLS1_ECDHE_ECDSA_AES_128_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 (0xC023); 'TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (0xC02C); 'TLS1_ECDHE_ECDSA_AES_256_SHA': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (0xC00A); 'TLS1_ECDHE_RSA_AES_128_GCM_SHA256': TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xC02F); 'TLS1_ECDHE_RSA_AES_128_SHA': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xC013); 'TLS1_ECDHE_RSA_AES_128_SHA256': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (0xC027); 'TLS1_ECDHE_RSA_AES_256_GCM_SHA384': TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xC030); 'TLS1_ECDHE_RSA_AES_256_SHA': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xC014); 'TLS1_RSA_AES_128_GCM_SHA256': TLS_RSA_WITH_AES_128_GCM_SHA256 (0x009C); 'TLS1_RSA_AES_256_GCM_SHA384': TLS_RSA_WITH_AES_256_GCM_SHA384 (0x009D); 'TLS1_ECDHE_RSA_AES_256_SHA384': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (0xC028); 'TLS1_ECDHE_ECDSA_AES_256_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 (0xC024); 'TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA8); 'TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA9); 'TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256': TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCAA);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cipher_wo_prio SlbTemplateClientSsl#cipher_wo_prio}
  */
  readonly cipherWoPrio?: string;
}

export function slbTemplateClientSslCipherWithoutPrioListStructToTerraform(struct?: SlbTemplateClientSslCipherWithoutPrioListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_wo_prio: cdktf.stringToTerraform(struct!.cipherWoPrio),
  }
}


export function slbTemplateClientSslCipherWithoutPrioListStructToHclTerraform(struct?: SlbTemplateClientSslCipherWithoutPrioListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_wo_prio: {
      value: cdktf.stringToHclTerraform(struct!.cipherWoPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCipherWithoutPrioListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCipherWithoutPrioListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherWoPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherWoPrio = this._cipherWoPrio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCipherWithoutPrioListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherWoPrio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherWoPrio = value.cipherWoPrio;
    }
  }

  // cipher_wo_prio - computed: false, optional: true, required: false
  private _cipherWoPrio?: string; 
  public get cipherWoPrio() {
    return this.getStringAttribute('cipher_wo_prio');
  }
  public set cipherWoPrio(value: string) {
    this._cipherWoPrio = value;
  }
  public resetCipherWoPrio() {
    this._cipherWoPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherWoPrioInput() {
    return this._cipherWoPrio;
  }
}

export class SlbTemplateClientSslCipherWithoutPrioListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCipherWithoutPrioListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCipherWithoutPrioListStructOutputReference {
    return new SlbTemplateClientSslCipherWithoutPrioListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientAuthContainsListStruct {
  /**
  * Forward proxy bypass if SNI string contains another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_contains SlbTemplateClientSsl#client_auth_contains}
  */
  readonly clientAuthContains?: string;
}

export function slbTemplateClientSslClientAuthContainsListStructToTerraform(struct?: SlbTemplateClientSslClientAuthContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth_contains: cdktf.stringToTerraform(struct!.clientAuthContains),
  }
}


export function slbTemplateClientSslClientAuthContainsListStructToHclTerraform(struct?: SlbTemplateClientSslClientAuthContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth_contains: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientAuthContainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientAuthContainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthContains = this._clientAuthContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientAuthContainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthContains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthContains = value.clientAuthContains;
    }
  }

  // client_auth_contains - computed: false, optional: true, required: false
  private _clientAuthContains?: string; 
  public get clientAuthContains() {
    return this.getStringAttribute('client_auth_contains');
  }
  public set clientAuthContains(value: string) {
    this._clientAuthContains = value;
  }
  public resetClientAuthContains() {
    this._clientAuthContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthContainsInput() {
    return this._clientAuthContains;
  }
}

export class SlbTemplateClientSslClientAuthContainsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientAuthContainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientAuthContainsListStructOutputReference {
    return new SlbTemplateClientSslClientAuthContainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientAuthEndsWithListStruct {
  /**
  * Forward proxy bypass if SNI string ends with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_ends_with SlbTemplateClientSsl#client_auth_ends_with}
  */
  readonly clientAuthEndsWith?: string;
}

export function slbTemplateClientSslClientAuthEndsWithListStructToTerraform(struct?: SlbTemplateClientSslClientAuthEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth_ends_with: cdktf.stringToTerraform(struct!.clientAuthEndsWith),
  }
}


export function slbTemplateClientSslClientAuthEndsWithListStructToHclTerraform(struct?: SlbTemplateClientSslClientAuthEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth_ends_with: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthEndsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientAuthEndsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientAuthEndsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthEndsWith = this._clientAuthEndsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientAuthEndsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthEndsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthEndsWith = value.clientAuthEndsWith;
    }
  }

  // client_auth_ends_with - computed: false, optional: true, required: false
  private _clientAuthEndsWith?: string; 
  public get clientAuthEndsWith() {
    return this.getStringAttribute('client_auth_ends_with');
  }
  public set clientAuthEndsWith(value: string) {
    this._clientAuthEndsWith = value;
  }
  public resetClientAuthEndsWith() {
    this._clientAuthEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthEndsWithInput() {
    return this._clientAuthEndsWith;
  }
}

export class SlbTemplateClientSslClientAuthEndsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientAuthEndsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientAuthEndsWithListStructOutputReference {
    return new SlbTemplateClientSslClientAuthEndsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientAuthEqualsListStruct {
  /**
  * Forward proxy bypass if SNI string equals another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_equals SlbTemplateClientSsl#client_auth_equals}
  */
  readonly clientAuthEquals?: string;
}

export function slbTemplateClientSslClientAuthEqualsListStructToTerraform(struct?: SlbTemplateClientSslClientAuthEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth_equals: cdktf.stringToTerraform(struct!.clientAuthEquals),
  }
}


export function slbTemplateClientSslClientAuthEqualsListStructToHclTerraform(struct?: SlbTemplateClientSslClientAuthEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth_equals: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientAuthEqualsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientAuthEqualsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthEquals = this._clientAuthEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientAuthEqualsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthEquals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthEquals = value.clientAuthEquals;
    }
  }

  // client_auth_equals - computed: false, optional: true, required: false
  private _clientAuthEquals?: string; 
  public get clientAuthEquals() {
    return this.getStringAttribute('client_auth_equals');
  }
  public set clientAuthEquals(value: string) {
    this._clientAuthEquals = value;
  }
  public resetClientAuthEquals() {
    this._clientAuthEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthEqualsInput() {
    return this._clientAuthEquals;
  }
}

export class SlbTemplateClientSslClientAuthEqualsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientAuthEqualsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientAuthEqualsListStructOutputReference {
    return new SlbTemplateClientSslClientAuthEqualsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientAuthStartsWithListStruct {
  /**
  * Forward proxy bypass if SNI string starts with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_auth_starts_with SlbTemplateClientSsl#client_auth_starts_with}
  */
  readonly clientAuthStartsWith?: string;
}

export function slbTemplateClientSslClientAuthStartsWithListStructToTerraform(struct?: SlbTemplateClientSslClientAuthStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth_starts_with: cdktf.stringToTerraform(struct!.clientAuthStartsWith),
  }
}


export function slbTemplateClientSslClientAuthStartsWithListStructToHclTerraform(struct?: SlbTemplateClientSslClientAuthStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth_starts_with: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthStartsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientAuthStartsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientAuthStartsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthStartsWith = this._clientAuthStartsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientAuthStartsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthStartsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthStartsWith = value.clientAuthStartsWith;
    }
  }

  // client_auth_starts_with - computed: false, optional: true, required: false
  private _clientAuthStartsWith?: string; 
  public get clientAuthStartsWith() {
    return this.getStringAttribute('client_auth_starts_with');
  }
  public set clientAuthStartsWith(value: string) {
    this._clientAuthStartsWith = value;
  }
  public resetClientAuthStartsWith() {
    this._clientAuthStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthStartsWithInput() {
    return this._clientAuthStartsWith;
  }
}

export class SlbTemplateClientSslClientAuthStartsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientAuthStartsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientAuthStartsWithListStructOutputReference {
    return new SlbTemplateClientSslClientAuthStartsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientIpv4ListStruct {
  /**
  * IPV4 client class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ipv4_list_name SlbTemplateClientSsl#client_ipv4_list_name}
  */
  readonly clientIpv4ListName?: string;
}

export function slbTemplateClientSslClientIpv4ListStructToTerraform(struct?: SlbTemplateClientSslClientIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ipv4_list_name: cdktf.stringToTerraform(struct!.clientIpv4ListName),
  }
}


export function slbTemplateClientSslClientIpv4ListStructToHclTerraform(struct?: SlbTemplateClientSslClientIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ipv4_list_name: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv4ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpv4ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv4ListName = this._clientIpv4ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpv4ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpv4ListName = value.clientIpv4ListName;
    }
  }

  // client_ipv4_list_name - computed: false, optional: true, required: false
  private _clientIpv4ListName?: string; 
  public get clientIpv4ListName() {
    return this.getStringAttribute('client_ipv4_list_name');
  }
  public set clientIpv4ListName(value: string) {
    this._clientIpv4ListName = value;
  }
  public resetClientIpv4ListName() {
    this._clientIpv4ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4ListNameInput() {
    return this._clientIpv4ListName;
  }
}

export class SlbTemplateClientSslClientIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientIpv4ListStructOutputReference {
    return new SlbTemplateClientSslClientIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslClientIpv6ListStruct {
  /**
  * IPV6 client class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_ipv6_list_name SlbTemplateClientSsl#client_ipv6_list_name}
  */
  readonly clientIpv6ListName?: string;
}

export function slbTemplateClientSslClientIpv6ListStructToTerraform(struct?: SlbTemplateClientSslClientIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ipv6_list_name: cdktf.stringToTerraform(struct!.clientIpv6ListName),
  }
}


export function slbTemplateClientSslClientIpv6ListStructToHclTerraform(struct?: SlbTemplateClientSslClientIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ipv6_list_name: {
      value: cdktf.stringToHclTerraform(struct!.clientIpv6ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslClientIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslClientIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpv6ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpv6ListName = this._clientIpv6ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslClientIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpv6ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpv6ListName = value.clientIpv6ListName;
    }
  }

  // client_ipv6_list_name - computed: false, optional: true, required: false
  private _clientIpv6ListName?: string; 
  public get clientIpv6ListName() {
    return this.getStringAttribute('client_ipv6_list_name');
  }
  public set clientIpv6ListName(value: string) {
    this._clientIpv6ListName = value;
  }
  public resetClientIpv6ListName() {
    this._clientIpv6ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv6ListNameInput() {
    return this._clientIpv6ListName;
  }
}

export class SlbTemplateClientSslClientIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslClientIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslClientIpv6ListStructOutputReference {
    return new SlbTemplateClientSslClientIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslContainsListStruct {
  /**
  * Forward proxy bypass if SNI string contains another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#contains SlbTemplateClientSsl#contains}
  */
  readonly contains?: string;
}

export function slbTemplateClientSslContainsListStructToTerraform(struct?: SlbTemplateClientSslContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
  }
}


export function slbTemplateClientSslContainsListStructToHclTerraform(struct?: SlbTemplateClientSslContainsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslContainsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslContainsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslContainsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }
}

export class SlbTemplateClientSslContainsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslContainsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslContainsListStructOutputReference {
    return new SlbTemplateClientSslContainsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslCrlCerts {
  /**
  * Certificate Revocation Lists (Certificate Revocation Lists file name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#crl SlbTemplateClientSsl#crl}
  */
  readonly crl?: string;
  /**
  * Certificate Revocation Lists Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#crl_shared SlbTemplateClientSsl#crl_shared}
  */
  readonly crlShared?: number;
}

export function slbTemplateClientSslCrlCertsToTerraform(struct?: SlbTemplateClientSslCrlCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl: cdktf.stringToTerraform(struct!.crl),
    crl_shared: cdktf.numberToTerraform(struct!.crlShared),
  }
}


export function slbTemplateClientSslCrlCertsToHclTerraform(struct?: SlbTemplateClientSslCrlCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl: {
      value: cdktf.stringToHclTerraform(struct!.crl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_shared: {
      value: cdktf.numberToHclTerraform(struct!.crlShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslCrlCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslCrlCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crl !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl;
    }
    if (this._crlShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlShared = this._crlShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslCrlCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crl = undefined;
      this._crlShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crl = value.crl;
      this._crlShared = value.crlShared;
    }
  }

  // crl - computed: false, optional: true, required: false
  private _crl?: string; 
  public get crl() {
    return this.getStringAttribute('crl');
  }
  public set crl(value: string) {
    this._crl = value;
  }
  public resetCrl() {
    this._crl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl;
  }

  // crl_shared - computed: false, optional: true, required: false
  private _crlShared?: number; 
  public get crlShared() {
    return this.getNumberAttribute('crl_shared');
  }
  public set crlShared(value: number) {
    this._crlShared = value;
  }
  public resetCrlShared() {
    this._crlShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSharedInput() {
    return this._crlShared;
  }
}

export class SlbTemplateClientSslCrlCertsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslCrlCerts[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslCrlCertsOutputReference {
    return new SlbTemplateClientSslCrlCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslEcListStruct {
  /**
  * 'secp256r1': X9_62_prime256v1; 'secp384r1': secp384r1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ec SlbTemplateClientSsl#ec}
  */
  readonly ec?: string;
}

export function slbTemplateClientSslEcListStructToTerraform(struct?: SlbTemplateClientSslEcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec: cdktf.stringToTerraform(struct!.ec),
  }
}


export function slbTemplateClientSslEcListStructToHclTerraform(struct?: SlbTemplateClientSslEcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec: {
      value: cdktf.stringToHclTerraform(struct!.ec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslEcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslEcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec = this._ec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslEcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec = value.ec;
    }
  }

  // ec - computed: false, optional: true, required: false
  private _ec?: string; 
  public get ec() {
    return this.getStringAttribute('ec');
  }
  public set ec(value: string) {
    this._ec = value;
  }
  public resetEc() {
    this._ec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecInput() {
    return this._ec;
  }
}

export class SlbTemplateClientSslEcListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslEcListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslEcListStructOutputReference {
    return new SlbTemplateClientSslEcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslEndsWithListStruct {
  /**
  * Forward proxy bypass if SNI string ends with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#ends_with SlbTemplateClientSsl#ends_with}
  */
  readonly endsWith?: string;
}

export function slbTemplateClientSslEndsWithListStructToTerraform(struct?: SlbTemplateClientSslEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktf.stringToTerraform(struct!.endsWith),
  }
}


export function slbTemplateClientSslEndsWithListStructToHclTerraform(struct?: SlbTemplateClientSslEndsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_with: {
      value: cdktf.stringToHclTerraform(struct!.endsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslEndsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslEndsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslEndsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
    }
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string; 
  public get endsWith() {
    return this.getStringAttribute('ends_with');
  }
  public set endsWith(value: string) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }
}

export class SlbTemplateClientSslEndsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslEndsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslEndsWithListStructOutputReference {
    return new SlbTemplateClientSslEndsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslEqualsListStruct {
  /**
  * Forward proxy bypass if SNI string equals another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#equals SlbTemplateClientSsl#equals}
  */
  readonly equalTo?: string;
}

export function slbTemplateClientSslEqualsListStructToTerraform(struct?: SlbTemplateClientSslEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.stringToTerraform(struct!.equalTo),
  }
}


export function slbTemplateClientSslEqualsListStructToHclTerraform(struct?: SlbTemplateClientSslEqualsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslEqualsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslEqualsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslEqualsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equals = value.equalTo;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }
}

export class SlbTemplateClientSslEqualsListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslEqualsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslEqualsListStructOutputReference {
    return new SlbTemplateClientSslEqualsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslExceptionClientIpv4ListStruct {
  /**
  * IPV4 exception client class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_client_ipv4_list_name SlbTemplateClientSsl#exception_client_ipv4_list_name}
  */
  readonly exceptionClientIpv4ListName?: string;
}

export function slbTemplateClientSslExceptionClientIpv4ListStructToTerraform(struct?: SlbTemplateClientSslExceptionClientIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_client_ipv4_list_name: cdktf.stringToTerraform(struct!.exceptionClientIpv4ListName),
  }
}


export function slbTemplateClientSslExceptionClientIpv4ListStructToHclTerraform(struct?: SlbTemplateClientSslExceptionClientIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_client_ipv4_list_name: {
      value: cdktf.stringToHclTerraform(struct!.exceptionClientIpv4ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionClientIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslExceptionClientIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionClientIpv4ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionClientIpv4ListName = this._exceptionClientIpv4ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionClientIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptionClientIpv4ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptionClientIpv4ListName = value.exceptionClientIpv4ListName;
    }
  }

  // exception_client_ipv4_list_name - computed: false, optional: true, required: false
  private _exceptionClientIpv4ListName?: string; 
  public get exceptionClientIpv4ListName() {
    return this.getStringAttribute('exception_client_ipv4_list_name');
  }
  public set exceptionClientIpv4ListName(value: string) {
    this._exceptionClientIpv4ListName = value;
  }
  public resetExceptionClientIpv4ListName() {
    this._exceptionClientIpv4ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionClientIpv4ListNameInput() {
    return this._exceptionClientIpv4ListName;
  }
}

export class SlbTemplateClientSslExceptionClientIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslExceptionClientIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslExceptionClientIpv4ListStructOutputReference {
    return new SlbTemplateClientSslExceptionClientIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslExceptionClientIpv6ListStruct {
  /**
  * IPV6 exception client class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_client_ipv6_list_name SlbTemplateClientSsl#exception_client_ipv6_list_name}
  */
  readonly exceptionClientIpv6ListName?: string;
}

export function slbTemplateClientSslExceptionClientIpv6ListStructToTerraform(struct?: SlbTemplateClientSslExceptionClientIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_client_ipv6_list_name: cdktf.stringToTerraform(struct!.exceptionClientIpv6ListName),
  }
}


export function slbTemplateClientSslExceptionClientIpv6ListStructToHclTerraform(struct?: SlbTemplateClientSslExceptionClientIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_client_ipv6_list_name: {
      value: cdktf.stringToHclTerraform(struct!.exceptionClientIpv6ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionClientIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslExceptionClientIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionClientIpv6ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionClientIpv6ListName = this._exceptionClientIpv6ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionClientIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptionClientIpv6ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptionClientIpv6ListName = value.exceptionClientIpv6ListName;
    }
  }

  // exception_client_ipv6_list_name - computed: false, optional: true, required: false
  private _exceptionClientIpv6ListName?: string; 
  public get exceptionClientIpv6ListName() {
    return this.getStringAttribute('exception_client_ipv6_list_name');
  }
  public set exceptionClientIpv6ListName(value: string) {
    this._exceptionClientIpv6ListName = value;
  }
  public resetExceptionClientIpv6ListName() {
    this._exceptionClientIpv6ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionClientIpv6ListNameInput() {
    return this._exceptionClientIpv6ListName;
  }
}

export class SlbTemplateClientSslExceptionClientIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslExceptionClientIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslExceptionClientIpv6ListStructOutputReference {
    return new SlbTemplateClientSslExceptionClientIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslExceptionServerIpv4ListStruct {
  /**
  * IPV4 exception server class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_server_ipv4_list_name SlbTemplateClientSsl#exception_server_ipv4_list_name}
  */
  readonly exceptionServerIpv4ListName?: string;
}

export function slbTemplateClientSslExceptionServerIpv4ListStructToTerraform(struct?: SlbTemplateClientSslExceptionServerIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_server_ipv4_list_name: cdktf.stringToTerraform(struct!.exceptionServerIpv4ListName),
  }
}


export function slbTemplateClientSslExceptionServerIpv4ListStructToHclTerraform(struct?: SlbTemplateClientSslExceptionServerIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_server_ipv4_list_name: {
      value: cdktf.stringToHclTerraform(struct!.exceptionServerIpv4ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionServerIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslExceptionServerIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionServerIpv4ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionServerIpv4ListName = this._exceptionServerIpv4ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionServerIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptionServerIpv4ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptionServerIpv4ListName = value.exceptionServerIpv4ListName;
    }
  }

  // exception_server_ipv4_list_name - computed: false, optional: true, required: false
  private _exceptionServerIpv4ListName?: string; 
  public get exceptionServerIpv4ListName() {
    return this.getStringAttribute('exception_server_ipv4_list_name');
  }
  public set exceptionServerIpv4ListName(value: string) {
    this._exceptionServerIpv4ListName = value;
  }
  public resetExceptionServerIpv4ListName() {
    this._exceptionServerIpv4ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionServerIpv4ListNameInput() {
    return this._exceptionServerIpv4ListName;
  }
}

export class SlbTemplateClientSslExceptionServerIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslExceptionServerIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslExceptionServerIpv4ListStructOutputReference {
    return new SlbTemplateClientSslExceptionServerIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslExceptionServerIpv6ListStruct {
  /**
  * IPV6 exception server class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_server_ipv6_list_name SlbTemplateClientSsl#exception_server_ipv6_list_name}
  */
  readonly exceptionServerIpv6ListName?: string;
}

export function slbTemplateClientSslExceptionServerIpv6ListStructToTerraform(struct?: SlbTemplateClientSslExceptionServerIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_server_ipv6_list_name: cdktf.stringToTerraform(struct!.exceptionServerIpv6ListName),
  }
}


export function slbTemplateClientSslExceptionServerIpv6ListStructToHclTerraform(struct?: SlbTemplateClientSslExceptionServerIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_server_ipv6_list_name: {
      value: cdktf.stringToHclTerraform(struct!.exceptionServerIpv6ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionServerIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslExceptionServerIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionServerIpv6ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionServerIpv6ListName = this._exceptionServerIpv6ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionServerIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptionServerIpv6ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptionServerIpv6ListName = value.exceptionServerIpv6ListName;
    }
  }

  // exception_server_ipv6_list_name - computed: false, optional: true, required: false
  private _exceptionServerIpv6ListName?: string; 
  public get exceptionServerIpv6ListName() {
    return this.getStringAttribute('exception_server_ipv6_list_name');
  }
  public set exceptionServerIpv6ListName(value: string) {
    this._exceptionServerIpv6ListName = value;
  }
  public resetExceptionServerIpv6ListName() {
    this._exceptionServerIpv6ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionServerIpv6ListNameInput() {
    return this._exceptionServerIpv6ListName;
  }
}

export class SlbTemplateClientSslExceptionServerIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslExceptionServerIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslExceptionServerIpv6ListStructOutputReference {
    return new SlbTemplateClientSslExceptionServerIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslExceptionWebCategory {
  /**
  * Category Abortion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_abortion SlbTemplateClientSsl#exception_abortion}
  */
  readonly exceptionAbortion?: number;
  /**
  * Category Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_adult_and_pornography SlbTemplateClientSsl#exception_adult_and_pornography}
  */
  readonly exceptionAdultAndPornography?: number;
  /**
  * Category Alcohol and Tobacco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_alcohol_and_tobacco SlbTemplateClientSsl#exception_alcohol_and_tobacco}
  */
  readonly exceptionAlcoholAndTobacco?: number;
  /**
  * Category Auctions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_auctions SlbTemplateClientSsl#exception_auctions}
  */
  readonly exceptionAuctions?: number;
  /**
  * Category Bot Nets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_bot_nets SlbTemplateClientSsl#exception_bot_nets}
  */
  readonly exceptionBotNets?: number;
  /**
  * Category Business and Economy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_business_and_economy SlbTemplateClientSsl#exception_business_and_economy}
  */
  readonly exceptionBusinessAndEconomy?: number;
  /**
  * Category CDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_cdns SlbTemplateClientSsl#exception_cdns}
  */
  readonly exceptionCdns?: number;
  /**
  * Category Cheating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_cheating SlbTemplateClientSsl#exception_cheating}
  */
  readonly exceptionCheating?: number;
  /**
  * Category Computer and Internet Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_computer_and_internet_info SlbTemplateClientSsl#exception_computer_and_internet_info}
  */
  readonly exceptionComputerAndInternetInfo?: number;
  /**
  * Category Computer and Internet Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_computer_and_internet_security SlbTemplateClientSsl#exception_computer_and_internet_security}
  */
  readonly exceptionComputerAndInternetSecurity?: number;
  /**
  * Category Cult and Occult
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_cult_and_occult SlbTemplateClientSsl#exception_cult_and_occult}
  */
  readonly exceptionCultAndOccult?: number;
  /**
  * Category Dating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_dating SlbTemplateClientSsl#exception_dating}
  */
  readonly exceptionDating?: number;
  /**
  * Category Dead Sites (db Ops only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_dead_sites SlbTemplateClientSsl#exception_dead_sites}
  */
  readonly exceptionDeadSites?: number;
  /**
  * Category Abused Drugs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_drugs SlbTemplateClientSsl#exception_drugs}
  */
  readonly exceptionDrugs?: number;
  /**
  * Dynamically Generated Content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_dynamically_generated_content SlbTemplateClientSsl#exception_dynamically_generated_content}
  */
  readonly exceptionDynamicallyGeneratedContent?: number;
  /**
  * Category Educational Institutions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_educational_institutions SlbTemplateClientSsl#exception_educational_institutions}
  */
  readonly exceptionEducationalInstitutions?: number;
  /**
  * Category Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_entertainment_and_arts SlbTemplateClientSsl#exception_entertainment_and_arts}
  */
  readonly exceptionEntertainmentAndArts?: number;
  /**
  * Category Fashion and Beauty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_fashion_and_beauty SlbTemplateClientSsl#exception_fashion_and_beauty}
  */
  readonly exceptionFashionAndBeauty?: number;
  /**
  * Category Financial Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_financial_services SlbTemplateClientSsl#exception_financial_services}
  */
  readonly exceptionFinancialServices?: number;
  /**
  * Category Gambling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_gambling SlbTemplateClientSsl#exception_gambling}
  */
  readonly exceptionGambling?: number;
  /**
  * Category Games
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_games SlbTemplateClientSsl#exception_games}
  */
  readonly exceptionGames?: number;
  /**
  * Category Government
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_government SlbTemplateClientSsl#exception_government}
  */
  readonly exceptionGovernment?: number;
  /**
  * Category Gross
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_gross SlbTemplateClientSsl#exception_gross}
  */
  readonly exceptionGross?: number;
  /**
  * Category Hacking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_hacking SlbTemplateClientSsl#exception_hacking}
  */
  readonly exceptionHacking?: number;
  /**
  * Category Hate and Racism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_hate_and_racism SlbTemplateClientSsl#exception_hate_and_racism}
  */
  readonly exceptionHateAndRacism?: number;
  /**
  * Category Health and Medicine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_health_and_medicine SlbTemplateClientSsl#exception_health_and_medicine}
  */
  readonly exceptionHealthAndMedicine?: number;
  /**
  * Category Home and Garden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_home_and_garden SlbTemplateClientSsl#exception_home_and_garden}
  */
  readonly exceptionHomeAndGarden?: number;
  /**
  * Category Hunting and Fishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_hunting_and_fishing SlbTemplateClientSsl#exception_hunting_and_fishing}
  */
  readonly exceptionHuntingAndFishing?: number;
  /**
  * Category Illegal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_illegal SlbTemplateClientSsl#exception_illegal}
  */
  readonly exceptionIllegal?: number;
  /**
  * Category Illegal join Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_illegal_pornography SlbTemplateClientSsl#exception_illegal_pornography}
  */
  readonly exceptionIllegalPornography?: number;
  /**
  * Category Image and Video Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_image_and_video_search SlbTemplateClientSsl#exception_image_and_video_search}
  */
  readonly exceptionImageAndVideoSearch?: number;
  /**
  * Category Internet Communications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_internet_communications SlbTemplateClientSsl#exception_internet_communications}
  */
  readonly exceptionInternetCommunications?: number;
  /**
  * Category Internet Portals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_internet_portals SlbTemplateClientSsl#exception_internet_portals}
  */
  readonly exceptionInternetPortals?: number;
  /**
  * Category Job Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_job_search SlbTemplateClientSsl#exception_job_search}
  */
  readonly exceptionJobSearch?: number;
  /**
  * Category Keyloggers and Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_keyloggers_and_monitoring SlbTemplateClientSsl#exception_keyloggers_and_monitoring}
  */
  readonly exceptionKeyloggersAndMonitoring?: number;
  /**
  * Category Kids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_kids SlbTemplateClientSsl#exception_kids}
  */
  readonly exceptionKids?: number;
  /**
  * Category Legal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_legal SlbTemplateClientSsl#exception_legal}
  */
  readonly exceptionLegal?: number;
  /**
  * Category Local Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_local_information SlbTemplateClientSsl#exception_local_information}
  */
  readonly exceptionLocalInformation?: number;
  /**
  * Category Malware Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_malware_sites SlbTemplateClientSsl#exception_malware_sites}
  */
  readonly exceptionMalwareSites?: number;
  /**
  * Category Marijuana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_marijuana SlbTemplateClientSsl#exception_marijuana}
  */
  readonly exceptionMarijuana?: number;
  /**
  * Category Military
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_military SlbTemplateClientSsl#exception_military}
  */
  readonly exceptionMilitary?: number;
  /**
  * Category Motor Vehicles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_motor_vehicles SlbTemplateClientSsl#exception_motor_vehicles}
  */
  readonly exceptionMotorVehicles?: number;
  /**
  * Category Music
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_music SlbTemplateClientSsl#exception_music}
  */
  readonly exceptionMusic?: number;
  /**
  * Category News and Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_news_and_media SlbTemplateClientSsl#exception_news_and_media}
  */
  readonly exceptionNewsAndMedia?: number;
  /**
  * Category Nudity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_nudity SlbTemplateClientSsl#exception_nudity}
  */
  readonly exceptionNudity?: number;
  /**
  * Category Nudity join Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_nudity_artistic SlbTemplateClientSsl#exception_nudity_artistic}
  */
  readonly exceptionNudityArtistic?: number;
  /**
  * Category Online Greeting cards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_online_greeting_cards SlbTemplateClientSsl#exception_online_greeting_cards}
  */
  readonly exceptionOnlineGreetingCards?: number;
  /**
  * Category Parked Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_parked_domains SlbTemplateClientSsl#exception_parked_domains}
  */
  readonly exceptionParkedDomains?: number;
  /**
  * Category Pay to Surf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_pay_to_surf SlbTemplateClientSsl#exception_pay_to_surf}
  */
  readonly exceptionPayToSurf?: number;
  /**
  * Category Peer to Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_peer_to_peer SlbTemplateClientSsl#exception_peer_to_peer}
  */
  readonly exceptionPeerToPeer?: number;
  /**
  * Category Personal sites and Blogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_personal_sites_and_blogs SlbTemplateClientSsl#exception_personal_sites_and_blogs}
  */
  readonly exceptionPersonalSitesAndBlogs?: number;
  /**
  * Category Personal Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_personal_storage SlbTemplateClientSsl#exception_personal_storage}
  */
  readonly exceptionPersonalStorage?: number;
  /**
  * Category Philosophy and Political Advocacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_philosophy_and_politics SlbTemplateClientSsl#exception_philosophy_and_politics}
  */
  readonly exceptionPhilosophyAndPolitics?: number;
  /**
  * Category Phishing and Other Frauds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_phishing_and_other_fraud SlbTemplateClientSsl#exception_phishing_and_other_fraud}
  */
  readonly exceptionPhishingAndOtherFraud?: number;
  /**
  * Category Proxy Avoid and Anonymizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_proxy_avoid_and_anonymizers SlbTemplateClientSsl#exception_proxy_avoid_and_anonymizers}
  */
  readonly exceptionProxyAvoidAndAnonymizers?: number;
  /**
  * Category Questionable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_questionable SlbTemplateClientSsl#exception_questionable}
  */
  readonly exceptionQuestionable?: number;
  /**
  * Category Real Estate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_real_estate SlbTemplateClientSsl#exception_real_estate}
  */
  readonly exceptionRealEstate?: number;
  /**
  * Category Recreation and Hobbies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_recreation_and_hobbies SlbTemplateClientSsl#exception_recreation_and_hobbies}
  */
  readonly exceptionRecreationAndHobbies?: number;
  /**
  * Category Reference and Research
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_reference_and_research SlbTemplateClientSsl#exception_reference_and_research}
  */
  readonly exceptionReferenceAndResearch?: number;
  /**
  * Category Religion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_religion SlbTemplateClientSsl#exception_religion}
  */
  readonly exceptionReligion?: number;
  /**
  * Category Search Engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_search_engines SlbTemplateClientSsl#exception_search_engines}
  */
  readonly exceptionSearchEngines?: number;
  /**
  * Category Sex Education
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_sex_education SlbTemplateClientSsl#exception_sex_education}
  */
  readonly exceptionSexEducation?: number;
  /**
  * Category Shareware and Freeware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_shareware_and_freeware SlbTemplateClientSsl#exception_shareware_and_freeware}
  */
  readonly exceptionSharewareAndFreeware?: number;
  /**
  * Category Shopping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_shopping SlbTemplateClientSsl#exception_shopping}
  */
  readonly exceptionShopping?: number;
  /**
  * Category Social Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_social_network SlbTemplateClientSsl#exception_social_network}
  */
  readonly exceptionSocialNetwork?: number;
  /**
  * Category Society
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_society SlbTemplateClientSsl#exception_society}
  */
  readonly exceptionSociety?: number;
  /**
  * Category SPAM URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_spam_urls SlbTemplateClientSsl#exception_spam_urls}
  */
  readonly exceptionSpamUrls?: number;
  /**
  * Category Sports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_sports SlbTemplateClientSsl#exception_sports}
  */
  readonly exceptionSports?: number;
  /**
  * Category Spyware and Adware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_spyware_and_adware SlbTemplateClientSsl#exception_spyware_and_adware}
  */
  readonly exceptionSpywareAndAdware?: number;
  /**
  * Category Stock Advice and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_stock_advice_and_tools SlbTemplateClientSsl#exception_stock_advice_and_tools}
  */
  readonly exceptionStockAdviceAndTools?: number;
  /**
  * Category Streaming Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_streaming_media SlbTemplateClientSsl#exception_streaming_media}
  */
  readonly exceptionStreamingMedia?: number;
  /**
  * Category Swimsuits and Intimate Apparel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_swimsuits_and_intimate_apparel SlbTemplateClientSsl#exception_swimsuits_and_intimate_apparel}
  */
  readonly exceptionSwimsuitsAndIntimateApparel?: number;
  /**
  * Category Training and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_training_and_tools SlbTemplateClientSsl#exception_training_and_tools}
  */
  readonly exceptionTrainingAndTools?: number;
  /**
  * Category Translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_translation SlbTemplateClientSsl#exception_translation}
  */
  readonly exceptionTranslation?: number;
  /**
  * Category Travel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_travel SlbTemplateClientSsl#exception_travel}
  */
  readonly exceptionTravel?: number;
  /**
  * Uncategorized URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_uncategorized SlbTemplateClientSsl#exception_uncategorized}
  */
  readonly exceptionUncategorized?: number;
  /**
  * Category Violence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_violence SlbTemplateClientSsl#exception_violence}
  */
  readonly exceptionViolence?: number;
  /**
  * Category Weapons
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_weapons SlbTemplateClientSsl#exception_weapons}
  */
  readonly exceptionWeapons?: number;
  /**
  * Category Web Advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_web_advertisements SlbTemplateClientSsl#exception_web_advertisements}
  */
  readonly exceptionWebAdvertisements?: number;
  /**
  * Category Web based email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_web_based_email SlbTemplateClientSsl#exception_web_based_email}
  */
  readonly exceptionWebBasedEmail?: number;
  /**
  * Category Web Hosting Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_web_hosting_sites SlbTemplateClientSsl#exception_web_hosting_sites}
  */
  readonly exceptionWebHostingSites?: number;
}

export function slbTemplateClientSslExceptionWebCategoryToTerraform(struct?: SlbTemplateClientSslExceptionWebCategoryOutputReference | SlbTemplateClientSslExceptionWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_abortion: cdktf.numberToTerraform(struct!.exceptionAbortion),
    exception_adult_and_pornography: cdktf.numberToTerraform(struct!.exceptionAdultAndPornography),
    exception_alcohol_and_tobacco: cdktf.numberToTerraform(struct!.exceptionAlcoholAndTobacco),
    exception_auctions: cdktf.numberToTerraform(struct!.exceptionAuctions),
    exception_bot_nets: cdktf.numberToTerraform(struct!.exceptionBotNets),
    exception_business_and_economy: cdktf.numberToTerraform(struct!.exceptionBusinessAndEconomy),
    exception_cdns: cdktf.numberToTerraform(struct!.exceptionCdns),
    exception_cheating: cdktf.numberToTerraform(struct!.exceptionCheating),
    exception_computer_and_internet_info: cdktf.numberToTerraform(struct!.exceptionComputerAndInternetInfo),
    exception_computer_and_internet_security: cdktf.numberToTerraform(struct!.exceptionComputerAndInternetSecurity),
    exception_cult_and_occult: cdktf.numberToTerraform(struct!.exceptionCultAndOccult),
    exception_dating: cdktf.numberToTerraform(struct!.exceptionDating),
    exception_dead_sites: cdktf.numberToTerraform(struct!.exceptionDeadSites),
    exception_drugs: cdktf.numberToTerraform(struct!.exceptionDrugs),
    exception_dynamically_generated_content: cdktf.numberToTerraform(struct!.exceptionDynamicallyGeneratedContent),
    exception_educational_institutions: cdktf.numberToTerraform(struct!.exceptionEducationalInstitutions),
    exception_entertainment_and_arts: cdktf.numberToTerraform(struct!.exceptionEntertainmentAndArts),
    exception_fashion_and_beauty: cdktf.numberToTerraform(struct!.exceptionFashionAndBeauty),
    exception_financial_services: cdktf.numberToTerraform(struct!.exceptionFinancialServices),
    exception_gambling: cdktf.numberToTerraform(struct!.exceptionGambling),
    exception_games: cdktf.numberToTerraform(struct!.exceptionGames),
    exception_government: cdktf.numberToTerraform(struct!.exceptionGovernment),
    exception_gross: cdktf.numberToTerraform(struct!.exceptionGross),
    exception_hacking: cdktf.numberToTerraform(struct!.exceptionHacking),
    exception_hate_and_racism: cdktf.numberToTerraform(struct!.exceptionHateAndRacism),
    exception_health_and_medicine: cdktf.numberToTerraform(struct!.exceptionHealthAndMedicine),
    exception_home_and_garden: cdktf.numberToTerraform(struct!.exceptionHomeAndGarden),
    exception_hunting_and_fishing: cdktf.numberToTerraform(struct!.exceptionHuntingAndFishing),
    exception_illegal: cdktf.numberToTerraform(struct!.exceptionIllegal),
    exception_illegal_pornography: cdktf.numberToTerraform(struct!.exceptionIllegalPornography),
    exception_image_and_video_search: cdktf.numberToTerraform(struct!.exceptionImageAndVideoSearch),
    exception_internet_communications: cdktf.numberToTerraform(struct!.exceptionInternetCommunications),
    exception_internet_portals: cdktf.numberToTerraform(struct!.exceptionInternetPortals),
    exception_job_search: cdktf.numberToTerraform(struct!.exceptionJobSearch),
    exception_keyloggers_and_monitoring: cdktf.numberToTerraform(struct!.exceptionKeyloggersAndMonitoring),
    exception_kids: cdktf.numberToTerraform(struct!.exceptionKids),
    exception_legal: cdktf.numberToTerraform(struct!.exceptionLegal),
    exception_local_information: cdktf.numberToTerraform(struct!.exceptionLocalInformation),
    exception_malware_sites: cdktf.numberToTerraform(struct!.exceptionMalwareSites),
    exception_marijuana: cdktf.numberToTerraform(struct!.exceptionMarijuana),
    exception_military: cdktf.numberToTerraform(struct!.exceptionMilitary),
    exception_motor_vehicles: cdktf.numberToTerraform(struct!.exceptionMotorVehicles),
    exception_music: cdktf.numberToTerraform(struct!.exceptionMusic),
    exception_news_and_media: cdktf.numberToTerraform(struct!.exceptionNewsAndMedia),
    exception_nudity: cdktf.numberToTerraform(struct!.exceptionNudity),
    exception_nudity_artistic: cdktf.numberToTerraform(struct!.exceptionNudityArtistic),
    exception_online_greeting_cards: cdktf.numberToTerraform(struct!.exceptionOnlineGreetingCards),
    exception_parked_domains: cdktf.numberToTerraform(struct!.exceptionParkedDomains),
    exception_pay_to_surf: cdktf.numberToTerraform(struct!.exceptionPayToSurf),
    exception_peer_to_peer: cdktf.numberToTerraform(struct!.exceptionPeerToPeer),
    exception_personal_sites_and_blogs: cdktf.numberToTerraform(struct!.exceptionPersonalSitesAndBlogs),
    exception_personal_storage: cdktf.numberToTerraform(struct!.exceptionPersonalStorage),
    exception_philosophy_and_politics: cdktf.numberToTerraform(struct!.exceptionPhilosophyAndPolitics),
    exception_phishing_and_other_fraud: cdktf.numberToTerraform(struct!.exceptionPhishingAndOtherFraud),
    exception_proxy_avoid_and_anonymizers: cdktf.numberToTerraform(struct!.exceptionProxyAvoidAndAnonymizers),
    exception_questionable: cdktf.numberToTerraform(struct!.exceptionQuestionable),
    exception_real_estate: cdktf.numberToTerraform(struct!.exceptionRealEstate),
    exception_recreation_and_hobbies: cdktf.numberToTerraform(struct!.exceptionRecreationAndHobbies),
    exception_reference_and_research: cdktf.numberToTerraform(struct!.exceptionReferenceAndResearch),
    exception_religion: cdktf.numberToTerraform(struct!.exceptionReligion),
    exception_search_engines: cdktf.numberToTerraform(struct!.exceptionSearchEngines),
    exception_sex_education: cdktf.numberToTerraform(struct!.exceptionSexEducation),
    exception_shareware_and_freeware: cdktf.numberToTerraform(struct!.exceptionSharewareAndFreeware),
    exception_shopping: cdktf.numberToTerraform(struct!.exceptionShopping),
    exception_social_network: cdktf.numberToTerraform(struct!.exceptionSocialNetwork),
    exception_society: cdktf.numberToTerraform(struct!.exceptionSociety),
    exception_spam_urls: cdktf.numberToTerraform(struct!.exceptionSpamUrls),
    exception_sports: cdktf.numberToTerraform(struct!.exceptionSports),
    exception_spyware_and_adware: cdktf.numberToTerraform(struct!.exceptionSpywareAndAdware),
    exception_stock_advice_and_tools: cdktf.numberToTerraform(struct!.exceptionStockAdviceAndTools),
    exception_streaming_media: cdktf.numberToTerraform(struct!.exceptionStreamingMedia),
    exception_swimsuits_and_intimate_apparel: cdktf.numberToTerraform(struct!.exceptionSwimsuitsAndIntimateApparel),
    exception_training_and_tools: cdktf.numberToTerraform(struct!.exceptionTrainingAndTools),
    exception_translation: cdktf.numberToTerraform(struct!.exceptionTranslation),
    exception_travel: cdktf.numberToTerraform(struct!.exceptionTravel),
    exception_uncategorized: cdktf.numberToTerraform(struct!.exceptionUncategorized),
    exception_violence: cdktf.numberToTerraform(struct!.exceptionViolence),
    exception_weapons: cdktf.numberToTerraform(struct!.exceptionWeapons),
    exception_web_advertisements: cdktf.numberToTerraform(struct!.exceptionWebAdvertisements),
    exception_web_based_email: cdktf.numberToTerraform(struct!.exceptionWebBasedEmail),
    exception_web_hosting_sites: cdktf.numberToTerraform(struct!.exceptionWebHostingSites),
  }
}


export function slbTemplateClientSslExceptionWebCategoryToHclTerraform(struct?: SlbTemplateClientSslExceptionWebCategoryOutputReference | SlbTemplateClientSslExceptionWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_abortion: {
      value: cdktf.numberToHclTerraform(struct!.exceptionAbortion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_adult_and_pornography: {
      value: cdktf.numberToHclTerraform(struct!.exceptionAdultAndPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_alcohol_and_tobacco: {
      value: cdktf.numberToHclTerraform(struct!.exceptionAlcoholAndTobacco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_auctions: {
      value: cdktf.numberToHclTerraform(struct!.exceptionAuctions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_bot_nets: {
      value: cdktf.numberToHclTerraform(struct!.exceptionBotNets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_business_and_economy: {
      value: cdktf.numberToHclTerraform(struct!.exceptionBusinessAndEconomy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_cdns: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCdns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_cheating: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCheating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_computer_and_internet_info: {
      value: cdktf.numberToHclTerraform(struct!.exceptionComputerAndInternetInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_computer_and_internet_security: {
      value: cdktf.numberToHclTerraform(struct!.exceptionComputerAndInternetSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_cult_and_occult: {
      value: cdktf.numberToHclTerraform(struct!.exceptionCultAndOccult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_dating: {
      value: cdktf.numberToHclTerraform(struct!.exceptionDating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_dead_sites: {
      value: cdktf.numberToHclTerraform(struct!.exceptionDeadSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_drugs: {
      value: cdktf.numberToHclTerraform(struct!.exceptionDrugs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_dynamically_generated_content: {
      value: cdktf.numberToHclTerraform(struct!.exceptionDynamicallyGeneratedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_educational_institutions: {
      value: cdktf.numberToHclTerraform(struct!.exceptionEducationalInstitutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_entertainment_and_arts: {
      value: cdktf.numberToHclTerraform(struct!.exceptionEntertainmentAndArts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_fashion_and_beauty: {
      value: cdktf.numberToHclTerraform(struct!.exceptionFashionAndBeauty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_financial_services: {
      value: cdktf.numberToHclTerraform(struct!.exceptionFinancialServices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_gambling: {
      value: cdktf.numberToHclTerraform(struct!.exceptionGambling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_games: {
      value: cdktf.numberToHclTerraform(struct!.exceptionGames),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_government: {
      value: cdktf.numberToHclTerraform(struct!.exceptionGovernment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_gross: {
      value: cdktf.numberToHclTerraform(struct!.exceptionGross),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_hacking: {
      value: cdktf.numberToHclTerraform(struct!.exceptionHacking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_hate_and_racism: {
      value: cdktf.numberToHclTerraform(struct!.exceptionHateAndRacism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_health_and_medicine: {
      value: cdktf.numberToHclTerraform(struct!.exceptionHealthAndMedicine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_home_and_garden: {
      value: cdktf.numberToHclTerraform(struct!.exceptionHomeAndGarden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_hunting_and_fishing: {
      value: cdktf.numberToHclTerraform(struct!.exceptionHuntingAndFishing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_illegal: {
      value: cdktf.numberToHclTerraform(struct!.exceptionIllegal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_illegal_pornography: {
      value: cdktf.numberToHclTerraform(struct!.exceptionIllegalPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_image_and_video_search: {
      value: cdktf.numberToHclTerraform(struct!.exceptionImageAndVideoSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_internet_communications: {
      value: cdktf.numberToHclTerraform(struct!.exceptionInternetCommunications),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_internet_portals: {
      value: cdktf.numberToHclTerraform(struct!.exceptionInternetPortals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_job_search: {
      value: cdktf.numberToHclTerraform(struct!.exceptionJobSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_keyloggers_and_monitoring: {
      value: cdktf.numberToHclTerraform(struct!.exceptionKeyloggersAndMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_kids: {
      value: cdktf.numberToHclTerraform(struct!.exceptionKids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_legal: {
      value: cdktf.numberToHclTerraform(struct!.exceptionLegal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_local_information: {
      value: cdktf.numberToHclTerraform(struct!.exceptionLocalInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_malware_sites: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMalwareSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_marijuana: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMarijuana),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_military: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMilitary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_motor_vehicles: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMotorVehicles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_music: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMusic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_news_and_media: {
      value: cdktf.numberToHclTerraform(struct!.exceptionNewsAndMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_nudity: {
      value: cdktf.numberToHclTerraform(struct!.exceptionNudity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_nudity_artistic: {
      value: cdktf.numberToHclTerraform(struct!.exceptionNudityArtistic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_online_greeting_cards: {
      value: cdktf.numberToHclTerraform(struct!.exceptionOnlineGreetingCards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_parked_domains: {
      value: cdktf.numberToHclTerraform(struct!.exceptionParkedDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_pay_to_surf: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPayToSurf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_peer_to_peer: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPeerToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_personal_sites_and_blogs: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPersonalSitesAndBlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_personal_storage: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPersonalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_philosophy_and_politics: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPhilosophyAndPolitics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_phishing_and_other_fraud: {
      value: cdktf.numberToHclTerraform(struct!.exceptionPhishingAndOtherFraud),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_proxy_avoid_and_anonymizers: {
      value: cdktf.numberToHclTerraform(struct!.exceptionProxyAvoidAndAnonymizers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_questionable: {
      value: cdktf.numberToHclTerraform(struct!.exceptionQuestionable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_real_estate: {
      value: cdktf.numberToHclTerraform(struct!.exceptionRealEstate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_recreation_and_hobbies: {
      value: cdktf.numberToHclTerraform(struct!.exceptionRecreationAndHobbies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_reference_and_research: {
      value: cdktf.numberToHclTerraform(struct!.exceptionReferenceAndResearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_religion: {
      value: cdktf.numberToHclTerraform(struct!.exceptionReligion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_search_engines: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSearchEngines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_sex_education: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSexEducation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_shareware_and_freeware: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSharewareAndFreeware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_shopping: {
      value: cdktf.numberToHclTerraform(struct!.exceptionShopping),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_social_network: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSocialNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_society: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSociety),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_spam_urls: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSpamUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_sports: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_spyware_and_adware: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSpywareAndAdware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_stock_advice_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.exceptionStockAdviceAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_streaming_media: {
      value: cdktf.numberToHclTerraform(struct!.exceptionStreamingMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_swimsuits_and_intimate_apparel: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSwimsuitsAndIntimateApparel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_training_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.exceptionTrainingAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_translation: {
      value: cdktf.numberToHclTerraform(struct!.exceptionTranslation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_travel: {
      value: cdktf.numberToHclTerraform(struct!.exceptionTravel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_uncategorized: {
      value: cdktf.numberToHclTerraform(struct!.exceptionUncategorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_violence: {
      value: cdktf.numberToHclTerraform(struct!.exceptionViolence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_weapons: {
      value: cdktf.numberToHclTerraform(struct!.exceptionWeapons),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_web_advertisements: {
      value: cdktf.numberToHclTerraform(struct!.exceptionWebAdvertisements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_web_based_email: {
      value: cdktf.numberToHclTerraform(struct!.exceptionWebBasedEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_web_hosting_sites: {
      value: cdktf.numberToHclTerraform(struct!.exceptionWebHostingSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionWebCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateClientSslExceptionWebCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionAbortion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionAbortion = this._exceptionAbortion;
    }
    if (this._exceptionAdultAndPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionAdultAndPornography = this._exceptionAdultAndPornography;
    }
    if (this._exceptionAlcoholAndTobacco !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionAlcoholAndTobacco = this._exceptionAlcoholAndTobacco;
    }
    if (this._exceptionAuctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionAuctions = this._exceptionAuctions;
    }
    if (this._exceptionBotNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionBotNets = this._exceptionBotNets;
    }
    if (this._exceptionBusinessAndEconomy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionBusinessAndEconomy = this._exceptionBusinessAndEconomy;
    }
    if (this._exceptionCdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCdns = this._exceptionCdns;
    }
    if (this._exceptionCheating !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCheating = this._exceptionCheating;
    }
    if (this._exceptionComputerAndInternetInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionComputerAndInternetInfo = this._exceptionComputerAndInternetInfo;
    }
    if (this._exceptionComputerAndInternetSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionComputerAndInternetSecurity = this._exceptionComputerAndInternetSecurity;
    }
    if (this._exceptionCultAndOccult !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCultAndOccult = this._exceptionCultAndOccult;
    }
    if (this._exceptionDating !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionDating = this._exceptionDating;
    }
    if (this._exceptionDeadSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionDeadSites = this._exceptionDeadSites;
    }
    if (this._exceptionDrugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionDrugs = this._exceptionDrugs;
    }
    if (this._exceptionDynamicallyGeneratedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionDynamicallyGeneratedContent = this._exceptionDynamicallyGeneratedContent;
    }
    if (this._exceptionEducationalInstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionEducationalInstitutions = this._exceptionEducationalInstitutions;
    }
    if (this._exceptionEntertainmentAndArts !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionEntertainmentAndArts = this._exceptionEntertainmentAndArts;
    }
    if (this._exceptionFashionAndBeauty !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFashionAndBeauty = this._exceptionFashionAndBeauty;
    }
    if (this._exceptionFinancialServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFinancialServices = this._exceptionFinancialServices;
    }
    if (this._exceptionGambling !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionGambling = this._exceptionGambling;
    }
    if (this._exceptionGames !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionGames = this._exceptionGames;
    }
    if (this._exceptionGovernment !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionGovernment = this._exceptionGovernment;
    }
    if (this._exceptionGross !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionGross = this._exceptionGross;
    }
    if (this._exceptionHacking !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionHacking = this._exceptionHacking;
    }
    if (this._exceptionHateAndRacism !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionHateAndRacism = this._exceptionHateAndRacism;
    }
    if (this._exceptionHealthAndMedicine !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionHealthAndMedicine = this._exceptionHealthAndMedicine;
    }
    if (this._exceptionHomeAndGarden !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionHomeAndGarden = this._exceptionHomeAndGarden;
    }
    if (this._exceptionHuntingAndFishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionHuntingAndFishing = this._exceptionHuntingAndFishing;
    }
    if (this._exceptionIllegal !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionIllegal = this._exceptionIllegal;
    }
    if (this._exceptionIllegalPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionIllegalPornography = this._exceptionIllegalPornography;
    }
    if (this._exceptionImageAndVideoSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionImageAndVideoSearch = this._exceptionImageAndVideoSearch;
    }
    if (this._exceptionInternetCommunications !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionInternetCommunications = this._exceptionInternetCommunications;
    }
    if (this._exceptionInternetPortals !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionInternetPortals = this._exceptionInternetPortals;
    }
    if (this._exceptionJobSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionJobSearch = this._exceptionJobSearch;
    }
    if (this._exceptionKeyloggersAndMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionKeyloggersAndMonitoring = this._exceptionKeyloggersAndMonitoring;
    }
    if (this._exceptionKids !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionKids = this._exceptionKids;
    }
    if (this._exceptionLegal !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionLegal = this._exceptionLegal;
    }
    if (this._exceptionLocalInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionLocalInformation = this._exceptionLocalInformation;
    }
    if (this._exceptionMalwareSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMalwareSites = this._exceptionMalwareSites;
    }
    if (this._exceptionMarijuana !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMarijuana = this._exceptionMarijuana;
    }
    if (this._exceptionMilitary !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMilitary = this._exceptionMilitary;
    }
    if (this._exceptionMotorVehicles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMotorVehicles = this._exceptionMotorVehicles;
    }
    if (this._exceptionMusic !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMusic = this._exceptionMusic;
    }
    if (this._exceptionNewsAndMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionNewsAndMedia = this._exceptionNewsAndMedia;
    }
    if (this._exceptionNudity !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionNudity = this._exceptionNudity;
    }
    if (this._exceptionNudityArtistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionNudityArtistic = this._exceptionNudityArtistic;
    }
    if (this._exceptionOnlineGreetingCards !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionOnlineGreetingCards = this._exceptionOnlineGreetingCards;
    }
    if (this._exceptionParkedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionParkedDomains = this._exceptionParkedDomains;
    }
    if (this._exceptionPayToSurf !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPayToSurf = this._exceptionPayToSurf;
    }
    if (this._exceptionPeerToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPeerToPeer = this._exceptionPeerToPeer;
    }
    if (this._exceptionPersonalSitesAndBlogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPersonalSitesAndBlogs = this._exceptionPersonalSitesAndBlogs;
    }
    if (this._exceptionPersonalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPersonalStorage = this._exceptionPersonalStorage;
    }
    if (this._exceptionPhilosophyAndPolitics !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPhilosophyAndPolitics = this._exceptionPhilosophyAndPolitics;
    }
    if (this._exceptionPhishingAndOtherFraud !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPhishingAndOtherFraud = this._exceptionPhishingAndOtherFraud;
    }
    if (this._exceptionProxyAvoidAndAnonymizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionProxyAvoidAndAnonymizers = this._exceptionProxyAvoidAndAnonymizers;
    }
    if (this._exceptionQuestionable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionQuestionable = this._exceptionQuestionable;
    }
    if (this._exceptionRealEstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionRealEstate = this._exceptionRealEstate;
    }
    if (this._exceptionRecreationAndHobbies !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionRecreationAndHobbies = this._exceptionRecreationAndHobbies;
    }
    if (this._exceptionReferenceAndResearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionReferenceAndResearch = this._exceptionReferenceAndResearch;
    }
    if (this._exceptionReligion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionReligion = this._exceptionReligion;
    }
    if (this._exceptionSearchEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSearchEngines = this._exceptionSearchEngines;
    }
    if (this._exceptionSexEducation !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSexEducation = this._exceptionSexEducation;
    }
    if (this._exceptionSharewareAndFreeware !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSharewareAndFreeware = this._exceptionSharewareAndFreeware;
    }
    if (this._exceptionShopping !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionShopping = this._exceptionShopping;
    }
    if (this._exceptionSocialNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSocialNetwork = this._exceptionSocialNetwork;
    }
    if (this._exceptionSociety !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSociety = this._exceptionSociety;
    }
    if (this._exceptionSpamUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSpamUrls = this._exceptionSpamUrls;
    }
    if (this._exceptionSports !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSports = this._exceptionSports;
    }
    if (this._exceptionSpywareAndAdware !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSpywareAndAdware = this._exceptionSpywareAndAdware;
    }
    if (this._exceptionStockAdviceAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionStockAdviceAndTools = this._exceptionStockAdviceAndTools;
    }
    if (this._exceptionStreamingMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionStreamingMedia = this._exceptionStreamingMedia;
    }
    if (this._exceptionSwimsuitsAndIntimateApparel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSwimsuitsAndIntimateApparel = this._exceptionSwimsuitsAndIntimateApparel;
    }
    if (this._exceptionTrainingAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionTrainingAndTools = this._exceptionTrainingAndTools;
    }
    if (this._exceptionTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionTranslation = this._exceptionTranslation;
    }
    if (this._exceptionTravel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionTravel = this._exceptionTravel;
    }
    if (this._exceptionUncategorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionUncategorized = this._exceptionUncategorized;
    }
    if (this._exceptionViolence !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionViolence = this._exceptionViolence;
    }
    if (this._exceptionWeapons !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionWeapons = this._exceptionWeapons;
    }
    if (this._exceptionWebAdvertisements !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionWebAdvertisements = this._exceptionWebAdvertisements;
    }
    if (this._exceptionWebBasedEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionWebBasedEmail = this._exceptionWebBasedEmail;
    }
    if (this._exceptionWebHostingSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionWebHostingSites = this._exceptionWebHostingSites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionWebCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionAbortion = undefined;
      this._exceptionAdultAndPornography = undefined;
      this._exceptionAlcoholAndTobacco = undefined;
      this._exceptionAuctions = undefined;
      this._exceptionBotNets = undefined;
      this._exceptionBusinessAndEconomy = undefined;
      this._exceptionCdns = undefined;
      this._exceptionCheating = undefined;
      this._exceptionComputerAndInternetInfo = undefined;
      this._exceptionComputerAndInternetSecurity = undefined;
      this._exceptionCultAndOccult = undefined;
      this._exceptionDating = undefined;
      this._exceptionDeadSites = undefined;
      this._exceptionDrugs = undefined;
      this._exceptionDynamicallyGeneratedContent = undefined;
      this._exceptionEducationalInstitutions = undefined;
      this._exceptionEntertainmentAndArts = undefined;
      this._exceptionFashionAndBeauty = undefined;
      this._exceptionFinancialServices = undefined;
      this._exceptionGambling = undefined;
      this._exceptionGames = undefined;
      this._exceptionGovernment = undefined;
      this._exceptionGross = undefined;
      this._exceptionHacking = undefined;
      this._exceptionHateAndRacism = undefined;
      this._exceptionHealthAndMedicine = undefined;
      this._exceptionHomeAndGarden = undefined;
      this._exceptionHuntingAndFishing = undefined;
      this._exceptionIllegal = undefined;
      this._exceptionIllegalPornography = undefined;
      this._exceptionImageAndVideoSearch = undefined;
      this._exceptionInternetCommunications = undefined;
      this._exceptionInternetPortals = undefined;
      this._exceptionJobSearch = undefined;
      this._exceptionKeyloggersAndMonitoring = undefined;
      this._exceptionKids = undefined;
      this._exceptionLegal = undefined;
      this._exceptionLocalInformation = undefined;
      this._exceptionMalwareSites = undefined;
      this._exceptionMarijuana = undefined;
      this._exceptionMilitary = undefined;
      this._exceptionMotorVehicles = undefined;
      this._exceptionMusic = undefined;
      this._exceptionNewsAndMedia = undefined;
      this._exceptionNudity = undefined;
      this._exceptionNudityArtistic = undefined;
      this._exceptionOnlineGreetingCards = undefined;
      this._exceptionParkedDomains = undefined;
      this._exceptionPayToSurf = undefined;
      this._exceptionPeerToPeer = undefined;
      this._exceptionPersonalSitesAndBlogs = undefined;
      this._exceptionPersonalStorage = undefined;
      this._exceptionPhilosophyAndPolitics = undefined;
      this._exceptionPhishingAndOtherFraud = undefined;
      this._exceptionProxyAvoidAndAnonymizers = undefined;
      this._exceptionQuestionable = undefined;
      this._exceptionRealEstate = undefined;
      this._exceptionRecreationAndHobbies = undefined;
      this._exceptionReferenceAndResearch = undefined;
      this._exceptionReligion = undefined;
      this._exceptionSearchEngines = undefined;
      this._exceptionSexEducation = undefined;
      this._exceptionSharewareAndFreeware = undefined;
      this._exceptionShopping = undefined;
      this._exceptionSocialNetwork = undefined;
      this._exceptionSociety = undefined;
      this._exceptionSpamUrls = undefined;
      this._exceptionSports = undefined;
      this._exceptionSpywareAndAdware = undefined;
      this._exceptionStockAdviceAndTools = undefined;
      this._exceptionStreamingMedia = undefined;
      this._exceptionSwimsuitsAndIntimateApparel = undefined;
      this._exceptionTrainingAndTools = undefined;
      this._exceptionTranslation = undefined;
      this._exceptionTravel = undefined;
      this._exceptionUncategorized = undefined;
      this._exceptionViolence = undefined;
      this._exceptionWeapons = undefined;
      this._exceptionWebAdvertisements = undefined;
      this._exceptionWebBasedEmail = undefined;
      this._exceptionWebHostingSites = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionAbortion = value.exceptionAbortion;
      this._exceptionAdultAndPornography = value.exceptionAdultAndPornography;
      this._exceptionAlcoholAndTobacco = value.exceptionAlcoholAndTobacco;
      this._exceptionAuctions = value.exceptionAuctions;
      this._exceptionBotNets = value.exceptionBotNets;
      this._exceptionBusinessAndEconomy = value.exceptionBusinessAndEconomy;
      this._exceptionCdns = value.exceptionCdns;
      this._exceptionCheating = value.exceptionCheating;
      this._exceptionComputerAndInternetInfo = value.exceptionComputerAndInternetInfo;
      this._exceptionComputerAndInternetSecurity = value.exceptionComputerAndInternetSecurity;
      this._exceptionCultAndOccult = value.exceptionCultAndOccult;
      this._exceptionDating = value.exceptionDating;
      this._exceptionDeadSites = value.exceptionDeadSites;
      this._exceptionDrugs = value.exceptionDrugs;
      this._exceptionDynamicallyGeneratedContent = value.exceptionDynamicallyGeneratedContent;
      this._exceptionEducationalInstitutions = value.exceptionEducationalInstitutions;
      this._exceptionEntertainmentAndArts = value.exceptionEntertainmentAndArts;
      this._exceptionFashionAndBeauty = value.exceptionFashionAndBeauty;
      this._exceptionFinancialServices = value.exceptionFinancialServices;
      this._exceptionGambling = value.exceptionGambling;
      this._exceptionGames = value.exceptionGames;
      this._exceptionGovernment = value.exceptionGovernment;
      this._exceptionGross = value.exceptionGross;
      this._exceptionHacking = value.exceptionHacking;
      this._exceptionHateAndRacism = value.exceptionHateAndRacism;
      this._exceptionHealthAndMedicine = value.exceptionHealthAndMedicine;
      this._exceptionHomeAndGarden = value.exceptionHomeAndGarden;
      this._exceptionHuntingAndFishing = value.exceptionHuntingAndFishing;
      this._exceptionIllegal = value.exceptionIllegal;
      this._exceptionIllegalPornography = value.exceptionIllegalPornography;
      this._exceptionImageAndVideoSearch = value.exceptionImageAndVideoSearch;
      this._exceptionInternetCommunications = value.exceptionInternetCommunications;
      this._exceptionInternetPortals = value.exceptionInternetPortals;
      this._exceptionJobSearch = value.exceptionJobSearch;
      this._exceptionKeyloggersAndMonitoring = value.exceptionKeyloggersAndMonitoring;
      this._exceptionKids = value.exceptionKids;
      this._exceptionLegal = value.exceptionLegal;
      this._exceptionLocalInformation = value.exceptionLocalInformation;
      this._exceptionMalwareSites = value.exceptionMalwareSites;
      this._exceptionMarijuana = value.exceptionMarijuana;
      this._exceptionMilitary = value.exceptionMilitary;
      this._exceptionMotorVehicles = value.exceptionMotorVehicles;
      this._exceptionMusic = value.exceptionMusic;
      this._exceptionNewsAndMedia = value.exceptionNewsAndMedia;
      this._exceptionNudity = value.exceptionNudity;
      this._exceptionNudityArtistic = value.exceptionNudityArtistic;
      this._exceptionOnlineGreetingCards = value.exceptionOnlineGreetingCards;
      this._exceptionParkedDomains = value.exceptionParkedDomains;
      this._exceptionPayToSurf = value.exceptionPayToSurf;
      this._exceptionPeerToPeer = value.exceptionPeerToPeer;
      this._exceptionPersonalSitesAndBlogs = value.exceptionPersonalSitesAndBlogs;
      this._exceptionPersonalStorage = value.exceptionPersonalStorage;
      this._exceptionPhilosophyAndPolitics = value.exceptionPhilosophyAndPolitics;
      this._exceptionPhishingAndOtherFraud = value.exceptionPhishingAndOtherFraud;
      this._exceptionProxyAvoidAndAnonymizers = value.exceptionProxyAvoidAndAnonymizers;
      this._exceptionQuestionable = value.exceptionQuestionable;
      this._exceptionRealEstate = value.exceptionRealEstate;
      this._exceptionRecreationAndHobbies = value.exceptionRecreationAndHobbies;
      this._exceptionReferenceAndResearch = value.exceptionReferenceAndResearch;
      this._exceptionReligion = value.exceptionReligion;
      this._exceptionSearchEngines = value.exceptionSearchEngines;
      this._exceptionSexEducation = value.exceptionSexEducation;
      this._exceptionSharewareAndFreeware = value.exceptionSharewareAndFreeware;
      this._exceptionShopping = value.exceptionShopping;
      this._exceptionSocialNetwork = value.exceptionSocialNetwork;
      this._exceptionSociety = value.exceptionSociety;
      this._exceptionSpamUrls = value.exceptionSpamUrls;
      this._exceptionSports = value.exceptionSports;
      this._exceptionSpywareAndAdware = value.exceptionSpywareAndAdware;
      this._exceptionStockAdviceAndTools = value.exceptionStockAdviceAndTools;
      this._exceptionStreamingMedia = value.exceptionStreamingMedia;
      this._exceptionSwimsuitsAndIntimateApparel = value.exceptionSwimsuitsAndIntimateApparel;
      this._exceptionTrainingAndTools = value.exceptionTrainingAndTools;
      this._exceptionTranslation = value.exceptionTranslation;
      this._exceptionTravel = value.exceptionTravel;
      this._exceptionUncategorized = value.exceptionUncategorized;
      this._exceptionViolence = value.exceptionViolence;
      this._exceptionWeapons = value.exceptionWeapons;
      this._exceptionWebAdvertisements = value.exceptionWebAdvertisements;
      this._exceptionWebBasedEmail = value.exceptionWebBasedEmail;
      this._exceptionWebHostingSites = value.exceptionWebHostingSites;
    }
  }

  // exception_abortion - computed: false, optional: true, required: false
  private _exceptionAbortion?: number; 
  public get exceptionAbortion() {
    return this.getNumberAttribute('exception_abortion');
  }
  public set exceptionAbortion(value: number) {
    this._exceptionAbortion = value;
  }
  public resetExceptionAbortion() {
    this._exceptionAbortion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionAbortionInput() {
    return this._exceptionAbortion;
  }

  // exception_adult_and_pornography - computed: false, optional: true, required: false
  private _exceptionAdultAndPornography?: number; 
  public get exceptionAdultAndPornography() {
    return this.getNumberAttribute('exception_adult_and_pornography');
  }
  public set exceptionAdultAndPornography(value: number) {
    this._exceptionAdultAndPornography = value;
  }
  public resetExceptionAdultAndPornography() {
    this._exceptionAdultAndPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionAdultAndPornographyInput() {
    return this._exceptionAdultAndPornography;
  }

  // exception_alcohol_and_tobacco - computed: false, optional: true, required: false
  private _exceptionAlcoholAndTobacco?: number; 
  public get exceptionAlcoholAndTobacco() {
    return this.getNumberAttribute('exception_alcohol_and_tobacco');
  }
  public set exceptionAlcoholAndTobacco(value: number) {
    this._exceptionAlcoholAndTobacco = value;
  }
  public resetExceptionAlcoholAndTobacco() {
    this._exceptionAlcoholAndTobacco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionAlcoholAndTobaccoInput() {
    return this._exceptionAlcoholAndTobacco;
  }

  // exception_auctions - computed: false, optional: true, required: false
  private _exceptionAuctions?: number; 
  public get exceptionAuctions() {
    return this.getNumberAttribute('exception_auctions');
  }
  public set exceptionAuctions(value: number) {
    this._exceptionAuctions = value;
  }
  public resetExceptionAuctions() {
    this._exceptionAuctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionAuctionsInput() {
    return this._exceptionAuctions;
  }

  // exception_bot_nets - computed: false, optional: true, required: false
  private _exceptionBotNets?: number; 
  public get exceptionBotNets() {
    return this.getNumberAttribute('exception_bot_nets');
  }
  public set exceptionBotNets(value: number) {
    this._exceptionBotNets = value;
  }
  public resetExceptionBotNets() {
    this._exceptionBotNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionBotNetsInput() {
    return this._exceptionBotNets;
  }

  // exception_business_and_economy - computed: false, optional: true, required: false
  private _exceptionBusinessAndEconomy?: number; 
  public get exceptionBusinessAndEconomy() {
    return this.getNumberAttribute('exception_business_and_economy');
  }
  public set exceptionBusinessAndEconomy(value: number) {
    this._exceptionBusinessAndEconomy = value;
  }
  public resetExceptionBusinessAndEconomy() {
    this._exceptionBusinessAndEconomy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionBusinessAndEconomyInput() {
    return this._exceptionBusinessAndEconomy;
  }

  // exception_cdns - computed: false, optional: true, required: false
  private _exceptionCdns?: number; 
  public get exceptionCdns() {
    return this.getNumberAttribute('exception_cdns');
  }
  public set exceptionCdns(value: number) {
    this._exceptionCdns = value;
  }
  public resetExceptionCdns() {
    this._exceptionCdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCdnsInput() {
    return this._exceptionCdns;
  }

  // exception_cheating - computed: false, optional: true, required: false
  private _exceptionCheating?: number; 
  public get exceptionCheating() {
    return this.getNumberAttribute('exception_cheating');
  }
  public set exceptionCheating(value: number) {
    this._exceptionCheating = value;
  }
  public resetExceptionCheating() {
    this._exceptionCheating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCheatingInput() {
    return this._exceptionCheating;
  }

  // exception_computer_and_internet_info - computed: false, optional: true, required: false
  private _exceptionComputerAndInternetInfo?: number; 
  public get exceptionComputerAndInternetInfo() {
    return this.getNumberAttribute('exception_computer_and_internet_info');
  }
  public set exceptionComputerAndInternetInfo(value: number) {
    this._exceptionComputerAndInternetInfo = value;
  }
  public resetExceptionComputerAndInternetInfo() {
    this._exceptionComputerAndInternetInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionComputerAndInternetInfoInput() {
    return this._exceptionComputerAndInternetInfo;
  }

  // exception_computer_and_internet_security - computed: false, optional: true, required: false
  private _exceptionComputerAndInternetSecurity?: number; 
  public get exceptionComputerAndInternetSecurity() {
    return this.getNumberAttribute('exception_computer_and_internet_security');
  }
  public set exceptionComputerAndInternetSecurity(value: number) {
    this._exceptionComputerAndInternetSecurity = value;
  }
  public resetExceptionComputerAndInternetSecurity() {
    this._exceptionComputerAndInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionComputerAndInternetSecurityInput() {
    return this._exceptionComputerAndInternetSecurity;
  }

  // exception_cult_and_occult - computed: false, optional: true, required: false
  private _exceptionCultAndOccult?: number; 
  public get exceptionCultAndOccult() {
    return this.getNumberAttribute('exception_cult_and_occult');
  }
  public set exceptionCultAndOccult(value: number) {
    this._exceptionCultAndOccult = value;
  }
  public resetExceptionCultAndOccult() {
    this._exceptionCultAndOccult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCultAndOccultInput() {
    return this._exceptionCultAndOccult;
  }

  // exception_dating - computed: false, optional: true, required: false
  private _exceptionDating?: number; 
  public get exceptionDating() {
    return this.getNumberAttribute('exception_dating');
  }
  public set exceptionDating(value: number) {
    this._exceptionDating = value;
  }
  public resetExceptionDating() {
    this._exceptionDating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionDatingInput() {
    return this._exceptionDating;
  }

  // exception_dead_sites - computed: false, optional: true, required: false
  private _exceptionDeadSites?: number; 
  public get exceptionDeadSites() {
    return this.getNumberAttribute('exception_dead_sites');
  }
  public set exceptionDeadSites(value: number) {
    this._exceptionDeadSites = value;
  }
  public resetExceptionDeadSites() {
    this._exceptionDeadSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionDeadSitesInput() {
    return this._exceptionDeadSites;
  }

  // exception_drugs - computed: false, optional: true, required: false
  private _exceptionDrugs?: number; 
  public get exceptionDrugs() {
    return this.getNumberAttribute('exception_drugs');
  }
  public set exceptionDrugs(value: number) {
    this._exceptionDrugs = value;
  }
  public resetExceptionDrugs() {
    this._exceptionDrugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionDrugsInput() {
    return this._exceptionDrugs;
  }

  // exception_dynamically_generated_content - computed: false, optional: true, required: false
  private _exceptionDynamicallyGeneratedContent?: number; 
  public get exceptionDynamicallyGeneratedContent() {
    return this.getNumberAttribute('exception_dynamically_generated_content');
  }
  public set exceptionDynamicallyGeneratedContent(value: number) {
    this._exceptionDynamicallyGeneratedContent = value;
  }
  public resetExceptionDynamicallyGeneratedContent() {
    this._exceptionDynamicallyGeneratedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionDynamicallyGeneratedContentInput() {
    return this._exceptionDynamicallyGeneratedContent;
  }

  // exception_educational_institutions - computed: false, optional: true, required: false
  private _exceptionEducationalInstitutions?: number; 
  public get exceptionEducationalInstitutions() {
    return this.getNumberAttribute('exception_educational_institutions');
  }
  public set exceptionEducationalInstitutions(value: number) {
    this._exceptionEducationalInstitutions = value;
  }
  public resetExceptionEducationalInstitutions() {
    this._exceptionEducationalInstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEducationalInstitutionsInput() {
    return this._exceptionEducationalInstitutions;
  }

  // exception_entertainment_and_arts - computed: false, optional: true, required: false
  private _exceptionEntertainmentAndArts?: number; 
  public get exceptionEntertainmentAndArts() {
    return this.getNumberAttribute('exception_entertainment_and_arts');
  }
  public set exceptionEntertainmentAndArts(value: number) {
    this._exceptionEntertainmentAndArts = value;
  }
  public resetExceptionEntertainmentAndArts() {
    this._exceptionEntertainmentAndArts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEntertainmentAndArtsInput() {
    return this._exceptionEntertainmentAndArts;
  }

  // exception_fashion_and_beauty - computed: false, optional: true, required: false
  private _exceptionFashionAndBeauty?: number; 
  public get exceptionFashionAndBeauty() {
    return this.getNumberAttribute('exception_fashion_and_beauty');
  }
  public set exceptionFashionAndBeauty(value: number) {
    this._exceptionFashionAndBeauty = value;
  }
  public resetExceptionFashionAndBeauty() {
    this._exceptionFashionAndBeauty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFashionAndBeautyInput() {
    return this._exceptionFashionAndBeauty;
  }

  // exception_financial_services - computed: false, optional: true, required: false
  private _exceptionFinancialServices?: number; 
  public get exceptionFinancialServices() {
    return this.getNumberAttribute('exception_financial_services');
  }
  public set exceptionFinancialServices(value: number) {
    this._exceptionFinancialServices = value;
  }
  public resetExceptionFinancialServices() {
    this._exceptionFinancialServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFinancialServicesInput() {
    return this._exceptionFinancialServices;
  }

  // exception_gambling - computed: false, optional: true, required: false
  private _exceptionGambling?: number; 
  public get exceptionGambling() {
    return this.getNumberAttribute('exception_gambling');
  }
  public set exceptionGambling(value: number) {
    this._exceptionGambling = value;
  }
  public resetExceptionGambling() {
    this._exceptionGambling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGamblingInput() {
    return this._exceptionGambling;
  }

  // exception_games - computed: false, optional: true, required: false
  private _exceptionGames?: number; 
  public get exceptionGames() {
    return this.getNumberAttribute('exception_games');
  }
  public set exceptionGames(value: number) {
    this._exceptionGames = value;
  }
  public resetExceptionGames() {
    this._exceptionGames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGamesInput() {
    return this._exceptionGames;
  }

  // exception_government - computed: false, optional: true, required: false
  private _exceptionGovernment?: number; 
  public get exceptionGovernment() {
    return this.getNumberAttribute('exception_government');
  }
  public set exceptionGovernment(value: number) {
    this._exceptionGovernment = value;
  }
  public resetExceptionGovernment() {
    this._exceptionGovernment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGovernmentInput() {
    return this._exceptionGovernment;
  }

  // exception_gross - computed: false, optional: true, required: false
  private _exceptionGross?: number; 
  public get exceptionGross() {
    return this.getNumberAttribute('exception_gross');
  }
  public set exceptionGross(value: number) {
    this._exceptionGross = value;
  }
  public resetExceptionGross() {
    this._exceptionGross = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionGrossInput() {
    return this._exceptionGross;
  }

  // exception_hacking - computed: false, optional: true, required: false
  private _exceptionHacking?: number; 
  public get exceptionHacking() {
    return this.getNumberAttribute('exception_hacking');
  }
  public set exceptionHacking(value: number) {
    this._exceptionHacking = value;
  }
  public resetExceptionHacking() {
    this._exceptionHacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHackingInput() {
    return this._exceptionHacking;
  }

  // exception_hate_and_racism - computed: false, optional: true, required: false
  private _exceptionHateAndRacism?: number; 
  public get exceptionHateAndRacism() {
    return this.getNumberAttribute('exception_hate_and_racism');
  }
  public set exceptionHateAndRacism(value: number) {
    this._exceptionHateAndRacism = value;
  }
  public resetExceptionHateAndRacism() {
    this._exceptionHateAndRacism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHateAndRacismInput() {
    return this._exceptionHateAndRacism;
  }

  // exception_health_and_medicine - computed: false, optional: true, required: false
  private _exceptionHealthAndMedicine?: number; 
  public get exceptionHealthAndMedicine() {
    return this.getNumberAttribute('exception_health_and_medicine');
  }
  public set exceptionHealthAndMedicine(value: number) {
    this._exceptionHealthAndMedicine = value;
  }
  public resetExceptionHealthAndMedicine() {
    this._exceptionHealthAndMedicine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHealthAndMedicineInput() {
    return this._exceptionHealthAndMedicine;
  }

  // exception_home_and_garden - computed: false, optional: true, required: false
  private _exceptionHomeAndGarden?: number; 
  public get exceptionHomeAndGarden() {
    return this.getNumberAttribute('exception_home_and_garden');
  }
  public set exceptionHomeAndGarden(value: number) {
    this._exceptionHomeAndGarden = value;
  }
  public resetExceptionHomeAndGarden() {
    this._exceptionHomeAndGarden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHomeAndGardenInput() {
    return this._exceptionHomeAndGarden;
  }

  // exception_hunting_and_fishing - computed: false, optional: true, required: false
  private _exceptionHuntingAndFishing?: number; 
  public get exceptionHuntingAndFishing() {
    return this.getNumberAttribute('exception_hunting_and_fishing');
  }
  public set exceptionHuntingAndFishing(value: number) {
    this._exceptionHuntingAndFishing = value;
  }
  public resetExceptionHuntingAndFishing() {
    this._exceptionHuntingAndFishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHuntingAndFishingInput() {
    return this._exceptionHuntingAndFishing;
  }

  // exception_illegal - computed: false, optional: true, required: false
  private _exceptionIllegal?: number; 
  public get exceptionIllegal() {
    return this.getNumberAttribute('exception_illegal');
  }
  public set exceptionIllegal(value: number) {
    this._exceptionIllegal = value;
  }
  public resetExceptionIllegal() {
    this._exceptionIllegal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionIllegalInput() {
    return this._exceptionIllegal;
  }

  // exception_illegal_pornography - computed: false, optional: true, required: false
  private _exceptionIllegalPornography?: number; 
  public get exceptionIllegalPornography() {
    return this.getNumberAttribute('exception_illegal_pornography');
  }
  public set exceptionIllegalPornography(value: number) {
    this._exceptionIllegalPornography = value;
  }
  public resetExceptionIllegalPornography() {
    this._exceptionIllegalPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionIllegalPornographyInput() {
    return this._exceptionIllegalPornography;
  }

  // exception_image_and_video_search - computed: false, optional: true, required: false
  private _exceptionImageAndVideoSearch?: number; 
  public get exceptionImageAndVideoSearch() {
    return this.getNumberAttribute('exception_image_and_video_search');
  }
  public set exceptionImageAndVideoSearch(value: number) {
    this._exceptionImageAndVideoSearch = value;
  }
  public resetExceptionImageAndVideoSearch() {
    this._exceptionImageAndVideoSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionImageAndVideoSearchInput() {
    return this._exceptionImageAndVideoSearch;
  }

  // exception_internet_communications - computed: false, optional: true, required: false
  private _exceptionInternetCommunications?: number; 
  public get exceptionInternetCommunications() {
    return this.getNumberAttribute('exception_internet_communications');
  }
  public set exceptionInternetCommunications(value: number) {
    this._exceptionInternetCommunications = value;
  }
  public resetExceptionInternetCommunications() {
    this._exceptionInternetCommunications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInternetCommunicationsInput() {
    return this._exceptionInternetCommunications;
  }

  // exception_internet_portals - computed: false, optional: true, required: false
  private _exceptionInternetPortals?: number; 
  public get exceptionInternetPortals() {
    return this.getNumberAttribute('exception_internet_portals');
  }
  public set exceptionInternetPortals(value: number) {
    this._exceptionInternetPortals = value;
  }
  public resetExceptionInternetPortals() {
    this._exceptionInternetPortals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInternetPortalsInput() {
    return this._exceptionInternetPortals;
  }

  // exception_job_search - computed: false, optional: true, required: false
  private _exceptionJobSearch?: number; 
  public get exceptionJobSearch() {
    return this.getNumberAttribute('exception_job_search');
  }
  public set exceptionJobSearch(value: number) {
    this._exceptionJobSearch = value;
  }
  public resetExceptionJobSearch() {
    this._exceptionJobSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionJobSearchInput() {
    return this._exceptionJobSearch;
  }

  // exception_keyloggers_and_monitoring - computed: false, optional: true, required: false
  private _exceptionKeyloggersAndMonitoring?: number; 
  public get exceptionKeyloggersAndMonitoring() {
    return this.getNumberAttribute('exception_keyloggers_and_monitoring');
  }
  public set exceptionKeyloggersAndMonitoring(value: number) {
    this._exceptionKeyloggersAndMonitoring = value;
  }
  public resetExceptionKeyloggersAndMonitoring() {
    this._exceptionKeyloggersAndMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionKeyloggersAndMonitoringInput() {
    return this._exceptionKeyloggersAndMonitoring;
  }

  // exception_kids - computed: false, optional: true, required: false
  private _exceptionKids?: number; 
  public get exceptionKids() {
    return this.getNumberAttribute('exception_kids');
  }
  public set exceptionKids(value: number) {
    this._exceptionKids = value;
  }
  public resetExceptionKids() {
    this._exceptionKids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionKidsInput() {
    return this._exceptionKids;
  }

  // exception_legal - computed: false, optional: true, required: false
  private _exceptionLegal?: number; 
  public get exceptionLegal() {
    return this.getNumberAttribute('exception_legal');
  }
  public set exceptionLegal(value: number) {
    this._exceptionLegal = value;
  }
  public resetExceptionLegal() {
    this._exceptionLegal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionLegalInput() {
    return this._exceptionLegal;
  }

  // exception_local_information - computed: false, optional: true, required: false
  private _exceptionLocalInformation?: number; 
  public get exceptionLocalInformation() {
    return this.getNumberAttribute('exception_local_information');
  }
  public set exceptionLocalInformation(value: number) {
    this._exceptionLocalInformation = value;
  }
  public resetExceptionLocalInformation() {
    this._exceptionLocalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionLocalInformationInput() {
    return this._exceptionLocalInformation;
  }

  // exception_malware_sites - computed: false, optional: true, required: false
  private _exceptionMalwareSites?: number; 
  public get exceptionMalwareSites() {
    return this.getNumberAttribute('exception_malware_sites');
  }
  public set exceptionMalwareSites(value: number) {
    this._exceptionMalwareSites = value;
  }
  public resetExceptionMalwareSites() {
    this._exceptionMalwareSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMalwareSitesInput() {
    return this._exceptionMalwareSites;
  }

  // exception_marijuana - computed: false, optional: true, required: false
  private _exceptionMarijuana?: number; 
  public get exceptionMarijuana() {
    return this.getNumberAttribute('exception_marijuana');
  }
  public set exceptionMarijuana(value: number) {
    this._exceptionMarijuana = value;
  }
  public resetExceptionMarijuana() {
    this._exceptionMarijuana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMarijuanaInput() {
    return this._exceptionMarijuana;
  }

  // exception_military - computed: false, optional: true, required: false
  private _exceptionMilitary?: number; 
  public get exceptionMilitary() {
    return this.getNumberAttribute('exception_military');
  }
  public set exceptionMilitary(value: number) {
    this._exceptionMilitary = value;
  }
  public resetExceptionMilitary() {
    this._exceptionMilitary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMilitaryInput() {
    return this._exceptionMilitary;
  }

  // exception_motor_vehicles - computed: false, optional: true, required: false
  private _exceptionMotorVehicles?: number; 
  public get exceptionMotorVehicles() {
    return this.getNumberAttribute('exception_motor_vehicles');
  }
  public set exceptionMotorVehicles(value: number) {
    this._exceptionMotorVehicles = value;
  }
  public resetExceptionMotorVehicles() {
    this._exceptionMotorVehicles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMotorVehiclesInput() {
    return this._exceptionMotorVehicles;
  }

  // exception_music - computed: false, optional: true, required: false
  private _exceptionMusic?: number; 
  public get exceptionMusic() {
    return this.getNumberAttribute('exception_music');
  }
  public set exceptionMusic(value: number) {
    this._exceptionMusic = value;
  }
  public resetExceptionMusic() {
    this._exceptionMusic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMusicInput() {
    return this._exceptionMusic;
  }

  // exception_news_and_media - computed: false, optional: true, required: false
  private _exceptionNewsAndMedia?: number; 
  public get exceptionNewsAndMedia() {
    return this.getNumberAttribute('exception_news_and_media');
  }
  public set exceptionNewsAndMedia(value: number) {
    this._exceptionNewsAndMedia = value;
  }
  public resetExceptionNewsAndMedia() {
    this._exceptionNewsAndMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionNewsAndMediaInput() {
    return this._exceptionNewsAndMedia;
  }

  // exception_nudity - computed: false, optional: true, required: false
  private _exceptionNudity?: number; 
  public get exceptionNudity() {
    return this.getNumberAttribute('exception_nudity');
  }
  public set exceptionNudity(value: number) {
    this._exceptionNudity = value;
  }
  public resetExceptionNudity() {
    this._exceptionNudity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionNudityInput() {
    return this._exceptionNudity;
  }

  // exception_nudity_artistic - computed: false, optional: true, required: false
  private _exceptionNudityArtistic?: number; 
  public get exceptionNudityArtistic() {
    return this.getNumberAttribute('exception_nudity_artistic');
  }
  public set exceptionNudityArtistic(value: number) {
    this._exceptionNudityArtistic = value;
  }
  public resetExceptionNudityArtistic() {
    this._exceptionNudityArtistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionNudityArtisticInput() {
    return this._exceptionNudityArtistic;
  }

  // exception_online_greeting_cards - computed: false, optional: true, required: false
  private _exceptionOnlineGreetingCards?: number; 
  public get exceptionOnlineGreetingCards() {
    return this.getNumberAttribute('exception_online_greeting_cards');
  }
  public set exceptionOnlineGreetingCards(value: number) {
    this._exceptionOnlineGreetingCards = value;
  }
  public resetExceptionOnlineGreetingCards() {
    this._exceptionOnlineGreetingCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionOnlineGreetingCardsInput() {
    return this._exceptionOnlineGreetingCards;
  }

  // exception_parked_domains - computed: false, optional: true, required: false
  private _exceptionParkedDomains?: number; 
  public get exceptionParkedDomains() {
    return this.getNumberAttribute('exception_parked_domains');
  }
  public set exceptionParkedDomains(value: number) {
    this._exceptionParkedDomains = value;
  }
  public resetExceptionParkedDomains() {
    this._exceptionParkedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionParkedDomainsInput() {
    return this._exceptionParkedDomains;
  }

  // exception_pay_to_surf - computed: false, optional: true, required: false
  private _exceptionPayToSurf?: number; 
  public get exceptionPayToSurf() {
    return this.getNumberAttribute('exception_pay_to_surf');
  }
  public set exceptionPayToSurf(value: number) {
    this._exceptionPayToSurf = value;
  }
  public resetExceptionPayToSurf() {
    this._exceptionPayToSurf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPayToSurfInput() {
    return this._exceptionPayToSurf;
  }

  // exception_peer_to_peer - computed: false, optional: true, required: false
  private _exceptionPeerToPeer?: number; 
  public get exceptionPeerToPeer() {
    return this.getNumberAttribute('exception_peer_to_peer');
  }
  public set exceptionPeerToPeer(value: number) {
    this._exceptionPeerToPeer = value;
  }
  public resetExceptionPeerToPeer() {
    this._exceptionPeerToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPeerToPeerInput() {
    return this._exceptionPeerToPeer;
  }

  // exception_personal_sites_and_blogs - computed: false, optional: true, required: false
  private _exceptionPersonalSitesAndBlogs?: number; 
  public get exceptionPersonalSitesAndBlogs() {
    return this.getNumberAttribute('exception_personal_sites_and_blogs');
  }
  public set exceptionPersonalSitesAndBlogs(value: number) {
    this._exceptionPersonalSitesAndBlogs = value;
  }
  public resetExceptionPersonalSitesAndBlogs() {
    this._exceptionPersonalSitesAndBlogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPersonalSitesAndBlogsInput() {
    return this._exceptionPersonalSitesAndBlogs;
  }

  // exception_personal_storage - computed: false, optional: true, required: false
  private _exceptionPersonalStorage?: number; 
  public get exceptionPersonalStorage() {
    return this.getNumberAttribute('exception_personal_storage');
  }
  public set exceptionPersonalStorage(value: number) {
    this._exceptionPersonalStorage = value;
  }
  public resetExceptionPersonalStorage() {
    this._exceptionPersonalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPersonalStorageInput() {
    return this._exceptionPersonalStorage;
  }

  // exception_philosophy_and_politics - computed: false, optional: true, required: false
  private _exceptionPhilosophyAndPolitics?: number; 
  public get exceptionPhilosophyAndPolitics() {
    return this.getNumberAttribute('exception_philosophy_and_politics');
  }
  public set exceptionPhilosophyAndPolitics(value: number) {
    this._exceptionPhilosophyAndPolitics = value;
  }
  public resetExceptionPhilosophyAndPolitics() {
    this._exceptionPhilosophyAndPolitics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPhilosophyAndPoliticsInput() {
    return this._exceptionPhilosophyAndPolitics;
  }

  // exception_phishing_and_other_fraud - computed: false, optional: true, required: false
  private _exceptionPhishingAndOtherFraud?: number; 
  public get exceptionPhishingAndOtherFraud() {
    return this.getNumberAttribute('exception_phishing_and_other_fraud');
  }
  public set exceptionPhishingAndOtherFraud(value: number) {
    this._exceptionPhishingAndOtherFraud = value;
  }
  public resetExceptionPhishingAndOtherFraud() {
    this._exceptionPhishingAndOtherFraud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPhishingAndOtherFraudInput() {
    return this._exceptionPhishingAndOtherFraud;
  }

  // exception_proxy_avoid_and_anonymizers - computed: false, optional: true, required: false
  private _exceptionProxyAvoidAndAnonymizers?: number; 
  public get exceptionProxyAvoidAndAnonymizers() {
    return this.getNumberAttribute('exception_proxy_avoid_and_anonymizers');
  }
  public set exceptionProxyAvoidAndAnonymizers(value: number) {
    this._exceptionProxyAvoidAndAnonymizers = value;
  }
  public resetExceptionProxyAvoidAndAnonymizers() {
    this._exceptionProxyAvoidAndAnonymizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionProxyAvoidAndAnonymizersInput() {
    return this._exceptionProxyAvoidAndAnonymizers;
  }

  // exception_questionable - computed: false, optional: true, required: false
  private _exceptionQuestionable?: number; 
  public get exceptionQuestionable() {
    return this.getNumberAttribute('exception_questionable');
  }
  public set exceptionQuestionable(value: number) {
    this._exceptionQuestionable = value;
  }
  public resetExceptionQuestionable() {
    this._exceptionQuestionable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionQuestionableInput() {
    return this._exceptionQuestionable;
  }

  // exception_real_estate - computed: false, optional: true, required: false
  private _exceptionRealEstate?: number; 
  public get exceptionRealEstate() {
    return this.getNumberAttribute('exception_real_estate');
  }
  public set exceptionRealEstate(value: number) {
    this._exceptionRealEstate = value;
  }
  public resetExceptionRealEstate() {
    this._exceptionRealEstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionRealEstateInput() {
    return this._exceptionRealEstate;
  }

  // exception_recreation_and_hobbies - computed: false, optional: true, required: false
  private _exceptionRecreationAndHobbies?: number; 
  public get exceptionRecreationAndHobbies() {
    return this.getNumberAttribute('exception_recreation_and_hobbies');
  }
  public set exceptionRecreationAndHobbies(value: number) {
    this._exceptionRecreationAndHobbies = value;
  }
  public resetExceptionRecreationAndHobbies() {
    this._exceptionRecreationAndHobbies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionRecreationAndHobbiesInput() {
    return this._exceptionRecreationAndHobbies;
  }

  // exception_reference_and_research - computed: false, optional: true, required: false
  private _exceptionReferenceAndResearch?: number; 
  public get exceptionReferenceAndResearch() {
    return this.getNumberAttribute('exception_reference_and_research');
  }
  public set exceptionReferenceAndResearch(value: number) {
    this._exceptionReferenceAndResearch = value;
  }
  public resetExceptionReferenceAndResearch() {
    this._exceptionReferenceAndResearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionReferenceAndResearchInput() {
    return this._exceptionReferenceAndResearch;
  }

  // exception_religion - computed: false, optional: true, required: false
  private _exceptionReligion?: number; 
  public get exceptionReligion() {
    return this.getNumberAttribute('exception_religion');
  }
  public set exceptionReligion(value: number) {
    this._exceptionReligion = value;
  }
  public resetExceptionReligion() {
    this._exceptionReligion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionReligionInput() {
    return this._exceptionReligion;
  }

  // exception_search_engines - computed: false, optional: true, required: false
  private _exceptionSearchEngines?: number; 
  public get exceptionSearchEngines() {
    return this.getNumberAttribute('exception_search_engines');
  }
  public set exceptionSearchEngines(value: number) {
    this._exceptionSearchEngines = value;
  }
  public resetExceptionSearchEngines() {
    this._exceptionSearchEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSearchEnginesInput() {
    return this._exceptionSearchEngines;
  }

  // exception_sex_education - computed: false, optional: true, required: false
  private _exceptionSexEducation?: number; 
  public get exceptionSexEducation() {
    return this.getNumberAttribute('exception_sex_education');
  }
  public set exceptionSexEducation(value: number) {
    this._exceptionSexEducation = value;
  }
  public resetExceptionSexEducation() {
    this._exceptionSexEducation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSexEducationInput() {
    return this._exceptionSexEducation;
  }

  // exception_shareware_and_freeware - computed: false, optional: true, required: false
  private _exceptionSharewareAndFreeware?: number; 
  public get exceptionSharewareAndFreeware() {
    return this.getNumberAttribute('exception_shareware_and_freeware');
  }
  public set exceptionSharewareAndFreeware(value: number) {
    this._exceptionSharewareAndFreeware = value;
  }
  public resetExceptionSharewareAndFreeware() {
    this._exceptionSharewareAndFreeware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSharewareAndFreewareInput() {
    return this._exceptionSharewareAndFreeware;
  }

  // exception_shopping - computed: false, optional: true, required: false
  private _exceptionShopping?: number; 
  public get exceptionShopping() {
    return this.getNumberAttribute('exception_shopping');
  }
  public set exceptionShopping(value: number) {
    this._exceptionShopping = value;
  }
  public resetExceptionShopping() {
    this._exceptionShopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionShoppingInput() {
    return this._exceptionShopping;
  }

  // exception_social_network - computed: false, optional: true, required: false
  private _exceptionSocialNetwork?: number; 
  public get exceptionSocialNetwork() {
    return this.getNumberAttribute('exception_social_network');
  }
  public set exceptionSocialNetwork(value: number) {
    this._exceptionSocialNetwork = value;
  }
  public resetExceptionSocialNetwork() {
    this._exceptionSocialNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSocialNetworkInput() {
    return this._exceptionSocialNetwork;
  }

  // exception_society - computed: false, optional: true, required: false
  private _exceptionSociety?: number; 
  public get exceptionSociety() {
    return this.getNumberAttribute('exception_society');
  }
  public set exceptionSociety(value: number) {
    this._exceptionSociety = value;
  }
  public resetExceptionSociety() {
    this._exceptionSociety = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSocietyInput() {
    return this._exceptionSociety;
  }

  // exception_spam_urls - computed: false, optional: true, required: false
  private _exceptionSpamUrls?: number; 
  public get exceptionSpamUrls() {
    return this.getNumberAttribute('exception_spam_urls');
  }
  public set exceptionSpamUrls(value: number) {
    this._exceptionSpamUrls = value;
  }
  public resetExceptionSpamUrls() {
    this._exceptionSpamUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSpamUrlsInput() {
    return this._exceptionSpamUrls;
  }

  // exception_sports - computed: false, optional: true, required: false
  private _exceptionSports?: number; 
  public get exceptionSports() {
    return this.getNumberAttribute('exception_sports');
  }
  public set exceptionSports(value: number) {
    this._exceptionSports = value;
  }
  public resetExceptionSports() {
    this._exceptionSports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSportsInput() {
    return this._exceptionSports;
  }

  // exception_spyware_and_adware - computed: false, optional: true, required: false
  private _exceptionSpywareAndAdware?: number; 
  public get exceptionSpywareAndAdware() {
    return this.getNumberAttribute('exception_spyware_and_adware');
  }
  public set exceptionSpywareAndAdware(value: number) {
    this._exceptionSpywareAndAdware = value;
  }
  public resetExceptionSpywareAndAdware() {
    this._exceptionSpywareAndAdware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSpywareAndAdwareInput() {
    return this._exceptionSpywareAndAdware;
  }

  // exception_stock_advice_and_tools - computed: false, optional: true, required: false
  private _exceptionStockAdviceAndTools?: number; 
  public get exceptionStockAdviceAndTools() {
    return this.getNumberAttribute('exception_stock_advice_and_tools');
  }
  public set exceptionStockAdviceAndTools(value: number) {
    this._exceptionStockAdviceAndTools = value;
  }
  public resetExceptionStockAdviceAndTools() {
    this._exceptionStockAdviceAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionStockAdviceAndToolsInput() {
    return this._exceptionStockAdviceAndTools;
  }

  // exception_streaming_media - computed: false, optional: true, required: false
  private _exceptionStreamingMedia?: number; 
  public get exceptionStreamingMedia() {
    return this.getNumberAttribute('exception_streaming_media');
  }
  public set exceptionStreamingMedia(value: number) {
    this._exceptionStreamingMedia = value;
  }
  public resetExceptionStreamingMedia() {
    this._exceptionStreamingMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionStreamingMediaInput() {
    return this._exceptionStreamingMedia;
  }

  // exception_swimsuits_and_intimate_apparel - computed: false, optional: true, required: false
  private _exceptionSwimsuitsAndIntimateApparel?: number; 
  public get exceptionSwimsuitsAndIntimateApparel() {
    return this.getNumberAttribute('exception_swimsuits_and_intimate_apparel');
  }
  public set exceptionSwimsuitsAndIntimateApparel(value: number) {
    this._exceptionSwimsuitsAndIntimateApparel = value;
  }
  public resetExceptionSwimsuitsAndIntimateApparel() {
    this._exceptionSwimsuitsAndIntimateApparel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSwimsuitsAndIntimateApparelInput() {
    return this._exceptionSwimsuitsAndIntimateApparel;
  }

  // exception_training_and_tools - computed: false, optional: true, required: false
  private _exceptionTrainingAndTools?: number; 
  public get exceptionTrainingAndTools() {
    return this.getNumberAttribute('exception_training_and_tools');
  }
  public set exceptionTrainingAndTools(value: number) {
    this._exceptionTrainingAndTools = value;
  }
  public resetExceptionTrainingAndTools() {
    this._exceptionTrainingAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTrainingAndToolsInput() {
    return this._exceptionTrainingAndTools;
  }

  // exception_translation - computed: false, optional: true, required: false
  private _exceptionTranslation?: number; 
  public get exceptionTranslation() {
    return this.getNumberAttribute('exception_translation');
  }
  public set exceptionTranslation(value: number) {
    this._exceptionTranslation = value;
  }
  public resetExceptionTranslation() {
    this._exceptionTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTranslationInput() {
    return this._exceptionTranslation;
  }

  // exception_travel - computed: false, optional: true, required: false
  private _exceptionTravel?: number; 
  public get exceptionTravel() {
    return this.getNumberAttribute('exception_travel');
  }
  public set exceptionTravel(value: number) {
    this._exceptionTravel = value;
  }
  public resetExceptionTravel() {
    this._exceptionTravel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTravelInput() {
    return this._exceptionTravel;
  }

  // exception_uncategorized - computed: false, optional: true, required: false
  private _exceptionUncategorized?: number; 
  public get exceptionUncategorized() {
    return this.getNumberAttribute('exception_uncategorized');
  }
  public set exceptionUncategorized(value: number) {
    this._exceptionUncategorized = value;
  }
  public resetExceptionUncategorized() {
    this._exceptionUncategorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionUncategorizedInput() {
    return this._exceptionUncategorized;
  }

  // exception_violence - computed: false, optional: true, required: false
  private _exceptionViolence?: number; 
  public get exceptionViolence() {
    return this.getNumberAttribute('exception_violence');
  }
  public set exceptionViolence(value: number) {
    this._exceptionViolence = value;
  }
  public resetExceptionViolence() {
    this._exceptionViolence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionViolenceInput() {
    return this._exceptionViolence;
  }

  // exception_weapons - computed: false, optional: true, required: false
  private _exceptionWeapons?: number; 
  public get exceptionWeapons() {
    return this.getNumberAttribute('exception_weapons');
  }
  public set exceptionWeapons(value: number) {
    this._exceptionWeapons = value;
  }
  public resetExceptionWeapons() {
    this._exceptionWeapons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWeaponsInput() {
    return this._exceptionWeapons;
  }

  // exception_web_advertisements - computed: false, optional: true, required: false
  private _exceptionWebAdvertisements?: number; 
  public get exceptionWebAdvertisements() {
    return this.getNumberAttribute('exception_web_advertisements');
  }
  public set exceptionWebAdvertisements(value: number) {
    this._exceptionWebAdvertisements = value;
  }
  public resetExceptionWebAdvertisements() {
    this._exceptionWebAdvertisements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWebAdvertisementsInput() {
    return this._exceptionWebAdvertisements;
  }

  // exception_web_based_email - computed: false, optional: true, required: false
  private _exceptionWebBasedEmail?: number; 
  public get exceptionWebBasedEmail() {
    return this.getNumberAttribute('exception_web_based_email');
  }
  public set exceptionWebBasedEmail(value: number) {
    this._exceptionWebBasedEmail = value;
  }
  public resetExceptionWebBasedEmail() {
    this._exceptionWebBasedEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWebBasedEmailInput() {
    return this._exceptionWebBasedEmail;
  }

  // exception_web_hosting_sites - computed: false, optional: true, required: false
  private _exceptionWebHostingSites?: number; 
  public get exceptionWebHostingSites() {
    return this.getNumberAttribute('exception_web_hosting_sites');
  }
  public set exceptionWebHostingSites(value: number) {
    this._exceptionWebHostingSites = value;
  }
  public resetExceptionWebHostingSites() {
    this._exceptionWebHostingSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWebHostingSitesInput() {
    return this._exceptionWebHostingSites;
  }
}
export interface SlbTemplateClientSslExceptionWebReputation {
  /**
  * Intercept when reputation score is less than or equal to 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_low_risk SlbTemplateClientSsl#exception_low_risk}
  */
  readonly exceptionLowRisk?: number;
  /**
  * Intercept when reputation score is less than or equal to 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_malicious SlbTemplateClientSsl#exception_malicious}
  */
  readonly exceptionMalicious?: number;
  /**
  * Intercept when reputation score is less than or equal to 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_moderate_risk SlbTemplateClientSsl#exception_moderate_risk}
  */
  readonly exceptionModerateRisk?: number;
  /**
  * Intercept when reputation score is less than or equal to 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_suspicious SlbTemplateClientSsl#exception_suspicious}
  */
  readonly exceptionSuspicious?: number;
  /**
  * Intercept when reputation score is less than or equal to a customized value (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_threshold SlbTemplateClientSsl#exception_threshold}
  */
  readonly exceptionThreshold?: number;
  /**
  * Intercept when reputation score is less than or equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#exception_trustworthy SlbTemplateClientSsl#exception_trustworthy}
  */
  readonly exceptionTrustworthy?: number;
}

export function slbTemplateClientSslExceptionWebReputationToTerraform(struct?: SlbTemplateClientSslExceptionWebReputationOutputReference | SlbTemplateClientSslExceptionWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_low_risk: cdktf.numberToTerraform(struct!.exceptionLowRisk),
    exception_malicious: cdktf.numberToTerraform(struct!.exceptionMalicious),
    exception_moderate_risk: cdktf.numberToTerraform(struct!.exceptionModerateRisk),
    exception_suspicious: cdktf.numberToTerraform(struct!.exceptionSuspicious),
    exception_threshold: cdktf.numberToTerraform(struct!.exceptionThreshold),
    exception_trustworthy: cdktf.numberToTerraform(struct!.exceptionTrustworthy),
  }
}


export function slbTemplateClientSslExceptionWebReputationToHclTerraform(struct?: SlbTemplateClientSslExceptionWebReputationOutputReference | SlbTemplateClientSslExceptionWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.exceptionLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_malicious: {
      value: cdktf.numberToHclTerraform(struct!.exceptionMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.exceptionModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.exceptionSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_threshold: {
      value: cdktf.numberToHclTerraform(struct!.exceptionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exception_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.exceptionTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslExceptionWebReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateClientSslExceptionWebReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionLowRisk = this._exceptionLowRisk;
    }
    if (this._exceptionMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionMalicious = this._exceptionMalicious;
    }
    if (this._exceptionModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionModerateRisk = this._exceptionModerateRisk;
    }
    if (this._exceptionSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSuspicious = this._exceptionSuspicious;
    }
    if (this._exceptionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionThreshold = this._exceptionThreshold;
    }
    if (this._exceptionTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionTrustworthy = this._exceptionTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionWebReputation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionLowRisk = undefined;
      this._exceptionMalicious = undefined;
      this._exceptionModerateRisk = undefined;
      this._exceptionSuspicious = undefined;
      this._exceptionThreshold = undefined;
      this._exceptionTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionLowRisk = value.exceptionLowRisk;
      this._exceptionMalicious = value.exceptionMalicious;
      this._exceptionModerateRisk = value.exceptionModerateRisk;
      this._exceptionSuspicious = value.exceptionSuspicious;
      this._exceptionThreshold = value.exceptionThreshold;
      this._exceptionTrustworthy = value.exceptionTrustworthy;
    }
  }

  // exception_low_risk - computed: false, optional: true, required: false
  private _exceptionLowRisk?: number; 
  public get exceptionLowRisk() {
    return this.getNumberAttribute('exception_low_risk');
  }
  public set exceptionLowRisk(value: number) {
    this._exceptionLowRisk = value;
  }
  public resetExceptionLowRisk() {
    this._exceptionLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionLowRiskInput() {
    return this._exceptionLowRisk;
  }

  // exception_malicious - computed: false, optional: true, required: false
  private _exceptionMalicious?: number; 
  public get exceptionMalicious() {
    return this.getNumberAttribute('exception_malicious');
  }
  public set exceptionMalicious(value: number) {
    this._exceptionMalicious = value;
  }
  public resetExceptionMalicious() {
    this._exceptionMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMaliciousInput() {
    return this._exceptionMalicious;
  }

  // exception_moderate_risk - computed: false, optional: true, required: false
  private _exceptionModerateRisk?: number; 
  public get exceptionModerateRisk() {
    return this.getNumberAttribute('exception_moderate_risk');
  }
  public set exceptionModerateRisk(value: number) {
    this._exceptionModerateRisk = value;
  }
  public resetExceptionModerateRisk() {
    this._exceptionModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionModerateRiskInput() {
    return this._exceptionModerateRisk;
  }

  // exception_suspicious - computed: false, optional: true, required: false
  private _exceptionSuspicious?: number; 
  public get exceptionSuspicious() {
    return this.getNumberAttribute('exception_suspicious');
  }
  public set exceptionSuspicious(value: number) {
    this._exceptionSuspicious = value;
  }
  public resetExceptionSuspicious() {
    this._exceptionSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSuspiciousInput() {
    return this._exceptionSuspicious;
  }

  // exception_threshold - computed: false, optional: true, required: false
  private _exceptionThreshold?: number; 
  public get exceptionThreshold() {
    return this.getNumberAttribute('exception_threshold');
  }
  public set exceptionThreshold(value: number) {
    this._exceptionThreshold = value;
  }
  public resetExceptionThreshold() {
    this._exceptionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionThresholdInput() {
    return this._exceptionThreshold;
  }

  // exception_trustworthy - computed: false, optional: true, required: false
  private _exceptionTrustworthy?: number; 
  public get exceptionTrustworthy() {
    return this.getNumberAttribute('exception_trustworthy');
  }
  public set exceptionTrustworthy(value: number) {
    this._exceptionTrustworthy = value;
  }
  public resetExceptionTrustworthy() {
    this._exceptionTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTrustworthyInput() {
    return this._exceptionTrustworthy;
  }
}
export interface SlbTemplateClientSslForwardProxyTrustedCaLists {
  /**
  * Forward proxy trusted CA file (CA file name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#forward_proxy_trusted_ca SlbTemplateClientSsl#forward_proxy_trusted_ca}
  */
  readonly forwardProxyTrustedCa?: string;
  /**
  * Trusted CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fp_trusted_ca_shared SlbTemplateClientSsl#fp_trusted_ca_shared}
  */
  readonly fpTrustedCaShared?: number;
}

export function slbTemplateClientSslForwardProxyTrustedCaListsToTerraform(struct?: SlbTemplateClientSslForwardProxyTrustedCaLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_trusted_ca: cdktf.stringToTerraform(struct!.forwardProxyTrustedCa),
    fp_trusted_ca_shared: cdktf.numberToTerraform(struct!.fpTrustedCaShared),
  }
}


export function slbTemplateClientSslForwardProxyTrustedCaListsToHclTerraform(struct?: SlbTemplateClientSslForwardProxyTrustedCaLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.forwardProxyTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fp_trusted_ca_shared: {
      value: cdktf.numberToHclTerraform(struct!.fpTrustedCaShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslForwardProxyTrustedCaListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslForwardProxyTrustedCaLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyTrustedCa = this._forwardProxyTrustedCa;
    }
    if (this._fpTrustedCaShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpTrustedCaShared = this._fpTrustedCaShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslForwardProxyTrustedCaLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardProxyTrustedCa = undefined;
      this._fpTrustedCaShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardProxyTrustedCa = value.forwardProxyTrustedCa;
      this._fpTrustedCaShared = value.fpTrustedCaShared;
    }
  }

  // forward_proxy_trusted_ca - computed: false, optional: true, required: false
  private _forwardProxyTrustedCa?: string; 
  public get forwardProxyTrustedCa() {
    return this.getStringAttribute('forward_proxy_trusted_ca');
  }
  public set forwardProxyTrustedCa(value: string) {
    this._forwardProxyTrustedCa = value;
  }
  public resetForwardProxyTrustedCa() {
    this._forwardProxyTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyTrustedCaInput() {
    return this._forwardProxyTrustedCa;
  }

  // fp_trusted_ca_shared - computed: false, optional: true, required: false
  private _fpTrustedCaShared?: number; 
  public get fpTrustedCaShared() {
    return this.getNumberAttribute('fp_trusted_ca_shared');
  }
  public set fpTrustedCaShared(value: number) {
    this._fpTrustedCaShared = value;
  }
  public resetFpTrustedCaShared() {
    this._fpTrustedCaShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpTrustedCaSharedInput() {
    return this._fpTrustedCaShared;
  }
}

export class SlbTemplateClientSslForwardProxyTrustedCaListsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslForwardProxyTrustedCaLists[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslForwardProxyTrustedCaListsOutputReference {
    return new SlbTemplateClientSslForwardProxyTrustedCaListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslLocalCertPinListStruct {
  /**
  * Set the connection fail count as bypass criteria (Bypass when connection failure count is greater than the criteria (1-65536))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#local_cert_pin_list_bypass_fail_count SlbTemplateClientSsl#local_cert_pin_list_bypass_fail_count}
  */
  readonly localCertPinListBypassFailCount?: number;
}

export function slbTemplateClientSslLocalCertPinListStructToTerraform(struct?: SlbTemplateClientSslLocalCertPinListStructOutputReference | SlbTemplateClientSslLocalCertPinListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_cert_pin_list_bypass_fail_count: cdktf.numberToTerraform(struct!.localCertPinListBypassFailCount),
  }
}


export function slbTemplateClientSslLocalCertPinListStructToHclTerraform(struct?: SlbTemplateClientSslLocalCertPinListStructOutputReference | SlbTemplateClientSslLocalCertPinListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_cert_pin_list_bypass_fail_count: {
      value: cdktf.numberToHclTerraform(struct!.localCertPinListBypassFailCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslLocalCertPinListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateClientSslLocalCertPinListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localCertPinListBypassFailCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertPinListBypassFailCount = this._localCertPinListBypassFailCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslLocalCertPinListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localCertPinListBypassFailCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localCertPinListBypassFailCount = value.localCertPinListBypassFailCount;
    }
  }

  // local_cert_pin_list_bypass_fail_count - computed: false, optional: true, required: false
  private _localCertPinListBypassFailCount?: number; 
  public get localCertPinListBypassFailCount() {
    return this.getNumberAttribute('local_cert_pin_list_bypass_fail_count');
  }
  public set localCertPinListBypassFailCount(value: number) {
    this._localCertPinListBypassFailCount = value;
  }
  public resetLocalCertPinListBypassFailCount() {
    this._localCertPinListBypassFailCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertPinListBypassFailCountInput() {
    return this._localCertPinListBypassFailCount;
  }
}
export interface SlbTemplateClientSslMultiClassListStruct {
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#multi_clist_name SlbTemplateClientSsl#multi_clist_name}
  */
  readonly multiClistName?: string;
}

export function slbTemplateClientSslMultiClassListStructToTerraform(struct?: SlbTemplateClientSslMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_clist_name: cdktf.stringToTerraform(struct!.multiClistName),
  }
}


export function slbTemplateClientSslMultiClassListStructToHclTerraform(struct?: SlbTemplateClientSslMultiClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_clist_name: {
      value: cdktf.stringToHclTerraform(struct!.multiClistName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslMultiClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslMultiClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiClistName !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiClistName = this._multiClistName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslMultiClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiClistName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiClistName = value.multiClistName;
    }
  }

  // multi_clist_name - computed: false, optional: true, required: false
  private _multiClistName?: string; 
  public get multiClistName() {
    return this.getStringAttribute('multi_clist_name');
  }
  public set multiClistName(value: string) {
    this._multiClistName = value;
  }
  public resetMultiClistName() {
    this._multiClistName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClistNameInput() {
    return this._multiClistName;
  }
}

export class SlbTemplateClientSslMultiClassListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslMultiClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslMultiClassListStructOutputReference {
    return new SlbTemplateClientSslMultiClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslReqCaLists {
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_cert_req_ca_shared SlbTemplateClientSsl#client_cert_req_ca_shared}
  */
  readonly clientCertReqCaShared?: number;
  /**
  * Send CA lists in certificate request (CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#client_certificate_request_ca SlbTemplateClientSsl#client_certificate_request_ca}
  */
  readonly clientCertificateRequestCa?: string;
}

export function slbTemplateClientSslReqCaListsToTerraform(struct?: SlbTemplateClientSslReqCaLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_req_ca_shared: cdktf.numberToTerraform(struct!.clientCertReqCaShared),
    client_certificate_request_ca: cdktf.stringToTerraform(struct!.clientCertificateRequestCa),
  }
}


export function slbTemplateClientSslReqCaListsToHclTerraform(struct?: SlbTemplateClientSslReqCaLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_req_ca_shared: {
      value: cdktf.numberToHclTerraform(struct!.clientCertReqCaShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_certificate_request_ca: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateRequestCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslReqCaListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslReqCaLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertReqCaShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertReqCaShared = this._clientCertReqCaShared;
    }
    if (this._clientCertificateRequestCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateRequestCa = this._clientCertificateRequestCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslReqCaLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertReqCaShared = undefined;
      this._clientCertificateRequestCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertReqCaShared = value.clientCertReqCaShared;
      this._clientCertificateRequestCa = value.clientCertificateRequestCa;
    }
  }

  // client_cert_req_ca_shared - computed: false, optional: true, required: false
  private _clientCertReqCaShared?: number; 
  public get clientCertReqCaShared() {
    return this.getNumberAttribute('client_cert_req_ca_shared');
  }
  public set clientCertReqCaShared(value: number) {
    this._clientCertReqCaShared = value;
  }
  public resetClientCertReqCaShared() {
    this._clientCertReqCaShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertReqCaSharedInput() {
    return this._clientCertReqCaShared;
  }

  // client_certificate_request_ca - computed: false, optional: true, required: false
  private _clientCertificateRequestCa?: string; 
  public get clientCertificateRequestCa() {
    return this.getStringAttribute('client_certificate_request_ca');
  }
  public set clientCertificateRequestCa(value: string) {
    this._clientCertificateRequestCa = value;
  }
  public resetClientCertificateRequestCa() {
    this._clientCertificateRequestCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateRequestCaInput() {
    return this._clientCertificateRequestCa;
  }
}

export class SlbTemplateClientSslReqCaListsList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslReqCaLists[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslReqCaListsOutputReference {
    return new SlbTemplateClientSslReqCaListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslServerIpv4ListStruct {
  /**
  * IPV4 server class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_ipv4_list_name SlbTemplateClientSsl#server_ipv4_list_name}
  */
  readonly serverIpv4ListName?: string;
}

export function slbTemplateClientSslServerIpv4ListStructToTerraform(struct?: SlbTemplateClientSslServerIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ipv4_list_name: cdktf.stringToTerraform(struct!.serverIpv4ListName),
  }
}


export function slbTemplateClientSslServerIpv4ListStructToHclTerraform(struct?: SlbTemplateClientSslServerIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ipv4_list_name: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv4ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslServerIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslServerIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverIpv4ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv4ListName = this._serverIpv4ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslServerIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverIpv4ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverIpv4ListName = value.serverIpv4ListName;
    }
  }

  // server_ipv4_list_name - computed: false, optional: true, required: false
  private _serverIpv4ListName?: string; 
  public get serverIpv4ListName() {
    return this.getStringAttribute('server_ipv4_list_name');
  }
  public set serverIpv4ListName(value: string) {
    this._serverIpv4ListName = value;
  }
  public resetServerIpv4ListName() {
    this._serverIpv4ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv4ListNameInput() {
    return this._serverIpv4ListName;
  }
}

export class SlbTemplateClientSslServerIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslServerIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslServerIpv4ListStructOutputReference {
    return new SlbTemplateClientSslServerIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslServerIpv6ListStruct {
  /**
  * IPV6 server class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_ipv6_list_name SlbTemplateClientSsl#server_ipv6_list_name}
  */
  readonly serverIpv6ListName?: string;
}

export function slbTemplateClientSslServerIpv6ListStructToTerraform(struct?: SlbTemplateClientSslServerIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ipv6_list_name: cdktf.stringToTerraform(struct!.serverIpv6ListName),
  }
}


export function slbTemplateClientSslServerIpv6ListStructToHclTerraform(struct?: SlbTemplateClientSslServerIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ipv6_list_name: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv6ListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslServerIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslServerIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverIpv6ListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv6ListName = this._serverIpv6ListName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslServerIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverIpv6ListName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverIpv6ListName = value.serverIpv6ListName;
    }
  }

  // server_ipv6_list_name - computed: false, optional: true, required: false
  private _serverIpv6ListName?: string; 
  public get serverIpv6ListName() {
    return this.getStringAttribute('server_ipv6_list_name');
  }
  public set serverIpv6ListName(value: string) {
    this._serverIpv6ListName = value;
  }
  public resetServerIpv6ListName() {
    this._serverIpv6ListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6ListNameInput() {
    return this._serverIpv6ListName;
  }
}

export class SlbTemplateClientSslServerIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslServerIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslServerIpv6ListStructOutputReference {
    return new SlbTemplateClientSslServerIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslServerNameListStruct {
  /**
  * Server Certificate associated to SNI (Server Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_cert SlbTemplateClientSsl#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Server Certificate associated to SNI regex (Server Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_cert_regex SlbTemplateClientSsl#server_cert_regex}
  */
  readonly serverCertRegex?: string;
  /**
  * Server Certificate Chain associated to SNI (Server Certificate Chain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_chain SlbTemplateClientSsl#server_chain}
  */
  readonly serverChain?: string;
  /**
  * Server Certificate Chain associated to SNI regex (Server Certificate Chain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_chain_regex SlbTemplateClientSsl#server_chain_regex}
  */
  readonly serverChainRegex?: string;
  /**
  * Server Private Key associated to SNI (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_key SlbTemplateClientSsl#server_key}
  */
  readonly serverKey?: string;
  /**
  * Server Private Key associated to SNI regex (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_key_regex SlbTemplateClientSsl#server_key_regex}
  */
  readonly serverKeyRegex?: string;
  /**
  * Server name indication in Client hello extension (Server name String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name SlbTemplateClientSsl#server_name}
  */
  readonly serverName?: string;
  /**
  * Specific the second certifcate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name_alternate SlbTemplateClientSsl#server_name_alternate}
  */
  readonly serverNameAlternate?: number;
  /**
  * Server name indication in Client hello extension with regular expression (Server name String with regex)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name_regex SlbTemplateClientSsl#server_name_regex}
  */
  readonly serverNameRegex?: string;
  /**
  * Specific the second certifcate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_name_regex_alternate SlbTemplateClientSsl#server_name_regex_alternate}
  */
  readonly serverNameRegexAlternate?: number;
  /**
  * help Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_passphrase SlbTemplateClientSsl#server_passphrase}
  */
  readonly serverPassphrase?: string;
  /**
  * help Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_passphrase_regex SlbTemplateClientSsl#server_passphrase_regex}
  */
  readonly serverPassphraseRegex?: string;
  /**
  * Server Name Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_shared SlbTemplateClientSsl#server_shared}
  */
  readonly serverShared?: number;
  /**
  * Server Name Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#server_shared_regex SlbTemplateClientSsl#server_shared_regex}
  */
  readonly serverSharedRegex?: number;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_regex_shared_partition_client_ssl_template SlbTemplateClientSsl#sni_regex_shared_partition_client_ssl_template}
  */
  readonly sniRegexSharedPartitionClientSslTemplate?: number;
  /**
  * Template associated to SNI regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_regex_template SlbTemplateClientSsl#sni_regex_template}
  */
  readonly sniRegexTemplate?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_regex_template_client_ssl SlbTemplateClientSsl#sni_regex_template_client_ssl}
  */
  readonly sniRegexTemplateClientSsl?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_regex_template_client_ssl_shared_name SlbTemplateClientSsl#sni_regex_template_client_ssl_shared_name}
  */
  readonly sniRegexTemplateClientSslSharedName?: string;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_shared_partition_client_ssl_template SlbTemplateClientSsl#sni_shared_partition_client_ssl_template}
  */
  readonly sniSharedPartitionClientSslTemplate?: number;
  /**
  * Template associated to SNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_template SlbTemplateClientSsl#sni_template}
  */
  readonly sniTemplate?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_template_client_ssl SlbTemplateClientSsl#sni_template_client_ssl}
  */
  readonly sniTemplateClientSsl?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sni_template_client_ssl_shared_name SlbTemplateClientSsl#sni_template_client_ssl_shared_name}
  */
  readonly sniTemplateClientSslSharedName?: string;
}

export function slbTemplateClientSslServerNameListStructToTerraform(struct?: SlbTemplateClientSslServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
    server_cert_regex: cdktf.stringToTerraform(struct!.serverCertRegex),
    server_chain: cdktf.stringToTerraform(struct!.serverChain),
    server_chain_regex: cdktf.stringToTerraform(struct!.serverChainRegex),
    server_key: cdktf.stringToTerraform(struct!.serverKey),
    server_key_regex: cdktf.stringToTerraform(struct!.serverKeyRegex),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_name_alternate: cdktf.numberToTerraform(struct!.serverNameAlternate),
    server_name_regex: cdktf.stringToTerraform(struct!.serverNameRegex),
    server_name_regex_alternate: cdktf.numberToTerraform(struct!.serverNameRegexAlternate),
    server_passphrase: cdktf.stringToTerraform(struct!.serverPassphrase),
    server_passphrase_regex: cdktf.stringToTerraform(struct!.serverPassphraseRegex),
    server_shared: cdktf.numberToTerraform(struct!.serverShared),
    server_shared_regex: cdktf.numberToTerraform(struct!.serverSharedRegex),
    sni_regex_shared_partition_client_ssl_template: cdktf.numberToTerraform(struct!.sniRegexSharedPartitionClientSslTemplate),
    sni_regex_template: cdktf.numberToTerraform(struct!.sniRegexTemplate),
    sni_regex_template_client_ssl: cdktf.stringToTerraform(struct!.sniRegexTemplateClientSsl),
    sni_regex_template_client_ssl_shared_name: cdktf.stringToTerraform(struct!.sniRegexTemplateClientSslSharedName),
    sni_shared_partition_client_ssl_template: cdktf.numberToTerraform(struct!.sniSharedPartitionClientSslTemplate),
    sni_template: cdktf.numberToTerraform(struct!.sniTemplate),
    sni_template_client_ssl: cdktf.stringToTerraform(struct!.sniTemplateClientSsl),
    sni_template_client_ssl_shared_name: cdktf.stringToTerraform(struct!.sniTemplateClientSslSharedName),
  }
}


export function slbTemplateClientSslServerNameListStructToHclTerraform(struct?: SlbTemplateClientSslServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert_regex: {
      value: cdktf.stringToHclTerraform(struct!.serverCertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_chain: {
      value: cdktf.stringToHclTerraform(struct!.serverChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_chain_regex: {
      value: cdktf.stringToHclTerraform(struct!.serverChainRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key_regex: {
      value: cdktf.stringToHclTerraform(struct!.serverKeyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name_alternate: {
      value: cdktf.numberToHclTerraform(struct!.serverNameAlternate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.serverNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name_regex_alternate: {
      value: cdktf.numberToHclTerraform(struct!.serverNameRegexAlternate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.serverPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_passphrase_regex: {
      value: cdktf.stringToHclTerraform(struct!.serverPassphraseRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_shared: {
      value: cdktf.numberToHclTerraform(struct!.serverShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_shared_regex: {
      value: cdktf.numberToHclTerraform(struct!.serverSharedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_regex_shared_partition_client_ssl_template: {
      value: cdktf.numberToHclTerraform(struct!.sniRegexSharedPartitionClientSslTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_regex_template: {
      value: cdktf.numberToHclTerraform(struct!.sniRegexTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_regex_template_client_ssl: {
      value: cdktf.stringToHclTerraform(struct!.sniRegexTemplateClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_regex_template_client_ssl_shared_name: {
      value: cdktf.stringToHclTerraform(struct!.sniRegexTemplateClientSslSharedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_shared_partition_client_ssl_template: {
      value: cdktf.numberToHclTerraform(struct!.sniSharedPartitionClientSslTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_template: {
      value: cdktf.numberToHclTerraform(struct!.sniTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni_template_client_ssl: {
      value: cdktf.stringToHclTerraform(struct!.sniTemplateClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_template_client_ssl_shared_name: {
      value: cdktf.stringToHclTerraform(struct!.sniTemplateClientSslSharedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    if (this._serverCertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertRegex = this._serverCertRegex;
    }
    if (this._serverChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverChain = this._serverChain;
    }
    if (this._serverChainRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverChainRegex = this._serverChainRegex;
    }
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    if (this._serverKeyRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeyRegex = this._serverKeyRegex;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverNameAlternate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameAlternate = this._serverNameAlternate;
    }
    if (this._serverNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameRegex = this._serverNameRegex;
    }
    if (this._serverNameRegexAlternate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameRegexAlternate = this._serverNameRegexAlternate;
    }
    if (this._serverPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPassphrase = this._serverPassphrase;
    }
    if (this._serverPassphraseRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPassphraseRegex = this._serverPassphraseRegex;
    }
    if (this._serverShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverShared = this._serverShared;
    }
    if (this._serverSharedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSharedRegex = this._serverSharedRegex;
    }
    if (this._sniRegexSharedPartitionClientSslTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniRegexSharedPartitionClientSslTemplate = this._sniRegexSharedPartitionClientSslTemplate;
    }
    if (this._sniRegexTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniRegexTemplate = this._sniRegexTemplate;
    }
    if (this._sniRegexTemplateClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniRegexTemplateClientSsl = this._sniRegexTemplateClientSsl;
    }
    if (this._sniRegexTemplateClientSslSharedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniRegexTemplateClientSslSharedName = this._sniRegexTemplateClientSslSharedName;
    }
    if (this._sniSharedPartitionClientSslTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniSharedPartitionClientSslTemplate = this._sniSharedPartitionClientSslTemplate;
    }
    if (this._sniTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniTemplate = this._sniTemplate;
    }
    if (this._sniTemplateClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniTemplateClientSsl = this._sniTemplateClientSsl;
    }
    if (this._sniTemplateClientSslSharedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniTemplateClientSslSharedName = this._sniTemplateClientSslSharedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCert = undefined;
      this._serverCertRegex = undefined;
      this._serverChain = undefined;
      this._serverChainRegex = undefined;
      this._serverKey = undefined;
      this._serverKeyRegex = undefined;
      this._serverName = undefined;
      this._serverNameAlternate = undefined;
      this._serverNameRegex = undefined;
      this._serverNameRegexAlternate = undefined;
      this._serverPassphrase = undefined;
      this._serverPassphraseRegex = undefined;
      this._serverShared = undefined;
      this._serverSharedRegex = undefined;
      this._sniRegexSharedPartitionClientSslTemplate = undefined;
      this._sniRegexTemplate = undefined;
      this._sniRegexTemplateClientSsl = undefined;
      this._sniRegexTemplateClientSslSharedName = undefined;
      this._sniSharedPartitionClientSslTemplate = undefined;
      this._sniTemplate = undefined;
      this._sniTemplateClientSsl = undefined;
      this._sniTemplateClientSslSharedName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCert = value.serverCert;
      this._serverCertRegex = value.serverCertRegex;
      this._serverChain = value.serverChain;
      this._serverChainRegex = value.serverChainRegex;
      this._serverKey = value.serverKey;
      this._serverKeyRegex = value.serverKeyRegex;
      this._serverName = value.serverName;
      this._serverNameAlternate = value.serverNameAlternate;
      this._serverNameRegex = value.serverNameRegex;
      this._serverNameRegexAlternate = value.serverNameRegexAlternate;
      this._serverPassphrase = value.serverPassphrase;
      this._serverPassphraseRegex = value.serverPassphraseRegex;
      this._serverShared = value.serverShared;
      this._serverSharedRegex = value.serverSharedRegex;
      this._sniRegexSharedPartitionClientSslTemplate = value.sniRegexSharedPartitionClientSslTemplate;
      this._sniRegexTemplate = value.sniRegexTemplate;
      this._sniRegexTemplateClientSsl = value.sniRegexTemplateClientSsl;
      this._sniRegexTemplateClientSslSharedName = value.sniRegexTemplateClientSslSharedName;
      this._sniSharedPartitionClientSslTemplate = value.sniSharedPartitionClientSslTemplate;
      this._sniTemplate = value.sniTemplate;
      this._sniTemplateClientSsl = value.sniTemplateClientSsl;
      this._sniTemplateClientSslSharedName = value.sniTemplateClientSslSharedName;
    }
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_cert_regex - computed: false, optional: true, required: false
  private _serverCertRegex?: string; 
  public get serverCertRegex() {
    return this.getStringAttribute('server_cert_regex');
  }
  public set serverCertRegex(value: string) {
    this._serverCertRegex = value;
  }
  public resetServerCertRegex() {
    this._serverCertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertRegexInput() {
    return this._serverCertRegex;
  }

  // server_chain - computed: false, optional: true, required: false
  private _serverChain?: string; 
  public get serverChain() {
    return this.getStringAttribute('server_chain');
  }
  public set serverChain(value: string) {
    this._serverChain = value;
  }
  public resetServerChain() {
    this._serverChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverChainInput() {
    return this._serverChain;
  }

  // server_chain_regex - computed: false, optional: true, required: false
  private _serverChainRegex?: string; 
  public get serverChainRegex() {
    return this.getStringAttribute('server_chain_regex');
  }
  public set serverChainRegex(value: string) {
    this._serverChainRegex = value;
  }
  public resetServerChainRegex() {
    this._serverChainRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverChainRegexInput() {
    return this._serverChainRegex;
  }

  // server_key - computed: false, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // server_key_regex - computed: false, optional: true, required: false
  private _serverKeyRegex?: string; 
  public get serverKeyRegex() {
    return this.getStringAttribute('server_key_regex');
  }
  public set serverKeyRegex(value: string) {
    this._serverKeyRegex = value;
  }
  public resetServerKeyRegex() {
    this._serverKeyRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyRegexInput() {
    return this._serverKeyRegex;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_name_alternate - computed: false, optional: true, required: false
  private _serverNameAlternate?: number; 
  public get serverNameAlternate() {
    return this.getNumberAttribute('server_name_alternate');
  }
  public set serverNameAlternate(value: number) {
    this._serverNameAlternate = value;
  }
  public resetServerNameAlternate() {
    this._serverNameAlternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameAlternateInput() {
    return this._serverNameAlternate;
  }

  // server_name_regex - computed: false, optional: true, required: false
  private _serverNameRegex?: string; 
  public get serverNameRegex() {
    return this.getStringAttribute('server_name_regex');
  }
  public set serverNameRegex(value: string) {
    this._serverNameRegex = value;
  }
  public resetServerNameRegex() {
    this._serverNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameRegexInput() {
    return this._serverNameRegex;
  }

  // server_name_regex_alternate - computed: false, optional: true, required: false
  private _serverNameRegexAlternate?: number; 
  public get serverNameRegexAlternate() {
    return this.getNumberAttribute('server_name_regex_alternate');
  }
  public set serverNameRegexAlternate(value: number) {
    this._serverNameRegexAlternate = value;
  }
  public resetServerNameRegexAlternate() {
    this._serverNameRegexAlternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameRegexAlternateInput() {
    return this._serverNameRegexAlternate;
  }

  // server_passphrase - computed: false, optional: true, required: false
  private _serverPassphrase?: string; 
  public get serverPassphrase() {
    return this.getStringAttribute('server_passphrase');
  }
  public set serverPassphrase(value: string) {
    this._serverPassphrase = value;
  }
  public resetServerPassphrase() {
    this._serverPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPassphraseInput() {
    return this._serverPassphrase;
  }

  // server_passphrase_regex - computed: false, optional: true, required: false
  private _serverPassphraseRegex?: string; 
  public get serverPassphraseRegex() {
    return this.getStringAttribute('server_passphrase_regex');
  }
  public set serverPassphraseRegex(value: string) {
    this._serverPassphraseRegex = value;
  }
  public resetServerPassphraseRegex() {
    this._serverPassphraseRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPassphraseRegexInput() {
    return this._serverPassphraseRegex;
  }

  // server_shared - computed: false, optional: true, required: false
  private _serverShared?: number; 
  public get serverShared() {
    return this.getNumberAttribute('server_shared');
  }
  public set serverShared(value: number) {
    this._serverShared = value;
  }
  public resetServerShared() {
    this._serverShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSharedInput() {
    return this._serverShared;
  }

  // server_shared_regex - computed: false, optional: true, required: false
  private _serverSharedRegex?: number; 
  public get serverSharedRegex() {
    return this.getNumberAttribute('server_shared_regex');
  }
  public set serverSharedRegex(value: number) {
    this._serverSharedRegex = value;
  }
  public resetServerSharedRegex() {
    this._serverSharedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSharedRegexInput() {
    return this._serverSharedRegex;
  }

  // sni_regex_shared_partition_client_ssl_template - computed: false, optional: true, required: false
  private _sniRegexSharedPartitionClientSslTemplate?: number; 
  public get sniRegexSharedPartitionClientSslTemplate() {
    return this.getNumberAttribute('sni_regex_shared_partition_client_ssl_template');
  }
  public set sniRegexSharedPartitionClientSslTemplate(value: number) {
    this._sniRegexSharedPartitionClientSslTemplate = value;
  }
  public resetSniRegexSharedPartitionClientSslTemplate() {
    this._sniRegexSharedPartitionClientSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniRegexSharedPartitionClientSslTemplateInput() {
    return this._sniRegexSharedPartitionClientSslTemplate;
  }

  // sni_regex_template - computed: false, optional: true, required: false
  private _sniRegexTemplate?: number; 
  public get sniRegexTemplate() {
    return this.getNumberAttribute('sni_regex_template');
  }
  public set sniRegexTemplate(value: number) {
    this._sniRegexTemplate = value;
  }
  public resetSniRegexTemplate() {
    this._sniRegexTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniRegexTemplateInput() {
    return this._sniRegexTemplate;
  }

  // sni_regex_template_client_ssl - computed: false, optional: true, required: false
  private _sniRegexTemplateClientSsl?: string; 
  public get sniRegexTemplateClientSsl() {
    return this.getStringAttribute('sni_regex_template_client_ssl');
  }
  public set sniRegexTemplateClientSsl(value: string) {
    this._sniRegexTemplateClientSsl = value;
  }
  public resetSniRegexTemplateClientSsl() {
    this._sniRegexTemplateClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniRegexTemplateClientSslInput() {
    return this._sniRegexTemplateClientSsl;
  }

  // sni_regex_template_client_ssl_shared_name - computed: false, optional: true, required: false
  private _sniRegexTemplateClientSslSharedName?: string; 
  public get sniRegexTemplateClientSslSharedName() {
    return this.getStringAttribute('sni_regex_template_client_ssl_shared_name');
  }
  public set sniRegexTemplateClientSslSharedName(value: string) {
    this._sniRegexTemplateClientSslSharedName = value;
  }
  public resetSniRegexTemplateClientSslSharedName() {
    this._sniRegexTemplateClientSslSharedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniRegexTemplateClientSslSharedNameInput() {
    return this._sniRegexTemplateClientSslSharedName;
  }

  // sni_shared_partition_client_ssl_template - computed: false, optional: true, required: false
  private _sniSharedPartitionClientSslTemplate?: number; 
  public get sniSharedPartitionClientSslTemplate() {
    return this.getNumberAttribute('sni_shared_partition_client_ssl_template');
  }
  public set sniSharedPartitionClientSslTemplate(value: number) {
    this._sniSharedPartitionClientSslTemplate = value;
  }
  public resetSniSharedPartitionClientSslTemplate() {
    this._sniSharedPartitionClientSslTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniSharedPartitionClientSslTemplateInput() {
    return this._sniSharedPartitionClientSslTemplate;
  }

  // sni_template - computed: false, optional: true, required: false
  private _sniTemplate?: number; 
  public get sniTemplate() {
    return this.getNumberAttribute('sni_template');
  }
  public set sniTemplate(value: number) {
    this._sniTemplate = value;
  }
  public resetSniTemplate() {
    this._sniTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTemplateInput() {
    return this._sniTemplate;
  }

  // sni_template_client_ssl - computed: false, optional: true, required: false
  private _sniTemplateClientSsl?: string; 
  public get sniTemplateClientSsl() {
    return this.getStringAttribute('sni_template_client_ssl');
  }
  public set sniTemplateClientSsl(value: string) {
    this._sniTemplateClientSsl = value;
  }
  public resetSniTemplateClientSsl() {
    this._sniTemplateClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTemplateClientSslInput() {
    return this._sniTemplateClientSsl;
  }

  // sni_template_client_ssl_shared_name - computed: false, optional: true, required: false
  private _sniTemplateClientSslSharedName?: string; 
  public get sniTemplateClientSslSharedName() {
    return this.getStringAttribute('sni_template_client_ssl_shared_name');
  }
  public set sniTemplateClientSslSharedName(value: string) {
    this._sniTemplateClientSslSharedName = value;
  }
  public resetSniTemplateClientSslSharedName() {
    this._sniTemplateClientSslSharedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTemplateClientSslSharedNameInput() {
    return this._sniTemplateClientSslSharedName;
  }
}

export class SlbTemplateClientSslServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslServerNameListStructOutputReference {
    return new SlbTemplateClientSslServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslStartsWithListStruct {
  /**
  * Forward proxy bypass if SNI string starts with another string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#starts_with SlbTemplateClientSsl#starts_with}
  */
  readonly startsWith?: string;
}

export function slbTemplateClientSslStartsWithListStructToTerraform(struct?: SlbTemplateClientSslStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
  }
}


export function slbTemplateClientSslStartsWithListStructToHclTerraform(struct?: SlbTemplateClientSslStartsWithListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslStartsWithListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslStartsWithListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslStartsWithListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startsWith = value.startsWith;
    }
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class SlbTemplateClientSslStartsWithListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslStartsWithListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslStartsWithListStructOutputReference {
    return new SlbTemplateClientSslStartsWithListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslWebCategory {
  /**
  * Category Abortion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#abortion SlbTemplateClientSsl#abortion}
  */
  readonly abortion?: number;
  /**
  * Category Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#adult_and_pornography SlbTemplateClientSsl#adult_and_pornography}
  */
  readonly adultAndPornography?: number;
  /**
  * Category Alcohol and Tobacco
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#alcohol_and_tobacco SlbTemplateClientSsl#alcohol_and_tobacco}
  */
  readonly alcoholAndTobacco?: number;
  /**
  * Category Auctions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#auctions SlbTemplateClientSsl#auctions}
  */
  readonly auctions?: number;
  /**
  * Category Bot Nets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bot_nets SlbTemplateClientSsl#bot_nets}
  */
  readonly botNets?: number;
  /**
  * Category Business and Economy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#business_and_economy SlbTemplateClientSsl#business_and_economy}
  */
  readonly businessAndEconomy?: number;
  /**
  * Category CDNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cdns SlbTemplateClientSsl#cdns}
  */
  readonly cdns?: number;
  /**
  * Category Cheating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cheating SlbTemplateClientSsl#cheating}
  */
  readonly cheating?: number;
  /**
  * Category Computer and Internet Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#computer_and_internet_info SlbTemplateClientSsl#computer_and_internet_info}
  */
  readonly computerAndInternetInfo?: number;
  /**
  * Category Computer and Internet Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#computer_and_internet_security SlbTemplateClientSsl#computer_and_internet_security}
  */
  readonly computerAndInternetSecurity?: number;
  /**
  * Category Cult and Occult
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#cult_and_occult SlbTemplateClientSsl#cult_and_occult}
  */
  readonly cultAndOccult?: number;
  /**
  * Category Dating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#dating SlbTemplateClientSsl#dating}
  */
  readonly dating?: number;
  /**
  * Category Dead Sites (db Ops only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#dead_sites SlbTemplateClientSsl#dead_sites}
  */
  readonly deadSites?: number;
  /**
  * Category Abused Drugs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#drugs SlbTemplateClientSsl#drugs}
  */
  readonly drugs?: number;
  /**
  * Dynamically Generated Content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#dynamically_generated_content SlbTemplateClientSsl#dynamically_generated_content}
  */
  readonly dynamicallyGeneratedContent?: number;
  /**
  * Category Educational Institutions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#educational_institutions SlbTemplateClientSsl#educational_institutions}
  */
  readonly educationalInstitutions?: number;
  /**
  * Category Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#entertainment_and_arts SlbTemplateClientSsl#entertainment_and_arts}
  */
  readonly entertainmentAndArts?: number;
  /**
  * Category Fashion and Beauty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#fashion_and_beauty SlbTemplateClientSsl#fashion_and_beauty}
  */
  readonly fashionAndBeauty?: number;
  /**
  * Category Financial Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#financial_services SlbTemplateClientSsl#financial_services}
  */
  readonly financialServices?: number;
  /**
  * Category Gambling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#gambling SlbTemplateClientSsl#gambling}
  */
  readonly gambling?: number;
  /**
  * Category Games
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#games SlbTemplateClientSsl#games}
  */
  readonly games?: number;
  /**
  * Category Government
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#government SlbTemplateClientSsl#government}
  */
  readonly government?: number;
  /**
  * Category Gross
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#gross SlbTemplateClientSsl#gross}
  */
  readonly gross?: number;
  /**
  * Category Hacking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#hacking SlbTemplateClientSsl#hacking}
  */
  readonly hacking?: number;
  /**
  * Category Hate and Racism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#hate_and_racism SlbTemplateClientSsl#hate_and_racism}
  */
  readonly hateAndRacism?: number;
  /**
  * Category Health and Medicine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#health_and_medicine SlbTemplateClientSsl#health_and_medicine}
  */
  readonly healthAndMedicine?: number;
  /**
  * Category Home and Garden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#home_and_garden SlbTemplateClientSsl#home_and_garden}
  */
  readonly homeAndGarden?: number;
  /**
  * Category Hunting and Fishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#hunting_and_fishing SlbTemplateClientSsl#hunting_and_fishing}
  */
  readonly huntingAndFishing?: number;
  /**
  * Category Illegal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#illegal SlbTemplateClientSsl#illegal}
  */
  readonly illegal?: number;
  /**
  * Category Illegal join Adult and Pornography
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#illegal_pornography SlbTemplateClientSsl#illegal_pornography}
  */
  readonly illegalPornography?: number;
  /**
  * Category Image and Video Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#image_and_video_search SlbTemplateClientSsl#image_and_video_search}
  */
  readonly imageAndVideoSearch?: number;
  /**
  * Category Internet Communications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#internet_communications SlbTemplateClientSsl#internet_communications}
  */
  readonly internetCommunications?: number;
  /**
  * Category Internet Portals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#internet_portals SlbTemplateClientSsl#internet_portals}
  */
  readonly internetPortals?: number;
  /**
  * Category Job Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#job_search SlbTemplateClientSsl#job_search}
  */
  readonly jobSearch?: number;
  /**
  * Category Keyloggers and Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#keyloggers_and_monitoring SlbTemplateClientSsl#keyloggers_and_monitoring}
  */
  readonly keyloggersAndMonitoring?: number;
  /**
  * Category Kids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#kids SlbTemplateClientSsl#kids}
  */
  readonly kids?: number;
  /**
  * Category Legal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#legal SlbTemplateClientSsl#legal}
  */
  readonly legal?: number;
  /**
  * Category Local Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#local_information SlbTemplateClientSsl#local_information}
  */
  readonly localInformation?: number;
  /**
  * Category Malware Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#malware_sites SlbTemplateClientSsl#malware_sites}
  */
  readonly malwareSites?: number;
  /**
  * Category Marijuana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#marijuana SlbTemplateClientSsl#marijuana}
  */
  readonly marijuana?: number;
  /**
  * Category Military
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#military SlbTemplateClientSsl#military}
  */
  readonly military?: number;
  /**
  * Category Motor Vehicles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#motor_vehicles SlbTemplateClientSsl#motor_vehicles}
  */
  readonly motorVehicles?: number;
  /**
  * Category Music
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#music SlbTemplateClientSsl#music}
  */
  readonly music?: number;
  /**
  * Category News and Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#news_and_media SlbTemplateClientSsl#news_and_media}
  */
  readonly newsAndMedia?: number;
  /**
  * Category Nudity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#nudity SlbTemplateClientSsl#nudity}
  */
  readonly nudity?: number;
  /**
  * Category Nudity join Entertainment and Arts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#nudity_artistic SlbTemplateClientSsl#nudity_artistic}
  */
  readonly nudityArtistic?: number;
  /**
  * Category Online Greeting cards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#online_greeting_cards SlbTemplateClientSsl#online_greeting_cards}
  */
  readonly onlineGreetingCards?: number;
  /**
  * Category Parked Domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#parked_domains SlbTemplateClientSsl#parked_domains}
  */
  readonly parkedDomains?: number;
  /**
  * Category Pay to Surf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#pay_to_surf SlbTemplateClientSsl#pay_to_surf}
  */
  readonly payToSurf?: number;
  /**
  * Category Peer to Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#peer_to_peer SlbTemplateClientSsl#peer_to_peer}
  */
  readonly peerToPeer?: number;
  /**
  * Category Personal sites and Blogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#personal_sites_and_blogs SlbTemplateClientSsl#personal_sites_and_blogs}
  */
  readonly personalSitesAndBlogs?: number;
  /**
  * Category Personal Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#personal_storage SlbTemplateClientSsl#personal_storage}
  */
  readonly personalStorage?: number;
  /**
  * Category Philosophy and Political Advocacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#philosophy_and_politics SlbTemplateClientSsl#philosophy_and_politics}
  */
  readonly philosophyAndPolitics?: number;
  /**
  * Category Phishing and Other Frauds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#phishing_and_other_fraud SlbTemplateClientSsl#phishing_and_other_fraud}
  */
  readonly phishingAndOtherFraud?: number;
  /**
  * Category Proxy Avoid and Anonymizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#proxy_avoid_and_anonymizers SlbTemplateClientSsl#proxy_avoid_and_anonymizers}
  */
  readonly proxyAvoidAndAnonymizers?: number;
  /**
  * Category Questionable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#questionable SlbTemplateClientSsl#questionable}
  */
  readonly questionable?: number;
  /**
  * Category Real Estate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#real_estate SlbTemplateClientSsl#real_estate}
  */
  readonly realEstate?: number;
  /**
  * Category Recreation and Hobbies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#recreation_and_hobbies SlbTemplateClientSsl#recreation_and_hobbies}
  */
  readonly recreationAndHobbies?: number;
  /**
  * Category Reference and Research
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#reference_and_research SlbTemplateClientSsl#reference_and_research}
  */
  readonly referenceAndResearch?: number;
  /**
  * Category Religion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#religion SlbTemplateClientSsl#religion}
  */
  readonly religion?: number;
  /**
  * Category Search Engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#search_engines SlbTemplateClientSsl#search_engines}
  */
  readonly searchEngines?: number;
  /**
  * Category Sex Education
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sex_education SlbTemplateClientSsl#sex_education}
  */
  readonly sexEducation?: number;
  /**
  * Category Shareware and Freeware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#shareware_and_freeware SlbTemplateClientSsl#shareware_and_freeware}
  */
  readonly sharewareAndFreeware?: number;
  /**
  * Category Shopping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#shopping SlbTemplateClientSsl#shopping}
  */
  readonly shopping?: number;
  /**
  * Category Social Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#social_network SlbTemplateClientSsl#social_network}
  */
  readonly socialNetwork?: number;
  /**
  * Category Society
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#society SlbTemplateClientSsl#society}
  */
  readonly society?: number;
  /**
  * Category SPAM URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#spam_urls SlbTemplateClientSsl#spam_urls}
  */
  readonly spamUrls?: number;
  /**
  * Category Sports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#sports SlbTemplateClientSsl#sports}
  */
  readonly sports?: number;
  /**
  * Category Spyware and Adware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#spyware_and_adware SlbTemplateClientSsl#spyware_and_adware}
  */
  readonly spywareAndAdware?: number;
  /**
  * Category Stock Advice and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#stock_advice_and_tools SlbTemplateClientSsl#stock_advice_and_tools}
  */
  readonly stockAdviceAndTools?: number;
  /**
  * Category Streaming Media
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#streaming_media SlbTemplateClientSsl#streaming_media}
  */
  readonly streamingMedia?: number;
  /**
  * Category Swimsuits and Intimate Apparel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#swimsuits_and_intimate_apparel SlbTemplateClientSsl#swimsuits_and_intimate_apparel}
  */
  readonly swimsuitsAndIntimateApparel?: number;
  /**
  * Category Training and Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#training_and_tools SlbTemplateClientSsl#training_and_tools}
  */
  readonly trainingAndTools?: number;
  /**
  * Category Translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#translation SlbTemplateClientSsl#translation}
  */
  readonly translation?: number;
  /**
  * Category Travel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#travel SlbTemplateClientSsl#travel}
  */
  readonly travel?: number;
  /**
  * Uncategorized URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#uncategorized SlbTemplateClientSsl#uncategorized}
  */
  readonly uncategorized?: number;
  /**
  * Category Violence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#violence SlbTemplateClientSsl#violence}
  */
  readonly violence?: number;
  /**
  * Category Weapons
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#weapons SlbTemplateClientSsl#weapons}
  */
  readonly weapons?: number;
  /**
  * Category Web Advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#web_advertisements SlbTemplateClientSsl#web_advertisements}
  */
  readonly webAdvertisements?: number;
  /**
  * Category Web based email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#web_based_email SlbTemplateClientSsl#web_based_email}
  */
  readonly webBasedEmail?: number;
  /**
  * Category Web Hosting Sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#web_hosting_sites SlbTemplateClientSsl#web_hosting_sites}
  */
  readonly webHostingSites?: number;
}

export function slbTemplateClientSslWebCategoryToTerraform(struct?: SlbTemplateClientSslWebCategoryOutputReference | SlbTemplateClientSslWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abortion: cdktf.numberToTerraform(struct!.abortion),
    adult_and_pornography: cdktf.numberToTerraform(struct!.adultAndPornography),
    alcohol_and_tobacco: cdktf.numberToTerraform(struct!.alcoholAndTobacco),
    auctions: cdktf.numberToTerraform(struct!.auctions),
    bot_nets: cdktf.numberToTerraform(struct!.botNets),
    business_and_economy: cdktf.numberToTerraform(struct!.businessAndEconomy),
    cdns: cdktf.numberToTerraform(struct!.cdns),
    cheating: cdktf.numberToTerraform(struct!.cheating),
    computer_and_internet_info: cdktf.numberToTerraform(struct!.computerAndInternetInfo),
    computer_and_internet_security: cdktf.numberToTerraform(struct!.computerAndInternetSecurity),
    cult_and_occult: cdktf.numberToTerraform(struct!.cultAndOccult),
    dating: cdktf.numberToTerraform(struct!.dating),
    dead_sites: cdktf.numberToTerraform(struct!.deadSites),
    drugs: cdktf.numberToTerraform(struct!.drugs),
    dynamically_generated_content: cdktf.numberToTerraform(struct!.dynamicallyGeneratedContent),
    educational_institutions: cdktf.numberToTerraform(struct!.educationalInstitutions),
    entertainment_and_arts: cdktf.numberToTerraform(struct!.entertainmentAndArts),
    fashion_and_beauty: cdktf.numberToTerraform(struct!.fashionAndBeauty),
    financial_services: cdktf.numberToTerraform(struct!.financialServices),
    gambling: cdktf.numberToTerraform(struct!.gambling),
    games: cdktf.numberToTerraform(struct!.games),
    government: cdktf.numberToTerraform(struct!.government),
    gross: cdktf.numberToTerraform(struct!.gross),
    hacking: cdktf.numberToTerraform(struct!.hacking),
    hate_and_racism: cdktf.numberToTerraform(struct!.hateAndRacism),
    health_and_medicine: cdktf.numberToTerraform(struct!.healthAndMedicine),
    home_and_garden: cdktf.numberToTerraform(struct!.homeAndGarden),
    hunting_and_fishing: cdktf.numberToTerraform(struct!.huntingAndFishing),
    illegal: cdktf.numberToTerraform(struct!.illegal),
    illegal_pornography: cdktf.numberToTerraform(struct!.illegalPornography),
    image_and_video_search: cdktf.numberToTerraform(struct!.imageAndVideoSearch),
    internet_communications: cdktf.numberToTerraform(struct!.internetCommunications),
    internet_portals: cdktf.numberToTerraform(struct!.internetPortals),
    job_search: cdktf.numberToTerraform(struct!.jobSearch),
    keyloggers_and_monitoring: cdktf.numberToTerraform(struct!.keyloggersAndMonitoring),
    kids: cdktf.numberToTerraform(struct!.kids),
    legal: cdktf.numberToTerraform(struct!.legal),
    local_information: cdktf.numberToTerraform(struct!.localInformation),
    malware_sites: cdktf.numberToTerraform(struct!.malwareSites),
    marijuana: cdktf.numberToTerraform(struct!.marijuana),
    military: cdktf.numberToTerraform(struct!.military),
    motor_vehicles: cdktf.numberToTerraform(struct!.motorVehicles),
    music: cdktf.numberToTerraform(struct!.music),
    news_and_media: cdktf.numberToTerraform(struct!.newsAndMedia),
    nudity: cdktf.numberToTerraform(struct!.nudity),
    nudity_artistic: cdktf.numberToTerraform(struct!.nudityArtistic),
    online_greeting_cards: cdktf.numberToTerraform(struct!.onlineGreetingCards),
    parked_domains: cdktf.numberToTerraform(struct!.parkedDomains),
    pay_to_surf: cdktf.numberToTerraform(struct!.payToSurf),
    peer_to_peer: cdktf.numberToTerraform(struct!.peerToPeer),
    personal_sites_and_blogs: cdktf.numberToTerraform(struct!.personalSitesAndBlogs),
    personal_storage: cdktf.numberToTerraform(struct!.personalStorage),
    philosophy_and_politics: cdktf.numberToTerraform(struct!.philosophyAndPolitics),
    phishing_and_other_fraud: cdktf.numberToTerraform(struct!.phishingAndOtherFraud),
    proxy_avoid_and_anonymizers: cdktf.numberToTerraform(struct!.proxyAvoidAndAnonymizers),
    questionable: cdktf.numberToTerraform(struct!.questionable),
    real_estate: cdktf.numberToTerraform(struct!.realEstate),
    recreation_and_hobbies: cdktf.numberToTerraform(struct!.recreationAndHobbies),
    reference_and_research: cdktf.numberToTerraform(struct!.referenceAndResearch),
    religion: cdktf.numberToTerraform(struct!.religion),
    search_engines: cdktf.numberToTerraform(struct!.searchEngines),
    sex_education: cdktf.numberToTerraform(struct!.sexEducation),
    shareware_and_freeware: cdktf.numberToTerraform(struct!.sharewareAndFreeware),
    shopping: cdktf.numberToTerraform(struct!.shopping),
    social_network: cdktf.numberToTerraform(struct!.socialNetwork),
    society: cdktf.numberToTerraform(struct!.society),
    spam_urls: cdktf.numberToTerraform(struct!.spamUrls),
    sports: cdktf.numberToTerraform(struct!.sports),
    spyware_and_adware: cdktf.numberToTerraform(struct!.spywareAndAdware),
    stock_advice_and_tools: cdktf.numberToTerraform(struct!.stockAdviceAndTools),
    streaming_media: cdktf.numberToTerraform(struct!.streamingMedia),
    swimsuits_and_intimate_apparel: cdktf.numberToTerraform(struct!.swimsuitsAndIntimateApparel),
    training_and_tools: cdktf.numberToTerraform(struct!.trainingAndTools),
    translation: cdktf.numberToTerraform(struct!.translation),
    travel: cdktf.numberToTerraform(struct!.travel),
    uncategorized: cdktf.numberToTerraform(struct!.uncategorized),
    violence: cdktf.numberToTerraform(struct!.violence),
    weapons: cdktf.numberToTerraform(struct!.weapons),
    web_advertisements: cdktf.numberToTerraform(struct!.webAdvertisements),
    web_based_email: cdktf.numberToTerraform(struct!.webBasedEmail),
    web_hosting_sites: cdktf.numberToTerraform(struct!.webHostingSites),
  }
}


export function slbTemplateClientSslWebCategoryToHclTerraform(struct?: SlbTemplateClientSslWebCategoryOutputReference | SlbTemplateClientSslWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abortion: {
      value: cdktf.numberToHclTerraform(struct!.abortion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adult_and_pornography: {
      value: cdktf.numberToHclTerraform(struct!.adultAndPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alcohol_and_tobacco: {
      value: cdktf.numberToHclTerraform(struct!.alcoholAndTobacco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auctions: {
      value: cdktf.numberToHclTerraform(struct!.auctions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bot_nets: {
      value: cdktf.numberToHclTerraform(struct!.botNets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    business_and_economy: {
      value: cdktf.numberToHclTerraform(struct!.businessAndEconomy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cdns: {
      value: cdktf.numberToHclTerraform(struct!.cdns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cheating: {
      value: cdktf.numberToHclTerraform(struct!.cheating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_and_internet_info: {
      value: cdktf.numberToHclTerraform(struct!.computerAndInternetInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_and_internet_security: {
      value: cdktf.numberToHclTerraform(struct!.computerAndInternetSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cult_and_occult: {
      value: cdktf.numberToHclTerraform(struct!.cultAndOccult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dating: {
      value: cdktf.numberToHclTerraform(struct!.dating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_sites: {
      value: cdktf.numberToHclTerraform(struct!.deadSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drugs: {
      value: cdktf.numberToHclTerraform(struct!.drugs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamically_generated_content: {
      value: cdktf.numberToHclTerraform(struct!.dynamicallyGeneratedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    educational_institutions: {
      value: cdktf.numberToHclTerraform(struct!.educationalInstitutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entertainment_and_arts: {
      value: cdktf.numberToHclTerraform(struct!.entertainmentAndArts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fashion_and_beauty: {
      value: cdktf.numberToHclTerraform(struct!.fashionAndBeauty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    financial_services: {
      value: cdktf.numberToHclTerraform(struct!.financialServices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gambling: {
      value: cdktf.numberToHclTerraform(struct!.gambling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    games: {
      value: cdktf.numberToHclTerraform(struct!.games),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    government: {
      value: cdktf.numberToHclTerraform(struct!.government),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gross: {
      value: cdktf.numberToHclTerraform(struct!.gross),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hacking: {
      value: cdktf.numberToHclTerraform(struct!.hacking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hate_and_racism: {
      value: cdktf.numberToHclTerraform(struct!.hateAndRacism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_and_medicine: {
      value: cdktf.numberToHclTerraform(struct!.healthAndMedicine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    home_and_garden: {
      value: cdktf.numberToHclTerraform(struct!.homeAndGarden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hunting_and_fishing: {
      value: cdktf.numberToHclTerraform(struct!.huntingAndFishing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal: {
      value: cdktf.numberToHclTerraform(struct!.illegal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_pornography: {
      value: cdktf.numberToHclTerraform(struct!.illegalPornography),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_and_video_search: {
      value: cdktf.numberToHclTerraform(struct!.imageAndVideoSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internet_communications: {
      value: cdktf.numberToHclTerraform(struct!.internetCommunications),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internet_portals: {
      value: cdktf.numberToHclTerraform(struct!.internetPortals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_search: {
      value: cdktf.numberToHclTerraform(struct!.jobSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keyloggers_and_monitoring: {
      value: cdktf.numberToHclTerraform(struct!.keyloggersAndMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kids: {
      value: cdktf.numberToHclTerraform(struct!.kids),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    legal: {
      value: cdktf.numberToHclTerraform(struct!.legal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_information: {
      value: cdktf.numberToHclTerraform(struct!.localInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malware_sites: {
      value: cdktf.numberToHclTerraform(struct!.malwareSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    marijuana: {
      value: cdktf.numberToHclTerraform(struct!.marijuana),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    military: {
      value: cdktf.numberToHclTerraform(struct!.military),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    motor_vehicles: {
      value: cdktf.numberToHclTerraform(struct!.motorVehicles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    music: {
      value: cdktf.numberToHclTerraform(struct!.music),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    news_and_media: {
      value: cdktf.numberToHclTerraform(struct!.newsAndMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nudity: {
      value: cdktf.numberToHclTerraform(struct!.nudity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nudity_artistic: {
      value: cdktf.numberToHclTerraform(struct!.nudityArtistic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    online_greeting_cards: {
      value: cdktf.numberToHclTerraform(struct!.onlineGreetingCards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parked_domains: {
      value: cdktf.numberToHclTerraform(struct!.parkedDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pay_to_surf: {
      value: cdktf.numberToHclTerraform(struct!.payToSurf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_to_peer: {
      value: cdktf.numberToHclTerraform(struct!.peerToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    personal_sites_and_blogs: {
      value: cdktf.numberToHclTerraform(struct!.personalSitesAndBlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    personal_storage: {
      value: cdktf.numberToHclTerraform(struct!.personalStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    philosophy_and_politics: {
      value: cdktf.numberToHclTerraform(struct!.philosophyAndPolitics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phishing_and_other_fraud: {
      value: cdktf.numberToHclTerraform(struct!.phishingAndOtherFraud),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_avoid_and_anonymizers: {
      value: cdktf.numberToHclTerraform(struct!.proxyAvoidAndAnonymizers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    questionable: {
      value: cdktf.numberToHclTerraform(struct!.questionable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_estate: {
      value: cdktf.numberToHclTerraform(struct!.realEstate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recreation_and_hobbies: {
      value: cdktf.numberToHclTerraform(struct!.recreationAndHobbies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reference_and_research: {
      value: cdktf.numberToHclTerraform(struct!.referenceAndResearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    religion: {
      value: cdktf.numberToHclTerraform(struct!.religion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_engines: {
      value: cdktf.numberToHclTerraform(struct!.searchEngines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sex_education: {
      value: cdktf.numberToHclTerraform(struct!.sexEducation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shareware_and_freeware: {
      value: cdktf.numberToHclTerraform(struct!.sharewareAndFreeware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shopping: {
      value: cdktf.numberToHclTerraform(struct!.shopping),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    social_network: {
      value: cdktf.numberToHclTerraform(struct!.socialNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    society: {
      value: cdktf.numberToHclTerraform(struct!.society),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spam_urls: {
      value: cdktf.numberToHclTerraform(struct!.spamUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sports: {
      value: cdktf.numberToHclTerraform(struct!.sports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spyware_and_adware: {
      value: cdktf.numberToHclTerraform(struct!.spywareAndAdware),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stock_advice_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.stockAdviceAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streaming_media: {
      value: cdktf.numberToHclTerraform(struct!.streamingMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swimsuits_and_intimate_apparel: {
      value: cdktf.numberToHclTerraform(struct!.swimsuitsAndIntimateApparel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_and_tools: {
      value: cdktf.numberToHclTerraform(struct!.trainingAndTools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translation: {
      value: cdktf.numberToHclTerraform(struct!.translation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    travel: {
      value: cdktf.numberToHclTerraform(struct!.travel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncategorized: {
      value: cdktf.numberToHclTerraform(struct!.uncategorized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violence: {
      value: cdktf.numberToHclTerraform(struct!.violence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weapons: {
      value: cdktf.numberToHclTerraform(struct!.weapons),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_advertisements: {
      value: cdktf.numberToHclTerraform(struct!.webAdvertisements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_based_email: {
      value: cdktf.numberToHclTerraform(struct!.webBasedEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_hosting_sites: {
      value: cdktf.numberToHclTerraform(struct!.webHostingSites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslWebCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateClientSslWebCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortion !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortion = this._abortion;
    }
    if (this._adultAndPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.adultAndPornography = this._adultAndPornography;
    }
    if (this._alcoholAndTobacco !== undefined) {
      hasAnyValues = true;
      internalValueResult.alcoholAndTobacco = this._alcoholAndTobacco;
    }
    if (this._auctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.auctions = this._auctions;
    }
    if (this._botNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.botNets = this._botNets;
    }
    if (this._businessAndEconomy !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessAndEconomy = this._businessAndEconomy;
    }
    if (this._cdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdns = this._cdns;
    }
    if (this._cheating !== undefined) {
      hasAnyValues = true;
      internalValueResult.cheating = this._cheating;
    }
    if (this._computerAndInternetInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerAndInternetInfo = this._computerAndInternetInfo;
    }
    if (this._computerAndInternetSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerAndInternetSecurity = this._computerAndInternetSecurity;
    }
    if (this._cultAndOccult !== undefined) {
      hasAnyValues = true;
      internalValueResult.cultAndOccult = this._cultAndOccult;
    }
    if (this._dating !== undefined) {
      hasAnyValues = true;
      internalValueResult.dating = this._dating;
    }
    if (this._deadSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadSites = this._deadSites;
    }
    if (this._drugs !== undefined) {
      hasAnyValues = true;
      internalValueResult.drugs = this._drugs;
    }
    if (this._dynamicallyGeneratedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicallyGeneratedContent = this._dynamicallyGeneratedContent;
    }
    if (this._educationalInstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.educationalInstitutions = this._educationalInstitutions;
    }
    if (this._entertainmentAndArts !== undefined) {
      hasAnyValues = true;
      internalValueResult.entertainmentAndArts = this._entertainmentAndArts;
    }
    if (this._fashionAndBeauty !== undefined) {
      hasAnyValues = true;
      internalValueResult.fashionAndBeauty = this._fashionAndBeauty;
    }
    if (this._financialServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialServices = this._financialServices;
    }
    if (this._gambling !== undefined) {
      hasAnyValues = true;
      internalValueResult.gambling = this._gambling;
    }
    if (this._games !== undefined) {
      hasAnyValues = true;
      internalValueResult.games = this._games;
    }
    if (this._government !== undefined) {
      hasAnyValues = true;
      internalValueResult.government = this._government;
    }
    if (this._gross !== undefined) {
      hasAnyValues = true;
      internalValueResult.gross = this._gross;
    }
    if (this._hacking !== undefined) {
      hasAnyValues = true;
      internalValueResult.hacking = this._hacking;
    }
    if (this._hateAndRacism !== undefined) {
      hasAnyValues = true;
      internalValueResult.hateAndRacism = this._hateAndRacism;
    }
    if (this._healthAndMedicine !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthAndMedicine = this._healthAndMedicine;
    }
    if (this._homeAndGarden !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeAndGarden = this._homeAndGarden;
    }
    if (this._huntingAndFishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.huntingAndFishing = this._huntingAndFishing;
    }
    if (this._illegal !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegal = this._illegal;
    }
    if (this._illegalPornography !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalPornography = this._illegalPornography;
    }
    if (this._imageAndVideoSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageAndVideoSearch = this._imageAndVideoSearch;
    }
    if (this._internetCommunications !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetCommunications = this._internetCommunications;
    }
    if (this._internetPortals !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetPortals = this._internetPortals;
    }
    if (this._jobSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSearch = this._jobSearch;
    }
    if (this._keyloggersAndMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyloggersAndMonitoring = this._keyloggersAndMonitoring;
    }
    if (this._kids !== undefined) {
      hasAnyValues = true;
      internalValueResult.kids = this._kids;
    }
    if (this._legal !== undefined) {
      hasAnyValues = true;
      internalValueResult.legal = this._legal;
    }
    if (this._localInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.localInformation = this._localInformation;
    }
    if (this._malwareSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareSites = this._malwareSites;
    }
    if (this._marijuana !== undefined) {
      hasAnyValues = true;
      internalValueResult.marijuana = this._marijuana;
    }
    if (this._military !== undefined) {
      hasAnyValues = true;
      internalValueResult.military = this._military;
    }
    if (this._motorVehicles !== undefined) {
      hasAnyValues = true;
      internalValueResult.motorVehicles = this._motorVehicles;
    }
    if (this._music !== undefined) {
      hasAnyValues = true;
      internalValueResult.music = this._music;
    }
    if (this._newsAndMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.newsAndMedia = this._newsAndMedia;
    }
    if (this._nudity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nudity = this._nudity;
    }
    if (this._nudityArtistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.nudityArtistic = this._nudityArtistic;
    }
    if (this._onlineGreetingCards !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineGreetingCards = this._onlineGreetingCards;
    }
    if (this._parkedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.parkedDomains = this._parkedDomains;
    }
    if (this._payToSurf !== undefined) {
      hasAnyValues = true;
      internalValueResult.payToSurf = this._payToSurf;
    }
    if (this._peerToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerToPeer = this._peerToPeer;
    }
    if (this._personalSitesAndBlogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalSitesAndBlogs = this._personalSitesAndBlogs;
    }
    if (this._personalStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalStorage = this._personalStorage;
    }
    if (this._philosophyAndPolitics !== undefined) {
      hasAnyValues = true;
      internalValueResult.philosophyAndPolitics = this._philosophyAndPolitics;
    }
    if (this._phishingAndOtherFraud !== undefined) {
      hasAnyValues = true;
      internalValueResult.phishingAndOtherFraud = this._phishingAndOtherFraud;
    }
    if (this._proxyAvoidAndAnonymizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAvoidAndAnonymizers = this._proxyAvoidAndAnonymizers;
    }
    if (this._questionable !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionable = this._questionable;
    }
    if (this._realEstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.realEstate = this._realEstate;
    }
    if (this._recreationAndHobbies !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreationAndHobbies = this._recreationAndHobbies;
    }
    if (this._referenceAndResearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceAndResearch = this._referenceAndResearch;
    }
    if (this._religion !== undefined) {
      hasAnyValues = true;
      internalValueResult.religion = this._religion;
    }
    if (this._searchEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchEngines = this._searchEngines;
    }
    if (this._sexEducation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sexEducation = this._sexEducation;
    }
    if (this._sharewareAndFreeware !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharewareAndFreeware = this._sharewareAndFreeware;
    }
    if (this._shopping !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopping = this._shopping;
    }
    if (this._socialNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.socialNetwork = this._socialNetwork;
    }
    if (this._society !== undefined) {
      hasAnyValues = true;
      internalValueResult.society = this._society;
    }
    if (this._spamUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.spamUrls = this._spamUrls;
    }
    if (this._sports !== undefined) {
      hasAnyValues = true;
      internalValueResult.sports = this._sports;
    }
    if (this._spywareAndAdware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spywareAndAdware = this._spywareAndAdware;
    }
    if (this._stockAdviceAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.stockAdviceAndTools = this._stockAdviceAndTools;
    }
    if (this._streamingMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingMedia = this._streamingMedia;
    }
    if (this._swimsuitsAndIntimateApparel !== undefined) {
      hasAnyValues = true;
      internalValueResult.swimsuitsAndIntimateApparel = this._swimsuitsAndIntimateApparel;
    }
    if (this._trainingAndTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingAndTools = this._trainingAndTools;
    }
    if (this._translation !== undefined) {
      hasAnyValues = true;
      internalValueResult.translation = this._translation;
    }
    if (this._travel !== undefined) {
      hasAnyValues = true;
      internalValueResult.travel = this._travel;
    }
    if (this._uncategorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncategorized = this._uncategorized;
    }
    if (this._violence !== undefined) {
      hasAnyValues = true;
      internalValueResult.violence = this._violence;
    }
    if (this._weapons !== undefined) {
      hasAnyValues = true;
      internalValueResult.weapons = this._weapons;
    }
    if (this._webAdvertisements !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAdvertisements = this._webAdvertisements;
    }
    if (this._webBasedEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.webBasedEmail = this._webBasedEmail;
    }
    if (this._webHostingSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHostingSites = this._webHostingSites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslWebCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abortion = undefined;
      this._adultAndPornography = undefined;
      this._alcoholAndTobacco = undefined;
      this._auctions = undefined;
      this._botNets = undefined;
      this._businessAndEconomy = undefined;
      this._cdns = undefined;
      this._cheating = undefined;
      this._computerAndInternetInfo = undefined;
      this._computerAndInternetSecurity = undefined;
      this._cultAndOccult = undefined;
      this._dating = undefined;
      this._deadSites = undefined;
      this._drugs = undefined;
      this._dynamicallyGeneratedContent = undefined;
      this._educationalInstitutions = undefined;
      this._entertainmentAndArts = undefined;
      this._fashionAndBeauty = undefined;
      this._financialServices = undefined;
      this._gambling = undefined;
      this._games = undefined;
      this._government = undefined;
      this._gross = undefined;
      this._hacking = undefined;
      this._hateAndRacism = undefined;
      this._healthAndMedicine = undefined;
      this._homeAndGarden = undefined;
      this._huntingAndFishing = undefined;
      this._illegal = undefined;
      this._illegalPornography = undefined;
      this._imageAndVideoSearch = undefined;
      this._internetCommunications = undefined;
      this._internetPortals = undefined;
      this._jobSearch = undefined;
      this._keyloggersAndMonitoring = undefined;
      this._kids = undefined;
      this._legal = undefined;
      this._localInformation = undefined;
      this._malwareSites = undefined;
      this._marijuana = undefined;
      this._military = undefined;
      this._motorVehicles = undefined;
      this._music = undefined;
      this._newsAndMedia = undefined;
      this._nudity = undefined;
      this._nudityArtistic = undefined;
      this._onlineGreetingCards = undefined;
      this._parkedDomains = undefined;
      this._payToSurf = undefined;
      this._peerToPeer = undefined;
      this._personalSitesAndBlogs = undefined;
      this._personalStorage = undefined;
      this._philosophyAndPolitics = undefined;
      this._phishingAndOtherFraud = undefined;
      this._proxyAvoidAndAnonymizers = undefined;
      this._questionable = undefined;
      this._realEstate = undefined;
      this._recreationAndHobbies = undefined;
      this._referenceAndResearch = undefined;
      this._religion = undefined;
      this._searchEngines = undefined;
      this._sexEducation = undefined;
      this._sharewareAndFreeware = undefined;
      this._shopping = undefined;
      this._socialNetwork = undefined;
      this._society = undefined;
      this._spamUrls = undefined;
      this._sports = undefined;
      this._spywareAndAdware = undefined;
      this._stockAdviceAndTools = undefined;
      this._streamingMedia = undefined;
      this._swimsuitsAndIntimateApparel = undefined;
      this._trainingAndTools = undefined;
      this._translation = undefined;
      this._travel = undefined;
      this._uncategorized = undefined;
      this._violence = undefined;
      this._weapons = undefined;
      this._webAdvertisements = undefined;
      this._webBasedEmail = undefined;
      this._webHostingSites = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abortion = value.abortion;
      this._adultAndPornography = value.adultAndPornography;
      this._alcoholAndTobacco = value.alcoholAndTobacco;
      this._auctions = value.auctions;
      this._botNets = value.botNets;
      this._businessAndEconomy = value.businessAndEconomy;
      this._cdns = value.cdns;
      this._cheating = value.cheating;
      this._computerAndInternetInfo = value.computerAndInternetInfo;
      this._computerAndInternetSecurity = value.computerAndInternetSecurity;
      this._cultAndOccult = value.cultAndOccult;
      this._dating = value.dating;
      this._deadSites = value.deadSites;
      this._drugs = value.drugs;
      this._dynamicallyGeneratedContent = value.dynamicallyGeneratedContent;
      this._educationalInstitutions = value.educationalInstitutions;
      this._entertainmentAndArts = value.entertainmentAndArts;
      this._fashionAndBeauty = value.fashionAndBeauty;
      this._financialServices = value.financialServices;
      this._gambling = value.gambling;
      this._games = value.games;
      this._government = value.government;
      this._gross = value.gross;
      this._hacking = value.hacking;
      this._hateAndRacism = value.hateAndRacism;
      this._healthAndMedicine = value.healthAndMedicine;
      this._homeAndGarden = value.homeAndGarden;
      this._huntingAndFishing = value.huntingAndFishing;
      this._illegal = value.illegal;
      this._illegalPornography = value.illegalPornography;
      this._imageAndVideoSearch = value.imageAndVideoSearch;
      this._internetCommunications = value.internetCommunications;
      this._internetPortals = value.internetPortals;
      this._jobSearch = value.jobSearch;
      this._keyloggersAndMonitoring = value.keyloggersAndMonitoring;
      this._kids = value.kids;
      this._legal = value.legal;
      this._localInformation = value.localInformation;
      this._malwareSites = value.malwareSites;
      this._marijuana = value.marijuana;
      this._military = value.military;
      this._motorVehicles = value.motorVehicles;
      this._music = value.music;
      this._newsAndMedia = value.newsAndMedia;
      this._nudity = value.nudity;
      this._nudityArtistic = value.nudityArtistic;
      this._onlineGreetingCards = value.onlineGreetingCards;
      this._parkedDomains = value.parkedDomains;
      this._payToSurf = value.payToSurf;
      this._peerToPeer = value.peerToPeer;
      this._personalSitesAndBlogs = value.personalSitesAndBlogs;
      this._personalStorage = value.personalStorage;
      this._philosophyAndPolitics = value.philosophyAndPolitics;
      this._phishingAndOtherFraud = value.phishingAndOtherFraud;
      this._proxyAvoidAndAnonymizers = value.proxyAvoidAndAnonymizers;
      this._questionable = value.questionable;
      this._realEstate = value.realEstate;
      this._recreationAndHobbies = value.recreationAndHobbies;
      this._referenceAndResearch = value.referenceAndResearch;
      this._religion = value.religion;
      this._searchEngines = value.searchEngines;
      this._sexEducation = value.sexEducation;
      this._sharewareAndFreeware = value.sharewareAndFreeware;
      this._shopping = value.shopping;
      this._socialNetwork = value.socialNetwork;
      this._society = value.society;
      this._spamUrls = value.spamUrls;
      this._sports = value.sports;
      this._spywareAndAdware = value.spywareAndAdware;
      this._stockAdviceAndTools = value.stockAdviceAndTools;
      this._streamingMedia = value.streamingMedia;
      this._swimsuitsAndIntimateApparel = value.swimsuitsAndIntimateApparel;
      this._trainingAndTools = value.trainingAndTools;
      this._translation = value.translation;
      this._travel = value.travel;
      this._uncategorized = value.uncategorized;
      this._violence = value.violence;
      this._weapons = value.weapons;
      this._webAdvertisements = value.webAdvertisements;
      this._webBasedEmail = value.webBasedEmail;
      this._webHostingSites = value.webHostingSites;
    }
  }

  // abortion - computed: false, optional: true, required: false
  private _abortion?: number; 
  public get abortion() {
    return this.getNumberAttribute('abortion');
  }
  public set abortion(value: number) {
    this._abortion = value;
  }
  public resetAbortion() {
    this._abortion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortionInput() {
    return this._abortion;
  }

  // adult_and_pornography - computed: false, optional: true, required: false
  private _adultAndPornography?: number; 
  public get adultAndPornography() {
    return this.getNumberAttribute('adult_and_pornography');
  }
  public set adultAndPornography(value: number) {
    this._adultAndPornography = value;
  }
  public resetAdultAndPornography() {
    this._adultAndPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adultAndPornographyInput() {
    return this._adultAndPornography;
  }

  // alcohol_and_tobacco - computed: false, optional: true, required: false
  private _alcoholAndTobacco?: number; 
  public get alcoholAndTobacco() {
    return this.getNumberAttribute('alcohol_and_tobacco');
  }
  public set alcoholAndTobacco(value: number) {
    this._alcoholAndTobacco = value;
  }
  public resetAlcoholAndTobacco() {
    this._alcoholAndTobacco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alcoholAndTobaccoInput() {
    return this._alcoholAndTobacco;
  }

  // auctions - computed: false, optional: true, required: false
  private _auctions?: number; 
  public get auctions() {
    return this.getNumberAttribute('auctions');
  }
  public set auctions(value: number) {
    this._auctions = value;
  }
  public resetAuctions() {
    this._auctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auctionsInput() {
    return this._auctions;
  }

  // bot_nets - computed: false, optional: true, required: false
  private _botNets?: number; 
  public get botNets() {
    return this.getNumberAttribute('bot_nets');
  }
  public set botNets(value: number) {
    this._botNets = value;
  }
  public resetBotNets() {
    this._botNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botNetsInput() {
    return this._botNets;
  }

  // business_and_economy - computed: false, optional: true, required: false
  private _businessAndEconomy?: number; 
  public get businessAndEconomy() {
    return this.getNumberAttribute('business_and_economy');
  }
  public set businessAndEconomy(value: number) {
    this._businessAndEconomy = value;
  }
  public resetBusinessAndEconomy() {
    this._businessAndEconomy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAndEconomyInput() {
    return this._businessAndEconomy;
  }

  // cdns - computed: false, optional: true, required: false
  private _cdns?: number; 
  public get cdns() {
    return this.getNumberAttribute('cdns');
  }
  public set cdns(value: number) {
    this._cdns = value;
  }
  public resetCdns() {
    this._cdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnsInput() {
    return this._cdns;
  }

  // cheating - computed: false, optional: true, required: false
  private _cheating?: number; 
  public get cheating() {
    return this.getNumberAttribute('cheating');
  }
  public set cheating(value: number) {
    this._cheating = value;
  }
  public resetCheating() {
    this._cheating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cheatingInput() {
    return this._cheating;
  }

  // computer_and_internet_info - computed: false, optional: true, required: false
  private _computerAndInternetInfo?: number; 
  public get computerAndInternetInfo() {
    return this.getNumberAttribute('computer_and_internet_info');
  }
  public set computerAndInternetInfo(value: number) {
    this._computerAndInternetInfo = value;
  }
  public resetComputerAndInternetInfo() {
    this._computerAndInternetInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerAndInternetInfoInput() {
    return this._computerAndInternetInfo;
  }

  // computer_and_internet_security - computed: false, optional: true, required: false
  private _computerAndInternetSecurity?: number; 
  public get computerAndInternetSecurity() {
    return this.getNumberAttribute('computer_and_internet_security');
  }
  public set computerAndInternetSecurity(value: number) {
    this._computerAndInternetSecurity = value;
  }
  public resetComputerAndInternetSecurity() {
    this._computerAndInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerAndInternetSecurityInput() {
    return this._computerAndInternetSecurity;
  }

  // cult_and_occult - computed: false, optional: true, required: false
  private _cultAndOccult?: number; 
  public get cultAndOccult() {
    return this.getNumberAttribute('cult_and_occult');
  }
  public set cultAndOccult(value: number) {
    this._cultAndOccult = value;
  }
  public resetCultAndOccult() {
    this._cultAndOccult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cultAndOccultInput() {
    return this._cultAndOccult;
  }

  // dating - computed: false, optional: true, required: false
  private _dating?: number; 
  public get dating() {
    return this.getNumberAttribute('dating');
  }
  public set dating(value: number) {
    this._dating = value;
  }
  public resetDating() {
    this._dating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datingInput() {
    return this._dating;
  }

  // dead_sites - computed: false, optional: true, required: false
  private _deadSites?: number; 
  public get deadSites() {
    return this.getNumberAttribute('dead_sites');
  }
  public set deadSites(value: number) {
    this._deadSites = value;
  }
  public resetDeadSites() {
    this._deadSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadSitesInput() {
    return this._deadSites;
  }

  // drugs - computed: false, optional: true, required: false
  private _drugs?: number; 
  public get drugs() {
    return this.getNumberAttribute('drugs');
  }
  public set drugs(value: number) {
    this._drugs = value;
  }
  public resetDrugs() {
    this._drugs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drugsInput() {
    return this._drugs;
  }

  // dynamically_generated_content - computed: false, optional: true, required: false
  private _dynamicallyGeneratedContent?: number; 
  public get dynamicallyGeneratedContent() {
    return this.getNumberAttribute('dynamically_generated_content');
  }
  public set dynamicallyGeneratedContent(value: number) {
    this._dynamicallyGeneratedContent = value;
  }
  public resetDynamicallyGeneratedContent() {
    this._dynamicallyGeneratedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicallyGeneratedContentInput() {
    return this._dynamicallyGeneratedContent;
  }

  // educational_institutions - computed: false, optional: true, required: false
  private _educationalInstitutions?: number; 
  public get educationalInstitutions() {
    return this.getNumberAttribute('educational_institutions');
  }
  public set educationalInstitutions(value: number) {
    this._educationalInstitutions = value;
  }
  public resetEducationalInstitutions() {
    this._educationalInstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get educationalInstitutionsInput() {
    return this._educationalInstitutions;
  }

  // entertainment_and_arts - computed: false, optional: true, required: false
  private _entertainmentAndArts?: number; 
  public get entertainmentAndArts() {
    return this.getNumberAttribute('entertainment_and_arts');
  }
  public set entertainmentAndArts(value: number) {
    this._entertainmentAndArts = value;
  }
  public resetEntertainmentAndArts() {
    this._entertainmentAndArts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entertainmentAndArtsInput() {
    return this._entertainmentAndArts;
  }

  // fashion_and_beauty - computed: false, optional: true, required: false
  private _fashionAndBeauty?: number; 
  public get fashionAndBeauty() {
    return this.getNumberAttribute('fashion_and_beauty');
  }
  public set fashionAndBeauty(value: number) {
    this._fashionAndBeauty = value;
  }
  public resetFashionAndBeauty() {
    this._fashionAndBeauty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fashionAndBeautyInput() {
    return this._fashionAndBeauty;
  }

  // financial_services - computed: false, optional: true, required: false
  private _financialServices?: number; 
  public get financialServices() {
    return this.getNumberAttribute('financial_services');
  }
  public set financialServices(value: number) {
    this._financialServices = value;
  }
  public resetFinancialServices() {
    this._financialServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialServicesInput() {
    return this._financialServices;
  }

  // gambling - computed: false, optional: true, required: false
  private _gambling?: number; 
  public get gambling() {
    return this.getNumberAttribute('gambling');
  }
  public set gambling(value: number) {
    this._gambling = value;
  }
  public resetGambling() {
    this._gambling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamblingInput() {
    return this._gambling;
  }

  // games - computed: false, optional: true, required: false
  private _games?: number; 
  public get games() {
    return this.getNumberAttribute('games');
  }
  public set games(value: number) {
    this._games = value;
  }
  public resetGames() {
    this._games = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamesInput() {
    return this._games;
  }

  // government - computed: false, optional: true, required: false
  private _government?: number; 
  public get government() {
    return this.getNumberAttribute('government');
  }
  public set government(value: number) {
    this._government = value;
  }
  public resetGovernment() {
    this._government = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get governmentInput() {
    return this._government;
  }

  // gross - computed: false, optional: true, required: false
  private _gross?: number; 
  public get gross() {
    return this.getNumberAttribute('gross');
  }
  public set gross(value: number) {
    this._gross = value;
  }
  public resetGross() {
    this._gross = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grossInput() {
    return this._gross;
  }

  // hacking - computed: false, optional: true, required: false
  private _hacking?: number; 
  public get hacking() {
    return this.getNumberAttribute('hacking');
  }
  public set hacking(value: number) {
    this._hacking = value;
  }
  public resetHacking() {
    this._hacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hackingInput() {
    return this._hacking;
  }

  // hate_and_racism - computed: false, optional: true, required: false
  private _hateAndRacism?: number; 
  public get hateAndRacism() {
    return this.getNumberAttribute('hate_and_racism');
  }
  public set hateAndRacism(value: number) {
    this._hateAndRacism = value;
  }
  public resetHateAndRacism() {
    this._hateAndRacism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hateAndRacismInput() {
    return this._hateAndRacism;
  }

  // health_and_medicine - computed: false, optional: true, required: false
  private _healthAndMedicine?: number; 
  public get healthAndMedicine() {
    return this.getNumberAttribute('health_and_medicine');
  }
  public set healthAndMedicine(value: number) {
    this._healthAndMedicine = value;
  }
  public resetHealthAndMedicine() {
    this._healthAndMedicine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthAndMedicineInput() {
    return this._healthAndMedicine;
  }

  // home_and_garden - computed: false, optional: true, required: false
  private _homeAndGarden?: number; 
  public get homeAndGarden() {
    return this.getNumberAttribute('home_and_garden');
  }
  public set homeAndGarden(value: number) {
    this._homeAndGarden = value;
  }
  public resetHomeAndGarden() {
    this._homeAndGarden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeAndGardenInput() {
    return this._homeAndGarden;
  }

  // hunting_and_fishing - computed: false, optional: true, required: false
  private _huntingAndFishing?: number; 
  public get huntingAndFishing() {
    return this.getNumberAttribute('hunting_and_fishing');
  }
  public set huntingAndFishing(value: number) {
    this._huntingAndFishing = value;
  }
  public resetHuntingAndFishing() {
    this._huntingAndFishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huntingAndFishingInput() {
    return this._huntingAndFishing;
  }

  // illegal - computed: false, optional: true, required: false
  private _illegal?: number; 
  public get illegal() {
    return this.getNumberAttribute('illegal');
  }
  public set illegal(value: number) {
    this._illegal = value;
  }
  public resetIllegal() {
    this._illegal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalInput() {
    return this._illegal;
  }

  // illegal_pornography - computed: false, optional: true, required: false
  private _illegalPornography?: number; 
  public get illegalPornography() {
    return this.getNumberAttribute('illegal_pornography');
  }
  public set illegalPornography(value: number) {
    this._illegalPornography = value;
  }
  public resetIllegalPornography() {
    this._illegalPornography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalPornographyInput() {
    return this._illegalPornography;
  }

  // image_and_video_search - computed: false, optional: true, required: false
  private _imageAndVideoSearch?: number; 
  public get imageAndVideoSearch() {
    return this.getNumberAttribute('image_and_video_search');
  }
  public set imageAndVideoSearch(value: number) {
    this._imageAndVideoSearch = value;
  }
  public resetImageAndVideoSearch() {
    this._imageAndVideoSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAndVideoSearchInput() {
    return this._imageAndVideoSearch;
  }

  // internet_communications - computed: false, optional: true, required: false
  private _internetCommunications?: number; 
  public get internetCommunications() {
    return this.getNumberAttribute('internet_communications');
  }
  public set internetCommunications(value: number) {
    this._internetCommunications = value;
  }
  public resetInternetCommunications() {
    this._internetCommunications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetCommunicationsInput() {
    return this._internetCommunications;
  }

  // internet_portals - computed: false, optional: true, required: false
  private _internetPortals?: number; 
  public get internetPortals() {
    return this.getNumberAttribute('internet_portals');
  }
  public set internetPortals(value: number) {
    this._internetPortals = value;
  }
  public resetInternetPortals() {
    this._internetPortals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetPortalsInput() {
    return this._internetPortals;
  }

  // job_search - computed: false, optional: true, required: false
  private _jobSearch?: number; 
  public get jobSearch() {
    return this.getNumberAttribute('job_search');
  }
  public set jobSearch(value: number) {
    this._jobSearch = value;
  }
  public resetJobSearch() {
    this._jobSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSearchInput() {
    return this._jobSearch;
  }

  // keyloggers_and_monitoring - computed: false, optional: true, required: false
  private _keyloggersAndMonitoring?: number; 
  public get keyloggersAndMonitoring() {
    return this.getNumberAttribute('keyloggers_and_monitoring');
  }
  public set keyloggersAndMonitoring(value: number) {
    this._keyloggersAndMonitoring = value;
  }
  public resetKeyloggersAndMonitoring() {
    this._keyloggersAndMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyloggersAndMonitoringInput() {
    return this._keyloggersAndMonitoring;
  }

  // kids - computed: false, optional: true, required: false
  private _kids?: number; 
  public get kids() {
    return this.getNumberAttribute('kids');
  }
  public set kids(value: number) {
    this._kids = value;
  }
  public resetKids() {
    this._kids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidsInput() {
    return this._kids;
  }

  // legal - computed: false, optional: true, required: false
  private _legal?: number; 
  public get legal() {
    return this.getNumberAttribute('legal');
  }
  public set legal(value: number) {
    this._legal = value;
  }
  public resetLegal() {
    this._legal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legalInput() {
    return this._legal;
  }

  // local_information - computed: false, optional: true, required: false
  private _localInformation?: number; 
  public get localInformation() {
    return this.getNumberAttribute('local_information');
  }
  public set localInformation(value: number) {
    this._localInformation = value;
  }
  public resetLocalInformation() {
    this._localInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInformationInput() {
    return this._localInformation;
  }

  // malware_sites - computed: false, optional: true, required: false
  private _malwareSites?: number; 
  public get malwareSites() {
    return this.getNumberAttribute('malware_sites');
  }
  public set malwareSites(value: number) {
    this._malwareSites = value;
  }
  public resetMalwareSites() {
    this._malwareSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareSitesInput() {
    return this._malwareSites;
  }

  // marijuana - computed: false, optional: true, required: false
  private _marijuana?: number; 
  public get marijuana() {
    return this.getNumberAttribute('marijuana');
  }
  public set marijuana(value: number) {
    this._marijuana = value;
  }
  public resetMarijuana() {
    this._marijuana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marijuanaInput() {
    return this._marijuana;
  }

  // military - computed: false, optional: true, required: false
  private _military?: number; 
  public get military() {
    return this.getNumberAttribute('military');
  }
  public set military(value: number) {
    this._military = value;
  }
  public resetMilitary() {
    this._military = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get militaryInput() {
    return this._military;
  }

  // motor_vehicles - computed: false, optional: true, required: false
  private _motorVehicles?: number; 
  public get motorVehicles() {
    return this.getNumberAttribute('motor_vehicles');
  }
  public set motorVehicles(value: number) {
    this._motorVehicles = value;
  }
  public resetMotorVehicles() {
    this._motorVehicles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motorVehiclesInput() {
    return this._motorVehicles;
  }

  // music - computed: false, optional: true, required: false
  private _music?: number; 
  public get music() {
    return this.getNumberAttribute('music');
  }
  public set music(value: number) {
    this._music = value;
  }
  public resetMusic() {
    this._music = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get musicInput() {
    return this._music;
  }

  // news_and_media - computed: false, optional: true, required: false
  private _newsAndMedia?: number; 
  public get newsAndMedia() {
    return this.getNumberAttribute('news_and_media');
  }
  public set newsAndMedia(value: number) {
    this._newsAndMedia = value;
  }
  public resetNewsAndMedia() {
    this._newsAndMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newsAndMediaInput() {
    return this._newsAndMedia;
  }

  // nudity - computed: false, optional: true, required: false
  private _nudity?: number; 
  public get nudity() {
    return this.getNumberAttribute('nudity');
  }
  public set nudity(value: number) {
    this._nudity = value;
  }
  public resetNudity() {
    this._nudity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudityInput() {
    return this._nudity;
  }

  // nudity_artistic - computed: false, optional: true, required: false
  private _nudityArtistic?: number; 
  public get nudityArtistic() {
    return this.getNumberAttribute('nudity_artistic');
  }
  public set nudityArtistic(value: number) {
    this._nudityArtistic = value;
  }
  public resetNudityArtistic() {
    this._nudityArtistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nudityArtisticInput() {
    return this._nudityArtistic;
  }

  // online_greeting_cards - computed: false, optional: true, required: false
  private _onlineGreetingCards?: number; 
  public get onlineGreetingCards() {
    return this.getNumberAttribute('online_greeting_cards');
  }
  public set onlineGreetingCards(value: number) {
    this._onlineGreetingCards = value;
  }
  public resetOnlineGreetingCards() {
    this._onlineGreetingCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineGreetingCardsInput() {
    return this._onlineGreetingCards;
  }

  // parked_domains - computed: false, optional: true, required: false
  private _parkedDomains?: number; 
  public get parkedDomains() {
    return this.getNumberAttribute('parked_domains');
  }
  public set parkedDomains(value: number) {
    this._parkedDomains = value;
  }
  public resetParkedDomains() {
    this._parkedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parkedDomainsInput() {
    return this._parkedDomains;
  }

  // pay_to_surf - computed: false, optional: true, required: false
  private _payToSurf?: number; 
  public get payToSurf() {
    return this.getNumberAttribute('pay_to_surf');
  }
  public set payToSurf(value: number) {
    this._payToSurf = value;
  }
  public resetPayToSurf() {
    this._payToSurf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payToSurfInput() {
    return this._payToSurf;
  }

  // peer_to_peer - computed: false, optional: true, required: false
  private _peerToPeer?: number; 
  public get peerToPeer() {
    return this.getNumberAttribute('peer_to_peer');
  }
  public set peerToPeer(value: number) {
    this._peerToPeer = value;
  }
  public resetPeerToPeer() {
    this._peerToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerToPeerInput() {
    return this._peerToPeer;
  }

  // personal_sites_and_blogs - computed: false, optional: true, required: false
  private _personalSitesAndBlogs?: number; 
  public get personalSitesAndBlogs() {
    return this.getNumberAttribute('personal_sites_and_blogs');
  }
  public set personalSitesAndBlogs(value: number) {
    this._personalSitesAndBlogs = value;
  }
  public resetPersonalSitesAndBlogs() {
    this._personalSitesAndBlogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalSitesAndBlogsInput() {
    return this._personalSitesAndBlogs;
  }

  // personal_storage - computed: false, optional: true, required: false
  private _personalStorage?: number; 
  public get personalStorage() {
    return this.getNumberAttribute('personal_storage');
  }
  public set personalStorage(value: number) {
    this._personalStorage = value;
  }
  public resetPersonalStorage() {
    this._personalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalStorageInput() {
    return this._personalStorage;
  }

  // philosophy_and_politics - computed: false, optional: true, required: false
  private _philosophyAndPolitics?: number; 
  public get philosophyAndPolitics() {
    return this.getNumberAttribute('philosophy_and_politics');
  }
  public set philosophyAndPolitics(value: number) {
    this._philosophyAndPolitics = value;
  }
  public resetPhilosophyAndPolitics() {
    this._philosophyAndPolitics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get philosophyAndPoliticsInput() {
    return this._philosophyAndPolitics;
  }

  // phishing_and_other_fraud - computed: false, optional: true, required: false
  private _phishingAndOtherFraud?: number; 
  public get phishingAndOtherFraud() {
    return this.getNumberAttribute('phishing_and_other_fraud');
  }
  public set phishingAndOtherFraud(value: number) {
    this._phishingAndOtherFraud = value;
  }
  public resetPhishingAndOtherFraud() {
    this._phishingAndOtherFraud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phishingAndOtherFraudInput() {
    return this._phishingAndOtherFraud;
  }

  // proxy_avoid_and_anonymizers - computed: false, optional: true, required: false
  private _proxyAvoidAndAnonymizers?: number; 
  public get proxyAvoidAndAnonymizers() {
    return this.getNumberAttribute('proxy_avoid_and_anonymizers');
  }
  public set proxyAvoidAndAnonymizers(value: number) {
    this._proxyAvoidAndAnonymizers = value;
  }
  public resetProxyAvoidAndAnonymizers() {
    this._proxyAvoidAndAnonymizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAvoidAndAnonymizersInput() {
    return this._proxyAvoidAndAnonymizers;
  }

  // questionable - computed: false, optional: true, required: false
  private _questionable?: number; 
  public get questionable() {
    return this.getNumberAttribute('questionable');
  }
  public set questionable(value: number) {
    this._questionable = value;
  }
  public resetQuestionable() {
    this._questionable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionableInput() {
    return this._questionable;
  }

  // real_estate - computed: false, optional: true, required: false
  private _realEstate?: number; 
  public get realEstate() {
    return this.getNumberAttribute('real_estate');
  }
  public set realEstate(value: number) {
    this._realEstate = value;
  }
  public resetRealEstate() {
    this._realEstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realEstateInput() {
    return this._realEstate;
  }

  // recreation_and_hobbies - computed: false, optional: true, required: false
  private _recreationAndHobbies?: number; 
  public get recreationAndHobbies() {
    return this.getNumberAttribute('recreation_and_hobbies');
  }
  public set recreationAndHobbies(value: number) {
    this._recreationAndHobbies = value;
  }
  public resetRecreationAndHobbies() {
    this._recreationAndHobbies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreationAndHobbiesInput() {
    return this._recreationAndHobbies;
  }

  // reference_and_research - computed: false, optional: true, required: false
  private _referenceAndResearch?: number; 
  public get referenceAndResearch() {
    return this.getNumberAttribute('reference_and_research');
  }
  public set referenceAndResearch(value: number) {
    this._referenceAndResearch = value;
  }
  public resetReferenceAndResearch() {
    this._referenceAndResearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceAndResearchInput() {
    return this._referenceAndResearch;
  }

  // religion - computed: false, optional: true, required: false
  private _religion?: number; 
  public get religion() {
    return this.getNumberAttribute('religion');
  }
  public set religion(value: number) {
    this._religion = value;
  }
  public resetReligion() {
    this._religion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get religionInput() {
    return this._religion;
  }

  // search_engines - computed: false, optional: true, required: false
  private _searchEngines?: number; 
  public get searchEngines() {
    return this.getNumberAttribute('search_engines');
  }
  public set searchEngines(value: number) {
    this._searchEngines = value;
  }
  public resetSearchEngines() {
    this._searchEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEnginesInput() {
    return this._searchEngines;
  }

  // sex_education - computed: false, optional: true, required: false
  private _sexEducation?: number; 
  public get sexEducation() {
    return this.getNumberAttribute('sex_education');
  }
  public set sexEducation(value: number) {
    this._sexEducation = value;
  }
  public resetSexEducation() {
    this._sexEducation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sexEducationInput() {
    return this._sexEducation;
  }

  // shareware_and_freeware - computed: false, optional: true, required: false
  private _sharewareAndFreeware?: number; 
  public get sharewareAndFreeware() {
    return this.getNumberAttribute('shareware_and_freeware');
  }
  public set sharewareAndFreeware(value: number) {
    this._sharewareAndFreeware = value;
  }
  public resetSharewareAndFreeware() {
    this._sharewareAndFreeware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharewareAndFreewareInput() {
    return this._sharewareAndFreeware;
  }

  // shopping - computed: false, optional: true, required: false
  private _shopping?: number; 
  public get shopping() {
    return this.getNumberAttribute('shopping');
  }
  public set shopping(value: number) {
    this._shopping = value;
  }
  public resetShopping() {
    this._shopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingInput() {
    return this._shopping;
  }

  // social_network - computed: false, optional: true, required: false
  private _socialNetwork?: number; 
  public get socialNetwork() {
    return this.getNumberAttribute('social_network');
  }
  public set socialNetwork(value: number) {
    this._socialNetwork = value;
  }
  public resetSocialNetwork() {
    this._socialNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialNetworkInput() {
    return this._socialNetwork;
  }

  // society - computed: false, optional: true, required: false
  private _society?: number; 
  public get society() {
    return this.getNumberAttribute('society');
  }
  public set society(value: number) {
    this._society = value;
  }
  public resetSociety() {
    this._society = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get societyInput() {
    return this._society;
  }

  // spam_urls - computed: false, optional: true, required: false
  private _spamUrls?: number; 
  public get spamUrls() {
    return this.getNumberAttribute('spam_urls');
  }
  public set spamUrls(value: number) {
    this._spamUrls = value;
  }
  public resetSpamUrls() {
    this._spamUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamUrlsInput() {
    return this._spamUrls;
  }

  // sports - computed: false, optional: true, required: false
  private _sports?: number; 
  public get sports() {
    return this.getNumberAttribute('sports');
  }
  public set sports(value: number) {
    this._sports = value;
  }
  public resetSports() {
    this._sports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportsInput() {
    return this._sports;
  }

  // spyware_and_adware - computed: false, optional: true, required: false
  private _spywareAndAdware?: number; 
  public get spywareAndAdware() {
    return this.getNumberAttribute('spyware_and_adware');
  }
  public set spywareAndAdware(value: number) {
    this._spywareAndAdware = value;
  }
  public resetSpywareAndAdware() {
    this._spywareAndAdware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareAndAdwareInput() {
    return this._spywareAndAdware;
  }

  // stock_advice_and_tools - computed: false, optional: true, required: false
  private _stockAdviceAndTools?: number; 
  public get stockAdviceAndTools() {
    return this.getNumberAttribute('stock_advice_and_tools');
  }
  public set stockAdviceAndTools(value: number) {
    this._stockAdviceAndTools = value;
  }
  public resetStockAdviceAndTools() {
    this._stockAdviceAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stockAdviceAndToolsInput() {
    return this._stockAdviceAndTools;
  }

  // streaming_media - computed: false, optional: true, required: false
  private _streamingMedia?: number; 
  public get streamingMedia() {
    return this.getNumberAttribute('streaming_media');
  }
  public set streamingMedia(value: number) {
    this._streamingMedia = value;
  }
  public resetStreamingMedia() {
    this._streamingMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingMediaInput() {
    return this._streamingMedia;
  }

  // swimsuits_and_intimate_apparel - computed: false, optional: true, required: false
  private _swimsuitsAndIntimateApparel?: number; 
  public get swimsuitsAndIntimateApparel() {
    return this.getNumberAttribute('swimsuits_and_intimate_apparel');
  }
  public set swimsuitsAndIntimateApparel(value: number) {
    this._swimsuitsAndIntimateApparel = value;
  }
  public resetSwimsuitsAndIntimateApparel() {
    this._swimsuitsAndIntimateApparel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swimsuitsAndIntimateApparelInput() {
    return this._swimsuitsAndIntimateApparel;
  }

  // training_and_tools - computed: false, optional: true, required: false
  private _trainingAndTools?: number; 
  public get trainingAndTools() {
    return this.getNumberAttribute('training_and_tools');
  }
  public set trainingAndTools(value: number) {
    this._trainingAndTools = value;
  }
  public resetTrainingAndTools() {
    this._trainingAndTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingAndToolsInput() {
    return this._trainingAndTools;
  }

  // translation - computed: false, optional: true, required: false
  private _translation?: number; 
  public get translation() {
    return this.getNumberAttribute('translation');
  }
  public set translation(value: number) {
    this._translation = value;
  }
  public resetTranslation() {
    this._translation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationInput() {
    return this._translation;
  }

  // travel - computed: false, optional: true, required: false
  private _travel?: number; 
  public get travel() {
    return this.getNumberAttribute('travel');
  }
  public set travel(value: number) {
    this._travel = value;
  }
  public resetTravel() {
    this._travel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get travelInput() {
    return this._travel;
  }

  // uncategorized - computed: false, optional: true, required: false
  private _uncategorized?: number; 
  public get uncategorized() {
    return this.getNumberAttribute('uncategorized');
  }
  public set uncategorized(value: number) {
    this._uncategorized = value;
  }
  public resetUncategorized() {
    this._uncategorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncategorizedInput() {
    return this._uncategorized;
  }

  // violence - computed: false, optional: true, required: false
  private _violence?: number; 
  public get violence() {
    return this.getNumberAttribute('violence');
  }
  public set violence(value: number) {
    this._violence = value;
  }
  public resetViolence() {
    this._violence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violenceInput() {
    return this._violence;
  }

  // weapons - computed: false, optional: true, required: false
  private _weapons?: number; 
  public get weapons() {
    return this.getNumberAttribute('weapons');
  }
  public set weapons(value: number) {
    this._weapons = value;
  }
  public resetWeapons() {
    this._weapons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaponsInput() {
    return this._weapons;
  }

  // web_advertisements - computed: false, optional: true, required: false
  private _webAdvertisements?: number; 
  public get webAdvertisements() {
    return this.getNumberAttribute('web_advertisements');
  }
  public set webAdvertisements(value: number) {
    this._webAdvertisements = value;
  }
  public resetWebAdvertisements() {
    this._webAdvertisements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAdvertisementsInput() {
    return this._webAdvertisements;
  }

  // web_based_email - computed: false, optional: true, required: false
  private _webBasedEmail?: number; 
  public get webBasedEmail() {
    return this.getNumberAttribute('web_based_email');
  }
  public set webBasedEmail(value: number) {
    this._webBasedEmail = value;
  }
  public resetWebBasedEmail() {
    this._webBasedEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBasedEmailInput() {
    return this._webBasedEmail;
  }

  // web_hosting_sites - computed: false, optional: true, required: false
  private _webHostingSites?: number; 
  public get webHostingSites() {
    return this.getNumberAttribute('web_hosting_sites');
  }
  public set webHostingSites(value: number) {
    this._webHostingSites = value;
  }
  public resetWebHostingSites() {
    this._webHostingSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHostingSitesInput() {
    return this._webHostingSites;
  }
}
export interface SlbTemplateClientSslWebReputation {
  /**
  * Bypass when reputation score is greater than or equal to 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_low_risk SlbTemplateClientSsl#bypass_low_risk}
  */
  readonly bypassLowRisk?: number;
  /**
  * Bypass when reputation score is greater than or equal to 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_malicious SlbTemplateClientSsl#bypass_malicious}
  */
  readonly bypassMalicious?: number;
  /**
  * Bypass when reputation score is greater than or equal to 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_moderate_risk SlbTemplateClientSsl#bypass_moderate_risk}
  */
  readonly bypassModerateRisk?: number;
  /**
  * Bypass when reputation score is greater than or equal to 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_suspicious SlbTemplateClientSsl#bypass_suspicious}
  */
  readonly bypassSuspicious?: number;
  /**
  * Bypass when reputation score is greater than or equal to the customized score (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_threshold SlbTemplateClientSsl#bypass_threshold}
  */
  readonly bypassThreshold?: number;
  /**
  * Bypass when reputation score is greater than or equal to 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#bypass_trustworthy SlbTemplateClientSsl#bypass_trustworthy}
  */
  readonly bypassTrustworthy?: number;
}

export function slbTemplateClientSslWebReputationToTerraform(struct?: SlbTemplateClientSslWebReputationOutputReference | SlbTemplateClientSslWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_low_risk: cdktf.numberToTerraform(struct!.bypassLowRisk),
    bypass_malicious: cdktf.numberToTerraform(struct!.bypassMalicious),
    bypass_moderate_risk: cdktf.numberToTerraform(struct!.bypassModerateRisk),
    bypass_suspicious: cdktf.numberToTerraform(struct!.bypassSuspicious),
    bypass_threshold: cdktf.numberToTerraform(struct!.bypassThreshold),
    bypass_trustworthy: cdktf.numberToTerraform(struct!.bypassTrustworthy),
  }
}


export function slbTemplateClientSslWebReputationToHclTerraform(struct?: SlbTemplateClientSslWebReputationOutputReference | SlbTemplateClientSslWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_low_risk: {
      value: cdktf.numberToHclTerraform(struct!.bypassLowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_malicious: {
      value: cdktf.numberToHclTerraform(struct!.bypassMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.bypassModerateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_suspicious: {
      value: cdktf.numberToHclTerraform(struct!.bypassSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bypassThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.bypassTrustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslWebReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateClientSslWebReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassLowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassLowRisk = this._bypassLowRisk;
    }
    if (this._bypassMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassMalicious = this._bypassMalicious;
    }
    if (this._bypassModerateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassModerateRisk = this._bypassModerateRisk;
    }
    if (this._bypassSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassSuspicious = this._bypassSuspicious;
    }
    if (this._bypassThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassThreshold = this._bypassThreshold;
    }
    if (this._bypassTrustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassTrustworthy = this._bypassTrustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslWebReputation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassLowRisk = undefined;
      this._bypassMalicious = undefined;
      this._bypassModerateRisk = undefined;
      this._bypassSuspicious = undefined;
      this._bypassThreshold = undefined;
      this._bypassTrustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassLowRisk = value.bypassLowRisk;
      this._bypassMalicious = value.bypassMalicious;
      this._bypassModerateRisk = value.bypassModerateRisk;
      this._bypassSuspicious = value.bypassSuspicious;
      this._bypassThreshold = value.bypassThreshold;
      this._bypassTrustworthy = value.bypassTrustworthy;
    }
  }

  // bypass_low_risk - computed: false, optional: true, required: false
  private _bypassLowRisk?: number; 
  public get bypassLowRisk() {
    return this.getNumberAttribute('bypass_low_risk');
  }
  public set bypassLowRisk(value: number) {
    this._bypassLowRisk = value;
  }
  public resetBypassLowRisk() {
    this._bypassLowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassLowRiskInput() {
    return this._bypassLowRisk;
  }

  // bypass_malicious - computed: false, optional: true, required: false
  private _bypassMalicious?: number; 
  public get bypassMalicious() {
    return this.getNumberAttribute('bypass_malicious');
  }
  public set bypassMalicious(value: number) {
    this._bypassMalicious = value;
  }
  public resetBypassMalicious() {
    this._bypassMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassMaliciousInput() {
    return this._bypassMalicious;
  }

  // bypass_moderate_risk - computed: false, optional: true, required: false
  private _bypassModerateRisk?: number; 
  public get bypassModerateRisk() {
    return this.getNumberAttribute('bypass_moderate_risk');
  }
  public set bypassModerateRisk(value: number) {
    this._bypassModerateRisk = value;
  }
  public resetBypassModerateRisk() {
    this._bypassModerateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassModerateRiskInput() {
    return this._bypassModerateRisk;
  }

  // bypass_suspicious - computed: false, optional: true, required: false
  private _bypassSuspicious?: number; 
  public get bypassSuspicious() {
    return this.getNumberAttribute('bypass_suspicious');
  }
  public set bypassSuspicious(value: number) {
    this._bypassSuspicious = value;
  }
  public resetBypassSuspicious() {
    this._bypassSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSuspiciousInput() {
    return this._bypassSuspicious;
  }

  // bypass_threshold - computed: false, optional: true, required: false
  private _bypassThreshold?: number; 
  public get bypassThreshold() {
    return this.getNumberAttribute('bypass_threshold');
  }
  public set bypassThreshold(value: number) {
    this._bypassThreshold = value;
  }
  public resetBypassThreshold() {
    this._bypassThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassThresholdInput() {
    return this._bypassThreshold;
  }

  // bypass_trustworthy - computed: false, optional: true, required: false
  private _bypassTrustworthy?: number; 
  public get bypassTrustworthy() {
    return this.getNumberAttribute('bypass_trustworthy');
  }
  public set bypassTrustworthy(value: number) {
    this._bypassTrustworthy = value;
  }
  public resetBypassTrustworthy() {
    this._bypassTrustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTrustworthyInput() {
    return this._bypassTrustworthy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl thunder_slb_template_client_ssl}
*/
export class SlbTemplateClientSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_client_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateClientSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateClientSsl to import
  * @param importFromId The id of the existing SlbTemplateClientSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateClientSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_client_ssl thunder_slb_template_client_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateClientSslConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateClientSslConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_client_ssl',
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
    this._adGroupList = config.adGroupList;
    this._alertType = config.alertType;
    this._authSg = config.authSg;
    this._authSgDn = config.authSgDn;
    this._authSgFilter = config.authSgFilter;
    this._authUsername = config.authUsername;
    this._authUsernameAttribute = config.authUsernameAttribute;
    this._authenName = config.authenName;
    this._authorization = config.authorization;
    this._bypassCertIssuerClassListName = config.bypassCertIssuerClassListName;
    this._bypassCertSanClassListName = config.bypassCertSanClassListName;
    this._bypassCertSubjectClassListName = config.bypassCertSubjectClassListName;
    this._cachePersistenceListName = config.cachePersistenceListName;
    this._caseInsensitive = config.caseInsensitive;
    this._centralCertPinList = config.centralCertPinList;
    this._certRevokeAction = config.certRevokeAction;
    this._certUnknownAction = config.certUnknownAction;
    this._chainCert = config.chainCert;
    this._chainCertSharedStr = config.chainCertSharedStr;
    this._classListName = config.classListName;
    this._clientAuthCaseInsensitive = config.clientAuthCaseInsensitive;
    this._clientAuthClassList = config.clientAuthClassList;
    this._clientCertificate = config.clientCertificate;
    this._closeNotify = config.closeNotify;
    this._dgversion = config.dgversion;
    this._dhType = config.dhType;
    this._directClientServerAuth = config.directClientServerAuth;
    this._disableSslv3 = config.disableSslv3;
    this._earlyData = config.earlyData;
    this._enableSsliFtpAlg = config.enableSsliFtpAlg;
    this._enableTlsAlertLogging = config.enableTlsAlertLogging;
    this._exceptionAdGroupList = config.exceptionAdGroupList;
    this._exceptionCertificateIssuerClName = config.exceptionCertificateIssuerClName;
    this._exceptionCertificateSanClName = config.exceptionCertificateSanClName;
    this._exceptionCertificateSubjectClName = config.exceptionCertificateSubjectClName;
    this._exceptionSniClName = config.exceptionSniClName;
    this._exceptionUserNameList = config.exceptionUserNameList;
    this._expireHours = config.expireHours;
    this._forwardPassphrase = config.forwardPassphrase;
    this._forwardProxyAltSign = config.forwardProxyAltSign;
    this._forwardProxyBlockMessage = config.forwardProxyBlockMessage;
    this._forwardProxyCaCert = config.forwardProxyCaCert;
    this._forwardProxyCaKey = config.forwardProxyCaKey;
    this._forwardProxyCertCacheLimit = config.forwardProxyCertCacheLimit;
    this._forwardProxyCertCacheTimeout = config.forwardProxyCertCacheTimeout;
    this._forwardProxyCertExpiry = config.forwardProxyCertExpiry;
    this._forwardProxyCertNotReadyAction = config.forwardProxyCertNotReadyAction;
    this._forwardProxyCertRevokeAction = config.forwardProxyCertRevokeAction;
    this._forwardProxyCertUnknownAction = config.forwardProxyCertUnknownAction;
    this._forwardProxyCrlDisable = config.forwardProxyCrlDisable;
    this._forwardProxyDecryptedDscp = config.forwardProxyDecryptedDscp;
    this._forwardProxyDecryptedDscpBypass = config.forwardProxyDecryptedDscpBypass;
    this._forwardProxyEnable = config.forwardProxyEnable;
    this._forwardProxyEsniAction = config.forwardProxyEsniAction;
    this._forwardProxyFailsafeDisable = config.forwardProxyFailsafeDisable;
    this._forwardProxyHashPersistenceInterval = config.forwardProxyHashPersistenceInterval;
    this._forwardProxyLogDisable = config.forwardProxyLogDisable;
    this._forwardProxyNoSharedCipherAction = config.forwardProxyNoSharedCipherAction;
    this._forwardProxyNoSniAction = config.forwardProxyNoSniAction;
    this._forwardProxyOcspDisable = config.forwardProxyOcspDisable;
    this._forwardProxyRequireSniCertMatched = config.forwardProxyRequireSniCertMatched;
    this._forwardProxySelfsignRedir = config.forwardProxySelfsignRedir;
    this._forwardProxySslVersion = config.forwardProxySslVersion;
    this._forwardProxyVerifyCertFailAction = config.forwardProxyVerifyCertFailAction;
    this._fpAltCert = config.fpAltCert;
    this._fpAltChainCert = config.fpAltChainCert;
    this._fpAltKey = config.fpAltKey;
    this._fpAltPassphrase = config.fpAltPassphrase;
    this._fpAltShared = config.fpAltShared;
    this._fpCaCertificate = config.fpCaCertificate;
    this._fpCaCertificateShared = config.fpCaCertificateShared;
    this._fpCaChainCert = config.fpCaChainCert;
    this._fpCaKey = config.fpCaKey;
    this._fpCaKeyPassphrase = config.fpCaKeyPassphrase;
    this._fpCaKeyShared = config.fpCaKeyShared;
    this._fpCaShared = config.fpCaShared;
    this._fpCertExtAiaCaIssuers = config.fpCertExtAiaCaIssuers;
    this._fpCertExtAiaOcsp = config.fpCertExtAiaOcsp;
    this._fpCertExtCrldp = config.fpCertExtCrldp;
    this._fpCertFetchAutonat = config.fpCertFetchAutonat;
    this._fpCertFetchAutonatPrecedence = config.fpCertFetchAutonatPrecedence;
    this._fpCertFetchNatpoolName = config.fpCertFetchNatpoolName;
    this._fpCertFetchNatpoolNameShared = config.fpCertFetchNatpoolNameShared;
    this._fpCertFetchNatpoolPrecedence = config.fpCertFetchNatpoolPrecedence;
    this._fpEsniAction = config.fpEsniAction;
    this._handshakeLoggingEnable = config.handshakeLoggingEnable;
    this._hsmType = config.hsmType;
    this._id = config.id;
    this._inspectCertificateIssuerClName = config.inspectCertificateIssuerClName;
    this._inspectCertificateSanClName = config.inspectCertificateSanClName;
    this._inspectCertificateSubjectClName = config.inspectCertificateSubjectClName;
    this._inspectListName = config.inspectListName;
    this._ja3Enable = config.ja3Enable;
    this._ja3InsertHttpHeader = config.ja3InsertHttpHeader;
    this._ja3RejectClassList = config.ja3RejectClassList;
    this._ja3RejectMaxNumberPerHost = config.ja3RejectMaxNumberPerHost;
    this._ja3Ttl = config.ja3Ttl;
    this._ldapBaseDnFromCert = config.ldapBaseDnFromCert;
    this._ldapSearchFilter = config.ldapSearchFilter;
    this._localLogging = config.localLogging;
    this._name = config.name;
    this._noAntiReplay = config.noAntiReplay;
    this._noSharedCipherAction = config.noSharedCipherAction;
    this._nonSslBypassL4Session = config.nonSslBypassL4Session;
    this._nonSslBypassServiceGroup = config.nonSslBypassServiceGroup;
    this._notafter = config.notafter;
    this._notafterday = config.notafterday;
    this._notaftermonth = config.notaftermonth;
    this._notafteryear = config.notafteryear;
    this._notbefore = config.notbefore;
    this._notbeforeday = config.notbeforeday;
    this._notbeforemonth = config.notbeforemonth;
    this._notbeforeyear = config.notbeforeyear;
    this._ocspStapling = config.ocspStapling;
    this._ocspstCaCert = config.ocspstCaCert;
    this._ocspstOcsp = config.ocspstOcsp;
    this._ocspstSg = config.ocspstSg;
    this._ocspstSgDays = config.ocspstSgDays;
    this._ocspstSgHours = config.ocspstSgHours;
    this._ocspstSgMinutes = config.ocspstSgMinutes;
    this._ocspstSgTimeout = config.ocspstSgTimeout;
    this._ocspstSrvr = config.ocspstSrvr;
    this._ocspstSrvrDays = config.ocspstSrvrDays;
    this._ocspstSrvrHours = config.ocspstSrvrHours;
    this._ocspstSrvrMinutes = config.ocspstSrvrMinutes;
    this._ocspstSrvrTimeout = config.ocspstSrvrTimeout;
    this._renegotiationDisable = config.renegotiationDisable;
    this._requireWebCategory = config.requireWebCategory;
    this._serverNameAutoMap = config.serverNameAutoMap;
    this._sessionCacheSize = config.sessionCacheSize;
    this._sessionCacheTimeout = config.sessionCacheTimeout;
    this._sessionTicketDisable = config.sessionTicketDisable;
    this._sessionTicketLifetime = config.sessionTicketLifetime;
    this._sharedPartitionCipherTemplate = config.sharedPartitionCipherTemplate;
    this._sharedPartitionPool = config.sharedPartitionPool;
    this._sniBypassEnableLog = config.sniBypassEnableLog;
    this._sniBypassExpiredCert = config.sniBypassExpiredCert;
    this._sniBypassExplicitList = config.sniBypassExplicitList;
    this._sniBypassMissingCert = config.sniBypassMissingCert;
    this._sniEnableLog = config.sniEnableLog;
    this._sslFalseStartDisable = config.sslFalseStartDisable;
    this._ssliInboundEnable = config.ssliInboundEnable;
    this._ssliLogging = config.ssliLogging;
    this._sslilogging = config.sslilogging;
    this._sslv2BypassServiceGroup = config.sslv2BypassServiceGroup;
    this._templateCipher = config.templateCipher;
    this._templateCipherShared = config.templateCipherShared;
    this._templateHsm = config.templateHsm;
    this._userNameList = config.userNameList;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._verifyCertFailAction = config.verifyCertFailAction;
    this._version = config.version;
    this._bypassCertIssuerMultiClassList.internalValue = config.bypassCertIssuerMultiClassList;
    this._bypassCertSanMultiClassList.internalValue = config.bypassCertSanMultiClassList;
    this._bypassCertSubjectMultiClassList.internalValue = config.bypassCertSubjectMultiClassList;
    this._caCerts.internalValue = config.caCerts;
    this._certificateIssuerContainsList.internalValue = config.certificateIssuerContainsList;
    this._certificateIssuerEndsWithList.internalValue = config.certificateIssuerEndsWithList;
    this._certificateIssuerEqualsList.internalValue = config.certificateIssuerEqualsList;
    this._certificateIssuerStartsWithList.internalValue = config.certificateIssuerStartsWithList;
    this._certificateList.internalValue = config.certificateList;
    this._certificateSanContainsList.internalValue = config.certificateSanContainsList;
    this._certificateSanEndsWithList.internalValue = config.certificateSanEndsWithList;
    this._certificateSanEqualsList.internalValue = config.certificateSanEqualsList;
    this._certificateSanStartsWithList.internalValue = config.certificateSanStartsWithList;
    this._certificateSubjectContainsList.internalValue = config.certificateSubjectContainsList;
    this._certificateSubjectEndsWithList.internalValue = config.certificateSubjectEndsWithList;
    this._certificateSubjectEqualsList.internalValue = config.certificateSubjectEqualsList;
    this._certificateSubjectStartsWithList.internalValue = config.certificateSubjectStartsWithList;
    this._cipherWithoutPrioList.internalValue = config.cipherWithoutPrioList;
    this._clientAuthContainsList.internalValue = config.clientAuthContainsList;
    this._clientAuthEndsWithList.internalValue = config.clientAuthEndsWithList;
    this._clientAuthEqualsList.internalValue = config.clientAuthEqualsList;
    this._clientAuthStartsWithList.internalValue = config.clientAuthStartsWithList;
    this._clientIpv4List.internalValue = config.clientIpv4List;
    this._clientIpv6List.internalValue = config.clientIpv6List;
    this._containsList.internalValue = config.containsList;
    this._crlCerts.internalValue = config.crlCerts;
    this._ecList.internalValue = config.ecList;
    this._endsWithList.internalValue = config.endsWithList;
    this._equalsList.internalValue = config.equalsList;
    this._exceptionClientIpv4List.internalValue = config.exceptionClientIpv4List;
    this._exceptionClientIpv6List.internalValue = config.exceptionClientIpv6List;
    this._exceptionServerIpv4List.internalValue = config.exceptionServerIpv4List;
    this._exceptionServerIpv6List.internalValue = config.exceptionServerIpv6List;
    this._exceptionWebCategory.internalValue = config.exceptionWebCategory;
    this._exceptionWebReputation.internalValue = config.exceptionWebReputation;
    this._forwardProxyTrustedCaLists.internalValue = config.forwardProxyTrustedCaLists;
    this._localCertPinList.internalValue = config.localCertPinList;
    this._multiClassList.internalValue = config.multiClassList;
    this._reqCaLists.internalValue = config.reqCaLists;
    this._serverIpv4List.internalValue = config.serverIpv4List;
    this._serverIpv6List.internalValue = config.serverIpv6List;
    this._serverNameList.internalValue = config.serverNameList;
    this._startsWithList.internalValue = config.startsWithList;
    this._webCategory.internalValue = config.webCategory;
    this._webReputation.internalValue = config.webReputation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_group_list - computed: false, optional: true, required: false
  private _adGroupList?: string; 
  public get adGroupList() {
    return this.getStringAttribute('ad_group_list');
  }
  public set adGroupList(value: string) {
    this._adGroupList = value;
  }
  public resetAdGroupList() {
    this._adGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adGroupListInput() {
    return this._adGroupList;
  }

  // alert_type - computed: false, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // auth_sg - computed: false, optional: true, required: false
  private _authSg?: string; 
  public get authSg() {
    return this.getStringAttribute('auth_sg');
  }
  public set authSg(value: string) {
    this._authSg = value;
  }
  public resetAuthSg() {
    this._authSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSgInput() {
    return this._authSg;
  }

  // auth_sg_dn - computed: false, optional: true, required: false
  private _authSgDn?: number; 
  public get authSgDn() {
    return this.getNumberAttribute('auth_sg_dn');
  }
  public set authSgDn(value: number) {
    this._authSgDn = value;
  }
  public resetAuthSgDn() {
    this._authSgDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSgDnInput() {
    return this._authSgDn;
  }

  // auth_sg_filter - computed: false, optional: true, required: false
  private _authSgFilter?: string; 
  public get authSgFilter() {
    return this.getStringAttribute('auth_sg_filter');
  }
  public set authSgFilter(value: string) {
    this._authSgFilter = value;
  }
  public resetAuthSgFilter() {
    this._authSgFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSgFilterInput() {
    return this._authSgFilter;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // auth_username_attribute - computed: false, optional: true, required: false
  private _authUsernameAttribute?: string; 
  public get authUsernameAttribute() {
    return this.getStringAttribute('auth_username_attribute');
  }
  public set authUsernameAttribute(value: string) {
    this._authUsernameAttribute = value;
  }
  public resetAuthUsernameAttribute() {
    this._authUsernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameAttributeInput() {
    return this._authUsernameAttribute;
  }

  // authen_name - computed: false, optional: true, required: false
  private _authenName?: string; 
  public get authenName() {
    return this.getStringAttribute('authen_name');
  }
  public set authenName(value: string) {
    this._authenName = value;
  }
  public resetAuthenName() {
    this._authenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenNameInput() {
    return this._authenName;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: number; 
  public get authorization() {
    return this.getNumberAttribute('authorization');
  }
  public set authorization(value: number) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // bypass_cert_issuer_class_list_name - computed: false, optional: true, required: false
  private _bypassCertIssuerClassListName?: string; 
  public get bypassCertIssuerClassListName() {
    return this.getStringAttribute('bypass_cert_issuer_class_list_name');
  }
  public set bypassCertIssuerClassListName(value: string) {
    this._bypassCertIssuerClassListName = value;
  }
  public resetBypassCertIssuerClassListName() {
    this._bypassCertIssuerClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertIssuerClassListNameInput() {
    return this._bypassCertIssuerClassListName;
  }

  // bypass_cert_san_class_list_name - computed: false, optional: true, required: false
  private _bypassCertSanClassListName?: string; 
  public get bypassCertSanClassListName() {
    return this.getStringAttribute('bypass_cert_san_class_list_name');
  }
  public set bypassCertSanClassListName(value: string) {
    this._bypassCertSanClassListName = value;
  }
  public resetBypassCertSanClassListName() {
    this._bypassCertSanClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSanClassListNameInput() {
    return this._bypassCertSanClassListName;
  }

  // bypass_cert_subject_class_list_name - computed: false, optional: true, required: false
  private _bypassCertSubjectClassListName?: string; 
  public get bypassCertSubjectClassListName() {
    return this.getStringAttribute('bypass_cert_subject_class_list_name');
  }
  public set bypassCertSubjectClassListName(value: string) {
    this._bypassCertSubjectClassListName = value;
  }
  public resetBypassCertSubjectClassListName() {
    this._bypassCertSubjectClassListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSubjectClassListNameInput() {
    return this._bypassCertSubjectClassListName;
  }

  // cache_persistence_list_name - computed: false, optional: true, required: false
  private _cachePersistenceListName?: string; 
  public get cachePersistenceListName() {
    return this.getStringAttribute('cache_persistence_list_name');
  }
  public set cachePersistenceListName(value: string) {
    this._cachePersistenceListName = value;
  }
  public resetCachePersistenceListName() {
    this._cachePersistenceListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePersistenceListNameInput() {
    return this._cachePersistenceListName;
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: number; 
  public get caseInsensitive() {
    return this.getNumberAttribute('case_insensitive');
  }
  public set caseInsensitive(value: number) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // central_cert_pin_list - computed: false, optional: true, required: false
  private _centralCertPinList?: number; 
  public get centralCertPinList() {
    return this.getNumberAttribute('central_cert_pin_list');
  }
  public set centralCertPinList(value: number) {
    this._centralCertPinList = value;
  }
  public resetCentralCertPinList() {
    this._centralCertPinList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralCertPinListInput() {
    return this._centralCertPinList;
  }

  // cert_revoke_action - computed: false, optional: true, required: false
  private _certRevokeAction?: string; 
  public get certRevokeAction() {
    return this.getStringAttribute('cert_revoke_action');
  }
  public set certRevokeAction(value: string) {
    this._certRevokeAction = value;
  }
  public resetCertRevokeAction() {
    this._certRevokeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certRevokeActionInput() {
    return this._certRevokeAction;
  }

  // cert_unknown_action - computed: false, optional: true, required: false
  private _certUnknownAction?: string; 
  public get certUnknownAction() {
    return this.getStringAttribute('cert_unknown_action');
  }
  public set certUnknownAction(value: string) {
    this._certUnknownAction = value;
  }
  public resetCertUnknownAction() {
    this._certUnknownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certUnknownActionInput() {
    return this._certUnknownAction;
  }

  // chain_cert - computed: false, optional: true, required: false
  private _chainCert?: string; 
  public get chainCert() {
    return this.getStringAttribute('chain_cert');
  }
  public set chainCert(value: string) {
    this._chainCert = value;
  }
  public resetChainCert() {
    this._chainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCertInput() {
    return this._chainCert;
  }

  // chain_cert_shared_str - computed: false, optional: true, required: false
  private _chainCertSharedStr?: string; 
  public get chainCertSharedStr() {
    return this.getStringAttribute('chain_cert_shared_str');
  }
  public set chainCertSharedStr(value: string) {
    this._chainCertSharedStr = value;
  }
  public resetChainCertSharedStr() {
    this._chainCertSharedStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCertSharedStrInput() {
    return this._chainCertSharedStr;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // client_auth_case_insensitive - computed: false, optional: true, required: false
  private _clientAuthCaseInsensitive?: number; 
  public get clientAuthCaseInsensitive() {
    return this.getNumberAttribute('client_auth_case_insensitive');
  }
  public set clientAuthCaseInsensitive(value: number) {
    this._clientAuthCaseInsensitive = value;
  }
  public resetClientAuthCaseInsensitive() {
    this._clientAuthCaseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCaseInsensitiveInput() {
    return this._clientAuthCaseInsensitive;
  }

  // client_auth_class_list - computed: false, optional: true, required: false
  private _clientAuthClassList?: string; 
  public get clientAuthClassList() {
    return this.getStringAttribute('client_auth_class_list');
  }
  public set clientAuthClassList(value: string) {
    this._clientAuthClassList = value;
  }
  public resetClientAuthClassList() {
    this._clientAuthClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthClassListInput() {
    return this._clientAuthClassList;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // close_notify - computed: false, optional: true, required: false
  private _closeNotify?: number; 
  public get closeNotify() {
    return this.getNumberAttribute('close_notify');
  }
  public set closeNotify(value: number) {
    this._closeNotify = value;
  }
  public resetCloseNotify() {
    this._closeNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeNotifyInput() {
    return this._closeNotify;
  }

  // dgversion - computed: false, optional: true, required: false
  private _dgversion?: number; 
  public get dgversion() {
    return this.getNumberAttribute('dgversion');
  }
  public set dgversion(value: number) {
    this._dgversion = value;
  }
  public resetDgversion() {
    this._dgversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgversionInput() {
    return this._dgversion;
  }

  // dh_type - computed: false, optional: true, required: false
  private _dhType?: string; 
  public get dhType() {
    return this.getStringAttribute('dh_type');
  }
  public set dhType(value: string) {
    this._dhType = value;
  }
  public resetDhType() {
    this._dhType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhTypeInput() {
    return this._dhType;
  }

  // direct_client_server_auth - computed: false, optional: true, required: false
  private _directClientServerAuth?: number; 
  public get directClientServerAuth() {
    return this.getNumberAttribute('direct_client_server_auth');
  }
  public set directClientServerAuth(value: number) {
    this._directClientServerAuth = value;
  }
  public resetDirectClientServerAuth() {
    this._directClientServerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directClientServerAuthInput() {
    return this._directClientServerAuth;
  }

  // disable_sslv3 - computed: false, optional: true, required: false
  private _disableSslv3?: number; 
  public get disableSslv3() {
    return this.getNumberAttribute('disable_sslv3');
  }
  public set disableSslv3(value: number) {
    this._disableSslv3 = value;
  }
  public resetDisableSslv3() {
    this._disableSslv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslv3Input() {
    return this._disableSslv3;
  }

  // early_data - computed: false, optional: true, required: false
  private _earlyData?: number; 
  public get earlyData() {
    return this.getNumberAttribute('early_data');
  }
  public set earlyData(value: number) {
    this._earlyData = value;
  }
  public resetEarlyData() {
    this._earlyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyDataInput() {
    return this._earlyData;
  }

  // enable_ssli_ftp_alg - computed: false, optional: true, required: false
  private _enableSsliFtpAlg?: number; 
  public get enableSsliFtpAlg() {
    return this.getNumberAttribute('enable_ssli_ftp_alg');
  }
  public set enableSsliFtpAlg(value: number) {
    this._enableSsliFtpAlg = value;
  }
  public resetEnableSsliFtpAlg() {
    this._enableSsliFtpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsliFtpAlgInput() {
    return this._enableSsliFtpAlg;
  }

  // enable_tls_alert_logging - computed: false, optional: true, required: false
  private _enableTlsAlertLogging?: number; 
  public get enableTlsAlertLogging() {
    return this.getNumberAttribute('enable_tls_alert_logging');
  }
  public set enableTlsAlertLogging(value: number) {
    this._enableTlsAlertLogging = value;
  }
  public resetEnableTlsAlertLogging() {
    this._enableTlsAlertLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsAlertLoggingInput() {
    return this._enableTlsAlertLogging;
  }

  // exception_ad_group_list - computed: false, optional: true, required: false
  private _exceptionAdGroupList?: string; 
  public get exceptionAdGroupList() {
    return this.getStringAttribute('exception_ad_group_list');
  }
  public set exceptionAdGroupList(value: string) {
    this._exceptionAdGroupList = value;
  }
  public resetExceptionAdGroupList() {
    this._exceptionAdGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionAdGroupListInput() {
    return this._exceptionAdGroupList;
  }

  // exception_certificate_issuer_cl_name - computed: false, optional: true, required: false
  private _exceptionCertificateIssuerClName?: string; 
  public get exceptionCertificateIssuerClName() {
    return this.getStringAttribute('exception_certificate_issuer_cl_name');
  }
  public set exceptionCertificateIssuerClName(value: string) {
    this._exceptionCertificateIssuerClName = value;
  }
  public resetExceptionCertificateIssuerClName() {
    this._exceptionCertificateIssuerClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCertificateIssuerClNameInput() {
    return this._exceptionCertificateIssuerClName;
  }

  // exception_certificate_san_cl_name - computed: false, optional: true, required: false
  private _exceptionCertificateSanClName?: string; 
  public get exceptionCertificateSanClName() {
    return this.getStringAttribute('exception_certificate_san_cl_name');
  }
  public set exceptionCertificateSanClName(value: string) {
    this._exceptionCertificateSanClName = value;
  }
  public resetExceptionCertificateSanClName() {
    this._exceptionCertificateSanClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCertificateSanClNameInput() {
    return this._exceptionCertificateSanClName;
  }

  // exception_certificate_subject_cl_name - computed: false, optional: true, required: false
  private _exceptionCertificateSubjectClName?: string; 
  public get exceptionCertificateSubjectClName() {
    return this.getStringAttribute('exception_certificate_subject_cl_name');
  }
  public set exceptionCertificateSubjectClName(value: string) {
    this._exceptionCertificateSubjectClName = value;
  }
  public resetExceptionCertificateSubjectClName() {
    this._exceptionCertificateSubjectClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCertificateSubjectClNameInput() {
    return this._exceptionCertificateSubjectClName;
  }

  // exception_sni_cl_name - computed: false, optional: true, required: false
  private _exceptionSniClName?: string; 
  public get exceptionSniClName() {
    return this.getStringAttribute('exception_sni_cl_name');
  }
  public set exceptionSniClName(value: string) {
    this._exceptionSniClName = value;
  }
  public resetExceptionSniClName() {
    this._exceptionSniClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSniClNameInput() {
    return this._exceptionSniClName;
  }

  // exception_user_name_list - computed: false, optional: true, required: false
  private _exceptionUserNameList?: string; 
  public get exceptionUserNameList() {
    return this.getStringAttribute('exception_user_name_list');
  }
  public set exceptionUserNameList(value: string) {
    this._exceptionUserNameList = value;
  }
  public resetExceptionUserNameList() {
    this._exceptionUserNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionUserNameListInput() {
    return this._exceptionUserNameList;
  }

  // expire_hours - computed: false, optional: true, required: false
  private _expireHours?: number; 
  public get expireHours() {
    return this.getNumberAttribute('expire_hours');
  }
  public set expireHours(value: number) {
    this._expireHours = value;
  }
  public resetExpireHours() {
    this._expireHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireHoursInput() {
    return this._expireHours;
  }

  // forward_passphrase - computed: false, optional: true, required: false
  private _forwardPassphrase?: string; 
  public get forwardPassphrase() {
    return this.getStringAttribute('forward_passphrase');
  }
  public set forwardPassphrase(value: string) {
    this._forwardPassphrase = value;
  }
  public resetForwardPassphrase() {
    this._forwardPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPassphraseInput() {
    return this._forwardPassphrase;
  }

  // forward_proxy_alt_sign - computed: false, optional: true, required: false
  private _forwardProxyAltSign?: number; 
  public get forwardProxyAltSign() {
    return this.getNumberAttribute('forward_proxy_alt_sign');
  }
  public set forwardProxyAltSign(value: number) {
    this._forwardProxyAltSign = value;
  }
  public resetForwardProxyAltSign() {
    this._forwardProxyAltSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAltSignInput() {
    return this._forwardProxyAltSign;
  }

  // forward_proxy_block_message - computed: false, optional: true, required: false
  private _forwardProxyBlockMessage?: string; 
  public get forwardProxyBlockMessage() {
    return this.getStringAttribute('forward_proxy_block_message');
  }
  public set forwardProxyBlockMessage(value: string) {
    this._forwardProxyBlockMessage = value;
  }
  public resetForwardProxyBlockMessage() {
    this._forwardProxyBlockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyBlockMessageInput() {
    return this._forwardProxyBlockMessage;
  }

  // forward_proxy_ca_cert - computed: false, optional: true, required: false
  private _forwardProxyCaCert?: string; 
  public get forwardProxyCaCert() {
    return this.getStringAttribute('forward_proxy_ca_cert');
  }
  public set forwardProxyCaCert(value: string) {
    this._forwardProxyCaCert = value;
  }
  public resetForwardProxyCaCert() {
    this._forwardProxyCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCaCertInput() {
    return this._forwardProxyCaCert;
  }

  // forward_proxy_ca_key - computed: false, optional: true, required: false
  private _forwardProxyCaKey?: string; 
  public get forwardProxyCaKey() {
    return this.getStringAttribute('forward_proxy_ca_key');
  }
  public set forwardProxyCaKey(value: string) {
    this._forwardProxyCaKey = value;
  }
  public resetForwardProxyCaKey() {
    this._forwardProxyCaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCaKeyInput() {
    return this._forwardProxyCaKey;
  }

  // forward_proxy_cert_cache_limit - computed: false, optional: true, required: false
  private _forwardProxyCertCacheLimit?: number; 
  public get forwardProxyCertCacheLimit() {
    return this.getNumberAttribute('forward_proxy_cert_cache_limit');
  }
  public set forwardProxyCertCacheLimit(value: number) {
    this._forwardProxyCertCacheLimit = value;
  }
  public resetForwardProxyCertCacheLimit() {
    this._forwardProxyCertCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertCacheLimitInput() {
    return this._forwardProxyCertCacheLimit;
  }

  // forward_proxy_cert_cache_timeout - computed: false, optional: true, required: false
  private _forwardProxyCertCacheTimeout?: number; 
  public get forwardProxyCertCacheTimeout() {
    return this.getNumberAttribute('forward_proxy_cert_cache_timeout');
  }
  public set forwardProxyCertCacheTimeout(value: number) {
    this._forwardProxyCertCacheTimeout = value;
  }
  public resetForwardProxyCertCacheTimeout() {
    this._forwardProxyCertCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertCacheTimeoutInput() {
    return this._forwardProxyCertCacheTimeout;
  }

  // forward_proxy_cert_expiry - computed: false, optional: true, required: false
  private _forwardProxyCertExpiry?: number; 
  public get forwardProxyCertExpiry() {
    return this.getNumberAttribute('forward_proxy_cert_expiry');
  }
  public set forwardProxyCertExpiry(value: number) {
    this._forwardProxyCertExpiry = value;
  }
  public resetForwardProxyCertExpiry() {
    this._forwardProxyCertExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertExpiryInput() {
    return this._forwardProxyCertExpiry;
  }

  // forward_proxy_cert_not_ready_action - computed: false, optional: true, required: false
  private _forwardProxyCertNotReadyAction?: string; 
  public get forwardProxyCertNotReadyAction() {
    return this.getStringAttribute('forward_proxy_cert_not_ready_action');
  }
  public set forwardProxyCertNotReadyAction(value: string) {
    this._forwardProxyCertNotReadyAction = value;
  }
  public resetForwardProxyCertNotReadyAction() {
    this._forwardProxyCertNotReadyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertNotReadyActionInput() {
    return this._forwardProxyCertNotReadyAction;
  }

  // forward_proxy_cert_revoke_action - computed: false, optional: true, required: false
  private _forwardProxyCertRevokeAction?: number; 
  public get forwardProxyCertRevokeAction() {
    return this.getNumberAttribute('forward_proxy_cert_revoke_action');
  }
  public set forwardProxyCertRevokeAction(value: number) {
    this._forwardProxyCertRevokeAction = value;
  }
  public resetForwardProxyCertRevokeAction() {
    this._forwardProxyCertRevokeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertRevokeActionInput() {
    return this._forwardProxyCertRevokeAction;
  }

  // forward_proxy_cert_unknown_action - computed: false, optional: true, required: false
  private _forwardProxyCertUnknownAction?: number; 
  public get forwardProxyCertUnknownAction() {
    return this.getNumberAttribute('forward_proxy_cert_unknown_action');
  }
  public set forwardProxyCertUnknownAction(value: number) {
    this._forwardProxyCertUnknownAction = value;
  }
  public resetForwardProxyCertUnknownAction() {
    this._forwardProxyCertUnknownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertUnknownActionInput() {
    return this._forwardProxyCertUnknownAction;
  }

  // forward_proxy_crl_disable - computed: false, optional: true, required: false
  private _forwardProxyCrlDisable?: number; 
  public get forwardProxyCrlDisable() {
    return this.getNumberAttribute('forward_proxy_crl_disable');
  }
  public set forwardProxyCrlDisable(value: number) {
    this._forwardProxyCrlDisable = value;
  }
  public resetForwardProxyCrlDisable() {
    this._forwardProxyCrlDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCrlDisableInput() {
    return this._forwardProxyCrlDisable;
  }

  // forward_proxy_decrypted_dscp - computed: false, optional: true, required: false
  private _forwardProxyDecryptedDscp?: number; 
  public get forwardProxyDecryptedDscp() {
    return this.getNumberAttribute('forward_proxy_decrypted_dscp');
  }
  public set forwardProxyDecryptedDscp(value: number) {
    this._forwardProxyDecryptedDscp = value;
  }
  public resetForwardProxyDecryptedDscp() {
    this._forwardProxyDecryptedDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyDecryptedDscpInput() {
    return this._forwardProxyDecryptedDscp;
  }

  // forward_proxy_decrypted_dscp_bypass - computed: false, optional: true, required: false
  private _forwardProxyDecryptedDscpBypass?: number; 
  public get forwardProxyDecryptedDscpBypass() {
    return this.getNumberAttribute('forward_proxy_decrypted_dscp_bypass');
  }
  public set forwardProxyDecryptedDscpBypass(value: number) {
    this._forwardProxyDecryptedDscpBypass = value;
  }
  public resetForwardProxyDecryptedDscpBypass() {
    this._forwardProxyDecryptedDscpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyDecryptedDscpBypassInput() {
    return this._forwardProxyDecryptedDscpBypass;
  }

  // forward_proxy_enable - computed: false, optional: true, required: false
  private _forwardProxyEnable?: number; 
  public get forwardProxyEnable() {
    return this.getNumberAttribute('forward_proxy_enable');
  }
  public set forwardProxyEnable(value: number) {
    this._forwardProxyEnable = value;
  }
  public resetForwardProxyEnable() {
    this._forwardProxyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyEnableInput() {
    return this._forwardProxyEnable;
  }

  // forward_proxy_esni_action - computed: false, optional: true, required: false
  private _forwardProxyEsniAction?: number; 
  public get forwardProxyEsniAction() {
    return this.getNumberAttribute('forward_proxy_esni_action');
  }
  public set forwardProxyEsniAction(value: number) {
    this._forwardProxyEsniAction = value;
  }
  public resetForwardProxyEsniAction() {
    this._forwardProxyEsniAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyEsniActionInput() {
    return this._forwardProxyEsniAction;
  }

  // forward_proxy_failsafe_disable - computed: false, optional: true, required: false
  private _forwardProxyFailsafeDisable?: number; 
  public get forwardProxyFailsafeDisable() {
    return this.getNumberAttribute('forward_proxy_failsafe_disable');
  }
  public set forwardProxyFailsafeDisable(value: number) {
    this._forwardProxyFailsafeDisable = value;
  }
  public resetForwardProxyFailsafeDisable() {
    this._forwardProxyFailsafeDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyFailsafeDisableInput() {
    return this._forwardProxyFailsafeDisable;
  }

  // forward_proxy_hash_persistence_interval - computed: false, optional: true, required: false
  private _forwardProxyHashPersistenceInterval?: number; 
  public get forwardProxyHashPersistenceInterval() {
    return this.getNumberAttribute('forward_proxy_hash_persistence_interval');
  }
  public set forwardProxyHashPersistenceInterval(value: number) {
    this._forwardProxyHashPersistenceInterval = value;
  }
  public resetForwardProxyHashPersistenceInterval() {
    this._forwardProxyHashPersistenceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyHashPersistenceIntervalInput() {
    return this._forwardProxyHashPersistenceInterval;
  }

  // forward_proxy_log_disable - computed: false, optional: true, required: false
  private _forwardProxyLogDisable?: number; 
  public get forwardProxyLogDisable() {
    return this.getNumberAttribute('forward_proxy_log_disable');
  }
  public set forwardProxyLogDisable(value: number) {
    this._forwardProxyLogDisable = value;
  }
  public resetForwardProxyLogDisable() {
    this._forwardProxyLogDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyLogDisableInput() {
    return this._forwardProxyLogDisable;
  }

  // forward_proxy_no_shared_cipher_action - computed: false, optional: true, required: false
  private _forwardProxyNoSharedCipherAction?: number; 
  public get forwardProxyNoSharedCipherAction() {
    return this.getNumberAttribute('forward_proxy_no_shared_cipher_action');
  }
  public set forwardProxyNoSharedCipherAction(value: number) {
    this._forwardProxyNoSharedCipherAction = value;
  }
  public resetForwardProxyNoSharedCipherAction() {
    this._forwardProxyNoSharedCipherAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyNoSharedCipherActionInput() {
    return this._forwardProxyNoSharedCipherAction;
  }

  // forward_proxy_no_sni_action - computed: false, optional: true, required: false
  private _forwardProxyNoSniAction?: string; 
  public get forwardProxyNoSniAction() {
    return this.getStringAttribute('forward_proxy_no_sni_action');
  }
  public set forwardProxyNoSniAction(value: string) {
    this._forwardProxyNoSniAction = value;
  }
  public resetForwardProxyNoSniAction() {
    this._forwardProxyNoSniAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyNoSniActionInput() {
    return this._forwardProxyNoSniAction;
  }

  // forward_proxy_ocsp_disable - computed: false, optional: true, required: false
  private _forwardProxyOcspDisable?: number; 
  public get forwardProxyOcspDisable() {
    return this.getNumberAttribute('forward_proxy_ocsp_disable');
  }
  public set forwardProxyOcspDisable(value: number) {
    this._forwardProxyOcspDisable = value;
  }
  public resetForwardProxyOcspDisable() {
    this._forwardProxyOcspDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyOcspDisableInput() {
    return this._forwardProxyOcspDisable;
  }

  // forward_proxy_require_sni_cert_matched - computed: false, optional: true, required: false
  private _forwardProxyRequireSniCertMatched?: string; 
  public get forwardProxyRequireSniCertMatched() {
    return this.getStringAttribute('forward_proxy_require_sni_cert_matched');
  }
  public set forwardProxyRequireSniCertMatched(value: string) {
    this._forwardProxyRequireSniCertMatched = value;
  }
  public resetForwardProxyRequireSniCertMatched() {
    this._forwardProxyRequireSniCertMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyRequireSniCertMatchedInput() {
    return this._forwardProxyRequireSniCertMatched;
  }

  // forward_proxy_selfsign_redir - computed: false, optional: true, required: false
  private _forwardProxySelfsignRedir?: number; 
  public get forwardProxySelfsignRedir() {
    return this.getNumberAttribute('forward_proxy_selfsign_redir');
  }
  public set forwardProxySelfsignRedir(value: number) {
    this._forwardProxySelfsignRedir = value;
  }
  public resetForwardProxySelfsignRedir() {
    this._forwardProxySelfsignRedir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxySelfsignRedirInput() {
    return this._forwardProxySelfsignRedir;
  }

  // forward_proxy_ssl_version - computed: false, optional: true, required: false
  private _forwardProxySslVersion?: number; 
  public get forwardProxySslVersion() {
    return this.getNumberAttribute('forward_proxy_ssl_version');
  }
  public set forwardProxySslVersion(value: number) {
    this._forwardProxySslVersion = value;
  }
  public resetForwardProxySslVersion() {
    this._forwardProxySslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxySslVersionInput() {
    return this._forwardProxySslVersion;
  }

  // forward_proxy_verify_cert_fail_action - computed: false, optional: true, required: false
  private _forwardProxyVerifyCertFailAction?: number; 
  public get forwardProxyVerifyCertFailAction() {
    return this.getNumberAttribute('forward_proxy_verify_cert_fail_action');
  }
  public set forwardProxyVerifyCertFailAction(value: number) {
    this._forwardProxyVerifyCertFailAction = value;
  }
  public resetForwardProxyVerifyCertFailAction() {
    this._forwardProxyVerifyCertFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyVerifyCertFailActionInput() {
    return this._forwardProxyVerifyCertFailAction;
  }

  // fp_alt_cert - computed: false, optional: true, required: false
  private _fpAltCert?: string; 
  public get fpAltCert() {
    return this.getStringAttribute('fp_alt_cert');
  }
  public set fpAltCert(value: string) {
    this._fpAltCert = value;
  }
  public resetFpAltCert() {
    this._fpAltCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAltCertInput() {
    return this._fpAltCert;
  }

  // fp_alt_chain_cert - computed: false, optional: true, required: false
  private _fpAltChainCert?: string; 
  public get fpAltChainCert() {
    return this.getStringAttribute('fp_alt_chain_cert');
  }
  public set fpAltChainCert(value: string) {
    this._fpAltChainCert = value;
  }
  public resetFpAltChainCert() {
    this._fpAltChainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAltChainCertInput() {
    return this._fpAltChainCert;
  }

  // fp_alt_key - computed: false, optional: true, required: false
  private _fpAltKey?: string; 
  public get fpAltKey() {
    return this.getStringAttribute('fp_alt_key');
  }
  public set fpAltKey(value: string) {
    this._fpAltKey = value;
  }
  public resetFpAltKey() {
    this._fpAltKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAltKeyInput() {
    return this._fpAltKey;
  }

  // fp_alt_passphrase - computed: false, optional: true, required: false
  private _fpAltPassphrase?: string; 
  public get fpAltPassphrase() {
    return this.getStringAttribute('fp_alt_passphrase');
  }
  public set fpAltPassphrase(value: string) {
    this._fpAltPassphrase = value;
  }
  public resetFpAltPassphrase() {
    this._fpAltPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAltPassphraseInput() {
    return this._fpAltPassphrase;
  }

  // fp_alt_shared - computed: false, optional: true, required: false
  private _fpAltShared?: number; 
  public get fpAltShared() {
    return this.getNumberAttribute('fp_alt_shared');
  }
  public set fpAltShared(value: number) {
    this._fpAltShared = value;
  }
  public resetFpAltShared() {
    this._fpAltShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAltSharedInput() {
    return this._fpAltShared;
  }

  // fp_ca_certificate - computed: false, optional: true, required: false
  private _fpCaCertificate?: string; 
  public get fpCaCertificate() {
    return this.getStringAttribute('fp_ca_certificate');
  }
  public set fpCaCertificate(value: string) {
    this._fpCaCertificate = value;
  }
  public resetFpCaCertificate() {
    this._fpCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaCertificateInput() {
    return this._fpCaCertificate;
  }

  // fp_ca_certificate_shared - computed: false, optional: true, required: false
  private _fpCaCertificateShared?: number; 
  public get fpCaCertificateShared() {
    return this.getNumberAttribute('fp_ca_certificate_shared');
  }
  public set fpCaCertificateShared(value: number) {
    this._fpCaCertificateShared = value;
  }
  public resetFpCaCertificateShared() {
    this._fpCaCertificateShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaCertificateSharedInput() {
    return this._fpCaCertificateShared;
  }

  // fp_ca_chain_cert - computed: false, optional: true, required: false
  private _fpCaChainCert?: string; 
  public get fpCaChainCert() {
    return this.getStringAttribute('fp_ca_chain_cert');
  }
  public set fpCaChainCert(value: string) {
    this._fpCaChainCert = value;
  }
  public resetFpCaChainCert() {
    this._fpCaChainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaChainCertInput() {
    return this._fpCaChainCert;
  }

  // fp_ca_key - computed: false, optional: true, required: false
  private _fpCaKey?: string; 
  public get fpCaKey() {
    return this.getStringAttribute('fp_ca_key');
  }
  public set fpCaKey(value: string) {
    this._fpCaKey = value;
  }
  public resetFpCaKey() {
    this._fpCaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaKeyInput() {
    return this._fpCaKey;
  }

  // fp_ca_key_passphrase - computed: false, optional: true, required: false
  private _fpCaKeyPassphrase?: string; 
  public get fpCaKeyPassphrase() {
    return this.getStringAttribute('fp_ca_key_passphrase');
  }
  public set fpCaKeyPassphrase(value: string) {
    this._fpCaKeyPassphrase = value;
  }
  public resetFpCaKeyPassphrase() {
    this._fpCaKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaKeyPassphraseInput() {
    return this._fpCaKeyPassphrase;
  }

  // fp_ca_key_shared - computed: false, optional: true, required: false
  private _fpCaKeyShared?: number; 
  public get fpCaKeyShared() {
    return this.getNumberAttribute('fp_ca_key_shared');
  }
  public set fpCaKeyShared(value: number) {
    this._fpCaKeyShared = value;
  }
  public resetFpCaKeyShared() {
    this._fpCaKeyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaKeySharedInput() {
    return this._fpCaKeyShared;
  }

  // fp_ca_shared - computed: false, optional: true, required: false
  private _fpCaShared?: number; 
  public get fpCaShared() {
    return this.getNumberAttribute('fp_ca_shared');
  }
  public set fpCaShared(value: number) {
    this._fpCaShared = value;
  }
  public resetFpCaShared() {
    this._fpCaShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCaSharedInput() {
    return this._fpCaShared;
  }

  // fp_cert_ext_aia_ca_issuers - computed: false, optional: true, required: false
  private _fpCertExtAiaCaIssuers?: string; 
  public get fpCertExtAiaCaIssuers() {
    return this.getStringAttribute('fp_cert_ext_aia_ca_issuers');
  }
  public set fpCertExtAiaCaIssuers(value: string) {
    this._fpCertExtAiaCaIssuers = value;
  }
  public resetFpCertExtAiaCaIssuers() {
    this._fpCertExtAiaCaIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertExtAiaCaIssuersInput() {
    return this._fpCertExtAiaCaIssuers;
  }

  // fp_cert_ext_aia_ocsp - computed: false, optional: true, required: false
  private _fpCertExtAiaOcsp?: string; 
  public get fpCertExtAiaOcsp() {
    return this.getStringAttribute('fp_cert_ext_aia_ocsp');
  }
  public set fpCertExtAiaOcsp(value: string) {
    this._fpCertExtAiaOcsp = value;
  }
  public resetFpCertExtAiaOcsp() {
    this._fpCertExtAiaOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertExtAiaOcspInput() {
    return this._fpCertExtAiaOcsp;
  }

  // fp_cert_ext_crldp - computed: false, optional: true, required: false
  private _fpCertExtCrldp?: string; 
  public get fpCertExtCrldp() {
    return this.getStringAttribute('fp_cert_ext_crldp');
  }
  public set fpCertExtCrldp(value: string) {
    this._fpCertExtCrldp = value;
  }
  public resetFpCertExtCrldp() {
    this._fpCertExtCrldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertExtCrldpInput() {
    return this._fpCertExtCrldp;
  }

  // fp_cert_fetch_autonat - computed: false, optional: true, required: false
  private _fpCertFetchAutonat?: string; 
  public get fpCertFetchAutonat() {
    return this.getStringAttribute('fp_cert_fetch_autonat');
  }
  public set fpCertFetchAutonat(value: string) {
    this._fpCertFetchAutonat = value;
  }
  public resetFpCertFetchAutonat() {
    this._fpCertFetchAutonat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertFetchAutonatInput() {
    return this._fpCertFetchAutonat;
  }

  // fp_cert_fetch_autonat_precedence - computed: false, optional: true, required: false
  private _fpCertFetchAutonatPrecedence?: number; 
  public get fpCertFetchAutonatPrecedence() {
    return this.getNumberAttribute('fp_cert_fetch_autonat_precedence');
  }
  public set fpCertFetchAutonatPrecedence(value: number) {
    this._fpCertFetchAutonatPrecedence = value;
  }
  public resetFpCertFetchAutonatPrecedence() {
    this._fpCertFetchAutonatPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertFetchAutonatPrecedenceInput() {
    return this._fpCertFetchAutonatPrecedence;
  }

  // fp_cert_fetch_natpool_name - computed: false, optional: true, required: false
  private _fpCertFetchNatpoolName?: string; 
  public get fpCertFetchNatpoolName() {
    return this.getStringAttribute('fp_cert_fetch_natpool_name');
  }
  public set fpCertFetchNatpoolName(value: string) {
    this._fpCertFetchNatpoolName = value;
  }
  public resetFpCertFetchNatpoolName() {
    this._fpCertFetchNatpoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertFetchNatpoolNameInput() {
    return this._fpCertFetchNatpoolName;
  }

  // fp_cert_fetch_natpool_name_shared - computed: false, optional: true, required: false
  private _fpCertFetchNatpoolNameShared?: string; 
  public get fpCertFetchNatpoolNameShared() {
    return this.getStringAttribute('fp_cert_fetch_natpool_name_shared');
  }
  public set fpCertFetchNatpoolNameShared(value: string) {
    this._fpCertFetchNatpoolNameShared = value;
  }
  public resetFpCertFetchNatpoolNameShared() {
    this._fpCertFetchNatpoolNameShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertFetchNatpoolNameSharedInput() {
    return this._fpCertFetchNatpoolNameShared;
  }

  // fp_cert_fetch_natpool_precedence - computed: false, optional: true, required: false
  private _fpCertFetchNatpoolPrecedence?: number; 
  public get fpCertFetchNatpoolPrecedence() {
    return this.getNumberAttribute('fp_cert_fetch_natpool_precedence');
  }
  public set fpCertFetchNatpoolPrecedence(value: number) {
    this._fpCertFetchNatpoolPrecedence = value;
  }
  public resetFpCertFetchNatpoolPrecedence() {
    this._fpCertFetchNatpoolPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpCertFetchNatpoolPrecedenceInput() {
    return this._fpCertFetchNatpoolPrecedence;
  }

  // fp_esni_action - computed: false, optional: true, required: false
  private _fpEsniAction?: string; 
  public get fpEsniAction() {
    return this.getStringAttribute('fp_esni_action');
  }
  public set fpEsniAction(value: string) {
    this._fpEsniAction = value;
  }
  public resetFpEsniAction() {
    this._fpEsniAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpEsniActionInput() {
    return this._fpEsniAction;
  }

  // handshake_logging_enable - computed: false, optional: true, required: false
  private _handshakeLoggingEnable?: number; 
  public get handshakeLoggingEnable() {
    return this.getNumberAttribute('handshake_logging_enable');
  }
  public set handshakeLoggingEnable(value: number) {
    this._handshakeLoggingEnable = value;
  }
  public resetHandshakeLoggingEnable() {
    this._handshakeLoggingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeLoggingEnableInput() {
    return this._handshakeLoggingEnable;
  }

  // hsm_type - computed: false, optional: true, required: false
  private _hsmType?: string; 
  public get hsmType() {
    return this.getStringAttribute('hsm_type');
  }
  public set hsmType(value: string) {
    this._hsmType = value;
  }
  public resetHsmType() {
    this._hsmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmTypeInput() {
    return this._hsmType;
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

  // inspect_certificate_issuer_cl_name - computed: false, optional: true, required: false
  private _inspectCertificateIssuerClName?: string; 
  public get inspectCertificateIssuerClName() {
    return this.getStringAttribute('inspect_certificate_issuer_cl_name');
  }
  public set inspectCertificateIssuerClName(value: string) {
    this._inspectCertificateIssuerClName = value;
  }
  public resetInspectCertificateIssuerClName() {
    this._inspectCertificateIssuerClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectCertificateIssuerClNameInput() {
    return this._inspectCertificateIssuerClName;
  }

  // inspect_certificate_san_cl_name - computed: false, optional: true, required: false
  private _inspectCertificateSanClName?: string; 
  public get inspectCertificateSanClName() {
    return this.getStringAttribute('inspect_certificate_san_cl_name');
  }
  public set inspectCertificateSanClName(value: string) {
    this._inspectCertificateSanClName = value;
  }
  public resetInspectCertificateSanClName() {
    this._inspectCertificateSanClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectCertificateSanClNameInput() {
    return this._inspectCertificateSanClName;
  }

  // inspect_certificate_subject_cl_name - computed: false, optional: true, required: false
  private _inspectCertificateSubjectClName?: string; 
  public get inspectCertificateSubjectClName() {
    return this.getStringAttribute('inspect_certificate_subject_cl_name');
  }
  public set inspectCertificateSubjectClName(value: string) {
    this._inspectCertificateSubjectClName = value;
  }
  public resetInspectCertificateSubjectClName() {
    this._inspectCertificateSubjectClName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectCertificateSubjectClNameInput() {
    return this._inspectCertificateSubjectClName;
  }

  // inspect_list_name - computed: false, optional: true, required: false
  private _inspectListName?: string; 
  public get inspectListName() {
    return this.getStringAttribute('inspect_list_name');
  }
  public set inspectListName(value: string) {
    this._inspectListName = value;
  }
  public resetInspectListName() {
    this._inspectListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectListNameInput() {
    return this._inspectListName;
  }

  // ja3_enable - computed: false, optional: true, required: false
  private _ja3Enable?: number; 
  public get ja3Enable() {
    return this.getNumberAttribute('ja3_enable');
  }
  public set ja3Enable(value: number) {
    this._ja3Enable = value;
  }
  public resetJa3Enable() {
    this._ja3Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3EnableInput() {
    return this._ja3Enable;
  }

  // ja3_insert_http_header - computed: false, optional: true, required: false
  private _ja3InsertHttpHeader?: string; 
  public get ja3InsertHttpHeader() {
    return this.getStringAttribute('ja3_insert_http_header');
  }
  public set ja3InsertHttpHeader(value: string) {
    this._ja3InsertHttpHeader = value;
  }
  public resetJa3InsertHttpHeader() {
    this._ja3InsertHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3InsertHttpHeaderInput() {
    return this._ja3InsertHttpHeader;
  }

  // ja3_reject_class_list - computed: false, optional: true, required: false
  private _ja3RejectClassList?: string; 
  public get ja3RejectClassList() {
    return this.getStringAttribute('ja3_reject_class_list');
  }
  public set ja3RejectClassList(value: string) {
    this._ja3RejectClassList = value;
  }
  public resetJa3RejectClassList() {
    this._ja3RejectClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3RejectClassListInput() {
    return this._ja3RejectClassList;
  }

  // ja3_reject_max_number_per_host - computed: false, optional: true, required: false
  private _ja3RejectMaxNumberPerHost?: number; 
  public get ja3RejectMaxNumberPerHost() {
    return this.getNumberAttribute('ja3_reject_max_number_per_host');
  }
  public set ja3RejectMaxNumberPerHost(value: number) {
    this._ja3RejectMaxNumberPerHost = value;
  }
  public resetJa3RejectMaxNumberPerHost() {
    this._ja3RejectMaxNumberPerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3RejectMaxNumberPerHostInput() {
    return this._ja3RejectMaxNumberPerHost;
  }

  // ja3_ttl - computed: false, optional: true, required: false
  private _ja3Ttl?: number; 
  public get ja3Ttl() {
    return this.getNumberAttribute('ja3_ttl');
  }
  public set ja3Ttl(value: number) {
    this._ja3Ttl = value;
  }
  public resetJa3Ttl() {
    this._ja3Ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3TtlInput() {
    return this._ja3Ttl;
  }

  // ldap_base_dn_from_cert - computed: false, optional: true, required: false
  private _ldapBaseDnFromCert?: number; 
  public get ldapBaseDnFromCert() {
    return this.getNumberAttribute('ldap_base_dn_from_cert');
  }
  public set ldapBaseDnFromCert(value: number) {
    this._ldapBaseDnFromCert = value;
  }
  public resetLdapBaseDnFromCert() {
    this._ldapBaseDnFromCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBaseDnFromCertInput() {
    return this._ldapBaseDnFromCert;
  }

  // ldap_search_filter - computed: false, optional: true, required: false
  private _ldapSearchFilter?: string; 
  public get ldapSearchFilter() {
    return this.getStringAttribute('ldap_search_filter');
  }
  public set ldapSearchFilter(value: string) {
    this._ldapSearchFilter = value;
  }
  public resetLdapSearchFilter() {
    this._ldapSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSearchFilterInput() {
    return this._ldapSearchFilter;
  }

  // local_logging - computed: false, optional: true, required: false
  private _localLogging?: number; 
  public get localLogging() {
    return this.getNumberAttribute('local_logging');
  }
  public set localLogging(value: number) {
    this._localLogging = value;
  }
  public resetLocalLogging() {
    this._localLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingInput() {
    return this._localLogging;
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

  // no_anti_replay - computed: false, optional: true, required: false
  private _noAntiReplay?: number; 
  public get noAntiReplay() {
    return this.getNumberAttribute('no_anti_replay');
  }
  public set noAntiReplay(value: number) {
    this._noAntiReplay = value;
  }
  public resetNoAntiReplay() {
    this._noAntiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAntiReplayInput() {
    return this._noAntiReplay;
  }

  // no_shared_cipher_action - computed: false, optional: true, required: false
  private _noSharedCipherAction?: string; 
  public get noSharedCipherAction() {
    return this.getStringAttribute('no_shared_cipher_action');
  }
  public set noSharedCipherAction(value: string) {
    this._noSharedCipherAction = value;
  }
  public resetNoSharedCipherAction() {
    this._noSharedCipherAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSharedCipherActionInput() {
    return this._noSharedCipherAction;
  }

  // non_ssl_bypass_l4session - computed: false, optional: true, required: false
  private _nonSslBypassL4Session?: number; 
  public get nonSslBypassL4Session() {
    return this.getNumberAttribute('non_ssl_bypass_l4session');
  }
  public set nonSslBypassL4Session(value: number) {
    this._nonSslBypassL4Session = value;
  }
  public resetNonSslBypassL4Session() {
    this._nonSslBypassL4Session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslBypassL4SessionInput() {
    return this._nonSslBypassL4Session;
  }

  // non_ssl_bypass_service_group - computed: false, optional: true, required: false
  private _nonSslBypassServiceGroup?: string; 
  public get nonSslBypassServiceGroup() {
    return this.getStringAttribute('non_ssl_bypass_service_group');
  }
  public set nonSslBypassServiceGroup(value: string) {
    this._nonSslBypassServiceGroup = value;
  }
  public resetNonSslBypassServiceGroup() {
    this._nonSslBypassServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslBypassServiceGroupInput() {
    return this._nonSslBypassServiceGroup;
  }

  // notafter - computed: false, optional: true, required: false
  private _notafter?: number; 
  public get notafter() {
    return this.getNumberAttribute('notafter');
  }
  public set notafter(value: number) {
    this._notafter = value;
  }
  public resetNotafter() {
    this._notafter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notafterInput() {
    return this._notafter;
  }

  // notafterday - computed: false, optional: true, required: false
  private _notafterday?: number; 
  public get notafterday() {
    return this.getNumberAttribute('notafterday');
  }
  public set notafterday(value: number) {
    this._notafterday = value;
  }
  public resetNotafterday() {
    this._notafterday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notafterdayInput() {
    return this._notafterday;
  }

  // notaftermonth - computed: false, optional: true, required: false
  private _notaftermonth?: number; 
  public get notaftermonth() {
    return this.getNumberAttribute('notaftermonth');
  }
  public set notaftermonth(value: number) {
    this._notaftermonth = value;
  }
  public resetNotaftermonth() {
    this._notaftermonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notaftermonthInput() {
    return this._notaftermonth;
  }

  // notafteryear - computed: false, optional: true, required: false
  private _notafteryear?: number; 
  public get notafteryear() {
    return this.getNumberAttribute('notafteryear');
  }
  public set notafteryear(value: number) {
    this._notafteryear = value;
  }
  public resetNotafteryear() {
    this._notafteryear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notafteryearInput() {
    return this._notafteryear;
  }

  // notbefore - computed: false, optional: true, required: false
  private _notbefore?: number; 
  public get notbefore() {
    return this.getNumberAttribute('notbefore');
  }
  public set notbefore(value: number) {
    this._notbefore = value;
  }
  public resetNotbefore() {
    this._notbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notbeforeInput() {
    return this._notbefore;
  }

  // notbeforeday - computed: false, optional: true, required: false
  private _notbeforeday?: number; 
  public get notbeforeday() {
    return this.getNumberAttribute('notbeforeday');
  }
  public set notbeforeday(value: number) {
    this._notbeforeday = value;
  }
  public resetNotbeforeday() {
    this._notbeforeday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notbeforedayInput() {
    return this._notbeforeday;
  }

  // notbeforemonth - computed: false, optional: true, required: false
  private _notbeforemonth?: number; 
  public get notbeforemonth() {
    return this.getNumberAttribute('notbeforemonth');
  }
  public set notbeforemonth(value: number) {
    this._notbeforemonth = value;
  }
  public resetNotbeforemonth() {
    this._notbeforemonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notbeforemonthInput() {
    return this._notbeforemonth;
  }

  // notbeforeyear - computed: false, optional: true, required: false
  private _notbeforeyear?: number; 
  public get notbeforeyear() {
    return this.getNumberAttribute('notbeforeyear');
  }
  public set notbeforeyear(value: number) {
    this._notbeforeyear = value;
  }
  public resetNotbeforeyear() {
    this._notbeforeyear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notbeforeyearInput() {
    return this._notbeforeyear;
  }

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling?: number; 
  public get ocspStapling() {
    return this.getNumberAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: number) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
  }

  // ocspst_ca_cert - computed: false, optional: true, required: false
  private _ocspstCaCert?: string; 
  public get ocspstCaCert() {
    return this.getStringAttribute('ocspst_ca_cert');
  }
  public set ocspstCaCert(value: string) {
    this._ocspstCaCert = value;
  }
  public resetOcspstCaCert() {
    this._ocspstCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstCaCertInput() {
    return this._ocspstCaCert;
  }

  // ocspst_ocsp - computed: false, optional: true, required: false
  private _ocspstOcsp?: number; 
  public get ocspstOcsp() {
    return this.getNumberAttribute('ocspst_ocsp');
  }
  public set ocspstOcsp(value: number) {
    this._ocspstOcsp = value;
  }
  public resetOcspstOcsp() {
    this._ocspstOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstOcspInput() {
    return this._ocspstOcsp;
  }

  // ocspst_sg - computed: false, optional: true, required: false
  private _ocspstSg?: string; 
  public get ocspstSg() {
    return this.getStringAttribute('ocspst_sg');
  }
  public set ocspstSg(value: string) {
    this._ocspstSg = value;
  }
  public resetOcspstSg() {
    this._ocspstSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSgInput() {
    return this._ocspstSg;
  }

  // ocspst_sg_days - computed: false, optional: true, required: false
  private _ocspstSgDays?: number; 
  public get ocspstSgDays() {
    return this.getNumberAttribute('ocspst_sg_days');
  }
  public set ocspstSgDays(value: number) {
    this._ocspstSgDays = value;
  }
  public resetOcspstSgDays() {
    this._ocspstSgDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSgDaysInput() {
    return this._ocspstSgDays;
  }

  // ocspst_sg_hours - computed: false, optional: true, required: false
  private _ocspstSgHours?: number; 
  public get ocspstSgHours() {
    return this.getNumberAttribute('ocspst_sg_hours');
  }
  public set ocspstSgHours(value: number) {
    this._ocspstSgHours = value;
  }
  public resetOcspstSgHours() {
    this._ocspstSgHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSgHoursInput() {
    return this._ocspstSgHours;
  }

  // ocspst_sg_minutes - computed: false, optional: true, required: false
  private _ocspstSgMinutes?: number; 
  public get ocspstSgMinutes() {
    return this.getNumberAttribute('ocspst_sg_minutes');
  }
  public set ocspstSgMinutes(value: number) {
    this._ocspstSgMinutes = value;
  }
  public resetOcspstSgMinutes() {
    this._ocspstSgMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSgMinutesInput() {
    return this._ocspstSgMinutes;
  }

  // ocspst_sg_timeout - computed: false, optional: true, required: false
  private _ocspstSgTimeout?: number; 
  public get ocspstSgTimeout() {
    return this.getNumberAttribute('ocspst_sg_timeout');
  }
  public set ocspstSgTimeout(value: number) {
    this._ocspstSgTimeout = value;
  }
  public resetOcspstSgTimeout() {
    this._ocspstSgTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSgTimeoutInput() {
    return this._ocspstSgTimeout;
  }

  // ocspst_srvr - computed: false, optional: true, required: false
  private _ocspstSrvr?: string; 
  public get ocspstSrvr() {
    return this.getStringAttribute('ocspst_srvr');
  }
  public set ocspstSrvr(value: string) {
    this._ocspstSrvr = value;
  }
  public resetOcspstSrvr() {
    this._ocspstSrvr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSrvrInput() {
    return this._ocspstSrvr;
  }

  // ocspst_srvr_days - computed: false, optional: true, required: false
  private _ocspstSrvrDays?: number; 
  public get ocspstSrvrDays() {
    return this.getNumberAttribute('ocspst_srvr_days');
  }
  public set ocspstSrvrDays(value: number) {
    this._ocspstSrvrDays = value;
  }
  public resetOcspstSrvrDays() {
    this._ocspstSrvrDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSrvrDaysInput() {
    return this._ocspstSrvrDays;
  }

  // ocspst_srvr_hours - computed: false, optional: true, required: false
  private _ocspstSrvrHours?: number; 
  public get ocspstSrvrHours() {
    return this.getNumberAttribute('ocspst_srvr_hours');
  }
  public set ocspstSrvrHours(value: number) {
    this._ocspstSrvrHours = value;
  }
  public resetOcspstSrvrHours() {
    this._ocspstSrvrHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSrvrHoursInput() {
    return this._ocspstSrvrHours;
  }

  // ocspst_srvr_minutes - computed: false, optional: true, required: false
  private _ocspstSrvrMinutes?: number; 
  public get ocspstSrvrMinutes() {
    return this.getNumberAttribute('ocspst_srvr_minutes');
  }
  public set ocspstSrvrMinutes(value: number) {
    this._ocspstSrvrMinutes = value;
  }
  public resetOcspstSrvrMinutes() {
    this._ocspstSrvrMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSrvrMinutesInput() {
    return this._ocspstSrvrMinutes;
  }

  // ocspst_srvr_timeout - computed: false, optional: true, required: false
  private _ocspstSrvrTimeout?: number; 
  public get ocspstSrvrTimeout() {
    return this.getNumberAttribute('ocspst_srvr_timeout');
  }
  public set ocspstSrvrTimeout(value: number) {
    this._ocspstSrvrTimeout = value;
  }
  public resetOcspstSrvrTimeout() {
    this._ocspstSrvrTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstSrvrTimeoutInput() {
    return this._ocspstSrvrTimeout;
  }

  // renegotiation_disable - computed: false, optional: true, required: false
  private _renegotiationDisable?: number; 
  public get renegotiationDisable() {
    return this.getNumberAttribute('renegotiation_disable');
  }
  public set renegotiationDisable(value: number) {
    this._renegotiationDisable = value;
  }
  public resetRenegotiationDisable() {
    this._renegotiationDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationDisableInput() {
    return this._renegotiationDisable;
  }

  // require_web_category - computed: false, optional: true, required: false
  private _requireWebCategory?: number; 
  public get requireWebCategory() {
    return this.getNumberAttribute('require_web_category');
  }
  public set requireWebCategory(value: number) {
    this._requireWebCategory = value;
  }
  public resetRequireWebCategory() {
    this._requireWebCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireWebCategoryInput() {
    return this._requireWebCategory;
  }

  // server_name_auto_map - computed: false, optional: true, required: false
  private _serverNameAutoMap?: number; 
  public get serverNameAutoMap() {
    return this.getNumberAttribute('server_name_auto_map');
  }
  public set serverNameAutoMap(value: number) {
    this._serverNameAutoMap = value;
  }
  public resetServerNameAutoMap() {
    this._serverNameAutoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameAutoMapInput() {
    return this._serverNameAutoMap;
  }

  // session_cache_size - computed: false, optional: true, required: false
  private _sessionCacheSize?: number; 
  public get sessionCacheSize() {
    return this.getNumberAttribute('session_cache_size');
  }
  public set sessionCacheSize(value: number) {
    this._sessionCacheSize = value;
  }
  public resetSessionCacheSize() {
    this._sessionCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheSizeInput() {
    return this._sessionCacheSize;
  }

  // session_cache_timeout - computed: false, optional: true, required: false
  private _sessionCacheTimeout?: number; 
  public get sessionCacheTimeout() {
    return this.getNumberAttribute('session_cache_timeout');
  }
  public set sessionCacheTimeout(value: number) {
    this._sessionCacheTimeout = value;
  }
  public resetSessionCacheTimeout() {
    this._sessionCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheTimeoutInput() {
    return this._sessionCacheTimeout;
  }

  // session_ticket_disable - computed: false, optional: true, required: false
  private _sessionTicketDisable?: number; 
  public get sessionTicketDisable() {
    return this.getNumberAttribute('session_ticket_disable');
  }
  public set sessionTicketDisable(value: number) {
    this._sessionTicketDisable = value;
  }
  public resetSessionTicketDisable() {
    this._sessionTicketDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTicketDisableInput() {
    return this._sessionTicketDisable;
  }

  // session_ticket_lifetime - computed: false, optional: true, required: false
  private _sessionTicketLifetime?: number; 
  public get sessionTicketLifetime() {
    return this.getNumberAttribute('session_ticket_lifetime');
  }
  public set sessionTicketLifetime(value: number) {
    this._sessionTicketLifetime = value;
  }
  public resetSessionTicketLifetime() {
    this._sessionTicketLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTicketLifetimeInput() {
    return this._sessionTicketLifetime;
  }

  // shared_partition_cipher_template - computed: false, optional: true, required: false
  private _sharedPartitionCipherTemplate?: number; 
  public get sharedPartitionCipherTemplate() {
    return this.getNumberAttribute('shared_partition_cipher_template');
  }
  public set sharedPartitionCipherTemplate(value: number) {
    this._sharedPartitionCipherTemplate = value;
  }
  public resetSharedPartitionCipherTemplate() {
    this._sharedPartitionCipherTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionCipherTemplateInput() {
    return this._sharedPartitionCipherTemplate;
  }

  // shared_partition_pool - computed: false, optional: true, required: false
  private _sharedPartitionPool?: number; 
  public get sharedPartitionPool() {
    return this.getNumberAttribute('shared_partition_pool');
  }
  public set sharedPartitionPool(value: number) {
    this._sharedPartitionPool = value;
  }
  public resetSharedPartitionPool() {
    this._sharedPartitionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolInput() {
    return this._sharedPartitionPool;
  }

  // sni_bypass_enable_log - computed: false, optional: true, required: false
  private _sniBypassEnableLog?: number; 
  public get sniBypassEnableLog() {
    return this.getNumberAttribute('sni_bypass_enable_log');
  }
  public set sniBypassEnableLog(value: number) {
    this._sniBypassEnableLog = value;
  }
  public resetSniBypassEnableLog() {
    this._sniBypassEnableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniBypassEnableLogInput() {
    return this._sniBypassEnableLog;
  }

  // sni_bypass_expired_cert - computed: false, optional: true, required: false
  private _sniBypassExpiredCert?: number; 
  public get sniBypassExpiredCert() {
    return this.getNumberAttribute('sni_bypass_expired_cert');
  }
  public set sniBypassExpiredCert(value: number) {
    this._sniBypassExpiredCert = value;
  }
  public resetSniBypassExpiredCert() {
    this._sniBypassExpiredCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniBypassExpiredCertInput() {
    return this._sniBypassExpiredCert;
  }

  // sni_bypass_explicit_list - computed: false, optional: true, required: false
  private _sniBypassExplicitList?: string; 
  public get sniBypassExplicitList() {
    return this.getStringAttribute('sni_bypass_explicit_list');
  }
  public set sniBypassExplicitList(value: string) {
    this._sniBypassExplicitList = value;
  }
  public resetSniBypassExplicitList() {
    this._sniBypassExplicitList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniBypassExplicitListInput() {
    return this._sniBypassExplicitList;
  }

  // sni_bypass_missing_cert - computed: false, optional: true, required: false
  private _sniBypassMissingCert?: number; 
  public get sniBypassMissingCert() {
    return this.getNumberAttribute('sni_bypass_missing_cert');
  }
  public set sniBypassMissingCert(value: number) {
    this._sniBypassMissingCert = value;
  }
  public resetSniBypassMissingCert() {
    this._sniBypassMissingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniBypassMissingCertInput() {
    return this._sniBypassMissingCert;
  }

  // sni_enable_log - computed: false, optional: true, required: false
  private _sniEnableLog?: number; 
  public get sniEnableLog() {
    return this.getNumberAttribute('sni_enable_log');
  }
  public set sniEnableLog(value: number) {
    this._sniEnableLog = value;
  }
  public resetSniEnableLog() {
    this._sniEnableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniEnableLogInput() {
    return this._sniEnableLog;
  }

  // ssl_false_start_disable - computed: false, optional: true, required: false
  private _sslFalseStartDisable?: number; 
  public get sslFalseStartDisable() {
    return this.getNumberAttribute('ssl_false_start_disable');
  }
  public set sslFalseStartDisable(value: number) {
    this._sslFalseStartDisable = value;
  }
  public resetSslFalseStartDisable() {
    this._sslFalseStartDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslFalseStartDisableInput() {
    return this._sslFalseStartDisable;
  }

  // ssli_inbound_enable - computed: false, optional: true, required: false
  private _ssliInboundEnable?: number; 
  public get ssliInboundEnable() {
    return this.getNumberAttribute('ssli_inbound_enable');
  }
  public set ssliInboundEnable(value: number) {
    this._ssliInboundEnable = value;
  }
  public resetSsliInboundEnable() {
    this._ssliInboundEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliInboundEnableInput() {
    return this._ssliInboundEnable;
  }

  // ssli_logging - computed: false, optional: true, required: false
  private _ssliLogging?: number; 
  public get ssliLogging() {
    return this.getNumberAttribute('ssli_logging');
  }
  public set ssliLogging(value: number) {
    this._ssliLogging = value;
  }
  public resetSsliLogging() {
    this._ssliLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliLoggingInput() {
    return this._ssliLogging;
  }

  // sslilogging - computed: false, optional: true, required: false
  private _sslilogging?: string; 
  public get sslilogging() {
    return this.getStringAttribute('sslilogging');
  }
  public set sslilogging(value: string) {
    this._sslilogging = value;
  }
  public resetSslilogging() {
    this._sslilogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliloggingInput() {
    return this._sslilogging;
  }

  // sslv2_bypass_service_group - computed: false, optional: true, required: false
  private _sslv2BypassServiceGroup?: string; 
  public get sslv2BypassServiceGroup() {
    return this.getStringAttribute('sslv2_bypass_service_group');
  }
  public set sslv2BypassServiceGroup(value: string) {
    this._sslv2BypassServiceGroup = value;
  }
  public resetSslv2BypassServiceGroup() {
    this._sslv2BypassServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv2BypassServiceGroupInput() {
    return this._sslv2BypassServiceGroup;
  }

  // template_cipher - computed: false, optional: true, required: false
  private _templateCipher?: string; 
  public get templateCipher() {
    return this.getStringAttribute('template_cipher');
  }
  public set templateCipher(value: string) {
    this._templateCipher = value;
  }
  public resetTemplateCipher() {
    this._templateCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCipherInput() {
    return this._templateCipher;
  }

  // template_cipher_shared - computed: false, optional: true, required: false
  private _templateCipherShared?: string; 
  public get templateCipherShared() {
    return this.getStringAttribute('template_cipher_shared');
  }
  public set templateCipherShared(value: string) {
    this._templateCipherShared = value;
  }
  public resetTemplateCipherShared() {
    this._templateCipherShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCipherSharedInput() {
    return this._templateCipherShared;
  }

  // template_hsm - computed: false, optional: true, required: false
  private _templateHsm?: string; 
  public get templateHsm() {
    return this.getStringAttribute('template_hsm');
  }
  public set templateHsm(value: string) {
    this._templateHsm = value;
  }
  public resetTemplateHsm() {
    this._templateHsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHsmInput() {
    return this._templateHsm;
  }

  // user_name_list - computed: false, optional: true, required: false
  private _userNameList?: string; 
  public get userNameList() {
    return this.getStringAttribute('user_name_list');
  }
  public set userNameList(value: string) {
    this._userNameList = value;
  }
  public resetUserNameList() {
    this._userNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameListInput() {
    return this._userNameList;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // verify_cert_fail_action - computed: false, optional: true, required: false
  private _verifyCertFailAction?: string; 
  public get verifyCertFailAction() {
    return this.getStringAttribute('verify_cert_fail_action');
  }
  public set verifyCertFailAction(value: string) {
    this._verifyCertFailAction = value;
  }
  public resetVerifyCertFailAction() {
    this._verifyCertFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertFailActionInput() {
    return this._verifyCertFailAction;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // bypass_cert_issuer_multi_class_list - computed: false, optional: true, required: false
  private _bypassCertIssuerMultiClassList = new SlbTemplateClientSslBypassCertIssuerMultiClassListStructList(this, "bypass_cert_issuer_multi_class_list", false);
  public get bypassCertIssuerMultiClassList() {
    return this._bypassCertIssuerMultiClassList;
  }
  public putBypassCertIssuerMultiClassList(value: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct[] | cdktf.IResolvable) {
    this._bypassCertIssuerMultiClassList.internalValue = value;
  }
  public resetBypassCertIssuerMultiClassList() {
    this._bypassCertIssuerMultiClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertIssuerMultiClassListInput() {
    return this._bypassCertIssuerMultiClassList.internalValue;
  }

  // bypass_cert_san_multi_class_list - computed: false, optional: true, required: false
  private _bypassCertSanMultiClassList = new SlbTemplateClientSslBypassCertSanMultiClassListStructList(this, "bypass_cert_san_multi_class_list", false);
  public get bypassCertSanMultiClassList() {
    return this._bypassCertSanMultiClassList;
  }
  public putBypassCertSanMultiClassList(value: SlbTemplateClientSslBypassCertSanMultiClassListStruct[] | cdktf.IResolvable) {
    this._bypassCertSanMultiClassList.internalValue = value;
  }
  public resetBypassCertSanMultiClassList() {
    this._bypassCertSanMultiClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSanMultiClassListInput() {
    return this._bypassCertSanMultiClassList.internalValue;
  }

  // bypass_cert_subject_multi_class_list - computed: false, optional: true, required: false
  private _bypassCertSubjectMultiClassList = new SlbTemplateClientSslBypassCertSubjectMultiClassListStructList(this, "bypass_cert_subject_multi_class_list", false);
  public get bypassCertSubjectMultiClassList() {
    return this._bypassCertSubjectMultiClassList;
  }
  public putBypassCertSubjectMultiClassList(value: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct[] | cdktf.IResolvable) {
    this._bypassCertSubjectMultiClassList.internalValue = value;
  }
  public resetBypassCertSubjectMultiClassList() {
    this._bypassCertSubjectMultiClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSubjectMultiClassListInput() {
    return this._bypassCertSubjectMultiClassList.internalValue;
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts = new SlbTemplateClientSslCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: SlbTemplateClientSslCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  public resetCaCerts() {
    this._caCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }

  // certificate_issuer_contains_list - computed: false, optional: true, required: false
  private _certificateIssuerContainsList = new SlbTemplateClientSslCertificateIssuerContainsListStructList(this, "certificate_issuer_contains_list", false);
  public get certificateIssuerContainsList() {
    return this._certificateIssuerContainsList;
  }
  public putCertificateIssuerContainsList(value: SlbTemplateClientSslCertificateIssuerContainsListStruct[] | cdktf.IResolvable) {
    this._certificateIssuerContainsList.internalValue = value;
  }
  public resetCertificateIssuerContainsList() {
    this._certificateIssuerContainsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerContainsListInput() {
    return this._certificateIssuerContainsList.internalValue;
  }

  // certificate_issuer_ends_with_list - computed: false, optional: true, required: false
  private _certificateIssuerEndsWithList = new SlbTemplateClientSslCertificateIssuerEndsWithListStructList(this, "certificate_issuer_ends_with_list", false);
  public get certificateIssuerEndsWithList() {
    return this._certificateIssuerEndsWithList;
  }
  public putCertificateIssuerEndsWithList(value: SlbTemplateClientSslCertificateIssuerEndsWithListStruct[] | cdktf.IResolvable) {
    this._certificateIssuerEndsWithList.internalValue = value;
  }
  public resetCertificateIssuerEndsWithList() {
    this._certificateIssuerEndsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerEndsWithListInput() {
    return this._certificateIssuerEndsWithList.internalValue;
  }

  // certificate_issuer_equals_list - computed: false, optional: true, required: false
  private _certificateIssuerEqualsList = new SlbTemplateClientSslCertificateIssuerEqualsListStructList(this, "certificate_issuer_equals_list", false);
  public get certificateIssuerEqualsList() {
    return this._certificateIssuerEqualsList;
  }
  public putCertificateIssuerEqualsList(value: SlbTemplateClientSslCertificateIssuerEqualsListStruct[] | cdktf.IResolvable) {
    this._certificateIssuerEqualsList.internalValue = value;
  }
  public resetCertificateIssuerEqualsList() {
    this._certificateIssuerEqualsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerEqualsListInput() {
    return this._certificateIssuerEqualsList.internalValue;
  }

  // certificate_issuer_starts_with_list - computed: false, optional: true, required: false
  private _certificateIssuerStartsWithList = new SlbTemplateClientSslCertificateIssuerStartsWithListStructList(this, "certificate_issuer_starts_with_list", false);
  public get certificateIssuerStartsWithList() {
    return this._certificateIssuerStartsWithList;
  }
  public putCertificateIssuerStartsWithList(value: SlbTemplateClientSslCertificateIssuerStartsWithListStruct[] | cdktf.IResolvable) {
    this._certificateIssuerStartsWithList.internalValue = value;
  }
  public resetCertificateIssuerStartsWithList() {
    this._certificateIssuerStartsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIssuerStartsWithListInput() {
    return this._certificateIssuerStartsWithList.internalValue;
  }

  // certificate_list - computed: false, optional: true, required: false
  private _certificateList = new SlbTemplateClientSslCertificateListStructList(this, "certificate_list", false);
  public get certificateList() {
    return this._certificateList;
  }
  public putCertificateList(value: SlbTemplateClientSslCertificateListStruct[] | cdktf.IResolvable) {
    this._certificateList.internalValue = value;
  }
  public resetCertificateList() {
    this._certificateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateListInput() {
    return this._certificateList.internalValue;
  }

  // certificate_san_contains_list - computed: false, optional: true, required: false
  private _certificateSanContainsList = new SlbTemplateClientSslCertificateSanContainsListStructList(this, "certificate_san_contains_list", false);
  public get certificateSanContainsList() {
    return this._certificateSanContainsList;
  }
  public putCertificateSanContainsList(value: SlbTemplateClientSslCertificateSanContainsListStruct[] | cdktf.IResolvable) {
    this._certificateSanContainsList.internalValue = value;
  }
  public resetCertificateSanContainsList() {
    this._certificateSanContainsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanContainsListInput() {
    return this._certificateSanContainsList.internalValue;
  }

  // certificate_san_ends_with_list - computed: false, optional: true, required: false
  private _certificateSanEndsWithList = new SlbTemplateClientSslCertificateSanEndsWithListStructList(this, "certificate_san_ends_with_list", false);
  public get certificateSanEndsWithList() {
    return this._certificateSanEndsWithList;
  }
  public putCertificateSanEndsWithList(value: SlbTemplateClientSslCertificateSanEndsWithListStruct[] | cdktf.IResolvable) {
    this._certificateSanEndsWithList.internalValue = value;
  }
  public resetCertificateSanEndsWithList() {
    this._certificateSanEndsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanEndsWithListInput() {
    return this._certificateSanEndsWithList.internalValue;
  }

  // certificate_san_equals_list - computed: false, optional: true, required: false
  private _certificateSanEqualsList = new SlbTemplateClientSslCertificateSanEqualsListStructList(this, "certificate_san_equals_list", false);
  public get certificateSanEqualsList() {
    return this._certificateSanEqualsList;
  }
  public putCertificateSanEqualsList(value: SlbTemplateClientSslCertificateSanEqualsListStruct[] | cdktf.IResolvable) {
    this._certificateSanEqualsList.internalValue = value;
  }
  public resetCertificateSanEqualsList() {
    this._certificateSanEqualsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanEqualsListInput() {
    return this._certificateSanEqualsList.internalValue;
  }

  // certificate_san_starts_with_list - computed: false, optional: true, required: false
  private _certificateSanStartsWithList = new SlbTemplateClientSslCertificateSanStartsWithListStructList(this, "certificate_san_starts_with_list", false);
  public get certificateSanStartsWithList() {
    return this._certificateSanStartsWithList;
  }
  public putCertificateSanStartsWithList(value: SlbTemplateClientSslCertificateSanStartsWithListStruct[] | cdktf.IResolvable) {
    this._certificateSanStartsWithList.internalValue = value;
  }
  public resetCertificateSanStartsWithList() {
    this._certificateSanStartsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSanStartsWithListInput() {
    return this._certificateSanStartsWithList.internalValue;
  }

  // certificate_subject_contains_list - computed: false, optional: true, required: false
  private _certificateSubjectContainsList = new SlbTemplateClientSslCertificateSubjectContainsListStructList(this, "certificate_subject_contains_list", false);
  public get certificateSubjectContainsList() {
    return this._certificateSubjectContainsList;
  }
  public putCertificateSubjectContainsList(value: SlbTemplateClientSslCertificateSubjectContainsListStruct[] | cdktf.IResolvable) {
    this._certificateSubjectContainsList.internalValue = value;
  }
  public resetCertificateSubjectContainsList() {
    this._certificateSubjectContainsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectContainsListInput() {
    return this._certificateSubjectContainsList.internalValue;
  }

  // certificate_subject_ends_with_list - computed: false, optional: true, required: false
  private _certificateSubjectEndsWithList = new SlbTemplateClientSslCertificateSubjectEndsWithListStructList(this, "certificate_subject_ends_with_list", false);
  public get certificateSubjectEndsWithList() {
    return this._certificateSubjectEndsWithList;
  }
  public putCertificateSubjectEndsWithList(value: SlbTemplateClientSslCertificateSubjectEndsWithListStruct[] | cdktf.IResolvable) {
    this._certificateSubjectEndsWithList.internalValue = value;
  }
  public resetCertificateSubjectEndsWithList() {
    this._certificateSubjectEndsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectEndsWithListInput() {
    return this._certificateSubjectEndsWithList.internalValue;
  }

  // certificate_subject_equals_list - computed: false, optional: true, required: false
  private _certificateSubjectEqualsList = new SlbTemplateClientSslCertificateSubjectEqualsListStructList(this, "certificate_subject_equals_list", false);
  public get certificateSubjectEqualsList() {
    return this._certificateSubjectEqualsList;
  }
  public putCertificateSubjectEqualsList(value: SlbTemplateClientSslCertificateSubjectEqualsListStruct[] | cdktf.IResolvable) {
    this._certificateSubjectEqualsList.internalValue = value;
  }
  public resetCertificateSubjectEqualsList() {
    this._certificateSubjectEqualsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectEqualsListInput() {
    return this._certificateSubjectEqualsList.internalValue;
  }

  // certificate_subject_starts_with_list - computed: false, optional: true, required: false
  private _certificateSubjectStartsWithList = new SlbTemplateClientSslCertificateSubjectStartsWithListStructList(this, "certificate_subject_starts_with_list", false);
  public get certificateSubjectStartsWithList() {
    return this._certificateSubjectStartsWithList;
  }
  public putCertificateSubjectStartsWithList(value: SlbTemplateClientSslCertificateSubjectStartsWithListStruct[] | cdktf.IResolvable) {
    this._certificateSubjectStartsWithList.internalValue = value;
  }
  public resetCertificateSubjectStartsWithList() {
    this._certificateSubjectStartsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSubjectStartsWithListInput() {
    return this._certificateSubjectStartsWithList.internalValue;
  }

  // cipher_without_prio_list - computed: false, optional: true, required: false
  private _cipherWithoutPrioList = new SlbTemplateClientSslCipherWithoutPrioListStructList(this, "cipher_without_prio_list", false);
  public get cipherWithoutPrioList() {
    return this._cipherWithoutPrioList;
  }
  public putCipherWithoutPrioList(value: SlbTemplateClientSslCipherWithoutPrioListStruct[] | cdktf.IResolvable) {
    this._cipherWithoutPrioList.internalValue = value;
  }
  public resetCipherWithoutPrioList() {
    this._cipherWithoutPrioList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherWithoutPrioListInput() {
    return this._cipherWithoutPrioList.internalValue;
  }

  // client_auth_contains_list - computed: false, optional: true, required: false
  private _clientAuthContainsList = new SlbTemplateClientSslClientAuthContainsListStructList(this, "client_auth_contains_list", false);
  public get clientAuthContainsList() {
    return this._clientAuthContainsList;
  }
  public putClientAuthContainsList(value: SlbTemplateClientSslClientAuthContainsListStruct[] | cdktf.IResolvable) {
    this._clientAuthContainsList.internalValue = value;
  }
  public resetClientAuthContainsList() {
    this._clientAuthContainsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthContainsListInput() {
    return this._clientAuthContainsList.internalValue;
  }

  // client_auth_ends_with_list - computed: false, optional: true, required: false
  private _clientAuthEndsWithList = new SlbTemplateClientSslClientAuthEndsWithListStructList(this, "client_auth_ends_with_list", false);
  public get clientAuthEndsWithList() {
    return this._clientAuthEndsWithList;
  }
  public putClientAuthEndsWithList(value: SlbTemplateClientSslClientAuthEndsWithListStruct[] | cdktf.IResolvable) {
    this._clientAuthEndsWithList.internalValue = value;
  }
  public resetClientAuthEndsWithList() {
    this._clientAuthEndsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthEndsWithListInput() {
    return this._clientAuthEndsWithList.internalValue;
  }

  // client_auth_equals_list - computed: false, optional: true, required: false
  private _clientAuthEqualsList = new SlbTemplateClientSslClientAuthEqualsListStructList(this, "client_auth_equals_list", false);
  public get clientAuthEqualsList() {
    return this._clientAuthEqualsList;
  }
  public putClientAuthEqualsList(value: SlbTemplateClientSslClientAuthEqualsListStruct[] | cdktf.IResolvable) {
    this._clientAuthEqualsList.internalValue = value;
  }
  public resetClientAuthEqualsList() {
    this._clientAuthEqualsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthEqualsListInput() {
    return this._clientAuthEqualsList.internalValue;
  }

  // client_auth_starts_with_list - computed: false, optional: true, required: false
  private _clientAuthStartsWithList = new SlbTemplateClientSslClientAuthStartsWithListStructList(this, "client_auth_starts_with_list", false);
  public get clientAuthStartsWithList() {
    return this._clientAuthStartsWithList;
  }
  public putClientAuthStartsWithList(value: SlbTemplateClientSslClientAuthStartsWithListStruct[] | cdktf.IResolvable) {
    this._clientAuthStartsWithList.internalValue = value;
  }
  public resetClientAuthStartsWithList() {
    this._clientAuthStartsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthStartsWithListInput() {
    return this._clientAuthStartsWithList.internalValue;
  }

  // client_ipv4_list - computed: false, optional: true, required: false
  private _clientIpv4List = new SlbTemplateClientSslClientIpv4ListStructList(this, "client_ipv4_list", false);
  public get clientIpv4List() {
    return this._clientIpv4List;
  }
  public putClientIpv4List(value: SlbTemplateClientSslClientIpv4ListStruct[] | cdktf.IResolvable) {
    this._clientIpv4List.internalValue = value;
  }
  public resetClientIpv4List() {
    this._clientIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv4ListInput() {
    return this._clientIpv4List.internalValue;
  }

  // client_ipv6_list - computed: false, optional: true, required: false
  private _clientIpv6List = new SlbTemplateClientSslClientIpv6ListStructList(this, "client_ipv6_list", false);
  public get clientIpv6List() {
    return this._clientIpv6List;
  }
  public putClientIpv6List(value: SlbTemplateClientSslClientIpv6ListStruct[] | cdktf.IResolvable) {
    this._clientIpv6List.internalValue = value;
  }
  public resetClientIpv6List() {
    this._clientIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpv6ListInput() {
    return this._clientIpv6List.internalValue;
  }

  // contains_list - computed: false, optional: true, required: false
  private _containsList = new SlbTemplateClientSslContainsListStructList(this, "contains_list", false);
  public get containsList() {
    return this._containsList;
  }
  public putContainsList(value: SlbTemplateClientSslContainsListStruct[] | cdktf.IResolvable) {
    this._containsList.internalValue = value;
  }
  public resetContainsList() {
    this._containsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsListInput() {
    return this._containsList.internalValue;
  }

  // crl_certs - computed: false, optional: true, required: false
  private _crlCerts = new SlbTemplateClientSslCrlCertsList(this, "crl_certs", false);
  public get crlCerts() {
    return this._crlCerts;
  }
  public putCrlCerts(value: SlbTemplateClientSslCrlCerts[] | cdktf.IResolvable) {
    this._crlCerts.internalValue = value;
  }
  public resetCrlCerts() {
    this._crlCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCertsInput() {
    return this._crlCerts.internalValue;
  }

  // ec_list - computed: false, optional: true, required: false
  private _ecList = new SlbTemplateClientSslEcListStructList(this, "ec_list", false);
  public get ecList() {
    return this._ecList;
  }
  public putEcList(value: SlbTemplateClientSslEcListStruct[] | cdktf.IResolvable) {
    this._ecList.internalValue = value;
  }
  public resetEcList() {
    this._ecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecListInput() {
    return this._ecList.internalValue;
  }

  // ends_with_list - computed: false, optional: true, required: false
  private _endsWithList = new SlbTemplateClientSslEndsWithListStructList(this, "ends_with_list", false);
  public get endsWithList() {
    return this._endsWithList;
  }
  public putEndsWithList(value: SlbTemplateClientSslEndsWithListStruct[] | cdktf.IResolvable) {
    this._endsWithList.internalValue = value;
  }
  public resetEndsWithList() {
    this._endsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithListInput() {
    return this._endsWithList.internalValue;
  }

  // equals_list - computed: false, optional: true, required: false
  private _equalsList = new SlbTemplateClientSslEqualsListStructList(this, "equals_list", false);
  public get equalsList() {
    return this._equalsList;
  }
  public putEqualsList(value: SlbTemplateClientSslEqualsListStruct[] | cdktf.IResolvable) {
    this._equalsList.internalValue = value;
  }
  public resetEqualsList() {
    this._equalsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalsListInput() {
    return this._equalsList.internalValue;
  }

  // exception_client_ipv4_list - computed: false, optional: true, required: false
  private _exceptionClientIpv4List = new SlbTemplateClientSslExceptionClientIpv4ListStructList(this, "exception_client_ipv4_list", false);
  public get exceptionClientIpv4List() {
    return this._exceptionClientIpv4List;
  }
  public putExceptionClientIpv4List(value: SlbTemplateClientSslExceptionClientIpv4ListStruct[] | cdktf.IResolvable) {
    this._exceptionClientIpv4List.internalValue = value;
  }
  public resetExceptionClientIpv4List() {
    this._exceptionClientIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionClientIpv4ListInput() {
    return this._exceptionClientIpv4List.internalValue;
  }

  // exception_client_ipv6_list - computed: false, optional: true, required: false
  private _exceptionClientIpv6List = new SlbTemplateClientSslExceptionClientIpv6ListStructList(this, "exception_client_ipv6_list", false);
  public get exceptionClientIpv6List() {
    return this._exceptionClientIpv6List;
  }
  public putExceptionClientIpv6List(value: SlbTemplateClientSslExceptionClientIpv6ListStruct[] | cdktf.IResolvable) {
    this._exceptionClientIpv6List.internalValue = value;
  }
  public resetExceptionClientIpv6List() {
    this._exceptionClientIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionClientIpv6ListInput() {
    return this._exceptionClientIpv6List.internalValue;
  }

  // exception_server_ipv4_list - computed: false, optional: true, required: false
  private _exceptionServerIpv4List = new SlbTemplateClientSslExceptionServerIpv4ListStructList(this, "exception_server_ipv4_list", false);
  public get exceptionServerIpv4List() {
    return this._exceptionServerIpv4List;
  }
  public putExceptionServerIpv4List(value: SlbTemplateClientSslExceptionServerIpv4ListStruct[] | cdktf.IResolvable) {
    this._exceptionServerIpv4List.internalValue = value;
  }
  public resetExceptionServerIpv4List() {
    this._exceptionServerIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionServerIpv4ListInput() {
    return this._exceptionServerIpv4List.internalValue;
  }

  // exception_server_ipv6_list - computed: false, optional: true, required: false
  private _exceptionServerIpv6List = new SlbTemplateClientSslExceptionServerIpv6ListStructList(this, "exception_server_ipv6_list", false);
  public get exceptionServerIpv6List() {
    return this._exceptionServerIpv6List;
  }
  public putExceptionServerIpv6List(value: SlbTemplateClientSslExceptionServerIpv6ListStruct[] | cdktf.IResolvable) {
    this._exceptionServerIpv6List.internalValue = value;
  }
  public resetExceptionServerIpv6List() {
    this._exceptionServerIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionServerIpv6ListInput() {
    return this._exceptionServerIpv6List.internalValue;
  }

  // exception_web_category - computed: false, optional: true, required: false
  private _exceptionWebCategory = new SlbTemplateClientSslExceptionWebCategoryOutputReference(this, "exception_web_category");
  public get exceptionWebCategory() {
    return this._exceptionWebCategory;
  }
  public putExceptionWebCategory(value: SlbTemplateClientSslExceptionWebCategory) {
    this._exceptionWebCategory.internalValue = value;
  }
  public resetExceptionWebCategory() {
    this._exceptionWebCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWebCategoryInput() {
    return this._exceptionWebCategory.internalValue;
  }

  // exception_web_reputation - computed: false, optional: true, required: false
  private _exceptionWebReputation = new SlbTemplateClientSslExceptionWebReputationOutputReference(this, "exception_web_reputation");
  public get exceptionWebReputation() {
    return this._exceptionWebReputation;
  }
  public putExceptionWebReputation(value: SlbTemplateClientSslExceptionWebReputation) {
    this._exceptionWebReputation.internalValue = value;
  }
  public resetExceptionWebReputation() {
    this._exceptionWebReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionWebReputationInput() {
    return this._exceptionWebReputation.internalValue;
  }

  // forward_proxy_trusted_ca_lists - computed: false, optional: true, required: false
  private _forwardProxyTrustedCaLists = new SlbTemplateClientSslForwardProxyTrustedCaListsList(this, "forward_proxy_trusted_ca_lists", false);
  public get forwardProxyTrustedCaLists() {
    return this._forwardProxyTrustedCaLists;
  }
  public putForwardProxyTrustedCaLists(value: SlbTemplateClientSslForwardProxyTrustedCaLists[] | cdktf.IResolvable) {
    this._forwardProxyTrustedCaLists.internalValue = value;
  }
  public resetForwardProxyTrustedCaLists() {
    this._forwardProxyTrustedCaLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyTrustedCaListsInput() {
    return this._forwardProxyTrustedCaLists.internalValue;
  }

  // local_cert_pin_list - computed: false, optional: true, required: false
  private _localCertPinList = new SlbTemplateClientSslLocalCertPinListStructOutputReference(this, "local_cert_pin_list");
  public get localCertPinList() {
    return this._localCertPinList;
  }
  public putLocalCertPinList(value: SlbTemplateClientSslLocalCertPinListStruct) {
    this._localCertPinList.internalValue = value;
  }
  public resetLocalCertPinList() {
    this._localCertPinList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertPinListInput() {
    return this._localCertPinList.internalValue;
  }

  // multi_class_list - computed: false, optional: true, required: false
  private _multiClassList = new SlbTemplateClientSslMultiClassListStructList(this, "multi_class_list", false);
  public get multiClassList() {
    return this._multiClassList;
  }
  public putMultiClassList(value: SlbTemplateClientSslMultiClassListStruct[] | cdktf.IResolvable) {
    this._multiClassList.internalValue = value;
  }
  public resetMultiClassList() {
    this._multiClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClassListInput() {
    return this._multiClassList.internalValue;
  }

  // req_ca_lists - computed: false, optional: true, required: false
  private _reqCaLists = new SlbTemplateClientSslReqCaListsList(this, "req_ca_lists", false);
  public get reqCaLists() {
    return this._reqCaLists;
  }
  public putReqCaLists(value: SlbTemplateClientSslReqCaLists[] | cdktf.IResolvable) {
    this._reqCaLists.internalValue = value;
  }
  public resetReqCaLists() {
    this._reqCaLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqCaListsInput() {
    return this._reqCaLists.internalValue;
  }

  // server_ipv4_list - computed: false, optional: true, required: false
  private _serverIpv4List = new SlbTemplateClientSslServerIpv4ListStructList(this, "server_ipv4_list", false);
  public get serverIpv4List() {
    return this._serverIpv4List;
  }
  public putServerIpv4List(value: SlbTemplateClientSslServerIpv4ListStruct[] | cdktf.IResolvable) {
    this._serverIpv4List.internalValue = value;
  }
  public resetServerIpv4List() {
    this._serverIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv4ListInput() {
    return this._serverIpv4List.internalValue;
  }

  // server_ipv6_list - computed: false, optional: true, required: false
  private _serverIpv6List = new SlbTemplateClientSslServerIpv6ListStructList(this, "server_ipv6_list", false);
  public get serverIpv6List() {
    return this._serverIpv6List;
  }
  public putServerIpv6List(value: SlbTemplateClientSslServerIpv6ListStruct[] | cdktf.IResolvable) {
    this._serverIpv6List.internalValue = value;
  }
  public resetServerIpv6List() {
    this._serverIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6ListInput() {
    return this._serverIpv6List.internalValue;
  }

  // server_name_list - computed: false, optional: true, required: false
  private _serverNameList = new SlbTemplateClientSslServerNameListStructList(this, "server_name_list", false);
  public get serverNameList() {
    return this._serverNameList;
  }
  public putServerNameList(value: SlbTemplateClientSslServerNameListStruct[] | cdktf.IResolvable) {
    this._serverNameList.internalValue = value;
  }
  public resetServerNameList() {
    this._serverNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameListInput() {
    return this._serverNameList.internalValue;
  }

  // starts_with_list - computed: false, optional: true, required: false
  private _startsWithList = new SlbTemplateClientSslStartsWithListStructList(this, "starts_with_list", false);
  public get startsWithList() {
    return this._startsWithList;
  }
  public putStartsWithList(value: SlbTemplateClientSslStartsWithListStruct[] | cdktf.IResolvable) {
    this._startsWithList.internalValue = value;
  }
  public resetStartsWithList() {
    this._startsWithList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithListInput() {
    return this._startsWithList.internalValue;
  }

  // web_category - computed: false, optional: true, required: false
  private _webCategory = new SlbTemplateClientSslWebCategoryOutputReference(this, "web_category");
  public get webCategory() {
    return this._webCategory;
  }
  public putWebCategory(value: SlbTemplateClientSslWebCategory) {
    this._webCategory.internalValue = value;
  }
  public resetWebCategory() {
    this._webCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryInput() {
    return this._webCategory.internalValue;
  }

  // web_reputation - computed: false, optional: true, required: false
  private _webReputation = new SlbTemplateClientSslWebReputationOutputReference(this, "web_reputation");
  public get webReputation() {
    return this._webReputation;
  }
  public putWebReputation(value: SlbTemplateClientSslWebReputation) {
    this._webReputation.internalValue = value;
  }
  public resetWebReputation() {
    this._webReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationInput() {
    return this._webReputation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_group_list: cdktf.stringToTerraform(this._adGroupList),
      alert_type: cdktf.stringToTerraform(this._alertType),
      auth_sg: cdktf.stringToTerraform(this._authSg),
      auth_sg_dn: cdktf.numberToTerraform(this._authSgDn),
      auth_sg_filter: cdktf.stringToTerraform(this._authSgFilter),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      auth_username_attribute: cdktf.stringToTerraform(this._authUsernameAttribute),
      authen_name: cdktf.stringToTerraform(this._authenName),
      authorization: cdktf.numberToTerraform(this._authorization),
      bypass_cert_issuer_class_list_name: cdktf.stringToTerraform(this._bypassCertIssuerClassListName),
      bypass_cert_san_class_list_name: cdktf.stringToTerraform(this._bypassCertSanClassListName),
      bypass_cert_subject_class_list_name: cdktf.stringToTerraform(this._bypassCertSubjectClassListName),
      cache_persistence_list_name: cdktf.stringToTerraform(this._cachePersistenceListName),
      case_insensitive: cdktf.numberToTerraform(this._caseInsensitive),
      central_cert_pin_list: cdktf.numberToTerraform(this._centralCertPinList),
      cert_revoke_action: cdktf.stringToTerraform(this._certRevokeAction),
      cert_unknown_action: cdktf.stringToTerraform(this._certUnknownAction),
      chain_cert: cdktf.stringToTerraform(this._chainCert),
      chain_cert_shared_str: cdktf.stringToTerraform(this._chainCertSharedStr),
      class_list_name: cdktf.stringToTerraform(this._classListName),
      client_auth_case_insensitive: cdktf.numberToTerraform(this._clientAuthCaseInsensitive),
      client_auth_class_list: cdktf.stringToTerraform(this._clientAuthClassList),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      close_notify: cdktf.numberToTerraform(this._closeNotify),
      dgversion: cdktf.numberToTerraform(this._dgversion),
      dh_type: cdktf.stringToTerraform(this._dhType),
      direct_client_server_auth: cdktf.numberToTerraform(this._directClientServerAuth),
      disable_sslv3: cdktf.numberToTerraform(this._disableSslv3),
      early_data: cdktf.numberToTerraform(this._earlyData),
      enable_ssli_ftp_alg: cdktf.numberToTerraform(this._enableSsliFtpAlg),
      enable_tls_alert_logging: cdktf.numberToTerraform(this._enableTlsAlertLogging),
      exception_ad_group_list: cdktf.stringToTerraform(this._exceptionAdGroupList),
      exception_certificate_issuer_cl_name: cdktf.stringToTerraform(this._exceptionCertificateIssuerClName),
      exception_certificate_san_cl_name: cdktf.stringToTerraform(this._exceptionCertificateSanClName),
      exception_certificate_subject_cl_name: cdktf.stringToTerraform(this._exceptionCertificateSubjectClName),
      exception_sni_cl_name: cdktf.stringToTerraform(this._exceptionSniClName),
      exception_user_name_list: cdktf.stringToTerraform(this._exceptionUserNameList),
      expire_hours: cdktf.numberToTerraform(this._expireHours),
      forward_passphrase: cdktf.stringToTerraform(this._forwardPassphrase),
      forward_proxy_alt_sign: cdktf.numberToTerraform(this._forwardProxyAltSign),
      forward_proxy_block_message: cdktf.stringToTerraform(this._forwardProxyBlockMessage),
      forward_proxy_ca_cert: cdktf.stringToTerraform(this._forwardProxyCaCert),
      forward_proxy_ca_key: cdktf.stringToTerraform(this._forwardProxyCaKey),
      forward_proxy_cert_cache_limit: cdktf.numberToTerraform(this._forwardProxyCertCacheLimit),
      forward_proxy_cert_cache_timeout: cdktf.numberToTerraform(this._forwardProxyCertCacheTimeout),
      forward_proxy_cert_expiry: cdktf.numberToTerraform(this._forwardProxyCertExpiry),
      forward_proxy_cert_not_ready_action: cdktf.stringToTerraform(this._forwardProxyCertNotReadyAction),
      forward_proxy_cert_revoke_action: cdktf.numberToTerraform(this._forwardProxyCertRevokeAction),
      forward_proxy_cert_unknown_action: cdktf.numberToTerraform(this._forwardProxyCertUnknownAction),
      forward_proxy_crl_disable: cdktf.numberToTerraform(this._forwardProxyCrlDisable),
      forward_proxy_decrypted_dscp: cdktf.numberToTerraform(this._forwardProxyDecryptedDscp),
      forward_proxy_decrypted_dscp_bypass: cdktf.numberToTerraform(this._forwardProxyDecryptedDscpBypass),
      forward_proxy_enable: cdktf.numberToTerraform(this._forwardProxyEnable),
      forward_proxy_esni_action: cdktf.numberToTerraform(this._forwardProxyEsniAction),
      forward_proxy_failsafe_disable: cdktf.numberToTerraform(this._forwardProxyFailsafeDisable),
      forward_proxy_hash_persistence_interval: cdktf.numberToTerraform(this._forwardProxyHashPersistenceInterval),
      forward_proxy_log_disable: cdktf.numberToTerraform(this._forwardProxyLogDisable),
      forward_proxy_no_shared_cipher_action: cdktf.numberToTerraform(this._forwardProxyNoSharedCipherAction),
      forward_proxy_no_sni_action: cdktf.stringToTerraform(this._forwardProxyNoSniAction),
      forward_proxy_ocsp_disable: cdktf.numberToTerraform(this._forwardProxyOcspDisable),
      forward_proxy_require_sni_cert_matched: cdktf.stringToTerraform(this._forwardProxyRequireSniCertMatched),
      forward_proxy_selfsign_redir: cdktf.numberToTerraform(this._forwardProxySelfsignRedir),
      forward_proxy_ssl_version: cdktf.numberToTerraform(this._forwardProxySslVersion),
      forward_proxy_verify_cert_fail_action: cdktf.numberToTerraform(this._forwardProxyVerifyCertFailAction),
      fp_alt_cert: cdktf.stringToTerraform(this._fpAltCert),
      fp_alt_chain_cert: cdktf.stringToTerraform(this._fpAltChainCert),
      fp_alt_key: cdktf.stringToTerraform(this._fpAltKey),
      fp_alt_passphrase: cdktf.stringToTerraform(this._fpAltPassphrase),
      fp_alt_shared: cdktf.numberToTerraform(this._fpAltShared),
      fp_ca_certificate: cdktf.stringToTerraform(this._fpCaCertificate),
      fp_ca_certificate_shared: cdktf.numberToTerraform(this._fpCaCertificateShared),
      fp_ca_chain_cert: cdktf.stringToTerraform(this._fpCaChainCert),
      fp_ca_key: cdktf.stringToTerraform(this._fpCaKey),
      fp_ca_key_passphrase: cdktf.stringToTerraform(this._fpCaKeyPassphrase),
      fp_ca_key_shared: cdktf.numberToTerraform(this._fpCaKeyShared),
      fp_ca_shared: cdktf.numberToTerraform(this._fpCaShared),
      fp_cert_ext_aia_ca_issuers: cdktf.stringToTerraform(this._fpCertExtAiaCaIssuers),
      fp_cert_ext_aia_ocsp: cdktf.stringToTerraform(this._fpCertExtAiaOcsp),
      fp_cert_ext_crldp: cdktf.stringToTerraform(this._fpCertExtCrldp),
      fp_cert_fetch_autonat: cdktf.stringToTerraform(this._fpCertFetchAutonat),
      fp_cert_fetch_autonat_precedence: cdktf.numberToTerraform(this._fpCertFetchAutonatPrecedence),
      fp_cert_fetch_natpool_name: cdktf.stringToTerraform(this._fpCertFetchNatpoolName),
      fp_cert_fetch_natpool_name_shared: cdktf.stringToTerraform(this._fpCertFetchNatpoolNameShared),
      fp_cert_fetch_natpool_precedence: cdktf.numberToTerraform(this._fpCertFetchNatpoolPrecedence),
      fp_esni_action: cdktf.stringToTerraform(this._fpEsniAction),
      handshake_logging_enable: cdktf.numberToTerraform(this._handshakeLoggingEnable),
      hsm_type: cdktf.stringToTerraform(this._hsmType),
      id: cdktf.stringToTerraform(this._id),
      inspect_certificate_issuer_cl_name: cdktf.stringToTerraform(this._inspectCertificateIssuerClName),
      inspect_certificate_san_cl_name: cdktf.stringToTerraform(this._inspectCertificateSanClName),
      inspect_certificate_subject_cl_name: cdktf.stringToTerraform(this._inspectCertificateSubjectClName),
      inspect_list_name: cdktf.stringToTerraform(this._inspectListName),
      ja3_enable: cdktf.numberToTerraform(this._ja3Enable),
      ja3_insert_http_header: cdktf.stringToTerraform(this._ja3InsertHttpHeader),
      ja3_reject_class_list: cdktf.stringToTerraform(this._ja3RejectClassList),
      ja3_reject_max_number_per_host: cdktf.numberToTerraform(this._ja3RejectMaxNumberPerHost),
      ja3_ttl: cdktf.numberToTerraform(this._ja3Ttl),
      ldap_base_dn_from_cert: cdktf.numberToTerraform(this._ldapBaseDnFromCert),
      ldap_search_filter: cdktf.stringToTerraform(this._ldapSearchFilter),
      local_logging: cdktf.numberToTerraform(this._localLogging),
      name: cdktf.stringToTerraform(this._name),
      no_anti_replay: cdktf.numberToTerraform(this._noAntiReplay),
      no_shared_cipher_action: cdktf.stringToTerraform(this._noSharedCipherAction),
      non_ssl_bypass_l4session: cdktf.numberToTerraform(this._nonSslBypassL4Session),
      non_ssl_bypass_service_group: cdktf.stringToTerraform(this._nonSslBypassServiceGroup),
      notafter: cdktf.numberToTerraform(this._notafter),
      notafterday: cdktf.numberToTerraform(this._notafterday),
      notaftermonth: cdktf.numberToTerraform(this._notaftermonth),
      notafteryear: cdktf.numberToTerraform(this._notafteryear),
      notbefore: cdktf.numberToTerraform(this._notbefore),
      notbeforeday: cdktf.numberToTerraform(this._notbeforeday),
      notbeforemonth: cdktf.numberToTerraform(this._notbeforemonth),
      notbeforeyear: cdktf.numberToTerraform(this._notbeforeyear),
      ocsp_stapling: cdktf.numberToTerraform(this._ocspStapling),
      ocspst_ca_cert: cdktf.stringToTerraform(this._ocspstCaCert),
      ocspst_ocsp: cdktf.numberToTerraform(this._ocspstOcsp),
      ocspst_sg: cdktf.stringToTerraform(this._ocspstSg),
      ocspst_sg_days: cdktf.numberToTerraform(this._ocspstSgDays),
      ocspst_sg_hours: cdktf.numberToTerraform(this._ocspstSgHours),
      ocspst_sg_minutes: cdktf.numberToTerraform(this._ocspstSgMinutes),
      ocspst_sg_timeout: cdktf.numberToTerraform(this._ocspstSgTimeout),
      ocspst_srvr: cdktf.stringToTerraform(this._ocspstSrvr),
      ocspst_srvr_days: cdktf.numberToTerraform(this._ocspstSrvrDays),
      ocspst_srvr_hours: cdktf.numberToTerraform(this._ocspstSrvrHours),
      ocspst_srvr_minutes: cdktf.numberToTerraform(this._ocspstSrvrMinutes),
      ocspst_srvr_timeout: cdktf.numberToTerraform(this._ocspstSrvrTimeout),
      renegotiation_disable: cdktf.numberToTerraform(this._renegotiationDisable),
      require_web_category: cdktf.numberToTerraform(this._requireWebCategory),
      server_name_auto_map: cdktf.numberToTerraform(this._serverNameAutoMap),
      session_cache_size: cdktf.numberToTerraform(this._sessionCacheSize),
      session_cache_timeout: cdktf.numberToTerraform(this._sessionCacheTimeout),
      session_ticket_disable: cdktf.numberToTerraform(this._sessionTicketDisable),
      session_ticket_lifetime: cdktf.numberToTerraform(this._sessionTicketLifetime),
      shared_partition_cipher_template: cdktf.numberToTerraform(this._sharedPartitionCipherTemplate),
      shared_partition_pool: cdktf.numberToTerraform(this._sharedPartitionPool),
      sni_bypass_enable_log: cdktf.numberToTerraform(this._sniBypassEnableLog),
      sni_bypass_expired_cert: cdktf.numberToTerraform(this._sniBypassExpiredCert),
      sni_bypass_explicit_list: cdktf.stringToTerraform(this._sniBypassExplicitList),
      sni_bypass_missing_cert: cdktf.numberToTerraform(this._sniBypassMissingCert),
      sni_enable_log: cdktf.numberToTerraform(this._sniEnableLog),
      ssl_false_start_disable: cdktf.numberToTerraform(this._sslFalseStartDisable),
      ssli_inbound_enable: cdktf.numberToTerraform(this._ssliInboundEnable),
      ssli_logging: cdktf.numberToTerraform(this._ssliLogging),
      sslilogging: cdktf.stringToTerraform(this._sslilogging),
      sslv2_bypass_service_group: cdktf.stringToTerraform(this._sslv2BypassServiceGroup),
      template_cipher: cdktf.stringToTerraform(this._templateCipher),
      template_cipher_shared: cdktf.stringToTerraform(this._templateCipherShared),
      template_hsm: cdktf.stringToTerraform(this._templateHsm),
      user_name_list: cdktf.stringToTerraform(this._userNameList),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      verify_cert_fail_action: cdktf.stringToTerraform(this._verifyCertFailAction),
      version: cdktf.numberToTerraform(this._version),
      bypass_cert_issuer_multi_class_list: cdktf.listMapper(slbTemplateClientSslBypassCertIssuerMultiClassListStructToTerraform, true)(this._bypassCertIssuerMultiClassList.internalValue),
      bypass_cert_san_multi_class_list: cdktf.listMapper(slbTemplateClientSslBypassCertSanMultiClassListStructToTerraform, true)(this._bypassCertSanMultiClassList.internalValue),
      bypass_cert_subject_multi_class_list: cdktf.listMapper(slbTemplateClientSslBypassCertSubjectMultiClassListStructToTerraform, true)(this._bypassCertSubjectMultiClassList.internalValue),
      ca_certs: cdktf.listMapper(slbTemplateClientSslCaCertsToTerraform, true)(this._caCerts.internalValue),
      certificate_issuer_contains_list: cdktf.listMapper(slbTemplateClientSslCertificateIssuerContainsListStructToTerraform, true)(this._certificateIssuerContainsList.internalValue),
      certificate_issuer_ends_with_list: cdktf.listMapper(slbTemplateClientSslCertificateIssuerEndsWithListStructToTerraform, true)(this._certificateIssuerEndsWithList.internalValue),
      certificate_issuer_equals_list: cdktf.listMapper(slbTemplateClientSslCertificateIssuerEqualsListStructToTerraform, true)(this._certificateIssuerEqualsList.internalValue),
      certificate_issuer_starts_with_list: cdktf.listMapper(slbTemplateClientSslCertificateIssuerStartsWithListStructToTerraform, true)(this._certificateIssuerStartsWithList.internalValue),
      certificate_list: cdktf.listMapper(slbTemplateClientSslCertificateListStructToTerraform, true)(this._certificateList.internalValue),
      certificate_san_contains_list: cdktf.listMapper(slbTemplateClientSslCertificateSanContainsListStructToTerraform, true)(this._certificateSanContainsList.internalValue),
      certificate_san_ends_with_list: cdktf.listMapper(slbTemplateClientSslCertificateSanEndsWithListStructToTerraform, true)(this._certificateSanEndsWithList.internalValue),
      certificate_san_equals_list: cdktf.listMapper(slbTemplateClientSslCertificateSanEqualsListStructToTerraform, true)(this._certificateSanEqualsList.internalValue),
      certificate_san_starts_with_list: cdktf.listMapper(slbTemplateClientSslCertificateSanStartsWithListStructToTerraform, true)(this._certificateSanStartsWithList.internalValue),
      certificate_subject_contains_list: cdktf.listMapper(slbTemplateClientSslCertificateSubjectContainsListStructToTerraform, true)(this._certificateSubjectContainsList.internalValue),
      certificate_subject_ends_with_list: cdktf.listMapper(slbTemplateClientSslCertificateSubjectEndsWithListStructToTerraform, true)(this._certificateSubjectEndsWithList.internalValue),
      certificate_subject_equals_list: cdktf.listMapper(slbTemplateClientSslCertificateSubjectEqualsListStructToTerraform, true)(this._certificateSubjectEqualsList.internalValue),
      certificate_subject_starts_with_list: cdktf.listMapper(slbTemplateClientSslCertificateSubjectStartsWithListStructToTerraform, true)(this._certificateSubjectStartsWithList.internalValue),
      cipher_without_prio_list: cdktf.listMapper(slbTemplateClientSslCipherWithoutPrioListStructToTerraform, true)(this._cipherWithoutPrioList.internalValue),
      client_auth_contains_list: cdktf.listMapper(slbTemplateClientSslClientAuthContainsListStructToTerraform, true)(this._clientAuthContainsList.internalValue),
      client_auth_ends_with_list: cdktf.listMapper(slbTemplateClientSslClientAuthEndsWithListStructToTerraform, true)(this._clientAuthEndsWithList.internalValue),
      client_auth_equals_list: cdktf.listMapper(slbTemplateClientSslClientAuthEqualsListStructToTerraform, true)(this._clientAuthEqualsList.internalValue),
      client_auth_starts_with_list: cdktf.listMapper(slbTemplateClientSslClientAuthStartsWithListStructToTerraform, true)(this._clientAuthStartsWithList.internalValue),
      client_ipv4_list: cdktf.listMapper(slbTemplateClientSslClientIpv4ListStructToTerraform, true)(this._clientIpv4List.internalValue),
      client_ipv6_list: cdktf.listMapper(slbTemplateClientSslClientIpv6ListStructToTerraform, true)(this._clientIpv6List.internalValue),
      contains_list: cdktf.listMapper(slbTemplateClientSslContainsListStructToTerraform, true)(this._containsList.internalValue),
      crl_certs: cdktf.listMapper(slbTemplateClientSslCrlCertsToTerraform, true)(this._crlCerts.internalValue),
      ec_list: cdktf.listMapper(slbTemplateClientSslEcListStructToTerraform, true)(this._ecList.internalValue),
      ends_with_list: cdktf.listMapper(slbTemplateClientSslEndsWithListStructToTerraform, true)(this._endsWithList.internalValue),
      equals_list: cdktf.listMapper(slbTemplateClientSslEqualsListStructToTerraform, true)(this._equalsList.internalValue),
      exception_client_ipv4_list: cdktf.listMapper(slbTemplateClientSslExceptionClientIpv4ListStructToTerraform, true)(this._exceptionClientIpv4List.internalValue),
      exception_client_ipv6_list: cdktf.listMapper(slbTemplateClientSslExceptionClientIpv6ListStructToTerraform, true)(this._exceptionClientIpv6List.internalValue),
      exception_server_ipv4_list: cdktf.listMapper(slbTemplateClientSslExceptionServerIpv4ListStructToTerraform, true)(this._exceptionServerIpv4List.internalValue),
      exception_server_ipv6_list: cdktf.listMapper(slbTemplateClientSslExceptionServerIpv6ListStructToTerraform, true)(this._exceptionServerIpv6List.internalValue),
      exception_web_category: slbTemplateClientSslExceptionWebCategoryToTerraform(this._exceptionWebCategory.internalValue),
      exception_web_reputation: slbTemplateClientSslExceptionWebReputationToTerraform(this._exceptionWebReputation.internalValue),
      forward_proxy_trusted_ca_lists: cdktf.listMapper(slbTemplateClientSslForwardProxyTrustedCaListsToTerraform, true)(this._forwardProxyTrustedCaLists.internalValue),
      local_cert_pin_list: slbTemplateClientSslLocalCertPinListStructToTerraform(this._localCertPinList.internalValue),
      multi_class_list: cdktf.listMapper(slbTemplateClientSslMultiClassListStructToTerraform, true)(this._multiClassList.internalValue),
      req_ca_lists: cdktf.listMapper(slbTemplateClientSslReqCaListsToTerraform, true)(this._reqCaLists.internalValue),
      server_ipv4_list: cdktf.listMapper(slbTemplateClientSslServerIpv4ListStructToTerraform, true)(this._serverIpv4List.internalValue),
      server_ipv6_list: cdktf.listMapper(slbTemplateClientSslServerIpv6ListStructToTerraform, true)(this._serverIpv6List.internalValue),
      server_name_list: cdktf.listMapper(slbTemplateClientSslServerNameListStructToTerraform, true)(this._serverNameList.internalValue),
      starts_with_list: cdktf.listMapper(slbTemplateClientSslStartsWithListStructToTerraform, true)(this._startsWithList.internalValue),
      web_category: slbTemplateClientSslWebCategoryToTerraform(this._webCategory.internalValue),
      web_reputation: slbTemplateClientSslWebReputationToTerraform(this._webReputation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_group_list: {
        value: cdktf.stringToHclTerraform(this._adGroupList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sg: {
        value: cdktf.stringToHclTerraform(this._authSg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sg_dn: {
        value: cdktf.numberToHclTerraform(this._authSgDn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_sg_filter: {
        value: cdktf.stringToHclTerraform(this._authSgFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username_attribute: {
        value: cdktf.stringToHclTerraform(this._authUsernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authen_name: {
        value: cdktf.stringToHclTerraform(this._authenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.numberToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bypass_cert_issuer_class_list_name: {
        value: cdktf.stringToHclTerraform(this._bypassCertIssuerClassListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_cert_san_class_list_name: {
        value: cdktf.stringToHclTerraform(this._bypassCertSanClassListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_cert_subject_class_list_name: {
        value: cdktf.stringToHclTerraform(this._bypassCertSubjectClassListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_persistence_list_name: {
        value: cdktf.stringToHclTerraform(this._cachePersistenceListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_insensitive: {
        value: cdktf.numberToHclTerraform(this._caseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      central_cert_pin_list: {
        value: cdktf.numberToHclTerraform(this._centralCertPinList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert_revoke_action: {
        value: cdktf.stringToHclTerraform(this._certRevokeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_unknown_action: {
        value: cdktf.stringToHclTerraform(this._certUnknownAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain_cert: {
        value: cdktf.stringToHclTerraform(this._chainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain_cert_shared_str: {
        value: cdktf.stringToHclTerraform(this._chainCertSharedStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_case_insensitive: {
        value: cdktf.numberToHclTerraform(this._clientAuthCaseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_auth_class_list: {
        value: cdktf.stringToHclTerraform(this._clientAuthClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_notify: {
        value: cdktf.numberToHclTerraform(this._closeNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dgversion: {
        value: cdktf.numberToHclTerraform(this._dgversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dh_type: {
        value: cdktf.stringToHclTerraform(this._dhType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_client_server_auth: {
        value: cdktf.numberToHclTerraform(this._directClientServerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_sslv3: {
        value: cdktf.numberToHclTerraform(this._disableSslv3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      early_data: {
        value: cdktf.numberToHclTerraform(this._earlyData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ssli_ftp_alg: {
        value: cdktf.numberToHclTerraform(this._enableSsliFtpAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_tls_alert_logging: {
        value: cdktf.numberToHclTerraform(this._enableTlsAlertLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exception_ad_group_list: {
        value: cdktf.stringToHclTerraform(this._exceptionAdGroupList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_certificate_issuer_cl_name: {
        value: cdktf.stringToHclTerraform(this._exceptionCertificateIssuerClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_certificate_san_cl_name: {
        value: cdktf.stringToHclTerraform(this._exceptionCertificateSanClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_certificate_subject_cl_name: {
        value: cdktf.stringToHclTerraform(this._exceptionCertificateSubjectClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_sni_cl_name: {
        value: cdktf.stringToHclTerraform(this._exceptionSniClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_user_name_list: {
        value: cdktf.stringToHclTerraform(this._exceptionUserNameList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_hours: {
        value: cdktf.numberToHclTerraform(this._expireHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_passphrase: {
        value: cdktf.stringToHclTerraform(this._forwardPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_alt_sign: {
        value: cdktf.numberToHclTerraform(this._forwardProxyAltSign),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_block_message: {
        value: cdktf.stringToHclTerraform(this._forwardProxyBlockMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_ca_cert: {
        value: cdktf.stringToHclTerraform(this._forwardProxyCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_ca_key: {
        value: cdktf.stringToHclTerraform(this._forwardProxyCaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_cert_cache_limit: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCertCacheLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_cert_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCertCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_cert_expiry: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCertExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_cert_not_ready_action: {
        value: cdktf.stringToHclTerraform(this._forwardProxyCertNotReadyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_cert_revoke_action: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCertRevokeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_cert_unknown_action: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCertUnknownAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_crl_disable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyCrlDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_decrypted_dscp: {
        value: cdktf.numberToHclTerraform(this._forwardProxyDecryptedDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_decrypted_dscp_bypass: {
        value: cdktf.numberToHclTerraform(this._forwardProxyDecryptedDscpBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_enable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_esni_action: {
        value: cdktf.numberToHclTerraform(this._forwardProxyEsniAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_failsafe_disable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyFailsafeDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_hash_persistence_interval: {
        value: cdktf.numberToHclTerraform(this._forwardProxyHashPersistenceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_log_disable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyLogDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_no_shared_cipher_action: {
        value: cdktf.numberToHclTerraform(this._forwardProxyNoSharedCipherAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_no_sni_action: {
        value: cdktf.stringToHclTerraform(this._forwardProxyNoSniAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_ocsp_disable: {
        value: cdktf.numberToHclTerraform(this._forwardProxyOcspDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_require_sni_cert_matched: {
        value: cdktf.stringToHclTerraform(this._forwardProxyRequireSniCertMatched),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_selfsign_redir: {
        value: cdktf.numberToHclTerraform(this._forwardProxySelfsignRedir),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_ssl_version: {
        value: cdktf.numberToHclTerraform(this._forwardProxySslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_proxy_verify_cert_fail_action: {
        value: cdktf.numberToHclTerraform(this._forwardProxyVerifyCertFailAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_alt_cert: {
        value: cdktf.stringToHclTerraform(this._fpAltCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_alt_chain_cert: {
        value: cdktf.stringToHclTerraform(this._fpAltChainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_alt_key: {
        value: cdktf.stringToHclTerraform(this._fpAltKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_alt_passphrase: {
        value: cdktf.stringToHclTerraform(this._fpAltPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_alt_shared: {
        value: cdktf.numberToHclTerraform(this._fpAltShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._fpCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_ca_certificate_shared: {
        value: cdktf.numberToHclTerraform(this._fpCaCertificateShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_ca_chain_cert: {
        value: cdktf.stringToHclTerraform(this._fpCaChainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_ca_key: {
        value: cdktf.stringToHclTerraform(this._fpCaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_ca_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._fpCaKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_ca_key_shared: {
        value: cdktf.numberToHclTerraform(this._fpCaKeyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_ca_shared: {
        value: cdktf.numberToHclTerraform(this._fpCaShared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_cert_ext_aia_ca_issuers: {
        value: cdktf.stringToHclTerraform(this._fpCertExtAiaCaIssuers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_ext_aia_ocsp: {
        value: cdktf.stringToHclTerraform(this._fpCertExtAiaOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_ext_crldp: {
        value: cdktf.stringToHclTerraform(this._fpCertExtCrldp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_fetch_autonat: {
        value: cdktf.stringToHclTerraform(this._fpCertFetchAutonat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_fetch_autonat_precedence: {
        value: cdktf.numberToHclTerraform(this._fpCertFetchAutonatPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_cert_fetch_natpool_name: {
        value: cdktf.stringToHclTerraform(this._fpCertFetchNatpoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_fetch_natpool_name_shared: {
        value: cdktf.stringToHclTerraform(this._fpCertFetchNatpoolNameShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fp_cert_fetch_natpool_precedence: {
        value: cdktf.numberToHclTerraform(this._fpCertFetchNatpoolPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fp_esni_action: {
        value: cdktf.stringToHclTerraform(this._fpEsniAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handshake_logging_enable: {
        value: cdktf.numberToHclTerraform(this._handshakeLoggingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsm_type: {
        value: cdktf.stringToHclTerraform(this._hsmType),
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
      inspect_certificate_issuer_cl_name: {
        value: cdktf.stringToHclTerraform(this._inspectCertificateIssuerClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_certificate_san_cl_name: {
        value: cdktf.stringToHclTerraform(this._inspectCertificateSanClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_certificate_subject_cl_name: {
        value: cdktf.stringToHclTerraform(this._inspectCertificateSubjectClName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_list_name: {
        value: cdktf.stringToHclTerraform(this._inspectListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ja3_enable: {
        value: cdktf.numberToHclTerraform(this._ja3Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ja3_insert_http_header: {
        value: cdktf.stringToHclTerraform(this._ja3InsertHttpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ja3_reject_class_list: {
        value: cdktf.stringToHclTerraform(this._ja3RejectClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ja3_reject_max_number_per_host: {
        value: cdktf.numberToHclTerraform(this._ja3RejectMaxNumberPerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ja3_ttl: {
        value: cdktf.numberToHclTerraform(this._ja3Ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_base_dn_from_cert: {
        value: cdktf.numberToHclTerraform(this._ldapBaseDnFromCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_search_filter: {
        value: cdktf.stringToHclTerraform(this._ldapSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_logging: {
        value: cdktf.numberToHclTerraform(this._localLogging),
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
      no_anti_replay: {
        value: cdktf.numberToHclTerraform(this._noAntiReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_shared_cipher_action: {
        value: cdktf.stringToHclTerraform(this._noSharedCipherAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_ssl_bypass_l4session: {
        value: cdktf.numberToHclTerraform(this._nonSslBypassL4Session),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_ssl_bypass_service_group: {
        value: cdktf.stringToHclTerraform(this._nonSslBypassServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notafter: {
        value: cdktf.numberToHclTerraform(this._notafter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notafterday: {
        value: cdktf.numberToHclTerraform(this._notafterday),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notaftermonth: {
        value: cdktf.numberToHclTerraform(this._notaftermonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notafteryear: {
        value: cdktf.numberToHclTerraform(this._notafteryear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notbefore: {
        value: cdktf.numberToHclTerraform(this._notbefore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notbeforeday: {
        value: cdktf.numberToHclTerraform(this._notbeforeday),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notbeforemonth: {
        value: cdktf.numberToHclTerraform(this._notbeforemonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notbeforeyear: {
        value: cdktf.numberToHclTerraform(this._notbeforeyear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocsp_stapling: {
        value: cdktf.numberToHclTerraform(this._ocspStapling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_ca_cert: {
        value: cdktf.stringToHclTerraform(this._ocspstCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocspst_ocsp: {
        value: cdktf.numberToHclTerraform(this._ocspstOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_sg: {
        value: cdktf.stringToHclTerraform(this._ocspstSg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocspst_sg_days: {
        value: cdktf.numberToHclTerraform(this._ocspstSgDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_sg_hours: {
        value: cdktf.numberToHclTerraform(this._ocspstSgHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_sg_minutes: {
        value: cdktf.numberToHclTerraform(this._ocspstSgMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_sg_timeout: {
        value: cdktf.numberToHclTerraform(this._ocspstSgTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_srvr: {
        value: cdktf.stringToHclTerraform(this._ocspstSrvr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocspst_srvr_days: {
        value: cdktf.numberToHclTerraform(this._ocspstSrvrDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_srvr_hours: {
        value: cdktf.numberToHclTerraform(this._ocspstSrvrHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_srvr_minutes: {
        value: cdktf.numberToHclTerraform(this._ocspstSrvrMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspst_srvr_timeout: {
        value: cdktf.numberToHclTerraform(this._ocspstSrvrTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renegotiation_disable: {
        value: cdktf.numberToHclTerraform(this._renegotiationDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_web_category: {
        value: cdktf.numberToHclTerraform(this._requireWebCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_name_auto_map: {
        value: cdktf.numberToHclTerraform(this._serverNameAutoMap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cache_size: {
        value: cdktf.numberToHclTerraform(this._sessionCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_ticket_disable: {
        value: cdktf.numberToHclTerraform(this._sessionTicketDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_ticket_lifetime: {
        value: cdktf.numberToHclTerraform(this._sessionTicketLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_cipher_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionCipherTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_pool: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_bypass_enable_log: {
        value: cdktf.numberToHclTerraform(this._sniBypassEnableLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_bypass_expired_cert: {
        value: cdktf.numberToHclTerraform(this._sniBypassExpiredCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_bypass_explicit_list: {
        value: cdktf.stringToHclTerraform(this._sniBypassExplicitList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_bypass_missing_cert: {
        value: cdktf.numberToHclTerraform(this._sniBypassMissingCert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_enable_log: {
        value: cdktf.numberToHclTerraform(this._sniEnableLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_false_start_disable: {
        value: cdktf.numberToHclTerraform(this._sslFalseStartDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_inbound_enable: {
        value: cdktf.numberToHclTerraform(this._ssliInboundEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_logging: {
        value: cdktf.numberToHclTerraform(this._ssliLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslilogging: {
        value: cdktf.stringToHclTerraform(this._sslilogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslv2_bypass_service_group: {
        value: cdktf.stringToHclTerraform(this._sslv2BypassServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_cipher: {
        value: cdktf.stringToHclTerraform(this._templateCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_cipher_shared: {
        value: cdktf.stringToHclTerraform(this._templateCipherShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_hsm: {
        value: cdktf.stringToHclTerraform(this._templateHsm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_list: {
        value: cdktf.stringToHclTerraform(this._userNameList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_cert_fail_action: {
        value: cdktf.stringToHclTerraform(this._verifyCertFailAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bypass_cert_issuer_multi_class_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslBypassCertIssuerMultiClassListStructToHclTerraform, true)(this._bypassCertIssuerMultiClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslBypassCertIssuerMultiClassListStructList",
      },
      bypass_cert_san_multi_class_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslBypassCertSanMultiClassListStructToHclTerraform, true)(this._bypassCertSanMultiClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslBypassCertSanMultiClassListStructList",
      },
      bypass_cert_subject_multi_class_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslBypassCertSubjectMultiClassListStructToHclTerraform, true)(this._bypassCertSubjectMultiClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslBypassCertSubjectMultiClassListStructList",
      },
      ca_certs: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCaCertsToHclTerraform, true)(this._caCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCaCertsList",
      },
      certificate_issuer_contains_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateIssuerContainsListStructToHclTerraform, true)(this._certificateIssuerContainsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateIssuerContainsListStructList",
      },
      certificate_issuer_ends_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateIssuerEndsWithListStructToHclTerraform, true)(this._certificateIssuerEndsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateIssuerEndsWithListStructList",
      },
      certificate_issuer_equals_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateIssuerEqualsListStructToHclTerraform, true)(this._certificateIssuerEqualsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateIssuerEqualsListStructList",
      },
      certificate_issuer_starts_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateIssuerStartsWithListStructToHclTerraform, true)(this._certificateIssuerStartsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateIssuerStartsWithListStructList",
      },
      certificate_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateListStructToHclTerraform, true)(this._certificateList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateListStructList",
      },
      certificate_san_contains_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSanContainsListStructToHclTerraform, true)(this._certificateSanContainsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSanContainsListStructList",
      },
      certificate_san_ends_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSanEndsWithListStructToHclTerraform, true)(this._certificateSanEndsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSanEndsWithListStructList",
      },
      certificate_san_equals_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSanEqualsListStructToHclTerraform, true)(this._certificateSanEqualsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSanEqualsListStructList",
      },
      certificate_san_starts_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSanStartsWithListStructToHclTerraform, true)(this._certificateSanStartsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSanStartsWithListStructList",
      },
      certificate_subject_contains_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSubjectContainsListStructToHclTerraform, true)(this._certificateSubjectContainsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSubjectContainsListStructList",
      },
      certificate_subject_ends_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSubjectEndsWithListStructToHclTerraform, true)(this._certificateSubjectEndsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSubjectEndsWithListStructList",
      },
      certificate_subject_equals_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSubjectEqualsListStructToHclTerraform, true)(this._certificateSubjectEqualsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSubjectEqualsListStructList",
      },
      certificate_subject_starts_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCertificateSubjectStartsWithListStructToHclTerraform, true)(this._certificateSubjectStartsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCertificateSubjectStartsWithListStructList",
      },
      cipher_without_prio_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCipherWithoutPrioListStructToHclTerraform, true)(this._cipherWithoutPrioList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCipherWithoutPrioListStructList",
      },
      client_auth_contains_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientAuthContainsListStructToHclTerraform, true)(this._clientAuthContainsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientAuthContainsListStructList",
      },
      client_auth_ends_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientAuthEndsWithListStructToHclTerraform, true)(this._clientAuthEndsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientAuthEndsWithListStructList",
      },
      client_auth_equals_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientAuthEqualsListStructToHclTerraform, true)(this._clientAuthEqualsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientAuthEqualsListStructList",
      },
      client_auth_starts_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientAuthStartsWithListStructToHclTerraform, true)(this._clientAuthStartsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientAuthStartsWithListStructList",
      },
      client_ipv4_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientIpv4ListStructToHclTerraform, true)(this._clientIpv4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientIpv4ListStructList",
      },
      client_ipv6_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslClientIpv6ListStructToHclTerraform, true)(this._clientIpv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslClientIpv6ListStructList",
      },
      contains_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslContainsListStructToHclTerraform, true)(this._containsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslContainsListStructList",
      },
      crl_certs: {
        value: cdktf.listMapperHcl(slbTemplateClientSslCrlCertsToHclTerraform, true)(this._crlCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslCrlCertsList",
      },
      ec_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslEcListStructToHclTerraform, true)(this._ecList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslEcListStructList",
      },
      ends_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslEndsWithListStructToHclTerraform, true)(this._endsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslEndsWithListStructList",
      },
      equals_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslEqualsListStructToHclTerraform, true)(this._equalsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslEqualsListStructList",
      },
      exception_client_ipv4_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslExceptionClientIpv4ListStructToHclTerraform, true)(this._exceptionClientIpv4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionClientIpv4ListStructList",
      },
      exception_client_ipv6_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslExceptionClientIpv6ListStructToHclTerraform, true)(this._exceptionClientIpv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionClientIpv6ListStructList",
      },
      exception_server_ipv4_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslExceptionServerIpv4ListStructToHclTerraform, true)(this._exceptionServerIpv4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionServerIpv4ListStructList",
      },
      exception_server_ipv6_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslExceptionServerIpv6ListStructToHclTerraform, true)(this._exceptionServerIpv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionServerIpv6ListStructList",
      },
      exception_web_category: {
        value: slbTemplateClientSslExceptionWebCategoryToHclTerraform(this._exceptionWebCategory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionWebCategoryList",
      },
      exception_web_reputation: {
        value: slbTemplateClientSslExceptionWebReputationToHclTerraform(this._exceptionWebReputation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslExceptionWebReputationList",
      },
      forward_proxy_trusted_ca_lists: {
        value: cdktf.listMapperHcl(slbTemplateClientSslForwardProxyTrustedCaListsToHclTerraform, true)(this._forwardProxyTrustedCaLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslForwardProxyTrustedCaListsList",
      },
      local_cert_pin_list: {
        value: slbTemplateClientSslLocalCertPinListStructToHclTerraform(this._localCertPinList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslLocalCertPinListStructList",
      },
      multi_class_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslMultiClassListStructToHclTerraform, true)(this._multiClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslMultiClassListStructList",
      },
      req_ca_lists: {
        value: cdktf.listMapperHcl(slbTemplateClientSslReqCaListsToHclTerraform, true)(this._reqCaLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslReqCaListsList",
      },
      server_ipv4_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslServerIpv4ListStructToHclTerraform, true)(this._serverIpv4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslServerIpv4ListStructList",
      },
      server_ipv6_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslServerIpv6ListStructToHclTerraform, true)(this._serverIpv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslServerIpv6ListStructList",
      },
      server_name_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslServerNameListStructToHclTerraform, true)(this._serverNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslServerNameListStructList",
      },
      starts_with_list: {
        value: cdktf.listMapperHcl(slbTemplateClientSslStartsWithListStructToHclTerraform, true)(this._startsWithList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslStartsWithListStructList",
      },
      web_category: {
        value: slbTemplateClientSslWebCategoryToHclTerraform(this._webCategory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslWebCategoryList",
      },
      web_reputation: {
        value: slbTemplateClientSslWebReputationToHclTerraform(this._webReputation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslWebReputationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
