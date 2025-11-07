// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAccessLayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to include a cleanup rule in the new layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#add_default_rule ManagementAccessLayer#add_default_rule}
  */
  readonly addDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Applications & URL Filtering blade on the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#applications_and_url_filtering ManagementAccessLayer#applications_and_url_filtering}
  */
  readonly applicationsAndUrlFiltering?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#color ManagementAccessLayer#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#comments ManagementAccessLayer#comments}
  */
  readonly comments?: string;
  /**
  * Whether to enable Content Awareness blade on the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#content_awareness ManagementAccessLayer#content_awareness}
  */
  readonly contentAwareness?: boolean | cdktf.IResolvable;
  /**
  * Whether to use X-Forward-For HTTP header, which is added by the  proxy server to keep track of the original source IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#detect_using_x_forward_for ManagementAccessLayer#detect_using_x_forward_for}
  */
  readonly detectUsingXForwardFor?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Firewall blade on the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#firewall ManagementAccessLayer#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#id ManagementAccessLayer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#ignore_errors ManagementAccessLayer#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#ignore_warnings ManagementAccessLayer#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The default "catch-all" action for traffic that does not match any explicit or implied rules in the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#implicit_cleanup_action ManagementAccessLayer#implicit_cleanup_action}
  */
  readonly implicitCleanupAction?: string;
  /**
  * Whether to enable Mobile Access blade on the layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#mobile_access ManagementAccessLayer#mobile_access}
  */
  readonly mobileAccess?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#name ManagementAccessLayer#name}
  */
  readonly name: string;
  /**
  * Whether this layer is shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#shared ManagementAccessLayer#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#tags ManagementAccessLayer#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer checkpoint_management_access_layer}
*/
export class ManagementAccessLayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_access_layer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAccessLayer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAccessLayer to import
  * @param importFromId The id of the existing ManagementAccessLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAccessLayer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_access_layer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_layer checkpoint_management_access_layer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAccessLayerConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAccessLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_access_layer',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addDefaultRule = config.addDefaultRule;
    this._applicationsAndUrlFiltering = config.applicationsAndUrlFiltering;
    this._color = config.color;
    this._comments = config.comments;
    this._contentAwareness = config.contentAwareness;
    this._detectUsingXForwardFor = config.detectUsingXForwardFor;
    this._firewall = config.firewall;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._implicitCleanupAction = config.implicitCleanupAction;
    this._mobileAccess = config.mobileAccess;
    this._name = config.name;
    this._shared = config.shared;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_default_rule - computed: false, optional: true, required: false
  private _addDefaultRule?: boolean | cdktf.IResolvable; 
  public get addDefaultRule() {
    return this.getBooleanAttribute('add_default_rule');
  }
  public set addDefaultRule(value: boolean | cdktf.IResolvable) {
    this._addDefaultRule = value;
  }
  public resetAddDefaultRule() {
    this._addDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDefaultRuleInput() {
    return this._addDefaultRule;
  }

  // applications_and_url_filtering - computed: false, optional: true, required: false
  private _applicationsAndUrlFiltering?: boolean | cdktf.IResolvable; 
  public get applicationsAndUrlFiltering() {
    return this.getBooleanAttribute('applications_and_url_filtering');
  }
  public set applicationsAndUrlFiltering(value: boolean | cdktf.IResolvable) {
    this._applicationsAndUrlFiltering = value;
  }
  public resetApplicationsAndUrlFiltering() {
    this._applicationsAndUrlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsAndUrlFilteringInput() {
    return this._applicationsAndUrlFiltering;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // content_awareness - computed: false, optional: true, required: false
  private _contentAwareness?: boolean | cdktf.IResolvable; 
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }
  public set contentAwareness(value: boolean | cdktf.IResolvable) {
    this._contentAwareness = value;
  }
  public resetContentAwareness() {
    this._contentAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAwarenessInput() {
    return this._contentAwareness;
  }

  // detect_using_x_forward_for - computed: false, optional: true, required: false
  private _detectUsingXForwardFor?: boolean | cdktf.IResolvable; 
  public get detectUsingXForwardFor() {
    return this.getBooleanAttribute('detect_using_x_forward_for');
  }
  public set detectUsingXForwardFor(value: boolean | cdktf.IResolvable) {
    this._detectUsingXForwardFor = value;
  }
  public resetDetectUsingXForwardFor() {
    this._detectUsingXForwardFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectUsingXForwardForInput() {
    return this._detectUsingXForwardFor;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // implicit_cleanup_action - computed: false, optional: true, required: false
  private _implicitCleanupAction?: string; 
  public get implicitCleanupAction() {
    return this.getStringAttribute('implicit_cleanup_action');
  }
  public set implicitCleanupAction(value: string) {
    this._implicitCleanupAction = value;
  }
  public resetImplicitCleanupAction() {
    this._implicitCleanupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitCleanupActionInput() {
    return this._implicitCleanupAction;
  }

  // mobile_access - computed: false, optional: true, required: false
  private _mobileAccess?: boolean | cdktf.IResolvable; 
  public get mobileAccess() {
    return this.getBooleanAttribute('mobile_access');
  }
  public set mobileAccess(value: boolean | cdktf.IResolvable) {
    this._mobileAccess = value;
  }
  public resetMobileAccess() {
    this._mobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAccessInput() {
    return this._mobileAccess;
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

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_default_rule: cdktf.booleanToTerraform(this._addDefaultRule),
      applications_and_url_filtering: cdktf.booleanToTerraform(this._applicationsAndUrlFiltering),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      content_awareness: cdktf.booleanToTerraform(this._contentAwareness),
      detect_using_x_forward_for: cdktf.booleanToTerraform(this._detectUsingXForwardFor),
      firewall: cdktf.booleanToTerraform(this._firewall),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      implicit_cleanup_action: cdktf.stringToTerraform(this._implicitCleanupAction),
      mobile_access: cdktf.booleanToTerraform(this._mobileAccess),
      name: cdktf.stringToTerraform(this._name),
      shared: cdktf.booleanToTerraform(this._shared),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_default_rule: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      applications_and_url_filtering: {
        value: cdktf.booleanToHclTerraform(this._applicationsAndUrlFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_awareness: {
        value: cdktf.booleanToHclTerraform(this._contentAwareness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_using_x_forward_for: {
        value: cdktf.booleanToHclTerraform(this._detectUsingXForwardFor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall: {
        value: cdktf.booleanToHclTerraform(this._firewall),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      implicit_cleanup_action: {
        value: cdktf.stringToHclTerraform(this._implicitCleanupAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_access: {
        value: cdktf.booleanToHclTerraform(this._mobileAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
