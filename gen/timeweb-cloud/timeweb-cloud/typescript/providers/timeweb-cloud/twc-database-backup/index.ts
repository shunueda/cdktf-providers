// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcDatabaseBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database cluster ID for which backup should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup#cluster_id TwcDatabaseBackup#cluster_id}
  */
  readonly clusterId: number;
  /**
  * Comment for backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup#comment TwcDatabaseBackup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup#id TwcDatabaseBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup twc_database_backup}
*/
export class TwcDatabaseBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_database_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcDatabaseBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcDatabaseBackup to import
  * @param importFromId The id of the existing TwcDatabaseBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcDatabaseBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_database_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_database_backup twc_database_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcDatabaseBackupConfig
  */
  public constructor(scope: Construct, id: string, config: TwcDatabaseBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_database_backup',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.numberToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.numberToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
