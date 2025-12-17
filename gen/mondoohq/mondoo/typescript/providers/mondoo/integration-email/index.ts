// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto close tickets (defaults to false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#auto_close IntegrationEmail#auto_close}
  */
  readonly autoClose?: boolean | cdktf.IResolvable;
  /**
  * Auto create tickets (defaults to false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#auto_create IntegrationEmail#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#name IntegrationEmail#name}
  */
  readonly name: string;
  /**
  * List of email recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#recipients IntegrationEmail#recipients}
  */
  readonly recipients: IntegrationEmailRecipients[] | cdktf.IResolvable;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#space_id IntegrationEmail#space_id}
  */
  readonly spaceId?: string;
}
export interface IntegrationEmailRecipients {
  /**
  * Recipient email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#email IntegrationEmail#email}
  */
  readonly email: string;
  /**
  * Mark this recipient as default. This must be set if auto_create is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#is_default IntegrationEmail#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Recipient name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#name IntegrationEmail#name}
  */
  readonly name: string;
  /**
  * Optional reference URL for the recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#reference_url IntegrationEmail#reference_url}
  */
  readonly referenceUrl?: string;
}

export function integrationEmailRecipientsToTerraform(struct?: IntegrationEmailRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    reference_url: cdktf.stringToTerraform(struct!.referenceUrl),
  }
}


export function integrationEmailRecipientsToHclTerraform(struct?: IntegrationEmailRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_url: {
      value: cdktf.stringToHclTerraform(struct!.referenceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationEmailRecipientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationEmailRecipients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._referenceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceUrl = this._referenceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationEmailRecipients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._referenceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._referenceUrl = value.referenceUrl;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // reference_url - computed: false, optional: true, required: false
  private _referenceUrl?: string; 
  public get referenceUrl() {
    return this.getStringAttribute('reference_url');
  }
  public set referenceUrl(value: string) {
    this._referenceUrl = value;
  }
  public resetReferenceUrl() {
    this._referenceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceUrlInput() {
    return this._referenceUrl;
  }
}

export class IntegrationEmailRecipientsList extends cdktf.ComplexList {
  public internalValue? : IntegrationEmailRecipients[] | cdktf.IResolvable

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
  public get(index: number): IntegrationEmailRecipientsOutputReference {
    return new IntegrationEmailRecipientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email mondoo_integration_email}
*/
export class IntegrationEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationEmail to import
  * @param importFromId The id of the existing IntegrationEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.2/docs/resources/integration_email mondoo_integration_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationEmailConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_email',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.2',
        providerVersionConstraint: '0.35.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoClose = config.autoClose;
    this._autoCreate = config.autoCreate;
    this._name = config.name;
    this._recipients.internalValue = config.recipients;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_close - computed: false, optional: true, required: false
  private _autoClose?: boolean | cdktf.IResolvable; 
  public get autoClose() {
    return this.getBooleanAttribute('auto_close');
  }
  public set autoClose(value: boolean | cdktf.IResolvable) {
    this._autoClose = value;
  }
  public resetAutoClose() {
    this._autoClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseInput() {
    return this._autoClose;
  }

  // auto_create - computed: false, optional: true, required: false
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // recipients - computed: false, optional: false, required: true
  private _recipients = new IntegrationEmailRecipientsList(this, "recipients", false);
  public get recipients() {
    return this._recipients;
  }
  public putRecipients(value: IntegrationEmailRecipients[] | cdktf.IResolvable) {
    this._recipients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients.internalValue;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_close: cdktf.booleanToTerraform(this._autoClose),
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      name: cdktf.stringToTerraform(this._name),
      recipients: cdktf.listMapper(integrationEmailRecipientsToTerraform, false)(this._recipients.internalValue),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_close: {
        value: cdktf.booleanToHclTerraform(this._autoClose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create: {
        value: cdktf.booleanToHclTerraform(this._autoCreate),
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
      recipients: {
        value: cdktf.listMapperHcl(integrationEmailRecipientsToHclTerraform, false)(this._recipients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationEmailRecipientsList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
