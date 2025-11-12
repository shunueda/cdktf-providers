// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpoptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#id Opoption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#partitionnameintrap Opoption#partitionnameintrap}
  */
  readonly partitionnameintrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#severityinfointrap Opoption#severityinfointrap}
  */
  readonly severityinfointrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#snmpset Opoption#snmpset}
  */
  readonly snmpset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#snmptraplogging Opoption#snmptraplogging}
  */
  readonly snmptraplogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#snmptraplogginglevel Opoption#snmptraplogginglevel}
  */
  readonly snmptraplogginglevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption citrixadc_opoption}
*/
export class Opoption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_opoption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Opoption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Opoption to import
  * @param importFromId The id of the existing Opoption that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Opoption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_opoption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/opoption citrixadc_opoption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpoptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpoptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_opoption',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._partitionnameintrap = config.partitionnameintrap;
    this._severityinfointrap = config.severityinfointrap;
    this._snmpset = config.snmpset;
    this._snmptraplogging = config.snmptraplogging;
    this._snmptraplogginglevel = config.snmptraplogginglevel;
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

  // partitionnameintrap - computed: true, optional: true, required: false
  private _partitionnameintrap?: string; 
  public get partitionnameintrap() {
    return this.getStringAttribute('partitionnameintrap');
  }
  public set partitionnameintrap(value: string) {
    this._partitionnameintrap = value;
  }
  public resetPartitionnameintrap() {
    this._partitionnameintrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionnameintrapInput() {
    return this._partitionnameintrap;
  }

  // severityinfointrap - computed: true, optional: true, required: false
  private _severityinfointrap?: string; 
  public get severityinfointrap() {
    return this.getStringAttribute('severityinfointrap');
  }
  public set severityinfointrap(value: string) {
    this._severityinfointrap = value;
  }
  public resetSeverityinfointrap() {
    this._severityinfointrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityinfointrapInput() {
    return this._severityinfointrap;
  }

  // snmpset - computed: true, optional: true, required: false
  private _snmpset?: string; 
  public get snmpset() {
    return this.getStringAttribute('snmpset');
  }
  public set snmpset(value: string) {
    this._snmpset = value;
  }
  public resetSnmpset() {
    this._snmpset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpsetInput() {
    return this._snmpset;
  }

  // snmptraplogging - computed: true, optional: true, required: false
  private _snmptraplogging?: string; 
  public get snmptraplogging() {
    return this.getStringAttribute('snmptraplogging');
  }
  public set snmptraplogging(value: string) {
    this._snmptraplogging = value;
  }
  public resetSnmptraplogging() {
    this._snmptraplogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptraploggingInput() {
    return this._snmptraplogging;
  }

  // snmptraplogginglevel - computed: true, optional: true, required: false
  private _snmptraplogginglevel?: string; 
  public get snmptraplogginglevel() {
    return this.getStringAttribute('snmptraplogginglevel');
  }
  public set snmptraplogginglevel(value: string) {
    this._snmptraplogginglevel = value;
  }
  public resetSnmptraplogginglevel() {
    this._snmptraplogginglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptraplogginglevelInput() {
    return this._snmptraplogginglevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      partitionnameintrap: cdktf.stringToTerraform(this._partitionnameintrap),
      severityinfointrap: cdktf.stringToTerraform(this._severityinfointrap),
      snmpset: cdktf.stringToTerraform(this._snmpset),
      snmptraplogging: cdktf.stringToTerraform(this._snmptraplogging),
      snmptraplogginglevel: cdktf.stringToTerraform(this._snmptraplogginglevel),
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
      partitionnameintrap: {
        value: cdktf.stringToHclTerraform(this._partitionnameintrap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severityinfointrap: {
        value: cdktf.stringToHclTerraform(this._severityinfointrap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpset: {
        value: cdktf.stringToHclTerraform(this._snmpset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmptraplogging: {
        value: cdktf.stringToHclTerraform(this._snmptraplogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmptraplogginglevel: {
        value: cdktf.stringToHclTerraform(this._snmptraplogginglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
