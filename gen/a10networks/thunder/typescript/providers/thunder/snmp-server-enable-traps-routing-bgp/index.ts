// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsRoutingBgpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable bgpBackwardTransNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpbackwardtransnotification SnmpServerEnableTrapsRoutingBgpA#bgpbackwardtransnotification}
  */
  readonly bgpbackwardtransnotification?: number;
  /**
  * Enable bgpEstablishedNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpestablishednotification SnmpServerEnableTrapsRoutingBgpA#bgpestablishednotification}
  */
  readonly bgpestablishednotification?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#id SnmpServerEnableTrapsRoutingBgpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#uuid SnmpServerEnableTrapsRoutingBgpA#uuid}
  */
  readonly uuid?: string;
  /**
  * ax block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#ax SnmpServerEnableTrapsRoutingBgpA#ax}
  */
  readonly ax?: SnmpServerEnableTrapsRoutingBgpAxA;
}
export interface SnmpServerEnableTrapsRoutingBgpAxA {
  /**
  * Enable bgpBackwardTransNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpbackwardtransnotification SnmpServerEnableTrapsRoutingBgpA#bgpbackwardtransnotification}
  */
  readonly bgpbackwardtransnotification?: number;
  /**
  * Enable bgpEstablishedNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpestablishednotification SnmpServerEnableTrapsRoutingBgpA#bgpestablishednotification}
  */
  readonly bgpestablishednotification?: number;
  /**
  * Enable bgpPrefixThresholdClearNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpprefixthresholdclearnotification SnmpServerEnableTrapsRoutingBgpA#bgpprefixthresholdclearnotification}
  */
  readonly bgpprefixthresholdclearnotification?: number;
  /**
  * Enable bgpPrefixThresholdExceededNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#bgpprefixthresholdexceedednotification SnmpServerEnableTrapsRoutingBgpA#bgpprefixthresholdexceedednotification}
  */
  readonly bgpprefixthresholdexceedednotification?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#uuid SnmpServerEnableTrapsRoutingBgpA#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsRoutingBgpAxAToTerraform(struct?: SnmpServerEnableTrapsRoutingBgpAxAOutputReference | SnmpServerEnableTrapsRoutingBgpAxA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgpbackwardtransnotification: cdktf.numberToTerraform(struct!.bgpbackwardtransnotification),
    bgpestablishednotification: cdktf.numberToTerraform(struct!.bgpestablishednotification),
    bgpprefixthresholdclearnotification: cdktf.numberToTerraform(struct!.bgpprefixthresholdclearnotification),
    bgpprefixthresholdexceedednotification: cdktf.numberToTerraform(struct!.bgpprefixthresholdexceedednotification),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsRoutingBgpAxAToHclTerraform(struct?: SnmpServerEnableTrapsRoutingBgpAxAOutputReference | SnmpServerEnableTrapsRoutingBgpAxA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgpbackwardtransnotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpbackwardtransnotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpestablishednotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpestablishednotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpprefixthresholdclearnotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpprefixthresholdclearnotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgpprefixthresholdexceedednotification: {
      value: cdktf.numberToHclTerraform(struct!.bgpprefixthresholdexceedednotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsRoutingBgpAxAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsRoutingBgpAxA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpbackwardtransnotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpbackwardtransnotification = this._bgpbackwardtransnotification;
    }
    if (this._bgpestablishednotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpestablishednotification = this._bgpestablishednotification;
    }
    if (this._bgpprefixthresholdclearnotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpprefixthresholdclearnotification = this._bgpprefixthresholdclearnotification;
    }
    if (this._bgpprefixthresholdexceedednotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpprefixthresholdexceedednotification = this._bgpprefixthresholdexceedednotification;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsRoutingBgpAxA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpbackwardtransnotification = undefined;
      this._bgpestablishednotification = undefined;
      this._bgpprefixthresholdclearnotification = undefined;
      this._bgpprefixthresholdexceedednotification = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpbackwardtransnotification = value.bgpbackwardtransnotification;
      this._bgpestablishednotification = value.bgpestablishednotification;
      this._bgpprefixthresholdclearnotification = value.bgpprefixthresholdclearnotification;
      this._bgpprefixthresholdexceedednotification = value.bgpprefixthresholdexceedednotification;
      this._uuid = value.uuid;
    }
  }

  // bgpbackwardtransnotification - computed: false, optional: true, required: false
  private _bgpbackwardtransnotification?: number; 
  public get bgpbackwardtransnotification() {
    return this.getNumberAttribute('bgpbackwardtransnotification');
  }
  public set bgpbackwardtransnotification(value: number) {
    this._bgpbackwardtransnotification = value;
  }
  public resetBgpbackwardtransnotification() {
    this._bgpbackwardtransnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpbackwardtransnotificationInput() {
    return this._bgpbackwardtransnotification;
  }

  // bgpestablishednotification - computed: false, optional: true, required: false
  private _bgpestablishednotification?: number; 
  public get bgpestablishednotification() {
    return this.getNumberAttribute('bgpestablishednotification');
  }
  public set bgpestablishednotification(value: number) {
    this._bgpestablishednotification = value;
  }
  public resetBgpestablishednotification() {
    this._bgpestablishednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpestablishednotificationInput() {
    return this._bgpestablishednotification;
  }

  // bgpprefixthresholdclearnotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdclearnotification?: number; 
  public get bgpprefixthresholdclearnotification() {
    return this.getNumberAttribute('bgpprefixthresholdclearnotification');
  }
  public set bgpprefixthresholdclearnotification(value: number) {
    this._bgpprefixthresholdclearnotification = value;
  }
  public resetBgpprefixthresholdclearnotification() {
    this._bgpprefixthresholdclearnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdclearnotificationInput() {
    return this._bgpprefixthresholdclearnotification;
  }

  // bgpprefixthresholdexceedednotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdexceedednotification?: number; 
  public get bgpprefixthresholdexceedednotification() {
    return this.getNumberAttribute('bgpprefixthresholdexceedednotification');
  }
  public set bgpprefixthresholdexceedednotification(value: number) {
    this._bgpprefixthresholdexceedednotification = value;
  }
  public resetBgpprefixthresholdexceedednotification() {
    this._bgpprefixthresholdexceedednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdexceedednotificationInput() {
    return this._bgpprefixthresholdexceedednotification;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp thunder_snmp_server_enable_traps_routing_bgp}
*/
export class SnmpServerEnableTrapsRoutingBgpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_routing_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsRoutingBgpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsRoutingBgpA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsRoutingBgpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsRoutingBgpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_routing_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp thunder_snmp_server_enable_traps_routing_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsRoutingBgpAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsRoutingBgpAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_routing_bgp',
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
    this._bgpbackwardtransnotification = config.bgpbackwardtransnotification;
    this._bgpestablishednotification = config.bgpestablishednotification;
    this._id = config.id;
    this._uuid = config.uuid;
    this._ax.internalValue = config.ax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgpbackwardtransnotification - computed: false, optional: true, required: false
  private _bgpbackwardtransnotification?: number; 
  public get bgpbackwardtransnotification() {
    return this.getNumberAttribute('bgpbackwardtransnotification');
  }
  public set bgpbackwardtransnotification(value: number) {
    this._bgpbackwardtransnotification = value;
  }
  public resetBgpbackwardtransnotification() {
    this._bgpbackwardtransnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpbackwardtransnotificationInput() {
    return this._bgpbackwardtransnotification;
  }

  // bgpestablishednotification - computed: false, optional: true, required: false
  private _bgpestablishednotification?: number; 
  public get bgpestablishednotification() {
    return this.getNumberAttribute('bgpestablishednotification');
  }
  public set bgpestablishednotification(value: number) {
    this._bgpestablishednotification = value;
  }
  public resetBgpestablishednotification() {
    this._bgpestablishednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpestablishednotificationInput() {
    return this._bgpestablishednotification;
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

  // ax - computed: false, optional: true, required: false
  private _ax = new SnmpServerEnableTrapsRoutingBgpAxAOutputReference(this, "ax");
  public get ax() {
    return this._ax;
  }
  public putAx(value: SnmpServerEnableTrapsRoutingBgpAxA) {
    this._ax.internalValue = value;
  }
  public resetAx() {
    this._ax.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axInput() {
    return this._ax.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgpbackwardtransnotification: cdktf.numberToTerraform(this._bgpbackwardtransnotification),
      bgpestablishednotification: cdktf.numberToTerraform(this._bgpestablishednotification),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ax: snmpServerEnableTrapsRoutingBgpAxAToTerraform(this._ax.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgpbackwardtransnotification: {
        value: cdktf.numberToHclTerraform(this._bgpbackwardtransnotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgpestablishednotification: {
        value: cdktf.numberToHclTerraform(this._bgpestablishednotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      ax: {
        value: snmpServerEnableTrapsRoutingBgpAxAToHclTerraform(this._ax.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsRoutingBgpAxAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
