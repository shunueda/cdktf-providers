// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource parent cluster (if any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#cluster Generic#cluster}
  */
  readonly cluster?: string;
  /**
  * Resource kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#kind Generic#kind}
  */
  readonly kind: string;
  /**
  * Resource manifest in yaml format. Use `yamlencode`/`yamldecode` function to normalize input and avoid dirty plan. See [reference documentation](https://docs.conduktor.io/platform/reference/resource-reference/console/#manifests) for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#manifest Generic#manifest}
  */
  readonly manifest: string;
  /**
  * Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#name Generic#name}
  */
  readonly name: string;
  /**
  * Resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#version Generic#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic conduktor_generic}
*/
export class Generic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_generic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Generic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Generic to import
  * @param importFromId The id of the existing Generic that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Generic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_generic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/generic conduktor_generic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericConfig
  */
  public constructor(scope: Construct, id: string, config: GenericConfig) {
    super(scope, id, {
      terraformResourceType: 'conduktor_generic',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._kind = config.kind;
    this._manifest = config.manifest;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      kind: cdktf.stringToTerraform(this._kind),
      manifest: cdktf.stringToTerraform(this._manifest),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cdktf.stringToHclTerraform(this._manifest),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
