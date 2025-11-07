// https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#display_name WorkspaceAccess#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#email_address WorkspaceAccess#email_address}
  */
  readonly emailAddress?: string;
  /**
  * User access level to workspace. Any value from `Admin`, `Contributor`, `Member`, `Viewer` or `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#group_user_access_right WorkspaceAccess#group_user_access_right}
  */
  readonly groupUserAccessRight: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#id WorkspaceAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#identifier WorkspaceAccess#identifier}
  */
  readonly identifier?: string;
  /**
  * The principal type. Any value from `App`, `Group` or `User`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#principal_type WorkspaceAccess#principal_type}
  */
  readonly principalType: string;
  /**
  * Workspace ID to which user access would be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#workspace_id WorkspaceAccess#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#timeouts WorkspaceAccess#timeouts}
  */
  readonly timeouts?: WorkspaceAccessTimeouts;
}
export interface WorkspaceAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#default WorkspaceAccess#default}
  */
  readonly default?: string;
}

export function workspaceAccessTimeoutsToTerraform(struct?: WorkspaceAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function workspaceAccessTimeoutsToHclTerraform(struct?: WorkspaceAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAccessTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAccessTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access powerbi_workspace_access}
*/
export class WorkspaceAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerbi_workspace_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceAccess to import
  * @param importFromId The id of the existing WorkspaceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerbi_workspace_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/workspace_access powerbi_workspace_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceAccessConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'powerbi_workspace_access',
      terraformGeneratorMetadata: {
        providerName: 'powerbi',
        providerVersion: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._emailAddress = config.emailAddress;
    this._groupUserAccessRight = config.groupUserAccessRight;
    this._id = config.id;
    this._identifier = config.identifier;
    this._principalType = config.principalType;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // group_user_access_right - computed: false, optional: false, required: true
  private _groupUserAccessRight?: string; 
  public get groupUserAccessRight() {
    return this.getStringAttribute('group_user_access_right');
  }
  public set groupUserAccessRight(value: string) {
    this._groupUserAccessRight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupUserAccessRightInput() {
    return this._groupUserAccessRight;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspaceAccessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspaceAccessTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      group_user_access_right: cdktf.stringToTerraform(this._groupUserAccessRight),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      principal_type: cdktf.stringToTerraform(this._principalType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: workspaceAccessTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_user_access_right: {
        value: cdktf.stringToHclTerraform(this._groupUserAccessRight),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: workspaceAccessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceAccessTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
