// https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Distribution destinations for the permission (at least one required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#distribution_destinations PermissionTarget#distribution_destinations}
  */
  readonly distributionDestinations: PermissionTargetDistributionDestinations[] | cdktf.IResolvable;
  /**
  * Name of the permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#name PermissionTarget#name}
  */
  readonly name: string;
  /**
  * Principals for the permission (at least one user or group required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#principals PermissionTarget#principals}
  */
  readonly principals: PermissionTargetPrincipals;
  /**
  * Resource type for the permission (only 'destination' is allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#resource_type PermissionTarget#resource_type}
  */
  readonly resourceType: string;
}
export interface PermissionTargetDistributionDestinations {
  /**
  * City name for the distribution destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#city_name PermissionTarget#city_name}
  */
  readonly cityName: string;
  /**
  * Country codes for the distribution destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#country_codes PermissionTarget#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * Site name for the distribution destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#site_name PermissionTarget#site_name}
  */
  readonly siteName: string;
}

export function permissionTargetDistributionDestinationsToTerraform(struct?: PermissionTargetDistributionDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_name: cdktf.stringToTerraform(struct!.cityName),
    country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCodes),
    site_name: cdktf.stringToTerraform(struct!.siteName),
  }
}


export function permissionTargetDistributionDestinationsToHclTerraform(struct?: PermissionTargetDistributionDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city_name: {
      value: cdktf.stringToHclTerraform(struct!.cityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetDistributionDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionTargetDistributionDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityName = this._cityName;
    }
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetDistributionDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityName = undefined;
      this._countryCodes = undefined;
      this._siteName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityName = value.cityName;
      this._countryCodes = value.countryCodes;
      this._siteName = value.siteName;
    }
  }

  // city_name - computed: false, optional: false, required: true
  private _cityName?: string; 
  public get cityName() {
    return this.getStringAttribute('city_name');
  }
  public set cityName(value: string) {
    this._cityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityNameInput() {
    return this._cityName;
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }
}

export class PermissionTargetDistributionDestinationsList extends cdktf.ComplexList {
  public internalValue? : PermissionTargetDistributionDestinations[] | cdktf.IResolvable

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
  public get(index: number): PermissionTargetDistributionDestinationsOutputReference {
    return new PermissionTargetDistributionDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionTargetPrincipals {
  /**
  * Group principals for the permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#groups PermissionTarget#groups}
  */
  readonly groups?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * User principals for the permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#users PermissionTarget#users}
  */
  readonly users?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function permissionTargetPrincipalsToTerraform(struct?: PermissionTargetPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.groups),
    users: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.users),
  }
}


export function permissionTargetPrincipalsToHclTerraform(struct?: PermissionTargetPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.groups),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    users: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.users),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionTargetPrincipalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PermissionTargetPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionTargetPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._users = value.users;
    }
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get groups() {
    return this.interpolationForAttribute('groups');
  }
  public set groups(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // users - computed: true, optional: true, required: false
  private _users?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get users() {
    return this.interpolationForAttribute('users');
  }
  public set users(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target distribution_permission_target}
*/
export class PermissionTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "distribution_permission_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionTarget to import
  * @param importFromId The id of the existing PermissionTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "distribution_permission_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/permission_target distribution_permission_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionTargetConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'distribution_permission_target',
      terraformGeneratorMetadata: {
        providerName: 'distribution',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributionDestinations.internalValue = config.distributionDestinations;
    this._name = config.name;
    this._principals.internalValue = config.principals;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_destinations - computed: false, optional: false, required: true
  private _distributionDestinations = new PermissionTargetDistributionDestinationsList(this, "distribution_destinations", false);
  public get distributionDestinations() {
    return this._distributionDestinations;
  }
  public putDistributionDestinations(value: PermissionTargetDistributionDestinations[] | cdktf.IResolvable) {
    this._distributionDestinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionDestinationsInput() {
    return this._distributionDestinations.internalValue;
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

  // principals - computed: false, optional: false, required: true
  private _principals = new PermissionTargetPrincipalsOutputReference(this, "principals");
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: PermissionTargetPrincipals) {
    this._principals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_destinations: cdktf.listMapper(permissionTargetDistributionDestinationsToTerraform, false)(this._distributionDestinations.internalValue),
      name: cdktf.stringToTerraform(this._name),
      principals: permissionTargetPrincipalsToTerraform(this._principals.internalValue),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution_destinations: {
        value: cdktf.listMapperHcl(permissionTargetDistributionDestinationsToHclTerraform, false)(this._distributionDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PermissionTargetDistributionDestinationsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: permissionTargetPrincipalsToHclTerraform(this._principals.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PermissionTargetPrincipals",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
