// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBlockchainPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer#blockchain_platform_id DataOciBlockchainPeer#blockchain_platform_id}
  */
  readonly blockchainPlatformId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer#peer_id DataOciBlockchainPeer#peer_id}
  */
  readonly peerId: string;
}
export interface DataOciBlockchainPeerOcpuAllocationParam {
}

export function dataOciBlockchainPeerOcpuAllocationParamToTerraform(struct?: DataOciBlockchainPeerOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBlockchainPeerOcpuAllocationParamToHclTerraform(struct?: DataOciBlockchainPeerOcpuAllocationParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBlockchainPeerOcpuAllocationParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBlockchainPeerOcpuAllocationParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBlockchainPeerOcpuAllocationParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ocpu_allocation_number - computed: true, optional: false, required: false
  public get ocpuAllocationNumber() {
    return this.getNumberAttribute('ocpu_allocation_number');
  }
}

export class DataOciBlockchainPeerOcpuAllocationParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBlockchainPeerOcpuAllocationParamOutputReference {
    return new DataOciBlockchainPeerOcpuAllocationParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer oci_blockchain_peer}
*/
export class DataOciBlockchainPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_blockchain_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBlockchainPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBlockchainPeer to import
  * @param importFromId The id of the existing DataOciBlockchainPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBlockchainPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_blockchain_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/blockchain_peer oci_blockchain_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBlockchainPeerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBlockchainPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_blockchain_peer',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockchainPlatformId = config.blockchainPlatformId;
    this._peerId = config.peerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad - computed: true, optional: false, required: false
  public get ad() {
    return this.getStringAttribute('ad');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // blockchain_platform_id - computed: false, optional: false, required: true
  private _blockchainPlatformId?: string; 
  public get blockchainPlatformId() {
    return this.getStringAttribute('blockchain_platform_id');
  }
  public set blockchainPlatformId(value: string) {
    this._blockchainPlatformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainPlatformIdInput() {
    return this._blockchainPlatformId;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ocpu_allocation_param - computed: true, optional: false, required: false
  private _ocpuAllocationParam = new DataOciBlockchainPeerOcpuAllocationParamList(this, "ocpu_allocation_param", false);
  public get ocpuAllocationParam() {
    return this._ocpuAllocationParam;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // peer_key - computed: true, optional: false, required: false
  public get peerKey() {
    return this.getStringAttribute('peer_key');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blockchain_platform_id: cdktf.stringToTerraform(this._blockchainPlatformId),
      peer_id: cdktf.stringToTerraform(this._peerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blockchain_platform_id: {
        value: cdktf.stringToHclTerraform(this._blockchainPlatformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_id: {
        value: cdktf.stringToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
