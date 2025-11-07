// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFlexibleengineElbLoadbalancersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#description DataFlexibleengineElbLoadbalancers#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#id DataFlexibleengineElbLoadbalancers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#ipv4_subnet_id DataFlexibleengineElbLoadbalancers#ipv4_subnet_id}
  */
  readonly ipv4SubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#ipv6_network_id DataFlexibleengineElbLoadbalancers#ipv6_network_id}
  */
  readonly ipv6NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#l4_flavor_id DataFlexibleengineElbLoadbalancers#l4_flavor_id}
  */
  readonly l4FlavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#l7_flavor_id DataFlexibleengineElbLoadbalancers#l7_flavor_id}
  */
  readonly l7FlavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#loadbalancer_id DataFlexibleengineElbLoadbalancers#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#name DataFlexibleengineElbLoadbalancers#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#region DataFlexibleengineElbLoadbalancers#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#type DataFlexibleengineElbLoadbalancers#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#vpc_id DataFlexibleengineElbLoadbalancers#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataFlexibleengineElbLoadbalancersLoadbalancers {
}

export function dataFlexibleengineElbLoadbalancersLoadbalancersToTerraform(struct?: DataFlexibleengineElbLoadbalancersLoadbalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFlexibleengineElbLoadbalancersLoadbalancersToHclTerraform(struct?: DataFlexibleengineElbLoadbalancersLoadbalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFlexibleengineElbLoadbalancersLoadbalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFlexibleengineElbLoadbalancersLoadbalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFlexibleengineElbLoadbalancersLoadbalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_enabled - computed: true, optional: false, required: false
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getListAttribute('availability_zone');
  }

  // backend_subnets - computed: true, optional: false, required: false
  public get backendSubnets() {
    return this.getListAttribute('backend_subnets');
  }

  // cross_vpc_backend - computed: true, optional: false, required: false
  public get crossVpcBackend() {
    return this.getBooleanAttribute('cross_vpc_backend');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_port_id - computed: true, optional: false, required: false
  public get ipv4PortId() {
    return this.getStringAttribute('ipv4_port_id');
  }

  // ipv4_subnet_id - computed: true, optional: false, required: false
  public get ipv4SubnetId() {
    return this.getStringAttribute('ipv4_subnet_id');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_network_id - computed: true, optional: false, required: false
  public get ipv6NetworkId() {
    return this.getStringAttribute('ipv6_network_id');
  }

  // l4_flavor_id - computed: true, optional: false, required: false
  public get l4FlavorId() {
    return this.getStringAttribute('l4_flavor_id');
  }

  // l7_flavor_id - computed: true, optional: false, required: false
  public get l7FlavorId() {
    return this.getStringAttribute('l7_flavor_id');
  }

  // min_l7_flavor_id - computed: true, optional: false, required: false
  public get minL7FlavorId() {
    return this.getStringAttribute('min_l7_flavor_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_reason - computed: true, optional: false, required: false
  public get protectionReason() {
    return this.getStringAttribute('protection_reason');
  }

  // protection_status - computed: true, optional: false, required: false
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataFlexibleengineElbLoadbalancersLoadbalancersList extends cdktf.ComplexList {

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
  public get(index: number): DataFlexibleengineElbLoadbalancersLoadbalancersOutputReference {
    return new DataFlexibleengineElbLoadbalancersLoadbalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers flexibleengine_elb_loadbalancers}
*/
export class DataFlexibleengineElbLoadbalancers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_elb_loadbalancers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFlexibleengineElbLoadbalancers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFlexibleengineElbLoadbalancers to import
  * @param importFromId The id of the existing DataFlexibleengineElbLoadbalancers that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFlexibleengineElbLoadbalancers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_elb_loadbalancers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/data-sources/elb_loadbalancers flexibleengine_elb_loadbalancers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFlexibleengineElbLoadbalancersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFlexibleengineElbLoadbalancersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_elb_loadbalancers',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._ipv4SubnetId = config.ipv4SubnetId;
    this._ipv6NetworkId = config.ipv6NetworkId;
    this._l4FlavorId = config.l4FlavorId;
    this._l7FlavorId = config.l7FlavorId;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._region = config.region;
    this._type = config.type;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // ipv4_subnet_id - computed: false, optional: true, required: false
  private _ipv4SubnetId?: string; 
  public get ipv4SubnetId() {
    return this.getStringAttribute('ipv4_subnet_id');
  }
  public set ipv4SubnetId(value: string) {
    this._ipv4SubnetId = value;
  }
  public resetIpv4SubnetId() {
    this._ipv4SubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetIdInput() {
    return this._ipv4SubnetId;
  }

  // ipv6_network_id - computed: false, optional: true, required: false
  private _ipv6NetworkId?: string; 
  public get ipv6NetworkId() {
    return this.getStringAttribute('ipv6_network_id');
  }
  public set ipv6NetworkId(value: string) {
    this._ipv6NetworkId = value;
  }
  public resetIpv6NetworkId() {
    this._ipv6NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkIdInput() {
    return this._ipv6NetworkId;
  }

  // l4_flavor_id - computed: false, optional: true, required: false
  private _l4FlavorId?: string; 
  public get l4FlavorId() {
    return this.getStringAttribute('l4_flavor_id');
  }
  public set l4FlavorId(value: string) {
    this._l4FlavorId = value;
  }
  public resetL4FlavorId() {
    this._l4FlavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4FlavorIdInput() {
    return this._l4FlavorId;
  }

  // l7_flavor_id - computed: false, optional: true, required: false
  private _l7FlavorId?: string; 
  public get l7FlavorId() {
    return this.getStringAttribute('l7_flavor_id');
  }
  public set l7FlavorId(value: string) {
    this._l7FlavorId = value;
  }
  public resetL7FlavorId() {
    this._l7FlavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FlavorIdInput() {
    return this._l7FlavorId;
  }

  // loadbalancer_id - computed: false, optional: true, required: false
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

  // loadbalancers - computed: true, optional: false, required: false
  private _loadbalancers = new DataFlexibleengineElbLoadbalancersLoadbalancersList(this, "loadbalancers", false);
  public get loadbalancers() {
    return this._loadbalancers;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ipv4_subnet_id: cdktf.stringToTerraform(this._ipv4SubnetId),
      ipv6_network_id: cdktf.stringToTerraform(this._ipv6NetworkId),
      l4_flavor_id: cdktf.stringToTerraform(this._l4FlavorId),
      l7_flavor_id: cdktf.stringToTerraform(this._l7FlavorId),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      ipv4_subnet_id: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_network_id: {
        value: cdktf.stringToHclTerraform(this._ipv6NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_flavor_id: {
        value: cdktf.stringToHclTerraform(this._l4FlavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7_flavor_id: {
        value: cdktf.stringToHclTerraform(this._l7FlavorId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
