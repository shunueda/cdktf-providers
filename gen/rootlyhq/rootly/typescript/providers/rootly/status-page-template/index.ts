// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatusPageTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the event the template will populate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#body StatusPageTemplate#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#enabled StatusPageTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#id StatusPageTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of the status page template. Value must be one of `normal`, `scheduled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#kind StatusPageTemplate#kind}
  */
  readonly kind?: string;
  /**
  * Position of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#position StatusPageTemplate#position}
  */
  readonly position?: number;
  /**
  * Controls if incident subscribers should be notified. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#should_notify_subscribers StatusPageTemplate#should_notify_subscribers}
  */
  readonly shouldNotifySubscribers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#status_page_id StatusPageTemplate#status_page_id}
  */
  readonly statusPageId?: string;
  /**
  * Title of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#title StatusPageTemplate#title}
  */
  readonly title: string;
  /**
  * Status of the event the template will populate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#update_status StatusPageTemplate#update_status}
  */
  readonly updateStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template rootly_status_page_template}
*/
export class StatusPageTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_status_page_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatusPageTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPageTemplate to import
  * @param importFromId The id of the existing StatusPageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPageTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_status_page_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page_template rootly_status_page_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_status_page_template',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._enabled = config.enabled;
    this._id = config.id;
    this._kind = config.kind;
    this._position = config.position;
    this._shouldNotifySubscribers = config.shouldNotifySubscribers;
    this._statusPageId = config.statusPageId;
    this._title = config.title;
    this._updateStatus = config.updateStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // should_notify_subscribers - computed: true, optional: true, required: false
  private _shouldNotifySubscribers?: boolean | cdktf.IResolvable; 
  public get shouldNotifySubscribers() {
    return this.getBooleanAttribute('should_notify_subscribers');
  }
  public set shouldNotifySubscribers(value: boolean | cdktf.IResolvable) {
    this._shouldNotifySubscribers = value;
  }
  public resetShouldNotifySubscribers() {
    this._shouldNotifySubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotifySubscribersInput() {
    return this._shouldNotifySubscribers;
  }

  // status_page_id - computed: true, optional: true, required: false
  private _statusPageId?: string; 
  public get statusPageId() {
    return this.getStringAttribute('status_page_id');
  }
  public set statusPageId(value: string) {
    this._statusPageId = value;
  }
  public resetStatusPageId() {
    this._statusPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageIdInput() {
    return this._statusPageId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // update_status - computed: true, optional: true, required: false
  private _updateStatus?: string; 
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
  public set updateStatus(value: string) {
    this._updateStatus = value;
  }
  public resetUpdateStatus() {
    this._updateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStatusInput() {
    return this._updateStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      position: cdktf.numberToTerraform(this._position),
      should_notify_subscribers: cdktf.booleanToTerraform(this._shouldNotifySubscribers),
      status_page_id: cdktf.stringToTerraform(this._statusPageId),
      title: cdktf.stringToTerraform(this._title),
      update_status: cdktf.stringToTerraform(this._updateStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      should_notify_subscribers: {
        value: cdktf.booleanToHclTerraform(this._shouldNotifySubscribers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status_page_id: {
        value: cdktf.stringToHclTerraform(this._statusPageId),
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
      update_status: {
        value: cdktf.stringToHclTerraform(this._updateStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
