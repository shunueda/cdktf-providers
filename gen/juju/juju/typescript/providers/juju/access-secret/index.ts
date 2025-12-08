// https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of applications to which the secret is granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret#applications AccessSecret#applications}
  */
  readonly applications: string[];
  /**
  * The model in which the secret belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret#model AccessSecret#model}
  */
  readonly model: string;
  /**
  * The ID of the secret. E.g. coj8mulh8b41e8nv6p90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret#secret_id AccessSecret#secret_id}
  */
  readonly secretId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret juju_access_secret}
*/
export class AccessSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_access_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessSecret to import
  * @param importFromId The id of the existing AccessSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_access_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_secret juju_access_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessSecretConfig
  */
  public constructor(scope: Construct, id: string, config: AccessSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_access_secret',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '0.23.2',
        providerVersionConstraint: '0.23.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._model = config.model;
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      model: cdktf.stringToTerraform(this._model),
      secret_id: cdktf.stringToTerraform(this._secretId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
