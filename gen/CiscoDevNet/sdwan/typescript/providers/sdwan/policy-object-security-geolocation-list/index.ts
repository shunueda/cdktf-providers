// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectSecurityGeolocationListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#description PolicyObjectSecurityGeolocationList#description}
  */
  readonly description?: string;
  /**
  * Geolocation  List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#entries PolicyObjectSecurityGeolocationList#entries}
  */
  readonly entries: PolicyObjectSecurityGeolocationListEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#feature_profile_id PolicyObjectSecurityGeolocationList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#name PolicyObjectSecurityGeolocationList#name}
  */
  readonly name: string;
}
export interface PolicyObjectSecurityGeolocationListEntries {
  /**
  * continent name
  *   - Choices: `AF`, `AN`, `AS`, `EU`, `NA`, `OC`, `SA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#continent PolicyObjectSecurityGeolocationList#continent}
  */
  readonly continent?: string;
  /**
  * country names
  *   - Choices: `AFG`, `ALB`, `ATA`, `DZA`, `ASM`, `AND`, `AGO`, `ATG`, `AZE`, `ARG`, `AUS`, `AUT`, `BHS`, `BHR`, `BGD`, `ARM`, `BRB`, `BEL`, `BMU`, `BTN`, `BOL`, `BIH`, `BWA`, `BVT`, `BRA`, `BLZ`, `IOT`, `SLB`, `VGB`, `BRN`, `BGR`, `MMR`, `BDI`, `BLR`, `KHM`, `CMR`, `CAN`, `CPV`, `CYM`, `CAF`, `LKA`, `TCD`, `CHL`, `CHN`, `TWN`, `CXR`, `CCK`, `COL`, `COM`, `MYT`, `COG`, `COD`, `COK`, `CRI`, `HRV`, `CUB`, `CYP`, `CZE`, `BEN`, `DNK`, `DMA`, `DOM`, `ECU`, `SLV`, `GNQ`, `ETH`, `ERI`, `EST`, `FRO`, `FLK`, `SGS`, `FJI`, `FIN`, `ALA`, `FRA`, `GUF`, `PYF`, `ATF`, `DJI`, `GAB`, `GEO`, `GMB`, `PSE`, `DEU`, `GHA`, `GIB`, `KIR`, `GRC`, `GRL`, `GRD`, `GLP`, `GUM`, `GTM`, `GIN`, `GUY`, `HTI`, `HMD`, `VAT`, `HND`, `HKG`, `HUN`, `ISL`, `IND`, `IDN`, `IRN`, `IRQ`, `IRL`, `ISR`, `ITA`, `CIV`, `JAM`, `JPN`, `KAZ`, `JOR`, `KEN`, `PRK`, `KOR`, `KWT`, `KGZ`, `LAO`, `LBN`, `LSO`, `LVA`, `LBR`, `LBY`, `LIE`, `LTU`, `LUX`, `MAC`, `MDG`, `MWI`, `MYS`, `MDV`, `MLI`, `MLT`, `MTQ`, `MRT`, `MUS`, `MEX`, `MCO`, `MNG`, `MDA`, `MNE`, `MSR`, `MAR`, `MOZ`, `OMN`, `NAM`, `NRU`, `NPL`, `NLD`, `ANT`, `CUW`, `ABW`, `SXM`, `BES`, `NCL`, `VUT`, `NZL`, `NIC`, `NER`, `NGA`, `NIU`, `NFK`, `NOR`, `MNP`, `UMI`, `FSM`, `MHL`, `PLW`, `PAK`, `PAN`, `PNG`, `PRY`, `PER`, `PHL`, `PCN`, `POL`, `PRT`, `GNB`, `TLS`, `PRI`, `QAT`, `REU`, `ROU`, `RUS`, `RWA`, `BLM`, `SHN`, `KNA`, `AIA`, `LCA`, `MAF`, `SPM`, `VCT`, `SMR`, `STP`, `SAU`, `SEN`, `SRB`, `SYC`, `SLE`, `SGP`, `SVK`, `VNM`, `SVN`, `SOM`, `ZAF`, `ZWE`, `ESP`, `SSD`, `ESH`, `SDN`, `SUR`, `SJM`, `SWZ`, `SWE`, `CHE`, `SYR`, `TJK`, `THA`, `TGO`, `TKL`, `TON`, `TTO`, `ARE`, `TUN`, `TUR`, `TKM`, `TCA`, `TUV`, `UGA`, `UKR`, `MKD`, `EGY`, `GBR`, `GGY`, `JEY`, `IMN`, `TZA`, `USA`, `VIR`, `BFA`, `URY`, `UZB`, `VEN`, `WLF`, `WSM`, `YEM`, `ZMB`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#country PolicyObjectSecurityGeolocationList#country}
  */
  readonly country?: string;
}

export function policyObjectSecurityGeolocationListEntriesToTerraform(struct?: PolicyObjectSecurityGeolocationListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
  }
}


export function policyObjectSecurityGeolocationListEntriesToHclTerraform(struct?: PolicyObjectSecurityGeolocationListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continent: {
      value: cdktf.stringToHclTerraform(struct!.continent),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectSecurityGeolocationListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectSecurityGeolocationListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continent = this._continent;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectSecurityGeolocationListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continent = undefined;
      this._country = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continent = value.continent;
      this._country = value.country;
    }
  }

  // continent - computed: false, optional: true, required: false
  private _continent?: string; 
  public get continent() {
    return this.getStringAttribute('continent');
  }
  public set continent(value: string) {
    this._continent = value;
  }
  public resetContinent() {
    this._continent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentInput() {
    return this._continent;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }
}

export class PolicyObjectSecurityGeolocationListEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectSecurityGeolocationListEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectSecurityGeolocationListEntriesOutputReference {
    return new PolicyObjectSecurityGeolocationListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list sdwan_policy_object_security_geolocation_list}
*/
export class PolicyObjectSecurityGeolocationList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_security_geolocation_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectSecurityGeolocationList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectSecurityGeolocationList to import
  * @param importFromId The id of the existing PolicyObjectSecurityGeolocationList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectSecurityGeolocationList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_security_geolocation_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_geolocation_list sdwan_policy_object_security_geolocation_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectSecurityGeolocationListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectSecurityGeolocationListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_security_geolocation_list',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectSecurityGeolocationListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectSecurityGeolocationListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectSecurityGeolocationListEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(policyObjectSecurityGeolocationListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectSecurityGeolocationListEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
