// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoBfdFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set color that identifies the WAN transport tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#colors CiscoBfdFeatureTemplate#colors}
  */
  readonly colors?: CiscoBfdFeatureTemplateColors[] | cdktf.IResolvable;
  /**
  * Set default DSCP value for BFD packets
  *   - Range: `0`-`63`
  *   - Default value: `48`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#default_dscp CiscoBfdFeatureTemplate#default_dscp}
  */
  readonly defaultDscp?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#default_dscp_variable CiscoBfdFeatureTemplate#default_dscp_variable}
  */
  readonly defaultDscpVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#description CiscoBfdFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#device_types CiscoBfdFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set the number of polling intervals used to determine tunnel SLA class
  *   - Range: `1`-`6`
  *   - Default value: `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#multiplier CiscoBfdFeatureTemplate#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#multiplier_variable CiscoBfdFeatureTemplate#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#name CiscoBfdFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set how often BFD polls tunnels to collect packet latency, loss, and statistics
  *   - Range: `1`-`4294967295`
  *   - Default value: `600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#poll_interval CiscoBfdFeatureTemplate#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#poll_interval_variable CiscoBfdFeatureTemplate#poll_interval_variable}
  */
  readonly pollIntervalVariable?: string;
}
export interface CiscoBfdFeatureTemplateColors {
  /**
  * Set color that identifies the WAN transport tunnel
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#color CiscoBfdFeatureTemplate#color}
  */
  readonly color?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#color_variable CiscoBfdFeatureTemplate#color_variable}
  */
  readonly colorVariable?: string;
  /**
  * Set BFD Default DSCP value for tloc color
  *   - Range: `0`-`63`
  *   - Default value: `48`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#dscp CiscoBfdFeatureTemplate#dscp}
  */
  readonly dscp?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#dscp_variable CiscoBfdFeatureTemplate#dscp_variable}
  */
  readonly dscpVariable?: string;
  /**
  * Set how often BFD sends Hello packets
  *   - Range: `100`-`300000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#hello_interval CiscoBfdFeatureTemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#hello_interval_variable CiscoBfdFeatureTemplate#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set how many Hello packet intervals to wait before declaring that a tunnel has failed
  *   - Range: `1`-`60`
  *   - Default value: `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#multiplier CiscoBfdFeatureTemplate#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#multiplier_variable CiscoBfdFeatureTemplate#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#optional CiscoBfdFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Control automatic path MTU discovery
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#pmtu_discovery CiscoBfdFeatureTemplate#pmtu_discovery}
  */
  readonly pmtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#pmtu_discovery_variable CiscoBfdFeatureTemplate#pmtu_discovery_variable}
  */
  readonly pmtuDiscoveryVariable?: string;
}

export function ciscoBfdFeatureTemplateColorsToTerraform(struct?: CiscoBfdFeatureTemplateColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    color_variable: cdktf.stringToTerraform(struct!.colorVariable),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    dscp_variable: cdktf.stringToTerraform(struct!.dscpVariable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    hello_interval_variable: cdktf.stringToTerraform(struct!.helloIntervalVariable),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    multiplier_variable: cdktf.stringToTerraform(struct!.multiplierVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    pmtu_discovery: cdktf.booleanToTerraform(struct!.pmtuDiscovery),
    pmtu_discovery_variable: cdktf.stringToTerraform(struct!.pmtuDiscoveryVariable),
  }
}


export function ciscoBfdFeatureTemplateColorsToHclTerraform(struct?: CiscoBfdFeatureTemplateColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_variable: {
      value: cdktf.stringToHclTerraform(struct!.colorVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_variable: {
      value: cdktf.stringToHclTerraform(struct!.dscpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.helloIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier_variable: {
      value: cdktf.stringToHclTerraform(struct!.multiplierVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pmtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.pmtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pmtu_discovery_variable: {
      value: cdktf.stringToHclTerraform(struct!.pmtuDiscoveryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoBfdFeatureTemplateColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoBfdFeatureTemplateColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorVariable = this._colorVariable;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dscpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpVariable = this._dscpVariable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._helloIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalVariable = this._helloIntervalVariable;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._multiplierVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplierVariable = this._multiplierVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._pmtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtuDiscovery = this._pmtuDiscovery;
    }
    if (this._pmtuDiscoveryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtuDiscoveryVariable = this._pmtuDiscoveryVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoBfdFeatureTemplateColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorVariable = undefined;
      this._dscp = undefined;
      this._dscpVariable = undefined;
      this._helloInterval = undefined;
      this._helloIntervalVariable = undefined;
      this._multiplier = undefined;
      this._multiplierVariable = undefined;
      this._optional = undefined;
      this._pmtuDiscovery = undefined;
      this._pmtuDiscoveryVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorVariable = value.colorVariable;
      this._dscp = value.dscp;
      this._dscpVariable = value.dscpVariable;
      this._helloInterval = value.helloInterval;
      this._helloIntervalVariable = value.helloIntervalVariable;
      this._multiplier = value.multiplier;
      this._multiplierVariable = value.multiplierVariable;
      this._optional = value.optional;
      this._pmtuDiscovery = value.pmtuDiscovery;
      this._pmtuDiscoveryVariable = value.pmtuDiscoveryVariable;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_variable - computed: false, optional: true, required: false
  private _colorVariable?: string; 
  public get colorVariable() {
    return this.getStringAttribute('color_variable');
  }
  public set colorVariable(value: string) {
    this._colorVariable = value;
  }
  public resetColorVariable() {
    this._colorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorVariableInput() {
    return this._colorVariable;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dscp_variable - computed: false, optional: true, required: false
  private _dscpVariable?: string; 
  public get dscpVariable() {
    return this.getStringAttribute('dscp_variable');
  }
  public set dscpVariable(value: string) {
    this._dscpVariable = value;
  }
  public resetDscpVariable() {
    this._dscpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpVariableInput() {
    return this._dscpVariable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_interval_variable - computed: false, optional: true, required: false
  private _helloIntervalVariable?: string; 
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }
  public set helloIntervalVariable(value: string) {
    this._helloIntervalVariable = value;
  }
  public resetHelloIntervalVariable() {
    this._helloIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalVariableInput() {
    return this._helloIntervalVariable;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // multiplier_variable - computed: false, optional: true, required: false
  private _multiplierVariable?: string; 
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }
  public set multiplierVariable(value: string) {
    this._multiplierVariable = value;
  }
  public resetMultiplierVariable() {
    this._multiplierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierVariableInput() {
    return this._multiplierVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // pmtu_discovery - computed: false, optional: true, required: false
  private _pmtuDiscovery?: boolean | cdktf.IResolvable; 
  public get pmtuDiscovery() {
    return this.getBooleanAttribute('pmtu_discovery');
  }
  public set pmtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._pmtuDiscovery = value;
  }
  public resetPmtuDiscovery() {
    this._pmtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuDiscoveryInput() {
    return this._pmtuDiscovery;
  }

  // pmtu_discovery_variable - computed: false, optional: true, required: false
  private _pmtuDiscoveryVariable?: string; 
  public get pmtuDiscoveryVariable() {
    return this.getStringAttribute('pmtu_discovery_variable');
  }
  public set pmtuDiscoveryVariable(value: string) {
    this._pmtuDiscoveryVariable = value;
  }
  public resetPmtuDiscoveryVariable() {
    this._pmtuDiscoveryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuDiscoveryVariableInput() {
    return this._pmtuDiscoveryVariable;
  }
}

export class CiscoBfdFeatureTemplateColorsList extends cdktf.ComplexList {
  public internalValue? : CiscoBfdFeatureTemplateColors[] | cdktf.IResolvable

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
  public get(index: number): CiscoBfdFeatureTemplateColorsOutputReference {
    return new CiscoBfdFeatureTemplateColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template sdwan_cisco_bfd_feature_template}
*/
export class CiscoBfdFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_bfd_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoBfdFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoBfdFeatureTemplate to import
  * @param importFromId The id of the existing CiscoBfdFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoBfdFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_bfd_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_bfd_feature_template sdwan_cisco_bfd_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoBfdFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoBfdFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_bfd_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colors.internalValue = config.colors;
    this._defaultDscp = config.defaultDscp;
    this._defaultDscpVariable = config.defaultDscpVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._multiplier = config.multiplier;
    this._multiplierVariable = config.multiplierVariable;
    this._name = config.name;
    this._pollInterval = config.pollInterval;
    this._pollIntervalVariable = config.pollIntervalVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // colors - computed: false, optional: true, required: false
  private _colors = new CiscoBfdFeatureTemplateColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: CiscoBfdFeatureTemplateColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // default_dscp - computed: false, optional: true, required: false
  private _defaultDscp?: number; 
  public get defaultDscp() {
    return this.getNumberAttribute('default_dscp');
  }
  public set defaultDscp(value: number) {
    this._defaultDscp = value;
  }
  public resetDefaultDscp() {
    this._defaultDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDscpInput() {
    return this._defaultDscp;
  }

  // default_dscp_variable - computed: false, optional: true, required: false
  private _defaultDscpVariable?: string; 
  public get defaultDscpVariable() {
    return this.getStringAttribute('default_dscp_variable');
  }
  public set defaultDscpVariable(value: string) {
    this._defaultDscpVariable = value;
  }
  public resetDefaultDscpVariable() {
    this._defaultDscpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDscpVariableInput() {
    return this._defaultDscpVariable;
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

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // multiplier_variable - computed: false, optional: true, required: false
  private _multiplierVariable?: string; 
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }
  public set multiplierVariable(value: string) {
    this._multiplierVariable = value;
  }
  public resetMultiplierVariable() {
    this._multiplierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierVariableInput() {
    return this._multiplierVariable;
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

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // poll_interval_variable - computed: false, optional: true, required: false
  private _pollIntervalVariable?: string; 
  public get pollIntervalVariable() {
    return this.getStringAttribute('poll_interval_variable');
  }
  public set pollIntervalVariable(value: string) {
    this._pollIntervalVariable = value;
  }
  public resetPollIntervalVariable() {
    this._pollIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalVariableInput() {
    return this._pollIntervalVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      colors: cdktf.listMapper(ciscoBfdFeatureTemplateColorsToTerraform, false)(this._colors.internalValue),
      default_dscp: cdktf.numberToTerraform(this._defaultDscp),
      default_dscp_variable: cdktf.stringToTerraform(this._defaultDscpVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      multiplier: cdktf.numberToTerraform(this._multiplier),
      multiplier_variable: cdktf.stringToTerraform(this._multiplierVariable),
      name: cdktf.stringToTerraform(this._name),
      poll_interval: cdktf.numberToTerraform(this._pollInterval),
      poll_interval_variable: cdktf.stringToTerraform(this._pollIntervalVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      colors: {
        value: cdktf.listMapperHcl(ciscoBfdFeatureTemplateColorsToHclTerraform, false)(this._colors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoBfdFeatureTemplateColorsList",
      },
      default_dscp: {
        value: cdktf.numberToHclTerraform(this._defaultDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_dscp_variable: {
        value: cdktf.stringToHclTerraform(this._defaultDscpVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      multiplier: {
        value: cdktf.numberToHclTerraform(this._multiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiplier_variable: {
        value: cdktf.stringToHclTerraform(this._multiplierVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_interval: {
        value: cdktf.numberToHclTerraform(this._pollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poll_interval_variable: {
        value: cdktf.stringToHclTerraform(this._pollIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
