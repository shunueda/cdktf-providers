// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#behavior ApplicationName#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#category ApplicationName#category}
  */
  readonly category?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#device_name ApplicationName#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#fosid ApplicationName#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#id ApplicationName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#max_scan_range ApplicationName#max_scan_range}
  */
  readonly maxScanRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#name ApplicationName#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#parameter ApplicationName#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#popularity ApplicationName#popularity}
  */
  readonly popularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#protocol ApplicationName#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#risk ApplicationName#risk}
  */
  readonly risk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#sub_category ApplicationName#sub_category}
  */
  readonly subCategory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#technology ApplicationName#technology}
  */
  readonly technology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#vendor ApplicationName#vendor}
  */
  readonly vendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#weight ApplicationName#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name fmgdevice_application_name}
*/
export class ApplicationName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_application_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationName to import
  * @param importFromId The id of the existing ApplicationName that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_application_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/application_name fmgdevice_application_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationNameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationNameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_application_name',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._behavior = config.behavior;
    this._category = config.category;
    this._deviceName = config.deviceName;
    this._fosid = config.fosid;
    this._id = config.id;
    this._maxScanRange = config.maxScanRange;
    this._name = config.name;
    this._parameter = config.parameter;
    this._popularity = config.popularity;
    this._protocol = config.protocol;
    this._risk = config.risk;
    this._subCategory = config.subCategory;
    this._technology = config.technology;
    this._vendor = config.vendor;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return cdktf.Fn.tolist(this.getListAttribute('category'));
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // max_scan_range - computed: false, optional: true, required: false
  private _maxScanRange?: number; 
  public get maxScanRange() {
    return this.getNumberAttribute('max_scan_range');
  }
  public set maxScanRange(value: number) {
    this._maxScanRange = value;
  }
  public resetMaxScanRange() {
    this._maxScanRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScanRangeInput() {
    return this._maxScanRange;
  }

  // name - computed: false, optional: true, required: false
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

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // popularity - computed: false, optional: true, required: false
  private _popularity?: number; 
  public get popularity() {
    return this.getNumberAttribute('popularity');
  }
  public set popularity(value: number) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // risk - computed: false, optional: true, required: false
  private _risk?: number; 
  public get risk() {
    return this.getNumberAttribute('risk');
  }
  public set risk(value: number) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // sub_category - computed: false, optional: true, required: false
  private _subCategory?: number; 
  public get subCategory() {
    return this.getNumberAttribute('sub_category');
  }
  public set subCategory(value: number) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // technology - computed: false, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior: cdktf.stringToTerraform(this._behavior),
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      max_scan_range: cdktf.numberToTerraform(this._maxScanRange),
      name: cdktf.stringToTerraform(this._name),
      parameter: cdktf.stringToTerraform(this._parameter),
      popularity: cdktf.numberToTerraform(this._popularity),
      protocol: cdktf.stringToTerraform(this._protocol),
      risk: cdktf.numberToTerraform(this._risk),
      sub_category: cdktf.numberToTerraform(this._subCategory),
      technology: cdktf.stringToTerraform(this._technology),
      vendor: cdktf.stringToTerraform(this._vendor),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior: {
        value: cdktf.stringToHclTerraform(this._behavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      max_scan_range: {
        value: cdktf.numberToHclTerraform(this._maxScanRange),
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
      parameter: {
        value: cdktf.stringToHclTerraform(this._parameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      popularity: {
        value: cdktf.numberToHclTerraform(this._popularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk: {
        value: cdktf.numberToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_category: {
        value: cdktf.numberToHclTerraform(this._subCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      technology: {
        value: cdktf.stringToHclTerraform(this._technology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
