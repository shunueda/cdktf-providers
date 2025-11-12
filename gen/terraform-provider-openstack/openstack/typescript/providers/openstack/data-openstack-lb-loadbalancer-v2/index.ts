// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackLbLoadbalancerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#description DataOpenstackLbLoadbalancerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#id DataOpenstackLbLoadbalancerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#loadbalancer_id DataOpenstackLbLoadbalancerV2#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#name DataOpenstackLbLoadbalancerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#region DataOpenstackLbLoadbalancerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#tags DataOpenstackLbLoadbalancerV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#tags_any DataOpenstackLbLoadbalancerV2#tags_any}
  */
  readonly tagsAny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#tags_not DataOpenstackLbLoadbalancerV2#tags_not}
  */
  readonly tagsNot?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#tags_not_any DataOpenstackLbLoadbalancerV2#tags_not_any}
  */
  readonly tagsNotAny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#vip_address DataOpenstackLbLoadbalancerV2#vip_address}
  */
  readonly vipAddress?: string;
}
export interface DataOpenstackLbLoadbalancerV2Listeners {
}

export function dataOpenstackLbLoadbalancerV2ListenersToTerraform(struct?: DataOpenstackLbLoadbalancerV2Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenstackLbLoadbalancerV2ListenersToHclTerraform(struct?: DataOpenstackLbLoadbalancerV2Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenstackLbLoadbalancerV2ListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenstackLbLoadbalancerV2Listeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenstackLbLoadbalancerV2Listeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOpenstackLbLoadbalancerV2ListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenstackLbLoadbalancerV2ListenersOutputReference {
    return new DataOpenstackLbLoadbalancerV2ListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenstackLbLoadbalancerV2Pools {
}

export function dataOpenstackLbLoadbalancerV2PoolsToTerraform(struct?: DataOpenstackLbLoadbalancerV2Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenstackLbLoadbalancerV2PoolsToHclTerraform(struct?: DataOpenstackLbLoadbalancerV2Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenstackLbLoadbalancerV2PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenstackLbLoadbalancerV2Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenstackLbLoadbalancerV2Pools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOpenstackLbLoadbalancerV2PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenstackLbLoadbalancerV2PoolsOutputReference {
    return new DataOpenstackLbLoadbalancerV2PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2 openstack_lb_loadbalancer_v2}
*/
export class DataOpenstackLbLoadbalancerV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_lb_loadbalancer_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackLbLoadbalancerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackLbLoadbalancerV2 to import
  * @param importFromId The id of the existing DataOpenstackLbLoadbalancerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackLbLoadbalancerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_lb_loadbalancer_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/data-sources/lb_loadbalancer_v2 openstack_lb_loadbalancer_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackLbLoadbalancerV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackLbLoadbalancerV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'openstack_lb_loadbalancer_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAny = config.tagsAny;
    this._tagsNot = config.tagsNot;
    this._tagsNotAny = config.tagsNotAny;
    this._vipAddress = config.vipAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_vips - computed: true, optional: false, required: false
  public get additionalVips() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_vips'));
  }

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
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

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
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

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataOpenstackLbLoadbalancerV2ListenersList(this, "listeners", true);
  public get listeners() {
    return this._listeners;
  }

  // loadbalancer_id - computed: true, optional: true, required: false
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // loadbalancer_provider - computed: true, optional: false, required: false
  public get loadbalancerProvider() {
    return this.getStringAttribute('loadbalancer_provider');
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

  // operating_status - computed: true, optional: false, required: false
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }

  // pools - computed: true, optional: false, required: false
  private _pools = new DataOpenstackLbLoadbalancerV2PoolsList(this, "pools", true);
  public get pools() {
    return this._pools;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_any - computed: false, optional: true, required: false
  private _tagsAny?: string[]; 
  public get tagsAny() {
    return this.getListAttribute('tags_any');
  }
  public set tagsAny(value: string[]) {
    this._tagsAny = value;
  }
  public resetTagsAny() {
    this._tagsAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAnyInput() {
    return this._tagsAny;
  }

  // tags_not - computed: false, optional: true, required: false
  private _tagsNot?: string[]; 
  public get tagsNot() {
    return this.getListAttribute('tags_not');
  }
  public set tagsNot(value: string[]) {
    this._tagsNot = value;
  }
  public resetTagsNot() {
    this._tagsNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsNotInput() {
    return this._tagsNot;
  }

  // tags_not_any - computed: false, optional: true, required: false
  private _tagsNotAny?: string[]; 
  public get tagsNotAny() {
    return this.getListAttribute('tags_not_any');
  }
  public set tagsNotAny(value: string[]) {
    this._tagsNotAny = value;
  }
  public resetTagsNotAny() {
    this._tagsNotAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsNotAnyInput() {
    return this._tagsNotAny;
  }

  // vip_address - computed: true, optional: true, required: false
  private _vipAddress?: string; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress;
  }

  // vip_network_id - computed: true, optional: false, required: false
  public get vipNetworkId() {
    return this.getStringAttribute('vip_network_id');
  }

  // vip_port_id - computed: true, optional: false, required: false
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }

  // vip_qos_policy_id - computed: true, optional: false, required: false
  public get vipQosPolicyId() {
    return this.getStringAttribute('vip_qos_policy_id');
  }

  // vip_subnet_id - computed: true, optional: false, required: false
  public get vipSubnetId() {
    return this.getStringAttribute('vip_subnet_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tags_any: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagsAny),
      tags_not: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagsNot),
      tags_not_any: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagsNotAny),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags_any: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagsAny),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags_not: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagsNot),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags_not_any: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagsNotAny),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vip_address: {
        value: cdktf.stringToHclTerraform(this._vipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
