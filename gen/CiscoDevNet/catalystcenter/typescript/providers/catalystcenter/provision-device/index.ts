// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisionDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of network device to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device#network_device_id ProvisionDevice#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Flag to indicate whether the device should be reprovisioned. If set to `true`, reprovisioning will be triggered on every Terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device#reprovision ProvisionDevice#reprovision}
  */
  readonly reprovision?: boolean | cdktf.IResolvable;
  /**
  * ID of the site this network device needs to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device#site_id ProvisionDevice#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device catalystcenter_provision_device}
*/
export class ProvisionDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_provision_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisionDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisionDevice to import
  * @param importFromId The id of the existing ProvisionDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisionDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_provision_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_device catalystcenter_provision_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisionDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisionDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_provision_device',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
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
    this._reprovision = config.reprovision;
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

  // reprovision - computed: false, optional: true, required: false
  private _reprovision?: boolean | cdktf.IResolvable; 
  public get reprovision() {
    return this.getBooleanAttribute('reprovision');
  }
  public set reprovision(value: boolean | cdktf.IResolvable) {
    this._reprovision = value;
  }
  public resetReprovision() {
    this._reprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reprovisionInput() {
    return this._reprovision;
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
      reprovision: cdktf.booleanToTerraform(this._reprovision),
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
      reprovision: {
        value: cdktf.booleanToHclTerraform(this._reprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
