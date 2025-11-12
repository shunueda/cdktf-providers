// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformMonitoredServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#id PlatformMonitoredService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#identifier PlatformMonitoredService#identifier}
  */
  readonly identifier: string;
  /**
  * Identifier of the organization in which the monitored service is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#org_id PlatformMonitoredService#org_id}
  */
  readonly orgId: string;
  /**
  * Identifier of the project in which the monitored service is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#project_id PlatformMonitoredService#project_id}
  */
  readonly projectId: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#request PlatformMonitoredService#request}
  */
  readonly request?: PlatformMonitoredServiceRequest;
}
export interface PlatformMonitoredServiceRequestChangeSources {
  /**
  * Category of the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#category PlatformMonitoredService#category}
  */
  readonly category: string;
  /**
  * Enable or disable the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#enabled PlatformMonitoredService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#identifier PlatformMonitoredService#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#name PlatformMonitoredService#name}
  */
  readonly name: string;
  /**
  * Specification of the change source. Depends on the type of the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#spec PlatformMonitoredService#spec}
  */
  readonly spec?: string;
  /**
  * Type of the change source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#type PlatformMonitoredService#type}
  */
  readonly type: string;
}

export function platformMonitoredServiceRequestChangeSourcesToTerraform(struct?: PlatformMonitoredServiceRequestChangeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    name: cdktf.stringToTerraform(struct!.name),
    spec: cdktf.stringToTerraform(struct!.spec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformMonitoredServiceRequestChangeSourcesToHclTerraform(struct?: PlatformMonitoredServiceRequestChangeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
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
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformMonitoredServiceRequestChangeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformMonitoredServiceRequestChangeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformMonitoredServiceRequestChangeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._enabled = undefined;
      this._identifier = undefined;
      this._name = undefined;
      this._spec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._enabled = value.enabled;
      this._identifier = value.identifier;
      this._name = value.name;
      this._spec = value.spec;
      this._type = value.type;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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
}

export class PlatformMonitoredServiceRequestChangeSourcesList extends cdktf.ComplexList {
  public internalValue? : PlatformMonitoredServiceRequestChangeSources[] | cdktf.IResolvable

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
  public get(index: number): PlatformMonitoredServiceRequestChangeSourcesOutputReference {
    return new PlatformMonitoredServiceRequestChangeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformMonitoredServiceRequestDependencies {
  /**
  * Dependency metadata for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#dependency_metadata PlatformMonitoredService#dependency_metadata}
  */
  readonly dependencyMetadata?: string;
  /**
  * Monitored service identifier of the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#monitored_service_identifier PlatformMonitoredService#monitored_service_identifier}
  */
  readonly monitoredServiceIdentifier: string;
  /**
  * Type of the service dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#type PlatformMonitoredService#type}
  */
  readonly type: string;
}

export function platformMonitoredServiceRequestDependenciesToTerraform(struct?: PlatformMonitoredServiceRequestDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_metadata: cdktf.stringToTerraform(struct!.dependencyMetadata),
    monitored_service_identifier: cdktf.stringToTerraform(struct!.monitoredServiceIdentifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformMonitoredServiceRequestDependenciesToHclTerraform(struct?: PlatformMonitoredServiceRequestDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_metadata: {
      value: cdktf.stringToHclTerraform(struct!.dependencyMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitored_service_identifier: {
      value: cdktf.stringToHclTerraform(struct!.monitoredServiceIdentifier),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformMonitoredServiceRequestDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformMonitoredServiceRequestDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyMetadata = this._dependencyMetadata;
    }
    if (this._monitoredServiceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredServiceIdentifier = this._monitoredServiceIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformMonitoredServiceRequestDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyMetadata = undefined;
      this._monitoredServiceIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyMetadata = value.dependencyMetadata;
      this._monitoredServiceIdentifier = value.monitoredServiceIdentifier;
      this._type = value.type;
    }
  }

  // dependency_metadata - computed: false, optional: true, required: false
  private _dependencyMetadata?: string; 
  public get dependencyMetadata() {
    return this.getStringAttribute('dependency_metadata');
  }
  public set dependencyMetadata(value: string) {
    this._dependencyMetadata = value;
  }
  public resetDependencyMetadata() {
    this._dependencyMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyMetadataInput() {
    return this._dependencyMetadata;
  }

  // monitored_service_identifier - computed: false, optional: false, required: true
  private _monitoredServiceIdentifier?: string; 
  public get monitoredServiceIdentifier() {
    return this.getStringAttribute('monitored_service_identifier');
  }
  public set monitoredServiceIdentifier(value: string) {
    this._monitoredServiceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredServiceIdentifierInput() {
    return this._monitoredServiceIdentifier;
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
}

export class PlatformMonitoredServiceRequestDependenciesList extends cdktf.ComplexList {
  public internalValue? : PlatformMonitoredServiceRequestDependencies[] | cdktf.IResolvable

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
  public get(index: number): PlatformMonitoredServiceRequestDependenciesOutputReference {
    return new PlatformMonitoredServiceRequestDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformMonitoredServiceRequestHealthSources {
  /**
  * Identifier of the health source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#identifier PlatformMonitoredService#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the health source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#name PlatformMonitoredService#name}
  */
  readonly name: string;
  /**
  * Specification of the health source. Depends on the type of the health source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#spec PlatformMonitoredService#spec}
  */
  readonly spec: string;
  /**
  * Type of the health source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#type PlatformMonitoredService#type}
  */
  readonly type: string;
  /**
  * Version of the health source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#version PlatformMonitoredService#version}
  */
  readonly version?: string;
}

export function platformMonitoredServiceRequestHealthSourcesToTerraform(struct?: PlatformMonitoredServiceRequestHealthSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    name: cdktf.stringToTerraform(struct!.name),
    spec: cdktf.stringToTerraform(struct!.spec),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function platformMonitoredServiceRequestHealthSourcesToHclTerraform(struct?: PlatformMonitoredServiceRequestHealthSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
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
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformMonitoredServiceRequestHealthSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformMonitoredServiceRequestHealthSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformMonitoredServiceRequestHealthSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._name = undefined;
      this._spec = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._name = value.name;
      this._spec = value.spec;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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
}

export class PlatformMonitoredServiceRequestHealthSourcesList extends cdktf.ComplexList {
  public internalValue? : PlatformMonitoredServiceRequestHealthSources[] | cdktf.IResolvable

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
  public get(index: number): PlatformMonitoredServiceRequestHealthSourcesOutputReference {
    return new PlatformMonitoredServiceRequestHealthSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformMonitoredServiceRequestNotificationRuleRefs {
  /**
  * Enable or disable notification rule reference for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#enabled PlatformMonitoredService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Notification rule reference for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#notification_rule_ref PlatformMonitoredService#notification_rule_ref}
  */
  readonly notificationRuleRef: string;
}

export function platformMonitoredServiceRequestNotificationRuleRefsToTerraform(struct?: PlatformMonitoredServiceRequestNotificationRuleRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notification_rule_ref: cdktf.stringToTerraform(struct!.notificationRuleRef),
  }
}


export function platformMonitoredServiceRequestNotificationRuleRefsToHclTerraform(struct?: PlatformMonitoredServiceRequestNotificationRuleRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_rule_ref: {
      value: cdktf.stringToHclTerraform(struct!.notificationRuleRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformMonitoredServiceRequestNotificationRuleRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformMonitoredServiceRequestNotificationRuleRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notificationRuleRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRuleRef = this._notificationRuleRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformMonitoredServiceRequestNotificationRuleRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._notificationRuleRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._notificationRuleRef = value.notificationRuleRef;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // notification_rule_ref - computed: false, optional: false, required: true
  private _notificationRuleRef?: string; 
  public get notificationRuleRef() {
    return this.getStringAttribute('notification_rule_ref');
  }
  public set notificationRuleRef(value: string) {
    this._notificationRuleRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleRefInput() {
    return this._notificationRuleRef;
  }
}

export class PlatformMonitoredServiceRequestNotificationRuleRefsList extends cdktf.ComplexList {
  public internalValue? : PlatformMonitoredServiceRequestNotificationRuleRefs[] | cdktf.IResolvable

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
  public get(index: number): PlatformMonitoredServiceRequestNotificationRuleRefsOutputReference {
    return new PlatformMonitoredServiceRequestNotificationRuleRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformMonitoredServiceRequest {
  /**
  * Description for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#description PlatformMonitoredService#description}
  */
  readonly description?: string;
  /**
  * Enable or disable the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#enabled PlatformMonitoredService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment in which the service is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#environment_ref PlatformMonitoredService#environment_ref}
  */
  readonly environmentRef: string;
  /**
  * Environment reference list for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#environment_ref_list PlatformMonitoredService#environment_ref_list}
  */
  readonly environmentRefList?: string[];
  /**
  * Name for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#name PlatformMonitoredService#name}
  */
  readonly name: string;
  /**
  * Service reference for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#service_ref PlatformMonitoredService#service_ref}
  */
  readonly serviceRef: string;
  /**
  * Tags for the monitored service. comma-separated key value string pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#tags PlatformMonitoredService#tags}
  */
  readonly tags?: string[];
  /**
  * Template reference for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#template_ref PlatformMonitoredService#template_ref}
  */
  readonly templateRef?: string;
  /**
  * Type of the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#type PlatformMonitoredService#type}
  */
  readonly type: string;
  /**
  * Template version label for the monitored service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#version_label PlatformMonitoredService#version_label}
  */
  readonly versionLabel?: string;
  /**
  * change_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#change_sources PlatformMonitoredService#change_sources}
  */
  readonly changeSources?: PlatformMonitoredServiceRequestChangeSources[] | cdktf.IResolvable;
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#dependencies PlatformMonitoredService#dependencies}
  */
  readonly dependencies?: PlatformMonitoredServiceRequestDependencies[] | cdktf.IResolvable;
  /**
  * health_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#health_sources PlatformMonitoredService#health_sources}
  */
  readonly healthSources?: PlatformMonitoredServiceRequestHealthSources[] | cdktf.IResolvable;
  /**
  * notification_rule_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#notification_rule_refs PlatformMonitoredService#notification_rule_refs}
  */
  readonly notificationRuleRefs?: PlatformMonitoredServiceRequestNotificationRuleRefs[] | cdktf.IResolvable;
}

export function platformMonitoredServiceRequestToTerraform(struct?: PlatformMonitoredServiceRequestOutputReference | PlatformMonitoredServiceRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    environment_ref: cdktf.stringToTerraform(struct!.environmentRef),
    environment_ref_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentRefList),
    name: cdktf.stringToTerraform(struct!.name),
    service_ref: cdktf.stringToTerraform(struct!.serviceRef),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    type: cdktf.stringToTerraform(struct!.type),
    version_label: cdktf.stringToTerraform(struct!.versionLabel),
    change_sources: cdktf.listMapper(platformMonitoredServiceRequestChangeSourcesToTerraform, true)(struct!.changeSources),
    dependencies: cdktf.listMapper(platformMonitoredServiceRequestDependenciesToTerraform, true)(struct!.dependencies),
    health_sources: cdktf.listMapper(platformMonitoredServiceRequestHealthSourcesToTerraform, true)(struct!.healthSources),
    notification_rule_refs: cdktf.listMapper(platformMonitoredServiceRequestNotificationRuleRefsToTerraform, true)(struct!.notificationRuleRefs),
  }
}


export function platformMonitoredServiceRequestToHclTerraform(struct?: PlatformMonitoredServiceRequestOutputReference | PlatformMonitoredServiceRequest): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_ref: {
      value: cdktf.stringToHclTerraform(struct!.environmentRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_ref_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentRefList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ref: {
      value: cdktf.stringToHclTerraform(struct!.serviceRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
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
    version_label: {
      value: cdktf.stringToHclTerraform(struct!.versionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change_sources: {
      value: cdktf.listMapperHcl(platformMonitoredServiceRequestChangeSourcesToHclTerraform, true)(struct!.changeSources),
      isBlock: true,
      type: "set",
      storageClassType: "PlatformMonitoredServiceRequestChangeSourcesList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(platformMonitoredServiceRequestDependenciesToHclTerraform, true)(struct!.dependencies),
      isBlock: true,
      type: "set",
      storageClassType: "PlatformMonitoredServiceRequestDependenciesList",
    },
    health_sources: {
      value: cdktf.listMapperHcl(platformMonitoredServiceRequestHealthSourcesToHclTerraform, true)(struct!.healthSources),
      isBlock: true,
      type: "set",
      storageClassType: "PlatformMonitoredServiceRequestHealthSourcesList",
    },
    notification_rule_refs: {
      value: cdktf.listMapperHcl(platformMonitoredServiceRequestNotificationRuleRefsToHclTerraform, true)(struct!.notificationRuleRefs),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformMonitoredServiceRequestNotificationRuleRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformMonitoredServiceRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformMonitoredServiceRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._environmentRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentRef = this._environmentRef;
    }
    if (this._environmentRefList !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentRefList = this._environmentRefList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRef = this._serviceRef;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._versionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabel = this._versionLabel;
    }
    if (this._changeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeSources = this._changeSources?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._healthSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthSources = this._healthSources?.internalValue;
    }
    if (this._notificationRuleRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRuleRefs = this._notificationRuleRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformMonitoredServiceRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._environmentRef = undefined;
      this._environmentRefList = undefined;
      this._name = undefined;
      this._serviceRef = undefined;
      this._tags = undefined;
      this._templateRef = undefined;
      this._type = undefined;
      this._versionLabel = undefined;
      this._changeSources.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._healthSources.internalValue = undefined;
      this._notificationRuleRefs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._environmentRef = value.environmentRef;
      this._environmentRefList = value.environmentRefList;
      this._name = value.name;
      this._serviceRef = value.serviceRef;
      this._tags = value.tags;
      this._templateRef = value.templateRef;
      this._type = value.type;
      this._versionLabel = value.versionLabel;
      this._changeSources.internalValue = value.changeSources;
      this._dependencies.internalValue = value.dependencies;
      this._healthSources.internalValue = value.healthSources;
      this._notificationRuleRefs.internalValue = value.notificationRuleRefs;
    }
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_ref - computed: false, optional: false, required: true
  private _environmentRef?: string; 
  public get environmentRef() {
    return this.getStringAttribute('environment_ref');
  }
  public set environmentRef(value: string) {
    this._environmentRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentRefInput() {
    return this._environmentRef;
  }

  // environment_ref_list - computed: false, optional: true, required: false
  private _environmentRefList?: string[]; 
  public get environmentRefList() {
    return this.getListAttribute('environment_ref_list');
  }
  public set environmentRefList(value: string[]) {
    this._environmentRefList = value;
  }
  public resetEnvironmentRefList() {
    this._environmentRefList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentRefListInput() {
    return this._environmentRefList;
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

  // service_ref - computed: false, optional: false, required: true
  private _serviceRef?: string; 
  public get serviceRef() {
    return this.getStringAttribute('service_ref');
  }
  public set serviceRef(value: string) {
    this._serviceRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefInput() {
    return this._serviceRef;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  public resetTemplateRef() {
    this._templateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
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

  // version_label - computed: false, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // change_sources - computed: false, optional: true, required: false
  private _changeSources = new PlatformMonitoredServiceRequestChangeSourcesList(this, "change_sources", true);
  public get changeSources() {
    return this._changeSources;
  }
  public putChangeSources(value: PlatformMonitoredServiceRequestChangeSources[] | cdktf.IResolvable) {
    this._changeSources.internalValue = value;
  }
  public resetChangeSources() {
    this._changeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSourcesInput() {
    return this._changeSources.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new PlatformMonitoredServiceRequestDependenciesList(this, "dependencies", true);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: PlatformMonitoredServiceRequestDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // health_sources - computed: false, optional: true, required: false
  private _healthSources = new PlatformMonitoredServiceRequestHealthSourcesList(this, "health_sources", true);
  public get healthSources() {
    return this._healthSources;
  }
  public putHealthSources(value: PlatformMonitoredServiceRequestHealthSources[] | cdktf.IResolvable) {
    this._healthSources.internalValue = value;
  }
  public resetHealthSources() {
    this._healthSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSourcesInput() {
    return this._healthSources.internalValue;
  }

  // notification_rule_refs - computed: false, optional: true, required: false
  private _notificationRuleRefs = new PlatformMonitoredServiceRequestNotificationRuleRefsList(this, "notification_rule_refs", false);
  public get notificationRuleRefs() {
    return this._notificationRuleRefs;
  }
  public putNotificationRuleRefs(value: PlatformMonitoredServiceRequestNotificationRuleRefs[] | cdktf.IResolvable) {
    this._notificationRuleRefs.internalValue = value;
  }
  public resetNotificationRuleRefs() {
    this._notificationRuleRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleRefsInput() {
    return this._notificationRuleRefs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service harness_platform_monitored_service}
*/
export class PlatformMonitoredService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_monitored_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformMonitoredService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformMonitoredService to import
  * @param importFromId The id of the existing PlatformMonitoredService that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformMonitoredService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_monitored_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_monitored_service harness_platform_monitored_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformMonitoredServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformMonitoredServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_monitored_service',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
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
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._request.internalValue = config.request;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // request - computed: false, optional: true, required: false
  private _request = new PlatformMonitoredServiceRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: PlatformMonitoredServiceRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      request: platformMonitoredServiceRequestToTerraform(this._request.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: platformMonitoredServiceRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformMonitoredServiceRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
