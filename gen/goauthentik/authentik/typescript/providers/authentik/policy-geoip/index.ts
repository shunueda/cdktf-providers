// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGeoipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#asns PolicyGeoip#asns}
  */
  readonly asns?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#check_history_distance PolicyGeoip#check_history_distance}
  */
  readonly checkHistoryDistance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#check_impossible_travel PolicyGeoip#check_impossible_travel}
  */
  readonly checkImpossibleTravel?: boolean | cdktf.IResolvable;
  /**
  * Allowed values:
  *   - `AF`
  *   - `AX`
  *   - `AL`
  *   - `DZ`
  *   - `AS`
  *   - `AD`
  *   - `AO`
  *   - `AI`
  *   - `AQ`
  *   - `AG`
  *   - `AR`
  *   - `AM`
  *   - `AW`
  *   - `AU`
  *   - `AT`
  *   - `AZ`
  *   - `BS`
  *   - `BH`
  *   - `BD`
  *   - `BB`
  *   - `BY`
  *   - `BE`
  *   - `BZ`
  *   - `BJ`
  *   - `BM`
  *   - `BT`
  *   - `BO`
  *   - `BQ`
  *   - `BA`
  *   - `BW`
  *   - `BV`
  *   - `BR`
  *   - `IO`
  *   - `BN`
  *   - `BG`
  *   - `BF`
  *   - `BI`
  *   - `CV`
  *   - `KH`
  *   - `CM`
  *   - `CA`
  *   - `KY`
  *   - `CF`
  *   - `TD`
  *   - `CL`
  *   - `CN`
  *   - `CX`
  *   - `CC`
  *   - `CO`
  *   - `KM`
  *   - `CG`
  *   - `CD`
  *   - `CK`
  *   - `CR`
  *   - `CI`
  *   - `HR`
  *   - `CU`
  *   - `CW`
  *   - `CY`
  *   - `CZ`
  *   - `DK`
  *   - `DJ`
  *   - `DM`
  *   - `DO`
  *   - `EC`
  *   - `EG`
  *   - `SV`
  *   - `GQ`
  *   - `ER`
  *   - `EE`
  *   - `SZ`
  *   - `ET`
  *   - `FK`
  *   - `FO`
  *   - `FJ`
  *   - `FI`
  *   - `FR`
  *   - `GF`
  *   - `PF`
  *   - `TF`
  *   - `GA`
  *   - `GM`
  *   - `GE`
  *   - `DE`
  *   - `GH`
  *   - `GI`
  *   - `GR`
  *   - `GL`
  *   - `GD`
  *   - `GP`
  *   - `GU`
  *   - `GT`
  *   - `GG`
  *   - `GN`
  *   - `GW`
  *   - `GY`
  *   - `HT`
  *   - `HM`
  *   - `VA`
  *   - `HN`
  *   - `HK`
  *   - `HU`
  *   - `IS`
  *   - `IN`
  *   - `ID`
  *   - `IR`
  *   - `IQ`
  *   - `IE`
  *   - `IM`
  *   - `IL`
  *   - `IT`
  *   - `JM`
  *   - `JP`
  *   - `JE`
  *   - `JO`
  *   - `KZ`
  *   - `KE`
  *   - `KI`
  *   - `KW`
  *   - `KG`
  *   - `LA`
  *   - `LV`
  *   - `LB`
  *   - `LS`
  *   - `LR`
  *   - `LY`
  *   - `LI`
  *   - `LT`
  *   - `LU`
  *   - `MO`
  *   - `MG`
  *   - `MW`
  *   - `MY`
  *   - `MV`
  *   - `ML`
  *   - `MT`
  *   - `MH`
  *   - `MQ`
  *   - `MR`
  *   - `MU`
  *   - `YT`
  *   - `MX`
  *   - `FM`
  *   - `MD`
  *   - `MC`
  *   - `MN`
  *   - `ME`
  *   - `MS`
  *   - `MA`
  *   - `MZ`
  *   - `MM`
  *   - `NA`
  *   - `NR`
  *   - `NP`
  *   - `NL`
  *   - `NC`
  *   - `NZ`
  *   - `NI`
  *   - `NE`
  *   - `NG`
  *   - `NU`
  *   - `NF`
  *   - `KP`
  *   - `MK`
  *   - `MP`
  *   - `NO`
  *   - `OM`
  *   - `PK`
  *   - `PW`
  *   - `PS`
  *   - `PA`
  *   - `PG`
  *   - `PY`
  *   - `PE`
  *   - `PH`
  *   - `PN`
  *   - `PL`
  *   - `PT`
  *   - `PR`
  *   - `QA`
  *   - `RE`
  *   - `RO`
  *   - `RU`
  *   - `RW`
  *   - `BL`
  *   - `SH`
  *   - `KN`
  *   - `LC`
  *   - `MF`
  *   - `PM`
  *   - `VC`
  *   - `WS`
  *   - `SM`
  *   - `ST`
  *   - `SA`
  *   - `SN`
  *   - `RS`
  *   - `SC`
  *   - `SL`
  *   - `SG`
  *   - `SX`
  *   - `SK`
  *   - `SI`
  *   - `SB`
  *   - `SO`
  *   - `ZA`
  *   - `GS`
  *   - `KR`
  *   - `SS`
  *   - `ES`
  *   - `LK`
  *   - `SD`
  *   - `SR`
  *   - `SJ`
  *   - `SE`
  *   - `CH`
  *   - `SY`
  *   - `TW`
  *   - `TJ`
  *   - `TZ`
  *   - `TH`
  *   - `TL`
  *   - `TG`
  *   - `TK`
  *   - `TO`
  *   - `TT`
  *   - `TN`
  *   - `TR`
  *   - `TM`
  *   - `TC`
  *   - `TV`
  *   - `UG`
  *   - `UA`
  *   - `AE`
  *   - `GB`
  *   - `UM`
  *   - `US`
  *   - `UY`
  *   - `UZ`
  *   - `VU`
  *   - `VE`
  *   - `VN`
  *   - `VG`
  *   - `VI`
  *   - `WF`
  *   - `EH`
  *   - `YE`
  *   - `ZM`
  *   - `ZW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#countries PolicyGeoip#countries}
  */
  readonly countries?: string[];
  /**
  * Defaults to `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#distance_tolerance_km PolicyGeoip#distance_tolerance_km}
  */
  readonly distanceToleranceKm?: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#execution_logging PolicyGeoip#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#history_login_count PolicyGeoip#history_login_count}
  */
  readonly historyLoginCount?: number;
  /**
  * Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#history_max_distance_km PolicyGeoip#history_max_distance_km}
  */
  readonly historyMaxDistanceKm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#id PolicyGeoip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#impossible_tolerance_km PolicyGeoip#impossible_tolerance_km}
  */
  readonly impossibleToleranceKm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#name PolicyGeoip#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip authentik_policy_geoip}
*/
export class PolicyGeoip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_geoip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGeoip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGeoip to import
  * @param importFromId The id of the existing PolicyGeoip that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGeoip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_geoip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_geoip authentik_policy_geoip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGeoipConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGeoipConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_geoip',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asns = config.asns;
    this._checkHistoryDistance = config.checkHistoryDistance;
    this._checkImpossibleTravel = config.checkImpossibleTravel;
    this._countries = config.countries;
    this._distanceToleranceKm = config.distanceToleranceKm;
    this._executionLogging = config.executionLogging;
    this._historyLoginCount = config.historyLoginCount;
    this._historyMaxDistanceKm = config.historyMaxDistanceKm;
    this._id = config.id;
    this._impossibleToleranceKm = config.impossibleToleranceKm;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: false, optional: true, required: false
  private _asns?: number[]; 
  public get asns() {
    return this.getNumberListAttribute('asns');
  }
  public set asns(value: number[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // check_history_distance - computed: false, optional: true, required: false
  private _checkHistoryDistance?: boolean | cdktf.IResolvable; 
  public get checkHistoryDistance() {
    return this.getBooleanAttribute('check_history_distance');
  }
  public set checkHistoryDistance(value: boolean | cdktf.IResolvable) {
    this._checkHistoryDistance = value;
  }
  public resetCheckHistoryDistance() {
    this._checkHistoryDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkHistoryDistanceInput() {
    return this._checkHistoryDistance;
  }

  // check_impossible_travel - computed: false, optional: true, required: false
  private _checkImpossibleTravel?: boolean | cdktf.IResolvable; 
  public get checkImpossibleTravel() {
    return this.getBooleanAttribute('check_impossible_travel');
  }
  public set checkImpossibleTravel(value: boolean | cdktf.IResolvable) {
    this._checkImpossibleTravel = value;
  }
  public resetCheckImpossibleTravel() {
    this._checkImpossibleTravel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkImpossibleTravelInput() {
    return this._checkImpossibleTravel;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // distance_tolerance_km - computed: false, optional: true, required: false
  private _distanceToleranceKm?: number; 
  public get distanceToleranceKm() {
    return this.getNumberAttribute('distance_tolerance_km');
  }
  public set distanceToleranceKm(value: number) {
    this._distanceToleranceKm = value;
  }
  public resetDistanceToleranceKm() {
    this._distanceToleranceKm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceToleranceKmInput() {
    return this._distanceToleranceKm;
  }

  // execution_logging - computed: false, optional: true, required: false
  private _executionLogging?: boolean | cdktf.IResolvable; 
  public get executionLogging() {
    return this.getBooleanAttribute('execution_logging');
  }
  public set executionLogging(value: boolean | cdktf.IResolvable) {
    this._executionLogging = value;
  }
  public resetExecutionLogging() {
    this._executionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLoggingInput() {
    return this._executionLogging;
  }

  // history_login_count - computed: false, optional: true, required: false
  private _historyLoginCount?: number; 
  public get historyLoginCount() {
    return this.getNumberAttribute('history_login_count');
  }
  public set historyLoginCount(value: number) {
    this._historyLoginCount = value;
  }
  public resetHistoryLoginCount() {
    this._historyLoginCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyLoginCountInput() {
    return this._historyLoginCount;
  }

  // history_max_distance_km - computed: false, optional: true, required: false
  private _historyMaxDistanceKm?: number; 
  public get historyMaxDistanceKm() {
    return this.getNumberAttribute('history_max_distance_km');
  }
  public set historyMaxDistanceKm(value: number) {
    this._historyMaxDistanceKm = value;
  }
  public resetHistoryMaxDistanceKm() {
    this._historyMaxDistanceKm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyMaxDistanceKmInput() {
    return this._historyMaxDistanceKm;
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

  // impossible_tolerance_km - computed: false, optional: true, required: false
  private _impossibleToleranceKm?: number; 
  public get impossibleToleranceKm() {
    return this.getNumberAttribute('impossible_tolerance_km');
  }
  public set impossibleToleranceKm(value: number) {
    this._impossibleToleranceKm = value;
  }
  public resetImpossibleToleranceKm() {
    this._impossibleToleranceKm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impossibleToleranceKmInput() {
    return this._impossibleToleranceKm;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asns: cdktf.listMapper(cdktf.numberToTerraform, false)(this._asns),
      check_history_distance: cdktf.booleanToTerraform(this._checkHistoryDistance),
      check_impossible_travel: cdktf.booleanToTerraform(this._checkImpossibleTravel),
      countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countries),
      distance_tolerance_km: cdktf.numberToTerraform(this._distanceToleranceKm),
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      history_login_count: cdktf.numberToTerraform(this._historyLoginCount),
      history_max_distance_km: cdktf.numberToTerraform(this._historyMaxDistanceKm),
      id: cdktf.stringToTerraform(this._id),
      impossible_tolerance_km: cdktf.numberToTerraform(this._impossibleToleranceKm),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asns: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._asns),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      check_history_distance: {
        value: cdktf.booleanToHclTerraform(this._checkHistoryDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_impossible_travel: {
        value: cdktf.booleanToHclTerraform(this._checkImpossibleTravel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      distance_tolerance_km: {
        value: cdktf.numberToHclTerraform(this._distanceToleranceKm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      execution_logging: {
        value: cdktf.booleanToHclTerraform(this._executionLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      history_login_count: {
        value: cdktf.numberToHclTerraform(this._historyLoginCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      history_max_distance_km: {
        value: cdktf.numberToHclTerraform(this._historyMaxDistanceKm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impossible_tolerance_km: {
        value: cdktf.numberToHclTerraform(this._impossibleToleranceKm),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
