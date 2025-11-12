// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentRoutingV6Config extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#delete_mode SegmentRoutingV6#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#device SegmentRoutingV6#device}
  */
  readonly device?: string;
  /**
  * Enable SRv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#enable SegmentRoutingV6#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Configure a source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#encapsulation_source_address SegmentRoutingV6#encapsulation_source_address}
  */
  readonly encapsulationSourceAddress?: string;
  /**
  * Configure a SRv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#formats SegmentRoutingV6#formats}
  */
  readonly formats?: SegmentRoutingV6Formats[] | cdktf.IResolvable;
  /**
  * Configure a SRv6 locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#locators SegmentRoutingV6#locators}
  */
  readonly locators?: SegmentRoutingV6Locators[] | cdktf.IResolvable;
}
export interface SegmentRoutingV6Formats {
  /**
  * Enable a SRv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#format_enable SegmentRoutingV6#format_enable}
  */
  readonly formatEnable?: boolean | cdktf.IResolvable;
  /**
  * Format name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#name SegmentRoutingV6#name}
  */
  readonly name: string;
  /**
  * Start of Explicit LIB
  *   - Range: `57444`-`65279`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#usid_local_id_block_ranges_explict_lib_start SegmentRoutingV6#usid_local_id_block_ranges_explict_lib_start}
  */
  readonly usidLocalIdBlockRangesExplictLibStart?: number;
  /**
  * Start of LIB
  *   - Range: `57344`-`57344`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#usid_local_id_block_ranges_lib_start SegmentRoutingV6#usid_local_id_block_ranges_lib_start}
  */
  readonly usidLocalIdBlockRangesLibStart?: number;
  /**
  * Specify uSID WLIB explicit range
  *   - Range: `65520`-`65527`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#usid_wide_local_id_block_explicit_range SegmentRoutingV6#usid_wide_local_id_block_explicit_range}
  */
  readonly usidWideLocalIdBlockExplicitRange?: number;
}

export function segmentRoutingV6FormatsToTerraform(struct?: SegmentRoutingV6Formats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_enable: cdktf.booleanToTerraform(struct!.formatEnable),
    name: cdktf.stringToTerraform(struct!.name),
    usid_local_id_block_ranges_explict_lib_start: cdktf.numberToTerraform(struct!.usidLocalIdBlockRangesExplictLibStart),
    usid_local_id_block_ranges_lib_start: cdktf.numberToTerraform(struct!.usidLocalIdBlockRangesLibStart),
    usid_wide_local_id_block_explicit_range: cdktf.numberToTerraform(struct!.usidWideLocalIdBlockExplicitRange),
  }
}


export function segmentRoutingV6FormatsToHclTerraform(struct?: SegmentRoutingV6Formats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_enable: {
      value: cdktf.booleanToHclTerraform(struct!.formatEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usid_local_id_block_ranges_explict_lib_start: {
      value: cdktf.numberToHclTerraform(struct!.usidLocalIdBlockRangesExplictLibStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usid_local_id_block_ranges_lib_start: {
      value: cdktf.numberToHclTerraform(struct!.usidLocalIdBlockRangesLibStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usid_wide_local_id_block_explicit_range: {
      value: cdktf.numberToHclTerraform(struct!.usidWideLocalIdBlockExplicitRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingV6FormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingV6Formats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatEnable = this._formatEnable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._usidLocalIdBlockRangesExplictLibStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.usidLocalIdBlockRangesExplictLibStart = this._usidLocalIdBlockRangesExplictLibStart;
    }
    if (this._usidLocalIdBlockRangesLibStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.usidLocalIdBlockRangesLibStart = this._usidLocalIdBlockRangesLibStart;
    }
    if (this._usidWideLocalIdBlockExplicitRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.usidWideLocalIdBlockExplicitRange = this._usidWideLocalIdBlockExplicitRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingV6Formats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formatEnable = undefined;
      this._name = undefined;
      this._usidLocalIdBlockRangesExplictLibStart = undefined;
      this._usidLocalIdBlockRangesLibStart = undefined;
      this._usidWideLocalIdBlockExplicitRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formatEnable = value.formatEnable;
      this._name = value.name;
      this._usidLocalIdBlockRangesExplictLibStart = value.usidLocalIdBlockRangesExplictLibStart;
      this._usidLocalIdBlockRangesLibStart = value.usidLocalIdBlockRangesLibStart;
      this._usidWideLocalIdBlockExplicitRange = value.usidWideLocalIdBlockExplicitRange;
    }
  }

  // format_enable - computed: false, optional: true, required: false
  private _formatEnable?: boolean | cdktf.IResolvable; 
  public get formatEnable() {
    return this.getBooleanAttribute('format_enable');
  }
  public set formatEnable(value: boolean | cdktf.IResolvable) {
    this._formatEnable = value;
  }
  public resetFormatEnable() {
    this._formatEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatEnableInput() {
    return this._formatEnable;
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

  // usid_local_id_block_ranges_explict_lib_start - computed: false, optional: true, required: false
  private _usidLocalIdBlockRangesExplictLibStart?: number; 
  public get usidLocalIdBlockRangesExplictLibStart() {
    return this.getNumberAttribute('usid_local_id_block_ranges_explict_lib_start');
  }
  public set usidLocalIdBlockRangesExplictLibStart(value: number) {
    this._usidLocalIdBlockRangesExplictLibStart = value;
  }
  public resetUsidLocalIdBlockRangesExplictLibStart() {
    this._usidLocalIdBlockRangesExplictLibStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usidLocalIdBlockRangesExplictLibStartInput() {
    return this._usidLocalIdBlockRangesExplictLibStart;
  }

  // usid_local_id_block_ranges_lib_start - computed: false, optional: true, required: false
  private _usidLocalIdBlockRangesLibStart?: number; 
  public get usidLocalIdBlockRangesLibStart() {
    return this.getNumberAttribute('usid_local_id_block_ranges_lib_start');
  }
  public set usidLocalIdBlockRangesLibStart(value: number) {
    this._usidLocalIdBlockRangesLibStart = value;
  }
  public resetUsidLocalIdBlockRangesLibStart() {
    this._usidLocalIdBlockRangesLibStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usidLocalIdBlockRangesLibStartInput() {
    return this._usidLocalIdBlockRangesLibStart;
  }

  // usid_wide_local_id_block_explicit_range - computed: false, optional: true, required: false
  private _usidWideLocalIdBlockExplicitRange?: number; 
  public get usidWideLocalIdBlockExplicitRange() {
    return this.getNumberAttribute('usid_wide_local_id_block_explicit_range');
  }
  public set usidWideLocalIdBlockExplicitRange(value: number) {
    this._usidWideLocalIdBlockExplicitRange = value;
  }
  public resetUsidWideLocalIdBlockExplicitRange() {
    this._usidWideLocalIdBlockExplicitRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usidWideLocalIdBlockExplicitRangeInput() {
    return this._usidWideLocalIdBlockExplicitRange;
  }
}

export class SegmentRoutingV6FormatsList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingV6Formats[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingV6FormatsOutputReference {
    return new SegmentRoutingV6FormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRoutingV6Locators {
  /**
  * Enable a SRv6 locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#locator_enable SegmentRoutingV6#locator_enable}
  */
  readonly locatorEnable?: boolean | cdktf.IResolvable;
  /**
  * Specify Locator's behavior
  *   - Choices: `unode-psp-usd`, `unode-shift-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#micro_segment_behavior SegmentRoutingV6#micro_segment_behavior}
  */
  readonly microSegmentBehavior?: string;
  /**
  * Locator name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#name SegmentRoutingV6#name}
  */
  readonly name: string;
  /**
  * IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#prefix SegmentRoutingV6#prefix}
  */
  readonly prefix?: string;
  /**
  * Prefix length
  *   - Range: `32`-`112`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#prefix_length SegmentRoutingV6#prefix_length}
  */
  readonly prefixLength?: number;
}

export function segmentRoutingV6LocatorsToTerraform(struct?: SegmentRoutingV6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator_enable: cdktf.booleanToTerraform(struct!.locatorEnable),
    micro_segment_behavior: cdktf.stringToTerraform(struct!.microSegmentBehavior),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function segmentRoutingV6LocatorsToHclTerraform(struct?: SegmentRoutingV6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator_enable: {
      value: cdktf.booleanToHclTerraform(struct!.locatorEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    micro_segment_behavior: {
      value: cdktf.stringToHclTerraform(struct!.microSegmentBehavior),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingV6LocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingV6Locators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locatorEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.locatorEnable = this._locatorEnable;
    }
    if (this._microSegmentBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.microSegmentBehavior = this._microSegmentBehavior;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingV6Locators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locatorEnable = undefined;
      this._microSegmentBehavior = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locatorEnable = value.locatorEnable;
      this._microSegmentBehavior = value.microSegmentBehavior;
      this._name = value.name;
      this._prefix = value.prefix;
      this._prefixLength = value.prefixLength;
    }
  }

  // locator_enable - computed: false, optional: true, required: false
  private _locatorEnable?: boolean | cdktf.IResolvable; 
  public get locatorEnable() {
    return this.getBooleanAttribute('locator_enable');
  }
  public set locatorEnable(value: boolean | cdktf.IResolvable) {
    this._locatorEnable = value;
  }
  public resetLocatorEnable() {
    this._locatorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorEnableInput() {
    return this._locatorEnable;
  }

  // micro_segment_behavior - computed: false, optional: true, required: false
  private _microSegmentBehavior?: string; 
  public get microSegmentBehavior() {
    return this.getStringAttribute('micro_segment_behavior');
  }
  public set microSegmentBehavior(value: string) {
    this._microSegmentBehavior = value;
  }
  public resetMicroSegmentBehavior() {
    this._microSegmentBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microSegmentBehaviorInput() {
    return this._microSegmentBehavior;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

export class SegmentRoutingV6LocatorsList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingV6Locators[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingV6LocatorsOutputReference {
    return new SegmentRoutingV6LocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6 iosxr_segment_routing_v6}
*/
export class SegmentRoutingV6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing_v6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentRoutingV6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentRoutingV6 to import
  * @param importFromId The id of the existing SegmentRoutingV6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentRoutingV6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing_v6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_v6 iosxr_segment_routing_v6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentRoutingV6Config = {}
  */
  public constructor(scope: Construct, id: string, config: SegmentRoutingV6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_segment_routing_v6',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._enable = config.enable;
    this._encapsulationSourceAddress = config.encapsulationSourceAddress;
    this._formats.internalValue = config.formats;
    this._locators.internalValue = config.locators;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // encapsulation_source_address - computed: false, optional: true, required: false
  private _encapsulationSourceAddress?: string; 
  public get encapsulationSourceAddress() {
    return this.getStringAttribute('encapsulation_source_address');
  }
  public set encapsulationSourceAddress(value: string) {
    this._encapsulationSourceAddress = value;
  }
  public resetEncapsulationSourceAddress() {
    this._encapsulationSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationSourceAddressInput() {
    return this._encapsulationSourceAddress;
  }

  // formats - computed: false, optional: true, required: false
  private _formats = new SegmentRoutingV6FormatsList(this, "formats", false);
  public get formats() {
    return this._formats;
  }
  public putFormats(value: SegmentRoutingV6Formats[] | cdktf.IResolvable) {
    this._formats.internalValue = value;
  }
  public resetFormats() {
    this._formats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new SegmentRoutingV6LocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: SegmentRoutingV6Locators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      enable: cdktf.booleanToTerraform(this._enable),
      encapsulation_source_address: cdktf.stringToTerraform(this._encapsulationSourceAddress),
      formats: cdktf.listMapper(segmentRoutingV6FormatsToTerraform, false)(this._formats.internalValue),
      locators: cdktf.listMapper(segmentRoutingV6LocatorsToTerraform, false)(this._locators.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encapsulation_source_address: {
        value: cdktf.stringToHclTerraform(this._encapsulationSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formats: {
        value: cdktf.listMapperHcl(segmentRoutingV6FormatsToHclTerraform, false)(this._formats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingV6FormatsList",
      },
      locators: {
        value: cdktf.listMapperHcl(segmentRoutingV6LocatorsToHclTerraform, false)(this._locators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingV6LocatorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
