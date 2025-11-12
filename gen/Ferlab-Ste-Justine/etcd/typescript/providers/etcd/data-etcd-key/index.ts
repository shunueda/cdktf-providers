// https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEtcdKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key#id DataEtcdKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key#key DataEtcdKey#key}
  */
  readonly key: string;
  /**
  * Whether to cause an error if the key is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key#must_exist DataEtcdKey#must_exist}
  */
  readonly mustExist?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key etcd_key}
*/
export class DataEtcdKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "etcd_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEtcdKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEtcdKey to import
  * @param importFromId The id of the existing DataEtcdKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEtcdKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "etcd_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/data-sources/key etcd_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEtcdKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataEtcdKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'etcd_key',
      terraformGeneratorMetadata: {
        providerName: 'etcd',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._key = config.key;
    this._mustExist = config.mustExist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_revision - computed: true, optional: false, required: false
  public get createRevision() {
    return this.getNumberAttribute('create_revision');
  }

  // found - computed: true, optional: false, required: false
  public get found() {
    return this.getBooleanAttribute('found');
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // lease - computed: true, optional: false, required: false
  public get lease() {
    return this.getNumberAttribute('lease');
  }

  // mod_revision - computed: true, optional: false, required: false
  public get modRevision() {
    return this.getNumberAttribute('mod_revision');
  }

  // must_exist - computed: false, optional: true, required: false
  private _mustExist?: boolean | cdktf.IResolvable; 
  public get mustExist() {
    return this.getBooleanAttribute('must_exist');
  }
  public set mustExist(value: boolean | cdktf.IResolvable) {
    this._mustExist = value;
  }
  public resetMustExist() {
    this._mustExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustExistInput() {
    return this._mustExist;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
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
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      must_exist: cdktf.booleanToTerraform(this._mustExist),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      must_exist: {
        value: cdktf.booleanToHclTerraform(this._mustExist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
