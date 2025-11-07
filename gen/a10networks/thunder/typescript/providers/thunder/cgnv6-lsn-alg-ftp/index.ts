// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnAlgFtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'disable': Disable FTP ALG for LSN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#ftp_value Cgnv6LsnAlgFtp#ftp_value}
  */
  readonly ftpValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#id Cgnv6LsnAlgFtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#uuid Cgnv6LsnAlgFtp#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#sampling_enable Cgnv6LsnAlgFtp#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnAlgFtpSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnAlgFtpSamplingEnable {
  /**
  * 'all': all; 'port-requests': PORT Requests From Client; 'eprt-requests': EPRT Requests From Client; 'lprt-requests': LPRT Requests From Client; 'pasv-replies': PASV Replies From Server; 'epsv-replies': EPSV Replies From Server; 'lpsv-replies': LPSV Replies From Server; 'port-retransmits': Port Mode Request Retransmits; 'pasv-retransmits': Passive Mode Reply Retransmits; 'port-helper-created': Port Mode Helper Created; 'pasv-helper-created': Passive Mode Helper Created; 'port-helper-freed': Port Mode Helper Freed; 'pasv-helper-freed': Passive Mode Helper Freed; 'port-helper-unused': Port Mode Helper Unused; 'pasv-helper-unused': Passive Mode Helper Unused; 'port-helper-creation-failure': Port Helper Creation Failure; 'pasv-helper-creation-failure': Passive Helper Creation Failure; 'get-conn-ext-failure': Get Conn Extension Failure; 'smp-app-type-mismatch': SMP ALG App Type Mismatch;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#counters1 Cgnv6LsnAlgFtp#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnAlgFtpSamplingEnableToTerraform(struct?: Cgnv6LsnAlgFtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnAlgFtpSamplingEnableToHclTerraform(struct?: Cgnv6LsnAlgFtpSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6LsnAlgFtpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnAlgFtpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnAlgFtpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6LsnAlgFtpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnAlgFtpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnAlgFtpSamplingEnableOutputReference {
    return new Cgnv6LsnAlgFtpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp thunder_cgnv6_lsn_alg_ftp}
*/
export class Cgnv6LsnAlgFtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnAlgFtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnAlgFtp to import
  * @param importFromId The id of the existing Cgnv6LsnAlgFtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnAlgFtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_alg_ftp thunder_cgnv6_lsn_alg_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnAlgFtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnAlgFtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_ftp',
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
    this._ftpValue = config.ftpValue;
    this._id = config.id;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp_value - computed: false, optional: true, required: false
  private _ftpValue?: string; 
  public get ftpValue() {
    return this.getStringAttribute('ftp_value');
  }
  public set ftpValue(value: string) {
    this._ftpValue = value;
  }
  public resetFtpValue() {
    this._ftpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpValueInput() {
    return this._ftpValue;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnAlgFtpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnAlgFtpSamplingEnable[] | cdktf.IResolvable) {
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
      ftp_value: cdktf.stringToTerraform(this._ftpValue),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(cgnv6LsnAlgFtpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp_value: {
        value: cdktf.stringToHclTerraform(this._ftpValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6LsnAlgFtpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnAlgFtpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
