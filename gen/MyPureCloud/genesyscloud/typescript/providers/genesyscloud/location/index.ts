// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#id Location#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#name Location#name}
  */
  readonly name: string;
  /**
  * Notes for this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#notes Location#notes}
  */
  readonly notes?: string;
  /**
  * A list of ancestor location IDs. This can be used to create sublocations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#path Location#path}
  */
  readonly path?: string[];
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#address Location#address}
  */
  readonly address?: LocationAddress;
  /**
  * emergency_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#emergency_number Location#emergency_number}
  */
  readonly emergencyNumber?: LocationEmergencyNumber;
}
export interface LocationAddress {
  /**
  * Location city.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#city Location#city}
  */
  readonly city: string;
  /**
  * Country abbreviation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#country Location#country}
  */
  readonly country: string;
  /**
  * Location state. Required for countries with states.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#state Location#state}
  */
  readonly state?: string;
  /**
  * Street address 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#street1 Location#street1}
  */
  readonly street1: string;
  /**
  * Street address 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#street2 Location#street2}
  */
  readonly street2?: string;
  /**
  * Location zip code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#zip_code Location#zip_code}
  */
  readonly zipCode: string;
}

export function locationAddressToTerraform(struct?: LocationAddressOutputReference | LocationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    state: cdktf.stringToTerraform(struct!.state),
    street1: cdktf.stringToTerraform(struct!.street1),
    street2: cdktf.stringToTerraform(struct!.street2),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}


export function locationAddressToHclTerraform(struct?: LocationAddressOutputReference | LocationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street1: {
      value: cdktf.stringToHclTerraform(struct!.street1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street2: {
      value: cdktf.stringToHclTerraform(struct!.street2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocationAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._street1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.street1 = this._street1;
    }
    if (this._street2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.street2 = this._street2;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._city = undefined;
      this._country = undefined;
      this._state = undefined;
      this._street1 = undefined;
      this._street2 = undefined;
      this._zipCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._city = value.city;
      this._country = value.country;
      this._state = value.state;
      this._street1 = value.street1;
      this._street2 = value.street2;
      this._zipCode = value.zipCode;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // street1 - computed: false, optional: false, required: true
  private _street1?: string; 
  public get street1() {
    return this.getStringAttribute('street1');
  }
  public set street1(value: string) {
    this._street1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get street1Input() {
    return this._street1;
  }

  // street2 - computed: false, optional: true, required: false
  private _street2?: string; 
  public get street2() {
    return this.getStringAttribute('street2');
  }
  public set street2(value: string) {
    this._street2 = value;
  }
  public resetStreet2() {
    this._street2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get street2Input() {
    return this._street2;
  }

  // zip_code - computed: false, optional: false, required: true
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}
export interface LocationEmergencyNumber {
  /**
  * Emergency phone number.  Must be in an E.164 number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#number Location#number}
  */
  readonly number: string;
  /**
  * Type of emergency number (default | elin). Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#type Location#type}
  */
  readonly type?: string;
}

export function locationEmergencyNumberToTerraform(struct?: LocationEmergencyNumberOutputReference | LocationEmergencyNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function locationEmergencyNumberToHclTerraform(struct?: LocationEmergencyNumberOutputReference | LocationEmergencyNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationEmergencyNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocationEmergencyNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationEmergencyNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._type = value.type;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location genesyscloud_location}
*/
export class Location extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Location resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Location to import
  * @param importFromId The id of the existing Location that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Location to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/location genesyscloud_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationConfig
  */
  public constructor(scope: Construct, id: string, config: LocationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_location',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
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
    this._notes = config.notes;
    this._path = config.path;
    this._address.internalValue = config.address;
    this._emergencyNumber.internalValue = config.emergencyNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // address - computed: false, optional: true, required: false
  private _address = new LocationAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: LocationAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // emergency_number - computed: false, optional: true, required: false
  private _emergencyNumber = new LocationEmergencyNumberOutputReference(this, "emergency_number");
  public get emergencyNumber() {
    return this._emergencyNumber;
  }
  public putEmergencyNumber(value: LocationEmergencyNumber) {
    this._emergencyNumber.internalValue = value;
  }
  public resetEmergencyNumber() {
    this._emergencyNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyNumberInput() {
    return this._emergencyNumber.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._path),
      address: locationAddressToTerraform(this._address.internalValue),
      emergency_number: locationEmergencyNumberToTerraform(this._emergencyNumber.internalValue),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._path),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      address: {
        value: locationAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LocationAddressList",
      },
      emergency_number: {
        value: locationEmergencyNumberToHclTerraform(this._emergencyNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LocationEmergencyNumberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
