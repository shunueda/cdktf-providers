// https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dataset this SLO is created in. Will be deprecated in a future release. Must be the same dataset as the SLI unless the SLI Derived Column is Environment-wide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#dataset Slo#dataset}
  */
  readonly dataset?: string;
  /**
  * The datasets the SLO is evaluated on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#datasets Slo#datasets}
  */
  readonly datasets?: string[];
  /**
  * A description of the SLO's intent and context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * The name of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * The alias of the Derived Column that will be used as the SLI to indicate event success.
  * The derived column used as the SLI must be in the same dataset as the SLO. Additionally,
  * the column evaluation should consistently return nil, true, or false, as these are the only valid values for an SLI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#sli Slo#sli}
  */
  readonly sli: string;
  /**
  * A map of tags to assign to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#tags Slo#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The percentage of qualified events that you expect to succeed during the `time_period`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#target_percentage Slo#target_percentage}
  */
  readonly targetPercentage: number;
  /**
  * The time period, in days, over which your SLO will be evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#time_period Slo#time_period}
  */
  readonly timePeriod: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo honeycombio_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.44.0/docs/resources/slo honeycombio_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_slo',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.44.0',
        providerVersionConstraint: '0.44.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataset = config.dataset;
    this._datasets = config.datasets;
    this._description = config.description;
    this._name = config.name;
    this._sli = config.sli;
    this._tags = config.tags;
    this._targetPercentage = config.targetPercentage;
    this._timePeriod = config.timePeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // datasets - computed: true, optional: true, required: false
  private _datasets?: string[]; 
  public get datasets() {
    return cdktf.Fn.tolist(this.getListAttribute('datasets'));
  }
  public set datasets(value: string[]) {
    this._datasets = value;
  }
  public resetDatasets() {
    this._datasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets;
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

  // sli - computed: false, optional: false, required: true
  private _sli?: string; 
  public get sli() {
    return this.getStringAttribute('sli');
  }
  public set sli(value: string) {
    this._sli = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliInput() {
    return this._sli;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_percentage - computed: false, optional: false, required: true
  private _targetPercentage?: number; 
  public get targetPercentage() {
    return this.getNumberAttribute('target_percentage');
  }
  public set targetPercentage(value: number) {
    this._targetPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentageInput() {
    return this._targetPercentage;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod?: number; 
  public get timePeriod() {
    return this.getNumberAttribute('time_period');
  }
  public set timePeriod(value: number) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: cdktf.stringToTerraform(this._dataset),
      datasets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datasets),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sli: cdktf.stringToTerraform(this._sli),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_percentage: cdktf.numberToTerraform(this._targetPercentage),
      time_period: cdktf.numberToTerraform(this._timePeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datasets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sli: {
        value: cdktf.stringToHclTerraform(this._sli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_percentage: {
        value: cdktf.numberToHclTerraform(this._targetPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_period: {
        value: cdktf.numberToHclTerraform(this._timePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
