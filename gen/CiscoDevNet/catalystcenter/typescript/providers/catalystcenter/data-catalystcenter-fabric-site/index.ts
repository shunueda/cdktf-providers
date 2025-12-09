// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site#id DataCatalystcenterFabricSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the network hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site#site_id DataCatalystcenterFabricSite#site_id}
  */
  readonly siteId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site catalystcenter_fabric_site}
*/
export class DataCatalystcenterFabricSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricSite to import
  * @param importFromId The id of the existing DataCatalystcenterFabricSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/fabric_site catalystcenter_fabric_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricSiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricSiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_site',
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
    this._id = config.id;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profile_name - computed: true, optional: false, required: false
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
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

  // pub_sub_enabled - computed: true, optional: false, required: false
  public get pubSubEnabled() {
    return this.getBooleanAttribute('pub_sub_enabled');
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
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
