// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The serial number of the device to assign this license to. Set this to null to unassign the license. If a different license is already active on the device, this parameter will control queueing/dequeuing this license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license#device_serial OrganizationLicense#device_serial}
  */
  readonly deviceSerial?: string;
  /**
  * License ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license#license_id OrganizationLicense#license_id}
  */
  readonly licenseId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license#organization_id OrganizationLicense#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license meraki_organization_license}
*/
export class OrganizationLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationLicense to import
  * @param importFromId The id of the existing OrganizationLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_license meraki_organization_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_license',
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
    this._deviceSerial = config.deviceSerial;
    this._licenseId = config.licenseId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_serial - computed: false, optional: true, required: false
  private _deviceSerial?: string; 
  public get deviceSerial() {
    return this.getStringAttribute('device_serial');
  }
  public set deviceSerial(value: string) {
    this._deviceSerial = value;
  }
  public resetDeviceSerial() {
    this._deviceSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSerialInput() {
    return this._deviceSerial;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_id - computed: false, optional: false, required: true
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_serial: cdktf.stringToTerraform(this._deviceSerial),
      license_id: cdktf.stringToTerraform(this._licenseId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_serial: {
        value: cdktf.stringToHclTerraform(this._deviceSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_id: {
        value: cdktf.stringToHclTerraform(this._licenseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
