// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtTransportZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#description DataNsxtTransportZone#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#display_name DataNsxtTransportZone#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of the host switch on all transport nodes in this transport zone that will be used to run NSX network traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#host_switch_name DataNsxtTransportZone#host_switch_name}
  */
  readonly hostSwitchName?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#id DataNsxtTransportZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The transport type of this transport zone (OVERLAY or VLAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#transport_type DataNsxtTransportZone#transport_type}
  */
  readonly transportType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone nsxt_transport_zone}
*/
export class DataNsxtTransportZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_transport_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtTransportZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtTransportZone to import
  * @param importFromId The id of the existing DataNsxtTransportZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtTransportZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_transport_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/transport_zone nsxt_transport_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtTransportZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtTransportZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_transport_zone',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._hostSwitchName = config.hostSwitchName;
    this._id = config.id;
    this._transportType = config.transportType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // host_switch_name - computed: true, optional: true, required: false
  private _hostSwitchName?: string; 
  public get hostSwitchName() {
    return this.getStringAttribute('host_switch_name');
  }
  public set hostSwitchName(value: string) {
    this._hostSwitchName = value;
  }
  public resetHostSwitchName() {
    this._hostSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchNameInput() {
    return this._hostSwitchName;
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

  // transport_type - computed: true, optional: true, required: false
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  public resetTransportType() {
    this._transportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      host_switch_name: cdktf.stringToTerraform(this._hostSwitchName),
      id: cdktf.stringToTerraform(this._id),
      transport_type: cdktf.stringToTerraform(this._transportType),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_switch_name: {
        value: cdktf.stringToHclTerraform(this._hostSwitchName),
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
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
