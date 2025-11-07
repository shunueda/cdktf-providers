// https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HecTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * Metadata for the HEC token in the format: key::value, delimited by spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#_meta HecTokens#_meta}
  */
  readonly meta?: string;
  /**
  * Set of indexes allowed for events with this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#allowed_indexes HecTokens#allowed_indexes}
  */
  readonly allowedIndexes?: string[];
  /**
  * Index to store generated events. Must not be an empty string. If allowed_indexes is provided, default_index must be one of allowed_indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#default_index HecTokens#default_index}
  */
  readonly defaultIndex?: string;
  /**
  * Default source for events with this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#default_source HecTokens#default_source}
  */
  readonly defaultSource?: string;
  /**
  * Default sourcetype for events with this token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#default_sourcetype HecTokens#default_sourcetype}
  */
  readonly defaultSourcetype?: string;
  /**
  * Input disabled indicator: false = Input Not disabled, true = Input disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#disabled HecTokens#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#id HecTokens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the hec token to create. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete old hec token and recreate with new name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#name HecTokens#name}
  */
  readonly name: string;
  /**
  * Token value for sending data to collector/event endpoint. Can not be updated after creation, if changed in config file terraform will propose a replacement (delete old HEC and recreate with new token)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#token HecTokens#token}
  */
  readonly token?: string;
  /**
  * Indexer acknowledgement for this token: false = disabled, true = enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#use_ack HecTokens#use_ack}
  */
  readonly useAck?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens scp_hec_tokens}
*/
export class HecTokens extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_hec_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HecTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HecTokens to import
  * @param importFromId The id of the existing HecTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HecTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_hec_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.2.6/docs/resources/hec_tokens scp_hec_tokens} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HecTokensConfig
  */
  public constructor(scope: Construct, id: string, config: HecTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_hec_tokens',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._meta = config.meta;
    this._allowedIndexes = config.allowedIndexes;
    this._defaultIndex = config.defaultIndex;
    this._defaultSource = config.defaultSource;
    this._defaultSourcetype = config.defaultSourcetype;
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._token = config.token;
    this._useAck = config.useAck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _meta - computed: true, optional: true, required: false
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('_meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // allowed_indexes - computed: true, optional: true, required: false
  private _allowedIndexes?: string[]; 
  public get allowedIndexes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_indexes'));
  }
  public set allowedIndexes(value: string[]) {
    this._allowedIndexes = value;
  }
  public resetAllowedIndexes() {
    this._allowedIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIndexesInput() {
    return this._allowedIndexes;
  }

  // default_index - computed: true, optional: true, required: false
  private _defaultIndex?: string; 
  public get defaultIndex() {
    return this.getStringAttribute('default_index');
  }
  public set defaultIndex(value: string) {
    this._defaultIndex = value;
  }
  public resetDefaultIndex() {
    this._defaultIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIndexInput() {
    return this._defaultIndex;
  }

  // default_source - computed: false, optional: true, required: false
  private _defaultSource?: string; 
  public get defaultSource() {
    return this.getStringAttribute('default_source');
  }
  public set defaultSource(value: string) {
    this._defaultSource = value;
  }
  public resetDefaultSource() {
    this._defaultSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSourceInput() {
    return this._defaultSource;
  }

  // default_sourcetype - computed: false, optional: true, required: false
  private _defaultSourcetype?: string; 
  public get defaultSourcetype() {
    return this.getStringAttribute('default_sourcetype');
  }
  public set defaultSourcetype(value: string) {
    this._defaultSourcetype = value;
  }
  public resetDefaultSourcetype() {
    this._defaultSourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSourcetypeInput() {
    return this._defaultSourcetype;
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

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_ack - computed: true, optional: true, required: false
  private _useAck?: boolean | cdktf.IResolvable; 
  public get useAck() {
    return this.getBooleanAttribute('use_ack');
  }
  public set useAck(value: boolean | cdktf.IResolvable) {
    this._useAck = value;
  }
  public resetUseAck() {
    this._useAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAckInput() {
    return this._useAck;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _meta: cdktf.stringToTerraform(this._meta),
      allowed_indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIndexes),
      default_index: cdktf.stringToTerraform(this._defaultIndex),
      default_source: cdktf.stringToTerraform(this._defaultSource),
      default_sourcetype: cdktf.stringToTerraform(this._defaultSourcetype),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      token: cdktf.stringToTerraform(this._token),
      use_ack: cdktf.booleanToTerraform(this._useAck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _meta: {
        value: cdktf.stringToHclTerraform(this._meta),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIndexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_index: {
        value: cdktf.stringToHclTerraform(this._defaultIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_source: {
        value: cdktf.stringToHclTerraform(this._defaultSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_sourcetype: {
        value: cdktf.stringToHclTerraform(this._defaultSourcetype),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ack: {
        value: cdktf.booleanToHclTerraform(this._useAck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
