// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundContactListContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether or not the contact can be called. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#callable OutboundContactListContact#callable}
  */
  readonly callable?: boolean | cdktf.IResolvable;
  /**
  * Clear system data. True means the system columns (attempts, callable status, etc) stored on the contact will be cleared if the contact already exists; false means they won't.
  * Only applicable on the creation of a contact, so updating this field will force the contact to be deleted from the contact list and re-uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#clear_system_data OutboundContactListContact#clear_system_data}
  */
  readonly clearSystemData?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the contact list. This is usually a generated guid and not modifiable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#contact_id OutboundContactListContact#contact_id}
  */
  readonly contactId?: string;
  /**
  * The identifier of the contact list containing this contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#contact_list_id OutboundContactListContact#contact_list_id}
  */
  readonly contactListId: string;
  /**
  * An ordered map of the contact's columns and corresponding values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#data OutboundContactListContact#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Do not queue. True means that updated contacts will not have their positions in the queue altered, so contacts that have already been dialed will not be redialed.
  * For new contacts, this parameter has no effect; False means that updated contacts will be re-queued, according to the 'priority' parameter.
  * Only applicable on the creation of a contact, so updating this field will force the contact to be deleted from the contact list and re-uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#do_not_queue OutboundContactListContact#do_not_queue}
  */
  readonly doNotQueue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#id OutboundContactListContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Contact priority. True means the contact(s) will be dialed next; false means the contact will go to the end of the contact queue.
  * Only applicable on the creation of a contact, so updating this field will force the contact to be deleted from the contact list and re-uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#priority OutboundContactListContact#priority}
  */
  readonly priority?: boolean | cdktf.IResolvable;
  /**
  * contactable_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#contactable_status OutboundContactListContact#contactable_status}
  */
  readonly contactableStatus?: OutboundContactListContactContactableStatus[] | cdktf.IResolvable;
  /**
  * phone_number_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#phone_number_status OutboundContactListContact#phone_number_status}
  */
  readonly phoneNumberStatus?: OutboundContactListContactPhoneNumberStatus[] | cdktf.IResolvable;
}
export interface OutboundContactListContactContactableStatusColumnStatus {
  /**
  * The key which identifies the contact method column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#column OutboundContactListContact#column}
  */
  readonly column: string;
  /**
  * Indicates whether or not an individual contact method column is contactable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#contactable OutboundContactListContact#contactable}
  */
  readonly contactable: boolean | cdktf.IResolvable;
}

export function outboundContactListContactContactableStatusColumnStatusToTerraform(struct?: OutboundContactListContactContactableStatusColumnStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    contactable: cdktf.booleanToTerraform(struct!.contactable),
  }
}


export function outboundContactListContactContactableStatusColumnStatusToHclTerraform(struct?: OutboundContactListContactContactableStatusColumnStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contactable: {
      value: cdktf.booleanToHclTerraform(struct!.contactable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactListContactContactableStatusColumnStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListContactContactableStatusColumnStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._contactable !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactable = this._contactable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListContactContactableStatusColumnStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._contactable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._contactable = value.contactable;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // contactable - computed: false, optional: false, required: true
  private _contactable?: boolean | cdktf.IResolvable; 
  public get contactable() {
    return this.getBooleanAttribute('contactable');
  }
  public set contactable(value: boolean | cdktf.IResolvable) {
    this._contactable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactableInput() {
    return this._contactable;
  }
}

export class OutboundContactListContactContactableStatusColumnStatusList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListContactContactableStatusColumnStatus[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListContactContactableStatusColumnStatusOutputReference {
    return new OutboundContactListContactContactableStatusColumnStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundContactListContactContactableStatus {
  /**
  * Indicates whether or not the entire contact is contactable for the associated media type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#contactable OutboundContactListContact#contactable}
  */
  readonly contactable: boolean | cdktf.IResolvable;
  /**
  * The key which identifies the media type (Voice, SMS and Email).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#media_type OutboundContactListContact#media_type}
  */
  readonly mediaType: string;
  /**
  * column_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#column_status OutboundContactListContact#column_status}
  */
  readonly columnStatus?: OutboundContactListContactContactableStatusColumnStatus[] | cdktf.IResolvable;
}

export function outboundContactListContactContactableStatusToTerraform(struct?: OutboundContactListContactContactableStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contactable: cdktf.booleanToTerraform(struct!.contactable),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    column_status: cdktf.listMapper(outboundContactListContactContactableStatusColumnStatusToTerraform, true)(struct!.columnStatus),
  }
}


export function outboundContactListContactContactableStatusToHclTerraform(struct?: OutboundContactListContactContactableStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contactable: {
      value: cdktf.booleanToHclTerraform(struct!.contactable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_status: {
      value: cdktf.listMapperHcl(outboundContactListContactContactableStatusColumnStatusToHclTerraform, true)(struct!.columnStatus),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundContactListContactContactableStatusColumnStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactListContactContactableStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListContactContactableStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactable !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactable = this._contactable;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._columnStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnStatus = this._columnStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListContactContactableStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactable = undefined;
      this._mediaType = undefined;
      this._columnStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactable = value.contactable;
      this._mediaType = value.mediaType;
      this._columnStatus.internalValue = value.columnStatus;
    }
  }

  // contactable - computed: false, optional: false, required: true
  private _contactable?: boolean | cdktf.IResolvable; 
  public get contactable() {
    return this.getBooleanAttribute('contactable');
  }
  public set contactable(value: boolean | cdktf.IResolvable) {
    this._contactable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactableInput() {
    return this._contactable;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // column_status - computed: false, optional: true, required: false
  private _columnStatus = new OutboundContactListContactContactableStatusColumnStatusList(this, "column_status", true);
  public get columnStatus() {
    return this._columnStatus;
  }
  public putColumnStatus(value: OutboundContactListContactContactableStatusColumnStatus[] | cdktf.IResolvable) {
    this._columnStatus.internalValue = value;
  }
  public resetColumnStatus() {
    this._columnStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnStatusInput() {
    return this._columnStatus.internalValue;
  }
}

export class OutboundContactListContactContactableStatusList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListContactContactableStatus[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListContactContactableStatusOutputReference {
    return new OutboundContactListContactContactableStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundContactListContactPhoneNumberStatus {
  /**
  * Indicates whether or not a phone number is callable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#callable OutboundContactListContact#callable}
  */
  readonly callable: boolean | cdktf.IResolvable;
  /**
  * Phone number column identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#key OutboundContactListContact#key}
  */
  readonly key: string;
}

export function outboundContactListContactPhoneNumberStatusToTerraform(struct?: OutboundContactListContactPhoneNumberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callable: cdktf.booleanToTerraform(struct!.callable),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function outboundContactListContactPhoneNumberStatusToHclTerraform(struct?: OutboundContactListContactPhoneNumberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callable: {
      value: cdktf.booleanToHclTerraform(struct!.callable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactListContactPhoneNumberStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactListContactPhoneNumberStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callable !== undefined) {
      hasAnyValues = true;
      internalValueResult.callable = this._callable;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactListContactPhoneNumberStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callable = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callable = value.callable;
      this._key = value.key;
    }
  }

  // callable - computed: false, optional: false, required: true
  private _callable?: boolean | cdktf.IResolvable; 
  public get callable() {
    return this.getBooleanAttribute('callable');
  }
  public set callable(value: boolean | cdktf.IResolvable) {
    this._callable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callableInput() {
    return this._callable;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class OutboundContactListContactPhoneNumberStatusList extends cdktf.ComplexList {
  public internalValue? : OutboundContactListContactPhoneNumberStatus[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactListContactPhoneNumberStatusOutputReference {
    return new OutboundContactListContactPhoneNumberStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact genesyscloud_outbound_contact_list_contact}
*/
export class OutboundContactListContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_contact_list_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundContactListContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundContactListContact to import
  * @param importFromId The id of the existing OutboundContactListContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundContactListContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_contact_list_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contact_list_contact genesyscloud_outbound_contact_list_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundContactListContactConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundContactListContactConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_contact_list_contact',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callable = config.callable;
    this._clearSystemData = config.clearSystemData;
    this._contactId = config.contactId;
    this._contactListId = config.contactListId;
    this._data = config.data;
    this._doNotQueue = config.doNotQueue;
    this._id = config.id;
    this._priority = config.priority;
    this._contactableStatus.internalValue = config.contactableStatus;
    this._phoneNumberStatus.internalValue = config.phoneNumberStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callable - computed: false, optional: true, required: false
  private _callable?: boolean | cdktf.IResolvable; 
  public get callable() {
    return this.getBooleanAttribute('callable');
  }
  public set callable(value: boolean | cdktf.IResolvable) {
    this._callable = value;
  }
  public resetCallable() {
    this._callable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableInput() {
    return this._callable;
  }

  // clear_system_data - computed: false, optional: true, required: false
  private _clearSystemData?: boolean | cdktf.IResolvable; 
  public get clearSystemData() {
    return this.getBooleanAttribute('clear_system_data');
  }
  public set clearSystemData(value: boolean | cdktf.IResolvable) {
    this._clearSystemData = value;
  }
  public resetClearSystemData() {
    this._clearSystemData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSystemDataInput() {
    return this._clearSystemData;
  }

  // contact_id - computed: true, optional: true, required: false
  private _contactId?: string; 
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // contact_list_id - computed: false, optional: false, required: true
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // do_not_queue - computed: false, optional: true, required: false
  private _doNotQueue?: boolean | cdktf.IResolvable; 
  public get doNotQueue() {
    return this.getBooleanAttribute('do_not_queue');
  }
  public set doNotQueue(value: boolean | cdktf.IResolvable) {
    this._doNotQueue = value;
  }
  public resetDoNotQueue() {
    this._doNotQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotQueueInput() {
    return this._doNotQueue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: boolean | cdktf.IResolvable; 
  public get priority() {
    return this.getBooleanAttribute('priority');
  }
  public set priority(value: boolean | cdktf.IResolvable) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // contactable_status - computed: false, optional: true, required: false
  private _contactableStatus = new OutboundContactListContactContactableStatusList(this, "contactable_status", true);
  public get contactableStatus() {
    return this._contactableStatus;
  }
  public putContactableStatus(value: OutboundContactListContactContactableStatus[] | cdktf.IResolvable) {
    this._contactableStatus.internalValue = value;
  }
  public resetContactableStatus() {
    this._contactableStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactableStatusInput() {
    return this._contactableStatus.internalValue;
  }

  // phone_number_status - computed: false, optional: true, required: false
  private _phoneNumberStatus = new OutboundContactListContactPhoneNumberStatusList(this, "phone_number_status", true);
  public get phoneNumberStatus() {
    return this._phoneNumberStatus;
  }
  public putPhoneNumberStatus(value: OutboundContactListContactPhoneNumberStatus[] | cdktf.IResolvable) {
    this._phoneNumberStatus.internalValue = value;
  }
  public resetPhoneNumberStatus() {
    this._phoneNumberStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberStatusInput() {
    return this._phoneNumberStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callable: cdktf.booleanToTerraform(this._callable),
      clear_system_data: cdktf.booleanToTerraform(this._clearSystemData),
      contact_id: cdktf.stringToTerraform(this._contactId),
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      do_not_queue: cdktf.booleanToTerraform(this._doNotQueue),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.booleanToTerraform(this._priority),
      contactable_status: cdktf.listMapper(outboundContactListContactContactableStatusToTerraform, true)(this._contactableStatus.internalValue),
      phone_number_status: cdktf.listMapper(outboundContactListContactPhoneNumberStatusToTerraform, true)(this._phoneNumberStatus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callable: {
        value: cdktf.booleanToHclTerraform(this._callable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_system_data: {
        value: cdktf.booleanToHclTerraform(this._clearSystemData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact_id: {
        value: cdktf.stringToHclTerraform(this._contactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      do_not_queue: {
        value: cdktf.booleanToHclTerraform(this._doNotQueue),
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
      priority: {
        value: cdktf.booleanToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contactable_status: {
        value: cdktf.listMapperHcl(outboundContactListContactContactableStatusToHclTerraform, true)(this._contactableStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundContactListContactContactableStatusList",
      },
      phone_number_status: {
        value: cdktf.listMapperHcl(outboundContactListContactPhoneNumberStatusToHclTerraform, true)(this._phoneNumberStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundContactListContactPhoneNumberStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
