// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterPropertySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to identify the Blueprint that the Property Set is imported into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#blueprint_id DatacenterPropertySet#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * ID of the Property Set ID to be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#id DatacenterPropertySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Subset of Keys to import, at least one Key is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#keys DatacenterPropertySet#keys}
  */
  readonly keys?: string[];
  /**
  * This attribute is used to trigger re-import of the Property Set from the Global Catalog. It is for internal use by the provider, and should not be set by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#sync_required DatacenterPropertySet#sync_required}
  */
  readonly syncRequired?: boolean | cdktf.IResolvable;
  /**
  * When `true`, the Property Set will be re-imported whenever it is found to be out of sync with the source Property Set in the Global Catalog. This attribute cannot be combined with the `keys` attribute, because importing a subset of Keys guarantees the Property Set will never be in sync with the Global Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#sync_with_catalog DatacenterPropertySet#sync_with_catalog}
  */
  readonly syncWithCatalog?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set apstra_datacenter_property_set}
*/
export class DatacenterPropertySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_property_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterPropertySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterPropertySet to import
  * @param importFromId The id of the existing DatacenterPropertySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterPropertySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_property_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_property_set apstra_datacenter_property_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterPropertySetConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterPropertySetConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_property_set',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._id = config.id;
    this._keys = config.keys;
    this._syncRequired = config.syncRequired;
    this._syncWithCatalog = config.syncWithCatalog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
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

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stale - computed: true, optional: false, required: false
  public get stale() {
    return this.getBooleanAttribute('stale');
  }

  // sync_required - computed: true, optional: true, required: false
  private _syncRequired?: boolean | cdktf.IResolvable; 
  public get syncRequired() {
    return this.getBooleanAttribute('sync_required');
  }
  public set syncRequired(value: boolean | cdktf.IResolvable) {
    this._syncRequired = value;
  }
  public resetSyncRequired() {
    this._syncRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRequiredInput() {
    return this._syncRequired;
  }

  // sync_with_catalog - computed: false, optional: true, required: false
  private _syncWithCatalog?: boolean | cdktf.IResolvable; 
  public get syncWithCatalog() {
    return this.getBooleanAttribute('sync_with_catalog');
  }
  public set syncWithCatalog(value: boolean | cdktf.IResolvable) {
    this._syncWithCatalog = value;
  }
  public resetSyncWithCatalog() {
    this._syncWithCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWithCatalogInput() {
    return this._syncWithCatalog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      id: cdktf.stringToTerraform(this._id),
      keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keys),
      sync_required: cdktf.booleanToTerraform(this._syncRequired),
      sync_with_catalog: cdktf.booleanToTerraform(this._syncWithCatalog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sync_required: {
        value: cdktf.booleanToHclTerraform(this._syncRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_with_catalog: {
        value: cdktf.booleanToHclTerraform(this._syncWithCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
