// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#compartment_id StackMonitoringConfig#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#config_type StackMonitoringConfig#config_type}
  */
  readonly configType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#defined_tags StackMonitoringConfig#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#display_name StackMonitoringConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#freeform_tags StackMonitoringConfig#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#id StackMonitoringConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#is_enabled StackMonitoringConfig#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#is_manually_onboarded StackMonitoringConfig#is_manually_onboarded}
  */
  readonly isManuallyOnboarded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#license StackMonitoringConfig#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#policy_names StackMonitoringConfig#policy_names}
  */
  readonly policyNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#resource_type StackMonitoringConfig#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#version StackMonitoringConfig#version}
  */
  readonly version?: string;
  /**
  * additional_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#additional_configurations StackMonitoringConfig#additional_configurations}
  */
  readonly additionalConfigurations?: StackMonitoringConfigAdditionalConfigurations;
  /**
  * dynamic_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#dynamic_groups StackMonitoringConfig#dynamic_groups}
  */
  readonly dynamicGroups?: StackMonitoringConfigDynamicGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#timeouts StackMonitoringConfig#timeouts}
  */
  readonly timeouts?: StackMonitoringConfigTimeouts;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#user_groups StackMonitoringConfig#user_groups}
  */
  readonly userGroups?: StackMonitoringConfigUserGroups[] | cdktf.IResolvable;
}
export interface StackMonitoringConfigAdditionalConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#properties_map StackMonitoringConfig#properties_map}
  */
  readonly propertiesMap?: { [key: string]: string };
}

export function stackMonitoringConfigAdditionalConfigurationsToTerraform(struct?: StackMonitoringConfigAdditionalConfigurationsOutputReference | StackMonitoringConfigAdditionalConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertiesMap),
  }
}


export function stackMonitoringConfigAdditionalConfigurationsToHclTerraform(struct?: StackMonitoringConfigAdditionalConfigurationsOutputReference | StackMonitoringConfigAdditionalConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.propertiesMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringConfigAdditionalConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringConfigAdditionalConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertiesMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesMap = this._propertiesMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringConfigAdditionalConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertiesMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertiesMap = value.propertiesMap;
    }
  }

  // properties_map - computed: false, optional: true, required: false
  private _propertiesMap?: { [key: string]: string }; 
  public get propertiesMap() {
    return this.getStringMapAttribute('properties_map');
  }
  public set propertiesMap(value: { [key: string]: string }) {
    this._propertiesMap = value;
  }
  public resetPropertiesMap() {
    this._propertiesMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesMapInput() {
    return this._propertiesMap;
  }
}
export interface StackMonitoringConfigDynamicGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#domain StackMonitoringConfig#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#name StackMonitoringConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#stack_monitoring_assignment StackMonitoringConfig#stack_monitoring_assignment}
  */
  readonly stackMonitoringAssignment?: string;
}

export function stackMonitoringConfigDynamicGroupsToTerraform(struct?: StackMonitoringConfigDynamicGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    stack_monitoring_assignment: cdktf.stringToTerraform(struct!.stackMonitoringAssignment),
  }
}


export function stackMonitoringConfigDynamicGroupsToHclTerraform(struct?: StackMonitoringConfigDynamicGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    stack_monitoring_assignment: {
      value: cdktf.stringToHclTerraform(struct!.stackMonitoringAssignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringConfigDynamicGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringConfigDynamicGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stackMonitoringAssignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackMonitoringAssignment = this._stackMonitoringAssignment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringConfigDynamicGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._stackMonitoringAssignment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._stackMonitoringAssignment = value.stackMonitoringAssignment;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // stack_monitoring_assignment - computed: false, optional: true, required: false
  private _stackMonitoringAssignment?: string; 
  public get stackMonitoringAssignment() {
    return this.getStringAttribute('stack_monitoring_assignment');
  }
  public set stackMonitoringAssignment(value: string) {
    this._stackMonitoringAssignment = value;
  }
  public resetStackMonitoringAssignment() {
    this._stackMonitoringAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackMonitoringAssignmentInput() {
    return this._stackMonitoringAssignment;
  }
}

export class StackMonitoringConfigDynamicGroupsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringConfigDynamicGroups[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringConfigDynamicGroupsOutputReference {
    return new StackMonitoringConfigDynamicGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#create StackMonitoringConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#delete StackMonitoringConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#update StackMonitoringConfig#update}
  */
  readonly update?: string;
}

export function stackMonitoringConfigTimeoutsToTerraform(struct?: StackMonitoringConfigTimeouts | cdktf.IResolvable): any {
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


export function stackMonitoringConfigTimeoutsToHclTerraform(struct?: StackMonitoringConfigTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackMonitoringConfigTimeouts | cdktf.IResolvable | undefined) {
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
export interface StackMonitoringConfigUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#domain StackMonitoringConfig#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#name StackMonitoringConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#stack_monitoring_role StackMonitoringConfig#stack_monitoring_role}
  */
  readonly stackMonitoringRole?: string;
}

export function stackMonitoringConfigUserGroupsToTerraform(struct?: StackMonitoringConfigUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    stack_monitoring_role: cdktf.stringToTerraform(struct!.stackMonitoringRole),
  }
}


export function stackMonitoringConfigUserGroupsToHclTerraform(struct?: StackMonitoringConfigUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    stack_monitoring_role: {
      value: cdktf.stringToHclTerraform(struct!.stackMonitoringRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringConfigUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringConfigUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stackMonitoringRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackMonitoringRole = this._stackMonitoringRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringConfigUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._stackMonitoringRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._stackMonitoringRole = value.stackMonitoringRole;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // stack_monitoring_role - computed: false, optional: true, required: false
  private _stackMonitoringRole?: string; 
  public get stackMonitoringRole() {
    return this.getStringAttribute('stack_monitoring_role');
  }
  public set stackMonitoringRole(value: string) {
    this._stackMonitoringRole = value;
  }
  public resetStackMonitoringRole() {
    this._stackMonitoringRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackMonitoringRoleInput() {
    return this._stackMonitoringRole;
  }
}

export class StackMonitoringConfigUserGroupsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringConfigUserGroups[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringConfigUserGroupsOutputReference {
    return new StackMonitoringConfigUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config oci_stack_monitoring_config}
*/
export class StackMonitoringConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringConfig to import
  * @param importFromId The id of the existing StackMonitoringConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_config oci_stack_monitoring_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringConfigConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_config',
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
    this._configType = config.configType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._isManuallyOnboarded = config.isManuallyOnboarded;
    this._license = config.license;
    this._policyNames = config.policyNames;
    this._resourceType = config.resourceType;
    this._version = config.version;
    this._additionalConfigurations.internalValue = config.additionalConfigurations;
    this._dynamicGroups.internalValue = config.dynamicGroups;
    this._timeouts.internalValue = config.timeouts;
    this._userGroups.internalValue = config.userGroups;
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

  // config_type - computed: false, optional: false, required: true
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_manually_onboarded - computed: false, optional: true, required: false
  private _isManuallyOnboarded?: boolean | cdktf.IResolvable; 
  public get isManuallyOnboarded() {
    return this.getBooleanAttribute('is_manually_onboarded');
  }
  public set isManuallyOnboarded(value: boolean | cdktf.IResolvable) {
    this._isManuallyOnboarded = value;
  }
  public resetIsManuallyOnboarded() {
    this._isManuallyOnboarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManuallyOnboardedInput() {
    return this._isManuallyOnboarded;
  }

  // license - computed: true, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // version - computed: false, optional: true, required: false
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

  // additional_configurations - computed: false, optional: true, required: false
  private _additionalConfigurations = new StackMonitoringConfigAdditionalConfigurationsOutputReference(this, "additional_configurations");
  public get additionalConfigurations() {
    return this._additionalConfigurations;
  }
  public putAdditionalConfigurations(value: StackMonitoringConfigAdditionalConfigurations) {
    this._additionalConfigurations.internalValue = value;
  }
  public resetAdditionalConfigurations() {
    this._additionalConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationsInput() {
    return this._additionalConfigurations.internalValue;
  }

  // dynamic_groups - computed: false, optional: true, required: false
  private _dynamicGroups = new StackMonitoringConfigDynamicGroupsList(this, "dynamic_groups", false);
  public get dynamicGroups() {
    return this._dynamicGroups;
  }
  public putDynamicGroups(value: StackMonitoringConfigDynamicGroups[] | cdktf.IResolvable) {
    this._dynamicGroups.internalValue = value;
  }
  public resetDynamicGroups() {
    this._dynamicGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicGroupsInput() {
    return this._dynamicGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new StackMonitoringConfigUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: StackMonitoringConfigUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      config_type: cdktf.stringToTerraform(this._configType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_manually_onboarded: cdktf.booleanToTerraform(this._isManuallyOnboarded),
      license: cdktf.stringToTerraform(this._license),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyNames),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      version: cdktf.stringToTerraform(this._version),
      additional_configurations: stackMonitoringConfigAdditionalConfigurationsToTerraform(this._additionalConfigurations.internalValue),
      dynamic_groups: cdktf.listMapper(stackMonitoringConfigDynamicGroupsToTerraform, true)(this._dynamicGroups.internalValue),
      timeouts: stackMonitoringConfigTimeoutsToTerraform(this._timeouts.internalValue),
      user_groups: cdktf.listMapper(stackMonitoringConfigUserGroupsToTerraform, true)(this._userGroups.internalValue),
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
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_manually_onboarded: {
        value: cdktf.booleanToHclTerraform(this._isManuallyOnboarded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
      additional_configurations: {
        value: stackMonitoringConfigAdditionalConfigurationsToHclTerraform(this._additionalConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringConfigAdditionalConfigurationsList",
      },
      dynamic_groups: {
        value: cdktf.listMapperHcl(stackMonitoringConfigDynamicGroupsToHclTerraform, true)(this._dynamicGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringConfigDynamicGroupsList",
      },
      timeouts: {
        value: stackMonitoringConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringConfigTimeouts",
      },
      user_groups: {
        value: cdktf.listMapperHcl(stackMonitoringConfigUserGroupsToHclTerraform, true)(this._userGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringConfigUserGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
