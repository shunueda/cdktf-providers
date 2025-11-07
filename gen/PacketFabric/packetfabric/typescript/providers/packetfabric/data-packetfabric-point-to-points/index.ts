// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/point_to_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricPointToPointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/point_to_points#id DataPacketfabricPointToPoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricPointToPointsPointToPointsBilling {
}

export function dataPacketfabricPointToPointsPointToPointsBillingToTerraform(struct?: DataPacketfabricPointToPointsPointToPointsBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricPointToPointsPointToPointsBillingToHclTerraform(struct?: DataPacketfabricPointToPointsPointToPointsBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricPointToPointsPointToPointsBillingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricPointToPointsPointToPointsBilling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricPointToPointsPointToPointsBilling | undefined) {
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

  // contracted_speed - computed: true, optional: false, required: false
  public get contractedSpeed() {
    return this.getStringAttribute('contracted_speed');
  }

  // subscription_term - computed: true, optional: false, required: false
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
}

export class DataPacketfabricPointToPointsPointToPointsBillingList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricPointToPointsPointToPointsBillingOutputReference {
    return new DataPacketfabricPointToPointsPointToPointsBillingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricPointToPointsPointToPointsInterfaces {
}

export function dataPacketfabricPointToPointsPointToPointsInterfacesToTerraform(struct?: DataPacketfabricPointToPointsPointToPointsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricPointToPointsPointToPointsInterfacesToHclTerraform(struct?: DataPacketfabricPointToPointsPointToPointsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricPointToPointsPointToPointsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricPointToPointsPointToPointsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricPointToPointsPointToPointsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // customer_site_code - computed: true, optional: false, required: false
  public get customerSiteCode() {
    return this.getStringAttribute('customer_site_code');
  }

  // customer_site_name - computed: true, optional: false, required: false
  public get customerSiteName() {
    return this.getStringAttribute('customer_site_name');
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_cloud - computed: true, optional: false, required: false
  public get isCloud() {
    return this.getBooleanAttribute('is_cloud');
  }

  // is_ptp - computed: true, optional: false, required: false
  public get isPtp() {
    return this.getBooleanAttribute('is_ptp');
  }

  // media - computed: true, optional: false, required: false
  public get media() {
    return this.getStringAttribute('media');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // pop - computed: true, optional: false, required: false
  public get pop() {
    return this.getStringAttribute('pop');
  }

  // port_circuit_id - computed: true, optional: false, required: false
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // untagged - computed: true, optional: false, required: false
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataPacketfabricPointToPointsPointToPointsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricPointToPointsPointToPointsInterfacesOutputReference {
    return new DataPacketfabricPointToPointsPointToPointsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricPointToPointsPointToPoints {
}

export function dataPacketfabricPointToPointsPointToPointsToTerraform(struct?: DataPacketfabricPointToPointsPointToPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricPointToPointsPointToPointsToHclTerraform(struct?: DataPacketfabricPointToPointsPointToPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricPointToPointsPointToPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricPointToPointsPointToPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricPointToPointsPointToPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // billing - computed: true, optional: false, required: false
  private _billing = new DataPacketfabricPointToPointsPointToPointsBillingList(this, "billing", true);
  public get billing() {
    return this._billing;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataPacketfabricPointToPointsPointToPointsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // media - computed: true, optional: false, required: false
  public get media() {
    return this.getStringAttribute('media');
  }

  // ptp_circuit_id - computed: true, optional: false, required: false
  public get ptpCircuitId() {
    return this.getStringAttribute('ptp_circuit_id');
  }

  // ptp_uuid - computed: true, optional: false, required: false
  public get ptpUuid() {
    return this.getStringAttribute('ptp_uuid');
  }

  // service_class - computed: true, optional: false, required: false
  public get serviceClass() {
    return this.getStringAttribute('service_class');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataPacketfabricPointToPointsPointToPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricPointToPointsPointToPointsOutputReference {
    return new DataPacketfabricPointToPointsPointToPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/point_to_points packetfabric_point_to_points}
*/
export class DataPacketfabricPointToPoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_point_to_points";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricPointToPoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricPointToPoints to import
  * @param importFromId The id of the existing DataPacketfabricPointToPoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/point_to_points#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricPointToPoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_point_to_points", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/point_to_points packetfabric_point_to_points} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricPointToPointsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricPointToPointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_point_to_points',
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

  // point_to_points - computed: true, optional: false, required: false
  private _pointToPoints = new DataPacketfabricPointToPointsPointToPointsList(this, "point_to_points", false);
  public get pointToPoints() {
    return this._pointToPoints;
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
