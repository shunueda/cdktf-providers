// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSqlCustomskipidxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#device_type SystemSqlCustomskipidx#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#fosid SystemSqlCustomskipidx#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#id SystemSqlCustomskipidx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#index_field SystemSqlCustomskipidx#index_field}
  */
  readonly indexField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#log_type SystemSqlCustomskipidx#log_type}
  */
  readonly logType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx fortianalyzer_system_sql_customskipidx}
*/
export class SystemSqlCustomskipidx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_sql_customskipidx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSqlCustomskipidx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSqlCustomskipidx to import
  * @param importFromId The id of the existing SystemSqlCustomskipidx that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSqlCustomskipidx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_sql_customskipidx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_sql_customskipidx fortianalyzer_system_sql_customskipidx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSqlCustomskipidxConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSqlCustomskipidxConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_sql_customskipidx',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceType = config.deviceType;
    this._fosid = config.fosid;
    this._id = config.id;
    this._indexField = config.indexField;
    this._logType = config.logType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // index_field - computed: false, optional: true, required: false
  private _indexField?: string; 
  public get indexField() {
    return this.getStringAttribute('index_field');
  }
  public set indexField(value: string) {
    this._indexField = value;
  }
  public resetIndexField() {
    this._indexField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type: cdktf.stringToTerraform(this._deviceType),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      index_field: cdktf.stringToTerraform(this._indexField),
      log_type: cdktf.stringToTerraform(this._logType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      index_field: {
        value: cdktf.stringToHclTerraform(this._indexField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
