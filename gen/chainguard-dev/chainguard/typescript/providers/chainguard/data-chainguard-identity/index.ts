// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataChainguardIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The exact issuer of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity#issuer DataChainguardIdentity#issuer}
  */
  readonly issuer: string;
  /**
  * The exact subject of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity#subject DataChainguardIdentity#subject}
  */
  readonly subject: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity chainguard_identity}
*/
export class DataChainguardIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataChainguardIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataChainguardIdentity to import
  * @param importFromId The id of the existing DataChainguardIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataChainguardIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/data-sources/identity chainguard_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataChainguardIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataChainguardIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_identity',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.42',
        providerVersionConstraint: '0.1.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._issuer = config.issuer;
    this._subject = config.subject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      issuer: cdktf.stringToTerraform(this._issuer),
      subject: cdktf.stringToTerraform(this._subject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
