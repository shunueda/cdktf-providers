// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclVnaAppliancePlanV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#appliance_type DataEclVnaAppliancePlanV1#appliance_type}
  */
  readonly applianceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#description DataEclVnaAppliancePlanV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#enabled DataEclVnaAppliancePlanV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#flavor DataEclVnaAppliancePlanV1#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#id DataEclVnaAppliancePlanV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#max_number_of_aap DataEclVnaAppliancePlanV1#max_number_of_aap}
  */
  readonly maxNumberOfAap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#name DataEclVnaAppliancePlanV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#number_of_interfaces DataEclVnaAppliancePlanV1#number_of_interfaces}
  */
  readonly numberOfInterfaces?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#version DataEclVnaAppliancePlanV1#version}
  */
  readonly version?: string;
  /**
  * availability_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#availability_zones DataEclVnaAppliancePlanV1#availability_zones}
  */
  readonly availabilityZones?: DataEclVnaAppliancePlanV1AvailabilityZones[] | cdktf.IResolvable;
  /**
  * licenses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#licenses DataEclVnaAppliancePlanV1#licenses}
  */
  readonly licenses?: DataEclVnaAppliancePlanV1Licenses[] | cdktf.IResolvable;
}
export interface DataEclVnaAppliancePlanV1AvailabilityZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#availability_zone DataEclVnaAppliancePlanV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#available DataEclVnaAppliancePlanV1#available}
  */
  readonly available?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#rank DataEclVnaAppliancePlanV1#rank}
  */
  readonly rank?: number;
}

export function dataEclVnaAppliancePlanV1AvailabilityZonesToTerraform(struct?: DataEclVnaAppliancePlanV1AvailabilityZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    available: cdktf.booleanToTerraform(struct!.available),
    rank: cdktf.numberToTerraform(struct!.rank),
  }
}


export function dataEclVnaAppliancePlanV1AvailabilityZonesToHclTerraform(struct?: DataEclVnaAppliancePlanV1AvailabilityZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    available: {
      value: cdktf.booleanToHclTerraform(struct!.available),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEclVnaAppliancePlanV1AvailabilityZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaAppliancePlanV1AvailabilityZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._available !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaAppliancePlanV1AvailabilityZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._available = undefined;
      this._rank = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._available = value.available;
      this._rank = value.rank;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // available - computed: true, optional: true, required: false
  private _available?: boolean | cdktf.IResolvable; 
  public get available() {
    return this.getBooleanAttribute('available');
  }
  public set available(value: boolean | cdktf.IResolvable) {
    this._available = value;
  }
  public resetAvailable() {
    this._available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // rank - computed: true, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }
}

export class DataEclVnaAppliancePlanV1AvailabilityZonesList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaAppliancePlanV1AvailabilityZones[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaAppliancePlanV1AvailabilityZonesOutputReference {
    return new DataEclVnaAppliancePlanV1AvailabilityZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaAppliancePlanV1Licenses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#license_type DataEclVnaAppliancePlanV1#license_type}
  */
  readonly licenseType?: string;
}

export function dataEclVnaAppliancePlanV1LicensesToTerraform(struct?: DataEclVnaAppliancePlanV1Licenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_type: cdktf.stringToTerraform(struct!.licenseType),
  }
}


export function dataEclVnaAppliancePlanV1LicensesToHclTerraform(struct?: DataEclVnaAppliancePlanV1Licenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEclVnaAppliancePlanV1LicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaAppliancePlanV1Licenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaAppliancePlanV1Licenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseType = value.licenseType;
    }
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }
}

export class DataEclVnaAppliancePlanV1LicensesList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaAppliancePlanV1Licenses[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaAppliancePlanV1LicensesOutputReference {
    return new DataEclVnaAppliancePlanV1LicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1 ecl_vna_appliance_plan_v1}
*/
export class DataEclVnaAppliancePlanV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_vna_appliance_plan_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclVnaAppliancePlanV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclVnaAppliancePlanV1 to import
  * @param importFromId The id of the existing DataEclVnaAppliancePlanV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclVnaAppliancePlanV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_vna_appliance_plan_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_plan_v1 ecl_vna_appliance_plan_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclVnaAppliancePlanV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclVnaAppliancePlanV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_vna_appliance_plan_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceType = config.applianceType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._flavor = config.flavor;
    this._id = config.id;
    this._maxNumberOfAap = config.maxNumberOfAap;
    this._name = config.name;
    this._numberOfInterfaces = config.numberOfInterfaces;
    this._version = config.version;
    this._availabilityZones.internalValue = config.availabilityZones;
    this._licenses.internalValue = config.licenses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_type - computed: true, optional: true, required: false
  private _applianceType?: string; 
  public get applianceType() {
    return this.getStringAttribute('appliance_type');
  }
  public set applianceType(value: string) {
    this._applianceType = value;
  }
  public resetApplianceType() {
    this._applianceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceTypeInput() {
    return this._applianceType;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // max_number_of_aap - computed: true, optional: true, required: false
  private _maxNumberOfAap?: number; 
  public get maxNumberOfAap() {
    return this.getNumberAttribute('max_number_of_aap');
  }
  public set maxNumberOfAap(value: number) {
    this._maxNumberOfAap = value;
  }
  public resetMaxNumberOfAap() {
    this._maxNumberOfAap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfAapInput() {
    return this._maxNumberOfAap;
  }

  // name - computed: true, optional: true, required: false
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

  // number_of_interfaces - computed: true, optional: true, required: false
  private _numberOfInterfaces?: number; 
  public get numberOfInterfaces() {
    return this.getNumberAttribute('number_of_interfaces');
  }
  public set numberOfInterfaces(value: number) {
    this._numberOfInterfaces = value;
  }
  public resetNumberOfInterfaces() {
    this._numberOfInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfInterfacesInput() {
    return this._numberOfInterfaces;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones = new DataEclVnaAppliancePlanV1AvailabilityZonesList(this, "availability_zones", false);
  public get availabilityZones() {
    return this._availabilityZones;
  }
  public putAvailabilityZones(value: DataEclVnaAppliancePlanV1AvailabilityZones[] | cdktf.IResolvable) {
    this._availabilityZones.internalValue = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones.internalValue;
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses = new DataEclVnaAppliancePlanV1LicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }
  public putLicenses(value: DataEclVnaAppliancePlanV1Licenses[] | cdktf.IResolvable) {
    this._licenses.internalValue = value;
  }
  public resetLicenses() {
    this._licenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_type: cdktf.stringToTerraform(this._applianceType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      max_number_of_aap: cdktf.numberToTerraform(this._maxNumberOfAap),
      name: cdktf.stringToTerraform(this._name),
      number_of_interfaces: cdktf.numberToTerraform(this._numberOfInterfaces),
      version: cdktf.stringToTerraform(this._version),
      availability_zones: cdktf.listMapper(dataEclVnaAppliancePlanV1AvailabilityZonesToTerraform, true)(this._availabilityZones.internalValue),
      licenses: cdktf.listMapper(dataEclVnaAppliancePlanV1LicensesToTerraform, true)(this._licenses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_type: {
        value: cdktf.stringToHclTerraform(this._applianceType),
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
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      max_number_of_aap: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfAap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_interfaces: {
        value: cdktf.numberToHclTerraform(this._numberOfInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(dataEclVnaAppliancePlanV1AvailabilityZonesToHclTerraform, true)(this._availabilityZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaAppliancePlanV1AvailabilityZonesList",
      },
      licenses: {
        value: cdktf.listMapperHcl(dataEclVnaAppliancePlanV1LicensesToHclTerraform, true)(this._licenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaAppliancePlanV1LicensesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
