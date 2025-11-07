// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiEdgeworkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the EdgeWorker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker#edgeworker_id DataAkamaiEdgeworker#edgeworker_id}
  */
  readonly edgeworkerId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker#id DataAkamaiEdgeworker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path where the EdgeWorkers tgz code bundle will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker#local_bundle DataAkamaiEdgeworker#local_bundle}
  */
  readonly localBundle?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker akamai_edgeworker}
*/
export class DataAkamaiEdgeworker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_edgeworker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiEdgeworker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiEdgeworker to import
  * @param importFromId The id of the existing DataAkamaiEdgeworker that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiEdgeworker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_edgeworker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworker akamai_edgeworker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiEdgeworkerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiEdgeworkerConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_edgeworker',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeworkerId = config.edgeworkerId;
    this._id = config.id;
    this._localBundle = config.localBundle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edgeworker_id - computed: false, optional: false, required: true
  private _edgeworkerId?: number; 
  public get edgeworkerId() {
    return this.getNumberAttribute('edgeworker_id');
  }
  public set edgeworkerId(value: number) {
    this._edgeworkerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeworkerIdInput() {
    return this._edgeworkerId;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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

  // local_bundle - computed: false, optional: true, required: false
  private _localBundle?: string; 
  public get localBundle() {
    return this.getStringAttribute('local_bundle');
  }
  public set localBundle(value: string) {
    this._localBundle = value;
  }
  public resetLocalBundle() {
    this._localBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBundleInput() {
    return this._localBundle;
  }

  // local_bundle_hash - computed: true, optional: false, required: false
  public get localBundleHash() {
    return this.getStringAttribute('local_bundle_hash');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_tier_id - computed: true, optional: false, required: false
  public get resourceTierId() {
    return this.getNumberAttribute('resource_tier_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getListAttribute('warnings');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edgeworker_id: cdktf.numberToTerraform(this._edgeworkerId),
      id: cdktf.stringToTerraform(this._id),
      local_bundle: cdktf.stringToTerraform(this._localBundle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edgeworker_id: {
        value: cdktf.numberToHclTerraform(this._edgeworkerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_bundle: {
        value: cdktf.stringToHclTerraform(this._localBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
