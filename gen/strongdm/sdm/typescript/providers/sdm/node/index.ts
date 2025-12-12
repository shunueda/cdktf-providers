// https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#gateway Node#gateway}
  */
  readonly gateway?: NodeGateway;
  /**
  * proxy_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#proxy_cluster Node#proxy_cluster}
  */
  readonly proxyCluster?: NodeProxyCluster;
  /**
  * relay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#relay Node#relay}
  */
  readonly relay?: NodeRelay;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#timeouts Node#timeouts}
  */
  readonly timeouts?: NodeTimeouts;
}
export interface NodeGatewayMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#cron_schedule Node#cron_schedule}
  */
  readonly cronSchedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#require_idleness Node#require_idleness}
  */
  readonly requireIdleness: boolean | cdktf.IResolvable;
}

export function nodeGatewayMaintenanceWindowToTerraform(struct?: NodeGatewayMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    require_idleness: cdktf.booleanToTerraform(struct!.requireIdleness),
  }
}


export function nodeGatewayMaintenanceWindowToHclTerraform(struct?: NodeGatewayMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_idleness: {
      value: cdktf.booleanToHclTerraform(struct!.requireIdleness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeGatewayMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeGatewayMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._requireIdleness !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireIdleness = this._requireIdleness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeGatewayMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._requireIdleness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._requireIdleness = value.requireIdleness;
    }
  }

  // cron_schedule - computed: false, optional: false, required: true
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // require_idleness - computed: false, optional: false, required: true
  private _requireIdleness?: boolean | cdktf.IResolvable; 
  public get requireIdleness() {
    return this.getBooleanAttribute('require_idleness');
  }
  public set requireIdleness(value: boolean | cdktf.IResolvable) {
    this._requireIdleness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireIdlenessInput() {
    return this._requireIdleness;
  }
}

export class NodeGatewayMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : NodeGatewayMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): NodeGatewayMaintenanceWindowOutputReference {
    return new NodeGatewayMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeGateway {
  /**
  * The hostname/port tuple which the gateway daemon will bind to. If not provided on create, set to "0.0.0.0:listen_address_port".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#bind_address Node#bind_address}
  */
  readonly bindAddress?: string;
  /**
  * GatewayFilter can be used to restrict the peering between relays and gateways. Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#gateway_filter Node#gateway_filter}
  */
  readonly gatewayFilter?: string;
  /**
  * The public hostname/port tuple at which the gateway will be accessible to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#listen_address Node#listen_address}
  */
  readonly listenAddress: string;
  /**
  * Unique human-readable name of the Gateway. Node names must include only letters, numbers, and hyphens (no spaces, underscores, or other special characters). Generated if not provided on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#name Node#name}
  */
  readonly name?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#tags Node#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#maintenance_window Node#maintenance_window}
  */
  readonly maintenanceWindow?: NodeGatewayMaintenanceWindow[] | cdktf.IResolvable;
}

export function nodeGatewayToTerraform(struct?: NodeGatewayOutputReference | NodeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
    gateway_filter: cdktf.stringToTerraform(struct!.gatewayFilter),
    listen_address: cdktf.stringToTerraform(struct!.listenAddress),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    maintenance_window: cdktf.listMapper(nodeGatewayMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
  }
}


export function nodeGatewayToHclTerraform(struct?: NodeGatewayOutputReference | NodeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_filter: {
      value: cdktf.stringToHclTerraform(struct!.gatewayFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen_address: {
      value: cdktf.stringToHclTerraform(struct!.listenAddress),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    maintenance_window: {
      value: cdktf.listMapperHcl(nodeGatewayMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "NodeGatewayMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    if (this._gatewayFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayFilter = this._gatewayFilter;
    }
    if (this._listenAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenAddress = this._listenAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindAddress = undefined;
      this._gatewayFilter = undefined;
      this._listenAddress = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindAddress = value.bindAddress;
      this._gatewayFilter = value.gatewayFilter;
      this._listenAddress = value.listenAddress;
      this._name = value.name;
      this._tags = value.tags;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // bind_address - computed: true, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // gateway_filter - computed: false, optional: true, required: false
  private _gatewayFilter?: string; 
  public get gatewayFilter() {
    return this.getStringAttribute('gateway_filter');
  }
  public set gatewayFilter(value: string) {
    this._gatewayFilter = value;
  }
  public resetGatewayFilter() {
    this._gatewayFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFilterInput() {
    return this._gatewayFilter;
  }

  // listen_address - computed: false, optional: false, required: true
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new NodeGatewayMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: NodeGatewayMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface NodeProxyClusterMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#cron_schedule Node#cron_schedule}
  */
  readonly cronSchedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#require_idleness Node#require_idleness}
  */
  readonly requireIdleness: boolean | cdktf.IResolvable;
}

export function nodeProxyClusterMaintenanceWindowToTerraform(struct?: NodeProxyClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    require_idleness: cdktf.booleanToTerraform(struct!.requireIdleness),
  }
}


export function nodeProxyClusterMaintenanceWindowToHclTerraform(struct?: NodeProxyClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_idleness: {
      value: cdktf.booleanToHclTerraform(struct!.requireIdleness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeProxyClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeProxyClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._requireIdleness !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireIdleness = this._requireIdleness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeProxyClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._requireIdleness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._requireIdleness = value.requireIdleness;
    }
  }

  // cron_schedule - computed: false, optional: false, required: true
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // require_idleness - computed: false, optional: false, required: true
  private _requireIdleness?: boolean | cdktf.IResolvable; 
  public get requireIdleness() {
    return this.getBooleanAttribute('require_idleness');
  }
  public set requireIdleness(value: boolean | cdktf.IResolvable) {
    this._requireIdleness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireIdlenessInput() {
    return this._requireIdleness;
  }
}

export class NodeProxyClusterMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : NodeProxyClusterMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): NodeProxyClusterMaintenanceWindowOutputReference {
    return new NodeProxyClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeProxyCluster {
  /**
  * The public hostname/port tuple at which the proxy cluster will be accessible to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#address Node#address}
  */
  readonly address: string;
  /**
  * Unique human-readable name of the proxy cluster. Names must include only letters, numbers, and hyphens (no spaces, underscores, or other special characters). Generated if not provided on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#name Node#name}
  */
  readonly name?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#tags Node#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#maintenance_window Node#maintenance_window}
  */
  readonly maintenanceWindow?: NodeProxyClusterMaintenanceWindow[] | cdktf.IResolvable;
}

export function nodeProxyClusterToTerraform(struct?: NodeProxyClusterOutputReference | NodeProxyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    maintenance_window: cdktf.listMapper(nodeProxyClusterMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
  }
}


export function nodeProxyClusterToHclTerraform(struct?: NodeProxyClusterOutputReference | NodeProxyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    maintenance_window: {
      value: cdktf.listMapperHcl(nodeProxyClusterMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "NodeProxyClusterMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeProxyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeProxyCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeProxyCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._name = value.name;
      this._tags = value.tags;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // name - computed: true, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new NodeProxyClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: NodeProxyClusterMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface NodeRelayMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#cron_schedule Node#cron_schedule}
  */
  readonly cronSchedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#require_idleness Node#require_idleness}
  */
  readonly requireIdleness: boolean | cdktf.IResolvable;
}

export function nodeRelayMaintenanceWindowToTerraform(struct?: NodeRelayMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    require_idleness: cdktf.booleanToTerraform(struct!.requireIdleness),
  }
}


export function nodeRelayMaintenanceWindowToHclTerraform(struct?: NodeRelayMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_idleness: {
      value: cdktf.booleanToHclTerraform(struct!.requireIdleness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeRelayMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeRelayMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._requireIdleness !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireIdleness = this._requireIdleness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeRelayMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._requireIdleness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._requireIdleness = value.requireIdleness;
    }
  }

  // cron_schedule - computed: false, optional: false, required: true
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // require_idleness - computed: false, optional: false, required: true
  private _requireIdleness?: boolean | cdktf.IResolvable; 
  public get requireIdleness() {
    return this.getBooleanAttribute('require_idleness');
  }
  public set requireIdleness(value: boolean | cdktf.IResolvable) {
    this._requireIdleness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireIdlenessInput() {
    return this._requireIdleness;
  }
}

export class NodeRelayMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : NodeRelayMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): NodeRelayMaintenanceWindowOutputReference {
    return new NodeRelayMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeRelay {
  /**
  * GatewayFilter can be used to restrict the peering between relays and gateways. Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#gateway_filter Node#gateway_filter}
  */
  readonly gatewayFilter?: string;
  /**
  * Unique human-readable name of the Relay. Node names must include only letters, numbers, and hyphens (no spaces, underscores, or other special characters). Generated if not provided on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#name Node#name}
  */
  readonly name?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#tags Node#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#maintenance_window Node#maintenance_window}
  */
  readonly maintenanceWindow?: NodeRelayMaintenanceWindow[] | cdktf.IResolvable;
}

export function nodeRelayToTerraform(struct?: NodeRelayOutputReference | NodeRelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_filter: cdktf.stringToTerraform(struct!.gatewayFilter),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    maintenance_window: cdktf.listMapper(nodeRelayMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
  }
}


export function nodeRelayToHclTerraform(struct?: NodeRelayOutputReference | NodeRelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_filter: {
      value: cdktf.stringToHclTerraform(struct!.gatewayFilter),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    maintenance_window: {
      value: cdktf.listMapperHcl(nodeRelayMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "NodeRelayMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeRelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeRelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayFilter = this._gatewayFilter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeRelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayFilter = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayFilter = value.gatewayFilter;
      this._name = value.name;
      this._tags = value.tags;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // gateway_filter - computed: false, optional: true, required: false
  private _gatewayFilter?: string; 
  public get gatewayFilter() {
    return this.getStringAttribute('gateway_filter');
  }
  public set gatewayFilter(value: string) {
    this._gatewayFilter = value;
  }
  public resetGatewayFilter() {
    this._gatewayFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFilterInput() {
    return this._gatewayFilter;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new NodeRelayMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: NodeRelayMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface NodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#create Node#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#default Node#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#delete Node#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#read Node#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#update Node#update}
  */
  readonly update?: string;
}

export function nodeTimeoutsToTerraform(struct?: NodeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nodeTimeoutsToHclTerraform(struct?: NodeTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class NodeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node sdm_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.39.0/docs/resources/node sdm_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_node',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.39.0',
        providerVersionConstraint: '15.39.0'
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
    this._gateway.internalValue = config.gateway;
    this._proxyCluster.internalValue = config.proxyCluster;
    this._relay.internalValue = config.relay;
    this._timeouts.internalValue = config.timeouts;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway = new NodeGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: NodeGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // proxy_cluster - computed: false, optional: true, required: false
  private _proxyCluster = new NodeProxyClusterOutputReference(this, "proxy_cluster");
  public get proxyCluster() {
    return this._proxyCluster;
  }
  public putProxyCluster(value: NodeProxyCluster) {
    this._proxyCluster.internalValue = value;
  }
  public resetProxyCluster() {
    this._proxyCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyClusterInput() {
    return this._proxyCluster.internalValue;
  }

  // relay - computed: false, optional: true, required: false
  private _relay = new NodeRelayOutputReference(this, "relay");
  public get relay() {
    return this._relay;
  }
  public putRelay(value: NodeRelay) {
    this._relay.internalValue = value;
  }
  public resetRelay() {
    this._relay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NodeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NodeTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      gateway: nodeGatewayToTerraform(this._gateway.internalValue),
      proxy_cluster: nodeProxyClusterToTerraform(this._proxyCluster.internalValue),
      relay: nodeRelayToTerraform(this._relay.internalValue),
      timeouts: nodeTimeoutsToTerraform(this._timeouts.internalValue),
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
      gateway: {
        value: nodeGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeGatewayList",
      },
      proxy_cluster: {
        value: nodeProxyClusterToHclTerraform(this._proxyCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeProxyClusterList",
      },
      relay: {
        value: nodeRelayToHclTerraform(this._relay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeRelayList",
      },
      timeouts: {
        value: nodeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NodeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
