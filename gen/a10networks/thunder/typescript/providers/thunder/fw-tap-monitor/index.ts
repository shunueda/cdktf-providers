// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTapMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#id FwTapMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable tap monitor mode; 'disable': Disable tap monitor mode (Default:Disable);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#status FwTapMonitor#status}
  */
  readonly status?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#uuid FwTapMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * tap_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#tap_port_cfg FwTapMonitor#tap_port_cfg}
  */
  readonly tapPortCfg?: FwTapMonitorTapPortCfg[] | cdktf.IResolvable;
}
export interface FwTapMonitorTapPortCfg {
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#tap_eth FwTapMonitor#tap_eth}
  */
  readonly tapEth?: number;
  /**
  * Vlan number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#tap_vlan FwTapMonitor#tap_vlan}
  */
  readonly tapVlan?: number;
}

export function fwTapMonitorTapPortCfgToTerraform(struct?: FwTapMonitorTapPortCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tap_eth: cdktf.numberToTerraform(struct!.tapEth),
    tap_vlan: cdktf.numberToTerraform(struct!.tapVlan),
  }
}


export function fwTapMonitorTapPortCfgToHclTerraform(struct?: FwTapMonitorTapPortCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tap_eth: {
      value: cdktf.numberToHclTerraform(struct!.tapEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tap_vlan: {
      value: cdktf.numberToHclTerraform(struct!.tapVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwTapMonitorTapPortCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTapMonitorTapPortCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tapEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tapEth = this._tapEth;
    }
    if (this._tapVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tapVlan = this._tapVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwTapMonitorTapPortCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tapEth = undefined;
      this._tapVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tapEth = value.tapEth;
      this._tapVlan = value.tapVlan;
    }
  }

  // tap_eth - computed: false, optional: true, required: false
  private _tapEth?: number; 
  public get tapEth() {
    return this.getNumberAttribute('tap_eth');
  }
  public set tapEth(value: number) {
    this._tapEth = value;
  }
  public resetTapEth() {
    this._tapEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapEthInput() {
    return this._tapEth;
  }

  // tap_vlan - computed: false, optional: true, required: false
  private _tapVlan?: number; 
  public get tapVlan() {
    return this.getNumberAttribute('tap_vlan');
  }
  public set tapVlan(value: number) {
    this._tapVlan = value;
  }
  public resetTapVlan() {
    this._tapVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapVlanInput() {
    return this._tapVlan;
  }
}

export class FwTapMonitorTapPortCfgList extends cdktf.ComplexList {
  public internalValue? : FwTapMonitorTapPortCfg[] | cdktf.IResolvable

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
  public get(index: number): FwTapMonitorTapPortCfgOutputReference {
    return new FwTapMonitorTapPortCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor thunder_fw_tap_monitor}
*/
export class FwTapMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_tap_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTapMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTapMonitor to import
  * @param importFromId The id of the existing FwTapMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTapMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_tap_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_tap_monitor thunder_fw_tap_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTapMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwTapMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_tap_monitor',
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
    this._status = config.status;
    this._uuid = config.uuid;
    this._tapPortCfg.internalValue = config.tapPortCfg;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // tap_port_cfg - computed: false, optional: true, required: false
  private _tapPortCfg = new FwTapMonitorTapPortCfgList(this, "tap_port_cfg", false);
  public get tapPortCfg() {
    return this._tapPortCfg;
  }
  public putTapPortCfg(value: FwTapMonitorTapPortCfg[] | cdktf.IResolvable) {
    this._tapPortCfg.internalValue = value;
  }
  public resetTapPortCfg() {
    this._tapPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapPortCfgInput() {
    return this._tapPortCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      tap_port_cfg: cdktf.listMapper(fwTapMonitorTapPortCfgToTerraform, true)(this._tapPortCfg.internalValue),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      tap_port_cfg: {
        value: cdktf.listMapperHcl(fwTapMonitorTapPortCfgToHclTerraform, true)(this._tapPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTapMonitorTapPortCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
