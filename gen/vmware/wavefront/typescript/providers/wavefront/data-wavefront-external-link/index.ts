// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/external_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontExternalLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/external_link#id DataWavefrontExternalLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/external_link wavefront_external_link}
*/
export class DataWavefrontExternalLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_external_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontExternalLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontExternalLink to import
  * @param importFromId The id of the existing DataWavefrontExternalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/external_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontExternalLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_external_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/external_link wavefront_external_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontExternalLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontExternalLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_external_link',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_log_integration - computed: true, optional: false, required: false
  public get isLogIntegration() {
    return this.getBooleanAttribute('is_log_integration');
  }

  // metric_filter_regex - computed: true, optional: false, required: false
  public get metricFilterRegex() {
    return this.getStringAttribute('metric_filter_regex');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // point_tag_filter_regexes - computed: true, optional: false, required: false
  private _pointTagFilterRegexes = new cdktf.StringMap(this, "point_tag_filter_regexes");
  public get pointTagFilterRegexes() {
    return this._pointTagFilterRegexes;
  }

  // source_filter_regex - computed: true, optional: false, required: false
  public get sourceFilterRegex() {
    return this.getStringAttribute('source_filter_regex');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // updated_epoch_millis - computed: true, optional: false, required: false
  public get updatedEpochMillis() {
    return this.getNumberAttribute('updated_epoch_millis');
  }

  // updater_id - computed: true, optional: false, required: false
  public get updaterId() {
    return this.getStringAttribute('updater_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
