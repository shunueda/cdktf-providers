// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/anonymous_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnonymousUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Username for anonymous user. This is only for ensuring resource schema is valid for Terraform. This is not meant to be set or updated in the HCL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/anonymous_user#name AnonymousUser#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/anonymous_user artifactory_anonymous_user}
*/
export class AnonymousUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_anonymous_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnonymousUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnonymousUser to import
  * @param importFromId The id of the existing AnonymousUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/anonymous_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnonymousUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_anonymous_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/anonymous_user artifactory_anonymous_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnonymousUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AnonymousUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'artifactory_anonymous_user',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
