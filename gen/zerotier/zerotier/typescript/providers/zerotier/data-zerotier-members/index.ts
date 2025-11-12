// https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZerotierMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members#id DataZerotierMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the network to retrieve members from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members#network_id DataZerotierMembers#network_id}
  */
  readonly networkId: string;
}
export interface DataZerotierMembersMembers {
}

export function dataZerotierMembersMembersToTerraform(struct?: DataZerotierMembersMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZerotierMembersMembersToHclTerraform(struct?: DataZerotierMembersMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZerotierMembersMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZerotierMembersMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZerotierMembersMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_ethernet_bridging - computed: true, optional: false, required: false
  public get allowEthernetBridging() {
    return this.getBooleanAttribute('allow_ethernet_bridging');
  }

  // authorized - computed: true, optional: false, required: false
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capabilities')));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // ip_assignments - computed: true, optional: false, required: false
  public get ipAssignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_assignments'));
  }

  // ipv4_assignments - computed: true, optional: false, required: false
  public get ipv4Assignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_assignments'));
  }

  // ipv6_assignments - computed: true, optional: false, required: false
  public get ipv6Assignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_assignments'));
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // no_auto_assign_ips - computed: true, optional: false, required: false
  public get noAutoAssignIps() {
    return this.getBooleanAttribute('no_auto_assign_ips');
  }

  // rfc4193 - computed: true, optional: false, required: false
  public get rfc4193() {
    return this.getStringAttribute('rfc4193');
  }

  // sixplane - computed: true, optional: false, required: false
  public get sixplane() {
    return this.getStringAttribute('sixplane');
  }

  // sso_exempt - computed: true, optional: false, required: false
  public get ssoExempt() {
    return this.getBooleanAttribute('sso_exempt');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.NumberListList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataZerotierMembersMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataZerotierMembersMembersOutputReference {
    return new DataZerotierMembersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members zerotier_members}
*/
export class DataZerotierMembers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zerotier_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZerotierMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZerotierMembers to import
  * @param importFromId The id of the existing DataZerotierMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZerotierMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zerotier_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/data-sources/members zerotier_members} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZerotierMembersConfig
  */
  public constructor(scope: Construct, id: string, config: DataZerotierMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'zerotier_members',
      terraformGeneratorMetadata: {
        providerName: 'zerotier',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._networkId = config.networkId;
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

  // members - computed: true, optional: false, required: false
  private _members = new DataZerotierMembersMembersList(this, "members", false);
  public get members() {
    return this._members;
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
      id: cdktf.stringToTerraform(this._id),
      network_id: cdktf.stringToTerraform(this._networkId),
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
