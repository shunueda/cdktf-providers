// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudVpnIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the IPSec Gateway that the tunnel belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel#gateway_id DataIonoscloudVpnIpsecTunnel#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * The ID of the IPSec Gateway Tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel#id DataIonoscloudVpnIpsecTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel#location DataIonoscloudVpnIpsecTunnel#location}
  */
  readonly location?: string;
  /**
  * The human readable name of your IPSec Gateway Tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel#name DataIonoscloudVpnIpsecTunnel#name}
  */
  readonly name?: string;
}
export interface DataIonoscloudVpnIpsecTunnelAuth {
}

export function dataIonoscloudVpnIpsecTunnelAuthToTerraform(struct?: DataIonoscloudVpnIpsecTunnelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudVpnIpsecTunnelAuthToHclTerraform(struct?: DataIonoscloudVpnIpsecTunnelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudVpnIpsecTunnelAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudVpnIpsecTunnelAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudVpnIpsecTunnelAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }
}

export class DataIonoscloudVpnIpsecTunnelAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataIonoscloudVpnIpsecTunnelAuthOutputReference {
    return new DataIonoscloudVpnIpsecTunnelAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudVpnIpsecTunnelEsp {
}

export function dataIonoscloudVpnIpsecTunnelEspToTerraform(struct?: DataIonoscloudVpnIpsecTunnelEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudVpnIpsecTunnelEspToHclTerraform(struct?: DataIonoscloudVpnIpsecTunnelEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudVpnIpsecTunnelEspOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudVpnIpsecTunnelEsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudVpnIpsecTunnelEsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // diffie_hellman_group - computed: true, optional: false, required: false
  public get diffieHellmanGroup() {
    return this.getStringAttribute('diffie_hellman_group');
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // integrity_algorithm - computed: true, optional: false, required: false
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
}

export class DataIonoscloudVpnIpsecTunnelEspList extends cdktf.ComplexList {

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
  public get(index: number): DataIonoscloudVpnIpsecTunnelEspOutputReference {
    return new DataIonoscloudVpnIpsecTunnelEspOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudVpnIpsecTunnelIke {
}

export function dataIonoscloudVpnIpsecTunnelIkeToTerraform(struct?: DataIonoscloudVpnIpsecTunnelIke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudVpnIpsecTunnelIkeToHclTerraform(struct?: DataIonoscloudVpnIpsecTunnelIke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudVpnIpsecTunnelIkeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudVpnIpsecTunnelIke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudVpnIpsecTunnelIke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // diffie_hellman_group - computed: true, optional: false, required: false
  public get diffieHellmanGroup() {
    return this.getStringAttribute('diffie_hellman_group');
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // integrity_algorithm - computed: true, optional: false, required: false
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
}

export class DataIonoscloudVpnIpsecTunnelIkeList extends cdktf.ComplexList {

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
  public get(index: number): DataIonoscloudVpnIpsecTunnelIkeOutputReference {
    return new DataIonoscloudVpnIpsecTunnelIkeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}
*/
export class DataIonoscloudVpnIpsecTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_vpn_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudVpnIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudVpnIpsecTunnel to import
  * @param importFromId The id of the existing DataIonoscloudVpnIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudVpnIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_vpn_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudVpnIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudVpnIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_vpn_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: true, optional: false, required: false
  private _auth = new DataIonoscloudVpnIpsecTunnelAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }

  // cloud_network_cidrs - computed: true, optional: false, required: false
  public get cloudNetworkCidrs() {
    return this.getListAttribute('cloud_network_cidrs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // esp - computed: true, optional: false, required: false
  private _esp = new DataIonoscloudVpnIpsecTunnelEspList(this, "esp", false);
  public get esp() {
    return this._esp;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // ike - computed: true, optional: false, required: false
  private _ike = new DataIonoscloudVpnIpsecTunnelIkeList(this, "ike", false);
  public get ike() {
    return this._ike;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peer_network_cidrs - computed: true, optional: false, required: false
  public get peerNetworkCidrs() {
    return this.getListAttribute('peer_network_cidrs');
  }

  // remote_host - computed: true, optional: false, required: false
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
