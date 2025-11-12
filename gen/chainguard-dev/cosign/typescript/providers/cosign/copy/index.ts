// https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy#destination Copy#destination}
  */
  readonly destination: string;
  /**
  * The digest of the container image to copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy#source Copy#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy cosign_copy}
*/
export class Copy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosign_copy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Copy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Copy to import
  * @param importFromId The id of the existing Copy that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Copy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosign_copy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/copy cosign_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopyConfig
  */
  public constructor(scope: Construct, id: string, config: CopyConfig) {
    super(scope, id, {
      terraformResourceType: 'cosign_copy',
      terraformGeneratorMetadata: {
        providerName: 'cosign',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destination = config.destination;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copied_ref - computed: true, optional: false, required: false
  public get copiedRef() {
    return this.getStringAttribute('copied_ref');
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
