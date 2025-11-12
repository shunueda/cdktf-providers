// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGraylogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#created_at DataGraylogStream#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#creator_user_id DataGraylogStream#creator_user_id}
  */
  readonly creatorUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#description DataGraylogStream#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#disabled DataGraylogStream#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#id DataGraylogStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#index_set_id DataGraylogStream#index_set_id}
  */
  readonly indexSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#is_default DataGraylogStream#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#matching_type DataGraylogStream#matching_type}
  */
  readonly matchingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#remove_matches_from_default_stream DataGraylogStream#remove_matches_from_default_stream}
  */
  readonly removeMatchesFromDefaultStream?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#stream_id DataGraylogStream#stream_id}
  */
  readonly streamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#title DataGraylogStream#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream graylog_stream}
*/
export class DataGraylogStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGraylogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGraylogStream to import
  * @param importFromId The id of the existing DataGraylogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGraylogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/data-sources/stream graylog_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGraylogStreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGraylogStreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'graylog_stream',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._creatorUserId = config.creatorUserId;
    this._description = config.description;
    this._disabled = config.disabled;
    this._id = config.id;
    this._indexSetId = config.indexSetId;
    this._isDefault = config.isDefault;
    this._matchingType = config.matchingType;
    this._removeMatchesFromDefaultStream = config.removeMatchesFromDefaultStream;
    this._streamId = config.streamId;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // creator_user_id - computed: true, optional: true, required: false
  private _creatorUserId?: string; 
  public get creatorUserId() {
    return this.getStringAttribute('creator_user_id');
  }
  public set creatorUserId(value: string) {
    this._creatorUserId = value;
  }
  public resetCreatorUserId() {
    this._creatorUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserIdInput() {
    return this._creatorUserId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // index_set_id - computed: true, optional: true, required: false
  private _indexSetId?: string; 
  public get indexSetId() {
    return this.getStringAttribute('index_set_id');
  }
  public set indexSetId(value: string) {
    this._indexSetId = value;
  }
  public resetIndexSetId() {
    this._indexSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSetIdInput() {
    return this._indexSetId;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // matching_type - computed: true, optional: true, required: false
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  public resetMatchingType() {
    this._matchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // remove_matches_from_default_stream - computed: true, optional: true, required: false
  private _removeMatchesFromDefaultStream?: boolean | cdktf.IResolvable; 
  public get removeMatchesFromDefaultStream() {
    return this.getBooleanAttribute('remove_matches_from_default_stream');
  }
  public set removeMatchesFromDefaultStream(value: boolean | cdktf.IResolvable) {
    this._removeMatchesFromDefaultStream = value;
  }
  public resetRemoveMatchesFromDefaultStream() {
    this._removeMatchesFromDefaultStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeMatchesFromDefaultStreamInput() {
    return this._removeMatchesFromDefaultStream;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      creator_user_id: cdktf.stringToTerraform(this._creatorUserId),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      index_set_id: cdktf.stringToTerraform(this._indexSetId),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      matching_type: cdktf.stringToTerraform(this._matchingType),
      remove_matches_from_default_stream: cdktf.booleanToTerraform(this._removeMatchesFromDefaultStream),
      stream_id: cdktf.stringToTerraform(this._streamId),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creator_user_id: {
        value: cdktf.stringToHclTerraform(this._creatorUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      index_set_id: {
        value: cdktf.stringToHclTerraform(this._indexSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matching_type: {
        value: cdktf.stringToHclTerraform(this._matchingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_matches_from_default_stream: {
        value: cdktf.booleanToHclTerraform(this._removeMatchesFromDefaultStream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
