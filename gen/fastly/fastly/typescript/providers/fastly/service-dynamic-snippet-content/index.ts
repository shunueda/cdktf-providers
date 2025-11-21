// https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDynamicSnippetContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The VCL code that specifies exactly what the snippet does
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#content ServiceDynamicSnippetContent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#id ServiceDynamicSnippetContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to reapply changes if the state of the snippets drifts, i.e. if snippets are managed externally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#manage_snippets ServiceDynamicSnippetContent#manage_snippets}
  */
  readonly manageSnippets?: boolean | cdktf.IResolvable;
  /**
  * The ID of the service that the dynamic snippet belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#service_id ServiceDynamicSnippetContent#service_id}
  */
  readonly serviceId: string;
  /**
  * The ID of the dynamic snippet that the content belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#snippet_id ServiceDynamicSnippetContent#snippet_id}
  */
  readonly snippetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content fastly_service_dynamic_snippet_content}
*/
export class ServiceDynamicSnippetContent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_service_dynamic_snippet_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDynamicSnippetContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDynamicSnippetContent to import
  * @param importFromId The id of the existing ServiceDynamicSnippetContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDynamicSnippetContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_service_dynamic_snippet_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs/resources/service_dynamic_snippet_content fastly_service_dynamic_snippet_content} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDynamicSnippetContentConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDynamicSnippetContentConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_service_dynamic_snippet_content',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._id = config.id;
    this._manageSnippets = config.manageSnippets;
    this._serviceId = config.serviceId;
    this._snippetId = config.snippetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // manage_snippets - computed: false, optional: true, required: false
  private _manageSnippets?: boolean | cdktf.IResolvable; 
  public get manageSnippets() {
    return this.getBooleanAttribute('manage_snippets');
  }
  public set manageSnippets(value: boolean | cdktf.IResolvable) {
    this._manageSnippets = value;
  }
  public resetManageSnippets() {
    this._manageSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSnippetsInput() {
    return this._manageSnippets;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // snippet_id - computed: false, optional: false, required: true
  private _snippetId?: string; 
  public get snippetId() {
    return this.getStringAttribute('snippet_id');
  }
  public set snippetId(value: string) {
    this._snippetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetIdInput() {
    return this._snippetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
      manage_snippets: cdktf.booleanToTerraform(this._manageSnippets),
      service_id: cdktf.stringToTerraform(this._serviceId),
      snippet_id: cdktf.stringToTerraform(this._snippetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      manage_snippets: {
        value: cdktf.booleanToHclTerraform(this._manageSnippets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet_id: {
        value: cdktf.stringToHclTerraform(this._snippetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
