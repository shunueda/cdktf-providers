// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitMariadbCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential#id DataStackitMariadbCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Instance ID the credential belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential#instance_id DataStackitMariadbCredential#instance_id}
  */
  readonly instanceId: string;
  /**
  * Project ID the credential belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential#project_id DataStackitMariadbCredential#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential stackit_mariadb_credential}
*/
export class DataStackitMariadbCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_mariadb_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitMariadbCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitMariadbCredential to import
  * @param importFromId The id of the existing DataStackitMariadbCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitMariadbCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_mariadb_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/mariadb_credential stackit_mariadb_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitMariadbCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitMariadbCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_mariadb_credential',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // route_service_url - computed: true, optional: false, required: false
  public get routeServiceUrl() {
    return this.getStringAttribute('route_service_url');
  }

  // syslog_drain_url - computed: true, optional: false, required: false
  public get syslogDrainUrl() {
    return this.getStringAttribute('syslog_drain_url');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
