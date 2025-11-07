// https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * API URL in the harvester
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#api_url Bootstrap#api_url}
  */
  readonly apiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#id Bootstrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default password in the harvester
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#initial_password Bootstrap#initial_password}
  */
  readonly initialPassword?: string;
  /**
  * Path to store the kubeconfig file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#kubeconfig Bootstrap#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * New password for admin user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#password Bootstrap#password}
  */
  readonly password: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap harvester_bootstrap}
*/
export class Bootstrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harvester_bootstrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bootstrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bootstrap to import
  * @param importFromId The id of the existing Bootstrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bootstrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harvester_bootstrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/bootstrap harvester_bootstrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapConfig) {
    super(scope, id, {
      terraformResourceType: 'harvester_bootstrap',
      terraformGeneratorMetadata: {
        providerName: 'harvester',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUrl = config.apiUrl;
    this._id = config.id;
    this._initialPassword = config.initialPassword;
    this._kubeconfig = config.kubeconfig;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initial_password - computed: false, optional: true, required: false
  private _initialPassword?: string; 
  public get initialPassword() {
    return this.getStringAttribute('initial_password');
  }
  public set initialPassword(value: string) {
    this._initialPassword = value;
  }
  public resetInitialPassword() {
    this._initialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPasswordInput() {
    return this._initialPassword;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // should_update_password - computed: true, optional: false, required: false
  public get shouldUpdatePassword() {
    return this.getBooleanAttribute('should_update_password');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url: cdktf.stringToTerraform(this._apiUrl),
      id: cdktf.stringToTerraform(this._id),
      initial_password: cdktf.stringToTerraform(this._initialPassword),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_password: {
        value: cdktf.stringToHclTerraform(this._initialPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
