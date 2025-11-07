// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/virtual_host_names
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateVirtualHostNamesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/virtual_host_names pingfederate_virtual_host_names}
*/
export class DataPingfederateVirtualHostNames extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_virtual_host_names";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateVirtualHostNames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateVirtualHostNames to import
  * @param importFromId The id of the existing DataPingfederateVirtualHostNames that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/virtual_host_names#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateVirtualHostNames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_virtual_host_names", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/virtual_host_names pingfederate_virtual_host_names} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateVirtualHostNamesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateVirtualHostNamesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_virtual_host_names',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
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

  // virtual_host_names - computed: true, optional: false, required: false
  public get virtualHostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_host_names'));
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
