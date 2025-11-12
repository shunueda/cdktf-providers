// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Layer2ControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable nonstop operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#nonstop_bridging Layer2Control#nonstop_bridging}
  */
  readonly nonstopBridging?: boolean | cdktf.IResolvable;
  /**
  * bpdu_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#bpdu_block Layer2Control#bpdu_block}
  */
  readonly bpduBlock?: Layer2ControlBpduBlock;
  /**
  * mac_rewrite_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#mac_rewrite_interface Layer2Control#mac_rewrite_interface}
  */
  readonly macRewriteInterface?: Layer2ControlMacRewriteInterface[] | cdktf.IResolvable;
}
export interface Layer2ControlBpduBlockInterface {
  /**
  * Disable bpdu-block on a port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#disable Layer2Control#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Drop xSTP BPDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#drop Layer2Control#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#name Layer2Control#name}
  */
  readonly name: string;
}

export function layer2ControlBpduBlockInterfaceToTerraform(struct?: Layer2ControlBpduBlockInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    drop: cdktf.booleanToTerraform(struct!.drop),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function layer2ControlBpduBlockInterfaceToHclTerraform(struct?: Layer2ControlBpduBlockInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Layer2ControlBpduBlockInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Layer2ControlBpduBlockInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Layer2ControlBpduBlockInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._drop = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._drop = value.drop;
      this._name = value.name;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
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

export class Layer2ControlBpduBlockInterfaceList extends cdktf.ComplexList {
  public internalValue? : Layer2ControlBpduBlockInterface[] | cdktf.IResolvable

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
  public get(index: number): Layer2ControlBpduBlockInterfaceOutputReference {
    return new Layer2ControlBpduBlockInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Layer2ControlBpduBlock {
  /**
  * Disable timeout for BPDU Protect (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#disable_timeout Layer2Control#disable_timeout}
  */
  readonly disableTimeout?: number;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#interface Layer2Control#interface}
  */
  readonly interface?: Layer2ControlBpduBlockInterface[] | cdktf.IResolvable;
}

export function layer2ControlBpduBlockToTerraform(struct?: Layer2ControlBpduBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_timeout: cdktf.numberToTerraform(struct!.disableTimeout),
    interface: cdktf.listMapper(layer2ControlBpduBlockInterfaceToTerraform, true)(struct!.interface),
  }
}


export function layer2ControlBpduBlockToHclTerraform(struct?: Layer2ControlBpduBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_timeout: {
      value: cdktf.numberToHclTerraform(struct!.disableTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(layer2ControlBpduBlockInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "Layer2ControlBpduBlockInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Layer2ControlBpduBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Layer2ControlBpduBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTimeout = this._disableTimeout;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Layer2ControlBpduBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableTimeout = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableTimeout = value.disableTimeout;
      this._interface.internalValue = value.interface;
    }
  }

  // disable_timeout - computed: false, optional: true, required: false
  private _disableTimeout?: number; 
  public get disableTimeout() {
    return this.getNumberAttribute('disable_timeout');
  }
  public set disableTimeout(value: number) {
    this._disableTimeout = value;
  }
  public resetDisableTimeout() {
    this._disableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTimeoutInput() {
    return this._disableTimeout;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new Layer2ControlBpduBlockInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: Layer2ControlBpduBlockInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface Layer2ControlMacRewriteInterface {
  /**
  * Enable tunneling for all the IFLs under the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#enable_all_ifl Layer2Control#enable_all_ifl}
  */
  readonly enableAllIfl?: boolean | cdktf.IResolvable;
  /**
  * Name of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#name Layer2Control#name}
  */
  readonly name: string;
  /**
  * Protocols for which mac rewrite need to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#protocol Layer2Control#protocol}
  */
  readonly protocol?: string[];
}

export function layer2ControlMacRewriteInterfaceToTerraform(struct?: Layer2ControlMacRewriteInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_all_ifl: cdktf.booleanToTerraform(struct!.enableAllIfl),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
  }
}


export function layer2ControlMacRewriteInterfaceToHclTerraform(struct?: Layer2ControlMacRewriteInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_all_ifl: {
      value: cdktf.booleanToHclTerraform(struct!.enableAllIfl),
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
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Layer2ControlMacRewriteInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Layer2ControlMacRewriteInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAllIfl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAllIfl = this._enableAllIfl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Layer2ControlMacRewriteInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAllIfl = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAllIfl = value.enableAllIfl;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // enable_all_ifl - computed: false, optional: true, required: false
  private _enableAllIfl?: boolean | cdktf.IResolvable; 
  public get enableAllIfl() {
    return this.getBooleanAttribute('enable_all_ifl');
  }
  public set enableAllIfl(value: boolean | cdktf.IResolvable) {
    this._enableAllIfl = value;
  }
  public resetEnableAllIfl() {
    this._enableAllIfl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllIflInput() {
    return this._enableAllIfl;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class Layer2ControlMacRewriteInterfaceList extends cdktf.ComplexList {
  public internalValue? : Layer2ControlMacRewriteInterface[] | cdktf.IResolvable

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
  public get(index: number): Layer2ControlMacRewriteInterfaceOutputReference {
    return new Layer2ControlMacRewriteInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control junos_layer2_control}
*/
export class Layer2Control extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_layer2_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Layer2Control resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Layer2Control to import
  * @param importFromId The id of the existing Layer2Control that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Layer2Control to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_layer2_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/layer2_control junos_layer2_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Layer2ControlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Layer2ControlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_layer2_control',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nonstopBridging = config.nonstopBridging;
    this._bpduBlock.internalValue = config.bpduBlock;
    this._macRewriteInterface.internalValue = config.macRewriteInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nonstop_bridging - computed: false, optional: true, required: false
  private _nonstopBridging?: boolean | cdktf.IResolvable; 
  public get nonstopBridging() {
    return this.getBooleanAttribute('nonstop_bridging');
  }
  public set nonstopBridging(value: boolean | cdktf.IResolvable) {
    this._nonstopBridging = value;
  }
  public resetNonstopBridging() {
    this._nonstopBridging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonstopBridgingInput() {
    return this._nonstopBridging;
  }

  // bpdu_block - computed: false, optional: true, required: false
  private _bpduBlock = new Layer2ControlBpduBlockOutputReference(this, "bpdu_block");
  public get bpduBlock() {
    return this._bpduBlock;
  }
  public putBpduBlock(value: Layer2ControlBpduBlock) {
    this._bpduBlock.internalValue = value;
  }
  public resetBpduBlock() {
    this._bpduBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduBlockInput() {
    return this._bpduBlock.internalValue;
  }

  // mac_rewrite_interface - computed: false, optional: true, required: false
  private _macRewriteInterface = new Layer2ControlMacRewriteInterfaceList(this, "mac_rewrite_interface", true);
  public get macRewriteInterface() {
    return this._macRewriteInterface;
  }
  public putMacRewriteInterface(value: Layer2ControlMacRewriteInterface[] | cdktf.IResolvable) {
    this._macRewriteInterface.internalValue = value;
  }
  public resetMacRewriteInterface() {
    this._macRewriteInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macRewriteInterfaceInput() {
    return this._macRewriteInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nonstop_bridging: cdktf.booleanToTerraform(this._nonstopBridging),
      bpdu_block: layer2ControlBpduBlockToTerraform(this._bpduBlock.internalValue),
      mac_rewrite_interface: cdktf.listMapper(layer2ControlMacRewriteInterfaceToTerraform, true)(this._macRewriteInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nonstop_bridging: {
        value: cdktf.booleanToHclTerraform(this._nonstopBridging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_block: {
        value: layer2ControlBpduBlockToHclTerraform(this._bpduBlock.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Layer2ControlBpduBlock",
      },
      mac_rewrite_interface: {
        value: cdktf.listMapperHcl(layer2ControlMacRewriteInterfaceToHclTerraform, true)(this._macRewriteInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Layer2ControlMacRewriteInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
