// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NginxServiceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#annotations NginxServiceDiscovery#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#description NginxServiceDiscovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#disable NginxServiceDiscovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#id NginxServiceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#labels NginxServiceDiscovery#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#name NginxServiceDiscovery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#namespace NginxServiceDiscovery#namespace}
  */
  readonly namespace: string;
  /**
  * discovery_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#discovery_target NginxServiceDiscovery#discovery_target}
  */
  readonly discoveryTarget?: NginxServiceDiscoveryDiscoveryTarget;
  /**
  * server_block_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#server_block_filters NginxServiceDiscovery#server_block_filters}
  */
  readonly serverBlockFilters?: NginxServiceDiscoveryServerBlockFilters[] | cdktf.IResolvable;
}
export interface NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#name NginxServiceDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#namespace NginxServiceDiscovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#tenant NginxServiceDiscovery#tenant}
  */
  readonly tenant?: string;
}

export function nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupToTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupToHclTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupList extends cdktf.ComplexList {
  public internalValue? : NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup[] | cdktf.IResolvable

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
  public get(index: number): NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupOutputReference {
    return new NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup {
  /**
  * config_sync_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#config_sync_group NginxServiceDiscovery#config_sync_group}
  */
  readonly configSyncGroup: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup[] | cdktf.IResolvable;
}

export function nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupToTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupOutputReference | NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_sync_group: cdktf.listMapper(nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupToTerraform, true)(struct!.configSyncGroup),
  }
}


export function nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupToHclTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupOutputReference | NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_sync_group: {
      value: cdktf.listMapperHcl(nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupToHclTerraform, true)(struct!.configSyncGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configSyncGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSyncGroup = this._configSyncGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configSyncGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configSyncGroup.internalValue = value.configSyncGroup;
    }
  }

  // config_sync_group - computed: false, optional: false, required: true
  private _configSyncGroup = new NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroupList(this, "config_sync_group", false);
  public get configSyncGroup() {
    return this._configSyncGroup;
  }
  public putConfigSyncGroup(value: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupConfigSyncGroup[] | cdktf.IResolvable) {
    this._configSyncGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncGroupInput() {
    return this._configSyncGroup.internalValue;
  }
}
export interface NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#name NginxServiceDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#namespace NginxServiceDiscovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#tenant NginxServiceDiscovery#tenant}
  */
  readonly tenant?: string;
}

export function nginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceToTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function nginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceToHclTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceList extends cdktf.ComplexList {
  public internalValue? : NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance[] | cdktf.IResolvable

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
  public get(index: number): NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceOutputReference {
    return new NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NginxServiceDiscoveryDiscoveryTargetNginxInstance {
  /**
  * nginx_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#nginx_instance NginxServiceDiscovery#nginx_instance}
  */
  readonly nginxInstance: NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance[] | cdktf.IResolvable;
}

export function nginxServiceDiscoveryDiscoveryTargetNginxInstanceToTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetNginxInstanceOutputReference | NginxServiceDiscoveryDiscoveryTargetNginxInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nginx_instance: cdktf.listMapper(nginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceToTerraform, true)(struct!.nginxInstance),
  }
}


export function nginxServiceDiscoveryDiscoveryTargetNginxInstanceToHclTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetNginxInstanceOutputReference | NginxServiceDiscoveryDiscoveryTargetNginxInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nginx_instance: {
      value: cdktf.listMapperHcl(nginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceToHclTerraform, true)(struct!.nginxInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryDiscoveryTargetNginxInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NginxServiceDiscoveryDiscoveryTargetNginxInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nginxInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxInstance = this._nginxInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryDiscoveryTargetNginxInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nginxInstance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nginxInstance.internalValue = value.nginxInstance;
    }
  }

  // nginx_instance - computed: false, optional: false, required: true
  private _nginxInstance = new NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstanceList(this, "nginx_instance", false);
  public get nginxInstance() {
    return this._nginxInstance;
  }
  public putNginxInstance(value: NginxServiceDiscoveryDiscoveryTargetNginxInstanceNginxInstance[] | cdktf.IResolvable) {
    this._nginxInstance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxInstanceInput() {
    return this._nginxInstance.internalValue;
  }
}
export interface NginxServiceDiscoveryDiscoveryTarget {
  /**
  * config_sync_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#config_sync_group NginxServiceDiscovery#config_sync_group}
  */
  readonly configSyncGroup?: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup;
  /**
  * nginx_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#nginx_instance NginxServiceDiscovery#nginx_instance}
  */
  readonly nginxInstance?: NginxServiceDiscoveryDiscoveryTargetNginxInstance;
}

export function nginxServiceDiscoveryDiscoveryTargetToTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetOutputReference | NginxServiceDiscoveryDiscoveryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_sync_group: nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupToTerraform(struct!.configSyncGroup),
    nginx_instance: nginxServiceDiscoveryDiscoveryTargetNginxInstanceToTerraform(struct!.nginxInstance),
  }
}


export function nginxServiceDiscoveryDiscoveryTargetToHclTerraform(struct?: NginxServiceDiscoveryDiscoveryTargetOutputReference | NginxServiceDiscoveryDiscoveryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_sync_group: {
      value: nginxServiceDiscoveryDiscoveryTargetConfigSyncGroupToHclTerraform(struct!.configSyncGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupList",
    },
    nginx_instance: {
      value: nginxServiceDiscoveryDiscoveryTargetNginxInstanceToHclTerraform(struct!.nginxInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NginxServiceDiscoveryDiscoveryTargetNginxInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryDiscoveryTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NginxServiceDiscoveryDiscoveryTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configSyncGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSyncGroup = this._configSyncGroup?.internalValue;
    }
    if (this._nginxInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxInstance = this._nginxInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryDiscoveryTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configSyncGroup.internalValue = undefined;
      this._nginxInstance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configSyncGroup.internalValue = value.configSyncGroup;
      this._nginxInstance.internalValue = value.nginxInstance;
    }
  }

  // config_sync_group - computed: false, optional: true, required: false
  private _configSyncGroup = new NginxServiceDiscoveryDiscoveryTargetConfigSyncGroupOutputReference(this, "config_sync_group");
  public get configSyncGroup() {
    return this._configSyncGroup;
  }
  public putConfigSyncGroup(value: NginxServiceDiscoveryDiscoveryTargetConfigSyncGroup) {
    this._configSyncGroup.internalValue = value;
  }
  public resetConfigSyncGroup() {
    this._configSyncGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncGroupInput() {
    return this._configSyncGroup.internalValue;
  }

  // nginx_instance - computed: false, optional: true, required: false
  private _nginxInstance = new NginxServiceDiscoveryDiscoveryTargetNginxInstanceOutputReference(this, "nginx_instance");
  public get nginxInstance() {
    return this._nginxInstance;
  }
  public putNginxInstance(value: NginxServiceDiscoveryDiscoveryTargetNginxInstance) {
    this._nginxInstance.internalValue = value;
  }
  public resetNginxInstance() {
    this._nginxInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxInstanceInput() {
    return this._nginxInstance.internalValue;
  }
}
export interface NginxServiceDiscoveryServerBlockFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#name_regex NginxServiceDiscovery#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#port_ranges NginxServiceDiscovery#port_ranges}
  */
  readonly portRanges?: string;
}

export function nginxServiceDiscoveryServerBlockFiltersToTerraform(struct?: NginxServiceDiscoveryServerBlockFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function nginxServiceDiscoveryServerBlockFiltersToHclTerraform(struct?: NginxServiceDiscoveryServerBlockFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxServiceDiscoveryServerBlockFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NginxServiceDiscoveryServerBlockFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxServiceDiscoveryServerBlockFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegex = undefined;
      this._portRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegex = value.nameRegex;
      this._portRanges = value.portRanges;
    }
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}

export class NginxServiceDiscoveryServerBlockFiltersList extends cdktf.ComplexList {
  public internalValue? : NginxServiceDiscoveryServerBlockFilters[] | cdktf.IResolvable

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
  public get(index: number): NginxServiceDiscoveryServerBlockFiltersOutputReference {
    return new NginxServiceDiscoveryServerBlockFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery volterra_nginx_service_discovery}
*/
export class NginxServiceDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_nginx_service_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NginxServiceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NginxServiceDiscovery to import
  * @param importFromId The id of the existing NginxServiceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NginxServiceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_nginx_service_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/nginx_service_discovery volterra_nginx_service_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NginxServiceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: NginxServiceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_nginx_service_discovery',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._discoveryTarget.internalValue = config.discoveryTarget;
    this._serverBlockFilters.internalValue = config.serverBlockFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // discovery_target - computed: false, optional: true, required: false
  private _discoveryTarget = new NginxServiceDiscoveryDiscoveryTargetOutputReference(this, "discovery_target");
  public get discoveryTarget() {
    return this._discoveryTarget;
  }
  public putDiscoveryTarget(value: NginxServiceDiscoveryDiscoveryTarget) {
    this._discoveryTarget.internalValue = value;
  }
  public resetDiscoveryTarget() {
    this._discoveryTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTargetInput() {
    return this._discoveryTarget.internalValue;
  }

  // server_block_filters - computed: false, optional: true, required: false
  private _serverBlockFilters = new NginxServiceDiscoveryServerBlockFiltersList(this, "server_block_filters", false);
  public get serverBlockFilters() {
    return this._serverBlockFilters;
  }
  public putServerBlockFilters(value: NginxServiceDiscoveryServerBlockFilters[] | cdktf.IResolvable) {
    this._serverBlockFilters.internalValue = value;
  }
  public resetServerBlockFilters() {
    this._serverBlockFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBlockFiltersInput() {
    return this._serverBlockFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      discovery_target: nginxServiceDiscoveryDiscoveryTargetToTerraform(this._discoveryTarget.internalValue),
      server_block_filters: cdktf.listMapper(nginxServiceDiscoveryServerBlockFiltersToTerraform, true)(this._serverBlockFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_target: {
        value: nginxServiceDiscoveryDiscoveryTargetToHclTerraform(this._discoveryTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NginxServiceDiscoveryDiscoveryTargetList",
      },
      server_block_filters: {
        value: cdktf.listMapperHcl(nginxServiceDiscoveryServerBlockFiltersToHclTerraform, true)(this._serverBlockFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NginxServiceDiscoveryServerBlockFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
