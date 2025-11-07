// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#id DdosTap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#uuid DdosTap#uuid}
  */
  readonly uuid?: string;
  /**
  * ethernet_start_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#ethernet_start_cfg DdosTap#ethernet_start_cfg}
  */
  readonly ethernetStartCfg?: DdosTapEthernetStartCfg[] | cdktf.IResolvable;
}
export interface DdosTapEthernetStartCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#ethernet_end DdosTap#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Traffic receive from the ethernet port will be dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#ethernet_start DdosTap#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function ddosTapEthernetStartCfgToTerraform(struct?: DdosTapEthernetStartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function ddosTapEthernetStartCfgToHclTerraform(struct?: DdosTapEthernetStartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTapEthernetStartCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTapEthernetStartCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTapEthernetStartCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class DdosTapEthernetStartCfgList extends cdktf.ComplexList {
  public internalValue? : DdosTapEthernetStartCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosTapEthernetStartCfgOutputReference {
    return new DdosTapEthernetStartCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap thunder_ddos_tap}
*/
export class DdosTap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_tap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTap to import
  * @param importFromId The id of the existing DdosTap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_tap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_tap thunder_ddos_tap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosTapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_tap',
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
    this._uuid = config.uuid;
    this._ethernetStartCfg.internalValue = config.ethernetStartCfg;
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

  // ethernet_start_cfg - computed: false, optional: true, required: false
  private _ethernetStartCfg = new DdosTapEthernetStartCfgList(this, "ethernet_start_cfg", false);
  public get ethernetStartCfg() {
    return this._ethernetStartCfg;
  }
  public putEthernetStartCfg(value: DdosTapEthernetStartCfg[] | cdktf.IResolvable) {
    this._ethernetStartCfg.internalValue = value;
  }
  public resetEthernetStartCfg() {
    this._ethernetStartCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartCfgInput() {
    return this._ethernetStartCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ethernet_start_cfg: cdktf.listMapper(ddosTapEthernetStartCfgToTerraform, true)(this._ethernetStartCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_start_cfg: {
        value: cdktf.listMapperHcl(ddosTapEthernetStartCfgToHclTerraform, true)(this._ethernetStartCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTapEthernetStartCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
