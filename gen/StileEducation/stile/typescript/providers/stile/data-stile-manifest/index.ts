// https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStileManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#architecture DataStileManifest#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#bfp_build_number DataStileManifest#bfp_build_number}
  */
  readonly bfpBuildNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#fallback_manifest DataStileManifest#fallback_manifest}
  */
  readonly fallbackManifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#id DataStileManifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#manifest_name DataStileManifest#manifest_name}
  */
  readonly manifestName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest stile_manifest}
*/
export class DataStileManifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stile_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStileManifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStileManifest to import
  * @param importFromId The id of the existing DataStileManifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStileManifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stile_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stileeducation/stile/0.0.25/docs/data-sources/manifest stile_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStileManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataStileManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'stile_manifest',
      terraformGeneratorMetadata: {
        providerName: 'stile',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._bfpBuildNumber = config.bfpBuildNumber;
    this._fallbackManifest = config.fallbackManifest;
    this._id = config.id;
    this._manifestName = config.manifestName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amis - computed: true, optional: false, required: false
  private _amis = new cdktf.StringMap(this, "amis");
  public get amis() {
    return this._amis;
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // bfp_build_number - computed: false, optional: false, required: true
  private _bfpBuildNumber?: number; 
  public get bfpBuildNumber() {
    return this.getNumberAttribute('bfp_build_number');
  }
  public set bfpBuildNumber(value: number) {
    this._bfpBuildNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bfpBuildNumberInput() {
    return this._bfpBuildNumber;
  }

  // fallback_manifest - computed: false, optional: true, required: false
  private _fallbackManifest?: string; 
  public get fallbackManifest() {
    return this.getStringAttribute('fallback_manifest');
  }
  public set fallbackManifest(value: string) {
    this._fallbackManifest = value;
  }
  public resetFallbackManifest() {
    this._fallbackManifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackManifestInput() {
    return this._fallbackManifest;
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

  // manifest_name - computed: false, optional: false, required: true
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_versions - computed: true, optional: false, required: false
  private _serviceVersions = new cdktf.StringMap(this, "service_versions");
  public get serviceVersions() {
    return this._serviceVersions;
  }

  // used_fallback_manifest - computed: true, optional: false, required: false
  public get usedFallbackManifest() {
    return this.getBooleanAttribute('used_fallback_manifest');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      bfp_build_number: cdktf.numberToTerraform(this._bfpBuildNumber),
      fallback_manifest: cdktf.stringToTerraform(this._fallbackManifest),
      id: cdktf.stringToTerraform(this._id),
      manifest_name: cdktf.stringToTerraform(this._manifestName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfp_build_number: {
        value: cdktf.numberToHclTerraform(this._bfpBuildNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_manifest: {
        value: cdktf.stringToHclTerraform(this._fallbackManifest),
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
      manifest_name: {
        value: cdktf.stringToHclTerraform(this._manifestName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
