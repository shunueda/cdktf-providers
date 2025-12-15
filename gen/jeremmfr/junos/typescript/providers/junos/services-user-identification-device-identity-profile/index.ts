// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesUserIdentificationDeviceIdentityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#domain ServicesUserIdentificationDeviceIdentityProfile#domain}
  */
  readonly domain: string;
  /**
  * End-user-profile profile-name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#name ServicesUserIdentificationDeviceIdentityProfile#name}
  */
  readonly name: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#attribute ServicesUserIdentificationDeviceIdentityProfile#attribute}
  */
  readonly attribute?: ServicesUserIdentificationDeviceIdentityProfileAttribute[] | cdktf.IResolvable;
}
export interface ServicesUserIdentificationDeviceIdentityProfileAttribute {
  /**
  * Attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#name ServicesUserIdentificationDeviceIdentityProfile#name}
  */
  readonly name: string;
  /**
  * A list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#value ServicesUserIdentificationDeviceIdentityProfile#value}
  */
  readonly value: string[];
}

export function servicesUserIdentificationDeviceIdentityProfileAttributeToTerraform(struct?: ServicesUserIdentificationDeviceIdentityProfileAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function servicesUserIdentificationDeviceIdentityProfileAttributeToHclTerraform(struct?: ServicesUserIdentificationDeviceIdentityProfileAttribute | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesUserIdentificationDeviceIdentityProfileAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesUserIdentificationDeviceIdentityProfileAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesUserIdentificationDeviceIdentityProfileAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServicesUserIdentificationDeviceIdentityProfileAttributeList extends cdktf.ComplexList {
  public internalValue? : ServicesUserIdentificationDeviceIdentityProfileAttribute[] | cdktf.IResolvable

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
  public get(index: number): ServicesUserIdentificationDeviceIdentityProfileAttributeOutputReference {
    return new ServicesUserIdentificationDeviceIdentityProfileAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile junos_services_user_identification_device_identity_profile}
*/
export class ServicesUserIdentificationDeviceIdentityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_user_identification_device_identity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesUserIdentificationDeviceIdentityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesUserIdentificationDeviceIdentityProfile to import
  * @param importFromId The id of the existing ServicesUserIdentificationDeviceIdentityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesUserIdentificationDeviceIdentityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_user_identification_device_identity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_user_identification_device_identity_profile junos_services_user_identification_device_identity_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesUserIdentificationDeviceIdentityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesUserIdentificationDeviceIdentityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_user_identification_device_identity_profile',
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
    this._domain = config.domain;
    this._name = config.name;
    this._attribute.internalValue = config.attribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // attribute - computed: false, optional: true, required: false
  private _attribute = new ServicesUserIdentificationDeviceIdentityProfileAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: ServicesUserIdentificationDeviceIdentityProfileAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
      attribute: cdktf.listMapper(servicesUserIdentificationDeviceIdentityProfileAttributeToTerraform, true)(this._attribute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      attribute: {
        value: cdktf.listMapperHcl(servicesUserIdentificationDeviceIdentityProfileAttributeToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesUserIdentificationDeviceIdentityProfileAttributeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
