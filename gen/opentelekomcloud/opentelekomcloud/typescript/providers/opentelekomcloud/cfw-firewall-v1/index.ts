// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwFirewallV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#name CfwFirewallV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#service_type CfwFirewallV1#service_type}
  */
  readonly serviceType?: string;
  /**
  * charge_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#charge_info CfwFirewallV1#charge_info}
  */
  readonly chargeInfo: CfwFirewallV1ChargeInfo;
  /**
  * flavor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#flavor CfwFirewallV1#flavor}
  */
  readonly flavor: CfwFirewallV1Flavor;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#timeouts CfwFirewallV1#timeouts}
  */
  readonly timeouts?: CfwFirewallV1Timeouts;
}
export interface CfwFirewallV1ProtectObjects {
}

export function cfwFirewallV1ProtectObjectsToTerraform(struct?: CfwFirewallV1ProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cfwFirewallV1ProtectObjectsToHclTerraform(struct?: CfwFirewallV1ProtectObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CfwFirewallV1ProtectObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwFirewallV1ProtectObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwFirewallV1ProtectObjects | undefined) {
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

export class CfwFirewallV1ProtectObjectsList extends cdktf.ComplexList {

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
  public get(index: number): CfwFirewallV1ProtectObjectsOutputReference {
    return new CfwFirewallV1ProtectObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwFirewallV1Resources {
}

export function cfwFirewallV1ResourcesToTerraform(struct?: CfwFirewallV1Resources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cfwFirewallV1ResourcesToHclTerraform(struct?: CfwFirewallV1Resources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CfwFirewallV1ResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwFirewallV1Resources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwFirewallV1Resources | undefined) {
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

export class CfwFirewallV1ResourcesList extends cdktf.ComplexList {

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
  public get(index: number): CfwFirewallV1ResourcesOutputReference {
    return new CfwFirewallV1ResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CfwFirewallV1ChargeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#charge_mode CfwFirewallV1#charge_mode}
  */
  readonly chargeMode: string;
}

export function cfwFirewallV1ChargeInfoToTerraform(struct?: CfwFirewallV1ChargeInfoOutputReference | CfwFirewallV1ChargeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charge_mode: cdktf.stringToTerraform(struct!.chargeMode),
  }
}


export function cfwFirewallV1ChargeInfoToHclTerraform(struct?: CfwFirewallV1ChargeInfoOutputReference | CfwFirewallV1ChargeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charge_mode: {
      value: cdktf.stringToHclTerraform(struct!.chargeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwFirewallV1ChargeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwFirewallV1ChargeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeMode = this._chargeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwFirewallV1ChargeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargeMode = value.chargeMode;
    }
  }

  // charge_mode - computed: false, optional: false, required: true
  private _chargeMode?: string; 
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }
  public set chargeMode(value: string) {
    this._chargeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeModeInput() {
    return this._chargeMode;
  }
}
export interface CfwFirewallV1Flavor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#version CfwFirewallV1#version}
  */
  readonly version: string;
}

export function cfwFirewallV1FlavorToTerraform(struct?: CfwFirewallV1FlavorOutputReference | CfwFirewallV1Flavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cfwFirewallV1FlavorToHclTerraform(struct?: CfwFirewallV1FlavorOutputReference | CfwFirewallV1Flavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwFirewallV1FlavorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwFirewallV1Flavor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwFirewallV1Flavor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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
export interface CfwFirewallV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#create CfwFirewallV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#delete CfwFirewallV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#update CfwFirewallV1#update}
  */
  readonly update?: string;
}

export function cfwFirewallV1TimeoutsToTerraform(struct?: CfwFirewallV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cfwFirewallV1TimeoutsToHclTerraform(struct?: CfwFirewallV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwFirewallV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CfwFirewallV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwFirewallV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1}
*/
export class CfwFirewallV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cfw_firewall_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwFirewallV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwFirewallV1 to import
  * @param importFromId The id of the existing CfwFirewallV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwFirewallV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cfw_firewall_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwFirewallV1Config
  */
  public constructor(scope: Construct, id: string, config: CfwFirewallV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cfw_firewall_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._serviceType = config.serviceType;
    this._chargeInfo.internalValue = config.chargeInfo;
    this._flavor.internalValue = config.flavor;
    this._timeouts.internalValue = config.timeouts;
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

  // ha_type - computed: true, optional: false, required: false
  public get haType() {
    return this.getNumberAttribute('ha_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protect_objects - computed: true, optional: false, required: false
  private _protectObjects = new CfwFirewallV1ProtectObjectsList(this, "protect_objects", false);
  public get protectObjects() {
    return this._protectObjects;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new CfwFirewallV1ResourcesList(this, "resources", false);
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

  // charge_info - computed: false, optional: false, required: true
  private _chargeInfo = new CfwFirewallV1ChargeInfoOutputReference(this, "charge_info");
  public get chargeInfo() {
    return this._chargeInfo;
  }
  public putChargeInfo(value: CfwFirewallV1ChargeInfo) {
    this._chargeInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeInfoInput() {
    return this._chargeInfo.internalValue;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor = new CfwFirewallV1FlavorOutputReference(this, "flavor");
  public get flavor() {
    return this._flavor;
  }
  public putFlavor(value: CfwFirewallV1Flavor) {
    this._flavor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CfwFirewallV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CfwFirewallV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      service_type: cdktf.stringToTerraform(this._serviceType),
      charge_info: cfwFirewallV1ChargeInfoToTerraform(this._chargeInfo.internalValue),
      flavor: cfwFirewallV1FlavorToTerraform(this._flavor.internalValue),
      timeouts: cfwFirewallV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      charge_info: {
        value: cfwFirewallV1ChargeInfoToHclTerraform(this._chargeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwFirewallV1ChargeInfoList",
      },
      flavor: {
        value: cfwFirewallV1FlavorToHclTerraform(this._flavor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwFirewallV1FlavorList",
      },
      timeouts: {
        value: cfwFirewallV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CfwFirewallV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
