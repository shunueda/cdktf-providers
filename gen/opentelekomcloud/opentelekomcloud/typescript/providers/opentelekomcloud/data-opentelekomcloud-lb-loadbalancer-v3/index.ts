// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudLbLoadbalancerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}
  */
  readonly l4Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}
  */
  readonly l7Flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}
  */
  readonly vipPortId?: string;
}
export interface DataOpentelekomcloudLbLoadbalancerV3PublicIp {
}

export function dataOpentelekomcloudLbLoadbalancerV3PublicIpToTerraform(struct?: DataOpentelekomcloudLbLoadbalancerV3PublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudLbLoadbalancerV3PublicIpToHclTerraform(struct?: DataOpentelekomcloudLbLoadbalancerV3PublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudLbLoadbalancerV3PublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudLbLoadbalancerV3PublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // bandwidth_charge_mode - computed: true, optional: false, required: false
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // bandwidth_share_type - computed: true, optional: false, required: false
  public get bandwidthShareType() {
    return this.getStringAttribute('bandwidth_share_type');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
}

export class DataOpentelekomcloudLbLoadbalancerV3PublicIpList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference {
    return new DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}
*/
export class DataOpentelekomcloudLbLoadbalancerV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_loadbalancer_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudLbLoadbalancerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudLbLoadbalancerV3 to import
  * @param importFromId The id of the existing DataOpentelekomcloudLbLoadbalancerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudLbLoadbalancerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lb_loadbalancer_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudLbLoadbalancerV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudLbLoadbalancerV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_loadbalancer_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._l4Flavor = config.l4Flavor;
    this._l7Flavor = config.l7Flavor;
    this._name = config.name;
    this._routerId = config.routerId;
    this._subnetId = config.subnetId;
    this._vipAddress = config.vipAddress;
    this._vipPortId = config.vipPortId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ip_target_enable - computed: true, optional: false, required: false
  public get ipTargetEnable() {
    return this.getBooleanAttribute('ip_target_enable');
  }

  // l4_flavor - computed: true, optional: true, required: false
  private _l4Flavor?: string; 
  public get l4Flavor() {
    return this.getStringAttribute('l4_flavor');
  }
  public set l4Flavor(value: string) {
    this._l4Flavor = value;
  }
  public resetL4Flavor() {
    this._l4Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4FlavorInput() {
    return this._l4Flavor;
  }

  // l7_flavor - computed: true, optional: true, required: false
  private _l7Flavor?: string; 
  public get l7Flavor() {
    return this.getStringAttribute('l7_flavor');
  }
  public set l7Flavor(value: string) {
    this._l7Flavor = value;
  }
  public resetL7Flavor() {
    this._l7Flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FlavorInput() {
    return this._l7Flavor;
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

  // network_ids - computed: true, optional: false, required: false
  public get networkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_ids'));
  }

  // public_ip - computed: true, optional: false, required: false
  private _publicIp = new DataOpentelekomcloudLbLoadbalancerV3PublicIpList(this, "public_ip", false);
  public get publicIp() {
    return this._publicIp;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // vip_port_id - computed: true, optional: true, required: false
  private _vipPortId?: string; 
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }
  public set vipPortId(value: string) {
    this._vipPortId = value;
  }
  public resetVipPortId() {
    this._vipPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortIdInput() {
    return this._vipPortId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      l4_flavor: cdktf.stringToTerraform(this._l4Flavor),
      l7_flavor: cdktf.stringToTerraform(this._l7Flavor),
      name: cdktf.stringToTerraform(this._name),
      router_id: cdktf.stringToTerraform(this._routerId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip_address: cdktf.stringToTerraform(this._vipAddress),
      vip_port_id: cdktf.stringToTerraform(this._vipPortId),
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
      l4_flavor: {
        value: cdktf.stringToHclTerraform(this._l4Flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7_flavor: {
        value: cdktf.stringToHclTerraform(this._l7Flavor),
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
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_address: {
        value: cdktf.stringToHclTerraform(this._vipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_port_id: {
        value: cdktf.stringToHclTerraform(this._vipPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
