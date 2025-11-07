// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixSiteConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site citrix_site}
*/
export class DataCitrixSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixSite to import
  * @param importFromId The id of the existing DataCitrixSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/site citrix_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixSiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixSiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_site',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // is_citrix_service_provider - computed: true, optional: false, required: false
  public get isCitrixServiceProvider() {
    return this.getBooleanAttribute('is_citrix_service_provider');
  }

  // is_on_premises - computed: true, optional: false, required: false
  public get isOnPremises() {
    return this.getBooleanAttribute('is_on_premises');
  }

  // orchestration_api_version - computed: true, optional: false, required: false
  public get orchestrationApiVersion() {
    return this.getNumberAttribute('orchestration_api_version');
  }

  // product_version - computed: true, optional: false, required: false
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
