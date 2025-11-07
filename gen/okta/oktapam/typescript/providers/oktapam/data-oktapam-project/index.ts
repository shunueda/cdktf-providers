// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project#name DataOktapamProject#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project oktapam_project}
*/
export class DataOktapamProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamProject to import
  * @param importFromId The id of the existing DataOktapamProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project oktapam_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_project',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_server_users - computed: true, optional: false, required: false
  public get createServerUsers() {
    return this.getBooleanAttribute('create_server_users');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // forward_traffic - computed: true, optional: false, required: false
  public get forwardTraffic() {
    return this.getBooleanAttribute('forward_traffic');
  }

  // gateway_selector - computed: true, optional: false, required: false
  public get gatewaySelector() {
    return this.getStringAttribute('gateway_selector');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_unix_gid - computed: true, optional: false, required: false
  public get nextUnixGid() {
    return this.getNumberAttribute('next_unix_gid');
  }

  // next_unix_uid - computed: true, optional: false, required: false
  public get nextUnixUid() {
    return this.getNumberAttribute('next_unix_uid');
  }

  // rdp_session_recording - computed: true, optional: false, required: false
  public get rdpSessionRecording() {
    return this.getBooleanAttribute('rdp_session_recording');
  }

  // require_preauth_for_creds - computed: true, optional: false, required: false
  public get requirePreauthForCreds() {
    return this.getBooleanAttribute('require_preauth_for_creds');
  }

  // ssh_certificate_type - computed: true, optional: false, required: false
  public get sshCertificateType() {
    return this.getStringAttribute('ssh_certificate_type');
  }

  // ssh_session_recording - computed: true, optional: false, required: false
  public get sshSessionRecording() {
    return this.getBooleanAttribute('ssh_session_recording');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // user_on_demand_period - computed: true, optional: false, required: false
  public get userOnDemandPeriod() {
    return this.getNumberAttribute('user_on_demand_period');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
