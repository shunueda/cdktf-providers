// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMetalcloudInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create infrastructure if it does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure#create_if_missing DataMetalcloudInfrastructure#create_if_missing}
  */
  readonly createIfMissing?: boolean | cdktf.IResolvable;
  /**
  * Infrastructure label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure#label DataMetalcloudInfrastructure#label}
  */
  readonly label: string;
  /**
  * Site Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure#site_id DataMetalcloudInfrastructure#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure metalcloud_infrastructure}
*/
export class DataMetalcloudInfrastructure extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMetalcloudInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMetalcloudInfrastructure to import
  * @param importFromId The id of the existing DataMetalcloudInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMetalcloudInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/data-sources/infrastructure metalcloud_infrastructure} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMetalcloudInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: DataMetalcloudInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createIfMissing = config.createIfMissing;
    this._label = config.label;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_if_missing - computed: false, optional: true, required: false
  private _createIfMissing?: boolean | cdktf.IResolvable; 
  public get createIfMissing() {
    return this.getBooleanAttribute('create_if_missing');
  }
  public set createIfMissing(value: boolean | cdktf.IResolvable) {
    this._createIfMissing = value;
  }
  public resetCreateIfMissing() {
    this._createIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIfMissingInput() {
    return this._createIfMissing;
  }

  // infrastructure_id - computed: true, optional: false, required: false
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_if_missing: cdktf.booleanToTerraform(this._createIfMissing),
      label: cdktf.stringToTerraform(this._label),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_if_missing: {
        value: cdktf.booleanToHclTerraform(this._createIfMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
