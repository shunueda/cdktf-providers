// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackCenTransitRouterMulticastDomainMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#id DataAlibabacloudstackCenTransitRouterMulticastDomainMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#ids DataAlibabacloudstackCenTransitRouterMulticastDomainMembers#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#transit_router_attachment_id DataAlibabacloudstackCenTransitRouterMulticastDomainMembers#transit_router_attachment_id}
  */
  readonly transitRouterAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#transit_router_multicast_domain_id DataAlibabacloudstackCenTransitRouterMulticastDomainMembers#transit_router_multicast_domain_id}
  */
  readonly transitRouterMulticastDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#vswitch_id DataAlibabacloudstackCenTransitRouterMulticastDomainMembers#vswitch_id}
  */
  readonly vswitchId?: string;
}
export interface DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroups {
}

export function dataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsToTerraform(struct?: DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsToHclTerraform(struct?: DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_ip_address - computed: true, optional: false, required: false
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }

  // group_member - computed: true, optional: false, required: false
  public get groupMember() {
    return this.getBooleanAttribute('group_member');
  }

  // group_source - computed: true, optional: false, required: false
  public get groupSource() {
    return this.getBooleanAttribute('group_source');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_multicast_domain_id - computed: true, optional: false, required: false
  public get transitRouterMulticastDomainId() {
    return this.getStringAttribute('transit_router_multicast_domain_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
}

export class DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsOutputReference {
    return new DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members alibabacloudstack_cen_transit_router_multicast_domain_members}
*/
export class DataAlibabacloudstackCenTransitRouterMulticastDomainMembers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_multicast_domain_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackCenTransitRouterMulticastDomainMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackCenTransitRouterMulticastDomainMembers to import
  * @param importFromId The id of the existing DataAlibabacloudstackCenTransitRouterMulticastDomainMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackCenTransitRouterMulticastDomainMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_multicast_domain_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cen_transit_router_multicast_domain_members alibabacloudstack_cen_transit_router_multicast_domain_members} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackCenTransitRouterMulticastDomainMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackCenTransitRouterMulticastDomainMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_multicast_domain_members',
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
    this._id = config.id;
    this._ids = config.ids;
    this._transitRouterAttachmentId = config.transitRouterAttachmentId;
    this._transitRouterMulticastDomainId = config.transitRouterMulticastDomainId;
    this._vswitchId = config.vswitchId;
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

  // transit_router_attachment_id - computed: false, optional: true, required: false
  private _transitRouterAttachmentId?: string; 
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }
  public set transitRouterAttachmentId(value: string) {
    this._transitRouterAttachmentId = value;
  }
  public resetTransitRouterAttachmentId() {
    this._transitRouterAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentIdInput() {
    return this._transitRouterAttachmentId;
  }

  // transit_router_multicast_domain_id - computed: false, optional: false, required: true
  private _transitRouterMulticastDomainId?: string; 
  public get transitRouterMulticastDomainId() {
    return this.getStringAttribute('transit_router_multicast_domain_id');
  }
  public set transitRouterMulticastDomainId(value: string) {
    this._transitRouterMulticastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterMulticastDomainIdInput() {
    return this._transitRouterMulticastDomainId;
  }

  // transit_router_multicast_groups - computed: true, optional: false, required: false
  private _transitRouterMulticastGroups = new DataAlibabacloudstackCenTransitRouterMulticastDomainMembersTransitRouterMulticastGroupsList(this, "transit_router_multicast_groups", false);
  public get transitRouterMulticastGroups() {
    return this._transitRouterMulticastGroups;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      transit_router_attachment_id: cdktf.stringToTerraform(this._transitRouterAttachmentId),
      transit_router_multicast_domain_id: cdktf.stringToTerraform(this._transitRouterMulticastDomainId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_router_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_multicast_domain_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterMulticastDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
