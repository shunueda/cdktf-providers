// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataXenorchestraPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool#id DataXenorchestraPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name_label of the pool to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool#name_label DataXenorchestraPool#name_label}
  */
  readonly nameLabel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool xenorchestra_pool}
*/
export class DataXenorchestraPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataXenorchestraPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataXenorchestraPool to import
  * @param importFromId The id of the existing DataXenorchestraPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataXenorchestraPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/pool xenorchestra_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataXenorchestraPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataXenorchestraPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_pool',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nameLabel = config.nameLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpus - computed: true, optional: false, required: false
  private _cpus = new cdktf.StringMap(this, "cpus");
  public get cpus() {
    return this._cpus;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getStringAttribute('master');
  }

  // name_label - computed: false, optional: false, required: true
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_label: cdktf.stringToTerraform(this._nameLabel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_label: {
        value: cdktf.stringToHclTerraform(this._nameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
