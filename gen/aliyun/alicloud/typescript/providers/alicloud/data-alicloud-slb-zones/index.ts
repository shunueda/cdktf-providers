// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudSlbZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#available_slb_address_ip_version DataAlicloudSlbZones#available_slb_address_ip_version}
  */
  readonly availableSlbAddressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#available_slb_address_type DataAlicloudSlbZones#available_slb_address_type}
  */
  readonly availableSlbAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#enable_details DataAlicloudSlbZones#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#id DataAlicloudSlbZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#master_zone_id DataAlicloudSlbZones#master_zone_id}
  */
  readonly masterZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#output_file DataAlicloudSlbZones#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#slave_zone_id DataAlicloudSlbZones#slave_zone_id}
  */
  readonly slaveZoneId?: string;
}
export interface DataAlicloudSlbZonesZonesSupportedResources {
}

export function dataAlicloudSlbZonesZonesSupportedResourcesToTerraform(struct?: DataAlicloudSlbZonesZonesSupportedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSlbZonesZonesSupportedResourcesToHclTerraform(struct?: DataAlicloudSlbZonesZonesSupportedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSlbZonesZonesSupportedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSlbZonesZonesSupportedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSlbZonesZonesSupportedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_ip_version - computed: true, optional: false, required: false
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
}

export class DataAlicloudSlbZonesZonesSupportedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSlbZonesZonesSupportedResourcesOutputReference {
    return new DataAlicloudSlbZonesZonesSupportedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSlbZonesZones {
}

export function dataAlicloudSlbZonesZonesToTerraform(struct?: DataAlicloudSlbZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSlbZonesZonesToHclTerraform(struct?: DataAlicloudSlbZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSlbZonesZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSlbZonesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSlbZonesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_zone_id - computed: true, optional: false, required: false
  public get masterZoneId() {
    return this.getStringAttribute('master_zone_id');
  }

  // slave_zone_id - computed: true, optional: false, required: false
  public get slaveZoneId() {
    return this.getStringAttribute('slave_zone_id');
  }

  // slb_slave_zone_ids - computed: true, optional: false, required: false
  public get slbSlaveZoneIds() {
    return this.getListAttribute('slb_slave_zone_ids');
  }

  // supported_resources - computed: true, optional: false, required: false
  private _supportedResources = new DataAlicloudSlbZonesZonesSupportedResourcesList(this, "supported_resources", false);
  public get supportedResources() {
    return this._supportedResources;
  }
}

export class DataAlicloudSlbZonesZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSlbZonesZonesOutputReference {
    return new DataAlicloudSlbZonesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones alicloud_slb_zones}
*/
export class DataAlicloudSlbZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_slb_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudSlbZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudSlbZones to import
  * @param importFromId The id of the existing DataAlicloudSlbZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudSlbZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_slb_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/slb_zones alicloud_slb_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudSlbZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudSlbZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_slb_zones',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availableSlbAddressIpVersion = config.availableSlbAddressIpVersion;
    this._availableSlbAddressType = config.availableSlbAddressType;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._masterZoneId = config.masterZoneId;
    this._outputFile = config.outputFile;
    this._slaveZoneId = config.slaveZoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // master_zone_id - computed: false, optional: true, required: false
  private _masterZoneId?: string; 
  public get masterZoneId() {
    return this.getStringAttribute('master_zone_id');
  }
  public set masterZoneId(value: string) {
    this._masterZoneId = value;
  }
  public resetMasterZoneId() {
    this._masterZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterZoneIdInput() {
    return this._masterZoneId;
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

  // slave_zone_id - computed: false, optional: true, required: false
  private _slaveZoneId?: string; 
  public get slaveZoneId() {
    return this.getStringAttribute('slave_zone_id');
  }
  public set slaveZoneId(value: string) {
    this._slaveZoneId = value;
  }
  public resetSlaveZoneId() {
    this._slaveZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveZoneIdInput() {
    return this._slaveZoneId;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataAlicloudSlbZonesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      available_slb_address_ip_version: cdktf.stringToTerraform(this._availableSlbAddressIpVersion),
      available_slb_address_type: cdktf.stringToTerraform(this._availableSlbAddressType),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      master_zone_id: cdktf.stringToTerraform(this._masterZoneId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      slave_zone_id: cdktf.stringToTerraform(this._slaveZoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      master_zone_id: {
        value: cdktf.stringToHclTerraform(this._masterZoneId),
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
      slave_zone_id: {
        value: cdktf.stringToHclTerraform(this._slaveZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
