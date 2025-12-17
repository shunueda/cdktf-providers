// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#cache_timeout_active FlowMonitor#cache_timeout_active}
  */
  readonly cacheTimeoutActive?: number;
  /**
  * Inactive timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#cache_timeout_inactive FlowMonitor#cache_timeout_inactive}
  */
  readonly cacheTimeoutInactive?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#delete_mode FlowMonitor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Provide a description for this Flow Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#description FlowMonitor#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#device FlowMonitor#device}
  */
  readonly device?: string;
  /**
  * Add an Exporter to use to export records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#exporters FlowMonitor#exporters}
  */
  readonly exporters?: FlowMonitorExporters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#name FlowMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#record FlowMonitor#record}
  */
  readonly record?: string;
}
export interface FlowMonitorExporters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#name FlowMonitor#name}
  */
  readonly name: string;
}

export function flowMonitorExportersToTerraform(struct?: FlowMonitorExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function flowMonitorExportersToHclTerraform(struct?: FlowMonitorExporters | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowMonitorExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowMonitorExporters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowMonitorExporters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class FlowMonitorExportersList extends cdktf.ComplexList {
  public internalValue? : FlowMonitorExporters[] | cdktf.IResolvable

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
  public get(index: number): FlowMonitorExportersOutputReference {
    return new FlowMonitorExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor iosxe_flow_monitor}
*/
export class FlowMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_flow_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowMonitor to import
  * @param importFromId The id of the existing FlowMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_flow_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/resources/flow_monitor iosxe_flow_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: FlowMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_flow_monitor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheTimeoutActive = config.cacheTimeoutActive;
    this._cacheTimeoutInactive = config.cacheTimeoutInactive;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._exporters.internalValue = config.exporters;
    this._name = config.name;
    this._record = config.record;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_timeout_active - computed: false, optional: true, required: false
  private _cacheTimeoutActive?: number; 
  public get cacheTimeoutActive() {
    return this.getNumberAttribute('cache_timeout_active');
  }
  public set cacheTimeoutActive(value: number) {
    this._cacheTimeoutActive = value;
  }
  public resetCacheTimeoutActive() {
    this._cacheTimeoutActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutActiveInput() {
    return this._cacheTimeoutActive;
  }

  // cache_timeout_inactive - computed: false, optional: true, required: false
  private _cacheTimeoutInactive?: number; 
  public get cacheTimeoutInactive() {
    return this.getNumberAttribute('cache_timeout_inactive');
  }
  public set cacheTimeoutInactive(value: number) {
    this._cacheTimeoutInactive = value;
  }
  public resetCacheTimeoutInactive() {
    this._cacheTimeoutInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInactiveInput() {
    return this._cacheTimeoutInactive;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // exporters - computed: false, optional: true, required: false
  private _exporters = new FlowMonitorExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }
  public putExporters(value: FlowMonitorExporters[] | cdktf.IResolvable) {
    this._exporters.internalValue = value;
  }
  public resetExporters() {
    this._exporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportersInput() {
    return this._exporters.internalValue;
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

  // record - computed: false, optional: true, required: false
  private _record?: string; 
  public get record() {
    return this.getStringAttribute('record');
  }
  public set record(value: string) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_timeout_active: cdktf.numberToTerraform(this._cacheTimeoutActive),
      cache_timeout_inactive: cdktf.numberToTerraform(this._cacheTimeoutInactive),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      exporters: cdktf.listMapper(flowMonitorExportersToTerraform, false)(this._exporters.internalValue),
      name: cdktf.stringToTerraform(this._name),
      record: cdktf.stringToTerraform(this._record),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_timeout_active: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutActive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout_inactive: {
        value: cdktf.numberToHclTerraform(this._cacheTimeoutInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exporters: {
        value: cdktf.listMapperHcl(flowMonitorExportersToHclTerraform, false)(this._exporters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlowMonitorExportersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record: {
        value: cdktf.stringToHclTerraform(this._record),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
