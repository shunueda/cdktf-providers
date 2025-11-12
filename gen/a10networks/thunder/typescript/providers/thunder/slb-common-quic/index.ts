// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonQuicAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Length of CID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#cid_len SlbCommonQuicA#cid_len}
  */
  readonly cidLen?: number;
  /**
  * Offset for Encoded CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#cpu_offset SlbCommonQuicA#cpu_offset}
  */
  readonly cpuOffset?: number;
  /**
  * Enable CID Hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#enable_hash SlbCommonQuicA#enable_hash}
  */
  readonly enableHash?: number;
  /**
  * Enable CID Signature Validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#enable_signature SlbCommonQuicA#enable_signature}
  */
  readonly enableSignature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#id SlbCommonQuicA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Offset for QUIC-LB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#quic_lb_offset SlbCommonQuicA#quic_lb_offset}
  */
  readonly quicLbOffset?: number;
  /**
  * Set CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#signature SlbCommonQuicA#signature}
  */
  readonly signature?: string;
  /**
  * Offset for CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#signature_len SlbCommonQuicA#signature_len}
  */
  readonly signatureLen?: number;
  /**
  * Offset for CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#signature_offset SlbCommonQuicA#signature_offset}
  */
  readonly signatureOffset?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#uuid SlbCommonQuicA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic thunder_slb_common_quic}
*/
export class SlbCommonQuicA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommonQuicA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommonQuicA to import
  * @param importFromId The id of the existing SlbCommonQuicA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommonQuicA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common_quic thunder_slb_common_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonQuicAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonQuicAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common_quic',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidLen = config.cidLen;
    this._cpuOffset = config.cpuOffset;
    this._enableHash = config.enableHash;
    this._enableSignature = config.enableSignature;
    this._id = config.id;
    this._quicLbOffset = config.quicLbOffset;
    this._signature = config.signature;
    this._signatureLen = config.signatureLen;
    this._signatureOffset = config.signatureOffset;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cid_len - computed: false, optional: true, required: false
  private _cidLen?: number; 
  public get cidLen() {
    return this.getNumberAttribute('cid_len');
  }
  public set cidLen(value: number) {
    this._cidLen = value;
  }
  public resetCidLen() {
    this._cidLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidLenInput() {
    return this._cidLen;
  }

  // cpu_offset - computed: false, optional: true, required: false
  private _cpuOffset?: number; 
  public get cpuOffset() {
    return this.getNumberAttribute('cpu_offset');
  }
  public set cpuOffset(value: number) {
    this._cpuOffset = value;
  }
  public resetCpuOffset() {
    this._cpuOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOffsetInput() {
    return this._cpuOffset;
  }

  // enable_hash - computed: false, optional: true, required: false
  private _enableHash?: number; 
  public get enableHash() {
    return this.getNumberAttribute('enable_hash');
  }
  public set enableHash(value: number) {
    this._enableHash = value;
  }
  public resetEnableHash() {
    this._enableHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHashInput() {
    return this._enableHash;
  }

  // enable_signature - computed: false, optional: true, required: false
  private _enableSignature?: number; 
  public get enableSignature() {
    return this.getNumberAttribute('enable_signature');
  }
  public set enableSignature(value: number) {
    this._enableSignature = value;
  }
  public resetEnableSignature() {
    this._enableSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSignatureInput() {
    return this._enableSignature;
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

  // quic_lb_offset - computed: false, optional: true, required: false
  private _quicLbOffset?: number; 
  public get quicLbOffset() {
    return this.getNumberAttribute('quic_lb_offset');
  }
  public set quicLbOffset(value: number) {
    this._quicLbOffset = value;
  }
  public resetQuicLbOffset() {
    this._quicLbOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicLbOffsetInput() {
    return this._quicLbOffset;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signature_len - computed: false, optional: true, required: false
  private _signatureLen?: number; 
  public get signatureLen() {
    return this.getNumberAttribute('signature_len');
  }
  public set signatureLen(value: number) {
    this._signatureLen = value;
  }
  public resetSignatureLen() {
    this._signatureLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureLenInput() {
    return this._signatureLen;
  }

  // signature_offset - computed: false, optional: true, required: false
  private _signatureOffset?: number; 
  public get signatureOffset() {
    return this.getNumberAttribute('signature_offset');
  }
  public set signatureOffset(value: number) {
    this._signatureOffset = value;
  }
  public resetSignatureOffset() {
    this._signatureOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOffsetInput() {
    return this._signatureOffset;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cid_len: cdktf.numberToTerraform(this._cidLen),
      cpu_offset: cdktf.numberToTerraform(this._cpuOffset),
      enable_hash: cdktf.numberToTerraform(this._enableHash),
      enable_signature: cdktf.numberToTerraform(this._enableSignature),
      id: cdktf.stringToTerraform(this._id),
      quic_lb_offset: cdktf.numberToTerraform(this._quicLbOffset),
      signature: cdktf.stringToTerraform(this._signature),
      signature_len: cdktf.numberToTerraform(this._signatureLen),
      signature_offset: cdktf.numberToTerraform(this._signatureOffset),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cid_len: {
        value: cdktf.numberToHclTerraform(this._cidLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_offset: {
        value: cdktf.numberToHclTerraform(this._cpuOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_hash: {
        value: cdktf.numberToHclTerraform(this._enableHash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_signature: {
        value: cdktf.numberToHclTerraform(this._enableSignature),
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
      quic_lb_offset: {
        value: cdktf.numberToHclTerraform(this._quicLbOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_len: {
        value: cdktf.numberToHclTerraform(this._signatureLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_offset: {
        value: cdktf.numberToHclTerraform(this._signatureOffset),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
