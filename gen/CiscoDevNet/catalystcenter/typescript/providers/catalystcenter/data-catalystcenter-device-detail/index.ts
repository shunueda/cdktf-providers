// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/device_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterDeviceDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/device_detail#id DataCatalystcenterDeviceDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/device_detail catalystcenter_device_detail}
*/
export class DataCatalystcenterDeviceDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_device_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterDeviceDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterDeviceDetail to import
  * @param importFromId The id of the existing DataCatalystcenterDeviceDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/device_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterDeviceDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_device_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/data-sources/device_detail catalystcenter_device_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterDeviceDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterDeviceDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_device_detail',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
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

  // collection_status - computed: true, optional: false, required: false
  public get collectionStatus() {
    return this.getStringAttribute('collection_status');
  }

  // communication_state - computed: true, optional: false, required: false
  public get communicationState() {
    return this.getStringAttribute('communication_state');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // device_group_hierarchy_id - computed: true, optional: false, required: false
  public get deviceGroupHierarchyId() {
    return this.getStringAttribute('device_group_hierarchy_id');
  }

  // device_series - computed: true, optional: false, required: false
  public get deviceSeries() {
    return this.getStringAttribute('device_series');
  }

  // ha_status - computed: true, optional: false, required: false
  public get haStatus() {
    return this.getStringAttribute('ha_status');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // maintenance_mode - computed: true, optional: false, required: false
  public get maintenanceMode() {
    return this.getBooleanAttribute('maintenance_mode');
  }

  // management_ip_address - computed: true, optional: false, required: false
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // nw_device_family - computed: true, optional: false, required: false
  public get nwDeviceFamily() {
    return this.getStringAttribute('nw_device_family');
  }

  // nw_device_id - computed: true, optional: false, required: false
  public get nwDeviceId() {
    return this.getStringAttribute('nw_device_id');
  }

  // nw_device_name - computed: true, optional: false, required: false
  public get nwDeviceName() {
    return this.getStringAttribute('nw_device_name');
  }

  // nw_device_role - computed: true, optional: false, required: false
  public get nwDeviceRole() {
    return this.getStringAttribute('nw_device_role');
  }

  // nw_device_type - computed: true, optional: false, required: false
  public get nwDeviceType() {
    return this.getStringAttribute('nw_device_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // overall_health - computed: true, optional: false, required: false
  public get overallHealth() {
    return this.getNumberAttribute('overall_health');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // policy_tag_name - computed: true, optional: false, required: false
  public get policyTagName() {
    return this.getStringAttribute('policy_tag_name');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // site_hierarchy_graph_id - computed: true, optional: false, required: false
  public get siteHierarchyGraphId() {
    return this.getStringAttribute('site_hierarchy_graph_id');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tag_id_list - computed: true, optional: false, required: false
  public get tagIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_id_list'));
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
