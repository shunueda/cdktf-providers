// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication profile used for this fabric
  *   - Choices: `Closed Authentication`, `Low Impact`, `No Authentication`, `Open Authentication`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site#authentication_profile_name FabricSite#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * Specifies whether this fabric site will use pub/sub for control nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site#pub_sub_enabled FabricSite#pub_sub_enabled}
  */
  readonly pubSubEnabled: boolean | cdktf.IResolvable;
  /**
  * ID of the network hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site#site_id FabricSite#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site catalystcenter_fabric_site}
*/
export class FabricSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricSite to import
  * @param importFromId The id of the existing FabricSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_site catalystcenter_fabric_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricSiteConfig
  */
  public constructor(scope: Construct, id: string, config: FabricSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_site',
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
    this._authenticationProfileName = config.authenticationProfileName;
    this._pubSubEnabled = config.pubSubEnabled;
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

  // pub_sub_enabled - computed: false, optional: false, required: true
  private _pubSubEnabled?: boolean | cdktf.IResolvable; 
  public get pubSubEnabled() {
    return this.getBooleanAttribute('pub_sub_enabled');
  }
  public set pubSubEnabled(value: boolean | cdktf.IResolvable) {
    this._pubSubEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubEnabledInput() {
    return this._pubSubEnabled;
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
      pub_sub_enabled: cdktf.booleanToTerraform(this._pubSubEnabled),
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
      pub_sub_enabled: {
        value: cdktf.booleanToHclTerraform(this._pubSubEnabled),
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
