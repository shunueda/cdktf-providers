// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/outbound_cross_connects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricOutboundCrossConnectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/outbound_cross_connects#id DataPacketfabricOutboundCrossConnects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricOutboundCrossConnectsOutboundCrossConnects {
}

export function dataPacketfabricOutboundCrossConnectsOutboundCrossConnectsToTerraform(struct?: DataPacketfabricOutboundCrossConnectsOutboundCrossConnects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricOutboundCrossConnectsOutboundCrossConnectsToHclTerraform(struct?: DataPacketfabricOutboundCrossConnectsOutboundCrossConnects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricOutboundCrossConnectsOutboundCrossConnectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricOutboundCrossConnectsOutboundCrossConnects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricOutboundCrossConnectsOutboundCrossConnects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // circuit_id - computed: true, optional: false, required: false
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }

  // data_center_cross_connect_id - computed: true, optional: false, required: false
  public get dataCenterCrossConnectId() {
    return this.getStringAttribute('data_center_cross_connect_id');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_circuit_id - computed: true, optional: false, required: false
  public get destinationCircuitId() {
    return this.getStringAttribute('destination_circuit_id');
  }

  // destination_name - computed: true, optional: false, required: false
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }

  // document_uuid - computed: true, optional: false, required: false
  public get documentUuid() {
    return this.getStringAttribute('document_uuid');
  }

  // module - computed: true, optional: false, required: false
  public get module() {
    return this.getStringAttribute('module');
  }

  // obcc_status - computed: true, optional: false, required: false
  public get obccStatus() {
    return this.getStringAttribute('obcc_status');
  }

  // outbound_cross_connect_id - computed: true, optional: false, required: false
  public get outboundCrossConnectId() {
    return this.getStringAttribute('outbound_cross_connect_id');
  }

  // panel - computed: true, optional: false, required: false
  public get panel() {
    return this.getStringAttribute('panel');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // user_description - computed: true, optional: false, required: false
  public get userDescription() {
    return this.getStringAttribute('user_description');
  }

  // z_loc_cfa - computed: true, optional: false, required: false
  public get zLocCfa() {
    return this.getStringAttribute('z_loc_cfa');
  }
}

export class DataPacketfabricOutboundCrossConnectsOutboundCrossConnectsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricOutboundCrossConnectsOutboundCrossConnectsOutputReference {
    return new DataPacketfabricOutboundCrossConnectsOutboundCrossConnectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/outbound_cross_connects packetfabric_outbound_cross_connects}
*/
export class DataPacketfabricOutboundCrossConnects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_outbound_cross_connects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricOutboundCrossConnects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricOutboundCrossConnects to import
  * @param importFromId The id of the existing DataPacketfabricOutboundCrossConnects that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/outbound_cross_connects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricOutboundCrossConnects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_outbound_cross_connects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/outbound_cross_connects packetfabric_outbound_cross_connects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricOutboundCrossConnectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricOutboundCrossConnectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_outbound_cross_connects',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
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

  // outbound_cross_connects - computed: true, optional: false, required: false
  private _outboundCrossConnects = new DataPacketfabricOutboundCrossConnectsOutboundCrossConnectsList(this, "outbound_cross_connects", false);
  public get outboundCrossConnects() {
    return this._outboundCrossConnects;
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
