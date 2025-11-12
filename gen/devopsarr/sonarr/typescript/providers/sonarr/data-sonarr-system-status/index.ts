// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/system_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrSystemStatusConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/system_status sonarr_system_status}
*/
export class DataSonarrSystemStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_system_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrSystemStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrSystemStatus to import
  * @param importFromId The id of the existing DataSonarrSystemStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/system_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrSystemStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_system_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/system_status sonarr_system_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrSystemStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrSystemStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_system_status',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
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

  // app_data - computed: true, optional: false, required: false
  public get appData() {
    return this.getStringAttribute('app_data');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // build_time - computed: true, optional: false, required: false
  public get buildTime() {
    return this.getStringAttribute('build_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_debug - computed: true, optional: false, required: false
  public get isDebug() {
    return this.getBooleanAttribute('is_debug');
  }

  // is_linux - computed: true, optional: false, required: false
  public get isLinux() {
    return this.getBooleanAttribute('is_linux');
  }

  // is_osx - computed: true, optional: false, required: false
  public get isOsx() {
    return this.getBooleanAttribute('is_osx');
  }

  // is_production - computed: true, optional: false, required: false
  public get isProduction() {
    return this.getBooleanAttribute('is_production');
  }

  // is_user_interactive - computed: true, optional: false, required: false
  public get isUserInteractive() {
    return this.getBooleanAttribute('is_user_interactive');
  }

  // is_windows - computed: true, optional: false, required: false
  public get isWindows() {
    return this.getBooleanAttribute('is_windows');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // package_author - computed: true, optional: false, required: false
  public get packageAuthor() {
    return this.getStringAttribute('package_author');
  }

  // package_update_mechanism - computed: true, optional: false, required: false
  public get packageUpdateMechanism() {
    return this.getStringAttribute('package_update_mechanism');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // runtime_name - computed: true, optional: false, required: false
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // sqlite_version - computed: true, optional: false, required: false
  public get sqliteVersion() {
    return this.getStringAttribute('sqlite_version');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // startup_path - computed: true, optional: false, required: false
  public get startupPath() {
    return this.getStringAttribute('startup_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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
