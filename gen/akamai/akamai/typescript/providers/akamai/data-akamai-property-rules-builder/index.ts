// generated from terraform resource schema

import { DataAkamaiPropertyRulesBuilderRulesV20230105, 
dataAkamaiPropertyRulesBuilderRulesV20230105ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20230105ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20230105OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20230530, 
dataAkamaiPropertyRulesBuilderRulesV20230530ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20230530ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20230530OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20230920, 
dataAkamaiPropertyRulesBuilderRulesV20230920ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20230920ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20230920OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20231030, 
dataAkamaiPropertyRulesBuilderRulesV20231030ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20231030ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20231030OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20240109, 
dataAkamaiPropertyRulesBuilderRulesV20240109ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20240109ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20240109OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20240212, 
dataAkamaiPropertyRulesBuilderRulesV20240212ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20240212ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20240212OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20240531, 
dataAkamaiPropertyRulesBuilderRulesV20240531ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20240531ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20240531OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20240813, 
dataAkamaiPropertyRulesBuilderRulesV20240813ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20240813ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20240813OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20241021, 
dataAkamaiPropertyRulesBuilderRulesV20241021ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20241021ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20241021OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250113, 
dataAkamaiPropertyRulesBuilderRulesV20250113ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250113ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250113OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250218, 
dataAkamaiPropertyRulesBuilderRulesV20250218ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250218ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250218OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250324, 
dataAkamaiPropertyRulesBuilderRulesV20250324ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250324ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250324OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250429, 
dataAkamaiPropertyRulesBuilderRulesV20250429ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250429ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250429OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250530, 
dataAkamaiPropertyRulesBuilderRulesV20250530ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250530ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250530OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250707, 
dataAkamaiPropertyRulesBuilderRulesV20250707ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250707ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250707OutputReference, 
DataAkamaiPropertyRulesBuilderRulesV20250909, 
dataAkamaiPropertyRulesBuilderRulesV20250909ToTerraform, 
dataAkamaiPropertyRulesBuilderRulesV20250909ToHclTerraform, 
DataAkamaiPropertyRulesBuilderRulesV20250909OutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAkamaiPropertyRulesBuilderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#id DataAkamaiPropertyRulesBuilder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rules_v2023_01_05 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2023_01_05 DataAkamaiPropertyRulesBuilder#rules_v2023_01_05}
  */
  readonly rulesV20230105?: DataAkamaiPropertyRulesBuilderRulesV20230105;
  /**
  * rules_v2023_05_30 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2023_05_30 DataAkamaiPropertyRulesBuilder#rules_v2023_05_30}
  */
  readonly rulesV20230530?: DataAkamaiPropertyRulesBuilderRulesV20230530;
  /**
  * rules_v2023_09_20 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2023_09_20 DataAkamaiPropertyRulesBuilder#rules_v2023_09_20}
  */
  readonly rulesV20230920?: DataAkamaiPropertyRulesBuilderRulesV20230920;
  /**
  * rules_v2023_10_30 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2023_10_30 DataAkamaiPropertyRulesBuilder#rules_v2023_10_30}
  */
  readonly rulesV20231030?: DataAkamaiPropertyRulesBuilderRulesV20231030;
  /**
  * rules_v2024_01_09 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2024_01_09 DataAkamaiPropertyRulesBuilder#rules_v2024_01_09}
  */
  readonly rulesV20240109?: DataAkamaiPropertyRulesBuilderRulesV20240109;
  /**
  * rules_v2024_02_12 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2024_02_12 DataAkamaiPropertyRulesBuilder#rules_v2024_02_12}
  */
  readonly rulesV20240212?: DataAkamaiPropertyRulesBuilderRulesV20240212;
  /**
  * rules_v2024_05_31 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2024_05_31 DataAkamaiPropertyRulesBuilder#rules_v2024_05_31}
  */
  readonly rulesV20240531?: DataAkamaiPropertyRulesBuilderRulesV20240531;
  /**
  * rules_v2024_08_13 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2024_08_13 DataAkamaiPropertyRulesBuilder#rules_v2024_08_13}
  */
  readonly rulesV20240813?: DataAkamaiPropertyRulesBuilderRulesV20240813;
  /**
  * rules_v2024_10_21 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2024_10_21 DataAkamaiPropertyRulesBuilder#rules_v2024_10_21}
  */
  readonly rulesV20241021?: DataAkamaiPropertyRulesBuilderRulesV20241021;
  /**
  * rules_v2025_01_13 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_01_13 DataAkamaiPropertyRulesBuilder#rules_v2025_01_13}
  */
  readonly rulesV20250113?: DataAkamaiPropertyRulesBuilderRulesV20250113;
  /**
  * rules_v2025_02_18 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_02_18 DataAkamaiPropertyRulesBuilder#rules_v2025_02_18}
  */
  readonly rulesV20250218?: DataAkamaiPropertyRulesBuilderRulesV20250218;
  /**
  * rules_v2025_03_24 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_03_24 DataAkamaiPropertyRulesBuilder#rules_v2025_03_24}
  */
  readonly rulesV20250324?: DataAkamaiPropertyRulesBuilderRulesV20250324;
  /**
  * rules_v2025_04_29 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_04_29 DataAkamaiPropertyRulesBuilder#rules_v2025_04_29}
  */
  readonly rulesV20250429?: DataAkamaiPropertyRulesBuilderRulesV20250429;
  /**
  * rules_v2025_05_30 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_05_30 DataAkamaiPropertyRulesBuilder#rules_v2025_05_30}
  */
  readonly rulesV20250530?: DataAkamaiPropertyRulesBuilderRulesV20250530;
  /**
  * rules_v2025_07_07 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_07_07 DataAkamaiPropertyRulesBuilder#rules_v2025_07_07}
  */
  readonly rulesV20250707?: DataAkamaiPropertyRulesBuilderRulesV20250707;
  /**
  * rules_v2025_09_09 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#rules_v2025_09_09 DataAkamaiPropertyRulesBuilder#rules_v2025_09_09}
  */
  readonly rulesV20250909?: DataAkamaiPropertyRulesBuilderRulesV20250909;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder akamai_property_rules_builder}
*/
export class DataAkamaiPropertyRulesBuilder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_rules_builder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiPropertyRulesBuilder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiPropertyRulesBuilder to import
  * @param importFromId The id of the existing DataAkamaiPropertyRulesBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiPropertyRulesBuilder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_rules_builder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_builder akamai_property_rules_builder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiPropertyRulesBuilderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiPropertyRulesBuilderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_rules_builder',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._rulesV20230105.internalValue = config.rulesV20230105;
    this._rulesV20230530.internalValue = config.rulesV20230530;
    this._rulesV20230920.internalValue = config.rulesV20230920;
    this._rulesV20231030.internalValue = config.rulesV20231030;
    this._rulesV20240109.internalValue = config.rulesV20240109;
    this._rulesV20240212.internalValue = config.rulesV20240212;
    this._rulesV20240531.internalValue = config.rulesV20240531;
    this._rulesV20240813.internalValue = config.rulesV20240813;
    this._rulesV20241021.internalValue = config.rulesV20241021;
    this._rulesV20250113.internalValue = config.rulesV20250113;
    this._rulesV20250218.internalValue = config.rulesV20250218;
    this._rulesV20250324.internalValue = config.rulesV20250324;
    this._rulesV20250429.internalValue = config.rulesV20250429;
    this._rulesV20250530.internalValue = config.rulesV20250530;
    this._rulesV20250707.internalValue = config.rulesV20250707;
    this._rulesV20250909.internalValue = config.rulesV20250909;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // rule_format - computed: true, optional: false, required: false
  public get ruleFormat() {
    return this.getStringAttribute('rule_format');
  }

  // rules_v2023_01_05 - computed: false, optional: true, required: false
  private _rulesV20230105 = new DataAkamaiPropertyRulesBuilderRulesV20230105OutputReference(this, "rules_v2023_01_05");
  public get rulesV20230105() {
    return this._rulesV20230105;
  }
  public putRulesV20230105(value: DataAkamaiPropertyRulesBuilderRulesV20230105) {
    this._rulesV20230105.internalValue = value;
  }
  public resetRulesV20230105() {
    this._rulesV20230105.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20230105Input() {
    return this._rulesV20230105.internalValue;
  }

  // rules_v2023_05_30 - computed: false, optional: true, required: false
  private _rulesV20230530 = new DataAkamaiPropertyRulesBuilderRulesV20230530OutputReference(this, "rules_v2023_05_30");
  public get rulesV20230530() {
    return this._rulesV20230530;
  }
  public putRulesV20230530(value: DataAkamaiPropertyRulesBuilderRulesV20230530) {
    this._rulesV20230530.internalValue = value;
  }
  public resetRulesV20230530() {
    this._rulesV20230530.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20230530Input() {
    return this._rulesV20230530.internalValue;
  }

  // rules_v2023_09_20 - computed: false, optional: true, required: false
  private _rulesV20230920 = new DataAkamaiPropertyRulesBuilderRulesV20230920OutputReference(this, "rules_v2023_09_20");
  public get rulesV20230920() {
    return this._rulesV20230920;
  }
  public putRulesV20230920(value: DataAkamaiPropertyRulesBuilderRulesV20230920) {
    this._rulesV20230920.internalValue = value;
  }
  public resetRulesV20230920() {
    this._rulesV20230920.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20230920Input() {
    return this._rulesV20230920.internalValue;
  }

  // rules_v2023_10_30 - computed: false, optional: true, required: false
  private _rulesV20231030 = new DataAkamaiPropertyRulesBuilderRulesV20231030OutputReference(this, "rules_v2023_10_30");
  public get rulesV20231030() {
    return this._rulesV20231030;
  }
  public putRulesV20231030(value: DataAkamaiPropertyRulesBuilderRulesV20231030) {
    this._rulesV20231030.internalValue = value;
  }
  public resetRulesV20231030() {
    this._rulesV20231030.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20231030Input() {
    return this._rulesV20231030.internalValue;
  }

  // rules_v2024_01_09 - computed: false, optional: true, required: false
  private _rulesV20240109 = new DataAkamaiPropertyRulesBuilderRulesV20240109OutputReference(this, "rules_v2024_01_09");
  public get rulesV20240109() {
    return this._rulesV20240109;
  }
  public putRulesV20240109(value: DataAkamaiPropertyRulesBuilderRulesV20240109) {
    this._rulesV20240109.internalValue = value;
  }
  public resetRulesV20240109() {
    this._rulesV20240109.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20240109Input() {
    return this._rulesV20240109.internalValue;
  }

  // rules_v2024_02_12 - computed: false, optional: true, required: false
  private _rulesV20240212 = new DataAkamaiPropertyRulesBuilderRulesV20240212OutputReference(this, "rules_v2024_02_12");
  public get rulesV20240212() {
    return this._rulesV20240212;
  }
  public putRulesV20240212(value: DataAkamaiPropertyRulesBuilderRulesV20240212) {
    this._rulesV20240212.internalValue = value;
  }
  public resetRulesV20240212() {
    this._rulesV20240212.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20240212Input() {
    return this._rulesV20240212.internalValue;
  }

  // rules_v2024_05_31 - computed: false, optional: true, required: false
  private _rulesV20240531 = new DataAkamaiPropertyRulesBuilderRulesV20240531OutputReference(this, "rules_v2024_05_31");
  public get rulesV20240531() {
    return this._rulesV20240531;
  }
  public putRulesV20240531(value: DataAkamaiPropertyRulesBuilderRulesV20240531) {
    this._rulesV20240531.internalValue = value;
  }
  public resetRulesV20240531() {
    this._rulesV20240531.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20240531Input() {
    return this._rulesV20240531.internalValue;
  }

  // rules_v2024_08_13 - computed: false, optional: true, required: false
  private _rulesV20240813 = new DataAkamaiPropertyRulesBuilderRulesV20240813OutputReference(this, "rules_v2024_08_13");
  public get rulesV20240813() {
    return this._rulesV20240813;
  }
  public putRulesV20240813(value: DataAkamaiPropertyRulesBuilderRulesV20240813) {
    this._rulesV20240813.internalValue = value;
  }
  public resetRulesV20240813() {
    this._rulesV20240813.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20240813Input() {
    return this._rulesV20240813.internalValue;
  }

  // rules_v2024_10_21 - computed: false, optional: true, required: false
  private _rulesV20241021 = new DataAkamaiPropertyRulesBuilderRulesV20241021OutputReference(this, "rules_v2024_10_21");
  public get rulesV20241021() {
    return this._rulesV20241021;
  }
  public putRulesV20241021(value: DataAkamaiPropertyRulesBuilderRulesV20241021) {
    this._rulesV20241021.internalValue = value;
  }
  public resetRulesV20241021() {
    this._rulesV20241021.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20241021Input() {
    return this._rulesV20241021.internalValue;
  }

  // rules_v2025_01_13 - computed: false, optional: true, required: false
  private _rulesV20250113 = new DataAkamaiPropertyRulesBuilderRulesV20250113OutputReference(this, "rules_v2025_01_13");
  public get rulesV20250113() {
    return this._rulesV20250113;
  }
  public putRulesV20250113(value: DataAkamaiPropertyRulesBuilderRulesV20250113) {
    this._rulesV20250113.internalValue = value;
  }
  public resetRulesV20250113() {
    this._rulesV20250113.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250113Input() {
    return this._rulesV20250113.internalValue;
  }

  // rules_v2025_02_18 - computed: false, optional: true, required: false
  private _rulesV20250218 = new DataAkamaiPropertyRulesBuilderRulesV20250218OutputReference(this, "rules_v2025_02_18");
  public get rulesV20250218() {
    return this._rulesV20250218;
  }
  public putRulesV20250218(value: DataAkamaiPropertyRulesBuilderRulesV20250218) {
    this._rulesV20250218.internalValue = value;
  }
  public resetRulesV20250218() {
    this._rulesV20250218.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250218Input() {
    return this._rulesV20250218.internalValue;
  }

  // rules_v2025_03_24 - computed: false, optional: true, required: false
  private _rulesV20250324 = new DataAkamaiPropertyRulesBuilderRulesV20250324OutputReference(this, "rules_v2025_03_24");
  public get rulesV20250324() {
    return this._rulesV20250324;
  }
  public putRulesV20250324(value: DataAkamaiPropertyRulesBuilderRulesV20250324) {
    this._rulesV20250324.internalValue = value;
  }
  public resetRulesV20250324() {
    this._rulesV20250324.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250324Input() {
    return this._rulesV20250324.internalValue;
  }

  // rules_v2025_04_29 - computed: false, optional: true, required: false
  private _rulesV20250429 = new DataAkamaiPropertyRulesBuilderRulesV20250429OutputReference(this, "rules_v2025_04_29");
  public get rulesV20250429() {
    return this._rulesV20250429;
  }
  public putRulesV20250429(value: DataAkamaiPropertyRulesBuilderRulesV20250429) {
    this._rulesV20250429.internalValue = value;
  }
  public resetRulesV20250429() {
    this._rulesV20250429.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250429Input() {
    return this._rulesV20250429.internalValue;
  }

  // rules_v2025_05_30 - computed: false, optional: true, required: false
  private _rulesV20250530 = new DataAkamaiPropertyRulesBuilderRulesV20250530OutputReference(this, "rules_v2025_05_30");
  public get rulesV20250530() {
    return this._rulesV20250530;
  }
  public putRulesV20250530(value: DataAkamaiPropertyRulesBuilderRulesV20250530) {
    this._rulesV20250530.internalValue = value;
  }
  public resetRulesV20250530() {
    this._rulesV20250530.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250530Input() {
    return this._rulesV20250530.internalValue;
  }

  // rules_v2025_07_07 - computed: false, optional: true, required: false
  private _rulesV20250707 = new DataAkamaiPropertyRulesBuilderRulesV20250707OutputReference(this, "rules_v2025_07_07");
  public get rulesV20250707() {
    return this._rulesV20250707;
  }
  public putRulesV20250707(value: DataAkamaiPropertyRulesBuilderRulesV20250707) {
    this._rulesV20250707.internalValue = value;
  }
  public resetRulesV20250707() {
    this._rulesV20250707.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250707Input() {
    return this._rulesV20250707.internalValue;
  }

  // rules_v2025_09_09 - computed: false, optional: true, required: false
  private _rulesV20250909 = new DataAkamaiPropertyRulesBuilderRulesV20250909OutputReference(this, "rules_v2025_09_09");
  public get rulesV20250909() {
    return this._rulesV20250909;
  }
  public putRulesV20250909(value: DataAkamaiPropertyRulesBuilderRulesV20250909) {
    this._rulesV20250909.internalValue = value;
  }
  public resetRulesV20250909() {
    this._rulesV20250909.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV20250909Input() {
    return this._rulesV20250909.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rules_v2023_01_05: dataAkamaiPropertyRulesBuilderRulesV20230105ToTerraform(this._rulesV20230105.internalValue),
      rules_v2023_05_30: dataAkamaiPropertyRulesBuilderRulesV20230530ToTerraform(this._rulesV20230530.internalValue),
      rules_v2023_09_20: dataAkamaiPropertyRulesBuilderRulesV20230920ToTerraform(this._rulesV20230920.internalValue),
      rules_v2023_10_30: dataAkamaiPropertyRulesBuilderRulesV20231030ToTerraform(this._rulesV20231030.internalValue),
      rules_v2024_01_09: dataAkamaiPropertyRulesBuilderRulesV20240109ToTerraform(this._rulesV20240109.internalValue),
      rules_v2024_02_12: dataAkamaiPropertyRulesBuilderRulesV20240212ToTerraform(this._rulesV20240212.internalValue),
      rules_v2024_05_31: dataAkamaiPropertyRulesBuilderRulesV20240531ToTerraform(this._rulesV20240531.internalValue),
      rules_v2024_08_13: dataAkamaiPropertyRulesBuilderRulesV20240813ToTerraform(this._rulesV20240813.internalValue),
      rules_v2024_10_21: dataAkamaiPropertyRulesBuilderRulesV20241021ToTerraform(this._rulesV20241021.internalValue),
      rules_v2025_01_13: dataAkamaiPropertyRulesBuilderRulesV20250113ToTerraform(this._rulesV20250113.internalValue),
      rules_v2025_02_18: dataAkamaiPropertyRulesBuilderRulesV20250218ToTerraform(this._rulesV20250218.internalValue),
      rules_v2025_03_24: dataAkamaiPropertyRulesBuilderRulesV20250324ToTerraform(this._rulesV20250324.internalValue),
      rules_v2025_04_29: dataAkamaiPropertyRulesBuilderRulesV20250429ToTerraform(this._rulesV20250429.internalValue),
      rules_v2025_05_30: dataAkamaiPropertyRulesBuilderRulesV20250530ToTerraform(this._rulesV20250530.internalValue),
      rules_v2025_07_07: dataAkamaiPropertyRulesBuilderRulesV20250707ToTerraform(this._rulesV20250707.internalValue),
      rules_v2025_09_09: dataAkamaiPropertyRulesBuilderRulesV20250909ToTerraform(this._rulesV20250909.internalValue),
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
      rules_v2023_01_05: {
        value: dataAkamaiPropertyRulesBuilderRulesV20230105ToHclTerraform(this._rulesV20230105.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20230105List",
      },
      rules_v2023_05_30: {
        value: dataAkamaiPropertyRulesBuilderRulesV20230530ToHclTerraform(this._rulesV20230530.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20230530List",
      },
      rules_v2023_09_20: {
        value: dataAkamaiPropertyRulesBuilderRulesV20230920ToHclTerraform(this._rulesV20230920.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20230920List",
      },
      rules_v2023_10_30: {
        value: dataAkamaiPropertyRulesBuilderRulesV20231030ToHclTerraform(this._rulesV20231030.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20231030List",
      },
      rules_v2024_01_09: {
        value: dataAkamaiPropertyRulesBuilderRulesV20240109ToHclTerraform(this._rulesV20240109.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20240109List",
      },
      rules_v2024_02_12: {
        value: dataAkamaiPropertyRulesBuilderRulesV20240212ToHclTerraform(this._rulesV20240212.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20240212List",
      },
      rules_v2024_05_31: {
        value: dataAkamaiPropertyRulesBuilderRulesV20240531ToHclTerraform(this._rulesV20240531.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20240531List",
      },
      rules_v2024_08_13: {
        value: dataAkamaiPropertyRulesBuilderRulesV20240813ToHclTerraform(this._rulesV20240813.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20240813List",
      },
      rules_v2024_10_21: {
        value: dataAkamaiPropertyRulesBuilderRulesV20241021ToHclTerraform(this._rulesV20241021.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20241021List",
      },
      rules_v2025_01_13: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250113ToHclTerraform(this._rulesV20250113.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250113List",
      },
      rules_v2025_02_18: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250218ToHclTerraform(this._rulesV20250218.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250218List",
      },
      rules_v2025_03_24: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250324ToHclTerraform(this._rulesV20250324.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250324List",
      },
      rules_v2025_04_29: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250429ToHclTerraform(this._rulesV20250429.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250429List",
      },
      rules_v2025_05_30: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250530ToHclTerraform(this._rulesV20250530.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250530List",
      },
      rules_v2025_07_07: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250707ToHclTerraform(this._rulesV20250707.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250707List",
      },
      rules_v2025_09_09: {
        value: dataAkamaiPropertyRulesBuilderRulesV20250909ToHclTerraform(this._rulesV20250909.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiPropertyRulesBuilderRulesV20250909List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
