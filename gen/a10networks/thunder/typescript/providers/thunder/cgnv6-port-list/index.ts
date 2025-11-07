// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6PortListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#id Cgnv6PortList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the port list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#name Cgnv6PortList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#user_tag Cgnv6PortList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#uuid Cgnv6PortList#uuid}
  */
  readonly uuid?: string;
  /**
  * port_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#port_config Cgnv6PortList#port_config}
  */
  readonly portConfig?: Cgnv6PortListPortConfig[] | cdktf.IResolvable;
}
export interface Cgnv6PortListPortConfig {
  /**
  * Original port to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#original_port Cgnv6PortList#original_port}
  */
  readonly originalPort?: number;
  /**
  * Port after translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#translated_port Cgnv6PortList#translated_port}
  */
  readonly translatedPort?: number;
}

export function cgnv6PortListPortConfigToTerraform(struct?: Cgnv6PortListPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original_port: cdktf.numberToTerraform(struct!.originalPort),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function cgnv6PortListPortConfigToHclTerraform(struct?: Cgnv6PortListPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original_port: {
      value: cdktf.numberToHclTerraform(struct!.originalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translated_port: {
      value: cdktf.numberToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6PortListPortConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6PortListPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalPort = this._originalPort;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6PortListPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originalPort = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originalPort = value.originalPort;
      this._translatedPort = value.translatedPort;
    }
  }

  // original_port - computed: false, optional: true, required: false
  private _originalPort?: number; 
  public get originalPort() {
    return this.getNumberAttribute('original_port');
  }
  public set originalPort(value: number) {
    this._originalPort = value;
  }
  public resetOriginalPort() {
    this._originalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalPortInput() {
    return this._originalPort;
  }

  // translated_port - computed: false, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}

export class Cgnv6PortListPortConfigList extends cdktf.ComplexList {
  public internalValue? : Cgnv6PortListPortConfig[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6PortListPortConfigOutputReference {
    return new Cgnv6PortListPortConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list thunder_cgnv6_port_list}
*/
export class Cgnv6PortList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_port_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6PortList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6PortList to import
  * @param importFromId The id of the existing Cgnv6PortList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6PortList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_port_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_port_list thunder_cgnv6_port_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6PortListConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6PortListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_port_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._portConfig.internalValue = config.portConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // port_config - computed: false, optional: true, required: false
  private _portConfig = new Cgnv6PortListPortConfigList(this, "port_config", false);
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: Cgnv6PortListPortConfig[] | cdktf.IResolvable) {
    this._portConfig.internalValue = value;
  }
  public resetPortConfig() {
    this._portConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      port_config: cdktf.listMapper(cgnv6PortListPortConfigToTerraform, true)(this._portConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_config: {
        value: cdktf.listMapperHcl(cgnv6PortListPortConfigToHclTerraform, true)(this._portConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6PortListPortConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
