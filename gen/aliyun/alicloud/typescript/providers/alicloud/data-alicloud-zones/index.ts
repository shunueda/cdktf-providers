// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#available_disk_category DataAlicloudZones#available_disk_category}
  */
  readonly availableDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#available_instance_type DataAlicloudZones#available_instance_type}
  */
  readonly availableInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#available_resource_creation DataAlicloudZones#available_resource_creation}
  */
  readonly availableResourceCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#available_slb_address_ip_version DataAlicloudZones#available_slb_address_ip_version}
  */
  readonly availableSlbAddressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#available_slb_address_type DataAlicloudZones#available_slb_address_type}
  */
  readonly availableSlbAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#enable_details DataAlicloudZones#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#id DataAlicloudZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#instance_charge_type DataAlicloudZones#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#multi DataAlicloudZones#multi}
  */
  readonly multi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#network_type DataAlicloudZones#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#output_file DataAlicloudZones#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#spot_strategy DataAlicloudZones#spot_strategy}
  */
  readonly spotStrategy?: string;
}
export interface DataAlicloudZonesZones {
}

export function dataAlicloudZonesZonesToTerraform(struct?: DataAlicloudZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudZonesZonesToHclTerraform(struct?: DataAlicloudZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudZonesZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudZonesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudZonesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_disk_categories - computed: true, optional: false, required: false
  public get availableDiskCategories() {
    return this.getListAttribute('available_disk_categories');
  }

  // available_instance_types - computed: true, optional: false, required: false
  public get availableInstanceTypes() {
    return this.getListAttribute('available_instance_types');
  }

  // available_resource_creation - computed: true, optional: false, required: false
  public get availableResourceCreation() {
    return this.getListAttribute('available_resource_creation');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_name - computed: true, optional: false, required: false
  public get localName() {
    return this.getStringAttribute('local_name');
  }

  // multi_zone_ids - computed: true, optional: false, required: false
  public get multiZoneIds() {
    return this.getListAttribute('multi_zone_ids');
  }

  // slb_slave_zone_ids - computed: true, optional: false, required: false
  public get slbSlaveZoneIds() {
    return this.getListAttribute('slb_slave_zone_ids');
  }
}

export class DataAlicloudZonesZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudZonesZonesOutputReference {
    return new DataAlicloudZonesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones alicloud_zones}
*/
export class DataAlicloudZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudZones to import
  * @param importFromId The id of the existing DataAlicloudZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/zones alicloud_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_zones',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availableDiskCategory = config.availableDiskCategory;
    this._availableInstanceType = config.availableInstanceType;
    this._availableResourceCreation = config.availableResourceCreation;
    this._availableSlbAddressIpVersion = config.availableSlbAddressIpVersion;
    this._availableSlbAddressType = config.availableSlbAddressType;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._multi = config.multi;
    this._networkType = config.networkType;
    this._outputFile = config.outputFile;
    this._spotStrategy = config.spotStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_disk_category - computed: false, optional: true, required: false
  private _availableDiskCategory?: string; 
  public get availableDiskCategory() {
    return this.getStringAttribute('available_disk_category');
  }
  public set availableDiskCategory(value: string) {
    this._availableDiskCategory = value;
  }
  public resetAvailableDiskCategory() {
    this._availableDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableDiskCategoryInput() {
    return this._availableDiskCategory;
  }

  // available_instance_type - computed: false, optional: true, required: false
  private _availableInstanceType?: string; 
  public get availableInstanceType() {
    return this.getStringAttribute('available_instance_type');
  }
  public set availableInstanceType(value: string) {
    this._availableInstanceType = value;
  }
  public resetAvailableInstanceType() {
    this._availableInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInstanceTypeInput() {
    return this._availableInstanceType;
  }

  // available_resource_creation - computed: false, optional: true, required: false
  private _availableResourceCreation?: string; 
  public get availableResourceCreation() {
    return this.getStringAttribute('available_resource_creation');
  }
  public set availableResourceCreation(value: string) {
    this._availableResourceCreation = value;
  }
  public resetAvailableResourceCreation() {
    this._availableResourceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableResourceCreationInput() {
    return this._availableResourceCreation;
  }

  // available_slb_address_ip_version - computed: false, optional: true, required: false
  private _availableSlbAddressIpVersion?: string; 
  public get availableSlbAddressIpVersion() {
    return this.getStringAttribute('available_slb_address_ip_version');
  }
  public set availableSlbAddressIpVersion(value: string) {
    this._availableSlbAddressIpVersion = value;
  }
  public resetAvailableSlbAddressIpVersion() {
    this._availableSlbAddressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableSlbAddressIpVersionInput() {
    return this._availableSlbAddressIpVersion;
  }

  // available_slb_address_type - computed: false, optional: true, required: false
  private _availableSlbAddressType?: string; 
  public get availableSlbAddressType() {
    return this.getStringAttribute('available_slb_address_type');
  }
  public set availableSlbAddressType(value: string) {
    this._availableSlbAddressType = value;
  }
  public resetAvailableSlbAddressType() {
    this._availableSlbAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableSlbAddressTypeInput() {
    return this._availableSlbAddressType;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // multi - computed: false, optional: true, required: false
  private _multi?: boolean | cdktf.IResolvable; 
  public get multi() {
    return this.getBooleanAttribute('multi');
  }
  public set multi(value: boolean | cdktf.IResolvable) {
    this._multi = value;
  }
  public resetMulti() {
    this._multi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataAlicloudZonesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      available_disk_category: cdktf.stringToTerraform(this._availableDiskCategory),
      available_instance_type: cdktf.stringToTerraform(this._availableInstanceType),
      available_resource_creation: cdktf.stringToTerraform(this._availableResourceCreation),
      available_slb_address_ip_version: cdktf.stringToTerraform(this._availableSlbAddressIpVersion),
      available_slb_address_type: cdktf.stringToTerraform(this._availableSlbAddressType),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      multi: cdktf.booleanToTerraform(this._multi),
      network_type: cdktf.stringToTerraform(this._networkType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_disk_category: {
        value: cdktf.stringToHclTerraform(this._availableDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_instance_type: {
        value: cdktf.stringToHclTerraform(this._availableInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_resource_creation: {
        value: cdktf.stringToHclTerraform(this._availableResourceCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_slb_address_ip_version: {
        value: cdktf.stringToHclTerraform(this._availableSlbAddressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_slb_address_type: {
        value: cdktf.stringToHclTerraform(this._availableSlbAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi: {
        value: cdktf.booleanToHclTerraform(this._multi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
