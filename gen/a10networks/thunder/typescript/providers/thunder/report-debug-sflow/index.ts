// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportDebugSflowAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow#id ReportDebugSflowA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable logs by parser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow#parser ReportDebugSflowA#parser}
  */
  readonly parser?: number;
  /**
  * Specify stats-oid to dump raw packets, 0 to disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow#stats_oid ReportDebugSflowA#stats_oid}
  */
  readonly statsOid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow thunder_report_debug_sflow}
*/
export class ReportDebugSflowA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_report_debug_sflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportDebugSflowA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportDebugSflowA to import
  * @param importFromId The id of the existing ReportDebugSflowA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportDebugSflowA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_report_debug_sflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report_debug_sflow thunder_report_debug_sflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportDebugSflowAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportDebugSflowAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_report_debug_sflow',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._parser = config.parser;
    this._statsOid = config.statsOid;
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

  // parser - computed: false, optional: true, required: false
  private _parser?: number; 
  public get parser() {
    return this.getNumberAttribute('parser');
  }
  public set parser(value: number) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // stats_oid - computed: false, optional: true, required: false
  private _statsOid?: number; 
  public get statsOid() {
    return this.getNumberAttribute('stats_oid');
  }
  public set statsOid(value: number) {
    this._statsOid = value;
  }
  public resetStatsOid() {
    this._statsOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsOidInput() {
    return this._statsOid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parser: cdktf.numberToTerraform(this._parser),
      stats_oid: cdktf.numberToTerraform(this._statsOid),
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
      parser: {
        value: cdktf.numberToHclTerraform(this._parser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_oid: {
        value: cdktf.numberToHclTerraform(this._statsOid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
