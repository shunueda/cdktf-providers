// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterAnycastGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric to contain this anycast gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways#fabric_id DataCatalystcenterAnycastGateways#fabric_id}
  */
  readonly fabricId: string;
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways#id DataCatalystcenterAnycastGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCatalystcenterAnycastGatewaysAnycastGateways {
}

export function dataCatalystcenterAnycastGatewaysAnycastGatewaysToTerraform(struct?: DataCatalystcenterAnycastGatewaysAnycastGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterAnycastGatewaysAnycastGatewaysToHclTerraform(struct?: DataCatalystcenterAnycastGatewaysAnycastGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterAnycastGatewaysAnycastGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterAnycastGatewaysAnycastGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterAnycastGatewaysAnycastGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_generate_vlan_name - computed: true, optional: false, required: false
  public get autoGenerateVlanName() {
    return this.getBooleanAttribute('auto_generate_vlan_name');
  }

  // critical_pool - computed: true, optional: false, required: false
  public get criticalPool() {
    return this.getBooleanAttribute('critical_pool');
  }

  // fabric_id - computed: true, optional: false, required: false
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }

  // group_based_policy_enforcement_enabled - computed: true, optional: false, required: false
  public get groupBasedPolicyEnforcementEnabled() {
    return this.getBooleanAttribute('group_based_policy_enforcement_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_subnet_routing_enabled - computed: true, optional: false, required: false
  public get intraSubnetRoutingEnabled() {
    return this.getBooleanAttribute('intra_subnet_routing_enabled');
  }

  // ip_directed_broadcast - computed: true, optional: false, required: false
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // l2_flooding_enabled - computed: true, optional: false, required: false
  public get l2FloodingEnabled() {
    return this.getBooleanAttribute('l2_flooding_enabled');
  }

  // multiple_ip_to_mac_addresses - computed: true, optional: false, required: false
  public get multipleIpToMacAddresses() {
    return this.getBooleanAttribute('multiple_ip_to_mac_addresses');
  }

  // pool_type - computed: true, optional: false, required: false
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // supplicant_based_extended_node_onboarding - computed: true, optional: false, required: false
  public get supplicantBasedExtendedNodeOnboarding() {
    return this.getBooleanAttribute('supplicant_based_extended_node_onboarding');
  }

  // tcp_mss_adjustment - computed: true, optional: false, required: false
  public get tcpMssAdjustment() {
    return this.getNumberAttribute('tcp_mss_adjustment');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }

  // wireless_pool - computed: true, optional: false, required: false
  public get wirelessPool() {
    return this.getBooleanAttribute('wireless_pool');
  }
}

export class DataCatalystcenterAnycastGatewaysAnycastGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterAnycastGatewaysAnycastGatewaysOutputReference {
    return new DataCatalystcenterAnycastGatewaysAnycastGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways catalystcenter_anycast_gateways}
*/
export class DataCatalystcenterAnycastGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_anycast_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterAnycastGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterAnycastGateways to import
  * @param importFromId The id of the existing DataCatalystcenterAnycastGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterAnycastGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_anycast_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/anycast_gateways catalystcenter_anycast_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterAnycastGatewaysConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterAnycastGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_anycast_gateways',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_gateways - computed: true, optional: false, required: false
  private _anycastGateways = new DataCatalystcenterAnycastGatewaysAnycastGatewaysList(this, "anycast_gateways", true);
  public get anycastGateways() {
    return this._anycastGateways;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
