// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTransitRouterPrefixListAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#id CenTransitRouterPrefixListAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#next_hop CenTransitRouterPrefixListAssociation#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#next_hop_type CenTransitRouterPrefixListAssociation#next_hop_type}
  */
  readonly nextHopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#owner_uid CenTransitRouterPrefixListAssociation#owner_uid}
  */
  readonly ownerUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#prefix_list_id CenTransitRouterPrefixListAssociation#prefix_list_id}
  */
  readonly prefixListId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#transit_router_id CenTransitRouterPrefixListAssociation#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#transit_router_table_id CenTransitRouterPrefixListAssociation#transit_router_table_id}
  */
  readonly transitRouterTableId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#timeouts CenTransitRouterPrefixListAssociation#timeouts}
  */
  readonly timeouts?: CenTransitRouterPrefixListAssociationTimeouts;
}
export interface CenTransitRouterPrefixListAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#create CenTransitRouterPrefixListAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#delete CenTransitRouterPrefixListAssociation#delete}
  */
  readonly delete?: string;
}

export function cenTransitRouterPrefixListAssociationTimeoutsToTerraform(struct?: CenTransitRouterPrefixListAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cenTransitRouterPrefixListAssociationTimeoutsToHclTerraform(struct?: CenTransitRouterPrefixListAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTransitRouterPrefixListAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTransitRouterPrefixListAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTransitRouterPrefixListAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association alicloud_cen_transit_router_prefix_list_association}
*/
export class CenTransitRouterPrefixListAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_prefix_list_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTransitRouterPrefixListAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTransitRouterPrefixListAssociation to import
  * @param importFromId The id of the existing CenTransitRouterPrefixListAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTransitRouterPrefixListAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_prefix_list_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_transit_router_prefix_list_association alicloud_cen_transit_router_prefix_list_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTransitRouterPrefixListAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CenTransitRouterPrefixListAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_prefix_list_association',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nextHop = config.nextHop;
    this._nextHopType = config.nextHopType;
    this._ownerUid = config.ownerUid;
    this._prefixListId = config.prefixListId;
    this._transitRouterId = config.transitRouterId;
    this._transitRouterTableId = config.transitRouterTableId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_type - computed: true, optional: true, required: false
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  public resetNextHopType() {
    this._nextHopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // owner_uid - computed: true, optional: true, required: false
  private _ownerUid?: number; 
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }
  public set ownerUid(value: number) {
    this._ownerUid = value;
  }
  public resetOwnerUid() {
    this._ownerUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // prefix_list_id - computed: false, optional: false, required: true
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // transit_router_table_id - computed: false, optional: false, required: true
  private _transitRouterTableId?: string; 
  public get transitRouterTableId() {
    return this.getStringAttribute('transit_router_table_id');
  }
  public set transitRouterTableId(value: string) {
    this._transitRouterTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterTableIdInput() {
    return this._transitRouterTableId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTransitRouterPrefixListAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTransitRouterPrefixListAssociationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      next_hop_type: cdktf.stringToTerraform(this._nextHopType),
      owner_uid: cdktf.numberToTerraform(this._ownerUid),
      prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_table_id: cdktf.stringToTerraform(this._transitRouterTableId),
      timeouts: cenTransitRouterPrefixListAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_type: {
        value: cdktf.stringToHclTerraform(this._nextHopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_uid: {
        value: cdktf.numberToHclTerraform(this._ownerUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._prefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTransitRouterPrefixListAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTransitRouterPrefixListAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
