// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceThirdPartyVpnPeersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#organization_id ApplianceThirdPartyVpnPeers#organization_id}
  */
  readonly organizationId: string;
  /**
  * The list of VPN peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#peers ApplianceThirdPartyVpnPeers#peers}
  */
  readonly peers: ApplianceThirdPartyVpnPeersPeers[] | cdktf.IResolvable;
}
export interface ApplianceThirdPartyVpnPeersPeers {
  /**
  * The eBGP hold timer in seconds for each neighbor. The eBGP hold timer must be an integer between 12 and 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_ebgp_hold_timer ApplianceThirdPartyVpnPeers#ebgp_neighbor_ebgp_hold_timer}
  */
  readonly ebgpNeighborEbgpHoldTimer?: number;
  /**
  * Configure this if the neighbor is not adjacent. The eBGP multi-hop must be an integer between 1 and 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_ebgp_multihop ApplianceThirdPartyVpnPeers#ebgp_neighbor_ebgp_multihop}
  */
  readonly ebgpNeighborEbgpMultihop?: number;
  /**
  * The IP version of the neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_ip_version ApplianceThirdPartyVpnPeers#ebgp_neighbor_ip_version}
  */
  readonly ebgpNeighborIpVersion?: number;
  /**
  * Configures the local metric associated with routes received from the remote peer. Routes from peers with lower metrics are will be preferred. Must be an integer between 0 and 4294967295. MED is 6th in the decision tree when identical routes from multiple peers exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_multi_exit_discriminator ApplianceThirdPartyVpnPeers#ebgp_neighbor_multi_exit_discriminator}
  */
  readonly ebgpNeighborMultiExitDiscriminator?: number;
  /**
  * IPv4/IPv6 address of the neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_neighbor_ip ApplianceThirdPartyVpnPeers#ebgp_neighbor_neighbor_ip}
  */
  readonly ebgpNeighborNeighborIp?: string;
  /**
  * Prepends the AS_PATH BGP Attribute associated with routes received from the remote peer. Configurable value of ASNs to prepend. Length of the array may not exceed 10, and each ASN in the array must be an integer between 1 and 4294967295. AS_PATH is 4th in the decision tree when identical routes from multiple peers exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_path_prepend ApplianceThirdPartyVpnPeers#ebgp_neighbor_path_prepend}
  */
  readonly ebgpNeighborPathPrepend?: number[];
  /**
  * Remote ASN of the neighbor. The remote ASN must be an integer between 1 and 4294967295.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_remote_as_number ApplianceThirdPartyVpnPeers#ebgp_neighbor_remote_as_number}
  */
  readonly ebgpNeighborRemoteAsNumber?: number;
  /**
  * Source IP of eBGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_source_ip ApplianceThirdPartyVpnPeers#ebgp_neighbor_source_ip}
  */
  readonly ebgpNeighborSourceIp?: string;
  /**
  * Configures the local metric associated with routes received from the remote peer. Routes from peers with lower metrics are will be preferred. Must be an integer between 0 and 4294967295. MED is 6th in the decision tree when identical routes from multiple peers exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ebgp_neighbor_weight ApplianceThirdPartyVpnPeers#ebgp_neighbor_weight}
  */
  readonly ebgpNeighborWeight?: number;
  /**
  * [optional] Both primary and backup tunnels are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#group_active_active_tunnel ApplianceThirdPartyVpnPeers#group_active_active_tunnel}
  */
  readonly groupActiveActiveTunnel?: boolean | cdktf.IResolvable;
  /**
  * [optional] When both primary and backup tunnels are down, direct traffic to the internet. Traffic will be routed via the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#group_failover_direct_to_internet ApplianceThirdPartyVpnPeers#group_failover_direct_to_internet}
  */
  readonly groupFailoverDirectToInternet?: boolean | cdktf.IResolvable;
  /**
  * [optional] Represents the ordering of primary and backup tunnels group. primary and backup tunnels are grouped by this number. If you submit a request with the numbers [1, 9, 999], these numbers will be automatically adjusted to a sequential order starting from 1. So, they will be changed to [1, 2, 3] to reflect their positions in the sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#group_number ApplianceThirdPartyVpnPeers#group_number}
  */
  readonly groupNumber?: number;
  /**
  * [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to `1` when omitted.
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ike_version ApplianceThirdPartyVpnPeers#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: `sha256`, `sha1`, `md5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_child_auth_algo ApplianceThirdPartyVpnPeers#ipsec_policies_child_auth_algo}
  */
  readonly ipsecPoliciesChildAuthAlgo?: string[];
  /**
  * This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: `aes256`, `aes192`, `aes128`, `tripledes`, `des`, `null`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_child_cipher_algo ApplianceThirdPartyVpnPeers#ipsec_policies_child_cipher_algo}
  */
  readonly ipsecPoliciesChildCipherAlgo?: string[];
  /**
  * The lifetime of the Phase 2 SA in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_child_lifetime ApplianceThirdPartyVpnPeers#ipsec_policies_child_lifetime}
  */
  readonly ipsecPoliciesChildLifetime?: number;
  /**
  * This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: `disabled`,`group14`, `group5`, `group2`, `group1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_child_pfs_group ApplianceThirdPartyVpnPeers#ipsec_policies_child_pfs_group}
  */
  readonly ipsecPoliciesChildPfsGroup?: string[];
  /**
  * This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: `sha256`, `sha1`, `md5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_ike_auth_algo ApplianceThirdPartyVpnPeers#ipsec_policies_ike_auth_algo}
  */
  readonly ipsecPoliciesIkeAuthAlgo?: string[];
  /**
  * This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: `aes256`, `aes192`, `aes128`, `tripledes`, `des`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_ike_cipher_algo ApplianceThirdPartyVpnPeers#ipsec_policies_ike_cipher_algo}
  */
  readonly ipsecPoliciesIkeCipherAlgo?: string[];
  /**
  * This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: `group14`, `group5`, `group2`, `group1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_ike_diffie_hellman_group ApplianceThirdPartyVpnPeers#ipsec_policies_ike_diffie_hellman_group}
  */
  readonly ipsecPoliciesIkeDiffieHellmanGroup?: string[];
  /**
  * The lifetime of the Phase 1 SA in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_ike_lifetime ApplianceThirdPartyVpnPeers#ipsec_policies_ike_lifetime}
  */
  readonly ipsecPoliciesIkeLifetime?: number;
  /**
  * [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: `prfsha256`, `prfsha1`, `prfmd5`, `default`. The `default` option can be used to default to the Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_ike_prf_algo ApplianceThirdPartyVpnPeers#ipsec_policies_ike_prf_algo}
  */
  readonly ipsecPoliciesIkePrfAlgo?: string[];
  /**
  * One of the following available presets: `default`, `aws`, `azure`, `umbrella`, `zscaler`. If this is provided, the `ipsecPolicies` parameter is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#ipsec_policies_preset ApplianceThirdPartyVpnPeers#ipsec_policies_preset}
  */
  readonly ipsecPoliciesPreset?: string;
  /**
  * [optional] If true, the VPN peer is route-based. If not included, the default is false. Supported only for MX 19.1 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#is_route_based ApplianceThirdPartyVpnPeers#is_route_based}
  */
  readonly isRouteBased?: boolean | cdktf.IResolvable;
  /**
  * [optional] The local ID is used to identify the MX to the peer. This will apply to all MXs this peer applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#local_id ApplianceThirdPartyVpnPeers#local_id}
  */
  readonly localId?: string;
  /**
  * The name of the VPN peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#name ApplianceThirdPartyVpnPeers#name}
  */
  readonly name: string;
  /**
  * [optional] A list of network IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#network_ids ApplianceThirdPartyVpnPeers#network_ids}
  */
  readonly networkIds?: string[];
  /**
  * A list of network tags that will connect with this peer. Use [`all`] for all networks. Use [`none`] for no networks. If not included, the default is [`all`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#network_tags ApplianceThirdPartyVpnPeers#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * The ID of the IPsec peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#peer_id ApplianceThirdPartyVpnPeers#peer_id}
  */
  readonly peerId?: string;
  /**
  * [optional] Represents the order of peer inside a group. If you submit a request with the numbers [1, 9, 999], these numbers will be automatically adjusted to a sequential order starting from 1. So, they will be changed to [1, 2, 3] to reflect their positions in the sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#priority_in_group ApplianceThirdPartyVpnPeers#priority_in_group}
  */
  readonly priorityInGroup?: number;
  /**
  * The list of the private subnets of the VPN peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#private_subnets ApplianceThirdPartyVpnPeers#private_subnets}
  */
  readonly privateSubnets: string[];
  /**
  * [optional] The public hostname of the VPN peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#public_hostname ApplianceThirdPartyVpnPeers#public_hostname}
  */
  readonly publicHostname?: string;
  /**
  * [optional] The public IP of the VPN peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#public_ip ApplianceThirdPartyVpnPeers#public_ip}
  */
  readonly publicIp?: string;
  /**
  * [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#remote_id ApplianceThirdPartyVpnPeers#remote_id}
  */
  readonly remoteId?: string;
  /**
  * The shared secret with the VPN peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#secret ApplianceThirdPartyVpnPeers#secret}
  */
  readonly secret: string;
  /**
  * The ID of the SLA policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#sla_policy_id ApplianceThirdPartyVpnPeers#sla_policy_id}
  */
  readonly slaPolicyId?: string;
}

export function applianceThirdPartyVpnPeersPeersToTerraform(struct?: ApplianceThirdPartyVpnPeersPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebgp_neighbor_ebgp_hold_timer: cdktf.numberToTerraform(struct!.ebgpNeighborEbgpHoldTimer),
    ebgp_neighbor_ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpNeighborEbgpMultihop),
    ebgp_neighbor_ip_version: cdktf.numberToTerraform(struct!.ebgpNeighborIpVersion),
    ebgp_neighbor_multi_exit_discriminator: cdktf.numberToTerraform(struct!.ebgpNeighborMultiExitDiscriminator),
    ebgp_neighbor_neighbor_ip: cdktf.stringToTerraform(struct!.ebgpNeighborNeighborIp),
    ebgp_neighbor_path_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ebgpNeighborPathPrepend),
    ebgp_neighbor_remote_as_number: cdktf.numberToTerraform(struct!.ebgpNeighborRemoteAsNumber),
    ebgp_neighbor_source_ip: cdktf.stringToTerraform(struct!.ebgpNeighborSourceIp),
    ebgp_neighbor_weight: cdktf.numberToTerraform(struct!.ebgpNeighborWeight),
    group_active_active_tunnel: cdktf.booleanToTerraform(struct!.groupActiveActiveTunnel),
    group_failover_direct_to_internet: cdktf.booleanToTerraform(struct!.groupFailoverDirectToInternet),
    group_number: cdktf.numberToTerraform(struct!.groupNumber),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    ipsec_policies_child_auth_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesChildAuthAlgo),
    ipsec_policies_child_cipher_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesChildCipherAlgo),
    ipsec_policies_child_lifetime: cdktf.numberToTerraform(struct!.ipsecPoliciesChildLifetime),
    ipsec_policies_child_pfs_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesChildPfsGroup),
    ipsec_policies_ike_auth_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesIkeAuthAlgo),
    ipsec_policies_ike_cipher_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesIkeCipherAlgo),
    ipsec_policies_ike_diffie_hellman_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesIkeDiffieHellmanGroup),
    ipsec_policies_ike_lifetime: cdktf.numberToTerraform(struct!.ipsecPoliciesIkeLifetime),
    ipsec_policies_ike_prf_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipsecPoliciesIkePrfAlgo),
    ipsec_policies_preset: cdktf.stringToTerraform(struct!.ipsecPoliciesPreset),
    is_route_based: cdktf.booleanToTerraform(struct!.isRouteBased),
    local_id: cdktf.stringToTerraform(struct!.localId),
    name: cdktf.stringToTerraform(struct!.name),
    network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkIds),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    peer_id: cdktf.stringToTerraform(struct!.peerId),
    priority_in_group: cdktf.numberToTerraform(struct!.priorityInGroup),
    private_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateSubnets),
    public_hostname: cdktf.stringToTerraform(struct!.publicHostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    secret: cdktf.stringToTerraform(struct!.secret),
    sla_policy_id: cdktf.stringToTerraform(struct!.slaPolicyId),
  }
}


export function applianceThirdPartyVpnPeersPeersToHclTerraform(struct?: ApplianceThirdPartyVpnPeersPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebgp_neighbor_ebgp_hold_timer: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborEbgpHoldTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_neighbor_ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborEbgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_neighbor_ip_version: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_neighbor_multi_exit_discriminator: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborMultiExitDiscriminator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_neighbor_neighbor_ip: {
      value: cdktf.stringToHclTerraform(struct!.ebgpNeighborNeighborIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_neighbor_path_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ebgpNeighborPathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ebgp_neighbor_remote_as_number: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborRemoteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_neighbor_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.ebgpNeighborSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_neighbor_weight: {
      value: cdktf.numberToHclTerraform(struct!.ebgpNeighborWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_active_active_tunnel: {
      value: cdktf.booleanToHclTerraform(struct!.groupActiveActiveTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_failover_direct_to_internet: {
      value: cdktf.booleanToHclTerraform(struct!.groupFailoverDirectToInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_number: {
      value: cdktf.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_policies_child_auth_algo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesChildAuthAlgo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_child_cipher_algo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesChildCipherAlgo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_child_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecPoliciesChildLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_policies_child_pfs_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesChildPfsGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_ike_auth_algo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesIkeAuthAlgo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_ike_cipher_algo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesIkeCipherAlgo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_ike_diffie_hellman_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesIkeDiffieHellmanGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecPoliciesIkeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_policies_ike_prf_algo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipsecPoliciesIkePrfAlgo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipsec_policies_preset: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPoliciesPreset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_route_based: {
      value: cdktf.booleanToHclTerraform(struct!.isRouteBased),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    peer_id: {
      value: cdktf.stringToHclTerraform(struct!.peerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_in_group: {
      value: cdktf.numberToHclTerraform(struct!.priorityInGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    public_hostname: {
      value: cdktf.stringToHclTerraform(struct!.publicHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.slaPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceThirdPartyVpnPeersPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceThirdPartyVpnPeersPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebgpNeighborEbgpHoldTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborEbgpHoldTimer = this._ebgpNeighborEbgpHoldTimer;
    }
    if (this._ebgpNeighborEbgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborEbgpMultihop = this._ebgpNeighborEbgpMultihop;
    }
    if (this._ebgpNeighborIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborIpVersion = this._ebgpNeighborIpVersion;
    }
    if (this._ebgpNeighborMultiExitDiscriminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborMultiExitDiscriminator = this._ebgpNeighborMultiExitDiscriminator;
    }
    if (this._ebgpNeighborNeighborIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborNeighborIp = this._ebgpNeighborNeighborIp;
    }
    if (this._ebgpNeighborPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborPathPrepend = this._ebgpNeighborPathPrepend;
    }
    if (this._ebgpNeighborRemoteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborRemoteAsNumber = this._ebgpNeighborRemoteAsNumber;
    }
    if (this._ebgpNeighborSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborSourceIp = this._ebgpNeighborSourceIp;
    }
    if (this._ebgpNeighborWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpNeighborWeight = this._ebgpNeighborWeight;
    }
    if (this._groupActiveActiveTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupActiveActiveTunnel = this._groupActiveActiveTunnel;
    }
    if (this._groupFailoverDirectToInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFailoverDirectToInternet = this._groupFailoverDirectToInternet;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._ipsecPoliciesChildAuthAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesChildAuthAlgo = this._ipsecPoliciesChildAuthAlgo;
    }
    if (this._ipsecPoliciesChildCipherAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesChildCipherAlgo = this._ipsecPoliciesChildCipherAlgo;
    }
    if (this._ipsecPoliciesChildLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesChildLifetime = this._ipsecPoliciesChildLifetime;
    }
    if (this._ipsecPoliciesChildPfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesChildPfsGroup = this._ipsecPoliciesChildPfsGroup;
    }
    if (this._ipsecPoliciesIkeAuthAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesIkeAuthAlgo = this._ipsecPoliciesIkeAuthAlgo;
    }
    if (this._ipsecPoliciesIkeCipherAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesIkeCipherAlgo = this._ipsecPoliciesIkeCipherAlgo;
    }
    if (this._ipsecPoliciesIkeDiffieHellmanGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesIkeDiffieHellmanGroup = this._ipsecPoliciesIkeDiffieHellmanGroup;
    }
    if (this._ipsecPoliciesIkeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesIkeLifetime = this._ipsecPoliciesIkeLifetime;
    }
    if (this._ipsecPoliciesIkePrfAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesIkePrfAlgo = this._ipsecPoliciesIkePrfAlgo;
    }
    if (this._ipsecPoliciesPreset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPoliciesPreset = this._ipsecPoliciesPreset;
    }
    if (this._isRouteBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRouteBased = this._isRouteBased;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIds = this._networkIds;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._peerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerId = this._peerId;
    }
    if (this._priorityInGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityInGroup = this._priorityInGroup;
    }
    if (this._privateSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnets = this._privateSubnets;
    }
    if (this._publicHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicHostname = this._publicHostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._slaPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaPolicyId = this._slaPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceThirdPartyVpnPeersPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebgpNeighborEbgpHoldTimer = undefined;
      this._ebgpNeighborEbgpMultihop = undefined;
      this._ebgpNeighborIpVersion = undefined;
      this._ebgpNeighborMultiExitDiscriminator = undefined;
      this._ebgpNeighborNeighborIp = undefined;
      this._ebgpNeighborPathPrepend = undefined;
      this._ebgpNeighborRemoteAsNumber = undefined;
      this._ebgpNeighborSourceIp = undefined;
      this._ebgpNeighborWeight = undefined;
      this._groupActiveActiveTunnel = undefined;
      this._groupFailoverDirectToInternet = undefined;
      this._groupNumber = undefined;
      this._ikeVersion = undefined;
      this._ipsecPoliciesChildAuthAlgo = undefined;
      this._ipsecPoliciesChildCipherAlgo = undefined;
      this._ipsecPoliciesChildLifetime = undefined;
      this._ipsecPoliciesChildPfsGroup = undefined;
      this._ipsecPoliciesIkeAuthAlgo = undefined;
      this._ipsecPoliciesIkeCipherAlgo = undefined;
      this._ipsecPoliciesIkeDiffieHellmanGroup = undefined;
      this._ipsecPoliciesIkeLifetime = undefined;
      this._ipsecPoliciesIkePrfAlgo = undefined;
      this._ipsecPoliciesPreset = undefined;
      this._isRouteBased = undefined;
      this._localId = undefined;
      this._name = undefined;
      this._networkIds = undefined;
      this._networkTags = undefined;
      this._peerId = undefined;
      this._priorityInGroup = undefined;
      this._privateSubnets = undefined;
      this._publicHostname = undefined;
      this._publicIp = undefined;
      this._remoteId = undefined;
      this._secret = undefined;
      this._slaPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebgpNeighborEbgpHoldTimer = value.ebgpNeighborEbgpHoldTimer;
      this._ebgpNeighborEbgpMultihop = value.ebgpNeighborEbgpMultihop;
      this._ebgpNeighborIpVersion = value.ebgpNeighborIpVersion;
      this._ebgpNeighborMultiExitDiscriminator = value.ebgpNeighborMultiExitDiscriminator;
      this._ebgpNeighborNeighborIp = value.ebgpNeighborNeighborIp;
      this._ebgpNeighborPathPrepend = value.ebgpNeighborPathPrepend;
      this._ebgpNeighborRemoteAsNumber = value.ebgpNeighborRemoteAsNumber;
      this._ebgpNeighborSourceIp = value.ebgpNeighborSourceIp;
      this._ebgpNeighborWeight = value.ebgpNeighborWeight;
      this._groupActiveActiveTunnel = value.groupActiveActiveTunnel;
      this._groupFailoverDirectToInternet = value.groupFailoverDirectToInternet;
      this._groupNumber = value.groupNumber;
      this._ikeVersion = value.ikeVersion;
      this._ipsecPoliciesChildAuthAlgo = value.ipsecPoliciesChildAuthAlgo;
      this._ipsecPoliciesChildCipherAlgo = value.ipsecPoliciesChildCipherAlgo;
      this._ipsecPoliciesChildLifetime = value.ipsecPoliciesChildLifetime;
      this._ipsecPoliciesChildPfsGroup = value.ipsecPoliciesChildPfsGroup;
      this._ipsecPoliciesIkeAuthAlgo = value.ipsecPoliciesIkeAuthAlgo;
      this._ipsecPoliciesIkeCipherAlgo = value.ipsecPoliciesIkeCipherAlgo;
      this._ipsecPoliciesIkeDiffieHellmanGroup = value.ipsecPoliciesIkeDiffieHellmanGroup;
      this._ipsecPoliciesIkeLifetime = value.ipsecPoliciesIkeLifetime;
      this._ipsecPoliciesIkePrfAlgo = value.ipsecPoliciesIkePrfAlgo;
      this._ipsecPoliciesPreset = value.ipsecPoliciesPreset;
      this._isRouteBased = value.isRouteBased;
      this._localId = value.localId;
      this._name = value.name;
      this._networkIds = value.networkIds;
      this._networkTags = value.networkTags;
      this._peerId = value.peerId;
      this._priorityInGroup = value.priorityInGroup;
      this._privateSubnets = value.privateSubnets;
      this._publicHostname = value.publicHostname;
      this._publicIp = value.publicIp;
      this._remoteId = value.remoteId;
      this._secret = value.secret;
      this._slaPolicyId = value.slaPolicyId;
    }
  }

  // ebgp_neighbor_ebgp_hold_timer - computed: false, optional: true, required: false
  private _ebgpNeighborEbgpHoldTimer?: number; 
  public get ebgpNeighborEbgpHoldTimer() {
    return this.getNumberAttribute('ebgp_neighbor_ebgp_hold_timer');
  }
  public set ebgpNeighborEbgpHoldTimer(value: number) {
    this._ebgpNeighborEbgpHoldTimer = value;
  }
  public resetEbgpNeighborEbgpHoldTimer() {
    this._ebgpNeighborEbgpHoldTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborEbgpHoldTimerInput() {
    return this._ebgpNeighborEbgpHoldTimer;
  }

  // ebgp_neighbor_ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpNeighborEbgpMultihop?: number; 
  public get ebgpNeighborEbgpMultihop() {
    return this.getNumberAttribute('ebgp_neighbor_ebgp_multihop');
  }
  public set ebgpNeighborEbgpMultihop(value: number) {
    this._ebgpNeighborEbgpMultihop = value;
  }
  public resetEbgpNeighborEbgpMultihop() {
    this._ebgpNeighborEbgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborEbgpMultihopInput() {
    return this._ebgpNeighborEbgpMultihop;
  }

  // ebgp_neighbor_ip_version - computed: false, optional: true, required: false
  private _ebgpNeighborIpVersion?: number; 
  public get ebgpNeighborIpVersion() {
    return this.getNumberAttribute('ebgp_neighbor_ip_version');
  }
  public set ebgpNeighborIpVersion(value: number) {
    this._ebgpNeighborIpVersion = value;
  }
  public resetEbgpNeighborIpVersion() {
    this._ebgpNeighborIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborIpVersionInput() {
    return this._ebgpNeighborIpVersion;
  }

  // ebgp_neighbor_multi_exit_discriminator - computed: false, optional: true, required: false
  private _ebgpNeighborMultiExitDiscriminator?: number; 
  public get ebgpNeighborMultiExitDiscriminator() {
    return this.getNumberAttribute('ebgp_neighbor_multi_exit_discriminator');
  }
  public set ebgpNeighborMultiExitDiscriminator(value: number) {
    this._ebgpNeighborMultiExitDiscriminator = value;
  }
  public resetEbgpNeighborMultiExitDiscriminator() {
    this._ebgpNeighborMultiExitDiscriminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborMultiExitDiscriminatorInput() {
    return this._ebgpNeighborMultiExitDiscriminator;
  }

  // ebgp_neighbor_neighbor_ip - computed: false, optional: true, required: false
  private _ebgpNeighborNeighborIp?: string; 
  public get ebgpNeighborNeighborIp() {
    return this.getStringAttribute('ebgp_neighbor_neighbor_ip');
  }
  public set ebgpNeighborNeighborIp(value: string) {
    this._ebgpNeighborNeighborIp = value;
  }
  public resetEbgpNeighborNeighborIp() {
    this._ebgpNeighborNeighborIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborNeighborIpInput() {
    return this._ebgpNeighborNeighborIp;
  }

  // ebgp_neighbor_path_prepend - computed: false, optional: true, required: false
  private _ebgpNeighborPathPrepend?: number[]; 
  public get ebgpNeighborPathPrepend() {
    return this.getNumberListAttribute('ebgp_neighbor_path_prepend');
  }
  public set ebgpNeighborPathPrepend(value: number[]) {
    this._ebgpNeighborPathPrepend = value;
  }
  public resetEbgpNeighborPathPrepend() {
    this._ebgpNeighborPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborPathPrependInput() {
    return this._ebgpNeighborPathPrepend;
  }

  // ebgp_neighbor_remote_as_number - computed: false, optional: true, required: false
  private _ebgpNeighborRemoteAsNumber?: number; 
  public get ebgpNeighborRemoteAsNumber() {
    return this.getNumberAttribute('ebgp_neighbor_remote_as_number');
  }
  public set ebgpNeighborRemoteAsNumber(value: number) {
    this._ebgpNeighborRemoteAsNumber = value;
  }
  public resetEbgpNeighborRemoteAsNumber() {
    this._ebgpNeighborRemoteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborRemoteAsNumberInput() {
    return this._ebgpNeighborRemoteAsNumber;
  }

  // ebgp_neighbor_source_ip - computed: false, optional: true, required: false
  private _ebgpNeighborSourceIp?: string; 
  public get ebgpNeighborSourceIp() {
    return this.getStringAttribute('ebgp_neighbor_source_ip');
  }
  public set ebgpNeighborSourceIp(value: string) {
    this._ebgpNeighborSourceIp = value;
  }
  public resetEbgpNeighborSourceIp() {
    this._ebgpNeighborSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborSourceIpInput() {
    return this._ebgpNeighborSourceIp;
  }

  // ebgp_neighbor_weight - computed: false, optional: true, required: false
  private _ebgpNeighborWeight?: number; 
  public get ebgpNeighborWeight() {
    return this.getNumberAttribute('ebgp_neighbor_weight');
  }
  public set ebgpNeighborWeight(value: number) {
    this._ebgpNeighborWeight = value;
  }
  public resetEbgpNeighborWeight() {
    this._ebgpNeighborWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpNeighborWeightInput() {
    return this._ebgpNeighborWeight;
  }

  // group_active_active_tunnel - computed: false, optional: true, required: false
  private _groupActiveActiveTunnel?: boolean | cdktf.IResolvable; 
  public get groupActiveActiveTunnel() {
    return this.getBooleanAttribute('group_active_active_tunnel');
  }
  public set groupActiveActiveTunnel(value: boolean | cdktf.IResolvable) {
    this._groupActiveActiveTunnel = value;
  }
  public resetGroupActiveActiveTunnel() {
    this._groupActiveActiveTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupActiveActiveTunnelInput() {
    return this._groupActiveActiveTunnel;
  }

  // group_failover_direct_to_internet - computed: false, optional: true, required: false
  private _groupFailoverDirectToInternet?: boolean | cdktf.IResolvable; 
  public get groupFailoverDirectToInternet() {
    return this.getBooleanAttribute('group_failover_direct_to_internet');
  }
  public set groupFailoverDirectToInternet(value: boolean | cdktf.IResolvable) {
    this._groupFailoverDirectToInternet = value;
  }
  public resetGroupFailoverDirectToInternet() {
    this._groupFailoverDirectToInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFailoverDirectToInternetInput() {
    return this._groupFailoverDirectToInternet;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // ipsec_policies_child_auth_algo - computed: false, optional: true, required: false
  private _ipsecPoliciesChildAuthAlgo?: string[]; 
  public get ipsecPoliciesChildAuthAlgo() {
    return this.getListAttribute('ipsec_policies_child_auth_algo');
  }
  public set ipsecPoliciesChildAuthAlgo(value: string[]) {
    this._ipsecPoliciesChildAuthAlgo = value;
  }
  public resetIpsecPoliciesChildAuthAlgo() {
    this._ipsecPoliciesChildAuthAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesChildAuthAlgoInput() {
    return this._ipsecPoliciesChildAuthAlgo;
  }

  // ipsec_policies_child_cipher_algo - computed: false, optional: true, required: false
  private _ipsecPoliciesChildCipherAlgo?: string[]; 
  public get ipsecPoliciesChildCipherAlgo() {
    return this.getListAttribute('ipsec_policies_child_cipher_algo');
  }
  public set ipsecPoliciesChildCipherAlgo(value: string[]) {
    this._ipsecPoliciesChildCipherAlgo = value;
  }
  public resetIpsecPoliciesChildCipherAlgo() {
    this._ipsecPoliciesChildCipherAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesChildCipherAlgoInput() {
    return this._ipsecPoliciesChildCipherAlgo;
  }

  // ipsec_policies_child_lifetime - computed: false, optional: true, required: false
  private _ipsecPoliciesChildLifetime?: number; 
  public get ipsecPoliciesChildLifetime() {
    return this.getNumberAttribute('ipsec_policies_child_lifetime');
  }
  public set ipsecPoliciesChildLifetime(value: number) {
    this._ipsecPoliciesChildLifetime = value;
  }
  public resetIpsecPoliciesChildLifetime() {
    this._ipsecPoliciesChildLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesChildLifetimeInput() {
    return this._ipsecPoliciesChildLifetime;
  }

  // ipsec_policies_child_pfs_group - computed: false, optional: true, required: false
  private _ipsecPoliciesChildPfsGroup?: string[]; 
  public get ipsecPoliciesChildPfsGroup() {
    return this.getListAttribute('ipsec_policies_child_pfs_group');
  }
  public set ipsecPoliciesChildPfsGroup(value: string[]) {
    this._ipsecPoliciesChildPfsGroup = value;
  }
  public resetIpsecPoliciesChildPfsGroup() {
    this._ipsecPoliciesChildPfsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesChildPfsGroupInput() {
    return this._ipsecPoliciesChildPfsGroup;
  }

  // ipsec_policies_ike_auth_algo - computed: false, optional: true, required: false
  private _ipsecPoliciesIkeAuthAlgo?: string[]; 
  public get ipsecPoliciesIkeAuthAlgo() {
    return this.getListAttribute('ipsec_policies_ike_auth_algo');
  }
  public set ipsecPoliciesIkeAuthAlgo(value: string[]) {
    this._ipsecPoliciesIkeAuthAlgo = value;
  }
  public resetIpsecPoliciesIkeAuthAlgo() {
    this._ipsecPoliciesIkeAuthAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesIkeAuthAlgoInput() {
    return this._ipsecPoliciesIkeAuthAlgo;
  }

  // ipsec_policies_ike_cipher_algo - computed: false, optional: true, required: false
  private _ipsecPoliciesIkeCipherAlgo?: string[]; 
  public get ipsecPoliciesIkeCipherAlgo() {
    return this.getListAttribute('ipsec_policies_ike_cipher_algo');
  }
  public set ipsecPoliciesIkeCipherAlgo(value: string[]) {
    this._ipsecPoliciesIkeCipherAlgo = value;
  }
  public resetIpsecPoliciesIkeCipherAlgo() {
    this._ipsecPoliciesIkeCipherAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesIkeCipherAlgoInput() {
    return this._ipsecPoliciesIkeCipherAlgo;
  }

  // ipsec_policies_ike_diffie_hellman_group - computed: false, optional: true, required: false
  private _ipsecPoliciesIkeDiffieHellmanGroup?: string[]; 
  public get ipsecPoliciesIkeDiffieHellmanGroup() {
    return this.getListAttribute('ipsec_policies_ike_diffie_hellman_group');
  }
  public set ipsecPoliciesIkeDiffieHellmanGroup(value: string[]) {
    this._ipsecPoliciesIkeDiffieHellmanGroup = value;
  }
  public resetIpsecPoliciesIkeDiffieHellmanGroup() {
    this._ipsecPoliciesIkeDiffieHellmanGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesIkeDiffieHellmanGroupInput() {
    return this._ipsecPoliciesIkeDiffieHellmanGroup;
  }

  // ipsec_policies_ike_lifetime - computed: false, optional: true, required: false
  private _ipsecPoliciesIkeLifetime?: number; 
  public get ipsecPoliciesIkeLifetime() {
    return this.getNumberAttribute('ipsec_policies_ike_lifetime');
  }
  public set ipsecPoliciesIkeLifetime(value: number) {
    this._ipsecPoliciesIkeLifetime = value;
  }
  public resetIpsecPoliciesIkeLifetime() {
    this._ipsecPoliciesIkeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesIkeLifetimeInput() {
    return this._ipsecPoliciesIkeLifetime;
  }

  // ipsec_policies_ike_prf_algo - computed: false, optional: true, required: false
  private _ipsecPoliciesIkePrfAlgo?: string[]; 
  public get ipsecPoliciesIkePrfAlgo() {
    return this.getListAttribute('ipsec_policies_ike_prf_algo');
  }
  public set ipsecPoliciesIkePrfAlgo(value: string[]) {
    this._ipsecPoliciesIkePrfAlgo = value;
  }
  public resetIpsecPoliciesIkePrfAlgo() {
    this._ipsecPoliciesIkePrfAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesIkePrfAlgoInput() {
    return this._ipsecPoliciesIkePrfAlgo;
  }

  // ipsec_policies_preset - computed: false, optional: true, required: false
  private _ipsecPoliciesPreset?: string; 
  public get ipsecPoliciesPreset() {
    return this.getStringAttribute('ipsec_policies_preset');
  }
  public set ipsecPoliciesPreset(value: string) {
    this._ipsecPoliciesPreset = value;
  }
  public resetIpsecPoliciesPreset() {
    this._ipsecPoliciesPreset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPoliciesPresetInput() {
    return this._ipsecPoliciesPreset;
  }

  // is_route_based - computed: false, optional: true, required: false
  private _isRouteBased?: boolean | cdktf.IResolvable; 
  public get isRouteBased() {
    return this.getBooleanAttribute('is_route_based');
  }
  public set isRouteBased(value: boolean | cdktf.IResolvable) {
    this._isRouteBased = value;
  }
  public resetIsRouteBased() {
    this._isRouteBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRouteBasedInput() {
    return this._isRouteBased;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
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

  // network_ids - computed: false, optional: true, required: false
  private _networkIds?: string[]; 
  public get networkIds() {
    return this.getListAttribute('network_ids');
  }
  public set networkIds(value: string[]) {
    this._networkIds = value;
  }
  public resetNetworkIds() {
    this._networkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdsInput() {
    return this._networkIds;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }

  // peer_id - computed: false, optional: true, required: false
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  public resetPeerId() {
    this._peerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // priority_in_group - computed: false, optional: true, required: false
  private _priorityInGroup?: number; 
  public get priorityInGroup() {
    return this.getNumberAttribute('priority_in_group');
  }
  public set priorityInGroup(value: number) {
    this._priorityInGroup = value;
  }
  public resetPriorityInGroup() {
    this._priorityInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInGroupInput() {
    return this._priorityInGroup;
  }

  // private_subnets - computed: false, optional: false, required: true
  private _privateSubnets?: string[]; 
  public get privateSubnets() {
    return this.getListAttribute('private_subnets');
  }
  public set privateSubnets(value: string[]) {
    this._privateSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetsInput() {
    return this._privateSubnets;
  }

  // public_hostname - computed: false, optional: true, required: false
  private _publicHostname?: string; 
  public get publicHostname() {
    return this.getStringAttribute('public_hostname');
  }
  public set publicHostname(value: string) {
    this._publicHostname = value;
  }
  public resetPublicHostname() {
    this._publicHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicHostnameInput() {
    return this._publicHostname;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // sla_policy_id - computed: false, optional: true, required: false
  private _slaPolicyId?: string; 
  public get slaPolicyId() {
    return this.getStringAttribute('sla_policy_id');
  }
  public set slaPolicyId(value: string) {
    this._slaPolicyId = value;
  }
  public resetSlaPolicyId() {
    this._slaPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPolicyIdInput() {
    return this._slaPolicyId;
  }
}

export class ApplianceThirdPartyVpnPeersPeersList extends cdktf.ComplexList {
  public internalValue? : ApplianceThirdPartyVpnPeersPeers[] | cdktf.IResolvable

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
  public get(index: number): ApplianceThirdPartyVpnPeersPeersOutputReference {
    return new ApplianceThirdPartyVpnPeersPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers meraki_appliance_third_party_vpn_peers}
*/
export class ApplianceThirdPartyVpnPeers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_third_party_vpn_peers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceThirdPartyVpnPeers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceThirdPartyVpnPeers to import
  * @param importFromId The id of the existing ApplianceThirdPartyVpnPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceThirdPartyVpnPeers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_third_party_vpn_peers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_third_party_vpn_peers meraki_appliance_third_party_vpn_peers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceThirdPartyVpnPeersConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceThirdPartyVpnPeersConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_third_party_vpn_peers',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
    this._peers.internalValue = config.peers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // peers - computed: false, optional: false, required: true
  private _peers = new ApplianceThirdPartyVpnPeersPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: ApplianceThirdPartyVpnPeersPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
      peers: cdktf.listMapper(applianceThirdPartyVpnPeersPeersToTerraform, false)(this._peers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers: {
        value: cdktf.listMapperHcl(applianceThirdPartyVpnPeersPeersToHclTerraform, false)(this._peers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceThirdPartyVpnPeersPeersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
