// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#email_username EmailIntegration#email_username}
  */
  readonly emailUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#enabled EmailIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#id EmailIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#ignore_responders_from_payload EmailIntegration#ignore_responders_from_payload}
  */
  readonly ignoreRespondersFromPayload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#name EmailIntegration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#owner_team_id EmailIntegration#owner_team_id}
  */
  readonly ownerTeamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#suppress_notifications EmailIntegration#suppress_notifications}
  */
  readonly suppressNotifications?: boolean | cdktf.IResolvable;
  /**
  * responders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#responders EmailIntegration#responders}
  */
  readonly responders?: EmailIntegrationResponders[] | cdktf.IResolvable;
}
export interface EmailIntegrationResponders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#id EmailIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#type EmailIntegration#type}
  */
  readonly type?: string;
}

export function emailIntegrationRespondersToTerraform(struct?: EmailIntegrationResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function emailIntegrationRespondersToHclTerraform(struct?: EmailIntegrationResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailIntegrationRespondersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EmailIntegrationResponders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailIntegrationResponders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EmailIntegrationRespondersList extends cdktf.ComplexList {
  public internalValue? : EmailIntegrationResponders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EmailIntegrationRespondersOutputReference {
    return new EmailIntegrationRespondersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration opsgenie_email_integration}
*/
export class EmailIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_email_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailIntegration to import
  * @param importFromId The id of the existing EmailIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_email_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/email_integration opsgenie_email_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: EmailIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_email_integration',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40',
        providerVersionConstraint: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailUsername = config.emailUsername;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ignoreRespondersFromPayload = config.ignoreRespondersFromPayload;
    this._name = config.name;
    this._ownerTeamId = config.ownerTeamId;
    this._suppressNotifications = config.suppressNotifications;
    this._responders.internalValue = config.responders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_username - computed: false, optional: false, required: true
  private _emailUsername?: string; 
  public get emailUsername() {
    return this.getStringAttribute('email_username');
  }
  public set emailUsername(value: string) {
    this._emailUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUsernameInput() {
    return this._emailUsername;
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

  // ignore_responders_from_payload - computed: false, optional: true, required: false
  private _ignoreRespondersFromPayload?: boolean | cdktf.IResolvable; 
  public get ignoreRespondersFromPayload() {
    return this.getBooleanAttribute('ignore_responders_from_payload');
  }
  public set ignoreRespondersFromPayload(value: boolean | cdktf.IResolvable) {
    this._ignoreRespondersFromPayload = value;
  }
  public resetIgnoreRespondersFromPayload() {
    this._ignoreRespondersFromPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRespondersFromPayloadInput() {
    return this._ignoreRespondersFromPayload;
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

  // owner_team_id - computed: false, optional: true, required: false
  private _ownerTeamId?: string; 
  public get ownerTeamId() {
    return this.getStringAttribute('owner_team_id');
  }
  public set ownerTeamId(value: string) {
    this._ownerTeamId = value;
  }
  public resetOwnerTeamId() {
    this._ownerTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTeamIdInput() {
    return this._ownerTeamId;
  }

  // suppress_notifications - computed: false, optional: true, required: false
  private _suppressNotifications?: boolean | cdktf.IResolvable; 
  public get suppressNotifications() {
    return this.getBooleanAttribute('suppress_notifications');
  }
  public set suppressNotifications(value: boolean | cdktf.IResolvable) {
    this._suppressNotifications = value;
  }
  public resetSuppressNotifications() {
    this._suppressNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNotificationsInput() {
    return this._suppressNotifications;
  }

  // responders - computed: false, optional: true, required: false
  private _responders = new EmailIntegrationRespondersList(this, "responders", false);
  public get responders() {
    return this._responders;
  }
  public putResponders(value: EmailIntegrationResponders[] | cdktf.IResolvable) {
    this._responders.internalValue = value;
  }
  public resetResponders() {
    this._responders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondersInput() {
    return this._responders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_username: cdktf.stringToTerraform(this._emailUsername),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_responders_from_payload: cdktf.booleanToTerraform(this._ignoreRespondersFromPayload),
      name: cdktf.stringToTerraform(this._name),
      owner_team_id: cdktf.stringToTerraform(this._ownerTeamId),
      suppress_notifications: cdktf.booleanToTerraform(this._suppressNotifications),
      responders: cdktf.listMapper(emailIntegrationRespondersToTerraform, true)(this._responders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_username: {
        value: cdktf.stringToHclTerraform(this._emailUsername),
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
      ignore_responders_from_payload: {
        value: cdktf.booleanToHclTerraform(this._ignoreRespondersFromPayload),
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
      owner_team_id: {
        value: cdktf.stringToHclTerraform(this._ownerTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_notifications: {
        value: cdktf.booleanToHclTerraform(this._suppressNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      responders: {
        value: cdktf.listMapperHcl(emailIntegrationRespondersToHclTerraform, true)(this._responders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailIntegrationRespondersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
