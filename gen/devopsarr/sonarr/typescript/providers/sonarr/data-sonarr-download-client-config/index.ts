// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/download_client_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrDownloadClientConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/download_client_config sonarr_download_client_config}
*/
export class DataSonarrDownloadClientConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_download_client_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrDownloadClientConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrDownloadClientConfigA to import
  * @param importFromId The id of the existing DataSonarrDownloadClientConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/download_client_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrDownloadClientConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_download_client_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/download_client_config sonarr_download_client_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrDownloadClientConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrDownloadClientConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_download_client_config',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
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
