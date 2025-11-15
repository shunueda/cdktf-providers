// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/appliance_third_party_vpn_peers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceThirdPartyVpnPeersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/appliance_third_party_vpn_peers#organization_id DataMerakiApplianceThirdPartyVpnPeers#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiApplianceThirdPartyVpnPeersPeers {
}

export function dataMerakiApplianceThirdPartyVpnPeersPeersToTerraform(struct?: DataMerakiApplianceThirdPartyVpnPeersPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceThirdPartyVpnPeersPeersToHclTerraform(struct?: DataMerakiApplianceThirdPartyVpnPeersPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceThirdPartyVpnPeersPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiApplianceThirdPartyVpnPeersPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceThirdPartyVpnPeersPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebgp_neighbor_ebgp_hold_timer - computed: true, optional: false, required: false
  public get ebgpNeighborEbgpHoldTimer() {
    return this.getNumberAttribute('ebgp_neighbor_ebgp_hold_timer');
  }

  // ebgp_neighbor_ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpNeighborEbgpMultihop() {
    return this.getNumberAttribute('ebgp_neighbor_ebgp_multihop');
  }

  // ebgp_neighbor_ip_version - computed: true, optional: false, required: false
  public get ebgpNeighborIpVersion() {
    return this.getNumberAttribute('ebgp_neighbor_ip_version');
  }

  // ebgp_neighbor_multi_exit_discriminator - computed: true, optional: false, required: false
  public get ebgpNeighborMultiExitDiscriminator() {
    return this.getNumberAttribute('ebgp_neighbor_multi_exit_discriminator');
  }

  // ebgp_neighbor_neighbor_ip - computed: true, optional: false, required: false
  public get ebgpNeighborNeighborIp() {
    return this.getStringAttribute('ebgp_neighbor_neighbor_ip');
  }

  // ebgp_neighbor_path_prepend - computed: true, optional: false, required: false
  public get ebgpNeighborPathPrepend() {
    return this.getNumberListAttribute('ebgp_neighbor_path_prepend');
  }

  // ebgp_neighbor_remote_as_number - computed: true, optional: false, required: false
  public get ebgpNeighborRemoteAsNumber() {
    return this.getNumberAttribute('ebgp_neighbor_remote_as_number');
  }

  // ebgp_neighbor_source_ip - computed: true, optional: false, required: false
  public get ebgpNeighborSourceIp() {
    return this.getStringAttribute('ebgp_neighbor_source_ip');
  }

  // ebgp_neighbor_weight - computed: true, optional: false, required: false
  public get ebgpNeighborWeight() {
    return this.getNumberAttribute('ebgp_neighbor_weight');
  }

  // group_active_active_tunnel - computed: true, optional: false, required: false
  public get groupActiveActiveTunnel() {
    return this.getBooleanAttribute('group_active_active_tunnel');
  }

  // group_failover_direct_to_internet - computed: true, optional: false, required: false
  public get groupFailoverDirectToInternet() {
    return this.getBooleanAttribute('group_failover_direct_to_internet');
  }

  // group_number - computed: true, optional: false, required: false
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // ipsec_policies_child_auth_algo - computed: true, optional: false, required: false
  public get ipsecPoliciesChildAuthAlgo() {
    return this.getListAttribute('ipsec_policies_child_auth_algo');
  }

  // ipsec_policies_child_cipher_algo - computed: true, optional: false, required: false
  public get ipsecPoliciesChildCipherAlgo() {
    return this.getListAttribute('ipsec_policies_child_cipher_algo');
  }

  // ipsec_policies_child_lifetime - computed: true, optional: false, required: false
  public get ipsecPoliciesChildLifetime() {
    return this.getNumberAttribute('ipsec_policies_child_lifetime');
  }

  // ipsec_policies_child_pfs_group - computed: true, optional: false, required: false
  public get ipsecPoliciesChildPfsGroup() {
    return this.getListAttribute('ipsec_policies_child_pfs_group');
  }

  // ipsec_policies_ike_auth_algo - computed: true, optional: false, required: false
  public get ipsecPoliciesIkeAuthAlgo() {
    return this.getListAttribute('ipsec_policies_ike_auth_algo');
  }

  // ipsec_policies_ike_cipher_algo - computed: true, optional: false, required: false
  public get ipsecPoliciesIkeCipherAlgo() {
    return this.getListAttribute('ipsec_policies_ike_cipher_algo');
  }

  // ipsec_policies_ike_diffie_hellman_group - computed: true, optional: false, required: false
  public get ipsecPoliciesIkeDiffieHellmanGroup() {
    return this.getListAttribute('ipsec_policies_ike_diffie_hellman_group');
  }

  // ipsec_policies_ike_lifetime - computed: true, optional: false, required: false
  public get ipsecPoliciesIkeLifetime() {
    return this.getNumberAttribute('ipsec_policies_ike_lifetime');
  }

  // ipsec_policies_ike_prf_algo - computed: true, optional: false, required: false
  public get ipsecPoliciesIkePrfAlgo() {
    return this.getListAttribute('ipsec_policies_ike_prf_algo');
  }

  // ipsec_policies_preset - computed: true, optional: false, required: false
  public get ipsecPoliciesPreset() {
    return this.getStringAttribute('ipsec_policies_preset');
  }

  // is_route_based - computed: true, optional: false, required: false
  public get isRouteBased() {
    return this.getBooleanAttribute('is_route_based');
  }

  // local_id - computed: true, optional: false, required: false
  public get localId() {
    return this.getStringAttribute('local_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_ids - computed: true, optional: false, required: false
  public get networkIds() {
    return this.getListAttribute('network_ids');
  }

  // network_tags - computed: true, optional: false, required: false
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // priority_in_group - computed: true, optional: false, required: false
  public get priorityInGroup() {
    return this.getNumberAttribute('priority_in_group');
  }

  // private_subnets - computed: true, optional: false, required: false
  public get privateSubnets() {
    return this.getListAttribute('private_subnets');
  }

  // public_hostname - computed: true, optional: false, required: false
  public get publicHostname() {
    return this.getStringAttribute('public_hostname');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // sla_policy_id - computed: true, optional: false, required: false
  public get slaPolicyId() {
    return this.getStringAttribute('sla_policy_id');
  }
}

export class DataMerakiApplianceThirdPartyVpnPeersPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceThirdPartyVpnPeersPeersOutputReference {
    return new DataMerakiApplianceThirdPartyVpnPeersPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/appliance_third_party_vpn_peers meraki_appliance_third_party_vpn_peers}
*/
export class DataMerakiApplianceThirdPartyVpnPeers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_third_party_vpn_peers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceThirdPartyVpnPeers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceThirdPartyVpnPeers to import
  * @param importFromId The id of the existing DataMerakiApplianceThirdPartyVpnPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/appliance_third_party_vpn_peers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceThirdPartyVpnPeers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_third_party_vpn_peers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/appliance_third_party_vpn_peers meraki_appliance_third_party_vpn_peers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceThirdPartyVpnPeersConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceThirdPartyVpnPeersConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_third_party_vpn_peers',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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

  // peers - computed: true, optional: false, required: false
  private _peers = new DataMerakiApplianceThirdPartyVpnPeersPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
