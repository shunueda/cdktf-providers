// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementPlatformConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#compartment_id FleetAppsManagementPlatformConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#defined_tags FleetAppsManagementPlatformConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#description FleetAppsManagementPlatformConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#freeform_tags FleetAppsManagementPlatformConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * config_category_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#config_category_details FleetAppsManagementPlatformConfiguration#config_category_details}
  */
  readonly configCategoryDetails: FleetAppsManagementPlatformConfigurationConfigCategoryDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#timeouts FleetAppsManagementPlatformConfiguration#timeouts}
  */
  readonly timeouts?: FleetAppsManagementPlatformConfigurationTimeouts;
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#display_name FleetAppsManagementPlatformConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#id FleetAppsManagementPlatformConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesOutputReference {
    return new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#components FleetAppsManagementPlatformConfiguration#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#sub_category FleetAppsManagementPlatformConfiguration#sub_category}
  */
  readonly subCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#versions FleetAppsManagementPlatformConfiguration#versions}
  */
  readonly versions?: string[];
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#credentials FleetAppsManagementPlatformConfiguration#credentials}
  */
  readonly credentials?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials[] | cdktf.IResolvable;
  /**
  * patch_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#patch_types FleetAppsManagementPlatformConfiguration#patch_types}
  */
  readonly patchTypes?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes[] | cdktf.IResolvable;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsOutputReference | FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    sub_category: cdktf.stringToTerraform(struct!.subCategory),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
    credentials: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsToTerraform, true)(struct!.credentials),
    patch_types: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesToTerraform, true)(struct!.patchTypes),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsOutputReference | FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_category: {
      value: cdktf.stringToHclTerraform(struct!.subCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credentials: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsList",
    },
    patch_types: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesToHclTerraform, true)(struct!.patchTypes),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._subCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.subCategory = this._subCategory;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._patchTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchTypes = this._patchTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._components = undefined;
      this._subCategory = undefined;
      this._versions = undefined;
      this._credentials.internalValue = undefined;
      this._patchTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._components = value.components;
      this._subCategory = value.subCategory;
      this._versions = value.versions;
      this._credentials.internalValue = value.credentials;
      this._patchTypes.internalValue = value.patchTypes;
    }
  }

  // components - computed: true, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // sub_category - computed: false, optional: false, required: true
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // patch_types - computed: false, optional: true, required: false
  private _patchTypes = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypesList(this, "patch_types", false);
  public get patchTypes() {
    return this._patchTypes;
  }
  public putPatchTypes(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsPatchTypes[] | cdktf.IResolvable) {
    this._patchTypes.internalValue = value;
  }
  public resetPatchTypes() {
    this._patchTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypesInput() {
    return this._patchTypes.internalValue;
  }
}
export interface FleetAppsManagementPlatformConfigurationConfigCategoryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#components FleetAppsManagementPlatformConfiguration#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#config_category FleetAppsManagementPlatformConfiguration#config_category}
  */
  readonly configCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#instance_id FleetAppsManagementPlatformConfiguration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#instance_name FleetAppsManagementPlatformConfiguration#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#versions FleetAppsManagementPlatformConfiguration#versions}
  */
  readonly versions?: string[];
  /**
  * compatible_products block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#compatible_products FleetAppsManagementPlatformConfiguration#compatible_products}
  */
  readonly compatibleProducts?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#credentials FleetAppsManagementPlatformConfiguration#credentials}
  */
  readonly credentials?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials[] | cdktf.IResolvable;
  /**
  * patch_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#patch_types FleetAppsManagementPlatformConfiguration#patch_types}
  */
  readonly patchTypes?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes[] | cdktf.IResolvable;
  /**
  * products block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#products FleetAppsManagementPlatformConfiguration#products}
  */
  readonly products?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts[] | cdktf.IResolvable;
  /**
  * sub_category_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#sub_category_details FleetAppsManagementPlatformConfiguration#sub_category_details}
  */
  readonly subCategoryDetails?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails;
}

export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsToTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsOutputReference | FleetAppsManagementPlatformConfigurationConfigCategoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    config_category: cdktf.stringToTerraform(struct!.configCategory),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
    compatible_products: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsToTerraform, true)(struct!.compatibleProducts),
    credentials: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsToTerraform, true)(struct!.credentials),
    patch_types: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesToTerraform, true)(struct!.patchTypes),
    products: cdktf.listMapper(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsToTerraform, true)(struct!.products),
    sub_category_details: fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsToTerraform(struct!.subCategoryDetails),
  }
}


export function fleetAppsManagementPlatformConfigurationConfigCategoryDetailsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsOutputReference | FleetAppsManagementPlatformConfigurationConfigCategoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_category: {
      value: cdktf.stringToHclTerraform(struct!.configCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compatible_products: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsToHclTerraform, true)(struct!.compatibleProducts),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsList",
    },
    credentials: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsList",
    },
    patch_types: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesToHclTerraform, true)(struct!.patchTypes),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesList",
    },
    products: {
      value: cdktf.listMapperHcl(fleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsToHclTerraform, true)(struct!.products),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsList",
    },
    sub_category_details: {
      value: fleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsToHclTerraform(struct!.subCategoryDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationConfigCategoryDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPlatformConfigurationConfigCategoryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._configCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.configCategory = this._configCategory;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    if (this._compatibleProducts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibleProducts = this._compatibleProducts?.internalValue;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._patchTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchTypes = this._patchTypes?.internalValue;
    }
    if (this._products?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products?.internalValue;
    }
    if (this._subCategoryDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subCategoryDetails = this._subCategoryDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._components = undefined;
      this._configCategory = undefined;
      this._instanceId = undefined;
      this._instanceName = undefined;
      this._versions = undefined;
      this._compatibleProducts.internalValue = undefined;
      this._credentials.internalValue = undefined;
      this._patchTypes.internalValue = undefined;
      this._products.internalValue = undefined;
      this._subCategoryDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._components = value.components;
      this._configCategory = value.configCategory;
      this._instanceId = value.instanceId;
      this._instanceName = value.instanceName;
      this._versions = value.versions;
      this._compatibleProducts.internalValue = value.compatibleProducts;
      this._credentials.internalValue = value.credentials;
      this._patchTypes.internalValue = value.patchTypes;
      this._products.internalValue = value.products;
      this._subCategoryDetails.internalValue = value.subCategoryDetails;
    }
  }

  // components - computed: true, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // config_category - computed: false, optional: false, required: true
  private _configCategory?: string; 
  public get configCategory() {
    return this.getStringAttribute('config_category');
  }
  public set configCategory(value: string) {
    this._configCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configCategoryInput() {
    return this._configCategory;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // compatible_products - computed: false, optional: true, required: false
  private _compatibleProducts = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProductsList(this, "compatible_products", false);
  public get compatibleProducts() {
    return this._compatibleProducts;
  }
  public putCompatibleProducts(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCompatibleProducts[] | cdktf.IResolvable) {
    this._compatibleProducts.internalValue = value;
  }
  public resetCompatibleProducts() {
    this._compatibleProducts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleProductsInput() {
    return this._compatibleProducts.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // patch_types - computed: false, optional: true, required: false
  private _patchTypes = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypesList(this, "patch_types", false);
  public get patchTypes() {
    return this._patchTypes;
  }
  public putPatchTypes(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsPatchTypes[] | cdktf.IResolvable) {
    this._patchTypes.internalValue = value;
  }
  public resetPatchTypes() {
    this._patchTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypesInput() {
    return this._patchTypes.internalValue;
  }

  // products - computed: false, optional: true, required: false
  private _products = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProductsList(this, "products", false);
  public get products() {
    return this._products;
  }
  public putProducts(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsProducts[] | cdktf.IResolvable) {
    this._products.internalValue = value;
  }
  public resetProducts() {
    this._products.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products.internalValue;
  }

  // sub_category_details - computed: false, optional: true, required: false
  private _subCategoryDetails = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetailsOutputReference(this, "sub_category_details");
  public get subCategoryDetails() {
    return this._subCategoryDetails;
  }
  public putSubCategoryDetails(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetailsSubCategoryDetails) {
    this._subCategoryDetails.internalValue = value;
  }
  public resetSubCategoryDetails() {
    this._subCategoryDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryDetailsInput() {
    return this._subCategoryDetails.internalValue;
  }
}
export interface FleetAppsManagementPlatformConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#create FleetAppsManagementPlatformConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#delete FleetAppsManagementPlatformConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#update FleetAppsManagementPlatformConfiguration#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementPlatformConfigurationTimeoutsToTerraform(struct?: FleetAppsManagementPlatformConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fleetAppsManagementPlatformConfigurationTimeoutsToHclTerraform(struct?: FleetAppsManagementPlatformConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPlatformConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementPlatformConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPlatformConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration oci_fleet_apps_management_platform_configuration}
*/
export class FleetAppsManagementPlatformConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_platform_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementPlatformConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementPlatformConfiguration to import
  * @param importFromId The id of the existing FleetAppsManagementPlatformConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementPlatformConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_platform_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/fleet_apps_management_platform_configuration oci_fleet_apps_management_platform_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementPlatformConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementPlatformConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_platform_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._configCategoryDetails.internalValue = config.configCategoryDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // config_category_details - computed: false, optional: false, required: true
  private _configCategoryDetails = new FleetAppsManagementPlatformConfigurationConfigCategoryDetailsOutputReference(this, "config_category_details");
  public get configCategoryDetails() {
    return this._configCategoryDetails;
  }
  public putConfigCategoryDetails(value: FleetAppsManagementPlatformConfigurationConfigCategoryDetails) {
    this._configCategoryDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configCategoryDetailsInput() {
    return this._configCategoryDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementPlatformConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementPlatformConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      config_category_details: fleetAppsManagementPlatformConfigurationConfigCategoryDetailsToTerraform(this._configCategoryDetails.internalValue),
      timeouts: fleetAppsManagementPlatformConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_category_details: {
        value: fleetAppsManagementPlatformConfigurationConfigCategoryDetailsToHclTerraform(this._configCategoryDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementPlatformConfigurationConfigCategoryDetailsList",
      },
      timeouts: {
        value: fleetAppsManagementPlatformConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementPlatformConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
