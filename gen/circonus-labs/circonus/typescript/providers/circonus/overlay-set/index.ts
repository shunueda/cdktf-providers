// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlaySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#graph_cid OverlaySet#graph_cid}
  */
  readonly graphCid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#id OverlaySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#title OverlaySet#title}
  */
  readonly title: string;
  /**
  * overlays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#overlays OverlaySet#overlays}
  */
  readonly overlays: OverlaySetOverlays[] | cdktf.IResolvable;
}
export interface OverlaySetOverlaysDataOpts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#graph_title OverlaySet#graph_title}
  */
  readonly graphTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#graph_uuid OverlaySet#graph_uuid}
  */
  readonly graphUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#x_shift OverlaySet#x_shift}
  */
  readonly xShift: string;
}

export function overlaySetOverlaysDataOptsToTerraform(struct?: OverlaySetOverlaysDataOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graph_title: cdktf.stringToTerraform(struct!.graphTitle),
    graph_uuid: cdktf.stringToTerraform(struct!.graphUuid),
    x_shift: cdktf.stringToTerraform(struct!.xShift),
  }
}


export function overlaySetOverlaysDataOptsToHclTerraform(struct?: OverlaySetOverlaysDataOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graph_title: {
      value: cdktf.stringToHclTerraform(struct!.graphTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graph_uuid: {
      value: cdktf.stringToHclTerraform(struct!.graphUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_shift: {
      value: cdktf.stringToHclTerraform(struct!.xShift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlaySetOverlaysDataOptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlaySetOverlaysDataOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphTitle = this._graphTitle;
    }
    if (this._graphUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphUuid = this._graphUuid;
    }
    if (this._xShift !== undefined) {
      hasAnyValues = true;
      internalValueResult.xShift = this._xShift;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlaySetOverlaysDataOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphTitle = undefined;
      this._graphUuid = undefined;
      this._xShift = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphTitle = value.graphTitle;
      this._graphUuid = value.graphUuid;
      this._xShift = value.xShift;
    }
  }

  // graph_title - computed: false, optional: false, required: true
  private _graphTitle?: string; 
  public get graphTitle() {
    return this.getStringAttribute('graph_title');
  }
  public set graphTitle(value: string) {
    this._graphTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphTitleInput() {
    return this._graphTitle;
  }

  // graph_uuid - computed: false, optional: false, required: true
  private _graphUuid?: string; 
  public get graphUuid() {
    return this.getStringAttribute('graph_uuid');
  }
  public set graphUuid(value: string) {
    this._graphUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphUuidInput() {
    return this._graphUuid;
  }

  // x_shift - computed: false, optional: false, required: true
  private _xShift?: string; 
  public get xShift() {
    return this.getStringAttribute('x_shift');
  }
  public set xShift(value: string) {
    this._xShift = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xShiftInput() {
    return this._xShift;
  }
}

export class OverlaySetOverlaysDataOptsList extends cdktf.ComplexList {
  public internalValue? : OverlaySetOverlaysDataOpts[] | cdktf.IResolvable

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
  public get(index: number): OverlaySetOverlaysDataOptsOutputReference {
    return new OverlaySetOverlaysDataOptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlaySetOverlaysUiSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#decouple OverlaySet#decouple}
  */
  readonly decouple?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#id OverlaySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#label OverlaySet#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#type OverlaySet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#z OverlaySet#z}
  */
  readonly z?: string;
}

export function overlaySetOverlaysUiSpecsToTerraform(struct?: OverlaySetOverlaysUiSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decouple: cdktf.booleanToTerraform(struct!.decouple),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
    z: cdktf.stringToTerraform(struct!.z),
  }
}


export function overlaySetOverlaysUiSpecsToHclTerraform(struct?: OverlaySetOverlaysUiSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decouple: {
      value: cdktf.booleanToHclTerraform(struct!.decouple),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    z: {
      value: cdktf.stringToHclTerraform(struct!.z),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlaySetOverlaysUiSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlaySetOverlaysUiSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decouple !== undefined) {
      hasAnyValues = true;
      internalValueResult.decouple = this._decouple;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._z !== undefined) {
      hasAnyValues = true;
      internalValueResult.z = this._z;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlaySetOverlaysUiSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decouple = undefined;
      this._id = undefined;
      this._label = undefined;
      this._type = undefined;
      this._z = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decouple = value.decouple;
      this._id = value.id;
      this._label = value.label;
      this._type = value.type;
      this._z = value.z;
    }
  }

  // decouple - computed: false, optional: true, required: false
  private _decouple?: boolean | cdktf.IResolvable; 
  public get decouple() {
    return this.getBooleanAttribute('decouple');
  }
  public set decouple(value: boolean | cdktf.IResolvable) {
    this._decouple = value;
  }
  public resetDecouple() {
    this._decouple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decoupleInput() {
    return this._decouple;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // z - computed: false, optional: true, required: false
  private _z?: string; 
  public get z() {
    return this.getStringAttribute('z');
  }
  public set z(value: string) {
    this._z = value;
  }
  public resetZ() {
    this._z = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zInput() {
    return this._z;
  }
}

export class OverlaySetOverlaysUiSpecsList extends cdktf.ComplexList {
  public internalValue? : OverlaySetOverlaysUiSpecs[] | cdktf.IResolvable

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
  public get(index: number): OverlaySetOverlaysUiSpecsOutputReference {
    return new OverlaySetOverlaysUiSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlaySetOverlays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#id OverlaySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * data_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#data_opts OverlaySet#data_opts}
  */
  readonly dataOpts: OverlaySetOverlaysDataOpts[] | cdktf.IResolvable;
  /**
  * ui_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#ui_specs OverlaySet#ui_specs}
  */
  readonly uiSpecs: OverlaySetOverlaysUiSpecs[] | cdktf.IResolvable;
}

export function overlaySetOverlaysToTerraform(struct?: OverlaySetOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    data_opts: cdktf.listMapper(overlaySetOverlaysDataOptsToTerraform, true)(struct!.dataOpts),
    ui_specs: cdktf.listMapper(overlaySetOverlaysUiSpecsToTerraform, true)(struct!.uiSpecs),
  }
}


export function overlaySetOverlaysToHclTerraform(struct?: OverlaySetOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_opts: {
      value: cdktf.listMapperHcl(overlaySetOverlaysDataOptsToHclTerraform, true)(struct!.dataOpts),
      isBlock: true,
      type: "set",
      storageClassType: "OverlaySetOverlaysDataOptsList",
    },
    ui_specs: {
      value: cdktf.listMapperHcl(overlaySetOverlaysUiSpecsToHclTerraform, true)(struct!.uiSpecs),
      isBlock: true,
      type: "set",
      storageClassType: "OverlaySetOverlaysUiSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlaySetOverlaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlaySetOverlays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._dataOpts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataOpts = this._dataOpts?.internalValue;
    }
    if (this._uiSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiSpecs = this._uiSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlaySetOverlays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._dataOpts.internalValue = undefined;
      this._uiSpecs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._dataOpts.internalValue = value.dataOpts;
      this._uiSpecs.internalValue = value.uiSpecs;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // data_opts - computed: false, optional: false, required: true
  private _dataOpts = new OverlaySetOverlaysDataOptsList(this, "data_opts", true);
  public get dataOpts() {
    return this._dataOpts;
  }
  public putDataOpts(value: OverlaySetOverlaysDataOpts[] | cdktf.IResolvable) {
    this._dataOpts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOptsInput() {
    return this._dataOpts.internalValue;
  }

  // ui_specs - computed: false, optional: false, required: true
  private _uiSpecs = new OverlaySetOverlaysUiSpecsList(this, "ui_specs", true);
  public get uiSpecs() {
    return this._uiSpecs;
  }
  public putUiSpecs(value: OverlaySetOverlaysUiSpecs[] | cdktf.IResolvable) {
    this._uiSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiSpecsInput() {
    return this._uiSpecs.internalValue;
  }
}

export class OverlaySetOverlaysList extends cdktf.ComplexList {
  public internalValue? : OverlaySetOverlays[] | cdktf.IResolvable

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
  public get(index: number): OverlaySetOverlaysOutputReference {
    return new OverlaySetOverlaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set circonus_overlay_set}
*/
export class OverlaySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_overlay_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlaySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlaySet to import
  * @param importFromId The id of the existing OverlaySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlaySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_overlay_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/overlay_set circonus_overlay_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlaySetConfig
  */
  public constructor(scope: Construct, id: string, config: OverlaySetConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_overlay_set',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._graphCid = config.graphCid;
    this._id = config.id;
    this._title = config.title;
    this._overlays.internalValue = config.overlays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graph_cid - computed: false, optional: false, required: true
  private _graphCid?: string; 
  public get graphCid() {
    return this.getStringAttribute('graph_cid');
  }
  public set graphCid(value: string) {
    this._graphCid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphCidInput() {
    return this._graphCid;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // overlays - computed: false, optional: false, required: true
  private _overlays = new OverlaySetOverlaysList(this, "overlays", true);
  public get overlays() {
    return this._overlays;
  }
  public putOverlays(value: OverlaySetOverlays[] | cdktf.IResolvable) {
    this._overlays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      graph_cid: cdktf.stringToTerraform(this._graphCid),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      overlays: cdktf.listMapper(overlaySetOverlaysToTerraform, true)(this._overlays.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      graph_cid: {
        value: cdktf.stringToHclTerraform(this._graphCid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlays: {
        value: cdktf.listMapperHcl(overlaySetOverlaysToHclTerraform, true)(this._overlays.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OverlaySetOverlaysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
