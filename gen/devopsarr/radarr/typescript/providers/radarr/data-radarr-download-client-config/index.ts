// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrDownloadClientConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client_config radarr_download_client_config}
*/
export class DataRadarrDownloadClientConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrDownloadClientConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrDownloadClientConfigA to import
  * @param importFromId The id of the existing DataRadarrDownloadClientConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrDownloadClientConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/download_client_config radarr_download_client_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrDownloadClientConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrDownloadClientConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client_config',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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

  // auto_redownload_failed - computed: true, optional: false, required: false
  public get autoRedownloadFailed() {
    return this.getBooleanAttribute('auto_redownload_failed');
  }

  // check_for_finished_download_interval - computed: true, optional: false, required: false
  public get checkForFinishedDownloadInterval() {
    return this.getNumberAttribute('check_for_finished_download_interval');
  }

  // download_client_working_folders - computed: true, optional: false, required: false
  public get downloadClientWorkingFolders() {
    return this.getStringAttribute('download_client_working_folders');
  }

  // enable_completed_download_handling - computed: true, optional: false, required: false
  public get enableCompletedDownloadHandling() {
    return this.getBooleanAttribute('enable_completed_download_handling');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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
