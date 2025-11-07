// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragecontainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The percentage of the quota that can be consumed before an alert is raised. Allowed values are between `50` and `100` (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer#high_water_mark Storagecontainer#high_water_mark}
  */
  readonly highWaterMark?: number;
  /**
  * Name for the storage container. This should be unique across all storage containers in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer#name Storagecontainer#name}
  */
  readonly name: string;
  /**
  * The total number of bytes that can be provisioned/reserved against this storage container. A value of 0 means there is no limit. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer#quota Storagecontainer#quota}
  */
  readonly quota?: number;
  /**
  * The storage protocol of Storage Container. Accepted values are `SCSI` and `NVMe`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer#storage_protocol Storagecontainer#storage_protocol}
  */
  readonly storageProtocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer powerstore_storagecontainer}
*/
export class Storagecontainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_storagecontainer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Storagecontainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Storagecontainer to import
  * @param importFromId The id of the existing Storagecontainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Storagecontainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_storagecontainer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/storagecontainer powerstore_storagecontainer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragecontainerConfig
  */
  public constructor(scope: Construct, id: string, config: StoragecontainerConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_storagecontainer',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._highWaterMark = config.highWaterMark;
    this._name = config.name;
    this._quota = config.quota;
    this._storageProtocol = config.storageProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // high_water_mark - computed: true, optional: true, required: false
  private _highWaterMark?: number; 
  public get highWaterMark() {
    return this.getNumberAttribute('high_water_mark');
  }
  public set highWaterMark(value: number) {
    this._highWaterMark = value;
  }
  public resetHighWaterMark() {
    this._highWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkInput() {
    return this._highWaterMark;
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

  // quota - computed: true, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // storage_protocol - computed: true, optional: true, required: false
  private _storageProtocol?: string; 
  public get storageProtocol() {
    return this.getStringAttribute('storage_protocol');
  }
  public set storageProtocol(value: string) {
    this._storageProtocol = value;
  }
  public resetStorageProtocol() {
    this._storageProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProtocolInput() {
    return this._storageProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      high_water_mark: cdktf.numberToTerraform(this._highWaterMark),
      name: cdktf.stringToTerraform(this._name),
      quota: cdktf.numberToTerraform(this._quota),
      storage_protocol: cdktf.stringToTerraform(this._storageProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      high_water_mark: {
        value: cdktf.numberToHclTerraform(this._highWaterMark),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_protocol: {
        value: cdktf.stringToHclTerraform(this._storageProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
