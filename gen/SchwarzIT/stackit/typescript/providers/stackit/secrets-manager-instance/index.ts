// https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsManagerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the access list for the instance. Each item must be CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance#acl SecretsManagerInstance#acl}
  */
  readonly acl?: string[];
  /**
  * Specifies the instance name. Changing this value requires the resource to be recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance#name SecretsManagerInstance#name}
  */
  readonly name: string;
  /**
  * The project UUID. Changing this value requires the resource to be recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance#project_id SecretsManagerInstance#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance stackit_secrets_manager_instance}
*/
export class SecretsManagerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_secrets_manager_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsManagerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsManagerInstance to import
  * @param importFromId The id of the existing SecretsManagerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsManagerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_secrets_manager_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/secrets_manager_instance stackit_secrets_manager_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsManagerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsManagerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_secrets_manager_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.4',
        providerVersionConstraint: '1.34.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string[]; 
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // frontend_url - computed: true, optional: false, required: false
  public get frontendUrl() {
    return this.getStringAttribute('frontend_url');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acl),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
