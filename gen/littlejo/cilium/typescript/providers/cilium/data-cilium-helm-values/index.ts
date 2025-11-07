// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/data-sources/helm_values
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiliumHelmValuesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/data-sources/helm_values cilium_helm_values}
*/
export class DataCiliumHelmValues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium_helm_values";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiliumHelmValues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiliumHelmValues to import
  * @param importFromId The id of the existing DataCiliumHelmValues that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/data-sources/helm_values#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiliumHelmValues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium_helm_values", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/data-sources/helm_values cilium_helm_values} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiliumHelmValuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiliumHelmValuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium_helm_values',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2'
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

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
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
