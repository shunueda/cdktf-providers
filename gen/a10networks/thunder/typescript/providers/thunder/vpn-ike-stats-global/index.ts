// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIkeStatsGlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global#id VpnIkeStatsGlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global#uuid VpnIkeStatsGlobalA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global#sampling_enable VpnIkeStatsGlobalA#sampling_enable}
  */
  readonly samplingEnable?: VpnIkeStatsGlobalSamplingEnableA[] | cdktf.IResolvable;
}
export interface VpnIkeStatsGlobalSamplingEnableA {
  /**
  * 'all': all; 'v2-init-rekey': Initiate Rekey; 'v2-rsp-rekey': Respond Rekey; 'v2-child-sa-rekey': Child SA Rekey; 'v2-in-invalid': Incoming Invalid; 'v2-in-invalid-spi': Incoming Invalid SPI; 'v2-in-init-req': Incoming Init Request; 'v2-in-init-rsp': Incoming Init Response; 'v2-out-init-req': Outgoing Init Request; 'v2-out-init-rsp': Outgoing Init Response; 'v2-in-auth-req': Incoming Auth Request; 'v2-in-auth-rsp': Incoming Auth Response; 'v2-out-auth-req': Outgoing Auth Request; 'v2-out-auth-rsp': Outgoing Auth Response; 'v2-in-create-child-req': Incoming Create Child Request; 'v2-in-create-child-rsp': Incoming Create Child Response; 'v2-out-create-child-req': Outgoing Create Child Request; 'v2-out-create-child-rsp': Outgoing Create Child Response; 'v2-in-info-req': Incoming Info Request; 'v2-in-info-rsp': Incoming Info Response; 'v2-out-info-req': Outgoing Info Request; 'v2-out-info-rsp': Outgoing Info Response; 'v1-in-id-prot-req': Incoming ID Protection Request; 'v1-in-id-prot-rsp': Incoming ID Protection Response; 'v1-out-id-prot-req': Outgoing ID Protection Request; 'v1-out-id-prot-rsp': Outgoing ID Protection Response; 'v1-in-auth-only-req': Incoming Auth Only Request; 'v1-in-auth-only-rsp': Incoming Auth Only Response; 'v1-out-auth-only-req': Outgoing Auth Only Request; 'v1-out-auth-only-rsp': Outgoing Auth Only Response; 'v1-in-aggressive-req': Incoming Aggressive Request; 'v1-in-aggressive-rsp': Incoming Aggressive Response; 'v1-out-aggressive-req': Outgoing Aggressive Request; 'v1-out-aggressive-rsp': Outgoing Aggressive Response; 'v1-in-info-v1-req': Incoming Info Request; 'v1-in-info-v1-rsp': Incoming Info Response; 'v1-out-info-v1-req': Outgoing Info Request; 'v1-out-info-v1-rsp': Outgoing Info Response; 'v1-in-transaction-req': Incoming Transaction Request; 'v1-in-transaction-rsp': Incoming Transaction Response; 'v1-out-transaction-req': Outgoing Transaction Request; 'v1-out-transaction-rsp': Outgoing Transaction Response; 'v1-in-quick-mode-req': Incoming Quick Mode Request; 'v1-in-quick-mode-rsp': Incoming Quick Mode Response; 'v1-out-quick-mode-req': Outgoing Quick Mode Request; 'v1-out-quick-mode-rsp': Outgoing Quick Mode Response; 'v1-in-new-group-mode-req': Incoming New Group Mode Request; 'v1-in-new-group-mode-rsp': Incoming New Group Mode Response; 'v1-out-new-group-mode-req': Outgoing New Group Mode Request; 'v1-out-new-group-mode-rsp': Outgoing New Group Mode Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global#counters1 VpnIkeStatsGlobalA#counters1}
  */
  readonly counters1?: string;
}

export function vpnIkeStatsGlobalSamplingEnableAToTerraform(struct?: VpnIkeStatsGlobalSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIkeStatsGlobalSamplingEnableAToHclTerraform(struct?: VpnIkeStatsGlobalSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIkeStatsGlobalSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIkeStatsGlobalSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIkeStatsGlobalSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VpnIkeStatsGlobalSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : VpnIkeStatsGlobalSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): VpnIkeStatsGlobalSamplingEnableAOutputReference {
    return new VpnIkeStatsGlobalSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global thunder_vpn_ike_stats_global}
*/
export class VpnIkeStatsGlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_stats_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIkeStatsGlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIkeStatsGlobalA to import
  * @param importFromId The id of the existing VpnIkeStatsGlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIkeStatsGlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_stats_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ike_stats_global thunder_vpn_ike_stats_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIkeStatsGlobalAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnIkeStatsGlobalAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_stats_global',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIkeStatsGlobalSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIkeStatsGlobalSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(vpnIkeStatsGlobalSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(vpnIkeStatsGlobalSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIkeStatsGlobalSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
