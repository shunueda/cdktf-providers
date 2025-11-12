// https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentConfig extends cdktf.TerraformMetaArguments {
  /**
  * More detailed description for the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#description Component#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#id Component#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display Name for the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#name Component#name}
  */
  readonly name: string;
  /**
  * Should this component be shown component only if in degraded state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#only_show_if_degraded Component#only_show_if_degraded}
  */
  readonly onlyShowIfDegraded?: boolean | cdktf.IResolvable;
  /**
  * the ID of the page this component belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#page_id Component#page_id}
  */
  readonly pageId: string;
  /**
  * Should this component be showcased
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#showcase Component#showcase}
  */
  readonly showcase?: boolean | cdktf.IResolvable;
  /**
  * Status of component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#status Component#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component statuspage_component}
*/
export class Component extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuspage_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Component resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Component to import
  * @param importFromId The id of the existing Component that should be imported. Refer to the {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Component to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuspage_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component statuspage_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'statuspage_component',
      terraformGeneratorMetadata: {
        providerName: 'statuspage',
        providerVersion: '0.1.12',
        providerVersionConstraint: '0.1.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._onlyShowIfDegraded = config.onlyShowIfDegraded;
    this._pageId = config.pageId;
    this._showcase = config.showcase;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_email - computed: true, optional: false, required: false
  public get automationEmail() {
    return this.getStringAttribute('automation_email');
  }

  // description - computed: false, optional: true, required: false
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

  // only_show_if_degraded - computed: false, optional: true, required: false
  private _onlyShowIfDegraded?: boolean | cdktf.IResolvable; 
  public get onlyShowIfDegraded() {
    return this.getBooleanAttribute('only_show_if_degraded');
  }
  public set onlyShowIfDegraded(value: boolean | cdktf.IResolvable) {
    this._onlyShowIfDegraded = value;
  }
  public resetOnlyShowIfDegraded() {
    this._onlyShowIfDegraded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyShowIfDegradedInput() {
    return this._onlyShowIfDegraded;
  }

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // showcase - computed: false, optional: true, required: false
  private _showcase?: boolean | cdktf.IResolvable; 
  public get showcase() {
    return this.getBooleanAttribute('showcase');
  }
  public set showcase(value: boolean | cdktf.IResolvable) {
    this._showcase = value;
  }
  public resetShowcase() {
    this._showcase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showcaseInput() {
    return this._showcase;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      only_show_if_degraded: cdktf.booleanToTerraform(this._onlyShowIfDegraded),
      page_id: cdktf.stringToTerraform(this._pageId),
      showcase: cdktf.booleanToTerraform(this._showcase),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_show_if_degraded: {
        value: cdktf.booleanToHclTerraform(this._onlyShowIfDegraded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      page_id: {
        value: cdktf.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      showcase: {
        value: cdktf.booleanToHclTerraform(this._showcase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
