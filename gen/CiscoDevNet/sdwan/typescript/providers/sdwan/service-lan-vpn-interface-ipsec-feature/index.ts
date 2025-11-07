// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnInterfaceIpsecFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Application Tunnel Type
  *   - Choices: `none`, `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#application_tunnel_type ServiceLanVpnInterfaceIpsecFeature#application_tunnel_type}
  */
  readonly applicationTunnelType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#application_tunnel_type_variable ServiceLanVpnInterfaceIpsecFeature#application_tunnel_type_variable}
  */
  readonly applicationTunnelTypeVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#clear_dont_fragment ServiceLanVpnInterfaceIpsecFeature#clear_dont_fragment}
  */
  readonly clearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#clear_dont_fragment_variable ServiceLanVpnInterfaceIpsecFeature#clear_dont_fragment_variable}
  */
  readonly clearDontFragmentVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#description ServiceLanVpnInterfaceIpsecFeature#description}
  */
  readonly description?: string;
  /**
  * IKE keepalive interval (seconds)
  *   - Range: `10`-`3600`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#dpd_interval ServiceLanVpnInterfaceIpsecFeature#dpd_interval}
  */
  readonly dpdInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#dpd_interval_variable ServiceLanVpnInterfaceIpsecFeature#dpd_interval_variable}
  */
  readonly dpdIntervalVariable?: string;
  /**
  * IKE keepalive retries
  *   - Range: `2`-`60`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#dpd_retries ServiceLanVpnInterfaceIpsecFeature#dpd_retries}
  */
  readonly dpdRetries?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#dpd_retries_variable ServiceLanVpnInterfaceIpsecFeature#dpd_retries_variable}
  */
  readonly dpdRetriesVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#feature_profile_id ServiceLanVpnInterfaceIpsecFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * IKE identity the IKE preshared secret belongs to
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha2`, `aes128-cbc-sha1`, `aes128-cbc-sha2`
  *   - Default value: `aes256-cbc-sha1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_ciphersuite ServiceLanVpnInterfaceIpsecFeature#ike_ciphersuite}
  */
  readonly ikeCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_ciphersuite_variable ServiceLanVpnInterfaceIpsecFeature#ike_ciphersuite_variable}
  */
  readonly ikeCiphersuiteVariable?: string;
  /**
  * IKE Diffie Hellman Groups
  *   - Choices: `2`, `14`, `15`, `16`, `19`, `20`, `21`, `24`
  *   - Default value: `16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_diffie_hellman_group ServiceLanVpnInterfaceIpsecFeature#ike_diffie_hellman_group}
  */
  readonly ikeDiffieHellmanGroup?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_diffie_hellman_group_variable ServiceLanVpnInterfaceIpsecFeature#ike_diffie_hellman_group_variable}
  */
  readonly ikeDiffieHellmanGroupVariable?: string;
  /**
  * IKE ID for the local endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_id_local_end_point ServiceLanVpnInterfaceIpsecFeature#ike_id_local_end_point}
  */
  readonly ikeIdLocalEndPoint?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_id_local_end_point_variable ServiceLanVpnInterfaceIpsecFeature#ike_id_local_end_point_variable}
  */
  readonly ikeIdLocalEndPointVariable?: string;
  /**
  * IKE ID for the remote endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_id_remote_end_point ServiceLanVpnInterfaceIpsecFeature#ike_id_remote_end_point}
  */
  readonly ikeIdRemoteEndPoint?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_id_remote_end_point_variable ServiceLanVpnInterfaceIpsecFeature#ike_id_remote_end_point_variable}
  */
  readonly ikeIdRemoteEndPointVariable?: string;
  /**
  * IKE integrity protocol
  *   - Choices: `main`, `aggressive`
  *   - Default value: `main`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_integrity_protocol ServiceLanVpnInterfaceIpsecFeature#ike_integrity_protocol}
  */
  readonly ikeIntegrityProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_integrity_protocol_variable ServiceLanVpnInterfaceIpsecFeature#ike_integrity_protocol_variable}
  */
  readonly ikeIntegrityProtocolVariable?: string;
  /**
  * Use preshared key to authenticate IKE peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_preshared_key ServiceLanVpnInterfaceIpsecFeature#ike_preshared_key}
  */
  readonly ikePresharedKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_preshared_key_variable ServiceLanVpnInterfaceIpsecFeature#ike_preshared_key_variable}
  */
  readonly ikePresharedKeyVariable?: string;
  /**
  * IKE rekey interval <60..86400> seconds
  *   - Range: `60`-`86400`
  *   - Default value: `14400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_rekey_interval ServiceLanVpnInterfaceIpsecFeature#ike_rekey_interval}
  */
  readonly ikeRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_rekey_interval_variable ServiceLanVpnInterfaceIpsecFeature#ike_rekey_interval_variable}
  */
  readonly ikeRekeyIntervalVariable?: string;
  /**
  * IKE Version <1..2>
  *   - Range: `1`-`2`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ike_version ServiceLanVpnInterfaceIpsecFeature#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#interface_description ServiceLanVpnInterfaceIpsecFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#interface_description_variable ServiceLanVpnInterfaceIpsecFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface name: IPsec when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#interface_name ServiceLanVpnInterfaceIpsecFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#interface_name_variable ServiceLanVpnInterfaceIpsecFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Interface MTU <68..9216>, in bytes
  *   - Range: `68`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ip_mtu ServiceLanVpnInterfaceIpsecFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ip_mtu_variable ServiceLanVpnInterfaceIpsecFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * IPsec(ESP) encryption and integrity protocol
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha384`, `aes256-cbc-sha256`, `aes256-cbc-sha512`, `aes256-gcm`, `null-sha1`, `null-sha384`, `null-sha256`, `null-sha512`
  *   - Default value: `aes256-gcm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_ciphersuite ServiceLanVpnInterfaceIpsecFeature#ipsec_ciphersuite}
  */
  readonly ipsecCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_ciphersuite_variable ServiceLanVpnInterfaceIpsecFeature#ipsec_ciphersuite_variable}
  */
  readonly ipsecCiphersuiteVariable?: string;
  /**
  * IPsec rekey interval <300..1209600> seconds
  *   - Range: `120`-`2592000`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_rekey_interval ServiceLanVpnInterfaceIpsecFeature#ipsec_rekey_interval}
  */
  readonly ipsecRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_rekey_interval_variable ServiceLanVpnInterfaceIpsecFeature#ipsec_rekey_interval_variable}
  */
  readonly ipsecRekeyIntervalVariable?: string;
  /**
  * Replay window size 32..8192 (must be a power of 2)
  *   - Range: `64`-`4096`
  *   - Default value: `512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_replay_window ServiceLanVpnInterfaceIpsecFeature#ipsec_replay_window}
  */
  readonly ipsecReplayWindow?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipsec_replay_window_variable ServiceLanVpnInterfaceIpsecFeature#ipsec_replay_window_variable}
  */
  readonly ipsecReplayWindowVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipv4_address ServiceLanVpnInterfaceIpsecFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipv4_address_variable ServiceLanVpnInterfaceIpsecFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipv4_subnet_mask ServiceLanVpnInterfaceIpsecFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#ipv4_subnet_mask_variable ServiceLanVpnInterfaceIpsecFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#name ServiceLanVpnInterfaceIpsecFeature#name}
  */
  readonly name: string;
  /**
  * IPsec perfect forward secrecy settings
  *   - Choices: `group-1`, `group-2`, `group-5`, `group-14`, `group-15`, `group-16`, `group-19`, `group-20`, `group-21`, `group-24`, `none`
  *   - Default value: `group-16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#perfect_forward_secrecy ServiceLanVpnInterfaceIpsecFeature#perfect_forward_secrecy}
  */
  readonly perfectForwardSecrecy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#perfect_forward_secrecy_variable ServiceLanVpnInterfaceIpsecFeature#perfect_forward_secrecy_variable}
  */
  readonly perfectForwardSecrecyVariable?: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#service_lan_vpn_feature_id ServiceLanVpnInterfaceIpsecFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#shutdown ServiceLanVpnInterfaceIpsecFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#shutdown_variable ServiceLanVpnInterfaceIpsecFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tcp_mss ServiceLanVpnInterfaceIpsecFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tcp_mss_variable ServiceLanVpnInterfaceIpsecFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tracker_id ServiceLanVpnInterfaceIpsecFeature#tracker_id}
  */
  readonly trackerId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tracker_id_variable ServiceLanVpnInterfaceIpsecFeature#tracker_id_variable}
  */
  readonly trackerIdVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_destination_ipv4_address ServiceLanVpnInterfaceIpsecFeature#tunnel_destination_ipv4_address}
  */
  readonly tunnelDestinationIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_destination_ipv4_address_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_destination_ipv4_address_variable}
  */
  readonly tunnelDestinationIpv4AddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_destination_ipv4_subnet_mask ServiceLanVpnInterfaceIpsecFeature#tunnel_destination_ipv4_subnet_mask}
  */
  readonly tunnelDestinationIpv4SubnetMask: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_destination_ipv4_subnet_mask_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_destination_ipv4_subnet_mask_variable}
  */
  readonly tunnelDestinationIpv4SubnetMaskVariable?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_route_via ServiceLanVpnInterfaceIpsecFeature#tunnel_route_via}
  */
  readonly tunnelRouteVia?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_route_via_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_route_via_variable}
  */
  readonly tunnelRouteViaVariable?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_interface ServiceLanVpnInterfaceIpsecFeature#tunnel_source_interface}
  */
  readonly tunnelSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_interface_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_source_interface_variable}
  */
  readonly tunnelSourceInterfaceVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_ipv4_address ServiceLanVpnInterfaceIpsecFeature#tunnel_source_ipv4_address}
  */
  readonly tunnelSourceIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_ipv4_address_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_source_ipv4_address_variable}
  */
  readonly tunnelSourceIpv4AddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_ipv4_subnet_mask ServiceLanVpnInterfaceIpsecFeature#tunnel_source_ipv4_subnet_mask}
  */
  readonly tunnelSourceIpv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#tunnel_source_ipv4_subnet_mask_variable ServiceLanVpnInterfaceIpsecFeature#tunnel_source_ipv4_subnet_mask_variable}
  */
  readonly tunnelSourceIpv4SubnetMaskVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature sdwan_service_lan_vpn_interface_ipsec_feature}
*/
export class ServiceLanVpnInterfaceIpsecFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_ipsec_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnInterfaceIpsecFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnInterfaceIpsecFeature to import
  * @param importFromId The id of the existing ServiceLanVpnInterfaceIpsecFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnInterfaceIpsecFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_ipsec_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ipsec_feature sdwan_service_lan_vpn_interface_ipsec_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnInterfaceIpsecFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnInterfaceIpsecFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_ipsec_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationTunnelType = config.applicationTunnelType;
    this._applicationTunnelTypeVariable = config.applicationTunnelTypeVariable;
    this._clearDontFragment = config.clearDontFragment;
    this._clearDontFragmentVariable = config.clearDontFragmentVariable;
    this._description = config.description;
    this._dpdInterval = config.dpdInterval;
    this._dpdIntervalVariable = config.dpdIntervalVariable;
    this._dpdRetries = config.dpdRetries;
    this._dpdRetriesVariable = config.dpdRetriesVariable;
    this._featureProfileId = config.featureProfileId;
    this._ikeCiphersuite = config.ikeCiphersuite;
    this._ikeCiphersuiteVariable = config.ikeCiphersuiteVariable;
    this._ikeDiffieHellmanGroup = config.ikeDiffieHellmanGroup;
    this._ikeDiffieHellmanGroupVariable = config.ikeDiffieHellmanGroupVariable;
    this._ikeIdLocalEndPoint = config.ikeIdLocalEndPoint;
    this._ikeIdLocalEndPointVariable = config.ikeIdLocalEndPointVariable;
    this._ikeIdRemoteEndPoint = config.ikeIdRemoteEndPoint;
    this._ikeIdRemoteEndPointVariable = config.ikeIdRemoteEndPointVariable;
    this._ikeIntegrityProtocol = config.ikeIntegrityProtocol;
    this._ikeIntegrityProtocolVariable = config.ikeIntegrityProtocolVariable;
    this._ikePresharedKey = config.ikePresharedKey;
    this._ikePresharedKeyVariable = config.ikePresharedKeyVariable;
    this._ikeRekeyInterval = config.ikeRekeyInterval;
    this._ikeRekeyIntervalVariable = config.ikeRekeyIntervalVariable;
    this._ikeVersion = config.ikeVersion;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipsecCiphersuite = config.ipsecCiphersuite;
    this._ipsecCiphersuiteVariable = config.ipsecCiphersuiteVariable;
    this._ipsecRekeyInterval = config.ipsecRekeyInterval;
    this._ipsecRekeyIntervalVariable = config.ipsecRekeyIntervalVariable;
    this._ipsecReplayWindow = config.ipsecReplayWindow;
    this._ipsecReplayWindowVariable = config.ipsecReplayWindowVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._name = config.name;
    this._perfectForwardSecrecy = config.perfectForwardSecrecy;
    this._perfectForwardSecrecyVariable = config.perfectForwardSecrecyVariable;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._trackerId = config.trackerId;
    this._trackerIdVariable = config.trackerIdVariable;
    this._tunnelDestinationIpv4Address = config.tunnelDestinationIpv4Address;
    this._tunnelDestinationIpv4AddressVariable = config.tunnelDestinationIpv4AddressVariable;
    this._tunnelDestinationIpv4SubnetMask = config.tunnelDestinationIpv4SubnetMask;
    this._tunnelDestinationIpv4SubnetMaskVariable = config.tunnelDestinationIpv4SubnetMaskVariable;
    this._tunnelRouteVia = config.tunnelRouteVia;
    this._tunnelRouteViaVariable = config.tunnelRouteViaVariable;
    this._tunnelSourceInterface = config.tunnelSourceInterface;
    this._tunnelSourceInterfaceVariable = config.tunnelSourceInterfaceVariable;
    this._tunnelSourceIpv4Address = config.tunnelSourceIpv4Address;
    this._tunnelSourceIpv4AddressVariable = config.tunnelSourceIpv4AddressVariable;
    this._tunnelSourceIpv4SubnetMask = config.tunnelSourceIpv4SubnetMask;
    this._tunnelSourceIpv4SubnetMaskVariable = config.tunnelSourceIpv4SubnetMaskVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_tunnel_type - computed: false, optional: true, required: false
  private _applicationTunnelType?: string; 
  public get applicationTunnelType() {
    return this.getStringAttribute('application_tunnel_type');
  }
  public set applicationTunnelType(value: string) {
    this._applicationTunnelType = value;
  }
  public resetApplicationTunnelType() {
    this._applicationTunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTunnelTypeInput() {
    return this._applicationTunnelType;
  }

  // application_tunnel_type_variable - computed: false, optional: true, required: false
  private _applicationTunnelTypeVariable?: string; 
  public get applicationTunnelTypeVariable() {
    return this.getStringAttribute('application_tunnel_type_variable');
  }
  public set applicationTunnelTypeVariable(value: string) {
    this._applicationTunnelTypeVariable = value;
  }
  public resetApplicationTunnelTypeVariable() {
    this._applicationTunnelTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTunnelTypeVariableInput() {
    return this._applicationTunnelTypeVariable;
  }

  // clear_dont_fragment - computed: false, optional: true, required: false
  private _clearDontFragment?: boolean | cdktf.IResolvable; 
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }
  public set clearDontFragment(value: boolean | cdktf.IResolvable) {
    this._clearDontFragment = value;
  }
  public resetClearDontFragment() {
    this._clearDontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentInput() {
    return this._clearDontFragment;
  }

  // clear_dont_fragment_variable - computed: false, optional: true, required: false
  private _clearDontFragmentVariable?: string; 
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }
  public set clearDontFragmentVariable(value: string) {
    this._clearDontFragmentVariable = value;
  }
  public resetClearDontFragmentVariable() {
    this._clearDontFragmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentVariableInput() {
    return this._clearDontFragmentVariable;
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

  // dpd_interval - computed: false, optional: true, required: false
  private _dpdInterval?: number; 
  public get dpdInterval() {
    return this.getNumberAttribute('dpd_interval');
  }
  public set dpdInterval(value: number) {
    this._dpdInterval = value;
  }
  public resetDpdInterval() {
    this._dpdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdIntervalInput() {
    return this._dpdInterval;
  }

  // dpd_interval_variable - computed: false, optional: true, required: false
  private _dpdIntervalVariable?: string; 
  public get dpdIntervalVariable() {
    return this.getStringAttribute('dpd_interval_variable');
  }
  public set dpdIntervalVariable(value: string) {
    this._dpdIntervalVariable = value;
  }
  public resetDpdIntervalVariable() {
    this._dpdIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdIntervalVariableInput() {
    return this._dpdIntervalVariable;
  }

  // dpd_retries - computed: false, optional: true, required: false
  private _dpdRetries?: number; 
  public get dpdRetries() {
    return this.getNumberAttribute('dpd_retries');
  }
  public set dpdRetries(value: number) {
    this._dpdRetries = value;
  }
  public resetDpdRetries() {
    this._dpdRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetriesInput() {
    return this._dpdRetries;
  }

  // dpd_retries_variable - computed: false, optional: true, required: false
  private _dpdRetriesVariable?: string; 
  public get dpdRetriesVariable() {
    return this.getStringAttribute('dpd_retries_variable');
  }
  public set dpdRetriesVariable(value: string) {
    this._dpdRetriesVariable = value;
  }
  public resetDpdRetriesVariable() {
    this._dpdRetriesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetriesVariableInput() {
    return this._dpdRetriesVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_ciphersuite - computed: false, optional: true, required: false
  private _ikeCiphersuite?: string; 
  public get ikeCiphersuite() {
    return this.getStringAttribute('ike_ciphersuite');
  }
  public set ikeCiphersuite(value: string) {
    this._ikeCiphersuite = value;
  }
  public resetIkeCiphersuite() {
    this._ikeCiphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCiphersuiteInput() {
    return this._ikeCiphersuite;
  }

  // ike_ciphersuite_variable - computed: false, optional: true, required: false
  private _ikeCiphersuiteVariable?: string; 
  public get ikeCiphersuiteVariable() {
    return this.getStringAttribute('ike_ciphersuite_variable');
  }
  public set ikeCiphersuiteVariable(value: string) {
    this._ikeCiphersuiteVariable = value;
  }
  public resetIkeCiphersuiteVariable() {
    this._ikeCiphersuiteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCiphersuiteVariableInput() {
    return this._ikeCiphersuiteVariable;
  }

  // ike_diffie_hellman_group - computed: false, optional: true, required: false
  private _ikeDiffieHellmanGroup?: string; 
  public get ikeDiffieHellmanGroup() {
    return this.getStringAttribute('ike_diffie_hellman_group');
  }
  public set ikeDiffieHellmanGroup(value: string) {
    this._ikeDiffieHellmanGroup = value;
  }
  public resetIkeDiffieHellmanGroup() {
    this._ikeDiffieHellmanGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDiffieHellmanGroupInput() {
    return this._ikeDiffieHellmanGroup;
  }

  // ike_diffie_hellman_group_variable - computed: false, optional: true, required: false
  private _ikeDiffieHellmanGroupVariable?: string; 
  public get ikeDiffieHellmanGroupVariable() {
    return this.getStringAttribute('ike_diffie_hellman_group_variable');
  }
  public set ikeDiffieHellmanGroupVariable(value: string) {
    this._ikeDiffieHellmanGroupVariable = value;
  }
  public resetIkeDiffieHellmanGroupVariable() {
    this._ikeDiffieHellmanGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDiffieHellmanGroupVariableInput() {
    return this._ikeDiffieHellmanGroupVariable;
  }

  // ike_id_local_end_point - computed: false, optional: true, required: false
  private _ikeIdLocalEndPoint?: string; 
  public get ikeIdLocalEndPoint() {
    return this.getStringAttribute('ike_id_local_end_point');
  }
  public set ikeIdLocalEndPoint(value: string) {
    this._ikeIdLocalEndPoint = value;
  }
  public resetIkeIdLocalEndPoint() {
    this._ikeIdLocalEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIdLocalEndPointInput() {
    return this._ikeIdLocalEndPoint;
  }

  // ike_id_local_end_point_variable - computed: false, optional: true, required: false
  private _ikeIdLocalEndPointVariable?: string; 
  public get ikeIdLocalEndPointVariable() {
    return this.getStringAttribute('ike_id_local_end_point_variable');
  }
  public set ikeIdLocalEndPointVariable(value: string) {
    this._ikeIdLocalEndPointVariable = value;
  }
  public resetIkeIdLocalEndPointVariable() {
    this._ikeIdLocalEndPointVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIdLocalEndPointVariableInput() {
    return this._ikeIdLocalEndPointVariable;
  }

  // ike_id_remote_end_point - computed: false, optional: true, required: false
  private _ikeIdRemoteEndPoint?: string; 
  public get ikeIdRemoteEndPoint() {
    return this.getStringAttribute('ike_id_remote_end_point');
  }
  public set ikeIdRemoteEndPoint(value: string) {
    this._ikeIdRemoteEndPoint = value;
  }
  public resetIkeIdRemoteEndPoint() {
    this._ikeIdRemoteEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIdRemoteEndPointInput() {
    return this._ikeIdRemoteEndPoint;
  }

  // ike_id_remote_end_point_variable - computed: false, optional: true, required: false
  private _ikeIdRemoteEndPointVariable?: string; 
  public get ikeIdRemoteEndPointVariable() {
    return this.getStringAttribute('ike_id_remote_end_point_variable');
  }
  public set ikeIdRemoteEndPointVariable(value: string) {
    this._ikeIdRemoteEndPointVariable = value;
  }
  public resetIkeIdRemoteEndPointVariable() {
    this._ikeIdRemoteEndPointVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIdRemoteEndPointVariableInput() {
    return this._ikeIdRemoteEndPointVariable;
  }

  // ike_integrity_protocol - computed: false, optional: true, required: false
  private _ikeIntegrityProtocol?: string; 
  public get ikeIntegrityProtocol() {
    return this.getStringAttribute('ike_integrity_protocol');
  }
  public set ikeIntegrityProtocol(value: string) {
    this._ikeIntegrityProtocol = value;
  }
  public resetIkeIntegrityProtocol() {
    this._ikeIntegrityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityProtocolInput() {
    return this._ikeIntegrityProtocol;
  }

  // ike_integrity_protocol_variable - computed: false, optional: true, required: false
  private _ikeIntegrityProtocolVariable?: string; 
  public get ikeIntegrityProtocolVariable() {
    return this.getStringAttribute('ike_integrity_protocol_variable');
  }
  public set ikeIntegrityProtocolVariable(value: string) {
    this._ikeIntegrityProtocolVariable = value;
  }
  public resetIkeIntegrityProtocolVariable() {
    this._ikeIntegrityProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityProtocolVariableInput() {
    return this._ikeIntegrityProtocolVariable;
  }

  // ike_preshared_key - computed: false, optional: true, required: false
  private _ikePresharedKey?: string; 
  public get ikePresharedKey() {
    return this.getStringAttribute('ike_preshared_key');
  }
  public set ikePresharedKey(value: string) {
    this._ikePresharedKey = value;
  }
  public resetIkePresharedKey() {
    this._ikePresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePresharedKeyInput() {
    return this._ikePresharedKey;
  }

  // ike_preshared_key_variable - computed: false, optional: true, required: false
  private _ikePresharedKeyVariable?: string; 
  public get ikePresharedKeyVariable() {
    return this.getStringAttribute('ike_preshared_key_variable');
  }
  public set ikePresharedKeyVariable(value: string) {
    this._ikePresharedKeyVariable = value;
  }
  public resetIkePresharedKeyVariable() {
    this._ikePresharedKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePresharedKeyVariableInput() {
    return this._ikePresharedKeyVariable;
  }

  // ike_rekey_interval - computed: false, optional: true, required: false
  private _ikeRekeyInterval?: number; 
  public get ikeRekeyInterval() {
    return this.getNumberAttribute('ike_rekey_interval');
  }
  public set ikeRekeyInterval(value: number) {
    this._ikeRekeyInterval = value;
  }
  public resetIkeRekeyInterval() {
    this._ikeRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRekeyIntervalInput() {
    return this._ikeRekeyInterval;
  }

  // ike_rekey_interval_variable - computed: false, optional: true, required: false
  private _ikeRekeyIntervalVariable?: string; 
  public get ikeRekeyIntervalVariable() {
    return this.getStringAttribute('ike_rekey_interval_variable');
  }
  public set ikeRekeyIntervalVariable(value: string) {
    this._ikeRekeyIntervalVariable = value;
  }
  public resetIkeRekeyIntervalVariable() {
    this._ikeRekeyIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRekeyIntervalVariableInput() {
    return this._ikeRekeyIntervalVariable;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_mtu_variable - computed: false, optional: true, required: false
  private _ipMtuVariable?: string; 
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }
  public set ipMtuVariable(value: string) {
    this._ipMtuVariable = value;
  }
  public resetIpMtuVariable() {
    this._ipMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuVariableInput() {
    return this._ipMtuVariable;
  }

  // ipsec_ciphersuite - computed: false, optional: true, required: false
  private _ipsecCiphersuite?: string; 
  public get ipsecCiphersuite() {
    return this.getStringAttribute('ipsec_ciphersuite');
  }
  public set ipsecCiphersuite(value: string) {
    this._ipsecCiphersuite = value;
  }
  public resetIpsecCiphersuite() {
    this._ipsecCiphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCiphersuiteInput() {
    return this._ipsecCiphersuite;
  }

  // ipsec_ciphersuite_variable - computed: false, optional: true, required: false
  private _ipsecCiphersuiteVariable?: string; 
  public get ipsecCiphersuiteVariable() {
    return this.getStringAttribute('ipsec_ciphersuite_variable');
  }
  public set ipsecCiphersuiteVariable(value: string) {
    this._ipsecCiphersuiteVariable = value;
  }
  public resetIpsecCiphersuiteVariable() {
    this._ipsecCiphersuiteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCiphersuiteVariableInput() {
    return this._ipsecCiphersuiteVariable;
  }

  // ipsec_rekey_interval - computed: false, optional: true, required: false
  private _ipsecRekeyInterval?: number; 
  public get ipsecRekeyInterval() {
    return this.getNumberAttribute('ipsec_rekey_interval');
  }
  public set ipsecRekeyInterval(value: number) {
    this._ipsecRekeyInterval = value;
  }
  public resetIpsecRekeyInterval() {
    this._ipsecRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRekeyIntervalInput() {
    return this._ipsecRekeyInterval;
  }

  // ipsec_rekey_interval_variable - computed: false, optional: true, required: false
  private _ipsecRekeyIntervalVariable?: string; 
  public get ipsecRekeyIntervalVariable() {
    return this.getStringAttribute('ipsec_rekey_interval_variable');
  }
  public set ipsecRekeyIntervalVariable(value: string) {
    this._ipsecRekeyIntervalVariable = value;
  }
  public resetIpsecRekeyIntervalVariable() {
    this._ipsecRekeyIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRekeyIntervalVariableInput() {
    return this._ipsecRekeyIntervalVariable;
  }

  // ipsec_replay_window - computed: false, optional: true, required: false
  private _ipsecReplayWindow?: number; 
  public get ipsecReplayWindow() {
    return this.getNumberAttribute('ipsec_replay_window');
  }
  public set ipsecReplayWindow(value: number) {
    this._ipsecReplayWindow = value;
  }
  public resetIpsecReplayWindow() {
    this._ipsecReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecReplayWindowInput() {
    return this._ipsecReplayWindow;
  }

  // ipsec_replay_window_variable - computed: false, optional: true, required: false
  private _ipsecReplayWindowVariable?: string; 
  public get ipsecReplayWindowVariable() {
    return this.getStringAttribute('ipsec_replay_window_variable');
  }
  public set ipsecReplayWindowVariable(value: string) {
    this._ipsecReplayWindowVariable = value;
  }
  public resetIpsecReplayWindowVariable() {
    this._ipsecReplayWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecReplayWindowVariableInput() {
    return this._ipsecReplayWindowVariable;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ipv4_subnet_mask - computed: false, optional: true, required: false
  private _ipv4SubnetMask?: string; 
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }
  public set ipv4SubnetMask(value: string) {
    this._ipv4SubnetMask = value;
  }
  public resetIpv4SubnetMask() {
    this._ipv4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskInput() {
    return this._ipv4SubnetMask;
  }

  // ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _ipv4SubnetMaskVariable?: string; 
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }
  public set ipv4SubnetMaskVariable(value: string) {
    this._ipv4SubnetMaskVariable = value;
  }
  public resetIpv4SubnetMaskVariable() {
    this._ipv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskVariableInput() {
    return this._ipv4SubnetMaskVariable;
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

  // perfect_forward_secrecy - computed: false, optional: true, required: false
  private _perfectForwardSecrecy?: string; 
  public get perfectForwardSecrecy() {
    return this.getStringAttribute('perfect_forward_secrecy');
  }
  public set perfectForwardSecrecy(value: string) {
    this._perfectForwardSecrecy = value;
  }
  public resetPerfectForwardSecrecy() {
    this._perfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfectForwardSecrecyInput() {
    return this._perfectForwardSecrecy;
  }

  // perfect_forward_secrecy_variable - computed: false, optional: true, required: false
  private _perfectForwardSecrecyVariable?: string; 
  public get perfectForwardSecrecyVariable() {
    return this.getStringAttribute('perfect_forward_secrecy_variable');
  }
  public set perfectForwardSecrecyVariable(value: string) {
    this._perfectForwardSecrecyVariable = value;
  }
  public resetPerfectForwardSecrecyVariable() {
    this._perfectForwardSecrecyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfectForwardSecrecyVariableInput() {
    return this._perfectForwardSecrecyVariable;
  }

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // tcp_mss_variable - computed: false, optional: true, required: false
  private _tcpMssVariable?: string; 
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }
  public set tcpMssVariable(value: string) {
    this._tcpMssVariable = value;
  }
  public resetTcpMssVariable() {
    this._tcpMssVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssVariableInput() {
    return this._tcpMssVariable;
  }

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: string; 
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
  public set trackerId(value: string) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }

  // tracker_id_variable - computed: false, optional: true, required: false
  private _trackerIdVariable?: string; 
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
  public set trackerIdVariable(value: string) {
    this._trackerIdVariable = value;
  }
  public resetTrackerIdVariable() {
    this._trackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdVariableInput() {
    return this._trackerIdVariable;
  }

  // tunnel_destination_ipv4_address - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4Address?: string; 
  public get tunnelDestinationIpv4Address() {
    return this.getStringAttribute('tunnel_destination_ipv4_address');
  }
  public set tunnelDestinationIpv4Address(value: string) {
    this._tunnelDestinationIpv4Address = value;
  }
  public resetTunnelDestinationIpv4Address() {
    this._tunnelDestinationIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4AddressInput() {
    return this._tunnelDestinationIpv4Address;
  }

  // tunnel_destination_ipv4_address_variable - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4AddressVariable?: string; 
  public get tunnelDestinationIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_destination_ipv4_address_variable');
  }
  public set tunnelDestinationIpv4AddressVariable(value: string) {
    this._tunnelDestinationIpv4AddressVariable = value;
  }
  public resetTunnelDestinationIpv4AddressVariable() {
    this._tunnelDestinationIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4AddressVariableInput() {
    return this._tunnelDestinationIpv4AddressVariable;
  }

  // tunnel_destination_ipv4_subnet_mask - computed: false, optional: false, required: true
  private _tunnelDestinationIpv4SubnetMask?: string; 
  public get tunnelDestinationIpv4SubnetMask() {
    return this.getStringAttribute('tunnel_destination_ipv4_subnet_mask');
  }
  public set tunnelDestinationIpv4SubnetMask(value: string) {
    this._tunnelDestinationIpv4SubnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4SubnetMaskInput() {
    return this._tunnelDestinationIpv4SubnetMask;
  }

  // tunnel_destination_ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _tunnelDestinationIpv4SubnetMaskVariable?: string; 
  public get tunnelDestinationIpv4SubnetMaskVariable() {
    return this.getStringAttribute('tunnel_destination_ipv4_subnet_mask_variable');
  }
  public set tunnelDestinationIpv4SubnetMaskVariable(value: string) {
    this._tunnelDestinationIpv4SubnetMaskVariable = value;
  }
  public resetTunnelDestinationIpv4SubnetMaskVariable() {
    this._tunnelDestinationIpv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationIpv4SubnetMaskVariableInput() {
    return this._tunnelDestinationIpv4SubnetMaskVariable;
  }

  // tunnel_route_via - computed: false, optional: true, required: false
  private _tunnelRouteVia?: string; 
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }
  public set tunnelRouteVia(value: string) {
    this._tunnelRouteVia = value;
  }
  public resetTunnelRouteVia() {
    this._tunnelRouteVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaInput() {
    return this._tunnelRouteVia;
  }

  // tunnel_route_via_variable - computed: false, optional: true, required: false
  private _tunnelRouteViaVariable?: string; 
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }
  public set tunnelRouteViaVariable(value: string) {
    this._tunnelRouteViaVariable = value;
  }
  public resetTunnelRouteViaVariable() {
    this._tunnelRouteViaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaVariableInput() {
    return this._tunnelRouteViaVariable;
  }

  // tunnel_source_interface - computed: false, optional: true, required: false
  private _tunnelSourceInterface?: string; 
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }
  public set tunnelSourceInterface(value: string) {
    this._tunnelSourceInterface = value;
  }
  public resetTunnelSourceInterface() {
    this._tunnelSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceInput() {
    return this._tunnelSourceInterface;
  }

  // tunnel_source_interface_variable - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceVariable?: string; 
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }
  public set tunnelSourceInterfaceVariable(value: string) {
    this._tunnelSourceInterfaceVariable = value;
  }
  public resetTunnelSourceInterfaceVariable() {
    this._tunnelSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceVariableInput() {
    return this._tunnelSourceInterfaceVariable;
  }

  // tunnel_source_ipv4_address - computed: false, optional: true, required: false
  private _tunnelSourceIpv4Address?: string; 
  public get tunnelSourceIpv4Address() {
    return this.getStringAttribute('tunnel_source_ipv4_address');
  }
  public set tunnelSourceIpv4Address(value: string) {
    this._tunnelSourceIpv4Address = value;
  }
  public resetTunnelSourceIpv4Address() {
    this._tunnelSourceIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4AddressInput() {
    return this._tunnelSourceIpv4Address;
  }

  // tunnel_source_ipv4_address_variable - computed: false, optional: true, required: false
  private _tunnelSourceIpv4AddressVariable?: string; 
  public get tunnelSourceIpv4AddressVariable() {
    return this.getStringAttribute('tunnel_source_ipv4_address_variable');
  }
  public set tunnelSourceIpv4AddressVariable(value: string) {
    this._tunnelSourceIpv4AddressVariable = value;
  }
  public resetTunnelSourceIpv4AddressVariable() {
    this._tunnelSourceIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4AddressVariableInput() {
    return this._tunnelSourceIpv4AddressVariable;
  }

  // tunnel_source_ipv4_subnet_mask - computed: false, optional: true, required: false
  private _tunnelSourceIpv4SubnetMask?: string; 
  public get tunnelSourceIpv4SubnetMask() {
    return this.getStringAttribute('tunnel_source_ipv4_subnet_mask');
  }
  public set tunnelSourceIpv4SubnetMask(value: string) {
    this._tunnelSourceIpv4SubnetMask = value;
  }
  public resetTunnelSourceIpv4SubnetMask() {
    this._tunnelSourceIpv4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4SubnetMaskInput() {
    return this._tunnelSourceIpv4SubnetMask;
  }

  // tunnel_source_ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _tunnelSourceIpv4SubnetMaskVariable?: string; 
  public get tunnelSourceIpv4SubnetMaskVariable() {
    return this.getStringAttribute('tunnel_source_ipv4_subnet_mask_variable');
  }
  public set tunnelSourceIpv4SubnetMaskVariable(value: string) {
    this._tunnelSourceIpv4SubnetMaskVariable = value;
  }
  public resetTunnelSourceIpv4SubnetMaskVariable() {
    this._tunnelSourceIpv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceIpv4SubnetMaskVariableInput() {
    return this._tunnelSourceIpv4SubnetMaskVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_tunnel_type: cdktf.stringToTerraform(this._applicationTunnelType),
      application_tunnel_type_variable: cdktf.stringToTerraform(this._applicationTunnelTypeVariable),
      clear_dont_fragment: cdktf.booleanToTerraform(this._clearDontFragment),
      clear_dont_fragment_variable: cdktf.stringToTerraform(this._clearDontFragmentVariable),
      description: cdktf.stringToTerraform(this._description),
      dpd_interval: cdktf.numberToTerraform(this._dpdInterval),
      dpd_interval_variable: cdktf.stringToTerraform(this._dpdIntervalVariable),
      dpd_retries: cdktf.numberToTerraform(this._dpdRetries),
      dpd_retries_variable: cdktf.stringToTerraform(this._dpdRetriesVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      ike_ciphersuite: cdktf.stringToTerraform(this._ikeCiphersuite),
      ike_ciphersuite_variable: cdktf.stringToTerraform(this._ikeCiphersuiteVariable),
      ike_diffie_hellman_group: cdktf.stringToTerraform(this._ikeDiffieHellmanGroup),
      ike_diffie_hellman_group_variable: cdktf.stringToTerraform(this._ikeDiffieHellmanGroupVariable),
      ike_id_local_end_point: cdktf.stringToTerraform(this._ikeIdLocalEndPoint),
      ike_id_local_end_point_variable: cdktf.stringToTerraform(this._ikeIdLocalEndPointVariable),
      ike_id_remote_end_point: cdktf.stringToTerraform(this._ikeIdRemoteEndPoint),
      ike_id_remote_end_point_variable: cdktf.stringToTerraform(this._ikeIdRemoteEndPointVariable),
      ike_integrity_protocol: cdktf.stringToTerraform(this._ikeIntegrityProtocol),
      ike_integrity_protocol_variable: cdktf.stringToTerraform(this._ikeIntegrityProtocolVariable),
      ike_preshared_key: cdktf.stringToTerraform(this._ikePresharedKey),
      ike_preshared_key_variable: cdktf.stringToTerraform(this._ikePresharedKeyVariable),
      ike_rekey_interval: cdktf.numberToTerraform(this._ikeRekeyInterval),
      ike_rekey_interval_variable: cdktf.stringToTerraform(this._ikeRekeyIntervalVariable),
      ike_version: cdktf.numberToTerraform(this._ikeVersion),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipsec_ciphersuite: cdktf.stringToTerraform(this._ipsecCiphersuite),
      ipsec_ciphersuite_variable: cdktf.stringToTerraform(this._ipsecCiphersuiteVariable),
      ipsec_rekey_interval: cdktf.numberToTerraform(this._ipsecRekeyInterval),
      ipsec_rekey_interval_variable: cdktf.stringToTerraform(this._ipsecRekeyIntervalVariable),
      ipsec_replay_window: cdktf.numberToTerraform(this._ipsecReplayWindow),
      ipsec_replay_window_variable: cdktf.stringToTerraform(this._ipsecReplayWindowVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      name: cdktf.stringToTerraform(this._name),
      perfect_forward_secrecy: cdktf.stringToTerraform(this._perfectForwardSecrecy),
      perfect_forward_secrecy_variable: cdktf.stringToTerraform(this._perfectForwardSecrecyVariable),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tracker_id: cdktf.stringToTerraform(this._trackerId),
      tracker_id_variable: cdktf.stringToTerraform(this._trackerIdVariable),
      tunnel_destination_ipv4_address: cdktf.stringToTerraform(this._tunnelDestinationIpv4Address),
      tunnel_destination_ipv4_address_variable: cdktf.stringToTerraform(this._tunnelDestinationIpv4AddressVariable),
      tunnel_destination_ipv4_subnet_mask: cdktf.stringToTerraform(this._tunnelDestinationIpv4SubnetMask),
      tunnel_destination_ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._tunnelDestinationIpv4SubnetMaskVariable),
      tunnel_route_via: cdktf.stringToTerraform(this._tunnelRouteVia),
      tunnel_route_via_variable: cdktf.stringToTerraform(this._tunnelRouteViaVariable),
      tunnel_source_interface: cdktf.stringToTerraform(this._tunnelSourceInterface),
      tunnel_source_interface_variable: cdktf.stringToTerraform(this._tunnelSourceInterfaceVariable),
      tunnel_source_ipv4_address: cdktf.stringToTerraform(this._tunnelSourceIpv4Address),
      tunnel_source_ipv4_address_variable: cdktf.stringToTerraform(this._tunnelSourceIpv4AddressVariable),
      tunnel_source_ipv4_subnet_mask: cdktf.stringToTerraform(this._tunnelSourceIpv4SubnetMask),
      tunnel_source_ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._tunnelSourceIpv4SubnetMaskVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_tunnel_type: {
        value: cdktf.stringToHclTerraform(this._applicationTunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_tunnel_type_variable: {
        value: cdktf.stringToHclTerraform(this._applicationTunnelTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_dont_fragment: {
        value: cdktf.booleanToHclTerraform(this._clearDontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_dont_fragment_variable: {
        value: cdktf.stringToHclTerraform(this._clearDontFragmentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_interval: {
        value: cdktf.numberToHclTerraform(this._dpdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_interval_variable: {
        value: cdktf.stringToHclTerraform(this._dpdIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_retries: {
        value: cdktf.numberToHclTerraform(this._dpdRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_retries_variable: {
        value: cdktf.stringToHclTerraform(this._dpdRetriesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ikeCiphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_ciphersuite_variable: {
        value: cdktf.stringToHclTerraform(this._ikeCiphersuiteVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_diffie_hellman_group: {
        value: cdktf.stringToHclTerraform(this._ikeDiffieHellmanGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_diffie_hellman_group_variable: {
        value: cdktf.stringToHclTerraform(this._ikeDiffieHellmanGroupVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_id_local_end_point: {
        value: cdktf.stringToHclTerraform(this._ikeIdLocalEndPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_id_local_end_point_variable: {
        value: cdktf.stringToHclTerraform(this._ikeIdLocalEndPointVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_id_remote_end_point: {
        value: cdktf.stringToHclTerraform(this._ikeIdRemoteEndPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_id_remote_end_point_variable: {
        value: cdktf.stringToHclTerraform(this._ikeIdRemoteEndPointVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_integrity_protocol: {
        value: cdktf.stringToHclTerraform(this._ikeIntegrityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_integrity_protocol_variable: {
        value: cdktf.stringToHclTerraform(this._ikeIntegrityProtocolVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_preshared_key: {
        value: cdktf.stringToHclTerraform(this._ikePresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_preshared_key_variable: {
        value: cdktf.stringToHclTerraform(this._ikePresharedKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_rekey_interval: {
        value: cdktf.numberToHclTerraform(this._ikeRekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_rekey_interval_variable: {
        value: cdktf.stringToHclTerraform(this._ikeRekeyIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_version: {
        value: cdktf.numberToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._ipMtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ipsecCiphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ciphersuite_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecCiphersuiteVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_rekey_interval: {
        value: cdktf.numberToHclTerraform(this._ipsecRekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_rekey_interval_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecRekeyIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_replay_window: {
        value: cdktf.numberToHclTerraform(this._ipsecReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_replay_window_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecReplayWindowVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMaskVariable),
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
      perfect_forward_secrecy: {
        value: cdktf.stringToHclTerraform(this._perfectForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perfect_forward_secrecy_variable: {
        value: cdktf.stringToHclTerraform(this._perfectForwardSecrecyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.numberToHclTerraform(this._tcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_id: {
        value: cdktf.stringToHclTerraform(this._trackerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_id_variable: {
        value: cdktf.stringToHclTerraform(this._trackerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_ipv4_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationIpv4SubnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteVia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteViaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_ipv4_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceIpv4SubnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
