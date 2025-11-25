// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbMembersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#id LbMembersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#pool_id LbMembersV2#pool_id}
  */
  readonly poolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#region LbMembersV2#region}
  */
  readonly region?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#member LbMembersV2#member}
  */
  readonly member?: LbMembersV2Member[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#timeouts LbMembersV2#timeouts}
  */
  readonly timeouts?: LbMembersV2Timeouts;
}
export interface LbMembersV2Member {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#address LbMembersV2#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#admin_state_up LbMembersV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#backup LbMembersV2#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#monitor_address LbMembersV2#monitor_address}
  */
  readonly monitorAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#monitor_port LbMembersV2#monitor_port}
  */
  readonly monitorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#name LbMembersV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#protocol_port LbMembersV2#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#subnet_id LbMembersV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#weight LbMembersV2#weight}
  */
  readonly weight?: number;
}

export function lbMembersV2MemberToTerraform(struct?: LbMembersV2Member | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    admin_state_up: cdktf.booleanToTerraform(struct!.adminStateUp),
    backup: cdktf.booleanToTerraform(struct!.backup),
    monitor_address: cdktf.stringToTerraform(struct!.monitorAddress),
    monitor_port: cdktf.numberToTerraform(struct!.monitorPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol_port: cdktf.numberToTerraform(struct!.protocolPort),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function lbMembersV2MemberToHclTerraform(struct?: LbMembersV2Member | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_state_up: {
      value: cdktf.booleanToHclTerraform(struct!.adminStateUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_address: {
      value: cdktf.stringToHclTerraform(struct!.monitorAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_port: {
      value: cdktf.numberToHclTerraform(struct!.monitorPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_port: {
      value: cdktf.numberToHclTerraform(struct!.protocolPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbMembersV2MemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbMembersV2Member | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._adminStateUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminStateUp = this._adminStateUp;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._monitorAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAddress = this._monitorAddress;
    }
    if (this._monitorPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorPort = this._monitorPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocolPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPort = this._protocolPort;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbMembersV2Member | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._adminStateUp = undefined;
      this._backup = undefined;
      this._monitorAddress = undefined;
      this._monitorPort = undefined;
      this._name = undefined;
      this._protocolPort = undefined;
      this._subnetId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._adminStateUp = value.adminStateUp;
      this._backup = value.backup;
      this._monitorAddress = value.monitorAddress;
      this._monitorPort = value.monitorPort;
      this._name = value.name;
      this._protocolPort = value.protocolPort;
      this._subnetId = value.subnetId;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_address - computed: false, optional: true, required: false
  private _monitorAddress?: string; 
  public get monitorAddress() {
    return this.getStringAttribute('monitor_address');
  }
  public set monitorAddress(value: string) {
    this._monitorAddress = value;
  }
  public resetMonitorAddress() {
    this._monitorAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAddressInput() {
    return this._monitorAddress;
  }

  // monitor_port - computed: false, optional: true, required: false
  private _monitorPort?: number; 
  public get monitorPort() {
    return this.getNumberAttribute('monitor_port');
  }
  public set monitorPort(value: number) {
    this._monitorPort = value;
  }
  public resetMonitorPort() {
    this._monitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort;
  }

  // name - computed: false, optional: true, required: false
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

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LbMembersV2MemberList extends cdktf.ComplexList {
  public internalValue? : LbMembersV2Member[] | cdktf.IResolvable

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
  public get(index: number): LbMembersV2MemberOutputReference {
    return new LbMembersV2MemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbMembersV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#create LbMembersV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#delete LbMembersV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#update LbMembersV2#update}
  */
  readonly update?: string;
}

export function lbMembersV2TimeoutsToTerraform(struct?: LbMembersV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lbMembersV2TimeoutsToHclTerraform(struct?: LbMembersV2Timeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbMembersV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbMembersV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbMembersV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2 nhncloud_lb_members_v2}
*/
export class LbMembersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_lb_members_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbMembersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbMembersV2 to import
  * @param importFromId The id of the existing LbMembersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbMembersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_lb_members_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/lb_members_v2 nhncloud_lb_members_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbMembersV2Config
  */
  public constructor(scope: Construct, id: string, config: LbMembersV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_lb_members_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
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
    this._poolId = config.poolId;
    this._region = config.region;
    this._member.internalValue = config.member;
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

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // member - computed: false, optional: true, required: false
  private _member = new LbMembersV2MemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: LbMembersV2Member[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbMembersV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbMembersV2Timeouts) {
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
      pool_id: cdktf.stringToTerraform(this._poolId),
      region: cdktf.stringToTerraform(this._region),
      member: cdktf.listMapper(lbMembersV2MemberToTerraform, true)(this._member.internalValue),
      timeouts: lbMembersV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.listMapperHcl(lbMembersV2MemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbMembersV2MemberList",
      },
      timeouts: {
        value: lbMembersV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbMembersV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
