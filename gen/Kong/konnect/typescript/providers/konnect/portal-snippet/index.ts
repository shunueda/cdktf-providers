// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalSnippetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The renderable markdown content of a page in a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#content PortalSnippet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#description PortalSnippet#description}
  */
  readonly description?: string;
  /**
  * The unique name of a snippet in a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#name PortalSnippet#name}
  */
  readonly name: string;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#portal_id PortalSnippet#portal_id}
  */
  readonly portalId: string;
  /**
  * Whether the resource is visible on a given portal. Defaults to unpublished. must be one of ["published", "unpublished"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#status PortalSnippet#status}
  */
  readonly status?: string;
  /**
  * The display title of a snippet in a portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#title PortalSnippet#title}
  */
  readonly title?: string;
  /**
  * Whether a snippet is publicly accessible to non-authenticated users.
  * If not provided, the default_page_visibility value of the portal will be used.
  * must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#visibility PortalSnippet#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet konnect_portal_snippet}
*/
export class PortalSnippet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_snippet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalSnippet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalSnippet to import
  * @param importFromId The id of the existing PortalSnippet that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalSnippet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_snippet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_snippet konnect_portal_snippet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalSnippetConfig
  */
  public constructor(scope: Construct, id: string, config: PortalSnippetConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_snippet',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
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
    this._description = config.description;
    this._name = config.name;
    this._portalId = config.portalId;
    this._status = config.status;
    this._title = config.title;
    this._visibility = config.visibility;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // title - computed: true, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      portal_id: cdktf.stringToTerraform(this._portalId),
      status: cdktf.stringToTerraform(this._status),
      title: cdktf.stringToTerraform(this._title),
      visibility: cdktf.stringToTerraform(this._visibility),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
