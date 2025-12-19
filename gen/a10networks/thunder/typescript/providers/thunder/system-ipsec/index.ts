// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpsecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Crypto cores assigned for IPsec processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#crypto_core SystemIpsecA#crypto_core}
  */
  readonly cryptoCore?: number;
  /**
  * Crypto memory percentage assigned for IPsec processing (rounded to increments of 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#crypto_mem SystemIpsecA#crypto_mem}
  */
  readonly cryptoMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#id SystemIpsecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable packet round robin for IPsec packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#packet_round_robin SystemIpsecA#packet_round_robin}
  */
  readonly packetRoundRobin?: number;
  /**
  * HW assisted QAT SSL module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#qat SystemIpsecA#qat}
  */
  readonly qat?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#uuid SystemIpsecA#uuid}
  */
  readonly uuid?: string;
  /**
  * fpga_decrypt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#fpga_decrypt SystemIpsecA#fpga_decrypt}
  */
  readonly fpgaDecrypt?: SystemIpsecFpgaDecryptA;
}
export interface SystemIpsecFpgaDecryptA {
  /**
  * 'enable': Enable FPGA decryption offload; 'disable': Disable FPGA decryption offload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#action SystemIpsecA#action}
  */
  readonly action?: string;
}

export function systemIpsecFpgaDecryptAToTerraform(struct?: SystemIpsecFpgaDecryptAOutputReference | SystemIpsecFpgaDecryptA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function systemIpsecFpgaDecryptAToHclTerraform(struct?: SystemIpsecFpgaDecryptAOutputReference | SystemIpsecFpgaDecryptA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpsecFpgaDecryptAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpsecFpgaDecryptA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpsecFpgaDecryptA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec thunder_system_ipsec}
*/
export class SystemIpsecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpsecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpsecA to import
  * @param importFromId The id of the existing SystemIpsecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpsecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipsec thunder_system_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpsecAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpsecAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ipsec',
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
    this._cryptoCore = config.cryptoCore;
    this._cryptoMem = config.cryptoMem;
    this._id = config.id;
    this._packetRoundRobin = config.packetRoundRobin;
    this._qat = config.qat;
    this._uuid = config.uuid;
    this._fpgaDecrypt.internalValue = config.fpgaDecrypt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_core - computed: false, optional: true, required: false
  private _cryptoCore?: number; 
  public get cryptoCore() {
    return this.getNumberAttribute('crypto_core');
  }
  public set cryptoCore(value: number) {
    this._cryptoCore = value;
  }
  public resetCryptoCore() {
    this._cryptoCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoreInput() {
    return this._cryptoCore;
  }

  // crypto_mem - computed: false, optional: true, required: false
  private _cryptoMem?: number; 
  public get cryptoMem() {
    return this.getNumberAttribute('crypto_mem');
  }
  public set cryptoMem(value: number) {
    this._cryptoMem = value;
  }
  public resetCryptoMem() {
    this._cryptoMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMemInput() {
    return this._cryptoMem;
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

  // packet_round_robin - computed: false, optional: true, required: false
  private _packetRoundRobin?: number; 
  public get packetRoundRobin() {
    return this.getNumberAttribute('packet_round_robin');
  }
  public set packetRoundRobin(value: number) {
    this._packetRoundRobin = value;
  }
  public resetPacketRoundRobin() {
    this._packetRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRoundRobinInput() {
    return this._packetRoundRobin;
  }

  // qat - computed: false, optional: true, required: false
  private _qat?: number; 
  public get qat() {
    return this.getNumberAttribute('qat');
  }
  public set qat(value: number) {
    this._qat = value;
  }
  public resetQat() {
    this._qat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatInput() {
    return this._qat;
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

  // fpga_decrypt - computed: false, optional: true, required: false
  private _fpgaDecrypt = new SystemIpsecFpgaDecryptAOutputReference(this, "fpga_decrypt");
  public get fpgaDecrypt() {
    return this._fpgaDecrypt;
  }
  public putFpgaDecrypt(value: SystemIpsecFpgaDecryptA) {
    this._fpgaDecrypt.internalValue = value;
  }
  public resetFpgaDecrypt() {
    this._fpgaDecrypt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaDecryptInput() {
    return this._fpgaDecrypt.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_core: cdktf.numberToTerraform(this._cryptoCore),
      crypto_mem: cdktf.numberToTerraform(this._cryptoMem),
      id: cdktf.stringToTerraform(this._id),
      packet_round_robin: cdktf.numberToTerraform(this._packetRoundRobin),
      qat: cdktf.numberToTerraform(this._qat),
      uuid: cdktf.stringToTerraform(this._uuid),
      fpga_decrypt: systemIpsecFpgaDecryptAToTerraform(this._fpgaDecrypt.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_core: {
        value: cdktf.numberToHclTerraform(this._cryptoCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crypto_mem: {
        value: cdktf.numberToHclTerraform(this._cryptoMem),
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
      packet_round_robin: {
        value: cdktf.numberToHclTerraform(this._packetRoundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qat: {
        value: cdktf.numberToHclTerraform(this._qat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fpga_decrypt: {
        value: systemIpsecFpgaDecryptAToHclTerraform(this._fpgaDecrypt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpsecFpgaDecryptAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
