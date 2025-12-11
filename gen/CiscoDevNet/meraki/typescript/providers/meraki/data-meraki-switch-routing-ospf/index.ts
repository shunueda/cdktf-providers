// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchRoutingOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_ospf#network_id DataMerakiSwitchRoutingOspf#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSwitchRoutingOspfAreas {
}

export function dataMerakiSwitchRoutingOspfAreasToTerraform(struct?: DataMerakiSwitchRoutingOspfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchRoutingOspfAreasToHclTerraform(struct?: DataMerakiSwitchRoutingOspfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchRoutingOspfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchRoutingOspfAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchRoutingOspfAreas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getStringAttribute('area_id');
  }

  // area_name - computed: true, optional: false, required: false
  public get areaName() {
    return this.getStringAttribute('area_name');
  }

  // area_type - computed: true, optional: false, required: false
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
}

export class DataMerakiSwitchRoutingOspfAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchRoutingOspfAreasOutputReference {
    return new DataMerakiSwitchRoutingOspfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiSwitchRoutingOspfV3Areas {
}

export function dataMerakiSwitchRoutingOspfV3AreasToTerraform(struct?: DataMerakiSwitchRoutingOspfV3Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchRoutingOspfV3AreasToHclTerraform(struct?: DataMerakiSwitchRoutingOspfV3Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchRoutingOspfV3AreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchRoutingOspfV3Areas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchRoutingOspfV3Areas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getStringAttribute('area_id');
  }

  // area_name - computed: true, optional: false, required: false
  public get areaName() {
    return this.getStringAttribute('area_name');
  }

  // area_type - computed: true, optional: false, required: false
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
}

export class DataMerakiSwitchRoutingOspfV3AreasList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchRoutingOspfV3AreasOutputReference {
    return new DataMerakiSwitchRoutingOspfV3AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_ospf meraki_switch_routing_ospf}
*/
export class DataMerakiSwitchRoutingOspf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchRoutingOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchRoutingOspf to import
  * @param importFromId The id of the existing DataMerakiSwitchRoutingOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchRoutingOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_routing_ospf meraki_switch_routing_ospf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchRoutingOspfConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchRoutingOspfConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_ospf',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: true, optional: false, required: false
  private _areas = new DataMerakiSwitchRoutingOspfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }

  // dead_timer_in_seconds - computed: true, optional: false, required: false
  public get deadTimerInSeconds() {
    return this.getNumberAttribute('dead_timer_in_seconds');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hello_timer_in_seconds - computed: true, optional: false, required: false
  public get helloTimerInSeconds() {
    return this.getNumberAttribute('hello_timer_in_seconds');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // md5_authentication_enabled - computed: true, optional: false, required: false
  public get md5AuthenticationEnabled() {
    return this.getBooleanAttribute('md5_authentication_enabled');
  }

  // md5_authentication_key_id - computed: true, optional: false, required: false
  public get md5AuthenticationKeyId() {
    return this.getNumberAttribute('md5_authentication_key_id');
  }

  // md5_authentication_key_passphrase - computed: true, optional: false, required: false
  public get md5AuthenticationKeyPassphrase() {
    return this.getStringAttribute('md5_authentication_key_passphrase');
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

  // v3_areas - computed: true, optional: false, required: false
  private _v3Areas = new DataMerakiSwitchRoutingOspfV3AreasList(this, "v3_areas", false);
  public get v3Areas() {
    return this._v3Areas;
  }

  // v3_dead_timer_in_seconds - computed: true, optional: false, required: false
  public get v3DeadTimerInSeconds() {
    return this.getNumberAttribute('v3_dead_timer_in_seconds');
  }

  // v3_enabled - computed: true, optional: false, required: false
  public get v3Enabled() {
    return this.getBooleanAttribute('v3_enabled');
  }

  // v3_hello_timer_in_seconds - computed: true, optional: false, required: false
  public get v3HelloTimerInSeconds() {
    return this.getNumberAttribute('v3_hello_timer_in_seconds');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
