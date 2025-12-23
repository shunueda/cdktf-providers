// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcfIpsRuleFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name for the rule feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed#feed_name DcfIpsRuleFeed#feed_name}
  */
  readonly feedName: string;
  /**
  * IPS rule feed file content containing Suricata rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed#file_content DcfIpsRuleFeed#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed#id DcfIpsRuleFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed aviatrix_dcf_ips_rule_feed}
*/
export class DcfIpsRuleFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_dcf_ips_rule_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcfIpsRuleFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcfIpsRuleFeed to import
  * @param importFromId The id of the existing DcfIpsRuleFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcfIpsRuleFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_dcf_ips_rule_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_rule_feed aviatrix_dcf_ips_rule_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcfIpsRuleFeedConfig
  */
  public constructor(scope: Construct, id: string, config: DcfIpsRuleFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_dcf_ips_rule_feed',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feedName = config.feedName;
    this._fileContent = config.fileContent;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_hash - computed: true, optional: false, required: false
  public get contentHash() {
    return this.getStringAttribute('content_hash');
  }

  // feed_name - computed: false, optional: false, required: true
  private _feedName?: string; 
  public get feedName() {
    return this.getStringAttribute('feed_name');
  }
  public set feedName(value: string) {
    this._feedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedNameInput() {
    return this._feedName;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
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

  // ips_rules - computed: true, optional: false, required: false
  public get ipsRules() {
    return this.getListAttribute('ips_rules');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feed_name: cdktf.stringToTerraform(this._feedName),
      file_content: cdktf.stringToTerraform(this._fileContent),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feed_name: {
        value: cdktf.stringToHclTerraform(this._feedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_content: {
        value: cdktf.stringToHclTerraform(this._fileContent),
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
