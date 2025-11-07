// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsCfwFirewallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * |-
  *                     The firewall instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls#fw_instance_id DataHcsCfwFirewalls#fw_instance_id}
  */
  readonly fwInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls#id DataHcsCfwFirewalls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls#region DataHcsCfwFirewalls#region}
  */
  readonly region?: string;
  /**
  * |-
  *                     Service type
  *                       0. North-south firewall
  *                       1. East-west firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls#service_type DataHcsCfwFirewalls#service_type}
  */
  readonly serviceType?: number;
}
export interface DataHcsCfwFirewallsRecordsFlavor {
}

export function dataHcsCfwFirewallsRecordsFlavorToTerraform(struct?: DataHcsCfwFirewallsRecordsFlavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsCfwFirewallsRecordsFlavorToHclTerraform(struct?: DataHcsCfwFirewallsRecordsFlavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsCfwFirewallsRecordsFlavorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsCfwFirewallsRecordsFlavor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsCfwFirewallsRecordsFlavor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // eip_count - computed: true, optional: false, required: false
  public get eipCount() {
    return this.getNumberAttribute('eip_count');
  }

  // log_storage - computed: true, optional: false, required: false
  public get logStorage() {
    return this.getNumberAttribute('log_storage');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpc_count - computed: true, optional: false, required: false
  public get vpcCount() {
    return this.getNumberAttribute('vpc_count');
  }
}

export class DataHcsCfwFirewallsRecordsFlavorList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsCfwFirewallsRecordsFlavorOutputReference {
    return new DataHcsCfwFirewallsRecordsFlavorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsCfwFirewallsRecordsProtectObjects {
}

export function dataHcsCfwFirewallsRecordsProtectObjectsToTerraform(struct?: DataHcsCfwFirewallsRecordsProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsCfwFirewallsRecordsProtectObjectsToHclTerraform(struct?: DataHcsCfwFirewallsRecordsProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsCfwFirewallsRecordsProtectObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsCfwFirewallsRecordsProtectObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsCfwFirewallsRecordsProtectObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataHcsCfwFirewallsRecordsProtectObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsCfwFirewallsRecordsProtectObjectsOutputReference {
    return new DataHcsCfwFirewallsRecordsProtectObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsCfwFirewallsRecordsResources {
}

export function dataHcsCfwFirewallsRecordsResourcesToTerraform(struct?: DataHcsCfwFirewallsRecordsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsCfwFirewallsRecordsResourcesToHclTerraform(struct?: DataHcsCfwFirewallsRecordsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsCfwFirewallsRecordsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsCfwFirewallsRecordsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsCfwFirewallsRecordsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_service_type - computed: true, optional: false, required: false
  public get cloudServiceType() {
    return this.getStringAttribute('cloud_service_type');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_size - computed: true, optional: false, required: false
  public get resourceSize() {
    return this.getNumberAttribute('resource_size');
  }

  // resource_size_measure_id - computed: true, optional: false, required: false
  public get resourceSizeMeasureId() {
    return this.getNumberAttribute('resource_size_measure_id');
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataHcsCfwFirewallsRecordsResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsCfwFirewallsRecordsResourcesOutputReference {
    return new DataHcsCfwFirewallsRecordsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsCfwFirewallsRecords {
}

export function dataHcsCfwFirewallsRecordsToTerraform(struct?: DataHcsCfwFirewallsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsCfwFirewallsRecordsToHclTerraform(struct?: DataHcsCfwFirewallsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsCfwFirewallsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsCfwFirewallsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsCfwFirewallsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getNumberAttribute('charge_mode');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }

  // feature_toggle - computed: true, optional: false, required: false
  private _featureToggle = new cdktf.BooleanMap(this, "feature_toggle");
  public get featureToggle() {
    return this._featureToggle;
  }

  // flavor - computed: true, optional: false, required: false
  private _flavor = new DataHcsCfwFirewallsRecordsFlavorList(this, "flavor", false);
  public get flavor() {
    return this._flavor;
  }

  // fw_instance_id - computed: true, optional: false, required: false
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }

  // ha_type - computed: true, optional: false, required: false
  public get haType() {
    return this.getNumberAttribute('ha_type');
  }

  // is_old_firewall_instance - computed: true, optional: false, required: false
  public get isOldFirewallInstance() {
    return this.getBooleanAttribute('is_old_firewall_instance');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protect_objects - computed: true, optional: false, required: false
  private _protectObjects = new DataHcsCfwFirewallsRecordsProtectObjectsList(this, "protect_objects", false);
  public get protectObjects() {
    return this._protectObjects;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataHcsCfwFirewallsRecordsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getNumberAttribute('service_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // support_ipv6 - computed: true, optional: false, required: false
  public get supportIpv6() {
    return this.getBooleanAttribute('support_ipv6');
  }
}

export class DataHcsCfwFirewallsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsCfwFirewallsRecordsOutputReference {
    return new DataHcsCfwFirewallsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls hcs_cfw_firewalls}
*/
export class DataHcsCfwFirewalls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_cfw_firewalls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcsCfwFirewalls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcsCfwFirewalls to import
  * @param importFromId The id of the existing DataHcsCfwFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcsCfwFirewalls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_cfw_firewalls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/cfw_firewalls hcs_cfw_firewalls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsCfwFirewallsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcsCfwFirewallsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcs_cfw_firewalls',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._region = config.region;
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fw_instance_id - computed: false, optional: true, required: false
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  public resetFwInstanceId() {
    this._fwInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // records - computed: true, optional: false, required: false
  private _records = new DataHcsCfwFirewallsRecordsList(this, "records", false);
  public get records() {
    return this._records;
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

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: number; 
  public get serviceType() {
    return this.getNumberAttribute('service_type');
  }
  public set serviceType(value: number) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      service_type: cdktf.numberToTerraform(this._serviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.numberToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
