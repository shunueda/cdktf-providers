// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingSupportedcontentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#id ConversationsMessagingSupportedcontent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the supported content profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#name ConversationsMessagingSupportedcontent#name}
  */
  readonly name: string;
  /**
  * media_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#media_types ConversationsMessagingSupportedcontent#media_types}
  */
  readonly mediaTypes?: ConversationsMessagingSupportedcontentMediaTypes;
}
export interface ConversationsMessagingSupportedcontentMediaTypesAllowInbound {
  /**
  * The media type string as defined by RFC 2046. You can define specific types such as 'image/jpeg', 'video/mpeg', or specify wild cards for a range of types, 'image/*', or all types '* /*'. See https://www.iana.org/assignments/media-types/media-types.xhtml for a list of registered media types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#type ConversationsMessagingSupportedcontent#type}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly type?: string;
}

export function conversationsMessagingSupportedcontentMediaTypesAllowInboundToTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function conversationsMessagingSupportedcontentMediaTypesAllowInboundToHclTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ConversationsMessagingSupportedcontentMediaTypesAllowInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConversationsMessagingSupportedcontentMediaTypesAllowInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSupportedcontentMediaTypesAllowInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class ConversationsMessagingSupportedcontentMediaTypesAllowInboundList extends cdktf.ComplexList {
  public internalValue? : ConversationsMessagingSupportedcontentMediaTypesAllowInbound[] | cdktf.IResolvable

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
  public get(index: number): ConversationsMessagingSupportedcontentMediaTypesAllowInboundOutputReference {
    return new ConversationsMessagingSupportedcontentMediaTypesAllowInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConversationsMessagingSupportedcontentMediaTypesAllowOutbound {
  /**
  * The media type string as defined by RFC 2046. You can define specific types such as 'image/jpeg', 'video/mpeg', or specify wild cards for a range of types, 'image/*', or all types '* /*'. See https://www.iana.org/assignments/media-types/media-types.xhtml for a list of registered media types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#type ConversationsMessagingSupportedcontent#type}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly type?: string;
}

export function conversationsMessagingSupportedcontentMediaTypesAllowOutboundToTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function conversationsMessagingSupportedcontentMediaTypesAllowOutboundToHclTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ConversationsMessagingSupportedcontentMediaTypesAllowOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConversationsMessagingSupportedcontentMediaTypesAllowOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSupportedcontentMediaTypesAllowOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class ConversationsMessagingSupportedcontentMediaTypesAllowOutboundList extends cdktf.ComplexList {
  public internalValue? : ConversationsMessagingSupportedcontentMediaTypesAllowOutbound[] | cdktf.IResolvable

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
  public get(index: number): ConversationsMessagingSupportedcontentMediaTypesAllowOutboundOutputReference {
    return new ConversationsMessagingSupportedcontentMediaTypesAllowOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConversationsMessagingSupportedcontentMediaTypesAllow {
  /**
  * inbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#inbound ConversationsMessagingSupportedcontent#inbound}
  */
  readonly inbound?: ConversationsMessagingSupportedcontentMediaTypesAllowInbound[] | cdktf.IResolvable;
  /**
  * outbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#outbound ConversationsMessagingSupportedcontent#outbound}
  */
  readonly outbound?: ConversationsMessagingSupportedcontentMediaTypesAllowOutbound[] | cdktf.IResolvable;
}

export function conversationsMessagingSupportedcontentMediaTypesAllowToTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowOutputReference | ConversationsMessagingSupportedcontentMediaTypesAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.listMapper(conversationsMessagingSupportedcontentMediaTypesAllowInboundToTerraform, true)(struct!.inbound),
    outbound: cdktf.listMapper(conversationsMessagingSupportedcontentMediaTypesAllowOutboundToTerraform, true)(struct!.outbound),
  }
}


export function conversationsMessagingSupportedcontentMediaTypesAllowToHclTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesAllowOutputReference | ConversationsMessagingSupportedcontentMediaTypesAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.listMapperHcl(conversationsMessagingSupportedcontentMediaTypesAllowInboundToHclTerraform, true)(struct!.inbound),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSupportedcontentMediaTypesAllowInboundList",
    },
    outbound: {
      value: cdktf.listMapperHcl(conversationsMessagingSupportedcontentMediaTypesAllowOutboundToHclTerraform, true)(struct!.outbound),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSupportedcontentMediaTypesAllowOutboundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSupportedcontentMediaTypesAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSupportedcontentMediaTypesAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound?.internalValue;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSupportedcontentMediaTypesAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound.internalValue = undefined;
      this._outbound.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound.internalValue = value.inbound;
      this._outbound.internalValue = value.outbound;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new ConversationsMessagingSupportedcontentMediaTypesAllowInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: ConversationsMessagingSupportedcontentMediaTypesAllowInbound[] | cdktf.IResolvable) {
    this._inbound.internalValue = value;
  }
  public resetInbound() {
    this._inbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound.internalValue;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new ConversationsMessagingSupportedcontentMediaTypesAllowOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: ConversationsMessagingSupportedcontentMediaTypesAllowOutbound[] | cdktf.IResolvable) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }
}
export interface ConversationsMessagingSupportedcontentMediaTypes {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#allow ConversationsMessagingSupportedcontent#allow}
  */
  readonly allow?: ConversationsMessagingSupportedcontentMediaTypesAllow;
}

export function conversationsMessagingSupportedcontentMediaTypesToTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesOutputReference | ConversationsMessagingSupportedcontentMediaTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: conversationsMessagingSupportedcontentMediaTypesAllowToTerraform(struct!.allow),
  }
}


export function conversationsMessagingSupportedcontentMediaTypesToHclTerraform(struct?: ConversationsMessagingSupportedcontentMediaTypesOutputReference | ConversationsMessagingSupportedcontentMediaTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: conversationsMessagingSupportedcontentMediaTypesAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ConversationsMessagingSupportedcontentMediaTypesAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConversationsMessagingSupportedcontentMediaTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConversationsMessagingSupportedcontentMediaTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConversationsMessagingSupportedcontentMediaTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ConversationsMessagingSupportedcontentMediaTypesAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ConversationsMessagingSupportedcontentMediaTypesAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent genesyscloud_conversations_messaging_supportedcontent}
*/
export class ConversationsMessagingSupportedcontent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_supportedcontent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingSupportedcontent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingSupportedcontent to import
  * @param importFromId The id of the existing ConversationsMessagingSupportedcontent that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingSupportedcontent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_supportedcontent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/conversations_messaging_supportedcontent genesyscloud_conversations_messaging_supportedcontent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingSupportedcontentConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingSupportedcontentConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_supportedcontent',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._mediaTypes.internalValue = config.mediaTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // media_types - computed: false, optional: true, required: false
  private _mediaTypes = new ConversationsMessagingSupportedcontentMediaTypesOutputReference(this, "media_types");
  public get mediaTypes() {
    return this._mediaTypes;
  }
  public putMediaTypes(value: ConversationsMessagingSupportedcontentMediaTypes) {
    this._mediaTypes.internalValue = value;
  }
  public resetMediaTypes() {
    this._mediaTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypesInput() {
    return this._mediaTypes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      media_types: conversationsMessagingSupportedcontentMediaTypesToTerraform(this._mediaTypes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      media_types: {
        value: conversationsMessagingSupportedcontentMediaTypesToHclTerraform(this._mediaTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConversationsMessagingSupportedcontentMediaTypesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
