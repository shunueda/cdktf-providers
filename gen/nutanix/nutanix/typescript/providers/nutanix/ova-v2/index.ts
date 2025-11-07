// generated from terraform resource schema

import { OvaV2CreatedByList, 
OvaV2LinksList, 
OvaV2VmConfigList, 
OvaV2Checksum, 
ovaV2ChecksumToTerraform, 
ovaV2ChecksumToHclTerraform, 
OvaV2ChecksumOutputReference, 
OvaV2Source, 
ovaV2SourceToTerraform, 
ovaV2SourceToHclTerraform, 
OvaV2SourceList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OvaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#cluster_location_ext_ids OvaV2#cluster_location_ext_ids}
  */
  readonly clusterLocationExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#disk_format OvaV2#disk_format}
  */
  readonly diskFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#id OvaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#name OvaV2#name}
  */
  readonly name: string;
  /**
  * checksum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#checksum OvaV2#checksum}
  */
  readonly checksum?: OvaV2Checksum;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#source OvaV2#source}
  */
  readonly source: OvaV2Source[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2 nutanix_ova_v2}
*/
export class OvaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ova_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvaV2 to import
  * @param importFromId The id of the existing OvaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ova_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2 nutanix_ova_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvaV2Config
  */
  public constructor(scope: Construct, id: string, config: OvaV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ova_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._diskFormat = config.diskFormat;
    this._id = config.id;
    this._name = config.name;
    this._checksum.internalValue = config.checksum;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _createdBy = new OvaV2CreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // disk_format - computed: true, optional: true, required: false
  private _diskFormat?: string; 
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }
  public set diskFormat(value: string) {
    this._diskFormat = value;
  }
  public resetDiskFormat() {
    this._diskFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFormatInput() {
    return this._diskFormat;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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
  private _links = new OvaV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // parent_vm - computed: true, optional: false, required: false
  public get parentVm() {
    return this.getStringAttribute('parent_vm');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_config - computed: true, optional: false, required: false
  private _vmConfig = new OvaV2VmConfigList(this, "vm_config", false);
  public get vmConfig() {
    return this._vmConfig;
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum = new OvaV2ChecksumOutputReference(this, "checksum");
  public get checksum() {
    return this._checksum;
  }
  public putChecksum(value: OvaV2Checksum) {
    this._checksum.internalValue = value;
  }
  public resetChecksum() {
    this._checksum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OvaV2SourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: OvaV2Source[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_location_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterLocationExtIds),
      disk_format: cdktf.stringToTerraform(this._diskFormat),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      checksum: ovaV2ChecksumToTerraform(this._checksum.internalValue),
      source: cdktf.listMapper(ovaV2SourceToTerraform, true)(this._source.internalValue),
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
      disk_format: {
        value: cdktf.stringToHclTerraform(this._diskFormat),
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
      checksum: {
        value: ovaV2ChecksumToHclTerraform(this._checksum.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OvaV2ChecksumList",
      },
      source: {
        value: cdktf.listMapperHcl(ovaV2SourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OvaV2SourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
