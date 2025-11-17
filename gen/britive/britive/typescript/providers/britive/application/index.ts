// https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Britive application type. Suppotted types 'Snowflake', 'Snowflake Standalone', 'GCP', 'GCP Standalone' and 'Google Workspace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#application_type Application#application_type}
  */
  readonly applicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Britive application version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#version Application#version}
  */
  readonly version?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#properties Application#properties}
  */
  readonly properties?: ApplicationProperties[] | cdktf.IResolvable;
  /**
  * sensitive_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#sensitive_properties Application#sensitive_properties}
  */
  readonly sensitiveProperties?: ApplicationSensitiveProperties[] | cdktf.IResolvable;
  /**
  * user_account_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#user_account_mappings Application#user_account_mappings}
  */
  readonly userAccountMappings?: ApplicationUserAccountMappings;
}
export interface ApplicationProperties {
  /**
  * Britive application property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Britive application property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationPropertiesToTerraform(struct?: ApplicationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationPropertiesToHclTerraform(struct?: ApplicationProperties | cdktf.IResolvable): any {
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

export class ApplicationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationProperties | cdktf.IResolvable | undefined) {
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

export class ApplicationPropertiesList extends cdktf.ComplexList {
  public internalValue? : ApplicationProperties[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPropertiesOutputReference {
    return new ApplicationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSensitiveProperties {
  /**
  * Britive application property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Britive application property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationSensitivePropertiesToTerraform(struct?: ApplicationSensitiveProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSensitivePropertiesToHclTerraform(struct?: ApplicationSensitiveProperties | cdktf.IResolvable): any {
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

export class ApplicationSensitivePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSensitiveProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSensitiveProperties | cdktf.IResolvable | undefined) {
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

export class ApplicationSensitivePropertiesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSensitiveProperties[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSensitivePropertiesOutputReference {
    return new ApplicationSensitivePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationUserAccountMappings {
  /**
  * Application user account description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#description Application#description}
  */
  readonly description: string;
  /**
  * Application user account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#name Application#name}
  */
  readonly name: string;
}

export function applicationUserAccountMappingsToTerraform(struct?: ApplicationUserAccountMappingsOutputReference | ApplicationUserAccountMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationUserAccountMappingsToHclTerraform(struct?: ApplicationUserAccountMappingsOutputReference | ApplicationUserAccountMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationUserAccountMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationUserAccountMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationUserAccountMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application britive_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/application britive_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_application',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.5',
        providerVersionConstraint: '2.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationType = config.applicationType;
    this._id = config.id;
    this._version = config.version;
    this._properties.internalValue = config.properties;
    this._sensitiveProperties.internalValue = config.sensitiveProperties;
    this._userAccountMappings.internalValue = config.userAccountMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: false, optional: false, required: true
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // catalog_app_id - computed: true, optional: false, required: false
  public get catalogAppId() {
    return this.getNumberAttribute('catalog_app_id');
  }

  // entity_root_environment_group_id - computed: true, optional: false, required: false
  public get entityRootEnvironmentGroupId() {
    return this.getStringAttribute('entity_root_environment_group_id');
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ApplicationPropertiesList(this, "properties", true);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ApplicationProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // sensitive_properties - computed: false, optional: true, required: false
  private _sensitiveProperties = new ApplicationSensitivePropertiesList(this, "sensitive_properties", true);
  public get sensitiveProperties() {
    return this._sensitiveProperties;
  }
  public putSensitiveProperties(value: ApplicationSensitiveProperties[] | cdktf.IResolvable) {
    this._sensitiveProperties.internalValue = value;
  }
  public resetSensitiveProperties() {
    this._sensitiveProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivePropertiesInput() {
    return this._sensitiveProperties.internalValue;
  }

  // user_account_mappings - computed: false, optional: true, required: false
  private _userAccountMappings = new ApplicationUserAccountMappingsOutputReference(this, "user_account_mappings");
  public get userAccountMappings() {
    return this._userAccountMappings;
  }
  public putUserAccountMappings(value: ApplicationUserAccountMappings) {
    this._userAccountMappings.internalValue = value;
  }
  public resetUserAccountMappings() {
    this._userAccountMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountMappingsInput() {
    return this._userAccountMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktf.stringToTerraform(this._applicationType),
      id: cdktf.stringToTerraform(this._id),
      version: cdktf.stringToTerraform(this._version),
      properties: cdktf.listMapper(applicationPropertiesToTerraform, true)(this._properties.internalValue),
      sensitive_properties: cdktf.listMapper(applicationSensitivePropertiesToTerraform, true)(this._sensitiveProperties.internalValue),
      user_account_mappings: applicationUserAccountMappingsToTerraform(this._userAccountMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.listMapperHcl(applicationPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationPropertiesList",
      },
      sensitive_properties: {
        value: cdktf.listMapperHcl(applicationSensitivePropertiesToHclTerraform, true)(this._sensitiveProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationSensitivePropertiesList",
      },
      user_account_mappings: {
        value: applicationUserAccountMappingsToHclTerraform(this._userAccountMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationUserAccountMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
