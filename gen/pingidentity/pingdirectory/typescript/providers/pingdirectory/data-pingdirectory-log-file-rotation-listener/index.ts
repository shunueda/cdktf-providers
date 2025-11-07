// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_file_rotation_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLogFileRotationListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_file_rotation_listener#name DataPingdirectoryLogFileRotationListener#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_file_rotation_listener pingdirectory_log_file_rotation_listener}
*/
export class DataPingdirectoryLogFileRotationListener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_log_file_rotation_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLogFileRotationListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLogFileRotationListener to import
  * @param importFromId The id of the existing DataPingdirectoryLogFileRotationListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_file_rotation_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLogFileRotationListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_log_file_rotation_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_file_rotation_listener pingdirectory_log_file_rotation_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLogFileRotationListenerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLogFileRotationListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_log_file_rotation_listener',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_external_server - computed: true, optional: false, required: false
  public get awsExternalServer() {
    return this.getStringAttribute('aws_external_server');
  }

  // compress_on_copy - computed: true, optional: false, required: false
  public get compressOnCopy() {
    return this.getBooleanAttribute('compress_on_copy');
  }

  // copy_to_directory - computed: true, optional: false, required: false
  public get copyToDirectory() {
    return this.getStringAttribute('copy_to_directory');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // file_retention_pattern - computed: true, optional: false, required: false
  public get fileRetentionPattern() {
    return this.getStringAttribute('file_retention_pattern');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_concurrent_transfer_connections - computed: true, optional: false, required: false
  public get maximumConcurrentTransferConnections() {
    return this.getNumberAttribute('maximum_concurrent_transfer_connections');
  }

  // maximum_file_age_to_retain - computed: true, optional: false, required: false
  public get maximumFileAgeToRetain() {
    return this.getStringAttribute('maximum_file_age_to_retain');
  }

  // maximum_file_count_to_retain - computed: true, optional: false, required: false
  public get maximumFileCountToRetain() {
    return this.getNumberAttribute('maximum_file_count_to_retain');
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

  // output_directory - computed: true, optional: false, required: false
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // target_throughput_in_megabits_per_second - computed: true, optional: false, required: false
  public get targetThroughputInMegabitsPerSecond() {
    return this.getNumberAttribute('target_throughput_in_megabits_per_second');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
