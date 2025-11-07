// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemBfdFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set color that identifies the WAN transport tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#colors SystemBfdFeature#colors}
  */
  readonly colors?: SystemBfdFeatureColors[] | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`63`
  *   - Default value: `48`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#default_dscp SystemBfdFeature#default_dscp}
  */
  readonly defaultDscp?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#default_dscp_variable SystemBfdFeature#default_dscp_variable}
  */
  readonly defaultDscpVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#description SystemBfdFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#feature_profile_id SystemBfdFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * 
  *   - Range: `1`-`6`
  *   - Default value: `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#multiplier SystemBfdFeature#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#multiplier_variable SystemBfdFeature#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#name SystemBfdFeature#name}
  */
  readonly name: string;
  /**
  * 
  *   - Range: `1`-`4294967295`
  *   - Default value: `600000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#poll_interval SystemBfdFeature#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#poll_interval_variable SystemBfdFeature#poll_interval_variable}
  */
  readonly pollIntervalVariable?: string;
}
export interface SystemBfdFeatureColors {
  /**
  * Color that identifies the WAN transport tunnel
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#color SystemBfdFeature#color}
  */
  readonly color?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#color_variable SystemBfdFeature#color_variable}
  */
  readonly colorVariable?: string;
  /**
  * BFD Default DSCP value for tloc color
  *   - Range: `0`-`63`
  *   - Default value: `48`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#dscp SystemBfdFeature#dscp}
  */
  readonly dscp?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#dscp_variable SystemBfdFeature#dscp_variable}
  */
  readonly dscpVariable?: string;
  /**
  * Hello Interval (milliseconds)
  *   - Range: `100`-`300000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#hello_interval SystemBfdFeature#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#hello_interval_variable SystemBfdFeature#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Multiplier
  *   - Range: `1`-`60`
  *   - Default value: `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#multiplier SystemBfdFeature#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#multiplier_variable SystemBfdFeature#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * Path MTU Discovery
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#pmtu_discovery SystemBfdFeature#pmtu_discovery}
  */
  readonly pmtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#pmtu_discovery_variable SystemBfdFeature#pmtu_discovery_variable}
  */
  readonly pmtuDiscoveryVariable?: string;
}

export function systemBfdFeatureColorsToTerraform(struct?: SystemBfdFeatureColors | cdktf.IResolvable): any {
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
    pmtu_discovery: cdktf.booleanToTerraform(struct!.pmtuDiscovery),
    pmtu_discovery_variable: cdktf.stringToTerraform(struct!.pmtuDiscoveryVariable),
  }
}


export function systemBfdFeatureColorsToHclTerraform(struct?: SystemBfdFeatureColors | cdktf.IResolvable): any {
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

export class SystemBfdFeatureColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemBfdFeatureColors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemBfdFeatureColors | cdktf.IResolvable | undefined) {
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

export class SystemBfdFeatureColorsList extends cdktf.ComplexList {
  public internalValue? : SystemBfdFeatureColors[] | cdktf.IResolvable

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
  public get(index: number): SystemBfdFeatureColorsOutputReference {
    return new SystemBfdFeatureColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature sdwan_system_bfd_feature}
*/
export class SystemBfdFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_bfd_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemBfdFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemBfdFeature to import
  * @param importFromId The id of the existing SystemBfdFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemBfdFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_bfd_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_bfd_feature sdwan_system_bfd_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemBfdFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemBfdFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_bfd_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._featureProfileId = config.featureProfileId;
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
  private _colors = new SystemBfdFeatureColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: SystemBfdFeatureColors[] | cdktf.IResolvable) {
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      colors: cdktf.listMapper(systemBfdFeatureColorsToTerraform, false)(this._colors.internalValue),
      default_dscp: cdktf.numberToTerraform(this._defaultDscp),
      default_dscp_variable: cdktf.stringToTerraform(this._defaultDscpVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
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
        value: cdktf.listMapperHcl(systemBfdFeatureColorsToHclTerraform, false)(this._colors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemBfdFeatureColorsList",
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
