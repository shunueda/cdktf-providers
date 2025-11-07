// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomServerModelOrderOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option#id DataServerscomServerModelOrderOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option#server_model_id DataServerscomServerModelOrderOption#server_model_id}
  */
  readonly serverModelId: number;
}
export interface DataServerscomServerModelOrderOptionDriveSlots {
}

export function dataServerscomServerModelOrderOptionDriveSlotsToTerraform(struct?: DataServerscomServerModelOrderOptionDriveSlots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataServerscomServerModelOrderOptionDriveSlotsToHclTerraform(struct?: DataServerscomServerModelOrderOptionDriveSlots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataServerscomServerModelOrderOptionDriveSlotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerscomServerModelOrderOptionDriveSlots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerscomServerModelOrderOptionDriveSlots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drive_model_id - computed: true, optional: false, required: false
  public get driveModelId() {
    return this.getNumberAttribute('drive_model_id');
  }

  // form_factor - computed: true, optional: false, required: false
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }

  // hot_swappable - computed: true, optional: false, required: false
  public get hotSwappable() {
    return this.getBooleanAttribute('hot_swappable');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }
}

export class DataServerscomServerModelOrderOptionDriveSlotsList extends cdktf.ComplexList {

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
  public get(index: number): DataServerscomServerModelOrderOptionDriveSlotsOutputReference {
    return new DataServerscomServerModelOrderOptionDriveSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option serverscom_server_model_order_option}
*/
export class DataServerscomServerModelOrderOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_server_model_order_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomServerModelOrderOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomServerModelOrderOption to import
  * @param importFromId The id of the existing DataServerscomServerModelOrderOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomServerModelOrderOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_server_model_order_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/server_model_order_option serverscom_server_model_order_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomServerModelOrderOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomServerModelOrderOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_server_model_order_option',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2'
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
    this._serverModelId = config.serverModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_cores_count - computed: true, optional: false, required: false
  public get cpuCoresCount() {
    return this.getNumberAttribute('cpu_cores_count');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // cpu_frequency - computed: true, optional: false, required: false
  public get cpuFrequency() {
    return this.getNumberAttribute('cpu_frequency');
  }

  // cpu_name - computed: true, optional: false, required: false
  public get cpuName() {
    return this.getStringAttribute('cpu_name');
  }

  // drive_slots - computed: true, optional: false, required: false
  private _driveSlots = new DataServerscomServerModelOrderOptionDriveSlotsList(this, "drive_slots", false);
  public get driveSlots() {
    return this._driveSlots;
  }

  // drive_slots_count - computed: true, optional: false, required: false
  public get driveSlotsCount() {
    return this.getNumberAttribute('drive_slots_count');
  }

  // has_raid_controller - computed: true, optional: false, required: false
  public get hasRaidController() {
    return this.getBooleanAttribute('has_raid_controller');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_ram - computed: true, optional: false, required: false
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // raid_controller_name - computed: true, optional: false, required: false
  public get raidControllerName() {
    return this.getStringAttribute('raid_controller_name');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // ram_type - computed: true, optional: false, required: false
  public get ramType() {
    return this.getStringAttribute('ram_type');
  }

  // server_model_id - computed: false, optional: false, required: true
  private _serverModelId?: number; 
  public get serverModelId() {
    return this.getNumberAttribute('server_model_id');
  }
  public set serverModelId(value: number) {
    this._serverModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModelIdInput() {
    return this._serverModelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      server_model_id: cdktf.numberToTerraform(this._serverModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_model_id: {
        value: cdktf.numberToHclTerraform(this._serverModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
