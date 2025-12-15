// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityDynamicAddressNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of dynamic address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#description SecurityDynamicAddressName#description}
  */
  readonly description?: string;
  /**
  * Security dynamic address name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#name SecurityDynamicAddressName#name}
  */
  readonly name: string;
  /**
  * Name of feed in feed-server for this dynamic address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#profile_feed_name SecurityDynamicAddressName#profile_feed_name}
  */
  readonly profileFeedName?: string;
  /**
  * Trigger session scan when the IP address is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#session_scan SecurityDynamicAddressName#session_scan}
  */
  readonly sessionScan?: boolean | cdktf.IResolvable;
  /**
  * profile_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#profile_category SecurityDynamicAddressName#profile_category}
  */
  readonly profileCategory?: SecurityDynamicAddressNameProfileCategory;
}
export interface SecurityDynamicAddressNameProfileCategoryProperty {
  /**
  * Name of property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#name SecurityDynamicAddressName#name}
  */
  readonly name: string;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#string SecurityDynamicAddressName#string}
  */
  readonly string: string[];
}

export function securityDynamicAddressNameProfileCategoryPropertyToTerraform(struct?: SecurityDynamicAddressNameProfileCategoryProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.string),
  }
}


export function securityDynamicAddressNameProfileCategoryPropertyToHclTerraform(struct?: SecurityDynamicAddressNameProfileCategoryProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.string),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDynamicAddressNameProfileCategoryPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityDynamicAddressNameProfileCategoryProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDynamicAddressNameProfileCategoryProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._string = value.string;
    }
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

  // string - computed: false, optional: false, required: true
  private _string?: string[]; 
  public get string() {
    return this.getListAttribute('string');
  }
  public set string(value: string[]) {
    this._string = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class SecurityDynamicAddressNameProfileCategoryPropertyList extends cdktf.ComplexList {
  public internalValue? : SecurityDynamicAddressNameProfileCategoryProperty[] | cdktf.IResolvable

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
  public get(index: number): SecurityDynamicAddressNameProfileCategoryPropertyOutputReference {
    return new SecurityDynamicAddressNameProfileCategoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityDynamicAddressNameProfileCategory {
  /**
  * Name of feed under category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#feed SecurityDynamicAddressName#feed}
  */
  readonly feed?: string;
  /**
  * Name of category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#name SecurityDynamicAddressName#name}
  */
  readonly name?: string;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#property SecurityDynamicAddressName#property}
  */
  readonly property?: SecurityDynamicAddressNameProfileCategoryProperty[] | cdktf.IResolvable;
}

export function securityDynamicAddressNameProfileCategoryToTerraform(struct?: SecurityDynamicAddressNameProfileCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed: cdktf.stringToTerraform(struct!.feed),
    name: cdktf.stringToTerraform(struct!.name),
    property: cdktf.listMapper(securityDynamicAddressNameProfileCategoryPropertyToTerraform, true)(struct!.property),
  }
}


export function securityDynamicAddressNameProfileCategoryToHclTerraform(struct?: SecurityDynamicAddressNameProfileCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feed: {
      value: cdktf.stringToHclTerraform(struct!.feed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.listMapperHcl(securityDynamicAddressNameProfileCategoryPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityDynamicAddressNameProfileCategoryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityDynamicAddressNameProfileCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityDynamicAddressNameProfileCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feed !== undefined) {
      hasAnyValues = true;
      internalValueResult.feed = this._feed;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDynamicAddressNameProfileCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feed = undefined;
      this._name = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feed = value.feed;
      this._name = value.name;
      this._property.internalValue = value.property;
    }
  }

  // feed - computed: false, optional: true, required: false
  private _feed?: string; 
  public get feed() {
    return this.getStringAttribute('feed');
  }
  public set feed(value: string) {
    this._feed = value;
  }
  public resetFeed() {
    this._feed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedInput() {
    return this._feed;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // property - computed: false, optional: true, required: false
  private _property = new SecurityDynamicAddressNameProfileCategoryPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: SecurityDynamicAddressNameProfileCategoryProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name junos_security_dynamic_address_name}
*/
export class SecurityDynamicAddressName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_dynamic_address_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityDynamicAddressName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityDynamicAddressName to import
  * @param importFromId The id of the existing SecurityDynamicAddressName that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityDynamicAddressName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_dynamic_address_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_dynamic_address_name junos_security_dynamic_address_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityDynamicAddressNameConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityDynamicAddressNameConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_dynamic_address_name',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._name = config.name;
    this._profileFeedName = config.profileFeedName;
    this._sessionScan = config.sessionScan;
    this._profileCategory.internalValue = config.profileCategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // profile_feed_name - computed: false, optional: true, required: false
  private _profileFeedName?: string; 
  public get profileFeedName() {
    return this.getStringAttribute('profile_feed_name');
  }
  public set profileFeedName(value: string) {
    this._profileFeedName = value;
  }
  public resetProfileFeedName() {
    this._profileFeedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileFeedNameInput() {
    return this._profileFeedName;
  }

  // session_scan - computed: false, optional: true, required: false
  private _sessionScan?: boolean | cdktf.IResolvable; 
  public get sessionScan() {
    return this.getBooleanAttribute('session_scan');
  }
  public set sessionScan(value: boolean | cdktf.IResolvable) {
    this._sessionScan = value;
  }
  public resetSessionScan() {
    this._sessionScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionScanInput() {
    return this._sessionScan;
  }

  // profile_category - computed: false, optional: true, required: false
  private _profileCategory = new SecurityDynamicAddressNameProfileCategoryOutputReference(this, "profile_category");
  public get profileCategory() {
    return this._profileCategory;
  }
  public putProfileCategory(value: SecurityDynamicAddressNameProfileCategory) {
    this._profileCategory.internalValue = value;
  }
  public resetProfileCategory() {
    this._profileCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileCategoryInput() {
    return this._profileCategory.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      profile_feed_name: cdktf.stringToTerraform(this._profileFeedName),
      session_scan: cdktf.booleanToTerraform(this._sessionScan),
      profile_category: securityDynamicAddressNameProfileCategoryToTerraform(this._profileCategory.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_feed_name: {
        value: cdktf.stringToHclTerraform(this._profileFeedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_scan: {
        value: cdktf.booleanToHclTerraform(this._sessionScan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_category: {
        value: securityDynamicAddressNameProfileCategoryToHclTerraform(this._profileCategory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityDynamicAddressNameProfileCategory",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
