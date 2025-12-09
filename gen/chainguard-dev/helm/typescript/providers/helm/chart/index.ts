// https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON RFC6902 patches to apply to the Helm chart, organized by the file to which the patch should be applied. Each file must contain the json representation of the JSON patch array to apply. It's easiest to use the jsonencode function to generate the JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#json_patches Chart#json_patches}
  */
  readonly jsonPatches?: { [key: string]: string };
  /**
  * The architecture of the package to fetch. If not specified, uses the provider default_arch or falls back to system defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#package_arch Chart#package_arch}
  */
  readonly packageArch?: string;
  /**
  * The name of the package to fetch from the package repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#package_name Chart#package_name}
  */
  readonly packageName: string;
  /**
  * The version of the package to fetch from the package repository. If not specified, the latest available version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#package_version Chart#package_version}
  */
  readonly packageVersion?: string;
  /**
  * The repo in the OCI registry where the Helm chart will be pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#repo Chart#repo}
  */
  readonly repo: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart helm_chart}
*/
export class Chart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Chart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Chart to import
  * @param importFromId The id of the existing Chart that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Chart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helm_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.9/docs/resources/chart helm_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChartConfig
  */
  public constructor(scope: Construct, id: string, config: ChartConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_chart',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '0.0.9',
        providerVersionConstraint: '0.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jsonPatches = config.jsonPatches;
    this._packageArch = config.packageArch;
    this._packageName = config.packageName;
    this._packageVersion = config.packageVersion;
    this._repo = config.repo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart_version - computed: true, optional: false, required: false
  public get chartVersion() {
    return this.getStringAttribute('chart_version');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json_patches - computed: false, optional: true, required: false
  private _jsonPatches?: { [key: string]: string }; 
  public get jsonPatches() {
    return this.getStringMapAttribute('json_patches');
  }
  public set jsonPatches(value: { [key: string]: string }) {
    this._jsonPatches = value;
  }
  public resetJsonPatches() {
    this._jsonPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_arch - computed: false, optional: true, required: false
  private _packageArch?: string; 
  public get packageArch() {
    return this.getStringAttribute('package_arch');
  }
  public set packageArch(value: string) {
    this._packageArch = value;
  }
  public resetPackageArch() {
    this._packageArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageArchInput() {
    return this._packageArch;
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_version - computed: false, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      json_patches: cdktf.hashMapper(cdktf.stringToTerraform)(this._jsonPatches),
      package_arch: cdktf.stringToTerraform(this._packageArch),
      package_name: cdktf.stringToTerraform(this._packageName),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      repo: cdktf.stringToTerraform(this._repo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      json_patches: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._jsonPatches),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      package_arch: {
        value: cdktf.stringToHclTerraform(this._packageArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
