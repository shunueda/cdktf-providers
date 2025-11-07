// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinalizeVersionUpgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Major version of the cluster to be finalized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade#cockroach_version FinalizeVersionUpgrade#cockroach_version}
  */
  readonly cockroachVersion: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade#id FinalizeVersionUpgrade#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade cockroach_finalize_version_upgrade}
*/
export class FinalizeVersionUpgrade extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_finalize_version_upgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FinalizeVersionUpgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FinalizeVersionUpgrade to import
  * @param importFromId The id of the existing FinalizeVersionUpgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FinalizeVersionUpgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_finalize_version_upgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/finalize_version_upgrade cockroach_finalize_version_upgrade} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinalizeVersionUpgradeConfig
  */
  public constructor(scope: Construct, id: string, config: FinalizeVersionUpgradeConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_finalize_version_upgrade',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cockroachVersion = config.cockroachVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cockroach_version - computed: false, optional: false, required: true
  private _cockroachVersion?: string; 
  public get cockroachVersion() {
    return this.getStringAttribute('cockroach_version');
  }
  public set cockroachVersion(value: string) {
    this._cockroachVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cockroachVersionInput() {
    return this._cockroachVersion;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cockroach_version: cdktf.stringToTerraform(this._cockroachVersion),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cockroach_version: {
        value: cdktf.stringToHclTerraform(this._cockroachVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
