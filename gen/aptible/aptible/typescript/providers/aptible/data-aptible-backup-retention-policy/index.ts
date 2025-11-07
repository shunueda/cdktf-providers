// https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAptibleBackupRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy#env_id DataAptibleBackupRetentionPolicy#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy#id DataAptibleBackupRetentionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy aptible_backup_retention_policy}
*/
export class DataAptibleBackupRetentionPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_backup_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAptibleBackupRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAptibleBackupRetentionPolicy to import
  * @param importFromId The id of the existing DataAptibleBackupRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAptibleBackupRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_backup_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/data-sources/backup_retention_policy aptible_backup_retention_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAptibleBackupRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAptibleBackupRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_backup_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envId = config.envId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily - computed: true, optional: false, required: false
  public get daily() {
    return this.getNumberAttribute('daily');
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // keep_final - computed: true, optional: false, required: false
  public get keepFinal() {
    return this.getBooleanAttribute('keep_final');
  }

  // make_copy - computed: true, optional: false, required: false
  public get makeCopy() {
    return this.getBooleanAttribute('make_copy');
  }

  // monthly - computed: true, optional: false, required: false
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // yearly - computed: true, optional: false, required: false
  public get yearly() {
    return this.getNumberAttribute('yearly');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_id: cdktf.numberToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
