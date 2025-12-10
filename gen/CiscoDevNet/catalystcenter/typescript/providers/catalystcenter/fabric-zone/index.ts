// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication profile used for this fabric
  *   - Choices: `No Authentication`, `Low Impact`, `Open Authentication`, `Closed Authentication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone#authentication_profile_name FabricZone#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * ID of the network hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone#site_id FabricZone#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone catalystcenter_fabric_zone}
*/
export class FabricZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricZone to import
  * @param importFromId The id of the existing FabricZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/fabric_zone catalystcenter_fabric_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricZoneConfig
  */
  public constructor(scope: Construct, id: string, config: FabricZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_zone',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationProfileName = config.authenticationProfileName;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profile_name - computed: false, optional: false, required: true
  private _authenticationProfileName?: string; 
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
  }
  public set authenticationProfileName(value: string) {
    this._authenticationProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileNameInput() {
    return this._authenticationProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      authentication_profile_name: cdktf.stringToTerraform(this._authenticationProfileName),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationProfileName),
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
