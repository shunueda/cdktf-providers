// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldpmedInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable LLDP-MED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#disable LldpmedInterface#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enable LLDP-MED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#enable LldpmedInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#name LldpmedInterface#name}
  */
  readonly name: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#location LldpmedInterface#location}
  */
  readonly location?: LldpmedInterfaceLocation;
}
export interface LldpmedInterfaceLocationCivicBasedCaType {
  /**
  * Address element type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#ca_type LldpmedInterface#ca_type}
  */
  readonly caType: number;
  /**
  * Address element value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#ca_value LldpmedInterface#ca_value}
  */
  readonly caValue?: string;
}

export function lldpmedInterfaceLocationCivicBasedCaTypeToTerraform(struct?: LldpmedInterfaceLocationCivicBasedCaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_type: cdktf.numberToTerraform(struct!.caType),
    ca_value: cdktf.stringToTerraform(struct!.caValue),
  }
}


export function lldpmedInterfaceLocationCivicBasedCaTypeToHclTerraform(struct?: LldpmedInterfaceLocationCivicBasedCaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_type: {
      value: cdktf.numberToHclTerraform(struct!.caType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ca_value: {
      value: cdktf.stringToHclTerraform(struct!.caValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpmedInterfaceLocationCivicBasedCaTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldpmedInterfaceLocationCivicBasedCaType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caType !== undefined) {
      hasAnyValues = true;
      internalValueResult.caType = this._caType;
    }
    if (this._caValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caValue = this._caValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpmedInterfaceLocationCivicBasedCaType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caType = undefined;
      this._caValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caType = value.caType;
      this._caValue = value.caValue;
    }
  }

  // ca_type - computed: false, optional: false, required: true
  private _caType?: number; 
  public get caType() {
    return this.getNumberAttribute('ca_type');
  }
  public set caType(value: number) {
    this._caType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caTypeInput() {
    return this._caType;
  }

  // ca_value - computed: false, optional: true, required: false
  private _caValue?: string; 
  public get caValue() {
    return this.getStringAttribute('ca_value');
  }
  public set caValue(value: string) {
    this._caValue = value;
  }
  public resetCaValue() {
    this._caValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caValueInput() {
    return this._caValue;
  }
}

export class LldpmedInterfaceLocationCivicBasedCaTypeList extends cdktf.ComplexList {
  public internalValue? : LldpmedInterfaceLocationCivicBasedCaType[] | cdktf.IResolvable

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
  public get(index: number): LldpmedInterfaceLocationCivicBasedCaTypeOutputReference {
    return new LldpmedInterfaceLocationCivicBasedCaTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldpmedInterfaceLocation {
  /**
  * Two-letter country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#civic_based_country_code LldpmedInterface#civic_based_country_code}
  */
  readonly civicBasedCountryCode?: string;
  /**
  * Type of address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#civic_based_what LldpmedInterface#civic_based_what}
  */
  readonly civicBasedWhat?: number;
  /**
  * Latitude value to address based on longitude and latitude coordinates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#co_ordinate_latitude LldpmedInterface#co_ordinate_latitude}
  */
  readonly coOrdinateLatitude?: number;
  /**
  * Longitude value to address based on longitude and latitude coordinates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#co_ordinate_longitude LldpmedInterface#co_ordinate_longitude}
  */
  readonly coOrdinateLongitude?: number;
  /**
  * Emergency line identification (ELIN) string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#elin LldpmedInterface#elin}
  */
  readonly elin?: string;
  /**
  * civic_based_ca_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#civic_based_ca_type LldpmedInterface#civic_based_ca_type}
  */
  readonly civicBasedCaType?: LldpmedInterfaceLocationCivicBasedCaType[] | cdktf.IResolvable;
}

export function lldpmedInterfaceLocationToTerraform(struct?: LldpmedInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    civic_based_country_code: cdktf.stringToTerraform(struct!.civicBasedCountryCode),
    civic_based_what: cdktf.numberToTerraform(struct!.civicBasedWhat),
    co_ordinate_latitude: cdktf.numberToTerraform(struct!.coOrdinateLatitude),
    co_ordinate_longitude: cdktf.numberToTerraform(struct!.coOrdinateLongitude),
    elin: cdktf.stringToTerraform(struct!.elin),
    civic_based_ca_type: cdktf.listMapper(lldpmedInterfaceLocationCivicBasedCaTypeToTerraform, true)(struct!.civicBasedCaType),
  }
}


export function lldpmedInterfaceLocationToHclTerraform(struct?: LldpmedInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    civic_based_country_code: {
      value: cdktf.stringToHclTerraform(struct!.civicBasedCountryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    civic_based_what: {
      value: cdktf.numberToHclTerraform(struct!.civicBasedWhat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    co_ordinate_latitude: {
      value: cdktf.numberToHclTerraform(struct!.coOrdinateLatitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    co_ordinate_longitude: {
      value: cdktf.numberToHclTerraform(struct!.coOrdinateLongitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elin: {
      value: cdktf.stringToHclTerraform(struct!.elin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    civic_based_ca_type: {
      value: cdktf.listMapperHcl(lldpmedInterfaceLocationCivicBasedCaTypeToHclTerraform, true)(struct!.civicBasedCaType),
      isBlock: true,
      type: "list",
      storageClassType: "LldpmedInterfaceLocationCivicBasedCaTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpmedInterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LldpmedInterfaceLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._civicBasedCountryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.civicBasedCountryCode = this._civicBasedCountryCode;
    }
    if (this._civicBasedWhat !== undefined) {
      hasAnyValues = true;
      internalValueResult.civicBasedWhat = this._civicBasedWhat;
    }
    if (this._coOrdinateLatitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.coOrdinateLatitude = this._coOrdinateLatitude;
    }
    if (this._coOrdinateLongitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.coOrdinateLongitude = this._coOrdinateLongitude;
    }
    if (this._elin !== undefined) {
      hasAnyValues = true;
      internalValueResult.elin = this._elin;
    }
    if (this._civicBasedCaType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.civicBasedCaType = this._civicBasedCaType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpmedInterfaceLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._civicBasedCountryCode = undefined;
      this._civicBasedWhat = undefined;
      this._coOrdinateLatitude = undefined;
      this._coOrdinateLongitude = undefined;
      this._elin = undefined;
      this._civicBasedCaType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._civicBasedCountryCode = value.civicBasedCountryCode;
      this._civicBasedWhat = value.civicBasedWhat;
      this._coOrdinateLatitude = value.coOrdinateLatitude;
      this._coOrdinateLongitude = value.coOrdinateLongitude;
      this._elin = value.elin;
      this._civicBasedCaType.internalValue = value.civicBasedCaType;
    }
  }

  // civic_based_country_code - computed: false, optional: true, required: false
  private _civicBasedCountryCode?: string; 
  public get civicBasedCountryCode() {
    return this.getStringAttribute('civic_based_country_code');
  }
  public set civicBasedCountryCode(value: string) {
    this._civicBasedCountryCode = value;
  }
  public resetCivicBasedCountryCode() {
    this._civicBasedCountryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get civicBasedCountryCodeInput() {
    return this._civicBasedCountryCode;
  }

  // civic_based_what - computed: false, optional: true, required: false
  private _civicBasedWhat?: number; 
  public get civicBasedWhat() {
    return this.getNumberAttribute('civic_based_what');
  }
  public set civicBasedWhat(value: number) {
    this._civicBasedWhat = value;
  }
  public resetCivicBasedWhat() {
    this._civicBasedWhat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get civicBasedWhatInput() {
    return this._civicBasedWhat;
  }

  // co_ordinate_latitude - computed: false, optional: true, required: false
  private _coOrdinateLatitude?: number; 
  public get coOrdinateLatitude() {
    return this.getNumberAttribute('co_ordinate_latitude');
  }
  public set coOrdinateLatitude(value: number) {
    this._coOrdinateLatitude = value;
  }
  public resetCoOrdinateLatitude() {
    this._coOrdinateLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coOrdinateLatitudeInput() {
    return this._coOrdinateLatitude;
  }

  // co_ordinate_longitude - computed: false, optional: true, required: false
  private _coOrdinateLongitude?: number; 
  public get coOrdinateLongitude() {
    return this.getNumberAttribute('co_ordinate_longitude');
  }
  public set coOrdinateLongitude(value: number) {
    this._coOrdinateLongitude = value;
  }
  public resetCoOrdinateLongitude() {
    this._coOrdinateLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coOrdinateLongitudeInput() {
    return this._coOrdinateLongitude;
  }

  // elin - computed: false, optional: true, required: false
  private _elin?: string; 
  public get elin() {
    return this.getStringAttribute('elin');
  }
  public set elin(value: string) {
    this._elin = value;
  }
  public resetElin() {
    this._elin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elinInput() {
    return this._elin;
  }

  // civic_based_ca_type - computed: false, optional: true, required: false
  private _civicBasedCaType = new LldpmedInterfaceLocationCivicBasedCaTypeList(this, "civic_based_ca_type", false);
  public get civicBasedCaType() {
    return this._civicBasedCaType;
  }
  public putCivicBasedCaType(value: LldpmedInterfaceLocationCivicBasedCaType[] | cdktf.IResolvable) {
    this._civicBasedCaType.internalValue = value;
  }
  public resetCivicBasedCaType() {
    this._civicBasedCaType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get civicBasedCaTypeInput() {
    return this._civicBasedCaType.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface junos_lldpmed_interface}
*/
export class LldpmedInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_lldpmed_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LldpmedInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LldpmedInterface to import
  * @param importFromId The id of the existing LldpmedInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LldpmedInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_lldpmed_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldpmed_interface junos_lldpmed_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldpmedInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: LldpmedInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_lldpmed_interface',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._enable = config.enable;
    this._name = config.name;
    this._location.internalValue = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // location - computed: false, optional: true, required: false
  private _location = new LldpmedInterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: LldpmedInterfaceLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.booleanToTerraform(this._disable),
      enable: cdktf.booleanToTerraform(this._enable),
      name: cdktf.stringToTerraform(this._name),
      location: lldpmedInterfaceLocationToTerraform(this._location.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: lldpmedInterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LldpmedInterfaceLocation",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
