// https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the lab file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#lab_path NodeLink#lab_path}
  */
  readonly labPath: string;
  /**
  * ID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#network_id NodeLink#network_id}
  */
  readonly networkId?: number;
  /**
  * ID of the source node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#source_node_id NodeLink#source_node_id}
  */
  readonly sourceNodeId: number;
  /**
  * Source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#source_port NodeLink#source_port}
  */
  readonly sourcePort: string;
  /**
  * Style of the link(Only for the Pro version of EVE-NG).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#style NodeLink#style}
  */
  readonly style?: NodeLinkStyle;
  /**
  * ID of the target node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#target_node_id NodeLink#target_node_id}
  */
  readonly targetNodeId?: number;
  /**
  * Target port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#target_port NodeLink#target_port}
  */
  readonly targetPort?: string;
}
export interface NodeLinkStyle {
  /**
  * Bezier curviness of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#beziercurviness NodeLink#beziercurviness}
  */
  readonly beziercurviness?: number;
  /**
  * Color of the link in hexadecimal format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#color NodeLink#color}
  */
  readonly color?: string;
  /**
  * Curviness of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#curviness NodeLink#curviness}
  */
  readonly curviness?: number;
  /**
  * Position of the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#dstpos NodeLink#dstpos}
  */
  readonly dstpos?: number;
  /**
  * Label of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#label NodeLink#label}
  */
  readonly label?: string;
  /**
  * Position of the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#labelpos NodeLink#labelpos}
  */
  readonly labelpos?: number;
  /**
  * Style of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#linkstyle NodeLink#linkstyle}
  */
  readonly linkstyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#midpoint NodeLink#midpoint}
  */
  readonly midpoint?: number;
  /**
  * Roundness of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#round NodeLink#round}
  */
  readonly round?: number;
  /**
  * Position of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#srcpos NodeLink#srcpos}
  */
  readonly srcpos?: number;
  /**
  * Stub of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#stub NodeLink#stub}
  */
  readonly stub?: number;
  /**
  * Style of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#style NodeLink#style}
  */
  readonly style?: string;
  /**
  * Width of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#width NodeLink#width}
  */
  readonly width?: number;
}

export function nodeLinkStyleToTerraform(struct?: NodeLinkStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beziercurviness: cdktf.numberToTerraform(struct!.beziercurviness),
    color: cdktf.stringToTerraform(struct!.color),
    curviness: cdktf.numberToTerraform(struct!.curviness),
    dstpos: cdktf.numberToTerraform(struct!.dstpos),
    label: cdktf.stringToTerraform(struct!.label),
    labelpos: cdktf.numberToTerraform(struct!.labelpos),
    linkstyle: cdktf.stringToTerraform(struct!.linkstyle),
    midpoint: cdktf.numberToTerraform(struct!.midpoint),
    round: cdktf.numberToTerraform(struct!.round),
    srcpos: cdktf.numberToTerraform(struct!.srcpos),
    stub: cdktf.numberToTerraform(struct!.stub),
    style: cdktf.stringToTerraform(struct!.style),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function nodeLinkStyleToHclTerraform(struct?: NodeLinkStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beziercurviness: {
      value: cdktf.numberToHclTerraform(struct!.beziercurviness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curviness: {
      value: cdktf.numberToHclTerraform(struct!.curviness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dstpos: {
      value: cdktf.numberToHclTerraform(struct!.dstpos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labelpos: {
      value: cdktf.numberToHclTerraform(struct!.labelpos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkstyle: {
      value: cdktf.stringToHclTerraform(struct!.linkstyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    midpoint: {
      value: cdktf.numberToHclTerraform(struct!.midpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    round: {
      value: cdktf.numberToHclTerraform(struct!.round),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srcpos: {
      value: cdktf.numberToHclTerraform(struct!.srcpos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stub: {
      value: cdktf.numberToHclTerraform(struct!.stub),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeLinkStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeLinkStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beziercurviness !== undefined) {
      hasAnyValues = true;
      internalValueResult.beziercurviness = this._beziercurviness;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._curviness !== undefined) {
      hasAnyValues = true;
      internalValueResult.curviness = this._curviness;
    }
    if (this._dstpos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstpos = this._dstpos;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._labelpos !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelpos = this._labelpos;
    }
    if (this._linkstyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkstyle = this._linkstyle;
    }
    if (this._midpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.midpoint = this._midpoint;
    }
    if (this._round !== undefined) {
      hasAnyValues = true;
      internalValueResult.round = this._round;
    }
    if (this._srcpos !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcpos = this._srcpos;
    }
    if (this._stub !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeLinkStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beziercurviness = undefined;
      this._color = undefined;
      this._curviness = undefined;
      this._dstpos = undefined;
      this._label = undefined;
      this._labelpos = undefined;
      this._linkstyle = undefined;
      this._midpoint = undefined;
      this._round = undefined;
      this._srcpos = undefined;
      this._stub = undefined;
      this._style = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beziercurviness = value.beziercurviness;
      this._color = value.color;
      this._curviness = value.curviness;
      this._dstpos = value.dstpos;
      this._label = value.label;
      this._labelpos = value.labelpos;
      this._linkstyle = value.linkstyle;
      this._midpoint = value.midpoint;
      this._round = value.round;
      this._srcpos = value.srcpos;
      this._stub = value.stub;
      this._style = value.style;
      this._width = value.width;
    }
  }

  // beziercurviness - computed: true, optional: true, required: false
  private _beziercurviness?: number; 
  public get beziercurviness() {
    return this.getNumberAttribute('beziercurviness');
  }
  public set beziercurviness(value: number) {
    this._beziercurviness = value;
  }
  public resetBeziercurviness() {
    this._beziercurviness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beziercurvinessInput() {
    return this._beziercurviness;
  }

  // color - computed: true, optional: true, required: false
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

  // curviness - computed: true, optional: true, required: false
  private _curviness?: number; 
  public get curviness() {
    return this.getNumberAttribute('curviness');
  }
  public set curviness(value: number) {
    this._curviness = value;
  }
  public resetCurviness() {
    this._curviness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvinessInput() {
    return this._curviness;
  }

  // dstpos - computed: true, optional: true, required: false
  private _dstpos?: number; 
  public get dstpos() {
    return this.getNumberAttribute('dstpos');
  }
  public set dstpos(value: number) {
    this._dstpos = value;
  }
  public resetDstpos() {
    this._dstpos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstposInput() {
    return this._dstpos;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // labelpos - computed: true, optional: true, required: false
  private _labelpos?: number; 
  public get labelpos() {
    return this.getNumberAttribute('labelpos');
  }
  public set labelpos(value: number) {
    this._labelpos = value;
  }
  public resetLabelpos() {
    this._labelpos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelposInput() {
    return this._labelpos;
  }

  // linkstyle - computed: true, optional: true, required: false
  private _linkstyle?: string; 
  public get linkstyle() {
    return this.getStringAttribute('linkstyle');
  }
  public set linkstyle(value: string) {
    this._linkstyle = value;
  }
  public resetLinkstyle() {
    this._linkstyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkstyleInput() {
    return this._linkstyle;
  }

  // midpoint - computed: true, optional: true, required: false
  private _midpoint?: number; 
  public get midpoint() {
    return this.getNumberAttribute('midpoint');
  }
  public set midpoint(value: number) {
    this._midpoint = value;
  }
  public resetMidpoint() {
    this._midpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midpointInput() {
    return this._midpoint;
  }

  // round - computed: true, optional: true, required: false
  private _round?: number; 
  public get round() {
    return this.getNumberAttribute('round');
  }
  public set round(value: number) {
    this._round = value;
  }
  public resetRound() {
    this._round = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundInput() {
    return this._round;
  }

  // srcpos - computed: true, optional: true, required: false
  private _srcpos?: number; 
  public get srcpos() {
    return this.getNumberAttribute('srcpos');
  }
  public set srcpos(value: number) {
    this._srcpos = value;
  }
  public resetSrcpos() {
    this._srcpos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcposInput() {
    return this._srcpos;
  }

  // stub - computed: true, optional: true, required: false
  private _stub?: number; 
  public get stub() {
    return this.getNumberAttribute('stub');
  }
  public set stub(value: number) {
    this._stub = value;
  }
  public resetStub() {
    this._stub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub;
  }

  // style - computed: true, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link eveng_node_link}
*/
export class NodeLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eveng_node_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodeLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodeLink to import
  * @param importFromId The id of the existing NodeLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodeLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eveng_node_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node_link eveng_node_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeLinkConfig
  */
  public constructor(scope: Construct, id: string, config: NodeLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'eveng_node_link',
      terraformGeneratorMetadata: {
        providerName: 'eveng',
        providerVersion: '0.1.7',
        providerVersionConstraint: '0.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labPath = config.labPath;
    this._networkId = config.networkId;
    this._sourceNodeId = config.sourceNodeId;
    this._sourcePort = config.sourcePort;
    this._style.internalValue = config.style;
    this._targetNodeId = config.targetNodeId;
    this._targetPort = config.targetPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // lab_path - computed: false, optional: false, required: true
  private _labPath?: string; 
  public get labPath() {
    return this.getStringAttribute('lab_path');
  }
  public set labPath(value: string) {
    this._labPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labPathInput() {
    return this._labPath;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // source_node_id - computed: false, optional: false, required: true
  private _sourceNodeId?: number; 
  public get sourceNodeId() {
    return this.getNumberAttribute('source_node_id');
  }
  public set sourceNodeId(value: number) {
    this._sourceNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNodeIdInput() {
    return this._sourceNodeId;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // style - computed: false, optional: true, required: false
  private _style = new NodeLinkStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: NodeLinkStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }

  // target_node_id - computed: false, optional: true, required: false
  private _targetNodeId?: number; 
  public get targetNodeId() {
    return this.getNumberAttribute('target_node_id');
  }
  public set targetNodeId(value: number) {
    this._targetNodeId = value;
  }
  public resetTargetNodeId() {
    this._targetNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeIdInput() {
    return this._targetNodeId;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lab_path: cdktf.stringToTerraform(this._labPath),
      network_id: cdktf.numberToTerraform(this._networkId),
      source_node_id: cdktf.numberToTerraform(this._sourceNodeId),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      style: nodeLinkStyleToTerraform(this._style.internalValue),
      target_node_id: cdktf.numberToTerraform(this._targetNodeId),
      target_port: cdktf.stringToTerraform(this._targetPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lab_path: {
        value: cdktf.stringToHclTerraform(this._labPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.numberToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_node_id: {
        value: cdktf.numberToHclTerraform(this._sourceNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style: {
        value: nodeLinkStyleToHclTerraform(this._style.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NodeLinkStyle",
      },
      target_node_id: {
        value: cdktf.numberToHclTerraform(this._targetNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_port: {
        value: cdktf.stringToHclTerraform(this._targetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
