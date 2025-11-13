// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceEdgeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * City for the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#city ServiceEdgeGroup#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#city_country ServiceEdgeGroup#city_country}
  */
  readonly cityCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#country_code ServiceEdgeGroup#country_code}
  */
  readonly countryCode?: string;
  /**
  * Description of the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#description ServiceEdgeGroup#description}
  */
  readonly description?: string;
  /**
  * Whether this Service Edge Group is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#enabled ServiceEdgeGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Service Edge Group is exclusive for business continuity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#exclusive_for_business_continuity ServiceEdgeGroup#exclusive_for_business_continuity}
  */
  readonly exclusiveForBusinessContinuity?: boolean | cdktf.IResolvable;
  /**
  * If enabled, allows ZPA Private Service Edge Groups within the specified distance to be prioritized over a closer ZPA Public Service Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#grace_distance_enabled ServiceEdgeGroup#grace_distance_enabled}
  */
  readonly graceDistanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the maximum distance in miles or kilometers to ZPA Private Service Edge groups that would override a ZPA Public Service Edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#grace_distance_value ServiceEdgeGroup#grace_distance_value}
  */
  readonly graceDistanceValue?: string;
  /**
  * Indicates the grace distance unit of measure in miles or kilometers. This value is only required if grace_distance_value is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#grace_distance_value_unit ServiceEdgeGroup#grace_distance_value_unit}
  */
  readonly graceDistanceValueUnit?: string;
  /**
  * Enable or disable public access for the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#is_public ServiceEdgeGroup#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Latitude for the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#latitude ServiceEdgeGroup#latitude}
  */
  readonly latitude: string;
  /**
  * Location for the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#location ServiceEdgeGroup#location}
  */
  readonly location: string;
  /**
  * Longitude for the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#longitude ServiceEdgeGroup#longitude}
  */
  readonly longitude: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#microtenant_id ServiceEdgeGroup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the Service Edge Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#name ServiceEdgeGroup#name}
  */
  readonly name: string;
  /**
  * Whether the default version profile of the App Connector Group is applied or overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#override_version_profile ServiceEdgeGroup#override_version_profile}
  */
  readonly overrideVersionProfile?: boolean | cdktf.IResolvable;
  /**
  * Service Edges in this group will attempt to update to a newer version of the software during this specified day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#upgrade_day ServiceEdgeGroup#upgrade_day}
  */
  readonly upgradeDay?: string;
  /**
  * Service Edges in this group will attempt to update to a newer version of the software during this specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#upgrade_time_in_secs ServiceEdgeGroup#upgrade_time_in_secs}
  */
  readonly upgradeTimeInSecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#use_in_dr_mode ServiceEdgeGroup#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * ID of the version profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#version_profile_id ServiceEdgeGroup#version_profile_id}
  */
  readonly versionProfileId?: string;
  /**
  * Name of the version profile. To learn more, see Version Profile Use Cases. This value is required, if the value for overrideVersionProfile is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#version_profile_name ServiceEdgeGroup#version_profile_name}
  */
  readonly versionProfileName?: string;
  /**
  * ID of the version profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#version_profile_visibility_scope ServiceEdgeGroup#version_profile_visibility_scope}
  */
  readonly versionProfileVisibilityScope?: string;
  /**
  * service_edges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#service_edges ServiceEdgeGroup#service_edges}
  */
  readonly serviceEdges?: ServiceEdgeGroupServiceEdges;
  /**
  * trusted_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#trusted_networks ServiceEdgeGroup#trusted_networks}
  */
  readonly trustedNetworks?: ServiceEdgeGroupTrustedNetworks[] | cdktf.IResolvable;
}
export interface ServiceEdgeGroupServiceEdges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#id ServiceEdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function serviceEdgeGroupServiceEdgesToTerraform(struct?: ServiceEdgeGroupServiceEdgesOutputReference | ServiceEdgeGroupServiceEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function serviceEdgeGroupServiceEdgesToHclTerraform(struct?: ServiceEdgeGroupServiceEdgesOutputReference | ServiceEdgeGroupServiceEdges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEdgeGroupServiceEdgesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceEdgeGroupServiceEdges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEdgeGroupServiceEdges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ServiceEdgeGroupTrustedNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#id ServiceEdgeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function serviceEdgeGroupTrustedNetworksToTerraform(struct?: ServiceEdgeGroupTrustedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function serviceEdgeGroupTrustedNetworksToHclTerraform(struct?: ServiceEdgeGroupTrustedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceEdgeGroupTrustedNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceEdgeGroupTrustedNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceEdgeGroupTrustedNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ServiceEdgeGroupTrustedNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceEdgeGroupTrustedNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceEdgeGroupTrustedNetworksOutputReference {
    return new ServiceEdgeGroupTrustedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group zpa_service_edge_group}
*/
export class ServiceEdgeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_service_edge_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceEdgeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceEdgeGroup to import
  * @param importFromId The id of the existing ServiceEdgeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceEdgeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_service_edge_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/service_edge_group zpa_service_edge_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceEdgeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceEdgeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_service_edge_group',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._cityCountry = config.cityCountry;
    this._countryCode = config.countryCode;
    this._description = config.description;
    this._enabled = config.enabled;
    this._exclusiveForBusinessContinuity = config.exclusiveForBusinessContinuity;
    this._graceDistanceEnabled = config.graceDistanceEnabled;
    this._graceDistanceValue = config.graceDistanceValue;
    this._graceDistanceValueUnit = config.graceDistanceValueUnit;
    this._isPublic = config.isPublic;
    this._latitude = config.latitude;
    this._location = config.location;
    this._longitude = config.longitude;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._overrideVersionProfile = config.overrideVersionProfile;
    this._upgradeDay = config.upgradeDay;
    this._upgradeTimeInSecs = config.upgradeTimeInSecs;
    this._useInDrMode = config.useInDrMode;
    this._versionProfileId = config.versionProfileId;
    this._versionProfileName = config.versionProfileName;
    this._versionProfileVisibilityScope = config.versionProfileVisibilityScope;
    this._serviceEdges.internalValue = config.serviceEdges;
    this._trustedNetworks.internalValue = config.trustedNetworks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // city_country - computed: false, optional: true, required: false
  private _cityCountry?: string; 
  public get cityCountry() {
    return this.getStringAttribute('city_country');
  }
  public set cityCountry(value: string) {
    this._cityCountry = value;
  }
  public resetCityCountry() {
    this._cityCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityCountryInput() {
    return this._cityCountry;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclusive_for_business_continuity - computed: false, optional: true, required: false
  private _exclusiveForBusinessContinuity?: boolean | cdktf.IResolvable; 
  public get exclusiveForBusinessContinuity() {
    return this.getBooleanAttribute('exclusive_for_business_continuity');
  }
  public set exclusiveForBusinessContinuity(value: boolean | cdktf.IResolvable) {
    this._exclusiveForBusinessContinuity = value;
  }
  public resetExclusiveForBusinessContinuity() {
    this._exclusiveForBusinessContinuity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveForBusinessContinuityInput() {
    return this._exclusiveForBusinessContinuity;
  }

  // grace_distance_enabled - computed: true, optional: true, required: false
  private _graceDistanceEnabled?: boolean | cdktf.IResolvable; 
  public get graceDistanceEnabled() {
    return this.getBooleanAttribute('grace_distance_enabled');
  }
  public set graceDistanceEnabled(value: boolean | cdktf.IResolvable) {
    this._graceDistanceEnabled = value;
  }
  public resetGraceDistanceEnabled() {
    this._graceDistanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDistanceEnabledInput() {
    return this._graceDistanceEnabled;
  }

  // grace_distance_value - computed: true, optional: true, required: false
  private _graceDistanceValue?: string; 
  public get graceDistanceValue() {
    return this.getStringAttribute('grace_distance_value');
  }
  public set graceDistanceValue(value: string) {
    this._graceDistanceValue = value;
  }
  public resetGraceDistanceValue() {
    this._graceDistanceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDistanceValueInput() {
    return this._graceDistanceValue;
  }

  // grace_distance_value_unit - computed: true, optional: true, required: false
  private _graceDistanceValueUnit?: string; 
  public get graceDistanceValueUnit() {
    return this.getStringAttribute('grace_distance_value_unit');
  }
  public set graceDistanceValueUnit(value: string) {
    this._graceDistanceValueUnit = value;
  }
  public resetGraceDistanceValueUnit() {
    this._graceDistanceValueUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDistanceValueUnitInput() {
    return this._graceDistanceValueUnit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // override_version_profile - computed: false, optional: true, required: false
  private _overrideVersionProfile?: boolean | cdktf.IResolvable; 
  public get overrideVersionProfile() {
    return this.getBooleanAttribute('override_version_profile');
  }
  public set overrideVersionProfile(value: boolean | cdktf.IResolvable) {
    this._overrideVersionProfile = value;
  }
  public resetOverrideVersionProfile() {
    this._overrideVersionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVersionProfileInput() {
    return this._overrideVersionProfile;
  }

  // upgrade_day - computed: false, optional: true, required: false
  private _upgradeDay?: string; 
  public get upgradeDay() {
    return this.getStringAttribute('upgrade_day');
  }
  public set upgradeDay(value: string) {
    this._upgradeDay = value;
  }
  public resetUpgradeDay() {
    this._upgradeDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDayInput() {
    return this._upgradeDay;
  }

  // upgrade_time_in_secs - computed: false, optional: true, required: false
  private _upgradeTimeInSecs?: string; 
  public get upgradeTimeInSecs() {
    return this.getStringAttribute('upgrade_time_in_secs');
  }
  public set upgradeTimeInSecs(value: string) {
    this._upgradeTimeInSecs = value;
  }
  public resetUpgradeTimeInSecs() {
    this._upgradeTimeInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInSecsInput() {
    return this._upgradeTimeInSecs;
  }

  // use_in_dr_mode - computed: true, optional: true, required: false
  private _useInDrMode?: boolean | cdktf.IResolvable; 
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }
  public set useInDrMode(value: boolean | cdktf.IResolvable) {
    this._useInDrMode = value;
  }
  public resetUseInDrMode() {
    this._useInDrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInDrModeInput() {
    return this._useInDrMode;
  }

  // version_profile_id - computed: true, optional: true, required: false
  private _versionProfileId?: string; 
  public get versionProfileId() {
    return this.getStringAttribute('version_profile_id');
  }
  public set versionProfileId(value: string) {
    this._versionProfileId = value;
  }
  public resetVersionProfileId() {
    this._versionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileIdInput() {
    return this._versionProfileId;
  }

  // version_profile_name - computed: true, optional: true, required: false
  private _versionProfileName?: string; 
  public get versionProfileName() {
    return this.getStringAttribute('version_profile_name');
  }
  public set versionProfileName(value: string) {
    this._versionProfileName = value;
  }
  public resetVersionProfileName() {
    this._versionProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileNameInput() {
    return this._versionProfileName;
  }

  // version_profile_visibility_scope - computed: true, optional: true, required: false
  private _versionProfileVisibilityScope?: string; 
  public get versionProfileVisibilityScope() {
    return this.getStringAttribute('version_profile_visibility_scope');
  }
  public set versionProfileVisibilityScope(value: string) {
    this._versionProfileVisibilityScope = value;
  }
  public resetVersionProfileVisibilityScope() {
    this._versionProfileVisibilityScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileVisibilityScopeInput() {
    return this._versionProfileVisibilityScope;
  }

  // service_edges - computed: false, optional: true, required: false
  private _serviceEdges = new ServiceEdgeGroupServiceEdgesOutputReference(this, "service_edges");
  public get serviceEdges() {
    return this._serviceEdges;
  }
  public putServiceEdges(value: ServiceEdgeGroupServiceEdges) {
    this._serviceEdges.internalValue = value;
  }
  public resetServiceEdges() {
    this._serviceEdges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEdgesInput() {
    return this._serviceEdges.internalValue;
  }

  // trusted_networks - computed: false, optional: true, required: false
  private _trustedNetworks = new ServiceEdgeGroupTrustedNetworksList(this, "trusted_networks", false);
  public get trustedNetworks() {
    return this._trustedNetworks;
  }
  public putTrustedNetworks(value: ServiceEdgeGroupTrustedNetworks[] | cdktf.IResolvable) {
    this._trustedNetworks.internalValue = value;
  }
  public resetTrustedNetworks() {
    this._trustedNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedNetworksInput() {
    return this._trustedNetworks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.stringToTerraform(this._city),
      city_country: cdktf.stringToTerraform(this._cityCountry),
      country_code: cdktf.stringToTerraform(this._countryCode),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclusive_for_business_continuity: cdktf.booleanToTerraform(this._exclusiveForBusinessContinuity),
      grace_distance_enabled: cdktf.booleanToTerraform(this._graceDistanceEnabled),
      grace_distance_value: cdktf.stringToTerraform(this._graceDistanceValue),
      grace_distance_value_unit: cdktf.stringToTerraform(this._graceDistanceValueUnit),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      latitude: cdktf.stringToTerraform(this._latitude),
      location: cdktf.stringToTerraform(this._location),
      longitude: cdktf.stringToTerraform(this._longitude),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      override_version_profile: cdktf.booleanToTerraform(this._overrideVersionProfile),
      upgrade_day: cdktf.stringToTerraform(this._upgradeDay),
      upgrade_time_in_secs: cdktf.stringToTerraform(this._upgradeTimeInSecs),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      version_profile_id: cdktf.stringToTerraform(this._versionProfileId),
      version_profile_name: cdktf.stringToTerraform(this._versionProfileName),
      version_profile_visibility_scope: cdktf.stringToTerraform(this._versionProfileVisibilityScope),
      service_edges: serviceEdgeGroupServiceEdgesToTerraform(this._serviceEdges.internalValue),
      trusted_networks: cdktf.listMapper(serviceEdgeGroupTrustedNetworksToTerraform, true)(this._trustedNetworks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city_country: {
        value: cdktf.stringToHclTerraform(this._cityCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclusive_for_business_continuity: {
        value: cdktf.booleanToHclTerraform(this._exclusiveForBusinessContinuity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace_distance_enabled: {
        value: cdktf.booleanToHclTerraform(this._graceDistanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace_distance_value: {
        value: cdktf.stringToHclTerraform(this._graceDistanceValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grace_distance_value_unit: {
        value: cdktf.stringToHclTerraform(this._graceDistanceValueUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      override_version_profile: {
        value: cdktf.booleanToHclTerraform(this._overrideVersionProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_day: {
        value: cdktf.stringToHclTerraform(this._upgradeDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_in_secs: {
        value: cdktf.stringToHclTerraform(this._upgradeTimeInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_in_dr_mode: {
        value: cdktf.booleanToHclTerraform(this._useInDrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_profile_id: {
        value: cdktf.stringToHclTerraform(this._versionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_profile_name: {
        value: cdktf.stringToHclTerraform(this._versionProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_profile_visibility_scope: {
        value: cdktf.stringToHclTerraform(this._versionProfileVisibilityScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_edges: {
        value: serviceEdgeGroupServiceEdgesToHclTerraform(this._serviceEdges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEdgeGroupServiceEdgesList",
      },
      trusted_networks: {
        value: cdktf.listMapperHcl(serviceEdgeGroupTrustedNetworksToHclTerraform, true)(this._trustedNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceEdgeGroupTrustedNetworksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
