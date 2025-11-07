// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#content_id ContentPermission#content_id}
  */
  readonly contentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#id ContentPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#notification_message ContentPermission#notification_message}
  */
  readonly notificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#notify_recipient ContentPermission#notify_recipient}
  */
  readonly notifyRecipient: boolean | cdktf.IResolvable;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#permission ContentPermission#permission}
  */
  readonly permission: ContentPermissionPermission[] | cdktf.IResolvable;
}
export interface ContentPermissionPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#permission_name ContentPermission#permission_name}
  */
  readonly permissionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#source_id ContentPermission#source_id}
  */
  readonly sourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#source_type ContentPermission#source_type}
  */
  readonly sourceType: string;
}

export function contentPermissionPermissionToTerraform(struct?: ContentPermissionPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_name: cdktf.stringToTerraform(struct!.permissionName),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function contentPermissionPermissionToHclTerraform(struct?: ContentPermissionPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_name: {
      value: cdktf.stringToHclTerraform(struct!.permissionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContentPermissionPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContentPermissionPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionName = this._permissionName;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentPermissionPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissionName = undefined;
      this._sourceId = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissionName = value.permissionName;
      this._sourceId = value.sourceId;
      this._sourceType = value.sourceType;
    }
  }

  // permission_name - computed: false, optional: false, required: true
  private _permissionName?: string; 
  public get permissionName() {
    return this.getStringAttribute('permission_name');
  }
  public set permissionName(value: string) {
    this._permissionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionNameInput() {
    return this._permissionName;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

export class ContentPermissionPermissionList extends cdktf.ComplexList {
  public internalValue? : ContentPermissionPermission[] | cdktf.IResolvable

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
  public get(index: number): ContentPermissionPermissionOutputReference {
    return new ContentPermissionPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission sumologic_content_permission}
*/
export class ContentPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_content_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentPermission to import
  * @param importFromId The id of the existing ContentPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_content_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/content_permission sumologic_content_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ContentPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_content_permission',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentId = config.contentId;
    this._id = config.id;
    this._notificationMessage = config.notificationMessage;
    this._notifyRecipient = config.notifyRecipient;
    this._permission.internalValue = config.permission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_id - computed: false, optional: false, required: true
  private _contentId?: string; 
  public get contentId() {
    return this.getStringAttribute('content_id');
  }
  public set contentId(value: string) {
    this._contentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
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

  // notification_message - computed: false, optional: true, required: false
  private _notificationMessage?: string; 
  public get notificationMessage() {
    return this.getStringAttribute('notification_message');
  }
  public set notificationMessage(value: string) {
    this._notificationMessage = value;
  }
  public resetNotificationMessage() {
    this._notificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMessageInput() {
    return this._notificationMessage;
  }

  // notify_recipient - computed: false, optional: false, required: true
  private _notifyRecipient?: boolean | cdktf.IResolvable; 
  public get notifyRecipient() {
    return this.getBooleanAttribute('notify_recipient');
  }
  public set notifyRecipient(value: boolean | cdktf.IResolvable) {
    this._notifyRecipient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRecipientInput() {
    return this._notifyRecipient;
  }

  // permission - computed: false, optional: false, required: true
  private _permission = new ContentPermissionPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: ContentPermissionPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_id: cdktf.stringToTerraform(this._contentId),
      id: cdktf.stringToTerraform(this._id),
      notification_message: cdktf.stringToTerraform(this._notificationMessage),
      notify_recipient: cdktf.booleanToTerraform(this._notifyRecipient),
      permission: cdktf.listMapper(contentPermissionPermissionToTerraform, true)(this._permission.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_id: {
        value: cdktf.stringToHclTerraform(this._contentId),
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
      notification_message: {
        value: cdktf.stringToHclTerraform(this._notificationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_recipient: {
        value: cdktf.booleanToHclTerraform(this._notifyRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: cdktf.listMapperHcl(contentPermissionPermissionToHclTerraform, true)(this._permission.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContentPermissionPermissionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
