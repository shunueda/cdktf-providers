// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceTrafficShapingCustomPerformanceClassesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#items ApplianceTrafficShapingCustomPerformanceClasses#items}
  */
  readonly items: ApplianceTrafficShapingCustomPerformanceClassesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#network_id ApplianceTrafficShapingCustomPerformanceClasses#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#organization_id ApplianceTrafficShapingCustomPerformanceClasses#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceTrafficShapingCustomPerformanceClassesItems {
  /**
  * Maximum jitter in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#max_jitter ApplianceTrafficShapingCustomPerformanceClasses#max_jitter}
  */
  readonly maxJitter?: number;
  /**
  * Maximum latency in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#max_latency ApplianceTrafficShapingCustomPerformanceClasses#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * Maximum percentage of packet loss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#max_loss_percentage ApplianceTrafficShapingCustomPerformanceClasses#max_loss_percentage}
  */
  readonly maxLossPercentage?: number;
  /**
  * Name of the custom performance class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#name ApplianceTrafficShapingCustomPerformanceClasses#name}
  */
  readonly name: string;
}

export function applianceTrafficShapingCustomPerformanceClassesItemsToTerraform(struct?: ApplianceTrafficShapingCustomPerformanceClassesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_jitter: cdktf.numberToTerraform(struct!.maxJitter),
    max_latency: cdktf.numberToTerraform(struct!.maxLatency),
    max_loss_percentage: cdktf.numberToTerraform(struct!.maxLossPercentage),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applianceTrafficShapingCustomPerformanceClassesItemsToHclTerraform(struct?: ApplianceTrafficShapingCustomPerformanceClassesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_jitter: {
      value: cdktf.numberToHclTerraform(struct!.maxJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_latency: {
      value: cdktf.numberToHclTerraform(struct!.maxLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_loss_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxLossPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ApplianceTrafficShapingCustomPerformanceClassesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceTrafficShapingCustomPerformanceClassesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxJitter = this._maxJitter;
    }
    if (this._maxLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLatency = this._maxLatency;
    }
    if (this._maxLossPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLossPercentage = this._maxLossPercentage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceTrafficShapingCustomPerformanceClassesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxJitter = undefined;
      this._maxLatency = undefined;
      this._maxLossPercentage = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxJitter = value.maxJitter;
      this._maxLatency = value.maxLatency;
      this._maxLossPercentage = value.maxLossPercentage;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_jitter - computed: false, optional: true, required: false
  private _maxJitter?: number; 
  public get maxJitter() {
    return this.getNumberAttribute('max_jitter');
  }
  public set maxJitter(value: number) {
    this._maxJitter = value;
  }
  public resetMaxJitter() {
    this._maxJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJitterInput() {
    return this._maxJitter;
  }

  // max_latency - computed: false, optional: true, required: false
  private _maxLatency?: number; 
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency;
  }

  // max_loss_percentage - computed: false, optional: true, required: false
  private _maxLossPercentage?: number; 
  public get maxLossPercentage() {
    return this.getNumberAttribute('max_loss_percentage');
  }
  public set maxLossPercentage(value: number) {
    this._maxLossPercentage = value;
  }
  public resetMaxLossPercentage() {
    this._maxLossPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLossPercentageInput() {
    return this._maxLossPercentage;
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

export class ApplianceTrafficShapingCustomPerformanceClassesItemsList extends cdktf.ComplexList {
  public internalValue? : ApplianceTrafficShapingCustomPerformanceClassesItems[] | cdktf.IResolvable

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
  public get(index: number): ApplianceTrafficShapingCustomPerformanceClassesItemsOutputReference {
    return new ApplianceTrafficShapingCustomPerformanceClassesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes meraki_appliance_traffic_shaping_custom_performance_classes}
*/
export class ApplianceTrafficShapingCustomPerformanceClasses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_custom_performance_classes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceTrafficShapingCustomPerformanceClasses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceTrafficShapingCustomPerformanceClasses to import
  * @param importFromId The id of the existing ApplianceTrafficShapingCustomPerformanceClasses that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceTrafficShapingCustomPerformanceClasses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_custom_performance_classes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_traffic_shaping_custom_performance_classes meraki_appliance_traffic_shaping_custom_performance_classes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceTrafficShapingCustomPerformanceClassesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceTrafficShapingCustomPerformanceClassesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_custom_performance_classes',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApplianceTrafficShapingCustomPerformanceClassesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: ApplianceTrafficShapingCustomPerformanceClassesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(applianceTrafficShapingCustomPerformanceClassesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(applianceTrafficShapingCustomPerformanceClassesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplianceTrafficShapingCustomPerformanceClassesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
