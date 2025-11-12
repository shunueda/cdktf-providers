// https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Startup configuration of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#config Node#config}
  */
  readonly config?: string;
  /**
  * Number of CPUs allocated to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#cpu Node#cpu}
  */
  readonly cpu?: number;
  /**
  * Delay in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#delay Node#delay}
  */
  readonly delay?: number;
  /**
  * Number of Ethernet interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#ethernet Node#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Icon for the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#icon Node#icon}
  */
  readonly icon?: string;
  /**
  * Image associated with the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#image Node#image}
  */
  readonly image?: string;
  /**
  * Path to the lab file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#lab_path Node#lab_path}
  */
  readonly labPath: string;
  /**
  * Left position of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#left Node#left}
  */
  readonly left?: number;
  /**
  * Name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#name Node#name}
  */
  readonly name: string;
  /**
  * RAM allocated to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#ram Node#ram}
  */
  readonly ram?: number;
  /**
  * Template used for the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#template Node#template}
  */
  readonly template: string;
  /**
  * Top position of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#top Node#top}
  */
  readonly top?: number;
  /**
  * Type of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#type Node#type}
  */
  readonly type: string;
}
export interface NodeInterfaces {
}

export function nodeInterfacesToTerraform(struct?: NodeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodeInterfacesToHclTerraform(struct?: NodeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodeInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ethernet - computed: true, optional: false, required: false
  public get ethernet() {
    return this.getListAttribute('ethernet');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getListAttribute('serial');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node eveng_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eveng_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eveng_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/node eveng_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'eveng_node',
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
    this._config = config.config;
    this._cpu = config.cpu;
    this._delay = config.delay;
    this._ethernet = config.ethernet;
    this._icon = config.icon;
    this._image = config.image;
    this._labPath = config.labPath;
    this._left = config.left;
    this._name = config.name;
    this._ram = config.ram;
    this._template = config.template;
    this._top = config.top;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // console - computed: true, optional: false, required: false
  public get console() {
    return this.getStringAttribute('console');
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // ethernet - computed: true, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new NodeInterfacesOutputReference(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }

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

  // left - computed: true, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
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

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // top - computed: true, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      cpu: cdktf.numberToTerraform(this._cpu),
      delay: cdktf.numberToTerraform(this._delay),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      icon: cdktf.stringToTerraform(this._icon),
      image: cdktf.stringToTerraform(this._image),
      lab_path: cdktf.stringToTerraform(this._labPath),
      left: cdktf.numberToTerraform(this._left),
      name: cdktf.stringToTerraform(this._name),
      ram: cdktf.numberToTerraform(this._ram),
      template: cdktf.stringToTerraform(this._template),
      top: cdktf.numberToTerraform(this._top),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lab_path: {
        value: cdktf.stringToHclTerraform(this._labPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      left: {
        value: cdktf.numberToHclTerraform(this._left),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top: {
        value: cdktf.numberToHclTerraform(this._top),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
