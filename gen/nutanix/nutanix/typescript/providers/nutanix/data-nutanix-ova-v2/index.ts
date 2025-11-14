// generated from terraform resource schema

import { DataNutanixOvaV2ChecksumList, 
DataNutanixOvaV2CreatedByList, 
DataNutanixOvaV2LinksList, 
DataNutanixOvaV2SourceList, 
DataNutanixOvaV2VmConfigList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataNutanixOvaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2#cluster_location_ext_ids DataNutanixOvaV2#cluster_location_ext_ids}
  */
  readonly clusterLocationExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2#ext_id DataNutanixOvaV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2#id DataNutanixOvaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2 nutanix_ova_v2}
*/
export class DataNutanixOvaV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ova_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixOvaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixOvaV2 to import
  * @param importFromId The id of the existing DataNutanixOvaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixOvaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ova_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/ova_v2 nutanix_ova_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixOvaV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixOvaV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ova_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterLocationExtIds = config.clusterLocationExtIds;
    this._extId = config.extId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  private _checksum = new DataNutanixOvaV2ChecksumList(this, "checksum", false);
  public get checksum() {
    return this._checksum;
  }

  // cluster_location_ext_ids - computed: true, optional: true, required: false
  private _clusterLocationExtIds?: string[]; 
  public get clusterLocationExtIds() {
    return this.getListAttribute('cluster_location_ext_ids');
  }
  public set clusterLocationExtIds(value: string[]) {
    this._clusterLocationExtIds = value;
  }
  public resetClusterLocationExtIds() {
    this._clusterLocationExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocationExtIdsInput() {
    return this._clusterLocationExtIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataNutanixOvaV2CreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixOvaV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_vm - computed: true, optional: false, required: false
  public get parentVm() {
    return this.getStringAttribute('parent_vm');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataNutanixOvaV2SourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_config - computed: true, optional: false, required: false
  private _vmConfig = new DataNutanixOvaV2VmConfigList(this, "vm_config", false);
  public get vmConfig() {
    return this._vmConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_location_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterLocationExtIds),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_location_ext_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterLocationExtIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
