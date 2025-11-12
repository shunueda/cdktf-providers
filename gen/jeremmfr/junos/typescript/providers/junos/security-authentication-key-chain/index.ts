// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAuthenticationKeyChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of this authentication-key-chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#description SecurityAuthenticationKeyChain#description}
  */
  readonly description?: string;
  /**
  * Name of authentication key chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#name SecurityAuthenticationKeyChain#name}
  */
  readonly name: string;
  /**
  * Clock skew tolerance (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#tolerance SecurityAuthenticationKeyChain#tolerance}
  */
  readonly tolerance?: number;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#key SecurityAuthenticationKeyChain#key}
  */
  readonly key?: SecurityAuthenticationKeyChainKey[] | cdktf.IResolvable;
}
export interface SecurityAuthenticationKeyChainKey {
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#algorithm SecurityAuthenticationKeyChain#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Cryptographic algorithm for TCP-AO Traffic key and MAC digest generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#ao_cryptographic_algorithm SecurityAuthenticationKeyChain#ao_cryptographic_algorithm}
  */
  readonly aoCryptographicAlgorithm?: string;
  /**
  * Recv id for TCP-AO entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#ao_recv_id SecurityAuthenticationKeyChain#ao_recv_id}
  */
  readonly aoRecvId?: number;
  /**
  * Send id for TCP-AO entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#ao_send_id SecurityAuthenticationKeyChain#ao_send_id}
  */
  readonly aoSendId?: number;
  /**
  * Include TCP-AO option within message header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#ao_tcp_ao_option SecurityAuthenticationKeyChain#ao_tcp_ao_option}
  */
  readonly aoTcpAoOption?: string;
  /**
  * Authentication element identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#id SecurityAuthenticationKeyChain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Key name in hexadecimal format used for macsec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#key_name SecurityAuthenticationKeyChain#key_name}
  */
  readonly keyName?: string;
  /**
  * Protocol's transmission encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#options SecurityAuthenticationKeyChain#options}
  */
  readonly options?: string;
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#secret SecurityAuthenticationKeyChain#secret}
  */
  readonly secret: string;
  /**
  * Start time for key transmission (YYYY-MM-DD.HH:MM:SS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#start_time SecurityAuthenticationKeyChain#start_time}
  */
  readonly startTime: string;
}

export function securityAuthenticationKeyChainKeyToTerraform(struct?: SecurityAuthenticationKeyChainKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    ao_cryptographic_algorithm: cdktf.stringToTerraform(struct!.aoCryptographicAlgorithm),
    ao_recv_id: cdktf.numberToTerraform(struct!.aoRecvId),
    ao_send_id: cdktf.numberToTerraform(struct!.aoSendId),
    ao_tcp_ao_option: cdktf.stringToTerraform(struct!.aoTcpAoOption),
    id: cdktf.numberToTerraform(struct!.id),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    options: cdktf.stringToTerraform(struct!.options),
    secret: cdktf.stringToTerraform(struct!.secret),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function securityAuthenticationKeyChainKeyToHclTerraform(struct?: SecurityAuthenticationKeyChainKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ao_cryptographic_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.aoCryptographicAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ao_recv_id: {
      value: cdktf.numberToHclTerraform(struct!.aoRecvId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ao_send_id: {
      value: cdktf.numberToHclTerraform(struct!.aoSendId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ao_tcp_ao_option: {
      value: cdktf.stringToHclTerraform(struct!.aoTcpAoOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAuthenticationKeyChainKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityAuthenticationKeyChainKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._aoCryptographicAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoCryptographicAlgorithm = this._aoCryptographicAlgorithm;
    }
    if (this._aoRecvId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoRecvId = this._aoRecvId;
    }
    if (this._aoSendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoSendId = this._aoSendId;
    }
    if (this._aoTcpAoOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoTcpAoOption = this._aoTcpAoOption;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAuthenticationKeyChainKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._aoCryptographicAlgorithm = undefined;
      this._aoRecvId = undefined;
      this._aoSendId = undefined;
      this._aoTcpAoOption = undefined;
      this._id = undefined;
      this._keyName = undefined;
      this._options = undefined;
      this._secret = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._aoCryptographicAlgorithm = value.aoCryptographicAlgorithm;
      this._aoRecvId = value.aoRecvId;
      this._aoSendId = value.aoSendId;
      this._aoTcpAoOption = value.aoTcpAoOption;
      this._id = value.id;
      this._keyName = value.keyName;
      this._options = value.options;
      this._secret = value.secret;
      this._startTime = value.startTime;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // ao_cryptographic_algorithm - computed: false, optional: true, required: false
  private _aoCryptographicAlgorithm?: string; 
  public get aoCryptographicAlgorithm() {
    return this.getStringAttribute('ao_cryptographic_algorithm');
  }
  public set aoCryptographicAlgorithm(value: string) {
    this._aoCryptographicAlgorithm = value;
  }
  public resetAoCryptographicAlgorithm() {
    this._aoCryptographicAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoCryptographicAlgorithmInput() {
    return this._aoCryptographicAlgorithm;
  }

  // ao_recv_id - computed: false, optional: true, required: false
  private _aoRecvId?: number; 
  public get aoRecvId() {
    return this.getNumberAttribute('ao_recv_id');
  }
  public set aoRecvId(value: number) {
    this._aoRecvId = value;
  }
  public resetAoRecvId() {
    this._aoRecvId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoRecvIdInput() {
    return this._aoRecvId;
  }

  // ao_send_id - computed: false, optional: true, required: false
  private _aoSendId?: number; 
  public get aoSendId() {
    return this.getNumberAttribute('ao_send_id');
  }
  public set aoSendId(value: number) {
    this._aoSendId = value;
  }
  public resetAoSendId() {
    this._aoSendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoSendIdInput() {
    return this._aoSendId;
  }

  // ao_tcp_ao_option - computed: false, optional: true, required: false
  private _aoTcpAoOption?: string; 
  public get aoTcpAoOption() {
    return this.getStringAttribute('ao_tcp_ao_option');
  }
  public set aoTcpAoOption(value: string) {
    this._aoTcpAoOption = value;
  }
  public resetAoTcpAoOption() {
    this._aoTcpAoOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoTcpAoOptionInput() {
    return this._aoTcpAoOption;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class SecurityAuthenticationKeyChainKeyList extends cdktf.ComplexList {
  public internalValue? : SecurityAuthenticationKeyChainKey[] | cdktf.IResolvable

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
  public get(index: number): SecurityAuthenticationKeyChainKeyOutputReference {
    return new SecurityAuthenticationKeyChainKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain junos_security_authentication_key_chain}
*/
export class SecurityAuthenticationKeyChain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_authentication_key_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAuthenticationKeyChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAuthenticationKeyChain to import
  * @param importFromId The id of the existing SecurityAuthenticationKeyChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAuthenticationKeyChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_authentication_key_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_authentication_key_chain junos_security_authentication_key_chain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAuthenticationKeyChainConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAuthenticationKeyChainConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_authentication_key_chain',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._tolerance = config.tolerance;
    this._key.internalValue = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
  }

  // key - computed: false, optional: true, required: false
  private _key = new SecurityAuthenticationKeyChainKeyList(this, "key", true);
  public get key() {
    return this._key;
  }
  public putKey(value: SecurityAuthenticationKeyChainKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tolerance: cdktf.numberToTerraform(this._tolerance),
      key: cdktf.listMapper(securityAuthenticationKeyChainKeyToTerraform, true)(this._key.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      tolerance: {
        value: cdktf.numberToHclTerraform(this._tolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.listMapperHcl(securityAuthenticationKeyChainKeyToHclTerraform, true)(this._key.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityAuthenticationKeyChainKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
