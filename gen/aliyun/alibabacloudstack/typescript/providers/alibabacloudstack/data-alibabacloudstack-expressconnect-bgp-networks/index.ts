// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackExpressconnectBgpNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks#dst_cidr_block DataAlibabacloudstackExpressconnectBgpNetworks#dst_cidr_block}
  */
  readonly dstCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks#id DataAlibabacloudstackExpressconnectBgpNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks#ids DataAlibabacloudstackExpressconnectBgpNetworks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks#router_id DataAlibabacloudstackExpressconnectBgpNetworks#router_id}
  */
  readonly routerId: string;
}
export interface DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworks {
}

export function dataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksToTerraform(struct?: DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksToHclTerraform(struct?: DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dst_cidr_block - computed: true, optional: false, required: false
  public get dstCidrBlock() {
    return this.getStringAttribute('dst_cidr_block');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

export class DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksOutputReference {
    return new DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks alibabacloudstack_expressconnect_bgp_networks}
*/
export class DataAlibabacloudstackExpressconnectBgpNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_expressconnect_bgp_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackExpressconnectBgpNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackExpressconnectBgpNetworks to import
  * @param importFromId The id of the existing DataAlibabacloudstackExpressconnectBgpNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackExpressconnectBgpNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_expressconnect_bgp_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/expressconnect_bgp_networks alibabacloudstack_expressconnect_bgp_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackExpressconnectBgpNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackExpressconnectBgpNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_expressconnect_bgp_networks',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstCidrBlock = config.dstCidrBlock;
    this._id = config.id;
    this._ids = config.ids;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_networks - computed: true, optional: false, required: false
  private _bgpNetworks = new DataAlibabacloudstackExpressconnectBgpNetworksBgpNetworksList(this, "bgp_networks", false);
  public get bgpNetworks() {
    return this._bgpNetworks;
  }

  // dst_cidr_block - computed: false, optional: true, required: false
  private _dstCidrBlock?: string; 
  public get dstCidrBlock() {
    return this.getStringAttribute('dst_cidr_block');
  }
  public set dstCidrBlock(value: string) {
    this._dstCidrBlock = value;
  }
  public resetDstCidrBlock() {
    this._dstCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrBlockInput() {
    return this._dstCidrBlock;
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
      dst_cidr_block: cdktf.stringToTerraform(this._dstCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_cidr_block: {
        value: cdktf.stringToHclTerraform(this._dstCidrBlock),
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
