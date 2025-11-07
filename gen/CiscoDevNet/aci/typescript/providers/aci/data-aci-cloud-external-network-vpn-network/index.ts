// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudExternalNetworkVpnNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#aci_cloud_external_network_dn DataAciCloudExternalNetworkVpnNetwork#aci_cloud_external_network_dn}
  */
  readonly aciCloudExternalNetworkDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#annotation DataAciCloudExternalNetworkVpnNetwork#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#description DataAciCloudExternalNetworkVpnNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#id DataAciCloudExternalNetworkVpnNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#name DataAciCloudExternalNetworkVpnNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#name_alias DataAciCloudExternalNetworkVpnNetwork#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#remote_site_id DataAciCloudExternalNetworkVpnNetwork#remote_site_id}
  */
  readonly remoteSiteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#remote_site_name DataAciCloudExternalNetworkVpnNetwork#remote_site_name}
  */
  readonly remoteSiteName?: string;
  /**
  * ipsec_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#ipsec_tunnel DataAciCloudExternalNetworkVpnNetwork#ipsec_tunnel}
  */
  readonly ipsecTunnel?: DataAciCloudExternalNetworkVpnNetworkIpsecTunnel[] | cdktf.IResolvable;
}
export interface DataAciCloudExternalNetworkVpnNetworkIpsecTunnel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#bgp_peer_asn DataAciCloudExternalNetworkVpnNetwork#bgp_peer_asn}
  */
  readonly bgpPeerAsn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#ike_version DataAciCloudExternalNetworkVpnNetwork#ike_version}
  */
  readonly ikeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#pre_shared_key DataAciCloudExternalNetworkVpnNetwork#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#public_ip_address DataAciCloudExternalNetworkVpnNetwork#public_ip_address}
  */
  readonly publicIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#source_interfaces DataAciCloudExternalNetworkVpnNetwork#source_interfaces}
  */
  readonly sourceInterfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#subnet_pool_name DataAciCloudExternalNetworkVpnNetwork#subnet_pool_name}
  */
  readonly subnetPoolName: string;
}

export function dataAciCloudExternalNetworkVpnNetworkIpsecTunnelToTerraform(struct?: DataAciCloudExternalNetworkVpnNetworkIpsecTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_peer_asn: cdktf.stringToTerraform(struct!.bgpPeerAsn),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    public_ip_address: cdktf.stringToTerraform(struct!.publicIpAddress),
    source_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceInterfaces),
    subnet_pool_name: cdktf.stringToTerraform(struct!.subnetPoolName),
  }
}


export function dataAciCloudExternalNetworkVpnNetworkIpsecTunnelToHclTerraform(struct?: DataAciCloudExternalNetworkVpnNetworkIpsecTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_peer_asn: {
      value: cdktf.stringToHclTerraform(struct!.bgpPeerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciCloudExternalNetworkVpnNetworkIpsecTunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudExternalNetworkVpnNetworkIpsecTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpPeerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerAsn = this._bgpPeerAsn;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._publicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddress = this._publicIpAddress;
    }
    if (this._sourceInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaces = this._sourceInterfaces;
    }
    if (this._subnetPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetPoolName = this._subnetPoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudExternalNetworkVpnNetworkIpsecTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpPeerAsn = undefined;
      this._ikeVersion = undefined;
      this._preSharedKey = undefined;
      this._publicIpAddress = undefined;
      this._sourceInterfaces = undefined;
      this._subnetPoolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpPeerAsn = value.bgpPeerAsn;
      this._ikeVersion = value.ikeVersion;
      this._preSharedKey = value.preSharedKey;
      this._publicIpAddress = value.publicIpAddress;
      this._sourceInterfaces = value.sourceInterfaces;
      this._subnetPoolName = value.subnetPoolName;
    }
  }

  // bgp_peer_asn - computed: false, optional: false, required: true
  private _bgpPeerAsn?: string; 
  public get bgpPeerAsn() {
    return this.getStringAttribute('bgp_peer_asn');
  }
  public set bgpPeerAsn(value: string) {
    this._bgpPeerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerAsnInput() {
    return this._bgpPeerAsn;
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // pre_shared_key - computed: true, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // public_ip_address - computed: false, optional: false, required: true
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }

  // source_interfaces - computed: true, optional: true, required: false
  private _sourceInterfaces?: string[]; 
  public get sourceInterfaces() {
    return this.getListAttribute('source_interfaces');
  }
  public set sourceInterfaces(value: string[]) {
    this._sourceInterfaces = value;
  }
  public resetSourceInterfaces() {
    this._sourceInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfacesInput() {
    return this._sourceInterfaces;
  }

  // subnet_pool_name - computed: false, optional: false, required: true
  private _subnetPoolName?: string; 
  public get subnetPoolName() {
    return this.getStringAttribute('subnet_pool_name');
  }
  public set subnetPoolName(value: string) {
    this._subnetPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPoolNameInput() {
    return this._subnetPoolName;
  }
}

export class DataAciCloudExternalNetworkVpnNetworkIpsecTunnelList extends cdktf.ComplexList {
  public internalValue? : DataAciCloudExternalNetworkVpnNetworkIpsecTunnel[] | cdktf.IResolvable

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
  public get(index: number): DataAciCloudExternalNetworkVpnNetworkIpsecTunnelOutputReference {
    return new DataAciCloudExternalNetworkVpnNetworkIpsecTunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network aci_cloud_external_network_vpn_network}
*/
export class DataAciCloudExternalNetworkVpnNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_external_network_vpn_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudExternalNetworkVpnNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudExternalNetworkVpnNetwork to import
  * @param importFromId The id of the existing DataAciCloudExternalNetworkVpnNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudExternalNetworkVpnNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_external_network_vpn_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_external_network_vpn_network aci_cloud_external_network_vpn_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudExternalNetworkVpnNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudExternalNetworkVpnNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_external_network_vpn_network',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aciCloudExternalNetworkDn = config.aciCloudExternalNetworkDn;
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._remoteSiteId = config.remoteSiteId;
    this._remoteSiteName = config.remoteSiteName;
    this._ipsecTunnel.internalValue = config.ipsecTunnel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aci_cloud_external_network_dn - computed: false, optional: false, required: true
  private _aciCloudExternalNetworkDn?: string; 
  public get aciCloudExternalNetworkDn() {
    return this.getStringAttribute('aci_cloud_external_network_dn');
  }
  public set aciCloudExternalNetworkDn(value: string) {
    this._aciCloudExternalNetworkDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aciCloudExternalNetworkDnInput() {
    return this._aciCloudExternalNetworkDn;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // remote_site_id - computed: true, optional: true, required: false
  private _remoteSiteId?: string; 
  public get remoteSiteId() {
    return this.getStringAttribute('remote_site_id');
  }
  public set remoteSiteId(value: string) {
    this._remoteSiteId = value;
  }
  public resetRemoteSiteId() {
    this._remoteSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSiteIdInput() {
    return this._remoteSiteId;
  }

  // remote_site_name - computed: true, optional: true, required: false
  private _remoteSiteName?: string; 
  public get remoteSiteName() {
    return this.getStringAttribute('remote_site_name');
  }
  public set remoteSiteName(value: string) {
    this._remoteSiteName = value;
  }
  public resetRemoteSiteName() {
    this._remoteSiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSiteNameInput() {
    return this._remoteSiteName;
  }

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel = new DataAciCloudExternalNetworkVpnNetworkIpsecTunnelList(this, "ipsec_tunnel", true);
  public get ipsecTunnel() {
    return this._ipsecTunnel;
  }
  public putIpsecTunnel(value: DataAciCloudExternalNetworkVpnNetworkIpsecTunnel[] | cdktf.IResolvable) {
    this._ipsecTunnel.internalValue = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aci_cloud_external_network_dn: cdktf.stringToTerraform(this._aciCloudExternalNetworkDn),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      remote_site_id: cdktf.stringToTerraform(this._remoteSiteId),
      remote_site_name: cdktf.stringToTerraform(this._remoteSiteName),
      ipsec_tunnel: cdktf.listMapper(dataAciCloudExternalNetworkVpnNetworkIpsecTunnelToTerraform, true)(this._ipsecTunnel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aci_cloud_external_network_dn: {
        value: cdktf.stringToHclTerraform(this._aciCloudExternalNetworkDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_site_id: {
        value: cdktf.stringToHclTerraform(this._remoteSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_site_name: {
        value: cdktf.stringToHclTerraform(this._remoteSiteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_tunnel: {
        value: cdktf.listMapperHcl(dataAciCloudExternalNetworkVpnNetworkIpsecTunnelToHclTerraform, true)(this._ipsecTunnel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciCloudExternalNetworkVpnNetworkIpsecTunnelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
