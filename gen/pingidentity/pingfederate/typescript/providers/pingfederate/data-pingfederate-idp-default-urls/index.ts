// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_default_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateIdpDefaultUrlsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_default_urls pingfederate_idp_default_urls}
*/
export class DataPingfederateIdpDefaultUrls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_idp_default_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateIdpDefaultUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateIdpDefaultUrls to import
  * @param importFromId The id of the existing DataPingfederateIdpDefaultUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_default_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateIdpDefaultUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_idp_default_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_default_urls pingfederate_idp_default_urls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateIdpDefaultUrlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateIdpDefaultUrlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_idp_default_urls',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
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

  // confirm_idp_slo - computed: true, optional: false, required: false
  public get confirmIdpSlo() {
    return this.getBooleanAttribute('confirm_idp_slo');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_error_msg - computed: true, optional: false, required: false
  public get idpErrorMsg() {
    return this.getStringAttribute('idp_error_msg');
  }

  // idp_slo_success_url - computed: true, optional: false, required: false
  public get idpSloSuccessUrl() {
    return this.getStringAttribute('idp_slo_success_url');
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
