// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * IS-IS area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#area_tag Isis#area_tag}
  */
  readonly areaTag: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#delete_mode Isis#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#device Isis#device}
  */
  readonly device?: string;
  /**
  * Log changes in adjacency state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#log_adjacency_changes Isis#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: boolean | cdktf.IResolvable;
  /**
  * Log all adjacency changes including non-IIH events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#log_adjacency_changes_all Isis#log_adjacency_changes_all}
  */
  readonly logAdjacencyChangesAll?: boolean | cdktf.IResolvable;
  /**
  * Use old style of TLVs with narrow metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#metric_style_narrow Isis#metric_style_narrow}
  */
  readonly metricStyleNarrow?: boolean | cdktf.IResolvable;
  /**
  * Send and accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#metric_style_transition Isis#metric_style_transition}
  */
  readonly metricStyleTransition?: boolean | cdktf.IResolvable;
  /**
  * Use new style of TLVs to carry wider metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#metric_style_wide Isis#metric_style_wide}
  */
  readonly metricStyleWide?: boolean | cdktf.IResolvable;
  /**
  * Network Entity Titles for this IS-IS process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#nets Isis#nets}
  */
  readonly nets?: IsisNets[] | cdktf.IResolvable;
}
export interface IsisNets {
  /**
  * NET value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#tag Isis#tag}
  */
  readonly tag: string;
}

export function isisNetsToTerraform(struct?: IsisNets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function isisNetsToHclTerraform(struct?: IsisNets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IsisNetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IsisNets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsisNets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class IsisNetsList extends cdktf.ComplexList {
  public internalValue? : IsisNets[] | cdktf.IResolvable

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
  public get(index: number): IsisNetsOutputReference {
    return new IsisNetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis iosxe_isis}
*/
export class Isis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Isis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Isis to import
  * @param importFromId The id of the existing Isis that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Isis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/isis iosxe_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsisConfig
  */
  public constructor(scope: Construct, id: string, config: IsisConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_isis',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaTag = config.areaTag;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._logAdjacencyChanges = config.logAdjacencyChanges;
    this._logAdjacencyChangesAll = config.logAdjacencyChangesAll;
    this._metricStyleNarrow = config.metricStyleNarrow;
    this._metricStyleTransition = config.metricStyleTransition;
    this._metricStyleWide = config.metricStyleWide;
    this._nets.internalValue = config.nets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_tag - computed: false, optional: false, required: true
  private _areaTag?: string; 
  public get areaTag() {
    return this.getStringAttribute('area_tag');
  }
  public set areaTag(value: string) {
    this._areaTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTagInput() {
    return this._areaTag;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_adjacency_changes - computed: false, optional: true, required: false
  private _logAdjacencyChanges?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }
  public set logAdjacencyChanges(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChanges = value;
  }
  public resetLogAdjacencyChanges() {
    this._logAdjacencyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesInput() {
    return this._logAdjacencyChanges;
  }

  // log_adjacency_changes_all - computed: false, optional: true, required: false
  private _logAdjacencyChangesAll?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChangesAll() {
    return this.getBooleanAttribute('log_adjacency_changes_all');
  }
  public set logAdjacencyChangesAll(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChangesAll = value;
  }
  public resetLogAdjacencyChangesAll() {
    this._logAdjacencyChangesAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesAllInput() {
    return this._logAdjacencyChangesAll;
  }

  // metric_style_narrow - computed: false, optional: true, required: false
  private _metricStyleNarrow?: boolean | cdktf.IResolvable; 
  public get metricStyleNarrow() {
    return this.getBooleanAttribute('metric_style_narrow');
  }
  public set metricStyleNarrow(value: boolean | cdktf.IResolvable) {
    this._metricStyleNarrow = value;
  }
  public resetMetricStyleNarrow() {
    this._metricStyleNarrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleNarrowInput() {
    return this._metricStyleNarrow;
  }

  // metric_style_transition - computed: false, optional: true, required: false
  private _metricStyleTransition?: boolean | cdktf.IResolvable; 
  public get metricStyleTransition() {
    return this.getBooleanAttribute('metric_style_transition');
  }
  public set metricStyleTransition(value: boolean | cdktf.IResolvable) {
    this._metricStyleTransition = value;
  }
  public resetMetricStyleTransition() {
    this._metricStyleTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleTransitionInput() {
    return this._metricStyleTransition;
  }

  // metric_style_wide - computed: false, optional: true, required: false
  private _metricStyleWide?: boolean | cdktf.IResolvable; 
  public get metricStyleWide() {
    return this.getBooleanAttribute('metric_style_wide');
  }
  public set metricStyleWide(value: boolean | cdktf.IResolvable) {
    this._metricStyleWide = value;
  }
  public resetMetricStyleWide() {
    this._metricStyleWide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleWideInput() {
    return this._metricStyleWide;
  }

  // nets - computed: false, optional: true, required: false
  private _nets = new IsisNetsList(this, "nets", true);
  public get nets() {
    return this._nets;
  }
  public putNets(value: IsisNets[] | cdktf.IResolvable) {
    this._nets.internalValue = value;
  }
  public resetNets() {
    this._nets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_tag: cdktf.stringToTerraform(this._areaTag),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      log_adjacency_changes: cdktf.booleanToTerraform(this._logAdjacencyChanges),
      log_adjacency_changes_all: cdktf.booleanToTerraform(this._logAdjacencyChangesAll),
      metric_style_narrow: cdktf.booleanToTerraform(this._metricStyleNarrow),
      metric_style_transition: cdktf.booleanToTerraform(this._metricStyleTransition),
      metric_style_wide: cdktf.booleanToTerraform(this._metricStyleWide),
      nets: cdktf.listMapper(isisNetsToTerraform, false)(this._nets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_tag: {
        value: cdktf.stringToHclTerraform(this._areaTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      log_adjacency_changes: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_adjacency_changes_all: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChangesAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_narrow: {
        value: cdktf.booleanToHclTerraform(this._metricStyleNarrow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_transition: {
        value: cdktf.booleanToHclTerraform(this._metricStyleTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_wide: {
        value: cdktf.booleanToHclTerraform(this._metricStyleWide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nets: {
        value: cdktf.listMapperHcl(isisNetsToHclTerraform, false)(this._nets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IsisNetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
