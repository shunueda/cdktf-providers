// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixArchiveLogsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_logs coralogix_archive_logs}
*/
export class DataCoralogixArchiveLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_archive_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixArchiveLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixArchiveLogs to import
  * @param importFromId The id of the existing DataCoralogixArchiveLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixArchiveLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_archive_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_logs coralogix_archive_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixArchiveLogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixArchiveLogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_archive_logs',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // archiving_format_id - computed: true, optional: false, required: false
  public get archivingFormatId() {
    return this.getStringAttribute('archiving_format_id');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enable_tags - computed: true, optional: false, required: false
  public get enableTags() {
    return this.getBooleanAttribute('enable_tags');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
