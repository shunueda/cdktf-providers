// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/system_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrSystemStatusConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/system_status radarr_system_status}
*/
export class DataRadarrSystemStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_system_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrSystemStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrSystemStatus to import
  * @param importFromId The id of the existing DataRadarrSystemStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/system_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrSystemStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_system_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/system_status radarr_system_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrSystemStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrSystemStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_system_status',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
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

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_debug - computed: true, optional: false, required: false
  public get isDebug() {
    return this.getBooleanAttribute('is_debug');
  }

  // is_docker - computed: true, optional: false, required: false
  public get isDocker() {
    return this.getBooleanAttribute('is_docker');
  }

  // is_linux - computed: true, optional: false, required: false
  public get isLinux() {
    return this.getBooleanAttribute('is_linux');
  }

  // is_net_core - computed: true, optional: false, required: false
  public get isNetCore() {
    return this.getBooleanAttribute('is_net_core');
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

  // migration_version - computed: true, optional: false, required: false
  public get migrationVersion() {
    return this.getNumberAttribute('migration_version');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // os_name - computed: true, optional: false, required: false
  public get osName() {
    return this.getStringAttribute('os_name');
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

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // startup_path - computed: true, optional: false, required: false
  public get startupPath() {
    return this.getStringAttribute('startup_path');
  }

  // url_base - computed: true, optional: false, required: false
  public get urlBase() {
    return this.getStringAttribute('url_base');
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
