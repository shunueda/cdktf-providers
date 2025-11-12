// https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAppsyncStartSchemaMergeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the schema association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge#association_id AwsAppsyncStartSchemaMerge#association_id}
  */
  readonly associationId: string;
  /**
  * The identifier of the merged API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge#merged_api_id AwsAppsyncStartSchemaMerge#merged_api_id}
  */
  readonly mergedApiId: string;
  /**
  * The number of seconds to wait for the schema merge to complete. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge#timeout_seconds AwsAppsyncStartSchemaMerge#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge gravicore_aws_appsync_start_schema_merge}
*/
export class AwsAppsyncStartSchemaMerge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gravicore_aws_appsync_start_schema_merge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAppsyncStartSchemaMerge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppsyncStartSchemaMerge to import
  * @param importFromId The id of the existing AwsAppsyncStartSchemaMerge that should be imported. Refer to the {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppsyncStartSchemaMerge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gravicore_aws_appsync_start_schema_merge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_start_schema_merge gravicore_aws_appsync_start_schema_merge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppsyncStartSchemaMergeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppsyncStartSchemaMergeConfig) {
    super(scope, id, {
      terraformResourceType: 'gravicore_aws_appsync_start_schema_merge',
      terraformGeneratorMetadata: {
        providerName: 'gravicore',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associationId = config.associationId;
    this._mergedApiId = config.mergedApiId;
    this._timeoutSeconds = config.timeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: false, optional: false, required: true
  private _associationId?: string; 
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merged_api_id - computed: false, optional: false, required: true
  private _mergedApiId?: string; 
  public get mergedApiId() {
    return this.getStringAttribute('merged_api_id');
  }
  public set mergedApiId(value: string) {
    this._mergedApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiIdInput() {
    return this._mergedApiId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      association_id: cdktf.stringToTerraform(this._associationId),
      merged_api_id: cdktf.stringToTerraform(this._mergedApiId),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_id: {
        value: cdktf.stringToHclTerraform(this._associationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_api_id: {
        value: cdktf.stringToHclTerraform(this._mergedApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
