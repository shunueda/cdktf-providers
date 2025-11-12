// https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link#id IssueLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link#inward_key IssueLink#inward_key}
  */
  readonly inwardKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link#link_type IssueLink#link_type}
  */
  readonly linkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link#outward_key IssueLink#outward_key}
  */
  readonly outwardKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link jira_issue_link}
*/
export class IssueLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jira_issue_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueLink to import
  * @param importFromId The id of the existing IssueLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jira_issue_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_link jira_issue_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueLinkConfig
  */
  public constructor(scope: Construct, id: string, config: IssueLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'jira_issue_link',
      terraformGeneratorMetadata: {
        providerName: 'jira',
        providerVersion: '0.1.20',
        providerVersionConstraint: '0.1.20'
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
    this._inwardKey = config.inwardKey;
    this._linkType = config.linkType;
    this._outwardKey = config.outwardKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // inward_key - computed: false, optional: false, required: true
  private _inwardKey?: string; 
  public get inwardKey() {
    return this.getStringAttribute('inward_key');
  }
  public set inwardKey(value: string) {
    this._inwardKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inwardKeyInput() {
    return this._inwardKey;
  }

  // link_type - computed: false, optional: false, required: true
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // outward_key - computed: false, optional: false, required: true
  private _outwardKey?: string; 
  public get outwardKey() {
    return this.getStringAttribute('outward_key');
  }
  public set outwardKey(value: string) {
    this._outwardKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outwardKeyInput() {
    return this._outwardKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inward_key: cdktf.stringToTerraform(this._inwardKey),
      link_type: cdktf.stringToTerraform(this._linkType),
      outward_key: cdktf.stringToTerraform(this._outwardKey),
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
      inward_key: {
        value: cdktf.stringToHclTerraform(this._inwardKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outward_key: {
        value: cdktf.stringToHclTerraform(this._outwardKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
