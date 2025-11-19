// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogGrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate logs powered by Grail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail#activated LogGrail#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail#id LogGrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `NONE`, `SEVEN_DAYS`, `THIRTY_FIVE_DAYS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail#parallel_ingest_period LogGrail#parallel_ingest_period}
  */
  readonly parallelIngestPeriod: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail dynatrace_log_grail}
*/
export class LogGrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_grail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogGrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogGrail to import
  * @param importFromId The id of the existing LogGrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogGrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_grail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_grail dynatrace_log_grail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogGrailConfig
  */
  public constructor(scope: Construct, id: string, config: LogGrailConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_grail',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activated = config.activated;
    this._id = config.id;
    this._parallelIngestPeriod = config.parallelIngestPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: false, required: true
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
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

  // parallel_ingest_period - computed: false, optional: false, required: true
  private _parallelIngestPeriod?: string; 
  public get parallelIngestPeriod() {
    return this.getStringAttribute('parallel_ingest_period');
  }
  public set parallelIngestPeriod(value: string) {
    this._parallelIngestPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelIngestPeriodInput() {
    return this._parallelIngestPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated: cdktf.booleanToTerraform(this._activated),
      id: cdktf.stringToTerraform(this._id),
      parallel_ingest_period: cdktf.stringToTerraform(this._parallelIngestPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallel_ingest_period: {
        value: cdktf.stringToHclTerraform(this._parallelIngestPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
