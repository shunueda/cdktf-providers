// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpectrocloudPackSimpleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates in which context registry should be searched for the pack values. Allowed values are `system`, `project` or `tenant`. Defaults to `project`.If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#context DataSpectrocloudPackSimple#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#id DataSpectrocloudPackSimple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#name DataSpectrocloudPackSimple#name}
  */
  readonly name: string;
  /**
  * The unique identifier (UID) of the registry where the pack is located. Specify `registry_uid` to search within a specific registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#registry_uid DataSpectrocloudPackSimple#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The type of Pack. Allowed values are `helm`, `manifest`, `container` or `operator-instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#type DataSpectrocloudPackSimple#type}
  */
  readonly type: string;
  /**
  * The version of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#version DataSpectrocloudPackSimple#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple spectrocloud_pack_simple}
*/
export class DataSpectrocloudPackSimple extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_pack_simple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpectrocloudPackSimple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpectrocloudPackSimple to import
  * @param importFromId The id of the existing DataSpectrocloudPackSimple that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpectrocloudPackSimple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_pack_simple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/pack_simple spectrocloud_pack_simple} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpectrocloudPackSimpleConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpectrocloudPackSimpleConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_pack_simple',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._id = config.id;
    this._name = config.name;
    this._registryUid = config.registryUid;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // registry_uid - computed: false, optional: true, required: false
  private _registryUid?: string; 
  public get registryUid() {
    return this.getStringAttribute('registry_uid');
  }
  public set registryUid(value: string) {
    this._registryUid = value;
  }
  public resetRegistryUid() {
    this._registryUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUidInput() {
    return this._registryUid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getStringAttribute('values');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
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
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      registry_uid: cdktf.stringToTerraform(this._registryUid),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_uid: {
        value: cdktf.stringToHclTerraform(this._registryUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
