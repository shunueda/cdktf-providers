// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_vpn_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceVpnBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_vpn_bgp#network_id DataMerakiApplianceVpnBgp#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiApplianceVpnBgpNeighbors {
}

export function dataMerakiApplianceVpnBgpNeighborsToTerraform(struct?: DataMerakiApplianceVpnBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceVpnBgpNeighborsToHclTerraform(struct?: DataMerakiApplianceVpnBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceVpnBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceVpnBgpNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceVpnBgpNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_transit - computed: true, optional: false, required: false
  public get allowTransit() {
    return this.getBooleanAttribute('allow_transit');
  }

  // authentication_password - computed: true, optional: false, required: false
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }

  // ebgp_hold_timer - computed: true, optional: false, required: false
  public get ebgpHoldTimer() {
    return this.getNumberAttribute('ebgp_hold_timer');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // multi_exit_discriminator - computed: true, optional: false, required: false
  public get multiExitDiscriminator() {
    return this.getNumberAttribute('multi_exit_discriminator');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // path_prepend - computed: true, optional: false, required: false
  public get pathPrepend() {
    return this.getNumberListAttribute('path_prepend');
  }

  // receive_limit - computed: true, optional: false, required: false
  public get receiveLimit() {
    return this.getNumberAttribute('receive_limit');
  }

  // remote_as_number - computed: true, optional: false, required: false
  public get remoteAsNumber() {
    return this.getNumberAttribute('remote_as_number');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // ttl_security_enabled - computed: true, optional: false, required: false
  public get ttlSecurityEnabled() {
    return this.getBooleanAttribute('ttl_security_enabled');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataMerakiApplianceVpnBgpNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceVpnBgpNeighborsOutputReference {
    return new DataMerakiApplianceVpnBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_vpn_bgp meraki_appliance_vpn_bgp}
*/
export class DataMerakiApplianceVpnBgp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vpn_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceVpnBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceVpnBgp to import
  * @param importFromId The id of the existing DataMerakiApplianceVpnBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_vpn_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceVpnBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vpn_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_vpn_bgp meraki_appliance_vpn_bgp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceVpnBgpConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceVpnBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vpn_bgp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ibgp_hold_timer - computed: true, optional: false, required: false
  public get ibgpHoldTimer() {
    return this.getNumberAttribute('ibgp_hold_timer');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbors - computed: true, optional: false, required: false
  private _neighbors = new DataMerakiApplianceVpnBgpNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
