// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdIndependentDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk#id DataVcdIndependentDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk#name DataVcdIndependentDisk#name}
  */
  readonly name?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk#org DataVcdIndependentDisk#org}
  */
  readonly org?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk#vdc DataVcdIndependentDisk#vdc}
  */
  readonly vdc?: string;
}
export interface DataVcdIndependentDiskMetadataEntry {
}

export function dataVcdIndependentDiskMetadataEntryToTerraform(struct?: DataVcdIndependentDiskMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdIndependentDiskMetadataEntryToHclTerraform(struct?: DataVcdIndependentDiskMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdIndependentDiskMetadataEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVcdIndependentDiskMetadataEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdIndependentDiskMetadataEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_access - computed: true, optional: false, required: false
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVcdIndependentDiskMetadataEntryList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVcdIndependentDiskMetadataEntryOutputReference {
    return new DataVcdIndependentDiskMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk vcd_independent_disk}
*/
export class DataVcdIndependentDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_independent_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdIndependentDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdIndependentDisk to import
  * @param importFromId The id of the existing DataVcdIndependentDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdIndependentDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_independent_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/independent_disk vcd_independent_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdIndependentDiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdIndependentDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_independent_disk',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._name = config.name;
    this._org = config.org;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_vm_ids - computed: true, optional: false, required: false
  public get attachedVmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('attached_vm_ids'));
  }

  // bus_sub_type - computed: true, optional: false, required: false
  public get busSubType() {
    return this.getStringAttribute('bus_sub_type');
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: false, optional: true, required: false
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

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // is_attached - computed: true, optional: false, required: false
  public get isAttached() {
    return this.getBooleanAttribute('is_attached');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metadata_entry - computed: true, optional: false, required: false
  private _metadataEntry = new DataVcdIndependentDiskMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }

  // name - computed: false, optional: true, required: false
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_name - computed: true, optional: false, required: false
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }

  // sharing_type - computed: true, optional: false, required: false
  public get sharingType() {
    return this.getStringAttribute('sharing_type');
  }

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // storage_profile - computed: true, optional: false, required: false
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      vdc: cdktf.stringToTerraform(this._vdc),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
