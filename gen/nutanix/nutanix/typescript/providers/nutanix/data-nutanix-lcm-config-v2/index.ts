// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixLcmConfigV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2#id DataNutanixLcmConfigV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2#x_cluster_id DataNutanixLcmConfigV2#x_cluster_id}
  */
  readonly xClusterId?: string;
}
export interface DataNutanixLcmConfigV2Links {
}

export function dataNutanixLcmConfigV2LinksToTerraform(struct?: DataNutanixLcmConfigV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixLcmConfigV2LinksToHclTerraform(struct?: DataNutanixLcmConfigV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixLcmConfigV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixLcmConfigV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixLcmConfigV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixLcmConfigV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixLcmConfigV2LinksOutputReference {
    return new DataNutanixLcmConfigV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2 nutanix_lcm_config_v2}
*/
export class DataNutanixLcmConfigV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_lcm_config_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixLcmConfigV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixLcmConfigV2 to import
  * @param importFromId The id of the existing DataNutanixLcmConfigV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixLcmConfigV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_lcm_config_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/lcm_config_v2 nutanix_lcm_config_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixLcmConfigV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixLcmConfigV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_lcm_config_v2',
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
    this._id = config.id;
    this._xClusterId = config.xClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_inventory_schedule - computed: true, optional: false, required: false
  public get autoInventorySchedule() {
    return this.getStringAttribute('auto_inventory_schedule');
  }

  // connectivity_type - computed: true, optional: false, required: false
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }

  // deprecated_software_entities - computed: true, optional: false, required: false
  public get deprecatedSoftwareEntities() {
    return this.getListAttribute('deprecated_software_entities');
  }

  // display_version - computed: true, optional: false, required: false
  public get displayVersion() {
    return this.getStringAttribute('display_version');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // has_module_auto_upgrade_enabled - computed: true, optional: false, required: false
  public get hasModuleAutoUpgradeEnabled() {
    return this.getBooleanAttribute('has_module_auto_upgrade_enabled');
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

  // is_auto_inventory_enabled - computed: true, optional: false, required: false
  public get isAutoInventoryEnabled() {
    return this.getBooleanAttribute('is_auto_inventory_enabled');
  }

  // is_framework_bundle_uploaded - computed: true, optional: false, required: false
  public get isFrameworkBundleUploaded() {
    return this.getBooleanAttribute('is_framework_bundle_uploaded');
  }

  // is_https_enabled - computed: true, optional: false, required: false
  public get isHttpsEnabled() {
    return this.getBooleanAttribute('is_https_enabled');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixLcmConfigV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // supported_software_entities - computed: true, optional: false, required: false
  public get supportedSoftwareEntities() {
    return this.getListAttribute('supported_software_entities');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // x_cluster_id - computed: false, optional: true, required: false
  private _xClusterId?: string; 
  public get xClusterId() {
    return this.getStringAttribute('x_cluster_id');
  }
  public set xClusterId(value: string) {
    this._xClusterId = value;
  }
  public resetXClusterId() {
    this._xClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xClusterIdInput() {
    return this._xClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      x_cluster_id: cdktf.stringToTerraform(this._xClusterId),
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
      x_cluster_id: {
        value: cdktf.stringToHclTerraform(this._xClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
