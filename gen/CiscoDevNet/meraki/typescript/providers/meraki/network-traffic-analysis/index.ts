// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkTrafficAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items that make up the custom pie chart for traffic reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#custom_pie_chart_items NetworkTrafficAnalysis#custom_pie_chart_items}
  */
  readonly customPieChartItems?: NetworkTrafficAnalysisCustomPieChartItems[] | cdktf.IResolvable;
  /**
  * The traffic analysis mode for the network. Can be one of `disabled` (do not collect traffic types), `basic` (collect generic traffic categories), or `detailed` (collect destination hostnames).
  *   - Choices: `basic`, `detailed`, `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#mode NetworkTrafficAnalysis#mode}
  */
  readonly mode?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#network_id NetworkTrafficAnalysis#network_id}
  */
  readonly networkId: string;
}
export interface NetworkTrafficAnalysisCustomPieChartItems {
  /**
  * The name of the custom pie chart item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#name NetworkTrafficAnalysis#name}
  */
  readonly name: string;
  /**
  * The signature type for the custom pie chart item. Can be one of `host`, `port` or `ipRange`.
  *   - Choices: `host`, `ipRange`, `port`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#type NetworkTrafficAnalysis#type}
  */
  readonly type: string;
  /**
  * The value of the custom pie chart item. Valid syntax depends on the signature type of the chart item (see sample request/response for more details).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#value NetworkTrafficAnalysis#value}
  */
  readonly value: string;
}

export function networkTrafficAnalysisCustomPieChartItemsToTerraform(struct?: NetworkTrafficAnalysisCustomPieChartItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkTrafficAnalysisCustomPieChartItemsToHclTerraform(struct?: NetworkTrafficAnalysisCustomPieChartItems | cdktf.IResolvable): any {
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

export class NetworkTrafficAnalysisCustomPieChartItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkTrafficAnalysisCustomPieChartItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: NetworkTrafficAnalysisCustomPieChartItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._type = value.type;
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

export class NetworkTrafficAnalysisCustomPieChartItemsList extends cdktf.ComplexList {
  public internalValue? : NetworkTrafficAnalysisCustomPieChartItems[] | cdktf.IResolvable

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
  public get(index: number): NetworkTrafficAnalysisCustomPieChartItemsOutputReference {
    return new NetworkTrafficAnalysisCustomPieChartItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis meraki_network_traffic_analysis}
*/
export class NetworkTrafficAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_traffic_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkTrafficAnalysis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkTrafficAnalysis to import
  * @param importFromId The id of the existing NetworkTrafficAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkTrafficAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_traffic_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_traffic_analysis meraki_network_traffic_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkTrafficAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkTrafficAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_traffic_analysis',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customPieChartItems.internalValue = config.customPieChartItems;
    this._mode = config.mode;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_pie_chart_items - computed: false, optional: true, required: false
  private _customPieChartItems = new NetworkTrafficAnalysisCustomPieChartItemsList(this, "custom_pie_chart_items", false);
  public get customPieChartItems() {
    return this._customPieChartItems;
  }
  public putCustomPieChartItems(value: NetworkTrafficAnalysisCustomPieChartItems[] | cdktf.IResolvable) {
    this._customPieChartItems.internalValue = value;
  }
  public resetCustomPieChartItems() {
    this._customPieChartItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPieChartItemsInput() {
    return this._customPieChartItems.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_pie_chart_items: cdktf.listMapper(networkTrafficAnalysisCustomPieChartItemsToTerraform, false)(this._customPieChartItems.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_pie_chart_items: {
        value: cdktf.listMapperHcl(networkTrafficAnalysisCustomPieChartItemsToHclTerraform, false)(this._customPieChartItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkTrafficAnalysisCustomPieChartItemsList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
