// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateClientSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forward proxy bypass if ad-group matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ad_group_list SlbTemplateClientSsl#ad_group_list}
  */
  readonly adGroupList?: string;
  /**
  * 'fatal': Log fatal alerts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#alert_type SlbTemplateClientSsl#alert_type}
  */
  readonly alertType?: string;
  /**
  * Specify authorization LDAP service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#auth_sg SlbTemplateClientSsl#auth_sg}
  */
  readonly authSg?: string;
  /**
  * Use Subject DN as LDAP search base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#auth_sg_dn SlbTemplateClientSsl#auth_sg_dn}
  */
  readonly authSgDn?: number;
  /**
  * Specify LDAP search filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#auth_sg_filter SlbTemplateClientSsl#auth_sg_filter}
  */
  readonly authSgFilter?: string;
  /**
  * Specify the Username Field in the Client Certificate(If multi-fields are specificed, prior one has higher priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#auth_username SlbTemplateClientSsl#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Specify attribute name of username for client SSL authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#auth_username_attribute SlbTemplateClientSsl#auth_username_attribute}
  */
  readonly authUsernameAttribute?: string;
  /**
  * Specify authorization LDAP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#authen_name SlbTemplateClientSsl#authen_name}
  */
  readonly authenName?: string;
  /**
  * Specify LDAP server for client SSL authorizaiton
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#authorization SlbTemplateClientSsl#authorization}
  */
  readonly authorization?: number;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_issuer_class_list_name SlbTemplateClientSsl#bypass_cert_issuer_class_list_name}
  */
  readonly bypassCertIssuerClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_san_class_list_name SlbTemplateClientSsl#bypass_cert_san_class_list_name}
  */
  readonly bypassCertSanClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_subject_class_list_name SlbTemplateClientSsl#bypass_cert_subject_class_list_name}
  */
  readonly bypassCertSubjectClassListName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cache_persistence_list_name SlbTemplateClientSsl#cache_persistence_list_name}
  */
  readonly cachePersistenceListName?: string;
  /**
  * Case insensitive forward proxy bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#case_insensitive SlbTemplateClientSsl#case_insensitive}
  */
  readonly caseInsensitive?: number;
  /**
  * Forward proxy bypass if SNI string is contained in central updated cert-pinning-candidate list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#central_cert_pin_list SlbTemplateClientSsl#central_cert_pin_list}
  */
  readonly centralCertPinList?: number;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cert_revoke_action SlbTemplateClientSsl#cert_revoke_action}
  */
  readonly certRevokeAction?: string;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cert_unknown_action SlbTemplateClientSsl#cert_unknown_action}
  */
  readonly certUnknownAction?: string;
  /**
  * Chain Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#chain_cert SlbTemplateClientSsl#chain_cert}
  */
  readonly chainCert?: string;
  /**
  * Chain Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#chain_cert_shared_str SlbTemplateClientSsl#chain_cert_shared_str}
  */
  readonly chainCertSharedStr?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#class_list_name SlbTemplateClientSsl#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Case insensitive forward proxy client auth bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_case_insensitive SlbTemplateClientSsl#client_auth_case_insensitive}
  */
  readonly clientAuthCaseInsensitive?: number;
  /**
  * Forward proxy client auth bypass if SNI string matches class-list (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_class_list SlbTemplateClientSsl#client_auth_class_list}
  */
  readonly clientAuthClassList?: string;
  /**
  * 'Ignore': Don't request client certificate; 'Require': Require client certificate; 'Request': Request client certificate;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_certificate SlbTemplateClientSsl#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Send close notification when terminate connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#close_notify SlbTemplateClientSsl#close_notify}
  */
  readonly closeNotify?: number;
  /**
  * Lower TLS/SSL version can be downgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#dgversion SlbTemplateClientSsl#dgversion}
  */
  readonly dgversion?: number;
  /**
  * '1024': 1024; '1024-dsa': 1024-dsa; '2048': 2048;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#dh_type SlbTemplateClientSsl#dh_type}
  */
  readonly dhType?: string;
  /**
  * Let backend server does SSL client authentication directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#direct_client_server_auth SlbTemplateClientSsl#direct_client_server_auth}
  */
  readonly directClientServerAuth?: number;
  /**
  * Reject Client requests for SSL version 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#disable_sslv3 SlbTemplateClientSsl#disable_sslv3}
  */
  readonly disableSslv3?: number;
  /**
  * Enable TLS 1.3 early data (0-RTT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#early_data SlbTemplateClientSsl#early_data}
  */
  readonly earlyData?: number;
  /**
  * Enable SSLi FTP over TLS support at which port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#enable_ssli_ftp_alg SlbTemplateClientSsl#enable_ssli_ftp_alg}
  */
  readonly enableSsliFtpAlg?: number;
  /**
  * Enable TLS alert logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#enable_tls_alert_logging SlbTemplateClientSsl#enable_tls_alert_logging}
  */
  readonly enableTlsAlertLogging?: number;
  /**
  * Exceptions to forward proxy bypass if ad-group matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_ad_group_list SlbTemplateClientSsl#exception_ad_group_list}
  */
  readonly exceptionAdGroupList?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_certificate_issuer_cl_name SlbTemplateClientSsl#exception_certificate_issuer_cl_name}
  */
  readonly exceptionCertificateIssuerClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_certificate_san_cl_name SlbTemplateClientSsl#exception_certificate_san_cl_name}
  */
  readonly exceptionCertificateSanClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_certificate_subject_cl_name SlbTemplateClientSsl#exception_certificate_subject_cl_name}
  */
  readonly exceptionCertificateSubjectClName?: string;
  /**
  * Exceptions to forward-proxy-bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_sni_cl_name SlbTemplateClientSsl#exception_sni_cl_name}
  */
  readonly exceptionSniClName?: string;
  /**
  * Exceptions to forward proxy bypass if user-name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_user_name_list SlbTemplateClientSsl#exception_user_name_list}
  */
  readonly exceptionUserNameList?: string;
  /**
  * Certificate lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#expire_hours SlbTemplateClientSsl#expire_hours}
  */
  readonly expireHours?: number;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_passphrase SlbTemplateClientSsl#forward_passphrase}
  */
  readonly forwardPassphrase?: string;
  /**
  * Forward proxy alternate signing cert and key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_alt_sign SlbTemplateClientSsl#forward_proxy_alt_sign}
  */
  readonly forwardProxyAltSign?: number;
  /**
  * Message to be included on the block page (Message, enclose in quotes if spaces are present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_block_message SlbTemplateClientSsl#forward_proxy_block_message}
  */
  readonly forwardProxyBlockMessage?: string;
  /**
  * CA Certificate for forward proxy (SSL forward proxy CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_ca_cert SlbTemplateClientSsl#forward_proxy_ca_cert}
  */
  readonly forwardProxyCaCert?: string;
  /**
  * CA Private Key for forward proxy (SSL forward proxy CA Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_ca_key SlbTemplateClientSsl#forward_proxy_ca_key}
  */
  readonly forwardProxyCaKey?: string;
  /**
  * Certificate cache size limit, default is 524288 (set to 0 for unlimited size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_cache_limit SlbTemplateClientSsl#forward_proxy_cert_cache_limit}
  */
  readonly forwardProxyCertCacheLimit?: number;
  /**
  * Certificate cache timeout, default is 1 hour (seconds, set to 0 for never timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_cache_timeout SlbTemplateClientSsl#forward_proxy_cert_cache_timeout}
  */
  readonly forwardProxyCertCacheTimeout?: number;
  /**
  * Adjust certificate expiry relative to the time when it is created on the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_expiry SlbTemplateClientSsl#forward_proxy_cert_expiry}
  */
  readonly forwardProxyCertExpiry?: number;
  /**
  * 'bypass': bypass the connection; 'reset': reset the connection; 'intercept': wait for cert and then inspect the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_not_ready_action SlbTemplateClientSsl#forward_proxy_cert_not_ready_action}
  */
  readonly forwardProxyCertNotReadyAction?: string;
  /**
  * Action taken if a certificate is irreversibly revoked, bypass SSLi processing by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_revoke_action SlbTemplateClientSsl#forward_proxy_cert_revoke_action}
  */
  readonly forwardProxyCertRevokeAction?: number;
  /**
  * Action taken if a certificate revocation status is unknown, bypass SSLi processing by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_cert_unknown_action SlbTemplateClientSsl#forward_proxy_cert_unknown_action}
  */
  readonly forwardProxyCertUnknownAction?: number;
  /**
  * Disable Certificate Revocation List checking for forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_crl_disable SlbTemplateClientSsl#forward_proxy_crl_disable}
  */
  readonly forwardProxyCrlDisable?: number;
  /**
  * Apply a DSCP to decrypted and bypassed traffic (DSCP to apply to decrypted traffic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_decrypted_dscp SlbTemplateClientSsl#forward_proxy_decrypted_dscp}
  */
  readonly forwardProxyDecryptedDscp?: number;
  /**
  * DSCP to apply to bypassed traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_decrypted_dscp_bypass SlbTemplateClientSsl#forward_proxy_decrypted_dscp_bypass}
  */
  readonly forwardProxyDecryptedDscpBypass?: number;
  /**
  * Enable SSL forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_enable SlbTemplateClientSsl#forward_proxy_enable}
  */
  readonly forwardProxyEnable?: number;
  /**
  * Action taken if receiving encrypted server name indication extension in client hello MSG, bypass the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_esni_action SlbTemplateClientSsl#forward_proxy_esni_action}
  */
  readonly forwardProxyEsniAction?: number;
  /**
  * Disable Failsafe for SSL forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_failsafe_disable SlbTemplateClientSsl#forward_proxy_failsafe_disable}
  */
  readonly forwardProxyFailsafeDisable?: number;
  /**
  * Set the time interval to save the hash persistence certs (Interval value, in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_hash_persistence_interval SlbTemplateClientSsl#forward_proxy_hash_persistence_interval}
  */
  readonly forwardProxyHashPersistenceInterval?: number;
  /**
  * Disable SSL forward proxy logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_log_disable SlbTemplateClientSsl#forward_proxy_log_disable}
  */
  readonly forwardProxyLogDisable?: number;
  /**
  * Action taken if handshake fails due to no shared ciper, close the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_no_shared_cipher_action SlbTemplateClientSsl#forward_proxy_no_shared_cipher_action}
  */
  readonly forwardProxyNoSharedCipherAction?: number;
  /**
  * 'intercept': intercept in no SNI case; 'bypass': bypass in no SNI case; 'reset': reset in no SNI case;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_no_sni_action SlbTemplateClientSsl#forward_proxy_no_sni_action}
  */
  readonly forwardProxyNoSniAction?: string;
  /**
  * Disable ocsp-stapling for forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_ocsp_disable SlbTemplateClientSsl#forward_proxy_ocsp_disable}
  */
  readonly forwardProxyOcspDisable?: number;
  /**
  * 'no-match-action-inspect': Inspected if not matched; 'no-match-action-drop': Dropped if not matched;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_require_sni_cert_matched SlbTemplateClientSsl#forward_proxy_require_sni_cert_matched}
  */
  readonly forwardProxyRequireSniCertMatched?: string;
  /**
  * Redirect connections to pages with self signed certs to a warning page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_selfsign_redir SlbTemplateClientSsl#forward_proxy_selfsign_redir}
  */
  readonly forwardProxySelfsignRedir?: number;
  /**
  * TLS/SSL version, default is TLS1.2 (TLS/SSL version: 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_ssl_version SlbTemplateClientSsl#forward_proxy_ssl_version}
  */
  readonly forwardProxySslVersion?: number;
  /**
  * Action taken if certificate verification fails, close the connection by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_verify_cert_fail_action SlbTemplateClientSsl#forward_proxy_verify_cert_fail_action}
  */
  readonly forwardProxyVerifyCertFailAction?: number;
  /**
  * CA Certificate for forward proxy alternate signing (Certificate name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_alt_cert SlbTemplateClientSsl#fp_alt_cert}
  */
  readonly fpAltCert?: string;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_alt_chain_cert SlbTemplateClientSsl#fp_alt_chain_cert}
  */
  readonly fpAltChainCert?: string;
  /**
  * CA Private Key for forward proxy alternate signing (Key name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_alt_key SlbTemplateClientSsl#fp_alt_key}
  */
  readonly fpAltKey?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_alt_passphrase SlbTemplateClientSsl#fp_alt_passphrase}
  */
  readonly fpAltPassphrase?: string;
  /**
  * Alternate CA Certificate and Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_alt_shared SlbTemplateClientSsl#fp_alt_shared}
  */
  readonly fpAltShared?: number;
  /**
  * CA Certificate for forward proxy (SSL forward proxy CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_certificate SlbTemplateClientSsl#fp_ca_certificate}
  */
  readonly fpCaCertificate?: string;
  /**
  * CA Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_certificate_shared SlbTemplateClientSsl#fp_ca_certificate_shared}
  */
  readonly fpCaCertificateShared?: number;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_chain_cert SlbTemplateClientSsl#fp_ca_chain_cert}
  */
  readonly fpCaChainCert?: string;
  /**
  * CA Private Key for forward proxy (SSL forward proxy CA Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_key SlbTemplateClientSsl#fp_ca_key}
  */
  readonly fpCaKey?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_key_passphrase SlbTemplateClientSsl#fp_ca_key_passphrase}
  */
  readonly fpCaKeyPassphrase?: string;
  /**
  * CA Private Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_key_shared SlbTemplateClientSsl#fp_ca_key_shared}
  */
  readonly fpCaKeyShared?: number;
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_ca_shared SlbTemplateClientSsl#fp_ca_shared}
  */
  readonly fpCaShared?: number;
  /**
  * CA Issuers (Authority Information Access URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_ext_aia_ca_issuers SlbTemplateClientSsl#fp_cert_ext_aia_ca_issuers}
  */
  readonly fpCertExtAiaCaIssuers?: string;
  /**
  * OCSP (Authority Information Access URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_ext_aia_ocsp SlbTemplateClientSsl#fp_cert_ext_aia_ocsp}
  */
  readonly fpCertExtAiaOcsp?: string;
  /**
  * CRL Distribution Point (CRL Distribution Point URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_ext_crldp SlbTemplateClientSsl#fp_cert_ext_crldp}
  */
  readonly fpCertExtCrldp?: string;
  /**
  * 'auto': Configure auto NAT for server certificate fetching;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_fetch_autonat SlbTemplateClientSsl#fp_cert_fetch_autonat}
  */
  readonly fpCertFetchAutonat?: string;
  /**
  * Set this NAT pool as higher precedence than other source NAT like configued under template policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_fetch_autonat_precedence SlbTemplateClientSsl#fp_cert_fetch_autonat_precedence}
  */
  readonly fpCertFetchAutonatPrecedence?: number;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_name SlbTemplateClientSsl#fp_cert_fetch_natpool_name}
  */
  readonly fpCertFetchNatpoolName?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_name_shared SlbTemplateClientSsl#fp_cert_fetch_natpool_name_shared}
  */
  readonly fpCertFetchNatpoolNameShared?: string;
  /**
  * Set this NAT pool as higher precedence than other source NAT like configued under template policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_cert_fetch_natpool_precedence SlbTemplateClientSsl#fp_cert_fetch_natpool_precedence}
  */
  readonly fpCertFetchNatpoolPrecedence?: number;
  /**
  * 'bypass': bypass SSLi processing; 'drop': close the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_esni_action SlbTemplateClientSsl#fp_esni_action}
  */
  readonly fpEsniAction?: string;
  /**
  * Enable SSL handshake logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#handshake_logging_enable SlbTemplateClientSsl#handshake_logging_enable}
  */
  readonly handshakeLoggingEnable?: number;
  /**
  * 'thales-embed': Thales embed key; 'thales-hwcrhk': Thales hwcrhk Key;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#hsm_type SlbTemplateClientSsl#hsm_type}
  */
  readonly hsmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#id SlbTemplateClientSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Forward proxy Inspect if Certificate issuer matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#inspect_certificate_issuer_cl_name SlbTemplateClientSsl#inspect_certificate_issuer_cl_name}
  */
  readonly inspectCertificateIssuerClName?: string;
  /**
  * Forward proxy Inspect if Certificate Subject Alternative Name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#inspect_certificate_san_cl_name SlbTemplateClientSsl#inspect_certificate_san_cl_name}
  */
  readonly inspectCertificateSanClName?: string;
  /**
  * Forward proxy Inspect if Certificate Subject matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#inspect_certificate_subject_cl_name SlbTemplateClientSsl#inspect_certificate_subject_cl_name}
  */
  readonly inspectCertificateSubjectClName?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#inspect_list_name SlbTemplateClientSsl#inspect_list_name}
  */
  readonly inspectListName?: string;
  /**
  * Enable JA3 features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja3_enable SlbTemplateClientSsl#ja3_enable}
  */
  readonly ja3Enable?: number;
  /**
  * Insert the JA3 hash into this request as a HTTP header (HTTP Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja3_insert_http_header SlbTemplateClientSsl#ja3_insert_http_header}
  */
  readonly ja3InsertHttpHeader?: string;
  /**
  * Drop request if the JA3 hash matches this class-list (type string-case-insensitive) (Class-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja3_reject_class_list SlbTemplateClientSsl#ja3_reject_class_list}
  */
  readonly ja3RejectClassList?: string;
  /**
  * Drop request if numbers of JA3 of this client address exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja3_reject_max_number_per_host SlbTemplateClientSsl#ja3_reject_max_number_per_host}
  */
  readonly ja3RejectMaxNumberPerHost?: number;
  /**
  * seconds to keep each JA3 record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja3_ttl SlbTemplateClientSsl#ja3_ttl}
  */
  readonly ja3Ttl?: number;
  /**
  * Enable JA4 features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja4_enable SlbTemplateClientSsl#ja4_enable}
  */
  readonly ja4Enable?: number;
  /**
  * Insert the JA4 hash into this request as a HTTP header (HTTP Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja4_insert_http_header SlbTemplateClientSsl#ja4_insert_http_header}
  */
  readonly ja4InsertHttpHeader?: string;
  /**
  * Drop request if the JA4 hash matches this class-list (type string-case-insensitive) (Class-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja4_reject_class_list SlbTemplateClientSsl#ja4_reject_class_list}
  */
  readonly ja4RejectClassList?: string;
  /**
  * Drop request if numbers of JA4 of this client address exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja4_reject_max_number_per_host SlbTemplateClientSsl#ja4_reject_max_number_per_host}
  */
  readonly ja4RejectMaxNumberPerHost?: number;
  /**
  * seconds to keep each JA4 record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ja4_ttl SlbTemplateClientSsl#ja4_ttl}
  */
  readonly ja4Ttl?: number;
  /**
  * Use Subject DN as LDAP search base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ldap_base_dn_from_cert SlbTemplateClientSsl#ldap_base_dn_from_cert}
  */
  readonly ldapBaseDnFromCert?: number;
  /**
  * Specify LDAP search filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ldap_search_filter SlbTemplateClientSsl#ldap_search_filter}
  */
  readonly ldapSearchFilter?: string;
  /**
  * Enable local logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#local_logging SlbTemplateClientSsl#local_logging}
  */
  readonly localLogging?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#name SlbTemplateClientSsl#name}
  */
  readonly name: string;
  /**
  * Disable anti-replay protection for TLS 1.3 early data (0-RTT data)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#no_anti_replay SlbTemplateClientSsl#no_anti_replay}
  */
  readonly noAntiReplay?: number;
  /**
  * 'bypass': bypass SSLi processing; 'drop': close the connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#no_shared_cipher_action SlbTemplateClientSsl#no_shared_cipher_action}
  */
  readonly noSharedCipherAction?: string;
  /**
  * Handle the non-ssl session as L4 for performance optimization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#non_ssl_bypass_l4session SlbTemplateClientSsl#non_ssl_bypass_l4session}
  */
  readonly nonSslBypassL4Session?: number;
  /**
  * Service Group for Bypass non-ssl traffic (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#non_ssl_bypass_service_group SlbTemplateClientSsl#non_ssl_bypass_service_group}
  */
  readonly nonSslBypassServiceGroup?: string;
  /**
  * notAfter date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notafter SlbTemplateClientSsl#notafter}
  */
  readonly notafter?: number;
  /**
  * Day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notafterday SlbTemplateClientSsl#notafterday}
  */
  readonly notafterday?: number;
  /**
  * Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notaftermonth SlbTemplateClientSsl#notaftermonth}
  */
  readonly notaftermonth?: number;
  /**
  * Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notafteryear SlbTemplateClientSsl#notafteryear}
  */
  readonly notafteryear?: number;
  /**
  * notBefore date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notbefore SlbTemplateClientSsl#notbefore}
  */
  readonly notbefore?: number;
  /**
  * Day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notbeforeday SlbTemplateClientSsl#notbeforeday}
  */
  readonly notbeforeday?: number;
  /**
  * Month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notbeforemonth SlbTemplateClientSsl#notbeforemonth}
  */
  readonly notbeforemonth?: number;
  /**
  * Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#notbeforeyear SlbTemplateClientSsl#notbeforeyear}
  */
  readonly notbeforeyear?: number;
  /**
  * Config OCSP stapling support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocsp_stapling SlbTemplateClientSsl#ocsp_stapling}
  */
  readonly ocspStapling?: number;
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_ca_cert SlbTemplateClientSsl#ocspst_ca_cert}
  */
  readonly ocspstCaCert?: string;
  /**
  * Specify OCSP Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_ocsp SlbTemplateClientSsl#ocspst_ocsp}
  */
  readonly ocspstOcsp?: number;
  /**
  * Specify authentication service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_sg SlbTemplateClientSsl#ocspst_sg}
  */
  readonly ocspstSg?: string;
  /**
  * Specify update period, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_sg_days SlbTemplateClientSsl#ocspst_sg_days}
  */
  readonly ocspstSgDays?: number;
  /**
  * Specify update period, in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_sg_hours SlbTemplateClientSsl#ocspst_sg_hours}
  */
  readonly ocspstSgHours?: number;
  /**
  * Specify update period, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_sg_minutes SlbTemplateClientSsl#ocspst_sg_minutes}
  */
  readonly ocspstSgMinutes?: number;
  /**
  * Specify retry timeout (Default is 30 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_sg_timeout SlbTemplateClientSsl#ocspst_sg_timeout}
  */
  readonly ocspstSgTimeout?: number;
  /**
  * Specify OCSP authentication server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_srvr SlbTemplateClientSsl#ocspst_srvr}
  */
  readonly ocspstSrvr?: string;
  /**
  * Specify update period, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_srvr_days SlbTemplateClientSsl#ocspst_srvr_days}
  */
  readonly ocspstSrvrDays?: number;
  /**
  * Specify update period, in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_srvr_hours SlbTemplateClientSsl#ocspst_srvr_hours}
  */
  readonly ocspstSrvrHours?: number;
  /**
  * Specify update period, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_srvr_minutes SlbTemplateClientSsl#ocspst_srvr_minutes}
  */
  readonly ocspstSrvrMinutes?: number;
  /**
  * Specify retry timeout (Default is 30 mins)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ocspst_srvr_timeout SlbTemplateClientSsl#ocspst_srvr_timeout}
  */
  readonly ocspstSrvrTimeout?: number;
  /**
  * Disable SSL renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#renegotiation_disable SlbTemplateClientSsl#renegotiation_disable}
  */
  readonly renegotiationDisable?: number;
  /**
  * SNI is required to match configured certificate subject or SAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#require_sni_cert_matched SlbTemplateClientSsl#require_sni_cert_matched}
  */
  readonly requireSniCertMatched?: number;
  /**
  * Wait for web category to be resolved before taking bypass decision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#require_web_category SlbTemplateClientSsl#require_web_category}
  */
  readonly requireWebCategory?: number;
  /**
  * Enable automatic mapping of server name indication in Client hello extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name_auto_map SlbTemplateClientSsl#server_name_auto_map}
  */
  readonly serverNameAutoMap?: number;
  /**
  * Session Cache Size (Maximum cache size. Default value 0 (Session ID reuse disabled))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#session_cache_size SlbTemplateClientSsl#session_cache_size}
  */
  readonly sessionCacheSize?: number;
  /**
  * Session Cache Timeout (Timeout value, in seconds. Default value 0 (Session cache timeout disabled))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#session_cache_timeout SlbTemplateClientSsl#session_cache_timeout}
  */
  readonly sessionCacheTimeout?: number;
  /**
  * Enable SSL session key logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#session_key_logging_enable SlbTemplateClientSsl#session_key_logging_enable}
  */
  readonly sessionKeyLoggingEnable?: number;
  /**
  * Disable client side session ticket support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#session_ticket_disable SlbTemplateClientSsl#session_ticket_disable}
  */
  readonly sessionTicketDisable?: number;
  /**
  * Session ticket lifetime in seconds from stateless session resumption (Lifetime value in seconds. Default value 0 (Session ticket lifetime is 7200 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#session_ticket_lifetime SlbTemplateClientSsl#session_ticket_lifetime}
  */
  readonly sessionTicketLifetime?: number;
  /**
  * Reference a cipher template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#shared_partition_cipher_template SlbTemplateClientSsl#shared_partition_cipher_template}
  */
  readonly sharedPartitionCipherTemplate?: number;
  /**
  * Reference a NAT pool or pool group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#shared_partition_pool SlbTemplateClientSsl#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Enable logging when bypass event happens, disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_bypass_enable_log SlbTemplateClientSsl#sni_bypass_enable_log}
  */
  readonly sniBypassEnableLog?: number;
  /**
  * Bypass when certificate expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_bypass_expired_cert SlbTemplateClientSsl#sni_bypass_expired_cert}
  */
  readonly sniBypassExpiredCert?: number;
  /**
  * Bypass when matched explicit bypass list (Specify class list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_bypass_explicit_list SlbTemplateClientSsl#sni_bypass_explicit_list}
  */
  readonly sniBypassExplicitList?: string;
  /**
  * Bypass when missing cert/key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_bypass_missing_cert SlbTemplateClientSsl#sni_bypass_missing_cert}
  */
  readonly sniBypassMissingCert?: number;
  /**
  * Enable logging of sni-auto-map failures. Disable by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_enable_log SlbTemplateClientSsl#sni_enable_log}
  */
  readonly sniEnableLog?: number;
  /**
  * disable SSL False Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ssl_false_start_disable SlbTemplateClientSsl#ssl_false_start_disable}
  */
  readonly sslFalseStartDisable?: number;
  /**
  * Enable inbound SSLi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ssli_inbound_enable SlbTemplateClientSsl#ssli_inbound_enable}
  */
  readonly ssliInboundEnable?: number;
  /**
  * SSLi logging level, default is error logging only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ssli_logging SlbTemplateClientSsl#ssli_logging}
  */
  readonly ssliLogging?: number;
  /**
  * 'disable': Disable all logging; 'all': enable all logging(error, info);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sslilogging SlbTemplateClientSsl#sslilogging}
  */
  readonly sslilogging?: string;
  /**
  * Service Group for Bypass SSLV2 (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sslv2_bypass_service_group SlbTemplateClientSsl#sslv2_bypass_service_group}
  */
  readonly sslv2BypassServiceGroup?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#template_cipher SlbTemplateClientSsl#template_cipher}
  */
  readonly templateCipher?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#template_cipher_shared SlbTemplateClientSsl#template_cipher_shared}
  */
  readonly templateCipherShared?: string;
  /**
  * HSM Template (HSM Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#template_hsm SlbTemplateClientSsl#template_hsm}
  */
  readonly templateHsm?: string;
  /**
  * Forward proxy bypass if user-name matches class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#user_name_list SlbTemplateClientSsl#user_name_list}
  */
  readonly userNameList?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#user_tag SlbTemplateClientSsl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#uuid SlbTemplateClientSsl#uuid}
  */
  readonly uuid?: string;
  /**
  * 'bypass': bypass SSLi processing; 'continue': continue the connection; 'drop': close the connection; 'block': block the connection with a warning page;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#verify_cert_fail_action SlbTemplateClientSsl#verify_cert_fail_action}
  */
  readonly verifyCertFailAction?: string;
  /**
  * TLS/SSL version, default is the highest number supported (TLS/SSL version: 30-SSLv3.0, 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#version SlbTemplateClientSsl#version}
  */
  readonly version?: number;
  /**
  * bypass_cert_issuer_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_issuer_multi_class_list SlbTemplateClientSsl#bypass_cert_issuer_multi_class_list}
  */
  readonly bypassCertIssuerMultiClassList?: SlbTemplateClientSslBypassCertIssuerMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * bypass_cert_san_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_san_multi_class_list SlbTemplateClientSsl#bypass_cert_san_multi_class_list}
  */
  readonly bypassCertSanMultiClassList?: SlbTemplateClientSslBypassCertSanMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * bypass_cert_subject_multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_subject_multi_class_list SlbTemplateClientSsl#bypass_cert_subject_multi_class_list}
  */
  readonly bypassCertSubjectMultiClassList?: SlbTemplateClientSslBypassCertSubjectMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ca_certs SlbTemplateClientSsl#ca_certs}
  */
  readonly caCerts?: SlbTemplateClientSslCaCerts[] | cdktf.IResolvable;
  /**
  * certificate_issuer_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_contains_list SlbTemplateClientSsl#certificate_issuer_contains_list}
  */
  readonly certificateIssuerContainsList?: SlbTemplateClientSslCertificateIssuerContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_ends_with_list SlbTemplateClientSsl#certificate_issuer_ends_with_list}
  */
  readonly certificateIssuerEndsWithList?: SlbTemplateClientSslCertificateIssuerEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_equals_list SlbTemplateClientSsl#certificate_issuer_equals_list}
  */
  readonly certificateIssuerEqualsList?: SlbTemplateClientSslCertificateIssuerEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_issuer_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_starts_with_list SlbTemplateClientSsl#certificate_issuer_starts_with_list}
  */
  readonly certificateIssuerStartsWithList?: SlbTemplateClientSslCertificateIssuerStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_list SlbTemplateClientSsl#certificate_list}
  */
  readonly certificateList?: SlbTemplateClientSslCertificateListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_contains_list SlbTemplateClientSsl#certificate_san_contains_list}
  */
  readonly certificateSanContainsList?: SlbTemplateClientSslCertificateSanContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_ends_with_list SlbTemplateClientSsl#certificate_san_ends_with_list}
  */
  readonly certificateSanEndsWithList?: SlbTemplateClientSslCertificateSanEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_equals_list SlbTemplateClientSsl#certificate_san_equals_list}
  */
  readonly certificateSanEqualsList?: SlbTemplateClientSslCertificateSanEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_san_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_starts_with_list SlbTemplateClientSsl#certificate_san_starts_with_list}
  */
  readonly certificateSanStartsWithList?: SlbTemplateClientSslCertificateSanStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_contains_list SlbTemplateClientSsl#certificate_subject_contains_list}
  */
  readonly certificateSubjectContainsList?: SlbTemplateClientSslCertificateSubjectContainsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_ends_with_list SlbTemplateClientSsl#certificate_subject_ends_with_list}
  */
  readonly certificateSubjectEndsWithList?: SlbTemplateClientSslCertificateSubjectEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_equals_list SlbTemplateClientSsl#certificate_subject_equals_list}
  */
  readonly certificateSubjectEqualsList?: SlbTemplateClientSslCertificateSubjectEqualsListStruct[] | cdktf.IResolvable;
  /**
  * certificate_subject_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_starts_with_list SlbTemplateClientSsl#certificate_subject_starts_with_list}
  */
  readonly certificateSubjectStartsWithList?: SlbTemplateClientSslCertificateSubjectStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * cipher_without_prio_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cipher_without_prio_list SlbTemplateClientSsl#cipher_without_prio_list}
  */
  readonly cipherWithoutPrioList?: SlbTemplateClientSslCipherWithoutPrioListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_contains_list SlbTemplateClientSsl#client_auth_contains_list}
  */
  readonly clientAuthContainsList?: SlbTemplateClientSslClientAuthContainsListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_ends_with_list SlbTemplateClientSsl#client_auth_ends_with_list}
  */
  readonly clientAuthEndsWithList?: SlbTemplateClientSslClientAuthEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_equals_list SlbTemplateClientSsl#client_auth_equals_list}
  */
  readonly clientAuthEqualsList?: SlbTemplateClientSslClientAuthEqualsListStruct[] | cdktf.IResolvable;
  /**
  * client_auth_starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_starts_with_list SlbTemplateClientSsl#client_auth_starts_with_list}
  */
  readonly clientAuthStartsWithList?: SlbTemplateClientSslClientAuthStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * client_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ipv4_list SlbTemplateClientSsl#client_ipv4_list}
  */
  readonly clientIpv4List?: SlbTemplateClientSslClientIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * client_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ipv6_list SlbTemplateClientSsl#client_ipv6_list}
  */
  readonly clientIpv6List?: SlbTemplateClientSslClientIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * contains_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#contains_list SlbTemplateClientSsl#contains_list}
  */
  readonly containsList?: SlbTemplateClientSslContainsListStruct[] | cdktf.IResolvable;
  /**
  * crl_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#crl_certs SlbTemplateClientSsl#crl_certs}
  */
  readonly crlCerts?: SlbTemplateClientSslCrlCerts[] | cdktf.IResolvable;
  /**
  * ec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ec_list SlbTemplateClientSsl#ec_list}
  */
  readonly ecList?: SlbTemplateClientSslEcListStruct[] | cdktf.IResolvable;
  /**
  * ends_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ends_with_list SlbTemplateClientSsl#ends_with_list}
  */
  readonly endsWithList?: SlbTemplateClientSslEndsWithListStruct[] | cdktf.IResolvable;
  /**
  * equals_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#equals_list SlbTemplateClientSsl#equals_list}
  */
  readonly equalsList?: SlbTemplateClientSslEqualsListStruct[] | cdktf.IResolvable;
  /**
  * exception_client_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_client_ipv4_list SlbTemplateClientSsl#exception_client_ipv4_list}
  */
  readonly exceptionClientIpv4List?: SlbTemplateClientSslExceptionClientIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * exception_client_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_client_ipv6_list SlbTemplateClientSsl#exception_client_ipv6_list}
  */
  readonly exceptionClientIpv6List?: SlbTemplateClientSslExceptionClientIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * exception_server_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_server_ipv4_list SlbTemplateClientSsl#exception_server_ipv4_list}
  */
  readonly exceptionServerIpv4List?: SlbTemplateClientSslExceptionServerIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * exception_server_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_server_ipv6_list SlbTemplateClientSsl#exception_server_ipv6_list}
  */
  readonly exceptionServerIpv6List?: SlbTemplateClientSslExceptionServerIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * exception_web_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_web_category SlbTemplateClientSsl#exception_web_category}
  */
  readonly exceptionWebCategory?: SlbTemplateClientSslExceptionWebCategory;
  /**
  * exception_web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_web_reputation SlbTemplateClientSsl#exception_web_reputation}
  */
  readonly exceptionWebReputation?: SlbTemplateClientSslExceptionWebReputation;
  /**
  * forward_proxy_trusted_ca_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_trusted_ca_lists SlbTemplateClientSsl#forward_proxy_trusted_ca_lists}
  */
  readonly forwardProxyTrustedCaLists?: SlbTemplateClientSslForwardProxyTrustedCaLists[] | cdktf.IResolvable;
  /**
  * local_cert_pin_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#local_cert_pin_list SlbTemplateClientSsl#local_cert_pin_list}
  */
  readonly localCertPinList?: SlbTemplateClientSslLocalCertPinListStruct;
  /**
  * multi_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#multi_class_list SlbTemplateClientSsl#multi_class_list}
  */
  readonly multiClassList?: SlbTemplateClientSslMultiClassListStruct[] | cdktf.IResolvable;
  /**
  * req_ca_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#req_ca_lists SlbTemplateClientSsl#req_ca_lists}
  */
  readonly reqCaLists?: SlbTemplateClientSslReqCaLists[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sampling_enable SlbTemplateClientSsl#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplateClientSslSamplingEnable[] | cdktf.IResolvable;
  /**
  * server_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_ipv4_list SlbTemplateClientSsl#server_ipv4_list}
  */
  readonly serverIpv4List?: SlbTemplateClientSslServerIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * server_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_ipv6_list SlbTemplateClientSsl#server_ipv6_list}
  */
  readonly serverIpv6List?: SlbTemplateClientSslServerIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name_list SlbTemplateClientSsl#server_name_list}
  */
  readonly serverNameList?: SlbTemplateClientSslServerNameListStruct[] | cdktf.IResolvable;
  /**
  * starts_with_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#starts_with_list SlbTemplateClientSsl#starts_with_list}
  */
  readonly startsWithList?: SlbTemplateClientSslStartsWithListStruct[] | cdktf.IResolvable;
  /**
  * web_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#web_category SlbTemplateClientSsl#web_category}
  */
  readonly webCategory?: SlbTemplateClientSslWebCategory;
  /**
  * web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#web_reputation SlbTemplateClientSsl#web_reputation}
  */
  readonly webReputation?: SlbTemplateClientSslWebReputation;
}
export interface SlbTemplateClientSslBypassCertIssuerMultiClassListStruct {
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_issuer_multi_class_list_name SlbTemplateClientSsl#bypass_cert_issuer_multi_class_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_san_multi_class_list_name SlbTemplateClientSsl#bypass_cert_san_multi_class_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_cert_subject_multi_class_list_name SlbTemplateClientSsl#bypass_cert_subject_multi_class_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ca_cert SlbTemplateClientSsl#ca_cert}
  */
  readonly caCert?: string;
  /**
  * CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ca_shared SlbTemplateClientSsl#ca_shared}
  */
  readonly caShared?: number;
  /**
  * Specify ocsp authentication server(s) for client certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ocsp SlbTemplateClientSsl#client_ocsp}
  */
  readonly clientOcsp?: number;
  /**
  * Specify service-group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ocsp_sg SlbTemplateClientSsl#client_ocsp_sg}
  */
  readonly clientOcspSg?: string;
  /**
  * Specify authentication server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ocsp_srvr SlbTemplateClientSsl#client_ocsp_srvr}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_contains SlbTemplateClientSsl#certificate_issuer_contains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_ends_with SlbTemplateClientSsl#certificate_issuer_ends_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_equals SlbTemplateClientSsl#certificate_issuer_equals}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_issuer_starts SlbTemplateClientSsl#certificate_issuer_starts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cert SlbTemplateClientSsl#cert}
  */
  readonly cert: string;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#chain_cert SlbTemplateClientSsl#chain_cert}
  */
  readonly chainCert?: string;
  /**
  * Server Private Key (Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#key SlbTemplateClientSsl#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#passphrase SlbTemplateClientSsl#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Server Certificate and Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#shared SlbTemplateClientSsl#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#uuid SlbTemplateClientSsl#uuid}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_contains SlbTemplateClientSsl#certificate_san_contains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_ends_with SlbTemplateClientSsl#certificate_san_ends_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_equals SlbTemplateClientSsl#certificate_san_equals}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_san_starts SlbTemplateClientSsl#certificate_san_starts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_contains SlbTemplateClientSsl#certificate_subject_contains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_ends_with SlbTemplateClientSsl#certificate_subject_ends_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_equals SlbTemplateClientSsl#certificate_subject_equals}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#certificate_subject_starts SlbTemplateClientSsl#certificate_subject_starts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#cipher_wo_prio SlbTemplateClientSsl#cipher_wo_prio}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_contains SlbTemplateClientSsl#client_auth_contains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_ends_with SlbTemplateClientSsl#client_auth_ends_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_equals SlbTemplateClientSsl#client_auth_equals}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_auth_starts_with SlbTemplateClientSsl#client_auth_starts_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ipv4_list_name SlbTemplateClientSsl#client_ipv4_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_ipv6_list_name SlbTemplateClientSsl#client_ipv6_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#contains SlbTemplateClientSsl#contains}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#crl SlbTemplateClientSsl#crl}
  */
  readonly crl?: string;
  /**
  * Certificate Revocation Lists Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#crl_shared SlbTemplateClientSsl#crl_shared}
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
  * 'secp256r1': X9_62_prime256v1; 'secp384r1': secp384r1; 'secp521r1': secp521r1; 'x25519': x25519;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ec SlbTemplateClientSsl#ec}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#ends_with SlbTemplateClientSsl#ends_with}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#equals SlbTemplateClientSsl#equals}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_client_ipv4_list_name SlbTemplateClientSsl#exception_client_ipv4_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_client_ipv6_list_name SlbTemplateClientSsl#exception_client_ipv6_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_server_ipv4_list_name SlbTemplateClientSsl#exception_server_ipv4_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_server_ipv6_list_name SlbTemplateClientSsl#exception_server_ipv6_list_name}
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
  * 'uncategorized': Uncategorized URLs; 'real-estate': Category Real Estate; 'computer-and-internet-security': Category Computer and Internet Security; 'financial-services': Category Financial Services; 'business-and-economy': Category Business and Economy; 'computer-and-internet-info': Category Computer and Internet Info; 'auctions': Category Auctions; 'shopping': Category Shopping; 'cult-and-occult': Category Cult and Occult; 'travel': Category Travel; 'drugs': Category Abused Drugs; 'adult-and-pornography': Category Adult and Pornography; 'home-and-garden': Category Home and Garden; 'military': Category Military; 'social-network': Category Social Network; 'dead-sites': Category Dead Sites (db Ops only); 'stock-advice-and-tools': Category Stock Advice and Tools; 'training-and-tools': Category Training and Tools; 'dating': Category Dating; 'sex-education': Category Sex Education; 'religion': Category Religion; 'entertainment-and-arts': Category Entertainment and Arts; 'personal-sites-and-blogs': Category Personal sites and Blogs; 'legal': Category Legal; 'local-information': Category Local Information; 'streaming-media': Category Streaming Media; 'job-search': Category Job Search; 'gambling': Category Gambling; 'translation': Category Translation; 'reference-and-research': Category Reference and Research; 'shareware-and-freeware': Category Shareware and Freeware; 'peer-to-peer': Category Peer to Peer; 'marijuana': Category Marijuana; 'hacking': Category Hacking; 'games': Category Games; 'philosophy-and-politics': Category Philosophy and Political Advocacy; 'weapons': Category Weapons; 'pay-to-surf': Category Pay to Surf; 'hunting-and-fishing': Category Hunting and Fishing; 'society': Category Society; 'educational-institutions': Category Educational Institutions; 'online-greeting-cards': Category Online Greeting cards; 'sports': Category Sports; 'swimsuits-and-intimate-apparel': Category Swimsuits and Intimate Apparel; 'questionable': Category Questionable; 'kids': Category Kids; 'hate-and-racism': Category Hate and Racism; 'personal-storage': Category Personal Storage; 'violence': Category Violence; 'keyloggers-and-monitoring': Category Keyloggers and Monitoring; 'search-engines': Category Search Engines; 'internet-portals': Category Internet Portals; 'web-advertisements': Category Web Advertisements; 'cheating': Category Cheating; 'gross': Category Gross; 'web-based-email': Category Web based email; 'malware-sites': Category Malware Sites; 'phishing-and-other-fraud': Category Phishing and Other Frauds; 'proxy-avoid-and-anonymizers': Category Proxy Avoid and Anonymizers; 'spyware-and-adware': Category Spyware and Adware; 'music': Category Music; 'government': Category Government; 'nudity': Category Nudity; 'news-and-media': Category News and Media; 'illegal': Category Illegal; 'cdns': Category CDNs; 'internet-communications': Category Internet Communications; 'bot-nets': Category Bot Nets; 'abortion': Category Abortion; 'health-and-medicine': Category Health and Medicine; 'spam-urls': Category SPAM URLs; 'dynamically-generated-content': Category Dynamically Generated Content; 'parked-domains': Category Parked Domains; 'alcohol-and-tobacco': Category Alcohol and Tobacco; 'image-and-video-search': Category Image and Video Search; 'fashion-and-beauty': Category Fashion and Beauty; 'recreation-and-hobbies': Category Recreation and Hobbies; 'motor-vehicles': Category Motor Vehicles; 'web-hosting-sites': Category Web Hosting Sites; 'self-harm': Category Self Harm; 'dns-over-https': Category DNS over HTTPs; 'low-thc-cannabis-products': Category Low-THC Cannabis Products; 'generative-ai': Category Generative AI; 'nudity-artistic': Category Artistic Nudity; 'illegal-pornography': Category Illegal Pornography eg. Child Sexual Abuse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_category SlbTemplateClientSsl#exception_category}
  */
  readonly exceptionCategory?: string;
}

export function slbTemplateClientSslExceptionWebCategoryToTerraform(struct?: SlbTemplateClientSslExceptionWebCategoryOutputReference | SlbTemplateClientSslExceptionWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_category: cdktf.stringToTerraform(struct!.exceptionCategory),
  }
}


export function slbTemplateClientSslExceptionWebCategoryToHclTerraform(struct?: SlbTemplateClientSslExceptionWebCategoryOutputReference | SlbTemplateClientSslExceptionWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_category: {
      value: cdktf.stringToHclTerraform(struct!.exceptionCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._exceptionCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCategory = this._exceptionCategory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslExceptionWebCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionCategory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionCategory = value.exceptionCategory;
    }
  }

  // exception_category - computed: false, optional: true, required: false
  private _exceptionCategory?: string; 
  public get exceptionCategory() {
    return this.getStringAttribute('exception_category');
  }
  public set exceptionCategory(value: string) {
    this._exceptionCategory = value;
  }
  public resetExceptionCategory() {
    this._exceptionCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCategoryInput() {
    return this._exceptionCategory;
  }
}
export interface SlbTemplateClientSslExceptionWebReputation {
  /**
  * Intercept when reputation score is less than or equal to 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_low_risk SlbTemplateClientSsl#exception_low_risk}
  */
  readonly exceptionLowRisk?: number;
  /**
  * Intercept when reputation score is less than or equal to 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_malicious SlbTemplateClientSsl#exception_malicious}
  */
  readonly exceptionMalicious?: number;
  /**
  * Intercept when reputation score is less than or equal to 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_moderate_risk SlbTemplateClientSsl#exception_moderate_risk}
  */
  readonly exceptionModerateRisk?: number;
  /**
  * Intercept when reputation score is less than or equal to 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_suspicious SlbTemplateClientSsl#exception_suspicious}
  */
  readonly exceptionSuspicious?: number;
  /**
  * Intercept when reputation score is less than or equal to a customized value (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_threshold SlbTemplateClientSsl#exception_threshold}
  */
  readonly exceptionThreshold?: number;
  /**
  * Intercept when reputation score is less than or equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#exception_trustworthy SlbTemplateClientSsl#exception_trustworthy}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#forward_proxy_trusted_ca SlbTemplateClientSsl#forward_proxy_trusted_ca}
  */
  readonly forwardProxyTrustedCa?: string;
  /**
  * Trusted CA Certificate Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#fp_trusted_ca_shared SlbTemplateClientSsl#fp_trusted_ca_shared}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#local_cert_pin_list_bypass_fail_count SlbTemplateClientSsl#local_cert_pin_list_bypass_fail_count}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#multi_clist_name SlbTemplateClientSsl#multi_clist_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_cert_req_ca_shared SlbTemplateClientSsl#client_cert_req_ca_shared}
  */
  readonly clientCertReqCaShared?: number;
  /**
  * Send CA lists in certificate request (CA Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#client_certificate_request_ca SlbTemplateClientSsl#client_certificate_request_ca}
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
export interface SlbTemplateClientSslSamplingEnable {
  /**
  * 'all': all; 'real-estate': real estate category; 'computer-and-internet-security': computer and internet security category; 'financial-services': financial services category; 'business-and-economy': business and economy category; 'computer-and-internet-info': computer and internet info category; 'auctions': auctions category; 'shopping': shopping category; 'cult-and-occult': cult and occult category; 'travel': travel category; 'drugs': drugs category; 'adult-and-pornography': adult and pornography category; 'home-and-garden': home and garden category; 'military': military category; 'social-network': social network category; 'dead-sites': dead sites category; 'stock-advice-and-tools': stock advice and tools category; 'training-and-tools': training and tools category; 'dating': dating category; 'sex-education': sex education category; 'religion': religion category; 'entertainment-and-arts': entertainment and arts category; 'personal-sites-and-blogs': personal sites and blogs category; 'legal': legal category; 'local-information': local information category; 'streaming-media': streaming media category; 'job-search': job search category; 'gambling': gambling category; 'translation': translation category; 'reference-and-research': reference and research category; 'shareware-and-freeware': shareware and freeware category; 'peer-to-peer': peer to peer category; 'marijuana': marijuana category; 'hacking': hacking category; 'games': games category; 'philosophy-and-politics': philosophy and politics category; 'weapons': weapons category; 'pay-to-surf': pay to surf category; 'hunting-and-fishing': hunting and fishing category; 'society': society category; 'educational-institutions': educational institutions category; 'online-greeting-cards': online greeting cards category; 'sports': sports category; 'swimsuits-and-intimate-apparel': swimsuits and intimate apparel category; 'questionable': questionable category; 'kids': kids category; 'hate-and-racism': hate and racism category; 'personal-storage': personal storage category; 'violence': violence category; 'keyloggers-and-monitoring': keyloggers and monitoring category; 'search-engines': search engines category; 'internet-portals': internet portals category; 'web-advertisements': web advertisements category; 'cheating': cheating category; 'gross': gross category; 'web-based-email': web based email category; 'malware-sites': malware sites category; 'phishing-and-other-fraud': phishing and other fraud category; 'proxy-avoid-and-anonymizers': proxy avoid and anonymizers category; 'spyware-and-adware': spyware and adware category; 'music': music category; 'government': government category; 'nudity': nudity category; 'news-and-media': news and media category; 'illegal': illegal category; 'CDNs': content delivery networks category; 'internet-communications': internet communications category; 'bot-nets': bot nets category; 'abortion': abortion category; 'health-and-medicine': health and medicine category; 'confirmed-SPAM-sources': confirmed SPAM sources category; 'SPAM-URLs': SPAM URLs category; 'unconfirmed-SPAM-sources': unconfirmed SPAM sources category; 'open-HTTP-proxies': open HTTP proxies category; 'dynamically-generated-content': dynamically generated content category; 'parked-domains': parked domains category; 'alcohol-and-tobacco': alcohol and tobacco category; 'private-IP-addresses': private IP addresses category; 'image-and-video-search': image and video search category; 'fashion-and-beauty': fashion and beauty category; 'recreation-and-hobbies': recreation and hobbies category; 'motor-vehicles': motor vehicles category; 'web-hosting-sites': web hosting sites category; 'food-and-dining': food and dining category; 'dummy-item': dummy item category; 'self-harm': self harm category; 'dns-over-https': dns over https category; 'low-thc-cannabis-products': low-thc cannabis products; 'generative-ai': generative ai category; 'nudity-artistic': artistic nudity; 'illegal-pornography': illegal pornography eg. child sexual abuse; 'uncategorised': uncategorised; 'other-category': other category; 'trustworthy': Trustworthy level(81-100); 'low-risk': Low-risk level(61-80); 'moderate-risk': Moderate-risk level(41-60); 'suspicious': Suspicious level(21-40); 'malicious': Malicious level(1-20);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#counters1 SlbTemplateClientSsl#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplateClientSslSamplingEnableToTerraform(struct?: SlbTemplateClientSslSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplateClientSslSamplingEnableToHclTerraform(struct?: SlbTemplateClientSslSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateClientSslSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateClientSslSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplateClientSslSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateClientSslSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateClientSslSamplingEnableOutputReference {
    return new SlbTemplateClientSslSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateClientSslServerIpv4ListStruct {
  /**
  * IPV4 server class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_ipv4_list_name SlbTemplateClientSsl#server_ipv4_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_ipv6_list_name SlbTemplateClientSsl#server_ipv6_list_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_cert SlbTemplateClientSsl#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Server Certificate associated to SNI regex (Server Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_cert_regex SlbTemplateClientSsl#server_cert_regex}
  */
  readonly serverCertRegex?: string;
  /**
  * Server Certificate Chain associated to SNI (Server Certificate Chain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_chain SlbTemplateClientSsl#server_chain}
  */
  readonly serverChain?: string;
  /**
  * Server Certificate Chain associated to SNI regex (Server Certificate Chain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_chain_regex SlbTemplateClientSsl#server_chain_regex}
  */
  readonly serverChainRegex?: string;
  /**
  * Server Private Key associated to SNI (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_key SlbTemplateClientSsl#server_key}
  */
  readonly serverKey?: string;
  /**
  * Server Private Key associated to SNI regex (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_key_regex SlbTemplateClientSsl#server_key_regex}
  */
  readonly serverKeyRegex?: string;
  /**
  * Server name indication in Client hello extension (Server name String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name SlbTemplateClientSsl#server_name}
  */
  readonly serverName?: string;
  /**
  * Specific the second certifcate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name_alternate SlbTemplateClientSsl#server_name_alternate}
  */
  readonly serverNameAlternate?: number;
  /**
  * Server name indication in Client hello extension with regular expression (Server name String with regex)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name_regex SlbTemplateClientSsl#server_name_regex}
  */
  readonly serverNameRegex?: string;
  /**
  * Specific the second certifcate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_name_regex_alternate SlbTemplateClientSsl#server_name_regex_alternate}
  */
  readonly serverNameRegexAlternate?: number;
  /**
  * help Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_passphrase SlbTemplateClientSsl#server_passphrase}
  */
  readonly serverPassphrase?: string;
  /**
  * help Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_passphrase_regex SlbTemplateClientSsl#server_passphrase_regex}
  */
  readonly serverPassphraseRegex?: string;
  /**
  * Server Name Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_shared SlbTemplateClientSsl#server_shared}
  */
  readonly serverShared?: number;
  /**
  * Server Name Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#server_shared_regex SlbTemplateClientSsl#server_shared_regex}
  */
  readonly serverSharedRegex?: number;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_regex_shared_partition_client_ssl_template SlbTemplateClientSsl#sni_regex_shared_partition_client_ssl_template}
  */
  readonly sniRegexSharedPartitionClientSslTemplate?: number;
  /**
  * Template associated to SNI regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_regex_template SlbTemplateClientSsl#sni_regex_template}
  */
  readonly sniRegexTemplate?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_regex_template_client_ssl SlbTemplateClientSsl#sni_regex_template_client_ssl}
  */
  readonly sniRegexTemplateClientSsl?: string;
  /**
  * Shared Partition Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_regex_template_client_ssl_shared_name SlbTemplateClientSsl#sni_regex_template_client_ssl_shared_name}
  */
  readonly sniRegexTemplateClientSslSharedName?: string;
  /**
  * Reference a Client SSL template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_shared_partition_client_ssl_template SlbTemplateClientSsl#sni_shared_partition_client_ssl_template}
  */
  readonly sniSharedPartitionClientSslTemplate?: number;
  /**
  * Template associated to SNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_template SlbTemplateClientSsl#sni_template}
  */
  readonly sniTemplate?: number;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_template_client_ssl SlbTemplateClientSsl#sni_template_client_ssl}
  */
  readonly sniTemplateClientSsl?: string;
  /**
  * Shared Partition Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#sni_template_client_ssl_shared_name SlbTemplateClientSsl#sni_template_client_ssl_shared_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#starts_with SlbTemplateClientSsl#starts_with}
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
  * 'uncategorized': Uncategorized URLs; 'real-estate': Category Real Estate; 'computer-and-internet-security': Category Computer and Internet Security; 'financial-services': Category Financial Services; 'business-and-economy': Category Business and Economy; 'computer-and-internet-info': Category Computer and Internet Info; 'auctions': Category Auctions; 'shopping': Category Shopping; 'cult-and-occult': Category Cult and Occult; 'travel': Category Travel; 'drugs': Category Abused Drugs; 'adult-and-pornography': Category Adult and Pornography; 'home-and-garden': Category Home and Garden; 'military': Category Military; 'social-network': Category Social Network; 'dead-sites': Category Dead Sites (db Ops only); 'stock-advice-and-tools': Category Stock Advice and Tools; 'training-and-tools': Category Training and Tools; 'dating': Category Dating; 'sex-education': Category Sex Education; 'religion': Category Religion; 'entertainment-and-arts': Category Entertainment and Arts; 'personal-sites-and-blogs': Category Personal sites and Blogs; 'legal': Category Legal; 'local-information': Category Local Information; 'streaming-media': Category Streaming Media; 'job-search': Category Job Search; 'gambling': Category Gambling; 'translation': Category Translation; 'reference-and-research': Category Reference and Research; 'shareware-and-freeware': Category Shareware and Freeware; 'peer-to-peer': Category Peer to Peer; 'marijuana': Category Marijuana; 'hacking': Category Hacking; 'games': Category Games; 'philosophy-and-politics': Category Philosophy and Political Advocacy; 'weapons': Category Weapons; 'pay-to-surf': Category Pay to Surf; 'hunting-and-fishing': Category Hunting and Fishing; 'society': Category Society; 'educational-institutions': Category Educational Institutions; 'online-greeting-cards': Category Online Greeting cards; 'sports': Category Sports; 'swimsuits-and-intimate-apparel': Category Swimsuits and Intimate Apparel; 'questionable': Category Questionable; 'kids': Category Kids; 'hate-and-racism': Category Hate and Racism; 'personal-storage': Category Personal Storage; 'violence': Category Violence; 'keyloggers-and-monitoring': Category Keyloggers and Monitoring; 'search-engines': Category Search Engines; 'internet-portals': Category Internet Portals; 'web-advertisements': Category Web Advertisements; 'cheating': Category Cheating; 'gross': Category Gross; 'web-based-email': Category Web based email; 'malware-sites': Category Malware Sites; 'phishing-and-other-fraud': Category Phishing and Other Frauds; 'proxy-avoid-and-anonymizers': Category Proxy Avoid and Anonymizers; 'spyware-and-adware': Category Spyware and Adware; 'music': Category Music; 'government': Category Government; 'nudity': Category Nudity; 'news-and-media': Category News and Media; 'illegal': Category Illegal; 'cdns': Category CDNs; 'internet-communications': Category Internet Communications; 'bot-nets': Category Bot Nets; 'abortion': Category Abortion; 'health-and-medicine': Category Health and Medicine; 'spam-urls': Category SPAM URLs; 'dynamically-generated-content': Category Dynamically Generated Content; 'parked-domains': Category Parked Domains; 'alcohol-and-tobacco': Category Alcohol and Tobacco; 'image-and-video-search': Category Image and Video Search; 'fashion-and-beauty': Category Fashion and Beauty; 'recreation-and-hobbies': Category Recreation and Hobbies; 'motor-vehicles': Category Motor Vehicles; 'web-hosting-sites': Category Web Hosting Sites; 'self-harm': Category Self Harm; 'dns-over-https': Category DNS over HTTPs; 'low-thc-cannabis-products': Category Low-THC Cannabis Products; 'generative-ai': Category Generative AI; 'nudity-artistic': Category Artistic Nudity; 'illegal-pornography': Category Illegal Pornography eg. Child Sexual Abuse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypassed_category SlbTemplateClientSsl#bypassed_category}
  */
  readonly bypassedCategory?: string;
}

export function slbTemplateClientSslWebCategoryToTerraform(struct?: SlbTemplateClientSslWebCategoryOutputReference | SlbTemplateClientSslWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypassed_category: cdktf.stringToTerraform(struct!.bypassedCategory),
  }
}


export function slbTemplateClientSslWebCategoryToHclTerraform(struct?: SlbTemplateClientSslWebCategoryOutputReference | SlbTemplateClientSslWebCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypassed_category: {
      value: cdktf.stringToHclTerraform(struct!.bypassedCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._bypassedCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassedCategory = this._bypassedCategory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateClientSslWebCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassedCategory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassedCategory = value.bypassedCategory;
    }
  }

  // bypassed_category - computed: false, optional: true, required: false
  private _bypassedCategory?: string; 
  public get bypassedCategory() {
    return this.getStringAttribute('bypassed_category');
  }
  public set bypassedCategory(value: string) {
    this._bypassedCategory = value;
  }
  public resetBypassedCategory() {
    this._bypassedCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedCategoryInput() {
    return this._bypassedCategory;
  }
}
export interface SlbTemplateClientSslWebReputation {
  /**
  * Bypass when reputation score is greater than or equal to 61
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_low_risk SlbTemplateClientSsl#bypass_low_risk}
  */
  readonly bypassLowRisk?: number;
  /**
  * Bypass when reputation score is greater than or equal to 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_malicious SlbTemplateClientSsl#bypass_malicious}
  */
  readonly bypassMalicious?: number;
  /**
  * Bypass when reputation score is greater than or equal to 41
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_moderate_risk SlbTemplateClientSsl#bypass_moderate_risk}
  */
  readonly bypassModerateRisk?: number;
  /**
  * Bypass when reputation score is greater than or equal to 21
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_suspicious SlbTemplateClientSsl#bypass_suspicious}
  */
  readonly bypassSuspicious?: number;
  /**
  * Bypass when reputation score is greater than or equal to the customized score (1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_threshold SlbTemplateClientSsl#bypass_threshold}
  */
  readonly bypassThreshold?: number;
  /**
  * Bypass when reputation score is greater than or equal to 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#bypass_trustworthy SlbTemplateClientSsl#bypass_trustworthy}
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl thunder_slb_template_client_ssl}
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
  * @param importFromId The id of the existing SlbTemplateClientSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateClientSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl thunder_slb_template_client_ssl} Resource
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
    this._ja4Enable = config.ja4Enable;
    this._ja4InsertHttpHeader = config.ja4InsertHttpHeader;
    this._ja4RejectClassList = config.ja4RejectClassList;
    this._ja4RejectMaxNumberPerHost = config.ja4RejectMaxNumberPerHost;
    this._ja4Ttl = config.ja4Ttl;
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
    this._requireSniCertMatched = config.requireSniCertMatched;
    this._requireWebCategory = config.requireWebCategory;
    this._serverNameAutoMap = config.serverNameAutoMap;
    this._sessionCacheSize = config.sessionCacheSize;
    this._sessionCacheTimeout = config.sessionCacheTimeout;
    this._sessionKeyLoggingEnable = config.sessionKeyLoggingEnable;
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
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // ja4_enable - computed: false, optional: true, required: false
  private _ja4Enable?: number; 
  public get ja4Enable() {
    return this.getNumberAttribute('ja4_enable');
  }
  public set ja4Enable(value: number) {
    this._ja4Enable = value;
  }
  public resetJa4Enable() {
    this._ja4Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4EnableInput() {
    return this._ja4Enable;
  }

  // ja4_insert_http_header - computed: false, optional: true, required: false
  private _ja4InsertHttpHeader?: string; 
  public get ja4InsertHttpHeader() {
    return this.getStringAttribute('ja4_insert_http_header');
  }
  public set ja4InsertHttpHeader(value: string) {
    this._ja4InsertHttpHeader = value;
  }
  public resetJa4InsertHttpHeader() {
    this._ja4InsertHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4InsertHttpHeaderInput() {
    return this._ja4InsertHttpHeader;
  }

  // ja4_reject_class_list - computed: false, optional: true, required: false
  private _ja4RejectClassList?: string; 
  public get ja4RejectClassList() {
    return this.getStringAttribute('ja4_reject_class_list');
  }
  public set ja4RejectClassList(value: string) {
    this._ja4RejectClassList = value;
  }
  public resetJa4RejectClassList() {
    this._ja4RejectClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4RejectClassListInput() {
    return this._ja4RejectClassList;
  }

  // ja4_reject_max_number_per_host - computed: false, optional: true, required: false
  private _ja4RejectMaxNumberPerHost?: number; 
  public get ja4RejectMaxNumberPerHost() {
    return this.getNumberAttribute('ja4_reject_max_number_per_host');
  }
  public set ja4RejectMaxNumberPerHost(value: number) {
    this._ja4RejectMaxNumberPerHost = value;
  }
  public resetJa4RejectMaxNumberPerHost() {
    this._ja4RejectMaxNumberPerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4RejectMaxNumberPerHostInput() {
    return this._ja4RejectMaxNumberPerHost;
  }

  // ja4_ttl - computed: false, optional: true, required: false
  private _ja4Ttl?: number; 
  public get ja4Ttl() {
    return this.getNumberAttribute('ja4_ttl');
  }
  public set ja4Ttl(value: number) {
    this._ja4Ttl = value;
  }
  public resetJa4Ttl() {
    this._ja4Ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TtlInput() {
    return this._ja4Ttl;
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

  // require_sni_cert_matched - computed: false, optional: true, required: false
  private _requireSniCertMatched?: number; 
  public get requireSniCertMatched() {
    return this.getNumberAttribute('require_sni_cert_matched');
  }
  public set requireSniCertMatched(value: number) {
    this._requireSniCertMatched = value;
  }
  public resetRequireSniCertMatched() {
    this._requireSniCertMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSniCertMatchedInput() {
    return this._requireSniCertMatched;
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

  // session_key_logging_enable - computed: false, optional: true, required: false
  private _sessionKeyLoggingEnable?: number; 
  public get sessionKeyLoggingEnable() {
    return this.getNumberAttribute('session_key_logging_enable');
  }
  public set sessionKeyLoggingEnable(value: number) {
    this._sessionKeyLoggingEnable = value;
  }
  public resetSessionKeyLoggingEnable() {
    this._sessionKeyLoggingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionKeyLoggingEnableInput() {
    return this._sessionKeyLoggingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplateClientSslSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplateClientSslSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
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
      ja4_enable: cdktf.numberToTerraform(this._ja4Enable),
      ja4_insert_http_header: cdktf.stringToTerraform(this._ja4InsertHttpHeader),
      ja4_reject_class_list: cdktf.stringToTerraform(this._ja4RejectClassList),
      ja4_reject_max_number_per_host: cdktf.numberToTerraform(this._ja4RejectMaxNumberPerHost),
      ja4_ttl: cdktf.numberToTerraform(this._ja4Ttl),
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
      require_sni_cert_matched: cdktf.numberToTerraform(this._requireSniCertMatched),
      require_web_category: cdktf.numberToTerraform(this._requireWebCategory),
      server_name_auto_map: cdktf.numberToTerraform(this._serverNameAutoMap),
      session_cache_size: cdktf.numberToTerraform(this._sessionCacheSize),
      session_cache_timeout: cdktf.numberToTerraform(this._sessionCacheTimeout),
      session_key_logging_enable: cdktf.numberToTerraform(this._sessionKeyLoggingEnable),
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
      sampling_enable: cdktf.listMapper(slbTemplateClientSslSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      ja4_enable: {
        value: cdktf.numberToHclTerraform(this._ja4Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ja4_insert_http_header: {
        value: cdktf.stringToHclTerraform(this._ja4InsertHttpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ja4_reject_class_list: {
        value: cdktf.stringToHclTerraform(this._ja4RejectClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ja4_reject_max_number_per_host: {
        value: cdktf.numberToHclTerraform(this._ja4RejectMaxNumberPerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ja4_ttl: {
        value: cdktf.numberToHclTerraform(this._ja4Ttl),
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
      require_sni_cert_matched: {
        value: cdktf.numberToHclTerraform(this._requireSniCertMatched),
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
      session_key_logging_enable: {
        value: cdktf.numberToHclTerraform(this._sessionKeyLoggingEnable),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplateClientSslSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateClientSslSamplingEnableList",
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
