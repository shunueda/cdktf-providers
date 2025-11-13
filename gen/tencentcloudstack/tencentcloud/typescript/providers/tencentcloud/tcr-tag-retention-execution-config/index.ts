// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrTagRetentionExecutionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to simulate execution, the default value is false, that is, non-simulation execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config#dry_run TcrTagRetentionExecutionConfig#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config#id TcrTagRetentionExecutionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config#registry_id TcrTagRetentionExecutionConfig#registry_id}
  */
  readonly registryId: string;
  /**
  * retention id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config#retention_id TcrTagRetentionExecutionConfig#retention_id}
  */
  readonly retentionId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config tencentcloud_tcr_tag_retention_execution_config}
*/
export class TcrTagRetentionExecutionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_tag_retention_execution_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrTagRetentionExecutionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrTagRetentionExecutionConfig to import
  * @param importFromId The id of the existing TcrTagRetentionExecutionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrTagRetentionExecutionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_tag_retention_execution_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tcr_tag_retention_execution_config tencentcloud_tcr_tag_retention_execution_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrTagRetentionExecutionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TcrTagRetentionExecutionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_tag_retention_execution_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._registryId = config.registryId;
    this._retentionId = config.retentionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getNumberAttribute('execution_id');
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

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // retention_id - computed: false, optional: false, required: true
  private _retentionId?: number; 
  public get retentionId() {
    return this.getNumberAttribute('retention_id');
  }
  public set retentionId(value: number) {
    this._retentionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIdInput() {
    return this._retentionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      registry_id: cdktf.stringToTerraform(this._registryId),
      retention_id: cdktf.numberToTerraform(this._retentionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
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
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_id: {
        value: cdktf.numberToHclTerraform(this._retentionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
