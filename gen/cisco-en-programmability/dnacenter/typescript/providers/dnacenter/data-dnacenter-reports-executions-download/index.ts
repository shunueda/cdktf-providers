// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterReportsExecutionsDownloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory absolute path in which to save the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download#dirpath DataDnacenterReportsExecutionsDownload#dirpath}
  */
  readonly dirpath: string;
  /**
  * executionId path parameter. executionId of report execution
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download#execution_id DataDnacenterReportsExecutionsDownload#execution_id}
  */
  readonly executionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download#id DataDnacenterReportsExecutionsDownload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * reportId path parameter. reportId of report
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download#report_id DataDnacenterReportsExecutionsDownload#report_id}
  */
  readonly reportId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download dnacenter_reports_executions_download}
*/
export class DataDnacenterReportsExecutionsDownload extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_reports_executions_download";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterReportsExecutionsDownload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterReportsExecutionsDownload to import
  * @param importFromId The id of the existing DataDnacenterReportsExecutionsDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterReportsExecutionsDownload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_reports_executions_download", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/reports_executions_download dnacenter_reports_executions_download} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterReportsExecutionsDownloadConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterReportsExecutionsDownloadConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_reports_executions_download',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dirpath = config.dirpath;
    this._executionId = config.executionId;
    this._id = config.id;
    this._reportId = config.reportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dirpath - computed: false, optional: false, required: true
  private _dirpath?: string; 
  public get dirpath() {
    return this.getStringAttribute('dirpath');
  }
  public set dirpath(value: string) {
    this._dirpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirpathInput() {
    return this._dirpath;
  }

  // execution_id - computed: false, optional: false, required: true
  private _executionId?: string; 
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }
  public set executionId(value: string) {
    this._executionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionIdInput() {
    return this._executionId;
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

  // report_id - computed: false, optional: false, required: true
  private _reportId?: string; 
  public get reportId() {
    return this.getStringAttribute('report_id');
  }
  public set reportId(value: string) {
    this._reportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIdInput() {
    return this._reportId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dirpath: cdktf.stringToTerraform(this._dirpath),
      execution_id: cdktf.stringToTerraform(this._executionId),
      id: cdktf.stringToTerraform(this._id),
      report_id: cdktf.stringToTerraform(this._reportId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dirpath: {
        value: cdktf.stringToHclTerraform(this._dirpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_id: {
        value: cdktf.stringToHclTerraform(this._executionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_id: {
        value: cdktf.stringToHclTerraform(this._reportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
