// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_content_filtering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceContentFilteringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_content_filtering#network_id DataMerakiApplianceContentFiltering#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_content_filtering meraki_appliance_content_filtering}
*/
export class DataMerakiApplianceContentFiltering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_content_filtering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceContentFiltering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceContentFiltering to import
  * @param importFromId The id of the existing DataMerakiApplianceContentFiltering that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_content_filtering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceContentFiltering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_content_filtering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_content_filtering meraki_appliance_content_filtering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceContentFilteringConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceContentFilteringConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_content_filtering',
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_url_patterns - computed: true, optional: false, required: false
  public get allowedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_url_patterns'));
  }

  // blocked_url_categories - computed: true, optional: false, required: false
  public get blockedUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_url_categories'));
  }

  // blocked_url_patterns - computed: true, optional: false, required: false
  public get blockedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_url_patterns'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // url_category_list_size - computed: true, optional: false, required: false
  public get urlCategoryListSize() {
    return this.getStringAttribute('url_category_list_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
