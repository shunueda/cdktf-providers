// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCfwFirewallV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1#id DataOpentelekomcloudCfwFirewallV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1#service_type DataOpentelekomcloudCfwFirewallV1#service_type}
  */
  readonly serviceType?: string;
}
export interface DataOpentelekomcloudCfwFirewallV1Flavor {
}

export function dataOpentelekomcloudCfwFirewallV1FlavorToTerraform(struct?: DataOpentelekomcloudCfwFirewallV1Flavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCfwFirewallV1FlavorToHclTerraform(struct?: DataOpentelekomcloudCfwFirewallV1Flavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCfwFirewallV1FlavorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCfwFirewallV1Flavor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCfwFirewallV1Flavor | undefined) {
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

  // default_bandwidth - computed: true, optional: false, required: false
  public get defaultBandwidth() {
    return this.getNumberAttribute('default_bandwidth');
  }

  // default_eip_count - computed: true, optional: false, required: false
  public get defaultEipCount() {
    return this.getNumberAttribute('default_eip_count');
  }

  // default_log_storage - computed: true, optional: false, required: false
  public get defaultLogStorage() {
    return this.getNumberAttribute('default_log_storage');
  }

  // default_vpc_count - computed: true, optional: false, required: false
  public get defaultVpcCount() {
    return this.getNumberAttribute('default_vpc_count');
  }

  // eip_count - computed: true, optional: false, required: false
  public get eipCount() {
    return this.getNumberAttribute('eip_count');
  }

  // log_storage - computed: true, optional: false, required: false
  public get logStorage() {
    return this.getNumberAttribute('log_storage');
  }

  // version_code - computed: true, optional: false, required: false
  public get versionCode() {
    return this.getNumberAttribute('version_code');
  }

  // vpc_count - computed: true, optional: false, required: false
  public get vpcCount() {
    return this.getNumberAttribute('vpc_count');
  }
}

export class DataOpentelekomcloudCfwFirewallV1FlavorList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCfwFirewallV1FlavorOutputReference {
    return new DataOpentelekomcloudCfwFirewallV1FlavorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCfwFirewallV1ProtectObjects {
}

export function dataOpentelekomcloudCfwFirewallV1ProtectObjectsToTerraform(struct?: DataOpentelekomcloudCfwFirewallV1ProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCfwFirewallV1ProtectObjectsToHclTerraform(struct?: DataOpentelekomcloudCfwFirewallV1ProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCfwFirewallV1ProtectObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCfwFirewallV1ProtectObjects | undefined) {
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

export class DataOpentelekomcloudCfwFirewallV1ProtectObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference {
    return new DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudCfwFirewallV1Resources {
}

export function dataOpentelekomcloudCfwFirewallV1ResourcesToTerraform(struct?: DataOpentelekomcloudCfwFirewallV1Resources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudCfwFirewallV1ResourcesToHclTerraform(struct?: DataOpentelekomcloudCfwFirewallV1Resources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudCfwFirewallV1Resources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCfwFirewallV1Resources | undefined) {
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

export class DataOpentelekomcloudCfwFirewallV1ResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference {
    return new DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1}
*/
export class DataOpentelekomcloudCfwFirewallV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cfw_firewall_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudCfwFirewallV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudCfwFirewallV1 to import
  * @param importFromId The id of the existing DataOpentelekomcloudCfwFirewallV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudCfwFirewallV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cfw_firewall_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCfwFirewallV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCfwFirewallV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cfw_firewall_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getNumberAttribute('charge_mode');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getNumberAttribute('engine_type');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // feature_toggle - computed: true, optional: false, required: false
  private _featureToggle = new cdktf.BooleanMap(this, "feature_toggle");
  public get featureToggle() {
    return this._featureToggle;
  }

  // flavor - computed: true, optional: false, required: false
  private _flavor = new DataOpentelekomcloudCfwFirewallV1FlavorList(this, "flavor", false);
  public get flavor() {
    return this._flavor;
  }

  // ha_type - computed: true, optional: false, required: false
  public get haType() {
    return this.getNumberAttribute('ha_type');
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

  // is_available_obs - computed: true, optional: false, required: false
  public get isAvailableObs() {
    return this.getBooleanAttribute('is_available_obs');
  }

  // is_old_firewall_instance - computed: true, optional: false, required: false
  public get isOldFirewallInstance() {
    return this.getBooleanAttribute('is_old_firewall_instance');
  }

  // is_support_threat_tags - computed: true, optional: false, required: false
  public get isSupportThreatTags() {
    return this.getBooleanAttribute('is_support_threat_tags');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protect_objects - computed: true, optional: false, required: false
  private _protectObjects = new DataOpentelekomcloudCfwFirewallV1ProtectObjectsList(this, "protect_objects", false);
  public get protectObjects() {
    return this._protectObjects;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataOpentelekomcloudCfwFirewallV1ResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // support_ipv6 - computed: true, optional: false, required: false
  public get supportIpv6() {
    return this.getBooleanAttribute('support_ipv6');
  }

  // support_url_filtering - computed: true, optional: false, required: false
  public get supportUrlFiltering() {
    return this.getBooleanAttribute('support_url_filtering');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_type: cdktf.stringToTerraform(this._serviceType),
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
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
