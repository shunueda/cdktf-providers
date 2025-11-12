// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisAwsArchivalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud native archival location ID (UUID). **Deprecated:** use `id` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location#archival_location_id DataPolarisAwsArchivalLocation#archival_location_id}
  */
  readonly archivalLocationId?: string;
  /**
  * Cloud native archival location ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location#id DataPolarisAwsArchivalLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cloud native archival location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location#name DataPolarisAwsArchivalLocation#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location polaris_aws_archival_location}
*/
export class DataPolarisAwsArchivalLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_archival_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisAwsArchivalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisAwsArchivalLocation to import
  * @param importFromId The id of the existing DataPolarisAwsArchivalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisAwsArchivalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_archival_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/aws_archival_location polaris_aws_archival_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisAwsArchivalLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisAwsArchivalLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_archival_location',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archivalLocationId = config.archivalLocationId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // archival_location_id - computed: false, optional: true, required: false
  private _archivalLocationId?: string; 
  public get archivalLocationId() {
    return this.getStringAttribute('archival_location_id');
  }
  public set archivalLocationId(value: string) {
    this._archivalLocationId = value;
  }
  public resetArchivalLocationId() {
    this._archivalLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalLocationIdInput() {
    return this._archivalLocationId;
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // bucket_tags - computed: true, optional: false, required: false
  private _bucketTags = new cdktf.StringMap(this, "bucket_tags");
  public get bucketTags() {
    return this._bucketTags;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // id - computed: false, optional: true, required: false
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

  // kms_master_key - computed: true, optional: false, required: false
  public get kmsMasterKey() {
    return this.getStringAttribute('kms_master_key');
  }

  // location_template - computed: true, optional: false, required: false
  public get locationTemplate() {
    return this.getStringAttribute('location_template');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archival_location_id: cdktf.stringToTerraform(this._archivalLocationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archival_location_id: {
        value: cdktf.stringToHclTerraform(this._archivalLocationId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
