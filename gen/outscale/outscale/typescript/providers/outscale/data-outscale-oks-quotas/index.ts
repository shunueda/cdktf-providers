// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/data-sources/oks_quotas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOutscaleOksQuotasConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/data-sources/oks_quotas outscale_oks_quotas}
*/
export class DataOutscaleOksQuotas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_oks_quotas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOutscaleOksQuotas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOutscaleOksQuotas to import
  * @param importFromId The id of the existing DataOutscaleOksQuotas that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/data-sources/oks_quotas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOutscaleOksQuotas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_oks_quotas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/data-sources/oks_quotas outscale_oks_quotas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOutscaleOksQuotasConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOutscaleOksQuotasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'outscale_oks_quotas',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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

  // clusters_per_project - computed: true, optional: false, required: false
  public get clustersPerProject() {
    return this.getNumberAttribute('clusters_per_project');
  }

  // cp_subregions - computed: true, optional: false, required: false
  public get cpSubregions() {
    return cdktf.Fn.tolist(this.getListAttribute('cp_subregions'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kube_versions - computed: true, optional: false, required: false
  public get kubeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('kube_versions'));
  }

  // projects - computed: true, optional: false, required: false
  public get projects() {
    return this.getNumberAttribute('projects');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
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
