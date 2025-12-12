// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackExpressconnectBgpPeersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers#bgp_group_id DataAlibabacloudstackExpressconnectBgpPeers#bgp_group_id}
  */
  readonly bgpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers#id DataAlibabacloudstackExpressconnectBgpPeers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers#ids DataAlibabacloudstackExpressconnectBgpPeers#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers#router_id DataAlibabacloudstackExpressconnectBgpPeers#router_id}
  */
  readonly routerId: string;
}
export interface DataAlibabacloudstackExpressconnectBgpPeersBgpPeers {
}

export function dataAlibabacloudstackExpressconnectBgpPeersBgpPeersToTerraform(struct?: DataAlibabacloudstackExpressconnectBgpPeersBgpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackExpressconnectBgpPeersBgpPeersToHclTerraform(struct?: DataAlibabacloudstackExpressconnectBgpPeersBgpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackExpressconnectBgpPeersBgpPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackExpressconnectBgpPeersBgpPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackExpressconnectBgpPeersBgpPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_key - computed: true, optional: false, required: false
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }

  // bfd_multi_hop - computed: true, optional: false, required: false
  public get bfdMultiHop() {
    return this.getNumberAttribute('bfd_multi_hop');
  }

  // bgp_group_id - computed: true, optional: false, required: false
  public get bgpGroupId() {
    return this.getStringAttribute('bgp_group_id');
  }

  // bgp_peer_id - computed: true, optional: false, required: false
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }

  // bgp_peer_name - computed: true, optional: false, required: false
  public get bgpPeerName() {
    return this.getStringAttribute('bgp_peer_name');
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_bfd - computed: true, optional: false, required: false
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }

  // hold - computed: true, optional: false, required: false
  public get hold() {
    return this.getNumberAttribute('hold');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // is_fake - computed: true, optional: false, required: false
  public get isFake() {
    return this.getBooleanAttribute('is_fake');
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // local_asn - computed: true, optional: false, required: false
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // route_limit - computed: true, optional: false, required: false
  public get routeLimit() {
    return this.getNumberAttribute('route_limit');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlibabacloudstackExpressconnectBgpPeersBgpPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackExpressconnectBgpPeersBgpPeersOutputReference {
    return new DataAlibabacloudstackExpressconnectBgpPeersBgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers alibabacloudstack_expressconnect_bgp_peers}
*/
export class DataAlibabacloudstackExpressconnectBgpPeers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_bgp_peers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackExpressconnectBgpPeers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackExpressconnectBgpPeers to import
  * @param importFromId The id of the existing DataAlibabacloudstackExpressconnectBgpPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackExpressconnectBgpPeers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_bgp_peers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/expressconnect_bgp_peers alibabacloudstack_expressconnect_bgp_peers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackExpressconnectBgpPeersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackExpressconnectBgpPeersConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_bgp_peers',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpGroupId = config.bgpGroupId;
    this._id = config.id;
    this._ids = config.ids;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_group_id - computed: false, optional: true, required: false
  private _bgpGroupId?: string; 
  public get bgpGroupId() {
    return this.getStringAttribute('bgp_group_id');
  }
  public set bgpGroupId(value: string) {
    this._bgpGroupId = value;
  }
  public resetBgpGroupId() {
    this._bgpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGroupIdInput() {
    return this._bgpGroupId;
  }

  // bgp_peers - computed: true, optional: false, required: false
  private _bgpPeers = new DataAlibabacloudstackExpressconnectBgpPeersBgpPeersList(this, "bgp_peers", false);
  public get bgpPeers() {
    return this._bgpPeers;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_group_id: cdktf.stringToTerraform(this._bgpGroupId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_group_id: {
        value: cdktf.stringToHclTerraform(this._bgpGroupId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
