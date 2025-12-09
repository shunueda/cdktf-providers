// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterProvisionDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of network device to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device#network_device_id DataCatalystcenterProvisionDevice#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * ID of the site this network device needs to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device#site_id DataCatalystcenterProvisionDevice#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device catalystcenter_provision_device}
*/
export class DataCatalystcenterProvisionDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_provision_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterProvisionDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterProvisionDevice to import
  * @param importFromId The id of the existing DataCatalystcenterProvisionDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterProvisionDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_provision_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/provision_device catalystcenter_provision_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterProvisionDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterProvisionDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_provision_device',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkDeviceId = config.networkDeviceId;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // reprovision - computed: true, optional: false, required: false
  public get reprovision() {
    return this.getBooleanAttribute('reprovision');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
