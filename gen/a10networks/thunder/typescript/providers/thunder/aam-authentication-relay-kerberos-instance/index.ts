// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationRelayKerberosInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#id AamAuthenticationRelayKerberosInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the kerberos account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#kerberos_account AamAuthenticationRelayKerberosInstance#kerberos_account}
  */
  readonly kerberosAccount?: string;
  /**
  * Specify the kerberos kdc ip or host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#kerberos_kdc AamAuthenticationRelayKerberosInstance#kerberos_kdc}
  */
  readonly kerberosKdc?: string;
  /**
  * Specify an authentication service group as multiple KDCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#kerberos_kdc_service_group AamAuthenticationRelayKerberosInstance#kerberos_kdc_service_group}
  */
  readonly kerberosKdcServiceGroup?: string;
  /**
  * Specify the kerberos realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#kerberos_realm AamAuthenticationRelayKerberosInstance#kerberos_realm}
  */
  readonly kerberosRealm?: string;
  /**
  * Specify Kerberos authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#name AamAuthenticationRelayKerberosInstance#name}
  */
  readonly name: string;
  /**
  * Specify password of Kerberos password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#password AamAuthenticationRelayKerberosInstance#password}
  */
  readonly password?: number;
  /**
  * Specify The KDC port, default is 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#port AamAuthenticationRelayKerberosInstance#port}
  */
  readonly port?: number;
  /**
  * The kerberos client password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#secret_string AamAuthenticationRelayKerberosInstance#secret_string}
  */
  readonly secretString?: string;
  /**
  * Specify timeout for kerberos transport, default is 10 seconds (The timeout, default is 10 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#timeout AamAuthenticationRelayKerberosInstance#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#uuid AamAuthenticationRelayKerberosInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#sampling_enable AamAuthenticationRelayKerberosInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationRelayKerberosInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationRelayKerberosInstanceSamplingEnable {
  /**
  * 'all': all; 'request-send': Request Send; 'response-receive': Response Receive; 'current-requests-of-user': Current Pending Requests of User; 'tickets': Tickets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#counters1 AamAuthenticationRelayKerberosInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationRelayKerberosInstanceSamplingEnableToTerraform(struct?: AamAuthenticationRelayKerberosInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationRelayKerberosInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationRelayKerberosInstanceSamplingEnable | cdktf.IResolvable): any {
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

export class AamAuthenticationRelayKerberosInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationRelayKerberosInstanceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationRelayKerberosInstanceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationRelayKerberosInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationRelayKerberosInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationRelayKerberosInstanceSamplingEnableOutputReference {
    return new AamAuthenticationRelayKerberosInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance thunder_aam_authentication_relay_kerberos_instance}
*/
export class AamAuthenticationRelayKerberosInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_kerberos_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationRelayKerberosInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationRelayKerberosInstance to import
  * @param importFromId The id of the existing AamAuthenticationRelayKerberosInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationRelayKerberosInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_kerberos_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_kerberos_instance thunder_aam_authentication_relay_kerberos_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationRelayKerberosInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationRelayKerberosInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_kerberos_instance',
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
    this._kerberosAccount = config.kerberosAccount;
    this._kerberosKdc = config.kerberosKdc;
    this._kerberosKdcServiceGroup = config.kerberosKdcServiceGroup;
    this._kerberosRealm = config.kerberosRealm;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._secretString = config.secretString;
    this._timeout = config.timeout;
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

  // kerberos_account - computed: false, optional: true, required: false
  private _kerberosAccount?: string; 
  public get kerberosAccount() {
    return this.getStringAttribute('kerberos_account');
  }
  public set kerberosAccount(value: string) {
    this._kerberosAccount = value;
  }
  public resetKerberosAccount() {
    this._kerberosAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAccountInput() {
    return this._kerberosAccount;
  }

  // kerberos_kdc - computed: false, optional: true, required: false
  private _kerberosKdc?: string; 
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }
  public set kerberosKdc(value: string) {
    this._kerberosKdc = value;
  }
  public resetKerberosKdc() {
    this._kerberosKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcInput() {
    return this._kerberosKdc;
  }

  // kerberos_kdc_service_group - computed: false, optional: true, required: false
  private _kerberosKdcServiceGroup?: string; 
  public get kerberosKdcServiceGroup() {
    return this.getStringAttribute('kerberos_kdc_service_group');
  }
  public set kerberosKdcServiceGroup(value: string) {
    this._kerberosKdcServiceGroup = value;
  }
  public resetKerberosKdcServiceGroup() {
    this._kerberosKdcServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcServiceGroupInput() {
    return this._kerberosKdcServiceGroup;
  }

  // kerberos_realm - computed: false, optional: true, required: false
  private _kerberosRealm?: string; 
  public get kerberosRealm() {
    return this.getStringAttribute('kerberos_realm');
  }
  public set kerberosRealm(value: string) {
    this._kerberosRealm = value;
  }
  public resetKerberosRealm() {
    this._kerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmInput() {
    return this._kerberosRealm;
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

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
  private _samplingEnable = new AamAuthenticationRelayKerberosInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationRelayKerberosInstanceSamplingEnable[] | cdktf.IResolvable) {
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
      kerberos_account: cdktf.stringToTerraform(this._kerberosAccount),
      kerberos_kdc: cdktf.stringToTerraform(this._kerberosKdc),
      kerberos_kdc_service_group: cdktf.stringToTerraform(this._kerberosKdcServiceGroup),
      kerberos_realm: cdktf.stringToTerraform(this._kerberosRealm),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.numberToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      secret_string: cdktf.stringToTerraform(this._secretString),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(aamAuthenticationRelayKerberosInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      kerberos_account: {
        value: cdktf.stringToHclTerraform(this._kerberosAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_kdc: {
        value: cdktf.stringToHclTerraform(this._kerberosKdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_kdc_service_group: {
        value: cdktf.stringToHclTerraform(this._kerberosKdcServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_realm: {
        value: cdktf.stringToHclTerraform(this._kerberosRealm),
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
      password: {
        value: cdktf.numberToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationRelayKerberosInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelayKerberosInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
