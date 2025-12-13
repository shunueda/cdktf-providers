// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `ID` of the meta business unit this manifest is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest#meta_business_unit_id MonolithManifest#meta_business_unit_id}
  */
  readonly metaBusinessUnitId: number;
  /**
  * Name of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest#name MonolithManifest#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest zentral_monolith_manifest}
*/
export class MonolithManifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithManifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithManifest to import
  * @param importFromId The id of the existing MonolithManifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithManifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/monolith_manifest zentral_monolith_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithManifestConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_manifest',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metaBusinessUnitId = config.metaBusinessUnitId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta_business_unit_id - computed: false, optional: false, required: true
  private _metaBusinessUnitId?: number; 
  public get metaBusinessUnitId() {
    return this.getNumberAttribute('meta_business_unit_id');
  }
  public set metaBusinessUnitId(value: number) {
    this._metaBusinessUnitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaBusinessUnitIdInput() {
    return this._metaBusinessUnitId;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      meta_business_unit_id: cdktf.numberToTerraform(this._metaBusinessUnitId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      meta_business_unit_id: {
        value: cdktf.numberToHclTerraform(this._metaBusinessUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
