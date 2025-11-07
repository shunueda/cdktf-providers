// https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdmPeeringGroupPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group ID from which the link will originate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#group_id DataSdmPeeringGroupPeer#group_id}
  */
  readonly groupId?: string;
  /**
  * Unique identifier of the Attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#id DataSdmPeeringGroupPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Peering Group ID to which Group ID will link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#peers_with_group_id DataSdmPeeringGroupPeer#peers_with_group_id}
  */
  readonly peersWithGroupId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#timeouts DataSdmPeeringGroupPeer#timeouts}
  */
  readonly timeouts?: DataSdmPeeringGroupPeerTimeouts;
}
export interface DataSdmPeeringGroupPeerPeeringGroupPeers {
}

export function dataSdmPeeringGroupPeerPeeringGroupPeersToTerraform(struct?: DataSdmPeeringGroupPeerPeeringGroupPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmPeeringGroupPeerPeeringGroupPeersToHclTerraform(struct?: DataSdmPeeringGroupPeerPeeringGroupPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmPeeringGroupPeerPeeringGroupPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmPeeringGroupPeerPeeringGroupPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmPeeringGroupPeerPeeringGroupPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peers_with_group_id - computed: true, optional: false, required: false
  public get peersWithGroupId() {
    return this.getStringAttribute('peers_with_group_id');
  }
}

export class DataSdmPeeringGroupPeerPeeringGroupPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmPeeringGroupPeerPeeringGroupPeersOutputReference {
    return new DataSdmPeeringGroupPeerPeeringGroupPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmPeeringGroupPeerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#default DataSdmPeeringGroupPeer#default}
  */
  readonly default?: string;
}

export function dataSdmPeeringGroupPeerTimeoutsToTerraform(struct?: DataSdmPeeringGroupPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataSdmPeeringGroupPeerTimeoutsToHclTerraform(struct?: DataSdmPeeringGroupPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmPeeringGroupPeerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSdmPeeringGroupPeerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmPeeringGroupPeerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer sdm_peering_group_peer}
*/
export class DataSdmPeeringGroupPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_peering_group_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdmPeeringGroupPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdmPeeringGroupPeer to import
  * @param importFromId The id of the existing DataSdmPeeringGroupPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdmPeeringGroupPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_peering_group_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/peering_group_peer sdm_peering_group_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdmPeeringGroupPeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdmPeeringGroupPeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_peering_group_peer',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._peersWithGroupId = config.peersWithGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: true, required: false
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // peering_group_peers - computed: true, optional: false, required: false
  private _peeringGroupPeers = new DataSdmPeeringGroupPeerPeeringGroupPeersList(this, "peering_group_peers", false);
  public get peeringGroupPeers() {
    return this._peeringGroupPeers;
  }

  // peers_with_group_id - computed: false, optional: true, required: false
  private _peersWithGroupId?: string; 
  public get peersWithGroupId() {
    return this.getStringAttribute('peers_with_group_id');
  }
  public set peersWithGroupId(value: string) {
    this._peersWithGroupId = value;
  }
  public resetPeersWithGroupId() {
    this._peersWithGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersWithGroupIdInput() {
    return this._peersWithGroupId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSdmPeeringGroupPeerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSdmPeeringGroupPeerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      peers_with_group_id: cdktf.stringToTerraform(this._peersWithGroupId),
      timeouts: dataSdmPeeringGroupPeerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      peers_with_group_id: {
        value: cdktf.stringToHclTerraform(this._peersWithGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSdmPeeringGroupPeerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSdmPeeringGroupPeerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
