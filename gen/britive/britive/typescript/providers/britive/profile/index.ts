// https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identity of the Britive application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#app_container_id Profile#app_container_id}
  */
  readonly appContainerId: string;
  /**
  * The name of the Britive application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#app_name Profile#app_name}
  */
  readonly appName?: string;
  /**
  * The description of the Britive profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#description Profile#description}
  */
  readonly description?: string;
  /**
  * The destination url to redirect user after checkout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#destination_url Profile#destination_url}
  */
  readonly destinationUrl?: string;
  /**
  * To disable the Britive profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#disabled Profile#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The expiration time for the Britive profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#expiration_duration Profile#expiration_duration}
  */
  readonly expirationDuration: string;
  /**
  * The Boolean flag that indicates whether profile expiry is extendable or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#extendable Profile#extendable}
  */
  readonly extendable?: boolean | cdktf.IResolvable;
  /**
  * The profile expiry extension as a time value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#extension_duration Profile#extension_duration}
  */
  readonly extensionDuration?: string;
  /**
  * The repetition limit for extending the profile expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#extension_limit Profile#extension_limit}
  */
  readonly extensionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#id Profile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Britive profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#name Profile#name}
  */
  readonly name: string;
  /**
  * he profile expiry notification as a time value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#notification_prior_to_expiration Profile#notification_prior_to_expiration}
  */
  readonly notificationPriorToExpiration?: string;
  /**
  * associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#associations Profile#associations}
  */
  readonly associations: ProfileAssociations[] | cdktf.IResolvable;
}
export interface ProfileAssociations {
  /**
  * The parent name of the resource. Required only if the association type is ApplicationResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#parent_name Profile#parent_name}
  */
  readonly parentName?: string;
  /**
  * The type of association, should be one of [Environment, EnvironmentGroup, ApplicationResource]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#type Profile#type}
  */
  readonly type: string;
  /**
  * The association value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#value Profile#value}
  */
  readonly value: string;
}

export function profileAssociationsToTerraform(struct?: ProfileAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent_name: cdktf.stringToTerraform(struct!.parentName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function profileAssociationsToHclTerraform(struct?: ProfileAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent_name: {
      value: cdktf.stringToHclTerraform(struct!.parentName),
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

export class ProfileAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentName = this._parentName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parentName = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parentName = value.parentName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // parent_name - computed: false, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class ProfileAssociationsList extends cdktf.ComplexList {
  public internalValue? : ProfileAssociations[] | cdktf.IResolvable

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
  public get(index: number): ProfileAssociationsOutputReference {
    return new ProfileAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile britive_profile}
*/
export class Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Profile to import
  * @param importFromId The id of the existing Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.3/docs/resources/profile britive_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_profile',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appContainerId = config.appContainerId;
    this._appName = config.appName;
    this._description = config.description;
    this._destinationUrl = config.destinationUrl;
    this._disabled = config.disabled;
    this._expirationDuration = config.expirationDuration;
    this._extendable = config.extendable;
    this._extensionDuration = config.extensionDuration;
    this._extensionLimit = config.extensionLimit;
    this._id = config.id;
    this._name = config.name;
    this._notificationPriorToExpiration = config.notificationPriorToExpiration;
    this._associations.internalValue = config.associations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_container_id - computed: false, optional: false, required: true
  private _appContainerId?: string; 
  public get appContainerId() {
    return this.getStringAttribute('app_container_id');
  }
  public set appContainerId(value: string) {
    this._appContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appContainerIdInput() {
    return this._appContainerId;
  }

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

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

  // destination_url - computed: false, optional: true, required: false
  private _destinationUrl?: string; 
  public get destinationUrl() {
    return this.getStringAttribute('destination_url');
  }
  public set destinationUrl(value: string) {
    this._destinationUrl = value;
  }
  public resetDestinationUrl() {
    this._destinationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUrlInput() {
    return this._destinationUrl;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expiration_duration - computed: false, optional: false, required: true
  private _expirationDuration?: string; 
  public get expirationDuration() {
    return this.getStringAttribute('expiration_duration');
  }
  public set expirationDuration(value: string) {
    this._expirationDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDurationInput() {
    return this._expirationDuration;
  }

  // extendable - computed: false, optional: true, required: false
  private _extendable?: boolean | cdktf.IResolvable; 
  public get extendable() {
    return this.getBooleanAttribute('extendable');
  }
  public set extendable(value: boolean | cdktf.IResolvable) {
    this._extendable = value;
  }
  public resetExtendable() {
    this._extendable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendableInput() {
    return this._extendable;
  }

  // extension_duration - computed: false, optional: true, required: false
  private _extensionDuration?: string; 
  public get extensionDuration() {
    return this.getStringAttribute('extension_duration');
  }
  public set extensionDuration(value: string) {
    this._extensionDuration = value;
  }
  public resetExtensionDuration() {
    this._extensionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionDurationInput() {
    return this._extensionDuration;
  }

  // extension_limit - computed: false, optional: true, required: false
  private _extensionLimit?: number; 
  public get extensionLimit() {
    return this.getNumberAttribute('extension_limit');
  }
  public set extensionLimit(value: number) {
    this._extensionLimit = value;
  }
  public resetExtensionLimit() {
    this._extensionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionLimitInput() {
    return this._extensionLimit;
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

  // notification_prior_to_expiration - computed: false, optional: true, required: false
  private _notificationPriorToExpiration?: string; 
  public get notificationPriorToExpiration() {
    return this.getStringAttribute('notification_prior_to_expiration');
  }
  public set notificationPriorToExpiration(value: string) {
    this._notificationPriorToExpiration = value;
  }
  public resetNotificationPriorToExpiration() {
    this._notificationPriorToExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPriorToExpirationInput() {
    return this._notificationPriorToExpiration;
  }

  // associations - computed: false, optional: false, required: true
  private _associations = new ProfileAssociationsList(this, "associations", true);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: ProfileAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_container_id: cdktf.stringToTerraform(this._appContainerId),
      app_name: cdktf.stringToTerraform(this._appName),
      description: cdktf.stringToTerraform(this._description),
      destination_url: cdktf.stringToTerraform(this._destinationUrl),
      disabled: cdktf.booleanToTerraform(this._disabled),
      expiration_duration: cdktf.stringToTerraform(this._expirationDuration),
      extendable: cdktf.booleanToTerraform(this._extendable),
      extension_duration: cdktf.stringToTerraform(this._extensionDuration),
      extension_limit: cdktf.numberToTerraform(this._extensionLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_prior_to_expiration: cdktf.stringToTerraform(this._notificationPriorToExpiration),
      associations: cdktf.listMapper(profileAssociationsToTerraform, true)(this._associations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_container_id: {
        value: cdktf.stringToHclTerraform(this._appContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_url: {
        value: cdktf.stringToHclTerraform(this._destinationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration_duration: {
        value: cdktf.stringToHclTerraform(this._expirationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extendable: {
        value: cdktf.booleanToHclTerraform(this._extendable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_duration: {
        value: cdktf.stringToHclTerraform(this._extensionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_limit: {
        value: cdktf.numberToHclTerraform(this._extensionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      notification_prior_to_expiration: {
        value: cdktf.stringToHclTerraform(this._notificationPriorToExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associations: {
        value: cdktf.listMapperHcl(profileAssociationsToHclTerraform, true)(this._associations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProfileAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
