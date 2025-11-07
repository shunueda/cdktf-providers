// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#id UserAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#primary_email UserAttributes#primary_email}
  */
  readonly primaryEmail: string;
  /**
  * custom_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#custom_schema UserAttributes#custom_schema}
  */
  readonly customSchema?: UserAttributesCustomSchema[] | cdktf.IResolvable;
}
export interface UserAttributesCustomSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#name UserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#value UserAttributes#value}
  */
  readonly value: string;
}

export function userAttributesCustomSchemaToTerraform(struct?: UserAttributesCustomSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userAttributesCustomSchemaToHclTerraform(struct?: UserAttributesCustomSchema | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributesCustomSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAttributesCustomSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserAttributesCustomSchema | cdktf.IResolvable | undefined) {
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
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserAttributesCustomSchemaList extends cdktf.ComplexList {
  public internalValue? : UserAttributesCustomSchema[] | cdktf.IResolvable

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
  public get(index: number): UserAttributesCustomSchemaOutputReference {
    return new UserAttributesCustomSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes gsuite_user_attributes}
*/
export class UserAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite_user_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAttributes to import
  * @param importFromId The id of the existing UserAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite_user_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user_attributes gsuite_user_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: UserAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'gsuite_user_attributes',
      terraformGeneratorMetadata: {
        providerName: 'gsuite',
        providerVersion: '0.1.62'
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
    this._primaryEmail = config.primaryEmail;
    this._customSchema.internalValue = config.customSchema;
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

  // primary_email - computed: false, optional: false, required: true
  private _primaryEmail?: string; 
  public get primaryEmail() {
    return this.getStringAttribute('primary_email');
  }
  public set primaryEmail(value: string) {
    this._primaryEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // custom_schema - computed: false, optional: true, required: false
  private _customSchema = new UserAttributesCustomSchemaList(this, "custom_schema", false);
  public get customSchema() {
    return this._customSchema;
  }
  public putCustomSchema(value: UserAttributesCustomSchema[] | cdktf.IResolvable) {
    this._customSchema.internalValue = value;
  }
  public resetCustomSchema() {
    this._customSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSchemaInput() {
    return this._customSchema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      primary_email: cdktf.stringToTerraform(this._primaryEmail),
      custom_schema: cdktf.listMapper(userAttributesCustomSchemaToTerraform, true)(this._customSchema.internalValue),
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
      primary_email: {
        value: cdktf.stringToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_schema: {
        value: cdktf.listMapperHcl(userAttributesCustomSchemaToHclTerraform, true)(this._customSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAttributesCustomSchemaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
