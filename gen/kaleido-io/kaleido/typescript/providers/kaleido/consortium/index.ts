// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsortiumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium#description Consortium#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium#name Consortium#name}
  */
  readonly name: string;
  /**
  * The decentralized nature of Kaleido means a consortium might be shared with other accounts. When true only create if name does not exist, and delete becomes a no-op.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium#shared_deployment Consortium#shared_deployment}
  */
  readonly sharedDeployment?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium kaleido_consortium}
*/
export class Consortium extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_consortium";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Consortium resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Consortium to import
  * @param importFromId The id of the existing Consortium that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Consortium to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_consortium", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/consortium kaleido_consortium} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsortiumConfig
  */
  public constructor(scope: Construct, id: string, config: ConsortiumConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_consortium',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._sharedDeployment = config.sharedDeployment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // shared_deployment - computed: true, optional: true, required: false
  private _sharedDeployment?: boolean | cdktf.IResolvable; 
  public get sharedDeployment() {
    return this.getBooleanAttribute('shared_deployment');
  }
  public set sharedDeployment(value: boolean | cdktf.IResolvable) {
    this._sharedDeployment = value;
  }
  public resetSharedDeployment() {
    this._sharedDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDeploymentInput() {
    return this._sharedDeployment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      shared_deployment: cdktf.booleanToTerraform(this._sharedDeployment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_deployment: {
        value: cdktf.booleanToHclTerraform(this._sharedDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
