// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoundaryInitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of boundary binary we're going to use when initializing the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#bin_name BoundaryInit#bin_name}
  */
  readonly binName?: string;
  /**
  * The path to the directory with binary we're going to use when initializing the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#bin_path BoundaryInit#bin_path}
  */
  readonly binPath: string;
  /**
  * The path to the Boundary configuration to use when initializing the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#config_path BoundaryInit#config_path}
  */
  readonly configPath: string;
  /**
  * The path to a license for Boundary Enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#license BoundaryInit#license}
  */
  readonly license?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#transport BoundaryInit#transport}
  */
  readonly transport?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init enos_boundary_init}
*/
export class BoundaryInit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_boundary_init";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BoundaryInit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BoundaryInit to import
  * @param importFromId The id of the existing BoundaryInit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BoundaryInit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_boundary_init", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/boundary_init enos_boundary_init} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoundaryInitConfig
  */
  public constructor(scope: Construct, id: string, config: BoundaryInitConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_boundary_init',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binName = config.binName;
    this._binPath = config.binPath;
    this._configPath = config.configPath;
    this._license = config.license;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_login_name - computed: true, optional: false, required: false
  public get authLoginName() {
    return this.getStringAttribute('auth_login_name');
  }

  // auth_method_id - computed: true, optional: false, required: false
  public get authMethodId() {
    return this.getStringAttribute('auth_method_id');
  }

  // auth_method_name - computed: true, optional: false, required: false
  public get authMethodName() {
    return this.getStringAttribute('auth_method_name');
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_scope_id - computed: true, optional: false, required: false
  public get authScopeId() {
    return this.getStringAttribute('auth_scope_id');
  }

  // auth_user_id - computed: true, optional: false, required: false
  public get authUserId() {
    return this.getStringAttribute('auth_user_id');
  }

  // auth_user_name - computed: true, optional: false, required: false
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }

  // bin_name - computed: false, optional: true, required: false
  private _binName?: string; 
  public get binName() {
    return this.getStringAttribute('bin_name');
  }
  public set binName(value: string) {
    this._binName = value;
  }
  public resetBinName() {
    this._binName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binNameInput() {
    return this._binName;
  }

  // bin_path - computed: false, optional: false, required: true
  private _binPath?: string; 
  public get binPath() {
    return this.getStringAttribute('bin_path');
  }
  public set binPath(value: string) {
    this._binPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binPathInput() {
    return this._binPath;
  }

  // config_path - computed: false, optional: false, required: true
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // host_catalog_id - computed: true, optional: false, required: false
  public get hostCatalogId() {
    return this.getStringAttribute('host_catalog_id');
  }

  // host_catalog_name - computed: true, optional: false, required: false
  public get hostCatalogName() {
    return this.getStringAttribute('host_catalog_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_scope_id - computed: true, optional: false, required: false
  public get hostScopeId() {
    return this.getStringAttribute('host_scope_id');
  }

  // host_set_id - computed: true, optional: false, required: false
  public get hostSetId() {
    return this.getStringAttribute('host_set_id');
  }

  // host_set_name - computed: true, optional: false, required: false
  public get hostSetName() {
    return this.getStringAttribute('host_set_name');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // login_role_name - computed: true, optional: false, required: false
  public get loginRoleName() {
    return this.getStringAttribute('login_role_name');
  }

  // login_role_scope_id - computed: true, optional: false, required: false
  public get loginRoleScopeId() {
    return this.getStringAttribute('login_role_scope_id');
  }

  // org_scope_id - computed: true, optional: false, required: false
  public get orgScopeId() {
    return this.getStringAttribute('org_scope_id');
  }

  // org_scope_name - computed: true, optional: false, required: false
  public get orgScopeName() {
    return this.getStringAttribute('org_scope_name');
  }

  // org_scope_type - computed: true, optional: false, required: false
  public get orgScopeType() {
    return this.getStringAttribute('org_scope_type');
  }

  // project_scope_id - computed: true, optional: false, required: false
  public get projectScopeId() {
    return this.getStringAttribute('project_scope_id');
  }

  // project_scope_name - computed: true, optional: false, required: false
  public get projectScopeName() {
    return this.getStringAttribute('project_scope_name');
  }

  // project_scope_type - computed: true, optional: false, required: false
  public get projectScopeType() {
    return this.getStringAttribute('project_scope_type');
  }

  // target_default_port - computed: true, optional: false, required: false
  public get targetDefaultPort() {
    return this.getNumberAttribute('target_default_port');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_scope_id - computed: true, optional: false, required: false
  public get targetScopeId() {
    return this.getStringAttribute('target_scope_id');
  }

  // target_session_connection_limit - computed: true, optional: false, required: false
  public get targetSessionConnectionLimit() {
    return this.getNumberAttribute('target_session_connection_limit');
  }

  // target_session_max_seconds - computed: true, optional: false, required: false
  public get targetSessionMaxSeconds() {
    return this.getNumberAttribute('target_session_max_seconds');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_name: cdktf.stringToTerraform(this._binName),
      bin_path: cdktf.stringToTerraform(this._binPath),
      config_path: cdktf.stringToTerraform(this._configPath),
      license: cdktf.stringToTerraform(this._license),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_name: {
        value: cdktf.stringToHclTerraform(this._binName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bin_path: {
        value: cdktf.stringToHclTerraform(this._binPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
