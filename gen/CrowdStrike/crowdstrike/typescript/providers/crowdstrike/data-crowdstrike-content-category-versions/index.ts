// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/content_category_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeContentCategoryVersionsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/content_category_versions crowdstrike_content_category_versions}
*/
export class DataCrowdstrikeContentCategoryVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_content_category_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeContentCategoryVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeContentCategoryVersions to import
  * @param importFromId The id of the existing DataCrowdstrikeContentCategoryVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/content_category_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeContentCategoryVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_content_category_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/data-sources/content_category_versions crowdstrike_content_category_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeContentCategoryVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeContentCategoryVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_content_category_versions',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
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

  // rapid_response - computed: true, optional: false, required: false
  public get rapidResponse() {
    return this.getListAttribute('rapid_response');
  }

  // sensor_operations - computed: true, optional: false, required: false
  public get sensorOperations() {
    return this.getListAttribute('sensor_operations');
  }

  // system_critical - computed: true, optional: false, required: false
  public get systemCritical() {
    return this.getListAttribute('system_critical');
  }

  // vulnerability_management - computed: true, optional: false, required: false
  public get vulnerabilityManagement() {
    return this.getListAttribute('vulnerability_management');
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
