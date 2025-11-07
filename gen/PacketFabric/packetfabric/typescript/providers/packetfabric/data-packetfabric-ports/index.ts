// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/ports#id DataPacketfabricPorts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricPortsInterfaces {
}

export function dataPacketfabricPortsInterfacesToTerraform(struct?: DataPacketfabricPortsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricPortsInterfacesToHclTerraform(struct?: DataPacketfabricPortsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricPortsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricPortsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricPortsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_uuid - computed: true, optional: false, required: false
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // autoneg - computed: true, optional: false, required: false
  public get autoneg() {
    return this.getBooleanAttribute('autoneg');
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // is_cloud - computed: true, optional: false, required: false
  public get isCloud() {
    return this.getBooleanAttribute('is_cloud');
  }

  // is_lag - computed: true, optional: false, required: false
  public get isLag() {
    return this.getBooleanAttribute('is_lag');
  }

  // is_lag_member - computed: true, optional: false, required: false
  public get isLagMember() {
    return this.getBooleanAttribute('is_lag_member');
  }

  // is_nni - computed: true, optional: false, required: false
  public get isNni() {
    return this.getBooleanAttribute('is_nni');
  }

  // is_ptp - computed: true, optional: false, required: false
  public get isPtp() {
    return this.getBooleanAttribute('is_ptp');
  }

  // lag_interval - computed: true, optional: false, required: false
  public get lagInterval() {
    return this.getStringAttribute('lag_interval');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // market_description - computed: true, optional: false, required: false
  public get marketDescription() {
    return this.getStringAttribute('market_description');
  }

  // media - computed: true, optional: false, required: false
  public get media() {
    return this.getStringAttribute('media');
  }

  // member_count - computed: true, optional: false, required: false
  public get memberCount() {
    return this.getNumberAttribute('member_count');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // parent_lag_circuit_id - computed: true, optional: false, required: false
  public get parentLagCircuitId() {
    return this.getStringAttribute('parent_lag_circuit_id');
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
  }

  // port_circuit_id - computed: true, optional: false, required: false
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // site_code - computed: true, optional: false, required: false
  public get siteCode() {
    return this.getStringAttribute('site_code');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscription_term - computed: true, optional: false, required: false
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vc_mode - computed: true, optional: false, required: false
  public get vcMode() {
    return this.getStringAttribute('vc_mode');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataPacketfabricPortsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricPortsInterfacesOutputReference {
    return new DataPacketfabricPortsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/ports packetfabric_ports}
*/
export class DataPacketfabricPorts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricPorts to import
  * @param importFromId The id of the existing DataPacketfabricPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/ports packetfabric_ports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricPortsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricPortsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_ports',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
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

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataPacketfabricPortsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
