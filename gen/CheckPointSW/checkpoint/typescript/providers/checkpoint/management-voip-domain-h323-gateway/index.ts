// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVoipDomainH323GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#color ManagementVoipDomainH323Gateway#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#comments ManagementVoipDomainH323Gateway#comments}
  */
  readonly comments?: string;
  /**
  * The related endpoints domain to which the VoIP domain will connect.  Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#endpoints_domain ManagementVoipDomainH323Gateway#endpoints_domain}
  */
  readonly endpointsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#id ManagementVoipDomainH323Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#ignore_errors ManagementVoipDomainH323Gateway#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#ignore_warnings ManagementVoipDomainH323Gateway#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The machine the VoIP is installed at.  Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#installed_at ManagementVoipDomainH323Gateway#installed_at}
  */
  readonly installedAt?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#name ManagementVoipDomainH323Gateway#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#tags ManagementVoipDomainH323Gateway#tags}
  */
  readonly tags?: string[];
  /**
  * routing_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#routing_mode ManagementVoipDomainH323Gateway#routing_mode}
  */
  readonly routingMode?: ManagementVoipDomainH323GatewayRoutingMode;
}
export interface ManagementVoipDomainH323GatewayRoutingMode {
  /**
  * Indicates whether the routing mode includes call setup (Q.931).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#call_setup ManagementVoipDomainH323Gateway#call_setup}
  */
  readonly callSetup?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the routing mode includes both call setup (Q.931) and call control (H.245).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#call_setup_and_call_control ManagementVoipDomainH323Gateway#call_setup_and_call_control}
  */
  readonly callSetupAndCallControl?: boolean | cdktf.IResolvable;
}

export function managementVoipDomainH323GatewayRoutingModeToTerraform(struct?: ManagementVoipDomainH323GatewayRoutingModeOutputReference | ManagementVoipDomainH323GatewayRoutingMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_setup: cdktf.booleanToTerraform(struct!.callSetup),
    call_setup_and_call_control: cdktf.booleanToTerraform(struct!.callSetupAndCallControl),
  }
}


export function managementVoipDomainH323GatewayRoutingModeToHclTerraform(struct?: ManagementVoipDomainH323GatewayRoutingModeOutputReference | ManagementVoipDomainH323GatewayRoutingMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_setup: {
      value: cdktf.booleanToHclTerraform(struct!.callSetup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_setup_and_call_control: {
      value: cdktf.booleanToHclTerraform(struct!.callSetupAndCallControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVoipDomainH323GatewayRoutingModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVoipDomainH323GatewayRoutingMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callSetup !== undefined) {
      hasAnyValues = true;
      internalValueResult.callSetup = this._callSetup;
    }
    if (this._callSetupAndCallControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callSetupAndCallControl = this._callSetupAndCallControl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVoipDomainH323GatewayRoutingMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callSetup = undefined;
      this._callSetupAndCallControl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callSetup = value.callSetup;
      this._callSetupAndCallControl = value.callSetupAndCallControl;
    }
  }

  // call_setup - computed: false, optional: true, required: false
  private _callSetup?: boolean | cdktf.IResolvable; 
  public get callSetup() {
    return this.getBooleanAttribute('call_setup');
  }
  public set callSetup(value: boolean | cdktf.IResolvable) {
    this._callSetup = value;
  }
  public resetCallSetup() {
    this._callSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callSetupInput() {
    return this._callSetup;
  }

  // call_setup_and_call_control - computed: false, optional: true, required: false
  private _callSetupAndCallControl?: boolean | cdktf.IResolvable; 
  public get callSetupAndCallControl() {
    return this.getBooleanAttribute('call_setup_and_call_control');
  }
  public set callSetupAndCallControl(value: boolean | cdktf.IResolvable) {
    this._callSetupAndCallControl = value;
  }
  public resetCallSetupAndCallControl() {
    this._callSetupAndCallControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callSetupAndCallControlInput() {
    return this._callSetupAndCallControl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway checkpoint_management_voip_domain_h323_gateway}
*/
export class ManagementVoipDomainH323Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_voip_domain_h323_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVoipDomainH323Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVoipDomainH323Gateway to import
  * @param importFromId The id of the existing ManagementVoipDomainH323Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVoipDomainH323Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_voip_domain_h323_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_voip_domain_h323_gateway checkpoint_management_voip_domain_h323_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVoipDomainH323GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVoipDomainH323GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_voip_domain_h323_gateway',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._endpointsDomain = config.endpointsDomain;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._installedAt = config.installedAt;
    this._name = config.name;
    this._tags = config.tags;
    this._routingMode.internalValue = config.routingMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // endpoints_domain - computed: false, optional: true, required: false
  private _endpointsDomain?: string; 
  public get endpointsDomain() {
    return this.getStringAttribute('endpoints_domain');
  }
  public set endpointsDomain(value: string) {
    this._endpointsDomain = value;
  }
  public resetEndpointsDomain() {
    this._endpointsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsDomainInput() {
    return this._endpointsDomain;
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

  // installed_at - computed: false, optional: true, required: false
  private _installedAt?: string; 
  public get installedAt() {
    return this.getStringAttribute('installed_at');
  }
  public set installedAt(value: string) {
    this._installedAt = value;
  }
  public resetInstalledAt() {
    this._installedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installedAtInput() {
    return this._installedAt;
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

  // routing_mode - computed: false, optional: true, required: false
  private _routingMode = new ManagementVoipDomainH323GatewayRoutingModeOutputReference(this, "routing_mode");
  public get routingMode() {
    return this._routingMode;
  }
  public putRoutingMode(value: ManagementVoipDomainH323GatewayRoutingMode) {
    this._routingMode.internalValue = value;
  }
  public resetRoutingMode() {
    this._routingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      endpoints_domain: cdktf.stringToTerraform(this._endpointsDomain),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      installed_at: cdktf.stringToTerraform(this._installedAt),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      routing_mode: managementVoipDomainH323GatewayRoutingModeToTerraform(this._routingMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      endpoints_domain: {
        value: cdktf.stringToHclTerraform(this._endpointsDomain),
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
      installed_at: {
        value: cdktf.stringToHclTerraform(this._installedAt),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      routing_mode: {
        value: managementVoipDomainH323GatewayRoutingModeToHclTerraform(this._routingMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVoipDomainH323GatewayRoutingModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
