// https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The docker image name and tag to source for pushing to the target image repository. 
  * Currently, this docker image must be public or accessible using the same auth as the "target" image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image#source RemoteImage#source}
  */
  readonly source: string;
  /**
  * The docker image name and tag to ensure exists in an image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image#target RemoteImage#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image dockerless_remote_image}
*/
export class RemoteImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dockerless_remote_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteImage to import
  * @param importFromId The id of the existing RemoteImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dockerless_remote_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.3/docs/resources/remote_image dockerless_remote_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteImageConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteImageConfig) {
    super(scope, id, {
      terraformResourceType: 'dockerless_remote_image',
      terraformGeneratorMetadata: {
        providerName: 'dockerless',
        providerVersion: '0.1.3',
        providerVersionConstraint: '0.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._source = config.source;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      source: cdktf.stringToTerraform(this._source),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
