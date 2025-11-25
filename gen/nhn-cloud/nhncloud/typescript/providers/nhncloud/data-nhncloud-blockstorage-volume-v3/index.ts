// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudBlockstorageVolumeV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#bootable DataNhncloudBlockstorageVolumeV3#bootable}
  */
  readonly bootable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#host DataNhncloudBlockstorageVolumeV3#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#id DataNhncloudBlockstorageVolumeV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#metadata DataNhncloudBlockstorageVolumeV3#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#name DataNhncloudBlockstorageVolumeV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#region DataNhncloudBlockstorageVolumeV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#status DataNhncloudBlockstorageVolumeV3#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#volume_type DataNhncloudBlockstorageVolumeV3#volume_type}
  */
  readonly volumeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3 nhncloud_blockstorage_volume_v3}
*/
export class DataNhncloudBlockstorageVolumeV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_blockstorage_volume_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudBlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudBlockstorageVolumeV3 to import
  * @param importFromId The id of the existing DataNhncloudBlockstorageVolumeV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudBlockstorageVolumeV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_blockstorage_volume_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/blockstorage_volume_v3 nhncloud_blockstorage_volume_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudBlockstorageVolumeV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudBlockstorageVolumeV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_blockstorage_volume_v3',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootable = config.bootable;
    this._host = config.host;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._volumeType = config.volumeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootable - computed: true, optional: true, required: false
  private _bootable?: string; 
  public get bootable() {
    return this.getStringAttribute('bootable');
  }
  public set bootable(value: string) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // multiattach - computed: true, optional: false, required: false
  public get multiattach() {
    return this.getBooleanAttribute('multiattach');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_volume_id - computed: true, optional: false, required: false
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootable: cdktf.stringToTerraform(this._bootable),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      volume_type: cdktf.stringToTerraform(this._volumeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootable: {
        value: cdktf.stringToHclTerraform(this._bootable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
