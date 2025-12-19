// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsVbladesStatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#id VcsVbladesStat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#uuid VcsVbladesStat#uuid}
  */
  readonly uuid?: string;
  /**
  * vBlade-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#vblade_id VcsVbladesStat#vblade_id}
  */
  readonly vbladeId: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#sampling_enable VcsVbladesStat#sampling_enable}
  */
  readonly samplingEnable?: VcsVbladesStatSamplingEnable[] | cdktf.IResolvable;
}
export interface VcsVbladesStatSamplingEnable {
  /**
  * 'all': all; 'slave_recv_err': vBlade Receive Errors counter of aVCS election; 'slave_send_err': vBlade Send Errors counter of aVCS election; 'slave_recv_bytes': vBlade Received Bytes counter of aVCS election; 'slave_sent_bytes': vBlade Sent Bytes counter of aVCS election; 'slave_n_recv': vBlade Received Messages counter of aVCS election; 'slave_n_sent': vBlade Sent Messages counter of aVCS election; 'slave_msg_inval': vBlade Invalid Messages counter of aVCS election; 'slave_keepalive': vBlade Received Keepalives counter of aVCS election; 'slave_cfg_upd': vBlade Received Configuration Updates counter of aVCS election; 'slave_cfg_upd_l1_fail': vBlade Local Configuration Update Errors (1) counter of aVCS election; 'slave_cfg_upd_r_fail': vBlade Remote Configuration Update Errors counter of aVCS election; 'slave_cfg_upd_l2_fail': vBlade Local Configuration Update Errors (2) counter of aVCS election; 'slave_cfg_upd_notif_err': vBlade Configuration Update Notif Errors counter of aVCS election; 'slave_cfg_upd_result_err': vBlade Configuration Update Result Errors counter of aVCS election;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#counters1 VcsVbladesStat#counters1}
  */
  readonly counters1?: string;
}

export function vcsVbladesStatSamplingEnableToTerraform(struct?: VcsVbladesStatSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vcsVbladesStatSamplingEnableToHclTerraform(struct?: VcsVbladesStatSamplingEnable | cdktf.IResolvable): any {
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

export class VcsVbladesStatSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsVbladesStatSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VcsVbladesStatSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VcsVbladesStatSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VcsVbladesStatSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VcsVbladesStatSamplingEnableOutputReference {
    return new VcsVbladesStatSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat thunder_vcs_vblades_stat}
*/
export class VcsVbladesStat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vblades_stat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsVbladesStat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsVbladesStat to import
  * @param importFromId The id of the existing VcsVbladesStat that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsVbladesStat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vblades_stat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vblades_stat thunder_vcs_vblades_stat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsVbladesStatConfig
  */
  public constructor(scope: Construct, id: string, config: VcsVbladesStatConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vblades_stat',
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
    this._vbladeId = config.vbladeId;
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

  // vblade_id - computed: false, optional: false, required: true
  private _vbladeId?: number; 
  public get vbladeId() {
    return this.getNumberAttribute('vblade_id');
  }
  public set vbladeId(value: number) {
    this._vbladeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbladeIdInput() {
    return this._vbladeId;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VcsVbladesStatSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VcsVbladesStatSamplingEnable[] | cdktf.IResolvable) {
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
      vblade_id: cdktf.numberToTerraform(this._vbladeId),
      sampling_enable: cdktf.listMapper(vcsVbladesStatSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      vblade_id: {
        value: cdktf.numberToHclTerraform(this._vbladeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(vcsVbladesStatSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsVbladesStatSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
