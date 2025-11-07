// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDebugTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets#filter DataPingdirectoryDebugTargets#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent Log Publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets#log_publisher_name DataPingdirectoryDebugTargets#log_publisher_name}
  */
  readonly logPublisherName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets pingdirectory_debug_targets}
*/
export class DataPingdirectoryDebugTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_debug_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDebugTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDebugTargets to import
  * @param importFromId The id of the existing DataPingdirectoryDebugTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDebugTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_debug_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_targets pingdirectory_debug_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDebugTargetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDebugTargetsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_debug_targets',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._logPublisherName = config.logPublisherName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // log_publisher_name - computed: false, optional: false, required: true
  private _logPublisherName?: string; 
  public get logPublisherName() {
    return this.getStringAttribute('log_publisher_name');
  }
  public set logPublisherName(value: string) {
    this._logPublisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublisherNameInput() {
    return this._logPublisherName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      log_publisher_name: cdktf.stringToTerraform(this._logPublisherName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_publisher_name: {
        value: cdktf.stringToHclTerraform(this._logPublisherName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
